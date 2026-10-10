/**
 * ============================================================================
 * MOTOR DE BASE DE DATOS Y SINCRONIZACIÓN EN LA NUBE (PC ↔ MÓVIL ↔ TABLET)
 * Permanencia FAS - Ejército de Tierra (v9.0 Cloud Edition)
 * ============================================================================
 * Soporta 4 Motores de Nube:
 * 1. 🔥 Firebase Realtime Database (Google Cloud 24/7 por Internet 4G/5G/WiFi)
 * 2. 🐙 GitHub Gist Cloud Privado (Usa la propia cuenta GitHub del opositor)
 * 3. ⚡ Supabase Cloud REST (PostgreSQL 24/7)
 * 4. 📡 Nube Wi-Fi / Servidor Local (/api/cloud-sync sin configuración externa)
 */

const CLOUD_CONFIG_KEY = "permanencia_cloud_config_v1";

class CloudSyncManager {
  constructor() {
    this.config = this.loadConfig();
    this.isSyncing = false;
    this.lastSyncStatus = "idle"; // 'idle' | 'syncing' | 'ok' | 'error'
    this.lastSyncMessage = "";
    this.autoSyncTimer = null;
    this.init();
  }

  getDefaultConfig() {
    const isLocalServer =
      typeof window !== "undefined" &&
      window.location &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.startsWith("192.168.") ||
        window.location.hostname.startsWith("10."));

