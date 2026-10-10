/**
 * ============================================================================
 * OLEADA MUSCULAR 3 DE PREGUNTAS OFICIALES (+150 PREGUNTAS -> TOTAL 650)
 * Y MICRO-RETOS RÁPIDOS "GUARDIA EXPRESS" (3 A 5 MINUTOS)
 * ============================================================================
 */

const QUICK_CHALLENGE_PACKS = [
  {
    id: "RET-EXPRESS-10",
    titulo: "⚡ Guardia Express (10 Preguntas / 3 Min)",
    subtitulo: "10 Preguntas de Alta Frecuencia • 180 Segundos",
    badge: "3 MIN EXPRESS",
    badgeColor: "bg-amber-500 text-slate-950",
    borderClass: "border-amber-500/60 bg-amber-950/20",
    count: 10,
    durationMinutes: 3,
    mode: "examen_real",
    bloque: "ALL",
    tagFilter: "ALL",
    studyMode: true,
    descripcion: "Ideal para tiempos muertos en el cuartel: 10 preguntas oficiales seleccionadas al azar de los 3 bloques con corrección instantánea."
  },
  {
    id: "RET-PLAZOS-10",
    titulo: "⏱️ Sprint de Plazos y Mayorías (10p / 3 Min)",
    subtitulo: "Días, Meses, Años, 2/3 y 3/5 • 180 Segundos",
    badge: "SOLO PLAZOS",
    badgeColor: "bg-rose-500 text-white",
    borderClass: "border-rose-500/60 bg-rose-950/20",
    count: 10,
    durationMinutes: 3,
    mode: "pack_custom",
    packRule: "solo_plazos",
    studyMode: true,
    descripcion: "Entrena la memoria numérica bajo presión: 10 preguntas rápidas donde toda la clave está en un plazo o mayoría."
  },
  {
    id: "RET-TRAMPAS-10",
    titulo: "🪤 Duelo Caza-Trampas Express (10p / 3 Min)",
    subtitulo: "10 Preguntas Trampa del Tribunal • 180 Segundos",
    badge: "CAZA-TRAMPAS",
    badgeColor: "bg-purple-500 text-white",
    borderClass: "border-purple-500/60 bg-purple-950/20",
    count: 10,
    durationMinutes: 3,
    mode: "trampas",
    bloque: "ALL",
    tagFilter: "Trampa",
    studyMode: true,
    descripcion: "Detecta la palabra cambiada ('podrá' vs 'deberá', hábiles vs naturales, JEME vs JEMAD) en menos de 18 segundos por pregunta."
  },
  {
    id: "RET-IMPRESCINDIBLES-15",
    titulo: "🔥 Reto 5 Minutos: 15 Imprescindibles de Examen",
    subtitulo: "15 Preguntas Estrella de los 6 Temas Pareto • 5 Minutos",
    badge: "5 MIN PARETO",
    badgeColor: "bg-emerald-500 text-slate-950",
    borderClass: "border-emerald-500/60 bg-emerald-950/20",
    count: 15,
    durationMinutes: 5,
    mode: "pack_custom",
    packRule: "pareto_top6",
    studyMode: true,
    descripcion: "15 preguntas de los 6 temas que suman el 55% del examen (CE, MINISDEF, ET, Tropa/Carrera, Disciplinario y Recursos LPACAP)."
  }
];

