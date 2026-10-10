/**
 * CONTROLADOR PRINCIPAL DE LA SPA (SINGLE PAGE APPLICATION)
 * Permanencia FAS - Ejército de Tierra
 */

class AppController {
  constructor() {
    this.currentTab = "dashboard";
    this.fcIndex = 0;
    this.fcList = [];
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateHeaderStats();
    this.showTab("dashboard");
  }

  bindEvents() {
    // Navegación principal (tabs)
    document.querySelectorAll("[data-tab]").forEach(btn => {
      btn.addEventListener("click", e => {
        const tab = e.currentTarget.getAttribute("data-tab");
        this.showTab(tab);
      });
    });

    // Delegación para botones de acción rápida en el dashboard
    const startQuickSimBtn = document.getElementById("btn-quick-sim");
    if (startQuickSimBtn) {
      startQuickSimBtn.addEventListener("click", () => {
        this.startSimulatorWithParams({ count: 20, bloque: "ALL", mode: "official" });
      });
    }

    const startFullSimBtn = document.getElementById("btn-full-sim");
    if (startFullSimBtn) {
      startFullSimBtn.addEventListener("click", () => {
        this.startSimulatorWithParams({ count: 50, bloque: "ALL", mode: "official" });
      });
    }

    // Modal de confirmación o finalización
    const confirmFinishBtn = document.getElementById("btn-finish-sim-modal");
    if (confirmFinishBtn) {
      confirmFinishBtn.addEventListener("click", () => {
        this.finishSimulator();
      });
    }
  }

  updateHeaderStats() {
    const stats = window.storageManager.getStats();
    const rankInfo = window.storageManager.getMilitaryRank(stats.xp || 0);

    // Actualizar elementos en el header
    const xpEl = document.getElementById("header-xp");
    const streakEl = document.getElementById("header-streak");
    const rankBadgeEl = document.getElementById("header-rank-badge");
    const rankTitleEl = document.getElementById("header-rank-title");

    if (xpEl) xpEl.textContent = `${stats.xp || 0} XP`;
    if (streakEl) streakEl.textContent = `${stats.streakDays || 1}d`;
    if (rankBadgeEl) rankBadgeEl.textContent = rankInfo.current.badge;
    if (rankTitleEl) rankTitleEl.textContent = rankInfo.current.title;
  }

