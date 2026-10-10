/**
 * GENERADOR DE ESQUEMAS VISUALES, ORGANIGRAMAS DE COLORES E INFOGRAFÍAS + CHULETAS TÁCTICAS PDF v4.0
 * Inspirado en los carteles de academia (Organigramas por Nivel Administrativo con flechas, subrayados fluorescentes y pósters comparativos tipo Art. 116 CE)
 * Cubre los 21 Temas Oficiales del BOD (Orden DEF/1341/2017 + Actualizaciones 2024/2025/2026)
 */

const TOPIC_COLOR_PALETTE = {
  "B1-T01": { accent: "#10b981", bg: "rgba(16, 185, 129, 0.10)", border: "rgba(16, 185, 129, 0.45)", titleColor: "#34d399", label: "Esmeralda Constitucional" },
  "B1-T02": { accent: "#14b8a6", bg: "rgba(20, 184, 166, 0.10)", border: "rgba(20, 184, 166, 0.45)", titleColor: "#2dd4bf", label: "Turquesa Defensa Nacional" },
  "B1-T03": { accent: "#22c55e", bg: "rgba(34, 197, 94, 0.10)", border: "rgba(34, 197, 94, 0.45)", titleColor: "#4ade80", label: "Verde Sector Público" },
  "B1-T04": { accent: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)", border: "rgba(6, 182, 212, 0.50)", titleColor: "#22d3ee", label: "Cian MINISDEF 2024" },
  "B1-T05": { accent: "#84cc16", bg: "rgba(132, 204, 22, 0.10)", border: "rgba(132, 204, 22, 0.45)", titleColor: "#a3e635", label: "Lima Operativo EMAD" },
  "B1-T06": { accent: "#10b981", bg: "rgba(16, 185, 129, 0.14)", border: "rgba(16, 185, 129, 0.55)", titleColor: "#6ee7b7", label: "Verde Tierra / Armada / Aire" },

  "B2-T01": { accent: "#f59e0b", bg: "rgba(245, 158, 11, 0.11)", border: "rgba(245, 158, 11, 0.48)", titleColor: "#fbbf24", label: "Ámbar Carrera Militar" },
  "B2-T02": { accent: "#eab308", bg: "rgba(234, 179, 8, 0.10)", border: "rgba(234, 179, 8, 0.45)", titleColor: "#facc15", label: "Oro Reales Ordenanzas" },
  "B2-T03": { accent: "#f97316", bg: "rgba(249, 115, 22, 0.11)", border: "rgba(249, 115, 22, 0.48)", titleColor: "#fb923c", label: "Naranja Derechos y COPERFAS" },
  "B2-T04": { accent: "#ef4444", bg: "rgba(239, 68, 68, 0.13)", border: "rgba(239, 68, 68, 0.55)", titleColor: "#f87171", label: "Rojo Régimen Disciplinario" },
  "B2-T05": { accent: "#fb923c", bg: "rgba(251, 146, 60, 0.10)", border: "rgba(251, 146, 60, 0.45)", titleColor: "#fdba74", label: "Coral Iniciativas y Quejas" },
  "B2-T06": { accent: "#ec4899", bg: "rgba(236, 72, 153, 0.10)", border: "rgba(236, 72, 153, 0.45)", titleColor: "#f472b6", label: "Magenta Igualdad LO 3/2007" },
  "B2-T07": { accent: "#a855f7", bg: "rgba(168, 85, 247, 0.10)", border: "rgba(168, 85, 247, 0.45)", titleColor: "#c084fc", label: "Violeta Protocolo UPA" },
  "B2-T08": { accent: "#f59e0b", bg: "rgba(245, 158, 11, 0.13)", border: "rgba(245, 158, 11, 0.55)", titleColor: "#fcd34d", label: "Ámbar Procedimiento LPACAP" },

  "B3-T01": { accent: "#38bdf8", bg: "rgba(56, 189, 248, 0.11)", border: "rgba(56, 189, 248, 0.48)", titleColor: "#7dd3fc", label: "Azul Seguridad Nacional" },
  "B3-T02": { accent: "#6366f1", bg: "rgba(99, 102, 241, 0.11)", border: "rgba(99, 102, 241, 0.48)", titleColor: "#818cf8", label: "Índigo Doctrina PDC-01" },
  "B3-T03": { accent: "#0ea5e9", bg: "rgba(14, 165, 233, 0.11)", border: "rgba(14, 165, 233, 0.48)", titleColor: "#38bdf8", label: "Celeste Naciones Unidas" },
  "B3-T04": { accent: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)", border: "rgba(59, 130, 246, 0.52)", titleColor: "#60a5fa", label: "Azul OTAN (32 Aliados)" },
  "B3-T05": { accent: "#06b6d4", bg: "rgba(6, 182, 212, 0.10)", border: "rgba(6, 182, 212, 0.45)", titleColor: "#22d3ee", label: "Turquesa OSCE" },
  "B3-T06": { accent: "#2563eb", bg: "rgba(37, 99, 235, 0.12)", border: "rgba(37, 99, 235, 0.50)", titleColor: "#93c5fd", label: "Azul Unión Europea" },
  "B3-T07": { accent: "#14b8a6", bg: "rgba(20, 184, 166, 0.12)", border: "rgba(20, 184, 166, 0.50)", titleColor: "#5eead4", label: "Verde-Azul Misiones Exterior" }
};

/**
 * ESQUEMAS VISUALES PERSONALIZADOS POR TEMA (21 TEMAS)
 * Cada esquema incluye:
 * - tipo: "organigrama" | "comparativo" | "mixto"
 * - subtituloPoster: Título de cartel de academia
 * - nodos / columnas visuales con colores de nivel administrativo, subrayados fluorescentes (<mark>) y flechas
 */