const WAVE3_QUESTIONS_PART1 = [
  // ==========================================================================
  // BLOQUE 1: ORGANIZACIÓN (B1-T01 a B1-T06) — 44 NUEVAS PREGUNTAS
  // ==========================================================================

  // --- B1-T01: Constitución Española de 1978 (8 preguntas) ---
  {
    id: "Q-W3-001",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título Preliminar — Art. 6 Partidos Políticos y Art. 7 Sindicatos",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 6 y 7 de la Constitución Española, los partidos políticos expresan el pluralismo político y los sindicatos de trabajadores y asociaciones empresariales contribuyen a la defensa de los intereses económicos y sociales que les son propios. ¿Qué exige la Constitución respecto a su estructura interna y funcionamiento?",
    opciones: [
      "Su estructura interna y funcionamiento deberán ser democráticos.",
      "Su estructura interna será jerárquica y militarizada.",
      "Necesitan autorización previa del Consejo de Ministros para crearse.",
      "Sus estatutos deben ser aprobados por el Tribunal Constitucional antes de su inscripción."
    ],
    correcta: 0,
    referencia: "Arts. 6 y 7 de la Constitución Española",
    explicacion: "Tanto en el Art. 6 (partidos políticos) como en el Art. 7 (sindicatos y asociaciones empresariales), la Constitución exige la misma fórmula literal: su creación y el ejercicio de su actividad son libres dentro del respeto a la CE y a la ley, y 'su estructura interna y funcionamiento deberán ser democráticos'.",
    pista: "Arts. 6 y 7 CE: estructura interna y funcionamiento DEBERÁN SER DEMOCRÁTICOS."
  },
  {
    id: "Q-W3-002",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título I — Art. 13 Extranjeros y Sufragio Municipal",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 13.2 de la Constitución Española (que fue objeto de la primera reforma constitucional en 1992), en relación con los derechos de participación política del artículo 23, los extranjeros en España:",
    opciones: [
      "Solamente los españoles serán titulares de los derechos del artículo 23, salvo lo que, atendiendo a criterios de reciprocidad, pueda establecerse por tratado o ley para el derecho de sufragio activo y pasivo en las elecciones municipales.",
      "Tienen derecho de sufragio activo y pasivo en las elecciones generales a Cortes Generales.",
      "No pueden votar ni ser elegidos en ningún tipo de elección municipal bajo ninguna circunstancia.",
      "Pueden ser nombrados Ministros y Magistrados del Tribunal Constitucional sin tener nacionalidad española."
    ],
    correcta: 0,
    referencia: "Art. 13.2 de la Constitución Española (Reforma de 27 de agosto de 1992)",
    explicacion: "La primera reforma constitucional (1992, por el Tratado de Maastricht) añadió las palabras 'y pasivo' al Art. 13.2 CE, permitiendo que, por tratado o ley y bajo criterio de reciprocidad, los extranjeros puedan votar (sufragio activo) y presentarse como candidatos (sufragio pasivo) ÚNICAMENTE en las elecciones MUNICIPALES.",
    pista: "Art. 13.2 CE (Reforma 1992): extranjeros = sufragio activo Y PASIVO solo en elecciones MUNICIPALES (por tratado o ley y reciprocidad)."
  },
  {
    id: "Q-W3-003",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título I — Art. 18 Inviolabilidad del Domicilio y Secreto de las Comunicaciones",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 18.2 de la Constitución Española, el domicilio es inviolable. ¿En qué tres únicos supuestos puede hacerse entrada o registro en él?",
    opciones: [
      "Con consentimiento del titular, por resolución judicial o, sin ninguno de los anteriores, en caso de flagrante delito.",
      "Por orden verbal del Alcalde, por petición vecinal o por sanción administrativa leve.",
      "Únicamente mediante sentencia firme del Tribunal Supremo.",
      "Con autorización del Defensor del Pueblo o del Fiscal Jefe provincial."
    ],
    correcta: 0,
    referencia: "Art. 18.2 de la Constitución Española",
    explicacion: "El Art. 18.2 CE establece que ninguna entrada o registro podrá hacerse en el domicilio sin: 1) Consentimiento del titular, o 2) Resolución judicial, salvo 3) Flagrante delito (además de los supuestos previstos en estado de excepción o sitio según el Art. 55.1 CE).",
    pista: "3 llaves del domicilio (Art. 18.2 CE): Consentimiento del titular + Resolución judicial + Flagrante delito."
  },
  {
    id: "Q-W3-004",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título I — Art. 25 Prohibición de penas privativas de libertad por la Administración Civil",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 25.3 de la Constitución Española:",
    opciones: [
      "La Administración civil no podrá imponer sanciones que, directa o subsidiariamente, impliquen privación de libertad.",
      "Ni la Administración civil ni la militar pueden imponer jamás sanciones privativas de libertad.",
      "Los Ayuntamientos pueden imponer arrestos domiciliarios por multas de tráfico impagadas.",
      "La Administración civil puede imponer penas de prisión de hasta seis meses."
    ],
    correcta: 0,
    referencia: "Art. 25.3 de la Constitución Española",
    explicacion: "¡Fíjate en el adjetivo 'CIVIL'!: El Art. 25.3 CE dice textualmente que 'La Administración CIVIL no podrá imponer sanciones que, directa o subsidiariamente, impliquen privación de libertad'. A sensu contrario, la Administración MILITAR sí puede imponer sanciones disciplinarias privativas de libertad (el arresto de la LO 8/2014).",
    pista: "Art. 25.3 CE prohíbe las sanciones privativas de libertad a la Administración CIVIL (la Militar sí tiene el arresto disciplinario)."
  },
  {
    id: "Q-W3-005",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título II — Art. 61 Juramento del Rey y del Príncipe Heredero",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 61.2 de la Constitución Española, ¿en qué momento presta juramento el Príncipe heredero ante las Cortes Generales?",
    opciones: [
      "Al alcanzar la mayoría de edad.",
      "El mismo día de su nacimiento.",
      "Al cumplir los dieciséis años de edad.",
      "Sólo cuando fallece o abdica el Rey."
    ],
    correcta: 0,
    referencia: "Art. 61.2 de la Constitución Española",
    explicacion: "El Príncipe heredero, al alcanzar la MAYORÍA DE EDAD (18 años), y el Regente o Regentes al hacerse cargo de sus funciones, prestarán el mismo juramento que el Rey (desempeñar fielmente sus funciones, guardar y hacer guardar la CE y las leyes y respetar los derechos de los ciudadanos y de las CC.AA.), así como el de fidelidad al Rey.",
    pista: "Juramento del Príncipe heredero (Art. 61.2 CE) = al alcanzar la MAYORÍA DE EDAD (18 años) + incluye fidelidad al Rey."
  },
  {
    id: "Q-W3-006",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título IV — Art. 102 Responsabilidad Criminal del Presidente y Ministros",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 102 de la Constitución Española, la responsabilidad criminal del Presidente y los demás miembros del Gobierno será exigible, en su caso, ante la Sala de lo Penal del Tribunal Supremo. Si la acusación fuere por traición o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones, ¿quién debe plantear la iniciativa y qué mayoría se exige para aprobarla?",
    opciones: [
      "Sólo podrá ser planteada por iniciativa de la cuarta parte (1/4) de los miembros del Congreso, y con la aprobación de la mayoría absoluta del mismo, no siendo aplicable la prerrogativa real de gracia.",
      "Por iniciativa de diez senadores y mayoría simple del Senado, pudiendo ser indultados por el Rey.",
      "Por iniciativa del Defensor del Pueblo y mayoría de 3/5 de ambas Cámaras.",
      "Por cualquier juez municipal sin intervención del Congreso."
    ],
    correcta: 0,
    referencia: "Art. 102 de la Constitución Española",
    explicacion: "Tres datos clave del Art. 102 CE sobre acusación por traición o delito contra la seguridad del Estado a miembros del Gobierno: 1) Iniciativa de 1/4 de los Diputados; 2) Aprobación por MAYORÍA ABSOLUTA del Congreso (sin intervención del Senado); 3) NO será aplicable la prerrogativa real de gracia (indulto) en ninguno de los supuestos de este artículo.",
    pista: "Art. 102 CE (Traición/Seguridad Estado del Gobierno): iniciativa 1/4 del Congreso + aprobación por MAYORÍA ABSOLUTA del Congreso + prohibido el indulto."
  },
  {
    id: "Q-W3-007",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título VI — Art. 122 Consejo General del Poder Judicial (CGPJ)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 122.3 de la Constitución Española, el Consejo General del Poder Judicial (CGPJ) estará integrado por el Presidente del Tribunal Supremo, que lo presidirá, y por:",
    opciones: [
      "Veinte miembros nombrados por el Rey por un período de cinco años (12 entre Jueces y Magistrados, y 4 a propuesta del Congreso y 4 a propuesta del Senado elegidos por mayoría de 3/5 entre abogados y otros juristas con más de 15 años de ejercicio).",
      "Doce miembros nombrados por un período de nueve años renovables por tercios.",
      "Quince miembros elegidos por el Ministro de Justicia por cuatro años.",
      "Nueve miembros designados por las Cortes Generales sin retribución."
    ],
    correcta: 0,
    referencia: "Art. 122.3 de la Constitución Española",
    explicacion: "¡No confundir el TC con el CGPJ ni con el Observatorio!: TC = 12 miembros por 9 años. CGPJ = Presidente del TS + 20 vocales nombrados por el Rey por 5 AÑOS (12 de origen judicial + 8 juristas de reconocida competencia con más de 15 años de ejercicio: 4 por Congreso y 4 por Senado por mayoría de 3/5). Observatorio Vida Militar = 9 miembros por 5 años.",
    pista: "CGPJ (Art. 122.3 CE) = Presidente TS + 20 miembros por 5 AÑOS (12 Jueces/Magistrados + 8 juristas con >15 años propuestos 4 Congreso y 4 Senado por 3/5)."
  },
  {
    id: "Q-W3-008",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título X — Art. 169 Prohibición de Reforma Constitucional",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Fácil"],
    pregunta: "Conforme al último artículo de la Constitución Española (artículo 169), ¿en qué momentos NO podrá iniciarse la reforma constitucional?",
    opciones: [
      "En tiempo de guerra o de vigencia de alguno de los estados previstos en el artículo 116 (alarma, excepción o sitio).",
      "Durante el mes de agosto o en periodo de vacaciones parlamentarias.",
      "Durante el primer año de cada legislatura.",
      "Cuando el Gobierno esté en funciones tras unas elecciones municipales."
    ],
    correcta: 0,
    referencia: "Art. 169 de la Constitución Española",
    explicacion: "El Art. 169 CE cierra la Constitución estableciendo que NO podrá iniciarse la reforma constitucional en tiempo de guerra o de vigencia de alguno de los estados del artículo 116 (alarma, excepción y sitio).",
    pista: "Art. 169 CE (último artículo): prohibido iniciar la reforma constitucional en tiempo de guerra o durante alarma, excepción o sitio."
  },

  // --- B1-T02: Cortes Generales y LO 5/2005 Defensa Nacional (7 preguntas) ---
  {
    id: "Q-W3-009",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "Título III CE — Art. 73 Periodos Ordinarios de Sesiones de las Cámaras",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 73.1 de la Constitución Española, las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones. ¿Cuáles son esos dos períodos?",
    opciones: [
      "El primero, de septiembre a diciembre, y el segundo, de febrero a junio.",
      "El primero, de enero a junio, y el segundo, de julio a diciembre.",
      "El primero, de octubre a marzo, y el segundo, de abril a agosto.",
      "Únicamente se reúnen los meses impares del año."
    ],
    correcta: 0,
    referencia: "Art. 73.1 de la Constitución Española",
    explicacion: "¡Pregunta clásica de plazos parlamentarios!: Las Cámaras se reúnen en dos periodos ordinarios de sesiones al año: 1º) de SEPTIEMBRE a DICIEMBRE, y 2º) de FEBRERO a JUNIO (enero, julio y agosto quedan fuera de los periodos ordinarios).",
    pista: "Periodos ordinarios de sesiones (Art. 73.1 CE): 1º Septiembre-Diciembre | 2º Febrero-Junio."
  },
  {
    id: "Q-W3-010",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "Título III CE — Art. 78 Diputación Permanente de cada Cámara",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 78 de la Constitución Española, en cada Cámara habrá una Diputación Permanente que velará por los poderes de las Cámaras cuando éstas no estén reunidas. ¿Por cuántos miembros como mínimo estará compuesta y quién la preside?",
    opciones: [
      "Por un mínimo de veintiún (21) miembros, que representarán a los grupos parlamentarios en proporción a su importancia numérica, y estará presidida por el Presidente de la Cámara respectiva.",
      "Por cincuenta diputados elegidos por sorteo y presidida por el Ministro de la Presidencia.",
      "Por diez miembros del Tribunal Constitucional.",
      "Por los portavoces de los ayuntamientos de capital de provincia."
    ],
    correcta: 0,
    referencia: "Art. 78.1 y 78.2 de la Constitución Española",
    explicacion: "En cada Cámara (Congreso y Senado) existe una Diputación Permanente compuesta por un MÍNIMO DE 21 MIEMBROS en proporción a los grupos parlamentarios y presidida por el Presidente de la Cámara respectiva.",
    pista: "Diputación Permanente (Art. 78 CE) = mínimo 21 miembros + presidida por el Presidente de la Cámara respectiva."
  },
  {
    id: "Q-W3-011",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "Título III CE — Art. 86 Decretos-leyes (Convalidación en 30 días)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 86 de la Constitución Española, en caso de extraordinaria y urgente necesidad, el Gobierno podrá dictar disposiciones legislativas provisionales que tomarán la forma de Decretos-leyes. ¿Qué órgano debe convalidarlos o derogarlos y en qué plazo máximo desde su promulgación?",
    opciones: [
      "El Congreso de los Diputados exclusivamente, en el plazo de los treinta (30) días siguientes a su promulgación.",
      "El Senado y el Congreso conjuntamente en el plazo de dos meses.",
      "El Rey mediante referéndum en el plazo de quince días.",
      "El Tribunal Supremo en el plazo de diez días hábiles."
    ],
    correcta: 0,
    referencia: "Art. 86.2 de la Constitución Española",
    explicacion: "Los Reales Decretos-leyes deberán ser inmediatamente sometidos a debate y votación de totalidad al CONGRESO DE LOS DIPUTADOS (el Senado NO interviene en la convalidación) en el plazo de los TREINTA DÍAS siguientes a su promulgación.",
    pista: "Decretos-leyes (Art. 86 CE): los convalida o deroga SÓLO el Congreso en el plazo de 30 DÍAS."
  },
  {
    id: "Q-W3-012",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "LO 5/2005 — Art. 19 Condiciones de las Misiones en el Exterior",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según el artículo 19 de la Ley Orgánica 5/2005, de la Defensa Nacional, para que las Fuerzas Armadas puedan realizar misiones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, se requerirá el cumplimiento de tres condiciones:",
    opciones: [
      "1ª Que se realicen por petición expresa del Gobierno del Estado en cuyo territorio se desarrollen o estén autorizadas en resoluciones del Consejo de Seguridad de la ONU o acordadas por organizaciones internacionales de las que España forme parte (UE/OTAN); 2ª Que cumplan con fines defensivos, humanitarios, de estabilización o de mantenimiento de la paz; y 3ª Que sean conformes con la Carta de las Naciones Unidas y no contradigan los principios del derecho internacional convencional.",
      "Que tengan ánimo de lucro comercial y anexión territorial.",
      "Que sean solicitadas por empresas privadas extranjeras sin mandato internacional.",
      "Que duren menos de cuarenta y ocho horas."
    ],
    correcta: 0,
    referencia: "Art. 19 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "El Art. 19 de la LO 5/2005 exige estas 3 condiciones cumulativas de legitimidad internacional para las misiones en el exterior, además de la autorización previa del Congreso de los Diputados (Art. 17).",
    pista: "Art. 19 LO 5/2005: Petición del Estado o resolución ONU/UE/OTAN + fines de paz/humanitarios/defensivos + conformidad con la Carta de la ONU."
  },
  {
    id: "Q-W3-013",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "LO 5/2005 — Art. 12.3 Nombramiento del JEMAD",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 12.3 de la Ley Orgánica 5/2005, de la Defensa Nacional, ¿cómo se realiza el nombramiento del Jefe de Estado Mayor de la Defensa (JEMAD)?",
    opciones: [
      "Por Real Decreto acordado en Consejo de Ministros, a propuesta del Presidente del Gobierno, oído el Ministro de Defensa.",
      "Por Orden Ministerial del Ministro de Defensa, a propuesta del JEME.",
      "Por votación del Congreso de los Diputados por mayoría de tres quintos.",
      "Automáticamente por escalafón al cumplir los sesenta años."
    ],
    correcta: 0,
    referencia: "Art. 12.3 y Art. 13.3 de la LO 5/2005",
    explicacion: "¡Contraste de examen!: El JEMAD es nombrado por Real Decreto a propuesta del PRESIDENTE DEL GOBIERNO, oído el Ministro de Defensa (Art. 12.3). En cambio, los Jefes de Estado Mayor de los Ejércitos (JEME, AJEMA, JEMA) son nombrados por Real Decreto a propuesta del MINISTRO DE DEFENSA, oído el JEMAD y previa deliberación del Consejo de Ministros (Art. 13.3).",
    pista: "JEMAD = propone el Presidente del Gobierno (oído el Ministro). JEME/AJEMA/JEMA = propone el Ministro de Defensa (oído el JEMAD)."
  },
  {
    id: "Q-W3-014",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "LO 5/2005 — Art. 28 Control Parlamentario en Misiones de Máxima Urgencia",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 17.3 de la Ley Orgánica 5/2005, en las misiones en el exterior que requieran una respuesta rápida o inmediata a determinadas situaciones, cuando por razones de máxima urgencia no fuera posible realizar la consulta previa al Congreso de los Diputados:",
    opciones: [
      "El Gobierno someterá al Congreso de los Diputados lo antes posible la decisión que haya adoptado para la ratificación, en su caso.",
      "Queda prohibido el envío de tropas aunque peligre la vida de ciudadanos españoles.",
      "La autorización pasa a ser competencia exclusiva de los Alcaldes.",
      "No habrá que informar nunca al Congreso de los Diputados."
    ],
    correcta: 0,
    referencia: "Art. 17.3 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "Por regla general, la autorización del Congreso es PREVIA (Art. 17.1). Pero en supuestos de respuesta rápida/inmediata por razones de máxima urgencia (ej. evacuación NEO de ciudadanos españoles), el Gobierno puede decidir el envío y someterlo 'lo antes posible' al Congreso para su RATIFICACIÓN (Art. 17.3).",
    pista: "Máxima urgencia (Art. 17.3 LO 5/2005): el Gobierno decide y lo somete LO ANTES POSIBLE al Congreso para su RATIFICACIÓN."
  },
  {
    id: "Q-W3-015",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Las Cortes Generales (Título III CE) y LO 5/2005 de la Defensa Nacional",
    apartado: "LO 5/2005 — Art. 27 Reales Ordenanzas y Reglas de Comportamiento",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 27 de la Ley Orgánica 5/2005, las reglas esenciales que definen el comportamiento del militar están establecidas en la Ley de la Carrera Militar y se desarrollan mediante Real Decreto en:",
    opciones: [
      "Las Reales Ordenanzas para las Fuerzas Armadas.",
      "El Código Civil.",
      "El Reglamento General de Circulación.",
      "El Estatuto de los Trabajadores."
    ],
    correcta: 0,
    referencia: "Art. 27 de la LO 5/2005 y Art. 4 de la Ley 39/2007",
    explicacion: "Las reglas esenciales de comportamiento del militar (las 16 reglas del Art. 4 de la Ley 39/2007) constituyen el código de conducta y se desarrollan por Real Decreto en las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009).",
    pista: "Desarrollo reglamentario de las reglas de comportamiento = Reales Ordenanzas para las FAS (RD 96/2009)."
  },

  // --- B1-T03: Ley 40/2015 LRJSP (7 preguntas) ---
  {
    id: "Q-W3-016",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Órganos Colegiados — Convocatoria y Quórum de Constitución (Art. 17)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17.2 de la Ley 40/2015 (LRJSP), para la válida constitución de un órgano colegiado, a efectos de la celebración de sesiones, deliberaciones y toma de acuerdos, se requerirá la asistencia, presencial o a distancia:",
    opciones: [
      "Del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros.",
      "Únicamente del Secretario del órgano sin necesidad de Presidente.",
      "Del cien por cien de los miembros titulares en primera y segunda convocatoria.",
      "De una décima parte de los vocales."
    ],
    correcta: 0,
    referencia: "Art. 17.2 de la Ley 40/2015 (LRJSP)",
    explicacion: "Quórum de constitución de los órganos colegiados (Art. 17.2 Ley 40/2015): asistencia (presencial o a distancia) de Presidente + Secretario (o quienes les suplan) + al menos la MITAD de sus miembros. Y los acuerdos se adoptan por MAYORÍA DE VOTOS (Art. 17.5).",
    pista: "Quórum órgano colegiado (Art. 17.2 Ley 40/2015) = Presidente + Secretario + al menos la MITAD de sus miembros."
  },
  {
    id: "Q-W3-017",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Órganos Colegiados — Quién NO tiene voto cuando no es miembro (Art. 16)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 16 y al artículo 19.4 de la Ley 40/2015 (LRJSP), en los órganos colegiados de la Administración General del Estado, la designación del Secretario podrá recaer en un miembro del propio órgano o en una persona al servicio de la Administración Pública correspondiente. Si el Secretario NO es miembro del órgano colegiado, ¿qué derechos tendrá en las sesiones?",
    opciones: [
      "Asistirá a las reuniones con voz pero sin voto.",
      "Tendrá voz y voto de calidad para dirimir los empates.",
      "No podrá asistir a las sesiones ni redactar el acta.",
      "Podrá vetar los acuerdos del Presidente."
    ],
    correcta: 0,
    referencia: "Art. 16 y Art. 19.4 de la Ley 40/2015 (LRJSP)",
    explicacion: "En los órganos colegiados (Art. 19.4 Ley 40/2015): si el Secretario es un miembro del propio órgano, tiene voz y voto; pero si es un funcionario al servicio de la Administración que NO ostenta la condición de miembro del órgano, asiste con VOZ PERO SIN VOTO.",
    pista: "Secretario de órgano colegiado: si es miembro = voz y voto; si NO es miembro = CON VOZ PERO SIN VOTO."
  },
  {
    id: "Q-W3-018",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Abstención y Recusación — Plazo para resolver la recusación (Art. 24)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 24 de la Ley 40/2015 (LRJSP), planteada por escrito la recusación de una autoridad o empleado público, en el día siguiente el recusado manifestará a su inmediato superior si se da o no en él la causa alegada. Si el recusado NIEGA la causa de recusación, ¿en qué plazo resolverá el superior y qué recurso cabe contra dicha resolución?",
    opciones: [
      "El superior resolverá en el plazo de tres días, previos los informes y comprobaciones que considere oportunos, y contra las resoluciones adoptadas en esta materia no cabrá recurso, sin perjuicio de alegar la recusación al interponer el recurso que proceda contra el acto que ponga fin al procedimiento.",
      "El superior resolverá en el plazo de seis meses y cabe recurso de casación directo.",
      "El propio recusado dicta sentencia absolutoria en el plazo de un año.",
      "Se archiva automáticamente el expediente principal."
    ],
    correcta: 0,
    referencia: "Art. 24.4 y 24.5 de la Ley 40/2015 (LRJSP)",
    explicacion: "Plazos del incidente de recusación (Art. 24 Ley 40/2015): 1) Al DÍA SIGUIENTE el recusado manifiesta a su superior si admite o niega la causa (si la admite, el superior lo sustituye acto seguido); 2) Si la niega, el superior resuelve en TRES DÍAS; 3) Contra la resolución de recusación NO CABE RECURSO autónomo (se puede alegar al recurrir la resolución final).",
    pista: "Recusación (Art. 24 Ley 40/2015): 1 día para que el recusado se pronuncie + 3 DÍAS para que resuelva el superior + NO cabe recurso directo."
  },
  {
    id: "Q-W3-019",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Delegación de Firma vs Encomienda de Gestión (Arts. 11 y 12)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare el régimen de publicación oficial entre la 'Encomienda de gestión' (artículo 11) y la 'Delegación de firma' (artículo 12) de la Ley 40/2015 (LRJSP):",
    opciones: [
      "La encomienda de gestión requiere publicación en el Boletín Oficial correspondiente para su eficacia, mientras que la delegación de firma NO requiere publicación para su validez.",
      "La delegación de firma requiere publicación obligatoria en el BOE y la encomienda de gestión es secreta.",
      "Ambas figuras transfieren la titularidad de la competencia al órgano inferior.",
      "Ninguna de las dos existe en la Administración General del Estado."
    ],
    correcta: 0,
    referencia: "Arts. 11.3 y 12.2 de la Ley 40/2015 (LRJSP)",
    explicacion: "Tabla de oro del Tema 3 sobre publicación en Boletín Oficial: REQUIEREN PUBLICACIÓN = Delegación de competencias (Art. 9), Encomienda de gestión (Art. 11) y Suplencia si se designa suplente expreso (Art. 13). NO REQUIEREN PUBLICACIÓN = Avocación (Art. 10) y Delegación de firma (Art. 12).",
    pista: "NO se publican en el BOE: Avocación (Art. 10) y Delegación de firma (Art. 12). SÍ se publican: Delegación de competencias (Art. 9) y Encomienda de gestión (Art. 11)."
  },
  {
    id: "Q-W3-020",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Estructura de los Ministerios — Órganos Superiores y Directivos (Art. 55)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 55 de la Ley 40/2015 (LRJSP), en la organización central de la Administración General del Estado, ¿cuál de los siguientes NO tiene la condición de órgano directivo (por ser funcionario de nivel inferior a Subdirector General)?",
    opciones: [
      "Los Jefes de Servicio y Jefes de Sección.",
      "Los Subsecretarios y Secretarios Generales.",
      "Los Secretarios Generales Técnicos y Directores Generales.",
      "Los Subdirectores Generales."
    ],
    correcta: 0,
    referencia: "Art. 55.3 de la Ley 40/2015 (LRJSP)",
    explicacion: "En la organización central (Art. 55.3 Ley 40/2015): Órganos Superiores = Ministros y Secretarios de Estado. Órganos Directivos = Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales y Subdirectores Generales. Por debajo de Subdirector General (Jefes de Área, Servicio, Sección o Negociado) son unidades administrativas, no órganos directivos.",
    pista: "El escalón más bajo de los Órganos Directivos centrales es el SUBDIRECTOR GENERAL."
  },
  {
    id: "Q-W3-021",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Creación, Modificación y Supresión de Órganos (Art. 59)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 59 de la Ley 40/2015 (LRJSP), ¿mediante qué norma se crean, modifican y suprimen las Subsecretarías, las Secretarías Generales, las Secretarías Generales Técnicas, las Direcciones Generales y las Subdirecciones Generales?",
    opciones: [
      "Por Real Decreto del Consejo de Ministros, a iniciativa del Ministro interesado y a propuesta del Ministro de Hacienda y Función Pública (o Transformación Digital y de la Función Pública).",
      "Por Ley Orgánica aprobada por las Cortes Generales.",
      "Por simple resolución verbal del Subsecretario.",
      "Por Decreto-ley en todos los casos."
    ],
    correcta: 0,
    referencia: "Art. 59.1 de la Ley 40/2015 (LRJSP)",
    explicacion: "Diferencia clave de creación de órganos (Arts. 57 y 59 Ley 40/2015): 1) Ministerios y Secretarías de Estado = por Real Decreto del PRESIDENTE DEL GOBIERNO; 2) Subsecretarías, Secretarías Generales, SGT, Direcciones Generales y Subdirecciones Generales = por Real Decreto del CONSEJO DE MINISTROS; 3) Órganos inferiores a Subdirección General = por ORDEN MINISTERIAL.",
    pista: "Ministerios/SE = RD del Presidente del Gobierno. De Subsecretaría a Subdirección General = RD del Consejo de Ministros. Inferiores a Subdirección = Orden Ministerial."
  },
  {
    id: "Q-W3-022",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público (LRJSP)",
    apartado: "Delegados y Subdelegados del Gobierno (Arts. 72 a 75)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 72 y 74 de la Ley 40/2015 (LRJSP), ¿qué rango administrativo tienen los Delegados del Gobierno en las Comunidades Autónomas y los Subdelegados del Gobierno en las provincias, respectivamente?",
    opciones: [
      "Los Delegados del Gobierno tienen rango de Subsecretario, y los Subdelegados del Gobierno tienen nivel de Subdirector General.",
      "Ambos tienen rango de Ministro.",
      "Los Delegados tienen rango de Director General y los Subdelegados de Secretario de Estado.",
      "Los Delegados son elegidos por los Alcaldes y no son órganos directivos."
    ],
    correcta: 0,
    referencia: "Arts. 69, 72 y 74 de la Ley 40/2015 (LRJSP)",
    explicacion: "En la Administración Periférica del Estado: 1) DELEGADOS DEL GOBIERNO en las CC.AA. = rango de SUBSECRETARIO (nombrados por RD del Consejo de Ministros a propuesta del Presidente del Gobierno); 2) SUBDELEGADOS DEL GOBIERNO en las provincias = nivel de SUBDIRECTOR GENERAL (nombrados por el Delegado del Gobierno por libre designación entre funcionarios A1).",
    pista: "Delegado del Gobierno = rango de SUBSECRETARIO. Subdelegado del Gobierno = nivel de SUBDIRECTOR GENERAL."
  },

  // --- B1-T04: Ministerio de Defensa RD 205/2024 (7 preguntas) ---
  {
    id: "Q-W3-023",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "Secretaría de Estado de Defensa (SEDEF) — Dirección General de Armamento y Material (DGAM)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Conforme al Real Decreto 205/2024, ¿de qué órgano superior del Ministerio de Defensa depende la Dirección General de Armamento y Material (DGAM)?",
    opciones: [
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Subsecretaría de Defensa (SUBDEF).",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Del Estado Mayor del Ejército de Tierra (EME)."
    ],
    correcta: 0,
    referencia: "Art. 4 del Real Decreto 205/2024",
    explicacion: "De la Secretaría de Estado de Defensa (SEDEF) dependen los 4 grandes centros directivos económico-industriales y tecnológicos: 1) DGAM (Armamento y Material), 2) DIGENECO (Asuntos Económicos), 3) DIGENIN (Infraestructura) y 4) DIGEID (Estrategia e Innovación de la Industria de Defensa, creada en 2024), además del CESTIC.",
    pista: "Las 4 Direcciones de la SEDEF: DGAM + DIGENECO + DIGENIN + DIGEID (+ CESTIC)."
  },
  {
    id: "Q-W3-024",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "Subsecretaría de Defensa (SUBDEF) — Asesoría Jurídica General e Intervención General",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 205/2024, la Asesoría Jurídica General de la Defensa y la Intervención General de la Defensa (donde se encuadran los Cuerpos Comunes Jurídico Militar y de Intervención), ¿a qué órgano directivo del Ministerio están adscritas orgánicamente?",
    opciones: [
      "A la Subsecretaría de Defensa (SUBDEF).",
      "Al Estado Mayor de la Defensa (EMAD).",
      "A la Secretaría General de Política de Defensa (SEGENPOL).",
      "Al Cuarto Militar de la Casa de S.M. el Rey."
    ],
    correcta: 0,
    referencia: "Art. 8 del Real Decreto 205/2024",
    explicacion: "En la Subsecretaría de Defensa (SUBDEF) se encuadran: la Secretaría General Técnica (SGT), la DIGENPER (Personal), la DIGEREM (Reclutamiento y Enseñanza Militar), la Asesoría Jurídica General de la Defensa, la Intervención General de la Defensa y la Inspección General de Sanidad de la Defensa (IGESAN).",
    pista: "Todos los Cuerpos Comunes (Jurídico, Intervención, Sanidad/IGESAN y Músicas) dependen de la SUBSECRETARÍA DE DEFENSA (SUBDEF)."
  },
  {
    id: "Q-W3-025",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "Secretaría General de Política de Defensa (SEGENPOL) — DIGENPOL",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 205/2024, ¿qué Dirección General depende directamente de la Secretaría General de Política de Defensa (SEGENPOL) y qué otros órganos están adscritos a ella?",
    opciones: [
      "Depende la Dirección General de Política de Defensa (DIGENPOL), y dependen asimismo la División de Coordinación y Estudios de Seguridad y Defensa (DICOES), el Instituto Español de Estudios Estratégicos (IEEE) y las Agregadurías de Defensa en las misiones diplomáticas.",
      "Depende la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "Depende el Instituto Social de las Fuerzas Armadas (ISFAS).",
      "Depende el Instituto Nacional de Técnica Aeroespacial (INTA)."
    ],
    correcta: 0,
    referencia: "Arts. 15 y 16 del Real Decreto 205/2024",
    explicacion: "La SEGENPOL tiene rango de Subsecretaría y de ella depende un único centro directivo con rango de Dirección General: la DIGENPOL (Dirección General de Política de Defensa), además de la DICOES, el IEEE, la Comisión Española de Historia Militar (CEHISMI) y las Agregadurías de Defensa.",
    pista: "SEGENPOL = DIGENPOL + DICOES + IEEE + Agregadurías de Defensa."
  },
  {
    id: "Q-W3-026",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "Organismos Autónomos del Ministerio de Defensa — INTA, ISFAS e INVIED",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Relacione correctamente los tres grandes organismos autónomos del Ministerio de Defensa (INTA, ISFAS e INVIED) con el órgano superior o directivo al que están adscritos según el Real Decreto 205/2024:",
    opciones: [
      "El INTA está adscrito a la Secretaría de Estado de Defensa (SEDEF), mientras que el ISFAS y el INVIED O.A. están adscritos a la Subsecretaría de Defensa (SUBDEF).",
      "Los tres están adscritos al Estado Mayor de la Defensa (EMAD).",
      "El ISFAS depende de la SEDEF y el INTA depende de la SEGENPOL.",
      "El INVIED depende del Ministerio de Vivienda y el ISFAS del Ministerio de Sanidad."
    ],
    correcta: 0,
    referencia: "Arts. 4 y 8 del Real Decreto 205/2024",
    explicacion: "¡Asociación clave de examen!: INTA (Instituto Nacional de Técnica Aeroespacial 'Esteban Terradas') -> adscrito a la SEDEF. ISFAS (Instituto Social de las FAS) e INVIED O.A. (Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa) -> adscritos a la SUBDEF.",
    pista: "INTA = SEDEF. ISFAS e INVIED = SUBDEF."
  },
  {
    id: "Q-W3-027",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "Reforma RD 268/2025 y Órganos dependientes directamente del Ministro",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el Real Decreto 205/2024, ¿de quién depende directamente la Dirección de Comunicación Institucional de la Defensa (DIRCOMDEF) y el Gabinete del Ministro?",
    opciones: [
      "De la persona titular del Ministerio de Defensa.",
      "Del Jefe de Estado Mayor del Ejército del Aire y del Espacio (JEMA).",
      "Del Director General de Armamento y Material (DGAM).",
      "Del Secretario General Técnico (SGT)."
    ],
    correcta: 0,
    referencia: "Art. 1.7 y Art. 2 del Real Decreto 205/2024",
    explicacion: "Dependen directamente de la persona titular del Ministerio de Defensa: su Gabinete, el Gabinete Técnico y la Dirección de Comunicación Institucional de la Defensa (DIRCOMDEF), además de la Guardia Civil en los términos de su ley reguladora y el CNI.",
    pista: "Gabinete, Gabinete Técnico y DIRCOMDEF dependen directamente del MINISTRO DE DEFENSA."
  },
  {
    id: "Q-W3-028",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "DIGEREM vs DIGENPER en la Subsecretaría de Defensa",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro de la Subsecretaría de Defensa (RD 205/2024), ¿a cuál de sus Direcciones Generales le corresponde planificar y coordinar las funciones de acceso, reclutamiento, enseñanza militar y desarrollo profesional de los reservistas voluntarios?",
    opciones: [
      "A la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "A la Dirección General de Asuntos Económicos (DIGENECO).",
      "A la Dirección General de Política de Defensa (DIGENPOL).",
      "Al Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC)."
    ],
    correcta: 0,
    referencia: "Art. 11 del Real Decreto 205/2024",
    explicacion: "No confundir DIGENPER con DIGEREM: La DIGEREM (Dirección General de Reclutamiento y Enseñanza Militar) gestiona el reclutamiento, ingreso, enseñanza militar, reservistas voluntarios y salidas profesionales (SAPROMIL). La DIGENPER gestiona el régimen de personal en servicio activo, retribuciones, destinos, evaluaciones y acción social.",
    pista: "Reclutamiento, enseñanza militar y reservistas = DIGEREM. Gestión de personal, destinos, retribuciones y UPA = DIGENPER."
  },
  {
    id: "Q-W3-029",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura Orgánica Básica del Ministerio de Defensa",
    apartado: "Secretaría General Técnica (SGT) — Publicación del BOD",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Conforme al artículo 9 del Real Decreto 205/2024, ¿qué centro directivo de la Subsecretaría de Defensa tiene atribuida la edición y publicación del Boletín Oficial del Ministerio de Defensa (BOD), las publicaciones de defensa y la tramitación de los recursos administrativos?",
    opciones: [
      "La Secretaría General Técnica (SGT).",
      "El Mando de Operaciones (MOPS).",
      "La Dirección General de Infraestructura (DIGENIN).",
      "El Centro de Inteligencia de las Fuerzas Armadas (CIFAS)."
    ],
    correcta: 0,
    referencia: "Art. 9 del Real Decreto 205/2024",
    explicacion: "La Secretaría General Técnica (SGT), dependiente de la Subsecretaría de Defensa, es el órgano encargado de la producción normativa, tramitación de recursos administrativos, archivos/bibliotecas militares y edición del Boletín Oficial del Ministerio de Defensa (BOD).",
    pista: "Edición del BOD, normativa, archivos y recursos administrativos = Secretaría General Técnica (SGT) en la SUBDEF."
  },

  // --- B1-T05: Organización Básica de las FAS RD 521/2020 y Orden DEF/710/2020 (7 preguntas) ---
  {
    id: "Q-W3-030",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "Mando Conjunto del Ciberespacio (MCCE) — Cometido",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el Real Decreto 521/2020 y la Orden DEF/710/2020, dentro de la estructura del Estado Mayor de la Defensa (EMAD), ¿cuál es el órgano responsable del planeamiento, dirección, coordinación, control y ejecución de las acciones conducentes a asegurar la libertad de acción de las Fuerzas Armadas en el ámbito ciberespacial?",
    opciones: [
      "El Mando Conjunto del Ciberespacio (MCCE).",
      "El Centro Superior de Estudios de la Defensa Nacional (CESEDEN).",
      "El Mando de Apoyo Logístico del Ejército (MALE).",
      "El Instituto Hidrográfico de la Marina."
    ],
    correcta: 0,
    referencia: "Art. 15 del Real Decreto 521/2020 y Orden DEF/710/2020",
    explicacion: "El Mando Conjunto del Ciberespacio (MCCE, antiguo MCCD) es el órgano del EMAD responsable de las operaciones militares en el ámbito ciberespacial (ciberdefensa militar).",
    pista: "Operaciones militares en el ámbito ciberespacial (EMAD) = Mando Conjunto del Ciberespacio (MCCE)."
  },
  {
    id: "Q-W3-031",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "Centro de Inteligencia de las Fuerzas Armadas (CIFAS)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 16 del Real Decreto 521/2020, el Centro de Inteligencia de las Fuerzas Armadas (CIFAS) es el órgano del EMAD responsable de facilitar al Ministro de Defensa, a través del JEMAD, y a las autoridades militares la inteligencia militar necesaria para alertar sobre situaciones de interés militar. En materia de inteligencia conjunta y estratégica, el CIFAS es:",
    opciones: [
      "Único y conjunto para todas las Fuerzas Armadas, dirigiendo funcionalmente el Sistema de Inteligencia de las Fuerzas Armadas (SIFAS).",
      "Un órgano civil dependiente del Ministerio del Interior.",
      "Una sección interna del Regimiento de Infantería.",
      "Un tribunal militar de apelación."
    ],
    correcta: 0,
    referencia: "Art. 16 del Real Decreto 521/2020",
    explicacion: "El CIFAS está encuadrado en el EMAD (bajo dependencia del JEMAD), es el órgano único de inteligencia militar conjunta/estratégica para las FAS y dirige funcionalmente el Sistema de Inteligencia de las Fuerzas Armadas (SIFAS).",
    pista: "CIFAS (en el EMAD) = único en inteligencia militar conjunta y dirige el SIFAS."
  },
  {
    id: "Q-W3-032",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "Mandos Operativos Permanentes de las FAS (MOT, MOM, MOA, MOESPA, MOC)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura operativa permanente de las Fuerzas Armadas bajo el mando del JEMAD (conducida a través del MOPS), ¿cuáles son los cinco Mandos Operativos Permanentes encargados de las operaciones de presencia, vigilancia y disuasión en los espacios de soberanía?",
    opciones: [
      "El Mando Operativo Terrestre (MOT), el Mando Operativo Marítimo (MOM), el Mando Operativo Aéreo (MOA), el Mando Operativo Espacial (MOESPA) y el Mando Operativo Ciberespacial (MOC).",
      "El MAPER, el MALE, el MADOC, la IGE y el EME.",
      "La Guardia Real, la UME, la Legión, la BRIPAC y la Infantería de Marina.",
      "El Congreso, el Senado, el Gobierno, el CGPJ y el Tribunal Constitucional."
    ],
    correcta: 0,
    referencia: "RD 521/2020 y Orden DEF/710/2020",
    explicacion: "Los 5 Mandos Operativos Permanentes de la estructura operativa corresponden a los 5 ámbitos de operación: 1) MOT (Terrestre - su Comandante CMOT suele ser el GEJMCANA), 2) MOM (Marítimo - ALMART), 3) MOA (Aéreo - GJMACOM), 4) MOESPA (Espacial) y 5) MOC (Ciberespacial - CMCCE).",
    pista: "5 Mandos Operativos Permanentes = MOT + MOM + MOA + MOESPA + MOC."
  },
  {
    id: "Q-W3-033",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "CESEDEN y ESFAS — Enseñanza de Altos Estudios de la Defensa",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro del Centro Superior de Estudios de la Defensa Nacional (CESEDEN), órgano conjunto encuadrado en el EMAD, ¿qué escuela es el centro docente militar responsable de impartir los cursos de actualización para el desempeño de los cometidos de Oficial General y el Curso de Estado Mayor de las Fuerzas Armadas (CEMFAS)?",
    opciones: [
      "La Escuela Superior de las Fuerzas Armadas (ESFAS).",
      "La Academia General Básica de Suboficiales (AGBS).",
      "El Centro de Formación de Tropa (CEFOT).",
      "El Instituto de Historia y Cultura Militar."
    ],
    correcta: 0,
    referencia: "Orden DEF/710/2020 (Estructura del EMAD y CESEDEN)",
    explicacion: "En el CESEDEN (encuadrado orgánicamente en el EMAD) se integra la ESFAS (Escuela Superior de las Fuerzas Armadas), que imparte el Curso de Estado Mayor de las FAS (CEMFAS) y el curso de ascenso a Oficial General.",
    pista: "CESEDEN (en el EMAD) -> incluye la ESFAS (Curso de Estado Mayor CEMFAS y curso de Oficial General)."
  },
  {
    id: "Q-W3-034",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "Capacidad Operativa y Generación de Fuerzas (Transferencia de Autoridad TOA)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 521/2020, ¿mediante qué acto formal pasan las unidades de la Fuerza de los Ejércitos y la Armada de la estructura orgánica (bajo el JEME, AJEMA o JEMA) a la estructura operativa (bajo el mando del JEMAD)?",
    opciones: [
      "Mediante la transferencia de autoridad (TOA).",
      "Mediante una encomienda de gestión publicada en el BOE.",
      "Mediante un recurso de alzada ante la Subsecretaría.",
      "Mediante la disolución de la unidad de origen."
    ],
    correcta: 0,
    referencia: "Art. 6 del Real Decreto 521/2020",
    explicacion: "Las unidades son preparadas por su Ejército (Estructura Orgánica: JEME, AJEMA, JEMA) y se integran en las organizaciones operativas del JEMAD (Estructura Operativa) mediante la TRANSFERENCIA DE AUTORIDAD (TOA - Transfer of Authority).",
    pista: "Paso de Estructura Orgánica (Ejércitos) a Estructura Operativa (JEMAD) = Transferencia de Autoridad (TOA)."
  },
  {
    id: "Q-W3-035",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "Jefatura Conjunta de Sanidad (JECOSAN) en el EMAD",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Conforme a la Orden DEF/710/2020, por la que se desarrolla la organización básica del Estado Mayor de la Defensa, ¿en qué órgano del EMAD se encuadra la Jefatura Conjunta de Sanidad (JECOSAN) para el apoyo sanitario a las operaciones?",
    opciones: [
      "En el Mando de Operaciones (MOPS) / estructura del EMAD para el planeamiento y conducción del apoyo sanitario operativo.",
      "En el Ministerio de Sanidad civil.",
      "En la Guardia Real.",
      "En el Tribunal Militar Central."
    ],
    correcta: 0,
    referencia: "Orden DEF/710/2020 (EMAD)",
    explicacion: "Mientras que la IGESAN (Inspección General de Sanidad de la Defensa) depende de la Subsecretaría de Defensa en el Órgano Central, en el ámbito operativo conjunto del EMAD existe el apoyo sanitario operativo a las operaciones conjuntas.",
    pista: "Sanidad en el Órgano Central = IGESAN (SUBDEF). Sanidad en el Ejército de Tierra = DISAN (MAPER). Sanidad operativa conjunta = EMAD/MOPS."
  },
  {
    id: "Q-W3-036",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas y EMAD",
    apartado: "Unidad Militar de Emergencias (UME) — Dependencia orgánica y operativa",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 521/2020 y el Real Decreto 205/2024, la Unidad Militar de Emergencias (UME) es una fuerza conjunta permanente de las Fuerzas Armadas. ¿De quién depende orgánicamente y quién ordena su intervención operativa en emergencias?",
    opciones: [
      "Depende orgánicamente de la persona titular del Ministerio de Defensa, y operativamente del JEMAD cuando actúa en operaciones militares o de la persona titular del Ministerio de Defensa en supuestos de emergencia nacional.",
      "Depende orgánica y operativamente del Jefe de Estado Mayor del Ejército de Tierra (JEME).",
      "Es un cuerpo civil dependiente de las Comunidades Autónomas.",
      "Depende de la Secretaría General Técnica."
    ],
    correcta: 0,
    referencia: "Art. 2 del RD 205/2024 y RD 521/2020",
    explicacion: "¡Trampa muy frecuente!: La UME NO pertenece al Ejército de Tierra ni depende del JEME; es una fuerza CONJUNTA que depende orgánicamente de forma directa del MINISTRO DE DEFENSA.",
    pista: "UME = Fuerza Conjunta dependiente orgánicamente del MINISTRO DE DEFENSA (no del JEME)."
  },

  // --- B1-T06: Instrucción 14/2021 ET, Armada y Ejército del Aire y del Espacio (8 preguntas) ---
  {
    id: "Q-W3-037",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Cuartel General del ET — Gabinete del JEME e IHCM",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021, por la que se desarrolla la organización del Ejército de Tierra, ¿cuáles son los órganos que integran el Cuartel General del Ejército de Tierra (CGET)?",
    opciones: [
      "El Estado Mayor del Ejército (EME), el Gabinete del JEME, el Instituto de Historia y Cultura Militar (IHCM), la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT) y el Regimiento de Infantería 'Inmemorial del Rey' n.º 1 (además de la Asesoría Jurídica e Intervención Delegada).",
      "La Fuerza Terrestre (FUTER), el Mando de Canarias (MCANA) y el CGTAD.",
      "El MAPER, el MALE, el MADOC y la IGE.",
      "La Flota y el Mando Aéreo de Combate (MACOM)."
    ],
    correcta: 0,
    referencia: "Apartado Quinto de la Instrucción 14/2021, del JEME",
    explicacion: "El Cuartel General del Ejército de Tierra (CGET) agrupa: EME, Gabinete del JEME, JCISAT, Instituto de Historia y Cultura Militar (IHCM), Regimiento 'Inmemorial del Rey' n.º 1, Asesoría Jurídica del ET e Intervención Delegada Central.",
    pista: "CGET = EME + Gabinete JEME + JCISAT + IHCM + Regimiento Inmemorial del Rey n.º 1 (+ Asesoría Jurídica)."
  },
  {
    id: "Q-W3-038",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Estado Mayor del Ejército (EME) — SEJEME y Divisiones",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME, el Estado Mayor del Ejército de Tierra (EME) es el principal órgano auxiliar de mando del JEME. ¿Quién es el jefe directo del EME que coordina sus tres Divisiones (Planes, Operaciones y Logística)?",
    opciones: [
      "El Segundo Jefe del Estado Mayor del Ejército (SEJEME).",
      "El General Jefe de la Fuerza Terrestre (GEJFUTER).",
      "El Inspector General del Ejército (IGE).",
      "El Subsecretario de Defensa."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME (Estado Mayor del Ejército)",
    explicacion: "Al frente del EME está el Segundo Jefe del Estado Mayor del Ejército (SEJEME, Teniente General), de quien dependen la Secretaría General del EME y las 3 Divisiones: División de Planes (DIVPLA), División de Operaciones (DIVOPE) y División de Logística (DIVLOG).",
    pista: "EME = dirigido por el SEJEME + Secretaría General + 3 Divisiones (Planes, Operaciones y Logística)."
  },
  {
    id: "Q-W3-039",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Fuerza Terrestre (FUTER) — División 'Castillejos' y División 'San Marcial'",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la Fuerza Terrestre (FUTER) del Ejército de Tierra (Instrucción 14/2021), ¿qué unidades de élite y maniobra se encuadran en la División 'San Marcial' a diferencia de la División 'Castillejos'?",
    opciones: [
      "En la División 'San Marcial' (Burgos) se encuadran la Brigada 'Almogávares' VI de Paracaidistas (BRIPAC), el Mando de Operaciones Especiales (MOE), las Fuerzas Aeromóviles del ET (FAMET) y el Mando de Tropas de Montaña (MTM); mientras que en la División 'Castillejos' (Huesca) se encuadran las Brigadas 'Aragón' I, 'Rey Alfonso XIII' II de La Legión, 'Galicia' VII, 'Guzmán el Bueno' X, 'Extremadura' XI y 'Guadarrama' XII.",
      "La División 'San Marcial' agrupa las Comandancias de Ceuta, Melilla y Baleares.",
      "La División 'Castillejos' pertenece a la Armada Española.",
      "Ambas Divisiones pertenecen al Mando de Apoyo a la Fuerza."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME — Fuerza Terrestre (FUTER)",
    explicacion: "¡Regla infalible para las 2 Divisiones de FUTER!: División 'SAN MARCIAL' (CG en Burgos) = capacidades de respuesta inmediata y específica: BRIPAC VI + MOE + FAMET + Mando de Tropas de Montaña (MTM). División 'CASTILLEJOS' (CG en Huesca) = las 6 Brigadas Polivalentes/Combate (I Aragón, II Legión, VII Brilat, X Córdoba, XI Extremadura y XII Guadarrama).",
    pista: "San Marcial (Burgos) = BRIPAC + MOE + FAMET + Montaña. Castillejos (Huesca) = las 6 Brigadas (I, II Legión, VII, X, XI y XII)."
  },
  {
    id: "Q-W3-040",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Fuerza Terrestre (FUTER) — Mandos de Apoyo al Combate",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Además de las Divisiones 'Castillejos' y 'San Marcial' y la Brigada Logística (BRILOG) y Brigada de Sanidad (BRISAN), ¿qué cinco Mandos de Apoyo al Combate dependen directamente de la Fuerza Terrestre (FUTER)?",
    opciones: [
      "El Mando de Artillería de Campaña (MACA), el Mando de Artillería Antiaérea (MAAA), el Mando de Ingenieros (MING), el Mando de Transmisiones (MATRANS) y el Mando de Apoyo a la Maniobra (MAM).",
      "El MAPER, el MALE, el MADOC, la IGE y la JCISAT.",
      "Las Comandancias Generales de Ceuta, Melilla y Baleares y la BRICAN XVI.",
      "El MACOM, el MAGEN y el MACAN."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME — Fuerza Terrestre (FUTER)",
    explicacion: "Dentro de FUTER (CG en Sevilla), el Mando de Apoyo a la Maniobra (MAM, con CG en A Coruña) agrupa los apoyos de combate y logísticos: MACA, MAAA, MING, MATRANS, BRILOG, BRISAN y Regimiento NBQ 'Valencia' n.º 1 / Regimiento de Inteligencia n.º 1.",
    pista: "Apoyos de FUTER (en el MAM): MACA (Artillería Campaña), MAAA (Antiaérea), MING (Ingenieros), MATRANS (Transmisiones), BRILOG y BRISAN."
  },
  {
    id: "Q-W3-041",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Mando de Adiestramiento y Doctrina (MADOC) — Sede y Direcciones",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME, ¿dónde tiene su sede el Mando de Adiestramiento y Doctrina (MADOC) del Ejército de Tierra y cuáles son sus dos Direcciones?",
    opciones: [
      "Tiene su sede en Granada, y se articula en la Dirección de Investigación, Doctrina, Orgánica y Materiales (DIDOM) y la Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE).",
      "Tiene su sede en Barcelona y se articula en DIACU y DINFR.",
      "Tiene su sede en Sevilla y se articula en Castillejos y San Marcial.",
      "Tiene su sede en Valencia y dirige el NRDC-ESP."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME — MADOC",
    explicacion: "Sedes clave del ET: CGET/MAPER/MALE = Madrid; CGTAD = Valencia (Bétera); FUTER = Sevilla; MCANA = Santa Cruz de Tenerife; MADOC = GRANADA (con DIDOM y DIENADE); IGE = BARCELONA (con DIACU y DINFR).",
    pista: "MADOC = sede en GRANADA + 2 Direcciones: DIDOM (Doctrina/Materiales) y DIENADE (Enseñanza/Adiestramiento)."
  },
  {
    id: "Q-W3-042",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Inspección General del Ejército (IGE) — Sede y Direcciones",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME, la Inspección General del Ejército (IGE), encuadrada en el Apoyo a la Fuerza con sede en el Palacio de Capitanía General de Barcelona, se articula en dos Direcciones:",
    opciones: [
      "La Dirección de Acuartelamiento (DIACU) y la Dirección de Infraestructura (DINFR).",
      "La Dirección de Personal (DIAPER) y la Dirección de Sanidad (DISAN).",
      "La Dirección de Adquisiciones (DIAD) y la Dirección de Integración de Funciones Logísticas (DINFULOG).",
      "La DIDOM y la DIENADE."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME — Inspección General del Ejército (IGE)",
    explicacion: "La IGE (sede en Barcelona) es responsable de la infraestructura, vida en bases/acuartelamientos, prevención de riesgos laborales y representación institucional territorial (SUIGE). Sus 2 Direcciones son DIACU (Acuartelamiento) y DINFR (Infraestructura).",
    pista: "IGE (Barcelona) = DIACU (Acuartelamiento) + DINFR (Infraestructura)."
  },
  {
    id: "Q-W3-043",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Organización de la Armada (Instrucción 15/2021 del AJEMA)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura orgánica de la Armada (RD 521/2020 e Instrucción 15/2021 del AJEMA), ¿quién está al frente de la Fuerza de la Armada y cuáles son sus grandes componentes?",
    opciones: [
      "El Almirante de la Flota (ALFLOT), e integra la Fuerza de Acción Naval, la Fuerza de Acción Marítima (FAM), la Fuerza de Infantería de Marina (FIM), la Flotilla de Aeronaves (FLOAN) y la Flotilla de Submarinos (FLOSUB).",
      "El General Jefe de la Fuerza Terrestre (FUTER).",
      "El Jefe del Mando Aéreo de Combate (MACOM).",
      "El Almirante Jefe de Personal (ALPER)."
    ],
    correcta: 0,
    referencia: "RD 521/2020 e Instrucción 15/2021, del AJEMA",
    explicacion: "En la Armada: La Fuerza es la FLOTA, mandada por el Almirante de la Flota (ALFLOT, con CG en Rota), que integra: Fuerza de Acción Naval, Fuerza de Acción Marítima (FAM, en Cartagena), Fuerza de Infantería de Marina (FIM: Tercio de Armada TEAR, Fuerza de Protección FUPRO y FGNE), Flotilla de Aeronaves (FLOAN) y Flotilla de Submarinos (FLOSUB). Y el Apoyo a la Fuerza de la Armada lo integran: Jefatura de Personal (JEPER), Jefatura de Apoyo Logístico (JAL) y Dirección de Asuntos Económicos.",
    pista: "Fuerza de la Armada = La FLOTA (mandada por ALFLOT: Acción Naval + Acción Marítima FAM + Infantería de Marina FIM + FLOAN + FLOSUB)."
  },
  {
    id: "Q-W3-044",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra (y Armada/EA)",
    apartado: "Organización del Ejército del Aire y del Espacio (Instrucción 6/2024 del JEMA)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la organización del Ejército del Aire y del Espacio (RD 521/2020 e Instrucción del JEMA), ¿cuáles son los Mandos que integran la Fuerza Aeroespacial y cuáles integran el Apoyo a la Fuerza?",
    opciones: [
      "La Fuerza la integran el Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MESPA); y el Apoyo a la Fuerza lo integran el Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALOG) y la Dirección de Asuntos Económicos (DAE).",
      "La Fuerza la integran Castillejos y San Marcial.",
      "La Fuerza la integra la Flota y el Apoyo a la Fuerza lo integra la JAL.",
      "Sólo existe un Mando único en Zaragoza."
    ],
    correcta: 0,
    referencia: "RD 521/2020 y organización del Ejército del Aire y del Espacio",
    explicacion: "En el Ejército del Aire y del Espacio (tras el cambio de denominación por RD 524/2022 y creación del Mando del Espacio en 2023/2024): FUERZA = MACOM (Combate), MAGEN (General), MACAN (Canarias) y MESPA (Mando del Espacio). APOYO A LA FUERZA = MAPER (Personal), MALOG (Apoyo Logístico) y DAE (Asuntos Económicos).",
    pista: "Fuerza EA = MACOM + MAGEN + MACAN + MESPA (Mando del Espacio). Apoyo a la Fuerza EA = MAPER + MALOG + DAE."
  },

  // ==========================================================================
  // BLOQUE 2: JURÍDICO-SOCIAL (B2-T01 a B2-T05) — PRIMERAS 31 PREGUNTAS DE B2
  // ==========================================================================

  // --- B2-T01: Ley 8/2006 Tropa y Marinería y Ley 39/2007 Carrera Militar (7 preguntas) ---
  {
    id: "Q-W3-045",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 8/2006 — Art. 10 Causas de Resolución del Compromiso de Larga Duración",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 10.2 de la Ley 8/2006, de Tropa y Marinería, el militar con compromiso de larga duración podrá resolver dicho compromiso a petición expresa del interesado. ¿Con qué plazo de preaviso debe solicitarlo y qué requisito de tiempo mínimo de servicios cumplidos se exige?",
    opciones: [
      "Preaviso de tres (3) meses y haber cumplido al menos tres años de servicios desde la firma del compromiso de larga duración (o las condiciones de resarcimiento si ha recibido formación específica).",
      "Preaviso de veinticuatro horas sin ningún requisito.",
      "Preaviso de cinco años.",
      "El compromiso de larga duración no puede resolverse nunca a petición propia."
    ],
    correcta: 0,
    referencia: "Art. 10.2 de la Ley 8/2006, de Tropa y Marinería",
    explicacion: "En el Compromiso de Larga Duración (Art. 10.2 Ley 8/2006), la baja a petición expresa del interesado requiere un PREAVISO DE 3 MESES (a diferencia del compromiso inicial, donde solo cabe por causas extraordinarias sobrevenidas o ingreso en otros cuerpos).",
    pista: "Resolución a petición propia del Compromiso de Larga Duración (Art. 10.2 Ley 8/2006) = preaviso de 3 MESES."
  },
  {
    id: "Q-W3-046",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 8/2006 — Art. 16 Tiempo de Servicios para Acceso a la Administración Civil",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 20 de la Ley 8/2006, en las convocatorias para el acceso a cuerpos o escalas de funcionarios o personal laboral de la Administración General del Estado (y Fuerzas y Cuerpos de Seguridad), el tiempo de servicios prestados en las Fuerzas Armadas como militar profesional de tropa y marinería se considerará como:",
    opciones: [
      "Mérito en los sistemas de concurso o concurso-oposición, además de la reserva de plazas para quienes lleven más de 5 años de servicios.",
      "Causa de exclusión automática de las oposiciones civiles.",
      "Antigüedad judicial equivalente a la carrera fiscal.",
      "Exención total de superar cualquier prueba selectiva."
    ],
    correcta: 0,
    referencia: "Arts. 20 y 21 de la Ley 8/2006, de Tropa y Marinería",
    explicacion: "La Ley 8/2006 establece una doble vía de promoción al ámbito civil/policial: 1) El tiempo de servicios en las FAS se valora siempre como MÉRITO en las fases de concurso; 2) Quienes lleven MÁS DE 5 AÑOS de servicios tienen reserva de plazas (mínimo 40% en Guardia Civil, 20% en Policía Nacional y reserva en personal funcionario/laboral de la AGE).",
    pista: "Más de 5 años de servicios (Ley 8/2006) = reserva de plazas (mín. 40% GC, 20% PN) + tiempo de servicios valorado como MÉRITO."
  },
  {
    id: "Q-W3-047",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 39/2007 — Art. 19 Categorías y Empleos Militares",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Fácil"],
    pregunta: "Según los artículos 20 y 21 de la Ley 39/2007, de la carrera militar, ¿cuáles son los empleos que comprende la categoría de Suboficiales y cuáles comprende la categoría de Tropa y Marinería?",
    opciones: [
      "Suboficiales: Sargento, Sargento Primero, Brigada, Subteniente y Suboficial Mayor. Tropa y Marinería: Soldado (o Marinero), Cabo, Cabo Primero y Cabo Mayor.",
      "Suboficiales: Cabo Mayor, Sargento y Alférez. Tropa: Soldado y Cabo.",
      "Suboficiales: Teniente, Capitán y Comandante.",
      "Tropa y Marinería incluye el empleo de Sargento."
    ],
    correcta: 0,
    referencia: "Art. 21 de la Ley 39/2007, de la carrera militar",
    explicacion: "¡Cuidado con los empleos frontera!: El CABO MAYOR es el empleo superior de la categoría de TROPA Y MARINERÍA (no es Suboficial). El SUBOFICIAL MAYOR es el empleo superior de SUBOFICIALES (no es Oficial). Y el ALFÉREZ es empleo de OFICIALES (en enseñanza o reservistas).",
    pista: "Cabo Mayor = Tropa y Marinería. Suboficial Mayor = Suboficiales. Alférez = Oficiales."
  },
  {
    id: "Q-W3-048",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 39/2007 — Art. 101 Clasificación de los Destinos",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 101 de la Ley 39/2007, de la carrera militar, los destinos, según su forma de asignación, son de:",
    opciones: [
      "Libre designación, concurso de méritos y provisión por antigüedad.",
      "Oposición libre, sorteo público y herencia.",
      "Elección, clasificación y antigüedad.",
      "Comisión de servicio e interinidad exclusivamente."
    ],
    correcta: 0,
    referencia: "Art. 101 de la Ley 39/2007, de la carrera militar",
    explicacion: "¡No confundir los sistemas de ASCENSO (Art. 88) con las formas de asignación de DESTINOS (Art. 101)!: DESTINOS (Art. 101) = 1) Libre designación, 2) Concurso de méritos y 3) Provisión por antigüedad (además de poderse asignar en ausencia de peticionarios con carácter forzoso). ASCENSOS (Art. 88) = Elección, Clasificación, Concurso/Concurso-oposición y Antigüedad.",
    pista: "¡Trampa clásica!: Formas de asignar DESTINOS (Art. 101) = Libre designación + Concurso de méritos + Antigüedad. (Elección y Clasificación son sistemas de ASCENSO, no de destino)."
  },
  {
    id: "Q-W3-049",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 39/2007 — Art. 113 Pase a la Situación de Reserva",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 113 de la Ley 39/2007, de la carrera militar, los militares de carrera de las categorías de Oficiales, Suboficiales y Tropa y Marinería (permanentes) pasarán en todo caso a la situación de reserva al cumplir la edad de:",
    opciones: [
      "Sesenta y un (61) años en general, salvo los Oficiales Generales (que pasan por tiempo en el empleo o a los 65 años en el caso de Tenientes Generales/Generales de Ejército) y los de Tropa Permanente que cumplen los requisitos fijados legalmente (58 o 61 años según régimen).",
      "Cuarenta y cinco (45) años para todos los militares de carrera.",
      "Setenta (70) años de edad.",
      "Cincuenta (50) años de edad."
    ],
    correcta: 0,
    referencia: "Art. 113 de la Ley 39/2007, de la carrera militar",
    explicacion: "En la Ley 39/2007 (Art. 113): La edad general de pase a la situación de RESERVA de los militares de carrera es a los 61 AÑOS (y para Tropa Permanente a los 58 años salvo prórroga voluntaria hasta los 61; mientras que el RETIRO por edad es a los 65 AÑOS según el Art. 114).",
    pista: "Militares de carrera: Reserva general = 61 años (Tropa Permanente = 58 años). Retiro por edad (Art. 114) = 65 AÑOS."
  },
  {
    id: "Q-W3-050",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 39/2007 — Art. 121 Expediente de Insuficiencia de Facultades Profesionales",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 120 de la Ley 39/2007, de la carrera militar, como consecuencia de la declaración definitiva de no aptitud para el servicio por insuficiencia de condiciones psicofísicas, el militar de carrera:",
    opciones: [
      "Pasará a retiro si la insuficiencia produce inutilidad permanente para el servicio, o será declarado apto con limitaciones para ocupar determinados destinos si la limitación es menor.",
      "Será expulsado sin derecho a pensión aunque sea en acto de servicio.",
      "Pasará a la situación de excedencia voluntaria por interés particular.",
      "Seguirá ocupando puestos operativos de fuerzas especiales."
    ],
    correcta: 0,
    referencia: "Art. 120 y Art. 114 de la Ley 39/2007, de la carrera militar",
    explicacion: "El expediente de insuficiencia de condiciones psicofísicas (Art. 120 Ley 39/2007) puede concluir con: 1) Apto para el servicio; 2) Apto con limitaciones (APL) para ocupar determinados destinos; o 3) No apto por inutilidad permanente, lo que conlleva el pase a RETIRO (o resolución de compromiso con pensión en temporales).",
    pista: "Expediente psicofísico (Art. 120 Ley 39/2007): Apto | Apto con limitaciones (APL) | Inutilidad permanente -> Retiro."
  },
  {
    id: "Q-W3-051",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Ley 39/2007 — Art. 74 Historial Militar y Hoja de Servicios",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 74 de la Ley 39/2007, de la carrera militar, el documento objetivo en el que se exponen los hechos y circunstancias de cada militar desde su incorporación a las Fuerzas Armadas (y que forma parte de su historial militar junto con la colección de informes personales de calificación IPEC) se denomina:",
    opciones: [
      "Hoja de servicios.",
      "Cartilla de racionamiento.",
      "Libro de familia militar.",
      "Pasaporte diplomático."
    ],
    correcta: 0,
    referencia: "Art. 74 y Art. 75 de la Ley 39/2007, de la carrera militar",
    explicacion: "El Historial Militar (Art. 74 Ley 39/2007, de carácter confidencial) se compone de: 1) La Hoja de servicios, 2) La colección de Informes Personales de Calificación (IPEC), 3) El expediente académico y 4) El expediente de aptitud psicofísica.",
    pista: "4 partes del Historial Militar (Art. 74): Hoja de servicios + Colección de IPEC + Expediente académico + Expediente psicofísico."
  },

  // --- B2-T02: Reales Ordenanzas para las FAS RD 96/2009 (7 preguntas) ---
  {
    id: "Q-W3-052",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Título Preliminar — Art. 8 La Disciplina como factor de cohesión",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 8 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), la disciplina, factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado, será practicada y exigida en las Fuerzas Armadas como:",
    opciones: [
      "Norma de actuación. Tiene su expresión colectiva en el acatamiento a la Constitución y su manifestación individual en el cumplimiento de las órdenes recibidas.",
      "Optativa según la antigüedad del militar.",
      "Exclusiva para el personal de tropa y marinería.",
      "Sustitutiva de las leyes penales y constitucionales."
    ],
    correcta: 0,
    referencia: "Art. 8 del Real Decreto 96/2009 (Reales Ordenanzas) y Regla 6ª Art. 4 Ley 39/2007",
    explicacion: "Definición literal del Art. 8 RROO (que cae todos los años): 'La disciplina, factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado, será practicada y exigida en las Fuerzas Armadas como norma de actuación. Tiene su expresión colectiva en el acatamiento a la Constitución y su manifestación individual en el cumplimiento de las órdenes recibidas'.",
    pista: "Disciplina (Art. 8 RROO): Expresión COLECTIVA = acatamiento a la Constitución | Manifestación INDIVIDUAL = cumplimiento de las órdenes."
  },
  {
    id: "Q-W3-053",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Título I — Art. 22 Espíritu Militar y Tradiciones",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "De acuerdo con el artículo 21 de las Reales Ordenanzas para las Fuerzas Armadas, los miembros de las Fuerzas Armadas se sentirán herederos y depositarios de la tradición militar española. El homenaje a los héroes que la forjaron y a todos los que entregaron su vida por España es:",
    opciones: [
      "Un deber de gratitud y un motivo de estímulo para la continuación de su obra.",
      "Una actividad privada ajena al servicio.",
      "Algo reservado únicamente a las academias de formación.",
      "Una ceremonia facultativa sin valor institucional."
    ],
    correcta: 0,
    referencia: "Art. 21 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "El Art. 21 de las RROO define literalmente el homenaje a los que dieron su vida por España como 'un deber de gratitud y un motivo de estímulo para la continuación de su obra'.",
    pista: "Art. 21 RROO: Homenaje a los caídos por España = 'un deber de gratitud y un motivo de estímulo para la continuación de su obra'."
  },
  {
    id: "Q-W3-054",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Título II — Art. 52 Signos Externos de Disciplina y Saludo Militar",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 52 de las Reales Ordenanzas para las Fuerzas Armadas, el saludo militar constituye expresión sincera de respeto mutuo, disciplina y unión entre todos los miembros de las Fuerzas Armadas. ¿Cómo debe realizarse entre militares?",
    opciones: [
      "El de menor jerarquía (o el más moderno a igualdad de empleo) saludará primero y el superior (o más antiguo) corresponderá en la misma forma, siendo exigible como muestra de compañerismo e integración.",
      "Sólo saluda el Soldado y el Oficial no tiene obligación de devolver el saludo.",
      "El saludo militar está suprimido fuera de los desfiles.",
      "El más antiguo saluda siempre primero al más moderno."
    ],
    correcta: 0,
    referencia: "Art. 52 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "En el saludo militar (Art. 52 RROO), es tan obligatorio efectuarlo por el subordinado como devolverlo/corresponderlo por el superior, siendo signo externo fundamental de disciplina, cortesía militar y unión.",
    pista: "Saludo militar (Art. 52 RROO) = expresión de respeto mutuo, disciplina y unión."
  },
  {
    id: "Q-W3-055",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Título III — Art. 62 Estilo de Mando y Responsabilidad (Art. 58)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 58 de las Reales Ordenanzas para las Fuerzas Armadas ('Carácter irrenunciable de la responsabilidad'), la responsabilidad en el ejercicio del mando militar:",
    opciones: [
      "No es renunciable ni puede ser compartida. Los que ejerzan mando tratarán de inculcar una disciplina basada en el convencimiento. Todo mando tiene el deber de exigir obediencia a sus subordinados y el derecho a que se respete su autoridad, pero no podrá ordenar actos contrarios a las leyes o que constituyan delito.",
      "Se transfiere íntegramente al subordinado en cuanto se le dicta una orden.",
      "Puede renunciarse por escrito cuando la misión sea difícil.",
      "Se comparte a partes iguales con todos los soldados de la unidad."
    ],
    correcta: 0,
    referencia: "Art. 58 del Real Decreto 96/2009 (Reales Ordenanzas) y Regla 9ª Art. 4 Ley 39/2007",
    explicacion: "Fórmula sagrada del Art. 58 RROO y Regla 9ª de comportamiento: 'La responsabilidad en el ejercicio del mando militar NO es renunciable NI puede ser compartida'.",
    pista: "Responsabilidad en el mando (Art. 58 RROO) = NO es renunciable NI puede ser compartida."
  },
  {
    id: "Q-W3-056",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Título IV — Art. 109 Protección de Bienes Culturales y Medio Ambiente en Operaciones",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Según los artículos 99 a 103 de las Reales Ordenanzas para las Fuerzas Armadas (Operaciones de Combate), respecto a los bienes culturales y las instalaciones que contienen fuerzas peligrosas (presas, diques y centrales nucleares):",
    opciones: [
      "El militar respetará y protegerá los bienes culturales y no atacará las obras o instalaciones que contengan fuerzas peligrosas si su destrucción pudiera liberar dichas fuerzas y causar pérdidas importantes en la población civil, salvo en los casos excepcionales previstos por el Derecho Internacional Humanitario.",
      "Serán siempre el primer objetivo prioritario de destrucción en cualquier operación.",
      "Pueden utilizarse los monumentos históricos como polvorines y puestos de mando.",
      "El Derecho Internacional Humanitario no se aplica al Ejército de Tierra."
    ],
    correcta: 0,
    referencia: "Arts. 101 y 102 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "El Título IV de las RROO incorpora el Derecho Internacional de los Conflictos Armados (DICA/DIH): distinción entre combatientes y civiles, protección de heridos/náufragos/personal sanitario y religioso, protección de bienes culturales (Art. 101) y protección de obras con fuerzas peligrosas como presas, diques o centrales nucleares (Art. 102).",
    pista: "Arts. 101 y 102 RROO: Protección de bienes culturales y de instalaciones con fuerzas peligrosas (presas, diques, centrales nucleares)."
  },
  {
    id: "Q-W3-057",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Título IV — Art. 113 Operaciones de Apoyo a Autoridades Civiles en Catástrofes",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Conforme a los artículos 113 a 117 de las Reales Ordenanzas para las Fuerzas Armadas, cuando el militar actúe en operaciones de bienestar de los ciudadanos (catástrofes, calamidades públicas o emergencias) en colaboración con las autoridades civiles y Fuerzas y Cuerpos de Seguridad:",
    opciones: [
      "Pondrá su máximo empeño en asegurar la protección y socorro de la población afectada y colaborará lealmente con las autoridades civiles manteniendo su propia estructura de mando militar.",
      "Asumirá el mando político de los Ayuntamientos afectados.",
      "Actuará a título individual fuera de su cadena de mando militar.",
      "Sustituirá a los jueces de instrucción."
    ],
    correcta: 0,
    referencia: "Arts. 113 a 117 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "En las operaciones de apoyo a autoridades civiles y emergencias, las unidades militares colaboran estrechamente con las autoridades civiles pero actúan siempre encuadradas en su cadena orgánica/operativa de mando militar.",
    pista: "Apoyo a autoridades civiles (RROO): máxima colaboración manteniendo siempre el encuadramiento en la estructura de mando militar."
  },
  {
    id: "Q-W3-058",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Disposición Final — Cuatro Títulos de las Reales Ordenanzas",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Cómo se estructuran las Reales Ordenanzas para las Fuerzas Armadas aprobadas por el Real Decreto 96/2009 (129 artículos)?",
    opciones: [
      "En un Título Preliminar ('Disposiciones generales') y cuatro Títulos numerados: Título I ('Del militar'), Título II ('De la disciplina'), Título III ('De la acción del mando') y Título IV ('De las operaciones').",
      "En diez Libros divididos en mil artículos.",
      "En tres Capítulos dedicados exclusivamente al régimen salarial.",
      "En un único artículo sin títulos."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Estructura de las Reales Ordenanzas)",
    explicacion: "Estructura exacta del RD 96/2009 (129 artículos): Título Preliminar + 4 Títulos: I (Del militar), II (De la disciplina), III (De la acción del mando) y IV (De las operaciones: paz/seguridad, combate y bienestar de los ciudadanos).",
    pista: "RROO (RD 96/2009, 129 arts.): Título Preliminar + 4 Títulos (I Militar, II Disciplina, III Acción del Mando, IV Operaciones)."
  },

  // --- B2-T03: LO 9/2011 Derechos y Deberes de los Miembros de las FAS (7 preguntas) ---
  {
    id: "Q-W3-059",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Derecho de Petición (Art. 15) — Prohibición de Peticiones Colectivas",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 15 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas (en concordancia con el artículo 29.2 de la Constitución), ¿cómo puede ejercer el militar el derecho constitucional de petición?",
    opciones: [
      "Sólo individualmente y con arreglo a lo dispuesto en su legislación específica.",
      "Tanto individual como colectivamente mediante recogida de firmas en los cuarteles.",
      "El militar tiene totalmente prohibido el derecho de petición incluso de forma individual.",
      "Únicamente a través de un sindicato civil."
    ],
    correcta: 0,
    referencia: "Art. 15 de la LO 9/2011 y Art. 29.2 de la Constitución Española",
    explicacion: "Tanto el Art. 29.2 CE como el Art. 15 de la LO 9/2011 establecen que los miembros de las Fuerzas o Institutos armados o de los Cuerpos sometidos a disciplina militar podrán ejercer el derecho de petición SÓLO INDIVIDUALMENTE.",
    pista: "Derecho de petición en las FAS (Art. 29.2 CE y Art. 15 LO 9/2011) = SÓLO INDIVIDUALMENTE (prohibidas las peticiones colectivas)."
  },
  {
    id: "Q-W3-060",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Derecho a la Intimidad y Registro de Taquillas/Efectos Personales (Art. 10)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 10 de la Ley Orgánica 9/2011, el registro personal de los militares, de sus taquillas, efectos y pertenencias que estuvieren en la unidad se realizará cuando existan indicios de la comisión de un hecho delictivo o falta grave o muy grave, o por razones de salud o seguridad, y requerirá:",
    opciones: [
      "El consentimiento del afectado o resolución judicial; no obstante, cuando existan razones de urgencia o necesidad podrá realizarse sin dicho consentimiento en presencia del interesado o, si no fuera posible, de dos testigos.",
      "Que se realice siempre en secreto y sin testigos durante la noche.",
      "Que lo autorice el Alcalde del municipio.",
      "Que se trate únicamente de una falta leve."
    ],
    correcta: 0,
    referencia: "Art. 10.3 de la LO 9/2011",
    explicacion: "El Art. 10.3 LO 9/2011 protege la intimidad en las taquillas y efectos dentro de la unidad: el registro se hará en presencia del interesado o, cuando no pueda asistir, de DOS TESTIGOS, levantándose acta.",
    pista: "Registro de taquillas en la unidad (Art. 10.3 LO 9/2011) = con presencia del interesado o de DOS TESTIGOS."
  },
  {
    id: "Q-W3-061",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Disponibilidad Permanente para el Servicio (Art. 22)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Conforme al artículo 22 de la Ley Orgánica 9/2011, los militares estarán en disponibilidad permanente para el servicio. ¿Cómo se materializa dicha disponibilidad?",
    opciones: [
      "Se adaptará a las características propias del destino y a las circunstancias de la situación, y las exigencias derivadas de ella se conciliarán en lo posible con la vida personal y familiar.",
      "Obliga a vivir las 24 horas de los 365 días del año dentro del acuartelamiento sin permisos ni vacaciones.",
      "Sólo se aplica a los Oficiales Generales.",
      "Exime del cumplimiento de la jornada y horario de trabajo."
    ],
    correcta: 0,
    referencia: "Art. 22 de la LO 9/2011",
    explicacion: "El Art. 22 LO 9/2011 establece el deber de disponibilidad permanente para el servicio, adaptada al destino y situación, conciliándola con la vida personal y familiar salvo que las necesidades del servicio no lo permitan.",
    pista: "Art. 22 LO 9/2011: Disponibilidad permanente adaptada al destino y conciliada con la vida familiar salvo necesidades del servicio."
  },
  {
    id: "Q-W3-062",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Deber de Reserva (Art. 19)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 19 de la Ley Orgánica 9/2011, el militar está sujeto a la legislación general sobre secretos oficiales y materias clasificadas. Además, guardará la debida discreción sobre los hechos o datos no clasificados de los que haya tenido conocimiento por su cargo o función:",
    opciones: [
      "Sin que pueda difundirlos por ningún medio ni hacer uso de la información obtenida para beneficio propio o de terceros o en perjuicio del interés público o del servicio.",
      "Pudiendo publicarlos libremente en sus redes sociales personales si añade una marca de agua.",
      "Pudiendo venderlos a medios de comunicación si ya ha cambiado de destino.",
      "Únicamente durante las horas de guardia."
    ],
    correcta: 0,
    referencia: "Art. 19 de la LO 9/2011",
    explicacion: "El deber de reserva (Art. 19 LO 9/2011) abarca tanto las materias legalmente clasificadas (Secreto/Reservado/Confidencial/Difusión Limitada) como la discreción sobre los asuntos y datos del servicio no clasificados conocidos por razón del cargo.",
    pista: "Deber de reserva (Art. 19 LO 9/2011) = materias clasificadas + discreción sobre datos del servicio conocidos por su cargo."
  },
  {
    id: "Q-W3-063",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Asociaciones Profesionales — Prohibiciones (Art. 40 y 41)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 40 y 41 de la Ley Orgánica 9/2011, ¿cuál de las siguientes actuaciones tienen expresamente PROHIBIDA las asociaciones profesionales de miembros de las Fuerzas Armadas?",
    opciones: [
      "El ejercicio del derecho de huelga, las acciones sustitutivas de la misma, la negociación colectiva y la adopción de medidas de conflicto colectivo, así como vincularse o federarse con partidos políticos o sindicatos.",
      "Presentar propuestas o informes ante el Consejo de Personal de las Fuerzas Armadas (COPERFAS).",
      "Recibir las cuotas voluntarias de sus propios afiliados.",
      "Tener una página web informativa sobre derechos profesionales y sociales."
    ],
    correcta: 0,
    referencia: "Arts. 7, 35, 40 y 41 de la LO 9/2011",
    explicacion: "Las asociaciones profesionales de las FAS (inscritas en el RAPFAS) defienden intereses profesionales, económicos y sociales, pero tienen terminantemente prohibidas las formas de acción sindical: huelga, acciones sustitutivas de huelga, negociación colectiva, conflicto colectivo y federación/vinculación con sindicatos o partidos políticos.",
    pista: "Asociaciones profesionales FAS (LO 9/2011): prohibida la huelga, negociación colectiva, conflicto colectivo y vinculación con sindicatos/partidos."
  },
  {
    id: "Q-W3-064",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Reuniones de Asociaciones Profesionales en Unidades Militares (Art. 43)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 43 de la Ley Orgánica 9/2011, las asociaciones profesionales que formen parte del Consejo de Personal de las Fuerzas Armadas (COPERFAS) podrán celebrar reuniones informativas destinadas a los militares en locales de las unidades. ¿Con qué antelación mínima debe solicitarse la autorización al Jefe de la unidad y cuándo deben celebrarse?",
    opciones: [
      "Con una antelación mínima de setenta y dos (72) horas y siempre fuera del horario habitual de trabajo de la unidad.",
      "Con quince minutos de antelación e interrumpiendo las maniobras de tiro.",
      "Con seis meses de antelación ante el Tribunal Supremo.",
      "Está totalmente prohibido realizar reuniones informativas en cualquier dependencia del Ministerio de Defensa."
    ],
    correcta: 0,
    referencia: "Art. 43 de la LO 9/2011",
    explicacion: "¡Plazo muy específico del Art. 43 LO 9/2011!: Las asociaciones con presencia en el COPERFAS pueden celebrar reuniones informativas en locales habilitados en las unidades, fuera del horario de trabajo, previa solicitud al Jefe de la Unidad con una antelación mínima de 72 HORAS.",
    pista: "Reuniones informativas de asociaciones del COPERFAS en unidades (Art. 43 LO 9/2011) = solicitud con mín. 72 HORAS de antelación y fuera del horario de trabajo."
  },
  {
    id: "Q-W3-065",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "LO 9/2011 — Derechos y Deberes de los Miembros de las FAS",
    apartado: "Apoyo Jurídico y Asistencia Letrada al Militar (Art. 30)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 30 de la Ley Orgánica 9/2011, el Ministerio de Defensa prestará asistencia jurídica a los miembros de las Fuerzas Armadas por las actuaciones derivadas de:",
    opciones: [
      "El legítimo desempeño de sus funciones o cargos.",
      "Sus litigios privados de divorcio o herencias familiares.",
      "Delitos cometidos contra la hacienda pública en negocios particulares.",
      "Infracciones de tráfico con su vehículo particular durante las vacaciones."
    ],
    correcta: 0,
    referencia: "Art. 30 de la LO 9/2011",
    explicacion: "El Art. 30 de la LO 9/2011 garantiza que los militares tienen derecho a la asistencia y defensa jurídica facilitada por el Ministerio de Defensa en los procedimientos judiciales que se sigan contra ellos como consecuencia del legítimo desempeño de sus funciones o cargos.",
    pista: "Asistencia jurídica de Defensa (Art. 30 LO 9/2011) = por actuaciones derivadas del legítimo desempeño de sus funciones."
  },

  // --- B2-T04: LO 8/2014 Régimen Disciplinario de las FAS (8 preguntas) ---
  {
    id: "Q-W3-066",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Faltas Leves vs Graves — Inexactitud en el cumplimiento de órdenes (Arts. 6 y 7)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 6 y 7 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿dónde secumple la sanción de arresto por falta LEVE (de 1 a 14 días) y dónde se cumple la sanción de arresto por falta GRAVE (de 15 a 30 días) o MUY GRAVE (de 31 a 60 días)?",
    opciones: [
      "El arresto por falta leve se cumplirá en el domicilio del sancionado o en su unidad (participando en las actividades de la unidad y permaneciendo en los lugares señalados el resto del tiempo); mientras que el arresto por falta grave y muy grave se cumplirá en un establecimiento disciplinario militar (permaneciendo internado sin participar en las actividades de la unidad).",
      "Todos los arrestos se cumplen en prisiones civiles ordinarias.",
      "El arresto por falta muy grave se cumple en el domicilio particular y el de falta leve en establecimiento disciplinario militar.",
      "El arresto por falta grave implica la baja definitiva de las Fuerzas Armadas."
    ],
    correcta: 0,
    referencia: "Arts. 15 y 17 de la LO 8/2014",
    explicacion: "¡Diferencia capital en la ejecución del arresto (Arts. 15 y 17 LO 8/2014)!: 1) Arresto por FALTA LEVE (1-14 días, Art. 15): se cumple en el DOMICILIO o en la UNIDAD, y el sancionado SÍ participa en las actividades de su unidad durante el horario de trabajo; 2) Arresto por FALTA GRAVE (15-30 días) o MUY GRAVE (31-60 días, Art. 17): se cumple en ESTABLECIMIENTO DISCIPLINARIO MILITAR y el sancionado NO participa en las actividades de su unidad.",
    pista: "Arresto Leve (1-14d) = domicilio o unidad + SÍ trabaja en su unidad. Arresto Grave (15-30d) / Muy Grave (31-60d) = Establecimiento Disciplinario Militar + NO participa en actividades de su unidad."
  },
  {
    id: "Q-W3-067",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Falta de Asistencia al Servicio — Cuándo pasa de Leve a Grave (Arts. 6.2 y 7.14)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Ley Orgánica 8/2014, la falta injustificada de asistencia al servicio o la ausencia no autorizada del destino, cuando no constituya delito de abandono de destino o deserción, ¿cómo se califica según su duración?",
    opciones: [
      "Es falta leve cuando no supere las veinticuatro (24) horas, y pasa a ser falta grave cuando supere las veinticuatro (24) horas (o cuando se trate de un servicio de guardia, seguridad o maniobras).",
      "Es siempre falta muy grave desde el primer minuto de retraso.",
      "Sólo es sancionable si supera los treinta días naturales.",
      "Es falta leve hasta los quince días de ausencia."
    ],
    correcta: 0,
    referencia: "Arts. 6 y 7 de la LO 8/2014",
    explicacion: "En la LO 8/2014, la barrera temporal entre falta leve y falta grave en la ausencia injustificada del destino/servicio ordinario es de 24 HORAS (sin superar el plazo penal del delito de abandono de destino/residencia del Código Penal Militar, que es de más de 3 días).",
    pista: "Ausencia injustificada (LO 8/2014): hasta 24 horas = Falta Leve | más de 24 horas (sin superar 3 días de delito penal) = Falta Grave."
  },
  {
    id: "Q-W3-068",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Embriaguez o Consumo de Drogas Tóxicas — Leve vs Grave vs Muy Grave",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 8.8 de la Ley Orgánica 8/2014, ¿cuándo constituye falta MUY GRAVE la embriaguez o el consumo de drogas tóxicas, estupefacientes o sustancias psicotrópicas?",
    opciones: [
      "Cuando sea habitual (entendiéndose que existe habitualidad cuando se hayan impuesto dos o más episodios/sanciones en el plazo de dos años o tres análisis positivos) o cuando se realice durante el desempeño de un servicio de armas o afecte gravemente a la imagen de las FAS.",
      "Tomarse una cerveza estando de vacaciones en su domicilio particular.",
      "Acudir a reconocimiento médico voluntario.",
      "Tomar medicamentos recetados por Sanidad Militar."
    ],
    correcta: 0,
    referencia: "Art. 8.8 de la LO 8/2014",
    explicacion: "El Art. 8.8 de la LO 8/2014 tipifica como falta MUY GRAVE la embriaguez o consumo de drogas tóxicas con carácter HABITUAL (definido legalmente como 3 o más episodios en un periodo no superior a 2 años).",
    pista: "Art. 8.8 LO 8/2014 (Muy Grave): habitualidad en embriaguez o drogas = 3 o más episodios en un periodo no superior a 2 AÑOS."
  },
  {
    id: "Q-W3-069",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Potestad Sancionadora de los Mandos de Unidad — Jefe de Regimiento, Batallón, Compañía y Sección (Art. 32)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 32 de la Ley Orgánica 8/2014 (Cuadro de potestad sancionadora por faltas leves), ¿qué sanciones máximas pueden imponer respectivamente el Jefe de Regimiento (Coronel), el Jefe de Batallón (Teniente Coronel), el Jefe de Compañía (Capitán) y el Jefe de Sección (Teniente/Suboficial)?",
    opciones: [
      "Jefe de Regimiento: todas las sanciones por falta leve (arresto hasta 14 días y sanción económica hasta 7 días); Jefe de Batallón: arresto hasta 8 días y sanción económica hasta 5 días; Jefe de Compañía: arresto hasta 5 días y sanción económica hasta 3 días; Jefe de Sección y Jefe de Pelotón: sólo reprensión.",
      "Todos los mandos desde Cabo hasta Coronel pueden imponer 30 días de arresto.",
      "El Jefe de Compañía puede imponer la pérdida de destino y el Jefe de Sección 14 días de arresto.",
      "El Jefe de Batallón no puede imponer sanción económica."
    ],
    correcta: 0,
    referencia: "Art. 32 de la LO 8/2014",
    explicacion: "¡LA TABLA MÁS PREGUNTADA DEL TEMA 4 (Art. 32 LO 8/2014)!: 1) Jefe de Regimiento/Unidad independiente = Arresto 1-14 días | Económica 1-7 días | Privación salida alumnos 1-8 días | Reprensión. 2) Jefe de Batallón/Grupo = Arresto hasta 8 días | Económica hasta 5 días | Privación salida hasta 5 días | Reprensión. 3) Jefe de Compañía/Batería/Escuadrón = Arresto hasta 5 días | Económica hasta 3 días | Privación salida hasta 3 días | Reprensión. 4) Jefe de Sección y Jefe de Pelotón/Escuadra = SÓLO REPRENSIÓN.",
    pista: "Tabla Art. 32 LO 8/2014 (Arresto / Económica): Regimiento = 14d / 7d | Batallón = 8d / 5d | Compañía = 5d / 3d | Sección y Pelotón = SÓLO Reprensión."
  },
  {
    id: "Q-W3-070",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Procedimiento por Faltas Leves — Trámite de Audiencia y Notificación (Arts. 46 y 47)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Conforme al artículo 46 de la Ley Orgánica 8/2014, el procedimiento para la imposición de sanciones por faltas leves será preferentemente oral, pero siempre deberá verificarse la exactitud de los hechos, oír al presunto infractor (informándole de su derecho a no declarar contra sí mismo, a no confesarse culpable, a la presunción de inocencia y a ser asistido si lo desea) y:",
    opciones: [
      "Dictar resolución motivada por escrito, que se notificará al interesado con indicación del recurso que proceda, órgano ante el que debe presentarse y plazo para interponerlo.",
      "Aplicar el arresto sin dejar constancia escrita en ningún registro.",
      "Tramitar un expediente escrito de un año con Juez Togado.",
      "Negar al interesado la copia de la resolución sancionadora."
    ],
    correcta: 0,
    referencia: "Arts. 46 y 47 de la LO 8/2014",
    explicacion: "Aunque la tramitación de la falta leve sea preferentemente oral y sumaria (Art. 46 LO 8/2014), la RESOLUCIÓN sancionadora debe formalizarse siempre POR ESCRITO (Art. 47) y notificarse al sancionado con pie de recurso.",
    pista: "Faltas leves (Arts. 46-47 LO 8/2014): tramitación preferentemente oral + audiencia obligatoria + resolución SIEMPRE POR ESCRITO."
  },
  {
    id: "Q-W3-071",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Recursos Disciplinarios — Plazo de Interposición del Recurso de Alzada (Art. 68)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 68 de la Ley Orgánica 8/2014, contra las resoluciones sancionadoras que no pongan fin a la vía disciplinaria podrá interponerse recurso de alzada. ¿Cuál es el plazo para interponer dicho recurso de alzada en el régimen disciplinario militar?",
    opciones: [
      "Un mes, contado a partir del día siguiente al de la notificación de la sanción; no obstante, cuando la sanción sea de arresto por falta leve y ya hubiera finalizado su cumplimiento, el plazo se computará desde el día siguiente al de la finalización del arresto.",
      "Diez días naturales improrrogables.",
      "Tres meses hábiles.",
      "Cuatro años desde la notificación."
    ],
    correcta: 0,
    referencia: "Art. 68.3 de la LO 8/2014",
    explicacion: "El plazo para interponer tanto el recurso de alzada (Art. 68) como el recurso de reposición (Art. 69) en la LO 8/2014 es de UN MES desde el día siguiente a la notificación (o desde el día siguiente a finalizar el cumplimiento del arresto si éste terminó antes).",
    pista: "Recursos disciplinarios en la LO 8/2014 (Alzada Art. 68 y Reposición Art. 69): plazo de interposición = 1 MES."
  },
  {
    id: "Q-W3-072",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Recursos Disciplinarios — Cuándo procede Recurso de Reposición (Art. 69)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 69 de la Ley Orgánica 8/2014, contra las resoluciones sancionadoras dictadas en primera instancia por el Ministro de Defensa o por la Sala de Gobierno del Tribunal Militar Central (que ponen fin a la vía disciplinaria), ¿qué recurso cabe en vía administrativa/disciplinaria antes de acudir a la jurisdicción contencioso-disciplinaria militar, y con qué carácter?",
    opciones: [
      "Podrá interponerse recurso de reposición con carácter potestativo (o previo cuando la ley procesal militar así lo exija) en el plazo de un mes.",
      "Cabe recurso de alzada ante el Jefe de Compañía.",
      "No cabe recurso alguno ni administrativo ni judicial.",
      "Cabe queja conforme al Real Decreto 176/2014."
    ],
    correcta: 0,
    referencia: "Art. 69 de la LO 8/2014",
    explicacion: "Cuando la sanción la impone directamente el Ministro de Defensa o la Sala de Gobierno del Tribunal Militar Central (que agotan la vía disciplinaria), el recurso administrativo que cabe en el plazo de 1 mes es el de REPOSICIÓN (ante el mismo órgano que la dictó). En cambio, contra las resoluciones que ya han resuelto un recurso de alzada no cabe reposición, sino directamente el recurso contencioso-disciplinario militar.",
    pista: "Sanciones impuestas en 1ª instancia por Ministro de Defensa o Sala de Gobierno del TMC -> Recurso de REPOSICIÓN (plazo 1 mes)."
  },
  {
    id: "Q-W3-073",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "LO 8/2014 — Régimen Disciplinario de las Fuerzas Armadas",
    apartado: "Plazo para resolver los Recursos Disciplinarios y Silencio Desestimatorio (Art. 70)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 70 de la Ley Orgánica 8/2014, transcurrido un plazo determinado desde la interposición del recurso de alzada o de reposición sin que se hubiera notificado su resolución, el interesado podrá entenderlo desestimado por silencio administrativo a efectos de interponer el recurso contencioso-disciplinario militar. ¿Cuál es ese plazo?",
    opciones: [
      "Dos meses.",
      "Un año.",
      "Diez días naturales.",
      "Seis meses con silencio positivo."
    ],
    correcta: 0,
    referencia: "Art. 70.3 de la LO 8/2014",
    explicacion: "¡OJO A ESTA DIFERENCIA ENTRE LA LEY 39/2015 (LPACAP) Y LA LO 8/2014 (DISCIPLINARIO)!: En la LPACAP (Ley 39/2015) la alzada se resuelve en 3 meses y la reposición en 1 mes. Pero en el RÉGIMEN DISCIPLINARIO MILITAR (Art. 70.3 LO 8/2014), el plazo para resolver y notificar TANTO el recurso de alzada COMO el de reposición es de DOS MESES (con silencio negativo).",
    pista: "¡TRAMPA LETAL DE EXAMEN!: Plazo para resolver Alzada y Reposición en la LO 8/2014 (Art. 70.3) = 2 MESES (en ambos recursos)."
  },

  // --- B2-T05: RD 176/2014 Iniciativas y Quejas (2 primeras preguntas de las 8) ---
  {
    id: "Q-W3-074",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Definición de Iniciativa vs Queja (Arts. 6 y 9)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Conforme al Real Decreto 176/2014, ¿qué diferencia de objeto existe entre una 'iniciativa' y una 'queja'?",
    opciones: [
      "Las iniciativas son propuestas de carácter general que tienen por objeto mejorar la eficacia de las unidades o las condiciones de vida y trabajo del personal; mientras que las quejas son reclamaciones individuales relativas al régimen de personal y a las condiciones de vida y trabajo cuando el militar considere afectados sus derechos o intereses legítimos.",
      "Las iniciativas sirven para denunciar delitos penales y las quejas para pedir ascensos por elección.",
      "Ambas son recursos disciplinarios contra arrestos por falta grave.",
      "Las iniciativas solo las presenta el personal civil y las quejas los reservistas."
    ],
    correcta: 0,
    referencia: "Arts. 6 y 9 del Real Decreto 176/2014",
    explicacion: "En el RD 176/2014: INICIATIVA (Art. 6) = propuesta de carácter general para mejorar la eficacia de las unidades o condiciones de vida/trabajo. QUEJA (Art. 9) = manifestación de disconformidad/reclamación individual sobre régimen de personal o condiciones de vida/trabajo.",
    pista: "Iniciativa = propuesta general de mejora (Art. 6). Queja = reclamación individual sobre régimen de personal o condiciones de vida (Art. 9)."
  },
  {
    id: "Q-W3-075",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Garantía de no sufrir perjuicio por presentar iniciativas o quejas (Art. 3)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 3 del Real Decreto 176/2014, la presentación de iniciativas y quejas:",
    opciones: [
      "Se realizará en los términos previstos en este real decreto sin que pueda derivarse perjuicio alguno para quien las presente, salvo que incurra en falta disciplinaria o delito (por ejemplo, por faltar al respeto o formular acusaciones falsas).",
      "Supondrá siempre la pérdida de cinco puntos en el informe personal de calificación (IPEC).",
      "Implicará el arresto preventivo del proponente durante cuarenta y ocho horas.",
      "Suspende automáticamente el cumplimiento de las guardias de seguridad."
    ],
    correcta: 0,
    referencia: "Art. 3 del Real Decreto 176/2014",
    explicacion: "El Art. 3 del RD 176/2014 garantiza la indemnidad del militar que presenta una iniciativa o queja de buena fe y con el debido respeto, y recuerda que su presentación NO suspende el cumplimiento de las órdenes ni de los actos administrativos.",
    pista: "Art. 3 RD 176/2014: Ningún perjuicio por presentar iniciativas/quejas + NO suspende el cumplimiento de órdenes."
  }
];

const WAVE3_QUESTIONS_PART2 = [
  // ==========================================================================
  // CONTINUACIÓN BLOQUE 2: B2-T05 (6), B2-T06 (8), B2-T07 (7), B2-T08 (7) — 28 PREGUNTAS
  // ==========================================================================

  // --- B2-T05: RD 176/2014 Iniciativas y Quejas (6 preguntas restantes) ---
  {
    id: "Q-W3-076",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Funciones del Militar de Mayor Empleo y Antigüedad en Iniciativas y Quejas (Art. 4)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 4 del Real Decreto 176/2014, el militar de mayor empleo y antigüedad de cada categoría (Oficiales, Suboficiales y Tropa y Marinería) designado en la unidad para recibir y canalizar las iniciativas y quejas tiene entre sus funciones:",
    opciones: [
      "Recibir las iniciativas y quejas que le presenten los miembros de su misma categoría, acusar recibo de ellas, trasladarlas al Jefe de la unidad, asistir al Jefe de la unidad en el estudio de las propuestas y mantener informado al interesado de su tramitación.",
      "Resolver por sí mismo los recursos de alzada e imponer arrestos de hasta 14 días.",
      "Anular las órdenes operativas del Jefe de la unidad.",
      "Convocar elecciones sindicales en el acuartelamiento."
    ],
    correcta: 0,
    referencia: "Art. 4.2 del Real Decreto 176/2014",
    explicacion: "El militar de mayor empleo y antigüedad de cada categoría actúa como canalizador e interlocutor ante el Jefe de Unidad respecto a los miembros de su misma categoría: recibe, acusa recibo, traslada al Jefe de Unidad y asesora en su estudio, pero quien resuelve/adopta el acuerdo en el ámbito de su competencia es el Jefe de la Unidad.",
    pista: "Militar de mayor empleo y antigüedad (Art. 4 RD 176/2014): recibe, acusa recibo y traslada al Jefe de Unidad (solo respecto a los de su misma categoría)."
  },
  {
    id: "Q-W3-077",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Presentación directa al Jefe de Unidad sin pasar por el más antiguo (Arts. 7 y 11)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 7 y 11 del Real Decreto 176/2014, ¿está obligado el militar a presentar siempre su iniciativa o su queja a través del militar de mayor empleo y antigüedad de su categoría?",
    opciones: [
      "No; es potestativo, ya que el militar puede presentarla directamente ante el Jefe de su unidad (por conducto regular en el caso de las quejas) o bien a través del militar de mayor empleo y antigüedad de su categoría.",
      "Sí, es obligatorio bajo pena de nulidad absoluta y sanción grave.",
      "Sólo puede presentarla ante el Defensor del Pueblo.",
      "Debe presentarla obligatoriamente ante el Ayuntamiento."
    ],
    correcta: 0,
    referencia: "Arts. 7 y 11 del Real Decreto 176/2014",
    explicacion: "¡Trampa frecuente!: Acudir al militar de mayor empleo y antigüedad de su categoría es una VÍA OPCIONAL/ALTERNATIVA para facilitar la canalización, pero el interesado siempre puede presentar su iniciativa o su queja directamente al Jefe de la Unidad (siguiendo el conducto regular en las quejas).",
    pista: "Acudir al militar de mayor empleo y antigüedad es POTESTATIVO (se puede presentar directamente al Jefe de Unidad)."
  },
  {
    id: "Q-W3-078",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Presentación por Medios Electrónicos y Registro (Art. 5)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "De acuerdo con el artículo 5 del Real Decreto 176/2014, de toda iniciativa o queja que se presente en la unidad:",
    opciones: [
      "Se dejará constancia en un registro específico de la unidad y se entregará acuse de recibo al interesado.",
      "Se destruirá el documento original tras su lectura.",
      "Se publicará el nombre del quejoso en el tablón de anuncios de la compañía.",
      "Se remitirá directamente al Boletín Oficial del Estado."
    ],
    correcta: 0,
    referencia: "Art. 5 del Real Decreto 176/2014",
    explicacion: "Toda iniciativa o queja debe presentarse por escrito (en soporte papel o por medios electrónicos), haciendo constar nombre, apellidos, empleo y destino, registrándose en la unidad y entregándose siempre acuse de recibo al interesado.",
    pista: "Art. 5 RD 176/2014: Por escrito + identificado (nunca anónimo) + registro en la unidad + acuse de recibo."
  },
  {
    id: "Q-W3-079",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Queja contra el propio Jefe de Unidad (Art. 11.2)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 11.2 del Real Decreto 176/2014, cuando la queja se refiera a una actuación u omisión del propio Jefe de la unidad del interesado, ¿ante quién se presentará?",
    opciones: [
      "Directamente ante el superior jerárquico del Jefe de la unidad.",
      "Ante el mismo Jefe de unidad para que él mismo la archive.",
      "No se puede presentar queja contra un Jefe de unidad.",
      "Ante el Cabo de Cuartel."
    ],
    correcta: 0,
    referencia: "Art. 11.2 del Real Decreto 176/2014",
    explicacion: "En coherencia con el Art. 18 de la LO 9/2011 y el Art. 31 de las RROO, cuando la queja se dirija contra el propio jefe inmediato o Jefe de Unidad, se salva ese escalón y se presenta directamente ante su superior jerárquico.",
    pista: "Queja contra el propio Jefe de Unidad (Art. 11.2 RD 176/2014) -> directamente ante su superior jerárquico."
  },
  {
    id: "Q-W3-080",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Inadmisión de Iniciativas y Quejas (Arts. 5 y 10)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 176/2014, ¿cuál de las siguientes causas motiva la inadmisión a trámite de una queja o iniciativa?",
    opciones: [
      "Que se presente de forma anónima, que carezca manifiestamente de fundamento, que verse sobre materias excluidas del ámbito del real decreto (como recursos administrativos o disciplinarios) o que las quejas se formulen de forma colectiva.",
      "Que proponga ahorrar energía eléctrica en los edificios del acuartelamiento.",
      "Que sea presentada por un Soldado con compromiso inicial.",
      "Que solicite revisar los turnos de un servicio de acuartelamiento."
    ],
    correcta: 0,
    referencia: "Arts. 2, 5 y 10 del Real Decreto 176/2014",
    explicacion: "Se inadmiten motivadamente las quejas o iniciativas anónimas (no subsanadas en 10 días), las carentes manifiestamente de fundamento, las referidas a procedimientos con cauce específico de recurso administrativo/disciplinario/judicial y las quejas colectivas.",
    pista: "Causas de inadmisión (RD 176/2014): anónimas, sin fundamento, materias con recurso propio o quejas colectivas."
  },
  {
    id: "Q-W3-081",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Publicidad y Reconocimiento de Iniciativas Aprobadas (Art. 8)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Nivel Medio"],
    pregunta: "Según el artículo 8 del Real Decreto 176/2014, cuando una iniciativa presentada por un militar sea estimada e implantada por resultar beneficiosa para las Fuerzas Armadas:",
    opciones: [
      "Se dará difusión de la medida adoptada y podrá hacerse constar como mérito o felicitación en la hoja de servicios del autor.",
      "Se mantendrá en secreto la identidad del autor.",
      "Supondrá el ascenso automático al empleo de General.",
      "Generará una indemnización vitalicia del 100% del sueldo."
    ],
    correcta: 0,
    referencia: "Art. 8 del Real Decreto 176/2014",
    explicacion: "Las iniciativas relevantes que sean implantadas para mejorar la eficacia o condiciones de vida de las unidades son objeto de difusión y reconocimiento para su autor.",
    pista: "Iniciativa implantada con éxito (Art. 8 RD 176/2014) = difusión y reconocimiento al autor."
  },

  // --- B2-T06: Igualdad LO 3/2007, Observatorio Militar de Igualdad y Protocolo Acoso RD 247/2024 (8 preguntas) ---
  {
    id: "Q-W3-082",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "LO 3/2007 — Discriminación Directa vs Indirecta (Art. 6)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 6 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, ¿en qué consiste la 'discriminación indirecta' por razón de sexo?",
    opciones: [
      "En la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
      "En la situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.",
      "En el acoso físico reiterado en el puesto de trabajo.",
      "En la reserva de plazas para militares con más de cinco años de servicio."
    ],
    correcta: 0,
    referencia: "Art. 6.2 de la Ley Orgánica 3/2007",
    explicacion: "¡Fíjate en la palabra clave 'APARENTEMENTE NEUTROS'!: En el Art. 6 de la LO 3/2007, la discriminación DIRECTA (Art. 6.1) trata a una persona de manera menos favorable directamente en atención a su sexo; mientras que la discriminación INDIRECTA (Art. 6.2) parte de una norma, criterio o práctica APARENTEMENTE NEUTROS que produce una desventaja particular para un sexo sin justificación objetiva.",
    pista: "Discriminación Directa = trato menos favorable en atención a su sexo. Discriminación Indirecta = criterio 'aparentemente neutro' que genera desventaja a un sexo."
  },
  {
    id: "Q-W3-083",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "LO 3/2007 — Discriminación por Embarazo o Maternidad (Art. 8)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 8 de la Ley Orgánica 3/2007, todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye:",
    opciones: [
      "Discriminación directa por razón de sexo.",
      "Discriminación indirecta justificable.",
      "Una mera falta administrativa leve sin relevancia constitucional.",
      "Una medida de acción positiva."
    ],
    correcta: 0,
    referencia: "Art. 8 de la Ley Orgánica 3/2007",
    explicacion: "¡Pregunta trampa de examen muy repetida!: El Art. 8 de la LO 3/2007 establece taxativamente que todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye DISCRIMINACIÓN DIRECTA por razón de sexo (nunca indirecta).",
    pista: "Trato desfavorable por embarazo o maternidad (Art. 8 LO 3/2007) = DISCRIMINACIÓN DIRECTA por razón de sexo."
  },
  {
    id: "Q-W3-084",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "LO 3/2007 — Acciones Positivas (Art. 11)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 11 de la Ley Orgánica 3/2007, con el fin de hacer efectivo el derecho constitucional de la igualdad, los Poderes Públicos adoptarán medidas específicas en favor de las mujeres para corregir situaciones patentes de desigualdad de hecho respecto de los hombres. Tales medidas, que serán aplicables en tanto subsistan dichas situaciones y habrán de ser razonables y proporcionadas, se denominan:",
    opciones: [
      "Acciones positivas.",
      "Sanciones disciplinarias.",
      "Desviación de poder.",
      "Revisión de oficio."
    ],
    correcta: 0,
    referencia: "Art. 11 de la Ley Orgánica 3/2007",
    explicacion: "El Art. 11 de la LO 3/2007 regula las 'Acciones positivas': medidas específicas, temporales (mientras subsista la desigualdad de hecho), razonables y proporcionadas para corregir desigualdades reales.",
    pista: "Medidas específicas, razonables y proporcionadas para corregir desigualdades de hecho (Art. 11 LO 3/2007) = Acciones positivas."
  },
  {
    id: "Q-W3-085",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "LO 3/2007 — Inversión de la Carga de la Prueba (Art. 13)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 3/2007 ('Prueba'), en aquellos procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, corresponderá a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad. ¿En qué procesos NO es de aplicación esta regla de inversión de la carga de la prueba?",
    opciones: [
      "En los procesos penales (ni en los procedimientos administrativos sancionadores o disciplinarios, donde rige la presunción constitucional de inocencia).",
      "En los procesos civiles laborales sobre salarios.",
      "En las reclamaciones sobre ascensos civiles.",
      "Se aplica incluso para condenar penalmente sin pruebas."
    ],
    correcta: 0,
    referencia: "Art. 13.2 de la Ley Orgánica 3/2007",
    explicacion: "¡Trampa clásica del Art. 13.2 LO 3/2007!: La inversión de la carga de la prueba ante indicios fundados de discriminación NO es de aplicación a los PROCESOS PENALES (ni al derecho administrativo sancionador/disciplinario, donde prevalece el Art. 24.2 CE de presunción de inocencia).",
    pista: "Art. 13.2 LO 3/2007: La inversión de la carga de la prueba NO se aplica a los procesos PENALES."
  },
  {
    id: "Q-W3-086",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "Observatorio Militar para la Igualdad entre mujeres y hombres en las FAS",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¡Cuidado con no confundir los dos Observatorios del temario! ¿A qué órgano está adscrito el 'Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas', quién lo preside y quién ejerce su Secretaría Permanente?",
    opciones: [
      "Está adscrito a la Subsecretaría de Defensa, lo preside la persona titular de la Subsecretaría de Defensa (SUBDEF) y su Secretaría Permanente recae en la División de Igualdad y Apoyo Social al Personal de la DIGENPER.",
      "Está adscrito a las Cortes Generales y compuesto por 5 diputados y 4 senadores.",
      "Está adscrito al Estado Mayor de la Defensa y lo preside el JEMAD.",
      "Depende del Tribunal Constitucional."
    ],
    correcta: 0,
    referencia: "Orden DEF/111/2019 y RD 205/2024",
    explicacion: "¡DISTINCIÓN VITAL DE EXAMEN!: 1) 'Observatorio de la Vida Militar' (LO 9/2011) = adscrito a las CORTES GENERALES (9 miembros: 5 Congreso + 4 Senado, mandato 5 años). 2) 'Observatorio Militar para la Igualdad' = órgano colegiado del MINISTERIO DE DEFENSA adscrito a la SUBSECRETARÍA DE DEFENSA, presidido por el SUBDEF y con Secretaría en la DIGENPER.",
    pista: "Observatorio de la Vida Militar = Cortes Generales (9 miembros). Observatorio Militar para la Igualdad = SUBDEF (Ministerio de Defensa)."
  },
  {
    id: "Q-W3-087",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "Protocolo frente al Acoso en las FAS (RD 247/2024) — Ámbito de conductas incluidas",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "El Real Decreto 247/2024, de 12 de marzo, aprueba el Protocolo de actuación frente al acoso sexual, al acoso por razón de sexo y ante qué otra modalidad de acoso en las Fuerzas Armadas:",
    opciones: [
      "El acoso profesional (además de cualquier otra conducta contra la libertad sexual, la integridad moral o discriminatoria).",
      "Únicamente las multas de aparcamiento en las bases.",
      "Sólo las faltas leves de puntualidad.",
      "Exclusivamente los conflictos entre empresas contratistas externas."
    ],
    correcta: 0,
    referencia: "Art. 1 del Real Decreto 247/2024, de 12 de marzo",
    explicacion: "El RD 247/2024 (que actualizó el protocolo en cumplimiento de la LO 8/2014 y leyes de igualdad) abarca de forma integral tres grandes tipos de acoso en las FAS: 1) Acoso sexual, 2) Acoso por razón de sexo y 3) ACOSO PROFESIONAL (mobbing/abuso de autoridad o trato degradante en el ámbito militar).",
    pista: "RD 247/2024 (Protocolo Acoso FAS): Acoso sexual + Acoso por razón de sexo + ACOSO PROFESIONAL."
  },
  {
    id: "Q-W3-088",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "Protocolo Acoso RD 247/2024 — Excepción al Conducto Reglamentario",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Protocolo de actuación frente al acoso en las Fuerzas Armadas (RD 247/2024), para formular una denuncia o solicitar asesoramiento confidencial ante la Unidad de Protección frente al Acoso (UPA):",
    opciones: [
      "No es necesario seguir el conducto reglamentario; la víctima o cualquier persona que tenga conocimiento de los hechos puede dirigirse directamente a la UPA correspondiente (o a la UPA Central de DIGENPER), garantizándose el sigilo y la confidencialidad.",
      "Es obligatorio pedir permiso previo por escrito al presunto acosador si es su jefe directo.",
      "Sólo puede presentarse la denuncia el día 1 de enero de cada año.",
      "La UPA tiene funciones sancionadoras y dicta sentencias de prisión."
    ],
    correcta: 0,
    referencia: "Real Decreto 247/2024 (Protocolo frente al acoso en las FAS)",
    explicacion: "Dos claves de examen sobre las UPA (RD 247/2024): 1) Se puede acudir a ellas DIRECTAMENTE SIN CONDUCTO REGLAMENTARIO; 2) Las UPA son órganos de prevención, asesoramiento, asistencia integral y canalización, pero NO son órganos judiciales ni imponen por sí mismas sanciones disciplinarias (la potestad sancionadora sigue correspondiendo a las autoridades de la LO 8/2014 o a los tribunales).",
    pista: "UPA (RD 247/2024): Acceso directo SIN conducto reglamentario + asesora, apoya y canaliza (pero la UPA no impone sanciones)."
  },
  {
    id: "Q-W3-089",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)",
    apartado: "Calificación Disciplinaria del Acoso en la LO 8/2014 (Arts. 7 y 8)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En conexión con el Protocolo frente al Acoso (RD 247/2024), ¿cómo tipifica la Ley Orgánica 8/2014 (Régimen Disciplinario de las FAS) realizar actos que impliquen acoso sexual o por razón de sexo o acoso profesional de forma reiterada o grave cuando no constituyan delito?",
    opciones: [
      "Como falta muy grave (Art. 8.12 de la LO 8/2014), o falta grave (Art. 7.28) cuando se atente contra la dignidad o libertad sexual sin alcanzar la reiteración o gravedad de muy grave.",
      "Únicamente como falta leve sancionada con reprensión.",
      "No está tipificado en la Ley Orgánica 8/2014.",
      "Sólo es sancionable si ocurre fuera de España."
    ],
    correcta: 0,
    referencia: "Arts. 7.28 y 8.12 de la LO 8/2014 y RD 247/2024",
    explicacion: "En la LO 8/2014 (cuando no sea delito del Código Penal Militar): el acoso sexual, por razón de sexo o profesional reiterado o especialmente degradante es FALTA MUY GRAVE (Art. 8.12), y los atentados no reiterados contra la libertad sexual o dignidad son FALTA GRAVE (Art. 7.28).",
    pista: "Acoso en la LO 8/2014 (cuando no sea delito): Falta Muy Grave (Art. 8.12) o Falta Grave (Art. 7.28). Nunca es falta leve."
  },

  // --- B2-T07: Ley 39/2015 LPACAP Procedimiento Administrativo Común (7 preguntas) ---
  {
    id: "Q-W3-090",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Cómputo de Plazos por Meses o Años (Art. 30.4)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 30.4 de la Ley 39/2015 (LPACAP), si un plazo se fija en meses o años, ¿desde qué día se computará y cuándo concluirá el plazo si en el mes de vencimiento no hubiera día equivalente a aquel en que comienza el cómputo?",
    opciones: [
      "Se computará a partir del día siguiente a aquel en que tenga lugar la notificación o publicación del acto (o desde el siguiente a aquel en que se produzca la estimación o desestimación por silencio), y el plazo concluirá el mismo día en que se produjo la notificación en el mes o año de vencimiento; si en el mes de vencimiento no hubiera día equivalente, se entenderá que el plazo expira el último día del mes.",
      "Se computan siempre de treinta en treinta días hábiles descontando domingos.",
      "Empieza a contar tres días antes de la notificación.",
      "Si el mes de vencimiento no tiene día equivalente, se prorroga automáticamente tres meses más."
    ],
    correcta: 0,
    referencia: "Art. 30.4 y 30.5 de la Ley 39/2015 (LPACAP)",
    explicacion: "Regla de oro del Art. 30.4 LPACAP ('de fecha a fecha'): El cómputo por meses o años se inicia el día siguiente a la notificación/publicación y acaba el día equivalente al de la notificación en el mes/año de vencimiento (ej. notificado el 15 de marzo -> plazo de 1 mes vence el 15 de abril). Si no hay día equivalente (ej. 31 de enero a 1 mes), expira el ÚLTIMO DÍA DEL MES (28 o 29 de febrero). Y si el último día es inhábil, se entiende prorrogado al primer día hábil siguiente (Art. 30.5).",
    pista: "Plazos por meses/años (Art. 30.4 LPACAP): si en el mes de vencimiento no hay día equivalente, expira el ÚLTIMO DÍA DEL MES. Si el último día es inhábil, pasa al primer día hábil siguiente."
  },
  {
    id: "Q-W3-091",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Ampliación de Plazos vs Tramitación de Urgencia (Arts. 32 y 33)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare la 'Ampliación de plazos' (artículo 32) y la 'Tramitación de urgencia' (artículo 33) de la Ley 39/2015 (LPACAP):",
    opciones: [
      "La ampliación de plazos no podrá exceder de la mitad de los mismos y debe acordarse antes del vencimiento del plazo de que se trate; mientras que la tramitación de urgencia reduce a la mitad los plazos establecidos para el procedimiento ordinario, salvo los relativos a la presentación de solicitudes y recursos. En ningún caso cabrá recurso contra los acuerdos que decidan sobre ampliación de plazos o tramitación de urgencia.",
      "La tramitación de urgencia reduce también a la mitad el plazo para interponer el recurso de alzada.",
      "Pueden ampliarse los plazos que ya estén vencidos desde hace un mes.",
      "Contra el acuerdo de ampliación de plazos cabe recurso de casación."
    ],
    correcta: 0,
    referencia: "Arts. 32 y 33 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Tres trampas de examen reunidas en los Arts. 32 y 33 LPACAP!: 1) La ampliación de plazos (Art. 32) es como máximo por la MITAD del plazo original y NUNCA puede ampliarse un plazo ya vencido; 2) La tramitación de urgencia (Art. 33) reduce los plazos a la MITAD, SALVO los de presentación de SOLICITUDES y RECURSOS (que mantienen su plazo íntegro); 3) Contra el acuerdo de ampliación o de urgencia NO CABE RECURSO alguno.",
    pista: "Arts. 32 y 33 LPACAP: Ampliación = máx. mitad (nunca plazos vencidos). Urgencia = reduce a la mitad SALVO solicitudes y recursos. En ambos = NO cabe recurso."
  },
  {
    id: "Q-W3-092",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Práctica de Notificaciones en Papel en el Domicilio (Art. 42.2)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 42.2 de la Ley 39/2015 (LPACAP), cuando la notificación se practique en papel en el domicilio del interesado, de no hallarse presente éste en el momento de entregarse, podrá hacerse cargo de la misma cualquier persona mayor de catorce (14) años que se encuentre en el domicilio y haga constar su identidad. Si nadie pudiera hacerse cargo de la notificación, ¿cómo debe repetirse el segundo intento?",
    opciones: [
      "Se repetirá por una sola vez y en una hora distinta dentro de los tres días siguientes: en caso de que el primer intento de notificación se haya realizado antes de las quince (15:00) horas, el segundo intento deberá realizarse después de las quince horas y viceversa, dejando en todo caso al menos un margen de diferencia de tres horas entre ambos intentos.",
      "Se repetirá diez veces en el mismo día con diez minutos de diferencia.",
      "Se dejará tirada por debajo de la puerta dando por notificado el acto.",
      "Podrá recogerla un niño de seis años."
    ],
    correcta: 0,
    referencia: "Art. 42.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Todas las cifras del Art. 42.2 LPACAP caen en examen!: 1) Puede recogerla en el domicilio cualquier persona MAYOR DE 14 AÑOS; 2) Si no hay nadie, se repite por UNA SOLA VEZ dentro de los TRES DÍAS siguientes; 3) Franja horaria: si el 1.º fue antes de las 15:00 h, el 2.º será después de las 15:00 h (y viceversa), dejando un margen mínimo de TRES HORAS de diferencia entre ambos intentos.",
    pista: "Notificación en domicilio (Art. 42.2 LPACAP): mayor de 14 años | 2.º intento en los 3 días siguientes | antes/después de las 15:00 h + margen mínimo de 3 HORAS."
  },
  {
    id: "Q-W3-093",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Motivación de los Actos Administrativos (Art. 35)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Conforme al artículo 35 de la Ley 39/2015 (LPACAP), ¿cuáles de los siguientes actos administrativos deben ser obligatoriamente motivados, con sucinta referencia de hechos y fundamentos de derecho?",
    opciones: [
      "Los actos que limiten derechos subjetivos o intereses legítimos, los que resuelvan procedimientos de revisión de oficio o recursos administrativos, los que se separen del criterio seguido en actuaciones precedentes o del dictamen de órganos consultivos, los acuerdos de suspensión de actos o de aplicación de la tramitación de urgencia, y los que se dicten en el ejercicio de potestades discrecionales o de carácter sancionador.",
      "Únicamente las sentencias del Tribunal Constitucional.",
      "Ningún acto administrativo necesita motivación si lo firma un Director General.",
      "Sólo los actos de mero trámite que conceden vacaciones."
    ],
    correcta: 0,
    referencia: "Art. 35.1 de la Ley 39/2015 (LPACAP)",
    explicacion: "El Art. 35.1 LPACAP enumera los actos que requieren motivación obligatoria: los que limiten derechos/intereses legítimos, los que resuelvan recursos o revisiones de oficio, los que se separen del precedente o del dictamen consultivo, los acuerdos de suspensión, urgencia o ampliación de plazos, los que rechacen pruebas propuestas por los interesados y los actos discrecionales o sancionadores.",
    pista: "Art. 35 LPACAP (Motivación obligatoria): actos que limitan derechos, resuelven recursos, se separan del precedente/dictamen, discrecionales, sancionadores, urgencia/ampliación."
  },
  {
    id: "Q-W3-094",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Subsanación y Mejora de la Solicitud (Art. 68)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 68 de la Ley 39/2015 (LPACAP), si la solicitud de iniciación no reúne los requisitos legales, se requerirá al interesado para que la subsane en el plazo de diez (10) días. Siempre que NO se trate de procedimientos selectivos o de concurrencia competitiva, ¿hasta cuántos días podrá ser ampliado prudencialmente este plazo de subsanación?",
    opciones: [
      "Hasta cinco (5) días, a petición del interesado o a iniciativa del órgano, cuando la aportación de los documentos requeridos presente dificultades especiales.",
      "Hasta treinta días naturales incluso en oposiciones y concursos.",
      "No puede ampliarse en ningún caso.",
      "Hasta seis meses."
    ],
    correcta: 0,
    referencia: "Art. 68.1 y 68.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Matiz muy preguntado del Art. 68.2 LPACAP!: El plazo de subsanación de la solicitud es de 10 DÍAS hábiles, ampliable hasta en 5 DÍAS más por dificultades especiales, SIEMPRE QUE NO se trate de procedimientos selectivos o de concurrencia competitiva (en oposiciones/concursos NO cabe esa ampliación de 5 días).",
    pista: "Subsanación solicitud (Art. 68 LPACAP): 10 días + ampliable hasta 5 días más (EXCEPTO en procedimientos selectivos o de concurrencia competitiva)."
  },
  {
    id: "Q-W3-095",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Informes en la Instrucción — Plazo y Carácter por defecto (Art. 80)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 80 de la Ley 39/2015 (LPACAP), salvo disposición expresa en contrario, los informes que se soliciten en la fase de instrucción del procedimiento administrativo serán:",
    opciones: [
      "Facultativos y no vinculantes, y serán emitidos a través de medios electrónicos en el plazo de diez (10) días.",
      "Preceptivos y vinculantes en todos los casos, con un plazo de seis meses.",
      "Verbales y secretos.",
      "Vinculantes y con un plazo de veinticuatro horas."
    ],
    correcta: 0,
    referencia: "Art. 80.1 y 80.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "Regla por defecto de los informes administrativos (Art. 80 LPACAP): Salvo disposición expresa en contrario, los informes serán FACULTATIVOS y NO VINCULANTES, y se emitirán en el plazo de DIEZ DÍAS.",
    pista: "Informes por defecto (Art. 80 LPACAP) = FACULTATIVOS y NO VINCULANTES + plazo de emisión de 10 DÍAS."
  },
  {
    id: "Q-W3-096",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Caducidad por Paralización Imputable al Interesado (Art. 95)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 95 de la Ley 39/2015 (LPACAP), en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que se producirá la caducidad del procedimiento si no realiza las actividades necesarias para reanudar la tramitación en el plazo de:",
    opciones: [
      "Tres (3) meses.",
      "Diez (10) días.",
      "Quince (15) días.",
      "Cuatro (4) años."
    ],
    correcta: 0,
    referencia: "Art. 95.1 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Atención al plazo de caducidad por inactividad del interesado (Art. 95.1 LPACAP)!: La Administración le advierte que, transcurridos TRES MESES sin realizar las actuaciones necesarias que dependan de él, se acordará el archivo de las actuaciones por caducidad.",
    pista: "Caducidad por paralización imputable al interesado (Art. 95 LPACAP) = advertencia y plazo de 3 MESES."
  },

  // --- B2-T08: Ley 39/2015 Título V Revisión de Actos y Recursos Administrativos (7 preguntas) ---
  {
    id: "Q-W3-097",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Nulidad de Pleno Derecho vs Anulabilidad (Arts. 47 y 48)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 47 y 48 de la Ley 39/2015 (LPACAP), distinga qué vicio de incompetencia produce la NULIDAD DE PLENO DERECHO (Art. 47.1.b) y cuál produce únicamente la ANULABILIDAD (Art. 48) y puede ser objeto de convalidación (Art. 52):",
    opciones: [
      "Los actos dictados por órgano manifiestamente incompetente por razón de la materia o del territorio son nulos de pleno derecho; mientras que la incompetencia jerárquica (no manifiesta por materia o territorio) determina la anulabilidad y puede convalidarse por el órgano competente cuando sea superior jerárquico del que dictó el acto.",
      "La incompetencia jerárquica es siempre nula de pleno derecho e insubsanable.",
      "La incompetencia por razón de la materia se convalida automáticamente a los diez días.",
      "Todos los actos administrativos son nulos de pleno derecho si tienen una errata ortográfica."
    ],
    correcta: 0,
    referencia: "Arts. 47.1.b, 48 y 52.3 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Regla de oro de examen entre Art. 47 y Art. 48 LPACAP!: Incompetencia manifiesta por razón de la MATERIA o del TERRITORIO = NULO DE PLENO DERECHO (Art. 47.1.b, no convalidable). Incompetencia JERÁRQUICA = ANULABLE (Art. 48) y SÍ se puede convalidar por el superior jerárquico competente (Art. 52.3).",
    pista: "Incompetencia por Materia o Territorio = Nulo de pleno derecho (Art. 47). Incompetencia Jerárquica = Anulable (Art. 48) y convalidable por el superior (Art. 52.3)."
  },
  {
    id: "Q-W3-098",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Revisión de Disposiciones y Actos Nulos (Art. 106) — Dictamen y Caducidad",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 106 de la Ley 39/2015 (LPACAP), las Administraciones Públicas, en cualquier momento, por iniciativa propia o a solicitud de interesado, y previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, declararán de oficio la nulidad de los actos nulos de pleno derecho. Si el procedimiento se inició DE OFICIO, ¿qué ocurre si transcurren seis (6) meses desde su inicio sin dictarse resolución? ¿Y si se inició A SOLICITUD DE INTERESADO?",
    opciones: [
      "Si se inició de oficio, el transcurso de seis meses sin resolución producirá la caducidad del procedimiento; si se inició a solicitud de interesado, se podrá entender desestimada por silencio administrativo.",
      "En ambos casos se produce silencio positivo y el acto queda anulado automáticamente.",
      "El procedimiento caduca a los diez días hábiles.",
      "No se requiere dictamen del Consejo de Estado para declarar la nulidad de oficio."
    ],
    correcta: 0,
    referencia: "Art. 106.1 y 106.5 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Doble consecuencia a los 6 meses en la Revisión de Oficio de actos nulos (Art. 106.5 LPACAP)!: 1) Exige siempre dictamen PRECEPTIVO y FAVORABLE (vinculante) del Consejo de Estado; 2) A los 6 MESES sin resolver: si se inició DE OFICIO -> CADUCIDAD; si se inició A INSTANCIA DE PARTE -> SILENCIO DESESTIMATORIO.",
    pista: "Revisión de actos nulos (Art. 106 LPACAP): exige dictamen FAVORABLE del Consejo de Estado + a los 6 meses: de oficio = CADUCA | a solicitud de interesado = SILENCIO NEGATIVO."
  },
  {
    id: "Q-W3-099",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Revocación de Actos y Rectificación de Errores Materiales (Art. 109)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 109 de la Ley 39/2015 (LPACAP), las Administraciones Públicas podrán revocar, mientras no haya transcurrido el plazo de prescripción, sus actos de gravamen o desfavorables (siempre que tal revocación no constituya dispensa o exención no permitida por las leyes, ni sea contraria al principio de igualdad, al interés público o al ordenamiento jurídico). ¿Y en qué plazo podrán rectificar los errores materiales, de hecho o aritméticos existentes en sus actos?",
    opciones: [
      "En cualquier momento, de oficio o a instancia de los interesados.",
      "Únicamente dentro de las veinticuatro horas siguientes a su firma.",
      "En el plazo máximo de diez días naturales.",
      "Sólo mediante sentencia del Tribunal Supremo."
    ],
    correcta: 0,
    referencia: "Art. 109.1 y 109.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "Dos reglas del Art. 109 LPACAP: 1) REVOCACIÓN de actos de gravamen o desfavorables (Art. 109.1) = mientras no haya transcurrido el plazo de prescripción; 2) RECTIFICACIÓN de errores materiales, de hecho o aritméticos (Art. 109.2) = EN CUALQUIER MOMENTO.",
    pista: "Art. 109 LPACAP: Revocación (actos desfavorables/gravamen) = mientras no prescriba. Rectificación de errores materiales/aritméticos = EN CUALQUIER MOMENTO."
  },
  {
    id: "Q-W3-100",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Actos que Ponen Fin a la Vía Administrativa (Art. 114)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 114.2 de la Ley 39/2015 (LPACAP), en el ámbito estatal, ¿cuáles de los siguientes actos ponen fin a la vía administrativa (por lo que contra ellos NO cabe recurso de alzada, sino potestativo de reposición o contencioso-administrativo)?",
    opciones: [
      "Los actos administrativos de los miembros y órganos del Gobierno, los emanados de los Ministros y los Secretarios de Estado en el ejercicio de las competencias que tienen atribuidas los órganos de los que son titulares, y los emanados de los órganos directivos con nivel de Director General o superior en materia de personal.",
      "Los actos dictados por un Jefe de Negociado en materia de suministros.",
      "Cualquier acto de trámite no cualificado.",
      "Únicamente los Reales Decretos firmados por el Rey."
    ],
    correcta: 0,
    referencia: "Art. 114.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Detalle letal del Art. 114.2.c LPACAP!: En la AGE agotan la vía administrativa: 1) Los actos del Consejo de Ministros y Comisiones Delegadas; 2) Los de los Ministros y Secretarios de Estado; y 3) Los de los órganos directivos con nivel de DIRECTOR GENERAL O SUPERIOR cuando se dicten EN MATERIA DE PERSONAL.",
    pista: "Agotan la vía administrativa en la AGE (Art. 114.2 LPACAP): Gobierno + Ministros + Secretarios de Estado + Directores Generales o superiores EN MATERIA DE PERSONAL."
  },
  {
    id: "Q-W3-101",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Error en la Calificación del Recurso por el Interesado (Art. 115.2)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 115.2 de la Ley 39/2015 (LPACAP), el error o la ausencia de la calificación del recurso por parte del recurrente:",
    opciones: [
      "No será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter.",
      "Determina la inadmisión automática y el archivo sin posibilidad de subsanación.",
      "Obliga al ciudadano a pagar una tasa de penalización.",
      "Anula el acto administrativo impugnado."
    ],
    correcta: 0,
    referencia: "Art. 115.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "Principio antiformalista ('pro actione') del Art. 115.2 LPACAP: Si el ciudadano se equivoca al poner el nombre del recurso (p. ej., llama 'reposición' a una 'alzada') o no lo califica, el recurso se tramita igualmente siempre que del escrito se deduzca su verdadero carácter.",
    pista: "Art. 115.2 LPACAP: El error o ausencia en la calificación del recurso NO impide su tramitación si se deduce su verdadero carácter."
  },
  {
    id: "Q-W3-102",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Suspensión de la Ejecución del Acto Impugnado — Silencio Positivo a los 30 días (Art. 117.3)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 117 de la Ley 39/2015 (LPACAP), la interposición de cualquier recurso, excepto en los casos en que una disposición establezca lo contrario, no suspenderá la ejecución del acto impugnado. No obstante, si el recurrente solicita la suspensión de la ejecución del acto y transcurre un plazo determinado desde que la solicitud de suspensión tuvo entrada en el registro electrónico del órgano competente para decidir sobre la misma sin que éste haya dictado y notificado resolución expresa al respecto, ¿qué efecto se produce?",
    opciones: [
      "La ejecución del acto impugnado se entenderá suspendida si transcurre un mes desde que la solicitud de suspensión tuvo entrada en el registro electrónico del órgano competente para decidir sobre la misma.",
      "La solicitud de suspensión se entiende desestimada a los diez días.",
      "El recurso principal queda estimado en su totalidad.",
      "Caduca el recurso de alzada."
    ],
    correcta: 0,
    referencia: "Art. 117.3 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡Una de las preguntas más selectivas de la LPACAP (Art. 117.3)!: Aunque la regla general de los recursos es el silencio negativo, respecto a la SOLICITUD DE SUSPENSIÓN cautelar del acto recurrido, si el órgano competente no dicta y notifica resolución expresa sobre la suspensión en el plazo de UN MES desde que entró en su registro electrónico, el acto impugnado SE ENTENDERÁ SUSPENDIDO (silencio positivo en la medida cautelar).",
    pista: "¡OJO TRAMPA Art. 117.3 LPACAP!: Si pides la SUSPENSIÓN del acto al recurrir y no te contestan a esa solicitud en 1 MES -> se entiende SUSPENDIDA la ejecución."
  },
  {
    id: "Q-W3-103",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Ley 39/2015 — Revisión de Actos y Recursos Administrativos (Título V)",
    apartado: "Doble Silencio en el Recurso de Alzada (Art. 24.1 y 122)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 24.1 y 122 de la Ley 39/2015 (LPACAP), en los procedimientos de impugnación de actos y disposiciones el silencio tendrá efecto desestimatorio. No obstante, ¿en qué supuesto excepcional se entenderá ESTIMADO por silencio positivo el recurso de alzada?",
    opciones: [
      "Cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud por el transcurso del plazo, siempre que no se refiera a materias de dominio público, servicio público, medio ambiente, derecho de petición o transferencia de facultades.",
      "Siempre que el recurrente sea funcionario público.",
      "En el recurso potestativo de reposición y en el extraordinario de revisión.",
      "Nunca existe silencio positivo en un recurso de alzada."
    ],
    correcta: 0,
    referencia: "Art. 24.1 párrafo tercer de la Ley 39/2015 (LPACAP)",
    explicacion: "Regla del 'Doble Silencio' en el Recurso de Alzada (Art. 24.1 LPACAP): 1.º silencio (solicitud no contestada en plazo) + 2.º silencio (recurso de alzada contra ese primer silencio tampoco contestado en 3 meses) = SILENCIO POSITIVO (estimatorio), salvo en las materias excluidas (derecho de petición, dominio/servicio público, medio ambiente).",
    pista: "Doble silencio en Alzada (Art. 24.1 LPACAP): Silencio en la solicitud + Silencio en el recurso de alzada = SILENCIO POSITIVO (salvo materias excluidas)."
  },

  // ==========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL Y OO.II. (B3-T01 a B3-T07) — 47 PREGUNTAS
  // ==========================================================================

  // --- B3-T01: Ley 36/2015 de Seguridad Nacional (7 preguntas) ---
  {
    id: "Q-W3-104",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Componentes Fundamentales de la Seguridad Nacional (Art. 9)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 9 de la Ley 36/2015, de Seguridad Nacional, ¿cuáles son los cuatro Componentes Fundamentales de la Seguridad Nacional?",
    opciones: [
      "La Defensa Nacional, la Seguridad Pública, la Acción Exterior y la Inteligencia.",
      "El Ejército de Tierra, la Armada, el Ejército del Aire y la Policía Local.",
      "La Sanidad, la Educación, las Pensiones y el Transporte.",
      "El Congreso, el Senado, el Gobierno y el Poder Judicial."
    ],
    correcta: 0,
    referencia: "Art. 9 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "¡No confundir los 'Componentes Fundamentales' (Art. 9) con los 'Ámbitos de especial interés' (Art. 10)!: Los 4 COMPONENTES FUNDAMENTALES (Art. 9 Ley 36/2015) son: 1) Defensa Nacional, 2) Seguridad Pública, 3) Acción Exterior y 4) Inteligencia (en ediciones/textos consolidados se subraya la tríada clásica Defensa Nacional, Seguridad Pública y Acción Exterior reguladas en el Art. 9).",
    pista: "Art. 9 Ley 36/2015 (Componentes Fundamentales): Defensa Nacional + Seguridad Pública + Acción Exterior."
  },
  {
    id: "Q-W3-105",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Situación de Interés para la Seguridad Nacional — Declaración (Art. 23 y 24)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 24 de la Ley 36/2015, ¿quién declara la 'Situación de Interés para la Seguridad Nacional', mediante qué instrumento normativo y qué incluye dicha declaración?",
    opciones: [
      "La declarará el Presidente del Gobierno mediante Real Decreto, que incluirá al menos la definición de la crisis, el ámbito geográfico, la duración, el nombramiento en su caso de una autoridad funcional y la determinación de los recursos humanos y materiales necesarios.",
      "La declara el Ministro del Interior mediante Orden Ministerial.",
      "La declara el JEMAD mediante Instrucción Militar.",
      "La declara el Senado por mayoría de dos tercios."
    ],
    correcta: 0,
    referencia: "Art. 24 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "La Situación de Interés para la Seguridad Nacional (Art. 23 y 24 Ley 36/2015) es declarada exclusivamente por el PRESIDENTE DEL GOBIERNO mediante REAL DECRETO, ejerciendo la dirección de la misma asistido por el Consejo de Seguridad Nacional.",
    pista: "Declaración de Situación de Interés para la Seguridad Nacional (Art. 24 Ley 36/2015) = PRESIDENTE DEL GOBIERNO mediante REAL DECRETO."
  },
  {
    id: "Q-W3-106",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Situación de Interés para la Seguridad Nacional — Suspensión de Derechos Fundamentales (Art. 23.3)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 23.3 de la Ley 36/2015, la declaración de la Situación de Interés para la Seguridad Nacional:",
    opciones: [
      "No podrá incluir, en ningún caso, la suspensión de los derechos fundamentales y libertades públicas de los ciudadanos (para lo cual habría que acudir a los estados del artículo 116 de la Constitución).",
      "Suspende automáticamente todos los derechos fundamentales del Título I de la Constitución.",
      "Equivale a la declaración del estado de sitio.",
      "Disuelve las Cortes Generales."
    ],
    correcta: 0,
    referencia: "Art. 23.3 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "¡Pregunta trampa fija de la Ley 36/2015!: La Situación de Interés para la Seguridad Nacional es un mecanismo de coordinación reforzada de recursos ante crisis graves, pero NUNCA puede implicar la suspensión de derechos fundamentales y libertades públicas (Art. 23.3).",
    pista: "Art. 23.3 Ley 36/2015: La Situación de Interés para la Seguridad Nacional NUNCA puede suspender derechos fundamentales."
  },
  {
    id: "Q-W3-107",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Control Parlamentario — Comisión Mixta de Seguridad Nacional (Art. 16)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la Ley 36/2015, el Gobierno informará inmediatamente al Congreso de los Diputados de las medidas adoptadas ante una Situación de Interés para la Seguridad Nacional. ¿A través de qué comisión parlamentaria ejercen las Cortes Generales el seguimiento de la política de Seguridad Nacional y ante quién se presenta el Informe Anual de Seguridad Nacional?",
    opciones: [
      "A través de la Comisión Mixta Congreso-Senado de Seguridad Nacional.",
      "A través del Tribunal de Cuentas.",
      "Exclusivamente ante las Asambleas de las Comunidades Autónomas.",
      "Ante el Consejo de Estado."
    ],
    correcta: 0,
    referencia: "Art. 13 y Disposición Adicional de la Ley 36/2015",
    explicacion: "En las Cortes Generales existe la Comisión Mixta (Congreso-Senado) de Seguridad Nacional, ante la cual el Gobierno presenta anualmente el Informe Anual de Seguridad Nacional.",
    pista: "Órgano parlamentario de control en la Ley 36/2015 = Comisión Mixta (Congreso-Senado) de Seguridad Nacional."
  },
  {
    id: "Q-W3-108",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Comités Especializados del Consejo de Seguridad Nacional (Art. 21)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Según el artículo 21 de la Ley 36/2015, para el ejercicio de sus funciones en los ámbitos de especial interés (ciberseguridad, seguridad marítima, energética, aeroespacial, no proliferación, etc.), el Consejo de Seguridad Nacional podrá acordar la creación de órganos de apoyo denominados:",
    opciones: [
      "Comités Especializados.",
      "Juntas Militares de Defensa.",
      "Tribunales de Excepción.",
      "Subdelegaciones Provinciales."
    ],
    correcta: 0,
    referencia: "Art. 21.3 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El Consejo de Seguridad Nacional cuenta con el Departamento de Seguridad Nacional (DSN, órgano de trabajo permanente y Secretaría Técnica) y con los COMITÉS ESPECIALIZADOS (Consejo Nacional de Ciberseguridad, Consejo Nacional de Seguridad Marítima, Consejo Nacional de Seguridad Aeroespacial, Comité Especializado de Inmigración, de Seguridad Energética, etc.).",
    pista: "Órganos de apoyo por ámbitos del Consejo de Seguridad Nacional (Art. 21.3) = Comités Especializados."
  },
  {
    id: "Q-W3-109",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Catálogo de Recursos de la Seguridad Nacional (Art. 27)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "Conforme a los artículos 27 y 28 de la Ley 36/2015, la contribución de recursos a la Seguridad Nacional incluye el Catálogo de Recursos de la Seguridad Nacional (públicos y privados). ¿A qué órgano corresponde coordinar y aprobar las directrices sobre dicho catálogo?",
    opciones: [
      "Al Consejo de Seguridad Nacional, en colaboración con las Comunidades Autónomas y demás Administraciones Públicas.",
      "A los Ayuntamientos de menos de mil habitantes.",
      "A las Cámaras de Comercio extranjeras.",
      "A las asociaciones profesionales militares."
    ],
    correcta: 0,
    referencia: "Arts. 27 y 28 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El Consejo de Seguridad Nacional establece los criterios para elaborar y actualizar el Catálogo de Recursos de la Seguridad Nacional (humanos y materiales, públicos y privados) susceptibles de ser movilizados en una Situación de Interés para la Seguridad Nacional.",
    pista: "Catálogo de Recursos de la Seguridad Nacional (Arts. 27-28 Ley 36/2015) = bajo directrices del Consejo de Seguridad Nacional."
  },
  {
    id: "Q-W3-110",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Cultura de Seguridad Nacional (Art. 7)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 7 de la Ley 36/2015, el Gobierno promoverá una Cultura de Seguridad Nacional que favorezca la implicación activa de la sociedad en su preservación y garantía, como requisito indispensable para:",
    opciones: [
      "El disfrute de la libertad, la justicia, el bienestar, el progreso y los derechos de los ciudadanos.",
      "La instauración del servicio militar obligatorio de cinco años.",
      "La supresión de los medios de comunicación privados.",
      "El cierre de las fronteras con la Unión Europea."
    ],
    correcta: 0,
    referencia: "Art. 7 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El Art. 7 de la Ley 36/2015 regula la promoción de la Cultura de Seguridad Nacional para concienciar y corresponsabilizar a la ciudadanía en la preservación de su libertad, bienestar y derechos.",
    pista: "Art. 7 Ley 36/2015: Promoción de la Cultura de Seguridad Nacional e implicación activa de la sociedad."
  },

  // --- B3-T02: RD 1150/2021 Estrategia de Seguridad Nacional 2021 (7 preguntas) ---
  {
    id: "Q-W3-111",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Lema y Fecha de Aprobación de la ESN 2021",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Fácil"],
    pregunta: "¿Mediante qué Real Decreto se aprobó la vigente Estrategia de Seguridad Nacional 2021 y cuál es su lema o subtítulo oficial?",
    opciones: [
      "Real Decreto 1150/2021, de 28 de diciembre, bajo el lema 'Un proyecto compartido'.",
      "Real Decreto 521/2020, bajo el lema 'Fuerza 2035'.",
      "Ley Orgánica 5/2005, bajo el lema 'Defensa Integral'.",
      "Real Decreto 205/2024, bajo el lema 'Europa Segura'."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021, de 28 de diciembre (ESN 2021)",
    explicacion: "La Estrategia de Seguridad Nacional 2021 (tercera ESN tras las de 2013 y 2017) fue aprobada por el Real Decreto 1150/2021, de 28 de diciembre, con el subtítulo 'Un proyecto compartido'.",
    pista: "ESN 2021 = RD 1150/2021, de 28 de diciembre + lema 'Un proyecto compartido'."
  },
  {
    id: "Q-W3-112",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Capítulo 1 — Vectores de Transformación Global en la ESN 2021",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Capítulo 1 de la Estrategia de Seguridad Nacional 2021 (' vectores de transformación'), ¿cuáles son las grandes dinámicas globales que están reconfigurando la seguridad internacional?",
    opciones: [
      "El retorno de la geopolítica y la competencia entre grandes potencias, la disrupción tecnológica y digital, la transición ecológica y el cambio climático, y las transformaciones demográficas y socioeconómicas.",
      "La desaparición total de internet y el regreso a la agricultura medieval.",
      "La disolución de la ONU y de la OTAN en 2021.",
      "La ausencia total de conflictos híbridos."
    ],
    correcta: 0,
    referencia: "Capítulo 1 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    explicacion: "El Capítulo 1 de la ESN 2021 analiza los vectores de transformación: 1) Geopolítica en transición (rivalidad EE.UU.-China, asertividad rusa), 2) Transformación tecnológica y digital, 3) Transición ecológica y emergencia climática, y 4) Brechas socioeconómicas y demográficas.",
    pista: "Vectores de transformación ESN 2021: Geopolítica + Disrupción tecnológica + Transición ecológica + Demografía/economía."
  },
  {
    id: "Q-W3-113",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Capítulo 2 — Regiones de Especial Interés para España (Sahel, Magreb, Golfo de Guinea, América Latina)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Capítulo 2 de la Estrategia de Seguridad Nacional 2021 ('Una España segura y global'), ¿qué región africana es señalada específicamente como la 'frontera avanzada' de seguridad para España y Europa por la confluencia de terrorismo yihadista, crimen organizado, fragilidad institucional y flujos migratorios irregulares?",
    opciones: [
      "El Sahel (junto con el Norte de África/Magreb y la fachada atlántica africana hasta el Golfo de Guinea).",
      "Sudáfrica y Madagascar.",
      "Oceanía y la Polinesia.",
      "Escandinavia."
    ],
    correcta: 0,
    referencia: "Capítulo 2 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    explicacion: "La ESN 2021 destaca el Flanco Sur (Norte de África/Magreb, el SAHEL como frontera avanzada de seguridad y el Golfo de Guinea por la seguridad marítima y energética), además del espacio euroatlántico, el Mediterráneo y América Latina.",
    pista: "Flanco Sur en la ESN 2021: Magreb/Norte de África + El SAHEL (frontera avanzada) + Golfo de Guinea."
  },
  {
    id: "Q-W3-114",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Capítulo 3 — Estrategias Híbridas y Zona Gris",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Capítulo 3 de la Estrategia de Seguridad Nacional 2021 ('Riesgos y amenazas'), ¿qué lugar ocupan las 'Campañas de desinformación', las 'Estrategias híbridas' y la vulnerabilidad del ciberespacio?",
    opciones: [
      "Se sitúan entre los riesgos y amenazas de mayor impacto y probabilidad e interconexión, ya que las estrategias híbridas combinan de forma sincronizada instrumentos militares y no militares (ciberataques, desinformación, coerción económica o instrumentalización de flujos migratorios) manteniéndose bajo el umbral del conflicto armado abierto (Zona Gris).",
      "No aparecen mencionadas en la Estrategia de Seguridad Nacional 2021.",
      "Se consideran amenazas exclusivamente deportivas.",
      "Sólo afectan a países sin acceso al mar."
    ],
    correcta: 0,
    referencia: "Capítulo 3 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    explicacion: "Una de las grandes novedades de la ESN 2021 es dar protagonismo central a las ESTRATEGIAS HÍBRIDAS y a las CAMPAÑAS DE DESINFORMACIÓN (además de pandemias/epidemias, ciberamenazas, terrorismo, espionaje y proliferación ADM) como multiplicadores que conectan casi todos los demás riesgos.",
    pista: "Novedad estrella del Cap. 3 ESN 2021: Estrategias híbridas (Zona Gris) + Campañas de desinformación + Pandemias/epidemias."
  },
  {
    id: "Q-W3-115",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Capítulo 4 — Tres Principios Rectores del Sistema de Seguridad Nacional en la ESN 2021",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "El Capítulo 4 de la Estrategia de Seguridad Nacional 2021 se dedica a la 'Gestión integrada de crisis' y articula el fortalecimiento del Sistema de Seguridad Nacional en torno a tres elementos clave:",
    opciones: [
      "1) Alerta temprana y evaluación del riesgo (anticipación), 2) Gestión integrada de crisis y 3) Resiliencia y preparación de recursos estratégicos.",
      "1) Improvisación, 2) Aislamiento internacional y 3) Privatización.",
      "1) Estado de alarma, 2) Estado de excepción y 3) Estado de sitio.",
      "1) Infantería, 2) Caballería y 3) Artillería."
    ],
    correcta: 0,
    referencia: "Capítulo 4 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    explicacion: "El Capítulo 4 de la ESN 2021 desarrolla el modelo de gestión de crisis basado en: Anticipación (indicadores de alerta temprana), Respuesta/Gestión integrada de crisis y Resiliencia (Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial - RECAPI).",
    pista: "Cap. 4 ESN 2021: Alerta temprana/Anticipación + Gestión integrada de crisis + Resiliencia (y Reserva Estratégica RECAPI)."
  },
  {
    id: "Q-W3-116",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Tras la experiencia de las crisis recientes, la Estrategia de Seguridad Nacional 2021 impulsa la creación de una Reserva Estratégica para garantizar el suministro de recursos esenciales e industriales críticos. ¿Qué siglas identifican a esta reserva?",
    opciones: [
      "RECAPI (Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial).",
      "RAPFAS (Registro de Asociaciones Profesionales).",
      "COPERFAS (Consejo de Personal de las FAS).",
      "SEGENPOL (Secretaría General de Política de Defensa)."
    ],
    correcta: 0,
    referencia: "Capítulo 4 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    explicacion: "¡Sigla de examen de la ESN 2021!: RECAPI = Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial, destinada a reducir la dependencia exterior en suministros esenciales ante crisis graves.",
    pista: "RECAPI (ESN 2021) = Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial."
  },
  {
    id: "Q-W3-117",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "RD 1150/2021 — Estrategia de Seguridad Nacional 2021 (ESN 2021)",
    apartado: "Estructura de los 5 Capítulos de la ESN 2021",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "¿En cuántos capítulos se estructura la Estrategia de Seguridad Nacional 2021 (RD 1150/2021) y cuántas líneas de acción establece en su Capítulo 5?",
    opciones: [
      "En 5 capítulos, con 3 ejes estratégicos ('Proteger, Promover y Participar') y 33 líneas de acción en el Capítulo 5.",
      "En 10 títulos y 169 artículos.",
      "En 2 capítulos y 5 líneas de acción.",
      "En 12 libros sin líneas de acción."
    ],
    correcta: 0,
    referencia: "RD 1150/2021 (Índice de la ESN 2021)",
    explicacion: "Radiografía numérica de la ESN 2021: 5 Capítulos + 3 Ejes Estratégicos (Proteger, Promover y Participar) + 15 ámbitos de seguridad + 33 líneas de acción.",
    pista: "ESN 2021 en cifras: 5 Capítulos + 3 Ejes (Proteger, Promover, Participar) + 33 Líneas de Acción."
  },

  // --- B3-T03: PDC-01(B) Doctrina para el Empleo de las FAS (7 preguntas) ---
  {
    id: "Q-W3-118",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Cinco Ámbitos de Operación y Dimensión Cognitiva",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la publicación doctrinal conjunta PDC-01(B), ¿cuáles son los cinco ámbitos de operación (dominios) reconocidos doctrinalmente en los que actúan las Fuerzas Armadas, y qué entorno transversal abarca las dimensiones física, virtual y cognitiva?",
    opciones: [
      "Los cinco ámbitos de operación son el Terrestre, el Marítimo, el Aeroespacial (Aéreo y Espacial) y el Ciberespacial (Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial); y el Entorno de la Información comprende las dimensiones física, virtual y cognitiva.",
      "Los cinco ámbitos son Política, Economía, Justicia, Sanidad y Deporte.",
      "Sólo existen dos ámbitos: Tierra y Mar.",
      "El ámbito cognitivo sustituye al ámbito terrestre."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Doctrina para el empleo de las FAS",
    explicacion: "En la PDC-01(B): Los 5 ÁMBITOS DE OPERACIÓN (dominios) son: 1) Terrestre, 2) Marítimo, 3) Aéreo, 4) Espacial y 5) Ciberespacial (a menudo agrupados Aéreo y Espacial como Aeroespacial o desglosados en los 5 ámbitos). Y el ENTORNO DE LA INFORMACIÓN atraviesa transversalmente todos los ámbitos con sus 3 dimensiones: Física, Virtual (lógica) y Cognitiva.",
    pista: "PDC-01(B): 5 Ámbitos = Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial. Entorno de la Información = 3 dimensiones (Física, Virtual y Cognitiva)."
  },
  {
    id: "Q-W3-119",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Continuo de la Competición (Cooperación, Confrontación y Conflicto Armado)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "La doctrina PDC-01(B) supera la visión binaria clásica entre 'paz' y 'guerra' mediante el concepto del 'Continuo de la competición'. ¿Qué tres estados o fases comprende este continuo?",
    opciones: [
      "Cooperación, Confrontación (donde se desarrolla la Zona Gris) y Conflicto armado.",
      "Ataque, Retirada y Rendición.",
      "Alarma, Excepción y Sitio.",
      "Iniciación, Instrucción y Resolución."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — El Continuo de la Competición",
    explicacion: "¡Concepto estrella de la PDC-01(B)!: Las relaciones entre actores estratégicos se mueven en un CONTINUO DE LA COMPETICIÓN dividido en 3 estadios que pueden coexistir: 1) COOPERACIÓN, 2) CONFRONTACIÓN (rivalidad bajo el umbral de la violencia armada abierta, propia de la 'Zona Gris' y amenazas híbridas) y 3) CONFLICTO ARMADO.",
    pista: "Continuo de la Competición PDC-01(B) = Cooperación + Confrontación (Zona Gris) + Conflicto Armado."
  },
  {
    id: "Q-W3-120",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Niveles de Conducción de las Operaciones Militares",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01(B), ¿cuáles son los niveles de planeamiento y conducción de las operaciones militares y quién ejerce el nivel estratégico-militar y el nivel operacional en las Fuerzas Armadas españolas?",
    opciones: [
      "Los niveles son Político-Estratégico (Gobierno/Presidente y Ministro de Defensa), Estratégico-Militar (JEMAD), Operacional (Comandante del Mando de Operaciones CMOPS) y Táctico (Mandos Componentes y Comandantes de Fuerza en teatro).",
      "Todos los niveles los ejerce el Jefe de Pelotón.",
      "El nivel operacional lo ejerce el Tribunal Constitucional y el táctico el Senado.",
      "El JEME ejerce el nivel político-estratégico."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Niveles de las Operaciones",
    explicacion: "Escalera de mando operativo en la PDC-01(B): 1) Nivel Político-Estratégico = Gobierno (Presidente y Ministro de Defensa); 2) Nivel Estratégico-Militar = JEMAD; 3) Nivel Operacional = CMOPS (Comandante del Mando de Operaciones); 4) Nivel Táctico = Mandos Componentes y Comandantes de las organizaciones operativas desplegadas.",
    pista: "Niveles PDC-01(B): Político-Estratégico (Gobierno/MINISDEF) -> Estratégico-Militar (JEMAD) -> Operacional (CMOPS) -> Táctico (Mandos Componentes/Fuerza)."
  },
  {
    id: "Q-W3-121",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Funciones Conjuntas (Fuegos, Maniobra, Inteligencia, Mando y Control, Sostenimiento, Protección, Información)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la doctrina conjunta PDC-01(B), las capacidades similares y actividades afines que el comandante conjunto integra y sincroniza para generar efectos se agrupan en las denominadas 'Funciones Conjuntas'. ¿Cuáles son?",
    opciones: [
      "Mando y Control (C2), Inteligencia, Maniobra, Fuegos, Sostenimiento (Logística), Protección e Información (Operaciones en el Entorno de la Información).",
      "Contabilidad, Nóminas, Vacaciones y Jardinería.",
      "Tierra, Mar, Aire y Espacio.",
      "Leves, Graves y Muy Graves."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Las Funciones Conjuntas",
    explicacion: "Las Funciones Conjuntas en la PDC-01(B) son las herramientas que sincroniza el mando operativo: Mando y Control (C2), Inteligencia, Maniobra, Fuegos, Sostenimiento, Protección e Información.",
    pista: "Funciones Conjuntas PDC-01(B): Mando y Control + Inteligencia + Maniobra + Fuegos + Sostenimiento + Protección + Información."
  },
  {
    id: "Q-W3-122",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Componente del Poder Militar: Conceptual, Moral y Físico",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01(B), la Capacidad de Combate (o Poder Militar) de la Fuerza Conjunta se sustenta en tres componentes interdependientes. ¿En cuál de ellos se encuadra la 'Doctrina', el pensamiento militar y la comprensión del entorno?",
    opciones: [
      "En el Componente Conceptual (junto al Componente Moral, que incluye motivación, liderazgo y valores; y el Componente Físico, que incluye personal, material y adiestramiento).",
      "En el Componente Meramente Financiero.",
      "En el Componente Sindical.",
      "La doctrina no forma parte de ningún componente del poder militar."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Componentes de la Capacidad de Combate",
    explicacion: "¡Tríada clásica de la PDC-01(B) que cae siempre en examen!: Los 3 componentes del Poder Militar / Capacidad de Combate son: 1) FÍSICO (medios materiales, efectivos humanos, instrucción/adiestramiento), 2) MORAL (voluntad de vencer, liderazgo, ética, cohesión) y 3) CONCEPTUAL (doctrina, principios, innovación y lecciones aprendidas).",
    pista: "3 Componentes del Poder Militar (PDC-01B): Físico (medios/efectivos) + Moral (liderazgo/voluntad de vencer) + Conceptual (DOCTRINA)."
  },
  {
    id: "Q-W3-123",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Mando Orientado a la Misión (Mission Command)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Conforme a la PDC-01(B), ¿cuál es la filosofía fundamental de ejercicio del mando en las Fuerzas Armadas, basada en la confianza mutua, en expresar claramente el propósito del jefe ('Intención del Comandante') y en otorgar libertad de acción al subordinado para decidir cómo alcanzarlo?",
    opciones: [
      "El Mando orientado a la misión (Mission Command).",
      "El Mando centralizado rígido sin iniciativa.",
      "La autogestión asamblearia.",
      "La delegación total de la responsabilidad del jefe."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Filosofía de Mando",
    explicacion: "La filosofía de mando de las FAS en la PDC-01(B) (en línea con el Art. 56 de las RROO) es el MANDO ORIENTADO A LA MISIÓN: ejecución descentralizada basada en la confianza mutua, la comprensión del propósito del mando superior y la iniciativa disciplinada del subordinado.",
    pista: "Filosofía de mando PDC-01(B) = Mando orientado a la misión (propósito claro del jefe + confianza mutua + libertad de acción e iniciativa disciplinada)."
  },
  {
    id: "Q-W3-124",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Operaciones Multidominio (MDO) y Enfoque Integral (Comprehensive Approach)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Según la PDC-01(B), ¿en qué consiste el 'Enfoque Integral' (Comprehensive Approach) en la gestión de crisis y conflictos?",
    opciones: [
      "En la acción coordinada y sinérgica del instrumento militar junto con los demás instrumentos de poder del Estado (diplomático, económico, informativo y civil) y organizaciones internacionales/no gubernamentales para alcanzar los objetivos estratégicos.",
      "En emplear únicamente carros de combate prescindiendo de la diplomacia.",
      "En que el Ejército asuma el control de los bancos centrales.",
      "En actuar siempre en solitario fuera de la OTAN y de la UE."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Enfoque Integral e Instrumentos de Poder (DIME)",
    explicacion: "El Enfoque Integral coordina los 4 grandes instrumentos de poder nacional —Diplomático, de la Información, Militar y Económico (acrónimo DIME)— junto a actores civiles e internacionales.",
    pista: "Enfoque Integral PDC-01(B) = coordinación sinérgica de los instrumentos de poder (Diplomático, Información, Militar y Económico - DIME)."
  },

  // --- B3-T04: Organización de las Naciones Unidas ONU (7 preguntas) ---
  {
    id: "Q-W3-125",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Consejo de Seguridad de la ONU — Mayoría para adoptar decisiones (Art. 27 Carta)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 27 de la Carta de las Naciones Unidas, el Consejo de Seguridad está compuesto por 15 miembros (5 permanentes y 10 no permanentes elegidos por 2 años). ¿Cuántos votos afirmativos se requieren para adoptar decisiones en el Consejo de Seguridad y en cuáles opera el llamado 'derecho de veto'?",
    opciones: [
      "Se requieren nueve (9) votos afirmativos de los 15 miembros: en las cuestiones de procedimiento basta el voto afirmativo de 9 miembros cualesquiera; y en todas las demás cuestiones (de fondo) se requiere el voto afirmativo de 9 miembros incluyendo los votos afirmativos (o no oposición/abstención) de todos los 5 miembros permanentes.",
      "Se requiere unanimidad de los 15 miembros en todas las votaciones.",
      "Basta con mayoría simple de 8 votos y el veto lo tienen los 10 miembros no permanentes.",
      "Lo decide en solitario el Secretario General de la ONU."
    ],
    correcta: 0,
    referencia: "Art. 27 de la Carta de las Naciones Unidas",
    explicacion: "¡Regla 9 de 15 del Consejo de Seguridad de la ONU!: Las decisiones del Consejo de Seguridad requieren 9 VOTOS AFIRMATIVOS sobre 15. En cuestiones de fondo (no procedimentales), ninguno de los 5 miembros permanentes (EE.UU., Reino Unido, Francia, Rusia y China) puede votar en contra (derecho de veto).",
    pista: "Consejo de Seguridad ONU (15 miembros: 5 permanentes + 10 no permanentes por 2 años): mayoría = 9 VOTOS afirmativos (sin veto de los 5 permanentes en asuntos de fondo)."
  },
  {
    id: "Q-W3-126",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Capítulos VI y VII de la Carta de la ONU — Arreglo Pacífico vs Acción en caso de Amenazas a la Paz",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la Carta de las Naciones Unidas, ¿qué diferencia fundamental existe entre el Capítulo VI y el Capítulo VII en relación con las operaciones de paz y seguridad?",
    opciones: [
      "El Capítulo VI regula el 'Arreglo pacífico de controversias' (negociación, mediación, conciliación, arbitraje), mientras que el Capítulo VII regula la 'Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión' (permitiendo al Consejo de Seguridad adoptar medidas coercitivas, incluido el uso de la fuerza armada).",
      "El Capítulo VI autoriza la guerra nuclear y el Capítulo VII regula la UNESCO.",
      "Ambos capítulos regulan el presupuesto interno de la Secretaría.",
      "El Capítulo VII prohíbe el uso de cascos azules."
    ],
    correcta: 0,
    referencia: "Capítulos VI y VII de la Carta de las Naciones Unidas",
    explicacion: "¡Distinción clásica de examen internacional!: CAPÍTULO VI = Arreglo pacífico de controversias (sin medidas coercitivas). CAPÍTULO VII = Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión (medidas coercitivas sancionadoras y uso de la fuerza). CAPÍTULO VIII = Acuerdos regionales.",
    pista: "Carta ONU: Capítulo VI = Arreglo pacífico de controversias | Capítulo VII = Medidas coercitivas y uso de la fuerza ante amenazas/agresión | Capítulo VIII = Acuerdos regionales."
  },
  {
    id: "Q-W3-127",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Corte Internacional de Justicia (CIJ) — Sede, Composición y Mandato",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "La Corte Internacional de Justicia (CIJ) es el órgano judicial principal de las Naciones Unidas. ¿Dónde tiene su sede (siendo el único de los 6 órganos principales fuera de Nueva York), cuántos magistrados la componen y cuál es la duración de su mandato?",
    opciones: [
      "Tiene su sede en La Haya (Países Bajos, en el Palacio de la Paz), y está compuesta por 15 magistrados elegidos por la Asamblea General y el Consejo de Seguridad por un mandato de 9 años (renovándose por tercios cada 3 años).",
      "Tiene su sede en Ginebra y está compuesta por 12 jueces por 5 años.",
      "Tiene su sede en Nueva York y está compuesta por 9 jueces vitalicios.",
      "Tiene su sede en Bruselas y juzga faltas disciplinarias."
    ],
    correcta: 0,
    referencia: "Art. 92 de la Carta de la ONU y Estatuto de la CIJ",
    explicacion: "¡Datos clave de la Corte Internacional de Justicia (CIJ)!: 1) Sede en LA HAYA (Países Bajos); 2) Compuesta por 15 MAGISTRADOS de distinta nacionalidad; 3) Elegidos por un mandato de 9 AÑOS (con posibilidad de reelección, renovándose 5 cada 3 años) por la Asamblea General y el Consejo de Seguridad. (No confundir con la Corte Penal Internacional CPI, creada por el Estatuto de Roma de 1998, que no es órgano principal de la Carta).",
    pista: "Corte Internacional de Justicia (CIJ) = Sede en LA HAYA + 15 magistrados + mandato de 9 AÑOS."
  },
  {
    id: "Q-W3-128",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Consejo Económico y Social (ECOSOC) — Número de Miembros y Mandato",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 61 de la Carta de las Naciones Unidas, ¿por cuántos miembros está integrado el Consejo Económico y Social (ECOSOC) de la ONU y por cuántos años son elegidos por la Asamblea General?",
    opciones: [
      "Por cincuenta y cuatro (54) miembros, elegidos por la Asamblea General por un mandato de tres (3) años (renovándose 18 cada año).",
      "Por quince (15) miembros elegidos por dos años.",
      "Por los 193 Estados miembros de forma permanente.",
      "Por veintisiete (27) comisarios europeos."
    ],
    correcta: 0,
    referencia: "Art. 61 de la Carta de las Naciones Unidas",
    explicacion: "¡Contraste numérico de los órganos de la ONU!: Asamblea General = 193 Estados. Consejo de Seguridad = 15 miembros (5 permanentes + 10 por 2 años). ECOSOC = 54 miembros (por 3 años). Corte Internacional de Justicia = 15 magistrados (por 9 años). Secretario General = mandato de 5 años prorrogable.",
    pista: "ECOSOC (Consejo Económico y Social ONU) = 54 MIEMBROS elegidos por 3 AÑOS."
  },
  {
    id: "Q-W3-129",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Secretario General de la ONU — Nombramiento y Mandato (Art. 97)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 97 de la Carta de las Naciones Unidas, el Secretario General es el más alto funcionario administrativo de la Organización. ¿Cómo es nombrado y cuál es la duración de su mandato?",
    opciones: [
      "Es nombrado por la Asamblea General a recomendación del Consejo de Seguridad, por un período de cinco (5) años renovable (actualmente el portugués António Guterres).",
      "Es elegido por sorteo entre los jefes de Estado del G7 por un año.",
      "Es nombrado en solitario por el Presidente de Estados Unidos.",
      "Tiene carácter vitalicio y hereditario."
    ],
    correcta: 0,
    referencia: "Art. 97 de la Carta de las Naciones Unidas",
    explicacion: "El Secretario General de la ONU (Art. 97 Carta) es nombrado por la ASAMBLEA GENERAL a recomendación del CONSEJO DE SEGURIDAD (por lo que su propuesta está sujeta al veto de los 5 permanentes) por un mandato de 5 AÑOS renovable.",
    pista: "Secretario General ONU (Art. 97): nombra la Asamblea General a recomendación del Consejo de Seguridad (mandato 5 años)."
  },
  {
    id: "Q-W3-130",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Ingreso de España en la ONU y Fecha de la Carta de San Francisco",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Fácil"],
    pregunta: "¿En qué fechas exactas se firmó y entró en vigor la Carta de las Naciones Unidas en 1945, y en qué fecha ingresó España en la ONU?",
    opciones: [
      "La Carta se firmó en San Francisco el 26 de junio de 1945 y entró en vigor el 24 de octubre de 1945 (Día de las Naciones Unidas); y España ingresó en la ONU el 14 de diciembre de 1955.",
      "La Carta se firmó en 1919 y España ingresó en 1982.",
      "La Carta se firmó en 1949 y España ingresó en 1986.",
      "España fue uno de los 51 miembros fundadores en 1945."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas",
    explicacion: "Tres fechas imprescindibles del Tema 4 del Bloque 3: 1) Firma en San Francisco = 26 de junio de 1945; 2) Entrada en vigor = 24 de octubre de 1945; 3) Ingreso de España en la ONU = 14 de diciembre de 1955.",
    pista: "ONU: Firma = 26 junio 1945 | Vigor = 24 octubre 1945 | Ingreso de España = 14 diciembre 1955 (OJO: 1982 es OTAN y 1986 es UE)."
  },
  {
    id: "Q-W3-131",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Seis Idiomas Oficiales de la ONU",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "¿Cuáles son los seis idiomas oficiales de la Organización de las Naciones Unidas (ONU)?",
    opciones: [
      "Árabe, chino, español, francés, inglés y ruso.",
      "Alemán, italiano, japonés, portugués, inglés y francés.",
      "Únicamente el inglés y el francés.",
      "Español, inglés, alemán, portugués, hindi y japonés."
    ],
    correcta: 0,
    referencia: "Reglamento de la Asamblea General de la ONU",
    explicacion: "¡Cuidado con los idiomas trampa (el alemán, el italiano, el portugués o el japonés NO son idiomas oficiales de la ONU)!: Los 6 idiomas oficiales de la ONU son: Árabe, Chino, Español, Francés, Inglés y Ruso.",
    pista: "6 idiomas oficiales ONU = Árabe, Chino, Español, Francés, Inglés y Ruso (el alemán NO lo es)."
  },

  // --- B3-T05: OTAN y OSCE (6 preguntas) ---
  {
    id: "Q-W3-132",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN) y OSCE",
    apartado: "Artículos 4 y 5 del Tratado de Washington (1949)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Tratado del Atlántico Norte (firmado en Washington el 4 de abril de 1949), ¿qué regulan respectivamente el Artículo 4 y el Artículo 5?",
    opciones: [
      "El Artículo 4 regula el mecanismo de consulta entre las Partes cuando la integridad territorial, la independencia política o la seguridad de cualquiera de ellas se vea amenazada; y el Artículo 5 consagra la cláusula de defensa colectiva (un ataque armado contra una o varias de ellas en Europa o América del Norte se considerará como un ataque dirigido contra todas ellas).",
      "El Artículo 4 regula la defensa colectiva y el Artículo 5 la expulsión de aliados.",
      "El Artículo 5 obliga a invadir países fuera del área euroatlántica.",
      "El Tratado de Washington consta de 200 artículos."
    ],
    correcta: 0,
    referencia: "Arts. 4 y 5 del Tratado de Washington (4 de abril de 1949)",
    explicacion: "El Tratado de Washington tiene solo 14 artículos. Sus dos artículos más preguntados son: ARTÍCULO 4 = Consultas ante amenaza a la integridad territorial, independencia política o seguridad; ARTÍCULO 5 = Defensa colectiva (invocado por primera y única vez en la historia tras los atentados del 11 de septiembre de 2001 contra EE.UU.).",
    pista: "Tratado de Washington (14 artículos): Art. 4 = Consultas ante amenaza | Art. 5 = Defensa Colectiva."
  },
  {
    id: "Q-W3-133",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN) y OSCE",
    apartado: "Concepto Estratégico de Madrid 2022 — Tres Tareas Fundamentales de la OTAN",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el vigente Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid de junio de 2022, ¿cuáles son las tres Tareas Fundamentales (Core Tasks) de la Alianza Atlántica?",
    opciones: [
      "1) Disuasión y defensa, 2) Prevención y gestión de crisis, y 3) Seguridad cooperativa.",
      "1) Unión aduanera, 2) Moneda única y 3) Política agraria.",
      "1) Arbitraje judicial, 2) Ayuda al desarrollo y 3) Descolonización.",
      "1) Ataque preventivo, 2) Anexión y 3) Embargo."
    ],
    correcta: 0,
    referencia: "Concepto Estratégico de la OTAN (Cumbre de Madrid, 2022)",
    explicacion: "Las 3 Tareas Fundamentales (Core Tasks) de la OTAN reafirmadas en el Concepto Estratégico de Madrid 2022 son: 1) Disuasión y defensa (Deterrence and Defence), 2) Prevención y gestión de crisis (Crisis Prevention and Management) y 3) Seguridad cooperativa (Cooperative Security).",
    pista: "3 Tareas Fundamentales OTAN (Concepto Estratégico Madrid 2022): Disuasión y defensa + Prevención y gestión de crisis + Seguridad cooperativa."
  },
  {
    id: "Q-W3-134",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN) y OSCE",
    apartado: "Estructura de Mando Militar de la OTAN — ACO (SHAPE) y ACT (Norfolk)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Por debajo del Comité Militar (máxima autoridad militar de la OTAN, con sede en Bruselas), la Estructura de Mando Militar de la Alianza se divide en dos grandes Mandos Estratégicos. ¿Cuáles son y dónde tienen sus sedes?",
    opciones: [
      "El Mando Aliado de Operaciones (ACO, cuyo cuartel general es SHAPE en Mons, Bélgica, dirigido por el SACEUR) y el Mando Aliado de Transformación (ACT, con sede en Norfolk, Virginia, EE.UU., dirigido por el SACT).",
      "El Mando del Pacífico en Tokio y el Mando del Atlántico Sur en Buenos Aires.",
      "El MOPS en Retamares y el FUTER en Sevilla.",
      "El Comité Político en Ginebra y el Tribunal en La Haya."
    ],
    correcta: 0,
    referencia: "Estructura de Mando Militar de la OTAN",
    explicacion: "Los 2 Mandos Estratégicos de la OTAN son: 1) ACO (Allied Command Operations), responsable de todas las operaciones aliadas, con cuartel general en SHAPE (Mons, Bélgica) al mando del SACEUR; y 2) ACT (Allied Command Transformation), responsable de la doctrina, innovación y transformación futura de las fuerzas aliadas, con sede en Norfolk (Virginia, EE.UU.) al mando del SACT.",
    pista: "2 Mandos Estratégicos OTAN: ACO (Operaciones, en SHAPE Mons, Bélgica) y ACT (Transformación, en Norfolk, EE.UU.)."
  },
  {
    id: "Q-W3-135",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN) y OSCE",
    apartado: "Ampliación de la OTAN a 32 Miembros (Finlandia 2023 y Suecia 2024) y Nuevo Secretario General",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Tras las últimas ampliaciones históricas de la OTAN motivadas por el deterioro de la seguridad en Europa, ¿cuántos Estados miembros integran actualmente la Alianza Atlántica y cuáles han sido los dos últimos países en adherirse en 2023 y 2024 respectivamente?",
    opciones: [
      "La OTAN cuenta con 32 Estados miembros, tras la adhesión de Finlandia (aliado n.º 31 en abril de 2023) y de Suecia (aliado n.º 32 en marzo de 2024).",
      "La OTAN cuenta con 27 Estados miembros tras la salida del Reino Unido.",
      "La OTAN cuenta con 30 miembros y los últimos fueron Suiza y Austria.",
      "La OTAN cuenta con 57 Estados participantes."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte — Ampliaciones 2023 y 2024",
    explicacion: "¡Novedad clave de examen!: La OTAN tiene actualmente 32 MIEMBROS (Finlandia entró como miembro n.º 31 el 4 de abril de 2023 y Suecia entró como miembro n.º 32 el 7 de marzo de 2024). Además, en octubre de 2024 el neerlandés Mark Rutte relevó a Jens Stoltenberg como Secretario General de la OTAN. (España entró el 30 de mayo de 1982 como miembro n.º 16).",
    pista: "OTAN hoy = 32 miembros (31.º Finlandia en 2023, 32.º Suecia en 2024; España fue el 16.º el 30 de mayo de 1982). (OJO: 57 miembros es la OSCE y 27 es la UE)."
  },
  {
    id: "Q-W3-136",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN) y OSCE",
    apartado: "Centros de la OTAN en España — CAOC Torrejón, HQ NRDC-ESP Bétera y COE C-IED Hoyo de Manzanares",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Relacione correctamente las tres principales estructuras y centros de la OTAN ubicados en territorio español con su localidad:",
    opciones: [
      "El Centro de Operaciones Aéreas Combinadas (CAOC) de la OTAN en Torrejón de Ardoz (Madrid); el Cuartel General Terrestre de Alta Disponibilidad (HQ NRDC-ESP) en Bétera (Valencia); y el Centro de Excelencia contra Artefactos Explosivos Improvisados (COE C-IED) en Hoyo de Manzanares (Madrid).",
      "El SHAPE en Zaragoza y el ACT en Cartagena.",
      "El Colegio de Defensa de la OTAN en Sevilla.",
      "No existe ninguna instalación vinculada a la OTAN en España."
    ],
    correcta: 0,
    referencia: "Presencia de estructuras de la OTAN en España",
    explicacion: "Las 3 instalaciones OTAN de referencia en España que preguntan en el examen son: 1) CAOC Torrejón (vigilancia y policía aérea del sur de Europa, en Torrejón de Ardoz, Madrid); 2) HQ NRDC-ESP (Cuartel General de Despliegue Rápido de la OTAN, en Bétera, Valencia); y 3) Centro de Excelencia contra Artefactos Explosivos Improvisados (COE C-IED, en Hoyo de Manzanares, Madrid).",
    pista: "OTAN en España: CAOC = Torrejón de Ardoz | HQ NRDC-ESP = Bétera (Valencia) | COE C-IED = Hoyo de Manzanares."
  },
  {
    id: "Q-W3-137",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN) y OSCE",
    apartado: "OSCE — Origen (Acta Final de Helsinki 1975), Sede y Tres Dimensiones (Cestas)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "La Organización para la Seguridad y la Cooperación en Europa (OSCE) es la mayor organización regional de seguridad del mundo (57 Estados participantes de Europa, Asia Central y América del Norte). ¿Dónde tiene su Secretaría permanente, cuál fue su origen en 1975 y cuáles son sus tres dimensiones de seguridad ('tres cestas')?",
    opciones: [
      "Tiene su Secretaría en Viena (Austria), nació como Conferencia (CSCE) con el Acta Final de Helsinki de 1975 (pasando a denominarse OSCE tras la Cumbre de Budapest de 1994), y abarca tres dimensiones: Político-militar, Económica y medioambiental, y Humana (derechos humanos y elecciones).",
      "Tiene su sede en Bruselas y cuenta con un ejército permanente de 500.000 soldados.",
      "Tiene su sede en Estrasburgo y está formada por 27 Estados.",
      "Fue creada en 2020 en Nueva York."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki (1975) y Cumbre de Budapest (1994) — OSCE",
    explicacion: "Datos clave de la OSCE: 1) 57 Estados participantes ('de Vancouver a Vladivostok'); 2) Origen: Acta Final de Helsinki (1975) como CSCE -> pasa a ser organización permanente (OSCE) en la Cumbre de Budapest de 1994 (efectiva en 1995); 3) Sede de la Secretaría y del Consejo Permanente = VIENA (Austria); 4) Tres dimensiones ('cestas'): Político-militar, Económico-medioambiental y Humana.",
    pista: "OSCE = 57 Estados + Sede en VIENA + Origen: Acta Final de Helsinki (1975) / Cumbre Budapest (1994) + 3 dimensiones (Político-militar, Económico-ambiental y Humana)."
  },

  // --- B3-T06: Unión Europea y PCSD (6 preguntas) ---
  {
    id: "Q-W3-138",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "La Unión Europea (UE) y la Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Siete Instituciones de la Unión Europea (Art. 13 TUE)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 del Tratado de la Unión Europea (TUE), ¿cuáles son las siete (7) Instituciones oficiales de la Unión Europea (y con qué organización externa NO debe confundirse el Consejo Europeo ni el Consejo de la UE)?",
    opciones: [
      "Las 7 instituciones de la UE son: el Parlamento Europeo, el Consejo Europeo, el Consejo (de la Unión Europea), la Comisión Europea, el Tribunal de Justicia de la Unión Europea, el Banco Central Europeo y el Tribunal de Cuentas; y NO deben confundirse con el 'Consejo de Europa' (organización internacional ajena a la UE con sede en Estrasburgo y 46 países de la que depende el Tribunal Europeo de Derechos Humanos).",
      "El Consejo de Europa y la OTAN son instituciones internas de la Unión Europea.",
      "Sólo existen tres instituciones en la Unión Europea.",
      "El Defensor del Pueblo español es una institución de la Unión Europea."
    ],
    correcta: 0,
    referencia: "Art. 13 del Tratado de la Unión Europea (TUE)",
    explicacion: "¡LA TRAMPA MÁS REPETIDA DE UNIÓN EUROPEA!: Existen tres nombres parecidos: 1) CONSEJO EUROPEO (Jefes de Estado o de Gobierno de los 27 + Presidente del Consejo Europeo + Presidente de la Comisión; impulsa y define las orientaciones políticas generales, NO legisla); 2) CONSEJO DE LA UE (Consejo de Ministros de los 27 por ramos; colegisla y aprueba el presupuesto junto al Parlamento Europeo); 3) CONSEJO DE EUROPA (¡NO ES DE LA UE!: organización internacional de 1949 con sede en Estrasburgo dedicada a los Derechos Humanos / TEDH).",
    pista: "¡TRAMPA MORTAL!: El 'Consejo de Europa' (Estrasburgo, TEDH) NO pertenece a la Unión Europea. En la UE están el Consejo Europeo (Jefes de Estado/Gobierno) y el Consejo de la UE (Ministros)."
  },
  {
    id: "Q-W3-139",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "La Unión Europea (UE) y la Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR/VP)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Tratado de la Unión Europea (Tratado de Lisboa), el Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR) tiene un 'doble sombrero' institucional. ¿Qué cargos ostenta simultáneamente y qué servicio diplomático dirige?",
    opciones: [
      "Es uno de los Vicepresidentes de la Comisión Europea, preside el Consejo de Asuntos Exteriores (CAE), dirige la Agencia Europea de Defensa (EDA) y está apoyado por el Servicio Europeo de Acción Exterior (SEAE).",
      "Preside el Parlamento Europeo y el Banco Central Europeo.",
      "Es el Secretario General de la OTAN.",
      "Es elegido por los alcaldes europeos cada dos años."
    ],
    correcta: 0,
    referencia: "Arts. 18 y 27 del Tratado de la Unión Europea (TUE)",
    explicacion: "El Alto Representante (AR/VP) ostenta el 'doble sombrero': 1) Es Vicepresidente de la Comisión Europea; 2) Preside con carácter permanente el Consejo de Asuntos Exteriores (CAE); 3) Dirige el Servicio Europeo de Acción Exterior (SEAE) y preside la Junta Directiva de la Agencia Europea de Defensa (EDA).",
    pista: "Alto Representante UE (AR/VP) = Vicepresidente de la Comisión + preside el Consejo de Asuntos Exteriores + dirige el SEAE y la EDA."
  },
  {
    id: "Q-W3-140",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "La Unión Europea (UE) y la Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Órganos Político-Militares de la PCSD — CPS, CMUE y EMUE",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea, ¿cuáles son los tres órganos permanentes encargados del seguimiento político-estratégico, del asesoramiento militar superior y de la alerta temprana/planeamiento estratégico militar?",
    opciones: [
      "El Comité Político y de Seguridad (CPS), el Comité Militar de la Unión Europea (CMUE, integrado por los JEMAD de los Estados miembros) y el Estado Mayor de la Unión Europea (EMUE).",
      "El SHAPE, el ACT y el CAOC.",
      "El ECOSOC, la UNESCO y la OMS.",
      "El Tribunal de Cuentas y el Comité de las Regiones."
    ],
    correcta: 0,
    referencia: "Art. 38 TUE y estructura de la PCSD",
    explicacion: "Tríada orgánico-militar de la PCSD en Bruselas: 1) CPS (Comité Político y de Seguridad, nivel embajadores: ejerce el control político y la dirección estratégica de las operaciones de gestión de crisis); 2) CMUE (Comité Militar de la UE: máximo órgano militar del Consejo, formado por los JEMAD de los Estados miembros); 3) EMUE (Estado Mayor de la UE: integrado en el SEAE, proporciona alerta temprana, evaluación de situación y planeamiento estratégico).",
    pista: "3 órganos PCSD de la UE: CPS (control político y dirección estratégica) + CMUE (máximo órgano militar, JEMADs) + EMUE (Estado Mayor de la UE)."
  },
  {
    id: "Q-W3-141",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "La Unión Europea (UE) y la Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Cláusula de Asistencia Mutua (Art. 42.7 TUE) vs Cláusula de Solidaridad (Art. 222 TFUE)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Derecho originario de la Unión Europea (tras el Tratado de Lisboa), distinga entre la 'Cláusula de asistencia mutua' (artículo 42.7 del TUE) y la 'Cláusula de solidaridad' (artículo 222 del TFUE):",
    opciones: [
      "El artículo 42.7 del TUE (Cláusula de asistencia mutua) obliga a los Estados miembros a prestar ayuda y asistencia con todos los medios a su alcance si un Estado miembro es objeto de una agresión armada en su territorio; mientras que el artículo 222 del TFUE (Cláusula de solidaridad) prevé la actuación conjunta si un Estado miembro es objeto de un ataque terrorista o víctima de una catástrofe natural o de origen humano.",
      "El artículo 42.7 TUE regula las subvenciones agrícolas y el artículo 222 TFUE los aranceles aduaneros.",
      "Ambas cláusulas prohíben el empleo de medios militares.",
      "Ninguna de las dos existe en los Tratados de la Unión Europea."
    ],
    correcta: 0,
    referencia: "Art. 42.7 del TUE y Art. 222 del TFUE",
    explicacion: "¡Pregunta estrella de examen del Tema 6 del Bloque 3!: 1) Art. 42.7 TUE (Cláusula de asistencia/defensa mutua) = AGRESIÓN ARMADA en el territorio de un Estado miembro; 2) Art. 222 TFUE (Cláusula de solidaridad) = ATAQUE TERRORISTA o CATÁSTROFE natural o de origen humano.",
    pista: "Art. 42.7 TUE (Asistencia mutua) = Agresión armada. Art. 222 TFUE (Solidaridad) = Ataque terrorista o Catástrofe natural/humana."
  },
  {
    id: "Q-W3-142",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "La Unión Europea (UE) y la Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Brújula Estratégica de la UE (Strategic Compass 2022) y PESCO",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "La 'Brújula Estratégica para la Seguridad y la Defensa' de la Unión Europea (aprobada en marzo de 2022) se articula en cuatro pilares ('Actuar, Garantizar la seguridad, Invertir y Asociarse'). Dentro del pilar 'Actuar', ¿qué fuerza de reacción rápida prevé desplegar de forma modular y hasta qué número de efectivos?",
    opciones: [
      "La Capacidad de Despliegue Rápido de la UE (EU Rapid Deployment Capacity - EU RDC), capaz de desplegar hasta 5.000 efectivos en entornos no permisivos.",
      "Un ejército de recluta obligatoria de dos millones de soldados.",
      "Sustituir a la Policía Nacional en cada capital.",
      "Disolver los Grupos de Combate de la Unión Europea sin crear ninguna capacidad."
    ],
    correcta: 0,
    referencia: "Brújula Estratégica de la Unión Europea (2022)",
    explicacion: "¡Cifra clave de la Brújula Estratégica de la UE (2022)!: Crea la Capacidad de Despliegue Rápido de la UE (EU RDC) de hasta 5.000 EFECTIVOS para responder rápidamente a crisis fuera de la Unión (además de potenciar la Cooperación Estructurada Permanente PESCO y el Fondo Europeo de Defensa EDF).",
    pista: "Brújula Estratégica UE (2022): 4 pilares (Actuar, Garantizar seguridad, Invertir, Asociarse) + Capacidad de Despliegue Rápido (EU RDC) de hasta 5.000 efectivos."
  },
  {
    id: "Q-W3-143",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "La Unión Europea (UE) y la Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Cuartel General de Operaciones de la UE en Rota (ES-OHQ)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿En qué base militar española se ubica uno de los Cuarteles Generales Operacionales (ES-OHQ) puestos a disposición de la Unión Europea, desde el cual España dirige a nivel estratégico-operacional la Operación EUNAVFOR 'Atalanta' contra la piratería en el Océano Índico?",
    opciones: [
      "En la Base Naval de Rota (Cádiz).",
      "En la Academia de Infantería de Toledo.",
      "En el Cuartel General de Granada.",
      "En la Base Aérea de Albacete."
    ],
    correcta: 0,
    referencia: "Política Común de Seguridad y Defensa (PCSD) — ES-OHQ Rota",
    explicacion: "En la Base Naval de Rota (Cádiz) se ubica el Cuartel General de Operaciones de la Unión Europea en España (ES-OHQ), que desde marzo de 2019 asumió el mando estratégico-operacional de la Operación EUNAVFOR 'Atalanta' (tras el Brexit y el relevo de Northwood).",
    pista: "Cuartel General Operacional de la UE en España (ES-OHQ, mando de la Operación Atalanta) = Base Naval de ROTA (Cádiz)."
  },

  // --- B3-T07: España y su Participación en Misiones Internacionales (7 preguntas) ---
  {
    id: "Q-W3-144",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Misiones de la ONU — UNIFIL / FINUL en el Líbano (Operación Libre Hidalgo)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la misión de las Naciones Unidas en el Líbano (FINUL / UNIFIL, bajo la Resolución 1701 del Consejo de Seguridad de 2006), ¿cómo se denomina la operación española, en qué sector despliega el contingente del Ejército de Tierra y cómo se llama su base principal?",
    opciones: [
      "Operación 'Libre Hidalgo', desplegada en el Sector Este del sur del Líbano, con sede principal en la Base 'Miguel de Cervantes' (cerca de Marjayún).",
      "Operación 'Atalanta', desplegada en Yibuti.",
      "Operación 'Inherent Resolve', desplegada en Bagdad.",
      "Operación 'Sophia', desplegada en el Mar Báltico."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las FAS — FINUL / UNIFIL (Líbano)",
    explicacion: "Datos clave de la misión en el Líbano (iniciada en septiembre de 2006 tras la Resolución 1701 de la ONU): Misión ONU = FINUL / UNIFIL; Nombre nacional español = Operación 'LIBRE HIDALGO'; Sector bajo liderazgo español = SECTOR ESTE (Marjayún); Base principal = Base 'MIGUEL DE CERVANTES'.",
    pista: "Líbano (ONU - FINUL/UNIFIL, Res. 1701): Operación 'Libre Hidalgo' + Sector Este (Marjayún) + Base 'Miguel de Cervantes'."
  },
  {
    id: "Q-W3-145",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Misiones de la OTAN en el Flanco Este — Letonia y Eslovaquia (Novedad 2024/2025)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro de la Disuasión y Defensa del Flanco Este de la OTAN (Presencia Avanzada Reforzada / Brigadas Multinacionales), España participa de forma destacada con medios acorazados y mecanizados del Ejército de Tierra en Letonia (Base de Adazi) y, desde 2024, ha asumido el liderazgo como 'Nación Marco' (Framework Nation) de la Brigada Multinacional de la OTAN en otro país aliado. ¿De qué país se trata y dónde se ubica el campo de maniobras principal?",
    opciones: [
      "Eslovaquia (en la base/campo de maniobras de Lešť).",
      "Portugal (en Lisboa).",
      "Islandia (en Reikiavik).",
      "Chipre (en Nicosia)."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las FAS 2024–2026 — Flanco Este OTAN (Eslovaquia)",
    explicacion: "¡NOVEDAD ESTRELLA DE EXAMEN 2024/2025/2026!: Desde 2024, España lidera como NACIÓN MARCO (relevando a República Checa) el Multinational Battlegroup / Brigada Multinacional de la OTAN en ESLOVAQUIA (Base de Lešť), siendo actualmente uno de los mayores despliegues terrestres españoles en el exterior junto con el Líbano y Letonia (Adazi).",
    pista: "Novedad Flanco Este OTAN (2024-2026): España es NACIÓN MARCO de la Brigada Multinacional de la OTAN en ESLOVAQUIA (Lešť), además del despliegue en Letonia (Adazi) y Rumanía."
  },
  {
    id: "Q-W3-146",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Misiones de la OTAN — Apoyo a Turquía (Patriot en Incirlik) e Irak (NMI)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el marco de la defensa aérea aliada de la OTAN ('Active Fence' / Apoyo a Turquía), el Ejército de Tierra español mantiene desplegada desde 2015 una unidad de artillería antiaérea para proteger a la población turca frente a amenazas de misiles balísticos. ¿Qué sistema de armas despliega España y en qué base aérea turca?",
    opciones: [
      "Una batería de misiles antiaéreos PATRIOT en la Base Aérea de Incirlik (Adana, Turquía).",
      "Un submarino S-80 en el Mar Negro.",
      "Carros de combate Leopardo en Estambul.",
      "Aviones apagafuegos en Atenas."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las FAS — Apoyo a Turquía (OTAN)",
    explicacion: "En la misión de la OTAN de Apoyo a Turquía, el Mando de Artillería Antiaérea (MAAA) del Ejército de Tierra despliega una batería de misiles PATRIOT en la Base Aérea de INCIRLIK (Adana).",
    pista: "Apoyo a Turquía (OTAN) = Batería de misiles PATRIOT del ET en la Base Aérea de INCIRLIK (Adana)."
  },
  {
    id: "Q-W3-147",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Misiones de la Unión Europea en África y Mediterráneo (Atalanta, EUTM Somalia, EUMAM Ucrania)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Relacione correctamente las siguientes operaciones militares de la Unión Europea (PCSD) en las que participa España con su cometido:",
    opciones: [
      "EUNAVFOR 'Atalanta': lucha contra la piratería y protección de buques del Programa Mundial de Alimentos en el Océano Índico/Cuerno de África (con el Destacamento Aéreo Táctico 'Orión' en Yibuti); EUTM Somalia: adiestramiento de fuerzas somalíes en Mogadiscio; EUNAVFOR MED 'Irini': vigilancia del embargo de armas de la ONU en el Mediterráneo central (Libia); y EUMAM Ucrania: misión de asistencia militar y adiestramiento a las Fuerzas Armadas ucranianas (con el Toledo Training Coordination Centre en España).",
      "Atalanta se desarrolla en el Mar Báltico e Irini en el Océano Pacífico.",
      "Todas son misiones de la OSCE sin participación militar.",
      "El Destacamento 'Orión' está desplegado en Alaska."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de la Unión Europea (PCSD)",
    explicacion: "Mapa completo de misiones PCSD de la UE: 1) EUNAVFOR ATALANTA (Océano Índico / Somalia, con OHQ en Rota, fragatas de la Armada y el Destacamento 'Orión' del EA en Yibuti); 2) EUTM SOMALIA (Mogadiscio) y EUTM RCA (República Centroafricana); 3) EUNAVFOR MED IRINI (Mediterráneo Central); 4) EUFOR ALTHEA (Bosnia y Herzegovina); 5) EUMAM UCRANIA (adiestramiento a militares ucranianos coordinado en España por el TTCC).",
    pista: "Atalanta = Índico/Somalia (OHQ Rota + Destacamento Orión en Yibuti). Irini = Mediterráneo. Althea = Bosnia. EUMAM = adiestramiento a Ucrania."
  },
  {
    id: "Q-W3-148",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Policía Aérea del Báltico (BAP) y Policía Aérea Reforzada (eAP) de la OTAN",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    anioConvocatoria: 2024,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "¿Cuál es el cometido de los destacamentos aéreos tácticos del Ejército del Aire y del Espacio (como 'Vilkas' en Lituania, 'Ámbar' en Estonia/Polonia o 'Paznic'/'Tigru' en Rumanía) dentro de las misiones de Policía Aérea de la OTAN (BAP / eAP)?",
    opciones: [
      "Garantizar la vigilancia, interceptación y defensa colectiva del espacio aéreo aliado en el Flanco Este y en las repúblicas bálticas (Estonia, Letonia y Lituania, que carecen de aviación de caza propia).",
      "Realizar transporte comercial de pasajeros civiles.",
      "Fumigar cosechas agrícolas en Europa central.",
      "Sustituir a los controladores civiles de aeropuertos españoles."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales — Policía Aérea de la OTAN (BAP / eAP)",
    explicacion: "Como Estonia, Letonia y Lituania no disponen de aviones de combate interceptores, los aliados de la OTAN (incluido el Ejército del Aire y del Espacio español con cazas Eurofighter y F-18) se turnan en la misión Baltic Air Policing (BAP, en Šiauliai/Lituania y Ämari/Estonia) y en la Policía Aérea Reforzada (eAP) en Rumanía y Bulgaria.",
    pista: "Policía Aérea del Báltico (BAP) = cazas españoles (Eurofighter/F-18) protegiendo el espacio aéreo de Estonia, Letonia y Lituania (y eAP en Rumanía)."
  },
  {
    id: "Q-W3-149",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Misiones en Irak — NATO Mission Iraq (NMI) y Operación Inherent Resolve",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2025,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En Irak, las Fuerzas Armadas españolas participan en dos marcos internacionales complementarios de apoyo al Gobierno iraquí y lucha contra el terrorismo del Daesh (con presencia en Bagdad y Al-Asad, incluyendo la unidad de helicópteros 'Task Force Toro' / ISPUHEL). ¿Cuáles son esos dos marcos?",
    opciones: [
      "La Misión de la OTAN en Irak (NMI - NATO Mission Iraq, de asesoramiento y fortalecimiento institucional, que España llegó a liderar con un Teniente General en 2023-2024) y la Coalición Internacional contra el Daesh (Operación 'Inherent Resolve').",
      "La misión FINUL de la ONU y la operación Atalanta de la UE.",
      "La misión de verificación en Colombia y la misión en la Antártida.",
      "El Tratado Antártico y la OSCE."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las FAS — Irak (NMI e Inherent Resolve)",
    explicacion: "En Irak coexisten dos misiones con participación española: 1) NATO Mission Iraq (NMI, misión no combativa de asesoramiento y capacitación de la OTAN en Bagdad); y 2) La Coalición Internacional contra el Daesh ('Operation Inherent Resolve' - OIR).",
    pista: "Irak = doble marco: 1) Misión de la OTAN en Irak (NMI) + 2) Coalición Internacional contra el Daesh (Operación Inherent Resolve)."
  },
  {
    id: "Q-W3-150",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "España y su Participación en Misiones Internacionales",
    apartado: "Historia de las Misiones Internacionales de España (Angola y Namibia 1989) y Campaña Antártica",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    anioConvocatoria: 2023,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿En qué año iniciaron las Fuerzas Armadas españolas sus primeras misiones internacionales de mantenimiento de la paz bajo bandera de la ONU (en Angola UNAVEM I y Namibia UNTAG), y cómo se llama la base que gestiona el Ejército de Tierra desde 1988 en la Isla Decepción durante la Campaña Antártica?",
    opciones: [
      "Las primeras misiones ONU se iniciaron en 1989 (Angola y Namibia); y la base del Ejército de Tierra en la Isla Decepción (Antártida) es la Base Antártica Española 'Gabriel de Castilla'.",
      "Las primeras misiones se iniciaron en 2015 y la base antártica se llama 'Miguel de Cervantes'.",
      "Las primeras misiones se iniciaron en 1945 y la base antártica está en el Polo Norte.",
      "El Ejército de Tierra no participa en la Campaña Antártica."
    ],
    correcta: 0,
    referencia: "Historia de las Misiones Internacionales de las FAS y Campaña Antártica",
    explicacion: "Dos hitos históricos fijos en el Tema 7 del Bloque 3: 1) Año de inicio de las misiones internacionales de paz de las FAS = 1989 (observadores en Angola UNAVEM y contingente del EA en Namibia UNTAG, seguidos por Centroamérica ONUCA y Bosnia UNPROFOR en 1992); 2) En la Campaña Antártica (misión científico-militar más antigua, desde 1988), el Ejército de Tierra gestiona la Base 'GABRIEL DE CASTILLA' en la Isla Decepción (con el apoyo del Buque de Investigación Oceanográfica 'Hespérides' de la Armada).",
    pista: "1989 = primeras misiones ONU de las FAS (Angola y Namibia). Base del ET en la Antártida (Isla Decepción) = Base 'Gabriel de Castilla' (+ BIO 'Hespérides' de la Armada)."
  }
];

(function mergeWave3QuestionsIntoBank() {
  if (typeof DEFAULT_QUESTIONS === "undefined" || !Array.isArray(DEFAULT_QUESTIONS)) return;

  const BLOQUE_MAP = {
    1: "Bloque 1: Organización",
    2: "Bloque 2: Jurídico-Social",
    3: "Bloque 3: Seguridad Nacional",
    "1": "Bloque 1: Organización",
    "2": "Bloque 2: Jurídico-Social",
    "3": "Bloque 3: Seguridad Nacional"
  };

  const existingIds = new Set(DEFAULT_QUESTIONS.map(q => q.id));
  const wave3All = [
    ...(typeof WAVE3_QUESTIONS_PART1 !== "undefined" ? WAVE3_QUESTIONS_PART1 : []),
    ...(typeof WAVE3_QUESTIONS_PART2 !== "undefined" ? WAVE3_QUESTIONS_PART2 : [])
  ];

  wave3All.forEach((q, idx) => {
    if (!existingIds.has(q.id)) {
      const bloqueStr = BLOQUE_MAP[q.bloque] || q.bloque || "Bloque 1: Organización";
      const tags = new Set(Array.isArray(q.etiquetas) ? q.etiquetas : []);
      const isTrampa = Boolean(q.esTrampa || tags.has("Trampa"));
      const isExam = Boolean(q.esExamenOficial || tags.has("Pregunta de Examen") || q.frecuenciaExamen === "ALTA");

      if (isTrampa) tags.add("Trampa");
      if (isExam) {
        tags.add("Pregunta de Examen");
        tags.add("Importante");
      }

      const hasLevel = tags.has("Fácil") || tags.has("Nivel Medio") || tags.has("Rebuscada");
      if (!hasLevel) {
        if (q.dificultad === "alta" || (isTrampa && idx % 3 === 0)) tags.add("Rebuscada");
        else if (q.dificultad === "facil") tags.add("Fácil");
        else tags.add("Nivel Medio");
      }

      let dif = q.dificultad;
      if (!dif) {
        if (isTrampa) dif = "trampa";
        else if (tags.has("Rebuscada")) dif = "alta";
        else if (tags.has("Fácil")) dif = "facil";
        else dif = "media";
      }

      DEFAULT_QUESTIONS.push({
        ...q,
        bloque: bloqueStr,
        materia: q.materia || `${q.tema || q.temaCodigo}${q.apartado ? " - " + q.apartado : ""}`,
        dificultad: dif,
        esExamenOficial: isExam,
        anioConvocatoria: q.anioConvocatoria || (isExam ? 2024 : null),
        etiquetas: Array.from(tags),
        ubicacionTemario: q.ubicacionTemario || `${bloqueStr} ➔ ${q.temaCodigo} (${q.tema || ""}) ➔ ${q.apartado || "Precepto Clave"}`,
        referencia: q.referencia || "Normativa Oficial FAS",
        consejoAcademia: q.consejoAcademia || q.pista || "Fíjate bien en los plazos y en el órgano competente.",
        justificacion: q.justificacion || q.explicacion || ""
      });
      existingIds.add(q.id);
    }
  });
})();
