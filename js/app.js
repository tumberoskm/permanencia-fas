/**
 * CONTROLADOR PRINCIPAL DE LA SPA (SINGLE PAGE APPLICATION) v2.0
 * Permanencia FAS - Ejército de Tierra
 */

class AppController {
  constructor() {
    this.currentTab = "dashboard";
    this.fcIndex = 0;
    this.fcList = [];
    this.selectedSyllabusFilter = "ALL";
    this.isSpeaking = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateHeaderStats();
    this.showTab("dashboard");
  }

  bindEvents() {
    document.querySelectorAll("[data-tab]").forEach(btn => {
      btn.addEventListener("click", e => {
        const tab = e.currentTarget.getAttribute("data-tab");
        this.showTab(tab);
      });
    });

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
    this.stopAudio();
    this.currentTab = tabName;

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

    const sections = [
      "tab-dashboard",
      "tab-simulator-config",
      "tab-simulator-active",
      "tab-simulator-results",
      "tab-temario",
      "tab-trampas",
      "tab-failed-bag",
      "tab-flashcards",
      "tab-importer"
    ];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });

    const targetSection = document.getElementById(`tab-${tabName}`);
    if (targetSection) {
      targetSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (tabName === "dashboard") {
      this.renderDashboard();
    } else if (tabName === "temario") {
      this.renderTemario();
    } else if (tabName === "trampas") {
      this.renderTrampas();
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
  // DASHBOARD + MAPA DE CALOR DE DEBILIDADES
  // ==========================================
  renderDashboard() {
    const stats = window.storageManager.getStats();
    const rankInfo = window.storageManager.getMilitaryRank(stats.xp || 0);
    const questions = window.storageManager.getQuestions();
    const failed = window.storageManager.getFailedQuestions();
    const history = window.storageManager.getSimulatorHistory();

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
    }
    if (dashRankNext) {
      dashRankNext.textContent = rankInfo.next
        ? `Siguiente: ${rankInfo.next.title} (${stats.xp}/${rankInfo.next.minXP} XP)`
        : "¡Rango Máximo Alcanzado!";
    }

    const dashStreak = document.getElementById("dash-streak-count");
    const dashTotalQuestions = document.getElementById("dash-total-questions");
    const dashFailedCount = document.getElementById("dash-failed-count");
    const dashSimCount = document.getElementById("dash-sim-count");
    const dashNetAccuracy = document.getElementById("dash-net-accuracy");

    if (dashStreak) dashStreak.textContent = `${stats.streakDays || 1} días`;
    if (dashTotalQuestions) dashTotalQuestions.textContent = questions.length;
    if (dashFailedCount) dashFailedCount.textContent = failed.length;
    if (dashSimCount) dashSimCount.textContent = stats.simulatorsCompleted || 0;

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

    this.renderHeatmap();

    const historyContainer = document.getElementById("dash-history-list");
    if (historyContainer) {
      if (history.length === 0) {
        historyContainer.innerHTML = `
          <div class="text-center py-6 text-slate-400">
            <span class="text-3xl block mb-2">🎯</span>
            Aún no has completado ningún simulacro. Pulsa en <strong>Test Rápido</strong> o explora el <strong>Temario Oficial</strong>.
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

  renderHeatmap() {
    const container = document.getElementById("dash-heatmap-grid");
    if (!container || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const topicStats = window.storageManager.getTopicStats();

    container.innerHTML = OFFICIAL_SYLLABUS.map(tema => {
      const st = topicStats[tema.codigo] || { correct: 0, wrong: 0 };
      const total = st.correct + st.wrong;
      let pctText = "Sin datos";
      let colorClass = "border-slate-800 bg-slate-900/50 text-slate-400";

      if (total > 0) {
        const net = Math.max(0, st.correct - st.wrong / 3);
        const pct = Math.round((net / total) * 100);
        pctText = `${pct}% neto`;
        if (pct >= 70) {
          colorClass = "border-emerald-700/60 bg-emerald-950/30 text-emerald-300";
        } else if (pct >= 50) {
          colorClass = "border-amber-600/60 bg-amber-950/30 text-amber-300";
        } else {
          colorClass = "border-red-600/60 bg-red-950/30 text-red-300";
        }
      }

      return `
        <div 
          onclick="window.appController.openTopicDetail('${tema.codigo}')"
          class="p-2.5 rounded-xl border ${colorClass} cursor-pointer hover:border-amber-400 transition flex flex-col justify-between"
          title="Haz clic para abrir el tema o hacer test"
        >
          <div class="flex items-center justify-between text-[10px] font-mono font-bold">
            <span>${tema.codigo}</span>
            <span>${pctText}</span>
          </div>
          <div class="text-xs font-bold text-white truncate mt-1">${tema.titulo}</div>
        </div>
      `;
    }).join("");
  }

  // ==========================================
  // VISOR DE TEMARIO TÁCTICO (21 TEMAS / 3 BLOQUES)
  // ==========================================
  filterTemario(bloque) {
    this.selectedSyllabusFilter = bloque;
    this.renderTemario();
  }

  renderTemario() {
    const container = document.getElementById("temario-topics-container");
    if (!container || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const allQuestions = window.storageManager.getQuestions();
    const filtered = this.selectedSyllabusFilter === "ALL"
      ? OFFICIAL_SYLLABUS
      : OFFICIAL_SYLLABUS.filter(t => t.bloque === this.selectedSyllabusFilter);

    container.innerHTML = filtered.map(tema => {
      const qCount = allQuestions.filter(q => q.temaCodigo === tema.codigo).length;
      const badgeColor = tema.bloque.includes("Bloque 1")
        ? "bg-emerald-950 text-emerald-400 border-emerald-700"
        : tema.bloque.includes("Bloque 2")
          ? "bg-amber-950 text-amber-400 border-amber-700"
          : "bg-sky-950 text-sky-400 border-sky-700";

      const freqBadge = tema.frecuenciaExamen
        ? `<span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-red-950/70 text-amber-300 border border-amber-600/40">📊 Peso Examen: ${tema.frecuenciaExamen}</span>`
        : "";

      return `
        <div id="topic-card-${tema.codigo}" class="tactical-card rounded-2xl p-5 border border-slate-800 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded text-xs font-mono font-black border ${badgeColor}">
                ${tema.codigo}
              </span>
              <span class="text-xs font-bold text-slate-400">${tema.bloque}</span>
              ${freqBadge}
            </div>

            <div class="flex items-center space-x-2">
              <button 
                onclick="window.appController.speakTopic('${tema.codigo}')"
                class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 flex items-center space-x-1 transition"
                title="Escuchar resumen y puntos calientes en voz alta"
              >
                <span>🔊</span><span>Audio Táctico</span>
              </button>
              <button 
                onclick="window.appController.startTopicTest('${tema.codigo}')"
                class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider transition"
              >
                🎯 Test del Tema (${qCount})
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-black text-white">${tema.titulo}</h3>
            <p class="text-xs font-mono text-emerald-400 mt-0.5">📜 ${tema.normativa}</p>
          </div>

          <!-- Resumen Ejecutivo -->
          <div class="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong class="text-amber-400 uppercase text-xs block mb-1">📌 Resumen Ejecutivo:</strong>
            ${tema.resumen}
          </div>

          <!-- Puntos Calientes de Examen -->
          <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-1.5">
            <strong class="text-emerald-400 uppercase text-xs block">🔥 Puntos Calientes de Examen (Lo más preguntado en el BOD):</strong>
            <ul class="space-y-1 text-xs text-slate-200">
              ${tema.puntosCalientes.map(p => `<li class="leading-relaxed">• ${p}</li>`).join("")}
            </ul>
          </div>

          <!-- Trampas Frecuentes del Tribunal -->
          <div class="p-3.5 rounded-xl bg-red-950/25 border border-red-900/50 space-y-1.5">
            <strong class="text-red-400 uppercase text-xs block">🪤 Trampas Frecuentes del Tribunal (¡No caigas aquí!):</strong>
            <ul class="space-y-1 text-xs text-red-200">
              ${tema.trampas.map(t => `<li class="leading-relaxed">${t}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    }).join("");
  }

  openTopicDetail(temaCodigo) {
    this.selectedSyllabusFilter = "ALL";
    this.showTab("temario");
    setTimeout(() => {
      const el = document.getElementById(`topic-card-${temaCodigo}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-amber-400");
        setTimeout(() => el.classList.remove("ring-2", "ring-amber-400"), 2500);
      }
    }, 100);
  }

  startTopicTest(temaCodigo) {
    this.startSimulatorWithParams({ count: 20, bloque: "ALL", mode: "tema", temaCodigo });
  }

  // ==========================================
  // MODO AUDIO TÁCTICO (MANOS LIBRES)
  // ==========================================
  speakTopic(temaCodigo) {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }

    if (this.isSpeaking) {
      this.stopAudio();
      return;
    }

    const tema = OFFICIAL_SYLLABUS.find(t => t.codigo === temaCodigo);
    if (!tema) return;

    const textToRead = `Tema ${tema.codigo}: ${tema.titulo}. Frecuencia en examen: ${tema.frecuenciaExamen || "Alta"}. Resumen ejecutivo: ${tema.resumen}. Puntos calientes de examen: ${tema.puntosCalientes.join(". ")}. Atención a las trampas del tribunal: ${tema.trampas.join(". ")}`;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = "es-ES";
    utterance.rate = 1.02;
    utterance.onend = () => {
      this.isSpeaking = false;
    };
    this.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
  }

  stopAudio() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
  }

  // ==========================================
  // LABORATORIO CAZA-TRAMPAS, INTELIGENCIA DE ACADEMIAS Y TABLAS
  // ==========================================
  renderTrampas() {
    const tablesContainer = document.getElementById("comparative-tables-container");
    if (!tablesContainer || typeof COMPARATIVE_TABLES === "undefined") return;

    const allQuestions = window.storageManager.getQuestions();
    const trapCount = allQuestions.filter(q => q.dificultad === "trampa").length;
    const officialCount = allQuestions.filter(q => q.esExamenOficial === true).length;

    const trapCountEl = document.getElementById("trap-questions-count");
    const officialCountEl = document.getElementById("official-questions-count");
    if (trapCountEl) trapCountEl.textContent = `${trapCount} preguntas trampa listas`;
    if (officialCountEl) officialCountEl.textContent = `${officialCount} preguntas oficiales BOD (2021-2025)`;

    const intelContainer = document.getElementById("academy-intel-container");
    if (intelContainer && typeof ACADEMY_INTELLIGENCE !== "undefined") {
      intelContainer.innerHTML = `
        <div class="tactical-card rounded-2xl p-5 border border-emerald-500/40 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-black bg-emerald-950 text-emerald-400 border border-emerald-700 uppercase">
                Inteligencia Táctica de Academias (Convocatorias 2019–2025)
              </span>
              <h3 class="text-base sm:text-lg font-black text-white mt-1">
                🎯 Radiografía Estadística del Examen Oficial (100 Preguntas / 120 Minutos)
              </h3>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${ACADEMY_INTELLIGENCE.repartoPorBloques.map(b => `
              <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-amber-400">${b.bloque}</span>
                  <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-mono font-bold border border-emerald-800">${b.pesoMedio}</span>
                </div>
                <div class="text-[11px] text-slate-400 font-mono">${b.temas} Temas Oficiales</div>
                <p class="text-xs text-slate-200 leading-relaxed">
                  <strong class="text-emerald-400">Temas estrella:</strong> ${b.temasEstrella}
                </p>
                <p class="text-[11px] text-amber-200/90 leading-relaxed border-t border-slate-800/80 pt-1.5">
                  💡 ${b.consejoTactico}
                </p>
              </div>
            `).join("")}
          </div>

          <div class="p-3.5 rounded-xl bg-amber-950/20 border border-amber-700/40">
            <strong class="text-xs font-black text-amber-400 uppercase block mb-2">
              🏆 Regla de Pareto 80/20: Los 6 Temas que concentran más del 50% de las preguntas todos los años:
            </strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-200">
              ${ACADEMY_INTELLIGENCE.top6TemasMasPreguntados.map(t => `<div class="p-2 rounded bg-slate-950/60 border border-slate-800/80">• ${t}</div>`).join("")}
            </div>
          </div>
        </div>
      `;
    }

    tablesContainer.innerHTML = COMPARATIVE_TABLES.map(tab => `
      <div class="tactical-card rounded-2xl p-5 border border-amber-500/30 overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 class="text-sm sm:text-base font-black text-white">${tab.titulo}</h3>
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-900 text-amber-400 border border-slate-700">
            ${tab.bloque}
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-700 bg-slate-900/90 text-amber-400 uppercase">
                ${tab.headers.map(h => `<th class="p-2.5 font-black">${h}</th>`).join("")}
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/80">
              ${tab.rows.map(row => `
                <tr class="hover:bg-slate-900/40">
                  ${row.map((cell, idx) => `<td class="p-2.5 ${idx === 0 ? "font-bold text-emerald-400" : "text-slate-200"}">${cell}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `).join("");
  }

  startTrapHunterTest() {
    this.startSimulatorWithParams({ count: 25, bloque: "ALL", mode: "trampas" });
  }

  startOfficialExamTest() {
    this.startSimulatorWithParams({ count: 35, bloque: "ALL", mode: "examen_real" });
  }

  // ==========================================
  // SIMULADOR: CONFIGURACIÓN E INICIO
  // ==========================================
  startSimulatorWithParams({ count = 20, bloque = "ALL", mode = "official", temaCodigo = null }) {
    const res = window.simulatorEngine.startSession({ count, bloque, mode, temaCodigo });
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

    const counterEl = document.getElementById("sim-question-counter");
    if (counterEl) counterEl.textContent = `Pregunta ${idx + 1} de ${total}`;

    const bloqueBadge = document.getElementById("sim-q-bloque-badge");
    const materiaBadge = document.getElementById("sim-q-materia-badge");
    if (bloqueBadge) bloqueBadge.textContent = q.bloque;
    if (materiaBadge) {
      const trapTag = q.dificultad === "trampa" ? " • 🪤 PREGUNTA TRAMPA" : "";
      const officialTag = q.esExamenOficial ? ` • 🏛️ OFICIAL ${q.anioConvocatoria || "BOD"}` : "";
      materiaBadge.textContent = `${q.temaCodigo || ""} ${q.materia || "Materia Oficial"}${trapTag}${officialTag}`;
    }

    const textEl = document.getElementById("sim-q-text");
    if (textEl) textEl.textContent = q.pregunta;

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

    const blankBtn = document.getElementById("sim-btn-blank");
    if (blankBtn) {
      if (userAnswer === null || userAnswer === undefined) {
        blankBtn.classList.add("border-amber-500", "bg-amber-950/30", "text-amber-300");
      } else {
        blankBtn.classList.remove("border-amber-500", "bg-amber-950/30", "text-amber-300");
      }
    }

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

        const ubicacionHTML = q.ubicacionTemario
          ? `<div class="mb-2 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-emerald-300 flex flex-wrap items-center justify-between gap-2">
               <span>📍 <strong>Ubicación en Temario:</strong> ${q.ubicacionTemario}</span>
               ${q.temaCodigo ? `<button onclick="window.appController.openTopicDetail('${q.temaCodigo}')" class="text-amber-400 hover:underline font-bold">📖 Abrir Tema ${q.temaCodigo} ➔</button>` : ""}
             </div>`
          : "";

        const consejoHTML = q.consejoAcademia
          ? `<div class="mt-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-700/50 text-xs text-amber-200 leading-relaxed">
               <strong class="text-amber-400 uppercase block mb-0.5">💡 Sugerencia / Truco de Academia:</strong>
               ${q.consejoAcademia}
             </div>`
          : "";

        return `
          <div class="p-4 rounded-xl border ${item.isCorrect ? "bg-emerald-950/10 border-emerald-900/40" : item.isBlank ? "bg-slate-900/30 border-slate-800" : "bg-red-950/15 border-red-900/50"}">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-slate-400">Pregunta ${idx + 1} • ${q.temaCodigo || ""} ${q.bloque}</span>
              ${statusBadge}
            </div>
            ${ubicacionHTML}
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
              <div class="font-bold text-amber-400 mb-0.5">⚖️ Fundamentación Normativa (${q.referencia || "Temario Oficial"}):</div>
              <p class="text-slate-300 leading-relaxed">${q.justificacion}</p>
            </div>
            ${consejoHTML}
          </div>
        `;
      }).join("");
    }
  }

  startBlockTest(bloqueName) {
    this.startSimulatorWithParams({ count: 20, bloque: bloqueName, mode: "official" });
  }

  // ==========================================
  // BOLSA DE PREGUNTAS FALLADAS (CON REFERENCIA EXACTA Y SUGERENCIA DE ACADEMIA)
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
            Cada vez que cometas un error en los simulacros, se guardará aquí automáticamente con su ubicación exacta en el temario, artículo legal y truco de academia para que no vuelvas a fallarla.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = failed.map(item => {
      const q = qMap.get(item.id);
      if (!q) return "";

      return `
        <div class="p-5 tactical-card rounded-2xl border border-red-900/40 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center space-x-2">
              <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-700 text-xs font-mono font-bold">${q.temaCodigo || "B1-T01"}</span>
              <span class="text-xs font-bold text-slate-300">${q.bloque}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-xs bg-red-950/80 text-red-300 px-2.5 py-0.5 rounded border border-red-800 font-bold">
                ❌ Fallada ${item.attempts || 1} ${(item.attempts || 1) === 1 ? "vez" : "veces"}
              </span>
              ${q.temaCodigo ? `
                <button 
                  onclick="window.appController.openTopicDetail('${q.temaCodigo}')"
                  class="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 text-xs font-bold transition"
                >
                  📖 Ir al Tema ${q.temaCodigo}
                </button>
              ` : ""}
              <button 
                onclick="window.appController.removeFailedItem('${item.id}')"
                class="text-xs text-slate-400 hover:text-red-400 p-1"
                title="Eliminar de la bolsa"
              >
                ✕
              </button>
            </div>
          </div>

          ${q.ubicacionTemario ? `
            <div class="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-emerald-300">
              📍 <strong>Dónde estudiarlo en el Temario:</strong> ${q.ubicacionTemario}
            </div>
          ` : ""}

          <p class="text-sm sm:text-base font-bold text-white leading-snug">${q.pregunta}</p>

          <div class="text-xs text-emerald-300 bg-emerald-950/30 p-3 rounded-xl border border-emerald-700/50">
            <span class="font-black uppercase text-emerald-400 block mb-0.5">✅ Respuesta Oficial Correcta:</span>
            ${q.opciones[q.correcta]}
          </div>

          <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1">
            <div class="font-bold text-amber-400">⚖️ Referencia Exacta: <span class="font-mono text-white">${q.referencia || "Normativa Oficial BOD"}</span></div>
            <p class="text-slate-300 leading-relaxed">${q.justificacion}</p>
          </div>

          ${q.consejoAcademia ? `
            <div class="p-3 rounded-xl bg-amber-950/25 border border-amber-700/40 text-xs text-amber-200 leading-relaxed">
              <strong class="text-amber-400 uppercase block mb-0.5">💡 Sugerencia / Regla Mnemotécnica de Academia:</strong>
              ${q.consejoAcademia}
            </div>
          ` : ""}
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
    if (inner) inner.classList.toggle("is-flipped");
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
    const promptTemplate = `Actúa como Tribunal Militar y preparador de academia de la oposición de Permanencia de Tropa y Marinería (Orden DEF/1341/2017 actualizada a 2025/2026).
A partir del temario oficial de este cuaderno, genera un array JSON con 15 preguntas tipo test de nivel examen oficial (incluyendo preguntas trampa de plazos, órganos y competencias) estrictamente con esta estructura:

[
  {
    "temaCodigo": "B2-T04",
    "bloque": "Bloque 2: Jurídico-Social",
    "materia": "Régimen Disciplinario de las FAS (LO 8/2014)",
    "dificultad": "trampa",
    "esExamenOficial": true,
    "anioConvocatoria": 2025,
    "pregunta": "¿Texto claro y riguroso de la pregunta oficial?",
    "opciones": [
      "Opción A",
      "Opción B",
      "Opción C",
      "Opción D"
    ],
    "correcta": 1,
    "ubicacionTemario": "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Epígrafe o Capítulo exacto",
    "referencia": "Ley Orgánica 8/2014, Art. 24.1",
    "consejoAcademia": "Regla mnemotécnica o truco de academia para no caer en la trampa del tribunal.",
    "justificacion": "Explicación jurídica detallada citando el artículo exacto del temario."
  }
]

IMPORTANTE:
1. "bloque" debe ser exactamente: "Bloque 1: Organización", "Bloque 2: Jurídico-Social" o "Bloque 3: Seguridad Nacional".
2. "temaCodigo" usa los 21 temas oficiales: "B1-T01" a "B1-T06" (Bloque 1), "B2-T01" a "B2-T08" (Bloque 2) o "B3-T01" a "B3-T07" (Bloque 3).
3. "correcta" es el índice numérico: 0 (A), 1 (B), 2 (C) o 3 (D). Devuelve ÚNICAMENTE el bloque JSON válido.`;

    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) promptEl.value = promptTemplate;
  }

  copyNotebookLMPrompt() {
    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) {
      promptEl.select();
      navigator.clipboard.writeText(promptEl.value).then(() => {
        alert("📋 ¡Prompt copiado al portapapeles!\nPégalo en tu cuaderno de NotebookLM y te devolverá las preguntas listas para pegar abajo.");
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

      data.forEach((q, i) => {
        if (!q.pregunta || !Array.isArray(q.opciones) || q.opciones.length !== 4 || typeof q.correcta !== "number") {
          throw new Error(`La pregunta en posición ${i + 1} no cumple con la estructura requerida.`);
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
        alert("✅ Respaldo restaurado con éxito.");
        this.updateHeaderStats();
        this.showTab("dashboard");
      } catch (err) {
        alert(`❌ Error al restaurar el respaldo: ${err.message}`);
      }
    };
    reader.readAsText(file);
  }

  resetAll() {
    if (confirm("⚠️ ¿Deseas restablecer los datos de fábrica?")) {
      window.storageManager.resetAllData();
      alert("Datos restablecidos.");
      this.updateHeaderStats();
      this.showTab("dashboard");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.appController = new AppController();
});
