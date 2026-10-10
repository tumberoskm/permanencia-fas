/**
 * MOTOR DE BASE DE DATOS EN LA NUBE + MODO MANIOBRAS (OFFLINE-FIRST AUTO-SYNC)
 * Permanencia FAS - Ejército de Tierra (v10.0)
 *
 * Funcionamiento:
 * 1. Pre-conectado de fábrica a una Base de Datos Cloud HTTPS (pfas_cloud) con soporte CORS
 *    para que funcione automáticamente en https://tumberoskm.github.io/permanencia-fas/
 *    y en http://localhost:3000 sin descargar ni subir archivos JSON manualmente.
 * 2. Modo Maniobras (Offline-First):
 *    - Si estás en el campo de maniobras sin cobertura (offline), todos tus tests,
 *      subrayados fluorescentes, Post-its, Baremo y fallos se guardan en local y se
 *      registran en la Cola Persistente de Maniobras (permanencia_offline_queue_v1).
 *    - En cuanto el móvil/tablet detecta 1 raya de cobertura (evento 'online' o pulso
 *      automático), realiza una Fusión Inteligente Bidireccional (Smart Merge sin pérdida)
 *      con la Base de Datos en la Nube y sube todos los cambios automáticamente.
 */

const CLOUD_CONFIG_KEY = "permanencia_cloud_config_v10";
const CLOUD_QUEUE_KEY = "permanencia_offline_queue_v1";
const DEFAULT_CLOUD_OBJECT_ID = "ff808181a09d98f701a126cb60e8371c";
const DEFAULT_SYNC_PIN = "TROPA-PERMANENTE-2026";
const PIN_DIRECTORY_APP_KEY = "gah23uhi";

class CloudSyncManager {
  constructor() {
    this.config = this.loadConfig();
    this.queue = this.loadQueue();
    this.status = "idle"; // idle | syncing | synced | offline | error
    this.lastMessage = "Nube lista";
    this.simulatedOffline = false; // Permite probar el Modo Maniobras con 1 clic
    this._debounceTimer = null;
    this._heartbeatTimer = null;
    this._isSyncing = false;
    this.init();
  }

