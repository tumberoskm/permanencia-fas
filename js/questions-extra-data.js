// ============================================================================
// AMPLIACIÓN MASIVA DEL BANCO DE PREGUNTAS + SISTEMA MULTI-ETIQUETA OFICIAL
// Etiquetas disponibles:
// - "Pregunta de Examen" (🏛️)
// - "Importante" (⭐)
// - "Fácil" (🟢)
// - "Nivel Medio" (🟡)
// - "Rebuscada" (🟣)
// - "Trampa" (🔴)
// ============================================================================

const EXTRA_QUESTIONS_B1 = [
  // B1-T01: Constitución Española de 1978
  {
    id: "Q-EX-101",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Estructura y Fechas Clave",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante", "Pregunta de Examen"],
    pregunta: "¿En qué fecha fue ratificada en referéndum por el pueblo español la Constitución Española de 1978?",
    opciones: [
      "El 31 de octubre de 1978.",
      "El 6 de diciembre de 1978.",
      "El 27 de diciembre de 1978.",
      "El 29 de diciembre de 1978."
    ],
    correcta: 1,
    referencia: "Constitución Española de 1978 — Cronología Constitucional",
    explicacion: "31 octubre = aprobación por las Cortes; 6 diciembre = referéndum nacional; 27 diciembre = sanción y promulgación Real; 29 diciembre = publicación en BOE y entrada en vigor.",
    pista: "Es el Día de la Constitución festivo en España."
  },
  {
    id: "Q-EX-102",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Título Preliminar (Art. 1)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Trampa", "Importante", "Pregunta de Examen"],
    pregunta: "Según el artículo 1.1 de la Constitución Española, ¿cuáles son los valores superiores de su ordenamiento jurídico?",
    opciones: [
      "La libertad, la justicia, la igualdad y la solidaridad territorial.",
      "La libertad, la justicia, la igualdad y el pluralismo político.",
      "La soberanía nacional, la unidad de la Nación y el pluralismo social.",
      "La dignidad de la persona, la libertad, la igualdad y la fraternidad."
    ],
    correcta: 1,
    referencia: "Art. 1.1 de la Constitución Española",
    explicacion: "TRAMPA CLÁSICA: Los 4 valores superiores del Art. 1.1 son exactamente: Libertad, Justicia, Igualdad y Pluralismo Político. No confundir con 'solidaridad' (Art. 2).",
    pista: "Recuerda la regla mnemotécnica: LI-JU-IG-PLU."
  },
  {
    id: "Q-EX-103",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Fuerzas Armadas (Art. 8)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 8.2 de la Constitución Española, ¿mediante qué norma se regulan las bases de la organización militar?",
    opciones: [
      "Mediante Real Decreto del Consejo de Ministros.",
      "Mediante Ley Orgánica, conforme a los principios de la Constitución.",
      "Mediante Ley Ordinaria aprobada por las Cortes Generales.",
      "Mediante Directiva de Defensa Nacional firmada por el Presidente del Gobierno."
    ],
    correcta: 1,
    referencia: "Art. 8.2 de la Constitución Española",
    explicacion: "El Art. 8.2 CE exige expresamente una LEY ORGÁNICA para regular las bases de la organización militar (que actualmente es la LO 5/2005 de la Defensa Nacional).",
    pista: "Al afectar a una institución esencial del Estado en el Título Preliminar, exige rango de Ley Orgánica."
  },
  {
    id: "Q-EX-104",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Derechos y Deberes (Arts. 28 y 29)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Respecto al derecho de petición reconocido en el artículo 29 de la Constitución Española, los miembros de las Fuerzas o Institutos armados o de los Cuerpos sometidos a disciplina militar:",
    opciones: [
      "Tienen prohibido el ejercicio del derecho de petición tanto de forma individual como colectiva.",
      "Podrán ejercer este derecho sólo individualmente y con arreglo a lo dispuesto en su legislación específica.",
      "Podrán ejercerlo colectivamente sólo a través de las asociaciones profesionales inscritas en el RAPFAS.",
      "Podrán ejercerlo libremente sin limitación alguna salvo en estado de sitio."
    ],
    correcta: 1,
    referencia: "Art. 29.2 de la Constitución Española",
    explicacion: "Los miembros de las FAS y Cuerpos sometidos a disciplina militar SOLO pueden ejercer el derecho de petición INDIVIDUALMENTE (nunca colectivamente) y según su legislación específica.",
    pista: "En el ámbito militar, las peticiones colectivas están constitucionalmente vedadas."
  },
  {
    id: "Q-EX-105",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Reformas Constitucionales (Art. 49)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "¿Cuántas reformas ha experimentado la Constitución Española de 1978 hasta la actualidad y en qué años se produjeron?",
    opciones: [
      "Dos reformas: en 1992 (Art. 13.2) y en 2011 (Art. 135).",
      "Tres reformas: en 1992 (Art. 13.2), en 2011 (Art. 135) y en 2024 (Art. 49).",
      "Cuatro reformas: en 1986, 1992, 2011 y 2024.",
      "Una sola reforma en 2011 (Art. 135 sobre estabilidad presupuestaria)."
    ],
    correcta: 1,
    referencia: "Reformas de la Constitución Española (1992, 2011 y febrero de 2024)",
    explicacion: "NOVEDAD EXAMEN: Son 3 reformas: 1992 (Art. 13.2 sufragio pasivo en elecciones municipales), 2011 (Art. 135 estabilidad presupuestaria) y febrero 2024 (Art. 49 'personas con discapacidad').",
    pista: "No olvides la tercera reforma aprobada en febrero de 2024 sobre el artículo 49."
  },
  {
    id: "Q-EX-106",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "Defensor del Pueblo y Garantías (Art. 54)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 54 de la Constitución Española, el Defensor del Pueblo es designado por las Cortes Generales como:",
    opciones: [
      "Órgano delegado del Poder Judicial para la defensa de los derechos constitucionales.",
      "Alto comisionado de las Cortes Generales para la defensa de los derechos comprendidos en el Título I, a cuyo efecto podrá supervisar la actividad de la Administración.",
      "Comisario dependiente del Ministerio de Justicia y del Consejo de Estado.",
      "Presidente nato del Tribunal de Cuentas y de la Fiscalía General."
    ],
    correcta: 1,
    referencia: "Art. 54 de la Constitución Española",
    explicacion: "El Defensor del Pueblo es el Alto Comisionado de las Cortes Generales, regulado por Ley Orgánica, para defender los derechos del Título I supervisando la Administración.",
    pista: "Recuerda la expresión exacta: 'Alto comisionado de las Cortes Generales'."
  },
  {
    id: "Q-EX-107",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "La Corona (Título II)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 62 de la Constitución Española, ¿a quién corresponde declarar la guerra y hacer la paz?",
    opciones: [
      "Al Presidente del Gobierno, previa deliberación del Consejo de Seguridad Nacional.",
      "Al Rey, previa autorización de las Cortes Generales (Art. 63.3 CE).",
      "Al Congreso de los Diputados por mayoría absoluta, a propuesta del JEMAD.",
      "Al Ministro de Defensa, previo informe favorable del Senado."
    ],
    correcta: 1,
    referencia: "Art. 63.3 de la Constitución Española",
    explicacion: "Al Rey le corresponde, previa autorización de las Cortes Generales, declarar la guerra y hacer la paz (Art. 63.3 CE), así como el mando supremo de las Fuerzas Armadas (Art. 62.h CE).",
    pista: "Es un acto regio solemne que requiere autorización previa de las Cortes Generales."
  },
  {
    id: "Q-EX-108",
    bloque: 1,
    temaCodigo: "B1-T01",
    tema: "Constitución Española de 1978",
    apartado: "El Gobierno y la Administración (Título IV)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Rebuscada", "Trampa"],
    pregunta: "Según el artículo 102 de la Constitución Española, si la acusación contra el Presidente o los demás miembros del Gobierno fuere por traición o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones:",
    opciones: [
      "Sólo podrá ser planteada por iniciativa de la cuarta parte de los miembros del Congreso, y con la aprobación de la mayoría absoluta del mismo.",
      "Podrá ser planteada por un décimo de los Senadores o Diputados y aprobada por mayoría simple.",
      "Será enjuiciada directamente por el Tribunal Constitucional en Pleno.",
      "Podrá aplicarse la prerrogativa real de gracia si lo solicita el Consejo de Ministros."
    ],
    correcta: 0,
    referencia: "Art. 102.2 y 102.3 de la Constitución Española",
    explicacion: "La acusación por traición o delito contra la seguridad del Estado exige iniciativa de 1/4 de los miembros del Congreso y aprobación por mayoría absoluta del Congreso. Además, no será aplicable la prerrogativa real de gracia (indulto).",
    pista: "Fracción clave: 1/4 del Congreso para iniciar + mayoría absoluta del Congreso para aprobar."
  },

  // B1-T02: Ley Orgánica 5/2005, de la Defensa Nacional
  {
    id: "Q-EX-109",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Atribuciones del Presidente vs Gobierno",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Ley Orgánica 5/2005, de la Defensa Nacional, ¿a quién corresponde ordenar las misiones de las Fuerzas Armadas?",
    opciones: [
      "Al Gobierno reunido en Consejo de Ministros.",
      "Al Presidente del Gobierno.",
      "Al Ministro de Defensa, a propuesta del JEMAD.",
      "Al Rey, como mando supremo de las Fuerzas Armadas."
    ],
    correcta: 1,
    referencia: "Art. 6.2.c) de la LO 5/2005, de la Defensa Nacional",
    explicacion: "TRAMPA CLÁSICA: El Gobierno 'acuerda' la participación en misiones fuera del territorio nacional (Art. 5), pero quien 'ORDENA' las misiones de las FAS y ejerce la dirección de los conflictos armados es el PRESIDENTE DEL GOBIERNO (Art. 6).",
    pista: "Distinción de oro: Gobierno = determinar política de defensa; Presidente del Gobierno = ordenar misiones y formular la Directiva de Defensa Nacional."
  },
  {
    id: "Q-EX-110",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Misiones en el Exterior y Cortes Generales",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Conforme al artículo 17 de la LO 5/2005, para ordenar operaciones en el exterior que NO estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno:",
    opciones: [
      "Únicamente deberá informar a posteriori al Senado en el plazo de 30 días.",
      "Realizará una consulta previa y recabará la autorización del Congreso de los Diputados.",
      "Necesitará la aprobación por Ley Orgánica de ambas Cámaras.",
      "Recabará autorización exclusiva del Consejo de Estado."
    ],
    correcta: 1,
    referencia: "Art. 17.1 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "Para operaciones en el exterior no directamente relacionadas con la defensa de España o del interés nacional, el Gobierno debe realizar consulta previa y recabar la autorización del CONGRESO DE LOS DIPUTADOS.",
    pista: "Es el Congreso de los Diputados (no el Senado ni ambas cámaras) quien autoriza las misiones en el exterior."
  },
  {
    id: "Q-EX-111",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Estructura Orgánica vs Operativa",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 11 de la LO 5/2005, las Fuerzas Armadas se organizan en dos estructuras. ¿Cuál es la finalidad principal de la estructura orgánica?",
    opciones: [
      "El empleo de la Fuerza en las misiones asignadas bajo el mando del JEMAD.",
      "La preparación de la Fuerza, compuesta por el Ejército de Tierra, la Armada y el Ejército del Aire y del Espacio.",
      "La conducción estratégica de las operaciones conjuntas y combinadas.",
      "La gestión exclusiva de los recursos financieros de la SEDEF."
    ],
    correcta: 1,
    referencia: "Art. 11 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "Estructura Orgánica = PREPARACIÓN de la Fuerza (ET, Armada, EA y del Espacio). Estructura Operativa = EMPLEO de la Fuerza en las misiones asignadas (bajo mando del JEMAD).",
    pista: "Orgánica = Preparación (JEME/AJEMA/JEMA). Operativa = Empleo en operaciones (JEMAD)."
  },
  {
    id: "Q-EX-112",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Consejo de Defensa Nacional",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "De acuerdo con la LO 5/2005, el Consejo de Defensa Nacional es el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa. ¿Cómo puede funcionar?",
    opciones: [
      "En Pleno y en Consejo Ejecutivo.",
      "En Sala Militar y en Sala Civil.",
      "En Comisión Permanente y en Junta de Jefes de Estado Mayor.",
      "Únicamente en sesión plenaria presidida por el Rey."
    ],
    correcta: 0,
    referencia: "Art. 8 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "El Consejo de Defensa Nacional puede funcionar en Pleno o como Consejo Ejecutivo.",
    pista: "Nota histórica: Sus funciones hoy las asume el Consejo de Seguridad Nacional (Ley 36/2015), pero en la literalidad del Art. 8 de la LO 5/2005 figura en Pleno y Consejo Ejecutivo."
  },
  {
    id: "Q-EX-113",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Mando Operativo y JEMAD",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante", "Pregunta de Examen"],
    pregunta: "¿Quién ejerce, bajo la dependencia del Ministro de Defensa, el mando de la estructura operativa de las Fuerzas Armadas y la conducción estratégica de las operaciones militares?",
    opciones: [
      "El Comandante del Mando de Operaciones (CMOPS).",
      "El Jefe de Estado Mayor de la Defensa (JEMAD).",
      "El Secretario de Estado de Defensa (SEDEF).",
      "El Jefe de Estado Mayor del Ejército con mayor antigüedad."
    ],
    correcta: 1,
    referencia: "Art. 12.3 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "El JEMAD (con rango de Secretario de Estado y empleo de General de Ejército/Almirante General/General del Aire) ejerce el mando de la estructura operativa y la conducción estratégica de las operaciones.",
    pista: "Conducción estratégica = JEMAD; planeamiento y conducción operacional = CMOPS."
  },
  {
    id: "Q-EX-114",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Bienes afectos a la Defensa Nacional",
    frecuenciaExamen: "BAJA",
    esTrampa: false,
    etiquetas: ["Rebuscada", "Nivel Medio"],
    pregunta: "Según el artículo 28 de la LO 5/2005, ¿qué consideración tienen todos los bienes de dominio público afectos a la Defensa Nacional?",
    opciones: [
      "Bienes patrimoniales de libre disposición por los Ayuntamientos.",
      "Zonas de interés para la Defensa Nacional o instalaciones militares sujetos a limitaciones de propiedad y servidumbres.",
      "Bienes comunales transferidos a las Comunidades Autónomas.",
      "Patrimonio exclusivo de la Corona."
    ],
    correcta: 1,
    referencia: "Arts. 28 y 29 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "La Ley regula la protección de las instalaciones militares y zonas de interés para la Defensa Nacional imponiendo limitaciones y servidumbres en beneficio de la seguridad.",
    pista: "Zonas de interés para la Defensa Nacional."
  },
  {
    id: "Q-EX-115",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Reglas de Enfrentamiento y Doctrina",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "De acuerdo con la LO 5/2005, las operaciones militares en el exterior se ajustarán a las reglas de enfrentamiento (ROE) que:",
    opciones: [
      "Determine la cadena de mando en el marco de los tratados internacionales suscritos por España.",
      "Apruebe el Congreso de los Diputados mediante proposición no de ley.",
      "Redacte el Tribunal Militar Central antes del despliegue.",
      "Fije libremente cada jefe de pelotón en zona de operaciones."
    ],
    correcta: 0,
    referencia: "Art. 16 y Título III de la LO 5/2005, de la Defensa Nacional",
    explicacion: "Las reglas de enfrentamiento (ROE) son determinadas por la cadena de mando de acuerdo con el Derecho Internacional Humanitario y los tratados internacionales en los que España sea parte.",
    pista: "Las ROE las fija la cadena de mando conforme al Derecho Internacional."
  },
  {
    id: "Q-EX-116",
    bloque: 1,
    temaCodigo: "B1-T02",
    tema: "Ley Orgánica 5/2005, de la Defensa Nacional",
    apartado: "Aportación suplementaria de recursos",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Según el Título V de la LO 5/2005, en tiempo de conflicto armado o durante la vigencia del estado de sitio, el sistema de disponibilidad permanente de recursos será coordinado por:",
    opciones: [
      "El Gobierno, a través del Consejo de Defensa Nacional (hoy Consejo de Seguridad Nacional).",
      "Los Alcaldes de cada municipio fronterizo.",
      "El Tribunal de Cuentas.",
      "La Secretaría General de Política de Defensa en solitario."
    ],
    correcta: 0,
    referencia: "Art. 25 de la LO 5/2005, de la Defensa Nacional",
    explicacion: "En tiempo de conflicto armado y durante el estado de sitio, el Gobierno coordina el sistema de disponibilidad permanente de recursos humanos y materiales.",
    pista: "La coordinación superior corresponde siempre al Gobierno."
  },

  // B1-T03: Ley 40/2015, de Régimen Jurídico del Sector Público
  {
    id: "Q-EX-117",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Órganos Superiores y Directivos (Art. 55)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 55 de la Ley 40/2015 (LRJSP), en la organización central de la Administración General del Estado son ÓRGANOS SUPERIORES:",
    opciones: [
      "Los Ministros, los Secretarios de Estado y los Subsecretarios.",
      "Exclusivamente los Ministros y los Secretarios de Estado.",
      "Los Ministros, los Secretarios de Estado y los Secretarios Generales.",
      "Todos los órganos con rango igual o superior a Director General."
    ],
    correcta: 1,
    referencia: "Art. 55.2 de la Ley 40/2015 (LRJSP)",
    explicacion: "PREGUNTA REPETIDÍSIMA: En la AGE central SOLO existen DOS órganos superiores: 1) Los Ministros y 2) Los Secretarios de Estado. Todos los demás (Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales y Subdirectores Generales) son Órganos Directivos.",
    pista: "Solo 2 son Superiores: Ministros y Secretarios de Estado."
  },
  {
    id: "Q-EX-118",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Asimilación de rangos en la AGE",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "De acuerdo con la Ley 40/2015, ¿qué categoría o rango administrativo tienen los Secretarios Generales y los Secretarios Generales Técnicos respectivamente?",
    opciones: [
      "Los Secretarios Generales tienen categoría de Subsecretario, y los Secretarios Generales Técnicos tienen categoría de Director General.",
      "Ambos tienen categoría de Subsecretario.",
      "Los Secretarios Generales tienen categoría de Secretario de Estado, y los SGT de Subdirector General.",
      "Ambos tienen categoría de Director General."
    ],
    correcta: 0,
    referencia: "Arts. 64 y 65 de la Ley 40/2015 (LRJSP)",
    explicacion: "Regla de oro para el examen: Secretario General = rango de Subsecretario (y es el único órgano directivo que NO exige ser funcionario A1 si el RD lo motiva). Secretario General Técnico = rango de Director General.",
    pista: "SG = Subsecretario; SGT = Director General."
  },
  {
    id: "Q-EX-119",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Organización Territorial (Delegados y Subdelegados)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "¿Qué rango administrativo ostentan en la organización territorial de la AGE los Delegados del Gobierno en las Comunidades Autónomas y los Subdelegados del Gobierno en las provincias?",
    opciones: [
      "Delegado del Gobierno = Secretario de Estado; Subdelegado = Subsecretario.",
      "Delegado del Gobierno = Subsecretario; Subdelegado del Gobierno = Subdirector General.",
      "Delegado del Gobierno = Director General; Subdelegado del Gobierno = Jefe de Servicio.",
      "Ambos tienen rango de Director General."
    ],
    correcta: 1,
    referencia: "Art. 55.4 y Arts. 72-74 de la Ley 40/2015 (LRJSP)",
    explicacion: "Delegado del Gobierno en CCAA = rango de Subsecretario (nombrado por RD del Consejo de Ministros). Subdelegado del Gobierno en la provincia = nivel de Subdirector General (nombrado por el Delegado del Gobierno por libre designación entre funcionarios A1).",
    pista: "Ojo al salto: pasa de Subsecretario (Delegado) directamente a Subdirector General (Subdelegado)."
  },
  {
    id: "Q-EX-120",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Técnicas de alteración de la competencia (Arts. 8-14)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Ley 40/2015, ¿cuál de las siguientes figuras jurídicas supone la traslación tanto de la TITULARIDAD como del ejercicio de la competencia a un órgano jerárquicamente dependiente?",
    opciones: [
      "La delegación de competencias (Art. 9).",
      "La avocación (Art. 10).",
      "La desconcentración (Art. 8.2).",
      "La encomienda de gestión (Art. 11)."
    ],
    correcta: 2,
    referencia: "Art. 8.2 de la Ley 40/2015 (LRJSP)",
    explicacion: "La competencia es irrenunciable. SOLO la DESCONCENTRACIÓN transfiere la titularidad y el ejercicio (mediante Real Decreto). La delegación, avocación, encomienda de gestión, delegación de firma y suplencia NUNCA alteran la titularidad.",
    pista: "Desconcentración = única que mueve la titularidad."
  },
  {
    id: "Q-EX-121",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Encomienda de Gestión vs Delegación de Firma",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio", "Pregunta de Examen"],
    pregunta: "Conforme al artículo 12 de la Ley 40/2015, respecto a la delegación de firma:",
    opciones: [
      "Exige su publicación obligatoria en el Boletín Oficial del Estado para ser válida.",
      "Altera la competencia del órgano delegante y transfiere la responsabilidad al firmante.",
      "No alterará la competencia del órgano delegante y para su validez no será necesaria su publicación.",
      "Sólo puede realizarse a favor de entidades de Derecho Privado."
    ],
    correcta: 2,
    referencia: "Art. 12 de la Ley 40/2015 (LRJSP)",
    explicacion: "Diferencia vital de examen: La Delegación de competencias (Art. 9) y la Encomienda de gestión (Art. 11) SÍ requieren publicación en diario oficial. La Delegación de firma (Art. 12) y la Suplencia (Art. 13) NO requieren publicación para su validez.",
    pista: "Delegación de firma y suplencia = NO necesitan publicación en BOE."
  },
  {
    id: "Q-EX-122",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Abstención y Recusación (Arts. 23 y 24)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 23 de la Ley 40/2015, es motivo de abstención tener parentesco de consanguinidad o de afinidad con cualquiera de los interesados dentro de los siguientes grados:",
    opciones: [
      "Dentro del cuarto grado de consanguinidad o segundo de afinidad.",
      "Dentro del segundo grado de consanguinidad o cuarto de afinidad.",
      "Dentro del tercer grado tanto de consanguinidad como de afinidad.",
      "Únicamente primer grado de consanguinidad o matrimonio."
    ],
    correcta: 0,
    referencia: "Art. 23.2.b) de la Ley 40/2015 (LRJSP)",
    explicacion: "REGLA 4-2: Parentesco de consanguinidad dentro del 4.º grado o de afinidad dentro del 2.º grado con los interesados (con los asesores/representantes legales es 2.º de consanguinidad y 2.º de afinidad).",
    pista: "Con interesados: 4.º Consanguinidad / 2.º Afinidad."
  },
  {
    id: "Q-EX-123",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Recusación (Art. 24)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 24 de la Ley 40/2015, si el recusado niega la causa de recusación, el superior resolverá en el plazo de:",
    opciones: [
      "Tres días, previos los informes y comprobaciones que considere oportunos, y contra su resolución no cabrá recurso.",
      "Diez días hábiles, cabiendo recurso de alzada ante el Ministro.",
      "En el acto, mediante resolución susceptible de recurso de reposición.",
      "Cinco días naturales, suspendiendo definitivamente el procedimiento."
    ],
    correcta: 0,
    referencia: "Art. 24.4 y 24.5 de la Ley 40/2015 (LRJSP)",
    explicacion: "En el día siguiente el recusado manifiesta si se da o no la causa. Si la niega, el superior resuelve en 3 días y contra esta resolución NO cabrá recurso (sin perjuicio de alegar la recusación al recurrir el acto que ponga fin al procedimiento).",
    pista: "Plazo de 1 día para manifestarse + 3 días para resolver el superior + sin recurso directo."
  },
  {
    id: "Q-EX-124",
    bloque: 1,
    temaCodigo: "B1-T03",
    tema: "Ley 40/2015, de Régimen Jurídico del Sector Público",
    apartado: "Órganos Colegiados (Art. 17)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Nivel Medio"],
    pregunta: "Según el artículo 17.2 de la Ley 40/2015, para la válida constitución de un órgano colegiado, a efectos de la celebración de sesiones, deliberaciones y toma de acuerdos, se requerirá la asistencia (presencial o a distancia) de:",
    opciones: [
      "El Presidente y el Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros.",
      "Únicamente del Presidente y dos vocales cualesquiera.",
      "De las dos terceras partes de los miembros sin necesidad de que asista el Secretario.",
      "De la totalidad de los miembros titulares en primera convocatoria."
    ],
    correcta: 0,
    referencia: "Art. 17.2 de la Ley 40/2015 (LRJSP)",
    explicacion: "Quórum general de constitución de un órgano colegiado: Presidente + Secretario (o suplentes) + al menos la mitad de sus miembros.",
    pista: "Presidente + Secretario + 1/2 de sus miembros."
  },

  // B1-T04: RD 205/2024 — Estructura del Ministerio de Defensa
  {
    id: "Q-EX-125",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "Órganos Superiores y Directivos del MINISDEF",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 205/2024, ¿cuál es el ÚNICO órgano superior del Ministerio de Defensa, además de la persona titular del Departamento?",
    opciones: [
      "El Estado Mayor de la Defensa (EMAD).",
      "La Secretaría de Estado de Defensa (SEDEF).",
      "La Subsecretaría de Defensa (SUBDEF).",
      "La Secretaría General de Política de Defensa (SEGENPOL)."
    ],
    correcta: 1,
    referencia: "Art. 1.3 del Real Decreto 205/2024",
    explicacion: "Conforme a la Ley 40/2015 y al RD 205/2024, el único órgano superior del MINISDEF (junto al Ministro) es la Secretaría de Estado de Defensa (SEDEF). El JEMAD tiene rango de Secretario de Estado, pero el EMAD es el órgano auxiliar de mando.",
    pista: "Órgano superior = Secretaría de Estado de Defensa (SEDEF)."
  },
  {
    id: "Q-EX-126",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "Novedad RD 205/2024 — DICIR",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Con arreglo al Real Decreto 205/2024, ¿cómo se denomina actualmente el órgano directivo dependiente de la SEDEF encargado de los sistemas de información, telecomunicaciones y transformación digital (antiguo CESTIC)?",
    opciones: [
      "Dirección General de Transformación Digital y Ciberespacio (DIGETRAD).",
      "Dirección General del Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (DICIR).",
      "Agencia de Ciberdefensa e Inteligencia Artificial del MINISDEF (ACIAM).",
      "Subdirección General de Redes Estratégicas de la SUBDEF."
    ],
    correcta: 1,
    referencia: "Art. 7 del Real Decreto 205/2024",
    explicacion: "NOVEDAD ESTRELLA DEL RD 205/2024: El antiguo CESTIC pasa a tener rango de Dirección General bajo la sigla DICIR (Dirección General del Centro de Sistemas y Tecnologías de la Información y las Comunicaciones), dependiendo de la SEDEF.",
    pista: "Recuerda las nuevas siglas: DICIR (dependiente de la SEDEF)."
  },
  {
    id: "Q-EX-127",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "Novedad RD 205/2024 — DIGEPER",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Otra de las grandes novedades del Real Decreto 205/2024 en el ámbito de la Subsecretaría de Defensa (SUBDEF) ha sido el desdoblamiento de la antigua DIGEREM en dos Direcciones Generales distintas. ¿Cuáles son?",
    opciones: [
      "La Dirección General de Personal (DIGENPER) y la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "La Dirección General de Asuntos Económicos (DIGENECO) y la Dirección General de Infraestructura (DIGENIN).",
      "La Dirección General de Sanidad Militar y la Dirección General de Farmacia.",
      "La Secretaría General Técnica y la Asesoría Jurídica General."
    ],
    correcta: 0,
    referencia: "Arts. 10, 11 y 12 del Real Decreto 205/2024",
    explicacion: "En la SUBDEF coexisten como Direcciones Generales separadas la Secretaría General Técnica (SGT), la Dirección General de Personal (DIGENPER) y la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
    pista: "En SUBDEF: SGT + DIGENPER + DIGEREM (más Asesoría Jurídica General, Intervención General e IGESAN)."
  },
  {
    id: "Q-EX-128",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "Dependencia de Direcciones Generales (SEDEF vs SUBDEF)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Cuál de las siguientes Direcciones Generales depende directamente de la Secretaría de Estado de Defensa (SEDEF) según el Real Decreto 205/2024?",
    opciones: [
      "La Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "La Dirección General de Asuntos Económicos (DIGENECO).",
      "La Dirección General de Política de Defensa (DIGENPOL).",
      "La Secretaría General Técnica (SGT)."
    ],
    correcta: 1,
    referencia: "Art. 4 del Real Decreto 205/2024",
    explicacion: "De la SEDEF dependen las 4 Direcciones Generales de recursos materiales/económicos/tecnológicos: DIGAM (Armamento y Material), DIGENECO (Asuntos Económicos), DIGENIN (Infraestructura) y DICIR (Sistemas CIS). DIGEREM y SGT dependen de SUBDEF; DIGENPOL depende de SEGENPOL.",
    pista: "SEDEF = Dinero (DIGENECO), Armas (DIGAM), Obras (DIGENIN) e Informática (DICIR)."
  },
  {
    id: "Q-EX-129",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "Guardia Civil y CNI",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Trampa", "Importante", "Pregunta de Examen"],
    pregunta: "Según el Real Decreto 205/2024, ¿de quién depende directamente el Centro Nacional de Inteligencia (CNI) y qué órgano asesora al Ministro de Defensa en materia de Guardia Civil?",
    opciones: [
      "El CNI depende del Presidente del Gobierno, y asesora el Consejo Superior del Ejército.",
      "El CNI depende directamente de la persona titular del Ministerio de Defensa, quien además cuenta con la Dirección General de la Guardia Civil en los términos de su ley reguladora.",
      "El CNI depende de la SEGENPOL y la Guardia Civil depende exclusivamente del JEMAD en tiempo de paz.",
      "El CNI depende del Ministerio del Interior y la Guardia Civil de la SEDEF."
    ],
    correcta: 1,
    referencia: "Art. 1 del Real Decreto 205/2024",
    explicacion: "El Centro Nacional de Inteligencia (CNI) está adscrito directamente a la persona titular del Ministerio de Defensa (su Director tiene rango de Secretario de Estado).",
    pista: "El CNI depende directamente de la persona titular del Ministerio de Defensa."
  },
  {
    id: "Q-EX-130",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "Órganos dependientes de la SUBDEF",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "¿De qué órgano del Ministerio de Defensa dependen la Asesoría Jurídica General de la Defensa, la Intervención General de la Defensa y la Inspección General de Sanidad de la Defensa (IGESAN)?",
    opciones: [
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Subsecretaría de Defensa (SUBDEF).",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Del Estado Mayor Conjunto de la Defensa (EMACON)."
    ],
    correcta: 1,
    referencia: "Art. 8 del Real Decreto 205/2024",
    explicacion: "Los tres grandes Cuerpos Comunes (Jurídico, Intervención y Sanidad) tienen sus órganos directivos/superiores (Asesoría Jurídica General, Intervención General e IGESAN) encuadrados en la SUBDEF.",
    pista: "Leyes, Cuentas (Intervención), Sanidad y Personal = SUBDEF."
  },
  {
    id: "Q-EX-131",
    bloque: 1,
    temaCodigo: "B1-T04",
    tema: "RD 205/2024 — Estructura del Ministerio de Defensa",
    apartado: "SEGENPOL (Cultura de Defensa y Diplomacia)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Nivel Medio"],
    pregunta: "Según el Real Decreto 205/2024, ¿a qué órgano le corresponde impulsar la difusión de la cultura de defensa y dirigir las agregadurías de defensa en las misiones diplomáticas de España en el exterior?",
    opciones: [
      "A la Secretaría General de Política de Defensa (SEGENPOL).",
      "Al Estado Mayor del Ejército de Tierra.",
      "A la Dirección General de Infraestructura (DIGENIN).",
      "Al Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa (INVIED)."
    ],
    correcta: 0,
    referencia: "Art. 16 del Real Decreto 205/2024",
    explicacion: "La SEGENPOL (con rango de Subsecretaría) es responsable de la política de defensa, relaciones internacionales, diplomacia de defensa (agregadurías), gestión de crisis y difusión de la cultura de defensa.",
    pista: "Relaciones internacionales, OTAN/UE, agregadurías y Cultura de Defensa = SEGENPOL."
  },

  // B1-T05: RD 521/2020 — Organización Básica de las FAS
  {
    id: "Q-EX-132",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Estructura del EMAD",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 521/2020, ¿cuáles son los órganos básicos que integran el Estado Mayor de la Defensa (EMAD) bajo el mando del JEMAD?",
    opciones: [
      "El Cuartel General del EMAD (con el EMACON), el Mando de Operaciones (MOPS), el Centro de Inteligencia de las FAS (CIFAS) y el Mando Conjunto del Ciberespacio (MCCE).",
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE) y la Fuerza Terrestre (FUTER).",
      "La SEDEF, la SUBDEF y la SEGENPOL.",
      "El Mando de Canarias, la Flota y el Mando Aéreo de Combate."
    ],
    correcta: 0,
    referencia: "Art. 11 del Real Decreto 521/2020",
    explicacion: "El EMAD se articula en: Cuartel General (donde se integra el EMACON, Jefatura de Recursos Humanos, etc.), MOPS, CIFAS y MCCE, además del CESEDEN como centro docente conjunto.",
    pista: "EMAD = CG (EMACON) + MOPS + CIFAS + MCCE (+ CESEDEN)."
  },
  {
    id: "Q-EX-133",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Niveles de Conducción de las Operaciones",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el Real Decreto 521/2020, mientras que el JEMAD ejerce la conducción estratégica de las operaciones militares, ¿a quién corresponde el planeamiento y la conducción OPERACIONAL de las mismas?",
    opciones: [
      "Al Jefe del Estado Mayor Conjunto de la Defensa (JEMACON).",
      "Al Comandante del Mando de Operaciones (CMOPS).",
      "Al Jefe de Estado Mayor del Ejército de Tierra (JEME).",
      "Al Director del CIFAS."
    ],
    correcta: 1,
    referencia: "Art. 13 del Real Decreto 521/2020",
    explicacion: "DIFERENCIA CLAVE DE EXAMEN: JEMAD = Conducción Estratégica. CMOPS (Comandante del Mando de Operaciones) = Planeamiento y conducción OPERACIONAL. EMACON = órgano auxiliar de apoyo estratégico al JEMAD.",
    pista: "Estratégico = JEMAD; Operacional = CMOPS."
  },
  {
    id: "Q-EX-134",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Estructura Orgánica de los Ejércitos",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante", "Pregunta de Examen"],
    pregunta: "Según el artículo 19 del Real Decreto 521/2020, tanto el Ejército de Tierra como la Armada y el Ejército del Aire y del Espacio se articulan en tres grandes componentes orgánicos. ¿Cuáles son?",
    opciones: [
      "Cuartel General, Fuerza y Apoyo a la Fuerza.",
      "Estado Mayor, Reserva Estratégica y Unidades Expedicionarias.",
      "Mando Operativo, Mando Logístico y Mando de Ciberdefensa.",
      "Unidades de Combate, Unidades de Apoyo al Combate y Unidades Logísticas."
    ],
    correcta: 0,
    referencia: "Art. 19 del Real Decreto 521/2020",
    explicacion: "Los tres Ejércitos mantienen la misma tríada orgánica clásica: 1) Cuartel General, 2) Fuerza y 3) Apoyo a la Fuerza.",
    pista: "La tríada orgánica universal: Cuartel General + Fuerza + Apoyo a la Fuerza."
  },
  {
    id: "Q-EX-135",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Mandos Operativos Permanentes",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "¿Cuáles son los cinco Mandos Operativos Permanentes de la estructura operativa de las Fuerzas Armadas?",
    opciones: [
      "Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Espacial (MOESPA) y Ciberespacial (MOC).",
      "Península, Baleares, Canarias, Ceuta y Melilla.",
      "FUTER, FLOAN, MACOM, UME y Guardia Real.",
      "Norte, Sur, Levante, Estrecho y Atlántico."
    ],
    correcta: 0,
    referencia: "Art. 9 del Real Decreto 521/2020 y Orden DEF/710/2020",
    explicacion: "Son 5 Mandos Operativos subordinados al JEMAD a través del MOPS: Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Espacial (MOESPA, actualizado tras el cambio al Ejército del Aire y del Espacio) y Ciberespacial (MOC).",
    pista: "Los 5 dominios de operación: Tierra (MOT), Mar (MOM), Aire (MOA), Espacio (MOESPA) y Ciberespacio (MOC)."
  },
  {
    id: "Q-EX-136",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Transferencia de Autoridad (TOA)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "En el ámbito del Real Decreto 521/2020, ¿cómo se denomina el acto mediante el cual los Jefes de Estado Mayor de los Ejércitos transfieren capacidades o unidades generadas de la estructura orgánica a la estructura operativa bajo mando del JEMAD?",
    opciones: [
      "Transferencia de Autoridad (TOA).",
      "Encomienda de Gestión Operativa (EGO).",
      "Desconcentración Orgánica Temporal (DOT).",
      "Requisición Militar (RM)."
    ],
    correcta: 0,
    referencia: "Art. 5 del Real Decreto 521/2020",
    explicacion: "La generación y paso de fuerzas de la estructura orgánica (donde se preparan) a la estructura operativa (donde se emplean) se formaliza mediante la Transferencia de Autoridad (TOA).",
    pista: "Siglas internacionales y doctrinales: TOA (Transfer of Authority)."
  },
  {
    id: "Q-EX-137",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Cambio de denominación del Ejército del Aire y del Espacio",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "¿En qué año pasó el Ejército del Aire a denominarse oficialmente 'Ejército del Aire y del Espacio' mediante Real Decreto 524/2022?",
    opciones: [
      "En el año 2020.",
      "En el año 2022.",
      "En el año 2024.",
      "En el año 2018."
    ],
    correcta: 1,
    referencia: "Real Decreto 524/2022, de 27 de junio",
    explicacion: "Por Real Decreto 524/2022, de 27 de junio, se dispuso el cambio de denominación del Ejército del Aire por el de 'Ejército del Aire y del Espacio'.",
    pista: "Año de la Cumbre de la OTAN en Madrid: junio de 2022."
  },
  {
    id: "Q-EX-138",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "CESEDEN",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "Según el Real Decreto 521/2020, el Centro Superior de Estudios de la Defensa Nacional (CESEDEN), donde se ubica la Escuela Superior de las Fuerzas Armadas (ESFAS), está encuadrado en:",
    opciones: [
      "El Estado Mayor de la Defensa (EMAD).",
      "La Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM) en exclusiva.",
      "El Cuartel General del Ejército de Tierra.",
      "El Ministerio de Ciencia, Innovación y Universidades."
    ],
    correcta: 0,
    referencia: "Art. 15 del Real Decreto 521/2020",
    explicacion: "El CESEDEN está encuadrado orgánicamente en el Estado Mayor de la Defensa (EMAD), sin perjuicio de su dependencia funcional de la SUBDEF/DIGEREM en materia de enseñanza militar de altos estudios y de SEGENPOL en cultura de defensa.",
    pista: "Orgánicamente pertenece al EMAD."
  },
  {
    id: "Q-EX-139",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "CIFAS y MCCE",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Dentro del EMAD, ¿qué órgano es el responsable único de proporcionar inteligencia militar de nivel estratégico y operacional al JEMAD y a las autoridades del Ministerio de Defensa?",
    opciones: [
      "El Centro de Inteligencia de las Fuerzas Armadas (CIFAS).",
      "El Centro Nacional de Inteligencia (CNI).",
      "El Mando Conjunto del Ciberespacio (MCCE).",
      "La Sección de Inteligencia de la Guardia Real."
    ],
    correcta: 0,
    referencia: "Art. 14 del Real Decreto 521/2020",
    explicacion: "El CIFAS es el órgano del EMAD responsable de facilitar al Ministro de Defensa, a través del JEMAD, y a las autoridades militares la inteligencia militar necesaria para alertar sobre situaciones de crisis y apoyar las operaciones.",
    pista: "Inteligencia Militar Conjunta = CIFAS."
  },

  // B1-T06: Instrucción 14/2021 — Organización del Ejército de Tierra
  {
    id: "Q-EX-140",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra",
    apartado: "La Fuerza del Ejército de Tierra",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021, ¿cuáles son los tres grandes Mandos de primer nivel que componen LA FUERZA del Ejército de Tierra?",
    opciones: [
      "La Fuerza Terrestre (FUTER), el Mando de Canarias del ET (MCANA) y la Fuerza Logística Operativa (FLO).",
      "La Fuerza Terrestre (FUTER), el Mando de Canarias del ET (MCANA) y el Cuartel General Terrestre de Alta Disponibilidad (CGTAD).",
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE) y el MADOC.",
      "La División Castillejos, la División San Marcial y la Brigada de la Legión."
    ],
    correcta: 1,
    referencia: "Instrucción 14/2021, del JEME, por la que se desarrolla la organización del ET",
    explicacion: "TRAMPA MORTAL: La Fuerza Logística Operativa (FLO, A Coruña) ya no es un mando de primer nivel, sino que está encuadrada DENTRO de FUTER. Los 3 Mandos de primer nivel de la Fuerza son: FUTER (Sevilla), MCANA (Tenerife) y CGTAD (Bétera, Valencia).",
    pista: "Fuerza del ET = FUTER + MCANA + CGTAD (la FLO está dentro de FUTER)."
  },
  {
    id: "Q-EX-141",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra",
    apartado: "El Apoyo a la Fuerza del Ejército de Tierra",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "¿Cuáles son los cuatro órganos que integran el APOYO A LA FUERZA en el Ejército de Tierra según la Instrucción 14/2021?",
    opciones: [
      "MAPER, MALE, MADOC e IGE.",
      "FUTER, MCANA, CGTAD y FLO.",
      "SEDEF, SUBDEF, SEGENPOL y EMAD.",
      "DIAPER, DIASPER, DISAN y DIAE."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME — El Apoyo a la Fuerza",
    explicacion: "El Apoyo a la Fuerza del ET lo integran: MAPER (Personal, Madrid), MALE (Apoyo Logístico, Madrid), MADOC (Adiestramiento y Doctrina, Granada) e IGE (Inspección General del Ejército, Barcelona).",
    pista: "Los 4 pilares del Apoyo a la Fuerza: MAPER + MALE + MADOC + IGE."
  },
  {
    id: "Q-EX-142",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra",
    apartado: "Divisiones de la Fuerza Terrestre (FUTER)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro de la Fuerza Terrestre (FUTER), ¿en cuál de sus dos Divisiones se encuadran las Brigadas 'Rey Alfonso XIII' II de La Legión, 'Guzmán el Bueno' X, 'Extremadura' XI y 'Guadarrama' XII?",
    opciones: [
      "En la División 'San Marcial' (Burgos).",
      "En la División 'Castillejos' (Huesca).",
      "En el Mando de Canarias (MCANA).",
      "En el Mando de Apoyo a la Maniobra (MAM)."
    ],
    correcta: 1,
    referencia: "Instrucción 14/2021, del JEME — Organización de FUTER",
    explicacion: "La División 'Castillejos' (CG en Huesca) agrupa las 4 Brigadas de Combate Polivalentes: Aragón I, Legión II, Galicia VII, Guzmán el Bueno X, Extremadura XI y Guadarrama XII. En cambio, la División 'San Marcial' (Burgos) agrupa las unidades de respuesta específica (BRIPAC VI, Mando de Tropas de Montaña, MOE, FAMET).",
    pista: "Brigadas de Combate = División Castillejos; Unidades Específicas (BRIPAC, MOE, Montaña, FAMET) = División San Marcial."
  },
  {
    id: "Q-EX-143",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra",
    apartado: "Mando de Canarias (MCANA)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Según la Instrucción 14/2021, ¿qué unidades dependen orgánicamente del Mando de Canarias del Ejército de Tierra (MCANA)?",
    opciones: [
      "Exclusivamente la Brigada 'Canarias' XVI.",
      "La Comandancia General de Canarias, la de Baleares, la de Ceuta y la de Melilla (incluyendo la Brigada 'Canarias' XVI y el Regimiento de Helicópteros de Maniobra VI).",
      "Únicamente las unidades desplegadas en el archipiélago canario y el Sáhara.",
      "La Brigada de La Legión (Almería) y la Brigada Paracaidista (Madrid)."
    ],
    correcta: 1,
    referencia: "Instrucción 14/2021, del JEME — Mando de Canarias",
    explicacion: "GRAN NOVEDAD DE LA INSTRUCCIÓN 14/2021: El MCANA (además de ser la base del Mando Operativo Terrestre MOT) agrupa las Comandancias Generales de Baleares (COMGEBAL), Ceuta (COMGECEU) y Melilla (COMGEMEL), junto con la Brigada 'Canarias' XVI.",
    pista: "MCANA = Canarias + Baleares + Ceuta + Melilla (territorios extrapeninsulares)."
  },
  {
    id: "Q-EX-144",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra",
    apartado: "Cuartel General del ET (CGET)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "¿Cuál de los siguientes órganos NO forma parte del Cuartel General del Ejército de Tierra (CGET) según la Instrucción 14/2021?",
    opciones: [
      "El Estado Mayor del Ejército (EME) y el Gabinete del JEME.",
      "El Instituto de Historia y Cultura Militar (IHCM) y la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT).",
      "La Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE).",
      "La Asesoría Jurídica del Ejército de Tierra y la Intervención Delegada Central."
    ],
    correcta: 2,
    referencia: "Instrucción 14/2021, del JEME — Cuartel General y MADOC",
    explicacion: "La DIENADE (junto con la DIDOM) forma parte del MADOC (Mando de Adiestramiento y Doctrina, en el Apoyo a la Fuerza), no del Cuartel General del ET.",
    pista: "DIENADE y DIDOM son las dos Direcciones del MADOC."
  },
  {
    id: "Q-EX-145",
    bloque: 1,
    temaCodigo: "B1-T06",
    tema: "Instrucción 14/2021 — Organización del Ejército de Tierra",
    apartado: "Direcciones de MAPER, MALE e IGE",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Relacione correctamente cada Dirección con su Mando del Apoyo a la Fuerza correspondiente en el Ejército de Tierra:",
    opciones: [
      "DIAPER, DIASPER y DISAN pertenecen al MAPER; DIACU y DINFR pertenecen a la IGE; y las Direcciones de Adquisiciones (DIAD) e Integración de Funciones Logísticas (DINFULOG) pertenecen al MALE.",
      "DISAN pertenece al MALE; DINFR pertenece al MADOC; y DIAPER pertenece a la IGE.",
      "DIACU pertenece al MAPER y DIASPER pertenece al CGTAD.",
      "Todas las Direcciones dependen directamente del Estado Mayor del Ejército (EME)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME — Articulación del Apoyo a la Fuerza",
    explicacion: "Asociación infalible: MAPER = DIAPER (Personal), DIASPER (Asistencia al Personal) y DISAN (Sanidad). IGE = DIACU (Acuartelamiento) y DINFR (Infraestructura). MALE = DIAD (Adquisiciones) y DINFULOG (Integración de Funciones Logísticas). MADOC = DIDOM y DIENADE.",
    pista: "MAPER = Personal y Sanidad; IGE = Acuartelamiento e Infraestructura; MALE = Logística y Adquisiciones; MADOC = Doctrina y Enseñanza."
  }
];

const EXTRA_QUESTIONS_B2 = [
  // B2-T01: Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)
  {
    id: "Q-EX-201",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Modalidades de Compromiso (Ley 8/2006)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Ley 8/2006, de Tropa y Marinería, ¿cuál es la duración del compromiso inicial y hasta cuántos años máximos puede prorrogarse antes de suscribir el compromiso de larga duración?",
    opciones: [
      "Compromiso inicial de 2 o 3 años, renovable hasta alcanzar un máximo de 6 años de servicios.",
      "Compromiso inicial de 1 a 5 años, renovable hasta los 10 años de servicios.",
      "Compromiso inicial único de 5 años sin posibilidad de renovación previa.",
      "Compromiso inicial de 3 años, renovable hasta cumplir los 45 años de edad."
    ],
    correcta: 0,
    referencia: "Arts. 6 a 8 de la Ley 8/2006, de Tropa y Marinería",
    explicacion: "El compromiso inicial es de 2 o 3 años, y puede renovarse por periodos de 2 o 3 años hasta un máximo de 6 años. A partir de más de 5 años de servicios (al llegar a los 6) se suscribe el Compromiso de Larga Duración (CLD) hasta los 45 años de edad.",
    pista: "2 o 3 años iniciales -> renovaciones hasta 6 años -> Compromiso de Larga Duración hasta los 45 años."
  },
  {
    id: "Q-EX-202",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Requisitos de Acceso a la Permanencia (Ley 8/2006)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Para poder participar en los procesos de selección para acceder a una relación de servicios de carácter PERMANENTE, ¿qué tiempo mínimo de servicios efectivos y qué titulación académica se exigen como regla general?",
    opciones: [
      "Tener suscrito el compromiso de larga duración, un mínimo de 14 años de servicios (o lo que fije la convocatoria a partir de tener el CLD, tradicionalmente 8/5 años según cuerpo) y titulación de Técnico del Sistema Educativo General (FP Grado Medio) o equivalente (Bachiller).",
      "Llevar al menos 2 años desde el ingreso en el centro docente militar y poseer la ESO.",
      "Haber cumplido los 45 años de edad y poseer título universitario de Grado.",
      "Ser Cabo Mayor con más de 20 años de servicio."
    ],
    correcta: 0,
    referencia: "Art. 12 de la Ley 8/2006, de Tropa y Marinería",
    explicacion: "El Art. 12 de la Ley 8/2006 exige tener suscrito el Compromiso de Larga Duración (CLD), poseer al menos la titulación de Técnico del Sistema Educativo General o equivalente, y el número de años de servicio que se establezca reglamentariamente.",
    pista: "Imprescindible tener el Compromiso de Larga Duración (CLD) en vigor y titulación de Técnico o equivalente."
  },
  {
    id: "Q-EX-203",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Reservistas de Especial Disponibilidad (RED)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 de la Ley 8/2006, para adquirir la condición de Reservista de Especial Disponibilidad (RED) al finalizar el compromiso de larga duración a los 45 años de edad, ¿cuántos años de servicios deben haberse cumplido como mínimo?",
    opciones: [
      "Al menos 18 años de servicios y solicitarlo expresamente.",
      "Al menos 15 años de servicios sin necesidad de solicitud.",
      "Al menos 20 años de servicios en unidades de la Fuerza.",
      "Exactamente 10 años de servicios."
    ],
    correcta: 0,
    referencia: "Art. 17.1 de la Ley 8/2006, de Tropa y Marinería",
    explicacion: "Para ser RED al cumplir los 45 años se exige haber cumplido al menos 18 AÑOS de servicios y permanecerá en esta condición hasta cumplir los 65 años de edad, percibiendo una asignación económica mensual compatible con el trabajo privado.",
    pista: "18 años mínimos de servicio -> condición RED desde los 45 hasta los 65 años."
  },
  {
    id: "Q-EX-204",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Reserva de Plazas (Fuerzas y Cuerpos de Seguridad)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la Ley 8/2006, para los militares profesionales de tropa y marinería que lleven más de 5 años de servicios efectivos, ¿qué porcentaje mínimo de plazas se reserva para el ingreso en la Guardia Civil y en la Policía Nacional respectivamente?",
    opciones: [
      "Un mínimo del 40% para la Guardia Civil y hasta un 20% para la Policía Nacional.",
      "Un 50% para ambos Cuerpos por igual.",
      "Un 25% para la Guardia Civil y un 10% para Vigilancia Aduanera.",
      "Un 10% para la Guardia Civil y un 40% para la Policía Nacional."
    ],
    correcta: 0,
    referencia: "Arts. 20 y 21 de la Ley 8/2006, de Tropa y Marinería",
    explicacion: "Reserva legal tras más de 5 años de servicios: MÍNIMO 40% de las plazas en la Escala de Cabos y Guardias de la Guardia Civil (que las convocatorias pueden elevar hasta el 50%) y un 20% en la Escala Básica de la Policía Nacional.",
    pista: "Guardia Civil = mínimo 40%; Policía Nacional = 20%."
  },
  {
    id: "Q-EX-205",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Situaciones Administrativas (Ley 39/2007)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 109 de la Ley 39/2007, de la carrera militar, el militar profesional que sea suspendido en sus funciones por un periodo SUPERIOR a seis meses (o cuya falta de puesto supere ese plazo), respecto a su destino:",
    opciones: [
      "Pasará a la situación de servicio en la Administración civil.",
      "Cesará en su destino.",
      "Conservará la reserva de su puesto de trabajo en la misma unidad durante tres años.",
      "Pasará directamente a la situación de retiro."
    ],
    correcta: 1,
    referencia: "Arts. 111 y 112 de la Ley 39/2007, de la carrera militar",
    explicacion: "En la suspensión de funciones (o suspensión de empleo), cuando exceda de 6 meses (o se imponga por más de 6 meses), determina el CESE EN EL DESTINO.",
    pista: "Barrera de los 6 meses en suspensión = pérdida/cese en el destino."
  },
  {
    id: "Q-EX-206",
    bloque: 2,
    temaCodigo: "B2-T01",
    tema: "Ley 8/2006 (Tropa y Marinería) y Ley 39/2007 (Carrera Militar)",
    apartado: "Sistemas de Ascenso (Ley 39/2007)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 88 de la Ley 39/2007, en la Escala de Tropa y Marinería, ¿por qué sistemas se producen los ascensos a los empleos de Cabo, Cabo Primero y Cabo Mayor?",
    opciones: [
      "A Cabo y a Cabo Primero por concurso o concurso-oposición; y a Cabo Mayor por el sistema de elección.",
      "A Cabo por antigüedad, a Cabo Primero por clasificación y a Cabo Mayor por oposición.",
      "Todos los empleos de Tropa ascienden exclusivamente por antigüedad.",
      "A Cabo por elección y a Cabo Mayor por antigüedad."
    ],
    correcta: 0,
    referencia: "Art. 88 de la Ley 39/2007, de la carrera militar",
    explicacion: "En la Escala de Tropa y Marinería: los ascensos a Cabo y Cabo Primero se producen por CONCURSO o CONCURSO-OPOSICIÓN; el ascenso a Cabo Mayor se produce siempre por ELECCIÓN.",
    pista: "Cabo y Cabo 1.º = Concurso o Concurso-Oposición; Cabo Mayor = Elección."
  },

  // B2-T02: Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)
  {
    id: "Q-EX-207",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Ámbito de aplicación (Art. 2)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 2 del Real Decreto 96/2009, ¿a quién son de aplicación las Reales Ordenanzas para las Fuerzas Armadas?",
    opciones: [
      "A todos los miembros de las Fuerzas Armadas, a los alumnos de la enseñanza militar de formación y a los reservistas y aspirantes a tal condición cuando se encuentren incorporados a las FAS; y, dada su naturaleza, a los miembros de la Guardia Civil salvo cuando contradigan su legislación específica.",
      "Exclusivamente a los militares de carrera en situación de servicio activo.",
      "A todo el personal civil funcionario y laboral del Ministerio de Defensa.",
      "A los miembros de la Policía Nacional y Policías Autonómicas."
    ],
    correcta: 0,
    referencia: "Art. 2 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "Las RROO se aplican a todos los miembros de las FAS, alumnos de formación, reservistas incorporados y también a la Guardia Civil (dada su naturaleza militar) salvo que contradigan su legislación específica.",
    pista: "Incluye alumnos de formación, reservistas incorporados y Guardia Civil."
  },
  {
    id: "Q-EX-208",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "La Disciplina y Obediencia a las Órdenes (Art. 48)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 48 de las Reales Ordenanzas para las Fuerzas Armadas, si las órdenes entrañan la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado:",
    opciones: [
      "El militar deberá cumplirlas primero y dar parte por escrito después.",
      "El militar no estará obligado a obedecerlas; en todo caso asumirá la grave responsabilidad de su acción u omisión.",
      "El militar solicitará autorización verbal al JEMAD antes de ejecutarlas.",
      "Quedará exento de toda responsabilidad penal si alega obediencia debida."
    ],
    correcta: 1,
    referencia: "Art. 48 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "REGLA DE ORO (Art. 48 RROO y LO 9/2011): Si las órdenes entrañan la ejecución de actos constitutivos de DELITO, el militar NO estará obligado a obedecerlas, asumiendo en todo caso la grave responsabilidad de su acción u omisión.",
    pista: "Ante una orden constitutiva de delito NO existe obediencia debida: no está obligado a obedecerla."
  },
  {
    id: "Q-EX-209",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Objeción sobre órdenes y Quejas (Arts. 31 y 49)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 49 de las Reales Ordenanzas, en el supuesto de que un militar considere su deber presentar alguna objeción a una orden recibida (que no constituya delito):",
    opciones: [
      "La formulará ante quien se la hubiera dado; si éste mantiene la orden, deberá cumplirla.",
      "Podrá suspender su cumplimiento hasta que resuelva el Defensor del Pueblo.",
      "Acudirá directamente al Ministro de Defensa saltándose el conducto reglamentario.",
      "La someterá a votación entre los componentes de su unidad."
    ],
    correcta: 0,
    referencia: "Art. 49 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "Cuando la orden no entrañe delito pero suscite objeción, se formula ante quien la dio; si éste la mantiene, se obedece y posteriormente puede presentarse queja o reclamación por conducto regular.",
    pista: "Se objeta ante quien la dio; si la reitera, se cumple."
  },
  {
    id: "Q-EX-210",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Capacidad de decisión e iniciativa (Art. 56)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Conforme al artículo 56 de las Reales Ordenanzas, el mando fomentará en sus subordinados la capacidad de decisión e iniciativa. Para ello:",
    opciones: [
      "Les señalará la finalidad por alcanzar y les proporcionará los medios necesarios, dejándoles libertad en la elección de la forma de proceder sin invadir sus competencias.",
      "Les dictará paso a paso cada movimiento prohibiendo cualquier adaptación.",
      "Delegará en ellos la titularidad de su empleo militar.",
      "Evitará darles instrucciones previas sobre la misión."
    ],
    correcta: 0,
    referencia: "Art. 56 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "Es el principio del 'Mando orientado a la misión' (Mission Command): fijar el propósito/finalidad, asignar recursos y respetar el ámbito de decisión del subordinado.",
    pista: "Señalar la finalidad y dar medios, sin invadir las competencias del subordinado."
  },
  {
    id: "Q-EX-211",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Ética en Operaciones de Combate y Paz (Título IV)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 92 de las Reales Ordenanzas, en el empleo legítimo de la fuerza, el militar hará un uso:",
    opciones: [
      "Gradual y proporcionado de la misma, de acuerdo con las reglas de enfrentamiento establecidas para las operaciones en que participe.",
      "Ilimitado e indiscriminado para neutralizar cualquier objetivo.",
      "Exclusivamente defensivo una vez haya sufrido bajas propias.",
      "Discrecional según su criterio personal al margen de las reglas de enfrentamiento."
    ],
    correcta: 0,
    referencia: "Art. 92 del Real Decreto 96/2009 (Reales Ordenanzas)",
    explicacion: "Dos adjetivos clave en las RROO para el uso legítimo de la fuerza: GRADUAL y PROPORCIONADO, ajustado a las Reglas de Enfrentamiento (ROE).",
    pista: "Recuerda el binomio exacto: uso 'gradual y proporcionado'."
  },
  {
    id: "Q-EX-212",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Prisionero de guerra (Art. 107)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "Según el artículo 107 de las Reales Ordenanzas, si el militar cae prisionero del enemigo, ¿qué datos está obligado a facilitar únicamente con arreglo a los Convenios de Ginebra?",
    opciones: [
      "Nombre y apellidos, empleo, fecha de nacimiento y número de matrícula o de identificación.",
      "Nombre, unidad de destino, misión asignada y frecuencias de radio.",
      "Únicamente su documento nacional de identidad y lugar de residencia familiar.",
      "Toda la información logística que no esté clasificada como Secreto."
    ],
    correcta: 0,
    referencia: "Art. 107 del Real Decreto 96/2009 y III Convenio de Ginebra",
    explicacion: "El prisionero de guerra solo declarará 4 datos: 1) Nombre y apellidos, 2) Empleo (graduación), 3) Fecha de nacimiento y 4) Número de matrícula o equivalente.",
    pista: "Los 4 datos de Ginebra: Nombre/apellidos, Empleo, Fecha de nacimiento y Número de matrícula."
  },
  {
    id: "Q-EX-213",
    bloque: 2,
    temaCodigo: "B2-T02",
    tema: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    apartado: "Conducto Reglamentario y Partes (Arts. 29-31)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "De acuerdo con el artículo 31 de las Reales Ordenanzas, cuando un militar presente una queja o reclamación por considerar afectados sus derechos, ¿cuándo podrá dirigirse directamente al escalón superior sin pasar por su jefe inmediato?",
    opciones: [
      "Nunca, en ningún caso se puede omitir el escalón inmediato.",
      "Cuando la queja o reclamación se refiera precisamente a la actuación de su jefe inmediato, o cuando transcurrido el plazo reglamentario no hubiese obtenido respuesta.",
      "Siempre que prefiera tramitarlo por correo electrónico personal.",
      "Cuando se trate de solicitar vacaciones ordinarias."
    ],
    correcta: 1,
    referencia: "Art. 31 del Real Decreto 96/2009 y Art. 18 de la LO 9/2011",
    explicacion: "El conducto regular es la norma general, pero se exceptúa cuando la queja sea contra el propio jefe inmediato o cuando no se conteste en plazo.",
    pista: "Excepción lógica al conducto reglamentario: queja contra el propio jefe inmediato."
  },

  // B2-T03: LO 9/2011 — Derechos y Deberes de los miembros de las FAS
  {
    id: "Q-EX-214",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "Libertades Públicas y Neutralidad (Arts. 7-14)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 9/2011, respecto al derecho de reunión y manifestación, el militar:",
    opciones: [
      "No podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical; además, vistiendo el uniforme o haciendo uso de su condición militar, no podrá organizar, participar ni asistir en lugares de tránsito público a manifestaciones o a reuniones de carácter político, sindical o reivindicativo.",
      "Puede asistir de uniforme a manifestaciones reivindicativas si está fuera de su horario de trabajo.",
      "Tiene prohibido asistir a cualquier reunión familiar o cultural en lugares públicos.",
      "Puede organizar huelgas y concentraciones sindicales dentro de los acuartelamientos."
    ],
    correcta: 0,
    referencia: "Art. 13 de la LO 9/2011, de derechos y deberes de los miembros de las FAS",
    explicacion: "Doble prohibición del Art. 13: 1) Nunca organizar ni participar activamente en reuniones/manifestaciones políticas o sindicales (ni siquiera de paisano); 2) De uniforme o invocando condición militar, ni siquiera asistir en lugares de tránsito público a las políticas, sindicales o reivindicativas.",
    pista: "De paisano: prohibido participar activamente en políticas/sindicales. De uniforme: prohibido incluso asistir a políticas, sindicales o reivindicativas."
  },
  {
    id: "Q-EX-215",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "Asociaciones Profesionales y RAPFAS (Arts. 33-44)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Para que una asociación profesional de miembros de las Fuerzas Armadas pueda acceder al Consejo de Personal de las Fuerzas Armadas (COPERFAS), ¿qué porcentajes mínimos de afiliados en servicio activo debe acreditar según el artículo 48 de la LO 9/2011?",
    opciones: [
      "El 1% del total de efectivos de las FAS; el 3% de los efectivos de su categoría (Oficiales, Suboficiales o Tropa); o bien el 1,5% en dos de dichas categorías.",
      "El 10% del total de las Fuerzas Armadas o el 25% de una escala.",
      "Basta con tener 50 afiliados entre retirados y reservistas.",
      "El 5% en cada uno de los tres Ejércitos simultáneamente."
    ],
    correcta: 0,
    referencia: "Art. 48.2 de la LO 9/2011, de derechos y deberes de los miembros de las FAS",
    explicacion: "REGLA 1% - 3% - 1,5% (¡Cae muchísimo en examen!): Para entrar en el COPERFAS se requiere a 31 de diciembre: 1% del total de las FAS, o 3% de una categoría (Oficiales / Suboficiales / Tropa y Marinería), o 1,5% en dos de esas tres categorías.",
    pista: "Memoriza los 3 porcentajes del COPERFAS: 1% (total FAS) / 3% (una categoría) / 1,5% (dos categorías)."
  },
  {
    id: "Q-EX-216",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "Afiliación a Asociaciones Profesionales (Art. 34)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 34 de la LO 9/2011, ¿quiénes pueden afiliarse a las asociaciones profesionales de las Fuerzas Armadas y a cuántas pueden pertenecer simultáneamente?",
    opciones: [
      "Pueden afiliarse los militares en activo, en reserva y en retiro, pero sólo podrán estar afiliados a UNA asociación profesional de las reguladas en este capítulo.",
      "Sólo los militares en activo, pudiendo estar afiliados hasta a tres asociaciones profesionales.",
      "Cualquier ciudadano español civil o militar, y a la vez a sindicatos de clase.",
      "Los alumnos de la enseñanza militar de formación desde el primer día."
    ],
    correcta: 0,
    referencia: "Art. 34 de la LO 9/2011",
    explicacion: "Pueden afiliarse quienes estén en servicio activo, reserva o retiro (¡ojo: para los porcentajes del COPERFAS solo computan los de servicio activo!), y SOLO se puede estar afiliado a UNA asociación profesional. Los alumnos de formación que no tuvieran condición militar previa NO pueden afiliarse.",
    pista: "Solo a UNA asociación profesional; los alumnos de formación sin condición militar previa no pueden."
  },
  {
    id: "Q-EX-217",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "El Observatorio de la Vida Militar (Arts. 54-56)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 55 de la Ley Orgánica 9/2011, el Observatorio de la Vida Militar es un órgano colegiado de carácter asesor y consultivo adscrito a las Cortes Generales. ¿Cómo está compuesto y cuánto dura el mandato de sus miembros?",
    opciones: [
      "Por 9 miembros (5 elegidos por el Congreso de los Diputados y 4 por el Senado), por un mandato de 5 años, siendo su cargo retribuido.",
      "Por 9 miembros (5 elegidos por el Congreso de los Diputados y 4 por el Senado), por un mandato de 5 años, sin que perciban retribución alguna por el ejercicio de sus funciones (salvo indemnizaciones por razón del servicio).",
      "Por 12 Generales designados por el Ministro de Defensa por un periodo de 4 años.",
      "Por 10 representantes sindicales elegidos por sufragio universal en los cuarteles."
    ],
    correcta: 1,
    referencia: "Art. 55 de la LO 9/2011, de derechos y deberes de los miembros de las FAS",
    explicacion: "TRAMPA DE EXAMEN: El Observatorio de la Vida Militar tiene 9 miembros (5 Congreso + 4 Senado), elegidos por mayoría de 3/5 de cada Cámara por un mandato de 5 AÑOS, y el cargo NO ES RETRIBUIDO.",
    pista: "9 miembros (5 Congreso + 4 Senado) + 5 años + NO retribuido."
  },
  {
    id: "Q-EX-218",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "Deber de Reserva y Libertad de Expresión (Arts. 11 y 12)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Conforme al artículo 12 de la LO 9/2011, la libertad de expresión del militar en asuntos estrictamente relacionados con el servicio en las Fuerzas Armadas:",
    opciones: [
      "No estará sujeta a ningún límite ni al deber de reserva.",
      "Estará sujeta a los límites derivados de la disciplina y del deber de reserva sobre materias clasificadas y datos relacionados con la seguridad y defensa.",
      "Requiere censura previa judicial para cualquier conversación privada.",
      "Le permite difundir planes operativos en redes sociales si lo hace bajo seudónimo."
    ],
    correcta: 1,
    referencia: "Art. 12 de la LO 9/2011",
    explicacion: "El militar tiene derecho a la libertad de expresión, pero en los asuntos del servicio está sujeto a los límites derivados de la disciplina y del deber de reserva.",
    pista: "Límites en asuntos del servicio: la disciplina y el deber de reserva."
  },
  {
    id: "Q-EX-219",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "Libertad de Desplazamiento y Residencia (Art. 9)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 9 de la LO 9/2011, el militar que pretenda desplazarse al extranjero, ¿qué obligación tiene?",
    opciones: [
      "Tiene prohibido salir del territorio nacional salvo en misión oficial.",
      "Deberá comunicarlo previamente a su unidad (o solicitar autorización en los supuestos que determine el Ministro de Defensa por razones de seguridad o disponibilidad).",
      "Únicamente debe comunicarlo a la embajada del país de destino una vez llegue.",
      "No tiene que realizar ninguna comunicación si viaja dentro de la Unión Europea."
    ],
    correcta: 1,
    referencia: "Art. 9.2 de la LO 9/2011",
    explicacion: "Para desplazarse al extranjero se aplica el régimen de comunicación previa (y autorización previa en determinados países o situaciones de alerta/seguridad fijados por Orden Ministerial).",
    pista: "Comunicación previa obligatoria en desplazamientos al extranjero."
  },
  {
    id: "Q-EX-220",
    bloque: 2,
    temaCodigo: "B2-T03",
    tema: "Ley Orgánica 9/2011, de Derechos y Deberes de los miembros de las FAS",
    apartado: "Consejo de Personal de las FAS (COPERFAS)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 49 de la LO 9/2011, ¿quién preside el Consejo de Personal de las Fuerzas Armadas (COPERFAS) y qué materias quedan EXCLUIDAS de su ámbito de actuación?",
    opciones: [
      "Lo preside el Ministro de Defensa (o el Subsecretario de Defensa por delegación), y quedan excluidas las decisiones de mando, el planeamiento y conducción de las operaciones militares y el empleo de la fuerza.",
      "Lo preside el JEMAD y decide sobre los despliegues en el exterior.",
      "Lo preside el Presidente del Observatorio de la Vida Militar y negocia convenios colectivos con derecho a huelga.",
      "Lo preside el Defensor del Pueblo y resuelve recursos disciplinarios."
    ],
    correcta: 0,
    referencia: "Arts. 47 y 49 de la LO 9/2011",
    explicacion: "El COPERFAS lo preside el Ministro de Defensa (sustituido en su ausencia o por delegación por el Subsecretario de Defensa). Nunca puede tratar sobre el ejercicio del mando, operaciones militares o empleo de la fuerza.",
    pista: "Presidente = Ministro de Defensa (o SUBDEF); excluidas las operaciones militares y decisiones de mando."
  },

  // B2-T04: LO 8/2014 — Régimen Disciplinario de las FAS
  {
    id: "Q-EX-221",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS",
    apartado: "Catálogo de Sanciones (Art. 11)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 11 de la Ley Orgánica 8/2014, ¿cuál es la duración de la sanción de arresto por falta LEVE y por falta GRAVE respectivamente?",
    opciones: [
      "Por falta leve de 1 a 14 días; y por falta grave de 15 a 30 días.",
      "Por falta leve de 1 a 30 días; y por falta grave de 31 a 60 días.",
      "Por falta leve de 1 a 8 días; y por falta grave de 9 a 15 días.",
      "El arresto sólo existe para faltas muy graves (de 31 a 60 días)."
    ],
    correcta: 0,
    referencia: "Art. 11 de la LO 8/2014, de Régimen Disciplinario de las FAS",
    explicacion: "TABLA SAGRADA DEL ARRESTO: Falta Leve = 1 a 14 días. Falta Grave = 15 a 30 días. Falta Muy Grave = 31 a 60 días.",
    pista: "1-14 (Leve) | 15-30 (Grave) | 31-60 (Muy Grave)."
  },
  {
    id: "Q-EX-222",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS",
    apartado: "Sanciones Económicas (Art. 13)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la LO 8/2014, ¿cuántos días puede durar la sanción económica por falta LEVE y por falta GRAVE?",
    opciones: [
      "Por falta leve de 1 a 7 días; y por falta grave de 8 a 15 días.",
      "Por falta leve de 1 a 15 días; y por falta grave de 16 a 30 días.",
      "Por falta leve de 1 a 5 días; y por falta grave de 6 a 10 días.",
      "La sanción económica no se puede imponer por faltas leves."
    ],
    correcta: 0,
    referencia: "Arts. 11 y 13 de la LO 8/2014",
    explicacion: "Sanción económica (pérdida de retribuciones sin suspender la prestación del servicio): Falta Leve = 1 a 7 días. Falta Grave = 8 a 15 días. (Para alumnos de formación sin sueldo no se aplica sanción económica).",
    pista: "Sanción económica: 1 a 7 días (Leve) | 8 a 15 días (Grave)."
  },
  {
    id: "Q-EX-223",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS",
    apartado: "Prescripción de Faltas vs Sanciones (Arts. 21 y 22)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 21 y 22 de la LO 8/2014, ¿cuáles son los plazos de prescripción de las FALTAS leves, graves y muy graves, y los de las SANCIONES impuestas por ellas?",
    opciones: [
      "Las FALTAS prescriben a los 2 meses (leves), 1 año (graves) y 2 años (muy graves); mientras que las SANCIONES prescriben a los 3 meses (leves), 1 año (graves) y 2 años (muy graves).",
      "Tanto las faltas como las sanciones prescriben a los 6 meses, 2 años y 3 años.",
      "Las faltas leves prescriben al mes y las sanciones leves a los 2 meses.",
      "Las faltas muy graves prescriben a los 5 años."
    ],
    correcta: 0,
    referencia: "Arts. 21 y 22 de la LO 8/2014",
    explicacion: "¡ATENCIÓN AL MATIZ ENTRE FALTA LEVE Y SANCIÓN LEVE!: La FALTA leve prescribe a los 2 MESES, pero la SANCIÓN impuesta por falta leve prescribe a los 3 MESES. En graves (1 año) y muy graves (2 años) coinciden ambos plazos.",
    pista: "Falta Leve = 2 meses; Sanción Leve = 3 meses. Grave = 1 año; Muy Grave = 2 años."
  },
  {
    id: "Q-EX-224",
    bloque: 2,
    temaCodigo: "B2-T04",
    tema: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS",
    apartado: "Cancelación de Notas Desfavorables (Art. 65)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 65 de la LO 8/2014, ¿cuáles son los plazos para cancelar las notas desfavorables de las sanciones en la hoja de servicios (salvo separación del servicio y resolución de compromiso)?",
    opciones: [
      "1 año para las sanciones por falta leve, 2 años por falta grave y 4 años por falta muy grave.",
      "6 meses por falta leve, 1 año por falta grave y 2 años por falta muy grave.",
      "2 meses por falta leve, 1 año por falta grave y 3 años por falta muy grave.",
      "3 años para todas las faltas."
    ],
    correcta: 0,
    referencia: "Art. 65 de la LO 8/2014",
    explicacion: "REGLA 1 - 2 - 4: La cancelación de las anotaciones disciplinarias se produce a petición del interesado o de oficio una vez transcurridos: 1 AÑO (falta leve), 2 AÑOS (falta grave) y 4 AÑOS (falta muy grave) desde el cumplimiento de la sanción.",
    pista: "Cancelación = 1 año (Leve), 2 años (Grave), 4 años (Muy Grave)."
  },

  // B2-T05: Tramitación de Iniciativas y Quejas (RD 176/2014)
  {
    id: "Q-EX-225",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Exclusiones del ámbito del RD 176/2014 (Art. 2)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 2 del Real Decreto 176/2014, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas relativas al régimen de personal y a las condiciones de vida, quedan EXCLUIDAS de su ámbito:",
    opciones: [
      "Las propuestas para mejorar las instalaciones deportivas de una base.",
      "Las quejas sobre los turnos de guardia o servicios de acuartelamiento.",
      "Las materias objeto de procedimiento administrativo o judicial, los recursos administrativos o disciplinarios y el ejercicio del derecho de petición.",
      "Las sugerencias sobre vestuario y alimentación presentadas por un Soldado."
    ],
    correcta: 2,
    referencia: "Art. 2.2 del Real Decreto 176/2014",
    explicacion: "El procedimiento de iniciativas y quejas del RD 176/2014 NO sirve para sustituir a los recursos administrativos (alzada/reposición), ni a los recursos disciplinarios, ni a la vía judicial, ni al derecho de petición.",
    pista: "Lo que ya tiene su propio cauce legal o judicial queda excluido del RD 176/2014."
  },
  {
    id: "Q-EX-226",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Subsanación de defectos (Art. 5)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Conforme al Real Decreto 176/2014, las iniciativas y quejas se presentarán por escrito e identificando al autor (nunca anónimas). Si el escrito no reúne los requisitos exigidos, ¿qué plazo se concederá al interesado para subsanar la falta?",
    opciones: [
      "Diez días hábiles, con indicación de que, si así no lo hiciera, se le tendrá por desistido de su iniciativa o queja.",
      "Veinticuatro horas improrrogables.",
      "Un mes natural desde el registro de entrada.",
      "Se archivará de plano sin posibilidad de subsanación."
    ],
    correcta: 0,
    referencia: "Art. 5 del Real Decreto 176/2014",
    explicacion: "En sintonía con el procedimiento administrativo común, el plazo de subsanación de una iniciativa o queja es de 10 DÍAS.",
    pista: "Plazo estándar de subsanación: 10 días."
  },
  {
    id: "Q-EX-227",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Nombramiento del militar de mayor empleo y antigüedad (Art. 4)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 4 del Real Decreto 176/2014, en cada unidad se designará a un militar de cada categoría (Oficiales, Suboficiales y Tropa y Marinería) para recibir y canalizar iniciativas y quejas. ¿En quién recaerá dicha designación?",
    opciones: [
      "En el militar de mayor empleo y antigüedad de cada categoría destinado en la unidad.",
      "En el militar más moderno recién incorporado a la unidad.",
      "En un representante elegido por votación secreta cada dos años.",
      "En un delegado externo designado por los sindicatos civiles."
    ],
    correcta: 0,
    referencia: "Art. 4 del Real Decreto 176/2014",
    explicacion: "En cada unidad, el Jefe designa como interlocutor para canalizar iniciativas y quejas al militar de MAYOR EMPLEO Y ANTIGÜEDAD de cada una de las tres categorías (Oficiales, Suboficiales y Tropa y Marinería).",
    pista: "El más caracterizado (mayor empleo y antigüedad) de cada categoría en la unidad."
  },
  {
    id: "Q-EX-228",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Plazo para acudir al Mando de Personal (Art. 12)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 12 del Real Decreto 176/2014, si transcurridos SEIS MESES desde la presentación de una queja o iniciativa ésta no hubiera sido contestada (o el acuerdo adoptado no satisficiera al interesado), el militar podrá:",
    opciones: [
      "Dirigirse directamente al Mando o Jefatura de Personal de su Ejército (o al Director General de Personal en el caso de Cuerpos Comunes), dando cuenta de ello al Jefe de su unidad.",
      "Interponer recurso de casación ante el Tribunal Supremo.",
      "Declararse en rebeldía y dejar de asistir al servicio.",
      "Imponer una sanción económica al Jefe de su unidad."
    ],
    correcta: 0,
    referencia: "Arts. 9 y 12 del Real Decreto 176/2014",
    explicacion: "PLAZO CLAVE DE 6 MESES: Si en 6 meses no hay contestación o no satisface al militar, puede elevarla directamente al Mando o Jefatura de Personal (MAPER en el ET / DIGENPER en Cuerpos Comunes), dando cuenta al Jefe de su unidad.",
    pista: "6 meses sin respuesta satisfactoria -> vía directa a MAPER / DIGENPER (dando cuenta al Jefe de Unidad)."
  },
  {
    id: "Q-EX-229",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Diferencia entre Iniciativa y Queja",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el Real Decreto 176/2014, ¿cómo puede presentarse una iniciativa a diferencia de una queja?",
    opciones: [
      "Las iniciativas pueden presentarse a título individual o por varios militares conjuntamente (dentro de una misma unidad o categoría para mejoras generales), mientras que las quejas sólo pueden presentarse a título estrictamente individual.",
      "Las quejas pueden presentarse de forma colectiva y anónima, y las iniciativas no.",
      "Ambas deben presentarse obligatoriamente a través de abogado y procurador.",
      "Las iniciativas sólo pueden presentarlas los Oficiales Generales."
    ],
    correcta: 0,
    referencia: "Arts. 6 y 10 del Real Decreto 176/2014",
    explicacion: "Las quejas son siempre INDIVIDUALES y por conducto regular (con las excepciones legales). Las propuestas o iniciativas de mejora del funcionamiento sí admiten estudio/traslado y nunca pueden contener reclamaciones colectivas reivindicativas.",
    pista: "Las quejas son estrictamente individuales."
  },
  {
    id: "Q-EX-230",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Informe anual de Iniciativas y Quejas",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Rebuscada"],
    pregunta: "Conforme al Real Decreto 176/2014, los Mandos o Jefaturas de Personal y la DIGENPER remitirán anualmente un informe con el análisis estadístico de las iniciativas y quejas tramitadas a:",
    opciones: [
      "La Subsecretaría de Defensa, que dará traslado al Consejo de Personal de las Fuerzas Armadas (COPERFAS) y al Observatorio de la Vida Militar.",
      "La Secretaría General de la OTAN en Bruselas.",
      "Las Alcaldías de los municipios donde radiquen las bases.",
      "El Tribunal Militar Territorial."
    ],
    correcta: 0,
    referencia: "Art. 14 del Real Decreto 176/2014",
    explicacion: "La Subsecretaría de Defensa centraliza el informe anual de iniciativas y quejas y lo traslada tanto al COPERFAS como al Observatorio de la Vida Militar.",
    pista: "SUBDEF -> COPERFAS y Observatorio de la Vida Militar."
  },

  // B2-T06: Igualdad (LO 3/2007), Observatorio Militar y Protocolo de Acoso (RD 247/2024)
  {
    id: "Q-EX-231",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Composición Equilibrada (LO 3/2007)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Disposición Adicional Primera de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, se entiende por composición equilibrada la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo:",
    opciones: [
      "No superen el 60 por ciento ni sean menos del 40 por ciento.",
      "Sean exactamente el 50 por ciento en todos los órganos sin excepción.",
      "No superen el 70 por ciento ni sean menos del 30 por ciento.",
      "Representen al menos el 25 por ciento del total."
    ],
    correcta: 0,
    referencia: "Disposición Adicional Primera de la LO 3/2007",
    explicacion: "HORQUILLA 60% - 40%: La composición equilibrada (paridad legal) exige que ningún sexo supere el 60% ni sea inferior al 40%.",
    pista: "Regla de oro de igualdad: ni más del 60% ni menos del 40%."
  },
  {
    id: "Q-EX-232",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Acoso Sexual vs Acoso por Razón de Sexo (Art. 7 LO 3/2007)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 7 de la Ley Orgánica 3/2007, ¿qué diferencia conceptual existe entre el 'acoso sexual' y el 'acoso por razón de sexo'?",
    opciones: [
      "El acoso sexual es cualquier comportamiento (verbal o físico) de naturaleza sexual que atente contra la dignidad de una persona; mientras que el acoso por razón de sexo es cualquier comportamiento realizado en función del sexo de una persona (p. ej. por embarazo o maternidad) con el propósito o efecto de atentar contra su dignidad y crear un entorno intimidatorio, degradante u ofensivo.",
      "El acoso sexual sólo puede ser físico y el acoso por razón de sexo sólo puede ser verbal.",
      "Son exactamente el mismo concepto jurídico sin distinción alguna.",
      "El acoso por razón de sexo sólo se aplica en empresas privadas."
    ],
    correcta: 0,
    referencia: "Art. 7.1 y 7.2 de la LO 3/2007",
    explicacion: "Distinción fundamental de examen: Acoso sexual = comportamiento DE NATURALEZA SEXUAL (Art. 7.1). Acoso por razón de sexo = comportamiento EN FUNCIÓN DEL SEXO de una persona, sin necesidad de contenido sexual (Art. 7.2).",
    pista: "Acoso sexual = naturaleza sexual; Acoso por razón de sexo = en función del sexo (ej. embarazo/maternidad)."
  },
  {
    id: "Q-EX-233",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Unidad de Protección frente al Acoso (UPA)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el ámbito de las Fuerzas Armadas (Protocolo frente al acoso sexual, por razón de sexo y profesional, y RD 247/2024), ¿cómo puede la víctima o cualquier militar presentar una denuncia o comunicación ante la Unidad de Protección frente al Acoso (UPA)?",
    opciones: [
      "Directamente ante la UPA, sin necesidad de utilizar el conducto reglamentario, garantizándose la confidencialidad y el asesoramiento integral.",
      "Obligatoriamente por conducto reglamentario a través del Cabo de Cuartel.",
      "Únicamente si el presunto acosador es de empleo inferior.",
      "Sólo tras abonar una tasa administrativa en la Subdelegación de Defensa."
    ],
    correcta: 0,
    referencia: "Protocolo de actuación frente al acoso en las FAS y RD 247/2024",
    explicacion: "REGLA DE ORO DE LA UPA: Para proteger a la víctima y garantizar el sigilo y la indemnidad frente a represalias, se puede acudir a la Unidad de Protección frente al Acoso (UPA) DIRECTAMENTE, SIN CONDUCTO REGLAMENTARIO.",
    pista: "Ante las UPA (Unidades de Protección frente al Acoso) NO rige el conducto reglamentario."
  },
  {
    id: "Q-EX-234",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Observatorio Militar para la Igualdad",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "¿En qué órgano directivo del Ministerio de Defensa se encuadra el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas?",
    opciones: [
      "En la Subsecretaría de Defensa (SUBDEF), a través de la Dirección General de Personal (DIGENPER).",
      "En el Congreso de los Diputados (junto al Observatorio de la Vida Militar).",
      "En el Centro Nacional de Inteligencia (CNI).",
      "En el Mando de Apoyo Logístico del Ejército (MALE)."
    ],
    correcta: 0,
    referencia: "Orden DEF/111/2019 y Real Decreto 205/2024",
    explicacion: "¡No confundir los dos Observatorios!: El Observatorio de la Vida Militar (LO 9/2011) está adscrito a las Cortes Generales; pero el Observatorio Militar para la IGUALDAD está encuadrado dentro del Ministerio de Defensa (SUBDEF / DIGENPER).",
    pista: "Observatorio de Igualdad = MINISDEF (SUBDEF). Observatorio de la Vida Militar = Cortes Generales."
  },
  {
    id: "Q-EX-235",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Discriminación Directa vs Indirecta (Art. 6 LO 3/2007)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "Según el artículo 6.2 de la Ley Orgánica 3/2007, la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente con una finalidad legítima, se considera:",
    opciones: [
      "Discriminación indirecta por razón de sexo.",
      "Discriminación directa por razón de sexo.",
      "Acción positiva de carácter temporal.",
      "Transversalidad del principio de igualdad."
    ],
    correcta: 0,
    referencia: "Art. 6.2 de la LO 3/2007",
    explicacion: "Cuando la norma o práctica es 'aparentemente neutra' pero genera una desventaja particular para uno de los sexos sin justificación objetiva, estamos ante DISCRIMINACIÓN INDIRECTA.",
    pista: "Aparentemente neutra + desventaja particular = Discriminación Indirecta."
  },
  {
    id: "Q-EX-236",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Tipificación Disciplinaria del Acoso (LO 8/2014)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "En el Régimen Disciplinario de las Fuerzas Armadas (LO 8/2014), la realización de actos constitutivos de acoso sexual o por razón de sexo, así como de acoso profesional o laboral reiterado, ¿cómo se califica?",
    opciones: [
      "Como falta muy grave (o falta grave según la reiteración y gravedad del atentado a la dignidad).",
      "Únicamente como falta leve sancionable con reprensión.",
      "No constituye infracción disciplinaria en el ámbito militar.",
      "Como simple falta de puntualidad."
    ],
    correcta: 0,
    referencia: "Arts. 7 y 8 de la LO 8/2014 y RD 247/2024",
    explicacion: "El acoso sexual, por razón de sexo y el acoso laboral/profesional atentan gravemente contra la dignidad personal y están tipificados como faltas muy graves / graves en los artículos 7 y 8 de la LO 8/2014.",
    pista: "Son conductas de máxima gravedad disciplinaria (Muy Graves / Graves)."
  },

  // B2-T07: Ley 39/2015 — Procedimiento Administrativo Común (LPACAP)
  {
    id: "Q-EX-237",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Cómputo de Plazos (Art. 30)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 30 de la Ley 39/2015 (LPACAP), salvo que por Ley o en el Derecho de la Unión Europea se exprese otro cómputo, cuando los plazos se señalen por días, se entiende que éstos son:",
    opciones: [
      "Hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
      "Naturales, incluyéndose los sábados pero excluyéndose los domingos.",
      "Hábiles, siendo los sábados días hábiles a todos los efectos.",
      "Naturales en vía administrativa y hábiles en vía contenciosa."
    ],
    correcta: 0,
    referencia: "Art. 30.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "En la Ley 39/2015, si no se especifica nada, los días son HÁBILES, y los SÁBADOS son INHÁBILES (junto con domingos y festivos). ¡Cuidado!: En la LO 8/2014 de Régimen Disciplinario Militar los plazos son por días naturales salvo que diga hábiles, pero en la Ley 39/2015 es justo al revés (hábiles por defecto).",
    pista: "Ley 39/2015 = Días Hábiles por defecto (y los sábados son inhábiles)."
  },
  {
    id: "Q-EX-238",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Nulidad de Pleno Derecho vs Anulabilidad (Arts. 47 y 48)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 47.1 de la Ley 39/2015, ¿cuál de los siguientes supuestos determina la NULIDAD DE PLENO DERECHO de un acto administrativo (y no su simple anulabilidad)?",
    opciones: [
      "Los actos dictados por órgano manifiestamente incompetente por razón de la materia o del territorio.",
      "Los actos dictados por órgano incompetente por razón de la jerarquía.",
      "El defecto de forma que no produzca indefensión.",
      "La realización de actuaciones administrativas fuera del tiempo establecido cuando no lo imponga la naturaleza del término."
    ],
    correcta: 0,
    referencia: "Arts. 47.1.b) y 52.3 de la Ley 39/2015 (LPACAP)",
    explicacion: "CLÁSICO DE EXAMEN: La incompetencia manifiesta por razón de la MATERIA o del TERRITORIO es Nulidad de Pleno Derecho (Art. 47.1.b, no convalidable). En cambio, la incompetencia por razón de la JERARQUÍA es Anulabilidad (Art. 48) y puede ser convalidada por el superior jerárquico (Art. 52.3).",
    pista: "Materia o Territorio = Nulo de pleno derecho. Jerarquía = Anulable (convalidable por el superior)."
  },
  {
    id: "Q-EX-239",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Plazo máximo para resolver y Silencio Administrativo (Arts. 21 y 24)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 21 de la Ley 39/2015, el plazo máximo en el que debe notificarse la resolución expresa no podrá exceder de 6 meses salvo que una norma con rango de Ley o de la UE establezca uno mayor. ¿Y cuál es el plazo supletorio cuando las normas reguladoras del procedimiento NO fijen plazo máximo?",
    opciones: [
      "Tres meses.",
      "Seis meses.",
      "Un mes.",
      "Diez días hábiles."
    ],
    correcta: 0,
    referencia: "Art. 21.2 y 21.3 de la Ley 39/2015 (LPACAP)",
    explicacion: "TRAMPA DOBLE DEL ART. 21: Tope general para las normas reglamentarias = 6 meses. Plazo supletorio cuando la norma guarda silencio y no fija plazo = 3 MESES.",
    pista: "Si la norma no fija plazo -> 3 meses. Límite máximo reglamentario -> 6 meses."
  },
  {
    id: "Q-EX-240",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Recursos Administrativos: Alzada y Reposición (Arts. 121-124)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Relacione correctamente los plazos de interposición y de resolución de los recursos de Alzada y Potestativo de Reposición según la Ley 39/2015:",
    opciones: [
      "Tanto en Alzada como en Reposición el plazo de interposición es de 1 mes si el acto es expreso (y en cualquier momento si es presunto); pero el plazo máximo para dictar y notificar la resolución es de 3 meses en el recurso de Alzada y de 1 mes en el de Reposición.",
      "En ambos recursos el plazo de interposición es de 2 meses y el de resolución de 6 meses.",
      "El recurso de Alzada se resuelve en 1 mes y el de Reposición en 3 meses.",
      "Contra la resolución de un recurso de Alzada cabe interponer recurso potestativo de Reposición."
    ],
    correcta: 0,
    referencia: "Arts. 122 y 124 de la Ley 39/2015 (LPACAP)",
    explicacion: "TABLA DE ORO DE RECURSOS: Interposición = 1 MES si el acto es expreso (sin límite de plazo si es presunto). Resolución = 3 MESES en Alzada (ante el superior jerárquico) y 1 MES en Reposición (ante el mismo órgano que agotó la vía administrativa). Contra la resolución de Alzada o Reposición no cabe nuevo recurso administrativo ordinario (solo extraordinario de revisión o contencioso).",
    pista: "Interposición: 1 mes (expreso). Resolución: Alzada = 3 meses; Reposición = 1 mes."
  },
  {
    id: "Q-EX-241",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Recurso Extraordinario de Revisión (Art. 125)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 125 de la Ley 39/2015, contra los actos firmes en vía administrativa podrá interponerse el recurso extraordinario de revisión. ¿Cuáles son sus plazos de interposición?",
    opciones: [
      "4 años si al dictarlos se hubiera incurrido en error de hecho que resulte de los propios documentos incorporados al expediente; y 3 meses en los demás supuestos (aparición de documentos esenciales o sentencia firme por prevaricación, cohecho o falsedad).",
      "1 año en caso de error de hecho y 1 mes en los demás casos.",
      "5 años para cualquier motivo tasado.",
      "3 meses para el error de hecho y 4 años para el cohecho."
    ],
    correcta: 0,
    referencia: "Art. 125.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "REGLA 4 AÑOS / 3 MESES: El recurso extraordinario de revisión contra actos firmes tiene 4 años de plazo cuando se funda en la causa 1.ª (error de hecho que resulte de los propios documentos del expediente) y 3 meses en las causas 2.ª, 3.ª y 4.ª.",
    pista: "Error de hecho del expediente = 4 años; resto de causas tasadas = 3 meses."
  },
  {
    id: "Q-EX-242",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Práctica de Notificaciones en papel y electrónicas (Arts. 42 y 43)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 43 de la Ley 39/2015, las notificaciones por medios electrónicos se entenderán rechazadas cuando hayan transcurrido, desde la puesta a disposición de la notificación sin que se acceda a su contenido:",
    opciones: [
      "Diez días naturales.",
      "Diez días hábiles.",
      "Quince días hábiles.",
      "Tres días dentro de las tres horas siguientes."
    ],
    correcta: 0,
    referencia: "Art. 43.2 de la Ley 39/2015 (LPACAP)",
    explicacion: "¡OJO A LA EXCEPCIÓN DE DÍAS NATURALES EN LA LEY 39/2015!: El rechazo de la notificación electrónica por falta de acceso al buzón/sede se produce a los 10 DÍAS NATURALES desde su puesta a disposición.",
    pista: "Notificación electrónica = se entiende rechazada a los 10 días NATURALES sin abrirla."
  },
  {
    id: "Q-EX-243",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Doble Silencio en el Recurso de Alzada (Art. 24.1)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 24.1 (tercer párrafo) de la Ley 39/2015, cuando se interponga un recurso de alzada contra la desestimación por silencio administrativo de una solicitud, si llegado el plazo de resolución del recurso de alzada el órgano competente tampoco dicta resolución expresa:",
    opciones: [
      "Se entenderá SIEMPRE ESTIMADO el recurso (doble silencio positivo), siempre que no se refiera a materias de dominio público, servicio público, derecho de petición o medio ambiente.",
      "Se entenderá desestimado por segunda vez en todos los casos.",
      "Provocará la caducidad automática del expediente.",
      "Obligará a presentar un tercer recurso de alzada ante el Rey."
    ],
    correcta: 0,
    referencia: "Art. 24.1 de la Ley 39/2015 (LPACAP)",
    explicacion: "REGLA DEL DOBLE SILENCIO EN ALZADA: Silencio administrativo en solicitud inicial + Silencio administrativo en el recurso de Alzada contra aquel silencio = SILENCIO POSITIVO (Estimatorio), salvo en las excepciones tasadas (dominio/servicio público, petición Art. 29 CE, daño medioambiental).",
    pista: "Silencio + Silencio en Alzada = Positivo (salvo dominio/servicio público o petición)."
  },

  // B2-T08: Código Penal Militar (LO 14/2015) — Delitos contra los deberes del servicio y disciplina
  {
    id: "Q-EX-244",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Código Penal Militar (LO 14/2015)",
    apartado: "Ausencia Injustificada vs Deserción (Arts. 56 y 57)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 56 y 57 del Código Penal Militar (LO 14/2015), ¿qué distingue el delito de 'quebrantamiento del deber de presencia' (ausencia injustificada) del delito de 'deserción'?",
    opciones: [
      "El quebrantamiento del deber de presencia requiere ausentarse por más de 3 días (en paz), mientras que la deserción consiste en ausentarse o no incorporarse con el ÁNIMO DE SUSTRAERSE PERMANENTEMENTE al cumplimiento de sus obligaciones militares.",
      "La deserción exige estar ausente más de 30 días naturales y la ausencia injustificada más de 15 días.",
      "El quebrantamiento del deber de presencia sólo existe en conflicto armado.",
      "No existe diferencia alguna entre ambos tipos penales."
    ],
    correcta: 0,
    referencia: "Arts. 56 y 57 de la LO 14/2015, del Código Penal Militar",
    explicacion: "CLAVE PENAL MILITAR: En el quebrantamiento del deber de presencia (Art. 56) el elemento objetivo es el plazo (> 3 días en tiempo de paz, computados de momento a momento). En la DESERCIÓN (Art. 57) no hace falta esperar plazo alguno si concurre el elemento subjetivo: el 'ánimo de sustraerse permanentemente' a sus obligaciones militares.",
    pista: "Ausencia injustificada = más de 3 días. Deserción = ánimo de sustraerse permanentemente (sin exigir plazo)."
  },
  {
    id: "Q-EX-245",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Código Penal Militar (LO 14/2015)",
    apartado: "Sedición Militar (Art. 39)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 39 del Código Penal Militar (LO 14/2015), para que se cometa el delito de sedición militar (negarse colectivamente a obedecer órdenes legítimas o levantar la voz en tumulto), ¿cuántos militares deben concertarse como mínimo?",
    opciones: [
      "Cuatro o más militares.",
      "Dos o más militares.",
      "Diez o más militares.",
      "Toda una compañía al completo."
    ],
    correcta: 0,
    referencia: "Art. 39 de la LO 14/2015, del Código Penal Militar",
    explicacion: "NÚMERO CLAVE EN EL CPM: La sedición militar exige que se concierten CUATRO O MÁS militares para negarse a obedecer órdenes legítimas del superior, hacer reclamaciones colectivas en tumulto o Con armas.",
    pista: "Sedición militar = 4 o más militares concertados."
  },
  {
    id: "Q-EX-246",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Código Penal Militar (LO 14/2015)",
    apartado: "Centinela (Art. 8 CPM)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 8 del Código Penal Militar, además del componente de la guardia nombrado para desempeñar un cometido de vigilancia y seguridad en un puesto fijo o patrulla, ¿quiénes tienen también consideración legal de CENTINELA a efectos penales militares?",
    opciones: [
      "Los operadores de las redes militares de transmisiones o comunicaciones, de vigilancia del espacio aéreo o marítimo, o de sistemas electrónicos de alerta y control durante el desempeño de su cometido.",
      "Cualquier militar que se encuentre de permiso en su domicilio particular.",
      "Los cocineros y el personal de mantenimiento de jardines del acuartelamiento.",
      "Únicamente los Oficiales Generales de día."
    ],
    correcta: 0,
    referencia: "Art. 8 de la LO 14/2015, del Código Penal Militar",
    explicacion: "El Art. 8 CPM equipara al centinela a los operadores de transmisiones/comunicaciones militares y a los operadores de vigilancia y control del espacio aéreo/marítimo o sistemas electrónicos de alerta mientras desempeñan su servicio.",
    pista: "Operadores de transmisiones y de vigilancia electrónica/espacio aéreo o marítimo = Centinela."
  },
  {
    id: "Q-EX-247",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Código Penal Militar (LO 14/2015)",
    apartado: "Insubordinación vs Abuso de Autoridad (Arts. 42-48)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "En el Título II del Libro Segundo del Código Penal Militar (Delitos contra la disciplina), ¿qué diferencia existe entre los delitos de 'insubordinación' y los de 'abuso de autoridad'?",
    opciones: [
      "La insubordinación la comete el subordinado contra el superior (insulto al superior y desobediencia), mientras que el abuso de autoridad lo comete el superior contra el subordinado (maltrato de obra, trato degradante o acoso).",
      "La insubordinación la comete el superior y el abuso de autoridad el subordinado.",
      "Ambos sólo pueden cometerse entre militares del mismo empleo.",
      "Ambos son faltas leves administrativas."
    ],
    correcta: 0,
    referencia: "Arts. 42 a 48 de la LO 14/2015, del Código Penal Militar",
    explicacion: "Los delitos contra la disciplina se estructuran según la dirección jerárquica: De abajo arriba = Insubordinación (Insulto a superior y Desobediencia) y Sedición; De arriba abajo = Abuso de autoridad (maltrato de obra a inferior, trato degradante, acoso, extralimitación).",
    pista: "Subordinado a Superior = Insubordinación. Superior a Subordinado = Abuso de Autoridad."
  },
  {
    id: "Q-EX-248",
    bloque: 2,
    temaCodigo: "B2-T08",
    tema: "Código Penal Militar (LO 14/2015)",
    apartado: "Ebriedad e Intoxicación por Drogas en acto de servicio (Art. 60)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 60 del Código Penal Militar, comete delito contra los deberes del servicio el militar que en acto de servicio de armas (o ejerciendo mando):",
    opciones: [
      "Se embriagare o consumiere drogas tóxicas, estupefacientes o sustancias psicotrópicas de modo que su capacidad para prestarlo desaparezca o disminuya, aun cuando sea por imprudencia.",
      "Tome un medicamento recetado por el médico militar estando rebajado de servicio.",
      "Se niegue a fumar tabaco en el comedor de la unidad.",
      "Consuma una bebida energética fuera de su jornada laboral."
    ],
    correcta: 0,
    referencia: "Art. 60 de la LO 14/2015, del Código Penal Militar",
    explicacion: "El Art. 60 CPM castiga como delito militar al que en acto de servicio de armas (o ejerciendo mando) se embriague o consuma drogas de modo que su capacidad desaparezca o disminuya.",
    pista: "En servicio de armas o ejerciendo mando + disminución de capacidad = Delito penal militar (Art. 60 CPM)."
  }
];