    return {
      enabled: isLocalServer,
      autoSync: true,
      provider: isLocalServer ? "local_server" : "firebase", // 'firebase' | 'github_gist' | 'supabase' | 'local_server'
      pin: "SOLDADO-ET-2026",
      deviceName: this.detectDeviceName(),
      firebaseUrl: "",
      githubToken: "",
      githubGistId: "",
      supabaseUrl: "",
      supabaseKey: "",
      localServerUrl: "",
      lastSyncedAt: null
    };
  }

  detectDeviceName() {
    if (typeof navigator === "undefined") return "PC";
    const ua = navigator.userAgent || "";
    if (/iPad|Tablet/i.test(ua)) return "Tablet";
    if (/Android|iPhone|Mobile/i.test(ua)) return "Móvil";
    return "PC Escritorio";
  }

  loadConfig() {
    try {
      const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
      if (!raw) return this.getDefaultConfig();
      return { ...this.getDefaultConfig(), ...JSON.parse(raw) };
    } catch (e) {
      return this.getDefaultConfig();
    }
  }

  saveConfig(partialConfig) {
    this.config = { ...this.config, ...partialConfig };
    if (this.config.pin) {
      this.config.pin = String(this.config.pin)
        .trim()
        .toUpperCase()
        .replace(/[^A-Z0-9_-]/g, "-");
    }
    localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(this.config));
    this.updateHeaderIndicator();
    return this.config;
  }

  init() {
    setTimeout(() => {
      this.updateHeaderIndicator();
      if (this.config.enabled && this.config.autoSync && this.isProviderConfigured()) {
        this.pullFromCloud({ silent: true });
      }
    }, 600);
  }

  isProviderConfigured() {
    const p = this.config.provider;
    if (!this.config.pin) return false;
    if (p === "local_server") return true;
    if (p === "firebase") return Boolean(this.config.firebaseUrl && this.config.firebaseUrl.trim().startsWith("http"));
    if (p === "github_gist") return Boolean(this.config.githubToken && this.config.githubToken.trim().length > 10);
    if (p === "supabase") {
      return Boolean(
        this.config.supabaseUrl &&
        this.config.supabaseUrl.trim().startsWith("http") &&
        this.config.supabaseKey &&
        this.config.supabaseKey.trim().length > 10
      );
    }
    return false;
  }

  // Extrae un payload ligero (~15KB) con todo el progreso, Baremo, Post-its, Subrayados y preguntas personalizadas
  buildCloudPayload() {
    const full = window.storageManager.exportFullBackup();
    const defaultIds = new Set(
      typeof DEFAULT_QUESTIONS !== "undefined" && Array.isArray(DEFAULT_QUESTIONS)
        ? DEFAULT_QUESTIONS.map(q => q.id)
        : []
    );
    const customQuestions = Array.isArray(full.questions)
      ? full.questions.filter(q => q && !defaultIds.has(q.id))
      : [];

    return {
      appName: "Permanencia FAS - Cloud Sync",
      version: "9.0",
      updatedAt: new Date().toISOString(),
      device: this.config.deviceName || this.detectDeviceName(),
      pin: this.config.pin,
      stats: full.stats,
      topicStats: full.topicStats,
      failedQuestions: full.failedQuestions,
      simulatorHistory: full.simulatorHistory,
      learnedFlashcards: full.learnedFlashcards,
      readTopics: full.readTopics,
      topicNotes: full.topicNotes,
      topicHighlights: full.topicHighlights,
      packScores: full.packScores,
      baremo: full.baremo,
      survivalRecord: full.survivalRecord,
      customQuestions
    };
  }

  applyCloudPayload(cloudData) {
    if (!cloudData || typeof cloudData !== "object") {
      throw new Error("Los datos recibidos de la nube no son válidos.");
    }
    const payload = cloudData.payload ? cloudData.payload : cloudData;

    // Reconstruir banco combinando las 1.000 preguntas oficiales por defecto + las personalizadas de la nube
    let mergedQuestions = null;
    if (Array.isArray(payload.customQuestions)) {
      const base =
        typeof DEFAULT_QUESTIONS !== "undefined" && Array.isArray(DEFAULT_QUESTIONS)
          ? [...DEFAULT_QUESTIONS]
          : window.storageManager.getQuestions();
      const baseIds = new Set(base.map(q => q.id));
      payload.customQuestions.forEach(cq => {
        if (cq && !baseIds.has(cq.id)) {
          base.push(cq);
          baseIds.add(cq.id);
        }
      });
      mergedQuestions = base;
    } else if (Array.isArray(payload.questions)) {
      mergedQuestions = payload.questions;
    }

    window.storageManager.importFullBackup(
      {
        ...payload,
        questions: mergedQuestions
      },
      { skipCloudTrigger: true }
    );
  }

  // Notificación automática cuando el usuario subraya, crea un Post-it, cambia su Baremo o termina un test
  notifyDataChanged() {
    if (!this.config.enabled || !this.config.autoSync || !this.isProviderConfigured()) return;
    if (this.autoSyncTimer) clearTimeout(this.autoSyncTimer);
    this.autoSyncTimer = setTimeout(() => {
      this.pushToCloud({ silent: true });
    }, 1800);
  }

  // ==========================================================================
  // SUBIDA A LA NUBE (PUSH)
  // ==========================================================================
  async pushToCloud({ silent = false } = {}) {
    if (!this.isProviderConfigured()) {
      if (!silent) {
        alert("☁️ Primero configura tu proveedor de nube (Firebase, GitHub Gist, Supabase o Servidor Local) en la pestaña Nube & Sync.");
      }
      return { ok: false, message: "Proveedor no configurado" };
    }

    this.isSyncing = true;
    this.lastSyncStatus = "syncing";
    this.updateHeaderIndicator();

    try {
      const payload = this.buildCloudPayload();
      const p = this.config.provider;

      if (p === "local_server") {
        await this.pushLocalServer(payload);
      } else if (p === "firebase") {
        await this.pushFirebase(payload);
      } else if (p === "github_gist") {
        await this.pushGitHubGist(payload);
      } else if (p === "supabase") {
        await this.pushSupabase(payload);
      }

      const nowIso = new Date().toISOString();
      this.saveConfig({ enabled: true, lastSyncedAt: nowIso });
      this.isSyncing = false;
      this.lastSyncStatus = "ok";
      this.lastSyncMessage = `Sincronizado (${new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })})`;
      this.updateHeaderIndicator();

      if (!silent) {
        this.refreshCloudUI();
        alert(`☁️ ¡Datos subidos a la Nube con éxito!\n\n🔑 PIN Militar: ${this.config.pin}\n📱 Ahora abre la WebApp en tu móvil o tablet con este mismo PIN y pulsa "Descargar de la Nube".`);
      }
      return { ok: true, updatedAt: nowIso };
    } catch (err) {
      this.isSyncing = false;
      this.lastSyncStatus = "error";
      this.lastSyncMessage = err.message || "Error de conexión";
      this.updateHeaderIndicator();
      if (!silent) {
        this.refreshCloudUI();
        alert(`⚠️ No se pudo subir a la nube: ${err.message}`);
      }
      return { ok: false, message: err.message };
    }
  }

  // ==========================================================================
  // DESCARGA DESDE LA NUBE (PULL)
  // ==========================================================================
  async pullFromCloud({ silent = false } = {}) {
    if (!this.isProviderConfigured()) {
      if (!silent) {
        alert("☁️ Primero configura tu proveedor de nube en la pestaña Nube & Sync.");
      }
      return { ok: false, message: "Proveedor no configurado" };
    }

    this.isSyncing = true;
    this.lastSyncStatus = "syncing";
    this.updateHeaderIndicator();

    try {
      const p = this.config.provider;
      let cloudRecord = null;

      if (p === "local_server") {
        cloudRecord = await this.pullLocalServer();
      } else if (p === "firebase") {
        cloudRecord = await this.pullFirebase();
      } else if (p === "github_gist") {
        cloudRecord = await this.pullGitHubGist();
      } else if (p === "supabase") {
        cloudRecord = await this.pullSupabase();
      }

      if (!cloudRecord) {
        this.isSyncing = false;
        this.lastSyncStatus = "ok";
        this.lastSyncMessage = "Sin datos previos en nube (listo para subir)";
        this.updateHeaderIndicator();
        if (!silent) {
          alert(`ℹ️ Aún no hay datos guardados bajo el PIN "${this.config.pin}". Pulsa primero en "⬆️ Subir Mi Progreso a la Nube" desde el dispositivo donde tengas tus datos.`);
        }
        return { ok: false, empty: true };
      }

      this.applyCloudPayload(cloudRecord);
      const nowIso = new Date().toISOString();
      this.saveConfig({ enabled: true, lastSyncedAt: nowIso });
      this.isSyncing = false;
      this.lastSyncStatus = "ok";
      this.lastSyncMessage = `Sincronizado (${new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })})`;
      this.updateHeaderIndicator();

      if (window.appController) {
        window.appController.updateHeaderStats();
        if (window.appController.currentTab === "dashboard") window.appController.renderDashboard();
        if (window.appController.currentTab === "baremo") window.appController.renderBaremoTab();
        if (window.appController.currentTab === "temario") window.appController.renderTemario();
        if (window.appController.currentTab === "importer") window.appController.renderImporter();
      }

      if (!silent) {
        alert(`✅ ¡Progreso descargado y sincronizado desde la Nube!\n\n🔑 PIN: ${this.config.pin}\n📱 Dispositivo origen: ${cloudRecord.device || "Nube"}\n🕒 Fecha: ${cloudRecord.updatedAt ? new Date(cloudRecord.updatedAt).toLocaleString("es-ES") : "Reciente"}`);
      }
      return { ok: true };
    } catch (err) {
      this.isSyncing = false;
      this.lastSyncStatus = "error";
      this.lastSyncMessage = err.message || "Error al descargar";
      this.updateHeaderIndicator();
      if (!silent) {
        this.refreshCloudUI();
        alert(`⚠️ Error al descargar de la nube: ${err.message}`);
      }
      return { ok: false, message: err.message };
    }
  }

  // ==========================================================================
  // IMPLEMENTACIÓN DE LOS 4 PROVEEDORES DE NUBE
  // ==========================================================================

  // 1. Servidor Local / Wi-Fi (/api/cloud-sync)
  getLocalEndpoint() {
    const base = (this.config.localServerUrl || "").trim().replace(/\/+$/, "");
    return `${base}/api/cloud-sync`;
  }

  async pushLocalServer(payload) {
    const url = `${this.getLocalEndpoint()}?pin=${encodeURIComponent(this.config.pin)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pin: this.config.pin,
        device: this.config.deviceName,
        payload
      })
    });
    if (!res.ok) {
      throw new Error("El servidor local no respondió (¿estás en GitHub Pages? Selecciona Firebase o GitHub Gist para sincronizar por Internet).");
    }
    return res.json();
  }

  async pullLocalServer() {
    const url = `${this.getLocalEndpoint()}?pin=${encodeURIComponent(this.config.pin)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Servidor local no disponible en esta red.");
    }
    const data = await res.json();
    return data && data.found && data.record ? data.record.payload || data.record : null;
  }

  // 2. Firebase Realtime Database (REST API nativa sin SDK pesado)
  getFirebaseEndpoint() {
    let base = (this.config.firebaseUrl || "").trim().replace(/\/+$/, "");
    if (!base.startsWith("http")) {
      throw new Error("Introduce una URL válida de Firebase Realtime Database (ej: https://tu-proyecto-default-rtdb.europe-west1.firebasedatabase.app)");
    }
    const safePin = encodeURIComponent(this.config.pin || "SOLDADO-ET-2026");
    return `${base}/permanencia_fas_sync/${safePin}.json`;
  }

  async pushFirebase(payload) {
    const url = this.getFirebaseEndpoint();
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      throw new Error(`Firebase devolvió estado ${res.status}. Asegúrate de que las reglas de tu Realtime Database permitan lectura/escritura (.read: true, .write: true).`);
    }
    return res.json();
  }

  async pullFirebase() {
    const url = this.getFirebaseEndpoint();
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Firebase devolvió estado ${res.status}. Verifica la URL de tu Realtime Database.`);
    }
    const data = await res.json();
    return data || null;
  }

  // 3. GitHub Gist Cloud Privado (Usa la cuenta GitHub del propio usuario)
  async findOrCreateGistId(token) {
    if (this.config.githubGistId && this.config.githubGistId.trim().length > 5) {
      return this.config.githubGistId.trim();
    }
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json"
    };
    const listRes = await fetch("https://api.github.com/gists?per_page=50", { headers });
    if (!listRes.ok) {
      throw new Error(`Token de GitHub inválido o sin permiso 'gist' (HTTP ${listRes.status}).`);
    }
    const gists = await listRes.json();
    const fileName = `permanencia_fas_${this.config.pin}.json`;
    const found = Array.isArray(gists)
      ? gists.find(g => g.files && (g.files[fileName] || g.files["permanencia_fas_cloud_sync.json"]))
      : null;

    if (found && found.id) {
      this.saveConfig({ githubGistId: found.id });
      return found.id;
    }
    return null;
  }

  async pushGitHubGist(payload) {
    const token = (this.config.githubToken || "").trim();
    if (!token) throw new Error("Introduce tu Personal Access Token de GitHub (con permiso 'gist').");

    const fileName = `permanencia_fas_${this.config.pin}.json`;
    const existingId = await this.findOrCreateGistId(token);
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json"
    };

    const body = {
      description: `Permanencia FAS Cloud Sync (${this.config.pin}) - Base de Datos Personal`,
      public: false,
      files: {
        [fileName]: {
          content: JSON.stringify(payload, null, 2)
        }
      }
    };

    const url = existingId
      ? `https://api.github.com/gists/${existingId}`
      : "https://api.github.com/gists";
    const method = existingId ? "PATCH" : "POST";

    const res = await fetch(url, { method, headers, body: JSON.stringify(body) });
    if (!res.ok) {
      throw new Error(`GitHub Gist API devolvió error HTTP ${res.status}. Revisa tu Token.`);
    }
    const data = await res.json();
    if (data && data.id) {
      this.saveConfig({ githubGistId: data.id });
    }
    return data;
  }

  async pullGitHubGist() {
    const token = (this.config.githubToken || "").trim();
    if (!token) throw new Error("Introduce tu Personal Access Token de GitHub.");

    const gistId = await this.findOrCreateGistId(token);
    if (!gistId) return null;

    const res = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      },
      cache: "no-store"
    });
    if (!res.ok) throw new Error(`No se pudo leer el Gist (${res.status}).`);
    const gist = await res.json();
    const fileName = `permanencia_fas_${this.config.pin}.json`;
    const fileObj =
      (gist.files && gist.files[fileName]) ||
      (gist.files && gist.files["permanencia_fas_cloud_sync.json"]) ||
      (gist.files && Object.values(gist.files)[0]);

    if (!fileObj || !fileObj.content) return null;
    return JSON.parse(fileObj.content);
  }

  // 4. Supabase REST Cloud
  async pushSupabase(payload) {
    const base = (this.config.supabaseUrl || "").trim().replace(/\/+$/, "");
    const key = (this.config.supabaseKey || "").trim();
    const url = `${base}/rest/v1/permanencia_sync?on_conflict=pin`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        pin: this.config.pin,
        updated_at: new Date().toISOString(),
        payload
      })
    });
    if (!res.ok) {
      throw new Error(`Supabase devolvió HTTP ${res.status}. Verifica que exista la tabla 'permanencia_sync' (columnas: pin text PK, updated_at timestamptz, payload jsonb).`);
    }
    return true;
  }

  async pullSupabase() {
    const base = (this.config.supabaseUrl || "").trim().replace(/\/+$/, "");
    const key = (this.config.supabaseKey || "").trim();
    const url = `${base}/rest/v1/permanencia_sync?pin=eq.${encodeURIComponent(this.config.pin)}&select=*`;
    const res = await fetch(url, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`
      },
      cache: "no-store"
    });
    if (!res.ok) throw new Error(`Supabase devolvió HTTP ${res.status}.`);
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) return null;
    return rows[0].payload || null;
  }

  // ==========================================================================
  // CÓDIGO DE TRANSFERENCIA INSTANTÁNEA (PORTAPAPELES / WHATSAPP / TELEGRAM)
  // ==========================================================================
  generateInstantTransferCode() {
    const payload = this.buildCloudPayload();
    const jsonStr = JSON.stringify(payload);
    const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
    return `PFAS9:${encoded}`;
  }

  importInstantTransferCode(codeStr) {
    const clean = (codeStr || "").trim();
    if (!clean.startsWith("PFAS9:")) {
      throw new Error("El código de transferencia debe comenzar por 'PFAS9:'.");
    }
    const base64 = clean.slice(6);
    const jsonStr = decodeURIComponent(escape(atob(base64)));
    const payload = JSON.parse(jsonStr);
    this.applyCloudPayload(payload);
    return payload;
  }

  // ==========================================================================
  // INDICADOR VISUAL EN LA BARRA SUPERIOR Y PANEL DE CONFIGURACIÓN
  // ==========================================================================
  updateHeaderIndicator() {
    const badge = document.getElementById("header-cloud-badge");
    if (!badge) return;

    if (this.isSyncing) {
      badge.className =
        "flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-amber-950/60 border border-amber-500/60 cursor-pointer animate-pulse";
      badge.innerHTML = `<span class="text-xs">🔄</span><span class="text-[11px] font-mono font-bold text-amber-300 hidden sm:inline">Sincronizando...</span>`;
      return;
    }

    if (this.config.enabled && this.isProviderConfigured()) {
      const isErr = this.lastSyncStatus === "error";
      badge.className = isErr
        ? "flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-red-950/50 border border-red-500/50 cursor-pointer"
        : "flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/50 cursor-pointer hover:bg-emerald-900/60 transition";
      badge.innerHTML = `
        <span class="text-xs">${isErr ? "⚠️" : "☁️"}</span>
        <span class="text-[11px] font-mono font-bold ${isErr ? "text-red-300" : "text-emerald-300"} hidden sm:inline">
          ${isErr ? "Nube: Revisar" : `Nube: ${this.config.pin}`}
        </span>
      `;
    } else {
      badge.className =
        "flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 cursor-pointer hover:border-sky-400 transition";
      badge.innerHTML = `<span class="text-xs">☁️</span><span class="text-[11px] font-mono font-bold text-sky-300 hidden sm:inline">Conectar Nube</span>`;
    }
  }

  refreshCloudUI() {
    if (window.appController && typeof window.appController.renderCloudSyncPanel === "function") {
      window.appController.renderCloudSyncPanel();
    }
  }
}

window.cloudSyncManager = new CloudSyncManager();
