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
    this.activeHighlighterColor = "yellow";
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
    if (tabName === "simulator-active") {
      this.stopAudio();
    }
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
      "tab-baremo",
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
    } else if (tabName === "simulator-config") {
      this.renderOfficialExamPacks();
    } else if (tabName === "baremo") {
      this.renderBaremoTab();
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
    if (window.cloudSyncManager && typeof window.cloudSyncManager.updateHeaderIndicator === "function") {
      window.cloudSyncManager.updateHeaderIndicator();
    }
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
    this.renderBaremoCalculator();
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
  // 🎖️ CALCULADORA OFICIAL DE BAREMO (CONCURSO 0–100 + OPOSICIÓN 0–100) Y SIMULADOR "¿ESTOY EN PLAZA?"
  // ==========================================
  calculateBaremoBreakdown(b) {
    const mesesPref = Math.max(0, Number(b.mesesPreferente || 0));
    const mesesOtras = Math.max(0, Number(b.mesesOtras || 0));
    const mesesMision = Math.min(24, Math.max(0, Number(b.mesesMision || 0)));
    const empleoPts = Math.max(0, Number(b.empleo || 0));
    const recompPts = Math.max(0, Number(b.recompensasPuntos || 0));

    const tiempoPts = (mesesPref * 0.08) + (mesesOtras * 0.04);
    const misionPts = mesesMision * 0.10;
    const profRaw = tiempoPts + misionPts + empleoPts + recompPts;
    const profTotal = Math.min(40, profRaw);

    const titulacionPts = Math.max(0, Number(b.titulacionPuntos || 0));
    const inglesPts = Math.max(0, Number(b.inglesPuntos || 0));
    const otroIdiomaPts = Math.max(0, Number(b.otroIdiomaPuntos || 0));
    const cursosEsp = Math.min(4, Math.max(0, Number(b.cursosEspecializacion || 0))) * 2.0;
    const cursosInf = Math.min(4, Math.max(0, Number(b.cursosInformativos || 0))) * 0.5;
    const acadRaw = titulacionPts + inglesPts + otroIdiomaPts + cursosEsp + cursosInf;
    const acadTotal = Math.min(20, acadRaw);

    const ipecMedia = Math.min(10, Math.max(0, Number(b.ipecMedia || 0)));
    const ipecTotal = Math.min(25, ipecMedia * 2.5);

    const fisicasTotal = Math.min(15, Math.max(0, Number(b.fisicasPuntos || 0)));

    const concursoTotal = Number((profTotal + acadTotal + ipecTotal + fisicasTotal).toFixed(2));
    return {
      profTotal: Number(profTotal.toFixed(2)),
      acadTotal: Number(acadTotal.toFixed(2)),
      ipecTotal: Number(ipecTotal.toFixed(2)),
      fisicasTotal: Number(fisicasTotal.toFixed(2)),
      concursoTotal
    };
  }

  updateBaremoField(field, value) {
    const numVal = Number(value);
    window.storageManager.saveBaremo({ [field]: isNaN(numVal) ? 0 : numVal });
    this.renderBaremoCalculator();
    this.renderBaremoTab();
  }

  addMedalPoints(delta) {
    const b = window.storageManager.getBaremo();
    if (delta === 0) {
      window.storageManager.saveBaremo({ recompensasPuntos: 0 });
    } else {
      const next = Math.min(25, Math.max(0, Number(((Number(b.recompensasPuntos || 0)) + Number(delta)).toFixed(2))));
      window.storageManager.saveBaremo({ recompensasPuntos: next });
    }
    this.renderBaremoCalculator();
    this.renderBaremoTab();
  }

  _buildBaremoWidgetHTML(isFullTab = false) {
    const b = window.storageManager.getBaremo();
    const calc = this.calculateBaremoBreakdown(b);
    const history = window.storageManager.getSimulatorHistory();

    // Calcular nota media de examen sobre 100 puntos
    let avgExam100 = 65.0;
    let hasRealHistory = false;
    if (history.length > 0) {
      hasRealHistory = true;
      const recent = history.slice(0, 5);
      const avg10 = recent.reduce((acc, h) => acc + Number(h.scoreOutOf10 || 0), 0) / recent.length;
      avgExam100 = Number((avg10 * 10).toFixed(2));
    }

    const totalFinal200 = Number((calc.concursoTotal + avgExam100).toFixed(2));
    const corteObjetivo = Number(b.ejercitoCorte || 130.5);
    const diffCorte = Number((totalFinal200 - corteObjetivo).toFixed(2));
    const notaExamenNecesaria = Number(Math.max(50, corteObjetivo - calc.concursoTotal).toFixed(2));
    const inPlaza = totalFinal200 >= corteObjetivo && avgExam100 >= 50;

    return `
      <div class="tactical-card rounded-2xl p-5 sm:p-6 border-2 border-emerald-500/50 bg-gradient-to-br from-slate-950 via-slate-900/95 to-emerald-950/20 space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-xs uppercase">
                🎖️ Calculadora Oficial de Baremo + Simulador "¿Estoy en Plaza?"
              </span>
              <span class="text-xs font-mono text-amber-300">
                Anexo II Orden DEF/1341/2017 + Orden DEF/15/2026 (Pruebas Físicas Unificadas)
              </span>
            </div>
            <h3 class="text-base sm:text-xl font-black text-white mt-1.5">
              📊 Fase Concurso (0–100 pts) + Fase Oposición (0–100 pts) = Nota Final de Escalafón (0–200 pts)
            </h3>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs text-slate-300 font-bold">Especialidad / Corte Ref.:</span>
            <select
              onchange="window.appController.updateBaremoField('ejercitoCorte', this.value)"
              class="p-2 rounded-xl bg-slate-950 border border-amber-500/60 text-xs font-black text-amber-300"
            >
              <option value="126.5" ${corteObjetivo === 126.5 ? "selected" : ""}>🪖 ET — Especialidades Operativas (~126.5 pts)</option>
              <option value="130.5" ${corteObjetivo === 130.5 ? "selected" : ""}>🪖 ET — Corte Medio Estimado (~130.5 pts)</option>
              <option value="137.0" ${corteObjetivo === 137.0 ? "selected" : ""}>🔧 ET — Especialidades Técnicas (~137.0 pts)</option>
              <option value="134.0" ${corteObjetivo === 134.0 ? "selected" : ""}>⚓ Armada / ✈️ Ejército del Aire (~134.0 pts)</option>
            </select>
            ${!isFullTab ? `
              <button onclick="window.appController.showTab('baremo')" class="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition">
                🎖️ Abrir Pestaña Baremo ➔
              </button>
            ` : ""}
          </div>
        </div>

        <!-- Marcador Central de Plaza -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div class="p-4 rounded-xl bg-slate-950/90 border border-amber-500/40">
            <div class="text-[11px] font-mono uppercase text-amber-300 font-bold">1️⃣ Fase Concurso (Tu Baremo)</div>
            <div class="text-2xl sm:text-3xl font-black text-amber-400 mt-1">${calc.concursoTotal} <span class="text-xs font-normal text-slate-400">/ 100 pts</span></div>
            <div class="text-[11px] text-slate-300 mt-1.5">
              Prof: <strong>${calc.profTotal}/40</strong> • Acad: <strong>${calc.acadTotal}/20</strong> • IPEC: <strong>${calc.ipecTotal}/25</strong> • Fís: <strong>${calc.fisicasTotal}/15</strong>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950/90 border border-sky-500/40">
            <div class="text-[11px] font-mono uppercase text-sky-300 font-bold">2️⃣ Fase Oposición (Test 100p)</div>
            <div class="text-2xl sm:text-3xl font-black text-sky-400 mt-1">${avgExam100} <span class="text-xs font-normal text-slate-400">/ 100 pts</span></div>
            <div class="text-[11px] text-slate-300 mt-1.5">
              ${hasRealHistory ? "Media real de tus últimos simulacros" : "Estimación base 6,50/10 (haz 1 simulacro)"}
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/40">
            <div class="text-[11px] font-mono uppercase text-emerald-300 font-bold">🎯 Nota Examen Necesaria</div>
            <div class="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">${notaExamenNecesaria} <span class="text-xs font-normal text-slate-400">/ 100 pts</span></div>
            <div class="text-[11px] text-slate-300 mt-1.5">
              Con tu baremo necesitas un <strong>${(notaExamenNecesaria / 10).toFixed(2)} sobre 10</strong> en el examen oficial
            </div>
          </div>

          <div class="p-4 rounded-xl border-2 ${inPlaza ? "bg-emerald-950/40 border-emerald-500" : "bg-amber-950/30 border-amber-500/70"}">
            <div class="text-[11px] font-mono uppercase ${inPlaza ? "text-emerald-300" : "text-amber-300"} font-bold">
              ${inPlaza ? "🏆 PROYECCIÓN: ¡EN PLAZA!" : "⚠️ PROYECCIÓN: AÚN FUERA DE CORTE"}
            </div>
            <div class="text-2xl sm:text-3xl font-black text-white mt-1">
              ${totalFinal200} <span class="text-xs font-normal text-slate-300">/ 200 pts</span>
            </div>
            <div class="text-[11px] ${inPlaza ? "text-emerald-300" : "text-amber-200"} mt-1.5 font-semibold">
              ${diffCorte >= 0 ? `+${diffCorte} pts por encima del corte (${corteObjetivo})` : `Te faltan ${Math.abs(diffCorte)} pts para el corte (${corteObjetivo})`}
            </div>
          </div>
        </div>

        <!-- Los 4 Bloques Oficiales del Baremo (Abiertos y Editables en Tiempo Real) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <!-- Bloque 1: Profesionales (Máx 40) -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-amber-500/40 space-y-2.5">
            <div class="font-black text-amber-300 uppercase flex justify-between items-center border-b border-slate-800 pb-1.5">
              <span>🎖️ 1. Méritos Profesionales</span>
              <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono">${calc.profTotal} / 40</span>
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Meses en Unidad Preferente (0,08 pts/mes):</label>
              <input type="number" min="0" max="300" value="${b.mesesPreferente}" onchange="window.appController.updateBaremoField('mesesPreferente', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Meses en Otras Unidades (0,04 pts/mes):</label>
              <input type="number" min="0" max="300" value="${b.mesesOtras}" onchange="window.appController.updateBaremoField('mesesOtras', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Meses Misión Extranjero (máx 24 • 0,10/mes):</label>
              <input type="number" min="0" max="24" value="${b.mesesMision}" onchange="window.appController.updateBaremoField('mesesMision', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[11px] text-slate-300 font-semibold">Empleo actual:</label>
                <select onchange="window.appController.updateBaremoField('empleo', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white">
                  <option value="5" ${Number(b.empleo) === 5 ? "selected" : ""}>Cabo 1º (5p)</option>
                  <option value="2" ${Number(b.empleo) === 2 ? "selected" : ""}>Cabo (2p)</option>
                  <option value="1" ${Number(b.empleo) === 1 ? "selected" : ""}>Sold. 1ª (1p)</option>
                  <option value="0" ${Number(b.empleo) === 0 ? "selected" : ""}>Soldado (0p)</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] text-slate-300 font-semibold">Medallas/Felic.:</label>
                <input type="number" step="0.25" min="0" max="25" value="${b.recompensasPuntos}" onchange="window.appController.updateBaremoField('recompensasPuntos', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
            </div>
            <div class="pt-1 border-t border-slate-800/80 space-y-1">
              <span class="text-[10px] font-bold text-amber-400 uppercase block">⚡ Sumador Rápido Recompensas:</span>
              <div class="flex flex-wrap gap-1">
                <button onclick="window.appController.addMedalPoints(2.0)" class="px-1.5 py-0.5 rounded bg-amber-950/90 hover:bg-amber-900 text-amber-200 border border-amber-700 text-[10px] font-bold" title="Cruz al Mérito Militar/Naval/Aeronáutico con Distintivo Blanco (+2,00 pts)">+2,0 Cruz Blanco</button>
                <button onclick="window.appController.addMedalPoints(1.0)" class="px-1.5 py-0.5 rounded bg-amber-950/90 hover:bg-amber-900 text-amber-200 border border-amber-700 text-[10px] font-bold" title="Mención Honorífica (+1,00 pt)">+1,0 Mención</button>
                <button onclick="window.appController.addMedalPoints(0.5)" class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold" title="Felicitación Individual en Orden General (+0,50 pts)">+0,5 Fel. OG</button>
                <button onclick="window.appController.addMedalPoints(0.25)" class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold" title="Felicitación Individual anotada en Hoja de Servicios (+0,25 pts)">+0,25 Fel. HS</button>
                <button onclick="window.appController.addMedalPoints(0)" class="px-1.5 py-0.5 rounded bg-red-950/80 hover:bg-red-900 text-red-300 text-[10px] font-bold">Reset 0</button>
              </div>
            </div>
          </div>

          <!-- Bloque 2: Académicos (Máx 20) -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/40 space-y-2.5">
            <div class="font-black text-emerald-300 uppercase flex justify-between items-center border-b border-slate-800 pb-1.5">
              <span>🎓 2. Méritos Académicos</span>
              <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">${calc.acadTotal} / 20</span>
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Titulación Académica (se valora la mayor):</label>
              <select onchange="window.appController.updateBaremoField('titulacionPuntos', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white">
                <option value="6" ${Number(b.titulacionPuntos) === 6 ? "selected" : ""}>Doctor MECES 4 (6 pts)</option>
                <option value="5" ${Number(b.titulacionPuntos) === 5 ? "selected" : ""}>Máster / Licenciado MECES 3 (5 pts)</option>
                <option value="4" ${Number(b.titulacionPuntos) === 4 ? "selected" : ""}>Grado Univ. MECES 2 (4 pts)</option>
                <option value="3.5" ${Number(b.titulacionPuntos) === 3.5 ? "selected" : ""}>Diplomado / Ing. Téc. (3,5 pts)</option>
                <option value="3" ${Number(b.titulacionPuntos) === 3 ? "selected" : ""}>Técnico Superior FP GS (3 pts)</option>
                <option value="2" ${Number(b.titulacionPuntos) === 2 ? "selected" : ""}>Bachiller o equivalente (2 pts)</option>
                <option value="0" ${Number(b.titulacionPuntos) === 0 ? "selected" : ""}>ESO / Técnico GM (0 pts)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Idioma Inglés (SLP en vigor):</label>
              <select onchange="window.appController.updateBaremoField('inglesPuntos', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white">
                <option value="0" ${Number(b.inglesPuntos) === 0 ? "selected" : ""}>Sin perfil SLP inglés (0 pts)</option>
                <option value="1" ${Number(b.inglesPuntos) === 1 ? "selected" : ""}>SLP Funcional 1.1.1.1 (1 pt)</option>
                <option value="3" ${Number(b.inglesPuntos) === 3 ? "selected" : ""}>SLP Profesional 2.2.2.2 (3 pts)</option>
                <option value="5" ${Number(b.inglesPuntos) === 5 ? "selected" : ""}>SLP Experto 3.3.3.3+ (5 pts)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Otros Idiomas Extranjeros (pts SLP):</label>
              <input type="number" step="0.5" min="0" max="6" value="${b.otroIdiomaPuntos || 0}" onchange="window.appController.updateBaremoField('otroIdiomaPuntos', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[11px] text-slate-300 font-semibold">Cursos Espec. (2p):</label>
                <input type="number" min="0" max="4" value="${b.cursosEspecializacion}" onchange="window.appController.updateBaremoField('cursosEspecializacion', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
              <div>
                <label class="block text-[11px] text-slate-300 font-semibold">Cursos Inf. (0,5p):</label>
                <input type="number" min="0" max="4" value="${b.cursosInformativos}" onchange="window.appController.updateBaremoField('cursosInformativos', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
              </div>
            </div>
          </div>

          <!-- Bloque 3: IPEC (Máx 25) -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-sky-500/40 space-y-2.5">
            <div class="font-black text-sky-300 uppercase flex justify-between items-center border-b border-slate-800 pb-1.5">
              <span>📋 3. Informes IPEC</span>
              <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-300 font-mono">${calc.ipecTotal} / 25</span>
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Nota Media 5 últimos IPEC (sobre 10):</label>
              <input type="number" step="0.1" min="0" max="10" value="${b.ipecMedia}" onchange="window.appController.updateBaremoField('ipecMedia', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
            </div>
            <div class="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div>📌 <strong>Fórmula Oficial Anexo II:</strong></div>
              <div class="font-mono text-sky-300">Nota Media IPEC × 2,5 = ${calc.ipecTotal} pts</div>
              <p class="text-slate-400">Ejemplo: una media de 8,0 en los últimos 5 IPEC aporta 20,00 puntos directos sobre 25.</p>
            </div>
          </div>

          <!-- Bloque 4: Aptitud Psicofísica (Máx 15) -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-purple-500/40 space-y-2.5">
            <div class="font-black text-purple-300 uppercase flex justify-between items-center border-b border-slate-800 pb-1.5">
              <span>🏃 4. Físicas (DEF/15/2026)</span>
              <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 font-mono">${calc.fisicasTotal} / 15</span>
            </div>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Puntos Pruebas Físicas (0 a 15 pts):</label>
              <input type="number" step="0.5" min="0" max="15" value="${b.fisicasPuntos}" onchange="window.appController.updateBaremoField('fisicasPuntos', this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono" />
            </div>
            <div class="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div class="text-purple-300 font-bold">🆕 Orden DEF/15/2026 (BOE 21/01/2026):</div>
              <p class="text-slate-400 leading-relaxed">
                Unifica la evaluación física periódica en las FAS. La puntuación obtenida en el TGCF en vigor se pondera hasta un máximo de <strong>15 puntos</strong> en la fase de concurso.
              </p>
            </div>
          </div>
        </div>

        ${isFullTab ? `
          <!-- Guía Rápida del Baremo Oficial Orden DEF/1341/2017 -->
          <div class="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 text-xs">
            <h4 class="font-black text-amber-400 uppercase">📌 Desglose Oficial del Proceso Selectivo (Concurso-Oposición: 200 Puntos Totales)</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-300">
              <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <strong class="text-white block mb-1">1️⃣ Fase de Concurso (Máximo 100 pts)</strong>
                • Méritos Profesionales: hasta <strong>40 pts</strong><br>
                • Méritos Académicos (Título + SLP + Cursos): hasta <strong>20 pts</strong><br>
                • Informes Personales (IPEC × 2,5): hasta <strong>25 pts</strong><br>
                • Aptitud Psicofísica (Orden DEF/15/2026): hasta <strong>15 pts</strong>
              </div>
              <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <strong class="text-white block mb-1">2️⃣ Fase de Oposición (Máximo 100 pts)</strong>
                • 1 prueba tipo test de <strong>100 preguntas</strong> sobre los 3 Bloques del programa oficial (21 Temas BOE / 28 Temas Vídeos).<br>
                • Fórmula oficial: <code class="text-amber-300">P = A - (E / 3)</code>.<br>
                • Eliminatorio: mínimo <strong>50 puntos</strong> para no quedar excluido.
              </div>
              <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <strong class="text-white block mb-1">3️⃣ Estrategia para Subir Baremo Antes del BOD</strong>
                • Acreditar un <strong>SLP 1.1.1.1 (+1p)</strong> o <strong>2.2.2.2 (+3p)</strong> de inglés o un título de <strong>Técnico Superior FP (+3p)</strong> equivale a <strong>3 respuestas netas más</strong> en el examen oficial.
              </div>
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  renderBaremoCalculator() {
    const container = document.getElementById("baremo-calculator-container");
    if (!container) return;
    container.innerHTML = this._buildBaremoWidgetHTML(false);
  }

  renderBaremoTab() {
    const container = document.getElementById("baremo-full-tab-container");
    if (!container) return;
    container.innerHTML = this._buildBaremoWidgetHTML(true);
  }

  // ==========================================
  // 📓 CENTRAL DE "MI CUADERNO PERSONAL DE GUERRA" (MODAL + EXPORTACIÓN PDF)
  // ==========================================
  openWarNotebookModal() {
    const modal = document.getElementById("war-notebook-modal");
    const body = document.getElementById("war-notebook-modal-body");
    if (!modal || !body || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const allNotes = window.storageManager.getAllTopicNotes();
    const allHighlights = window.storageManager.getAllTopicHighlights();
    const failedList = window.storageManager.getFailedQuestions();
    const allQuestions = window.storageManager.getQuestions();

    let totalNotes = 0;
    let totalHl = 0;
    const topicsWithData = [];

    OFFICIAL_SYLLABUS.forEach(t => {
      const notes = allNotes[t.codigo] || [];
      const hl = allHighlights[t.codigo] || { items: {}, phrases: [] };
      const itemCount = Object.keys(hl.items || {}).length;
      const phraseCount = (hl.phrases || []).length;
      totalNotes += notes.length;
      totalHl += itemCount + phraseCount;

      if (notes.length > 0 || itemCount > 0 || phraseCount > 0) {
        topicsWithData.push({ tema: t, notes, hl, itemCount, phraseCount });
      }
    });

    body.innerHTML = `
      <div class="space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs uppercase">
                📓 Mi Cuaderno Personal de Guerra
              </span>
              <span class="text-xs font-mono text-emerald-400">
                📌 ${totalNotes} Post-its • 🖍️ ${totalHl} Subrayados • ⚠️ ${failedList.length} Fallos Pendientes
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-black text-white mt-1">
              Todos tus Post-its, Subrayados Fluorescentes y Fallos reunidos en un solo lugar
            </h3>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              onclick="window.appController.loadAllTeacherVideoPostIts(); window.appController.openWarNotebookModal();"
              class="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center space-x-1.5"
              title="Pega automáticamente en los 21 temas los 49 Post-its clave extraídos de los 28 vídeos de YouTube"
            >
              <span>🎬</span><span>Pegar los 49 Post-its de los 28 Vídeos</span>
            </button>
            <button
              onclick="window.pdfGenerator.downloadCompleteWarNotebookPDF()"
              class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center space-x-1.5"
            >
              <span>🖨️</span><span>Descargar Cuaderno Completo en 1 PDF</span>
            </button>
            <button
              onclick="window.appController.closeWarNotebookModal()"
              class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cerrar ✕
            </button>
          </div>
        </div>

        ${topicsWithData.length > 0 ? `
          <div class="space-y-3">
            ${topicsWithData.map(({ tema, notes, hl }) => `
              <div class="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-mono font-black text-xs">${tema.codigo}</span>
                    <strong class="text-sm text-white">${tema.titulo}</strong>
                    ${tema.equivalencia28 ? `<span class="text-[11px] font-mono text-sky-300">(${tema.equivalencia28})</span>` : ""}
                  </div>
                  <button
                    onclick="window.appController.closeWarNotebookModal(); window.appController.openStudyGuideModal('${tema.codigo}');"
                    class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 text-xs font-bold"
                  >
                    📖 Abrir Tema ➔
                  </button>
                </div>

                ${notes.length > 0 ? `
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    ${notes.map(n => `
                      <div class="p-3 rounded-xl bg-yellow-950/30 border-l-4 border-amber-400 text-xs space-y-1">
                        <div class="flex justify-between text-[10px] font-mono text-amber-300">
                          <span>${n.tag || "📌 Post-it"}</span>
                          <span>${n.fecha || ""}</span>
                        </div>
                        ${n.titulo ? `<div class="font-black text-white">${n.titulo}</div>` : ""}
                        <div class="text-slate-200 leading-relaxed">${n.texto}</div>
                      </div>
                    `).join("")}
                  </div>
                ` : ""}

                ${(hl.phrases || []).length > 0 ? `
                  <div class="space-y-1">
                    <div class="text-[11px] font-black uppercase text-emerald-400">🖍️ Frases subrayadas a mano:</div>
                    <div class="flex flex-wrap gap-1.5">
                      ${hl.phrases.map(p => `
                        <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/50 text-amber-100 text-xs font-semibold">
                          "${p.text}"
                        </span>
                      `).join("")}
                    </div>
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="p-6 rounded-2xl bg-slate-950/80 border border-dashed border-slate-700 text-center space-y-2">
            <div class="text-3xl">🖍️</div>
            <h4 class="text-sm font-black text-white">Aún no has subrayado ni pegado Post-its en los temas</h4>
            <p class="text-xs text-slate-400 max-w-lg mx-auto">
              Entra en cualquier tema pulsando <strong>📖 1. Leer Resumen</strong>, selecciona cualquier frase con el ratón o pega un Post-it amarillo/rojo. Todo se recopilará automáticamente aquí y podrás imprimirlo en un único PDF junto con tus preguntas falladas (${failedList.length} actuales).
            </p>
          </div>
        `}
      </div>
    `;

    modal.classList.remove("hidden");
  }

  closeWarNotebookModal() {
    const modal = document.getElementById("war-notebook-modal");
    if (modal) modal.classList.add("hidden");
  }

  // ==========================================
  // 💀 MODO SUPERVIVENCIA (3 VIDAS ❤️❤️❤️)
  // ==========================================
  startSurvivalMode() {
    this.startSimulatorWithParams({
      count: 50,
      bloque: "ALL",
      mode: "survival",
      studyMode: true,
      packTitle: "💀 Modo Supervivencia (3 Vidas ❤️❤️❤️)",
      customMinutes: 45
    });
  }

  // ==========================================
  // 🏷️ RENDERIZADO DE ETIQUETAS DE PREGUNTAS (EXAMEN, IMPORTANTE, FÁCIL, MEDIO, REBUSCADA, TRAMPA)
  // ==========================================
  renderQuestionTagsHTML(q) {
    if (!q) return "";
    const tags = Array.isArray(q.etiquetas) && q.etiquetas.length > 0
      ? q.etiquetas
      : [
          ...(q.esExamenOficial ? ["Pregunta de Examen"] : []),
          ...(q.dificultad === "trampa" ? ["Trampa"] : q.dificultad === "facil" ? ["Fácil"] : q.dificultad === "dificil" ? ["Rebuscada"] : ["Nivel Medio"]),
          "Importante"
        ];

    const styleMap = {
      "Pregunta de Examen": { icon: "🏛️", cls: "bg-amber-950/90 text-amber-300 border-amber-500/60" },
      "Importante":         { icon: "⭐", cls: "bg-emerald-950/90 text-emerald-300 border-emerald-500/60" },
      "Fácil":              { icon: "🟢", cls: "bg-green-950/90 text-green-300 border-green-500/60" },
      "Nivel Medio":        { icon: "🟡", cls: "bg-sky-950/90 text-sky-300 border-sky-500/60" },
      "Rebuscada":          { icon: "🟣", cls: "bg-purple-950/90 text-purple-300 border-purple-500/60" },
      "Trampa":             { icon: "🔴", cls: "bg-red-950/90 text-red-300 border-red-500/60" }
    };

    return `<div class="flex flex-wrap items-center gap-1.5">` + tags.map(t => {
      const st = styleMap[t] || { icon: "🏷️", cls: "bg-slate-900 text-slate-300 border-slate-700" };
      return `<span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wide border ${st.cls}">${st.icon} ${t}</span>`;
    }).join("") + `</div>`;
  }

  // ==========================================
  // 🖍️ SUBRAYADOR FLUORESCENTE PERSONAL + 📌 NOTAS DE ESTUDIO TIPO "POST-IT"
  // ==========================================
  escapeRegExp(str) {
    return String(str || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  applyPhraseHighlightsToHTML(html, phrases) {
    if (html === undefined || html === null) return "";
    if (!Array.isArray(phrases) || phrases.length === 0) return String(html);
    let output = String(html);
    const sorted = [...phrases].sort((a, b) => (b.text || "").length - (a.text || "").length);

    sorted.forEach(p => {
      const clean = (p.text || "").trim();
      if (clean.length < 3) return;
      const escaped = this.escapeRegExp(clean);
      const regex = new RegExp(`(${escaped})(?![^<]*>)`, "gi");
      output = output.replace(regex, `<span class="hl-${p.color || "yellow"}" title="Subrayado personal del opositor">$1</span>`);
    });
    return output;
  }

  renderEpigrafeInteractiveHTML(temaCodigo, ep, epIdx, hl, inModal = false) {
    const safeHl = hl || { items: {}, phrases: [] };
    if (ep && ep.contenido) {
      let rawHtml = this.applyPhraseHighlightsToHTML(ep.contenido, safeHl.phrases);
      rawHtml = rawHtml.replace(/<ul[^>]*>/gi, `<ul class="list-none pl-0 space-y-2 mt-2.5">`);

      let pIdx = 0;
      rawHtml = rawHtml.replace(/<p>([\s\S]*?)<\/p>/gi, (_, inner) => {
        const itemKey = `ep-${epIdx}-p-${pIdx++}`;
        const itemColor = safeHl.items ? safeHl.items[itemKey] : null;
        const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
        return `
          <div
            onclick="if(!window.getSelection || !window.getSelection().toString().trim()) window.appController.togglePointHighlight('${temaCodigo}', '${itemKey}', ${inModal})"
            title="Haz clic para subrayar / quitar subrayado fluorescente en este bloque"
            class="cursor-pointer p-2.5 sm:p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/70 text-xs sm:text-sm text-slate-200 leading-relaxed transition mb-2 ${hlBlockCls}"
          >
            ${itemColor ? `<span class="text-xs mr-1">🖍️</span>` : ""}${inner}
          </div>
        `;
      });

      let liIdx = 0;
      rawHtml = rawHtml.replace(/<li>([\s\S]*?)<\/li>/gi, (_, inner) => {
        const itemKey = `ep-${epIdx}-li-${liIdx++}`;
        const itemColor = safeHl.items ? safeHl.items[itemKey] : null;
        const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
        return `
          <li
            onclick="if(!window.getSelection || !window.getSelection().toString().trim()) window.appController.togglePointHighlight('${temaCodigo}', '${itemKey}', ${inModal})"
            title="Haz clic para subrayar / quitar subrayado fluorescente en este punto"
            class="cursor-pointer p-2.5 sm:p-3 rounded-xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800/90 text-xs sm:text-sm text-slate-100 leading-relaxed flex items-start justify-between gap-2 transition ${hlBlockCls}"
          >
            <div class="flex items-start space-x-2.5">
              <span class="text-amber-400 font-black shrink-0 mt-0.5">${itemColor ? "🖍️" : "▸"}</span>
              <div class="leading-relaxed">${inner}</div>
            </div>
            <span class="text-[10px] font-mono text-slate-500 shrink-0">${itemColor ? "Subrayado" : "🖍️"}</span>
          </li>
        `;
      });

      return rawHtml;
    }

    const expHtml = ep && ep.explicacion
      ? `<p class="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2">${this.applyPhraseHighlightsToHTML(ep.explicacion, safeHl.phrases)}</p>`
      : "";
    const ptsHtml = Array.isArray(ep && ep.puntos)
      ? `<div class="space-y-2 pt-1">` + ep.puntos.map((pt, ptIdx) => {
          const itemKey = `ep-${epIdx}-${ptIdx}`;
          const itemColor = safeHl.items ? safeHl.items[itemKey] : null;
          const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
          return `
            <div
              onclick="if(!window.getSelection || !window.getSelection().toString().trim()) window.appController.togglePointHighlight('${temaCodigo}', '${itemKey}', ${inModal})"
              class="cursor-pointer p-2.5 sm:p-3 rounded-xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800/90 text-xs sm:text-sm text-slate-100 leading-relaxed flex items-start justify-between gap-2 transition ${hlBlockCls}"
            >
              <div class="flex items-start space-x-2.5">
                <span class="text-amber-400 font-black shrink-0 mt-0.5">${itemColor ? "🖍️" : "▸"}</span>
                <div>${this.applyPhraseHighlightsToHTML(pt, safeHl.phrases)}</div>
              </div>
              <span class="text-[10px] font-mono text-slate-500 shrink-0">${itemColor ? "Subrayado" : "🖍️"}</span>
            </div>
          `;
        }).join("") + `</div>`
      : "";
    return expHtml + ptsHtml;
  }

  setHighlighterColor(color, temaCodigo, inModal = false) {
    this.activeHighlighterColor = color;
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    } else {
      this.renderTemario();
    }
  }

  togglePointHighlight(temaCodigo, itemKey, inModal = false) {
    window.storageManager.setPointHighlight(temaCodigo, itemKey, this.activeHighlighterColor || "yellow");
    this.updateHeaderStats();
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  highlightSelectedText(temaCodigo, inModal = false) {
    let selected = "";
    if (window.getSelection) {
      selected = window.getSelection().toString().trim();
    }
    if (!selected || selected.length < 3) {
      const manual = prompt(
        "🖍️ SUBRAYADOR FLUORESCENTE:\nSelecciona antes una frase con el ratón/dedo o escribe aquí la palabra, plazo o frase exacta que quieres subrayar en este tema:"
      );
      if (!manual || manual.trim().length < 3) return;
      selected = manual.trim();
    }
    window.storageManager.addPhraseHighlight(temaCodigo, selected, this.activeHighlighterColor || "yellow");
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    this.updateHeaderStats();
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  removePhraseHighlight(temaCodigo, encodedText, inModal = false) {
    const text = decodeURIComponent(encodedText || "");
    window.storageManager.removePhraseHighlight(temaCodigo, text);
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    }
  }

  clearTopicHighlights(temaCodigo, inModal = false) {
    if (!confirm(`¿Deseas borrar todos tus subrayados fluorescentes del tema ${temaCodigo}? (Tus Post-its se mantendrán intactos)`)) return;
    window.storageManager.clearTopicHighlights(temaCodigo);
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  submitTopicPostIt(temaCodigo, inModal = false) {
    const prefix = inModal ? "modal" : "card";
    const colorEl = document.getElementById(`postit-color-${prefix}-${temaCodigo}`);
    const tagEl = document.getElementById(`postit-tag-${prefix}-${temaCodigo}`);
    const titleEl = document.getElementById(`postit-title-${prefix}-${temaCodigo}`);
    const textEl = document.getElementById(`postit-text-${prefix}-${temaCodigo}`);

    if (!textEl || !textEl.value.trim()) {
      alert("📌 Escribe el contenido de tu nota Post-it antes de pegarla en el tema.");
      return;
    }

    window.storageManager.addTopicNote(temaCodigo, {
      color: colorEl ? colorEl.value : "yellow",
      tag: tagEl ? tagEl.value : "📌 Idea Clave",
      titulo: titleEl ? titleEl.value : "",
      texto: textEl.value
    });

    this.updateHeaderStats();
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  deleteTopicPostIt(temaCodigo, noteId, inModal = false) {
    window.storageManager.deleteTopicNote(temaCodigo, noteId);
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  loadTeacherVideoPostIts(temaCodigo, inModal = false) {
    const cap = (typeof VIDEO_CLASS_CAPSULES !== "undefined") ? VIDEO_CLASS_CAPSULES[temaCodigo] : null;
    if (!cap || !Array.isArray(cap.postItsProfesor) || cap.postItsProfesor.length === 0) {
      alert("Este tema no tiene Post-its de vídeo preconfigurados.");
      return;
    }
    const existing = window.storageManager.getTopicNotes(temaCodigo);
    const existingTitles = new Set(existing.map(n => (n.titulo || "").trim().toLowerCase()));
    let added = 0;

    cap.postItsProfesor.forEach(p => {
      const key = (p.titulo || "").trim().toLowerCase();
      if (!existingTitles.has(key)) {
        window.storageManager.addTopicNote(temaCodigo, {
          color: p.color || "yellow",
          tag: p.tag || "🎬 Post-it Vídeo",
          titulo: p.titulo || "",
          texto: p.texto || ""
        });
        existingTitles.add(key);
        added++;
      }
    });

    this.updateHeaderStats();
    if (window.cloudSyncManager && typeof window.cloudSyncManager.showTacticalToast === "function") {
      window.cloudSyncManager.showTacticalToast(
        added > 0
          ? `🎬 📌 ¡${added} Post-its del Profesor (${cap.videosCubiertos}) pegados en ${temaCodigo}!`
          : `✅ Los Post-its del vídeo ya estaban pegados en ${temaCodigo}.`,
        "emerald"
      );
    }
    if (inModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  loadAllTeacherVideoPostIts() {
    if (typeof VIDEO_CLASS_CAPSULES === "undefined") return;
    let totalAdded = 0;
    Object.keys(VIDEO_CLASS_CAPSULES).forEach(code => {
      const cap = VIDEO_CLASS_CAPSULES[code];
      const existing = window.storageManager.getTopicNotes(code);
      const existingTitles = new Set(existing.map(n => (n.titulo || "").trim().toLowerCase()));
      (cap.postItsProfesor || []).forEach(p => {
        const key = (p.titulo || "").trim().toLowerCase();
        if (!existingTitles.has(key)) {
          window.storageManager.addTopicNote(code, {
            color: p.color || "yellow",
            tag: p.tag || "🎬 Post-it Vídeo",
            titulo: p.titulo || "",
            texto: p.texto || ""
          });
          existingTitles.add(key);
          totalAdded++;
        }
      });
    });

    this.updateHeaderStats();
    if (window.cloudSyncManager && typeof window.cloudSyncManager.showTacticalToast === "function") {
      window.cloudSyncManager.showTacticalToast(
        totalAdded > 0
          ? `🎬 📌 ¡${totalAdded} Post-its de los 28 Vídeos de YouTube pegados en tus 21 Temas y sincronizados!`
          : `✅ Ya tenías los 49 Post-its de los 28 Vídeos pegados en tu Cuaderno de Guerra.`,
        "emerald"
      );
    }
    if (this.currentTab === "temario") {
      this.renderTemario();
    } else if (this.currentTab === "dashboard") {
      this.renderDashboard();
    }
  }

  renderAnnotationsWorkspaceHTML(temaCodigo, inModal = false) {
    const prefix = inModal ? "modal" : "card";
    const notes = window.storageManager.getTopicNotes(temaCodigo);
    const hl = window.storageManager.getTopicHighlights(temaCodigo);
    const itemCount = Object.keys(hl.items || {}).length;
    const phraseCount = (hl.phrases || []).length;
    const activeColor = this.activeHighlighterColor || "yellow";

    const colors = [
      { id: "yellow", label: "🟨 Amarillo Examen", btnCls: "bg-yellow-400/20 text-yellow-200 border-yellow-400" },
      { id: "green",  label: "🟩 Verde Concepto",  btnCls: "bg-emerald-400/20 text-emerald-200 border-emerald-400" },
      { id: "pink",   label: "🟥 Rosa Trampa/Plazo", btnCls: "bg-rose-400/20 text-rose-200 border-rose-400" },
      { id: "cyan",   label: "🟦 Azul Artículo",   btnCls: "bg-sky-400/20 text-sky-400 border-sky-400" }
    ];

    return `
      <div class="p-4 rounded-2xl bg-slate-950/95 border-2 border-amber-500/40 space-y-4">
        <!-- BARRA DEL SUBRAYADOR FLUORESCENTE PERSONAL -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[11px] uppercase">
                🖍️ Subrayador Fluorescente + 📌 Post-its (${temaCodigo})
              </span>
              <span class="text-xs font-mono text-emerald-400">
                📌 ${notes.length} Post-its • 🖍️ ${itemCount + phraseCount} Subrayados (Se incluyen al descargar PDF)
              </span>
            </div>
            <p class="text-[11px] text-slate-300">
              Elige color de rotulador y <strong>haz clic sobre cualquier punto <code>▸</code> del tema</strong> para subrayarlo/quitarlo, o selecciona cualquier palabra/frase y pulsa <strong>"Subrayar selección"</strong>.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-1.5">
            ${colors.map(c => `
              <button
                type="button"
                onclick="window.appController.setHighlighterColor('${c.id}', '${temaCodigo}', ${inModal})"
                class="px-2.5 py-1.5 rounded-lg text-[11px] font-black border transition ${c.btnCls} ${activeColor === c.id ? "ring-2 ring-white scale-105 shadow-lg" : "opacity-75 hover:opacity-100"}"
              >
                ${c.label}
              </button>
            `).join("")}

            <button
              type="button"
              onclick="window.appController.highlightSelectedText('${temaCodigo}', ${inModal})"
              class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] uppercase transition shadow"
              title="Subraya en fluorescente el texto que tengas seleccionado con el ratón o escribe una palabra clave"
            >
              🖍️ Subrayar Selección (+5 XP)
            </button>

            ${(itemCount + phraseCount) > 0 ? `
              <button
                type="button"
                onclick="window.appController.clearTopicHighlights('${temaCodigo}', ${inModal})"
                class="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-red-950 text-slate-400 hover:text-red-300 border border-slate-700 text-[11px] font-bold transition"
                title="Limpiar todos los subrayados de este tema"
              >
                🧹 Limpiar (${itemCount + phraseCount})
              </button>
            ` : ""}
          </div>
        </div>

        ${phraseCount > 0 ? `
          <div class="flex flex-wrap items-center gap-1.5 text-xs">
            <span class="font-bold text-slate-400 text-[11px]">🖍️ Tus frases subrayadas:</span>
            ${hl.phrases.map(p => `
              <span class="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                <span class="hl-${p.color || "yellow"} text-[11px]">“${p.text}”</span>
                <button
                  type="button"
                  onclick="window.appController.removePhraseHighlight('${temaCodigo}', '${encodeURIComponent(p.text)}', ${inModal})"
                  class="text-slate-400 hover:text-red-400 font-bold text-[11px]"
                  title="Quitar este subrayado"
                >✕</button>
              </span>
            `).join("")}
          </div>
        ` : ""}

        <!-- TABLERO DE NOTAS DE ESTUDIO TIPO "POST-IT" -->
        <div class="space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h5 class="text-xs font-black uppercase text-amber-300 flex items-center space-x-1.5">
              <span>📌</span><span>Mis Notas de Estudio tipo "Post-it" en ${temaCodigo} (${notes.length})</span>
            </h5>
            <div class="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onclick="window.appController.loadTeacherVideoPostIts('${temaCodigo}', ${inModal})"
                class="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-slate-950 font-black text-[11px] uppercase transition shadow flex items-center space-x-1"
                title="Pega automáticamente en este tema los Post-its clave extraídos del vídeo de YouTube del profesor"
              >
                <span>🎬</span><span>Pegar Post-its del Vídeo del Profesor</span>
              </button>
              <span class="text-[11px] text-slate-400 hidden sm:inline">Se imprimen en tu Resumen PDF y Chuleta PDF</span>
            </div>
          </div>

          ${notes.length > 0 ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${notes.map(n => {
                const dateShort = n.fecha ? new Date(n.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "short" }) : "";
                return `
                  <div class="postit-card postit-${n.color || "yellow"} flex flex-col justify-between space-y-2">
                    <div>
                      <div class="flex items-center justify-between gap-1 border-b border-black/15 pb-1 mb-1.5">
                        <span class="text-[10px] font-black uppercase tracking-wider">${n.tag || "📌 POST-IT"}</span>
                        <div class="flex items-center space-x-1.5">
                          <span class="text-[10px] font-mono opacity-75">${dateShort}</span>
                          <button
                            type="button"
                            onclick="window.appController.deleteTopicPostIt('${temaCodigo}', '${n.id}', ${inModal})"
                            class="text-xs font-black opacity-70 hover:opacity-100"
                            title="Despegar / Borrar Post-it"
                          >🗑️</button>
                        </div>
                      </div>
                      ${n.titulo ? `<div class="text-xs font-black mb-1 leading-snug">${n.titulo}</div>` : ""}
                      <p class="text-xs font-medium leading-relaxed whitespace-pre-line">${n.texto}</p>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          ` : `
            <div class="p-3 rounded-xl bg-slate-900/60 border border-dashed border-slate-700 text-xs text-slate-400">
              📌 Aún no has pegado ningún Post-it en <strong>${temaCodigo}</strong>. Añade abajo tus reglas mnemotécnicas, plazos que te cuesten o recordatorios personales.
            </div>
          `}

          <!-- Formulario Rápido para Pegar un Nuevo Post-it -->
          <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <select id="postit-color-${prefix}-${temaCodigo}" class="p-2 rounded-lg bg-slate-950 border border-slate-700 text-xs font-bold text-amber-300">
                <option value="yellow">🟨 Post-it Amarillo (Idea Clave)</option>
                <option value="pink">🟥 Post-it Rosa/Rojo (¡Ojo Trampa / Plazo!)</option>
                <option value="green">🟩 Post-it Verde (Truco / Regla)</option>
                <option value="cyan">🟦 Post-it Azul (Artículo / Duda)</option>
              </select>

              <select id="postit-tag-${prefix}-${temaCodigo}" class="p-2 rounded-lg bg-slate-950 border border-slate-700 text-xs font-bold text-slate-200">
                <option value="📌 Idea Clave">📌 Idea Clave de Examen</option>
                <option value="⚠️ ¡Cuidado Trampa!">⚠️ ¡Cuidado Trampa del Tribunal!</option>
                <option value="⏱️ Plazo / Mayoría">⏱️ Plazo / Fecha / Mayoría</option>
                <option value="🧠 Regla Mnemotécnica">🧠 Regla Mnemotécnica</option>
                <option value="❓ Repasar Antes del Examen">❓ Repasar Antes del Examen</option>
              </select>

              <input
                type="text"
                id="postit-title-${prefix}-${temaCodigo}"
                placeholder="Título corto (ej: Prescripción Leves LO 8/2014)..."
                class="p-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />
            </div>

            <div class="flex flex-col sm:flex-row gap-2">
              <textarea
                id="postit-text-${prefix}-${temaCodigo}"
                rows="2"
                placeholder="Escribe aquí tu nota Post-it para este tema (ej: 'No confundir: Falta leve prescribe a los 2 meses, pero la sanción leve prescribe a los 3 meses')..."
                class="flex-1 p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
              ></textarea>
              <button
                type="button"
                onclick="window.appController.submitTopicPostIt('${temaCodigo}', ${inModal})"
                class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shrink-0 shadow-lg"
              >
                📌 Pegar Post-it (+10 XP)
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 📖 PASO 1: MODAL DEL RESUMEN MAGISTRAL DESDE CERO + CONTROL DE TEMAS LEÍDOS
  // ==========================================
  toggleTopicReadStatus(temaCodigo, fromModal = false) {
    const isNowRead = window.storageManager.toggleTopicRead(temaCodigo);
    this.updateHeaderStats();
    if (fromModal) {
      this.openStudyGuideModal(temaCodigo);
    }
    if (this.currentTab === "dashboard") {
      this.renderDashboard();
    } else if (this.currentTab === "temario") {
      this.renderTemario();
    }
    return isNowRead;
  }

  openStudyGuideModal(temaCodigo) {
    if (typeof OFFICIAL_SYLLABUS === "undefined") return;
    const tema = OFFICIAL_SYLLABUS.find(t => t.codigo === temaCodigo);
    const guide = (typeof MASTER_STUDY_GUIDES !== "undefined") ? MASTER_STUDY_GUIDES[temaCodigo] : null;
    if (!tema) return;

    const modal = document.getElementById("study-guide-modal");
    const content = document.getElementById("study-guide-modal-body");
    if (!modal || !content) return;

    const isRead = window.storageManager.isTopicRead(temaCodigo);
    const hl = window.storageManager.getTopicHighlights(temaCodigo);
    const allQuestions = window.storageManager.getQuestions().filter(q => q.temaCodigo === temaCodigo);
    const easyCount = allQuestions.filter(q => Array.isArray(q.etiquetas) && q.etiquetas.includes("Fácil")).length;
    const pal = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[tema.codigo]) || { accent: "#10b981", titleColor: "#34d399" };

    content.innerHTML = `
      <div class="space-y-5">
        <!-- Cabecera del Manual desde Cero -->
        <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-4">
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded font-mono font-black text-xs bg-amber-500 text-slate-950">
                📖 PASO 1 • ${tema.codigo}
              </span>
              <span class="text-xs font-bold text-slate-300 uppercase">${tema.bloque}</span>
              <span class="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-700/50 text-xs font-mono">
                ⏱️ Lectura: ${guide ? guide.tiempoLectura : "8 min"}
              </span>
              <span class="px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-amber-700/50 text-xs font-mono">
                📊 ${tema.frecuenciaExamen || "Alta frecuencia"}
              </span>
              ${tema.equivalencia28 ? `
                <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-600/60 text-xs font-mono font-bold">
                  🎬 ${tema.equivalencia28}
                </span>
              ` : ""}
            </div>
            <h3 class="text-lg sm:text-2xl font-black leading-snug" style="color:${pal.titleColor};">
              ${guide && guide.subtituloDidactico ? guide.subtituloDidactico : tema.titulo}
            </h3>
            <p class="text-xs font-mono text-slate-400">📜 Normativa Oficial: ${tema.normativa}</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              onclick="window.appController.toggleTopicReadStatus('${tema.codigo}', true)"
              class="px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center space-x-1.5 ${isRead ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20" : "bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/60"}"
            >
              <span>${isRead ? "✅" : "☑️"}</span>
              <span>${isRead ? "Tema Leído y Comprendido" : "Marcar como Leído (+25 XP)"}</span>
            </button>

            <button
              onclick="window.pdfGenerator.downloadMasterSummaryPDF('${tema.codigo}')"
              class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition flex items-center space-x-1.5 shadow-lg"
            >
              <span>🖨️</span><span>Descargar Resumen + Post-its PDF</span>
            </button>

            <button
              onclick="window.appController.playTopicPodcast('${tema.codigo}', true)"
              class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition flex items-center space-x-1.5 shadow-lg"
              title="Escuchar el Podcast Conversacional (Brigada Carlos y Cabo 1º Marta explicando el tema con ejemplos reales)"
            >
              <span>🎙️</span><span>Podcast + Ejemplos</span>
            </button>

            <button
              onclick="window.appController.closeStudyGuideModal()"
              class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cerrar ✕
            </button>
          </div>
        </div>

        <!-- Ruta Pedagógica Guiada en 4 Pasos -->
        <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black">1️⃣ Estás aquí: Resumen desde Cero</span>
            <span class="text-slate-500">➔</span>
            <button onclick="window.appController.closeStudyGuideModal(); window.appController.openSchemaModal('${tema.codigo}');" class="px-2.5 py-1 rounded-lg bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-700 font-bold">
              2️⃣ Pasar al Esquema Visual
            </button>
            <span class="text-slate-500">➔</span>
            <button onclick="window.appController.closeStudyGuideModal(); window.appController.startTagFilteredTest('Fácil', true, 15, '${tema.codigo}');" class="px-2.5 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-700 font-bold">
              3️⃣ Hacer Test Fácil (${easyCount || allQuestions.length})
            </button>
            <span class="text-slate-500">➔</span>
            <button onclick="window.appController.closeStudyGuideModal(); window.appController.startTopicStudy('${tema.codigo}');" class="px-2.5 py-1 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-300 border border-purple-700 font-bold">
              4️⃣ Test Completo del Tema (${allQuestions.length} preg.)
            </button>
          </div>
        </div>

        <!-- 🖍️ SUBRAYADOR FLUORESCENTE PERSONAL + 📌 TABLERO DE POST-ITS -->
        ${this.renderAnnotationsWorkspaceHTML(tema.codigo, true)}

        ${guide ? `
          <!-- Consejo del Jefe de Estudios -->
          <div class="p-4 rounded-2xl bg-amber-950/30 border-2 border-amber-500/50 space-y-1.5">
            <div class="text-xs font-black uppercase text-amber-400 flex items-center space-x-1.5">
              <span>👨‍🏫</span><span>Directriz de tu Jefe de Estudios (Cómo abordar este tema desde cero):</span>
            </div>
            <p class="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
              ${this.applyPhraseHighlightsToHTML(guide.consejoJefeEstudios, hl.phrases)}
            </p>
          </div>

          <!-- Actualizaciones Recientes 2024 / 2025 / 2026 -->
          <div class="p-4 rounded-2xl bg-emerald-950/30 border-2 border-emerald-500/50 space-y-1.5">
            <div class="text-xs font-black uppercase text-emerald-400 flex items-center space-x-1.5">
              <span>🆕</span><span>Actualizaciones Normativas y Novedades de Examen (2024–2026) — ¡Lo que más preguntan!:</span>
            </div>
            <p class="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
              ${this.applyPhraseHighlightsToHTML(guide.actualizaciones, hl.phrases)}
            </p>
          </div>

          <!-- Epígrafes Desarrollados Paso a Paso (Con Subrayado Fluorescente al hacer clic) -->
          <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <h4 class="text-sm font-black uppercase tracking-wider text-white">
                📚 Desarrollo Completo del Tema Explicado Paso a Paso (Haz clic en cualquier bloque o punto ▸ para subrayarlo)
              </h4>
              <span class="text-[11px] font-mono text-amber-400">🖍️ Rotulador activo: ${this.activeHighlighterColor.toUpperCase()}</span>
            </div>
            ${(guide.epigrafes || []).map((ep, epIdx) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-950/95 border border-slate-800 space-y-3 shadow-inner" style="border-left: 5px solid ${pal.accent};">
                <h5 class="text-sm sm:text-base font-black text-amber-300 uppercase tracking-wide">
                  ${ep.titulo}
                </h5>
                <div class="space-y-2">
                  ${this.renderEpigrafeInteractiveHTML(tema.codigo, ep, epIdx, hl, true)}
                </div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 leading-relaxed">
            ${this.applyPhraseHighlightsToHTML(tema.resumen, hl.phrases)}
          </div>
        `}

        <!-- Puntos Calientes + Trampas (También subrayables al hacer clic) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-700/50 space-y-2">
            <h5 class="text-xs font-black uppercase text-emerald-400">🔥 Puntos Calientes Indispensables (Haz clic para subrayar):</h5>
            <ul class="space-y-1.5 text-xs text-slate-200">
              ${(tema.puntosCalientes || []).map((p, pIdx) => {
                const itemKey = `hot-${pIdx}`;
                const itemColor = hl.items[itemKey];
                const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
                return `
                  <li
                    onclick="window.appController.togglePointHighlight('${tema.codigo}', '${itemKey}', true)"
                    class="cursor-pointer p-2 rounded-lg hover:bg-slate-900/50 transition leading-relaxed ${hlBlockCls}"
                  >
                    ${itemColor ? "🖍️" : "•"} ${this.applyPhraseHighlightsToHTML(p, hl.phrases)}
                  </li>
                `;
              }).join("")}
            </ul>
          </div>
          <div class="p-4 rounded-2xl bg-red-950/25 border border-red-700/50 space-y-2">
            <h5 class="text-xs font-black uppercase text-red-400">🪤 Trampas Frecuentes del Tribunal (Haz clic para subrayar):</h5>
            <ul class="space-y-1.5 text-xs text-red-200">
              ${(tema.trampas || []).map((tr, tIdx) => {
                const itemKey = `trap-${tIdx}`;
                const itemColor = hl.items[itemKey];
                const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
                return `
                  <li
                    onclick="window.appController.togglePointHighlight('${tema.codigo}', '${itemKey}', true)"
                    class="cursor-pointer p-2 rounded-lg hover:bg-slate-900/50 transition leading-relaxed ${hlBlockCls}"
                  >
                    ${itemColor ? "🖍️" : ""} ${this.applyPhraseHighlightsToHTML(tr, hl.phrases)}
                  </li>
                `;
              }).join("")}
            </ul>
          </div>
        </div>

        <!-- Botonera Final de Transición al Paso 2 y Paso 3 -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/40 border border-amber-500/40 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="text-xs font-black uppercase text-amber-400">🎯 ¿Ya has leído y subrayado el Resumen Magistral?</div>
            <p class="text-xs text-slate-300">Marca el tema como leído (+25 XP), mira ahora el Esquema Visual y haz el Test Gradual.</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button
              onclick="window.appController.toggleTopicReadStatus('${tema.codigo}', true)"
              class="px-4 py-2.5 rounded-xl font-black text-xs uppercase ${isRead ? "bg-emerald-500 text-slate-950" : "bg-emerald-800 hover:bg-emerald-700 text-white"}"
            >
              ${isRead ? "✅ Tema Leído (+25 XP)" : "☑️ Marcar como Leído (+25 XP)"}
            </button>
            <button
              onclick="window.appController.closeStudyGuideModal(); window.appController.openSchemaModal('${tema.codigo}');"
              class="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase"
            >
              📊 Paso 2: Ver Esquema Visual ➔
            </button>
            <button
              onclick="window.appController.closeStudyGuideModal(); window.appController.startTopicStudy('${tema.codigo}');"
              class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase"
            >
              💡 Paso 3: Hacer Test en Modo Estudio (${allQuestions.length} preg.) ➔
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
  }

  closeStudyGuideModal() {
    const modal = document.getElementById("study-guide-modal");
    if (modal) modal.classList.add("hidden");
  }

  // ==========================================
  // 🎙️ ESTUDIO DE PODCAST CONVERSACIONAL «RADIO PERMANENCIA ET — LA TERTULIA DEL CUARTEL»
  // (Voces Neurales Naturales: Brigada Carlos & Cabo 1º Marta + Casos Prácticos + NotebookLM)
  // ==========================================
  speakMasterSummary(temaCodigo, _audioMode = "full") {
    this.playTopicPodcast(temaCodigo, true);
  }

  getPodcastEpisode(temaCodigo) {
    if (typeof PODCAST_EPISODES === "undefined") return null;
    return PODCAST_EPISODES[temaCodigo] || null;
  }

  playTopicPodcast(temaCodigo, openStudioModal = true) {
    const ep = this.getPodcastEpisode(temaCodigo);
    const tema = (typeof OFFICIAL_SYLLABUS !== "undefined")
      ? OFFICIAL_SYLLABUS.find(t => t.codigo === temaCodigo)
      : null;
    if (!ep || !tema) return;

    if (openStudioModal) {
      this.openPodcastStudioModal(temaCodigo);
    }

    // Si ya está cargado este mismo episodio, alternar Play/Pause si no abrimos modal o asegurar reproducción
    if (this.podcastAudio && this.audioTemaCodigo === temaCodigo) {
      if (this.podcastAudio.paused) {
        this.podcastAudio.play().catch(() => {});
        this.isSpeaking = true;
        this.isAudioPaused = false;
      } else if (!openStudioModal) {
        this.podcastAudio.pause();
        this.isAudioPaused = true;
      }
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
      return;
    }

    this.stopAudio();

    this.audioTemaCodigo = temaCodigo;
    this.audioRate = this.audioRate || 1.0;
    this.isSpeaking = true;
    this.isAudioPaused = false;
    this.activePodcastTurnIndex = 0;

    // Calcular pesos proporcionales de cada intervención del diálogo para sincronizar el guion en vivo
    const dialogo = Array.isArray(ep.dialogo) ? ep.dialogo : [];
    const lengths = dialogo.map(d => Math.max(20, (d.texto || "").length));
    const totalChars = lengths.reduce((a, b) => a + b, 0) || 1;
    let acc = 0;
    this.podcastTurnRanges = lengths.map(len => {
      const startRatio = acc / totalChars;
      acc += len;
      const endRatio = acc / totalChars;
      return { startRatio, endRatio };
    });

    const audio = new Audio(ep.audioUrl);
    audio.preload = "auto";
    audio.playbackRate = this.audioRate;
    this.podcastAudio = audio;

    audio.addEventListener("loadedmetadata", () => {
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
    });

    audio.addEventListener("timeupdate", () => {
      this.updateActiveTurnFromTime();
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
    });

    audio.addEventListener("play", () => {
      this.isSpeaking = true;
      this.isAudioPaused = false;
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
    });

    audio.addEventListener("pause", () => {
      if (this.podcastAudio) {
        this.isAudioPaused = true;
        this.renderTacticalAudioBar();
        this.updatePodcastModalLiveState();
      }
    });

    audio.addEventListener("ended", () => {
      this.isAudioPaused = true;
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
    });

    audio.play().catch(err => {
      console.warn("Aviso al iniciar audio del podcast:", err);
      this.isAudioPaused = true;
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
    });

    this.renderTacticalAudioBar();
    this.updatePodcastModalLiveState();
  }

  updateActiveTurnFromTime() {
    if (!this.podcastAudio || !this.podcastAudio.duration || !Array.isArray(this.podcastTurnRanges)) return;
    const ratio = Math.min(0.999, Math.max(0, this.podcastAudio.currentTime / this.podcastAudio.duration));
    const idx = this.podcastTurnRanges.findIndex(r => ratio >= r.startRatio && ratio <= r.endRatio);
    if (idx !== -1 && idx !== this.activePodcastTurnIndex) {
      this.activePodcastTurnIndex = idx;
      const turnEl = document.getElementById(`podcast-turn-${idx}`);
      if (turnEl) {
        turnEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  seekPodcastToTurn(turnIdx) {
    if (!this.podcastAudio || !Array.isArray(this.podcastTurnRanges) || !this.podcastTurnRanges[turnIdx]) return;
    const range = this.podcastTurnRanges[turnIdx];
    if (this.podcastAudio.duration && !isNaN(this.podcastAudio.duration)) {
      this.podcastAudio.currentTime = range.startRatio * this.podcastAudio.duration;
    }
    this.activePodcastTurnIndex = turnIdx;
    if (this.podcastAudio.paused) {
      this.podcastAudio.play().catch(() => {});
    }
    this.renderTacticalAudioBar();
    this.updatePodcastModalLiveState();
  }

  seekPodcastRelative(deltaSeconds) {
    if (!this.podcastAudio) return;
    const dur = this.podcastAudio.duration || 600;
    this.podcastAudio.currentTime = Math.min(dur, Math.max(0, (this.podcastAudio.currentTime || 0) + deltaSeconds));
    this.updateActiveTurnFromTime();
    this.renderTacticalAudioBar();
    this.updatePodcastModalLiveState();
  }

  seekPodcastByPercent(pct) {
    if (!this.podcastAudio || !this.podcastAudio.duration) return;
    const clamped = Math.min(100, Math.max(0, Number(pct) || 0));
    this.podcastAudio.currentTime = (clamped / 100) * this.podcastAudio.duration;
    this.updateActiveTurnFromTime();
    this.renderTacticalAudioBar();
    this.updatePodcastModalLiveState();
  }

  togglePauseAudio() {
    if (this.podcastAudio) {
      if (this.podcastAudio.paused) {
        this.podcastAudio.play().catch(() => {});
        this.isAudioPaused = false;
      } else {
        this.podcastAudio.pause();
        this.isAudioPaused = true;
      }
      this.renderTacticalAudioBar();
      this.updatePodcastModalLiveState();
      return;
    }
    if ("speechSynthesis" in window && this.isSpeaking) {
      if (window.speechSynthesis.paused || this.isAudioPaused) {
        window.speechSynthesis.resume();
        this.isAudioPaused = false;
      } else {
        window.speechSynthesis.pause();
        this.isAudioPaused = true;
      }
      this.renderTacticalAudioBar();
    }
  }

  prevAudioTrack() {
    this.seekPodcastRelative(-15);
  }

  nextAudioTrack() {
    this.seekPodcastRelative(15);
  }

  playAdjacentPodcast(direction = 1) {
    if (typeof OFFICIAL_SYLLABUS === "undefined") return;
    const codes = OFFICIAL_SYLLABUS.map(t => t.codigo);
    const curIdx = codes.indexOf(this.audioTemaCodigo || "B1-T01");
    const nextIdx = (curIdx + direction + codes.length) % codes.length;
    const nextCode = codes[nextIdx];
    const modal = document.getElementById("podcast-studio-modal");
    const isModalOpen = modal && !modal.classList.contains("hidden");
    this.playTopicPodcast(nextCode, isModalOpen);
  }

  cycleAudioSpeed() {
    const speeds = [1.0, 1.25, 1.5, 1.75];
    const current = this.audioRate || 1.0;
    const nextIdx = (speeds.findIndex(s => Math.abs(s - current) < 0.08) + 1) % speeds.length;
    this.audioRate = speeds[nextIdx];
    if (this.podcastAudio) {
      this.podcastAudio.playbackRate = this.audioRate;
    }
    this.renderTacticalAudioBar();
    this.updatePodcastModalLiveState();
  }

  formatAudioTime(sec) {
    if (!sec || isNaN(sec) || sec < 0) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  copyNotebookLMPodcastPrompt(temaCodigo) {
    const prompt = (typeof getNotebookLMPodcastPrompt === "function")
      ? getNotebookLMPodcastPrompt(temaCodigo)
      : "";
    if (!prompt) return;
    navigator.clipboard.writeText(prompt).then(() => {
      if (window.cloudSyncManager && typeof window.cloudSyncManager.showTacticalToast === "function") {
        window.cloudSyncManager.showTacticalToast(
          `🎙️ Prompt de Podcast Conversacional para ${temaCodigo} copiado. Pégalo en "Personalizar Resumen de Audio" en NotebookLM.`,
          "emerald"
        );
      } else {
        alert(`🎙️ Prompt de Podcast para ${temaCodigo} copiado al portapapeles.`);
      }
    });
  }

  openPodcastStudioModal(temaCodigo) {
    const code = temaCodigo || this.audioTemaCodigo || "B1-T01";
    const ep = this.getPodcastEpisode(code);
    const tema = (typeof OFFICIAL_SYLLABUS !== "undefined")
      ? OFFICIAL_SYLLABUS.find(t => t.codigo === code)
      : null;
    if (!ep || !tema) return;

    let modal = document.getElementById("podcast-studio-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "podcast-studio-modal";
      modal.className = "fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto";
      document.body.appendChild(modal);
    }
    modal.classList.remove("hidden");

    const pal = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[code]) || {
      accent: "#f59e0b",
      titleColor: "#fbbf24"
    };

    const allCodes = OFFICIAL_SYLLABUS.map(t => t.codigo);

    modal.innerHTML = `
      <div class="w-full max-w-5xl rounded-2xl bg-slate-950 border-2 border-amber-500/60 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        <!-- Cabecera de Radio Permanencia ET -->
        <div class="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-amber-950/40 to-emerald-950/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shrink-0">
              🎙️
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                  📻 RADIO PERMANENCIA ET • LA TERTULIA DEL CUARTEL
                </span>
                <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/50 text-[10px] font-mono font-bold">
                  🗣️ 2 Voces Neurales Naturales • Casos Prácticos de Cuartel
                </span>
                ${tema.equivalencia28 ? `<span class="text-[11px] font-mono text-sky-300">${tema.equivalencia28}</span>` : ""}
              </div>
              <h2 class="text-base sm:text-xl font-black text-white mt-1" style="color:${pal.titleColor};">
                ${ep.titulo}
              </h2>
              <p class="text-xs text-slate-300">${ep.subtitulo}</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Selector rápido de cualquiera de los 21 Episodios -->
            <select
              onchange="window.appController.playTopicPodcast(this.value, true)"
              class="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-amber-300"
              title="Cambiar de Episodio del Podcast"
            >
              ${allCodes.map(c => {
                const tItem = OFFICIAL_SYLLABUS.find(x => x.codigo === c);
                return `<option value="${c}" ${c === code ? "selected" : ""}>🎙️ ${c} — ${tItem ? tItem.titulo.replace(/^Tema\s+\d+\.\s*/i, "").slice(0, 38) : c}</option>`;
              }).join("")}
            </select>

            <a
              href="${ep.audioUrl}"
              download="Podcast-Permanencia-${code}.mp3"
              class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-600/50 text-xs font-black transition"
              title="Descargar archivo MP3 para llevar en el coche o móvil"
            >
              ⬇️ MP3
            </a>

            <button
              onclick="window.appController.closePodcastStudioModal()"
              class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
            >
              Minimizar Reproductor ✕
            </button>
          </div>
        </div>

        <!-- Cuerpo scrollable: Reproductor + 3 Ejemplos Cotidianos + Guion Interactivo -->
        <div class="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          <!-- Controles Principales Tipo Spotify -->
          <div class="p-4 rounded-2xl bg-slate-900/95 border border-amber-500/40 space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center space-x-3">
                <div class="flex -space-x-2">
                  <span class="w-9 h-9 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center border-2 border-slate-950" title="Brigada Carlos (Instructor Veterano)">🎖️BC</span>
                  <span class="w-9 h-9 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-slate-950" title="Cabo 1º Marta (Opositora)">🪖CM</span>
                </div>
                <div>
                  <div class="text-xs font-black text-white">
                    Brigada Carlos (Instructor) &amp; Cabo 1º Marta (Opositora)
                  </div>
                  <div id="podcast-modal-active-speaker" class="text-[11px] font-mono text-amber-400">
                    Pulsa Play o haz clic en cualquier intervención del diálogo para escucharla
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-1.5">
                <button onclick="window.appController.playAdjacentPodcast(-1)" class="px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300" title="Episodio Anterior">
                  ⏮️ Tema Ant.
                </button>
                <button onclick="window.appController.seekPodcastRelative(-15)" class="px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-200">
                  ⏪ -15s
                </button>
                <button
                  id="podcast-modal-play-btn"
                  onclick="window.appController.togglePauseAudio()"
                  class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg"
                >
                  ⏸️ Pausar
                </button>
                <button onclick="window.appController.seekPodcastRelative(15)" class="px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-200">
                  +15s ⏩
                </button>
                <button onclick="window.appController.playAdjacentPodcast(1)" class="px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300" title="Siguiente Episodio">
                  Sig. Tema ⏭️
                </button>
                <button
                  id="podcast-modal-speed-btn"
                  onclick="window.appController.cycleAudioSpeed()"
                  class="px-2.5 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-600 font-mono font-black text-xs"
                >
                  ⚡ ${(this.audioRate || 1.0)}x
                </button>
              </div>
            </div>

            <!-- Barra de Progreso Interactiva -->
            <div class="flex items-center space-x-3 text-xs font-mono text-slate-400">
              <span id="podcast-modal-time-cur">00:00</span>
              <input
                id="podcast-modal-Range"
                type="range"
                min="0"
                max="100"
                value="0"
                oninput="window.appController.seekPodcastByPercent(this.value)"
                class="flex-1 accent-amber-500 cursor-pointer h-2 rounded-lg bg-slate-800"
              />
              <span id="podcast-modal-time-dur">${ep.duracionEstimada || "06:00"}</span>
            </div>
          </div>

          <!-- 💡 3 EJEMPLOS REALES DE CUARTEL PARA ENTENDER LA LEY SIN DORMIRSE -->
          <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-black uppercase text-emerald-400">
                💡 Casos Prácticos de Cuartel en este Episodio (La Ley traducida al cristiano):
              </span>
              <div class="flex flex-wrap gap-1.5">
                <button
                  onclick="window.appController.copyNotebookLMPodcastPrompt('${code}')"
                  class="px-2.5 py-1 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-500/50 text-[11px] font-bold transition"
                  title="Copia el prompt diseñado para que NotebookLM genere otro debate de audio con ejemplos sobre este tema"
                >
                  🤖 Copiar Prompt Podcast NotebookLM
                </button>
                <button
                  onclick="window.appController.closePodcastStudioModal(); window.appController.openStudyGuideModal('${code}');"
                  class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 text-[11px] font-bold transition"
                >
                  📖 Ver Resumen Escrito
                </button>
                <button
                  onclick="window.appController.closePodcastStudioModal(); window.appController.startTopicStudy('${code}');"
                  class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black transition"
                >
                  🎯 Hacer Test de ${code}
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              ${(ep.ejemplosClave || []).map((ej, idx) => `
                <div class="p-3 rounded-xl bg-slate-950/90 border border-emerald-700/40 text-xs text-slate-200 leading-relaxed">
                  <span class="px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[10px] mr-1">CASO ${idx + 1}</span>
                  ${ej}
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 🗣️ GUION INTERACTIVO DE LA TERTULIA (HAZ CLIC EN CUALQUIER INTERVENCIÓN PARA SALTAR A ESE MOMENTO) -->
          <div class="space-y-2.5">
            <div class="flex items-center justify-between text-xs">
              <span class="font-black uppercase text-amber-400">
                🗣️ Conversación Completa Paso a Paso (Haz clic en cualquier frase para escucharla desde ahí):
              </span>
              <span class="text-[11px] text-slate-400 font-mono">${(ep.dialogo || []).length} intervenciones</span>
            </div>

            <div class="space-y-2.5">
              ${(ep.dialogo || []).map((turn, idx) => {
                const isCarlos = String(turn.locutor || "").toLowerCase().includes("carlos");
                return `
                  <div
                    id="podcast-turn-${idx}"
                    onclick="window.appController.seekPodcastToTurn(${idx})"
                    class="podcast-turn-card cursor-pointer p-3.5 rounded-2xl border transition flex items-start space-x-3 ${
                      isCarlos
                        ? "bg-slate-900/90 border-emerald-700/40 hover:border-emerald-400"
                        : "bg-slate-900/60 border-amber-700/40 hover:border-amber-400"
                    }"
                  >
                    <div class="w-9 h-9 rounded-xl ${
                      isCarlos ? "bg-emerald-600 text-white" : "bg-amber-500 text-slate-950"
                    } font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ${isCarlos ? "🎖️BC" : "🪖CM"}
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black ${isCarlos ? "text-emerald-400" : "text-amber-400"}">
                          ${turn.locutor}
                        </span>
                        <span class="text-[10px] font-mono text-slate-400">▶️ Intervención ${idx + 1}/${ep.dialogo.length}</span>
                      </div>
                      <p class="text-xs sm:text-sm text-slate-100 leading-relaxed">${turn.texto}</p>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      </div>
    `;

    this.updatePodcastModalLiveState();
  }

  closePodcastStudioModal() {
    const modal = document.getElementById("podcast-studio-modal");
    if (modal) modal.classList.add("hidden");
  }

  updatePodcastModalLiveState() {
    const modal = document.getElementById("podcast-studio-modal");
    if (!modal || modal.classList.contains("hidden")) return;

    const playBtn = document.getElementById("podcast-modal-play-btn");
    const speedBtn = document.getElementById("podcast-modal-speed-btn");
    const curEl = document.getElementById("podcast-modal-time-cur");
    const durEl = document.getElementById("podcast-modal-time-dur");
    const rangeEl = document.getElementById("podcast-modal-Range");
    const speakerEl = document.getElementById("podcast-modal-active-speaker");

    const ep = this.getPodcastEpisode(this.audioTemaCodigo);
    const audio = this.podcastAudio;

    if (playBtn) {
      playBtn.innerHTML = (!audio || audio.paused) ? "▶️ Escuchar Tertulia" : "⏸️ Pausar";
    }
    if (speedBtn) {
      speedBtn.textContent = `⚡ ${(this.audioRate || 1.0)}x`;
    }
    if (audio && curEl) {
      curEl.textContent = this.formatAudioTime(audio.currentTime);
    }
    if (audio && audio.duration && !isNaN(audio.duration) && durEl) {
      durEl.textContent = this.formatAudioTime(audio.duration);
    }
    if (audio && audio.duration && !isNaN(audio.duration) && rangeEl) {
      rangeEl.value = String(Math.round((audio.currentTime / audio.duration) * 100));
    }

    const activeIdx = this.activePodcastTurnIndex || 0;
    if (ep && Array.isArray(ep.dialogo) && ep.dialogo[activeIdx] && speakerEl) {
      const turn = ep.dialogo[activeIdx];
      speakerEl.textContent = `🎙️ Hablando ahora (${activeIdx + 1}/${ep.dialogo.length}): ${turn.locutor}`;
    }

    document.querySelectorAll(".podcast-turn-card").forEach((el, idx) => {
      if (idx === activeIdx && audio && !audio.paused) {
        el.classList.add("ring-2", "ring-amber-400", "bg-amber-950/30");
      } else {
        el.classList.remove("ring-2", "ring-amber-400", "bg-amber-950/30");
      }
    });
  }

  speakCurrentFlashcard() {
    if (!("speechSynthesis" in window)) return;
    const card = this.fcList && this.fcList[this.fcIndex];
    if (!card) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      `${card.clave}. ${card.frente}. Respuesta: ${card.reverso || card.dorso || ""}`
    );
    utterance.lang = "es-ES";
    utterance.rate = 1.05;
    window.speechSynthesis.speak(utterance);
  }

  renderTacticalAudioBar() {
    let bar = document.getElementById("tactical-audio-bar");
    if (!this.isSpeaking || !this.podcastAudio || !this.audioTemaCodigo) {
      if (bar) bar.classList.add("hidden");
      return;
    }
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "tactical-audio-bar";
      bar.className = "fixed bottom-16 md:bottom-4 inset-x-3 max-w-4xl mx-auto z-40 rounded-2xl bg-slate-950/95 border-2 border-amber-500 shadow-2xl p-3 backdrop-blur-md";
      document.body.appendChild(bar);
    }
    bar.classList.remove("hidden");

    const ep = this.getPodcastEpisode(this.audioTemaCodigo);
    const audio = this.podcastAudio;
    const curTime = this.formatAudioTime(audio.currentTime);
    const durTime = (audio.duration && !isNaN(audio.duration))
      ? this.formatAudioTime(audio.duration)
      : (ep ? ep.duracionEstimada : "06:00");
    const activeTurn = (ep && Array.isArray(ep.dialogo) && ep.dialogo[this.activePodcastTurnIndex || 0])
      ? ep.dialogo[this.activePodcastTurnIndex || 0]
      : null;
    const speedLabel = `${(this.audioRate || 1.0)}x`;

    bar.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div
          onclick="window.appController.openPodcastStudioModal('${this.audioTemaCodigo}')"
          class="flex items-center space-x-2.5 min-w-0 flex-1 cursor-pointer"
          title="Haz clic para abrir el Estudio de Podcast con ejemplos y guion interactivo"
        >
          <span class="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 ${audio.paused ? "" : "animate-pulse"}">
            🎙️
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono font-black text-amber-400 uppercase text-[10px]">
                📻 RADIO PERMANENCIA ET • ${this.audioTemaCodigo} (${curTime} / ${durTime})
              </span>
              <span class="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-600 text-[10px] font-bold">
                📖 Ver Guion y Ejemplos
              </span>
            </div>
            <div class="font-bold text-white truncate">
              ${activeTurn ? `<span class="text-amber-300">${activeTurn.locutor}:</span> ${activeTurn.texto}` : (ep ? ep.titulo : this.audioTemaCodigo)}
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-1.5 shrink-0">
          <button onclick="window.appController.seekPodcastRelative(-15)" class="px-2 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono font-bold" title="Retroceder 15 segundos">
            ⏪15s
          </button>
          <button onclick="window.appController.togglePauseAudio()" class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black">
            ${audio.paused ? "▶️ Play" : "⏸️ Pausa"}
          </button>
          <button onclick="window.appController.seekPodcastRelative(15)" class="px-2 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono font-bold" title="Avanzar 15 segundos">
            15s⏩
          </button>
          <button onclick="window.appController.cycleAudioSpeed()" class="px-2.5 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-600 font-mono font-black" title="Cambiar velocidad del podcast">
            ⚡ ${speedLabel}
          </button>
          <button onclick="window.appController.stopAudio()" class="px-2.5 py-1.5 rounded-lg bg-red-950 hover:bg-red-900 text-red-300 border border-red-600 font-black" title="Cerrar Podcast">
            ⏹️
          </button>
        </div>
      </div>
    `;
  }


  // ==========================================
  // 📈 PLANIFICADOR DIARIO DE MISIÓN ("PLAN DE CHOQUE INTELIGENTE" + ENTRENADOR ADAPTATIVO IA)
  // ==========================================
  startAdaptiveIATest(count = 25, studyMode = true) {
    this.startSimulatorWithParams({
      count,
      bloque: "ALL",
      mode: "adaptive_ia",
      packRule: "adaptive_ia",
      studyMode
    });
  }

  getPriorityTopicsForToday() {
    if (typeof OFFICIAL_SYLLABUS === "undefined") return [];
    const topicStats = window.storageManager.getTopicStats();
    const readTopics = new Set(window.storageManager.getReadTopics());
    const starOrder = ["B2-T04", "B1-T04", "B1-T06", "B2-T01", "B2-T08", "B1-T01", "B2-T03", "B3-T01", "B3-T04", "B3-T07"];

    const scored = OFFICIAL_SYLLABUS.map(t => {
      const st = topicStats[t.codigo] || { correct: 0, wrong: 0 };
      const total = st.correct + st.wrong;
      const netPct = total > 0 ? Math.round((Math.max(0, st.correct - st.wrong / 3) / total) * 100) : -1;
      const isRead = readTopics.has(t.codigo);
      const starBonus = starOrder.includes(t.codigo) ? 20 : 0;
      const unreadBonus = isRead ? 0 : 15;
      const priorityScore = (netPct === -1 ? 85 : (100 - netPct)) + starBonus + unreadBonus;
      return { tema: t, netPct, total, isRead, priorityScore };
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

    this.startSimulatorWithParams({ count: 20, bloque: "ALL", mode: "tema", temaCodigo: code1, studyMode: true });
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

    const readTopics = window.storageManager.getReadTopics();
    const allQuestions = window.storageManager.getQuestions();
    const survivalRec = window.storageManager.getSurvivalRecord();
    const diag = window.storageManager.getTopicDiagnosticReport();
    const seenIds = window.storageManager.getAnsweredQuestionIdsSet();
    const failedCount = window.storageManager.getFailedQuestions().length;

    const countDominados = diag.filter(d => d.status === "DOMINADO").length;
    const countProgreso = diag.filter(d => d.status === "PROGRESO").length;
    const countCriticos = diag.filter(d => d.status === "CRITICO").length;
    const countSinExplorar = diag.filter(d => d.status === "SIN_EXPLORAR").length;
    const unseenCount = Math.max(0, allQuestions.length - seenIds.size);

    const [t1, t2] = pair;
    const pal1 = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[t1.tema.codigo]) || { accent: "#10b981", titleColor: "#34d399" };
    const pal2 = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[t2.tema.codigo]) || { accent: "#f59e0b", titleColor: "#fbbf24" };

    container.innerHTML = `
      <div class="tactical-card rounded-2xl p-5 border-2 border-amber-500/40 bg-gradient-to-br from-slate-950/95 to-emerald-950/20 space-y-4">
        <!-- Guía del Jefe de Estudios: ¿Por dónde empiezo si no he leído el temario? -->
        <div class="p-3.5 rounded-xl bg-slate-950/95 border border-emerald-500/40 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[10px] uppercase">
                👨‍🏫 Método del Jefe de Estudios (Empezar desde Cero)
              </span>
              <span class="text-xs font-mono font-bold text-amber-400">
                📖 ${readTopics.length} de 21 Temas Leídos (Equivalen a los 28 Temas en Vídeo)
              </span>
            </div>
            <p class="text-xs text-slate-200 leading-relaxed">
              <strong>¿No sabes por dónde empezar? Sigue siempre estos 4 pasos en orden:</strong>
              <span class="text-amber-300 font-bold">1️⃣ Lee/Escucha el Resumen + Pizarra Vídeo</span> ➔
              <span class="text-sky-300 font-bold">2️⃣ Mira el Esquema Visual</span> ➔
              <span class="text-emerald-300 font-bold">3️⃣ Haz el Test Gradual / Adaptativo IA</span> ➔
              <span class="text-purple-300 font-bold">4️⃣ Simulacro y Chuleta PDF</span>.
            </p>
          </div>
          <div class="flex flex-wrap gap-1.5 shrink-0">
            <button
              onclick="window.appController.playTopicPodcast('B1-T01', true)"
              class="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition shadow flex items-center space-x-1"
              title="Abrir Radio Permanencia ET: 21 Podcasts Conversacionales con Brigada Carlos y Cabo 1º Marta explicando la ley con ejemplos"
            >
              <span>🎙️</span><span>Radio Permanencia (21 Podcasts)</span>
            </button>
            <button
              onclick="window.appController.openWarNotebookModal()"
              class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition shadow"
            >
              📓 Mi Cuaderno de Guerra (PDF)
            </button>
            <button
              onclick="window.appController.startSurvivalMode()"
              class="px-3 py-1.5 rounded-lg bg-red-950 hover:bg-red-900 text-red-200 border border-red-500 text-xs font-black transition"
              title="Modo Supervivencia: 3 Vidas ❤️❤️❤️. Récord actual: ${survivalRec.bestStreak || 0} seguidas"
            >
              💀 Supervivencia 3 Vidas (🏆 ${survivalRec.bestStreak || 0})
            </button>
            <button
              onclick="window.appController.startTagFilteredTest('Fácil', true, 20)"
              class="px-3 py-1.5 rounded-lg bg-green-950 hover:bg-green-900 text-green-300 border border-green-600 text-xs font-black transition"
            >
              🟢 Test Nivel Fácil (20p)
            </button>
          </div>
        </div>

        <!-- 🧠 ENTRENADOR INTELIGENTE ADAPTATIVO (IA TÁCTICA LOCAL) + SEMÁFORO GLOBAL DE 21 TEMAS -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-950 to-purple-950/50 border-2 border-sky-500/50 space-y-3">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded bg-sky-400 text-slate-950 font-black text-[11px] uppercase">
                  🧠 Entrenador Inteligente Adaptativo (IA Táctica Local)
                </span>
                <span class="text-xs font-mono text-sky-300">
                  40% Temas Débiles • 30% Bolsa de Fallos (${failedCount}) • 30% Preguntas Inéditas (${unseenCount} por descubrir)
                </span>
              </div>
              <p class="text-xs text-slate-200 leading-relaxed">
                Nuestro motor analiza tu historial real en los <strong>21 temas</strong> y te construye al instante un entrenamiento a medida con tus puntos débiles, tus errores pendientes y preguntas del banco que aún no has visto.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 shrink-0">
              <button
                onclick="window.appController.startAdaptiveIATest(25, true)"
                class="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition flex items-center space-x-1.5"
              >
                <span>🧠</span><span>Test Adaptativo IA (25p Estudio)</span>
              </button>
              <button
                onclick="window.appController.startAdaptiveIATest(50, false)"
                class="px-3.5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase tracking-wider shadow-lg transition flex items-center space-x-1.5"
              >
                <span>🏆</span><span>Simulacro IA (50p Examen)</span>
              </button>
            </div>
          </div>

          <!-- Semáforo Táctico Resumen de los 21 Temas -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80 text-xs">
            <div class="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-600/40 flex items-center justify-between">
              <span class="font-bold text-emerald-300">🟢 Temas Dominados (≥75%)</span>
              <span class="font-mono font-black text-base text-emerald-400">${countDominados}/21</span>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-950/40 border border-amber-600/40 flex items-center justify-between">
              <span class="font-bold text-amber-300">🟡 En Progreso (50–74%)</span>
              <span class="font-mono font-black text-base text-amber-400">${countProgreso}/21</span>
            </div>
            <div class="p-2.5 rounded-xl bg-red-950/40 border border-red-600/40 flex items-center justify-between">
              <span class="font-bold text-red-300">🔴 Críticos (&lt;50%)</span>
              <span class="font-mono font-black text-base text-red-400">${countCriticos}/21</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-between">
              <span class="font-bold text-slate-300">⚪ Sin Test Aún</span>
              <span class="font-mono font-black text-base text-slate-200">${countSinExplorar}/21</span>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[11px] uppercase">
                📈 Orden de Operaciones del Día
              </span>
              <span class="text-xs font-mono text-emerald-400">2 Temas Prioritarios seleccionados según tu Semáforo Táctico</span>
            </div>
            <h3 class="text-base sm:text-lg font-black text-white mt-1">
              🎯 Tus 2 Objetivos Prioritarios para Hoy (Lectura, Audio Manos Libres y Test)
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
            const qCount = allQuestions.filter(q => q.temaCodigo === item.tema.codigo).length;
            const statusText = item.netPct === -1 ? "⚪ Sin test aún" : item.netPct >= 75 ? `🟢 ${item.netPct}% dominio` : item.netPct >= 50 ? `🟡 ${item.netPct}% progreso` : `🔴 ${item.netPct}% reforzar`;
            const readBadge = item.isRead
              ? `<span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-600">✅ Resumen Leído</span>`
              : `<span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-600">📖 Paso 1 Pendiente</span>`;
            return `
              <div class="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between space-y-3" style="border-left: 5px solid ${pal.accent};">
                <div>
                  <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono mb-1">
                    <span class="font-black text-amber-400">${label} • ${item.tema.codigo}</span>
                    <div class="flex items-center space-x-1.5">
                      ${readBadge}
                      <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">${statusText}</span>
                    </div>
                  </div>
                  <h4 class="text-sm font-black leading-snug" style="color:${pal.titleColor};">${item.tema.titulo}</h4>
                  <p class="text-[11px] text-slate-400 mt-1">📊 Peso: <strong class="text-slate-200">${item.tema.frecuenciaExamen || "Alto"}</strong> • 🗄️ <strong>${qCount} preg.</strong> ${item.tema.equivalencia28 ? `• <span class="text-sky-300">${item.tema.equivalencia28}</span>` : ""}</p>
                </div>
                <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  <button onclick="window.appController.openStudyGuideModal('${item.tema.codigo}')" class="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black transition">
                    📖 1. Resumen
                  </button>
                  <button onclick="window.appController.playTopicPodcast('${item.tema.codigo}', true)" class="px-2.5 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500 text-[11px] font-black transition" title="Escuchar Podcast Conversacional (Brigada Carlos y Cabo 1º Marta explicando la ley con ejemplos de cuartel)">
                    🎙️ Podcast (Ejemplos)
                  </button>
                  <button onclick="window.appController.openSchemaModal('${item.tema.codigo}')" class="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-700 text-[11px] font-bold transition">
                    📊 2. Esquema
                  </button>
                  <button onclick="window.appController.startTopicStudy('${item.tema.codigo}')" class="px-2.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-black transition">
                    💡 3. Test (${qCount})
                  </button>
                  <button onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${item.tema.codigo}')" class="px-2 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 text-[11px] font-bold transition ml-auto" title="Descargar Chuleta PDF">
                    📄 PDF
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
            ⏱️ Repaso 2 Min: Tarjetas de Plazos y Sanciones
          </button>
        </div>

        <!-- ⚡ RETOS RÁPIDOS / GUARDIA EXPRESS (3 A 5 MINUTOS) -->
        <div class="p-3.5 rounded-xl bg-slate-950/90 border border-amber-500/30 space-y-2.5">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center space-x-2">
              <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[10px] uppercase">
                ⚡ Retos Rápidos / Guardia Express (3 a 5 Minutos)
              </span>
              <span class="text-[11px] text-slate-400">Micro-entrenamientos intensivos con corrección al instante</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <button
              onclick="window.appController.startQuickChallenge('RET-EXPRESS-10', true)"
              class="p-2.5 rounded-xl bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/50 text-left transition flex flex-col justify-between"
            >
              <div class="flex items-center justify-between text-[10px] font-mono text-amber-300 font-bold">
                <span>⚡ 3 MIN • 10 PREG</span>
                <span class="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black">EXPRESS</span>
              </div>
              <div class="text-xs font-black text-white mt-1">Guardia Express 3 Bloques</div>
            </button>
            <button
              onclick="window.appController.startQuickChallenge('RET-PLAZOS-10', true)"
              class="p-2.5 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-500/50 text-left transition flex flex-col justify-between"
            >
              <div class="flex items-center justify-between text-[10px] font-mono text-rose-300 font-bold">
                <span>⏱️ 3 MIN • 10 PREG</span>
                <span class="px-1.5 py-0.5 rounded bg-rose-500 text-white font-black">PLAZOS</span>
              </div>
              <div class="text-xs font-black text-white mt-1">Sprint de Plazos y Mayorías</div>
            </button>
            <button
              onclick="window.appController.startQuickChallenge('RET-TRAMPAS-10', true)"
              class="p-2.5 rounded-xl bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/50 text-left transition flex flex-col justify-between"
            >
              <div class="flex items-center justify-between text-[10px] font-mono text-purple-300 font-bold">
                <span>🪤 3 MIN • 10 PREG</span>
                <span class="px-1.5 py-0.5 rounded bg-purple-500 text-white font-black">TRAMPAS</span>
              </div>
              <div class="text-xs font-black text-white mt-1">Duelo Caza-Trampas Express</div>
            </button>
            <button
              onclick="window.appController.startQuickChallenge('RET-IMPRESCINDIBLES-15', true)"
              class="p-2.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/50 text-left transition flex flex-col justify-between"
            >
              <div class="flex items-center justify-between text-[10px] font-mono text-emerald-300 font-bold">
                <span>🔥 5 MIN • 15 PREG</span>
                <span class="px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black">TOP 6 PARETO</span>
              </div>
              <div class="text-xs font-black text-white mt-1">15 Imprescindibles Examen</div>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 🚦 SEMÁFORO TÁCTICO Y LISTADO DE LOS 21 TEMAS SEPARADOS POR COLORES Y BLOQUES
  // ==========================================
  renderHeatmap() {
    const container = document.getElementById("dash-heatmap-grid");
    if (!container || typeof OFFICIAL_SYLLABUS === "undefined") return;

    const topicStats = window.storageManager.getTopicStats();
    const readSet = new Set(window.storageManager.getReadTopics());
    const allQuestions = window.storageManager.getQuestions();

    const bloquesConfig = [
      {
        key: "Bloque 1: Organización",
        titulo: "🏛️ BLOQUE 1: ORGANIZACIÓN (6 Temas BOE = Vídeos 1 al 10 • ~34% Examen)",
        headerBg: "bg-emerald-950/80 border-emerald-600/50 text-emerald-300"
      },
      {
        key: "Bloque 2: Jurídico-Social",
        titulo: "⚖️ BLOQUE 2: JURÍDICO-SOCIAL (8 Temas BOE = Vídeos 11 al 20 • ~40% Examen)",
        headerBg: "bg-amber-950/80 border-amber-600/50 text-amber-300"
      },
      {
        key: "Bloque 3: Seguridad Nacional",
        titulo: "🌍 BLOQUE 3: SEGURIDAD NACIONAL (7 Temas BOE = Vídeos 21 al 28 • ~26% Examen)",
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
              const qCount = allQuestions.filter(q => q.temaCodigo === tema.codigo).length;
              const isRead = readSet.has(tema.codigo);
              let pctBadge = `<span class="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800" title="Sin preguntas respondidas aún (${qCount} disponibles)">⚪ ${qCount}p</span>`;

              if (total > 0) {
                const net = Math.max(0, st.correct - st.wrong / 3);
                const pct = Math.round((net / total) * 100);
                const semIcon = pct >= 75 ? "🟢" : pct >= 50 ? "🟡" : "🔴";
                const cls = pct >= 75 ? "text-emerald-300 bg-emerald-950/80 border-emerald-600/50" : pct >= 50 ? "text-amber-300 bg-amber-950/80 border-amber-600/50" : "text-red-300 bg-red-950/80 border-red-600/50";
                pctBadge = `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-black border ${cls}" title="${st.correct} aciertos / ${st.wrong} fallos">${semIcon} ${pct}%</span>`;
              }

              const shortTitle = tema.titulo.replace(/^Tema\s+\d+\.\s*/i, "");

              return `
                <div
                  class="p-3 hover:bg-slate-900/90 transition flex items-center justify-between gap-2"
                  style="border-left: 5px solid ${pal.accent}; background: ${pal.bg};"
                >
                  <div class="min-w-0 flex-1 cursor-pointer" onclick="window.appController.openStudyGuideModal('${tema.codigo}')">
                    <div class="flex flex-wrap items-center gap-1.5">
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-black bg-slate-950 text-white border" style="border-color:${pal.accent};">
                        ${tema.codigo}
                      </span>
                      ${isRead ? `<span class="text-[10px] text-emerald-400 font-bold" title="Resumen Magistral Leído">✅ Leído</span>` : `<span class="text-[10px] text-amber-300/90 font-semibold" title="Pulsa para leer el Resumen desde Cero">📖 Leer</span>`}
                      ${pctBadge}
                      ${tema.equivalencia28 ? `<span class="text-[9px] font-mono text-sky-300/90">${tema.equivalencia28.replace("🎬 Vídeos 28T: ", "🎬 ")}</span>` : ""}
                    </div>
                    <div class="text-xs font-extrabold leading-snug mt-1" style="color:${pal.titleColor};">
                      ${shortTitle}
                    </div>
                  </div>

                  <div class="flex items-center space-x-1 shrink-0">
                    <button
                      onclick="window.appController.openStudyGuideModal('${tema.codigo}')"
                      class="p-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-xs"
                      title="Paso 1: Leer Resumen Magistral desde Cero y Descargar PDF"
                    >📖</button>
                    <button
                      onclick="window.appController.playTopicPodcast('${tema.codigo}', true)"
                      class="p-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/70 text-xs"
                      title="Escuchar Podcast Conversacional con Ejemplos de Cuartel (Brigada Carlos y Cabo 1º Marta)"
                    >🎙️</button>
                    <button
                      onclick="window.appController.openSchemaModal('${tema.codigo}')"
                      class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs"
                      title="Paso 2: Ver Esquema Visual de Colores y Descargar PDF"
                    >📊</button>
                    <button
                      onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${tema.codigo}')"
                      class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs"
                      title="Descargar Chuleta Táctica en PDF"
                    >📄</button>
                    <button
                      onclick="window.appController.startTopicStudy('${tema.codigo}')"
                      class="px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] uppercase"
                      title="Paso 3: Iniciar Test en Modo Estudio (${qCount} preguntas)"
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
  // VISOR DE TEMARIO TÁCTICO POR FILAS DE COLORES + RESUMEN DESDE CERO + ESQUEMAS Y CHULETAS PDF
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
              <span class="px-2.5 py-0.5 rounded font-mono font-black text-xs bg-sky-400 text-slate-950">📊 PASO 2 • ${tema.codigo}</span>
              <span class="text-xs font-bold text-slate-400 uppercase">${tema.bloque}</span>
              <span class="text-xs font-mono text-emerald-400">${tema.frecuenciaExamen || ""}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-black mt-1" style="color:${pal.titleColor};">${tema.titulo}</h3>
            <p class="text-xs font-mono text-slate-400">📜 ${tema.normativa}</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              onclick="window.appController.closeSchemaModal(); window.appController.openStudyGuideModal('${tema.codigo}');"
              class="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/50 font-black text-xs uppercase transition"
            >
              📖 Ver Paso 1: Resumen desde Cero
            </button>
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
    const readSet = new Set(window.storageManager.getReadTopics());
    const rawQuery = (this.temarioSearchQuery || "").toLowerCase();

    let filtered = OFFICIAL_SYLLABUS;
    if (this.selectedSyllabusFilter === "ANNOTATED") {
      filtered = OFFICIAL_SYLLABUS.filter(t => window.storageManager.hasTopicAnnotations(t.codigo));
    } else if (this.selectedSyllabusFilter !== "ALL") {
      filtered = OFFICIAL_SYLLABUS.filter(t => t.bloque === this.selectedSyllabusFilter);
    }

    if (rawQuery) {
      filtered = filtered.filter(t => {
        const guide = (typeof MASTER_STUDY_GUIDES !== "undefined") ? MASTER_STUDY_GUIDES[t.codigo] : null;
        const notesText = window.storageManager.getTopicNotes(t.codigo).map(n => `${n.titulo} ${n.texto}`).join(" ");
        const guideText = guide
          ? [guide.consejoJefeEstudios, guide.actualizaciones, ...(guide.epigrafes || []).map(e => `${e.titulo} ${e.contenido || ""} ${e.explicacion || ""} ${(e.puntos || []).join(" ")}`)].join(" ")
          : "";
        const haystack = [
          t.codigo,
          t.bloque,
          t.titulo,
          t.normativa,
          t.resumen,
          t.equivalencia28 || "",
          guideText,
          notesText,
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
          ...(q.etiquetas || []),
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
                ${matchingQuestions.slice(0, 25).map(q => `
                  <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-mono font-bold">${q.temaCodigo} • ${q.materia}</span>
                      <span class="text-emerald-400 font-mono">${q.referencia || ""}</span>
                    </div>
                    ${this.renderQuestionTagsHTML(q)}
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
        <div class="tactical-card rounded-2xl p-8 text-center text-slate-400 space-y-2">
          <div class="text-2xl">📌</div>
          <p class="text-sm font-bold text-slate-200">No hay temas que coincidan con el filtro seleccionado.</p>
          ${this.selectedSyllabusFilter === "ANNOTATED" ? `<p class="text-xs text-slate-400">Abre cualquier tema con el botón <strong>📖 1. Resumen Cero</strong> o despliégalo para pegar tus primeros Post-its y subrayar en fluorescente.</p>` : ""}
        </div>
      `;
      return;
    }

    const bloquesOrder = [
      {
        key: "Bloque 1: Organización",
        banner: "🏛️ BLOQUE 1: ORGANIZACIÓN (6 Temas Oficiales BOE = Vídeos 1 al 10 de YouTube • ~34% del examen)",
        bannerStyle: "background: linear-gradient(90deg, rgba(6,95,70,0.9), rgba(15,23,42,0.9)); border-color: #10b981; color: #6ee7b7;"
      },
      {
        key: "Bloque 2: Jurídico-Social",
        banner: "⚖️ BLOQUE 2: JURÍDICO-SOCIAL (8 Temas Oficiales BOE = Vídeos 11 al 20 de YouTube • ~40% del examen)",
        bannerStyle: "background: linear-gradient(90deg, rgba(146,64,14,0.9), rgba(15,23,42,0.9)); border-color: #f59e0b; color: #fde68a;"
      },
      {
        key: "Bloque 3: Seguridad Nacional",
        banner: "🌍 BLOQUE 3: SEGURIDAD NACIONAL Y OO.II. (7 Temas Oficiales BOE = Vídeos 21 al 28 de YouTube • ~26% del examen)",
        bannerStyle: "background: linear-gradient(90deg, rgba(7,89,133,0.9), rgba(15,23,42,0.9)); border-color: #38bdf8; color: #bae6fd;"
      }
    ];

    const totalNotesCount = Object.values(window.storageManager.getAllTopicNotes()).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.length : 0), 0);

    container.innerHTML = `
      <!-- Banner de Ruta de Estudio en 4 Pasos + Contador de Post-its y Subrayados -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-emerald-950/30 to-slate-950 border border-amber-500/40 flex flex-wrap items-center justify-between gap-3 mb-2">
        <div class="space-y-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[11px] uppercase">
              🧭 Ruta de Estudio + Equivalencia 21 Temas BOE ↔ 28 Temas Vídeos
            </span>
            <span class="text-xs font-mono font-bold text-emerald-400">
              ✅ ${readSet.size} / 21 Resúmenes Leídos • 📌 ${totalNotesCount} Post-its • 🗄️ ${allQuestions.length} Preguntas
            </span>
          </div>
          <p class="text-xs text-slate-300">
            Cada fila incluye la etiqueta <strong>🎬 Vídeos 28T</strong> para que sepas a qué vídeo(s) de tu NotebookLM corresponde cada tema oficial del BOE (Orden DEF/1341/2017 y Orden DEF/15/2026).
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onclick="window.appController.playTopicPodcast('B1-T01', true)"
            class="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition shadow flex items-center space-x-1"
            title="Abrir Radio Permanencia ET: 21 Podcasts Conversacionales con Brigada Carlos y Cabo 1º Marta explicando cada ley con ejemplos"
          >
            <span>🎙️</span><span>Radio Permanencia (21 Podcasts)</span>
          </button>
          <button
            onclick="window.appController.loadAllTeacherVideoPostIts()"
            class="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-slate-950 text-xs font-black transition shadow flex items-center space-x-1"
            title="Pega automáticamente en tus 21 temas los 49 Post-its clave extraídos de los 28 vídeos de YouTube"
          >
            <span>🎬</span><span>Pegar 49 Post-its de los Vídeos</span>
          </button>
          <button
            onclick="window.appController.openWarNotebookModal()"
            class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition shadow"
          >
            📓 Mi Cuaderno de Guerra (PDF)
          </button>
          <button
            onclick="window.appController.toggleExpandAllTopics()"
            class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 transition"
          >
            📂 Expandir / Contraer Todos
          </button>
        </div>
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
              const topicQuestions = allQuestions.filter(q => q.temaCodigo === tema.codigo);
              const qCount = topicQuestions.length;
              const easyCount = topicQuestions.filter(q => Array.isArray(q.etiquetas) && q.etiquetas.includes("Fácil")).length;
              const examCount = topicQuestions.filter(q => Array.isArray(q.etiquetas) && q.etiquetas.includes("Pregunta de Examen")).length;
              const trapCount = topicQuestions.filter(q => Array.isArray(q.etiquetas) && q.etiquetas.includes("Trampa")).length;

              const notes = window.storageManager.getTopicNotes(tema.codigo);
              const hl = window.storageManager.getTopicHighlights(tema.codigo);
              const hlCount = Object.keys(hl.items || {}).length + (hl.phrases || []).length;

              const pal = (typeof TOPIC_COLOR_PALETTE !== "undefined" && TOPIC_COLOR_PALETTE[tema.codigo]) || {
                accent: "#10b981",
                bg: "rgba(16,185,129,0.1)",
                border: "rgba(16,185,129,0.45)",
                titleColor: "#34d399"
              };
              const isExpanded = rawQuery ? true : this.expandedTopics.has(tema.codigo);
              const schema = (typeof VISUAL_SCHEMAS !== "undefined") ? VISUAL_SCHEMAS[tema.codigo] : null;
              const guide = (typeof MASTER_STUDY_GUIDES !== "undefined") ? MASTER_STUDY_GUIDES[tema.codigo] : null;
              const isRead = readSet.has(tema.codigo);

              const st = topicStats[tema.codigo] || { correct: 0, wrong: 0 };
              const totalAns = st.correct + st.wrong;
              const masteryPct = totalAns > 0 ? `${Math.round((Math.max(0, st.correct - st.wrong / 3) / totalAns) * 100)}% dominio` : "Sin test";

              return `
                <div
                  id="topic-card-${tema.codigo}"
                  class="rounded-2xl transition overflow-hidden"
                  style="background: ${pal.bg}; border: 1.5px solid ${pal.border}; border-left: 7px solid ${pal.accent};"
                >
                  <!-- FILA PRINCIPAL DEL TEMA CON TÍTULO DE COLOR Y BOTONES DIRECTOS POR PASOS -->
                  <div class="p-3.5 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div
                      class="flex-1 cursor-pointer select-none"
                      onclick="window.appController.toggleTopicRow('${tema.codigo}')"
                    >
                      <div class="flex flex-wrap items-center gap-2 mb-1">
                        <span class="px-2.5 py-0.5 rounded text-xs font-mono font-black bg-slate-950 text-white border" style="border-color:${pal.accent};">
                          ${tema.codigo}
                        </span>
                        ${tema.equivalencia28 ? `
                          <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-sky-950 text-sky-300 border border-sky-500/50">
                            ${tema.equivalencia28}
                          </span>
                        ` : ""}
                        ${isRead
                          ? `<span class="px-2 py-0.5 rounded text-[11px] font-black bg-emerald-950 text-emerald-300 border border-emerald-500/60">✅ Paso 1 Leído</span>`
                          : `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-950 text-amber-300 border border-amber-500/50">📖 Paso 1: Empieza por el Resumen</span>`
                        }
                        ${(notes.length > 0 || hlCount > 0) ? `
                          <span class="px-2 py-0.5 rounded text-[11px] font-black bg-yellow-400/20 text-yellow-200 border border-yellow-400/60">
                            📌 ${notes.length} Post-its • 🖍️ ${hlCount}
                          </span>
                        ` : ""}
                        <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-950/90 text-amber-300 border border-amber-500/30">
                          📊 ${tema.frecuenciaExamen || "Alta frecuencia"}
                        </span>
                        <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-slate-300 border border-slate-800">
                          🎯 ${masteryPct} • ${qCount} preg. (🏛️${examCount} 🟢${easyCount} 🔴${trapCount})
                        </span>
                        <span class="text-xs font-bold text-slate-400 ml-auto lg:ml-2">
                          ${isExpanded ? "🔼 Ocultar" : "🔽 Desplegar (Post-its / Subrayar)"}
                        </span>
                      </div>

                      <h3 class="text-base sm:text-lg font-black leading-snug" style="color: ${pal.titleColor};">
                        ${tema.titulo}
                      </h3>
                      <p class="text-xs font-mono text-slate-300 mt-0.5">📜 ${tema.normativa}</p>
                    </div>

                    <!-- Botonera Táctica de la Fila (Ordenada Paso 1 -> Paso 2 -> Paso 3 -> Paso 4) -->
                    <div class="flex flex-wrap items-center gap-1.5 shrink-0">
                      <button
                        onclick="window.appController.openStudyGuideModal('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition flex items-center space-x-1 shadow"
                        title="Paso 1: Leer el Resumen Magistral desde Cero, subrayar en fluorescente, pegar Post-its y descargar PDF"
                      >
                        <span>📖</span><span>1. Resumen + Post-its</span>
                      </button>

                      <button
                        onclick="window.appController.openSchemaModal('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 text-sky-200 border border-sky-500/60 text-xs font-black transition flex items-center space-x-1"
                        title="Paso 2: Abrir Esquema Visual con colores, subrayados y flechas + Descargar en PDF"
                      >
                        <span>📊</span><span>2. Esquema</span>
                      </button>

                      <button
                        onclick="window.appController.startTopicStudy('${tema.codigo}')"
                        class="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-black uppercase transition"
                        title="Paso 3: Entrenar las ${qCount} preguntas del tema con corrección instantánea"
                      >
                        💡 3. Estudio (${qCount})
                      </button>

                      <button
                        onclick="window.pdfGenerator.downloadTopicCheatSheetPDF('${tema.codigo}')"
                        class="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 text-xs font-bold transition flex items-center space-x-1"
                        title="Paso 4: Descargar Chuleta Táctica en PDF (Resumen + Post-its + Trampas + Preguntas del Tema)"
                      >
                        <span>📄</span><span>Chuleta</span>
                      </button>

                      <button
                        onclick="window.appController.playTopicPodcast('${tema.codigo}', true)"
                        class="px-3 py-1.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500 text-xs font-black text-emerald-300 transition flex items-center space-x-1 shadow"
                        title="Escuchar Podcast Conversacional (Brigada Carlos y Cabo 1º Marta debatiendo y explicando la ley con ejemplos de cuartel)"
                      >
                        <span>🎙️</span><span>Podcast (Ejemplos)</span>
                      </button>
                    </div>
                  </div>

                  <!-- PANEL DESPLEGABLE DEL TEMA (POST-ITS + SUBRAYADOR FLUORESCENTE + RESUMEN DESDE CERO + ESQUEMA VISUAL) -->
                  <div class="${isExpanded ? "block" : "hidden"} p-4 pt-3 border-t border-slate-800/80 bg-slate-950/90 space-y-4">
                    <!-- Barra de Entrenamiento por Niveles y Etiquetas de este Tema -->
                    <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2">
                      <span class="text-xs font-black text-amber-400 uppercase">
                        🎯 Entrenar este Tema por Nivel / Etiqueta (${qCount} preguntas):
                      </span>
                      <div class="flex flex-wrap gap-1.5">
                        <button onclick="window.appController.startTagFilteredTest('Fácil', true, 20, '${tema.codigo}')" class="px-2.5 py-1 rounded-lg bg-green-950 hover:bg-green-900 text-green-300 border border-green-600 text-[11px] font-black">
                          🟢 Fácil (${easyCount})
                        </button>
                        <button onclick="window.appController.startTagFilteredTest('Importante', true, 25, '${tema.codigo}')" class="px-2.5 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-600 text-[11px] font-black">
                          ⭐ Importantes
                        </button>
                        <button onclick="window.appController.startTagFilteredTest('Pregunta de Examen', true, 25, '${tema.codigo}')" class="px-2.5 py-1 rounded-lg bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-600 text-[11px] font-black">
                          🏛️ Examen Oficial (${examCount})
                        </button>
                        <button onclick="window.appController.startTagFilteredTest('Trampa', true, 20, '${tema.codigo}')" class="px-2.5 py-1 rounded-lg bg-red-950 hover:bg-red-900 text-red-300 border border-red-600 text-[11px] font-black">
                          🔴 Trampas (${trapCount})
                        </button>
                        <button onclick="window.appController.startTopicTest('${tema.codigo}')" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black">
                          🏆 Simulacro del Tema (${qCount})
                        </button>
                      </div>
                    </div>

                    <!-- 🖍️ SUBRAYADOR FLUORESCENTE + 📌 TABLERO DE POST-ITS INTEGRADO EN LA FILA -->
                    ${this.renderAnnotationsWorkspaceHTML(tema.codigo, false)}

                    ${guide ? `
                      <!-- Resumen Magistral desde Cero Integrado en la Ficha (Con Subrayado Fluorescente al hacer clic) -->
                      <div class="p-4 rounded-2xl bg-slate-950 border-2 border-amber-500/40 space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                          <div>
                            <span class="text-xs font-black uppercase text-amber-400">
                              📖 PASO 1: ${guide.subtituloDidactico || tema.titulo} (${guide.tiempoLectura || "10 min"})
                            </span>
                            <p class="text-[11px] text-slate-400">Haz clic sobre cualquier párrafo o punto <code>▸</code> para subrayarlo con el rotulador fluorescente activo.</p>
                          </div>
                          <div class="flex flex-wrap gap-1.5">
                            <button
                              onclick="window.appController.playTopicPodcast('${tema.codigo}', true)"
                              class="px-3 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500 font-black text-[11px] uppercase"
                            >
                              🎙️ Escuchar Podcast con Ejemplos
                            </button>
                            <button
                              onclick="window.appController.openStudyGuideModal('${tema.codigo}')"
                              class="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-[11px] uppercase"
                            >
                              🔍 Abrir en Pantalla Completa
                            </button>
                            <button
                              onclick="window.pdfGenerator.downloadMasterSummaryPDF('${tema.codigo}')"
                              class="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] uppercase"
                            >
                              🖨️ PDF Resumen + Post-its
                            </button>
                          </div>
                        </div>

                        <div class="p-3 rounded-xl bg-amber-950/25 border border-amber-500/40 text-xs text-amber-100 leading-relaxed">
                          <strong class="text-amber-400 uppercase block mb-0.5">👨‍🏫 Consejo del Jefe de Estudios:</strong>
                          ${this.applyPhraseHighlightsToHTML(guide.consejoJefeEstudios, hl.phrases)}
                        </div>

                        <div class="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/40 text-xs text-emerald-100 leading-relaxed">
                          <strong class="text-emerald-400 uppercase block mb-0.5">🆕 Actualizaciones 2024 / 2025 / 2026:</strong>
                          ${this.applyPhraseHighlightsToHTML(guide.actualizaciones, hl.phrases)}
                        </div>

                        <div class="grid grid-cols-1 gap-3">
                          ${(guide.epigrafes || []).map((ep, epIdx) => `
                            <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2" style="border-left: 4px solid ${pal.accent};">
                              <div class="text-xs sm:text-sm font-black text-amber-300 uppercase">${ep.titulo}</div>
                              <div class="space-y-2">
                                ${this.renderEpigrafeInteractiveHTML(tema.codigo, ep, epIdx, hl, false)}
                              </div>
                            </div>
                          `).join("")}
                        </div>
                      </div>
                    ` : `
                      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <strong class="text-amber-400 uppercase text-xs block mb-1">📌 Resumen Ejecutivo:</strong>
                        ${this.applyPhraseHighlightsToHTML(tema.resumen, hl.phrases)}
                      </div>
                    `}

                    ${schema ? `
                      <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                          <span class="text-xs font-black uppercase text-sky-400">
                            📊 PASO 2: ${schema.subtituloPoster}
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

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div class="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-800/60 space-y-1.5">
                        <strong class="text-emerald-400 uppercase text-xs block">🔥 Puntos Calientes de Examen (Haz clic para subrayar):</strong>
                        <ul class="space-y-1 text-xs text-slate-200">
                          ${tema.puntosCalientes.map((p, pIdx) => {
                            const itemKey = `hot-${pIdx}`;
                            const itemColor = hl.items[itemKey];
                            const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
                            return `
                              <li
                                onclick="window.appController.togglePointHighlight('${tema.codigo}', '${itemKey}', false)"
                                class="cursor-pointer p-1.5 rounded hover:bg-slate-900/50 transition leading-relaxed ${hlBlockCls}"
                              >
                                ${itemColor ? "🖍️" : "•"} ${this.applyPhraseHighlightsToHTML(p, hl.phrases)}
                              </li>
                            `;
                          }).join("")}
                        </ul>
                      </div>

                      <div class="p-3.5 rounded-xl bg-red-950/25 border border-red-800/60 space-y-1.5">
                        <strong class="text-red-400 uppercase text-xs block">🪤 Trampas Frecuentes del Tribunal (Haz clic para subrayar):</strong>
                        <ul class="space-y-1 text-xs text-red-200">
                          ${tema.trampas.map((t, tIdx) => {
                            const itemKey = `trap-${tIdx}`;
                            const itemColor = hl.items[itemKey];
                            const hlBlockCls = itemColor ? `hl-block-${itemColor}` : "";
                            return `
                              <li
                                onclick="window.appController.togglePointHighlight('${tema.codigo}', '${itemKey}', false)"
                                class="cursor-pointer p-1.5 rounded hover:bg-slate-900/50 transition leading-relaxed ${hlBlockCls}"
                              >
                                ${itemColor ? "🖍️" : ""} ${this.applyPhraseHighlightsToHTML(t, hl.phrases)}
                              </li>
                            `;
                          }).join("")}
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
    this.startSimulatorWithParams({ count: 35, bloque: "ALL", mode: "tema", temaCodigo, studyMode: true });
  }

  startTopicTest(temaCodigo) {
    this.startSimulatorWithParams({ count: 35, bloque: "ALL", mode: "tema", temaCodigo, studyMode: false });
  }

  startTagFilteredTest(tagFilter, studyMode = true, count = 25, temaCodigo = null) {
    const mode = temaCodigo ? "tema" : "official";
    this.startSimulatorWithParams({ count, bloque: "ALL", mode, temaCodigo, studyMode, tagFilter });
  }

  // ==========================================
  // MODO AUDIO TÁCTICO / PODCAST CONVERSACIONAL (MANOS LIBRES)
  // ==========================================
  speakTopic(temaCodigo) {
    this.playTopicPodcast(temaCodigo, true);
  }

  stopAudio() {
    if (this.podcastAudio) {
      try {
        this.podcastAudio.pause();
        this.podcastAudio.src = "";
      } catch (_e) {}
      this.podcastAudio = null;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.isAudioPaused = false;
    this.renderTacticalAudioBar();
    this.updatePodcastModalLiveState();
  }

  // ==========================================
  // LABORATORIO CAZA-TRAMPAS, INTELIGENCIA DE ACADEMIAS Y TABLAS
  // ==========================================
  renderTrampas() {
    const tablesContainer = document.getElementById("comparative-tables-container");
    if (!tablesContainer || typeof COMPARATIVE_TABLES === "undefined") return;

    const allQuestions = window.storageManager.getQuestions();
    const trapCount = allQuestions.filter(q => q.dificultad === "trampa" || (Array.isArray(q.etiquetas) && q.etiquetas.includes("Trampa"))).length;
    const officialCount = allQuestions.filter(q => q.esExamenOficial === true || (Array.isArray(q.etiquetas) && q.etiquetas.includes("Pregunta de Examen"))).length;

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
  // 🏆 CUARTEL GENERAL DE 12 SIMULACROS OFICIALES CERRADOS + MOTOR DE SIMULACRO
  // ==========================================
  renderOfficialExamPacks() {
    const container = document.getElementById("official-packs-container");
    if (!container || typeof OFFICIAL_EXAM_PACKS === "undefined") return;

    const packScores = window.storageManager.getPackScores();
    const totalPacks = OFFICIAL_EXAM_PACKS.length;
    const passedPacks = OFFICIAL_EXAM_PACKS.filter(p => packScores[p.id] && packScores[p.id].passed).length;
    const allQCount = window.storageManager.getQuestions().length;

    const colorStyles = {
      amber:   { border: "border-amber-500/60",   bg: "bg-amber-950/15",   badge: "bg-amber-500 text-slate-950" },
      emerald: { border: "border-emerald-500/60", bg: "bg-emerald-950/15", badge: "bg-emerald-500 text-slate-950" },
      sky:     { border: "border-sky-500/60",     bg: "bg-sky-950/15",     badge: "bg-sky-400 text-slate-950" },
      indigo:  { border: "border-indigo-500/60",  bg: "bg-indigo-950/15",  badge: "bg-indigo-400 text-slate-950" },
      rose:    { border: "border-rose-500/60",    bg: "bg-rose-950/15",    badge: "bg-rose-500 text-white" },
      red:     { border: "border-red-500/60",     bg: "bg-red-950/15",     badge: "bg-red-500 text-white" },
      purple:  { border: "border-purple-500/60",  bg: "bg-purple-950/15",  badge: "bg-purple-400 text-slate-950" },
      teal:    { border: "border-teal-500/60",    bg: "bg-teal-950/15",    badge: "bg-teal-400 text-slate-950" },
      yellow:  { border: "border-yellow-500/60",  bg: "bg-yellow-950/15",  badge: "bg-yellow-400 text-slate-950" },
      blue:    { border: "border-blue-500/60",    bg: "bg-blue-950/15",    badge: "bg-blue-400 text-slate-950" },
      fuchsia: { border: "border-fuchsia-500/60", bg: "bg-fuchsia-950/15", badge: "bg-fuchsia-400 text-slate-950" },
      green:   { border: "border-green-500/60",   bg: "bg-green-950/15",   badge: "bg-green-400 text-slate-950" }
    };

    const quickChallengesHTML = (typeof QUICK_CHALLENGE_PACKS !== "undefined" && Array.isArray(QUICK_CHALLENGE_PACKS))
      ? `
        <div class="p-4 rounded-2xl bg-slate-950/95 border-2 border-emerald-500/50 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[11px] uppercase">
                  ⚡ Retos Rápidos / Guardia Express (3 a 5 Minutos)
                </span>
                <span class="text-xs font-mono text-amber-300 font-bold">
                  Entrenamiento de alta intensidad para tiempos muertos en el cuartel
                </span>
              </div>
              <p class="text-xs text-slate-300 mt-1">
                Completa un micro-reto en <strong>180 segundos</strong> con preguntas de examen, plazos numéricos, trampas del tribunal o los 6 temas Pareto.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${QUICK_CHALLENGE_PACKS.map(ch => {
              const rec = packScores[ch.id];
              const recBadge = rec
                ? `<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-black border ${rec.passed ? "bg-emerald-950 text-emerald-300 border-emerald-500" : "bg-red-950 text-red-300 border-red-500"}">
                     🏆 ${rec.bestScoreOutOf10}/10 (${rec.attempts}x)
                   </span>`
                : `<span class="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-900 text-slate-400 border border-slate-700">Nuevo</span>`;
              return `
                <div class="p-3.5 rounded-xl border-2 ${ch.borderClass || "border-amber-500/50 bg-amber-950/15"} flex flex-col justify-between space-y-2.5">
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between gap-1">
                      <span class="px-2 py-0.5 rounded text-[9px] font-black uppercase ${ch.badgeColor || "bg-amber-500 text-slate-950"}">${ch.badge}</span>
                      ${recBadge}
                    </div>
                    <h4 class="text-xs sm:text-sm font-black text-white leading-snug">${ch.titulo}</h4>
                    <p class="text-[11px] text-slate-300 leading-relaxed">${ch.descripcion}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-800/80">
                    <button
                      type="button"
                      onclick="window.appController.startQuickChallenge('${ch.id}', true)"
                      class="py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-[10px] uppercase transition text-center"
                    >
                      💡 Estudio (${ch.durationMinutes}m)
                    </button>
                    <button
                      type="button"
                      onclick="window.appController.startQuickChallenge('${ch.id}', false)"
                      class="py-1.5 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/50 font-black text-[10px] uppercase transition text-center"
                    >
                      ⚔️ Crono Puro
                    </button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `
      : "";

    container.innerHTML = `
      <div class="space-y-4 mb-6">
        ${quickChallengesHTML}

        <div class="p-4 rounded-2xl bg-slate-950/95 border-2 border-amber-500/50 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[11px] uppercase">
                🏆 Cuartel General de Simulacros Oficiales (${totalPacks} Exámenes)
              </span>
              <span class="text-xs font-mono font-bold text-emerald-400">
                ✅ ${passedPacks} / ${totalPacks} Simulacros Superados (APTO ≥ 5.0) • 🗄️ ${allQCount} Preguntas Activas
              </span>
            </div>
            <p class="text-xs text-slate-300 mt-1">
              Cada Simulacro Oficial guarda tu <strong>mejor nota sobre 10</strong>, tu tiempo y tus intentos. Puedes lanzarlo en <strong>⚔️ Modo Examen Oficial Cronometrado</strong> o en <strong>💡 Modo Academia (Corrección Instantánea)</strong>.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${OFFICIAL_EXAM_PACKS.map(pack => {
            const st = colorStyles[pack.color] || colorStyles.amber;
            const borderCls = pack.borderClass || `${st.border} ${st.bg}`;
            const badgeCls = pack.badgeColor || st.badge;
            const qCount = pack.count || pack.preguntas || 100;
            const mins = pack.durationMinutes || pack.tiempoMinutos || 120;
            const repartoStr = pack.reparto || (pack.bloque && pack.bloque !== "ALL" ? pack.bloque : "3 Bloques Oficiales");
            const rec = packScores[pack.id];
            const recordBadge = rec
              ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-black border ${rec.passed ? "bg-emerald-950 text-emerald-300 border-emerald-500" : "bg-red-950 text-red-300 border-red-500"}">
                   🏆 Mejor: ${rec.bestScoreOutOf10}/10 (${rec.passed ? "APTO" : "NO APTO"}) • ${rec.attempts} int.
                 </span>`
              : `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-700">
                   ⏳ Pendiente de realizar
                 </span>`;

            return `
              <div class="tactical-card rounded-2xl p-4 border-2 ${borderCls} flex flex-col justify-between space-y-3">
                <div class="space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase ${badgeCls}">
                      ${pack.badge}
                    </span>
                    ${recordBadge}
                  </div>

                  <div>
                    <h4 class="text-sm sm:text-base font-black text-white leading-snug">${pack.titulo}</h4>
                    <div class="text-[11px] font-mono text-amber-300 font-bold mt-0.5">${pack.subtitulo}</div>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed">
                    ${pack.descripcion}
                  </p>

                  <div class="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300 pt-1">
                    <span class="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800">📋 ${qCount} preg.</span>
                    <span class="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800">⏱️ ${mins} min</span>
                    <span class="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-emerald-300">${repartoStr}</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <button
                    type="button"
                    onclick="window.appController.startExamPack('${pack.id}', false)"
                    class="py-2 px-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wide transition shadow text-center"
                  >
                    ⚔️ Examen Oficial
                  </button>
                  <button
                    type="button"
                    onclick="window.appController.startExamPack('${pack.id}', true)"
                    class="py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-600/60 font-black text-[11px] uppercase tracking-wide transition text-center"
                  >
                    💡 Modo Academia
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  startQuickChallenge(challengeId, studyModeOverride = null) {
    if (typeof QUICK_CHALLENGE_PACKS !== "undefined") {
      const ch = QUICK_CHALLENGE_PACKS.find(c => c.id === challengeId);
      if (ch) {
        const useStudy = studyModeOverride !== null ? Boolean(studyModeOverride) : Boolean(ch.studyMode);
        this.startSimulatorWithParams({
          count: ch.count || 10,
          bloque: ch.bloque || "ALL",
          mode: ch.mode || "official",
          studyMode: useStudy,
          tagFilter: ch.tagFilter || "ALL",
          packId: ch.id,
          packTitle: ch.titulo,
          packRule: ch.packRule || null,
          customMinutes: ch.durationMinutes || 3
        });
        return;
      }
    }
    this.startExamPack(challengeId, studyModeOverride);
  }

  startExamPack(packId, studyModeOverride = null) {
    const allPacks = [
      ...(typeof OFFICIAL_EXAM_PACKS !== "undefined" ? OFFICIAL_EXAM_PACKS : []),
      ...(typeof QUICK_CHALLENGE_PACKS !== "undefined" ? QUICK_CHALLENGE_PACKS : [])
    ];
    const pack = allPacks.find(p => p.id === packId);
    if (!pack) return;

    const useStudy = studyModeOverride !== null ? Boolean(studyModeOverride) : Boolean(pack.studyMode);
    this.startSimulatorWithParams({
      count: pack.count || pack.preguntas || 100,
      bloque: pack.bloque || "ALL",
      mode: pack.mode || "official",
      studyMode: useStudy,
      tagFilter: pack.tagFilter || "ALL",
      packId: pack.id,
      packTitle: pack.titulo,
      packRule: pack.packRule || pack.regla || null,
      customMinutes: pack.durationMinutes || pack.tiempoMinutos || null
    });
  }

  startSimulatorWithParams({
    count = 20,
    bloque = "ALL",
    mode = "official",
    temaCodigo = null,
    studyMode = false,
    tagFilter = "ALL",
    packId = null,
    packTitle = null,
    packRule = null,
    customMinutes = null
  }) {
    const res = window.simulatorEngine.startSession({
      count,
      bloque,
      mode,
      temaCodigo,
      studyMode,
      tagFilter,
      packId,
      packTitle,
      packRule,
      customMinutes
    });
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
    if (counterEl) {
      if (window.simulatorEngine.survivalMode) {
        const lives = window.simulatorEngine.survivalLives;
        const hearts = "❤️".repeat(Math.max(0, lives)) + "🖤".repeat(Math.max(0, 3 - lives));
        counterEl.innerHTML = `<span class="text-red-400 font-black">💀 ${hearts}</span> • <span class="text-amber-300 font-black">🔥 Racha: ${window.simulatorEngine.survivalStreak}</span> • Preg. ${idx + 1}/${total}`;
      } else {
        counterEl.textContent = `Pregunta ${idx + 1} de ${total}`;
      }
    }

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
    const tagsContainer = document.getElementById("sim-q-tags-container");
    if (bloqueBadge) bloqueBadge.textContent = q.bloque;
    if (materiaBadge) {
      materiaBadge.textContent = `${q.temaCodigo || ""} • ${q.materia || "Materia Oficial"}`;
    }
    if (tagsContainer) {
      tagsContainer.innerHTML = this.renderQuestionTagsHTML(q);
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
              <div class="flex flex-wrap items-center gap-1.5">
                ${q.temaCodigo ? `
                  <button onclick="window.appController.openStudyGuideModal('${q.temaCodigo}')" class="px-2 py-0.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-black">
                    📖 Leer Resumen ${q.temaCodigo}
                  </button>
                  <button onclick="window.appController.openSchemaModal('${q.temaCodigo}')" class="px-2 py-0.5 rounded bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-700 font-bold">
                    📊 Esquema ${q.temaCodigo}
                  </button>
                ` : ""}
                <span class="px-2 py-0.5 rounded bg-slate-900 text-amber-400 font-mono border border-slate-700">
                  ${q.referencia || "Temario Oficial BOD"}
                </span>
              </div>
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

    if (window.simulatorEngine.survivalMode && window.simulatorEngine.survivalLives <= 0 && !window.simulatorEngine.isFinished) {
      setTimeout(() => {
        alert(`💀 ¡HAS PERDIDO LAS 3 VIDAS EN COMBATE!\n🔥 Racha máxima alcanzada: ${window.simulatorEngine.survivalMaxStreak} aciertos seguidos.\nSe guardan tus estadísticas y pasamos al informe de tus preguntas.`);
        const summary = window.simulatorEngine.evaluateExam();
        this.renderResults(summary);
        this.showTab("simulator-results");
      }, 400);
    }
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
               ${q.temaCodigo ? `<button onclick="window.appController.openStudyGuideModal('${q.temaCodigo}')" class="text-amber-400 hover:underline font-bold">📖 Leer Resumen ${q.temaCodigo} ➔</button>` : ""}
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
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold text-slate-400">Pregunta ${idx + 1} • ${q.temaCodigo || ""} ${q.bloque}</span>
              ${statusBadge}
            </div>
            <div class="mb-2">${this.renderQuestionTagsHTML(q)}</div>
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
    this.startSimulatorWithParams({ count: 25, bloque: bloqueName, mode: "official" });
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
                  onclick="window.appController.openStudyGuideModal('${q.temaCodigo}')"
                  class="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition"
                >
                  📖 Resumen ${q.temaCodigo}
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

          ${this.renderQuestionTagsHTML(q)}

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
  // IMPORTADOR NOTEBOOKLM (CON SUPER-PROMPTS PARA LOS 27 VÍDEOS DE YOUTUBE) & BACKUP
  // ==========================================
  getNotebookLMPromptByType(type = "video_questions") {
    if (type === "podcast_debate") {
      return `Genera un Podcast Conversacional ameno, carismático y muy didáctico (en Español de España) entre dos militares: un Brigada veterano instructor de academia y una Cabo 1º opositora a la Permanencia de Tropa y Marinería.
Objetivo del episodio:
1. Explicar la ley pura desde cero de forma entretenida y sin tecnicismos soporíferos, poniendo al menos 3 EJEMPLOS REALES Y COTIDIANOS DE VIDA EN EL CUARTEL, GUARDIAS, MANIOBRAS O PERMISOS para que cada artículo se entienda a la primera.
2. Debatir y destacar todos los plazos numéricos exactos, mayorías, órganos competentes y edades clave que preguntan en el examen oficial.
3. Desmontar con humor y claridad las trampas favoritas del Tribunal Militar para que el oyente no falle ni una sola pregunta mientras conduce o entrena.`;
    }
    if (type === "video_notes") {
      return `Actúa como Jefe de Estudios de la oposición de Permanencia de Tropa y Marinería (Orden DEF/1341/2017 y Orden DEF/15/2026).
Analiza las transcripciones de los 27 vídeos de YouTube de este cuaderno (que están divididos en 28 temas de academia) y extrae para cada tema:
1. Equivalencia con los 21 Temas Oficiales del BOE (ej: Vídeos T1 y T2 = B1-T01 Constitución; Vídeos T7, T8, T9 y T10 = B1-T06 EMAD, ET, Armada y EA; Vídeos T11 y T12 = B2-T01 Ley 39/2007 y Ley 8/2006; Vídeos T17 y T18 = B2-T07 Igualdad y UPA; Vídeos T19 y T20 = B2-T08 LPACAP; Vídeos T21 a T28 = B3-T01 a B3-T07).
2. Todos los PLAZOS NUMÉRICOS, MAYORÍAS, EDADES, PORCENTAJES y FECHAS que el profesor destaca como "pregunta segura de examen".
3. Las TRAMPAS DEL TRIBUNAL que advierte en los vídeos (ej: quién sanciona vs quién informa, plazos hábiles vs naturales, órganos consultivos vs ejecutivos).
4. Redáctalo en formato de notas cortas tipo Post-it para pegarlos directamente en mi Cuaderno de Guerra.`;
    }

    return `Actúa como Tribunal Militar y preparador de academia de la oposición de Permanencia de Tropa y Marinería (Orden DEF/1341/2017 y Orden DEF/15/2026).
A partir de los 27 vídeos de YouTube y fuentes de este cuaderno de NotebookLM, genera un array JSON con 20 preguntas tipo test de nivel examen oficial (incluyendo preguntas trampa de plazos, órganos y competencias mencionadas en los vídeos) estrictamente con esta estructura:

[
  {
    "temaCodigo": "B2-T04",
    "bloque": "Bloque 2: Jurídico-Social",
    "materia": "Régimen Disciplinario de las FAS (LO 8/2014)",
    "dificultad": "trampa",
    "esExamenOficial": true,
    "anioConvocatoria": 2025,
    "etiquetas": ["Pregunta de Examen", "Importante", "Trampa"],
    "pregunta": "¿Texto claro y riguroso de la pregunta oficial extraída del vídeo?",
    "opciones": [
      "Opción A",
      "Opción B",
      "Opción C",
      "Opción D"
    ],
    "correcta": 1,
    "ubicacionTemario": "Bloque 2 (Jurídico-Social) ➔ Tema 4 BOE (Vídeo T15) ➔ Epígrafe exacto",
    "referencia": "Ley Orgánica 8/2014, Art. 24.1",
    "consejoAcademia": "Truco o advertencia del vídeo para no caer en la trampa del tribunal.",
    "justificacion": "Explicación jurídica detallada citando el artículo exacto del temario."
  }
]

TABLA DE CONVERSIÓN AUTOMÁTICA (28 TEMAS VÍDEOS YOUTUBE ➔ 21 TEMAS OFICIALES BOE):
- Vídeos T1 y T2 (Constitución) ➔ "B1-T01" ("Bloque 1: Organización")
- Vídeo T3 (LO 5/2005 Defensa Nacional) ➔ "B1-T02" ("Bloque 1: Organización")
- Vídeo T4 (Ley 40/2015 LRJSP) ➔ "B1-T03" ("Bloque 1: Organización")
- Vídeo T5 (RD 205/2024 Ministerio Defensa) ➔ "B1-T04" ("Bloque 1: Organización")
- Vídeo T6 (RD 521/2020 Organización Básica FAS) ➔ "B1-T05" ("Bloque 1: Organización")
- Vídeos T7, T8, T9 y T10 (EMAD, ET, Armada y EA) ➔ "B1-T06" ("Bloque 1: Organización")
- Vídeos T11 y T12 (Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa) ➔ "B2-T01" ("Bloque 2: Jurídico-Social")
- Vídeo T13 (Reales Ordenanzas RD 96/2009) ➔ "B2-T02" ("Bloque 2: Jurídico-Social")
- Vídeo T14 (LO 9/2011 Derechos y Deberes) ➔ "B2-T03" ("Bloque 2: Jurídico-Social")
- Vídeo T15 (LO 8/2014 Régimen Disciplinario) ➔ "B2-T04" ("Bloque 2: Jurídico-Social")
- Vídeo T16 (RD 176/2014 Iniciativas y Quejas) ➔ "B2-T05" ("Bloque 2: Jurídico-Social")
- Vídeo Igualdad LO 3/2007 ➔ "B2-T06" ("Bloque 2: Jurídico-Social")
- Vídeos T17 y T18 (Observatorio Militar Igualdad y Protocolo Acoso UPA) ➔ "B2-T07" ("Bloque 2: Jurídico-Social")
- Vídeos T19 y T20 (Ley 39/2015 LPACAP) ➔ "B2-T08" ("Bloque 2: Jurídico-Social")
- Vídeos T21 y T22 (Ley 36/2015 Seguridad Nacional y ESN 2021) ➔ "B3-T01" ("Bloque 3: Seguridad Nacional")
- Vídeo T23 (PDC-01 Doctrina Empleo FAS) ➔ "B3-T02" ("Bloque 3: Seguridad Nacional")
- Vídeo T24 (ONU) ➔ "B3-T03" ("Bloque 3: Seguridad Nacional")
- Vídeo T25 (OTAN) ➔ "B3-T04" ("Bloque 3: Seguridad Nacional")
- Vídeo T26 (OSCE) ➔ "B3-T05" ("Bloque 3: Seguridad Nacional")
- Vídeo T27 (Unión Europea / PCSD) ➔ "B3-T06" ("Bloque 3: Seguridad Nacional")
- Vídeo T28 (España en Misiones Internacionales) ➔ "B3-T07" ("Bloque 3: Seguridad Nacional")

Devuelve ÚNICAMENTE el bloque JSON válido.`;
  }

  selectNotebookLMPromptType(type) {
    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) {
      promptEl.value = this.getNotebookLMPromptByType(type);
    }
  }

  renderImporter() {
    this.renderCloudSyncPanel();
    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) {
      promptEl.value = this.getNotebookLMPromptByType("video_questions");
    }
  }

  renderCloudSyncPanel(statusBanner = null) {
    const container = document.getElementById("cloud-sync-panel-container");
    if (!container || !window.cloudSyncManager) return;

    const cfg = window.cloudSyncManager.getConfig();
    const queue = window.cloudSyncManager.queue || { pendingCount: 0, reasons: [] };
    const isOffline = window.cloudSyncManager.isDeviceOffline();
    const lastSyncFormatted = cfg.lastSyncAt
      ? new Date(cfg.lastSyncAt).toLocaleString("es-ES")
      : "Sincronizando automáticamente...";

    // Contabilizar datos vivos para mostrar en telemetría
    const stats = window.storageManager.getStats();
    const allNotes = window.storageManager.getAllTopicNotes();
    const allHl = window.storageManager.getAllTopicHighlights();
    const failedCount = window.storageManager.getFailedQuestions().length;
    const baremoCalc = this.calculateBaremoBreakdown(window.storageManager.getBaremo());
    const notesCount = Object.values(allNotes).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.length : 0), 0);
    const hlCount = Object.values(allHl).reduce(
      (acc, h) => acc + Object.keys((h && h.items) || {}).length + (((h && h.phrases) || []).length),
      0
    );

    const publicUrl = "https://tumberoskm.github.io/permanencia-fas/";

    container.innerHTML = `
      <div class="tactical-card rounded-2xl p-6 border-2 ${isOffline ? "border-amber-500/80 bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-900" : "border-emerald-500/60 bg-gradient-to-br from-slate-950 via-slate-900/95 to-emerald-950/25"} space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div class="flex items-center space-x-3">
            <span class="text-3xl">${isOffline ? "🪖" : "☁️"}</span>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded ${isOffline ? "bg-amber-500 text-slate-950" : "bg-emerald-500 text-slate-950"} font-black text-xs uppercase">
                  ${isOffline ? "🪖 MODO MANIOBRAS ACTIVO (SIN COBERTURA)" : "🟢 NUBE CONECTADA EN VIVO (AUTO-SYNC 24/7)"}
                </span>
                <span class="text-xs font-mono text-sky-300">
                  PIN de Unidad: <strong>${cfg.syncKey || "TROPA-PERMANENTE-2026"}</strong> • Últ. sync: ${lastSyncFormatted}
                </span>
              </div>
              <h2 class="text-lg sm:text-xl font-black text-white mt-1">
                Base de Datos en la Nube + Modo Maniobras (Offline-First Automático)
              </h2>
              <p class="text-xs text-slate-300">
                Olvídate de descargar o subir archivos: estudia en el campo de maniobras <strong>sin cobertura</strong> y, en cuanto tu móvil o tablet detecte <strong>1 raya de 4G/5G o Wi-Fi</strong>, la app fusionará y subirá todos tus progresos sola a la Nube.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <button
              onclick="window.cloudSyncManager.toggleSimulatedOffline()"
              class="px-4 py-2.5 rounded-xl ${isOffline ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 animate-bounce" : "bg-amber-950/90 hover:bg-amber-900 text-amber-300 border border-amber-500/60"} font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center space-x-1.5"
            >
              <span>${isOffline ? "📡" : "🪖"}</span>
              <span>${isOffline ? "Recuperar Cobertura Ahora (Auto-Sync)" : "Probar Modo Maniobras (Cortar Cobertura)"}</span>
            </button>
            <button
              onclick="window.appController.triggerCloudPush()"
              class="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center space-x-1.5"
            >
              <span>🔄</span><span>Sincronizar Ahora</span>
            </button>
          </div>
        </div>

        ${statusBanner ? `
          <div class="p-3.5 rounded-xl border text-xs font-bold ${statusBanner.ok ? "bg-emerald-950/60 border-emerald-500 text-emerald-200" : "bg-red-950/60 border-red-500 text-red-200"}">
            ${statusBanner.message}
          </div>
        ` : ""}

        <!-- Telemetría en Tiempo Real de la Nube y Cola de Maniobras -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div class="p-3.5 rounded-xl bg-slate-950/90 border ${queue.pendingCount > 0 ? "border-amber-500 bg-amber-950/30" : "border-slate-800"}">
            <span class="text-[11px] font-mono uppercase text-slate-400 block">📦 Cola de Maniobras</span>
            <span class="text-xl font-black ${queue.pendingCount > 0 ? "text-amber-400" : "text-emerald-400"} mt-0.5 block">
              ${queue.pendingCount > 0 ? `${queue.pendingCount} en cola` : "0 pendientes"}
            </span>
            <span class="text-[10px] text-slate-400">
              ${queue.pendingCount > 0 ? "Se subirán al detectar red" : "Todo subido a la Nube"}
            </span>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800">
            <span class="text-[11px] font-mono uppercase text-slate-400 block">📌 Post-its & 🖍️ Subr.</span>
            <span class="text-xl font-black text-amber-300 mt-0.5 block">${notesCount} / ${hlCount}</span>
            <span class="text-[10px] text-slate-400">Sincronizados en Nube</span>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800">
            <span class="text-[11px] font-mono uppercase text-slate-400 block">🎖️ Mi Baremo Cloud</span>
            <span class="text-xl font-black text-emerald-300 mt-0.5 block">${baremoCalc.concursoTotal} pts</span>
            <span class="text-[10px] text-slate-400">Concurso sobre 100</span>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800">
            <span class="text-[11px] font-mono uppercase text-slate-400 block">⚠️ Bolsa de Fallos</span>
            <span class="text-xl font-black text-red-400 mt-0.5 block">${failedCount} preg.</span>
            <span class="text-[10px] text-slate-400">Fusión inteligente activa</span>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 col-span-2 sm:col-span-1">
            <span class="text-[11px] font-mono uppercase text-slate-400 block">⚡ Experiencia Militar</span>
            <span class="text-xl font-black text-sky-400 mt-0.5 block">${stats.xp || 150} XP</span>
            <span class="text-[10px] text-slate-400">Racha: ${stats.streakDays || 1} días</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          <!-- Columna 1: Cómo funciona el Modo Maniobras -->
          <div class="p-4 rounded-xl bg-slate-950/85 border border-emerald-500/30 space-y-2.5">
            <h3 class="font-black text-emerald-300 uppercase flex items-center space-x-1.5">
              <span>🪖</span><span>1️⃣ ¿Cómo funciona cuando estás de Maniobras?</span>
            </h3>
            <ul class="space-y-1.5 text-slate-300 leading-relaxed text-[11px]">
              <li>• <strong>100% Offline en el campo:</strong> Gracias al motor PWA (<code class="text-amber-300">sw.js v10</code>), los 21/28 temas, las 1.000 preguntas y los 16 simulacros viven dentro de tu móvil aunque estés en modo avión o en mitad del campo de maniobras.</li>
              <li>• <strong>Cola Persistente Automática:</strong> Cada pregunta que contestes, frase que subrayes o Post-it que pegues sin cobertura se guarda en la <strong>Cola de Maniobras</strong>.</li>
              <li>• <strong>Reconexión Inteligente (Smart Merge):</strong> En el instante en que cojas cobertura, la app compara tus datos del móvil con los del PC y <strong>los fusiona sin borrar nada</strong>.</li>
            </ul>
          </div>

          <!-- Columna 2: Configuración del PIN y Motor Cloud -->
          <div class="p-4 rounded-xl bg-slate-950/85 border border-sky-500/30 space-y-3">
            <h3 class="font-black text-sky-300 uppercase">2️⃣ Tu Identificador Cloud (PC ↔ Móvil ↔ Tablet)</h3>
            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">Motor de Base de Datos en la Nube:</label>
              <select id="cloud-provider-select" onchange="window.appController.onCloudProviderSelectChange(this.value)" class="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-semibold">
                <option value="pfas_cloud" ${cfg.provider === "pfas_cloud" ? "selected" : ""}>☁️ Nube Automática PFAS 24/7 (Pre-conectada • Sin registro)</option>
                <option value="firebase" ${cfg.provider === "firebase" ? "selected" : ""}>🔥 Firebase Realtime DB Personalizada</option>
                <option value="github_gist" ${cfg.provider === "github_gist" ? "selected" : ""}>🐙 GitHub Cloud Vault (Gist Privado)</option>
                <option value="supabase" ${cfg.provider === "supabase" ? "selected" : ""}>⚡ Supabase PostgreSQL Cloud API</option>
                <option value="local_server" ${cfg.provider === "local_server" ? "selected" : ""}>🖥️ Solo Servidor Local LAN (/api/cloud-sync)</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] text-slate-300 font-semibold">PIN Militar de Sincronización (el mismo en tus dispositivos):</label>
              <input id="cloud-sync-key-input" type="text" value="${cfg.syncKey || "TROPA-PERMANENTE-2026"}" placeholder="TROPA-PERMANENTE-2026" class="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-amber-500/50 text-amber-300 font-mono font-bold" />
            </div>

            <div id="cloud-fields-pfas" class="${cfg.provider === "pfas_cloud" ? "" : "hidden"} p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-700/50 text-[11px] text-emerald-200">
              ✅ <strong>Base de Datos Cloud Activa:</strong> Nodo <code class="text-amber-300">${(cfg.cloudObjectId || "ff808181...").slice(0, 16)}...</code> conectado por HTTPS. No necesitas configurar nada más.
            </div>

            <div id="cloud-fields-local" class="${cfg.provider === "local_server" ? "" : "hidden"} text-[11px] text-slate-300">
              Guarda en <code class="text-amber-300">data/cloud-sync-db.json</code> dentro de tu servidor Node local.
            </div>

            <div id="cloud-fields-firebase" class="${cfg.provider === "firebase" ? "" : "hidden"} space-y-2">
              <input id="cloud-firebase-url-input" type="text" value="${cfg.firebaseUrl || ""}" placeholder="https://tu-db.firebasedatabase.app" class="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-[11px]" />
              <input id="cloud-firebase-secret-input" type="password" value="${cfg.firebaseSecret || ""}" placeholder="Database Secret (opcional)" class="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-[11px]" />
            </div>

            <div id="cloud-fields-github" class="${cfg.provider === "github_gist" ? "" : "hidden"} space-y-2">
              <input id="cloud-github-token-input" type="password" value="${cfg.githubToken || ""}" placeholder="GitHub Token (ghp_...)" class="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-[11px]" />
              <input id="cloud-gist-id-input" type="text" value="${cfg.gistId || ""}" placeholder="Gist ID (auto-creado)" class="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-emerald-300 font-mono text-[11px]" />
            </div>

            <div id="cloud-fields-supabase" class="${cfg.provider === "supabase" ? "" : "hidden"} space-y-2">
              <input id="cloud-supabase-url-input" type="text" value="${cfg.supabaseUrl || ""}" placeholder="https://xxxx.supabase.co" class="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-[11px]" />
              <input id="cloud-supabase-key-input" type="password" value="${cfg.supabaseKey || ""}" placeholder="Supabase Anon Key" class="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-[11px]" />
            </div>

            <label class="flex items-center space-x-2 cursor-pointer">
              <input id="cloud-autosync-checkbox" type="checkbox" ${cfg.autoSync !== false ? "checked" : ""} class="rounded border-slate-700 text-sky-500" />
              <span class="text-slate-200 font-semibold text-[11px]">Auto-Sync inmediato al hacer cambios o recuperar cobertura</span>
            </label>

            <button onclick="window.appController.saveCloudConfigFromUI()" class="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition">
              💾 Guardar & Sincronizar con la Nube
            </button>
          </div>

          <!-- Columna 3: Acceso Directo en Móvil / Tablet (URL + QR) -->
          <div class="p-4 rounded-xl bg-slate-950/85 border border-amber-500/30 space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <h3 class="font-black text-amber-300 uppercase">3️⃣ Abre tu WebApp en Móvil o Tablet</h3>
              <p class="text-[11px] text-slate-300 leading-relaxed">
                Tu aplicación está desplegada en Internet y conectada a esta misma Base de Datos en la Nube. Escanea el QR con tu móvil o abre el enlace:
              </p>
              <div class="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${encodeURIComponent(publicUrl)}"
                  alt="QR WebApp Permanencia FAS"
                  class="w-20 h-20 rounded-lg border border-amber-500/40 bg-white p-1 shrink-0"
                  onerror="this.style.display='none'"
                />
                <div class="space-y-1.5 overflow-hidden">
                  <a href="${publicUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono font-bold text-emerald-400 hover:underline break-all block">
                    ${publicUrl} ↗
                  </a>
                  <span class="text-[10px] text-slate-400 block">
                    💡 En el móvil: abre el menú del navegador y pulsa <strong>"Añadir a pantalla de inicio / Instalar App"</strong> para llevarla de maniobras.
                  </span>
                </div>
              </div>
            </div>

            <button
              onclick="navigator.clipboard.writeText('${publicUrl}').then(() => window.cloudSyncManager.showTacticalToast('🔗 Enlace de la WebApp copiado al portapapeles', 'emerald'))"
              class="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 font-black text-xs uppercase transition"
            >
              🔗 Copiar Enlace de Internet para mi Móvil
            </button>
          </div>
        </div>
      </div>
    `;
  }

  onCloudProviderSelectChange(provider) {
    ["pfas", "local", "firebase", "github", "supabase"].forEach(k => {
      const el = document.getElementById(`cloud-fields-${k}`);
      if (el) el.classList.add("hidden");
    });
    const map = {
      pfas_cloud: "cloud-fields-pfas",
      local_server: "cloud-fields-local",
      firebase: "cloud-fields-firebase",
      github_gist: "cloud-fields-github",
      supabase: "cloud-fields-supabase"
    };
    const target = document.getElementById(map[provider]);
    if (target) target.classList.remove("hidden");
  }

  _collectCloudConfigFromInputs() {
    const provider = (document.getElementById("cloud-provider-select") || {}).value || "pfas_cloud";
    const syncKey = ((document.getElementById("cloud-sync-key-input") || {}).value || "TROPA-PERMANENTE-2026").trim();
    const autoSync = Boolean((document.getElementById("cloud-autosync-checkbox") || {}).checked);
    const firebaseUrl = ((document.getElementById("cloud-firebase-url-input") || {}).value || "").trim();
    const firebaseSecret = ((document.getElementById("cloud-firebase-secret-input") || {}).value || "").trim();
    const githubToken = ((document.getElementById("cloud-github-token-input") || {}).value || "").trim();
    const gistId = ((document.getElementById("cloud-gist-id-input") || {}).value || "").trim();
    const supabaseUrl = ((document.getElementById("cloud-supabase-url-input") || {}).value || "").trim();
    const supabaseKey = ((document.getElementById("cloud-supabase-key-input") || {}).value || "").trim();

    return window.cloudSyncManager.saveConfig({
      enabled: true,
      provider,
      syncKey,
      autoSync,
      firebaseUrl,
      firebaseSecret,
      githubToken,
      gistId,
      supabaseUrl,
      supabaseKey
    });
  }

  async saveCloudConfigFromUI() {
    this._collectCloudConfigFromInputs();
    const res = await window.cloudSyncManager.syncNow({ announceToast: true });
    this.renderCloudSyncPanel({
      ok: res.ok,
      message: res.ok
        ? `✅ Sincronización bidireccional completada (${res.message}).`
        : `⚠️ ${res.message}`
    });
  }

  async triggerCloudPush() {
    this._collectCloudConfigFromInputs();
    const res = await window.cloudSyncManager.syncNow({ announceToast: true });
    this.renderCloudSyncPanel({
      ok: res.ok,
      message: res.ok ? `☁️ ¡Sincronización completada! ${res.message}` : `⚠️ ${res.message}`
    });
  }

  async triggerCloudPull() {
    this._collectCloudConfigFromInputs();
    const res = await window.cloudSyncManager.pullFromCloud({ silent: false });
    this.updateHeaderStats();
    this.renderCloudSyncPanel({
      ok: res.ok,
      message: res.ok ? `☁️⬇️ ¡Éxito! ${res.message}` : `❌ ${res.message}`
    });
  }

  copyInstantTransferCode() {
    try {
      const code = window.cloudSyncManager.generateInstantTransferCode();
      const input = document.getElementById("instant-transfer-code-input");
      if (input) input.value = code;
      navigator.clipboard.writeText(code).then(() => {
        this.renderCloudSyncPanel({
          ok: true,
          message: "📋 ¡Código de transferencia PFAS9 copiado al portapapeles! Envíalo a tu móvil o tablet y pégalo allí."
        });
      });
    } catch (e) {
      alert("Error al generar el código: " + e.message);
    }
  }

  applyInstantTransferCodeFromUI() {
    const input = document.getElementById("instant-transfer-code-input");
    if (!input || !input.value.trim()) {
      alert("Pega primero un código PFAS9:... en el recuadro.");
      return;
    }
    try {
      window.cloudSyncManager.importInstantTransferCode(input.value.trim());
      this.updateHeaderStats();
      this.renderCloudSyncPanel({
        ok: true,
        message: "⚡ ¡Progreso, Baremo, Post-its y Subrayados transferidos con éxito a este dispositivo!"
      });
    } catch (e) {
      this.renderCloudSyncPanel({
        ok: false,
        message: "❌ Error al aplicar el código: " + e.message
      });
    }
  }

  copyNotebookLMPrompt() {
    const promptEl = document.getElementById("notebooklm-prompt-text");
    if (promptEl) {
      promptEl.select();
      navigator.clipboard.writeText(promptEl.value).then(() => {
        alert("📋 ¡Super-Prompt copiado al portapapeles!\nPégalo en tu cuaderno de NotebookLM con los 27 vídeos de YouTube y te devolverá el resultado listo.");
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