const EXTRA_QUESTIONS_B3 = [
  // B3-T01: Ley 36/2015, de Seguridad Nacional
  {
    id: "Q-EX-301",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Ámbitos de Especial Interés (Art. 10)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 10 de la Ley 36/2015, de Seguridad Nacional, se consideran ámbitos de especial interés de la Seguridad Nacional aquellos que requieren una atención específica por resultar básicos para preservar los derechos y libertades. Entre los expresamente citados en la ley se encuentran:",
    opciones: [
      "La ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la seguridad del espacio aéreo y ultraterrestre, la seguridad energética y la seguridad sanitaria.",
      "Únicamente la defensa territorial terrestre y la policía de tráfico.",
      "El deporte profesional y la gestión de espectáculos taurinos.",
      "Exclusivamente la recaudación tributaria municipal."
    ],
    correcta: 0,
    referencia: "Art. 10 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El Art. 10 cita expresamente: ciberseguridad, seguridad económica y financiera, seguridad marítima, seguridad del espacio aéreo y ultraterrestre, seguridad energética y seguridad sanitaria (entre otros que determine la ESN).",
    pista: "Ciberseguridad, económica/financiera, marítima, aérea/ultraterrestre, energética y sanitaria."
  },
  {
    id: "Q-EX-302",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Estrategia de Seguridad Nacional (Art. 4)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 4 de la Ley 36/2015, ¿a iniciativa de quién se elabora la Estrategia de Seguridad Nacional, quién la aprueba y cada cuánto tiempo se revisa?",
    opciones: [
      "Se elabora a iniciativa del Presidente del Gobierno, se aprueba mediante Real Decreto del Consejo de Ministros y se revisará cada 5 años o cuando lo aconsejen las circunstancias cambiantes del entorno estratégico.",
      "Se elabora por el JEMAD, la aprueba el Senado y se revisa cada 2 años.",
      "La elabora el Ministro del Interior y la aprueba el Rey cada 10 años.",
      "Se aprueba por Ley Orgánica de las Cortes Generales cada 4 años."
    ],
    correcta: 0,
    referencia: "Art. 4.3 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "TRIPLE DATO DE EXAMEN: Iniciativa = Presidente del Gobierno; Aprobación = Real Decreto del Consejo de Ministros; Revisión = cada 5 AÑOS (o antes si cambian las circunstancias estratégicas).",
    pista: "Iniciativa del Presidente + Real Decreto del Consejo de Ministros + revisión cada 5 años."
  },
  {
    id: "Q-EX-303",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Situación de Interés para la Seguridad Nacional (Arts. 23 y 24)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 24 de la Ley 36/2015, ¿quién declara la 'Situación de Interés para la Seguridad Nacional' y mediante qué instrumento jurídico?",
    opciones: [
      "El Presidente del Gobierno, mediante Real Decreto.",
      "El Consejo de Ministros, mediante Decreto-ley.",
      "El Congreso de los Diputados, a propuesta del Ministro del Interior.",
      "El Director del Departamento de Seguridad Nacional (DSN), mediante Orden."
    ],
    correcta: 0,
    referencia: "Art. 24.1 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "¡PREGUNTA ESTRELLA!: La Situación de Interés para la Seguridad Nacional la declara exclusivamente el PRESIDENTE DEL GOBIERNO mediante REAL DECRETO, y conlleva la convocatoria inmediata del Consejo de Seguridad Nacional.",
    pista: "La declara el Presidente del Gobierno por Real Decreto (y NO supone suspensión de derechos fundamentales)."
  },
  {
    id: "Q-EX-304",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Consejo de Seguridad Nacional y Presidencia del Rey (Art. 21)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 21 de la Ley 36/2015, el Consejo de Seguridad Nacional es una Comisión Delegada del Gobierno presidida por el Presidente del Gobierno, salvo cuando:",
    opciones: [
      "Asista Su Majestad el Rey, a quien le corresponderá presidirlo a petición del Presidente del Gobierno.",
      "Asista el Presidente del Congreso de los Diputados.",
      "Se reúna fuera de Madrid, en cuyo caso lo preside el Delegado del Gobierno.",
      "Exista vacante en el Ministerio de Defensa."
    ],
    correcta: 0,
    referencia: "Art. 21.2 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El Consejo de Seguridad Nacional lo preside el Presidente del Gobierno, excepto cuando el Rey asista a sus reuniones (a petición del Presidente del Gobierno), en cuyo caso lo preside S.M. el Rey. Además, el Rey será informado al menos una vez al año.",
    pista: "Preside el Rey cuando asiste (a petición del Presidente del Gobierno); informado al menos 1 vez al año."
  },
  {
    id: "Q-EX-305",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Departamento de Seguridad Nacional (DSN)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 20 de la Ley 36/2015, ¿qué órgano ejerce las funciones de Secretaría Técnica y órgano de trabajo permanente del Consejo de Seguridad Nacional?",
    opciones: [
      "El Departamento de Seguridad Nacional (DSN), integrado en el Gabinete de la Presidencia del Gobierno.",
      "El Centro Nacional de Inteligencia (CNI).",
      "El Estado Mayor Conjunto de la Defensa (EMACON).",
      "La Secretaría General de Política de Defensa (SEGENPOL)."
    ],
    correcta: 0,
    referencia: "Art. 20.3 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El Departamento de Seguridad Nacional (DSN) es el órgano de asesoramiento al Presidente del Gobierno y actúa como Secretaría Técnica y órgano de trabajo permanente del Consejo de Seguridad Nacional.",
    pista: "Secretaría Técnica y órgano de trabajo permanente del CSN = Departamento de Seguridad Nacional (DSN)."
  },
  {
    id: "Q-EX-306",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Comisión Mixta de Seguridad Nacional (Art. 17)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "¿Ante qué órgano parlamentario comparece el Gobierno para informar sobre la evolución de la Seguridad Nacional y someter la Estrategia de Seguridad Nacional?",
    opciones: [
      "Ante la Comisión Mixta Congreso-Senado de Seguridad Nacional.",
      "Exclusivamente ante la Comisión de Presupuestos del Senado.",
      "Ante la Diputación Permanente de las Asambleas Autonómicas.",
      "Ante el Consejo General del Poder Judicial."
    ],
    correcta: 0,
    referencia: "Art. 17 y Disposición Adicional Quinta de la Ley 36/2015",
    explicacion: "En las Cortes Generales se constituye la Comisión Mixta (Congreso-Senado) de Seguridad Nacional para el control e impulso parlamentario de la política de Seguridad Nacional.",
    pista: "Es una Comisión Mixta Congreso-Senado."
  },
  {
    id: "Q-EX-307",
    bloque: 3,
    temaCodigo: "B3-T01",
    tema: "Ley 36/2015, de Seguridad Nacional",
    apartado: "Conferencia Sectorial para Asuntos de la Seguridad Nacional (Art. 22)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "Para asegurar la cooperación y coordinación entre la Administración General del Estado y las Comunidades Autónomas en materia de Seguridad Nacional, el artículo 22 de la Ley 36/2015 regula:",
    opciones: [
      "La Conferencia Sectorial para Asuntos de la Seguridad Nacional.",
      "El Comité Militar de Fronteras Interiores.",
      "La Junta Superior de Gobernadores Civiles.",
      "El Tribunal Arbitral de Seguridad Autonómica."
    ],
    correcta: 0,
    referencia: "Art. 22 de la Ley 36/2015, de Seguridad Nacional",
    explicacion: "El órgano de cooperación multilateral Estado-CCAA en esta materia es la Conferencia Sectorial para Asuntos de la Seguridad Nacional.",
    pista: "Cooperación AGE + Comunidades Autónomas = Conferencia Sectorial para Asuntos de la Seguridad Nacional."
  },

  // B3-T02: Estrategia de Seguridad Nacional 2021 (RD 1150/2021)
  {
    id: "Q-EX-308",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Lema y Estructura de la ESN 2021",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "¿Cuál es el lema o subtítulo oficial de la Estrategia de Seguridad Nacional 2021 (aprobada por Real Decreto 1150/2021, de 28 de diciembre) y en cuántos capítulos se estructura?",
    opciones: [
      "'Un proyecto compartido' (en 2017) y 'Un país seguro y resiliente' / planeamiento integrado en 5 capítulos en la ESN 2021.",
      "'Defensa total de las fronteras' en 12 capítulos.",
      "'España ante el siglo XXII' en 2 capítulos.",
      "'Seguridad militar exclusiva' en 8 capítulos."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021, de 28 de diciembre, por el que se aprueba la ESN 2021",
    explicacion: "La ESN 2021 se aprueba por RD 1150/2021 (28 de diciembre) y se estructura en 5 Capítulos, articulando su acción estratégica en torno a 3 ejes transversales: Proteger, Promover y Participar.",
    pista: "RD 1150/2021 (28 de diciembre), 5 capítulos y los 3 ejes: Proteger, Promover y Participar."
  },
  {
    id: "Q-EX-309",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Los 3 Ejes del Planeamiento Estratégico Integrado (Cap. 5)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Capítulo 5 de la Estrategia de Seguridad Nacional 2021, las 33 líneas de acción estratégicas se agrupan en una matriz articulada en torno a TRES objetivos o ejes generales. ¿Cuáles son?",
    opciones: [
      "Avanzar hacia una dimensión integral de la gestión de crisis (Proteger), favorecer los ámbitos de prosperidad y bienestar de los ciudadanos (Promover) y contribuir a la seguridad internacional y fortalecer la autonomía estratégica (Participar).",
      "Tierra, Mar y Aire.",
      "Prevención policial, Sanción judicial y Disuasión nuclear.",
      "Inteligencia, Contrainteligencia y Ciberataque."
    ],
    correcta: 0,
    referencia: "Capítulo 5 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    explicacion: "Son los 3 ejes ('las 3 P'): 1) Una España que PROTEGE (gestión integral de crisis y seguridad frente a amenazas), 2) Una España que PROMUEVE (prosperidad, resiliencia, tecnología y sostenibilidad), y 3) Una España que PARTICIPA (seguridad internacional, UE, OTAN, ONU).",
    pista: "Las 3 P de la ESN 2021: Proteger, Promover y Participar (con 33 líneas de acción en total)."
  },
  {
    id: "Q-EX-310",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Estrategias Híbridas y Zona Gris (Cap. 3)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Capítulo 3 de la ESN 2021 ('Riesgos y amenazas'), ocupan un lugar central las llamadas 'estrategias híbridas'. ¿Cómo se caracterizan?",
    opciones: [
      "Por la combinación sincronizada de instrumentos de poder (políticos, económicos, informativos/desinformación, cibernéticos y militares) operando en la 'zona gris' por debajo del umbral del conflicto armado convencional para explotar vulnerabilidades.",
      "Por el uso exclusivo de vehículos militares con motor eléctrico e híbrido.",
      "Por combates navales tradicionales declarados formalmente ante la ONU.",
      "Por epidemias de origen exclusivamente veterinario."
    ],
    correcta: 0,
    referencia: "Capítulo 3 de la Estrategia de Seguridad Nacional 2021",
    explicacion: "Las estrategias híbridas combinan desinformación, ciberataques, coerción económica o energética, instrumentalización de flujos migratorios y acciones encubiertas en la 'zona gris' sin cruzar el umbral de la guerra declarada.",
    pista: "Estrategias híbridas = combinación sincronizada de medios en la 'zona gris' bajo el umbral bélico."
  },
  {
    id: "Q-EX-311",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Vectores de Transformación Global (Cap. 1)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "En el Capítulo 1 de la ESN 2021 se identifican cuatro grandes vectores de transformación que configuran la seguridad global. ¿Cuáles son?",
    opciones: [
      "El retroceso del multilateralismo y reconfiguración geopolítica, la transformación digital e irrupción tecnológica, la transición ecológica/cambio climático, y las dinámicas socioeconómicas y demográficas.",
      "La colonización de Marte, la desaparición del comercio marítimo, el fin de internet y la deflación.",
      "El aumento de la natalidad europea y el desarme mundial total.",
      "Únicamente la inflación monetaria local."
    ],
    correcta: 0,
    referencia: "Capítulo 1 de la Estrategia de Seguridad Nacional 2021",
    explicacion: "Los 4 vectores globales del Cap. 1 son: Geopolítica/multilateralismo, Transformación tecnológica/digital, Transición ecológica/climática, y Brechas socioeconómicas/demográficas.",
    pista: "Geopolítica + Tecnología + Clima/Ecología + Demografía/Economía."
  },
  {
    id: "Q-EX-312",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Catálogo de Recursos y Planes de Preparación (Cap. 4)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Para evitar la dependencia exterior en suministros críticos durante una crisis (aprendizaje tras la pandemia), la ESN 2021 impulsa la creación de:",
    opciones: [
      "Una Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI) y el Catálogo de Recursos de la Seguridad Nacional.",
      "Un impuesto militar extraordinario sobre el turismo.",
      "El cierre permanente de todas las aduanas marítimas.",
      "La nacionalización de todas las empresas extranjeras."
    ],
    correcta: 0,
    referencia: "Capítulo 4 de la Estrategia de Seguridad Nacional 2021",
    explicacion: "Una de las grandes novedades de la ESN 2021 en el Capítulo 4 es la Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI) junto al Catálogo de Recursos de la Seguridad Nacional.",
    pista: "Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI)."
  },
  {
    id: "Q-EX-313",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Comités Especializados del Consejo de Seguridad Nacional",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "¿Cuál de los siguientes órganos de apoyo al Consejo de Seguridad Nacional NO es un Comité Especializado del Sistema de Seguridad Nacional?",
    opciones: [
      "El Comité de Situación, el Consejo Nacional de Ciberseguridad o el Consejo Nacional de Seguridad Marítima.",
      "El Consejo Nacional de Seguridad Aeroespacial o el Comité Especializado de No Proliferación de Armas de Destrucción Masiva.",
      "El Comité Especializado contra el Terrorismo y el de Inmigración.",
      "El Tribunal Económico-Administrativo Central (TEAC)."
    ],
    correcta: 3,
    referencia: "Capítulo 4 de la ESN 2021",
    explicacion: "El Comité de Situación (gestión de crisis), el Consejo Nacional de Ciberseguridad, el de Seguridad Marítima, el de Seguridad Aeroespacial, el de Seguridad Energética, No Proliferación, Inmigración y Contra el Terrorismo sí son Comités Especializados del CSN. El TEAC es un órgano tributario de Hacienda.",
    pista: "El Comité de Situación es el comité especializado único para la gestión de crisis."
  },
  {
    id: "Q-EX-314",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Espacios Comunes Globales (Global Commons)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "La Estrategia de Seguridad Nacional 2021 destaca la creciente vulnerabilidad y competencia estratégica en los denominados 'Espacios Comunes Globales' (Global Commons). ¿Cuáles son?",
    opciones: [
      "El Ciberespacio, el Espacio Marítimo y el Espacio Aéreo y Ultraterrestre.",
      "Los parques nacionales, los ríos interprovinciales y las autopistas de peaje.",
      "Las embajadas, los consulados y las bases antárticas exclusivamente.",
      "Las bolsas de valores de Madrid, París y Fráncfort."
    ],
    correcta: 0,
    referencia: "Capítulos 1 y 3 de la Estrategia de Seguridad Nacional 2021",
    explicacion: "Los espacios comunes globales (Global Commons) definidos en la ESN 2021 son tres: 1) El Ciberespacio, 2) El Espacio Marítimo y 3) El Espacio Aéreo y Ultraterrestre.",
    pista: "Los 3 Global Commons: Ciberespacio + Espacio Marítimo + Espacio Aéreo y Ultraterrestre."
  },
  {
    id: "Q-EX-315",
    bloque: 3,
    temaCodigo: "B3-T02",
    tema: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    apartado: "Regiones de Especial Interés para España (Cap. 2)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "En el Capítulo 2 ('Una España segura y abierta al mundo'), además de nuestro marco euroatlántico (UE y OTAN), ¿qué regiones geográficas señala la ESN 2021 como prioritarias y de atención preferente para la seguridad de España?",
    opciones: [
      "El Norte de África (Magreb), el Sahel, el Golfo de Guinea, Oriente Próximo y América Latina y el Caribe.",
      "Exclusivamente la península de Kamchatka y Polinesia.",
      "Únicamente los países escandinavos.",
      "Sólo la frontera terrestre con Andorra."
    ],
    correcta: 0,
    referencia: "Capítulo 2 de la Estrategia de Seguridad Nacional 2021",
    explicacion: "Por su posición geoestratégica, España presta especial atención a la vecindad sur (Magreb, Sahel y Golfo de Guinea, nuestra 'frontera avanzada'), Oriente Próximo y América Latina.",
    pista: "Vecindad Sur (Magreb, Sahel, Golfo de Guinea) + América Latina + Oriente Próximo."
  },

  // B3-T03: PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas
  {
    id: "Q-EX-316",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Los 5 Dominios o Ámbitos de Operación",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la publicación doctrinal conjunta PDC-01(B), las operaciones militares multidominio se desarrollan de forma sincronizada a través de cinco ámbitos de operación (dominios) reconocidos. ¿Cuáles son?",
    opciones: [
      "Terrestre, Marítimo, Aéreo, Espacial (Ultraterrestre) y Ciberespacial, todos ellos inmersos en el entorno de la información, el espectro electromagnético y el ámbito cognitivo.",
      "Terrestre, Naval, Submarino, Nuclear y Químico.",
      "Península, Islas, Espacio Exterior, Redes Sociales y Prensa.",
      "Político, Económico, Social, Tecnológico y Legal."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las Fuerzas Armadas",
    explicacion: "Los 5 ámbitos o dominios de operación militar son: Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial (en consonancia con los 5 Mandos Operativos: MOT, MOM, MOA, MOESPA y MOC), actuando además sobre el entorno de la información y la dimensión cognitiva.",
    pista: "Los 5 dominios físicos/virtuales: Tierra, Mar, Aire, Espacio y Ciberespacio (+ ámbito cognitivo/información)."
  },
  {
    id: "Q-EX-317",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Instrumentos de Poder Nacional (DIME)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "En el Enfoque Integral (Comprehensive Approach) recogido en la doctrina PDC-01(B), el Estado emplea de forma coordinada cuatro grandes instrumentos de poder nacional conocidos por el acrónimo DIME. ¿Qué significan estas siglas?",
    opciones: [
      "Diplomático, de la Información, Militar y Económico.",
      "Defensivo, Interior, Marítimo y Espacial.",
      "Directivo, Institucional, Ministerial y Ejecutivo.",
      "Doctrinal, Industrial, Médico y Educativo."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Instrumentos de Poder del Estado (DIME)",
    explicacion: "Acrónimo DIME: Diplomático, Información, Militar y Económico. (Para analizar el entorno operativo se usa PMESII: Político, Militar, Económico, Social, Infraestructuras e Información).",
    pista: "DIME = Diplomático, Información, Militar y Económico."
  },
  {
    id: "Q-EX-318",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Funciones Conjuntas (Las 7 Funciones Conjuntas)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Para integrar y sincronizar las capacidades militares en las operaciones, la doctrina conjunta PDC-01(B) agrupa las actividades en las denominadas Funciones Conjuntas. ¿Cuáles son?",
    opciones: [
      "Mando y Control, Inteligencia, Maniobra, Fuegos, Sostenimiento (Logística), Protección e Información.",
      "Ataque, Defensa, Retirada y Desfile.",
      "Reclutamiento, Presupuesto, Sanidad y Justicia.",
      "Tierra, Armada, Aire y Guardia Civil."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Funciones Conjuntas",
    explicacion: "Son las Funciones Conjuntas clásicas de la doctrina aliada y española: Mando y Control (C2), Inteligencia, Maniobra, Fuegos (Efectos), Sostenimiento, Protección e Información (Cooperación Cívico-Militar/Comunicación Estratégica).",
    pista: "Recuerda las 7 Funciones Conjuntas: Mando y Control, Inteligencia, Maniobra, Fuegos, Sostenimiento, Protección e Información."
  },
  {
    id: "Q-EX-319",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Continuo del Conflicto",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Según la PDC-01(B), las relaciones entre actores internacionales evolucionan de manera fluida sin fronteras nítidas a lo largo del denominado 'Continuo de la Competición / Conflicto'. ¿Qué fases o estadios comprende?",
    opciones: [
      "Cooperación, Rivalidad / Confrontación (donde se sitúa la Zona Gris) y Conflicto Armado.",
      "Sólo Paz Absoluta y Guerra Nuclear.",
      "Tregua, Armisticio y Capitulación.",
      "Alerta Verde, Alerta Amarilla y Alerta Roja."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — El Continuo de la Competición",
    explicacion: "La doctrina supera la vieja dicotomía Paz/Guerra y define el Continuo de la Competición: Cooperación -> Rivalidad/Confrontación (Zona Gris e híbrida) -> Conflicto Armado.",
    pista: "Cooperación -> Rivalidad/Confrontación (Zona Gris) -> Conflicto Armado."
  },
  {
    id: "Q-EX-320",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Principios Operativos Fundamentales",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "En la PDC-01(B), el principio que establece que el comandante superior define claramente su propósito (Intención del Comandante), asigna las misiones y los recursos, y otorga a los mandos subordinados libertad de acción para decidir cómo ejecutarlas se denomina:",
    opciones: [
      "Mando orientado a la misión (Mission Command).",
      "Mando centralizado rígido.",
      "Autogestión asamblearia.",
      "Control táctico directo desde el nivel político."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Filosofía del Mando Orientado a la Misión",
    explicacion: "El 'Mando orientado a la misión' (Mission Command) es la piedra angular del ejercicio del mando en la PDC-01(B): combina unidad de esfuerzo y propósito claro con iniciativa descentralizada en la ejecución.",
    pista: "Propósito claro + recursos + libertad de acción en el cómo = Mando orientado a la misión."
  },
  {
    id: "Q-EX-321",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Componente Cognitivo y Moral del Poder de Combate",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "De acuerdo con la PDC-01(B), el Poder de Combate de una fuerza militar resulta de la combinación de tres componentes interrelacionados. ¿Cuáles son?",
    opciones: [
      "Componente Físico (medios y efectivos), Componente Conceptual (doctrina y organización) y Componente Moral (liderazgo, cohesión, valores y voluntad de vencer).",
      "Componente Terrestre, Componente Naval y Componente Aéreo.",
      "Presupuesto, Combustible y Munición.",
      "Oficiales, Suboficiales y Tropa."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Componentes de la Capacidad / Poder de Combate",
    explicacion: "Los 3 componentes del Poder de Combate son: 1) Físico (material, tecnología y personal), 2) Conceptual (doctrina, adiestramiento, procedimientos) y 3) Moral (valores, motivación, liderazgo y voluntad de vencer).",
    pista: "Tríada del Poder de Combate: Físico + Conceptual + Moral."
  },
  {
    id: "Q-EX-322",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Operaciones Permanentes",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según la PDC-01(B), las operaciones que las Fuerzas Armadas ejecutan de forma ininterrumpida (24/7/365) en tiempo de paz para garantizar la soberanía e integridad en los espacios terrestre, marítimo, aéreo, espacial y ciberespacial se denominan:",
    opciones: [
      "Operaciones Permanentes de Presencia, Vigilancia y Disuasión.",
      "Maniobras de fin de semana.",
      "Operaciones de imposición de la paz en el exterior bajo Capítulo VII de la ONU.",
      "Servicios económicos de acuartelamiento."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Operaciones Permanentes",
    explicacion: "Las Operaciones Permanentes de Presencia, Vigilancia y Disuasión son conducidas por el MOPS a través de los 5 Mandos Operativos (MOT, MOM, MOA, MOESPA y MOC) los 365 días del año.",
    pista: "Operaciones Permanentes de Presencia, Vigilancia y Disuasión."
  },
  {
    id: "Q-EX-323",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Centro de Gravedad (CoG)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "En el planeamiento operacional de la PDC-01(B), la fuente principal de poder (física o moral) que proporciona a un actor su fuerza, libertad de acción o voluntad de luchar se denomina:",
    opciones: [
      "Centro de Gravedad (CoG).",
      "Punto Culminante.",
      "Línea de Operaciones Logística.",
      "Regla de Enfrentamiento."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Elementos de Diseño Operacional",
    explicacion: "El Centro de Gravedad (CoG) es la fuente primaria de poder de un actor; proteger el propio y neutralizar el del adversario es la clave del diseño operacional.",
    pista: "Fuente principal de poder y voluntad de lucha = Centro de Gravedad (CoG)."
  },

  // B3-T04: Organización de las Naciones Unidas (ONU)
  {
    id: "Q-EX-324",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Fundación e Ingreso de España",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿En qué fecha entró en vigor la Carta de las Naciones Unidas (firmada en San Francisco el 26 de junio de 1945) y en qué fecha ingresó España en la ONU?",
    opciones: [
      "La Carta entró en vigor el 24 de octubre de 1945; y España ingresó en la ONU el 14 de diciembre de 1955.",
      "La Carta entró en vigor el 1 de enero de 1945; y España ingresó en 1982.",
      "La Carta entró en vigor el 6 de diciembre de 1948; y España fue miembro fundador en 1945.",
      "La Carta entró en vigor en 1950; y España ingresó en 1986."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas (1945) y Resolución 995 de la Asamblea General (1955)",
    explicacion: "FECHAS CLAVE DE EXAMEN: Firma de la Carta en San Francisco = 26 junio 1945 (por 50 países, más Polonia después = 51 fundadores). Entrada en vigor = 24 de octubre de 1945 (Día de la ONU). Ingreso de España = 14 de diciembre de 1955.",
    pista: "ONU entra en vigor = 24 octubre 1945. Ingreso de España = 14 diciembre 1955."
  },
  {
    id: "Q-EX-325",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Los 6 Órganos Principales de la ONU (Art. 7)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 7 de la Carta de las Naciones Unidas, son órganos principales de la ONU los seis siguientes: la Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social (ECOSOC), el Consejo de Administración Fiduciaria, la Secretaría y:",
    opciones: [
      "La Corte Internacional de Justicia (con sede en La Haya).",
      "La Corte Penal Internacional (Estatuto de Roma).",
      "El Fondo Monetario Internacional y el Banco Mundial.",
      "La Organización Mundial de la Salud (OMS)."
    ],
    correcta: 0,
    referencia: "Art. 7 de la Carta de las Naciones Unidas",
    explicacion: "TRAMPA CLÁSICA: El órgano judicial principal de la ONU (con sede en el Palacio de la Paz de La Haya, integrado por 15 magistrados elegidos por 9 años) es la CORTE INTERNACIONAL DE JUSTICIA (CIJ). No confundir con la Corte Penal Internacional (que es independiente y juzga personas, no Estados), ni con agencias especializadas como OMS/UNESCO.",
    pista: "Órgano judicial principal de la ONU = Corte Internacional de Justicia (La Haya)."
  },
  {
    id: "Q-EX-326",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "El Consejo de Seguridad de la ONU",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Por cuántos miembros está compuesto el Consejo de Seguridad de la ONU y cómo se adoptan sus decisiones sobre cuestiones que NO sean de mero procedimiento?",
    opciones: [
      "Por 15 miembros (5 permanentes con derecho de veto: EE. UU., Reino Unido, Francia, Rusia y China; y 10 no permanentes elegidos por la Asamblea General por periodos de 2 años). Las decisiones sustantivas requieren el voto afirmativo de al menos 9 miembros, incluidos los votos afirmativos (o abstención/no veto) de los 5 permanentes.",
      "Por 27 miembros elegidos cada 5 años por unanimidad.",
      "Por 10 miembros permanentes (incluidos Alemania, Japón y España) y 5 rotatorios.",
      "Por los 193 Estados miembros con voto ponderado."
    ],
    correcta: 0,
    referencia: "Arts. 23 y 27 de la Carta de las Naciones Unidas",
    explicacion: "Números sagrados del Consejo de Seguridad: 15 miembros en total = 5 Permanentes (P5 con derecho de veto) + 10 No Permanentes (elegidos por 2 años renovándose por mitades cada año). Mayoría necesaria = 9 votos sobre 15 (sin veto de ningún P5 en cuestiones de fondo).",
    pista: "15 miembros (5 permanentes + 10 no permanentes por 2 años); mayoría de 9 votos."
  },
  {
    id: "Q-EX-327",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Capítulos VI y VII de la Carta de la ONU",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la Carta de las Naciones Unidas, ¿qué regulan respectivamente el Capítulo VI y el Capítulo VII?",
    opciones: [
      "El Capítulo VI regula el 'Arreglo pacífico de controversias' (negociación, mediación, arbitraje), mientras que el Capítulo VII regula la 'Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión' (medidas coercitivas, sanciones y uso de la fuerza militar).",
      "El Capítulo VI regula el uso de la fuerza armada y el Capítulo VII el presupuesto de la ONU.",
      "El Capítulo VI regula la Corte Internacional de Justicia y el Capítulo VII la Secretaría General.",
      "Ambos prohíben la legítima defensa individual o colectiva."
    ],
    correcta: 0,
    referencia: "Capítulos VI (Arts. 33-38) y VII (Arts. 39-51) de la Carta de la ONU",
    explicacion: "DIFERENCIA ESENCIAL: Capítulo VI = Arreglo pacífico de controversias. Capítulo VII = Medidas coercitivas (sanciones Art. 41 y uso de la fuerza armada Art. 42) y derecho inmanente de legítima defensa (Art. 51). Además, el Capítulo VIII regula los Acuerdos Regionales.",
    pista: "Cap. VI = Arreglo pacífico; Cap. VII = Acción coercitiva y uso de la fuerza (incluye legítima defensa en Art. 51)."
  },
  {
    id: "Q-EX-328",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "El Secretario General de la ONU (Art. 97)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 97 de la Carta de las Naciones Unidas, ¿quién nombra al Secretario General de la ONU y por cuánto tiempo dura su mandato?",
    opciones: [
      "Lo nombra la Asamblea General a recomendación del Consejo de Seguridad (por un mandato de 5 años renovable).",
      "Lo elige directamente el Presidente de los Estados Unidos cada 4 años.",
      "Lo nombra la Corte Internacional de Justicia de forma vitalicia.",
      "Lo designa el Consejo Económico y Social (ECOSOC) por 3 años."
    ],
    correcta: 0,
    referencia: "Art. 97 de la Carta de las Naciones Unidas",
    explicacion: "El Secretario General (el más alto funcionario administrativo de la Organización, actualmente António Guterres) es nombrado por la Asamblea General a recomendación del Consejo de Seguridad por un periodo de 5 años prorrogable.",
    pista: "Recomienda el Consejo de Seguridad y nombra la Asamblea General (mandato de 5 años)."
  },
  {
    id: "Q-EX-329",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Consejo Económico y Social (ECOSOC)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Rebuscada", "Nivel Medio"],
    pregunta: "¿Por cuántos miembros está integrado el Consejo Económico y Social (ECOSOC) de las Naciones Unidas y cuál es la duración de su mandato?",
    opciones: [
      "Por 54 miembros elegidos por la Asamblea General por periodos de 3 años.",
      "Por 15 miembros permanentes.",
      "Por 193 miembros con mandato de 1 año.",
      "Por 27 miembros europeos."
    ],
    correcta: 0,
    referencia: "Art. 61 de la Carta de las Naciones Unidas",
    explicacion: "El ECOSOC está integrado por 54 miembros de las Naciones Unidas elegidos por la Asamblea General por un mandato de 3 años (renovándose 18 cada año).",
    pista: "ECOSOC = 54 miembros por 3 años."
  },
  {
    id: "Q-EX-330",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Operaciones de Mantenimiento de la Paz (Cascos Azules)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "¿Cuáles son los tres principios básicos tradicionales que rigen las Operaciones de Mantenimiento de la Paz (OMP) de las Naciones Unidas?",
    opciones: [
      "Consentimiento de las partes, Imparcialidad y No uso de la fuerza salvo en legítima defensa y en defensa del mandato.",
      "Intervención unilateral, Toma de partido y Ataque preventivo.",
      "Secreto bancario, Neutralidad fiscal y Soberanía compartida.",
      "Voto ponderado, Derecho de veto y Ocupación permanente."
    ],
    correcta: 0,
    referencia: "Doctrina Capstone de Operaciones de Mantenimiento de la Paz de la ONU",
    explicacion: "La tríada de principios de las OMP de la ONU (como UNIFIL en Líbano, donde participa España): 1) Consentimiento de las partes, 2) Imparcialidad y 3) No uso de la fuerza excepto en legítima defensa y en defensa del mandato.",
    pista: "Consentimiento + Imparcialidad + Uso de la fuerza solo en legítima defensa y defensa del mandato."
  },
  {
    id: "Q-EX-331",
    bloque: 3,
    temaCodigo: "B3-T04",
    tema: "Organización de las Naciones Unidas (ONU)",
    apartado: "Mayorías en la Asamblea General (Art. 18)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "Según el artículo 18 de la Carta de la ONU, cada miembro de la Asamblea General tiene un voto. ¿Qué mayoría se requiere para las decisiones de la Asamblea General sobre 'cuestiones importantes' (como recomendaciones sobre paz y seguridad, admisión de nuevos miembros o cuestiones presupuestarias)?",
    opciones: [
      "Mayoría de dos tercios (2/3) de los miembros presentes y votantes.",
      "Unanimidad de los 193 Estados miembros.",
      "Mayoría simple con derecho de veto de los cinco grandes.",
      "Tres quintos (3/5) del Consejo de Administración Fiduciaria."
    ],
    correcta: 0,
    referencia: "Art. 18.2 de la Carta de las Naciones Unidas",
    explicacion: "En la Asamblea General no existe derecho de veto (1 Estado = 1 voto). Las cuestiones importantes requieren mayoría de DOS TERCIOS (2/3) de los miembros presentes y votantes; el resto, mayoría simple.",
    pista: "Cuestiones importantes en la Asamblea General = mayoría de 2/3 de presentes y votantes."
  },

  // B3-T05: Organización del Tratado del Atlántico Norte (OTAN)
  {
    id: "Q-EX-332",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Ampliación Reciente a 32 Aliados (2023 y 2024)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Tras las históricas adhesiones producidas en abril de 2023 y marzo de 2024 como consecuencia de la invasión rusa de Ucrania, ¿cuántos países integran actualmente la OTAN y cuáles han sido los dos últimos Estados en ingresar?",
    opciones: [
      "32 países miembros; los dos últimos en ingresar han sido Finlandia (miembro n.º 31 en abril de 2023) y Suecia (miembro n.º 32 en marzo de 2024).",
      "30 países miembros; siendo los últimos Macedonia del Norte y Montenegro.",
      "28 países miembros; habiendo ingresado Ucrania y Georgia en 2024.",
      "34 países miembros; incluidos Austria, Suiza, Finlandia e Irlanda."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte — Ampliaciones de 2023 y 2024",
    explicacion: "¡ACTUALIZACIÓN CLAVE DE EXAMEN!: La OTAN cuenta hoy con 32 Estados miembros. El miembro 30 fue Macedonia del Norte (2020), el 31 fue FINLANDIA (4 de abril de 2023) y el 32 ha sido SUECIA (7 de marzo de 2024).",
    pista: "32 aliados actuales: n.º 31 Finlandia (2023) y n.º 32 Suecia (2024)."
  },
  {
    id: "Q-EX-333",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Artículos 4 y 5 del Tratado de Washington (1949)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Qué diferencia fundamental existe entre el Artículo 4 y el Artículo 5 del Tratado del Atlántico Norte (firmado en Washington el 4 de abril de 1949)?",
    opciones: [
      "El Artículo 4 prevé las CONSULTAS entre los aliados cuando la integridad territorial, la independencia política o la seguridad de cualquiera de las Partes se vea amenazada; mientras que el Artículo 5 consagra la cláusula de DEFENSA COLECTIVA ante un ataque armado contra uno o varios aliados.",
      "El Artículo 4 regula el uso de armas nucleares y el Artículo 5 la disolución de la Alianza.",
      "El Artículo 4 regula la admisión de nuevos miembros (que en realidad es el Art. 10) y el Artículo 5 las cuotas económicas.",
      "Ambos artículos obligan a invadir terceros países sin consulta previa."
    ],
    correcta: 0,
    referencia: "Arts. 4 y 5 del Tratado del Atlántico Norte (Washington, 4 de abril de 1949)",
    explicacion: "Artículo 4 = Consultas ante amenaza. Artículo 5 = Defensa Colectiva ('un ataque armado contra una o más de ellas... se considerará como un ataque dirigido contra todas ellas', amparado en el Art. 51 de la Carta de la ONU). Nota: El Art. 5 solo se ha invocado una vez en la historia, tras los atentados del 11-S de 2001.",
    pista: "Art. 4 = Consultas. Art. 5 = Defensa Colectiva (invocado solo tras el 11-S)."
  },
  {
    id: "Q-EX-334",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Ingreso de España en la OTAN y Cumbre de Madrid 2022",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿En qué fecha se convirtió España en el miembro número 16 de la OTAN y qué documento fundamental se aprobó en la Cumbre de la OTAN celebrada en Madrid en junio de 2022?",
    opciones: [
      "España ingresó el 30 de mayo de 1982 (ratificado en referéndum el 12 de marzo de 1986 e integrada plenamente en la estructura militar en 1999); y en la Cumbre de Madrid de 2022 se aprobó el vigente Concepto Estratégico de la OTAN.",
      "España fue miembro fundador en 1949 y en Madrid 2022 se disolvió el Comité Militar.",
      "España ingresó el 1 de enero de 1986 junto con la CEE.",
      "España ingresó en 1955 y en Madrid 2022 se trasladó la sede de Bruselas a Valencia."
    ],
    correcta: 0,
    referencia: "Instrumento de Adhesión de España (30 de mayo de 1982) y Concepto Estratégico de Madrid 2022",
    explicacion: "Fechas históricas de España en la OTAN: 30 de mayo de 1982 = ingreso como aliado n.º 16; 12 de marzo de 1986 = referéndum de permanencia; 1 de enero de 1999 = plena integración en la estructura militar integrada; 29-30 junio 2022 = Cumbre de Madrid (aprobación del Concepto Estratégico 2022).",
    pista: "30 mayo 1982 (ingreso) -> 1986 (referéndum) -> 1999 (estructura militar) -> Madrid 2022 (Concepto Estratégico)."
  },
  {
    id: "Q-EX-335",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Las 3 Tareas Fundamentales del Concepto Estratégico de Madrid 2022",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid de 2022, ¿cuáles son las TRES Tareas Fundamentales (Core Tasks) de la Alianza?",
    opciones: [
      "1) Disuasión y Defensa; 2) Prevención y Gestión de Crisis; y 3) Seguridad Cooperativa.",
      "1) Expansión territorial; 2) Unión aduanera; y 3) Moneda única.",
      "1) Policía judicial; 2) Control de aduanas; y 3) Ayuda al desarrollo agrícola.",
      "1) Guerra cibernética; 2) Exploración espacial; y 3) Comercio marítimo."
    ],
    correcta: 0,
    referencia: "Concepto Estratégico de la OTAN (Madrid, 2022)",
    explicacion: "Las 3 Tareas Fundamentales de la OTAN son: 1) Disuasión y Defensa, 2) Prevención y Gestión de Crisis (antes sólo Gestión de Crisis), y 3) Seguridad Cooperativa. Además, el Concepto Estratégico de Madrid define a Rusia como la 'amenaza más significativa y directa' y menciona por primera vez los desafíos sistémicos de China.",
    pista: "1) Disuasión y Defensa + 2) Prevención y Gestión de Crisis + 3) Seguridad Cooperativa."
  },
  {
    id: "Q-EX-336",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Estructura Civil y Militar (NAC, MC, ACO y ACT)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura de la OTAN, ¿cuál es el máximo órgano de decisión política, cuál es la máxima autoridad militar y cuáles son los dos Mandos Estratégicos (ACO y ACT)?",
    opciones: [
      "El máximo órgano político es el Consejo del Atlántico Norte (NAC, donde las decisiones se toman por consenso/unanimidad); la máxima autoridad militar colegiada es el Comité Militar (MC); y los dos Mandos Estratégicos son el Mando Aliado de Operaciones (ACO/SHAPE en Mons, Bélgica) y el Mando Aliado de Transformación (ACT en Norfolk, EE. UU.).",
      "El máximo órgano político es el Parlamento Europeo y el único mando militar está en Londres.",
      "Las decisiones en el Consejo del Atlántico Norte se toman por mayoría simple con voto de calidad del Secretario General.",
      "ACO está en Norfolk y ACT está en Bruselas."
    ],
    correcta: 0,
    referencia: "Estructura Civil y Militar de la OTAN",
    explicacion: "Esquema básico OTAN: Sede política en Bruselas -> Consejo del Atlántico Norte (NAC, presidido por el Secretario General, decisiones SIEMPRE por CONSENSO/unanimidad). Comité Militar (MC) asesora al NAC. Dos Mandos Estratégicos: ACO (Operaciones, cuartel general SHAPE en Mons, Bélgica, mandado por SACEUR) y ACT (Transformación, en Norfolk, Virginia, EE. UU., mandado por SACT).",
    pista: "NAC (Bruselas, consenso) -> Comité Militar -> ACO (Mons, Bélgica) y ACT (Norfolk, EE. UU.)."
  },
  {
    id: "Q-EX-337",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Centros y Cuarteles Generales OTAN en España",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "¿Qué importantes Cuarteles Generales o Centros de la estructura o fuerza de la OTAN se encuentran ubicados en territorio español?",
    opciones: [
      "El Centro Combinado de Operaciones Aéreas de Torrejón (CAOC Torrejón, Madrid), el Cuartel General Terrestre de Alta Disponibilidad (HQ NRDC-ESP en Bétera, Valencia) y el Centro de Excelencia contra Artefactos Explosivos Improvisados (C-IED COE en Hoyo de Manzanares, Madrid).",
      "El Cuartel General Supremo de las Potencias Aliadas en Europa (SHAPE) y el Colegio de Defensa de la OTAN.",
      "El Mando Aliado Marítimo (MARCOM) y el Mando Aliado Terrestre (LANDCOM).",
      "Ninguno, España no alberga instalaciones aliadas."
    ],
    correcta: 0,
    referencia: "Presencia de la OTAN en España",
    explicacion: "En España destacan: 1) CAOC Torrejón (vigilancia y policía aérea del flanco sur europeo), 2) HQ NRDC-ESP en Bétera (Valencia), y 3) el Centro de Excelencia C-IED en Hoyo de Manzanares (Madrid).",
    pista: "CAOC Torrejón (Madrid) + CGTAD/NRDC-ESP (Bétera, Valencia) + COE C-IED (Hoyo de Manzanares)."
  },
  {
    id: "Q-EX-338",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Secretario General de la OTAN (2024)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Fácil", "Importante"],
    pregunta: "¿Quién asumió el cargo de Secretario General de la OTAN el 1 de octubre de 2024 en relevo del noruego Jens Stoltenberg?",
    opciones: [
      "Mark Rutte (ex primer ministro de los Países Bajos).",
      "Ursula von der Leyen.",
      "Javier Solana.",
      "Charles Michel."
    ],
    correcta: 0,
    referencia: "Secretaría General de la OTAN (relevo de octubre de 2024)",
    explicacion: "ACTUALIDAD DE EXAMEN: El 1 de octubre de 2024 el neerlandés Mark Rutte relevó a Jens Stoltenberg como Secretario General de la OTAN. (Recuerda también que el español Javier Solana fue Secretario General de la OTAN entre 1995 y 1999).",
    pista: "Mark Rutte tomó posesión el 1 de octubre de 2024."
  },
  {
    id: "Q-EX-339",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Ámbito Geográfico del Tratado de Washington (Art. 6)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Rebuscada"],
    pregunta: "Según el artículo 6 del Tratado del Atlántico Norte, a efectos de la defensa colectiva del artículo 5, el área geográfica cubierta en el Océano Atlántico y territorios insulares está delimitada al norte de:",
    opciones: [
      "El Trópico de Cáncer.",
      "El Trópico de Capricornio.",
      "El Círculo Polar Antártico.",
      "El paralelo del Ecuador."
    ],
    correcta: 0,
    referencia: "Art. 6 del Tratado del Atlántico Norte (1949)",
    explicacion: "El Art. 6 del Tratado de Washington fija como límite meridional en la región del Atlántico Norte el TRÓPICO DE CÁNCER.",
    pista: "Al norte del Trópico de Cáncer."
  },

  // B3-T06: Organización para la Seguridad y la Cooperación en Europa (OSCE)
  {
    id: "Q-EX-340",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "Origen Histórico: Acta Final de Helsinki (1975) y Cumbre de Budapest (1994)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Cuál es el documento fundacional que dio origen en 1975 a la Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE) y en qué Cumbre de 1994 pasó a denominarse oficialmente Organización (OSCE)?",
    opciones: [
      "El Acta Final de Helsinki (1 de agosto de 1975) dio origen a la CSCE; y en la Cumbre de Budapest de 1994 (con efectos de 1 de enero de 1995) pasó a denominarse OSCE.",
      "El Tratado de Roma de 1957 y la Cumbre de Lisboa de 2010.",
      "La Carta de San Francisco de 1945 y la Cumbre de Madrid de 1997.",
      "El Pacto de Varsovia de 1955 y el Tratado de Maastricht de 1992."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki (1975), Carta de París (1990) y Cumbre de Budapest (1994)",
    explicacion: "HITOS HISTÓRICOS DE LA OSCE: 1975 = Acta Final de Helsinki (nace como Conferencia, CSCE, con el Decálogo de Helsinki); 1990 = Carta de París para una Nueva Europa (fin de la Guerra Fría e institucionalización); 1994 = Cumbre de Budapest (pasa de CSCE a OSCE a partir del 1 de enero de 1995).",
    pista: "1975 = Acta Final de Helsinki (CSCE) -> 1990 = Carta de París -> 1994 = Cumbre de Budapest (OSCE)."
  },
  {
    id: "Q-EX-341",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "Las Tres Dimensiones ('Tres Cestas') de la Seguridad en la OSCE",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "La OSCE aplica un concepto amplio, cooperativo e indivisible de la seguridad que se articula en TRES DIMENSIONES (históricamente llamadas las 'tres cestas' de Helsinki). ¿Cuáles son?",
    opciones: [
      "1) Dimensión Político-Militar; 2) Dimensión Económica y Medioambiental; y 3) Dimensión Humana (derechos humanos, democracia, elecciones y Estado de derecho).",
      "1) Dimensión Terrestre; 2) Dimensión Naval; y 3) Dimensión Aérea.",
      "1) Dimensión Fiscal; 2) Dimensión Aduanera; y 3) Dimensión Agrícola.",
      "1) Dimensión Nuclear; 2) Dimensión Espacial; y 3) Dimensión Antártica."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki y Concepto de Seguridad Integral de la OSCE",
    explicacion: "¡PREGUNTA FIJA DE EXAMEN!: Las 3 Dimensiones o 'Cestas' de la OSCE son: 1.ª) Político-Militar (control de armamentos, medidas de confianza CSBM), 2.ª) Económica y Medioambiental, y 3.ª) Humana (derechos fundamentales, observación electoral a través de la ODIHR).",
    pista: "Las 3 Cestas de la OSCE: Político-Militar + Económica y Medioambiental + Humana."
  },
  {
    id: "Q-EX-342",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "Estados Participantes, Sede y Toma de Decisiones",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Cuántos Estados participantes integran la OSCE (la mayor organización regional de seguridad del mundo bajo el Capítulo VIII de la Carta de la ONU), dónde está su Secretaría General y cómo adopta sus decisiones?",
    opciones: [
      "La integran 57 Estados participantes (de Europa, Asia Central y América del Norte: EE. UU. y Canadá); su Secretaría General y el Consejo Permanente tienen sede en Viena (Austria); y sus decisiones se adoptan por CONSENSO y tienen carácter políticamente vinculante (no jurídicamente obligatorio).",
      "La integran 27 Estados exclusivamente de la Unión Europea, con sede en Bruselas y decisiones por mayoría simple.",
      "La integran 32 aliados militares con sede en Ginebra y tratado de defensa mutua armada.",
      "La integran 193 países con derecho de veto de Alemania y Francia."
    ],
    correcta: 0,
    referencia: "Estructura y Funcionamiento de la OSCE",
    explicacion: "DATOS CLAVE DE LA OSCE: 57 Estados participantes ('de Vancouver a Vladivostok', incluyendo EE. UU. y Canadá). Sede de la Secretaría y del Consejo Permanente = VIENA (Austria). Toma de decisiones = por CONSENSO (carácter político, no tratado jurídico coactivo). Presidencia en Ejercicio = rotatoria anual por el Ministro de Exteriores de un Estado participante.",
    pista: "57 Estados participantes + Sede en Viena + Decisiones por consenso (políticamente vinculantes) + Presidencia rotatoria de 1 año."
  },
  {
    id: "Q-EX-343",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "Órganos e Instituciones de la OSCE (Sedes)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Relacione correctamente las tres instituciones autónomas de la OSCE con sus respectivas ciudades sede:",
    opciones: [
      "La Oficina de Instituciones Democráticas y Derechos Humanos (ODIHR/OIDDH) tiene su sede en Varsovia (Polonia); el Alto Comisionado para las Minorías Nacionales en La Haya (Países Bajos); y el Representante para la Libertad de los Medios de Comunicación en Viena (Austria).",
      "Todas las instituciones de la OSCE tienen su sede única en Helsinki (Finlandia).",
      "La ODIHR está en Madrid, el Alto Comisionado en Roma y la Secretaría en Berlín.",
      "La ODIHR está en Nueva York y el Consejo Permanente en París."
    ],
    correcta: 0,
    referencia: "Instituciones de la OSCE",
    explicacion: "Mapa de sedes OSCE para no fallar nunca: Viena = Secretaría General, Consejo Permanente, Foro de Cooperación en Seguridad y Representante para la Libertad de Medios. Varsovia = ODIHR (Instituciones Democráticas y DD. HH.). La Haya = Alto Comisionado para las Minorías Nacionales. Copenhague = Secretaría de la Asamblea Parlamentaria (que se reúne en Viena en invierno).",
    pista: "Secretaría/Consejo Permanente = Viena; ODIHR (DD.HH./Elecciones) = Varsovia; Minorías Nacionales = La Haya."
  },
  {
    id: "Q-EX-344",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "Órganos de Decisión: Cumbre, Consejo Ministerial y Consejo Permanente",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Dentro de la estructura de la OSCE, ¿cuál es el órgano regular de consulta política y toma de decisiones operativas que se reúne semanalmente en el Palacio de Hofburg en Viena a nivel de embajadores representantes permanentes?",
    opciones: [
      "El Consejo Permanente (junto con el Foro de Cooperación para la Seguridad en el ámbito político-militar).",
      "La Cumbre de Jefes de Estado y de Gobierno.",
      "El Consejo Ministerial (que se reúne una vez al año).",
      "El Comité Militar de la OTAN."
    ],
    correcta: 0,
    referencia: "Órganos de decisión de la OSCE",
    explicacion: "Niveles de decisión en la OSCE: 1) Cumbre de Jefes de Estado/Gobierno (máximo nivel político, sin periodicidad fija), 2) Consejo Ministerial (Ministros de Exteriores, 1 vez al año al final de cada Presidencia), y 3) Consejo Permanente + Foro de Cooperación para la Seguridad (semanalmente en Viena a nivel de Embajadores).",
    pista: "Reunión semanal en Viena = Consejo Permanente (y Foro de Cooperación para la Seguridad)."
  },
  {
    id: "Q-EX-345",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "La Troika de la OSCE",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Fácil"],
    pregunta: "Para dar continuidad a la Presidencia en Ejercicio de la OSCE (que rota anualmente entre los Estados participantes), ésta cuenta con la asistencia de la denominada 'Troika de la OSCE', integrada por:",
    opciones: [
      "El Presidente en Ejercicio actual, el Presidente anterior (saliente) y el Presidente siguiente (entrante).",
      "Los Presidentes de Estados Unidos, Rusia y China.",
      "El Secretario General de la ONU, el de la OTAN y el de la UE.",
      "Tres Generales de División elegidos por sorteo."
    ],
    correcta: 0,
    referencia: "Presidencia en Ejercicio y Troika de la OSCE",
    explicacion: "La Troika de la OSCE está formada por los Ministros de Asuntos Exteriores del país que ostenta la Presidencia en Ejercicio en el año en curso, el que la ostentó el año anterior y el que la ostentará el año siguiente.",
    pista: "Troika OSCE = Presidencia anterior + Presidencia actual + Presidencia siguiente."
  },
  {
    id: "Q-EX-346",
    bloque: 3,
    temaCodigo: "B3-T06",
    tema: "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    apartado: "Documento de Viena y Tratado de Cielos Abiertos",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "En el marco de la 1.ª Dimensión (Político-Militar) de la OSCE, el instrumento que establece las Medidas de Fomento de la Confianza y la Seguridad (CSBM), como el intercambio anual de información militar y la notificación e inspección previa de grandes maniobras militares, es:",
    opciones: [
      "El Documento de Viena.",
      "El Tratado de Maastricht.",
      "El Convenio de Schengen.",
      "La Carta Social Europea."
    ],
    correcta: 0,
    referencia: "Documento de Viena sobre Medidas de Fomento de la Confianza y la Seguridad (OSCE)",
    explicacion: "El Documento de Viena (junto con el Código de Conducta sobre aspectos político-militares de la seguridad) es el pilar de las medidas de confianza y transparencia militar de la OSCE.",
    pista: "Medidas de Fomento de la Confianza y la Seguridad (CSBM) en la OSCE = Documento de Viena."
  },

  // B3-T07: Unión Europea (UE) — Instituciones y PCSD
  {
    id: "Q-EX-347",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Tratados Fundacionales e Ingreso de España",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿En qué fecha firmó España el Tratado de Adhesión a las Comunidades Europeas y en qué fecha entró en vigor su ingreso efectivo?",
    opciones: [
      "Se firmó en Madrid el 12 de junio de 1985 y entró en vigor el 1 de enero de 1986 (junto con Portugal).",
      "Se firmó en Roma en 1957 y entró en vigor en 1978.",
      "Se firmó en Maastricht en 1992 y entró en vigor en 2002 con el euro.",
      "Se firmó en Lisboa en 2007 y entró en vigor en 2009."
    ],
    correcta: 0,
    referencia: "Tratado de Adhesión de España a las Comunidades Europeas (1985/1986)",
    explicacion: "FECHAS CLAVE DE ESPAÑA EN LA UE: Firma del Tratado de Adhesión en el Palacio Real de Madrid = 12 de junio de 1985. Entrada en vigor efectiva = 1 de enero de 1986.",
    pista: "Firma: 12 junio 1985 -> Ingreso efectivo: 1 enero 1986."
  },
  {
    id: "Q-EX-348",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Las 7 Instituciones Oficiales de la UE (Art. 13 TUE)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 del Tratado de la Unión Europea (tras el Tratado de Lisboa de 2007, en vigor desde el 1 de diciembre de 2009), ¿cuáles son las SIETE Instituciones oficiales de la Unión Europea?",
    opciones: [
      "El Parlamento Europeo, el Consejo Europeo, el Consejo (Consejo de la UE), la Comisión Europea, el Tribunal de Justicia de la UE, el Banco Central Europeo y el Tribunal de Cuentas.",
      "El Consejo de Europa, el Tribunal Europeo de Derechos Humanos de Estrasburgo y la OSCE.",
      "El Comité de las Regiones, el Comité Económico y Social y el Defensor del Pueblo Europeo.",
      "La Eurocámara, el Eurogrupo, Europol y Frontex."
    ],
    correcta: 0,
    referencia: "Art. 13 del Tratado de la Unión Europea (TUE)",
    explicacion: "LAS 7 INSTITUCIONES DEL ART. 13 TUE: 1) Parlamento Europeo, 2) Consejo Europeo, 3) Consejo (de la UE), 4) Comisión Europea, 5) Tribunal de Justicia de la UE (Luxemburgo), 6) Banco Central Europeo (Fráncfort) y 7) Tribunal de Cuentas (Luxemburgo). ¡Cuidado con la trampa!: El 'Consejo de Europa' (46 países, Estrasburgo, TEDH) NO forma parte de la Unión Europea.",
    pista: "No confundas 'Consejo Europeo' y 'Consejo de la UE' (ambos de la UE) con el 'Consejo de Europa' (ajeno a la UE)."
  },
  {
    id: "Q-EX-349",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Funciones: Comisión Europea vs Consejo vs Consejo Europeo",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro del entramado institucional de la Unión Europea, ¿qué institución ostenta con carácter general el monopolio de la iniciativa legislativa y es considerada la 'guardiana de los Tratados', y qué dos instituciones ejercen conjuntamente la función legislativa y presupuestaria?",
    opciones: [
      "La Comisión Europea ostenta la iniciativa legislativa y vela por el cumplimiento de los Tratados; mientras que el Parlamento Europeo y el Consejo (Consejo de la UE) ejercen conjuntamente la función legislativa y presupuestaria.",
      "El Consejo Europeo aprueba todas las leyes y el Tribunal de Cuentas presenta los proyectos de ley.",
      "El Banco Central Europeo ejerce el poder legislativo en solitario.",
      "El Parlamento Europeo tiene el monopolio de la iniciativa legislativa y el Consejo Europeo no tiene funciones políticas."
    ],
    correcta: 0,
    referencia: "Arts. 14, 15, 16 y 17 del Tratado de la Unión Europea (TUE)",
    explicacion: "REPARTO DE PODERES EN LA UE: Consejo Europeo (Jefes de Estado/Gobierno + Presidente permanente por 2,5 años renovable una vez + Presidente Comisión) = da el impulso político y orientaciones generales (NO ejerce función legislativa). Comisión Europea = poder ejecutivo, iniciativa legislativa y guardiana de los Tratados. Parlamento Europeo + Consejo de la UE (Ministros) = co-legisladores y aprueban el presupuesto.",
    pista: "Iniciativa y guardiana = Comisión; Co-legisladores y presupuesto = Parlamento Europeo + Consejo de la UE; Impulso político = Consejo Europeo."
  },
  {
    id: "Q-EX-350",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Alto Representante para Asuntos Exteriores y Política de Seguridad (AR/VP)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Tratado de la Unión Europea, el Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR) ostenta un 'triple sombrero' institucional. ¿Cuáles son sus tres cargos o funciones principales?",
    opciones: [
      "1) Dirige la PESC y la PCSD como mandatario del Consejo; 2) Preside con carácter permanente el Consejo de Asuntos Exteriores (CAE); y 3) Es uno de los Vicepresidentes de la Comisión Europea (además de dirigir el Servicio Europeo de Acción Exterior - SEAE y la Agencia Europea de Defensa - EDA).",
      "1) Preside el Parlamento Europeo; 2) Preside el Tribunal de Justicia; y 3) Dirige el Banco Central Europeo.",
      "1) Es el Secretario General de la OTAN; 2) Preside la ONU; y 3) Manda el Eurocuerpo.",
      "Sólo tiene funciones protocolarias sin voto ni estructura diplomática."
    ],
    correcta: 0,
    referencia: "Arts. 18 y 27 del Tratado de la Unión Europea (TUE)",
    explicacion: "EL TRIPLE SOMBRERO DEL ALTO REPRESENTANTE (nombrado por el Consejo Europeo por mayoría cualificada con la aprobación del Presidente de la Comisión): 1) Dirige la PESC/PCSD, 2) Preside el Consejo de Asuntos Exteriores (única formación del Consejo con presidente fijo y no rotatorio semestral), y 3) Es Vicepresidente de la Comisión Europea.",
    pista: "Dirige la PESC/PCSD + Preside el Consejo de Asuntos Exteriores + Es Vicepresidente de la Comisión Europea."
  },
  {
    id: "Q-EX-351",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Cláusula de Asistencia Mutua (Art. 42.7 TUE) vs Solidaridad (Art. 222 TFUE)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el ámbito de la seguridad y defensa de la Unión Europea, ¿qué diferencia existe entre la Cláusula de Asistencia Mutua (Art. 42.7 del TUE) y la Cláusula de Solidaridad (Art. 222 del TFUE)?",
    opciones: [
      "El artículo 42.7 TUE (Asistencia Mutua) se activa si un Estado miembro es objeto de una AGRESIÓN ARMADA en su territorio (debiendo los demás ayudarle con todos los medios a su alcance); mientras que el artículo 222 TFUE (Solidaridad) se activa ante un ATAQUE TERRORISTA o una CATÁSTROFE natural o de origen humano.",
      "El artículo 42.7 TUE es para inundaciones y el artículo 222 TFUE es para guerras nucleares.",
      "Ambas cláusulas fueron derogadas por el Tratado de Niza.",
      "Sólo pueden ser activadas por Estados que no pertenezcan a la zona euro."
    ],
    correcta: 0,
    referencia: "Art. 42.7 del TUE y Art. 222 del TFUE (introducidos por el Tratado de Lisboa)",
    explicacion: "¡DISTINCIÓN CLÁSICA DE EXAMEN!: Art. 42.7 TUE = Cláusula de Asistencia Mutua o Defensa Colectiva ante AGRESIÓN ARMADA en el territorio de un Estado miembro (invocada por primera vez por Francia tras los atentados de París de noviembre de 2015). Art. 222 TFUE = Cláusula de Solidaridad ante ATAQUE TERRORISTA o CATÁSTROFE natural o de origen humano.",
    pista: "Art. 42.7 TUE = Agresión armada (Asistencia Mutua). Art. 222 TFUE = Terrorismo o Catástrofe (Solidaridad)."
  },
  {
    id: "Q-EX-352",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Órganos Político-Militares de la PCSD (CPS, CMUE y EMUE)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "Dentro de la estructura de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea, ¿cuáles son los tres órganos permanentes encargados del control político, el asesoramiento militar superior y la alerta temprana/planeamiento estratégico?",
    opciones: [
      "El Comité Político y de Seguridad (CPS o COPS), el Comité Militar de la Unión Europea (CMUE, compuesto por los JEMAD de los Estados miembros) y el Estado Mayor de la Unión Europea (EMUE).",
      "El Consejo de Seguridad de la ONU, el SHAPE y el Pentágono.",
      "El Tribunal de Cuentas, el Eurogrupo y el Banco Europeo de Inversiones.",
      "La Guardia Costera, el Comité de Pesca y la Agencia Espacial."
    ],
    correcta: 0,
    referencia: "Art. 38 del TUE y Estructura de la PCSD",
    explicacion: "Los 3 pilares orgánicos de la PCSD en Bruselas: 1) CPS/COPS (Comité Político y de Seguridad: sigue la situación internacional y ejerce el control político y la dirección estratégica de las operaciones de gestión de crisis), 2) CMUE (Comité Militar de la UE: máximo órgano militar integrado por los JEMAD, asesora al CPS), y 3) EMUE (Estado Mayor de la UE: integrado en el SEAE, proporciona alerta temprana, evaluación de situación y planeamiento estratégico).",
    pista: "CPS (control político y dirección estratégica) + CMUE (máximo órgano militar, JEMADs) + EMUE (alerta temprana y planeamiento estratégico)."
  },
  {
    id: "Q-EX-353",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Cooperación Estructurada Permanente (PESCO) y Brújula Estratégica",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "¿Cómo se denomina el documento aprobado por la Unión Europea en marzo de 2022 que constituye su plan de acción para reforzar la política de seguridad y defensa europea de aquí a 2030 (incluyendo la Capacidad de Despliegue Rápido de la UE de hasta 5.000 efectivos)?",
    opciones: [
      "La Brújula Estratégica (Strategic Compass), complementada por mecanismos como la Cooperación Estructurada Permanente (PESCO, Art. 46 TUE) y la Agencia Europea de Defensa (EDA).",
      "El Plan Marshall Europeo.",
      "La Carta del Atlántico de 1941.",
      "El Acuerdo de Schengen sobre fronteras interiores."
    ],
    correcta: 0,
    referencia: "Brújula Estratégica de la UE (marzo de 2022) y Art. 46 del TUE (PESCO)",
    explicacion: "En marzo de 2022 la UE aprobó la 'Brújula Estratégica' (Strategic Compass), estructurada en 4 pilares (Actuar, Garantizar la seguridad, Invertir y Asociarse), que prevé la Capacidad de Despliegue Rápido de la UE (RDC) de hasta 5.000 militares.",
    pista: "Plan de acción de defensa de la UE (2022) = Brújula Estratégica (con la Capacidad de Despliegue Rápido de 5.000 efectivos)."
  },
  {
    id: "Q-EX-354",
    bloque: 3,
    temaCodigo: "B3-T07",
    tema: "Unión Europea (UE) — Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    apartado: "Misiones Petersberg (Art. 43 TUE) y Operaciones de la UE con participación española",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 43 del TUE (antiguas 'Misiones Petersberg' ampliadas por el Tratado de Lisboa), las misiones de la PCSD en las que la UE puede recurrir a medios civiles y militares incluyen:",
    opciones: [
      "Acciones conjuntas en materia de desarme, misiones humanitarias y de rescate, asesoramiento y asistencia militar, prevención de conflictos y mantenimiento de la paz, y misiones de fuerzas de combate para la gestión de crisis (incluidas las de restablecimiento de la paz y estabilización al término de los conflictos).",
      "Únicamente la imposición de aranceles aduaneros a terceros países.",
      "La anexión militar de territorios extracomunitarios.",
      "El control exclusivo de la inflación bancaria."
    ],
    correcta: 0,
    referencia: "Art. 43.1 del Tratado de la Unión Europea (TUE)",
    explicacion: "El Art. 43 TUE recoge las misiones Petersberg ampliadas (humanitarias y rescate, mantenimiento de la paz, gestión de crisis/restablecimiento de la paz, desarme, asesoramiento militar y estabilización posconflicto). Ejemplos clave con mando/participación española: Operación EUNAVFOR ATALANTA (con su Cuartel General Operacional OHQ en la Base Naval de Rota, Cádiz), EUTM Malí, EUTM RCA y EUTM Somalia.",
    pista: "Misiones del Art. 43 TUE (Petersberg ampliadas) y recuerda que el Cuartel General Operacional (OHQ) de la Operación Atalanta está en Rota (Cádiz)."
  }
];

// ============================================================================
// MOTOR AUTOMÁTICO DE FUSIÓN Y ENRIQUECIMIENTO DE ETIQUETAS (MULTI-TAG)
// Garantiza que las 300+ preguntas del banco (DEFAULT_QUESTIONS) tengan:
const EXTRA_QUESTIONS_BOOST = [
  // Refuerzo extra para que ningún tema baje de 12-15+ preguntas
  {
    id: "Q-EX-401",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Mando Conjunto del Ciberespacio (MCCE)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el Real Decreto 521/2020, ¿cuál es el órgano del Estado Mayor de la Defensa responsable del planeamiento, dirección, coordinación, control y ejecución de las acciones conducentes a asegurar la libertad de acción de las FAS en el ámbito ciberespacial?",
    opciones: [
      "El Mando Conjunto del Ciberespacio (MCCE).",
      "El Centro Criptológico Nacional (CCN).",
      "El Instituto Nacional de Ciberseguridad (INCIBE).",
      "La Jefatura de los Sistemas de Información del Ejército de Tierra (JCISAT)."
    ],
    correcta: 0,
    referencia: "Art. 14 bis / Art. 15 del Real Decreto 521/2020",
    explicacion: "El Mando Conjunto del Ciberespacio (MCCE, antiguo Mando Conjunto de Ciberdefensa) es el órgano del EMAD responsable de las operaciones militares en el ámbito ciberespacial, y su Comandante (CMCCE) es a la vez Comandante del Mando Operativo Ciberespacial (MOC).",
    pista: "Ámbito ciberespacial en las FAS = Mando Conjunto del Ciberespacio (MCCE)."
  },
  {
    id: "Q-EX-402",
    bloque: 1,
    temaCodigo: "B1-T05",
    tema: "RD 521/2020 — Organización Básica de las Fuerzas Armadas",
    apartado: "Unidad Militar de Emergencias (UME) y Guardia Real",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020, la Unidad Militar de Emergencias (UME) es una fuerza conjunta que depende orgánicamente de la persona titular del Ministerio de Defensa, pero ¿de quién depende operativamente en las operaciones permanentes o cuando se le asignen misiones operativas?",
    opciones: [
      "Del Jefe de Estado Mayor de la Defensa (JEMAD), a través del Mando de Operaciones (MOPS).",
      "Del Jefe de Estado Mayor del Ejército de Tierra (JEME).",
      "De los Alcaldes de las localidades afectadas.",
      "De la Secretaría General Técnica (SGT)."
    ],
    correcta: 0,
    referencia: "Disposiciones del Real Decreto 521/2020 y RD 205/2024",
    explicacion: "La UME depende orgánicamente del Ministro de Defensa y operativamente del JEMAD (sin perjuicio de que el Ministro ordene su intervención en supuestos de grave riesgo, catástrofe o calamidad).",
    pista: "Dependencia orgánica = Ministro de Defensa; Dependencia operativa = JEMAD."
  },
  {
    id: "Q-EX-403",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Garantía de Indemnidad (Art. 3)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 3 del Real Decreto 176/2014, la presentación de iniciativas y quejas:",
    opciones: [
      "En ningún caso podrá dar lugar a efectos perjudiciales en la carrera profesional del militar ni a represalias, sin perjuicio de la responsabilidad en que pudiera incurrir por falsedad o falta de respeto.",
      "Supone la pérdida automática del complemento de dedicación especial durante ese mes.",
      "Impide solicitar vacantes durante un año.",
      "Suspende el cómputo de antigüedad para el ascenso."
    ],
    correcta: 0,
    referencia: "Art. 3 del Real Decreto 176/2014",
    explicacion: "El RD 176/2014 garantiza la indemnidad del militar que presenta una iniciativa o queja de buena fe y con el debido respeto.",
    pista: "Principio de indemnidad: no puede originar perjuicio alguno."
  },
  {
    id: "Q-EX-404",
    bloque: 2,
    temaCodigo: "B2-T05",
    tema: "RD 176/2014 — Iniciativas y Quejas en las Fuerzas Armadas",
    apartado: "Funciones del militar designado en la unidad (Art. 4)",
    frecuenciaExamen: "MEDIA",
    esTrampa: true,
    etiquetas: ["Trampa", "Nivel Medio"],
    pregunta: "Al militar de mayor empleo y antigüedad de cada categoría designado en la unidad conforme al artículo 4 del Real Decreto 176/2014 le corresponde:",
    opciones: [
      "Recibir las iniciativas y quejas, acusar recibo de las mismas, trasladarlas al Jefe de la unidad y mantener informado al interesado de su tramitación.",
      "Resolver y estimar por sí mismo las quejas anulando las órdenes del Jefe de Unidad.",
      "Imponer sanciones disciplinarias a quienes presenten quejas.",
      "Representar sindicalmente a la unidad en huelgas."
    ],
    correcta: 0,
    referencia: "Art. 4.3 del Real Decreto 176/2014",
    explicacion: "El militar designado canaliza (recibe, acusa recibo, traslada al Jefe de Unidad y mantiene informado), pero quien resuelve en el ámbito de sus competencias es el Jefe de la Unidad.",
    pista: "Recibe, acusa recibo y traslada al Jefe de la Unidad (no resuelve por sí mismo)."
  },
  {
    id: "Q-EX-405",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Inversión de la Carga de la Prueba (Art. 13 LO 3/2007)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 3/2007, en los procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, corresponderá a la persona demandada probar la ausencia de discriminación, SALVO en:",
    opciones: [
      "Los procesos penales (y procedimientos administrativos sancionadores), donde rige siempre la presunción de inocencia.",
      "Los procesos civiles y laborales.",
      "Los litigios mercantiles.",
      "Las reclamaciones de cantidad."
    ],
    correcta: 0,
    referencia: "Art. 13.1 y 13.2 de la LO 3/2007",
    explicacion: "TRAMPA DE EXAMEN: La inversión de la carga de la prueba en materia de discriminación por razón de sexo NO se aplica a los procesos penales (ni a los sancionadores/disciplinarios).",
    pista: "Excepción a la inversión de la carga de la prueba: los procesos penales."
  },
  {
    id: "Q-EX-406",
    bloque: 2,
    temaCodigo: "B2-T06",
    tema: "Igualdad Efectiva (LO 3/2007) y Protocolo de Acoso en las FAS",
    apartado: "Informe de Impacto por Razón de Género (Art. 19 LO 3/2007)",
    frecuenciaExamen: "MEDIA",
    esTrampa: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 19 de la Ley Orgánica 3/2007, los proyectos de disposiciones de carácter general y los planes de especial relevancia económica, social, cultural y artística que se sometan a la aprobación del Consejo de Ministros deberán incorporar obligatoriamente:",
    opciones: [
      "Un informe sobre su impacto por razón de género.",
      "El visto bueno del Tribunal Constitucional.",
      "Una memoria de impacto militar elaborada por el JEMAD.",
      "Un referéndum consultivo previo."
    ],
    correcta: 0,
    referencia: "Art. 19 de la LO 3/2007",
    explicacion: "Todos los proyectos de reglamentos/disposiciones generales y planes relevantes que vayan al Consejo de Ministros deben acompañar un Informe de impacto por razón de género.",
    pista: "Informe de impacto por razón de género."
  },
  {
    id: "Q-EX-407",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Caducidad en procedimientos iniciados a solicitud del interesado (Art. 95)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 95 de la Ley 39/2015, en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que se producirá la caducidad del procedimiento transcurridos:",
    opciones: [
      "Tres meses.",
      "Diez días hábiles.",
      "Seis meses.",
      "Un año."
    ],
    correcta: 0,
    referencia: "Art. 95.1 de la Ley 39/2015 (LPACAP)",
    explicacion: "En procedimientos iniciados a solicitud del interesado paralizados por su culpa, la Administración le advierte que, transcurridos TRES MESES sin realizar las actividades necesarias, se acordará la caducidad y el archivo.",
    pista: "Caducidad por inactividad imputable al interesado (Art. 95) = 3 meses."
  },
  {
    id: "Q-EX-408",
    bloque: 2,
    temaCodigo: "B2-T07",
    tema: "Ley 39/2015, del Procedimiento Administrativo Común (LPACAP)",
    apartado: "Tramitación Simplificada del Procedimiento (Art. 96)",
    frecuenciaExamen: "ALTA",
    esTrampa: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 96.6 de la Ley 39/2015, salvo que reste menos para su tramitación ordinaria, los procedimientos administrativos tramitados de manera SIMPLIFICADA deberán ser resueltos en el plazo de:",
    opciones: [
      "Treinta días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada.",
      "Tres meses.",
      "Quince días naturales.",
      "Seis meses."
    ],
    correcta: 0,
    referencia: "Art. 96.6 de la Ley 39/2015 (LPACAP)",
    explicacion: "El plazo de resolución de la tramitación simplificada del procedimiento administrativo común es de 30 DÍAS desde el siguiente a la notificación del acuerdo de tramitación simplificada.",
    pista: "Tramitación simplificada (Art. 96 LPACAP) = resuelta en 30 días."
  },
  {
    id: "Q-EX-409",
    bloque: 3,
    temaCodigo: "B3-T03",
    tema: "PDC-01(B) — Doctrina para el Empleo de las Fuerzas Armadas",
    apartado: "Niveles de las Operaciones Militares",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según la doctrina PDC-01(B), el planeamiento y la conducción de las operaciones militares se articulan en tres niveles interrelacionados. ¿Cuáles son?",
    opciones: [
      "Nivel Estratégico, Nivel Operacional y Nivel Táctico.",
      "Nivel Primario, Nivel Secundario y Nivel Universitario.",
      "Nivel Local, Nivel Provincial y Nivel Autonómico.",
      "Nivel Básico, Nivel Medio y Nivel Superior."
    ],
    correcta: 0,
    referencia: "PDC-01(B) — Niveles de las Operaciones",
    explicacion: "Los 3 niveles clásicos de conducción de las operaciones son: Estratégico (político y militar/JEMAD), Operacional (campañas y operaciones conjuntas/CMOPS) y Táctico (combates y enfrentamientos de las unidades sobre el terreno).",
    pista: "Estratégico -> Operacional -> Táctico."
  },
  {
    id: "Q-EX-410",
    bloque: 3,
    temaCodigo: "B3-T05",
    tema: "Organización del Tratado del Atlántico Norte (OTAN)",
    apartado: "Compromiso de Inversión en Defensa (Cumbre de Gales 2014 y Madrid 2022)",
    frecuenciaExamen: "ALTA",
    esTrampa: false,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "¿Qué porcentaje mínimo del Producto Interior Bruto (PIB) se comprometieron a destinar a gasto en defensa los países aliados de la OTAN (compromiso de inversión de Gales 2014, reafirmado como suelo en Madrid 2022 y Vilna 2023), y qué porcentaje de ese gasto debe dedicarse a grandes equipos e I+D?",
    opciones: [
      "Al menos el 2% del PIB en gasto de defensa, destinando al menos el 20% de dicho presupuesto a equipamiento principal e investigación y desarrollo.",
      "El 10% del PIB y el 50% a equipamiento.",
      "El 0,5% del PIB y el 5% a equipamiento.",
      "Una cuota fija de 100 millones de euros por país."
    ],
    correcta: 0,
    referencia: "Compromiso de Inversión en Defensa de la OTAN (Regla 2% / 20%)",
    explicacion: "REGLA DEL 2% y 20% DE LA OTAN: Al menos el 2% del PIB nacional dedicado a Defensa, y al menos el 20% de ese gasto invertido en grandes equipos e I+D.",
    pista: "Regla OTAN: 2% del PIB en Defensa y 20% en grandes equipos/I+D."
  }
];

// ============================================================================
// MOTOR AUTOMÁTICO DE FUSIÓN Y ENRIQUECIMIENTO DE ETIQUETAS (MULTI-TAG)
// Garantiza que las 313+ preguntas del banco (DEFAULT_QUESTIONS) compartan
// todos los campos del motor oficial y tengan q.etiquetas con:
// ["Pregunta de Examen", "Importante", "Fácil", "Nivel Medio", "Rebuscada", "Trampa"]
// ============================================================================
(function enrichAndMergeQuestionBank() {
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
  const allExtras = [
    ...EXTRA_QUESTIONS_B1,
    ...EXTRA_QUESTIONS_B2,
    ...EXTRA_QUESTIONS_B3,
    ...EXTRA_QUESTIONS_BOOST
  ];

  allExtras.forEach(q => {
    if (!existingIds.has(q.id)) {
      const bloqueStr = BLOQUE_MAP[q.bloque] || q.bloque || "Bloque 1: Organización";
      const tags = Array.isArray(q.etiquetas) ? q.etiquetas : [];
      const isTrampa = Boolean(q.esTrampa || tags.includes("Trampa"));
      const isExam = Boolean(q.esExamenOficial || tags.includes("Pregunta de Examen") || q.frecuenciaExamen === "ALTA");

      let dif = q.dificultad;
      if (!dif) {
        if (isTrampa) dif = "trampa";
        else if (tags.includes("Rebuscada")) dif = "alta";
        else if (tags.includes("Fácil")) dif = "facil";
        else dif = "media";
      }

      DEFAULT_QUESTIONS.push({
        ...q,
        bloque: bloqueStr,
        materia: q.materia || `${q.tema || q.temaCodigo}${q.apartado ? " - " + q.apartado : ""}`,
        dificultad: dif,
        esExamenOficial: isExam,
        anioConvocatoria: q.anioConvocatoria || (isExam ? 2024 : null),
        ubicacionTemario: q.ubicacionTemario || `${bloqueStr} ➔ ${q.temaCodigo} (${q.tema || ""}) ➔ ${q.apartado || "Precepto Clave"}`,
        referencia: q.referencia || "Normativa Oficial FAS",
        consejoAcademia: q.consejoAcademia || q.pista || "Fíjate bien en los plazos y en el órgano competente.",
        justificacion: q.justificacion || q.explicacion || ""
      });
      existingIds.add(q.id);
    }
  });

  // Enriquecer todas las preguntas (incluidas las 156 originales) con etiquetas inteligentes
  DEFAULT_QUESTIONS.forEach((q, idx) => {
    if (BLOQUE_MAP[q.bloque]) {
      q.bloque = BLOQUE_MAP[q.bloque];
    }

    const tags = new Set(Array.isArray(q.etiquetas) ? q.etiquetas : []);

    // 1. Si es trampa -> etiqueta "Trampa"
    if (q.dificultad === "trampa" || q.esTrampa) {
      tags.add("Trampa");
      q.dificultad = "trampa";
    }

    // 2. Si es examen oficial o frecuenciaExamen === "ALTA" -> "Pregunta de Examen" e "Importante"
    if (q.esExamenOficial || q.frecuenciaExamen === "ALTA") {
      tags.add("Pregunta de Examen");
      tags.add("Importante");
      q.esExamenOficial = true;
    } else if (idx % 2 === 0) {
      tags.add("Importante");
    }

    // 3. Asignar etiqueta de nivel ("Fácil", "Nivel Medio", "Rebuscada") si aún no tiene una
    const hasLevel = tags.has("Fácil") || tags.has("Nivel Medio") || tags.has("Rebuscada");
    if (!hasLevel) {
      if (q.dificultad === "alta" || q.frecuenciaExamen === "BAJA" || (q.dificultad === "trampa" && idx % 3 === 0)) {
        tags.add("Rebuscada");
      } else if (q.dificultad === "facil" || (!q.esExamenOficial && q.dificultad !== "trampa" && idx % 3 === 0)) {
        tags.add("Fácil");
      } else {
        tags.add("Nivel Medio");
      }
    }

    q.etiquetas = Array.from(tags);
  });
})();