  showTab(tabName) {
    this.currentTab = tabName;

    // Actualizar clases activas en botones de navegación
    document.querySelectorAll("[data-tab]").forEach(btn => {
      const active = btn.getAttribute("data-tab") === tabName;
      if (active) {
        btn.classList.add("active", "border-amber-500", "text-amber-400");
        btn.classList.remove("border-transparent", "text-slate-400");
      } else {
        btn.classList.remove("active", "border-amber-500", "text-amber-400");
        btn.classList.add("border-transparent", "text-slate-400");
      }
    });

    // Ocultar todas las secciones principales
    const sections = [
      "tab-dashboard",
      "tab-simulator-config",
      "tab-simulator-active",
      "tab-simulator-results",
      "tab-bloques",
      "tab-failed-bag",
      "tab-flashcards",
      "tab-importer"
    ];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });

    // Mostrar sección correspondiente
    const targetSection = document.getElementById(`tab-${tabName}`);
    if (targetSection) {
      targetSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Renderizar datos de la pestaña activa
    if (tabName === "dashboard") {
      this.renderDashboard();
    } else if (tabName === "bloques") {
      this.renderBloques();
    } else if (tabName === "failed-bag") {
      this.renderFailedBag();
    } else if (tabName === "flashcards") {
      this.renderFlashcards();
    } else if (tabName === "importer") {
      this.renderImporter();
    }

    this.updateHeaderStats();
  }

  // ==========================================
  // DASHBOARD
  // ==========================================
  renderDashboard() {
    const stats = window.storageManager.getStats();
    const rankInfo = window.storageManager.getMilitaryRank(stats.xp || 0);
    const questions = window.storageManager.getQuestions();
    const failed = window.storageManager.getFailedQuestions();
    const history = window.storageManager.getSimulatorHistory();

    // Rango Militar
    const dashRankBadge = document.getElementById("dash-rank-badge");
    const dashRankTitle = document.getElementById("dash-rank-title");
    const dashRankSub = document.getElementById("dash-rank-sub");
    const dashRankProgress = document.getElementById("dash-rank-progress");
    const dashRankNext = document.getElementById("dash-rank-next");

    if (dashRankBadge) dashRankBadge.textContent = rankInfo.current.badge;
    if (dashRankTitle) dashRankTitle.textContent = rankInfo.current.title;
    if (dashRankSub) dashRankSub.textContent = rankInfo.current.sub;
    if (dashRankProgress) {
      dashRankProgress.style.width = `${rankInfo.progressPercent}%`;
      dashRankProgress.setAttribute("aria-valuenow", rankInfo.progressPercent);
    }
    if (dashRankNext) {
      dashRankNext.textContent = rankInfo.next
        ? `Siguiente: ${rankInfo.next.title} (${stats.xp}/${rankInfo.next.minXP} XP)`
        : "¡Rango Máximo Alcanzado!";
    }

    // Métricas clave
    const dashStreak = document.getElementById("dash-streak-count");
    const dashTotalQuestions = document.getElementById("dash-total-questions");
    const dashFailedCount = document.getElementById("dash-failed-count");
    const dashSimCount = document.getElementById("dash-sim-count");
    const dashNetAccuracy = document.getElementById("dash-net-accuracy");

    if (dashStreak) dashStreak.textContent = `${stats.streakDays || 1} días`;
    if (dashTotalQuestions) dashTotalQuestions.textContent = questions.length;
    if (dashFailedCount) dashFailedCount.textContent = failed.length;
    if (dashSimCount) dashSimCount.textContent = stats.simulatorsCompleted || 0;

    // Precisión neta militar global
    const totalAns = (stats.totalCorrect || 0) + (stats.totalWrong || 0);
    if (dashNetAccuracy) {
      if (totalAns > 0) {
        const netScore = Math.max(0, stats.totalCorrect - (stats.totalWrong / 3));
        const netPct = Math.round((netScore / totalAns) * 100);
        dashNetAccuracy.textContent = `${netPct}%`;
      } else {
        dashNetAccuracy.textContent = "--%";
      }
    }

    // Historial reciente de simulacros
    const historyContainer = document.getElementById("dash-history-list");
    if (historyContainer) {
      if (history.length === 0) {
        historyContainer.innerHTML = `
          <div class="text-center py-6 text-slate-400">
            <span class="text-3xl block mb-2">🎯</span>
            Aún no has completado ningún simulacro. Pulsa en <strong>Simulacro Oficial</strong> para iniciar el primero.
          </div>
        `;
      } else {
        historyContainer.innerHTML = history.slice(0, 5).map(item => {
          const dateStr = new Date(item.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
          });
          const badgeClass = item.passed ? "bg-emerald-950 text-emerald-400 border-emerald-700" : "bg-red-950 text-red-400 border-red-700";
          const statusText = item.passed ? "APTO" : "NO APTO";

          return `
            <div class="flex items-center justify-between p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
              <div class="flex items-center space-x-3">
                <div class="px-2.5 py-1 rounded-md text-xs font-black uppercase border ${badgeClass}">
                  ${statusText}
                </div>
                <div>
                  <div class="text-sm font-bold text-slate-200">
                    Nota: ${item.scoreOutOf10}/10 <span class="text-xs font-normal text-slate-400">(${item.rawScore.toFixed(2)} pts netos)</span>
                  </div>
                  <div class="text-xs text-slate-400">
                    ${dateStr} • ${item.correct} aciertos / ${item.wrong} fallos (${item.total} preg.)
                  </div>
                </div>
              </div>
              <div class="text-right">
                <span class="text-xs font-mono text-amber-400">⏱️ ${item.timeFormatted || "-"}</span>
              </div>
            </div>
          `;
        }).join("");
      }
    }
  }

  // ==========================================
  // SIMULADOR: CONFIGURACIÓN E INICIO
  // ==========================================
  startSimulatorWithParams({ count = 20, bloque = "ALL", mode = "official" }) {
    const res = window.simulatorEngine.startSession({ count, bloque, mode });
    if (!res.ok) {
      alert(res.message);
      return;
    }

    this.showTab("simulator-active");
    this.renderSimulatorQuestion();
    this.renderSimulatorGrid();
  }

  renderSimulatorQuestion() {
    const q = window.simulatorEngine.getCurrentQuestion();
    const idx = window.simulatorEngine.currentIndex;
    const total = window.simulatorEngine.questions.length;
    const userAnswer = window.simulatorEngine.answers[idx];
    const isFlagged = window.simulatorEngine.flagged.has(idx);

    // Contadores superiores
    const counterEl = document.getElementById("sim-question-counter");
    if (counterEl) counterEl.textContent = `Pregunta ${idx + 1} de ${total}`;

    const bloqueBadge = document.getElementById("sim-q-bloque-badge");
    const materiaBadge = document.getElementById("sim-q-materia-badge");
    if (bloqueBadge) bloqueBadge.textContent = q.bloque;
    if (materiaBadge) materiaBadge.textContent = q.materia || "Materia Oficial";

    // Texto de la pregunta
    const textEl = document.getElementById("sim-q-text");
    if (textEl) textEl.textContent = q.pregunta;

    // Botón de bandera
    const flagBtn = document.getElementById("sim-btn-flag");
    if (flagBtn) {
      if (isFlagged) {
        flagBtn.innerHTML = `🚩 <span class="text-amber-400 font-bold">Dudosa</span>`;
        flagBtn.classList.add("border-amber-500", "bg-amber-950/40");
      } else {
        flagBtn.innerHTML = `🏳️ <span class="text-slate-400">Marcar duda</span>`;
        flagBtn.classList.remove("border-amber-500", "bg-amber-950/40");
      }
    }

    // Botón Dejar en Blanco
    const blankBtn = document.getElementById("sim-btn-blank");
    if (blankBtn) {
      if (userAnswer === null || userAnswer === undefined) {
        blankBtn.classList.add("border-amber-500", "bg-amber-950/30", "text-amber-300");
      } else {
        blankBtn.classList.remove("border-amber-500", "bg-amber-950/30", "text-amber-300");
      }
    }

    // Opciones A, B, C, D
    const container = document.getElementById("sim-options-container");
    const letters = ["A", "B", "C", "D"];
    if (container) {
      container.innerHTML = q.opciones.map((opt, oIdx) => {
        const isSelected = userAnswer === oIdx;
        const selectedClass = isSelected ? "selected border-amber-500 bg-amber-950/30 ring-1 ring-amber-500" : "";
        return `
          <button 
            type="button" 
            onclick="window.appController.selectSimOption(${oIdx})"
            class="option-btn w-full p-4 rounded-xl text-left flex items-start space-x-3.5 ${selectedClass}"
          >
            <span class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${isSelected ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300"}">
              ${letters[oIdx]}
            </span>
            <span class="text-sm sm:text-base leading-relaxed text-slate-200 mt-1">
              ${opt}
            </span>
          </button>
        `;
      }).join("");
    }

    // Botones de navegación
    const prevBtn = document.getElementById("sim-btn-prev");
    const nextBtn = document.getElementById("sim-btn-next");
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) {
      if (idx === total - 1) {
        nextBtn.textContent = "Revisar / Entregar ➔";
        nextBtn.classList.add("bg-amber-600", "text-slate-950");
      } else {
        nextBtn.textContent = "Siguiente ➔";
        nextBtn.classList.remove("bg-amber-600", "text-slate-950");
      }
    }

    this.renderSimulatorGrid();
  }

  renderSimulatorGrid() {
    const gridContainer = document.getElementById("sim-grid-container");
    if (!gridContainer) return;

    const total = window.simulatorEngine.questions.length;
    const currentIdx = window.simulatorEngine.currentIndex;

    gridContainer.innerHTML = Array.from({ length: total }, (_, i) => {
      const isCurrent = i === currentIdx;
      const isAnswered = window.simulatorEngine.answers[i] !== null && window.simulatorEngine.answers[i] !== undefined;
      const isFlagged = window.simulatorEngine.flagged.has(i);

      let bgClass = "bg-slate-800/80 text-slate-400 border-slate-700";
      if (isCurrent) {
        bgClass = "ring-2 ring-amber-400 font-black text-amber-300 bg-slate-800";
      } else if (isFlagged) {
        bgClass = "bg-amber-950/60 text-amber-300 border-amber-600";
      } else if (isAnswered) {
        bgClass = "bg-emerald-950/60 text-emerald-400 border-emerald-600";
      }

      return `
        <button 
          type="button"
          onclick="window.appController.jumpToQuestion(${i})"
          class="w-8 h-8 rounded-lg text-xs font-bold border flex items-center justify-center transition-all ${bgClass}"
          title="Pregunta ${i + 1}"
        >
          ${isFlagged ? "🚩" : i + 1}
        </button>
      `;
    }).join("");
  }

  selectSimOption(optionIdx) {
    window.simulatorEngine.selectOption(optionIdx);
    this.renderSimulatorQuestion();
  }

  leaveCurrentBlank() {
    window.simulatorEngine.leaveBlank();
    this.renderSimulatorQuestion();
  }

  toggleCurrentFlag() {
    window.simulatorEngine.toggleFlag();
    this.renderSimulatorQuestion();
  }

  prevQuestion() {
    if (window.simulatorEngine.currentIndex > 0) {
      window.simulatorEngine.currentIndex--;
      this.renderSimulatorQuestion();
    }
  }

  nextQuestion() {
    const total = window.simulatorEngine.questions.length;
    if (window.simulatorEngine.currentIndex < total - 1) {
      window.simulatorEngine.currentIndex++;
      this.renderSimulatorQuestion();
    } else {
      // Fin del cuestionario, abrir diálogo de entrega
      this.finishSimulator();
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < window.simulatorEngine.questions.length) {
      window.simulatorEngine.currentIndex = index;
      this.renderSimulatorQuestion();
    }
  }

  finishSimulator(timeExpired = false) {
    const unansweredCount = window.simulatorEngine.questions.filter((_, idx) => {
      const a = window.simulatorEngine.answers[idx];
      return a === null || a === undefined;
    }).length;

    if (!timeExpired) {
      const confirmMsg = unansweredCount > 0
        ? `Tienes ${unansweredCount} preguntas en blanco (no restarán puntos).\n¿Deseas entregar el simulacro y ver la corrección oficial?`
        : "¿Deseas finalizar el examen y ver tu calificación oficial?";
      if (!confirm(confirmMsg)) return;
    } else {
      alert("⚠️ ¡TIEMPO MILITAR AGOTADO! Se procede a la corrección oficial de tu examen.");
    }

    const summary = window.simulatorEngine.evaluateExam();
    this.renderResults(summary);
    this.showTab("simulator-results");
  }

  // ==========================================
  // RESULTADOS DEL SIMULACRO
  // ==========================================
  renderResults(summary) {
    const score10El = document.getElementById("res-score-10");
    const badgeEl = document.getElementById("res-badge");
    const rawFormulaEl = document.getElementById("res-raw-formula");
    const correctEl = document.getElementById("res-correct-count");
    const wrongEl = document.getElementById("res-wrong-count");
    const blankEl = document.getElementById("res-blank-count");
    const timeEl = document.getElementById("res-time-spent");
    const xpEl = document.getElementById("res-xp-earned");

    if (score10El) score10El.textContent = `${summary.scoreOutOf10}/10`;
    if (badgeEl) {
      badgeEl.textContent = summary.passed ? "APTO PARA LA PERMANENCIA" : "NO APTO (MENOS DE 5.0)";
      badgeEl.className = summary.passed
        ? "inline-block px-4 py-1.5 rounded-full text-sm font-black bg-emerald-950 text-emerald-400 border border-emerald-600 uppercase tracking-wider"
        : "inline-block px-4 py-1.5 rounded-full text-sm font-black bg-red-950 text-red-400 border border-red-600 uppercase tracking-wider";
    }

    if (rawFormulaEl) {
      rawFormulaEl.innerHTML = `
        <span class="text-emerald-400 font-bold">${summary.correct}</span> aciertos - 
        (<span class="text-red-400 font-bold">${summary.wrong}</span> fallos / 3) = 
        <span class="text-amber-400 font-black text-lg">${summary.rawScore.toFixed(2)} pts netos</span>
        <span class="text-xs text-slate-400 block mt-0.5">(Penalización por fallos: -${summary.penaltyPoints.toFixed(2)} pts | En blanco: 0 pts)</span>
      `;
    }

    if (correctEl) correctEl.textContent = summary.correct;
    if (wrongEl) wrongEl.textContent = summary.wrong;
    if (blankEl) blankEl.textContent = summary.blank;
    if (timeEl) timeEl.textContent = summary.timeFormatted;
    if (xpEl) xpEl.textContent = `+${summary.earnedXP} XP`;

    // Desglose por bloques
    const bloqueContainer = document.getElementById("res-bloques-breakdown");
    if (bloqueContainer) {
      bloqueContainer.innerHTML = Object.entries(summary.byBloque).map(([bloqueName, data]) => {
        if (data.total === 0) return "";
        const blockRaw = Math.max(0, data.correct - (data.wrong / 3));
        const blockPct = Math.round((blockRaw / data.total) * 100);
        return `
          <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <div class="flex justify-between items-center mb-1">
              <span class="text-xs font-bold text-slate-200">${bloqueName}</span>
              <span class="text-xs font-bold text-amber-400">${blockPct}% neto</span>
            </div>
            <div class="text-xs text-slate-400 flex justify-between">
              <span>✅ ${data.correct} aciertos</span>
              <span>❌ ${data.wrong} fallos</span>
              <span>⚪ ${data.blank} blanco</span>
            </div>
          </div>
        `;
      }).join("");
    }

    // Lista detallada de revisión pregunta por pregunta
    const reviewContainer = document.getElementById("res-review-container");
    const letters = ["A", "B", "C", "D"];
    if (reviewContainer) {
      reviewContainer.innerHTML = summary.details.map((item, idx) => {
        const q = item.question;
        const statusBadge = item.isBlank
          ? `<span class="px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-slate-400 border border-slate-700">En Blanco (0 pts)</span>`
          : item.isCorrect
            ? `<span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-700">✅ Acierto (+1 pt)</span>`
            : `<span class="px-2 py-0.5 rounded text-xs font-bold bg-red-950 text-red-400 border border-red-700">❌ Fallo (-0.33 pts)</span>`;

        return `
          <div class="p-4 rounded-xl border ${item.isCorrect ? "bg-emerald-950/10 border-emerald-900/40" : item.isBlank ? "bg-slate-900/30 border-slate-800" : "bg-red-950/15 border-red-900/50"}">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-slate-400">Pregunta ${idx + 1} • ${q.bloque}</span>
              ${statusBadge}
            </div>
            <p class="text-sm font-semibold text-slate-100 mb-3">${q.pregunta}</p>
            
            <div class="space-y-1.5 mb-3 text-xs">
              ${q.opciones.map((opt, oIdx) => {
                const isSelected = item.userAnswer === oIdx;
                const isCorrect = q.correcta === oIdx;
                let optClass = "text-slate-400 bg-slate-900/40 border-slate-800";
                if (isCorrect) optClass = "text-emerald-300 bg-emerald-950/40 border-emerald-600 font-bold";
                else if (isSelected && !isCorrect) optClass = "text-red-300 bg-red-950/40 border-red-600 line-through";

                return `
                  <div class="p-2 rounded-lg border flex items-start space-x-2 ${optClass}">
                    <span class="font-bold shrink-0">${letters[oIdx]})</span>
                    <span>${opt} ${isCorrect ? "✓ (Oficial)" : isSelected ? "✗ (Tu respuesta)" : ""}</span>
                  </div>
                `;
              }).join("")}
            </div>

            <div class="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 text-xs">
              <div class="font-bold text-amber-400 mb-0.5">Fundamentación Legal (${q.referencia || "Temario Oficial"}):</div>
              <p class="text-slate-300 leading-relaxed">${q.justificacion}</p>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // ==========================================
  // ESTUDIO POR BLOQUES OFICIALES
  // ==========================================
  renderBloques() {
    const allQuestions = window.storageManager.getQuestions();
    const b1 = allQuestions.filter(q => q.bloque === "Bloque 1: Organización").length;
    const b2 = allQuestions.filter(q => q.bloque === "Bloque 2: Jurídico-Social").length;
    const b3 = allQuestions.filter(q => q.bloque === "Bloque 3: Seguridad Nacional").length;

    const b1CountEl = document.getElementById("b1-question-count");
    const b2CountEl = document.getElementById("b2-question-count");
    const b3CountEl = document.getElementById("b3-question-count");

    if (b1CountEl) b1CountEl.textContent = `${b1} preguntas disponibles`;
    if (b2CountEl) b2CountEl.textContent = `${b2} preguntas disponibles`;
    if (b3CountEl) b3CountEl.textContent = `${b3} preguntas disponibles`;
  }

  startBlockTest(bloqueName) {
    this.startSimulatorWithParams({ count: 20, bloque: bloqueName, mode: "official" });
  }

  // ==========================================
  // BOLSA DE PREGUNTAS FALLADAS
  // ==========================================
  renderFailedBag() {
    const failed = window.storageManager.getFailedQuestions();
    const allQuestions = window.storageManager.getQuestions();
    const qMap = new Map(allQuestions.map(q => [q.id, q]));

    const countEl = document.getElementById("failed-bag-total-count");
    if (countEl) countEl.textContent = `${failed.length} preguntas`;

    const container = document.getElementById("failed-bag-items-list");
    if (!container) return;

    if (failed.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center tactical-card rounded-2xl">
          <span class="text-4xl block mb-2">🎯</span>
          <h4 class="text-base font-bold text-slate-200">¡Bolsa de falladas vacía!</h4>
          <p class="text-xs text-slate-400 max-w-md mx-auto mt-1">
            Cada vez que cometas un error en los simulacros, se guardará aquí automáticamente para que puedas entrenarlo hasta dominarlo.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = failed.map(item => {
      const q = qMap.get(item.id);
      if (!q) return "";

      return `
        <div class="p-4 tactical-card rounded-xl border border-red-900/30">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-amber-400">${q.bloque}</span>
            <div class="flex items-center space-x-2">
              <span class="text-xs bg-red-950/80 text-red-300 px-2 py-0.5 rounded border border-red-800">
                Fallada ${item.attempts || 1} veces
              </span>
              <button 
                onclick="window.appController.removeFailedItem('${item.id}')"
                class="text-xs text-slate-400 hover:text-red-400 p-1"
                title="Eliminar de la bolsa"
              >
                ✕
              </button>
            </div>
          </div>
          <p class="text-sm font-semibold text-slate-200 mb-2">${q.pregunta}</p>
          <div class="text-xs text-emerald-400 bg-emerald-950/20 p-2 rounded border border-emerald-900/40 mb-2">
            <span class="font-bold">Correcta:</span> ${q.opciones[q.correcta]}
          </div>
          <p class="text-xs text-slate-400">${q.justificacion}</p>
        </div>
      `;
    }).join("");
  }

  trainFailedBag() {
    this.startSimulatorWithParams({ count: 50, bloque: "ALL", mode: "failed_bag" });
  }

  removeFailedItem(id) {
    window.storageManager.removeFailedQuestion(id);
    this.renderFailedBag();
    this.updateHeaderStats();
  }

  clearAllFailed() {
    if (confirm("¿Estás seguro de que deseas vaciar toda la bolsa de preguntas falladas?")) {
      window.storageManager.clearFailedQuestions();
      this.renderFailedBag();
      this.updateHeaderStats();
    }
  }

  // ==========================================
  // TARJETAS FLASHCARDS
  // ==========================================
  renderFlashcards() {
    this.fcList = DEFAULT_FLASHCARDS;
    this.showCurrentFlashcard();
  }

  showCurrentFlashcard() {
    if (!this.fcList || this.fcList.length === 0) return;
    const card = this.fcList[this.fcIndex];
    const learnedList = window.storageManager.getLearnedFlashcards();
    const isLearned = learnedList.includes(card.id);

    const inner = document.getElementById("fc-inner");
    if (inner) inner.classList.remove("is-flipped");

    const counter = document.getElementById("fc-counter");
    if (counter) counter.textContent = `Tarjeta ${this.fcIndex + 1} de ${this.fcList.length}`;

    const bloqueEl = document.getElementById("fc-front-bloque");
    const claveEl = document.getElementById("fc-front-clave");
    const textEl = document.getElementById("fc-front-text");

    const backClaveEl = document.getElementById("fc-back-clave");
    const backTextEl = document.getElementById("fc-back-text");
    const learnedBtn = document.getElementById("fc-btn-learned");

    if (bloqueEl) bloqueEl.textContent = card.bloque;
    if (claveEl) claveEl.textContent = card.clave || "Concepto Clave";
    if (textEl) textEl.textContent = card.frente;

    if (backClaveEl) backClaveEl.textContent = card.concepto;
    if (backTextEl) backTextEl.innerHTML = card.reverso.replace(/\n/g, "<br>");

    if (learnedBtn) {
      if (isLearned) {
        learnedBtn.textContent = "⭐ Aprendida (Dominada)";
        learnedBtn.classList.add("bg-amber-500", "text-slate-950");
      } else {
        learnedBtn.textContent = "Marcar como dominada (+15 XP)";
        learnedBtn.classList.remove("bg-amber-500", "text-slate-950");
      }
    }
  }

  flipFlashcard() {
    const inner = document.getElementById("fc-inner");
    if (inner) {
      inner.classList.toggle("is-flipped");
    }
  }

  prevFlashcard() {
    if (this.fcIndex > 0) {
      this.fcIndex--;
      this.showCurrentFlashcard();
    }
  }

  nextFlashcard() {
    if (this.fcIndex < this.fcList.length - 1) {
      this.fcIndex++;
      this.showCurrentFlashcard();
    }
  }

  toggleCurrentFlashcardLearned() {
    const card = this.fcList[this.fcIndex];
    window.storageManager.toggleFlashcardLearned(card.id);
    this.showCurrentFlashcard();
    this.updateHeaderStats();
  }

  // ==========================================
  // IMPORTADOR NOTEBOOKLM & BACKUP
  // ==========================================
  renderImporter() {
    // Generar prompt de ejemplo para NotebookLM
    const promptTemplate = `Actúa como preparador militar para el examen de Permanencia de Tropa (Ejército de Tierra). 
A partir del texto o temario adjunto, genera un array JSON con 10 preguntas tipo test estrictamente en este formato:

[
  {
    "pregunta": "¿Texto claro de la pregunta?",
    "bloque": "Bloque 1: Organización", 
    "materia": "Estructura Orgánica",
    "opciones": [
      "Opción A",
      "Opción B",
      "Opción C",
      "Opción D"
    ],
    "correcta": 1,
    "justificacion": "Explicación detallada con el fundamento legal exacto.",
    "referencia": "Ley o RD y Artículo"
  }
]

IMPORTANTE: 
1. Los bloques válidos son únicamente: "Bloque 1: Organización", "Bloque 2: Jurídico-Social" o "Bloque 3: Seguridad Nacional".
2. "correcta" debe ser un número entero (0 para A, 1 para B, 2 para C, 3 para D).
3. Devuelve ÚNICAMENTE el bloque JSON sin explicaciones adicionales.`;

    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) promptEl.value = promptTemplate;
  }

  copyNotebookLMPrompt() {
    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) {
      promptEl.select();
      navigator.clipboard.writeText(promptEl.value).then(() => {
        alert("📋 ¡Prompt para NotebookLM copiado al portapapeles!\n\nPégalo en NotebookLM o en ChatGPT junto con tus apuntes/PDFs.");
      });
    }
  }

  importJSONQuestions() {
    const inputEl = document.getElementById("import-json-textarea");
    if (!inputEl || !inputEl.value.trim()) {
      alert("Por favor, pega el contenido JSON en el área de texto.");
      return;
    }

    try {
      const data = JSON.parse(inputEl.value.trim());
      if (!Array.isArray(data)) {
        throw new Error("El JSON debe ser un array [ ... ] de preguntas.");
      }

      // Validar estructura de cada pregunta
      data.forEach((q, i) => {
        if (!q.pregunta || !Array.isArray(q.opciones) || q.opciones.length !== 4 || typeof q.correcta !== "number") {
          throw new Error(`La pregunta en posición ${i + 1} no cumple con la estructura requerida (pregunta, 4 opciones y respuesta correcta 0..3).`);
        }
      });

      const added = window.storageManager.addCustomQuestions(data);
      alert(`✅ ¡Éxito! Se han importado ${added} preguntas nuevas al banco de datos.`);
      inputEl.value = "";
      this.updateHeaderStats();
    } catch (err) {
      alert(`❌ Error al importar JSON: ${err.message}`);
    }
  }

  downloadFullBackup() {
    const backup = window.storageManager.exportFullBackup();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    const dateStr = new Date().toISOString().split("T")[0];
    downloadAnchor.setAttribute("download", `permanencia_fas_backup_${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importBackupFile(fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        window.storageManager.importFullBackup(json);
        alert("✅ Respaldo restaurado con éxito. Se han actualizado estadísticas, bolsa de errores y banco de preguntas.");
        this.updateHeaderStats();
        this.showTab("dashboard");
      } catch (err) {
        alert(`❌ Error al restaurar el respaldo: ${err.message}`);
      }
    };
    reader.readAsText(file);
  }

  resetAll() {
    if (confirm("⚠️ ¿Estás totalmente seguro de que deseas reiniciar todos los datos? Se restablecerán las preguntas de fábrica, tu racha y tus estadísticas.")) {
      window.storageManager.resetAllData();
      alert("Datos restablecidos.");
      this.updateHeaderStats();
      this.showTab("dashboard");
    }
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  window.appController = new AppController();
});