  loadConfig() {
    const defaults = {
      enabled: true,
      provider: "pfas_cloud", // 'pfas_cloud' (Automático Internet 24/7) | 'firebase' | 'github_gist' | 'supabase' | 'local_server'
      syncKey: DEFAULT_SYNC_PIN,
      cloudObjectId: DEFAULT_CLOUD_OBJECT_ID,
      autoSync: true,
      firebaseUrl: "",
      firebaseSecret: "",
      githubToken: "",
      gistId: "",
      supabaseUrl: "",
      supabaseKey: "",
      lastSyncAt: null,
      deviceId: "DEV-" + Math.random().toString(36).substring(2, 8).toUpperCase()
    };
    try {
      const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          ...defaults,
          ...parsed,
          enabled: parsed.enabled !== undefined ? parsed.enabled : true,
          provider: parsed.provider || "pfas_cloud",
          syncKey: parsed.syncKey || DEFAULT_SYNC_PIN,
          cloudObjectId: parsed.cloudObjectId || DEFAULT_CLOUD_OBJECT_ID
        };
      }
    } catch (e) {
      // ignore
    }
    localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(defaults));
    return defaults;
  }

  saveConfig(partial) {
    const prevKey = this.config.syncKey;
    this.config = { ...this.config, ...partial };
    if (partial.syncKey && partial.syncKey !== prevKey) {
      if (partial.syncKey === DEFAULT_SYNC_PIN) {
        this.config.cloudObjectId = DEFAULT_CLOUD_OBJECT_ID;
      } else if (!partial.cloudObjectId) {
        this.config.cloudObjectId = "";
      }
    }
    localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(this.config));
    this.updateHeaderIndicator();
    return this.config;
  }

  getConfig() {
    return this.config;
  }

  loadQueue() {
    const defaults = {
      pendingCount: 0,
      firstQueuedAt: null,
      lastQueuedAt: null,
      reasons: []
    };
    try {
      const raw = localStorage.getItem(CLOUD_QUEUE_KEY);
      return raw ? { ...defaults, ...JSON.parse(raw) } : defaults;
    } catch (e) {
      return defaults;
    }
  }

  saveQueue(q) {
    this.queue = q;
    localStorage.setItem(CLOUD_QUEUE_KEY, JSON.stringify(this.queue));
  }

  enqueueOfflineChange(reason = "estudio") {
    const now = new Date().toISOString();
    const reasons = Array.isArray(this.queue.reasons) ? [...this.queue.reasons] : [];
    if (!reasons.includes(reason)) reasons.push(reason);
    this.saveQueue({
      pendingCount: (this.queue.pendingCount || 0) + 1,
      firstQueuedAt: this.queue.firstQueuedAt || now,
      lastQueuedAt: now,
      reasons
    });
  }

  clearQueue() {
    this.saveQueue({
      pendingCount: 0,
      firstQueuedAt: null,
      lastQueuedAt: null,
      reasons: []
    });
  }

  isDeviceOffline() {
    if (this.simulatedOffline) return true;
    if (typeof navigator !== "undefined" && navigator.onLine === false) return true;
    return false;
  }

  init() {
    if (typeof window === "undefined") return;

    // Detectar pérdida de cobertura (Entrada automática en Modo Maniobras)
    window.addEventListener("offline", () => {
      this.status = "offline";
      this.lastMessage = `Modo Maniobras activo (Sin cobertura • ${this.queue.pendingCount || 0} cambios guardados)`;
      this.updateHeaderIndicator();
      this.showTacticalToast("🪖 Sin cobertura: Modo Maniobras Offline activado. Todo tu estudio se guardará en cola.", "amber");
      this._refreshCloudPanelIfVisible();
    });

    // Detectar recuperación de cobertura (Sincronización automática instantánea)
    window.addEventListener("online", () => {
      if (this.simulatedOffline) return;
      const queued = this.queue.pendingCount || 0;
      this.showTacticalToast(
        `📡 Cobertura recuperada: sincronizando ${queued > 0 ? queued + " cambios de maniobras" : "datos"} con la Nube...`,
        "sky"
      );
      this.syncNow({ reason: "reconnect", announceToast: true }).catch(() => {});
    });

    // Sincronizar al volver a abrir la pestaña o desbloquear el móvil
    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && !this.isDeviceOffline() && this.config.enabled) {
          this.syncNow({ reason: "visibility", silent: true }).catch(() => {});
        }
      });
    }

    // Pulso periódico de reconexión y sincronización cada 30 segundos
    this._heartbeatTimer = setInterval(() => {
      if (!this.isDeviceOffline() && this.config.enabled && (this.queue.pendingCount || 0) > 0) {
        this.syncNow({ reason: "heartbeat_flush", announceToast: true }).catch(() => {});
      }
    }, 30000);

    // Sincronización inicial al arrancar la WebApp
    setTimeout(() => {
      this.updateHeaderIndicator();
      if (this.isDeviceOffline()) {
        this.status = "offline";
        this.updateHeaderIndicator();
      } else if (this.config.enabled) {
        this.syncNow({ reason: "startup", silent: true }).catch(() => {});
      }
    }, 600);
  }

  toggleSimulatedOffline(forceValue = null) {
    this.simulatedOffline = forceValue !== null ? Boolean(forceValue) : !this.simulatedOffline;
    if (this.simulatedOffline) {
      this.status = "offline";
      this.lastMessage = `Modo Maniobras Simulado (${this.queue.pendingCount || 0} cambios en cola)`;
      this.updateHeaderIndicator();
      this.showTacticalToast(
        "🪖 Modo Maniobras (Sin Cobertura) ACTIVADO. Haz cambios en tu Baremo, Post-its o Tests y verás cómo se acumulan en la Cola Offline.",
        "amber"
      );
      this._refreshCloudPanelIfVisible();
    } else {
      const pending = this.queue.pendingCount || 0;
      this.showTacticalToast(
        `📡 Cobertura restablecida: subiendo ${pending} cambios acumulados en maniobras a la Base de Datos en la Nube...`,
        "emerald"
      );
      this.syncNow({ reason: "maneuvers_reconnect", announceToast: true }).catch(() => {});
    }
    return this.simulatedOffline;
  }

  /**
   * Notifica cualquier cambio en localStorage (test, subrayado, post-it, baremo, fallo).
   */
  notifyDataChanged(reason = "estudio") {
    this.enqueueOfflineChange(reason);

    if (this.isDeviceOffline()) {
      this.status = "offline";
      this.lastMessage = `Modo Maniobras (${this.queue.pendingCount} cambios en cola)`;
      this.updateHeaderIndicator();
      this._refreshCloudPanelIfVisible();
      return;
    }

    if (!this.config.enabled || !this.config.autoSync) {
      this.updateHeaderIndicator();
      return;
    }

    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this.status = "syncing";
    this.updateHeaderIndicator();

    this._debounceTimer = setTimeout(() => {
      this.syncNow({ reason, silent: true }).catch(() => {});
    }, 1500);
  }

  /**
   * FUSIÓN INTELIGENTE BIDIRECCIONAL (CRDT-Style Smart Merge)
   * Combina los datos locales (ej. móvil en maniobras) con los datos de la nube (ej. PC en casa)
   * sin perder ningún subrayado, Post-it, pregunta fallada, récord de simulacro ni XP.
   */
  smartMergeBackups(localData, cloudData) {
    if (!cloudData || typeof cloudData !== "object") return localData;
    if (!localData || typeof localData !== "object") return cloudData;

    const merged = {
      appName: "Permanencia FAS - WebApp",
      exportDate: new Date().toISOString(),
      version: "10.0"
    };

    // 1. Estadísticas Globales (XP, Racha, Contadores: conservar el máximo progreso)
    const lStats = localData.stats || {};
    const cStats = cloudData.stats || {};
    merged.stats = {
      xp: Math.max(Number(lStats.xp || 0), Number(cStats.xp || 0)),
      streakDays: Math.max(Number(lStats.streakDays || 1), Number(cStats.streakDays || 1)),
      lastActiveDate: [lStats.lastActiveDate, cStats.lastActiveDate].filter(Boolean).sort().pop() || new Date().toISOString().split("T")[0],
      totalAnswered: Math.max(Number(lStats.totalAnswered || 0), Number(cStats.totalAnswered || 0)),
      totalCorrect: Math.max(Number(lStats.totalCorrect || 0), Number(cStats.totalCorrect || 0)),
      totalWrong: Math.max(Number(lStats.totalWrong || 0), Number(cStats.totalWrong || 0)),
      totalBlank: Math.max(Number(lStats.totalBlank || 0), Number(cStats.totalBlank || 0)),
      simulatorsCompleted: Math.max(Number(lStats.simulatorsCompleted || 0), Number(cStats.simulatorsCompleted || 0))
    };

    // 2. Estadísticas por Tema (Mapa de Calor)
    const lTopics = localData.topicStats || {};
    const cTopics = cloudData.topicStats || {};
    const allTopicKeys = new Set([...Object.keys(lTopics), ...Object.keys(cTopics)]);
    merged.topicStats = {};
    allTopicKeys.forEach(k => {
      const lt = lTopics[k] || { correct: 0, wrong: 0 };
      const ct = cTopics[k] || { correct: 0, wrong: 0 };
      merged.topicStats[k] = {
        correct: Math.max(Number(lt.correct || 0), Number(ct.correct || 0)),
        wrong: Math.max(Number(lt.wrong || 0), Number(ct.wrong || 0))
      };
    });

    // 3. Notas Post-it por Tema (Unión por ID sin duplicados)
    const lNotes = localData.topicNotes || {};
    const cNotes = cloudData.topicNotes || {};
    const noteTopics = new Set([...Object.keys(lNotes), ...Object.keys(cNotes)]);
    merged.topicNotes = {};
    noteTopics.forEach(tCode => {
      const listA = Array.isArray(lNotes[tCode]) ? lNotes[tCode] : [];
      const listB = Array.isArray(cNotes[tCode]) ? cNotes[tCode] : [];
      const byId = new Map();
      [...listB, ...listA].forEach(n => {
        if (n && n.id) byId.set(n.id, n);
      });
      merged.topicNotes[tCode] = Array.from(byId.values()).sort((a, b) =>
        String(b.fecha || "").localeCompare(String(a.fecha || ""))
      );
    });

    // 4. Subrayados Fluorescentes por Tema (Unión de puntos y frases subrayadas)
    const lHl = localData.topicHighlights || {};
    const cHl = cloudData.topicHighlights || {};
    const hlTopics = new Set([...Object.keys(lHl), ...Object.keys(cHl)]);
    merged.topicHighlights = {};
    hlTopics.forEach(tCode => {
      const a = lHl[tCode] || { items: {}, phrases: [] };
      const b = cHl[tCode] || { items: {}, phrases: [] };
      const phraseMap = new Map();
      [...(b.phrases || []), ...(a.phrases || [])].forEach(p => {
        if (p && p.text) phraseMap.set(p.text.toLowerCase(), p);
      });
      merged.topicHighlights[tCode] = {
        items: { ...(b.items || {}), ...(a.items || {}) },
        phrases: Array.from(phraseMap.values())
      };
    });

    // 5. Temas Leídos y Flashcards Aprendidas (Unión de conjuntos)
    merged.readTopics = Array.from(new Set([...(localData.readTopics || []), ...(cloudData.readTopics || [])]));
    merged.learnedFlashcards = Array.from(new Set([...(localData.learnedFlashcards || []), ...(cloudData.learnedFlashcards || [])]));

    // 6. Bolsa de Preguntas Falladas (Unión por ID de pregunta)
    const fMap = new Map();
    [...(cloudData.failedQuestions || []), ...(localData.failedQuestions || [])].forEach(item => {
      if (item && item.id) {
        const prev = fMap.get(item.id);
        if (!prev) {
          fMap.set(item.id, item);
        } else {
          fMap.set(item.id, {
            ...prev,
            ...item,
            attempts: Math.max(Number(prev.attempts || 1), Number(item.attempts || 1))
          });
        }
      }
    });
    merged.failedQuestions = Array.from(fMap.values());

    // 7. Récords de los 16 Simulacros Oficiales (Mejor nota y máximo de intentos)
    const lPacks = localData.packScores || {};
    const cPacks = cloudData.packScores || {};
    const packIds = new Set([...Object.keys(lPacks), ...Object.keys(cPacks)]);
    merged.packScores = {};
    packIds.forEach(pid => {
      const lp = lPacks[pid];
      const cp = cPacks[pid];
      if (lp && !cp) merged.packScores[pid] = lp;
      else if (cp && !lp) merged.packScores[pid] = cp;
      else if (lp && cp) {
        const lBest = Number(lp.bestScoreOutOf10 || 0);
        const cBest = Number(cp.bestScoreOutOf10 || 0);
        merged.packScores[pid] = {
          ...(cBest > lBest ? cp : lp),
          bestScoreOutOf10: Math.max(lBest, cBest).toFixed(2),
          passed: Boolean(lp.passed || cp.passed),
          attempts: Math.max(Number(lp.attempts || 1), Number(cp.attempts || 1))
        };
      }
    });

    // 8. Historial de Simulacros (Unión por ID, últimos 30)
    const hMap = new Map();
    [...(cloudData.simulatorHistory || []), ...(localData.simulatorHistory || [])].forEach(h => {
      if (h && h.id) hMap.set(h.id, h);
    });
    merged.simulatorHistory = Array.from(hMap.values())
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
      .slice(0, 30);

    // 9. Baremo y Récord Supervivencia
    // Si el dispositivo local tiene cambios recientes en cola, priorizar baremo local; si no, el más reciente
    const localHasBaremoChange = (this.queue.reasons || []).includes("baremo");
    merged.baremo = localHasBaremoChange
      ? { ...(cloudData.baremo || {}), ...(localData.baremo || {}) }
      : { ...(localData.baremo || {}), ...(cloudData.baremo || {}) };

    const lSurv = localData.survivalRecord || { bestStreak: 0, gamesPlayed: 0 };
    const cSurv = cloudData.survivalRecord || { bestStreak: 0, gamesPlayed: 0 };
    merged.survivalRecord = {
      bestStreak: Math.max(Number(lSurv.bestStreak || 0), Number(cSurv.bestStreak || 0)),
      gamesPlayed: Math.max(Number(lSurv.gamesPlayed || 0), Number(cSurv.gamesPlayed || 0)),
      lastDate: lSurv.lastDate || cSurv.lastDate || new Date().toISOString()
    };

    // 10. Preguntas personalizadas (CUSTOM-)
    const qMap = new Map();
    [...(cloudData.questions || []), ...(localData.questions || [])]
      .filter(q => q && String(q.id).startsWith("CUSTOM-"))
      .forEach(q => qMap.set(q.id, q));
    merged.questions = Array.from(qMap.values());

    return merged;
  }

  /**
   * SINCRONIZACIÓN BIDIRECCIONAL COMPLETA (Pull -> Smart Merge -> Push)
   * Es el corazón del Modo Maniobras al recuperar cobertura.
   */
  async syncNow(options = {}) {
    if (this._isSyncing) return { ok: false, message: "Sincronización en curso..." };
    if (this.isDeviceOffline()) {
      this.status = "offline";
      this.lastMessage = `Modo Maniobras Offline (${this.queue.pendingCount || 0} cambios en cola)`;
      this.updateHeaderIndicator();
      this._refreshCloudPanelIfVisible();
      return { ok: false, offline: true, message: this.lastMessage };
    }

    this._isSyncing = true;
    this.status = "syncing";
    this.updateHeaderIndicator();

    const pendingBefore = this.queue.pendingCount || 0;

    try {
      const localBackup = window.storageManager.exportFullBackup();

      // 1. Intentar obtener el estado actual de la Nube para fusionar sin perder nada
      let cloudBackup = null;
      try {
        const pulled = await this._fetchFromActiveProvider();
        if (pulled && pulled.payload) {
          cloudBackup = pulled.payload;
        }
      } catch (pullErr) {
        // Si aún no existe registro en la nube, subiremos el local directamente
      }

      // 2. Fusionar inteligentemente local + nube
      const mergedBackup = cloudBackup
        ? this.smartMergeBackups(localBackup, cloudBackup)
        : localBackup;

      // 3. Aplicar en local sin disparar bucle
      window.storageManager.importFullBackup(mergedBackup, { skipCloudTrigger: true });

      // 4. Empaquetar sobre y subir a la Base de Datos en la Nube
      const envelope = {
        appName: "Permanencia FAS - Cloud Sync DB",
        version: "10.0",
        updatedAt: new Date().toISOString(),
        deviceId: this.config.deviceId,
        syncKey: this.config.syncKey || DEFAULT_SYNC_PIN,
        payload: mergedBackup
      };

      const pushResult = await this._pushToActiveProvider(envelope);

      // Si estamos en localhost, guardar también espejo automático en server.js (/api/cloud-sync)
      if (this.config.provider !== "local_server" && typeof location !== "undefined" && (location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
        this._pushLocalServer(envelope).catch(() => {});
      }

      this.clearQueue();
      this.config.lastSyncAt = envelope.updatedAt;
      localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(this.config));

      this.status = "synced";
      this.lastMessage = pushResult.message || "Sincronizado con la Nube";
      this.updateHeaderIndicator();
      this._refreshUIViews();

      if (options.announceToast) {
        this.showTacticalToast(
          pendingBefore > 0
            ? `📡 ¡Sincronización completada! ${pendingBefore} cambios de Modo Maniobras guardados en la Base de Datos en la Nube.`
            : `☁️ Base de Datos en la Nube sincronizada al día.`,
          "emerald"
        );
      }

      return { ok: true, message: this.lastMessage, syncedChanges: pendingBefore };
    } catch (err) {
      this.status = "error";
      this.lastMessage = err.message || "Error de conexión con la nube";
      this.updateHeaderIndicator();
      this._refreshCloudPanelIfVisible();
      return { ok: false, message: this.lastMessage };
    } finally {
      this._isSyncing = false;
    }
  }

  async pushToCloud(options = {}) {
    return this.syncNow({ ...options, announceToast: !options.silent });
  }

  async pullFromCloud(options = {}) {
    if (this.isDeviceOffline()) {
      return { ok: false, message: "Estás en Modo Maniobras (Sin cobertura). Reconecta para descargar de la nube." };
    }
    this.status = "syncing";
    this.updateHeaderIndicator();
    try {
      const remoteData = await this._fetchFromActiveProvider();
      if (!remoteData || !remoteData.payload) {
        throw new Error("No se encontraron datos en la nube para este PIN.");
      }
      const localBackup = window.storageManager.exportFullBackup();
      const merged = this.smartMergeBackups(localBackup, remoteData.payload);
      window.storageManager.importFullBackup(merged, { skipCloudTrigger: true });

      this.config.lastSyncAt = remoteData.updatedAt || new Date().toISOString();
      localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(this.config));
      this.status = "synced";
      this.lastMessage = `Datos fusionados desde la Nube (${new Date(this.config.lastSyncAt).toLocaleTimeString()})`;
      this.updateHeaderIndicator();
      this._refreshUIViews();

      if (!options.silent) {
        this.showTacticalToast("☁️⬇️ Datos descargados y fusionados desde la Base de Datos en la Nube.", "emerald");
      }
      return { ok: true, message: this.lastMessage };
    } catch (err) {
      this.status = "error";
      this.lastMessage = err.message || "Error al descargar de la nube";
      this.updateHeaderIndicator();
      return { ok: false, message: this.lastMessage };
    }
  }

  async _fetchFromActiveProvider() {
    const p = this.config.provider || "pfas_cloud";
    if (p === "pfas_cloud") return this._pullPFASCloud();
    if (p === "firebase") return this._pullFirebase();
    if (p === "github_gist") return this._pullGitHubGist();
    if (p === "supabase") return this._pullSupabase();
    return this._pullLocalServer();
  }

  async _pushToActiveProvider(envelope) {
    const p = this.config.provider || "pfas_cloud";
    if (p === "pfas_cloud") return this._pushPFASCloud(envelope);
    if (p === "firebase") return this._pushFirebase(envelope);
    if (p === "github_gist") return this._pushGitHubGist(envelope);
    if (p === "supabase") return this._pushSupabase(envelope);
    return this._pushLocalServer(envelope);
  }

  // =========================================================================
  // PROVEEDOR 0 (POR DEFECTO): PFAS CLOUD DB (INTERNET 24/7 AUTOMÁTICO SIN LÍMITE DE TAMAÑO)
  // Combina Canal Cloud de Alta Capacidad (ntfy.sh JSON/File hasta 15 MB) + Índice Permanente (restful-api.dev)
  // =========================================================================
  _getNtfyCloudTopic(pin) {
    const cleanPin = (pin || DEFAULT_SYNC_PIN)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, "_");
    return `pfas_cloud_sync_v11_${cleanPin}`;
  }

  async _resolveCloudObjectIdForPin(pin) {
    const cleanPin = (pin || DEFAULT_SYNC_PIN).trim().replace(/[^a-zA-Z0-9_-]/g, "_").toUpperCase();
    if (cleanPin === DEFAULT_SYNC_PIN && this.config.cloudObjectId) {
      return this.config.cloudObjectId;
    }
    if (this.config.cloudObjectId) {
      return this.config.cloudObjectId;
    }
    try {
      const res = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${PIN_DIRECTORY_APP_KEY}/PFAS_PIN_${cleanPin}`);
      if (res.ok) {
        const text = (await res.text()).replace(/^"+|"+$/g, "").trim();
        if (text && text !== "null" && text.length > 10) {
          this.config.cloudObjectId = text;
          localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(this.config));
          return text;
        }
      }
    } catch (e) {
      // ignore
    }
    return null;
  }

  async _pullPFASCloud() {
    const topic = this._getNtfyCloudTopic(this.config.syncKey);

    // 1. Consultar canal principal de alta capacidad en Internet (ntfy.sh JSON / Attachment)
    try {
      const pollRes = await fetch(`https://ntfy.sh/${topic}/json?poll=1`, {
        method: "GET",
        cache: "no-store"
      });
      if (pollRes.ok) {
        const rawText = await pollRes.text();
        const lines = rawText.split(/\r?\n/).filter(l => l.trim().length > 0);
        for (let i = lines.length - 1; i >= 0; i--) {
          try {
            const evt = JSON.parse(lines[i]);
            if (evt.event !== "message") continue;
            if (evt.attachment && evt.attachment.url) {
              const attRes = await fetch(evt.attachment.url, { cache: "no-store" });
              if (attRes.ok) {
                const parsedAtt = await attRes.json();
                if (parsedAtt && parsedAtt.payload) return parsedAtt;
              }
            } else if (evt.message && evt.message.trim().startsWith("{")) {
              const parsedMsg = JSON.parse(evt.message);
              if (parsedMsg && parsedMsg.payload) return parsedMsg;
            }
          } catch (innerErr) {
            // continuar buscando el último snapshot válido
          }
        }
      }
    } catch (e) {
      // Fallback al índice secundario
    }

    // 2. Fallback al índice compacto permanente (api.restful-api.dev)
    try {
      const objectId = await this._resolveCloudObjectIdForPin(this.config.syncKey);
      if (objectId) {
        const res = await fetch(`https://api.restful-api.dev/objects/${objectId}`, {
          method: "GET",
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          const doc = await res.json();
          if (doc && doc.data && doc.data.payload) {
            return doc.data;
          }
        }
      }
    } catch (e) {
      // ignore
    }

    return null;
  }

  async _pushPFASCloud(envelope) {
    const topic = this._getNtfyCloudTopic(this.config.syncKey);
    const bodyStr = JSON.stringify(envelope);

    // 1. Subir snapshot completo (sin límite de tamaño: Post-its, subrayados, Baremo, 16 simulacros, fallos)
    const headers = {};
    if (bodyStr.length > 3500) {
      // Para backups grandes (>3.5 KB hasta 15 MB), ntfy.sh lo almacena automáticamente como archivo JSON adjunto
      headers["Filename"] = "pfas-cloud-backup.json";
    }

    const ntfyRes = await fetch(`https://ntfy.sh/${topic}`, {
      method: "POST",
      headers,
      body: bodyStr
    });

    if (!ntfyRes.ok) {
      throw new Error(`Error al sincronizar con PFAS Cloud DB (${ntfyRes.status})`);
    }

    // 2. Actualizar en segundo plano el índice compacto permanente (< 600 bytes para evitar límite de columna SQL)
    try {
      const objectId = await this._resolveCloudObjectIdForPin(this.config.syncKey);
      if (objectId) {
        const compactEnvelope = {
          updatedAt: envelope.updatedAt,
          syncKey: envelope.syncKey,
          payload: {
            stats: {
              xp: envelope.payload?.stats?.xp || 150,
              streakDays: envelope.payload?.stats?.streakDays || 1,
              totalAnswered: envelope.payload?.stats?.totalAnswered || 0,
              totalCorrect: envelope.payload?.stats?.totalCorrect || 0
            },
            readTopics: (envelope.payload?.readTopics || []).slice(0, 21)
          }
        };
        fetch(`https://api.restful-api.dev/objects/${objectId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `PFAS-CLOUD-DB-${this.config.syncKey || DEFAULT_SYNC_PIN}`,
            data: compactEnvelope
          })
        }).catch(() => {});
      }
    } catch (e) {
      // El canal principal ntfy.sh ya guardó el backup completo
    }

    return {
      ok: true,
      message: `Sincronizado en Base de Datos Cloud (PIN: ${this.config.syncKey})`
    };
  }

  // =========================================================================
  // PROVEEDOR 1: FIREBASE REALTIME DATABASE (REST API .json)
  // =========================================================================
  _getFirebaseEndpoint() {
    let base = (this.config.firebaseUrl || "").trim().replace(/\/+$/, "");
    if (!base) {
      throw new Error("Introduce la URL de tu Firebase Realtime Database.");
    }
    if (!base.startsWith("http")) base = "https://" + base;
    const safeKey = encodeURIComponent((this.config.syncKey || DEFAULT_SYNC_PIN).replace(/[.#$\[\]\/]/g, "_"));
    const authParam = this.config.firebaseSecret ? `?auth=${encodeURIComponent(this.config.firebaseSecret.trim())}` : "";
    return `${base}/permanencia_fas/${safeKey}.json${authParam}`;
  }

  async _pushFirebase(envelope) {
    const url = this._getFirebaseEndpoint();
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(envelope)
    });
    if (!res.ok) throw new Error(`Firebase HTTP ${res.status}`);
    return { ok: true, message: "Sincronizado en Firebase Realtime DB" };
  }

  async _pullFirebase() {
    const url = this._getFirebaseEndpoint();
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error(`Firebase HTTP ${res.status}`);
    return await res.json();
  }

  // =========================================================================
  // PROVEEDOR 2: GITHUB CLOUD VAULT (GIST PRIVADO)
  // =========================================================================
  async _pushGitHubGist(envelope) {
    const token = (this.config.githubToken || "").trim();
    if (!token) throw new Error("Introduce tu Token de GitHub con permiso 'gist'.");
    const fileName = `permanencia_fas_${(this.config.syncKey || "default").replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
    const headers = {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    };
    const bodyObj = {
      description: `Permanencia FAS Cloud Sync (${this.config.syncKey})`,
      public: false,
      files: { [fileName]: { content: JSON.stringify(envelope, null, 2) } }
    };
    let url = "https://api.github.com/gists";
    let method = "POST";
    if (this.config.gistId && this.config.gistId.trim()) {
      url = `https://api.github.com/gists/${this.config.gistId.trim()}`;
      method = "PATCH";
    }
    const res = await fetch(url, { method, headers, body: JSON.stringify(bodyObj) });
    if (!res.ok) throw new Error(`GitHub Gist API (${res.status})`);
    const data = await res.json();
    if (data && data.id && data.id !== this.config.gistId) {
      this.config.gistId = data.id;
      localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(this.config));
    }
    return { ok: true, message: `Sincronizado en GitHub Cloud (Gist: ${this.config.gistId})` };
  }

  async _pullGitHubGist() {
    const token = (this.config.githubToken || "").trim();
    const gistId = (this.config.gistId || "").trim();
    if (!gistId) throw new Error("Introduce el Gist ID o sube primero desde un dispositivo.");
    const headers = { "Accept": "application/vnd.github+json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`https://api.github.com/gists/${gistId}`, { method: "GET", headers });
    if (!res.ok) throw new Error(`GitHub Gist GET (${res.status})`);
    const data = await res.json();
    const files = data.files || {};
    const firstFile = Object.values(files)[0];
    if (!firstFile || !firstFile.content) throw new Error("Gist vacío.");
    return JSON.parse(firstFile.content);
  }

  // =========================================================================
  // PROVEEDOR 3: SUPABASE POSTGRESQL REST API
  // =========================================================================
  async _pushSupabase(envelope) {
    const base = (this.config.supabaseUrl || "").trim().replace(/\/+$/, "");
    const key = (this.config.supabaseKey || "").trim();
    if (!base || !key) throw new Error("Configura URL y API Key de Supabase.");
    const res = await fetch(`${base}/rest/v1/permanencia_sync?on_conflict=sync_key`, {
      method: "POST",
      headers: {
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        sync_key: this.config.syncKey || DEFAULT_SYNC_PIN,
        updated_at: envelope.updatedAt,
        payload: envelope
      })
    });
    if (!res.ok) throw new Error(`Supabase (${res.status})`);
    return { ok: true, message: "Sincronizado en Supabase Cloud" };
  }

  async _pullSupabase() {
    const base = (this.config.supabaseUrl || "").trim().replace(/\/+$/, "");
    const key = (this.config.supabaseKey || "").trim();
    if (!base || !key) throw new Error("Configura URL y API Key de Supabase.");
    const syncKey = encodeURIComponent(this.config.syncKey || DEFAULT_SYNC_PIN);
    const res = await fetch(`${base}/rest/v1/permanencia_sync?sync_key=eq.${syncKey}&select=payload,updated_at`, {
      method: "GET",
      headers: { "apikey": key, "Authorization": `Bearer ${key}` }
    });
    if (!res.ok) throw new Error(`Supabase GET (${res.status})`);
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) throw new Error("Sin datos en Supabase.");
    return rows[0].payload;
  }

  // =========================================================================
  // PROVEEDOR 4: SERVIDOR NODE LOCAL / RED WI-FI LAN (/api/cloud-sync)
  // =========================================================================
  async _pushLocalServer(envelope) {
    const res = await fetch(`/api/cloud-sync?key=${encodeURIComponent(this.config.syncKey || DEFAULT_SYNC_PIN)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(envelope)
    });
    if (!res.ok) throw new Error(`Servidor Local (${res.status})`);
    return { ok: true, message: "Sincronizado en Servidor Local (/api/cloud-sync)" };
  }

  async _pullLocalServer() {
    const res = await fetch(`/api/cloud-sync?key=${encodeURIComponent(this.config.syncKey || DEFAULT_SYNC_PIN)}`, {
      method: "GET"
    });
    if (!res.ok) throw new Error(`Servidor Local GET (${res.status})`);
    const data = await res.json();
    return data.record || null;
  }

  // =========================================================================
  // INDICADOR TÁCTICO EN CABECERA Y NOTIFICACIONES FLOTANTES (TOAST)
  // =========================================================================
  updateHeaderIndicator() {
    if (typeof document === "undefined") return;
    const badge = document.getElementById("header-cloud-badge");
    if (!badge) return;

    const pending = this.queue.pendingCount || 0;

    if (this.isDeviceOffline()) {
      badge.innerHTML = `<span>🪖</span><span>Maniobras Offline${pending > 0 ? ` (${pending})` : ""}</span>`;
      badge.className = "px-2.5 py-1.5 rounded-lg bg-amber-950/90 border border-amber-500 text-[10px] font-black text-amber-300 hover:bg-amber-900 transition flex items-center space-x-1 cursor-pointer animate-pulse";
      badge.title = `Modo Maniobras Activo (Sin Cobertura): ${pending} cambios guardados en cola esperando conexión`;
      return;
    }

    const styles = {
      idle: {
        icon: "☁️",
        text: pending > 0 ? `Cola (${pending})` : "Nube Activa",
        cls: "bg-slate-900/90 text-emerald-300 border-emerald-700/70"
      },
      syncing: {
        icon: "🔄",
        text: "Sincronizando...",
        cls: "bg-sky-950/90 text-sky-300 border-sky-500 animate-pulse"
      },
      synced: {
        icon: "🟢",
        text: "Nube OK",
        cls: "bg-emerald-950/90 text-emerald-300 border-emerald-500/70"
      },
      error: {
        icon: "⚠️",
        text: pending > 0 ? `Cola (${pending})` : "Reconectar",
        cls: "bg-amber-950/90 text-amber-300 border-amber-500/70"
      }
    };

    const st = styles[this.status] || styles.idle;
    badge.innerHTML = `<span>${st.icon}</span><span>${st.text}</span>`;
    badge.className = `px-2.5 py-1.5 rounded-lg border text-[10px] font-bold flex items-center space-x-1 cursor-pointer transition ${st.cls}`;
    badge.title = `${this.lastMessage} — Pulsa para abrir el Centro de Control de Nube y Modo Maniobras`;
  }

  showTacticalToast(message, color = "emerald") {
    if (typeof document === "undefined" || !document.body) return;
    let container = document.getElementById("tactical-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "tactical-toast-container";
      container.className = "fixed bottom-16 md:bottom-5 right-4 z-50 max-w-sm space-y-2 pointer-events-none";
      document.body.appendChild(container);
    }

    const colorMap = {
      emerald: "bg-emerald-950/95 border-emerald-500 text-emerald-200",
      amber: "bg-amber-950/95 border-amber-500 text-amber-200",
      sky: "bg-sky-950/95 border-sky-500 text-sky-200",
      red: "bg-red-950/95 border-red-500 text-red-200"
    };

    const toast = document.createElement("div");
    toast.className = `p-3.5 rounded-xl border-2 shadow-2xl text-xs font-bold transition-all duration-300 pointer-events-auto flex items-center justify-between gap-3 ${colorMap[color] || colorMap.emerald}`;
    toast.innerHTML = `
      <span>${message}</span>
      <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white font-black">✕</button>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast && toast.parentElement) toast.remove();
    }, 5500);
  }

  _refreshCloudPanelIfVisible() {
    if (typeof window !== "undefined" && window.appController && window.appController.currentTab === "importer") {
      window.appController.renderCloudSyncPanel();
    }
  }

  _refreshUIViews() {
    if (typeof window !== "undefined" && window.appController) {
      window.appController.updateHeaderStats();
      if (window.appController.currentTab === "dashboard") {
        window.appController.renderDashboard();
      } else if (window.appController.currentTab === "baremo") {
        window.appController.renderBaremoTab();
      } else if (window.appController.currentTab === "importer") {
        window.appController.renderCloudSyncPanel();
      }
    }
  }

  generateInstantTransferCode() {
    const backup = window.storageManager.exportFullBackup();
    const jsonStr = JSON.stringify(backup);
    return "PFAS9:" + btoa(unescape(encodeURIComponent(jsonStr)));
  }

  importInstantTransferCode(codeStr) {
    const clean = (codeStr || "").trim();
    if (!clean.startsWith("PFAS9:")) {
      throw new Error("El código debe comenzar por 'PFAS9:'");
    }
    const base64 = clean.slice(6);
    const jsonStr = decodeURIComponent(escape(atob(base64)));
    const parsed = JSON.parse(jsonStr);
    window.storageManager.importFullBackup(parsed);
    return true;
  }
}

window.cloudSyncManager = new CloudSyncManager();
