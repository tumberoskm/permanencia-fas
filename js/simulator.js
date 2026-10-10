/**
 * MOTOR DE SIMULACRO OFICIAL MILITAR v4.0
 * Fórmula Oficial Permanencia FAS: Puntuación = Aciertos - (Errores / 3)
 * Soporta:
 * - Simulacro Oficial Ponderado 100 Preguntas (34% B1 + 40% B2 + 26% B3, 120 min)
 * - Modo Estudio Guiado / Academia (Corrección instantánea pregunta a pregunta)
 * - Simulacro por Bloques, Test por Tema, Caza-Trampas, Examen Oficial Real y Bolsa de Fallos.
 */

class SimulatorEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.answers = {};
    this.revealed = new Set(); // Índices cuya respuesta ya se ha comprobado en Modo Estudio
    this.flagged = new Set();
    this.mode = "official"; // "official" | "ponderado_100" | "trampas" | "examen_real" | "failed_bag" | "tema"
    this.studyMode = false; // Si true, corrige al instante tras seleccionar opción
    this.filterBloque = "ALL";
    this.filterTema = null;
    this.timerInterval = null;
    this.secondsRemaining = 0;
    this.secondsElapsed = 0;
    this.isFinished = false;
  }

  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  startSession({ count = 20, bloque = "ALL", mode = "official", temaCodigo = null, studyMode = false }) {
    this.mode = mode;
    this.studyMode = Boolean(studyMode);
    this.filterBloque = bloque;
    this.filterTema = temaCodigo;
    this.currentIndex = 0;
    this.answers = {};
    this.revealed = new Set();
    this.flagged = new Set();
    this.isFinished = false;
    this.secondsElapsed = 0;

    const allQuestions = window.storageManager.getQuestions();
    let selectedQuestions = [];

    if (mode === "ponderado_100") {
      // Reparto estadístico real del Examen Oficial de 100 preguntas: 34 B1 + 40 B2 + 26 B3
      const b1 = this.shuffleArray(allQuestions.filter(q => q.bloque === "Bloque 1: Organización")).slice(0, 34);
      const b2 = this.shuffleArray(allQuestions.filter(q => q.bloque === "Bloque 2: Jurídico-Social")).slice(0, 40);
      const b3 = this.shuffleArray(allQuestions.filter(q => q.bloque === "Bloque 3: Seguridad Nacional")).slice(0, 26);
      selectedQuestions = [...b1, ...b2, ...b3];
      // Si el banco tuviera menos de 100 por algún motivo, rellenar con las restantes
      if (selectedQuestions.length < 100) {
        const usedIds = new Set(selectedQuestions.map(q => q.id));
        const rest = this.shuffleArray(allQuestions.filter(q => !usedIds.has(q.id)));
        selectedQuestions.push(...rest.slice(0, 100 - selectedQuestions.length));
      }
    } else {
      let pool = [];
      if (mode === "failed_bag") {
        const failedItems = window.storageManager.getFailedQuestions();
        const failedIds = new Set(failedItems.map(f => f.id));
        pool = allQuestions.filter(q => failedIds.has(q.id));
      } else if (mode === "trampas") {
        pool = allQuestions.filter(q => q.dificultad === "trampa");
      } else if (mode === "examen_real") {
        pool = allQuestions.filter(q => q.esExamenOficial === true);
      } else if (temaCodigo) {
        pool = allQuestions.filter(q => q.temaCodigo === temaCodigo);
      } else if (bloque !== "ALL") {
        pool = allQuestions.filter(q => q.bloque === bloque);
      } else {
        pool = [...allQuestions];
      }

      if (pool.length === 0) {
        return {
          ok: false,
          message: mode === "failed_bag"
            ? "¡Enhorabuena! No tienes preguntas pendientes en la bolsa de falladas."
            : "No hay preguntas disponibles para este filtro todavía."
        };
      }

      const shuffled = this.shuffleArray(pool);
      const selectedCount = Math.min(count, shuffled.length);
      selectedQuestions = shuffled.slice(0, selectedCount);
    }

    this.questions = selectedQuestions;

    for (let i = 0; i < this.questions.length; i++) {
      this.answers[i] = null;
    }

    // Examen oficial de 100 preguntas = 120 minutos (7200s); resto = 1.2 min por pregunta
    this.secondsRemaining = mode === "ponderado_100"
      ? 120 * 60
      : Math.round(this.questions.length * 72);
    this.startTimer();

    return {
      ok: true,
      total: this.questions.length
    };
  }

  startTimer() {
    this.stopTimer();
    const timerDisplay = document.getElementById("sim-timer-display");

    this.timerInterval = setInterval(() => {
      if (this.isFinished) {
        this.stopTimer();
        return;
      }

      this.secondsElapsed++;
      if (this.secondsRemaining > 0) {
        this.secondsRemaining--;
      } else {
        this.stopTimer();
        if (window.appController) {
          window.appController.finishSimulator(true);
        }
        return;
      }

      if (timerDisplay) {
        timerDisplay.textContent = this.formatTime(this.secondsRemaining);
        if (this.secondsRemaining < 60) {
          timerDisplay.classList.add("text-red-400", "animate-pulse");
        } else {
          timerDisplay.classList.remove("text-red-400", "animate-pulse");
        }
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex] || null;
  }

  selectOption(optionIdx) {
    if (this.isFinished) return;
    this.answers[this.currentIndex] = optionIdx;
    if (this.studyMode) {
      this.revealed.add(this.currentIndex);
    }
  }

  leaveBlank() {
    if (this.isFinished) return;
    this.answers[this.currentIndex] = null;
    this.revealed.delete(this.currentIndex);
  }

  toggleStudyMode() {
    this.studyMode = !this.studyMode;
    if (this.studyMode && this.answers[this.currentIndex] !== null && this.answers[this.currentIndex] !== undefined) {
      this.revealed.add(this.currentIndex);
    }
    return this.studyMode;
  }

  revealCurrentQuestion() {
    this.revealed.add(this.currentIndex);
  }

  isCurrentRevealed() {
    return this.revealed.has(this.currentIndex);
  }

  toggleFlag() {
    if (this.flagged.has(this.currentIndex)) {
      this.flagged.delete(this.currentIndex);
    } else {
      this.flagged.add(this.currentIndex);
    }
    return this.flagged.has(this.currentIndex);
  }

  evaluateExam() {
    this.isFinished = true;
    this.stopTimer();

    let correct = 0;
    let wrong = 0;
    let blank = 0;
    const byBloque = {
      "Bloque 1: Organización": { total: 0, correct: 0, wrong: 0, blank: 0 },
      "Bloque 2: Jurídico-Social": { total: 0, correct: 0, wrong: 0, blank: 0 },
      "Bloque 3: Seguridad Nacional": { total: 0, correct: 0, wrong: 0, blank: 0 }
    };

    const details = this.questions.map((q, idx) => {
      const userAnswer = this.answers[idx];
      const isBlank = userAnswer === null || userAnswer === undefined;
      const isCorrect = !isBlank && userAnswer === q.correcta;

      if (!byBloque[q.bloque]) {
        byBloque[q.bloque] = { total: 0, correct: 0, wrong: 0, blank: 0 };
      }
      byBloque[q.bloque].total++;

      window.storageManager.recordQuestionOutcome(q, isCorrect, isBlank);

      if (isBlank) {
        blank++;
        byBloque[q.bloque].blank++;
      } else if (isCorrect) {
        correct++;
        byBloque[q.bloque].correct++;
        if (this.mode === "failed_bag") {
          window.storageManager.recordFailedBagReview(q.id, true);
        }
      } else {
        wrong++;
        byBloque[q.bloque].wrong++;
        window.storageManager.addFailedQuestion(q.id, userAnswer);
      }

      return {
        question: q,
        userAnswer,
        isBlank,
        isCorrect
      };
    });

    const total = this.questions.length;
    const rawScore = Math.max(0, correct - (wrong / 3));
    const penaltyPoints = wrong / 3;
    const scoreOutOf10 = total > 0 ? Math.max(0, (rawScore / total) * 10) : 0;
    const scoreOutOf100 = total > 0 ? Math.max(0, (rawScore / total) * 100) : 0;
    const passed = scoreOutOf10 >= 5.0;

    const summary = {
      total,
      correct,
      wrong,
      blank,
      penaltyPoints: Number(penaltyPoints.toFixed(2)),
      rawScore: Number(rawScore.toFixed(2)),
      scoreOutOf10: Number(scoreOutOf10.toFixed(2)),
      scoreOutOf100: Number(scoreOutOf100.toFixed(2)),
      passed,
      bloqueFilter: this.filterBloque,
      mode: this.mode,
      timeSpentSeconds: this.secondsElapsed,
      timeFormatted: this.formatTime(this.secondsElapsed),
      byBloque,
      details
    };

    const earnedXP = window.storageManager.saveSimulatorResult({
      total: summary.total,
      correct: summary.correct,
      wrong: summary.wrong,
      blank: summary.blank,
      rawScore: summary.rawScore,
      scoreOutOf10: summary.scoreOutOf10,
      passed: summary.passed,
      bloque: summary.bloqueFilter,
      mode: summary.mode,
      timeFormatted: summary.timeFormatted
    });

    summary.earnedXP = earnedXP;
    return summary;
  }
}

window.simulatorEngine = new SimulatorEngine();
