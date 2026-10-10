/**
 * GESTOR DE ALMACENAMIENTO Y ESTADO PERSISTENTE (LOCALSTORAGE + CLOUD SYNC READY)
 * Permanencia FAS - Ejército de Tierra
 */

const STORAGE_KEYS = {
  QUESTIONS: "permanencia_questions_v9",
  FAILED_QUESTIONS: "permanencia_failed_v1",
  STATS: "permanencia_stats_v1",
  TOPIC_STATS: "permanencia_topic_stats_v1",
  HISTORY: "permanencia_sim_history_v1",
  FLASHCARDS: "permanencia_flashcards_v1",
  LEARNED_FLASHCARDS: "permanencia_fc_learned_v1",
  READ_TOPICS: "permanencia_read_topics_v1",
  TOPIC_NOTES: "permanencia_topic_notes_v1",
  TOPIC_HIGHLIGHTS: "permanencia_topic_highlights_v1",
  PACK_SCORES: "permanencia_pack_scores_v1",
  BAREMO: "permanencia_baremo_v1",
  SURVIVAL_RECORD: "permanencia_survival_record_v1"
};

const RANKS = [
  { minXP: 0, title: "Soldado", badge: "🎖️", sub: "Aspirante a la Permanencia" },
  { minXP: 300, title: "Soldado de 1ª", badge: "🎗️", sub: "Tropa de Primera Clase" },
  { minXP: 800, title: "Cabo", badge: "🎖️🎖️", sub: "Escalón Táctico Superado" },
  { minXP: 1800, title: "Cabo 1º", badge: "⭐", sub: "Veterano con CLD" },
  { minXP: 3500, title: "Cabo Mayor", badge: "⭐⭐", sub: "Nivel Excelente Pre-Examen" },
  { minXP: 6000, title: "Permanente de Carrera", badge: "👑", sub: "Militar de Carrera Acreditado" }
];

class StorageManager {
  constructor() {
    this._suppressCloudTrigger = false;
    this.init();
  }

  _notifyCloudSync(reason = "change") {
    if (this._suppressCloudTrigger) return;
    if (typeof window !== "undefined" && window.cloudSyncManager && typeof window.cloudSyncManager.notifyDataChanged === "function") {
      window.cloudSyncManager.notifyDataChanged(reason);
    }
  }

  init() {
    // Sincronizar preguntas base con cualquier pregunta personalizada guardada
    this.syncDefaultQuestions();

    // Inicializar estadísticas si no existen
    if (!localStorage.getItem(STORAGE_KEYS.STATS)) {
      const initialStats = {
        xp: 150,
        streakDays: 1,
        lastActiveDate: new Date().toISOString().split("T")[0],
        totalAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        totalBlank: 0,
        simulatorsCompleted: 0
      };
      this.saveStats(initialStats);
    } else {
      this.updateDailyStreak();
    }
  }

  syncDefaultQuestions() {
    try {
      const storedRaw =
        localStorage.getItem(STORAGE_KEYS.QUESTIONS) ||
        localStorage.getItem("permanencia_questions_v8") ||
        localStorage.getItem("permanencia_questions_v7") ||
        localStorage.getItem("permanencia_questions_v6") ||
        localStorage.getItem("permanencia_questions_v5") ||
        localStorage.getItem("permanencia_questions_v4") ||
        localStorage.getItem("permanencia_questions_v3") ||
        localStorage.getItem("permanencia_questions_v2");
      const customQuestions = storedRaw
        ? JSON.parse(storedRaw).filter(q => String(q.id).startsWith("CUSTOM-"))
        : [];
      const merged = [...DEFAULT_QUESTIONS, ...customQuestions];
      this.saveQuestions(merged);
    } catch (e) {
      this.saveQuestions(DEFAULT_QUESTIONS);
    }
  }

