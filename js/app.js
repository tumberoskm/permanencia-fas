/**
 * CONTROLADOR PRINCIPAL DE LA SPA (SINGLE PAGE APPLICATION) v2.0
 * Permanencia FAS - Ejército de Tierra
 */

class AppController {
  constructor() {
    this.currentTab = "dashboard";
    this.fcIndex = 0;
    this.fcFilter = "ALL";
    this.fcList = [];
    this.selectedSyllabusFilter = "ALL";
    this.temarioSearchQuery = "";
    this.expandedTopics = new Set(["B1-T01", "B1-T04", "B2-T04"]);
    this.dailyPairOffset = 0;
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
  // DASHBOARD + PLANIFICADOR DIARIO + RADAR POR COLORES
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

    this.renderDailyPlanner();
    this.renderHeatmap();

    const historyContainer = document.getElementById("dash-history-list");
    if (historyContainer) {
      if (history.length === 0) {
        historyContainer.innerHTML = `
          <div class="text-center py-6 text-slate-400">
            <span class="text-3xl block mb-2">🎯</span>
            Aún no has completado ningún simulacro. Pulsa en <strong>Lanzar Misión del Día</strong> o en <strong>Simulacro Oficial 100p</strong>.
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
  // 📈 PLANIFICADOR DIARIO DE MISIÓN ("PLAN DE CHOQUE INTELIGENTE")
  // ==========================================
  getPriorityTopicsForToday() {
    if (typeof OFFICIAL_SYLLABUS === "undefined") return [];
    const topicStats = window.storageManager.getTopicStats();
    const starOrder = ["B2-T04", "B1-T04", "B1-T06", "B2-T01", "B2-T08", "B1-T01", "B2-T03", "B3-T01", "B3-T04", "B3-T07"];

    const scored = OFFICIAL_SYLLABUS.map(t => {
      const st = topicStats[t.codigo] || { correct: 0, wrong: 0 };
      const total = st.correct + st.wrong;
      const netPct = total > 0 ? Math.round((Math.max(0, st.correct - st.wrong / 3) / total) * 100) : -1;
      const starBonus = starOrder.includes(t.codigo) ? 20 : 0;
      // Prioridad más alta cuanto menor sea el porcentaje neto o si aún no se ha practicado
      const priorityScore = (netPct === -1 ? 85 : (100 - netPct)) + starBonus;
      return { tema: t, netPct, total, priorityScore };
    }).sort((a, b) => b.priorityScore - a.priorityScore);

    const len = scored.length;
    const idx1 = (this.dailyPairOffset * 2) % len;
    const idx2 = (this.dailyPairOffset * 2 + 1) % len;
    return [scored[idx1], scored[idx2]];
  }

  rotateDailyMissionPair() {
    this.dailyPairOffset = (this.dailyPairOffset + 1) % 11;
    this.renderDailyPlanner();
  }

  startDailyMissionTest(code1, code2) {
    const allQ = window.storageManager.getQuestions();
    const failedIds = new Set(window.storageManager.getFailedQuestions().map(f => f.id));

    const pool = allQ.filter(q => q.temaCodigo === code1 || q.temaCodigo === code2 || failedIds.has(q.id));
    if (pool.length === 0) {
      this.startSimulatorWithParams({ count: 20, bloque: "ALL", mode: "official", studyMode: true });
      return;
    }

    // Iniciamos en Modo Estudio con las preguntas de los 2 temas del día
    this.startSimulatorWithParams({ count: 20, bloque: "ALL", mode: "tema", temaCodigo: code1, studyMode: true });
    // Mezclamos preguntas de ambos temas y fallos para un entrenamiento integral
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 20);
    window.simulatorEngine.questions = shuffled;
    window.simulatorEngine.answers = new Array(shuffled.length).fill(null);
    this.renderSimulatorQuestion();
    this.renderSimulatorGrid();
  }

  openPlazosFlashcards() {
    this.fcFilter = "PLAZOS";
    this.fcIndex = 0;
    this.showTab("flashcards");
  }

  renderDailyPlanner() {
    const container = document.getElementById("daily-planner-container");
    if (!container || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const pair = this.getPriorityTopicsForToday();
    if (pair.length < 2) return;

    const [t1, t2] = pair;
    const pal1 = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[t1.tema.codigo]) || { accent: "#10b981", titleColor: "#34d399" };
    const pal2 = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[t2.tema.codigo]) || { accent: "#f59e0b", titleColor: "#fbbf24" };

    container.innerHTML = `
      <div class="tactical-card rounded-2xl p-5 border-2 border-amber-500/40 bg-gradient-to-br from-slate-950/95 to-emerald-950/20 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[11px] uppercase">
                📈 Plan de Choque Diario Inteligente
              </span>
              <span class="text-xs font-mono text-emerald-400">Seleccionado según tu Mapa de Calor y Peso BOD</span>
            </div>
            <h3 class="text-base sm:text-lg font-black text-white mt-1">
              🎯 Tu Orden de Operaciones para Hoy (2 Temas Prioritarios + Test + Plazos)
            </h3>
          </div>
          <button
            onclick="window.appController.rotateDailyMissionPair()"
            class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 transition"
          >
            🔄 Siguiente Par de Temas
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${[ { item: t1, pal: pal1, label: "OBJETIVO 1 DEL DÍA" }, { item: t2, pal: pal2, label: "OBJETIVO 2 DEL DÍA" } ].map(({ item, pal, label }) => {
            const statusText = item.netPct === -1 ? "Pendiente de estrenar" : `${item.netPct}% dominio neto`;
            return `
              <div class="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between space-y-3" style="border-left: 5px solid ${pal.accent};">
                <div>
                  <div class="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span class="font-black text-amber-400">${label} • ${item.tema.codigo}</span>
                    <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">${statusText}</span>
                  </div>
                  <h4 class="text-sm font-black leading-snug" style="color:${pal.titleColor};">${item.tema.titulo}</h4>
                  <p class="text-[11px] text-slate-400 mt-1">📊 Peso en examen: <strong class="text-slate-200">${item.tema.frecuenciaExamen || "Alto"}</strong></p>
                </div>
                <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  <button onclick="window.appController.openSchemaModal('${item.tema.codigo}')" class="px-2.5 py-1.5 rounded-lg bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-700 text-[11px] font-bold transition">
                    📊 Esquema Visual
                  </button>
                  <button onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${item.tema.codigo}')" class="px-2.5 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-700 text-[11px] font-bold transition">
                    📄 Chuleta PDF
                  </button>
                  <button onclick="window.appController.startTopicStudy('${item.tema.codigo}')" class="px-2.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-black transition ml-auto">
                    💡 Estudiar Tema ➔
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="pt-2 flex flex-wrap items-center justify-between gap-2.5 border-t border-slate-800/80">
          <button
            onclick="window.appController.startDailyMissionTest('${t1.tema.codigo}', '${t2.tema.codigo}')"
            class="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition text-center shadow-lg shadow-amber-500/10"
          >
            🚀 Lanzar Test de Misión Diaria (20 preg. de ${t1.tema.codigo} + ${t2.tema.codigo} + Fallos)
          </button>
          <button
            onclick="window.appController.openPlazosFlashcards()"
            class="py-3 px-4 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-600 font-black text-xs uppercase tracking-wider transition"
          >
            ⏱️ Repaso 2 Min: Tarjetas de Plazos y Sanciones (42)
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // RADAR Y LISTADO DE LOS 21 TEMAS SEPARADOS POR COLORES Y BLOQUES
  // ==========================================
  renderHeatmap() {
    const container = document.getElementById("dash-heatmap-grid");
    if (!container || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const topicStats = window.storageManager.getTopicStats();
    const bloquesConfig = [
      {
        key: "Bloque 1: Organización",
        titulo: "🏛️ BLOQUE 1: ORGANIZACIÓN (6 Temas • ~34% Examen)",
        headerBg: "bg-emerald-950/80 border-emerald-600/50 text-emerald-300"
      },
      {
        key: "Bloque 2: Jurídico-Social",
        titulo: "⚖️ BLOQUE 2: JURÍDICO-SOCIAL (8 Temas • ~40% Examen)",
        headerBg: "bg-amber-950/80 border-amber-600/50 text-amber-300"
      },
      {
        key: "Bloque 3: Seguridad Nacional",
        titulo: "🌍 BLOQUE 3: SEGURIDAD NACIONAL (7 Temas • ~26% Examen)",
        headerBg: "bg-sky-950/80 border-sky-600/50 text-sky-300"
      }
    ];

    container.className = "grid grid-cols-1 lg:grid-cols-3 gap-4";
    container.innerHTML = bloquesConfig.map(bl => {
      const temasBloque = OFFICIAL_SYLLABUS.filter(t => t.bloque === bl.key);

      return `
        <div class="rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden flex flex-col">
          <div class="px-4 py-2.5 border-b font-black text-xs uppercase tracking-wider ${bl.headerBg}">
            ${bl.titulo}
          </div>
          <div class="divide-y divide-slate-800/70">
            ${temasBloque.map(tema => {
              const pal = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[tema.codigo]) || { accent: "#10b981", bg: "rgba(16,185,129,0.08)", titleColor: "#34d399" };
              const st = topicStats[tema.codigo] || { correct: 0, wrong: 0 };
              const total = st.correct + st.wrong;
              let pctBadge = `<span class="text-[10px] font-mono text-slate-400">Sin test</span>`;

              if (total > 0) {
                const net = Math.max(0, st.correct - st.wrong / 3);
                const pct = Math.round((net / total) * 100);
                const cls = pct >= 70 ? "text-emerald-400" : pct >= 50 ? "text-amber-400" : "text-red-400";
                pctBadge = `<span class="text-[11px] font-mono font-black ${cls}">${pct}%</span>`;
              }

              const shortTitle = tema.titulo.replace(/^Tema\s+\d+\.\s*/i, "");

              return `
                <div
                  class="p-3 hover:bg-slate-900/90 transition flex items-center justify-between gap-2"
                  style="border-left: 5px solid ${pal.accent}; background: ${pal.bg};"
                >
                  <div class="min-w-0 flex-1 cursor-pointer" onclick="window.appController.openTopicDetail('${tema.codigo}')">
                    <div class="flex items-center space-x-2">
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-black bg-slate-950 text-white border" style="border-color:${pal.accent};">
                        ${tema.codigo}
                      </span>
                      ${pctBadge}
                    </div>
                    <div class="text-xs font-extrabold leading-snug mt-1" style="color:${pal.titleColor};">
                      ${shortTitle}
                    </div>
                  </div>

                  <div class="flex items-center space-x-1 shrink-0">
                    <button
                      onclick="window.appController.openSchemaModal('${tema.codigo}')"
                      class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs"
                      title="Ver Esquema Visual de Colores y Descargar PDF"
                    >📊</button>
                    <button
                      onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${tema.codigo}')"
                      class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs"
                      title="Descargar Chuleta Táctica en PDF"
                    >📄</button>
                    <button
                      onclick="window.appController.startTopicStudy('${tema.codigo}')"
                      class="px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] uppercase"
                      title="Iniciar Test en Modo Estudio"
                    >Test</button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  // ==========================================
  // VISOR DE TEMARIO TÁCTICO POR FILAS DE COLORES + ESQUEMAS Y CHULETAS PDF
  // ==========================================
  filterTemario(bloque) {
    this.selectedSyllabusFilter = bloque;
    this.renderTemario();
  }

  searchTemario(query) {
    this.temarioSearchQuery = (query || "").trim();
    this.renderTemario();
  }

  clearTemarioSearch() {
    this.temarioSearchQuery = "";
    const input = document.getElementById("temario-search-input");
    if (input) input.value = "";
    this.renderTemario();
  }

  toggleTopicRow(temaCodigo) {
    if (this.expandedTopics.has(temaCodigo)) {
      this.expandedTopics.delete(temaCodigo);
    } else {
      this.expandedTopics.add(temaCodigo);
    }
    this.renderTemario();
  }

  toggleExpandAllTopics() {
    if (typeof OFFICIAL_SYLLABUS === "undefined") return;
    if (this.expandedTopics.size >= OFFICIAL_SYLLABUS.length) {
      this.expandedTopics.clear();
    } else {
      OFFICIAL_SYLLABUS.forEach(t => this.expandedTopics.add(t.codigo));
    }
    this.renderTemario();
  }

  openSchemaModal(temaCodigo) {
    if (typeof OFFICIAL_SYLLABUS === "undefined" || typeof VISUAL_SCHEMAS === "undefined") return;
    const tema = OFFICIAL_SYLLABUS.find(t => t.codigo === temaCodigo);
    const schema = VISUAL_SCHEMAS[temaCodigo];
    if (!tema || !schema) return;

    const modal = document.getElementById("schema-modal");
    const content = document.getElementById("schema-modal-body");
    if (!modal || !content) return;

    const pal = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[tema.codigo]) || { accent: "#f59e0b", titleColor: "#fbbf24" };

    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded font-mono font-black text-xs bg-amber-500 text-slate-950">${tema.codigo}</span>
              <span class="text-xs font-bold text-slate-400 uppercase">${tema.bloque}</span>
              <span class="text-xs font-mono text-emerald-400">${tema.frecuenciaExamen || ""}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-black mt-1" style="color:${pal.titleColor};">${tema.titulo}</h3>
            <p class="text-xs font-mono text-slate-400">📜 ${tema.normativa}</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              onclick="window.pdfGenerator.downloadVisualSchemaPDF('${tema.codigo}')"
              class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition flex items-center space-x-1.5 shadow-lg"
            >
              <span>🖨️</span><span>Descargar Esquema en PDF (A Todo Color)</span>
            </button>
            <button
              onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${tema.codigo}')"
              class="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider transition flex items-center space-x-1.5"
            >
              <span>📄</span><span>Chuleta + Preguntas PDF</span>
            </button>
            <button
              onclick="window.appController.closeSchemaModal()"
              class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cerrar ✕
            </button>
          </div>
        </div>

        <!-- Leyenda de Colores y Nivel Administrativo -->
        <div class="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-xs">
          <span class="font-black text-amber-400 uppercase">🎨 Leyenda del Esquema:</span>
          ${(schema.leyenda || []).map(l => `
            <span class="flex items-center space-x-1.5 text-slate-200 font-semibold">
              <span class="w-3 h-3 rounded inline-block" style="background:${l.color};"></span>
              <span>${l.texto}</span>
            </span>
          `).join("")}
        </div>

        <!-- Diagrama / Organigrama / Infografía -->
        <div class="p-3 sm:p-4 rounded-2xl bg-slate-950/95 border border-slate-800">
          ${schema.htmlDiagrama}
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
  }

  closeSchemaModal() {
    const modal = document.getElementById("schema-modal");
    if (modal) modal.classList.add("hidden");
  }

  renderTemario() {
    const container = document.getElementById("temario-topics-container");
    const searchResultsContainer = document.getElementById("temario-search-questions-container");
    if (!container || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const allQuestions = window.storageManager.getQuestions();
    const topicStats = window.storageManager.getTopicStats();
    const rawQuery = (this.temarioSearchQuery || "").toLowerCase();

    let filtered = this.selectedSyllabusFilter === "ALL"
      ? OFFICIAL_SYLLABUS
      : OFFICIAL_SYLLABUS.filter(t => t.bloque === this.selectedSyllabusFilter);

    if (rawQuery) {
      filtered = filtered.filter(t => {
        const haystack = [
          t.codigo,
          t.bloque,
          t.titulo,
          t.normativa,
          t.resumen,
          ...(t.puntosCalientes || []),
          ...(t.trampas || [])
        ].join(" ").toLowerCase();
        return haystack.includes(rawQuery);
      });

      const matchingQuestions = allQuestions.filter(q => {
        const qHaystack = [
          q.temaCodigo,
          q.materia,
          q.pregunta,
          ...(q.opciones || []),
          q.referencia,
          q.ubicacionTemario,
          q.consejoAcademia,
          q.justificacion
        ].join(" ").toLowerCase();
        return qHaystack.includes(rawQuery);
      });

      if (searchResultsContainer) {
        searchResultsContainer.classList.remove("hidden");
        if (matchingQuestions.length === 0) {
          searchResultsContainer.innerHTML = `
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
              🔍 No se encontraron preguntas específicas con el término <strong>"${this.temarioSearchQuery}"</strong>.
            </div>
          `;
        } else {
          searchResultsContainer.innerHTML = `
            <div class="tactical-card rounded-2xl p-5 border border-amber-500/50 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-sm font-black uppercase text-amber-400">
                  🎯 ${matchingQuestions.length} Preguntas de Examen encontradas para "${this.temarioSearchQuery}"
                </h3>
                <button onclick="window.appController.clearTemarioSearch()" class="text-xs text-slate-400 hover:text-white underline">
                  Limpiar búsqueda ✕
                </button>
              </div>
              <div class="space-y-3 max-h-[520px] overflow-y-auto pr-1">
                ${matchingQuestions.slice(0, 20).map(q => `
                  <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-mono font-bold">${q.temaCodigo} • ${q.materia}</span>
                      <span class="text-emerald-400 font-mono">${q.referencia || ""}</span>
                    </div>
                    ${q.ubicacionTemario ? `<div class="text-[11px] font-mono text-slate-400">📍 ${q.ubicacionTemario}</div>` : ""}
                    <p class="text-slate-100 font-bold text-sm">${q.pregunta}</p>
                    <div class="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-700/50 text-emerald-300">
                      <strong>✅ Respuesta Oficial:</strong> ${q.opciones[q.correcta]}
                    </div>
                    <p class="text-slate-300 leading-relaxed">${q.justificacion}</p>
                    ${q.consejoAcademia ? `<div class="p-2 rounded bg-amber-950/30 border border-amber-700/40 text-amber-200">💡 <strong>Truco Academia:</strong> ${q.consejoAcademia}</div>` : ""}
                  </div>
                `).join("")}
              </div>
            </div>
          `;
        }
      }
    } else if (searchResultsContainer) {
      searchResultsContainer.classList.add("hidden");
      searchResultsContainer.innerHTML = "";
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="tactical-card rounded-2xl p-8 text-center text-slate-400">
          No hay temas que coincidan con el filtro actual.
        </div>
      `;
      return;
    }

    // Agrupamos el listado por Bloques con cabeceras de color diferenciadas
    const bloquesOrder = [
      {
        key: "Bloque 1: Organización",
        banner: "🏛️ BLOQUE 1: ORGANIZACIÓN (6 Temas Oficiales • ~34% de las preguntas del examen)",
        bannerStyle: "background: linear-gradient(90deg, rgba(6,95,70,0.9), rgba(15,23,42,0.9)); border-color: #10b981; color: #6ee7b7;"
      },
      {
        key: "Bloque 2: Jurídico-Social",
        banner: "⚖️ BLOQUE 2: JURÍDICO-SOCIAL (8 Temas Oficiales • ~40% de las preguntas del examen)",
        bannerStyle: "background: linear-gradient(90deg, rgba(146,64,14,0.9), rgba(15,23,42,0.9)); border-color: #f59e0b; color: #fde68a;"
      },
      {
        key: "Bloque 3: Seguridad Nacional",
        banner: "🌍 BLOQUE 3: SEGURIDAD NACIONAL Y OO.II. (7 Temas Oficiales • ~26% de las preguntas del examen)",
        bannerStyle: "background: linear-gradient(90deg, rgba(7,89,133,0.9), rgba(15,23,42,0.9)); border-color: #38bdf8; color: #bae6fd;"
      }
    ];

    container.innerHTML = `
      <div class="flex items-center justify-between px-1 mb-2">
        <span class="text-xs text-slate-400">
          🎨 <strong>Listado Táctico por Filas de Colores:</strong> Pulsa sobre cualquier fila para desplegar u ocultar su Esquema Visual, Resumen y Trampas.
        </span>
        <button
          onclick="window.appController.toggleExpandAllTopics()"
          class="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 transition"
        >
          📂 Expandir / Contraer Todos
        </button>
      </div>
    ` + bloquesOrder.map(bl => {
      const temasGrupo = filtered.filter(t => t.bloque === bl.key);
      if (temasGrupo.length === 0) return "";

      return `
        <div class="space-y-2.5 mb-6">
          <div class="p-3.5 rounded-xl border-l-4 font-black text-xs sm:text-sm uppercase tracking-wider shadow" style="${bl.bannerStyle}">
            ${bl.banner}
          </div>

          <div class="space-y-2.5">
            ${temasGrupo.map(tema => {
              const qCount = allQuestions.filter(q => q.temaCodigo === tema.codigo).length;
              const pal = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[tema.codigo]) || {
                accent: "#10b981",
                bg: "rgba(16,185,129,0.1)",
                border: "rgba(16,185,129,0.45)",
                titleColor: "#34d399"
              };
              const isExpanded = rawQuery ? true : this.expandedTopics.has(tema.codigo);
              const schema = (typeof VISUAL_SCHEMAS !== "undefined") ? VISUAL_SCHEMAS[tema.codigo] : null;

              const st = topicStats[tema.codigo] || { correct: 0, wrong: 0 };
              const totalAns = st.correct + st.wrong;
              const masteryPct = totalAns > 0 ? `${Math.round((Math.max(0, st.correct - st.wrong / 3) / totalAns) * 100)}% dominio` : "Sin test";

              return `
                <div
                  id="topic-card-${tema.codigo}"
                  class="rounded-2xl transition overflow-hidden"
                  style="background: ${pal.bg}; border: 1.5px solid ${pal.border}; border-left: 7px solid ${pal.accent};"
                >
                  <!-- FILA PRINCIPAL DEL TEMA CON TÍTULO DE COLOR Y BOTONES DIRECTOS -->
                  <div class="p-3.5 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div
                      class="flex-1 cursor-pointer select-none"
                      onclick="window.appController.toggleTopicRow('${tema.codigo}')"
                    >
                      <div class="flex flex-wrap items-center gap-2 mb-1">
                        <span class="px-2.5 py-0.5 rounded text-xs font-mono font-black bg-slate-950 text-white border" style="border-color:${pal.accent};">
                          ${tema.codigo}
                        </span>
                        <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-950/90 text-amber-300 border border-amber-500/30">
                          📊 ${tema.frecuenciaExamen || "Alta frecuencia"}
                        </span>
                        <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-slate-300 border border-slate-800">
                          🎯 ${masteryPct}
                        </span>
                        <span class="text-xs font-bold text-slate-400 ml-auto lg:ml-2">
                          ${isExpanded ? "🔼 Ocultar ficha" : "🔽 Desplegar ficha y esquema"}
                        </span>
                      </div>

                      <h3 class="text-base sm:text-lg font-black leading-snug" style="color: ${pal.titleColor};">
                        ${tema.titulo}
                      </h3>
                      <p class="text-xs font-mono text-slate-300 mt-0.5">📜 ${tema.normativa}</p>
                    </div>

                    <!-- Botonera Táctica de la Fila -->
                    <div class="flex flex-wrap items-center gap-1.5 shrink-0">
                      <button
                        onclick="window.appController.openSchemaModal('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 text-sky-200 border border-sky-500/60 text-xs font-black transition flex items-center space-x-1"
                        title="Abrir Esquema Visual con colores, subrayados y flechas + Descargar en PDF"
                      >
                        <span>📊</span><span>Esquema PDF</span>
                      </button>

                      <button
                        onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-amber-950/90 hover:bg-amber-900 text-amber-200 border border-amber-500/60 text-xs font-black transition flex items-center space-x-1"
                        title="Descargar Chuleta Táctica en PDF (Resumen + Trampas + Preguntas del Tema)"
                      >
                        <span>📄</span><span>Chuleta PDF</span>
                      </button>

                      <button
                        onclick="window.appController.speakTopic('${tema.codigo}')"
                        class="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 transition"
                        title="Escuchar tema en audio"
                      >
                        🔊 Audio
                      </button>

                      <button
                        onclick="window.appController.startTopicStudy('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-black uppercase transition"
                        title="Entrenar con corrección instantánea"
                      >
                        💡 Estudio (${qCount})
                      </button>

                      <button
                        onclick="window.appController.startTopicTest('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase transition"
                        title="Hacer test oficial del tema"
                      >
                        🎯 Test (${qCount})
                      </button>
                    </div>
                  </div>

                  <!-- PANEL DESPLEGABLE DEL TEMA (ESQUEMA VISUAL + RESUMEN + PUNTOS CALIENTES + TRAMPAS) -->
                  <div class="${isExpanded ? "block" : "hidden"} p-4 pt-2 border-t border-slate-800/80 bg-slate-950/80 space-y-4">
                    ${schema ? `
                      <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                          <span class="text-xs font-black uppercase text-amber-400">
                            📊 ${schema.subtituloPoster}
                          </span>
                          <button
                            onclick="window.pdfGenerator.downloadVisualSchemaPDF('${tema.codigo}')"
                            class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] uppercase"
                          >
                            🖨️ Guardar este Esquema en PDF (A4 Color)
                          </button>
                        </div>
                        ${schema.htmlDiagrama}
                      </div>
                    ` : ""}

                    <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <strong class="text-amber-400 uppercase text-xs block mb-1">📌 Resumen Ejecutivo:</strong>
                      ${tema.resumen}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div class="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-800/60 space-y-1.5">
                        <strong class="text-emerald-400 uppercase text-xs block">🔥 Puntos Calientes de Examen (BOD):</strong>
                        <ul class="space-y-1 text-xs text-slate-200">
                          ${tema.puntosCalientes.map(p => `<li class="leading-relaxed">• ${p}</li>`).join("")}
                        </ul>
                      </div>

                      <div class="p-3.5 rounded-xl bg-red-950/25 border border-red-800/60 space-y-1.5">
                        <strong class="text-red-400 uppercase text-xs block">🪤 Trampas Frecuentes del Tribunal:</strong>
                        <ul class="space-y-1 text-xs text-red-200">
                          ${tema.trampas.map(t => `<li class="leading-relaxed">${t}</li>`).join("")}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  openTopicDetail(temaCodigo) {
    this.selectedSyllabusFilter = "ALL";
    this.temarioSearchQuery = "";
    this.expandedTopics.add(temaCodigo);
    const input = document.getElementById("temario-search-input");
    if (input) input.value = "";
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

  startTopicStudy(temaCodigo) {
    this.startSimulatorWithParams({ count: 30, bloque: "ALL", mode: "tema", temaCodigo, studyMode: true });
  }

  startTopicTest(temaCodigo) {
    this.startSimulatorWithParams({ count: 30, bloque: "ALL", mode: "tema", temaCodigo, studyMode: false });
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
    this.startSimulatorWithParams({ count: 30, bloque: "ALL", mode: "trampas", studyMode: true });
  }

  startOfficialExamTest() {
    this.startSimulatorWithParams({ count: 40, bloque: "ALL", mode: "examen_real", studyMode: false });
  }

  // ==========================================
  // SIMULADOR: CONFIGURACIÓN E INICIO
  // ==========================================
  startSimulatorWithParams({ count = 20, bloque = "ALL", mode = "official", temaCodigo = null, studyMode = false }) {
    const res = window.simulatorEngine.startSession({ count, bloque, mode, temaCodigo, studyMode });
    if (!res.ok) {
      alert(res.message);
      return;
    }

    this.showTab("simulator-active");
    this.renderSimulatorQuestion();
    this.renderSimulatorGrid();
  }

  toggleSimStudyMode() {
    window.simulatorEngine.toggleStudyMode();
    this.renderSimulatorQuestion();
  }

  checkCurrentQuestionNow() {
    const idx = window.simulatorEngine.currentIndex;
    const ans = window.simulatorEngine.answers[idx];
    if (ans === null || ans === undefined) {
      alert("Selecciona primero una opción (A, B, C o D) para comprobar la respuesta.");
      return;
    }
    window.simulatorEngine.revealCurrentQuestion();
    this.renderSimulatorQuestion();
  }

  renderSimulatorQuestion() {
    const q = window.simulatorEngine.getCurrentQuestion();
    const idx = window.simulatorEngine.currentIndex;
    const total = window.simulatorEngine.questions.length;
    const userAnswer = window.simulatorEngine.answers[idx];
    const isFlagged = window.simulatorEngine.flagged.has(idx);
    const isStudyMode = window.simulatorEngine.studyMode;
    const isRevealed = window.simulatorEngine.isCurrentRevealed() && userAnswer !== null && userAnswer !== undefined;

    const counterEl = document.getElementById("sim-question-counter");
    if (counterEl) counterEl.textContent = `Pregunta ${idx + 1} de ${total}`;

    const studyBtn = document.getElementById("sim-btn-study-mode");
    if (studyBtn) {
      if (isStudyMode) {
        studyBtn.innerHTML = `💡 <span>Modo Estudio: ON</span>`;
        studyBtn.className = "px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-600 text-xs font-bold transition";
      } else {
        studyBtn.innerHTML = `💡 <span>Modo Estudio: OFF</span>`;
        studyBtn.className = "px-3 py-1 rounded-lg bg-slate-900 text-slate-400 border border-slate-700 text-xs font-bold transition";
      }
    }

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
        const isCorrectOpt = q.correcta === oIdx;
        let selectedClass = isSelected ? "selected border-amber-500 bg-amber-950/30 ring-1 ring-amber-500" : "";
        let badgeStyle = isSelected ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300";

        if (isRevealed) {
          if (isCorrectOpt) {
            selectedClass = "border-emerald-500 bg-emerald-950/40 ring-2 ring-emerald-500";
            badgeStyle = "bg-emerald-500 text-slate-950";
          } else if (isSelected && !isCorrectOpt) {
            selectedClass = "border-red-500 bg-red-950/40 ring-1 ring-red-500";
            badgeStyle = "bg-red-500 text-white";
          }
        }

        return `
          <button 
            type="button" 
            onclick="window.appController.selectSimOption(${oIdx})"
            class="option-btn w-full p-4 rounded-xl text-left flex items-start space-x-3.5 ${selectedClass}"
          >
            <span class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${badgeStyle}">
              ${letters[oIdx]}
            </span>
            <span class="text-sm sm:text-base leading-relaxed text-slate-200 mt-1">
              ${opt}
            </span>
          </button>
        `;
      }).join("");
    }

    // Panel de retroalimentación instantánea (Modo Estudio / Comprobar respuesta)
    const feedbackEl = document.getElementById("sim-instant-feedback");
    if (feedbackEl) {
      if (isRevealed) {
        const isRight = userAnswer === q.correcta;
        feedbackEl.classList.remove("hidden");
        feedbackEl.innerHTML = `
          <div class="p-4 rounded-xl border ${isRight ? "bg-emerald-950/30 border-emerald-600/60" : "bg-red-950/30 border-red-600/60"} space-y-2.5 text-xs">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="font-black text-sm uppercase ${isRight ? "text-emerald-400" : "text-red-400"}">
                ${isRight ? "✅ ¡ACIERTO OFICIAL! (+1.00 pt)" : `❌ FALLO (-0.33 pts) • La respuesta correcta es la ${letters[q.correcta]}`}
              </span>
              <span class="px-2 py-0.5 rounded bg-slate-900 text-amber-400 font-mono border border-slate-700">
                ${q.referencia || "Temario Oficial BOD"}
              </span>
            </div>

            ${q.ubicacionTemario ? `
              <div class="px-2.5 py-1.5 rounded bg-slate-950/80 border border-slate-800 text-emerald-300 font-mono text-[11px]">
                📍 <strong>Ubicación en el Temario:</strong> ${q.ubicacionTemario}
              </div>
            ` : ""}

            <p class="text-slate-200 leading-relaxed">
              <strong class="text-amber-400">⚖️ Fundamentación Normativa:</strong> ${q.justificacion}
            </p>

            ${q.consejoAcademia ? `
              <div class="p-2.5 rounded-lg bg-amber-950/40 border border-amber-700/50 text-amber-200 leading-relaxed">
                <strong class="text-amber-400 uppercase block mb-0.5">💡 Truco / Sugerencia de Academia:</strong>
                ${q.consejoAcademia}
              </div>
            ` : ""}
          </div>
        `;
      } else {
        feedbackEl.classList.add("hidden");
        feedbackEl.innerHTML = "";
      }
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
      const ans = window.simulatorEngine.answers[i];
      const isAnswered = ans !== null && ans !== undefined;
      const isFlagged = window.simulatorEngine.flagged.has(i);
      const isRevealed = window.simulatorEngine.revealed.has(i) && isAnswered;
      const q = window.simulatorEngine.questions[i];

      let bgClass = "bg-slate-800/80 text-slate-400 border-slate-700";
      if (isCurrent) {
        bgClass = "ring-2 ring-amber-400 font-black text-amber-300 bg-slate-800";
      } else if (isFlagged) {
        bgClass = "bg-amber-950/60 text-amber-300 border-amber-600";
      } else if (isRevealed && q) {
        bgClass = ans === q.correcta
          ? "bg-emerald-950/80 text-emerald-300 border-emerald-500"
          : "bg-red-950/80 text-red-300 border-red-500";
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
  // SUPER-MAZO DE TARJETAS FLASHCARDS (ANKI MILITAR — 86 TARJETAS)
  // ==========================================
  filterFlashcards(filterType) {
    this.fcFilter = filterType;
    this.fcIndex = 0;
    this.renderFlashcards();
  }

  renderFlashcards() {
    const learnedList = window.storageManager.getLearnedFlashcards();
    let list = [...DEFAULT_FLASHCARDS];

    if (this.fcFilter === "PLAZOS") {
      list = list.filter(c => c.esPlazo === true);
    } else if (this.fcFilter === "PENDIENTES") {
      list = list.filter(c => !learnedList.includes(c.id));
      if (list.length === 0) list = [...DEFAULT_FLASHCARDS];
    } else if (this.fcFilter !== "ALL") {
      list = list.filter(c => c.bloque === this.fcFilter);
    }

    this.fcList = list;
    if (this.fcIndex >= this.fcList.length) {
      this.fcIndex = 0;
    }

    const filterLabelEl = document.getElementById("fc-active-filter-label");
    if (filterLabelEl) {
      const names = {
        "ALL": `Todas las Tarjetas (${DEFAULT_FLASHCARDS.length})`,
        "PLAZOS": `⏱️ Solo Plazos, Sanciones y Mayorías (${list.length})`,
        "Bloque 1: Organización": `🏛️ Bloque 1: Organización (${list.length})`,
        "Bloque 2: Jurídico-Social": `⚖️ Bloque 2: Jurídico-Social (${list.length})`,
        "Bloque 3: Seguridad Nacional": `🌍 Bloque 3: Seguridad Nacional (${list.length})`,
        "PENDIENTES": `🔄 Pendientes de Dominar (${list.length})`
      };
      filterLabelEl.textContent = names[this.fcFilter] || "Mazo Activo";
    }

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

    if (bloqueEl) {
      bloqueEl.textContent = `${card.temaCodigo || ""} • ${card.bloque}${card.esPlazo ? " • ⏱️ PLAZO/SANCIÓN" : ""}`;
    }
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