const VISUAL_SCHEMAS = {
  "B1-T01": {
    subtituloPoster: "INFOGRAFÍA CONSTITUCIONAL: CORONA, GOBIERNO Y ARTÍCULO 116 (ALARMA, EXCEPCIÓN Y SITIO)",
    leyenda: [
      { color: "#1e3a8a", texto: "Jefatura del Estado / Corona (Título II)" },
      { color: "#d97706", texto: "Estado de Alarma (Decreto Gobierno)" },
      { color: "#b45309", texto: "Estado de Excepción (Previa Autorización Congreso)" },
      { color: "#991b1b", texto: "Estado de Sitio (Mayoría Absoluta Congreso)" }
    ],
    htmlDiagrama: `
      <!-- Organigrama Superior de Poderes del Estado -->
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#0f172a; border-color:#f59e0b;">
          👑 <strong>EL REY — JEFE DEL ESTADO (Art. 56 y 62.h CE)</strong><br/>
          <span>Mando Supremo de las FAS • Símbolo de unidad y permanencia • <span class="hl-yellow">Refrendo: Presidente Gobierno / Ministros</span> (<span class="hl-pink">Excepción Art. 99: Presidente del Congreso</span> | <span class="hl-green">Sin refrendo Art. 65.2: Casa del Rey</span>)</span>
        </div>
        <div class="schema-arrow-down">⬇ ━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ⬇</div>
        <div class="schema-grid-3">
          <div class="schema-branch-card" style="border-top:5px solid #2563eb;">
            <div class="schema-branch-header" style="background:#1e3a8a;">🏛️ CORTES GENERALES (Tít. III)</div>
            <ul class="schema-list">
              <li><strong>Congreso (350 dip.) + Senado</strong></li>
              <li>Mandato: <span class="hl-yellow">4 AÑOS</span></li>
              <li><strong>Defensor del Pueblo (Art. 54):</strong> Comisionado de las Cortes (<span class="hl-green">Mandato 5 años</span>)</li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #059669;">
            <div class="schema-branch-header" style="background:#065f46;">⚙️ EL GOBIERNO (Tít. IV - Art. 97)</div>
            <ul class="schema-list">
              <li>Dirige política interior/exterior, Admón. civil y militar y <strong>Defensa del Estado</strong>.</li>
              <li><strong>Art. 8.1 CE (Tít. Preliminar):</strong> FAS = <span class="hl-yellow">Soberanía + Integridad + Ordenamiento Constitucional</span>.</li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #7c3aed;">
            <div class="schema-branch-header" style="background:#5b21b6;">⚖️ TRIBUNAL CONSTITUCIONAL (Tít. IX)</div>
            <ul class="schema-list">
              <li><strong>12 Miembros</strong> nombrados por el Rey:</li>
              <li><span class="hl-cyan">4 Congreso (3/5) + 4 Senado (3/5) + 2 Gobierno + 2 CGPJ</span></li>
              <li>Mandato: <span class="hl-yellow">9 AÑOS</span> (renovación por 1/3 cada 3 años).</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Póster Comparativo Estilo Academia: ARTÍCULO 116 CE -->
      <div class="schema-poster-title">🚨 PÓSTER DE EXAMEN: ARTÍCULO 116 CE — ESTADOS DE ALARMA, EXCEPCIÓN Y SITIO</div>
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#f59e0b; background:rgba(245,158,11,0.07);">
          <div class="schema-poster-badge" style="background:#d97706;">🚨 ESTADO DE ALARMA</div>
          <div class="schema-big-calendar">📅 MÁX. 15 DÍAS</div>
          <div class="schema-step"><strong>🏛️ DECLARA:</strong> <span class="hl-yellow">El Gobierno</span> mediante Decreto en Consejo de Ministros.</div>
          <div class="schema-step"><strong>📢 CONTROL:</strong> Da cuenta al Congreso (reunido inmediatamente).</div>
          <div class="schema-step"><strong>➕ PRÓRROGA:</strong> Solo con <span class="hl-pink">autorización expresa del Congreso</span>.</div>
          <div class="schema-step"><strong>🗺️ ÁMBITO:</strong> Lo fija el propio Decreto.</div>
        </div>

        <div class="schema-poster-col" style="border-color:#ea580c; background:rgba(234,88,12,0.07);">
          <div class="schema-poster-badge" style="background:#c2410c;">⚠️ ESTADO DE EXCEPCIÓN</div>
          <div class="schema-big-calendar">📅 30 DÍAS (+30 PRÓRROGA)</div>
          <div class="schema-step"><strong>🏛️ DECLARA:</strong> <span class="hl-yellow">El Gobierno</span> mediante Decreto en Consejo de Ministros.</div>
          <div class="schema-step"><strong>✅ REQUISITO PREVIO:</strong> <span class="hl-green">PREVIA autorización del Congreso</span> de los Diputados.</div>
          <div class="schema-step"><strong>➕ PRÓRROGA:</strong> Otros <strong>30 días máximo</strong> con mismos requisitos.</div>
          <div class="schema-step"><strong>🗺️ DETERMINA:</strong> Efectos, ámbito territorial y duración.</div>
        </div>

        <div class="schema-poster-col" style="border-color:#dc2626; background:rgba(220,38,38,0.08);">
          <div class="schema-poster-badge" style="background:#991b1b;">🪖 ESTADO DE SITIO</div>
          <div class="schema-big-calendar">🗳️ MAYORÍA ABSOLUTA (176)</div>
          <div class="schema-step"><strong>🏛️ DECLARA:</strong> El <span class="hl-pink">CONGRESO DE LOS DIPUTADOS</span> por Mayoría Absoluta.</div>
          <div class="schema-step"><strong>📩 PROPUESTA:</strong> A propuesta <strong>exclusiva del Gobierno</strong>.</div>
          <div class="schema-step"><strong>⏳ PLAZO:</strong> No tiene tope fijo en el art. 116; <span class="hl-yellow">el Congreso fija su duración</span>, ámbito y condiciones.</div>
        </div>
      </div>
    `
  },

  "B1-T02": {
    subtituloPoster: "ORGANIGRAMA DE LA DEFENSA NACIONAL (LO 5/2005) Y PLAZOS DE LAS CORTES GENERALES",
    leyenda: [
      { color: "#1e3a8a", texto: "Mando Supremo y Dirección Política (Rey / Presidente)" },
      { color: "#065f46", texto: "Estructura Operativa (Empleo de la Fuerza - JEMAD)" },
      { color: "#92400e", texto: "Estructura Orgánica (Preparación de la Fuerza - JEME/AJEMA/JEMA)" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#1e3a8a; border-color:#60a5fa;">
          👑 <strong>REY (Mando Supremo FAS - Art. 62.h CE)</strong> ➔ 🏛️ <strong>PRESIDENTE DEL GOBIERNO (Art. 6 LO 5/2005)</strong><br/>
          <span>El Presidente <span class="hl-yellow">dirige la política de defensa</span>, gestiona las crisis y <span class="hl-green">ORDENA las misiones de las FAS</span></span>
        </div>
        <div class="schema-arrow-down">⬇ Asistido por el <strong>Consejo de Defensa Nacional</strong> (Pleno / Ejecutivo) y controlado por el <span class="hl-pink">CONGRESO (Autoriza misiones exterior - Art. 17)</span> ⬇</div>
        <div class="schema-root-node" style="background:#064e3b; border-color:#34d399; margin-top:6px;">
          🎖️ <strong>MINISTRO/A DE DEFENSA (Art. 7 LO 5/2005)</strong><br/>
          <span>Dirige el desarrollo y la ejecución de la política de defensa y la Administración militar</span>
        </div>
        <div class="schema-arrow-down">⬇ ━━━━━━━━━━━━━┳━━━━━━━━━━━━━┓ (Art. 11 LO 5/2005: Doble Estructura de las FAS)</div>
        <div class="schema-grid-2">
          <div class="schema-branch-card" style="border-top:5px solid #10b981;">
            <div class="schema-branch-header" style="background:#065f46;">⚔️ ESTRUCTURA OPERATIVA (EMPLEO DE LA FUERZA)</div>
            <div class="schema-big-calendar" style="font-size:13px;">MANDO: JEMAD (Cuartel General EMAD)</div>
            <ul class="schema-list">
              <li><strong>Misión:</strong> Conducción estratégica y empleo de las FAS en operaciones nacionales y multinacionales.</li>
              <li><strong>Órgano ejecutor:</strong> <span class="hl-green">Mando de Operaciones (MOPS - Retamares)</span> al mando del CMOPS.</li>
              <li><strong>Fuerzas transferidas:</strong> De los Ejércitos a la cadena operativa.</li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #f59e0b;">
            <div class="schema-branch-header" style="background:#92400e;">🏗️ ESTRUCTURA ORGÁNICA (PREPARACIÓN DE LA FUERZA)</div>
            <div class="schema-big-calendar" style="font-size:13px;">MANDO: JEME (ET) • AJEMA (Armada) • JEMA (EA)</div>
            <ul class="schema-list">
              <li><strong>Misión:</strong> <span class="hl-yellow">Generación de capacidades</span>, adiestramiento, logística, personal y moral.</li>
              <li>Aporta las unidades específicas a la Estructura Operativa cuando lo requiere el JEMAD.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="schema-poster-title">⏱️ PLAZOS CONSTITUCIONALES CLAVE DE LAS CORTES GENERALES (TÍTULO III CE)</div>
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#38bdf8;">
          <div class="schema-poster-badge" style="background:#0284c7;">🗳️ ELECCIONES (Art. 68.6 CE)</div>
          <div class="schema-big-calendar">30 a 60 DÍAS</div>
          <div class="schema-step">Tras fin del mandato de <strong>4 años</strong>.</div>
          <div class="schema-step">🔥 <strong>Convocatoria Congreso electo:</strong> Dentro de los <span class="hl-yellow">25 DÍAS siguientes</span> a las elecciones.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#a855f7;">
          <div class="schema-poster-badge" style="background:#7e22ce;">📜 VETO / ENMIENDAS SENADO (Art. 90)</div>
          <div class="schema-big-calendar">2 MESES / 20 DÍAS</div>
          <div class="schema-step">Plazo ordinario: <span class="hl-green">2 MESES</span> desde recepción.</div>
          <div class="schema-step">🔥 Proyectos <strong>URGENTES</strong>: Se reduce a <span class="hl-pink">20 DÍAS NATURALES</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#b45309;">⚡ DECRETO-LEY Y MOCIÓN CENSURA</div>
          <div class="schema-big-calendar">30 DÍAS / 5 DÍAS</div>
          <div class="schema-step"><strong>Decreto-Ley (Art. 86):</strong> Convalidación Congreso en <span class="hl-yellow">30 DÍAS</span>.</div>
          <div class="schema-step"><strong>Moción Censura (Art. 113):</strong> Propuesta por <strong>1/10 (35 dip.)</strong>, votación tras <span class="hl-cyan">5 DÍAS</span>.</div>
        </div>
      </div>
    `
  },

  "B1-T03": {
    subtituloPoster: "JERARQUÍA MINISTERIAL Y COMPETENCIAS EN LA LEY 40/2015 (LRJSP)",
    leyenda: [
      { color: "#dc2626", texto: "Órganos Superiores (Ministro y Secretario de Estado)" },
      { color: "#059669", texto: "Órganos Directivos Rango Subsecretario" },
      { color: "#d97706", texto: "Órganos Directivos Rango Director General" },
      { color: "#6366f1", texto: "Órganos Directivos Nivel Subdirector General" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-poster-title" style="margin-top:0;">🏛️ ESCALAFÓN JERÁRQUICO DE UN MINISTERIO (ART. 55 LEY 40/2015)</div>
        <div class="schema-grid-2">
          <div class="schema-branch-card" style="border-top:5px solid #ef4444;">
            <div class="schema-branch-header" style="background:#991b1b;">🔴 1. ÓRGANOS SUPERIORES (Art. 55.2.a)</div>
            <ul class="schema-list">
              <li><strong>1º MINISTROS:</strong> Jefes superiores del Departamento.</li>
              <li><strong>2º SECRETARIOS DE ESTADO:</strong> Directamente responsables de la acción del Gobierno en un sector de actividad específica.</li>
              <li><span class="hl-pink">⚠️ ¡TRAMPA!: Los Secretarios Generales NO son órganos superiores.</span></li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #10b981;">
            <div class="schema-branch-header" style="background:#065f46;">🟢 2. ÓRGANOS DIRECTIVOS (Art. 55.2.b y 55.3)</div>
            <ul class="schema-list">
              <li><strong>Rango SUBSECRETARIO:</strong> <span class="hl-green">Subsecretarios</span>, <span class="hl-green">Secretarios Generales</span> y <span class="hl-yellow">Delegados del Gobierno en las CC.AA.</span></li>
              <li><strong>Rango DIRECTOR GENERAL:</strong> <span class="hl-cyan">Directores Generales</span> y <span class="hl-cyan">Secretarios Generales Técnicos (SGT)</span>.</li>
              <li><strong>Nivel SUBDIRECTOR GENERAL:</strong> Subdirectores Generales y <span class="hl-yellow">Subdelegados del Gobierno en las provincias</span>.</li>
            </ul>
          </div>
        </div>

        <div class="schema-poster-title">⚖️ TABLA VISUAL DE COMPETENCIAS (ARTS. 8 A 14 LEY 40/2015)</div>
        <div class="schema-grid-3">
          <div class="schema-poster-col" style="border-color:#10b981;">
            <div class="schema-poster-badge" style="background:#059669;">📤 DELEGACIÓN COMPETENCIAS (Art. 9)</div>
            <div class="schema-big-calendar">📢 SÍ BOE</div>
            <div class="schema-step">• Se publica <strong>obligatoriamente en el BOE</strong>.</div>
            <div class="schema-step">• Las resoluciones se consideran dictadas por el <span class="hl-green">órgano delegante</span>.</div>
            <div class="schema-step">• 🚫 <strong>Prohibido subdelegar</strong> (salvo ley expresa).</div>
          </div>
          <div class="schema-poster-col" style="border-color:#f59e0b;">
            <div class="schema-poster-badge" style="background:#d97706;">📥 AVOCACIÓN (Art. 10)</div>
            <div class="schema-big-calendar">🚫 SIN RECURSO</div>
            <div class="schema-step">• El órgano superior atrae para sí un asunto concreto.</div>
            <div class="schema-step">• Acuerdo motivado notificado a los interesados, <span class="hl-yellow">NO se publica en BOE</span>.</div>
            <div class="schema-step">• <span class="hl-pink">Contra la avocación NO cabe recurso</span> independiente.</div>
          </div>
          <div class="schema-poster-col" style="border-color:#38bdf8;">
            <div class="schema-poster-badge" style="background:#0284c7;">✍️ DELEGACIÓN DE FIRMA (Art. 12)</div>
            <div class="schema-big-calendar">📄 NO BOE</div>
            <div class="schema-step">• No altera la competencia del órgano delegante.</div>
            <div class="schema-step">• <span class="hl-cyan">NO es necesaria su publicación en el BOE</span>.</div>
            <div class="schema-step">• Creación órganos (Art. 59): Hasta Subdir. Gral = <strong>Real Decreto</strong>; inferiores = <strong>Orden Ministerial</strong>.</div>
          </div>
        </div>
      </div>
    `
  },

  "B1-T04": {
    subtituloPoster: "ORGANIGRAMA OFICIAL DEL MINISTERIO DE DEFENSA (RD 205/2024 Y RD 268/2025)",
    leyenda: [
      { color: "#c2410c", texto: "Órgano Superior: Persona Titular del Ministerio" },
      { color: "#1d4ed8", texto: "EMAD / Secretaría de Estado de Defensa (SEDEF)" },
      { color: "#15803d", texto: "Subsecretaría de Defensa (SUBDEF)" },
      { color: "#0e7490", texto: "Secretaría General de Política de Defensa (SEGENPOL)" },
      { color: "#ca8a04", texto: "Direcciones Generales y Novedad DIGEID 2024" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#9a3412; border-color:#fb923c;">
          🎖️ <strong>MINISTRO/A DE DEFENSA (Órgano Superior — RD 205/2024)</strong><br/>
          <span>Dependen directamente: <span class="hl-yellow">CNI</span> • <strong>DIRCOMDEF</strong> (Subdir. Gral.) • Gabinete y Gabinete Técnico • Consejos Superiores (ET, Armada, EA) • <span class="hl-green">UME</span></span>
        </div>
        <div class="schema-arrow-down">⬇ ━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┓ ⬇</div>
        <div class="schema-grid-4">
          <!-- Columna 1: FAS / EMAD -->
          <div class="schema-branch-card" style="border-top:5px solid #3b82f6;">
            <div class="schema-branch-header" style="background:#1e40af;">⚔️ FUERZAS ARMADAS / EMAD</div>
            <ul class="schema-list">
              <li><strong>JEMAD</strong> (Rango Secretario de Estado)</li>
              <li>• <strong>Ejército de Tierra (JEME)</strong></li>
              <li>• <strong>Armada (AJEMA)</strong></li>
              <li>• <strong>Ejército del Aire y del Espacio (JEMA)</strong></li>
              <li>• EMACON, MOPS, CIFAS, MCCE y <span class="hl-cyan">CESEDEN</span>.</li>
            </ul>
          </div>

          <!-- Columna 2: SEDEF -->
          <div class="schema-branch-card" style="border-top:5px solid #f59e0b;">
            <div class="schema-branch-header" style="background:#b45309;">🏗️ SEDEF (Secretaría de Estado)</div>
            <ul class="schema-list">
              <li>1. <strong>DGAM</strong> (Armamento y Material)</li>
              <li>2. <span class="hl-yellow">🔥 DIGEID (Estrategia e Innovación Industria Defensa - ¡NUEVA 2024!)</span></li>
              <li>3. <strong>DIGENECO</strong> (Asuntos Económicos)</li>
              <li>4. <strong>DIGENIN</strong> (Infraestructura)</li>
              <li>5. <span class="hl-green">CESTIC</span> (Rango D. General)</li>
              <li>📌 <strong>Adscrito:</strong> <span class="hl-cyan">INTA</span> e ISDEFE.</li>
            </ul>
          </div>

          <!-- Columna 3: SUBDEF -->
          <div class="schema-branch-card" style="border-top:5px solid #10b981;">
            <div class="schema-branch-header" style="background:#065f46;">📋 SUBDEF (Subsecretaría)</div>
            <ul class="schema-list">
              <li>1. <strong>SEGENTE</strong> (Secr. Gral. Técnica)</li>
              <li>2. <strong>DIGENPER</strong> (Personal)</li>
              <li>3. <span class="hl-green">DIGEREM</span> (Reclutamiento y Enseñanza — <span class="hl-yellow">Academia Central Defensa</span>)</li>
              <li>4. <strong>Asesoría Jurídica General</strong></li>
              <li>5. <strong>Intervención General (IGD)</strong></li>
              <li>6. <strong>IGESAN</strong> (Sanidad)</li>
              <li>📌 <strong>Adscritos:</strong> <span class="hl-pink">ISFAS e INVIED</span>, COPERFAS y Observatorio Igualdad.</li>
            </ul>
          </div>

          <!-- Columna 4: SEGENPOL -->
          <div class="schema-branch-card" style="border-top:5px solid #06b6d4;">
            <div class="schema-branch-header" style="background:#0e7490;">🌍 SEGENPOL (Rango Subsecretario)</div>
            <ul class="schema-list">
              <li>1. <strong>DIGENPOL</strong> (D. G. de Política de Defensa)</li>
              <li>2. <strong>DICOES</strong> (División de Coordinación y Estudios de Seguridad y Defensa)</li>
              <li>3. <span class="hl-cyan">Agregadurías de Defensa</span> y Consejerías en el exterior</li>
              <li>📌 <strong>Adscrita:</strong> Comisión Española de Historia Militar (CEHISMI).</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  "B1-T05": {
    subtituloPoster: "ORGANIGRAMA DEL ESTADO MAYOR DE LA DEFENSA — EMAD (RD 521/2020 Y ORDEN DEF/710/2020)",
    leyenda: [
      { color: "#1e3a8a", texto: "JEMAD (Mando Estratégico de las Operaciones)" },
      { color: "#065f46", texto: "MOPS (Mando Operacional - Retamares)" },
      { color: "#7e22ce", texto: "Ciberespacio (MCCE) e Inteligencia (CIFAS)" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#1e3a8a; border-color:#60a5fa;">
          ⭐⭐⭐⭐ <strong>JEMAD — JEFE DE ESTADO MAYOR DE LA DEFENSA</strong><br/>
          <span>General de Ejército / Almirante General / General del Aire • <span class="hl-yellow">Mando Estratégico de la Estructura Operativa</span></span>
        </div>
        <div class="schema-arrow-down">⬇ ━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┓ ⬇</div>
        <div class="schema-grid-4">
          <div class="schema-branch-card" style="border-top:5px solid #38bdf8;">
            <div class="schema-branch-header" style="background:#0369a1;">🏛️ CUARTEL GENERAL EMAD</div>
            <ul class="schema-list">
              <li>• <span class="hl-yellow">EMACON</span> (Estado Mayor Conjunto - <strong>JEMACON</strong>)</li>
              <li>• Jefatura de Recursos Humanos (JRRHH)</li>
              <li>• Jefatura de Asuntos Económicos</li>
              <li>• Órganos de asistencia y asesoramiento</li>
            </ul>
          </div>

          <div class="schema-branch-card" style="border-top:5px solid #10b981;">
            <div class="schema-branch-header" style="background:#047857;">🎯 MANDO DE OPERACIONES (MOPS)</div>
            <ul class="schema-list">
              <li>📍 Sede: <strong>Retamares (Madrid)</strong></li>
              <li>👤 Mando: <strong>CMOPS</strong> (Nivel Operacional)</li>
              <li>🔥 <span class="hl-pink">Incluye dentro del MOPS: el MCOE (Mando Conjunto de Operaciones Especiales)</span>.</li>
            </ul>
          </div>

          <div class="schema-branch-card" style="border-top:5px solid #a855f7;">
            <div class="schema-branch-header" style="background:#6d28d9;">🌐 MCCE y 🕵️ CIFAS</div>
            <ul class="schema-list">
              <li>• <strong>MCCE (Mando Conjunto del Ciberespacio):</strong> Libertad de acción en el dominio ciberespacial (<strong>JEMCCE</strong>).</li>
              <li>• <strong>CIFAS (Centro de Inteligencia de las FAS):</strong> Inteligencia militar conjunta (<strong>JECIFAS</strong>).</li>
            </ul>
          </div>

          <div class="schema-branch-card" style="border-top:5px solid #f59e0b;">
            <div class="schema-branch-header" style="background:#b45309;">🎓 CESEDEN Y OO.II.</div>
            <ul class="schema-list">
              <li>• <strong>CESEDEN:</strong> Altos estudios de la defensa nacional.</li>
              <li>• <span class="hl-cyan">Vinculado funcionalmente</span> a SEGENPOL y DIGEREM.</li>
              <li>• Representaciones Militares ante OTAN y UE.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  "B1-T06": {
    subtituloPoster: "ORGANIGRAMA DEL EJÉRCITO DE TIERRA (INST. 14/2021), ARMADA (INST. 15/2021) Y AIRE Y ESPACIO (INST. 6/2025)",
    leyenda: [
      { color: "#065f46", texto: "Ejército de Tierra: La Fuerza (FUTER vs MCANA vs CGTAD)" },
      { color: "#92400e", texto: "Ejército de Tierra: Apoyo a la Fuerza (MAPER, MALE, MADOC, IGE)" },
      { color: "#1e3a8a", texto: "Armada (La Flota) y Ejército del Aire y del Espacio (Instrucción 6/2025)" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#064e3b; border-color:#10b981;">
          🦁 <strong>EJÉRCITO DE TIERRA — JEME (Instrucción 14/2021)</strong><br/>
          <span>Articulado en 3 escalones: <strong>1. Cuartel General (CGET - Madrid)</strong> • <strong>2. La Fuerza</strong> • <strong>3. Apoyo a la Fuerza</strong></span>
        </div>
        <div class="schema-arrow-down">⬇ LA FUERZA DEL EJÉRCITO DE TIERRA (¡Cuidado con el cruce FUTER vs MCANA!) ⬇</div>
        <div class="schema-grid-3">
          <div class="schema-branch-card" style="border-top:5px solid #10b981;">
            <div class="schema-branch-header" style="background:#065f46;">⚔️ FUERZA TERRESTRE (FUTER - Sevilla)</div>
            <ul class="schema-list">
              <li>1. <strong>División 'San Marcial' (Burgos):</strong> <span class="hl-green">BRIPAC VI, MOE (Alicante), MTM (Pamplona) y FAMET</span>.</li>
              <li>2. <strong>División 'Castillejos' (Huesca):</strong> Brigadas Polivalentes I, II Legión, VII BRILAT, X, XI y XII.</li>
              <li>3. <strong>Mando Apoyo a la Maniobra (MAM - A Coruña):</strong> MACA, MAAA, MING, MATRANS, BRILOG, BRISAN.</li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #ef4444;">
            <div class="schema-branch-header" style="background:#991b1b;">🏝️ MANDO DE CANARIAS (MCANA - Tenerife)</div>
            <ul class="schema-list">
              <li>🔥 <span class="hl-yellow">¡PREGUNTA TRAMPA ESTRELLA!</span></li>
              <li>Encuadra:</li>
              <li>• <strong>Brigada 'Canarias' XVI</strong></li>
              <li>• <span class="hl-pink">Comandancia General de CEUTA (COMGECEU)</span></li>
              <li>• <span class="hl-pink">Comandancia General de MELILLA (COMGEMEL)</span></li>
              <li>• <span class="hl-pink">Comandancia General de BALEARES (COMGEBAL)</span></li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #f59e0b;">
            <div class="schema-branch-header" style="background:#92400e;">⚡ CGTAD Y APOYO A LA FUERZA ET</div>
            <ul class="schema-list">
              <li>• <strong>CGTAD (Bétera, Valencia):</strong> HQ NRDC-ESP + Reg. Inteligencia nº 1 y Policía Militar nº 1.</li>
              <li>🛠️ <strong>APOYO A LA FUERZA ET:</strong></li>
              <li>• <strong>MAPER (Madrid):</strong> DIPER, DIAPER, DISAN.</li>
              <li>• <strong>MALE (Madrid):</strong> DIAD, DINFULOG.</li>
              <li>• <strong>MADOC (Granada):</strong> DIDOM, DIENADE.</li>
              <li>• <strong>IGE (Barcelona):</strong> DIACU, DINFA.</li>
            </ul>
          </div>
        </div>

        <div class="schema-grid-2" style="margin-top:12px;">
          <div class="schema-branch-card" style="border-top:5px solid #2563eb;">
            <div class="schema-branch-header" style="background:#1e3a8a;">⚓ ARMADA (Instrucción 15/2021)</div>
            <ul class="schema-list">
              <li>• <strong>La Fuerza = LA FLOTA (ALFLOT - Base Naval de Rota):</strong> Fuerza de Acción Naval (ALNAV), Fuerza de Acción Marítima (ALMART - Cartagena), Fuerza de Infantería de Marina (COMGEIM) y FLOAN.</li>
              <li>• <strong>Apoyo a la Fuerza:</strong> <span class="hl-cyan">JEPER, JAL y DAE</span>.</li>
            </ul>
          </div>
          <div class="schema-branch-card" style="border-top:5px solid #0284c7;">
            <div class="schema-branch-header" style="background:#0369a1;">✈️ EJÉRCITO DEL AIRE Y DEL ESPACIO (Instrucción 6/2025)</div>
            <ul class="schema-list">
              <li>• <strong>La Fuerza:</strong> <span class="hl-yellow">MACOM (Combate), MAGEN (General), MACAN (Canarias) y MESPA (Mando del Espacio)</span>.</li>
              <li>• <strong>Apoyo a la Fuerza:</strong> <span class="hl-green">MAPER, MALOG y DAE</span>.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  "B2-T01": {
    subtituloPoster: "ESQUEMA DE COMPROMISOS (LEY 8/2006), ASCENSOS Y 6 SITUACIONES ADMINISTRATIVAS (LEY 39/2007)",
    leyenda: [
      { color: "#d97706", texto: "Trayectoria de Tropa y Marinería (Ley 8/2006)" },
      { color: "#059669", texto: "Situaciones Administrativas (Art. 107 Ley 39/2007)" },
      { color: "#dc2626", texto: "Alerta Caza-Trampas Suspensión de Empleo" }
    ],
    htmlDiagrama: `
      <!-- Línea temporal con flechas de la Carrera de Tropa -->
      <div class="schema-poster-title" style="margin-top:0;">📈 LÍNEA TEMPORAL DE TROPA Y MARINERÍA (LEY 8/2006)</div>
      <div class="schema-grid-4">
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">1º COMPROMISO INICIAL</div>
          <div class="schema-big-calendar">HASTA 6 AÑOS</div>
          <div class="schema-step">Suscrito por 2 o 3 años, renovable hasta un máximo de <span class="hl-green">6 años de servicios</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#38bdf8;">
          <div class="schema-poster-badge" style="background:#0284c7;">2º LARGA DURACIÓN (CLD)</div>
          <div class="schema-big-calendar">HASTA 45 AÑOS EDAD</div>
          <div class="schema-step">Requiere <strong>&gt;5 años de servicio</strong> (al menos 3 en inicial). Reserva plazas: <span class="hl-cyan">80% Suboficiales, 40% GC, 20% PN</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#d97706;">3º PERMANENCIA (CARRERA)</div>
          <div class="schema-big-calendar">🎖️ MILITAR CARRERA</div>
          <div class="schema-step">Tener <strong>CLD en vigor</strong> + Título Técnico/equiv. + años servicio (según BOD) + Concurso-Oposición.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#a855f7;">
          <div class="schema-poster-badge" style="background:#7e22ce;">4º R.E.D. (RESERVISTA)</div>
          <div class="schema-big-calendar">45 A 65 AÑOS</div>
          <div class="schema-step">Al cumplir <strong>45 años de edad</strong> acreditando al menos <span class="hl-yellow">18 AÑOS de servicio</span>.</div>
        </div>
      </div>

      <div class="schema-poster-title">⚖️ LAS 6 SITUACIONES ADMINISTRATIVAS (ART. 107 LEY 39/2007) Y SISTEMAS DE ASCENSO</div>
      <div class="schema-grid-2">
        <div class="schema-branch-card" style="border-top:5px solid #f59e0b;">
          <div class="schema-branch-header" style="background:#92400e;">📋 LAS 6 SITUACIONES ADMINISTRATIVAS (Art. 107)</div>
          <ul class="schema-list">
            <li>1. <strong>Servicio activo</strong> | 2. <strong>Servicios especiales</strong> | 3. <strong>Excedencia</strong> (mín. 2 años en interés particular) | 4. <strong>Suspensión de funciones</strong> (máx. 6 meses en exp. disciplinario) | 5. <strong>Suspensión de empleo</strong> | 6. <strong>Reserva</strong>.</li>
            <li>🔥 <span class="hl-pink">¡SÚPER TRAMPA ART. 112!:</span> La sanción disciplinaria de suspensión de empleo solo cambia la situación administrativa si es <strong>SUPERIOR A 6 MESES</strong>. Si es de <span class="hl-yellow">6 meses o menos, sigue en SERVICIO ACTIVO</span>.</li>
          </ul>
        </div>
        <div class="schema-branch-card" style="border-top:5px solid #10b981;">
          <div class="schema-branch-header" style="background:#065f46;">🎖️ LOS 4 SISTEMAS DE ASCENSO (Art. 88)</div>
          <ul class="schema-list">
            <li>• <strong>Elección:</strong> <span class="hl-green">Cabo Mayor</span>, Suboficial Mayor y Generales.</li>
            <li>• <strong>Clasificación:</strong> Subteniente, Brigada, Coronel, Tcol., Comandante.</li>
            <li>• <strong>Concurso / Concurso-Oposición:</strong> <span class="hl-yellow">Cabo y Cabo Primero</span>.</li>
            <li>• <strong>Antigüedad:</strong> Sargento Primero y Capitán.</li>
          </ul>
        </div>
      </div>
    `
  },

  "B2-T02": {
    subtituloPoster: "ESQUEMA DE LAS REALES ORDENANZAS PARA LAS FAS (RD 96/2009 — 129 ARTÍCULOS)",
    leyenda: [
      { color: "#ca8a04", texto: "Estructura de las RROO (Título Preliminar + 5 Títulos)" },
      { color: "#dc2626", texto: "Límite de la Obediencia Debida (Art. 48 RROO)" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#78350f; border-color:#fbbf24;">
          📜 <strong>REALES ORDENANZAS PARA LAS FUERZAS ARMADAS (RD 96/2009, de 6 de febrero)</strong><br/>
          <span>Código de conducta ética • <strong>129 Artículos</strong> (Tít. Preliminar + 5 Títulos) • Aplicable a la <span class="hl-yellow">Guardia Civil en misiones militares (Art. 2.2)</span></span>
        </div>
        <div class="schema-arrow-down">⬇ ESTRUCTURA Y PRECEPTOS MÁS PREGUNTADOS EN EXAMEN ⬇</div>
        <div class="schema-grid-3">
          <div class="schema-poster-col" style="border-color:#eab308;">
            <div class="schema-poster-badge" style="background:#a16207;">🛡️ DISCIPLINA Y PRIMER DEBER</div>
            <div class="schema-step">• <strong>Art. 8 (Disciplina):</strong> Factor de cohesión que obliga a <span class="hl-yellow">mandar con responsabilidad y obedecer lo mandado</span>.</div>
            <div class="schema-step">• <strong>Art. 14:</strong> Disposición permanente para defender a España incluso con la entrega de la vida.</div>
          </div>
          <div class="schema-poster-col" style="border-color:#ef4444;">
            <div class="schema-poster-badge" style="background:#991b1b;">🚫 ÓRDENES DELICTIVAS (Art. 48)</div>
            <div class="schema-big-calendar" style="font-size:13px;">¡NUNCA OBEDECER DELITOS!</div>
            <div class="schema-step">Si la orden entraña la ejecución de <span class="hl-pink">actos constitutivos de delito</span> (contra la CE o personas/bienes protegidos), <strong>en ningún caso estará obligado a obedecerla</strong> y asumirá la responsabilidad.</div>
          </div>
          <div class="schema-poster-col" style="border-color:#10b981;">
            <div class="schema-poster-badge" style="background:#065f46;">⚔️ ACCIÓN DE MANDO Y OPERACIONES</div>
            <div class="schema-step">• <strong>Art. 54:</strong> El mando se hará querer y respetar; no disimulará jamás las faltas de subordinación.</div>
            <div class="schema-step">• <strong>Uso legítimo de la fuerza (Art. 84):</strong> Principios de <span class="hl-green">congruencia, oportunidad y proporcionalidad</span>.</div>
          </div>
        </div>
      </div>
    `
  },

  "B2-T03": {
    subtituloPoster: "DERECHOS Y DEBERES (LO 9/2011): LÍMITES, COPERFAS Y OBSERVATORIO DE LA VIDA MILITAR",
    leyenda: [
      { color: "#991b1b", texto: "Derechos Prohibidos / Restringidos al Militar" },
      { color: "#065f46", texto: "Consejo de Personal (COPERFAS - Porcentajes Art. 48)" },
      { color: "#1e3a8a", texto: "Observatorio de la Vida Militar (Cortes Generales)" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#ef4444;">
          <div class="schema-poster-badge" style="background:#991b1b;">🚫 PROHIBICIONES (LO 9/2011)</div>
          <div class="schema-big-calendar" style="font-size:13px;">NEUTRALIDAD POLÍTICA Y SINDICAL</div>
          <div class="schema-step">• 🚫 <strong>Prohibido afiliarse</strong> a partidos políticos o sindicatos.</div>
          <div class="schema-step">• 🚫 <strong>Prohibida la huelga</strong> o acciones concertadas sustitutivas.</div>
          <div class="schema-step">• 📩 <strong>Derecho de petición (Art. 15):</strong> Solo <span class="hl-yellow">INDIVIDUAL</span> (nunca colectivo).</div>
        </div>

        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">🤝 COPERFAS (Arts. 47-50)</div>
          <div class="schema-big-calendar">1% | 3% | 3% | 1,5%</div>
          <div class="schema-step">• Preside: <strong>Ministro de Defensa</strong> (o SUBDEF).</div>
          <div class="schema-step">• <strong>Requisitos de afiliación (Art. 48.2):</strong><br/>
            - <span class="hl-green">1% del total FAS</span>, O BIEN:<br/>
            - <span class="hl-yellow">3% Oficiales | 3% Suboficiales | 1,5% Tropa y Marinería</span>.</div>
          <div class="schema-step">• Inscripción: Registro <strong>RAPFAS</strong>.</div>
        </div>

        <div class="schema-poster-col" style="border-color:#3b82f6;">
          <div class="schema-poster-badge" style="background:#1d4ed8;">🏛️ OBSERVATORIO VIDA MILITAR</div>
          <div class="schema-big-calendar">9 MIEMBROS • 5 AÑOS</div>
          <div class="schema-step">• Adscrito a las <span class="hl-cyan">CORTES GENERALES</span> (¡no al MINISDEF!).</div>
          <div class="schema-step">• Composición (Art. 54): <strong>5 elegidos por el Congreso + 4 por el Senado</strong>.</div>
          <div class="schema-step">• Mandato de <span class="hl-yellow">5 AÑOS</span> (cargo gratuito).</div>
        </div>
      </div>
    `
  },

  "B2-T04": {
    subtituloPoster: "PÓSTER ESTRELLA DE EXAMEN: RÉGIMEN DISCIPLINARIO DE LAS FAS (LO 8/2014)",
    leyenda: [
      { color: "#059669", texto: "Faltas Leves (Prescripción Falta: 2m / Sanción: 3m)" },
      { color: "#d97706", texto: "Faltas Graves (Prescripción: 1 año / Exp: máx 3m)" },
      { color: "#dc2626", texto: "Faltas Muy Graves (Prescripción: 2 años / Exp: máx 6m)" }
    ],
    htmlDiagrama: `
      <div class="schema-poster-title" style="margin-top:0;">⚖️ COMPARATIVA INTEGRAL DE FALTAS, SANCIONES, PRESCRIPCIÓN Y CANCELACIÓN (LO 8/2014)</div>
      <div class="schema-grid-3">
        <!-- FALTAS LEVES -->
        <div class="schema-poster-col" style="border-color:#10b981; background:rgba(16,185,129,0.07);">
          <div class="schema-poster-badge" style="background:#059669;">🟢 FALTAS LEVES</div>
          <div class="schema-big-calendar">ARRESTO: 1 A 14 DÍAS</div>
          <div class="schema-step"><strong>📋 Sanciones (Art. 11.1):</strong><br/>
            • Reprensión<br/>
            • Privación salida: <strong>1 a 8 días</strong><br/>
            • Sanción económica: <strong>1 a 7 días</strong><br/>
            • Arresto: <span class="hl-green">1 a 14 días</span></div>
          <div class="schema-step"><strong>⏳ Prescripción FALTA (Art. 24):</strong> <span class="hl-yellow">2 MESES</span></div>
          <div class="schema-step"><strong>⏳ Prescripción SANCIÓN (Art. 25):</strong> <span class="hl-pink">3 MESES</span></div>
          <div class="schema-step"><strong>🧹 Cancelación Nota (Art. 65):</strong> <strong>1 AÑO</strong></div>
        </div>

        <!-- FALTAS GRAVES -->
        <div class="schema-poster-col" style="border-color:#f59e0b; background:rgba(245,158,11,0.07);">
          <div class="schema-poster-badge" style="background:#d97706;">🟡 FALTAS GRAVES</div>
          <div class="schema-big-calendar">ARRESTO: 15 A 30 DÍAS</div>
          <div class="schema-step"><strong>📋 Sanciones (Art. 11.2):</strong><br/>
            • Sanción económica: <strong>8 a 15 días</strong><br/>
            • Arresto: <span class="hl-yellow">15 a 30 días</span><br/>
            • Pérdida de destino<br/>
            • Baja en Centro Docente Militar</div>
          <div class="schema-step"><strong>⏳ Prescripción FALTA / SANCIÓN:</strong> <strong>1 AÑO / 1 AÑO</strong></div>
          <div class="schema-step"><strong>📂 Tramitación Expediente:</strong> Máx. <span class="hl-cyan">3 MESES</span></div>
          <div class="schema-step"><strong>🧹 Cancelación Nota (Art. 65):</strong> <strong>2 AÑOS</strong></div>
        </div>

        <!-- FALTAS MUY GRAVES -->
        <div class="schema-poster-col" style="border-color:#ef4444; background:rgba(239,68,68,0.08);">
          <div class="schema-poster-badge" style="background:#991b1b;">🔴 FALTAS MUY GRAVES</div>
          <div class="schema-big-calendar">ARRESTO: 31 A 60 DÍAS</div>
          <div class="schema-step"><strong>📋 Sanciones (Art. 11.3):</strong><br/>
            • Arresto: <span class="hl-pink">31 a 60 días</span><br/>
            • Suspensión empleo: <strong>1 mes a 1 año</strong><br/>
            • Separación servicio (<span class="hl-yellow">Ministro</span>)<br/>
            • Resolución compromiso (<span class="hl-yellow">SUBDEF</span>)</div>
          <div class="schema-step"><strong>⏳ Prescripción FALTA / SANCIÓN:</strong> <strong>2 AÑOS / 2 AÑOS</strong></div>
          <div class="schema-step"><strong>📂 Tramitación Expediente:</strong> Máx. <span class="hl-cyan">6 MESES</span></div>
          <div class="schema-step"><strong>🧹 Cancelación Nota (Art. 65):</strong> <strong>4 AÑOS</strong></div>
        </div>
      </div>

      <!-- Escalón de Potestad Sancionadora en Faltas Leves -->
      <div class="schema-poster-title">🎖️ ESCALAFÓN DE POTESTAD SANCIONADORA DE LOS MANDOS (ART. 32 LO 8/2014)</div>
      <div class="schema-grid-4">
        <div class="schema-poster-col" style="border-color:#64748b;">
          <div class="schema-poster-badge" style="background:#334155;">1. JEFE DE SECCIÓN / PELOTÓN</div>
          <div class="schema-step">Solo puede imponer:<br/><span class="hl-yellow">REPRENSIÓN</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#ef4444;">
          <div class="schema-poster-badge" style="background:#991b1b;">2. JEFE DE COMPAÑÍA (Art. 32.5)</div>
          <div class="schema-step">• Reprensión<br/>• Salida y Económica: <strong>hasta 5 DÍAS</strong><br/>• <span class="hl-pink">🚫 ¡NO IMPONE ARRESTO!</span></div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#b45309;">3. JEFE DE BATALLÓN (Art. 32.4)</div>
          <div class="schema-step">• Reprensión | Salida (8d) | Económica (7d)<br/>• <span class="hl-green">ARRESTO HASTA 7 DÍAS</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#047857;">4. JEFE DE REGIMIENTO (Art. 32.3)</div>
          <div class="schema-step">Todas las leves completas:<br/>• <span class="hl-cyan">ARRESTO HASTA 14 DÍAS</span>.</div>
        </div>
      </div>
    `
  },

  "B2-T05": {
    subtituloPoster: "PROCEDIMIENTO DE INICIATIVAS Y QUEJAS (RD 176/2014)",
    leyenda: [
      { color: "#d97706", texto: "Receptor en la Unidad (Oficial, Suboficial o Cabo Mayor)" },
      { color: "#059669", texto: "Plazos de Contestación (1 Mes Quejas / 6 Meses Iniciativas)" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#b45309;">👤 RECEPTOR EN LA UNIDAD</div>
          <div class="schema-big-calendar">CABO MAYOR / OF. / SUBOF.</div>
          <div class="schema-step">En cada unidad se designa un <strong>Oficial, Suboficial o <span class="hl-yellow">CABO MAYOR</span></strong> encargado de recepcionar y tramitar las iniciativas y quejas.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#ef4444;">
          <div class="schema-poster-badge" style="background:#991b1b;">⚠️ RÉGIMEN DE QUEJAS</div>
          <div class="schema-big-calendar">PLAZO: 1 MES</div>
          <div class="schema-step">Si transcurre <span class="hl-pink">1 MES</span> sin que el Jefe de Unidad conteste la queja (o si la respuesta no satisface), el militar puede acudir <strong>directamente al MAPER / JEPER</strong>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">💡 RÉGIMEN DE INICIATIVAS</div>
          <div class="schema-big-calendar">PLAZO: 6 MESES</div>
          <div class="schema-step">Propuestas para mejorar el servicio o las condiciones de vida. El órgano competente dispone de <span class="hl-green">6 MESES</span> para resolver motivadamente.</div>
        </div>
      </div>
    `
  },

  "B2-T06": {
    subtituloPoster: "IGUALDAD EFECTIVA (LO 3/2007) Y OBSERVATORIO MILITAR PARA LA IGUALDAD",
    leyenda: [
      { color: "#db2777", texto: "Principios LO 3/2007 (Presencia Equilibrada 60/40)" },
      { color: "#059669", texto: "Observatorio Militar para la Igualdad (SUBDEF)" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#ec4899;">
          <div class="schema-poster-badge" style="background:#be185d;">⚖️ PRESENCIA EQUILIBRADA</div>
          <div class="schema-big-calendar">40% — 60%</div>
          <div class="schema-step">Composición en la que las personas de cada sexo <span class="hl-yellow">no superen el 60% ni sean menos del 40%</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#a855f7;">
          <div class="schema-poster-badge" style="background:#7e22ce;">🔍 ACOSO SEXUAL VS POR SEXO</div>
          <div class="schema-step">• <strong>Acoso Sexual (Art. 7.1):</strong> Comportamiento verbal o físico de <span class="hl-pink">naturaleza sexual</span>.</div>
          <div class="schema-step">• <strong>Por razón de sexo (Art. 7.2):</strong> En función del sexo de una persona (ej. embarazo/maternidad).</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">🏛️ OBSERVATORIO IGUALDAD FAS</div>
          <div class="schema-big-calendar">ADSCRITO A SUBDEF</div>
          <div class="schema-step">• Adscrito a la <span class="hl-green">Subsecretaría de Defensa (SUBDEF)</span> (¡no confundir con el Observatorio de la Vida Militar de las Cortes!).</div>
          <div class="schema-step">• Se reúne en Pleno al menos <strong>2 veces al año</strong>.</div>
        </div>
      </div>
    `
  },

  "B2-T07": {
    subtituloPoster: "PROTOCOLO FRENTE AL ACOSO EN LAS FAS Y UNIDADES DE PROTECCIÓN (UPA)",
    leyenda: [
      { color: "#7e22ce", texto: "Estructura de las UPA (DIGENPER y Mandos de Personal)" },
      { color: "#059669", texto: "Garantía de Vía Directa sin Conducto Reglamentario" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-2">
        <div class="schema-branch-card" style="border-top:5px solid #a855f7;">
          <div class="schema-branch-header" style="background:#6b21a8;">🛡️ RED DE UNIDADES DE PROTECCIÓN FRENTE AL ACOSO (UPA)</div>
          <ul class="schema-list">
            <li>• <strong>UPA Central:</strong> Encuadrada en la <span class="hl-cyan">Dirección General de Personal (DIGENPER - SUBDEF)</span>.</li>
            <li>• <strong>UPAs Específicas:</strong> En el <strong>MAPER del Ejército de Tierra</strong>, JEPER de la Armada, MAPER del EA y EMAD.</li>
            <li>• Prestan asesoramiento confidencial, asistencia integral y canalizan las denuncias.</li>
          </ul>
        </div>
        <div class="schema-branch-card" style="border-top:5px solid #10b981;">
          <div class="schema-branch-header" style="background:#065f46;">⚡ REGLA DE ORO DE EXAMEN: SIN CONDUCTO REGLAMENTARIO</div>
          <div class="schema-big-calendar">VÍA DIRECTA Y CONFIDENCIAL</div>
          <ul class="schema-list">
            <li>• <span class="hl-yellow">NO es necesario seguir el conducto reglamentario</span> para presentar denuncia o consulta ante la UPA.</li>
            <li>• Garantía de <strong>indemnidad</strong> (prohibición de represalias) y tramitación urgente con reserva de identidad.</li>
          </ul>
        </div>
      </div>
    `
  },

  "B2-T08": {
    subtituloPoster: "PÓSTER DE RECURSOS ADMINISTRATIVOS, NULIDAD Y PLAZOS EN LA LEY 39/2015 (LPACAP)",
    leyenda: [
      { color: "#0284c7", texto: "Recurso de Alzada (Superior Jerárquico - 3 Meses)" },
      { color: "#059669", texto: "Recurso Potestativo de Reposición (Mismo Órgano - 1 Mes)" },
      { color: "#dc2626", texto: "Recurso Extraordinario de Revisión (Actos Firmes)" }
    ],
    htmlDiagrama: `
      <div class="schema-poster-title" style="margin-top:0;">📊 LOS 3 RECURSOS ADMINISTRATIVOS DE LA LEY 39/2015 (ARTS. 121 A 126)</div>
      <div class="schema-grid-3">
        <!-- ALZADA -->
        <div class="schema-poster-col" style="border-color:#0284c7; background:rgba(2,132,199,0.07);">
          <div class="schema-poster-badge" style="background:#0369a1;">🔼 RECURSO DE ALZADA (Art. 121)</div>
          <div class="schema-big-calendar">RESOLVER: 3 MESES</div>
          <div class="schema-step"><strong>🎯 Objeto:</strong> Actos que <span class="hl-cyan">NO ponen fin</span> a la vía administrativa.</div>
          <div class="schema-step"><strong>🏛️ Resuelve:</strong> El <strong>órgano superior jerárquico</strong>.</div>
          <div class="schema-step"><strong>⏳ Plazo Interposición:</strong> <span class="hl-yellow">1 MES</span> (si es expreso) / En cualquier momento (presunto).</div>
          <div class="schema-step"><strong>🔥 Doble Silencio:</strong> Alzada contra silencio negativo + no resuelta en 3m = <span class="hl-green">SILENCIO POSITIVO</span>.</div>
        </div>

        <!-- REPOSICIÓN -->
        <div class="schema-poster-col" style="border-color:#10b981; background:rgba(16,185,129,0.07);">
          <div class="schema-poster-badge" style="background:#059669;">🔄 POTESTATIVO REPOSICIÓN (Art. 123)</div>
          <div class="schema-big-calendar">RESOLVER: 1 MES</div>
          <div class="schema-step"><strong>🎯 Objeto:</strong> Actos que <span class="hl-green">SÍ ponen fin</span> a la vía administrativa.</div>
          <div class="schema-step"><strong>🏛️ Resuelve:</strong> El <strong>mismo órgano</strong> que dictó el acto.</div>
          <div class="schema-step"><strong>⏳ Plazo Interposición:</strong> <span class="hl-yellow">1 MES</span> (expreso) / En cualquier momento (presunto).</div>
          <div class="schema-step"><strong>⚠️ Regla:</strong> Contra su resolución <span class="hl-pink">no cabe nuevo recurso de reposición</span>.</div>
        </div>

        <!-- EXTRAORDINARIO REVISIÓN -->
        <div class="schema-poster-col" style="border-color:#ef4444; background:rgba(239,68,68,0.08);">
          <div class="schema-poster-badge" style="background:#991b1b;">⚠️ EXTRAORDINARIO REVISIÓN (Art. 125)</div>
          <div class="schema-big-calendar">4 AÑOS / 3 MESES</div>
          <div class="schema-step"><strong>🎯 Objeto:</strong> Contra <span class="hl-pink">ACTOS FIRMES</span> en vía administrativa.</div>
          <div class="schema-step"><strong>⏳ Interposición:</strong><br/>
            • Error de hecho en expediente: <span class="hl-yellow">4 AÑOS</span>.<br/>
            • Documentos nuevos, falsedad o prevaricación: <span class="hl-cyan">3 MESES</span>.</div>
          <div class="schema-step"><strong>⏳ Plazo para Resolver:</strong> <strong>3 MESES</strong>.</div>
        </div>
      </div>

      <div class="schema-poster-title">⚖️ CRUCE TRAMPA: NULIDAD (ART. 47) VS ANULABILIDAD (ART. 48) Y PLAZOS CLAVE</div>
      <div class="schema-grid-2">
        <div class="schema-branch-card" style="border-top:5px solid #ef4444;">
          <div class="schema-branch-header" style="background:#991b1b;">🔴 NULIDAD DE PLENO DERECHO (Art. 47) vs ANULABILIDAD (Art. 48)</div>
          <ul class="schema-list">
            <li>• <strong>Nulidad (Art. 47.1.b):</strong> Órgano manifiestamente incompetente por razón de la <span class="hl-pink">MATERIA o del TERRITORIO</span> (no convalidable).</li>
            <li>• <strong>Anulabilidad (Art. 48 y 52):</strong> Incompetencia <span class="hl-green">JERÁRQUICA</span> (SÍ es convalidable por el superior).</li>
            <li>• <strong>Declaración de lesividad (Art. 107):</strong> Plazo máx. <strong>4 años</strong> desde el acto (caduca a los <strong>6 meses</strong>).</li>
          </ul>
        </div>
        <div class="schema-branch-card" style="border-top:5px solid #f59e0b;">
          <div class="schema-branch-header" style="background:#92400e;">⏱️ PLAZOS GENERALES DE LA LEY 39/2015</div>
          <ul class="schema-list">
            <li>• <strong>Cómputo por días (Art. 30):</strong> Días <span class="hl-yellow">HÁBILES</span> (sábados, domingos y festivos son inhábiles).</li>
            <li>• <strong>Plazo resolver procedimiento (Art. 21):</strong> Tope general <strong>6 meses</strong>; plazo supletorio si la norma calla = <span class="hl-cyan">3 MESES</span>.</li>
            <li>• <strong>Subsanación (Art. 68):</strong> <strong>10 días</strong> | <strong>Audiencia (Art. 82):</strong> <strong>10 a 15 días</strong> | <strong>Rechazo notif. electrónica:</strong> <strong>10 días naturales</strong>.</li>
          </ul>
        </div>
      </div>
    `
  },

  "B3-T01": {
    subtituloPoster: "SISTEMA DE SEGURIDAD NACIONAL (LEY 36/2015) Y ESTRATEGIA ESN 2021 (RD 1150/2021)",
    leyenda: [
      { color: "#0284c7", texto: "Consejo de Seguridad Nacional y Componentes (Ley 36/2015)" },
      { color: "#059669", texto: "Los 3 Ejes de la ESN 2021 (Proteger, Promover, Participar)" }
    ],
    htmlDiagrama: `
      <div class="schema-tree-box">
        <div class="schema-root-node" style="background:#0c4a6e; border-color:#38bdf8;">
          🛡️ <strong>SISTEMA DE SEGURIDAD NACIONAL (Ley 36/2015)</strong><br/>
          <span>Preside el CSN: <strong>Presidente del Gobierno</strong> (o <span class="hl-yellow">S.M. el Rey cuando asista</span>) • Reunión mínima: <span class="hl-cyan">BIMESTRAL (cada 2 meses)</span> • Secretaría Técnica: <strong>DSN</strong></span>
        </div>
        <div class="schema-arrow-down">⬇ 3 COMPONENTES FUNDAMENTALES (Art. 9 Ley 36/2015) Y 3 EJES ESN 2021 (RD 1150/2021) ⬇</div>
        <div class="schema-grid-3">
          <div class="schema-poster-col" style="border-color:#38bdf8;">
            <div class="schema-poster-badge" style="background:#0284c7;">🧩 3 COMPONENTES (Art. 9)</div>
            <div class="schema-step">1. <span class="hl-cyan">Defensa Nacional</span></div>
            <div class="schema-step">2. <span class="hl-cyan">Seguridad Pública</span></div>
            <div class="schema-step">3. <span class="hl-cyan">Acción Exterior</span></div>
          </div>
          <div class="schema-poster-col" style="border-color:#10b981;">
            <div class="schema-poster-badge" style="background:#059669;">🎯 3 EJES ESN 2021 (RD 1150/2021)</div>
            <div class="schema-step">Lema: <em>"Un proyecto compartido"</em></div>
            <div class="schema-step">1. <span class="hl-green">PROTEGER</span> | 2. <span class="hl-green">PROMOVER</span> | 3. <span class="hl-green">PARTICIPAR</span></div>
            <div class="schema-step">Revisión de la ESN: <span class="hl-yellow">Cada 5 AÑOS</span>.</div>
          </div>
          <div class="schema-poster-col" style="border-color:#f59e0b;">
            <div class="schema-poster-badge" style="background:#d97706;">🚨 GESTIÓN DE CRISIS (Art. 24)</div>
            <div class="schema-big-calendar" style="font-size:13px;">REAL DECRETO DEL PRESIDENTE</div>
            <div class="schema-step">La <strong>Situación de Interés para la Seguridad Nacional</strong> la declara el <span class="hl-pink">Presidente del Gobierno por Real Decreto</span>.</div>
          </div>
        </div>
      </div>
    `
  },

  "B3-T02": {
    subtituloPoster: "DOCTRINA PARA EL EMPLEO DE LAS FAS (PDC-01 A): NIVELES, 5 DOMINIOS Y MANDO TIPO MISIÓN",
    leyenda: [
      { color: "#4f46e5", texto: "3 Niveles de Conducción de Operaciones" },
      { color: "#059669", texto: "5 Dominios / Ámbitos Operativos + Entorno Cognitivo" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#6366f1;">
          <div class="schema-poster-badge" style="background:#4338ca;">🎖️ 3 NIVELES DE OPERACIÓN</div>
          <div class="schema-step">• <strong>1. Estratégico:</strong> <span class="hl-yellow">JEMAD</span> (objetivos estratégicos militares).</div>
          <div class="schema-step">• <strong>2. Operacional:</strong> <span class="hl-cyan">CMOPS (Mando de Operaciones)</span> (planeamiento y conducción de campañas).</div>
          <div class="schema-step">• <strong>3. Táctico:</strong> Mandos Componentes / Fuerza (combates y acciones).</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">🌐 5 DOMINIOS + OPERACIONES</div>
          <div class="schema-step"><strong>5 Ámbitos:</strong> Terrestre, Marítimo, Aéreo, <span class="hl-green">Espacial y Ciberespacial</span>.</div>
          <div class="schema-step">• <strong>Conjunta:</strong> ≥2 Ejércitos nacionales.<br/>• <strong>Combinada:</strong> ≥2 Países aliados.<br/>• <strong>Integrada:</strong> Militar + Civil/Diplomático.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#d97706;">🧭 MANDO TIPO MISIÓN Y VUCA</div>
          <div class="schema-step">• <strong>Entorno VUCA:</strong> Volátil, Incierto, Complejo y Ambiguo.</div>
          <div class="schema-step">• <strong>Mando Tipo Misión:</strong> <span class="hl-yellow">Dirección centralizada</span> (propósito claro del jefe) + <span class="hl-pink">Ejecución descentralizada</span> (iniciativa subordinado).</div>
        </div>
      </div>
    `
  },

  "B3-T03": {
    subtituloPoster: "ORGANIZACIÓN DE LAS NACIONES UNIDAS (ONU): 6 ÓRGANOS Y CAPÍTULOS DE LA CARTA",
    leyenda: [
      { color: "#0284c7", texto: "Carta de San Francisco (1945) e Ingreso de España (1955)" },
      { color: "#d97706", texto: "Consejo de Seguridad (15 miembros: 5 con veto + 10 por 2 años)" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#0ea5e9;">
          <div class="schema-poster-badge" style="background:#0284c7;">🇺🇳 DATOS Y 6 ÓRGANOS ONU</div>
          <div class="schema-big-calendar">ESPAÑA: 14 DIC 1955</div>
          <div class="schema-step">• Carta: San Francisco (26 jun 1945). Sede: <strong>Nueva York</strong>.</div>
          <div class="schema-step">• <strong>6 Órganos:</strong> Asamblea General, Consejo Seguridad, ECOSOC (54), Admón. Fiduciaria, <span class="hl-cyan">Corte Internacional Justicia (La Haya - 15 jueces x 9 años)</span> y Secretaría General.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#d97706;">🛡️ CONSEJO DE SEGURIDAD</div>
          <div class="schema-big-calendar">15 MIEMBROS (5 + 10)</div>
          <div class="schema-step">• <strong>5 Permanentes con veto:</strong> <span class="hl-yellow">EE.UU., Rusia, China, Francia y Reino Unido</span>.</div>
          <div class="schema-step">• <strong>10 No permanentes:</strong> Elegidos por <strong>2 años</strong>.</div>
          <div class="schema-step">• Mayoría decisiones: <strong>9 votos</strong>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">📖 CAPÍTULOS VI, VII Y VIII</div>
          <div class="schema-step">• <strong>Capítulo VI:</strong> Arreglo <span class="hl-green">PACÍFICO</span> de controversias.</div>
          <div class="schema-step">• <strong>Capítulo VII:</strong> Acción <span class="hl-pink">COERCITIVA y uso de la fuerza</span> ante amenazas a la paz.</div>
          <div class="schema-step">• <strong>Capítulo VIII:</strong> Acuerdos Regionales.</div>
        </div>
      </div>
    `
  },

  "B3-T04": {
    subtituloPoster: "ORGANIZACIÓN DEL TRATADO DEL ATLÁNTICO NORTE (OTAN — 32 ALIADOS ACTUALIZADO 2024/2025)",
    leyenda: [
      { color: "#1d4ed8", texto: "Estructura Política y 32 Miembros (Finlandia 2023 y Suecia 2024)" },
      { color: "#059669", texto: "Estructura Militar (ACO Mons y ACT Norfolk + Sedes en España)" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#3b82f6;">
          <div class="schema-poster-badge" style="background:#1d4ed8;">🧭 OTAN: 32 ALIADOS</div>
          <div class="schema-big-calendar">32 MIEMBROS (2024)</div>
          <div class="schema-step">• Tratado Washington: <strong>4 abril 1949</strong>. Sede: <strong>Bruselas</strong>.</div>
          <div class="schema-step">• Ingreso España: <span class="hl-yellow">30 mayo 1982</span> (nº 16).</div>
          <div class="schema-step">• 🔥 Nuevos aliados: <span class="hl-green">31º Finlandia (2023) y 32º Suecia (marzo 2024)</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#d97706;">📜 ARTS. 4 Y 5 + MADRID 2022</div>
          <div class="schema-step">• <strong>Art. 4:</strong> Consulta entre aliados.<br/>• <strong>Art. 5:</strong> <span class="hl-pink">Defensa Colectiva</span>.</div>
          <div class="schema-step">• <strong>Concepto Estratégico Madrid 2022 (3 Tareas):</strong><br/>
            1. Disuasión y Defensa<br/>
            2. Prevención y Gestión de Crisis<br/>
            3. Seguridad Cooperativa</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">⚔️ MANDOS Y SEDES ESPAÑA</div>
          <div class="schema-step">• <strong>ACO (Operaciones):</strong> SHAPE (Mons, Bélgica) ➔ JFC Brunssum, Nápoles y Norfolk.</div>
          <div class="schema-step">• <strong>ACT (Transformación):</strong> Norfolk (EE.UU.).</div>
          <div class="schema-step">• <strong>En España:</strong> <span class="hl-cyan">CAOC Torrejón</span>, <span class="hl-cyan">HQ NRDC-ESP (Bétera)</span> y COE C-IED (Hoyo de Manzanares).</div>
        </div>
      </div>
    `
  },

  "B3-T05": {
    subtituloPoster: "ORGANIZACIÓN PARA LA SEGURIDAD Y LA COOPERACIÓN EN EUROPA (OSCE — 57 ESTADOS)",
    leyenda: [
      { color: "#0e7490", texto: "Origen (Helsinki 1975 / Budapest 1994) y Sede en Viena" },
      { color: "#059669", texto: "Las 3 Dimensiones ('Cestas') de Seguridad" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#06b6d4;">
          <div class="schema-poster-badge" style="background:#0e7490;">🏛️ ORIGEN Y SEDE OSCE</div>
          <div class="schema-big-calendar">57 ESTADOS • VIENA</div>
          <div class="schema-step">• Nace en el <strong>Acta Final de Helsinki (1975)</strong> como CSCE; pasa a llamarse OSCE en <strong>Budapest (1994)</strong>.</div>
          <div class="schema-step">• Sede del Secretariado y Consejo Permanente: <span class="hl-yellow">VIENA (Austria)</span>.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">📦 LAS 3 DIMENSIONES (CESTAS)</div>
          <div class="schema-step">1. <span class="hl-green">Político-Militar</span> (control de armamentos y medidas de confianza).</div>
          <div class="schema-step">2. <span class="hl-green">Económica y Medioambiental</span>.</div>
          <div class="schema-step">3. <span class="hl-green">Humana</span> (DD.HH. y elecciones — ODIHR en Varsovia).</div>
        </div>
        <div class="schema-poster-col" style="border-color:#f59e0b;">
          <div class="schema-poster-badge" style="background:#d97706;">🗳️ DECISIONES Y PRESIDENCIA</div>
          <div class="schema-step">• Regla de votación: Todas las decisiones se adoptan por <span class="hl-pink">CONSENSO</span>.</div>
          <div class="schema-step">• Presidencia en Ejercicio: Rota cada <strong>1 AÑO</strong> entre los Ministros de Exteriores (España la ejerció en <strong>2007</strong>).</div>
        </div>
      </div>
    `
  },

  "B3-T06": {
    subtituloPoster: "UNIÓN EUROPEA (27 ESTADOS): INSTITUCIONES, PCSD Y CLÁUSULAS DE DEFENSA (42.7 TUE VS 222 TFUE)",
    leyenda: [
      { color: "#1d4ed8", texto: "7 Instituciones UE (Art. 13 TUE) y PCSD" },
      { color: "#dc2626", texto: "Cruce de Examen: Art. 42.7 TUE vs Art. 222 TFUE" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#2563eb;">
          <div class="schema-poster-badge" style="background:#1d4ed8;">🇪🇺 27 ESTADOS Y 7 INSTITUCIONES</div>
          <div class="schema-big-calendar">ESPAÑA: 1 ENE 1986</div>
          <div class="schema-step"><strong>7 Instituciones (Art. 13 TUE):</strong> Parlamento Europeo, Consejo Europeo, Consejo de la UE, Comisión Europea, TJUE, BCE y Tribunal de Cuentas.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#ef4444;">
          <div class="schema-poster-badge" style="background:#991b1b;">⚠️ CRUCE 42.7 TUE VS 222 TFUE</div>
          <div class="schema-step">• <strong>Art. 42.7 TUE (Asistencia Mutua):</strong> Ante <span class="hl-pink">AGRESIÓN ARMADA</span> en territorio de un Estado miembro.</div>
          <div class="schema-step">• <strong>Art. 222 TFUE (Solidaridad):</strong> Ante <span class="hl-yellow">ATAQUE TERRORISTA o CATÁSTROFE</span> natural o humana.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">🛰️ DEFENSA EUROPEA (PCSD)</div>
          <div class="schema-step">• <strong>SATCEN (Centro Satélites UE):</strong> Sede en <span class="hl-cyan">Torrejón de Ardoz (Madrid)</span>.</div>
          <div class="schema-step">• <strong>Brújula Estratégica (2022):</strong> Capacidad de Despliegue Rápido (RDC) de hasta <span class="hl-green">5.000 efectivos</span>.</div>
          <div class="schema-step">• <strong>PESCO</strong> y Agencia Europea de Defensa (EDA).</div>
        </div>
      </div>
    `
  },

  "B3-T07": {
    subtituloPoster: "ESPAÑA EN MISIONES INTERNACIONALES (ONU, OTAN Y UE — NOVEDAD ESLOVAQUIA 2024/2025)",
    leyenda: [
      { color: "#059669", texto: "Misiones OTAN (Nación Marco en Eslovaquia y eFP Letonia)" },
      { color: "#0284c7", texto: "Misiones ONU (FINUL Líbano) y UE (Atalanta Rota)" }
    ],
    htmlDiagrama: `
      <div class="schema-grid-3">
        <div class="schema-poster-col" style="border-color:#10b981;">
          <div class="schema-poster-badge" style="background:#059669;">🔥 OTAN: ESLOVAQUIA Y LETONIA</div>
          <div class="schema-big-calendar">NACIÓN MARCO 2024</div>
          <div class="schema-step">• <span class="hl-yellow">ESLOVAQUIA (Lešť):</span> Desde 2024 España lidera como <strong>"Nación Marco" (Framework Nation)</strong> la Brigada Multinacional de la OTAN en el flanco este.</div>
          <div class="schema-step">• <strong>LETONIA (Adazi):</strong> Presencia Avanzada Reforzada (eFP) y Policía Aérea del Báltico.</div>
        </div>
        <div class="schema-poster-col" style="border-color:#0ea5e9;">
          <div class="schema-poster-badge" style="background:#0284c7;">🇺🇳 ONU: ORIGEN (1989) Y LÍBANO</div>
          <div class="schema-big-calendar">1989: ANGOLA Y NAMIBIA</div>
          <div class="schema-step">• Primeras misiones (1989): <span class="hl-cyan">UNAVEM I (Angola) y UNTAG (Namibia)</span>.</div>
          <div class="schema-step">• <strong>FINUL / UNIFIL (Líbano):</strong> Operación <em>"Libre Hidalgo"</em> (Base <strong>Miguel de Cervantes</strong> en Marjayoun).</div>
        </div>
        <div class="schema-poster-col" style="border-color:#2563eb;">
          <div class="schema-poster-badge" style="background:#1d4ed8;">🇪🇺 UE: ATALANTA Y ÁFRICA</div>
          <div class="schema-big-calendar">OHQ ATALANTA: ROTA</div>
          <div class="schema-step">• <strong>EUNAVFOR Atalanta (Índico):</strong> Cuartel General Operacional (OHQ) en la <span class="hl-green">Base Naval de Rota (Cádiz)</span>.</div>
          <div class="schema-step">• Autorización misiones exterior (Art. 17 LO 5/2005): <span class="hl-pink">Congreso de los Diputados</span>.</div>
        </div>
      </div>
    `
  }
};

/**
 * GENERADOR DE DOCUMENTOS IMPRIMIBLES / PDF A TODO COLOR
 * Soporta 2 modos:
 * 1) "esquema": Póster Visual Horizontal/Vertical con Organigrama, Colores, Subrayados y Flechas (inspirado en las capturas)
 * 2) "chuleta": Dossier Completo del Tema (Esquema Visual + Resumen + Trampas del Tribunal + Todas las Preguntas Oficiales del Tema)
 */
window.pdfGenerator = {
  openPrintWindow(htmlContent, title) {
    const win = window.open("", "_blank");
    if (!win) {
      alert("Por favor, permite las ventanas emergentes para generar y descargar el PDF.");
      return;
    }
    win.document.write(htmlContent);
    win.document.close();
  },

  getCommonPrintStyles(landscape = false) {
    return `
      <style>
        @page {
          size: ${landscape ? "A4 landscape" : "A4 portrait"};
          margin: 10mm;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f8fafc;
          color: #0f172a;
          margin: 0;
          padding: 16px;
        }
        .no-print-bar {
          background: #0f172a;
          color: #fff;
          padding: 12px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border: 2px solid #f59e0b;
        }
        .btn-print {
          background: #f59e0b;
          color: #0f172a;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 900;
          font-size: 13px;
          cursor: pointer;
          text-transform: uppercase;
        }
        .btn-close {
          background: #334155;
          color: #fff;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          margin-left: 8px;
        }
        @media print {
          body { background: #ffffff; padding: 0; }
          .no-print-bar { display: none !important; }
        }
        .poster-sheet {
          background: #ffffff;
          border: 3px solid #1e293b;
          border-radius: 14px;
          padding: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }
        .flag-stripe {
          height: 10px;
          background: linear-gradient(90deg, #c60b1e 0%, #c60b1e 25%, #ffc400 25%, #ffc400 75%, #c60b1e 75%, #c60b1e 100%);
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .poster-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 3px solid #0f172a;
          padding-bottom: 12px;
          margin-bottom: 14px;
          gap: 12px;
        }
        .poster-title {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          color: #0f172a;
          margin: 4px 0;
          line-height: 1.2;
        }
        .poster-subtitle {
          font-size: 12px;
          font-weight: 800;
          color: #b45309;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .legend-box {
          border: 2px solid #334155;
          border-radius: 8px;
          padding: 8px 12px;
          background: #f1f5f9;
          min-width: 240px;
          font-size: 11px;
        }
        .legend-title {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 10px;
          border-bottom: 1px solid #94a3b8;
          padding-bottom: 3px;
          margin-bottom: 5px;
          color: #0f172a;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 3px;
          font-weight: 700;
          color: #1e293b;
        }
        .legend-swatch {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          display: inline-block;
          flex-shrink: 0;
        }
        /* Estilos del Diagrama Visual */
        .schema-tree-box {
          margin-bottom: 14px;
        }
        .schema-root-node {
          color: #ffffff !important;
          padding: 12px 16px;
          border-radius: 10px;
          border: 3px solid #f59e0b;
          text-align: center;
          font-size: 13px;
          line-height: 1.45;
        }
        .schema-arrow-down {
          text-align: center;
          font-weight: 900;
          color: #dc2626;
          font-size: 12px;
          margin: 6px 0;
          letter-spacing: 0.5px;
        }
        .schema-poster-title {
          background: #0f172a;
          color: #fbbf24 !important;
          font-weight: 900;
          font-size: 13px;
          padding: 8px 14px;
          border-radius: 8px;
          text-transform: uppercase;
          margin: 14px 0 10px 0;
          letter-spacing: 0.5px;
        }
        .schema-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .schema-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .schema-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .schema-branch-card, .schema-poster-col {
          background: #f8fafc !important;
          color: #0f172a !important;
          border: 2px solid #cbd5e1;
          border-radius: 10px;
          padding: 10px 12px;
        }
        .schema-branch-header, .schema-poster-badge {
          color: #ffffff !important;
          font-weight: 900;
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 6px;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .schema-big-calendar {
          background: #fef3c7 !important;
          color: #92400e !important;
          border: 2px solid #f59e0b;
          border-radius: 8px;
          padding: 8px;
          text-align: center;
          font-weight: 900;
          font-size: 16px;
          margin-bottom: 8px;
        }
        .schema-list {
          margin: 0;
          padding-left: 16px;
          font-size: 12px;
          line-height: 1.5;
          color: #1e293b !important;
        }
        .schema-list li {
          margin-bottom: 5px;
        }
        .schema-step {
          font-size: 12px;
          line-height: 1.45;
          margin-bottom: 6px;
          padding-bottom: 5px;
          border-bottom: 1px dashed #cbd5e1;
          color: #1e293b !important;
        }
        /* Subrayados fluorescentes de academia */
        .hl-yellow {
          background: #fef08a !important;
          color: #713f12 !important;
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 800;
          border-bottom: 2px solid #eab308;
        }
        .hl-green {
          background: #bbf7d0 !important;
          color: #064e3b !important;
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 800;
          border-bottom: 2px solid #10b981;
        }
        .hl-pink {
          background: #fecdd3 !important;
          color: #881337 !important;
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 800;
          border-bottom: 2px solid #f43f5e;
        }
        .hl-cyan {
          background: #bae6fd !important;
          color: #0c4a6e !important;
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 800;
          border-bottom: 2px solid #0284c7;
        }
        .normativa-footer-box {
          margin-top: 12px;
          padding: 10px 14px;
          background: #fef9c3;
          border: 2px solid #eab308;
          border-radius: 8px;
          font-size: 11px;
          color: #1e293b;
        }
        .trap-box {
          margin-top: 12px;
          padding: 10px 14px;
          background: #fef2f2;
          border: 2px solid #ef4444;
          border-radius: 8px;
          font-size: 11.5px;
          color: #7f1d1d;
        }
        .question-print-card {
          border: 1px solid #cbd5e1;
          border-left: 5px solid #059669;
          border-radius: 8px;
          padding: 10px 12px;
          margin-bottom: 10px;
          background: #ffffff;
          page-break-inside: avoid;
        }
      </style>
    `;
  },

  downloadVisualSchemaPDF(temaCodigo) {
    const tema = (typeof OFFICIAL_SYLLABUS !== "undefined")
      ? OFFICIAL_SYLLABUS.find(t => t.codigo === temaCodigo)
      : null;
    if (!tema) return;

    const schema = VISUAL_SCHEMAS[temaCodigo];
    const legendHTML = schema && schema.leyenda
      ? schema.leyenda.map(l => `
          <div class="legend-item">
            <span class="legend-swatch" style="background:${l.color};"></span>
            <span>${l.texto}</span>
          </div>
        `).join("")
      : "";

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Esquema Visual ${tema.codigo} - ${tema.titulo}</title>
        ${this.getCommonPrintStyles(true)}
      </head>
      <body>
        <div class="no-print-bar">
          <div>
            <strong>📊 ESQUEMA VISUAL E INFOGRAFÍA DE COLORES • ${tema.codigo}</strong>
            <div style="font-size:11px; color:#cbd5e1;">Pulsa en "Imprimir / Guardar como PDF" y selecciona "Guardar como PDF" (Activa "Gráficos de fondo")</div>
          </div>
          <div>
            <button class="btn-print" onclick="window.print()">🖨️ Imprimir / Guardar en PDF</button>
            <button class="btn-close" onclick="window.close()">Cerrar ✕</button>
          </div>
        </div>

        <div class="poster-sheet">
          <div class="flag-stripe"></div>
          <div class="poster-header">
            <div>
              <div class="poster-subtitle">🎖️ OPOSICIÓN PERMANENCIA FAS • ${tema.bloque.toUpperCase()} • PESO EXAMEN: ${tema.frecuenciaExamen || "ALTO"}</div>
              <h1 class="poster-title">${tema.codigo} — ${tema.titulo}</h1>
              <div style="font-size:11.5px; color:#334155; font-weight:700;">📜 Normativa Oficial BOD: ${tema.normativa}</div>
            </div>
            <div class="legend-box">
              <div class="legend-title">NIVEL ADMINISTRATIVO / LEYENDA</div>
              ${legendHTML}
            </div>
          </div>

          ${schema ? schema.htmlDiagrama : ""}

          <div class="trap-box">
            <strong>🪤 ALERTAS CAZA-TRAMPAS DEL TRIBUNAL (${tema.codigo}):</strong>
            <ul style="margin:5px 0 0 0; padding-left:18px;">
              ${(tema.trampas || []).map(tr => `<li style="margin-bottom:3px;">${tr}</li>`).join("")}
            </ul>
          </div>

          <div class="normativa-footer-box">
            <strong>📌 PUNTOS CALIENTES SUBRAYADOS DE EXAMEN:</strong>
            <ul style="margin:5px 0 0 0; padding-left:18px;">
              ${(tema.puntosCalientes || []).map(pc => `<li style="margin-bottom:3px;">${pc}</li>`).join("")}
            </ul>
          </div>
        </div>
      </body>
      </html>
    `;

    this.openPrintWindow(html, `Esquema_${tema.codigo}`);
  },

  downloadTopicCheatSheetPDF(temaCodigo) {
    const tema = (typeof OFFICIAL_SYLLABUS !== "undefined")
      ? OFFICIAL_SYLLABUS.find(t => t.codigo === temaCodigo)
      : null;
    if (!tema) return;

    const schema = VISUAL_SCHEMAS[temaCodigo];
    const allQuestions = window.storageManager ? window.storageManager.getQuestions() : [];
    const topicQuestions = allQuestions.filter(q => q.temaCodigo === temaCodigo);
    const letters = ["A", "B", "C", "D"];

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Chuleta Táctica Completa ${tema.codigo}</title>
        ${this.getCommonPrintStyles(false)}
      </head>
      <body>
        <div class="no-print-bar">
          <div>
            <strong>📄 CHULETA TÁCTICA COMPLETA (ESQUEMA + RESUMEN + ${topicQuestions.length} PREGUNTAS) • ${tema.codigo}</strong>
            <div style="font-size:11px; color:#cbd5e1;">Lista para guardar en PDF en tu móvil o imprimir en A4 a todo color</div>
          </div>
          <div>
            <button class="btn-print" onclick="window.print()">🖨️ Descargar / Guardar PDF</button>
            <button class="btn-close" onclick="window.close()">Cerrar ✕</button>
          </div>
        </div>

        <div class="poster-sheet">
          <div class="flag-stripe"></div>
          <div class="poster-header">
            <div>
              <div class="poster-subtitle">🎖️ DOSSIER TÁCTICO DE ESTUDIO • ${tema.bloque} • ${tema.frecuenciaExamen || ""}</div>
              <h1 class="poster-title">${tema.codigo}: ${tema.titulo}</h1>
              <div style="font-size:12px; color:#0f172a; font-weight:700;">📜 Normativa: <span class="hl-yellow">${tema.normativa}</span></div>
            </div>
          </div>

          <div style="background:#f1f5f9; border-left:5px solid #0f172a; padding:10px 14px; border-radius:6px; font-size:12.5px; line-height:1.5; margin-bottom:14px;">
            <strong>📖 RESUMEN EJECUTIVO DEL TEMA:</strong><br/>
            ${tema.resumen}
          </div>

          ${schema ? `
            <div class="schema-poster-title">📊 1. ESQUEMA VISUAL Y ORGANIGRAMA DE COLORES (${tema.codigo})</div>
            ${schema.htmlDiagrama}
          ` : ""}

          <div class="normativa-footer-box">
            <strong>🔥 2. PUNTOS CALIENTES QUE MÁS SE REPITEN EN EL EXAMEN OFICIAL:</strong>
            <ul style="margin:6px 0 0 0; padding-left:18px; font-size:12px; line-height:1.5;">
              ${(tema.puntosCalientes || []).map(p => `<li style="margin-bottom:4px;">${p}</li>`).join("")}
            </ul>
          </div>

          <div class="trap-box">
            <strong>🪤 3. TRAMPAS FRECUENTES DEL TRIBUNAL (¡PROHIBIDO FALLAR!):</strong>
            <ul style="margin:6px 0 0 0; padding-left:18px; font-size:12px; line-height:1.5;">
              ${(tema.trampas || []).map(t => `<li style="margin-bottom:4px;">${t}</li>`).join("")}
            </ul>
          </div>

          <div class="schema-poster-title" style="margin-top:18px;">🎯 4. BANCO DE PREGUNTAS OFICIALES Y TRAMPA RESUELTAS (${topicQuestions.length} PREGUNTAS)</div>
          ${topicQuestions.map((q, idx) => `
            <div class="question-print-card">
              <div style="display:flex; justify-content:space-between; font-size:11px; color:#475569; font-weight:800; margin-bottom:4px;">
                <span>PREGUNTA ${idx + 1} (${q.id}) • ${q.dificultad === "trampa" ? "🪤 PREGUNTA TRAMPA" : "🏛️ OFICIAL BOD"}</span>
                <span class="hl-cyan">${q.referencia || ""}</span>
              </div>
              <div style="font-size:13px; font-weight:800; color:#0f172a; margin-bottom:6px;">${q.pregunta}</div>
              <div style="font-size:12px; margin-bottom:6px;">
                ${q.opciones.map((opt, oIdx) => `
                  <div style="padding:3px 6px; border-radius:4px; ${oIdx === q.correcta ? "background:#dcfce7; color:#065f46; font-weight:800; border:1px solid #10b981;" : "color:#475569;"}">
                    ${letters[oIdx]}) ${opt} ${oIdx === q.correcta ? "✓ [RESPUESTA OFICIAL]" : ""}
                  </div>
                `).join("")}
              </div>
              <div style="font-size:11.5px; color:#1e293b; background:#f8fafc; padding:6px 8px; border-radius:4px; border:1px solid #e2e8f0;">
                <strong>⚖️ Explicación:</strong> ${q.justificacion}
                ${q.consejoAcademia ? `<br/><span class="hl-yellow">💡 Truco Academia:</span> <strong>${q.consejoAcademia}</strong>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      </body>
      </html>
    `;

    this.openPrintWindow(html, `Chuleta_${tema.codigo}`);
  }
};
