/**
 * GESTOR DE ALMACENAMIENTO Y ESTADO PERSISTENTE (LOCALSTORAGE)
 * Permanencia FAS - Ejército de Tierra
 */

const STORAGE_KEYS = {
  QUESTIONS: "permanencia_questions_v1",
  FAILED_QUESTIONS: "permanencia_failed_v1",
  STATS: "permanencia_stats_v1",
  HISTORY: "permanencia_sim_history_v1",
  FLASHCARDS: "permanencia_flashcards_v1",
  LEARNED_FLASHCARDS: "permanencia_fc_learned_v1"
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
    this.init();
  }

  init() {
    // Si no existen preguntas en localStorage, guardar las iniciales
    if (!localStorage.getItem(STORAGE_KEYS.QUESTIONS)) {
      this.saveQuestions(DEFAULT_QUESTIONS);
    }
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

  // PREGUNTAS
  getQuestions() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      return data ? JSON.parse(data) : DEFAULT_QUESTIONS;
    } catch (e) {
      console.error("Error leyendo preguntas:", e);
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
        current.push({ ...q, id });
        addedCount++;
      }
    });

    this.saveQuestions(current);
    return addedCount;
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
  }

  recordFailedBagReview(questionId, wasCorrect) {
    const list = this.getFailedQuestions();
    const index = list.findIndex(item => item.id === questionId);

    if (index >= 0) {
      if (wasCorrect) {
        list[index].correctConsecutive = (list[index].correctConsecutive || 0) + 1;
        // Si se acierta 2 veces consecutivas, se retira de la bolsa de falladas
        if (list[index].correctConsecutive >= 2) {
          list.splice(index, 1);
        }
      } else {
        list[index].correctConsecutive = 0;
        list[index].attempts = (list[index].attempts || 1) + 1;
      }
      localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(list));
    }
  }

  removeFailedQuestion(questionId) {
    const list = this.getFailedQuestions().filter(item => item.id !== questionId);
    localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(list));
  }

  clearFailedQuestions() {
    localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify([]));
  }

  // ESTADÍSTICAS Y XP
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
  }

  addXP(amount, reason = "") {
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
    } else if (lastDate === today) {
      // Mismo día, no cambia la racha
    } else {
      const todayDate = new Date(today);
      const prevDate = new Date(lastDate);
      const diffDays = Math.round((todayDate - prevDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Días consecutivos
        stats.streakDays = (stats.streakDays || 1) + 1;
        stats.xp = (stats.xp || 0) + 40; // Bonus de racha
      } else if (diffDays > 1) {
        // Se rompió la racha
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
    // Conservar últimos 30 simulacros
    if (history.length > 30) history.pop();
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

    // Actualizar stats agregadas
    const stats = this.getStats();
    stats.simulatorsCompleted = (stats.simulatorsCompleted || 0) + 1;
    stats.totalAnswered = (stats.totalAnswered || 0) + result.total;
    stats.totalCorrect = (stats.totalCorrect || 0) + result.correct;
    stats.totalWrong = (stats.totalWrong || 0) + result.wrong;
    stats.totalBlank = (stats.totalBlank || 0) + result.blank;
    
    // XP otorgada por examen: base + por aciertos
    const earnedXP = Math.max(20, Math.round(result.correct * 5 - result.wrong * 1));
    stats.xp = (stats.xp || 0) + earnedXP;

    this.saveStats(stats);
    return earnedXP;
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
      this.addXP(15, "Flashcard dominada");
    }
    localStorage.setItem(STORAGE_KEYS.LEARNED_FLASHCARDS, JSON.stringify(list));
    return list.includes(cardId);
  }

  // BACKUP COMPLETO (EXPORTAR / IMPORTAR)
  exportFullBackup() {
    return {
      appName: "Permanencia FAS - WebApp",
      exportDate: new Date().toISOString(),
      version: "1.0",
      stats: this.getStats(),
      questions: this.getQuestions(),
      failedQuestions: this.getFailedQuestions(),
      simulatorHistory: this.getSimulatorHistory(),
      learnedFlashcards: this.getLearnedFlashcards()
    };
  }

  importFullBackup(backupData) {
    if (!backupData || typeof backupData !== "object") {
      throw new Error("El archivo de respaldo no es un objeto JSON válido.");
    }

    if (backupData.questions && Array.isArray(backupData.questions)) {
      this.saveQuestions(backupData.questions);
    }
    if (backupData.stats) {
      this.saveStats(backupData.stats);
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

    return true;
  }

  resetAllData() {
    localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
    localStorage.removeItem(STORAGE_KEYS.FAILED_QUESTIONS);
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.LEARNED_FLASHCARDS);
    this.init();
  }
}

// Instancia global del gestor de almacenamiento
window.storageManager = new StorageManager();
