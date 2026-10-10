/**
 * MOTOR DE SIMULACRO OFICIAL MILITAR
 * Fórmula Oficial Permanencia FAS: Puntuación = Aciertos - (Errores / 3)
 * Las respuestas en blanco no penalizan (0 puntos).
 */

class SimulatorEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.answers = {}; // { index: optionIndex (0..3) | null (blanco) }
    this.flagged = new Set(); // Índices marcados con bandera de duda
    this.mode = "official"; // "official" | "tutor" | "failed_bag"
    this.filterBloque = "ALL";
    this.timerInterval = null;
    this.secondsRemaining = 0;
    this.secondsElapsed = 0;
    this.isFinished = false;
  }

  /**
   * Inicia una nueva sesión de simulacro o test por bloques
   */
  startSession({ count = 20, bloque = "ALL", mode = "official" }) {
    this.mode = mode;
    this.filterBloque = bloque;
    this.currentIndex = 0;
    this.answers = {};
    this.flagged = new Set();
    this.isFinished = false;
    this.secondsElapsed = 0;

    const allQuestions = window.storageManager.getQuestions();
    let pool = [];

    if (mode === "failed_bag") {
      const failedItems = window.storageManager.getFailedQuestions();
      const failedIds = new Set(failedItems.map(f => f.id));
      pool = allQuestions.filter(q => failedIds.has(q.id));
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
          : "No hay preguntas disponibles para este bloque."
      };
    }

    // Mezclar aleatoriamente (Fisher-Yates)
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selectedCount = Math.min(count, shuffled.length);
    this.questions = shuffled.slice(0, selectedCount);

    // Inicializar todas las respuestas como null (en blanco)
    for (let i = 0; i < this.questions.length; i++) {
      this.answers[i] = null;
    }

    // Configurar temporizador (1 minuto por pregunta en modo oficial, o 90 seg)
    this.secondsRemaining = this.questions.length * 60;
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
      } else if (this.mode === "official") {
        // Tiempo agotado en simulacro oficial
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
  }

  leaveBlank() {
    if (this.isFinished) return;
    this.answers[this.currentIndex] = null;
  }

  toggleFlag() {
    if (this.flagged.has(this.currentIndex)) {
      this.flagged.delete(this.currentIndex);
    } else {
      this.flagged.add(this.currentIndex);
    }
    return this.flagged.has(this.currentIndex);
  }

  /**
   * Calcula el resultado aplicando la FÓRMULA OFICIAL MILITAR:
   * Puntuación Directa = Aciertos - (Errores / 3)
   */
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
        // Registrar automáticamente en la bolsa de preguntas falladas
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
    // FÓRMULA OFICIAL: Aciertos - (Errores / 3)
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