  // PREGUNTAS
  getQuestions() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      return data ? JSON.parse(data) : DEFAULT_QUESTIONS;
    } catch (e) {
      return DEFAULT_QUESTIONS;
    }
  }

  saveQuestions(questions) {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }

  addCustomQuestions(newQuestions) {
    const current = this.getQuestions();
    const existingIds = new Set(current.map(q => q.id));
    let addedCount = 0;

    newQuestions.forEach((q, idx) => {
      const id = q.id || `CUSTOM-${Date.now()}-${idx}`;
      if (!existingIds.has(id)) {
        current.push({
          ...q,
          id,
          temaCodigo: q.temaCodigo || "B1-T01",
          dificultad: q.dificultad || "media",
          esExamenOficial: Boolean(q.esExamenOficial)
        });
        addedCount++;
      }
    });

    this.saveQuestions(current);
    return addedCount;
  }

  // ESTADÍSTICAS POR TEMA (MAPA DE CALOR Y DEBILIDADES)
  getTopicStats() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TOPIC_STATS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  recordQuestionOutcome(question, isCorrect, isBlank) {
    if (isBlank) return;
    const key = question.temaCodigo || question.bloque;
    const topicStats = this.getTopicStats();
    if (!topicStats[key]) {
      topicStats[key] = { correct: 0, wrong: 0 };
    }
    if (isCorrect) {
      topicStats[key].correct++;
    } else {
      topicStats[key].wrong++;
    }
    localStorage.setItem(STORAGE_KEYS.TOPIC_STATS, JSON.stringify(topicStats));
    this._notifyCloudSync("topic_stats");
  }

  // BOLSA DE PREGUNTAS FALLADAS
  getFailedQuestions() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAILED_QUESTIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  addFailedQuestion(questionId, userSelectedOption) {
    const list = this.getFailedQuestions();
    const existingIndex = list.findIndex(item => item.id === questionId);

    if (existingIndex >= 0) {
      list[existingIndex].attempts = (list[existingIndex].attempts || 1) + 1;
      list[existingIndex].lastFailedDate = new Date().toISOString();
      list[existingIndex].lastSelected = userSelectedOption;
    } else {
      list.push({
        id: questionId,
        attempts: 1,
        correctConsecutive: 0,
        addedDate: new Date().toISOString(),
        lastSelected: userSelectedOption
      });
    }
    localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(list));
    this._notifyCloudSync("failed_bag");
  }

  recordFailedBagReview(questionId, wasCorrect) {
    const list = this.getFailedQuestions();
    const index = list.findIndex(item => item.id === questionId);

    if (index >= 0) {
      if (wasCorrect) {
        list[index].correctConsecutive = (list[index].correctConsecutive || 0) + 1;
        if (list[index].correctConsecutive >= 2) {
          list.splice(index, 1);
        }
      } else {
        list[index].correctConsecutive = 0;
        list[index].attempts = (list[index].attempts || 1) + 1;
      }
      localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(list));
      this._notifyCloudSync("failed_bag");
    }
  }

  removeFailedQuestion(questionId) {
    const list = this.getFailedQuestions().filter(item => item.id !== questionId);
    localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(list));
    this._notifyCloudSync("failed_bag");
  }

  clearFailedQuestions() {
    localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify([]));
    this._notifyCloudSync("failed_bag");
  }

  // ESTADÍSTICAS GLOBALES Y XP
  getStats() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STATS);
      return data ? JSON.parse(data) : { xp: 0, streakDays: 1 };
    } catch (e) {
      return { xp: 0, streakDays: 1 };
    }
  }

  saveStats(stats) {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    this._notifyCloudSync("stats");
  }

  addXP(amount) {
    const stats = this.getStats();
    stats.xp = (stats.xp || 0) + amount;
    this.saveStats(stats);
    return stats.xp;
  }

  updateDailyStreak() {
    const stats = this.getStats();
    const today = new Date().toISOString().split("T")[0];
    const lastDate = stats.lastActiveDate;

    if (!lastDate) {
      stats.lastActiveDate = today;
      stats.streakDays = 1;
    } else if (lastDate !== today) {
      const todayDate = new Date(today);
      const prevDate = new Date(lastDate);
      const diffDays = Math.round((todayDate - prevDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        stats.streakDays = (stats.streakDays || 1) + 1;
        stats.xp = (stats.xp || 0) + 40;
      } else if (diffDays > 1) {
        stats.streakDays = 1;
      }
      stats.lastActiveDate = today;
    }
    this.saveStats(stats);
  }

  getMilitaryRank(xp) {
    let currentRank = RANKS[0];
    let nextRank = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
      if (xp >= RANKS[i].minXP) {
        currentRank = RANKS[i];
        nextRank = RANKS[i + 1] || null;
      }
    }

    let progressPercent = 100;
    if (nextRank) {
      const xpInTier = xp - currentRank.minXP;
      const tierRange = nextRank.minXP - currentRank.minXP;
      progressPercent = Math.min(100, Math.max(0, Math.round((xpInTier / tierRange) * 100)));
    }

    return {
      current: currentRank,
      next: nextRank,
      progressPercent
    };
  }

  // HISTORIAL DE SIMULACROS
  getSimulatorHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveSimulatorResult(result) {
    const history = this.getSimulatorHistory();
    history.unshift({
      ...result,
      id: `SIM-${Date.now()}`,
      date: new Date().toISOString()
    });
    if (history.length > 30) history.pop();
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

    // Si pertenece a un Simulacro Oficial Cerrado (packId), guardar mejor récord
    if (result.packId) {
      const packScores = this.getPackScores();
      const prev = packScores[result.packId];
      const attempts = (prev ? prev.attempts || 0 : 0) + 1;
      const isBetter = !prev || Number(result.scoreOutOf10) >= Number(prev.bestScoreOutOf10 || 0);
      packScores[result.packId] = {
        bestScoreOutOf10: isBetter ? result.scoreOutOf10 : prev.bestScoreOutOf10,
        bestRawScore: isBetter ? result.rawScore : prev.bestRawScore,
        passed: Boolean((prev && prev.passed) || result.passed),
        attempts,
        lastScoreOutOf10: result.scoreOutOf10,
        lastDate: new Date().toISOString(),
        timeFormatted: isBetter ? result.timeFormatted : (prev.timeFormatted || result.timeFormatted)
      };
      localStorage.setItem(STORAGE_KEYS.PACK_SCORES, JSON.stringify(packScores));
    }

    const stats = this.getStats();
    stats.simulatorsCompleted = (stats.simulatorsCompleted || 0) + 1;
    stats.totalAnswered = (stats.totalAnswered || 0) + result.total;
    stats.totalCorrect = (stats.totalCorrect || 0) + result.correct;
    stats.totalWrong = (stats.totalWrong || 0) + result.wrong;
    stats.totalBlank = (stats.totalBlank || 0) + result.blank;

    const earnedXP = Math.max(20, Math.round(result.correct * 5 - result.wrong * 1));
    stats.xp = (stats.xp || 0) + earnedXP;

    this.saveStats(stats);
    this._notifyCloudSync("simulator");
    return earnedXP;
  }

  getPackScores() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PACK_SCORES);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // FLASHCARDS
  getLearnedFlashcards() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LEARNED_FLASHCARDS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  toggleFlashcardLearned(cardId) {
    let list = this.getLearnedFlashcards();
    if (list.includes(cardId)) {
      list = list.filter(id => id !== cardId);
    } else {
      list.push(cardId);
      this.addXP(15);
    }
    localStorage.setItem(STORAGE_KEYS.LEARNED_FLASHCARDS, JSON.stringify(list));
    this._notifyCloudSync("flashcards");
    return list.includes(cardId);
  }

  // PROGRESO DE LECTURA DEL TEMARIO (PASO 1: RESUMEN MAGISTRAL LEÍDO)
  getReadTopics() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.READ_TOPICS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  isTopicRead(temaCodigo) {
    return this.getReadTopics().includes(temaCodigo);
  }

  toggleTopicRead(temaCodigo) {
    let list = this.getReadTopics();
    if (list.includes(temaCodigo)) {
      list = list.filter(code => code !== temaCodigo);
    } else {
      list.push(temaCodigo);
      this.addXP(25);
    }
    localStorage.setItem(STORAGE_KEYS.READ_TOPICS, JSON.stringify(list));
    this._notifyCloudSync("read_topics");
    return list.includes(temaCodigo);
  }

  // NOTAS DE ESTUDIO TIPO "POST-IT" POR TEMA
  getAllTopicNotes() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TOPIC_NOTES);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  getTopicNotes(temaCodigo) {
    const all = this.getAllTopicNotes();
    return Array.isArray(all[temaCodigo]) ? all[temaCodigo] : [];
  }

  addTopicNote(temaCodigo, { color = "yellow", tag = "📌 Nota Clave", titulo = "", texto = "" }) {
    if (!temaCodigo || !texto || !texto.trim()) return null;
    const all = this.getAllTopicNotes();
    if (!Array.isArray(all[temaCodigo])) {
      all[temaCodigo] = [];
    }
    const newNote = {
      id: `NOTE-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      temaCodigo,
      color,
      tag,
      titulo: (titulo || "").trim(),
      texto: texto.trim(),
      fecha: new Date().toISOString()
    };
    all[temaCodigo].unshift(newNote);
    localStorage.setItem(STORAGE_KEYS.TOPIC_NOTES, JSON.stringify(all));
    this.addXP(10);
    this._notifyCloudSync("notes");
    return newNote;
  }

  deleteTopicNote(temaCodigo, noteId) {
    const all = this.getAllTopicNotes();
    if (!Array.isArray(all[temaCodigo])) return false;
    all[temaCodigo] = all[temaCodigo].filter(n => n.id !== noteId);
    localStorage.setItem(STORAGE_KEYS.TOPIC_NOTES, JSON.stringify(all));
    this._notifyCloudSync("notes");
    return true;
  }

  // SUBRAYADO FLUORESCENTE PERSONAL POR TEMA
  getAllTopicHighlights() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TOPIC_HIGHLIGHTS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  getTopicHighlights(temaCodigo) {
    const all = this.getAllTopicHighlights();
    const current = all[temaCodigo];
    if (!current || typeof current !== "object") {
      return { items: {}, phrases: [] };
    }
    return {
      items: current.items && typeof current.items === "object" ? current.items : {},
      phrases: Array.isArray(current.phrases) ? current.phrases : []
    };
  }

  setPointHighlight(temaCodigo, itemKey, color) {
    if (!temaCodigo || !itemKey) return;
    const all = this.getAllTopicHighlights();
    const current = this.getTopicHighlights(temaCodigo);
    if (!color || current.items[itemKey] === color) {
      delete current.items[itemKey];
    } else {
      current.items[itemKey] = color;
    }
    all[temaCodigo] = current;
    localStorage.setItem(STORAGE_KEYS.TOPIC_HIGHLIGHTS, JSON.stringify(all));
    this._notifyCloudSync("highlights");
    return current;
  }

  addPhraseHighlight(temaCodigo, text, color = "yellow") {
    const clean = (text || "").trim();
    if (!temaCodigo || clean.length < 3) return null;
    const all = this.getAllTopicHighlights();
    const current = this.getTopicHighlights(temaCodigo);
    const existingIdx = current.phrases.findIndex(p => p.text.toLowerCase() === clean.toLowerCase());
    if (existingIdx >= 0) {
      current.phrases[existingIdx].color = color;
    } else {
      current.phrases.push({ text: clean, color, fecha: new Date().toISOString() });
      this.addXP(5);
    }
    all[temaCodigo] = current;
    localStorage.setItem(STORAGE_KEYS.TOPIC_HIGHLIGHTS, JSON.stringify(all));
    this._notifyCloudSync("highlights");
    return current;
  }

  removePhraseHighlight(temaCodigo, text) {
    const all = this.getAllTopicHighlights();
    const current = this.getTopicHighlights(temaCodigo);
    current.phrases = current.phrases.filter(p => p.text !== text);
    all[temaCodigo] = current;
    localStorage.setItem(STORAGE_KEYS.TOPIC_HIGHLIGHTS, JSON.stringify(all));
    this._notifyCloudSync("highlights");
    return current;
  }

  clearTopicHighlights(temaCodigo) {
    const all = this.getAllTopicHighlights();
    delete all[temaCodigo];
    localStorage.setItem(STORAGE_KEYS.TOPIC_HIGHLIGHTS, JSON.stringify(all));
    this._notifyCloudSync("highlights");
  }

  hasTopicAnnotations(temaCodigo) {
    const notes = this.getTopicNotes(temaCodigo);
    const hl = this.getTopicHighlights(temaCodigo);
    return notes.length > 0 || Object.keys(hl.items).length > 0 || hl.phrases.length > 0;
  }

  // BAREMO DE CONCURSO Y SIMULADOR DE PLAZA
  getBaremo() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BAREMO);
      const defaults = {
        mesesPreferente: 60,
        mesesOtras: 48,
        mesesMision: 6,
        empleo: 2, // Cabo = 2
        recompensasPuntos: 1.5,
        titulacionPuntos: 2, // Bachiller/Equivalente = 2
        inglesPuntos: 0,
        otroIdiomaPuntos: 0,
        cursosEspecializacion: 0,
        cursosInformativos: 1,
        ipecMedia: 7.8,
        fisicasPuntos: 12.5,
        ejercitoCorte: 130.5
      };
      return data ? { ...defaults, ...JSON.parse(data) } : defaults;
    } catch (e) {
      return {
        mesesPreferente: 60,
        mesesOtras: 48,
        mesesMision: 6,
        empleo: 2,
        recompensasPuntos: 1.5,
        titulacionPuntos: 2,
        inglesPuntos: 0,
        otroIdiomaPuntos: 0,
        cursosEspecializacion: 0,
        cursosInformativos: 1,
        ipecMedia: 7.8,
        fisicasPuntos: 12.5,
        ejercitoCorte: 130.5
      };
    }
  }

  saveBaremo(baremoData) {
    const merged = { ...this.getBaremo(), ...baremoData };
    localStorage.setItem(STORAGE_KEYS.BAREMO, JSON.stringify(merged));
    this._notifyCloudSync("baremo");
    return merged;
  }

  // RÉCORD MODO SUPERVIVENCIA (3 VIDAS)
  getSurvivalRecord() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SURVIVAL_RECORD);
      return raw ? JSON.parse(raw) : { bestStreak: 0, gamesPlayed: 0 };
    } catch (e) {
      return { bestStreak: 0, gamesPlayed: 0 };
    }
  }

  saveSurvivalRecord(streak) {
    const rec = this.getSurvivalRecord();
    rec.gamesPlayed = (rec.gamesPlayed || 0) + 1;
    if (streak > (rec.bestStreak || 0)) {
      rec.bestStreak = streak;
    }
    rec.lastDate = new Date().toISOString();
    localStorage.setItem(STORAGE_KEYS.SURVIVAL_RECORD, JSON.stringify(rec));
    this._notifyCloudSync("survival");
    return rec;
  }

  // BACKUP COMPLETO
  exportFullBackup() {
    return {
      appName: "Permanencia FAS - WebApp",
      exportDate: new Date().toISOString(),
      version: "9.0",
      stats: this.getStats(),
      topicStats: this.getTopicStats(),
      questions: this.getQuestions().filter(q => String(q.id).startsWith("CUSTOM-")),
      failedQuestions: this.getFailedQuestions(),
      simulatorHistory: this.getSimulatorHistory(),
      learnedFlashcards: this.getLearnedFlashcards(),
      readTopics: this.getReadTopics(),
      topicNotes: this.getAllTopicNotes(),
      topicHighlights: this.getAllTopicHighlights(),
      packScores: this.getPackScores(),
      baremo: this.getBaremo(),
      survivalRecord: this.getSurvivalRecord()
    };
  }

  importFullBackup(backupData, options = {}) {
    if (typeof backupData === "string") {
      backupData = JSON.parse(backupData);
    }
    if (!backupData || typeof backupData !== "object") {
      throw new Error("El archivo de respaldo no es un objeto JSON válido.");
    }
    const prevSuppress = this._suppressCloudTrigger;
    if (options && options.skipCloudTrigger) {
      this._suppressCloudTrigger = true;
    }
    try {
      if (backupData.questions && Array.isArray(backupData.questions)) {
        const customQuestions = backupData.questions.filter(q => String(q.id).startsWith("CUSTOM-"));
        this.saveQuestions([...DEFAULT_QUESTIONS, ...customQuestions]);
      }
      if (backupData.stats) {
        this.saveStats(backupData.stats);
      }
      if (backupData.topicStats) {
        localStorage.setItem(STORAGE_KEYS.TOPIC_STATS, JSON.stringify(backupData.topicStats));
      }
      if (backupData.failedQuestions && Array.isArray(backupData.failedQuestions)) {
        localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(backupData.failedQuestions));
      }
      if (backupData.simulatorHistory && Array.isArray(backupData.simulatorHistory)) {
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(backupData.simulatorHistory));
      }
      if (backupData.learnedFlashcards && Array.isArray(backupData.learnedFlashcards)) {
        localStorage.setItem(STORAGE_KEYS.LEARNED_FLASHCARDS, JSON.stringify(backupData.learnedFlashcards));
      }
      if (backupData.readTopics && Array.isArray(backupData.readTopics)) {
        localStorage.setItem(STORAGE_KEYS.READ_TOPICS, JSON.stringify(backupData.readTopics));
      }
      if (backupData.topicNotes && typeof backupData.topicNotes === "object") {
        localStorage.setItem(STORAGE_KEYS.TOPIC_NOTES, JSON.stringify(backupData.topicNotes));
      }
      if (backupData.topicHighlights && typeof backupData.topicHighlights === "object") {
        localStorage.setItem(STORAGE_KEYS.TOPIC_HIGHLIGHTS, JSON.stringify(backupData.topicHighlights));
      }
      if (backupData.packScores && typeof backupData.packScores === "object") {
        localStorage.setItem(STORAGE_KEYS.PACK_SCORES, JSON.stringify(backupData.packScores));
      }
      if (backupData.baremo && typeof backupData.baremo === "object") {
        this.saveBaremo(backupData.baremo);
      }
      if (backupData.survivalRecord && typeof backupData.survivalRecord === "object") {
        localStorage.setItem(STORAGE_KEYS.SURVIVAL_RECORD, JSON.stringify(backupData.survivalRecord));
      }
    } finally {
      this._suppressCloudTrigger = prevSuppress;
    }
    if (!options || !options.skipCloudTrigger) {
      this._notifyCloudSync("import");
    }
    return true;
  }

  resetAllData() {
    Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
    this.init();
  }
}

window.storageManager = new StorageManager();
