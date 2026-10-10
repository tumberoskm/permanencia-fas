/**
 * ============================================================================
 * OLEADA MUSCULAR 7 DE PREGUNTAS OFICIALES: CRUCE DE PLAZOS, AUTORIDADES Y CASOS PRÁCTICOS
 * (+200 NUEVAS PREGUNTAS: Q-W7-001 A Q-W7-200 -> HITO 1.400 PREGUNTAS TOTALES)
 * Y 2 NUEVOS SIMULACROS OFICIALES (#19 Y #20 -> 20 SIMULACROS CERRADOS)
 * ============================================================================
 */

const WAVE7_NEW_EXAM_PACKS = [
  {
    id: "PACK-19",
    numero: 19,
    titulo: "⏱️ Simulacro #19 • Especial Cruce de Plazos, Mayorías y Autoridades Sancionadoras",
    subtitulo: "100 Preguntas de Precisión Quirúrgica (CE, Ley 40/2015, LO 8/2014 y Ley 39/2015) • 120 Minutos",
    badge: "SIMULACRO #19 • PLAZOS",
    badgeColor: "bg-rose-400 text-slate-950",
    borderClass: "border-rose-500/70 bg-rose-950/20",
    color: "rose",
    count: 100,
    preguntas: 100,
    durationMinutes: 120,
    tiempoMinutos: 120,
    reparto: "34 B1 • 40 B2 • 26 B3 (Especial Plazos)",
    mode: "ponderado_100",
    packRule: "solo_plazos",
    bloque: "ALL",
    tagFilter: "ALL",
    studyMode: true,
    descripcion: "Simulacro intensivo de 100 preguntas diseñado para dominar las diferencias de días, meses, años, mayorías parlamentarias y potestad sancionadora que más hacen dudar en el examen oficial."
  },
  {
    id: "PACK-20",
    numero: 20,
    titulo: "🏆 Simulacro #20 • Gran Examen Magistral 'Hito 1.400 Preguntas' (Élite Permanencia 2026)",
    subtitulo: "100 Preguntas Ponderadas de Corte Real + Casos Prácticos de Unidad • 120 Minutos",
    badge: "SIMULACRO #20 • HITO 1.400",
    badgeColor: "bg-emerald-400 text-slate-950",
    borderClass: "border-emerald-400/80 bg-emerald-950/25",
    color: "emerald",
    count: 100,
    preguntas: 100,
    durationMinutes: 120,
    tiempoMinutos: 120,
    reparto: "34 B1 • 40 B2 • 26 B3 (Élite 1.400)",
    mode: "ponderado_100",
    bloque: "ALL",
    tagFilter: "ALL",
    studyMode: false,
    descripcion: "Simulacro oficial número 20 que culmina el banco de 1.400 preguntas con supuestos prácticos de vida en unidad, misiones internacionales 2025/2026 y organización de los 3 Ejércitos."
  }
];

const WAVE7_QUESTIONS_PART1 = [
  // =========================================================================
  // BLOQUE 1: ORGANIZACIÓN (B1-T01 A B1-T06) — Q-W7-001 A Q-W7-068
  // =========================================================================
  {
    id: "Q-W7-001",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Cruce de Plazos de Estados Excepcionales (Art. 116)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En un cruce clásico de plazos del artículo 116 de la Constitución Española entre el estado de alarma y el estado de excepción, señale la afirmación estrictamente CORRECTA:",
    opciones: [
      "El estado de alarma lo declara el Gobierno mediante decreto acordado en Consejo de Ministros por un plazo máximo de 15 días (dando cuenta al Congreso, sin cuya autorización no puede prorrogarse), mientras que el estado de excepción lo declara el Gobierno previa autorización del Congreso por un plazo que no podrá exceder de 30 días, prorrogables por otro plazo igual.",
      "Tanto el estado de alarma como el de excepción los declara el Rey por un plazo máximo de 60 días.",
      "El estado de alarma requiere mayoría de dos tercios del Senado para su declaración inicial por 30 días.",
      "El estado de excepción lo declara directamente el Presidente del Tribunal Constitucional por 15 días."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 116",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Tabla Comparativa Art. 116: Alarma (15 días) vs Excepción (30+30 días) vs Sitio (Mayoría absoluta Congreso)",
    consejoAcademia: "Regla de oro del Art. 116 CE: **Alarma = 15 días** (Gobierno da cuenta al Congreso; prórroga con autorización del Congreso). **Excepción = máx. 30 días + 30 de prórroga** (Gobierno **previa autorización** del Congreso). **Sitio = declarado por mayoría absoluta del Congreso** a propuesta exclusiva del Gobierno.",
    justificacion: "El artículo 116.2 y 116.3 CE establece 15 días máximos iniciales para el estado de alarma (por decreto del Gobierno) y 30 días prorrogables por otros 30 para el estado de excepción (previa autorización del Congreso)."
  },
  {
    id: "Q-W7-002",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Detención Preventiva vs Habeas Corpus (Art. 17)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 17 de la Constitución Española, la detención preventiva no podrá durar más del tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos y, en todo caso, en el plazo máximo de:",
    opciones: [
      "72 horas, el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial.",
      "24 horas improrrogables en cualquier circunstancia.",
      "10 días hábiles, salvo autorización del Alcalde.",
      "5 días naturales sin necesidad de intervención judicial."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 17.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título I: Derechos Fundamentales (Art. 17: Libertad personal y límite de 72 horas)",
    consejoAcademia: "No confundas el plazo máximo constitucional de detención preventiva (**72 horas**, Art. 17.2 CE) con el procedimiento de **Habeas Corpus** (Art. 17.4 CE, regulado por LO 6/1984 para la inmediata puesta a disposición judicial de todo detenido ilegalmente).",
    justificacion: "El artículo 17.2 CE fija en 72 horas el plazo máximo en que el detenido debe ser puesto en libertad o a disposición de la autoridad judicial."
  },
  {
    id: "Q-W7-003",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Suspensión Individual de Derechos (Art. 55.2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 55.2 de la Constitución Española, una ley orgánica podrá determinar la forma y los casos en los que, de forma individual y con la necesaria intervención judicial y el adecuado control parlamentario, pueden ser suspendidos para personas determinadas en relación con las investigaciones correspondientes a la actuación de bandas armadas o elementos terroristas, los derechos reconocidos en:",
    opciones: [
      "El artículo 17, apartado 2 (plazo máximo de detención preventiva), y los artículos 18, apartados 2 (inviolabilidad del domicilio) y 3 (secreto de las comunicaciones).",
      "Los artículos 14 (igualdad), 15 (derecho a la vida) y 27 (derecho a la educación).",
      "El artículo 20 (libertad de cátedra) y el artículo 28 (derecho de huelga).",
      "Todos los derechos del Título I sin excepción alguna."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 55.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Suspensión individual de derechos (Art. 55.2 CE: Arts. 17.2, 18.2 y 18.3)",
    consejoAcademia: "¡Pregunta estrella de examen! En la **suspensión individual** (terrorismo/bandas armadas, Art. 55.2 CE) SOLO pueden suspenderse **3 preceptos**: **Art. 17.2** (detención preventiva), **Art. 18.2** (domicilio) y **Art. 18.3** (comunicaciones). ¡Nunca el 17.3 (asistencia letrada)!",
    justificacion: "El artículo 55.2 CE circunscribe la suspensión individual exclusivamente a los artículos 17.2, 18.2 y 18.3 CE."
  },
  {
    id: "Q-W7-004",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Tutela del Recurso de Amparo (Art. 53.2)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 53.2 de la Constitución Española, ¿qué derechos y libertades son susceptibles de tutela a través del recurso de amparo ante el Tribunal Constitucional?",
    opciones: [
      "Las libertades y derechos reconocidos en el artículo 14, en la Sección primera del Capítulo segundo del Título I (artículos 15 a 29) y la objeción de conciencia reconocida en el artículo 30.2.",
      "Únicamente los principios rectores de la política social y económica del Capítulo tercero (artículos 39 a 52).",
      "Todos los artículos de la Constitución del 1 al 169.",
      "Exclusivamente el derecho de propiedad privada (artículo 33) y el derecho a contraer matrimonio (artículo 32)."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 53.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Garantías de los Derechos Fundamentales (Art. 53.2: Amparo ante el TC)",
    consejoAcademia: "Fórmula matemática del **Recurso de Amparo (Art. 53.2 CE)**: **Art. 14 + Sección 1ª (Arts. 15 a 29) + Art. 30.2 (Objeción de conciencia)**. ¡Ojo! Los **Tribunales ordinarios** por procedimiento preferente y sumario tutelan el **14 y del 15 al 29** (sin el 30.2).",
    justificacion: "El artículo 53.2 CE extiende el recurso de amparo ante el Tribunal Constitucional al artículo 14, a la Sección 1ª del Capítulo 2º (arts. 15 a 29) y a la objeción de conciencia del artículo 30."
  },
  {
    id: "Q-W7-005",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - La Corona: Regencia vs Tutela (Arts. 59 y 60)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con las instituciones de la Regencia y la Tutela del Rey menor previstas en los artículos 59 y 60 de la Constitución Española, señale la proposición CORRECTA:",
    opciones: [
      "Para ejercer la Regencia es preciso ser español y mayor de edad; si no hubiere ninguna persona a quien corresponda la Regencia, ésta será nombrada por las Cortes Generales y se compondrá de una, tres o cinco personas. Por su parte, los cargos de Regente y de Tutor no podrán estar acumulados sino en el padre, madre o ascendientes directos del Rey.",
      "La Regencia puede componerse de dos o cuatro personas extranjeras designadas por el Consejo de Estado.",
      "Los cargos de Regente y de Tutor son siempre compatibles en cualquier diputado o senador.",
      "El Tutor del Rey menor puede ejercer simultáneamente todo cargo o representación política."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 59 y 60",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título II: La Corona (Regencia 1, 3 o 5 personas y Tutela del Rey menor)",
    consejoAcademia: "Dos datos de examen sobre el Título II: 1) La Regencia electiva por las Cortes se compone de **1, 3 o 5 personas** (siempre impares, españoles y mayores de edad). 2) **Regente y Tutor NO pueden acumularse**, salvo en el **padre, madre o ascendientes directos del Rey**.",
    justificacion: "Los artículos 59.3, 59.4 y 60.1 CE establecen los requisitos de nacionalidad española y mayoría de edad, la composición de 1, 3 o 5 personas para la Regencia dativa y la prohibición de acumular Regencia y Tutela salvo en padre, madre o ascendientes directos."
  },
  {
    id: "Q-W7-006",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Actos del Rey exentos de refrendo (Art. 65)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 56.3 y 65 de la Constitución Española, los actos del Rey serán siempre refrendados careciendo de validez sin dicho refrendo, SALVO:",
    opciones: [
      "El nombramiento y relevo de los miembros civiles y militares de su Casa (art. 65.2) y la distribución libre de la cantidad global que recibe de los Presupuestos del Estado para el sostenimiento de su Familia y Casa (art. 65.1).",
      "El mando supremo de las Fuerzas Armadas y la sanción de las leyes orgánicas.",
      "La propuesta de candidato a Presidente del Gobierno tras las elecciones.",
      "La declaración de la guerra y la firma de la paz."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 56.3 y 65",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título II: El Refrendo y la excepción del Artículo 65",
    consejoAcademia: "¡Trampa clásica!: La **propuesta y nombramiento del Presidente del Gobierno** SÍ lleva refrendo (lo refrenda el **Presidente del Congreso**, Art. 64.1 CE). Lo ÚNICO libre de refrendo es el **Art. 65 CE** (presupuesto de su Casa y nombramiento/relevo de los miembros civiles y militares de su Casa).",
    justificacion: "El artículo 56.3 CE remite expresamente al artículo 65.2 CE como excepción al refrendo obligatorio de los actos regios."
  },
  {
    id: "Q-W7-007",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Composición del Congreso de los Diputados (Art. 68)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 68 de la Constitución Española, el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados. ¿En qué plazo tendrán lugar las elecciones desde la terminación del mandato y en qué plazo deberá ser convocado el Congreso electo?",
    opciones: [
      "Las elecciones tendrán lugar entre los 30 días y 60 días desde la terminación del mandato, y el Congreso electo deberá ser convocado dentro de los 25 días siguientes a la celebración de las elecciones.",
      "Las elecciones tendrán lugar a los 90 días y el Congreso se convocará dentro de los 60 días siguientes.",
      "Las elecciones tendrán lugar en 15 días y el Congreso se convocará en 10 días.",
      "El mandato de los Diputados dura 5 años y se convoca a los 40 días."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 68.6",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título III: Las Cortes Generales (Art. 68.6: Plazos electorales 30-60 días y 25 días)",
    consejoAcademia: "Memoriza el par numérico del **Art. 68.6 CE**: Elecciones entre **30 y 60 días** tras terminar el mandato (4 años); convocatoria del Congreso electo dentro de los **25 días siguientes** a las elecciones.",
    justificacion: "El artículo 68.6 CE dispone que las elecciones tendrán lugar entre los treinta y sesenta días desde la terminación del mandato y que el Congreso electo deberá ser convocado dentro de los veinticinco días siguientes a la celebración de las elecciones."
  },
  {
    id: "Q-W7-008",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Periodos Ordinarios de Sesiones (Art. 73)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "De acuerdo con el artículo 73.1 de la Constitución Española, las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones:",
    opciones: [
      "El primero, de septiembre a diciembre, y el segundo, de febrero a junio.",
      "El primero, de enero a mayo, y el segundo, de julio a noviembre.",
      "El primero, de octubre a enero, y el segundo, de marzo a julio.",
      "Únicamente durante los meses impares del año natural."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 73.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título III: Funcionamiento de las Cámaras (Art. 73: Septiembre-Diciembre y Febrero-Junio)",
    consejoAcademia: "Truco para no olvidarlo nunca: **Enero, Julio y Agosto** son inhábiles parlamentarios ordinarios. Por tanto: **1º periodo = Septiembre a Diciembre**; **2º periodo = Febrero a Junio**.",
    justificacion: "El artículo 73.1 CE establece que las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones: el primero, de septiembre a diciembre, y el segundo, de febrero a junio."
  },
  {
    id: "Q-W7-009",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Plazo de Veto o Enmienda del Senado (Art. 90)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 90 de la Constitución Española, aprobado un proyecto de ley ordinaria u orgánica por el Congreso de los Diputados, el Senado dispone para oponer su veto o introducir enmiendas de un plazo de:",
    opciones: [
      "2 meses a partir del día de la recepción del texto, plazo que se reducirá al de 20 días naturales en los proyectos declarados urgentes por el Gobierno o por el Congreso de los Diputados.",
      "6 meses en procedimiento ordinario y 2 meses en los proyectos urgentes.",
      "15 días hábiles en todos los casos, sin posibilidad de reducción.",
      "1 año natural desde su publicación en el Boletín Oficial de las Cortes."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 90.2 y 90.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Elaboración de las Leyes (Art. 90: Plazo del Senado 2 meses / 20 días naturales en urgentes)",
    consejoAcademia: "¡Cuidado con los apellidos de los plazos en el Art. 90 CE!: En el Senado son **2 meses** (ordinario) o **20 días NATURALES** (si es declarado urgente por el Gobierno o el Congreso). Y para levantar el veto del Senado en el Congreso: **mayoría absoluta** al principio, o **mayoría simple** tras **2 meses**.",
    justificacion: "Los apartados 2 y 3 del artículo 90 CE fijan el plazo de dos meses para el Senado, reducido a veinte días naturales en los proyectos declarados urgentes."
  },
  {
    id: "Q-W7-010",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Plazo de Sanción Regia de las Leyes (Art. 91)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 91 de la Constitución Española, ¿en qué plazo sancionará el Rey las leyes aprobadas por las Cortes Generales, las promulgará y ordenará su inmediata publicación?",
    opciones: [
      "En el plazo de 15 días.",
      "En el plazo de 30 días hábiles.",
      "En el plazo de 2 meses.",
      "En el plazo de 72 horas."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 91",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Sanción, promulgación y publicación de las leyes (Art. 91: 15 días)",
    consejoAcademia: "Art. 91 CE: El Rey **sanciona en 15 días**, promulga y ordena su inmediata publicación.",
    justificacion: "El artículo 91 CE establece que el Rey sancionará en el plazo de quince días las leyes aprobadas por las Cortes Generales, y las promulgará y ordenará su inmediata publicación."
  },
  {
    id: "Q-W7-011",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Investidura vs Moción de Censura vs Cuestión de Confianza (Arts. 99, 112 y 113)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los requisitos de los artículos 99, 112 y 113 de la Constitución Española y señale cuál de las siguientes afirmaciones es CORRECTA:",
    opciones: [
      "La cuestión de confianza la plantea el Presidente del Gobierno previa deliberación del Consejo de Ministros y se entiende otorgada con el voto de la mayoría simple de los Diputados; mientras que la moción de censura debe ser propuesta al menos por la décima parte de los Diputados, incluir un candidato alternativo, no puede ser votada hasta que transcurran 5 días desde su presentación y requiere mayoría absoluta del Congreso.",
      "La moción de censura requiere mayoría simple y puede votarse a las 24 horas de su presentación.",
      "La cuestión de confianza requiere mayoría de tres quintos del Congreso y del Senado.",
      "Si en la investidura del artículo 99 no se obtiene mayoría en primera votación, se repite la votación a los 15 días y se disuelven las Cámaras si no pasa un año."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 99, 112 y 113",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Títulos IV y V: Investidura (48h / 2 meses), Cuestión de Confianza (mayoría simple) y Moción de Censura (1/10 Diputados, 5 días, mayoría absoluta)",
    consejoAcademia: "El triángulo de oro de los Títulos IV y V: 1) **Investidura (Art. 99)**: 1ª votación mayoría absoluta; **48 horas** después mayoría simple; si en **2 meses** desde la 1ª votación no hay investidura, el Rey disuelve ambas Cámaras con refrendo del Presidente del Congreso. 2) **Cuestión de Confianza (Art. 112)**: **Mayoría simple**. 3) **Moción de Censura (Art. 113)**: **1/10 Diputados**, candidato incluido, enfriamiento de **5 días** (mociones alternativas en los **2 primeros días**) y **mayoría absoluta**.",
    justificacion: "Los artículos 112 y 113 CE exigen mayoría simple para la cuestión de confianza y mayoría absoluta (con propuesta de al menos 1/10 de los Diputados y plazo de enfriamiento de 5 días) para la moción de censura."
  },
  {
    id: "Q-W7-012",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Tribunal Constitucional y CGPJ (Arts. 122 y 159)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la comparativa entre el Consejo General del Poder Judicial (Art. 122 CE) y el Tribunal Constitucional (Art. 159 CE), señale la opción CORRECTA:",
    opciones: [
      "El CGPJ está integrado por el Presidente del Tribunal Supremo (que lo preside) y por 20 miembros nombrados por el Rey por un período de 5 años; mientras que el Tribunal Constitucional se compone de 12 miembros nombrados por el Rey por un período de 9 años (renovándose por terceras partes cada 3 años), siendo elegido su Presidente entre sus miembros por un período de 3 años.",
      "El Tribunal Constitucional tiene 20 miembros elegidos por 5 años y el CGPJ tiene 12 miembros elegidos por 9 años.",
      "Los 12 magistrados del Tribunal Constitucional los elige íntegramente el Gobierno en Consejo de Ministros.",
      "Para ser miembro del Tribunal Constitucional basta con llevar 3 años de ejercicio profesional."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 122.3, 159 y 160",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Títulos VI y IX: Comparativa CGPJ (1+20, 5 años) vs TC (12 miembros: 4 Congreso + 4 Senado + 2 Gobierno + 2 CGPJ, 9 años, >15 años ejercicio)",
    consejoAcademia: "¡No los cruces en el examen!: **CGPJ = Presidente TS + 20 vocales** por **5 años** (12 entre Jueces/Magistrados + 4 Congreso por 3/5 + 4 Senado por 3/5). **TC = 12 miembros** por **9 años** renovados por tercios cada **3 años** (4 Congreso por 3/5 + 4 Senado por 3/5 + 2 Gobierno + 2 CGPJ, con **más de 15 años** de ejercicio profesional).",
    justificacion: "Los artículos 122.3, 159 y 160 CE regulan la composición y duración del mandato tanto del CGPJ (Presidente TS + 20 miembros por 5 años) como del TC (12 miembros por 9 años, Presidente por 3 años)."
  },
  {
    id: "Q-W7-013",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Autorización de Misiones en el Exterior (Art. 17)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 17 de la Ley Orgánica 5/2005, de la Defensa Nacional, para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno:",
    opciones: [
      "Realizará una consulta previa y recabará la autorización del Congreso de los Diputados; en las misiones que requieran una respuesta rápida o inmediata, los trámites de consulta y autorización se realizarán mediante procedimientos de urgencia que permitan cumplir con dichos trámites en el momento más oportuno.",
      "Únicamente necesitará el permiso verbal del Alcalde de Madrid.",
      "Requerirá siempre un referéndum nacional vinculante previo en el plazo de 6 meses.",
      "No necesita consultar ni informar jamás a las Cortes Generales."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, de la Defensa Nacional, Artículo 17",
    ubicacionTemario: "Bloque 1 > Tema 2 (LO 5/2005 Defensa Nacional) > Control parlamentario de las operaciones en el exterior (Art. 17: Autorización del Congreso de los Diputados)",
    consejoAcademia: "En la LO 5/2005 (Art. 17), quien autoriza las operaciones en el exterior es el **Congreso de los Diputados** (no el Senado). Si por razones de máxima urgencia no fuera posible la consulta previa, el Gobierno someterá al Congreso lo antes posible la decisión adoptada para su **ratificación**.",
    justificacion: "El artículo 17 de la LO 5/2005 exige la consulta previa y autorización del Congreso de los Diputados para ordenar operaciones en el exterior no directamente relacionadas con la defensa de España."
  },
  {
    id: "Q-W7-014",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Presidente vs Ministro de Defensa (Arts. 6 y 7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 6 y 7 de la Ley Orgánica 5/2005, de la Defensa Nacional, ¿a quién corresponde ordenar las misiones de las Fuerzas Armadas y formular la Directiva de Defensa Nacional, y a quién corresponde elaborar y desarrollar la política de defensa?",
    opciones: [
      "Corresponde al Presidente del Gobierno ordenar las misiones de las Fuerzas Armadas y formular la Directiva de Defensa Nacional; mientras que corresponde al Ministro de Defensa asistir al Presidente en la dirección estratégica de las operaciones militares y desarrollar y ejecutar la política de defensa.",
      "Corresponde al JEMAD formular la Directiva de Defensa Nacional y al Rey desarrollar la política militar.",
      "Corresponde al Congreso de los Diputados ordenar las misiones tácticas de cada batallón.",
      "Corresponde al Subsecretario de Defensa ejercer el mando de la estructura operativa."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, de la Defensa Nacional, Artículos 6 y 7",
    ubicacionTemario: "Bloque 1 > Tema 2 (LO 5/2005 Defensa Nacional) > Atribuciones del Presidente del Gobierno (Art. 6) vs Ministro de Defensa (Art. 7)",
    consejoAcademia: "¡Diferencia clave de examen en la LO 5/2005!: El **Gobierno** determina la política de defensa (Art. 5); el **Presidente del Gobierno** dirige la política de defensa, formula la **Directiva de Defensa Nacional** y **ordena las misiones de las FAS** (Art. 6); el **Ministro de Defensa** desarrolla y ejecuta la política de defensa (Art. 7).",
    justificacion: "Los artículos 6 y 7 de la LO 5/2005 deslindan las competencias del Presidente del Gobierno (formular la Directiva de Defensa Nacional y ordenar las misiones) y del Ministro de Defensa (desarrollar y ejecutar la política de defensa)."
  },
  {
    id: "Q-W7-015",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Reglas Esenciales del Militar (Art. 6 Ley 39/2007 y Disposición Final LO 5/2005)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 21 de la Ley Orgánica 5/2005, de la Defensa Nacional, en los supuestos de grave riesgo, catástrofe, calamidad u otras necesidades públicas, las Fuerzas Armadas:",
    opciones: [
      "Junto con las Instituciones del Estado y las Administraciones públicas, deben preservar la seguridad y el bienestar de los ciudadanos en los supuestos de grave riesgo, catástrofe, calamidad u otras necesidades públicas, conforme a lo establecido en la legislación vigente.",
      "Tienen prohibido intervenir en territorio nacional en caso de inundaciones o incendios forestales.",
      "Sustituyen automáticamente a todos los alcaldes y presidentes autonómicos.",
      "Únicamente pueden actuar fuera de las fronteras españolas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, de la Defensa Nacional, Artículo 15.3 y 21",
    ubicacionTemario: "Bloque 1 > Tema 2 (LO 5/2005 Defensa Nacional) > Misiones de las Fuerzas Armadas en supuestos de grave riesgo, catástrofe o calamidad (Art. 15.3)",
    consejoAcademia: "El **Art. 15.3 de la LO 5/2005** es la base legal directa de la creación de la **UME (Unidad Militar de Emergencias)**: preservar la seguridad y el bienestar de los ciudadanos en los supuestos de **grave riesgo, catástrofe, calamidad u otras necesidades públicas**.",
    justificacion: "El artículo 15.3 de la LO 5/2005 encomienda a las Fuerzas Armadas preservar la seguridad y el bienestar de los ciudadanos en los supuestos de grave riesgo, catástrofe, calamidad u otras necesidades públicas."
  },
  {
    id: "Q-W7-016",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Órganos Colegiados: Convocatoria y Quórum (Art. 17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 de la Ley 40/2015, de Régimen Jurídico del Sector Público, para la válida constitución de un órgano colegiado, a efectos de la celebración de sesiones, deliberaciones y toma de acuerdos, se requerirá la asistencia, presencial o a distancia:",
    opciones: [
      "Del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros; y los acuerdos serán adoptados por mayoría de votos.",
      "De la totalidad de los miembros titulares sin posibilidad de suplencia ni asistencia a distancia.",
      "Exclusivamente del Secretario del órgano colegiado, adoptándose los acuerdos por mayoría de tres quintos.",
      "De una décima parte de sus miembros en primera convocatoria."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 17.2 y 17.5",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Órganos Colegiados (Arts. 15 a 22: Quórum Presidente + Secretario + mitad al menos de miembros)",
    consejoAcademia: "Fórmula exacta del **Quórum de Órganos Colegiados (Art. 17.2 Ley 40/2015)**: **Presidente + Secretario (o suplentes) + al menos la MITAD de sus miembros**. En los órganos colegiados de la AGE (Art. 19.3), los miembros deberán recibir la convocatoria con una antelación mínima de **2 días**.",
    justificacion: "El artículo 17.2 y 17.5 de la Ley 40/2015 exige la asistencia del Presidente, del Secretario y de la mitad al menos de sus miembros, adoptándose los acuerdos por mayoría de votos."
  },
  {
    id: "Q-W7-017",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Órganos Colegiados en la AGE: Antelación de Convocatoria (Art. 19)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 19.3 de la Ley 40/2015, en los órganos colegiados de la Administración General del Estado, ¿con qué antelación mínima deberán recibir los miembros la convocatoria con el orden del día de las reuniones, y en qué plazo estará disponible la información sobre los temas del orden del día?",
    opciones: [
      "Con una antelación mínima de 2 días, quedando a disposición de los miembros en igual plazo la información sobre los temas que figuren en el orden del día.",
      "Con una antelación mínima de 15 días hábiles.",
      "Con una antelación mínima de 30 días naturales.",
      "Con una antelación mínima de 2 horas."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 19.3.b)",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Régimen de los órganos colegiados de la AGE (Art. 19.3: Antelación mínima de 2 días)",
    consejoAcademia: "¡No confundas la Ley 30/1992 derogada (que hablaba de 48 horas) con la **Ley 40/2015 vigente (Art. 19.3.b)**!: la antelación mínima de convocatoria en los órganos colegiados de la AGE es de **2 DÍAS**.",
    justificacion: "El artículo 19.3.b) de la Ley 40/2015 establece que los miembros de un órgano colegiado de la AGE deberán recibir la convocatoria con una antelación mínima de dos días."
  },
  {
    id: "Q-W7-018",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Abstención y Recusación: Plazos (Arts. 23 y 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 24 de la Ley 40/2015, de Régimen Jurídico del Sector Público, cuando un interesado promueve por escrito la RECUSACIÓN de una autoridad o empleado público, ¿cuáles son los plazos de tramitación y qué recurso cabe contra la resolución del superior jerárquico?",
    opciones: [
      "En el día siguiente el recusado manifestará a su inmediato superior si se da o no en él la causa alegada; si el recusado niega la causa, el superior resolverá en el plazo de 3 días, previos los informes y comprobaciones que considere oportunos, y contra las resoluciones adoptadas en esta materia no cabrá recurso, sin perjuicio de alegar la recusación al interponer el recurso que proceda contra el acto que ponga fin al procedimiento.",
      "El recusado dispone de 15 días para contestar y el superior resuelve en 2 meses, cabiendo recurso de alzada directo.",
      "La recusación suspende el procedimiento durante 1 año y la resuelve el Tribunal Supremo.",
      "La recusación solo puede plantearse verbalmente una vez dictada la sentencia firme."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 24",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Abstención y Recusación (Arts. 23 y 24: Plazos 1 día + 3 días y sin recurso directo)",
    consejoAcademia: "Memoriza la secuencia de la **Recusación (Art. 24 Ley 40/2015)**: **En el día siguiente** el recusado manifiesta si concurre la causa -> Si la niega, el superior resuelve en **3 DÍAS** -> Contra esta resolución **NO CABE RECURSO** independiente.",
    justificacion: "Los apartados 3, 4 y 5 del artículo 24 de la Ley 40/2015 fijan el plazo del día siguiente para el recusado, de tres días para que resuelva el superior y la irrecurribilidad autónoma de la resolución."
  },
  {
    id: "Q-W7-019",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Técnicas de Alteración de la Competencia (Arts. 8 a 14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De las siguientes técnicas previstas en los artículos 8 a 13 de la Ley 40/2015 (delegación de competencias, avocación, encomienda de gestión, delegación de firma y suplencia), ¿cuál de ellas supone la transferencia de la TITULARIDAD de la competencia?",
    opciones: [
      "Ninguna de ellas; conforme al artículo 8.1 de la Ley 40/2015, la competencia es irrenunciable y se ejercerá por los órganos administrativos que la tengan atribuida como propia, salvo los casos de delegación o avocación, mientras que la encomienda de gestión, la delegación de firma y la suplencia no suponen alteración de la titularidad de la competencia, aunque sí de los elementos determinantes de su ejercicio.",
      "La delegación de firma transfiere la titularidad definitiva de la competencia al órgano inferior.",
      "La encomienda de gestión transfiere la titularidad de las potestades sancionadoras a empresas privadas.",
      "La suplencia extingue definitivamente el órgano administrativo titular."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 8.1",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Competencia Administrativa (Arts. 8 a 13: Irrenunciabilidad y no alteración de la titularidad)",
    consejoAcademia: "¡Pregunta de examen seguro!: **Ninguna** de las 5 técnicas (Delegación, Avocación, Encomienda de gestión, Delegación de firma, Suplencia) transfiere la **titularidad** de la competencia (solo la **desconcentración** del Art. 8.2 transfiere titularidad y ejercicio). Además, recuerda que **Delegación de competencias y Encomienda de gestión SÍ se publican en el BOE**, mientras que **Avocación, Delegación de firma y Suplencia NO requieren publicación**.",
    justificacion: "El artículo 8.1 de la Ley 40/2015 establece que la competencia es irrenunciable y que la encomienda de gestión, la delegación de firma y la suplencia no suponen alteración de la titularidad de la competencia."
  },
  {
    id: "Q-W7-020",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Delegación de Competencias: Materias Prohibidas (Art. 9.2)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 9.2 de la Ley 40/2015, en ningún caso podrán ser objeto de delegación las competencias relativas a:",
    opciones: [
      "Los asuntos que se refieran a relaciones con la Jefatura del Estado, la Presidencia del Gobierno de la Nación, las Cortes Generales, las Presidencias de los Consejos de Gobierno de las Comunidades Autónomas y las Asambleas Legislativas de las Comunidades Autónomas, la adopción de disposiciones de carácter general y la resolución de recursos en los órganos administrativos que hayan dictado los actos objeto de recurso.",
      "La firma de certificados de asistencia a cursos informativos.",
      "La tramitación ordinaria de expedientes de contratación menor.",
      "La concesión de vacaciones y permisos reglamentarios al personal."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 9.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Delegación de competencias: prohibiciones del Art. 9.2 y prohibición de subdelegación (Art. 9.5)",
    consejoAcademia: "Recuerda las **4 prohibiciones de delegación (Art. 9.2 Ley 40/2015)**: 1) Relaciones con Jefatura del Estado, Presidencia del Gobierno, Cortes y CC.AA. 2) Adopción de **disposiciones de carácter general** (reglamentos). 3) Resolución de **recursos en los mismos órganos que hayan dictado los actos** recurridos. 4) Materias determinadas por norma con rango de ley.",
    justificacion: "El artículo 9.2 de la Ley 40/2015 enumera taxativamente las competencias que en ningún caso pueden ser objeto de delegación."
  },
  {
    id: "Q-W7-021",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Ministros vs Secretarios de Estado vs Subsecretarios (Arts. 61-63)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura de los Ministerios regulada en la Ley 40/2015, ¿quién ostenta la representación ordinaria del Ministerio, dirige los servicios comunes y ejerce la jefatura superior de todo el personal del Departamento?",
    opciones: [
      "El Subsecretario (artículo 63 de la Ley 40/2015), que tiene categoría de órgano directivo y es nombrado por Real Decreto del Consejo de Ministros entre funcionarios de carrera del Subgrupo A1.",
      "El Secretario de Estado, que es el único órgano directivo de nivel de Subdirección General.",
      "El Secretario General Técnico, que tiene rango de Ministro sin cartera.",
      "El Director del Gabinete Técnico, elegido entre personal eventual."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 63",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Órganos Superiores (Ministros y Secretarios de Estado) vs Directivos (Subsecretarios, Secretarios Generales, SGT, Directores Generales y Subdirectores Generales)",
    consejoAcademia: "¡Frase literal de examen (Art. 63 Ley 40/2015)!: El **Subsecretario** ostenta la **representación ordinaria del Ministerio**, dirige los **servicios comunes** y ejerce la **jefatura superior de todo el personal del Departamento**.",
    justificacion: "El artículo 63.1 de la Ley 40/2015 atribuye a los Subsecretarios la representación ordinaria del Ministerio, la dirección de los servicios comunes y la jefatura superior de todo el personal del Departamento."
  },
  {
    id: "Q-W7-022",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Administración General del Estado en el Exterior y Periférica (Arts. 69-75)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme a los artículos 72 a 75 de la Ley 40/2015, en la organización territorial de la Administración General del Estado, señale la relación CORRECTA entre el Delegado del Gobierno en la Comunidad Autónoma y el Subdelegado del Gobierno en la provincia:",
    opciones: [
      "Los Delegados del Gobierno tienen rango de Subsecretario, son nombrados por Real Decreto del Consejo de Ministros a propuesta del Presidente del Gobierno y dependen orgánicamente de la Presidencia del Gobierno; mientras que los Subdelegados del Gobierno tienen nivel de Subdirector General y son nombrados por el Delegado del Gobierno mediante el procedimiento de libre designación entre funcionarios de carrera del Subgrupo A1.",
      "Los Delegados del Gobierno tienen rango de Ministro y los Subdelegados tienen rango de Secretario de Estado.",
      "Los Subdelegados del Gobierno son elegidos por sufragio universal cada cuatro años.",
      "En las Comunidades Autónomas uniprovinciales existen obligatoriamente tres Subdelegados del Gobierno por municipio."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículos 72 y 74",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Delegados del Gobierno (rango Subsecretario) vs Subdelegados del Gobierno (nivel Subdirector General) vs Directores Insulares",
    consejoAcademia: "Pareja de rangos que siempre cae en el Bloque 1: **Delegado del Gobierno en CC.AA. = rango de Subsecretario** (Real Decreto Consejo de Ministros a propuesta del Presidente del Gobierno). **Subdelegado del Gobierno en la provincia = nivel de Subdirector General** (Resolución del Delegado del Gobierno por libre designación entre funcionarios A1).",
    justificacion: "Los artículos 72 y 74 de la Ley 40/2015 establecen el rango de Subsecretario para los Delegados del Gobierno y el nivel de Subdirector General para los Subdelegados del Gobierno."
  },
  {
    id: "Q-W7-023",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - CNI y Secretaría de Estado Directora (Disposición Adicional)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 205/2024, por el que se desarrolla la estructura orgánica básica del Ministerio de Defensa, ¿qué rango ostenta la persona titular de la Dirección del Centro Nacional de Inteligencia (CNI) y cuál es la adscripción orgánica del Centro?",
    opciones: [
      "El Centro Nacional de Inteligencia (CNI) está adscrito al Ministerio de Defensa y su titular es Secretario de Estado Director del CNI.",
      "El CNI está adscrito al Ministerio del Interior con nivel de Subdirección General.",
      "El CNI depende orgánicamente del Estado Mayor del Ejército de Tierra.",
      "El titular del CNI tiene categoría de Cabo Mayor."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024 y Ley 11/2002 reguladora del CNI",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > Adscripción del CNI y rango de Secretario de Estado Director",
    consejoAcademia: "En el Ministerio de Defensa (RD 205/2024) recuerda que existen **dos rangos de Secretaría de Estado**: la **Secretaría de Estado de Defensa (SEDEF)** y el **Secretario de Estado Director del CNI**.",
    justificacion: "El CNI está adscrito orgánicamente al Ministerio de Defensa y su titular ostenta rango de Secretario de Estado."
  },
  {
    id: "Q-W7-024",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - La Nueva DIGEID vs CESTIC vs DGAM (Art. 4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Una de las grandes novedades del Real Decreto 205/2024 en la Secretaría de Estado de Defensa (SEDEF) es la creación de la DIGEID. ¿Qué significan sus siglas y cómo se reparte las competencias con la DGAM y el CESTIC?",
    opciones: [
      "DIGEID es la Dirección General de Estrategia e Innovación de la Industria de Defensa (encargada de la estrategia industrial, innovación tecnológica e internacionalización de la industria de defensa), conviviente en la SEDEF junto con la DGAM (Armamento y Material), la DIGENECO (Asuntos Económicos), la DIGENIN (Infraestructura) y el CESTIC (Transformación Digital, Telecomunicaciones y Ciberseguridad).",
      "DIGEID es la Dirección General de Enseñanza e Instrucción Deportiva, dependiente de la Subsecretaría.",
      "DIGEID sustituye al Estado Mayor de la Defensa (EMAD) en el mando operativo de las misiones OTAN.",
      "DIGEID depende de la Secretaría General de Política de Defensa (SEGENPOL)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículos 4 a 9",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > Los 5 órganos directivos de la SEDEF: DGAM, DIGEID, DIGENECO, DIGENIN y CESTIC",
    consejoAcademia: "Los **5 pilares de la SEDEF** en el RD 205/2024: **1) DGAM** (Armamento y Material), **2) DIGEID** (Estrategia e Innovación de la Industria de Defensa — ¡Novedad 2024!), **3) DIGENECO** (Asuntos Económicos), **4) DIGENIN** (Infraestructura) y **5) CESTIC** (Con rango de Dirección General).",
    justificacion: "El artículo 4 del RD 205/2024 integra en la SEDEF las cuatro Direcciones Generales (DGAM, DIGEID, DIGENECO y DIGENIN) más el CESTIC."
  },
  {
    id: "Q-W7-025",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - Subdirecciones Generales de DIGEREM (Art. 12)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Conforme al artículo 12 del Real Decreto 205/2024, ¿de qué órgano superior o directivo depende la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM) y qué Subdirecciones Generales se integran en ella?",
    opciones: [
      "Depende de la Subsecretaría de Defensa (SUBDEF) y de ella dependen la Subdirección General de Reclutamiento y Desarrollo Profesional de Personal Militar y Reservistas de Especial Disponibilidad, y la Subdirección General de Enseñanza Militar.",
      "Depende de la Secretaría General de Política de Defensa (SEGENPOL) y solo gestiona agregadurías de defensa.",
      "Depende de la SEDEF y gestiona la compra de carros de combate.",
      "Depende directamente del Jefe de Estado Mayor del Ejército del Aire."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículo 12",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > Subsecretaría de Defensa (SUBDEF) > DIGEREM y sus 2 Subdirecciones Generales",
    consejoAcademia: "En la **SUBDEF** (RD 205/2024) recuerda la diferencia entre **DIGENPER** (Dirección General de Personal: Personal Militar, Personal Civil y Acción Social) y **DIGEREM** (Dirección General de Reclutamiento y Enseñanza Militar: Reclutamiento/Desarrollo Profesional/RED y Enseñanza Militar).",
    justificacion: "El artículo 12 del RD 205/2024 adscribe la DIGEREM a la Subsecretaría de Defensa con sus dos Subdirecciones Generales."
  },
  {
    id: "Q-W7-026",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - Órganos Adscritos a la Subsecretaría (IGD, AJG, INVIED, ISFAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 10 del Real Decreto 205/2024, ¿a qué órgano del Ministerio de Defensa están adscritos la Asesoría Jurídica General de la Defensa, la Intervención General de la Defensa, la Inspección General de Sanidad de la Defensa (IGESAN) y los organismos autónomos ISFAS e INVIED?",
    opciones: [
      "A la Subsecretaría de Defensa (SUBDEF).",
      "A la Secretaría General de Política de Defensa (SEGENPOL).",
      "Al Estado Mayor Conjuntos de la Defensa (EMACON).",
      "A la Dirección General de Armamento y Material (DGAM)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículo 10",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > Órganos y Organismos adscritos a la Subsecretaría de Defensa (SUBDEF)",
    consejoAcademia: "Regla mnemotécnica para el examen: Todo lo **jurídico (AJG), económico-fiscalizador (IGD), sanitario (IGESAN), personal/enseñanza (DIGENPER, DIGEREM), SGT y los OO.AA. sociales (ISFAS e INVIED)** cuelgan de la **SUBDEF**. En cambio, el **INTA** cuelga de la **SEDEF**.",
    justificacion: "El artículo 10 del RD 205/2024 adscribe la AJG, la IGD, la IGESAN y los organismos autónomos ISFAS e INVIED a la Subsecretaría de Defensa."
  },
  {
    id: "Q-W7-027",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - Guardia Real vs UME (Art. 2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con la dependencia orgánica y operativa de la Unidad Militar de Emergencias (UME) y del Cuarto Militar de la Casa de S.M. el Rey / Guardia Real, señale la opción CORRECTA conforme al Real Decreto 205/2024 y al Real Decreto 521/2020:",
    opciones: [
      "La Unidad Militar de Emergencias (UME) depende orgánicamente de la persona titular del Ministerio de Defensa y operativamente del JEMAD (a través del Mando de Operaciones cuando actúa en operaciones militares); mientras que el Cuarto Militar de la Casa de S.M. el Rey (en el que se integra la Guardia Real) depende de la Casa de S.M. el Rey, sin perjuicio de las competencias del Ministerio de Defensa.",
      "La UME depende orgánicamente del Jefe de Estado Mayor de la Armada (AJEMA).",
      "La Guardia Real forma parte de la Fuerza Terrestre (FUTER) en Sevilla.",
      "Tanto la UME como la Guardia Real dependen de la Dirección General de Infraestructura (DIGENIN)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024 y Real Decreto 521/2020",
    ubicacionTemario: "Bloque 1 > Tema 4 y Tema 5 > Dependencia de la UME (orgánica del Ministro de Defensa, operativa del JEMAD) y Cuarto Militar / Guardia Real",
    consejoAcademia: "¡Cuidado con la UME!: Es una Fuerza Conjunta que depende **orgánicamente del Ministro de Defensa** (¡no del JEME!).",
    justificacion: "La UME depende orgánicamente de la persona titular del Ministerio de Defensa, mientras que la Guardia Real se encuadra en el Cuarto Militar de la Casa de S.M. el Rey."
  },
  {
    id: "Q-W7-028",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS - Estructura Orgánica vs Operativa (Art. 4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020, por el que se establece la organización básica de las Fuerzas Armadas, las Fuerzas Armadas se organizan en dos estructuras. ¿Cuál es la misión principal de cada una y quién las dirige?",
    opciones: [
      "Una Estructura Orgánica, encargada de la preparación de la Fuerza (dirigida por los Jefes de Estado Mayor del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio), y una Estructura Operativa, encargada del empleo de la Fuerza en las misiones asignadas (bajo el mando del Jefe de Estado Mayor de la Defensa, JEMAD).",
      "Una Estructura Orgánica dirigida por el JEMAD para hacer la guerra y una Estructura Operativa dirigida por el Subsecretario para dar clases.",
      "Tres estructuras independientes sin conexión entre sí dirigidas por la SEGENPOL.",
      "Una única estructura logística dirigida por la DGAM."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Artículos 4, 8 y 18",
    ubicacionTemario: "Bloque 1 > Tema 5 (Organización Básica FAS RD 521/2020) > Binomio Fundamental: Estructura Orgánica (Preparación - JEME/AJEMA/JEMA) vs Estructura Operativa (Empleo - JEMAD)",
    consejoAcademia: "Ecuación sagrada del RD 521/2020: **Estructura Orgánica = PREPARACIÓN de la Fuerza** (JEME, AJEMA, JEMA) -> Transfieren capacidades (**Transferencia de Autoridad**) -> **Estructura Operativa = EMPLEO de la Fuerza** (JEMAD).",
    justificacion: "El artículo 4 del RD 521/2020 distingue la estructura orgánica (orientada a la preparación de la fuerza) y la estructura operativa (orientada al empleo de la fuerza bajo el mando del JEMAD)."
  },
  {
    id: "Q-W7-029",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 y Orden DEF/710/2020 - Los 4 Pilares del EMAD (EMACON, MOPS, MCCE, CESIFAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el Real Decreto 521/2020 y la Orden DEF/710/2020, ¿cuáles son los cuatro órganos principales que articulan el Estado Mayor de la Defensa (EMAD) bajo el mando del JEMAD?",
    opciones: [
      "El Cuartel General del Estado Mayor de la Defensa (en el que se encuadra el Estado Mayor Conjunto de la Defensa - EMACON y el CIFAS), el Mando de Operaciones (MOPS), el Mando Conjunto del Ciberespacio (MCCE) y el Centro Superior de Estudios de la Defensa Nacional (CESEDEN).",
      "La Fuerza Terrestre (FUTER), la Flota (FLOTA), el Mando Aéreo de Combate (MACOM) y el INVIED.",
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE) y la Inspección General del Ejército (IGE).",
      "La DGAM, la DIGENECO, la DIGENIN y la DIGEID."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Artículo 12 y Orden DEF/710/2020",
    ubicacionTemario: "Bloque 1 > Tema 5 (Organización Básica FAS RD 521/2020) > Estructura del EMAD: CG-EMAD (EMACON + CIFAS), MOPS, MCCE y CESEDEN",
    consejoAcademia: "Memoriza el cuarteto del **EMAD**: 1) **CG-EMAD** (con el **EMACON** —auxiliar principal del JEMAD— y el **CIFAS** —inteligencia militar única—), 2) **MOPS** (planeamiento operativo y conducción de operaciones), 3) **MCCE** (operaciones en el ciberespacio) y 4) **CESEDEN** (altos estudios y doctrina conjunta con el **CCDC**).",
    justificacion: "El artículo 12 del RD 521/2020 estructura el EMAD en el Cuartel General del EMAD (con el EMACON), el Mando de Operaciones (MOPS), el Mando Conjunto del Ciberespacio (MCCE) y el CESEDEN."
  },
  {
    id: "Q-W7-030",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 - Los 5 Mandos Operativos Permanentes (MOT, MOM, MOA, MOC, MOESPA)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el marco de la Estructura Operativa de las Fuerzas Armadas (RD 521/2020), existen cinco Mandos Operativos permanentes subordinados al Comandante del Mando de Operaciones (CMOPS). ¿Quiénes son designados normalmente como Comandantes del MOT, MOM, MOA, MOC y MOESPA?",
    opciones: [
      "MOT (Mando Operativo Terrestre: Comandante del Mando de Canarias del ET), MOM (Mando Operativo Marítimo: Almirante de Acción Marítima - ALMART), MOA (Mando Operativo Aéreo: Jefe del Mando Aéreo de Combate - GJMACOM), MOC (Mando Operativo Ciberespacial: Comandante del Mando Conjunto del Ciberespacio - CMCCE) y MOESPA (Mando Operativo Espacial: Jefe del Mando del Espacio - JMESPA).",
      "Todos ellos son presididos por el Subsecretario de Defensa desde Madrid.",
      "El MOT lo manda el Jefe de la UME y el MOM lo manda el Director del Instituto Hidrográfico.",
      "No existen Mandos Operativos permanentes en tiempo de paz."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Artículo 15 y Orden DEF/710/2020",
    ubicacionTemario: "Bloque 1 > Tema 5 (Organización Básica FAS RD 521/2020) > Los 5 Mandos Operativos Permanentes: MOT, MOM, MOA, MOC y MOESPA",
    consejoAcademia: "¡Esta tabla de emparejamiento es ORO PURO para el examen!: **MOT = Jefe MCANA (ET)** • **MOM = ALMART (Armada)** • **MOA = GJMACOM (EA)** • **MOC = CMCCE (EMAD)** • **MOESPA = JMESPA (EA)**.",
    justificacion: "Los cinco Mandos Operativos permanentes (MOT, MOM, MOA, MOC y MOESPA) se activan de forma permanente bajo el CMOPS recayendo sus mandos en las autoridades operativas designadas de los Ejércitos, Armada y EMAD."
  },
  {
    id: "Q-W7-031",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Ejército de Tierra - Los 3 Bloques del ET (CG, Fuerza, Apoyo a la Fuerza)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020 y a la Instrucción 14/2021, por la que se desarrolla la organización del Ejército de Tierra, cada Ejército se estructura en tres grandes componentes bajo el mando de su Jefe de Estado Mayor. En el Ejército de Tierra, ¿qué órganos integran el APOYO A LA FUERZA?",
    opciones: [
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE), el Mando de Adiestramiento y Doctrina (MADOC, con sede en Granada), la Inspección General del Ejército (IGE, con sede en Barcelona) y la Dirección de Asuntos Económicos (DIAE).",
      "La Fuerza Terrestre (FUTER), el Mando de Canarias (MCANA) y el Cuartel General Terrestre de Alta Disponibilidad (CGTAD).",
      "El Gabinete del JEME, el Instituto de Historia y Cultura Militar y la Asesoría Jurídica del ET.",
      "La Flota, la Fuerza de Acción Marítima y la Infantería de Marina."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, de 8 de marzo, del JEME, por la que se desarrolla la organización del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Instrucción 14/2021 ET, 15/2021 Armada y 6/2024 EA) > Los 5 órganos del Apoyo a la Fuerza del ET: MAPER, MALE, MADOC, IGE y DIAE",
    consejoAcademia: "¡Pregunta fija de examen!: En el **Ejército de Tierra (Instrucción 14/2021)**: **La Fuerza** = **CGTAD** (Bétera, Valencia), **FUTER** (Sevilla) y **MCANA** (Tenerife). **El Apoyo a la Fuerza** = **MAPER**, **MALE**, **MADOC** (Granada), **IGE** (Barcelona) y **DIAE**.",
    justificacion: "La Instrucción 14/2021 encuadra en el Apoyo a la Fuerza del Ejército de Tierra al MAPER, MALE, MADOC, IGE y DIAE."
  },
  {
    id: "Q-W7-032",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Ejército de Tierra - Organización de la Fuerza Terrestre (FUTER)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME, dentro de la Fuerza Terrestre (FUTER, con Cuartel General en Sevilla), ¿cómo se agrupan sus grandes unidades de combate y de apoyo al combate?",
    opciones: [
      "En la División «San Marcial» (Burgos), la División «Castillejos» (Huesca) y el Mando de Apoyo a la Maniobra (MAM, con sede en A Coruña).",
      "En el Mando de Canarias (MCANA) y la Comandancia General de Baleares.",
      "En el Mando de Personal (MAPER) y el Mando de Apoyo Logístico (MALE).",
      "En el Ala 12 de Torrejón y el Ala 15 de Zaragoza."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME, sobre organización del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > FUTER (Sevilla): División San Marcial (Burgos), División Castillejos (Huesca) y MAM (A Coruña)",
    consejoAcademia: "¡Atención al mapa de sedes de **FUTER (Sevilla)**!: 1) **División «San Marcial»** (Burgos: incluye BRIPAC VI, Mando de Tropas de Montaña, MOE y FAMET). 2) **División «Castillejos»** (Huesca: incluye las Brigadas I Aragón, II Legión, VII Galicia, X Guzmán el Bueno, XI Extremadura y XII Guadarrama). 3) **Mando de Apoyo a la Maniobra (MAM)** (A Coruña: MACA, MING, MATRANS, MAAA, BRCZM, etc.). Y recuerda que **MCANA** (Tenerife) agrupa: BRICAN XVI, COMGECEU, COMGEMEL y COMGEBAL.",
    justificacion: "La Fuerza Terrestre (FUTER) se articula en las Divisiones «San Marcial» y «Castillejos» y en el Mando de Apoyo a la Maniobra (MAM)."
  },
  {
    id: "Q-W7-033",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 15/2021 de la Armada - Estructura de La Fuerza (LA FLOTA)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 15/2021 del AJEMA, por la que se desarrolla la organización de la Armada, la Fuerza de la Armada se denomina «La Flota» (con mando en el Almirante de la Flota - ALFLOT en Rota). ¿Cuáles son los componentes principales que integran La Flota?",
    opciones: [
      "La Fuerza de Acción Naval (FAN), la Fuerza de Acción Marítima (FAM), la Fuerza de Infantería de Marina (FIM, integrada por el Tercio de Armada - TEAR, la Fuerza de Protección - FUPRO y la Fuerza de Guerra Naval Especial - FGNE), la Flotilla de Submarinos (FLOSUB) y la Flotilla de Aeronaves (FLOAN).",
      "La Jefatura de Personal (JEPER), la Jefatura de Apoyo Logístico (JAL) y la Dirección de Asuntos Económicos (DAE).",
      "El Mando Aéreo General (MAGEN) y el Mando del Espacio (MESPA).",
      "La División San Marcial y la División Castillejos."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021, del AJEMA, por la que se desarrolla la organización de la Armada",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > Armada (Instrucción 15/2021): La Flota (FAN, FAM, FIM, FLOSUB, FLOAN) vs Apoyo a la Fuerza (JEPER, JAL, DAE)",
    consejoAcademia: "En la **Armada (Instrucción 15/2021)**: **La Fuerza = LA FLOTA** (mando del **ALFLOT** en Rota: **FAN, FAM, FIM [TEAR + FUPRO + FGNE], FLOSUB y FLOAN**). **El Apoyo a la Fuerza** = **JEPER** (Personal), **JAL** (Apoyo Logístico) y **DAE** (Asuntos Económicos).",
    justificacion: "La Instrucción 15/2021 del AJEMA articula La Flota en la Fuerza de Acción Naval (FAN), Fuerza de Acción Marítima (FAM), Fuerza de Infantería de Marina (FIM), Flotilla de Submarinos (FLOSUB) y Flotilla de Aeronaves (FLOAN)."
  },
  {
    id: "Q-W7-034",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 6/2024 del Ejército del Aire y del Espacio - El Nuevo Mando del Espacio (MESPA)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 524/2022 (cambio de denominación a Ejército del Aire y del Espacio) y a la Instrucción 6/2024 del JEMA, ¿cuáles son los Mandos que integran LA FUERZA del Ejército del Aire y del Espacio y cuáles integran el APOYO A LA FUERZA?",
    opciones: [
      "La Fuerza del Ejército del Aire y del Espacio está integrada por el Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el nuevo Mando del Espacio (MESPA); mientras que el Apoyo a la Fuerza está integrado por el Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALOG) y la Dirección de Asuntos Económicos (DAE).",
      "La Fuerza del EA está integrada únicamente por el MADOC y el MALE.",
      "El Mando del Espacio (MESPA) pertenece a la Armada y tiene su sede en Cartagena.",
      "En el Ejército del Aire y del Espacio el mando logístico se denomina JAL."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2024, del JEMA, por la que se desarrolla la organización del Ejército del Aire y del Espacio",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > Ejército del Aire y del Espacio (Instrucción 6/2024): Fuerza (MACOM, MAGEN, MACAN y MESPA) vs Apoyo a la Fuerza (MAPER, MALOG y DAE)",
    consejoAcademia: "¡Cuidado con los nombres del mando logístico en los 3 Ejércitos!: En **Tierra = MALE**; en **Armada = JAL**; en **Aire y Espacio = MALOG**. Y en **La Fuerza del EA (Instrucción 6/2024)** son **4 Mandos**: **MACOM, MAGEN, MACAN y el nuevo MESPA (Mando del Espacio)**.",
    justificacion: "La Instrucción 6/2024 del JEMA estructura La Fuerza del Ejército del Aire y del Espacio en MACOM, MAGEN, MACAN y MESPA, y el Apoyo a la Fuerza en MAPER, MALOG y DAE."
  },
  {
    id: "Q-W7-035",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Reforma Constitucional: Art. 167 vs Art. 168",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el procedimiento ordinario de reforma constitucional (artículo 167 CE), si una vez aprobada la reforma por las Cortes Generales (por mayoría de 3/5 de cada Cámara) se solicita su sometimiento a referéndum, ¿quién debe solicitarlo, en qué plazo y qué carácter tiene dicho referéndum?",
    opciones: [
      "Será sometida a referéndum para su ratificación cuando así lo soliciten, dentro de los 15 días siguientes a su aprobación, una décima parte de los miembros de cualquiera de las Cámaras (referéndum facultativo, a diferencia del artículo 168 donde el referéndum es siempre obligatorio).",
      "El referéndum del artículo 167 es siempre obligatorio en el plazo de 24 horas.",
      "Debe solicitarlo el Defensor del Pueblo dentro de los 6 meses siguientes.",
      "En el artículo 167 está prohibido celebrar referéndum en cualquier caso."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 167.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título X: Reforma Constitucional (Art. 167: 3/5 y referéndum facultativo en 15 días por 1/10 de cualquier Cámara vs Art. 168: 2/3, disolución y referéndum obligatorio)",
    consejoAcademia: "Cruce clásico del Título X: **Art. 167 (Ordinario)** = mayoría de **3/5** (o mayoría absoluta Senado + **2/3** Congreso) + referéndum **facultativo** si lo pide **1/10 de los miembros de cualquiera de las Cámaras en 15 DÍAS**. **Art. 168 (Agravado**: Revisión total, Título Preliminar, Cap. II Secc. 1ª del Título I o Título II) = mayoría de **2/3** de cada Cámara + disolución inmediata + **2/3** de las nuevas Cámaras + referéndum **obligatorio**.",
    justificacion: "El artículo 167.3 CE establece que la reforma aprobada por las Cortes Generales será sometida a referéndum cuando así lo soliciten, dentro de los quince días siguientes a su aprobación, una décima parte de los miembros de cualquiera de las Cámaras."
  },
  {
    id: "Q-W7-036",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Defensor del Pueblo y Tribunal de Cuentas (Arts. 54 y 136)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme a los artículos 54 y 136 de la Constitución Española, ¿de quién dependen directamente el Defensor del Pueblo (alto comisionado para la defensa de los derechos del Título I) y el Tribunal de Cuentas (supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado)?",
    opciones: [
      "Ambos dependen directamente de las Cortes Generales.",
      "Ambos dependen orgánicamente del Ministerio de Hacienda.",
      "El Defensor del Pueblo depende del Tribunal Constitucional y el Tribunal de Cuentas depende del Banco de España.",
      "Ambos dependen de la Subsecretaría de Defensa."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 54 y 136",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Órganos dependientes de las Cortes Generales: Defensor del Pueblo (Art. 54) y Tribunal de Cuentas (Art. 136)",
    consejoAcademia: "Dos instituciones constitucionales que **dependen directamente de las Cortes Generales**: 1) **Defensor del Pueblo** (Art. 54 CE, regulado por **LO 3/1981**, elegido por **5 años** por mayoría de 3/5). 2) **Tribunal de Cuentas** (Art. 136 CE, cuyos miembros gozan de la misma independencia e inamovilidad que los Jueces).",
    justificacion: "Tanto el Defensor del Pueblo (alto comisionado de las Cortes Generales, art. 54 CE) como el Tribunal de Cuentas (art. 136.2 CE) dependen directamente de las Cortes Generales."
  },
  {
    id: "Q-W7-037",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Decretos-Leyes vs Decretos Legislativos (Arts. 82 a 86)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la comparativa entre los Decretos Legislativos (artículos 82 a 85 CE) y los Decretos-leyes (artículo 86 CE), señale la afirmación CORRECTA:",
    opciones: [
      "Los Decretos-leyes se dictan por el Gobierno en caso de extraordinaria y urgente necesidad, no pueden afectar al ordenamiento de las instituciones básicas del Estado, a los derechos, deberes y libertades del Título I, al régimen de las CC.AA. ni al Derecho electoral general, y deben ser sometidos a debate y votación de totalidad al Congreso en el plazo de los 30 días siguientes a su promulgación; mientras que los Decretos Legislativos requieren una delegación previa de las Cortes (mediante ley de bases para textos articulados o ley ordinaria para textos refundidos).",
      "Los Decretos-leyes los convalida el Senado en el plazo de 60 días y pueden reformar las leyes orgánicas.",
      "Los Decretos Legislativos se dictan sin autorización previa de las Cortes en caso de inundación.",
      "Las leyes de bases pueden autorizar la modificación de la propia ley de bases y facultar para dictar normas con carácter retroactivo."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 82, 83 y 86",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Normas del Gobierno con rango de ley: Decreto Legislativo (Arts. 82-85) vs Decreto-Ley (Art. 86: 30 días Congreso)",
    consejoAcademia: "Cruce clave de examen: 1) **Decreto Legislativo (Arts. 82-85 CE)**: Delegación **previa** de las Cortes (**Ley de Bases** -> Texto Articulado; **Ley Ordinaria** -> Texto Refundido). Las leyes de bases **NO** pueden autorizar modificar la propia ley de bases ni dictar normas con carácter retroactivo (Art. 83 CE). 2) **Decreto-Ley (Art. 86 CE)**: Extraordinaria y urgente necesidad -> Convalidación o derogación por el **Congreso** en **30 DÍAS**.",
    justificacion: "Los artículos 82, 83 y 86 CE regulan la delegación legislativa (Decretos Legislativos) y las disposiciones legislativas provisionales por extraordinaria y urgente necesidad (Decretos-leyes, convalidables por el Congreso en 30 días)."
  },
  {
    id: "Q-W7-038",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Consejo de Defensa Nacional (Arts. 8 y 9)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 8 de la Ley Orgánica 5/2005, de la Defensa Nacional, ¿qué es el Consejo de Defensa Nacional, quién lo preside y cómo puede funcionar?",
    opciones: [
      "Es el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa; lo preside el Presidente del Gobierno (salvo cuando asista el Rey, en cuyo caso lo presidirá Su Majestad a iniciativa del Presidente del Gobierno) y puede funcionar en Pleno y como Consejo Ejecutivo.",
      "Es un tribunal militar supremo presidido por el Fiscal General del Estado.",
      "Es una comisión sindical presidida por el Subsecretario de Defensa.",
      "Es un órgano exclusivo del Ejército de Tierra que solo se reúne cada 10 años."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, de la Defensa Nacional, Artículo 8",
    ubicacionTemario: "Bloque 1 > Tema 2 (LO 5/2005 Defensa Nacional) > Consejo de Defensa Nacional (Art. 8: Pleno y Consejo Ejecutivo) vs Consejo Superior de los Ejércitos",
    consejoAcademia: "Definición exacta del **Consejo de Defensa Nacional (Art. 8 LO 5/2005)**: **Órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa**. Funciona en **Pleno** y como **Consejo Ejecutivo**.",
    justificacion: "El artículo 8 de la LO 5/2005 define al Consejo de Defensa Nacional como el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa, pudiendo funcionar en Pleno y como Consejo Ejecutivo."
  },
  {
    id: "Q-W7-039",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Organización Territorial y Delegaciones de Defensa (Art. 24)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 24 de la Ley Orgánica 5/2005 y el Real Decreto 308/2007 sobre organización y funcionamiento de las Delegaciones de Defensa, ¿de qué órgano del Ministerio de Defensa dependen orgánicamente las Delegaciones de Defensa en las Comunidades Autónomas y ciudades de Ceuta y Melilla?",
    opciones: [
      "De la Subsecretaría de Defensa (a través de la Secretaría General Técnica).",
      "Del Mando de Operaciones (MOPS) del Estado Mayor de la Defensa.",
      "De la Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID).",
      "De los Alcaldes de cada capital de provincia."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Artículo 24 y Real Decreto 205/2024, Artículo 11",
    ubicacionTemario: "Bloque 1 > Tema 2 y Tema 4 > Administración periférica del Ministerio de Defensa: Las Delegaciones de Defensa (dependientes de la SUBDEF a través de la SGT)",
    consejoAcademia: "¡Dato clave de los Vídeos T3 y T6!: Las **Delegaciones de Defensa** (implantadas en cada Comunidad Autónoma y en Ceuta y Melilla, con Subdelegaciones de Defensa en cada provincia) representan al Ministerio en el territorio sin estar integradas en la Fuerza, y dependen de la **Subsecretaría de Defensa a través de la Secretaría General Técnica (SGT)**.",
    justificacion: "Conforme al artículo 11 del RD 205/2024, corresponde a la Secretaría General Técnica (integrada en la Subsecretaría de Defensa) la coordinación y gestión de las Delegaciones de Defensa."
  },
  {
    id: "Q-W7-040",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 50/1997 del Gobierno - Comisiones Delegadas del Gobierno y Comisión General de Secretarios de Estado y Subsecretarios (Arts. 6 y 8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con los órganos de colaboración y apoyo del Gobierno regulados en la Ley 50/1997, del Gobierno, ¿qué función cumple la Comisión General de Secretarios de Estado y Subsecretarios y puede adoptar decisiones o acuerdos por delegación del Gobierno?",
    opciones: [
      "Examina todos los asuntos que vayan a someterse a aprobación del Consejo de Ministros (excepto los nombramientos, ceses, ascensos y aquellos que por razones de urgencia se sometan directamente), pero en ningún caso podrá adoptar decisiones o acuerdos por delegación del Gobierno.",
      "Puede aprobar Reales Decretos-leyes y Presupuestos Generales del Estado por delegación del Consejo de Ministros.",
      "Está integrada por los Diputados y Senadores de la oposición.",
      "Sus deliberaciones son retransmitidas en directo por televisión."
    ],
    correcta: 0,
    referencia: "Ley 50/1997, de 27 de noviembre, del Gobierno, Artículo 8",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 50/1997 y Ley 40/2015) > Comisión General de Secretarios de Estado y Subsecretarios (Art. 8: Órgano preparatorio, prohibido adoptar acuerdos por delegación del Gobierno)",
    consejoAcademia: "¡Trampa favorita del Tribunal en el Tema 3!: La **Comisión General de Secretarios de Estado y Subsecretarios** (presidida por un Vicepresidente o, en su defecto, por el Ministro de la Presidencia) prepara las reuniones del Consejo de Ministros, pero **EN NINGÚN CASO podrá adoptar decisiones o acuerdos por delegación del Gobierno** (Art. 8.3 Ley 50/1997). En cambio, las **Comisiones Delegadas del Gobierno** (Art. 6) SÍ son órganos colegiados del Gobierno.",
    justificacion: "El artículo 8.3 de la Ley 50/1997 dispone expresamente que en ningún caso la Comisión General de Secretarios de Estado y Subsecretarios podrá adoptar decisiones o acuerdos por delegación del Gobierno."
  },
  {
    id: "Q-W7-041",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - Secretaría General de Política de Defensa (SEGENPOL)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 15 del Real Decreto 205/2024, ¿qué rango tiene el titular de la Secretaría General de Política de Defensa (SEGENPOL), qué órgano directivo depende de ella y de quién dependen las Agregadurías de Defensa en las misiones diplomáticas?",
    opciones: [
      "El Secretario General de Política de Defensa tiene rango de Subsecretario, de él depende la Dirección General de Política de Defensa (DIGENPOL), y de la SEGENPOL dependen asimismo las Agregadurías de Defensa y las Consejerías de Defensa en las representaciones permanentes ante organizaciones internacionales.",
      "Tiene rango de Secretario de Estado y de él depende la Dirección General de Reclutamiento (DIGEREM).",
      "Tiene rango de Subdirector General y gestiona únicamente las farmacias militares.",
      "Depende del Jefe de Estado Mayor del Ejército de Tierra."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículos 15 y 16",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > SEGENPOL (rango de Subsecretario), DIGENPOL, Agregadurías de Defensa y Comisión Española de Historia Militar (CEHISMI)",
    consejoAcademia: "Todo sobre la **SEGENPOL (Art. 15 RD 205/2024)**: 1) Rango de **Subsecretario** (como todos los Secretarios Generales según la Ley 40/2015). 2) Único órgano directivo: **DIGENPOL** (Dirección General de Política de Defensa, con sus 2 Subdirecciones: Planes y Relaciones Internacionales, y Cooperación y Defensa Civil). 3) Dependen de ella las **Agregadurías de Defensa** en el exterior y la **CEHISMI**.",
    justificacion: "Los artículos 15 y 16 del RD 205/2024 regulan la SEGENPOL (con rango de Subsecretario), la DIGENPOL y la dependencia de las Agregadurías y Consejerías de Defensa."
  },
  {
    id: "Q-W7-042",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 y Orden DEF/710/2020 - Centro de Inteligencia de las FAS (CIFAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020 y a la Orden DEF/710/2020, ¿dónde se encuadra el Centro de Inteligencia de las Fuerzas Armadas (CIFAS) y cuál es su cometido?",
    opciones: [
      "Se encuadra en el Cuartel General del Estado Mayor de la Defensa (CG-EMAD) y es el órgano responsable de facilitar al Ministro de Defensa, a través del JEMAD, y a las autoridades militares, la inteligencia militar necesaria para alertar sobre situaciones de interés militar y para el planeamiento y conducción de las operaciones.",
      "Se encuadra en la Dirección General de Asuntos Económicos (DIGENECO).",
      "Es un órgano civil dependiente del Ministerio de Trabajo.",
      "Depende de la Inspección General del Ejército en Barcelona."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020 y Orden DEF/710/2020",
    ubicacionTemario: "Bloque 1 > Tema 5 (Organización Básica FAS RD 521/2020) > Cuartel General del EMAD: el CIFAS (Inteligencia Militar Conjunta)",
    consejoAcademia: "¡No confundas el **CNI** con el **CIFAS**!: El **CNI** está adscrito al Ministerio de Defensa (con rango de Secretaría de Estado) para la inteligencia nacional; el **CIFAS (Centro de Inteligencia de las FAS)** está encuadrado en el **Cuartel General del EMAD (bajo el JEMAD)** para la **inteligencia militar conjunta y operativa**.",
    justificacion: "El CIFAS se integra en el Cuartel General del EMAD y es el órgano único de inteligencia militar conjunta y estratégica de las Fuerzas Armadas."
  },
  {
    id: "Q-W7-043",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Ejército de Tierra - Cuartel General Terrestre de Alta Disponibilidad (CGTAD)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "En la organización de La Fuerza del Ejército de Tierra (Instrucción 14/2021), junto a la Fuerza Terrestre (FUTER) y al Mando de Canarias (MCANA), figura el Cuartel General Terrestre de Alta Disponibilidad (CGTAD). ¿Dónde tiene su sede principal, qué unidad encuadra y cuál es su proyección internacional?",
    opciones: [
      "Tiene su sede en Bétera (Valencia) / Valencia, encuadra el Regimiento de Inteligencia n.º 1 y el Batallón de Cuartel General, y constituye la base del Cuartel General del Cuerpo de Ejército de Despliegue Rápido de la OTAN en España (HQ NRDC-ESP).",
      "Tiene su sede en Valladolid y encuadra únicamente las academias militares.",
      "Tiene su sede en Ferrol y depende del Almirante de la Flota.",
      "Tiene su sede en Santa Cruz de Tenerife y manda sobre el Archipiélago Balear."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME, sobre organización del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > La Fuerza del ET: CGTAD (Valencia/Bétera - HQ NRDC-ESP), FUTER (Sevilla) y MCANA (Tenerife)",
    consejoAcademia: "Las **3 sedes de La Fuerza del ET**: 1) **CGTAD** = **Valencia / Bétera** (HQ NRDC-ESP de la OTAN). 2) **FUTER** = **Sevilla**. 3) **MCANA** = **Santa Cruz de Tenerife**.",
    justificacion: "El CGTAD forma parte de La Fuerza del Ejército de Tierra con sede en Valencia/Bétera y actúa como Cuartel General de Cuerpo de Ejército de Despliegue Rápido de la OTAN (HQ NRDC-ESP)."
  },
  {
    id: "Q-W7-044",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Ejército de Tierra - Órganos del Cuartel General del ET (CGET)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME, ¿cuáles de los siguientes órganos se integran en el Cuartel General del Ejército de Tierra (CGET)?",
    opciones: [
      "El Estado Mayor del Ejército (EME), el Gabinete del JEME, la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), el Instituto de Historia y Cultura Militar (IHCM), la Asesoría Jurídica del ET y la Intervención Delegada Central.",
      "La Brigada «Rey Alfonso XIII» II de La Legión y la Brigada «Almogávares» VI de Paracaidistas.",
      "El Tercio de Armada (TEAR) y la Fuerza de Guerra Naval Especial (FGNE).",
      "El Mando Aéreo de Combate (MACOM) y el Centro Cartográfico y Fotográfico (CECAF)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, del JEME, apartado sobre el Cuartel General del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > Cuartel General del ET (CGET): EME, Gabinete JEME, JCISAT, IHCM, Asesoría Jurídica e Intervención Delegada",
    consejoAcademia: "¡Fíjate en la **JCISAT** y en el **IHCM** (Instituto de Historia y Cultura Militar)!: En el Ejército de Tierra ambos están dentro del **Cuartel General del ET (CGET)**, no en el Apoyo a la Fuerza.",
    justificacion: "La Instrucción 14/2021 integra en el Cuartel General del Ejército de Tierra (CGET) al EME, Gabinete del JEME, JCISAT, IHCM, Asesoría Jurídica e Intervención Delegada Central."
  },
  {
    id: "Q-W7-045",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Comparativa de Institutos de Historia y Cultura Militar en los 3 Ejércitos",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "En los tres Ejércitos existen órganos responsables de la historia, cultura, archivos y museos militares, encuadrados en sus respectivos Cuarteles Generales. ¿Cómo se denominan exactamente en el Ejército de Tierra, en la Armada y en el Ejército del Aire y del Espacio?",
    opciones: [
      "En el Ejército de Tierra: Instituto de Historia y Cultura Militar (IHCM); en la Armada: Órgano de Historia y Cultura Naval (OHCN); y en el Ejército del Aire y del Espacio: Servicio Histórico y Cultural del Ejército del Aire y del Espacio (SHYCEA).",
      "En los tres se denominan Dirección General de Museos Navales.",
      "En Tierra se llama SHYCEA y en el Aire se llama OHCN.",
      "Dependen todos de la Jefatura de Apoyo Logístico de la Armada (JAL)."
    ],
    correcta: 0,
    referencia: "Instrucciones 14/2021 (ET), 15/2021 (Armada) y 6/2024 (EA)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > Comparativa de Órganos de Historia y Cultura en los 3 Cuarteles Generales (IHCM / OHCN / SHYCEA)",
    consejoAcademia: "Trío de siglas de los **Cuarteles Generales** muy preguntado en los vídeos del profesor: **Tierra = IHCM** (*Instituto* de Historia y Cultura Militar) • **Armada = OHCN** (*Órgano* de Historia y Cultura Naval) • **Aire = SHYCEA** (*Servicio* Histórico y Cultural del EA).",
    justificacion: "Las Instrucciones de organización de cada Ejército denominan a sus respectivos órganos históricos IHCM (ET), OHCN (Armada) y SHYCEA (EA), todos ellos en sus Cuarteles Generales."
  },

  // =========================================================================
  // BLOQUE 2: JURÍDICO-SOCIAL (B2-T01 A B2-T08) — Q-W7-046 A Q-W7-155
  // =========================================================================
  {
    id: "Q-W7-046",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería - Modalidades de Compromiso y Plazos (Arts. 6 a 9)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 6, 8 y 9 de la Ley 8/2006, de Tropa y Marinería, realice el cruce completo de las tres modalidades de relación de servicios de los militares profesionales de tropa y marinería y señale la opción CORRECTA:",
    opciones: [
      "1) Compromiso inicial (de 2 o 3 años), renovable hasta alcanzar un máximo de 6 años de servicios; 2) Compromiso de Larga Duración (CLD), que se suscribe tras más de 5 años de servicios (al cumplir los 6) hasta los 45 años de edad; y 3) Condición de Permanente (adquirida por concurso-oposición con al menos 14 años de servicio o los requisitos de convocatoria y título de Técnico/Bachiller o equivalente).",
      "El compromiso inicial dura 10 años y el compromiso de larga duración dura hasta los 65 años.",
      "El compromiso de larga duración otorga automáticamente la condición de militar de carrera sin hacer oposición.",
      "Para suscribir el compromiso de larga duración basta con llevar 6 meses en el centro de formación."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, de 24 de abril, de Tropa y Marinería, Artículos 6, 7, 8 y 9",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 8/2006 Tropa y Marinería y Ley 39/2007) > Los 3 escalones temporales: Compromiso Inicial (2/3 años hasta máx. 6) -> CLD (hasta 45 años) -> Permanente",
    consejoAcademia: "La escalera de la **Ley 8/2006**: 1º **Compromiso Inicial** = **2 o 3 años**, renovable por periodos de 2 o 3 años hasta un **máximo de 6 años**. 2º **Compromiso de Larga Duración (CLD)** = se solicita con **más de 5 años de servicios** (efectivo a los 6 años) y llega hasta los **45 años de edad**. 3º **Permanente** = adquiere la condición de **militar de carrera**.",
    justificacion: "Los artículos 6 a 9 de la Ley 8/2006 regulan el compromiso inicial (máximo 6 años con sus renovaciones), el compromiso de larga duración (hasta los 45 años) y el acceso a una relación de servicios de carácter permanente."
  },
  {
    id: "Q-W7-047",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería - Reservista de Especial Disponibilidad (Arts. 17 a 19)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 17 y 18 de la Ley 8/2006, de Tropa y Marinería, ¿quiénes adquieren la condición de Reservista de Especial Disponibilidad (RED), hasta qué edad se mantiene como máximo y con qué condición es INCOMPATIBLE la percepción de su asignación económica?",
    opciones: [
      "La adquieren voluntariamente los militares profesionales de tropa y marinería que finalicen su compromiso de larga duración al cumplir los 45 años de edad habiendo cumplido al menos 18 años de servicios; se mantiene hasta cumplir los 65 años de edad, y la asignación económica es compatible con las retribuciones del sector privado pero INCOMPATIBLE con cualquier retribución procedente del sector público.",
      "Se adquiere a los 25 años de edad con 2 años de servicio y es incompatible con trabajar en una empresa privada.",
      "Se mantiene de forma vitalicia hasta los 90 años y equivale al sueldo íntegro de General de División.",
      "Otorga automáticamente plaza de funcionario del Subgrupo A1."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, de 24 de abril, de Tropa y Marinería, Artículos 17, 18 y 19",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 8/2006 Tropa y Marinería) > Reservistas de Especial Disponibilidad (RED): 45 años + 18 años de servicio, hasta los 65 años, incompatible con sector público",
    consejoAcademia: "Los **4 datos de oro del RED (Arts. 17-19 Ley 8/2006)**: 1) Al cumplir **45 años** de edad. 2) Mínimo **18 años de servicios**. 3) Se extiende hasta los **65 años de edad**. 4) Su asignación mensual (en 12 pagas) es **compatible con el sector privado**, pero **INCOMPATIBLE con cualquier retribución del sector público**.",
    justificacion: "Los artículos 17 a 19 de la Ley 8/2006 establecen los requisitos de 45 años de edad y 18 años de servicio para acceder a RED hasta los 65 años, así como la incompatibilidad de la asignación con retribuciones del sector público."
  },
  {
    id: "Q-W7-048",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería - Reserva de Plazas para Guardia Civil, Policía Nacional y Empleo Público (Arts. 20 y 21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 20 y 21 de la Ley 8/2006, de Tropa y Marinería, para los militares profesionales de tropa y marinería que lleven más de 5 años de servicios efectivos, ¿qué porcentajes de plazas se reservan para el ingreso en la Escala de Cabos y Guardias de la Guardia Civil y en el Cuerpo Nacional de Policía?",
    opciones: [
      "Al menos un 40% de las plazas para el ingreso en la Escala de Cabos y Guardias del Cuerpo de la Guardia Civil, y hasta un 20% de las plazas para el ingreso en la Escala Básica de la Policía Nacional.",
      "Un 10% en la Guardia Civil y un 80% en la Policía Nacional.",
      "Un 5% tanto en la Guardia Civil como en la Policía Nacional, exigiendo 20 años de servicio.",
      "No existe ninguna reserva legal de plazas en las Fuerzas y Cuerpos de Seguridad del Estado."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, de 24 de abril, de Tropa y Marinería, Artículo 20",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 8/2006 Tropa y Marinería) > Salidas profesionales tras 5 años de servicios: Guardia Civil (mín. 40%), Policía Nacional (hasta 20%), Vigilancia Aduanera y personal laboral Defensa (mín. 50%)",
    consejoAcademia: "¡Tabla de porcentajes de la **Ley 8/2006 (con >5 años de servicio)** que siempre cae en test!: • **Promoción interna a Suboficiales: al menos el 80%** de las plazas. • **Guardia Civil: al menos un 40%** (ampliable al 50%). • **Policía Nacional: hasta un 20%**. • **Personal laboral del Ministerio de Defensa: al menos un 50%**.",
    justificacion: "El artículo 20 de la Ley 8/2006 establece una reserva de al menos el 40% para la Guardia Civil y de hasta un 20% para la Policía Nacional para quienes cuenten con más de 5 años de tiempo de servicios."
  },
  {
    id: "Q-W7-049",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería - Causas de Resolución del Compromiso de Larga Duración (Art. 10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 10.2 de la Ley 8/2006, de Tropa y Marinería, el militar con compromiso de larga duración podrá resolver dicho compromiso a petición expresa del interesado:",
    opciones: [
      "Con un preaviso de 3 meses.",
      "Con un preaviso de 24 horas.",
      "Con un preaviso de 2 años naturales.",
      "Únicamente si abona una fianza al Ayuntamiento."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, de 24 de abril, de Tropa y Marinería, Artículo 10.2.a)",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 8/2006 Tropa y Marinería) > Resolución del Compromiso de Larga Duración (Art. 10.2: Preaviso de 3 meses a petición expresa)",
    consejoAcademia: "¡Plazo estrella de examen (Art. 10.2.a Ley 8/2006)!: Para resolver el **Compromiso de Larga Duración (CLD)** a petición expresa del interesado, se exige un **preaviso de 3 MESES**.",
    justificacion: "El artículo 10.2.a) de la Ley 8/2006 establece como primera causa de resolución del compromiso de larga duración la petición expresa del interesado con un preaviso de tres meses."
  },
  {
    id: "Q-W7-050",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Categorías y Empleos Militares (Arts. 20 y 21)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "De acuerdo con los artículos 20 y 21 de la Ley 39/2007, de la carrera militar, ¿cuáles son las cuatro categorías en que se agrupan los militares y qué empleos comprende la categoría de Tropa y Marinería?",
    opciones: [
      "Las categorías son Oficiales Generales, Oficiales, Suboficiales y Tropa y Marinería; y la categoría de Tropa y Marinería comprende los empleos de Cabo Mayor, Cabo Primero, Cabo y Soldado (o Marinero en la Armada).",
      "Las categorías son Funcionarios, Laborales, Eventuales y Becarios.",
      "El empleo de Cabo Mayor pertenece a la categoría de Suboficiales.",
      "El empleo de Alférez pertenece a la categoría de Tropa y Marinería."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículos 20 y 21",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Categorías y Empleos Militares (Arts. 20 y 21: Cabo Mayor como cúspide de Tropa y Marinería)",
    consejoAcademia: "¡Trampa habitual!: El **Cabo Mayor** es el empleo superior de la categoría de **Tropa y Marinería** (¡no es Suboficial!), mientras que el **Sargento** es el primer empleo de Suboficiales y el **Suboficial Mayor** es su cúspide.",
    justificacion: "El artículo 21.2.d) de la Ley 39/2007 incluye dentro de la categoría de Tropa y Marinería los empleos de Cabo Mayor, Cabo Primero, Cabo y Soldado o Marinero."
  },
  {
    id: "Q-W7-051",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Sistemas de Ascenso en Tropa y Marinería (Arts. 88 a 91)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 88 a 91 de la Ley 39/2007, de la carrera militar, ¿por qué sistema de ascenso se producen los ascensos a los empleos de Cabo, Cabo Primero y Cabo Mayor?",
    opciones: [
      "A Cabo y a Cabo Primero se asciende por el sistema de concurso o concurso-oposición; mientras que a Cabo Mayor se asciende por el sistema de elección (previa superación del correspondiente curso de actualización).",
      "A Cabo se asciende por antigüedad pura y a Cabo Mayor por sorteo.",
      "A Cabo Primero se asciende por Real Decreto del Consejo de Ministros.",
      "A todos los empleos de Tropa se asciende exclusivamente por clasificación."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículos 88, 89 y 90",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Los 4 Sistemas de Ascenso (Art. 88-90): Elección (Cabo Mayor, Suboficial Mayor, Coronel y Generales), Clasificación, Concurso/Concurso-Oposición (Cabo y Cabo 1º) y Antigüedad",
    consejoAcademia: "Cuadro de **Sistemas de Ascenso (Art. 89 Ley 39/2007)** que vale 1 punto en el examen: • **Elección**: Todos los Oficiales Generales, Coronel, Suboficial Mayor y **Cabo Mayor**. • **Clasificación**: Teniente Coronel, Comandante, Subteniente y Brigada. • **Concurso o Concurso-Oposición**: **Cabo Primero y Cabo**. • **Antigüedad**: Capitán y Sargento Primero.",
    justificacion: "El artículo 89 de la Ley 39/2007 establece que se efectuarán por elección los ascensos a Cabo Mayor, y por concurso o concurso-oposición los ascensos a Cabo Primero y a Cabo."
  },
  {
    id: "Q-W7-052",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Quién Concede los Ascensos (Art. 93)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 93 de la Ley 39/2007, de la carrera militar, ¿quién concede los ascensos a los diferentes empleos militares (excepto los de Oficiales Generales, que se conceden por Real Decreto del Consejo de Ministros)?",
    opciones: [
      "El Jefe de Estado Mayor del Ejército correspondiente (JEME, AJEMA o JEMA), o el Subsecretario de Defensa en el ámbito de los Cuerpos Comunes.",
      "El Presidente del Congreso de los Diputados.",
      "El Coronel Jefe de cada Regimiento para todos los empleos hasta Comandante.",
      "El Delegado del Gobierno en la Comunidad Autónoma."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículo 93",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Concesión de los ascensos (Art. 93: Consejo de Ministros para Generales vs JEME/AJEMA/JEMA o SUBDEF para el resto)",
    consejoAcademia: "Art. 93 Ley 39/2007: • **Oficiales Generales** -> **Real Decreto acordado en Consejo de Ministros** a propuesta del Ministro de Defensa. • **Resto de empleos (desde Cabo hasta Coronel)** -> Los concede el **Jefe de Estado Mayor del Ejército correspondiente** (o el **Subsecretario de Defensa** en los Cuerpos Comunes).",
    justificacion: "El artículo 93.2 de la Ley 39/2007 dispone que la concesión de los ascensos a los demás empleos corresponde al Jefe de Estado Mayor del Ejército correspondiente o al Subsecretario de Defensa para los Cuerpos Comunes."
  },
  {
    id: "Q-W7-053",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Situaciones Administrativas: Servicio Activo vs Servicios Especiales vs Suspensión (Arts. 107 a 115)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 107 a 115 de la Ley 39/2007, de la carrera militar, compare las situaciones administrativas de «Suspensión de funciones» y «Suspensión de empleo» y señale la afirmación CORRECTA:",
    opciones: [
      "La suspensión de funciones puede acordarse con carácter preventivo (duración máxima de 6 meses salvo paralización imputable al interesado o procedimiento penal) y si supera los 6 meses determina el cese en el destino; mientras que la suspensión de empleo se produce por condena penal o sanción disciplinaria extraordinaria y supone SIEMPRE el cese inmediato en el destino (cualquiera que sea su duración) y que el tiempo transcurrido no sea de abono para el servicio.",
      "La suspensión de empleo conserva el destino aunque dure 3 años y suma el doble de antigüedad.",
      "La suspensión de funciones solo existe para el personal civil de limpieza.",
      "Ambas situaciones dan derecho a percibir el 200% de las retribuciones complementarias."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículos 111 y 112",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Situaciones Administrativas (Art. 107): Diferencia crítica entre Suspensión de Funciones (>6 meses cesa destino) vs Suspensión de Empleo (cesa SIEMPRE en el destino)",
    consejoAcademia: "¡El cruce más repetido de Situaciones Administrativas (Arts. 111 y 112 Ley 39/2007)!: • **Suspensión de FUNCIONES**: Solo pierde el destino si excede de **6 MESES**. • **Suspensión de EMPLEO**: Pierde el destino **SIEMPRE** (desde el primer día, aunque sea de 1 mes) y el tiempo **NO computa** para trienios ni ascenso.",
    justificacion: "Los artículos 111 y 112 de la Ley 39/2007 establecen que la suspensión de funciones conlleva el cese en el destino cuando exceda de seis meses, mientras que la suspensión de empleo determina siempre el cese en el destino."
  },
  {
    id: "Q-W7-054",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Pase a la Reserva de Tropa Permanente (Art. 113)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 113 de la Ley 39/2007, de la carrera militar, ¿a qué edad pasan a la situación de RESERVA por cumplimiento de edad los militares de carrera de la categoría de Tropa y Marinería (permanentes)?",
    opciones: [
      "Al cumplir los 58 años de edad.",
      "Al cumplir los 45 años de edad.",
      "Al cumplir los 61 años de edad.",
      "Al cumplir los 35 años de edad."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículo 113.4",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Situación de Reserva (Art. 113): 58 años para Tropa Permanente vs 61 años para Oficiales y Suboficiales vs 65 años Retiro",
    consejoAcademia: "¡No confundas las 3 edades clave!: • **45 años** = Fin del Compromiso de Larga Duración (CLD, para los NO permanentes -> pasan a RED). • **58 años** = Pase a la **Reserva de Tropa y Marinería Permanente** (Art. 113.4 Ley 39/2007). • **65 años** = Pase a **Retiro** (Art. 114).",
    justificacion: "El artículo 113.4 de la Ley 39/2007 dispone que los militares de carrera de la categoría de tropa y marinería pasarán a la situación de reserva al cumplir los cincuenta y ocho años de edad."
  },
  {
    id: "Q-W7-055",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Clasificación de los Destinos (Art. 100)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 100 de la Ley 39/2007, de la carrera militar, los destinos, según su forma de asignación, se clasifican en:",
    opciones: [
      "De libre designación, de concurso de méritos y de provisión por antigüedad.",
      "Temporales, vitalicios y hereditarios.",
      "Operativos, deportivos y recreativos.",
      "Únicamente de libre designación para todos los empleos."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículo 100",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Provisión de destinos (Art. 100: Libre designación, Concurso de méritos y Antigüedad)",
    consejoAcademia: "Los **3 tipos de destinos (Art. 100 Ley 39/2007)**: 1) **Libre designación**, 2) **Concurso de méritos** y 3) **Provisión por antigüedad**.",
    justificacion: "El artículo 100.1 de la Ley 39/2007 clasifica los destinos según su forma de asignación en libre designación, concurso de méritos y provisión por antigüedad."
  },
  {
    id: "Q-W7-056",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Ámbito de Aplicación (Art. 2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 2 del Real Decreto 96/2009, por el que se aprueban las Reales Ordenanzas para las Fuerzas Armadas, ¿a quiénes son de aplicación las Reales Ordenanzas?",
    opciones: [
      "A todos los militares profesionales, a los alumnos de la enseñanza militar de formación y a los aspirantes a reservistas y reservistas cuando se encuentren incorporados a las Fuerzas Armadas; y, dada su vinculación a la seguridad pública, a los miembros del Cuerpo de la Guardia Civil, excepto cuando contradigan su legislación específica.",
      "Exclusivamente a los Oficiales Generales del Ejército de Tierra.",
      "Únicamente durante el estado de sitio a los funcionarios civiles de Correos.",
      "A los militares de carrera, quedando excluidos los alumnos de academias militares y la Guardia Civil."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, Reales Ordenanzas para las FAS, Artículo 2",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > Ámbito de aplicación (Art. 2: Militares profesionales, alumnos, reservistas activados y Guardia Civil salvo contradicción)",
    consejoAcademia: "Recuerda los **4 colectivos del Art. 2 de las RROO**: 1) Militares profesionales, 2) **Alumnos** de enseñanza de formación, 3) **Reservistas** cuando estén **incorporados/activados** y 4) **Guardia Civil** (excepto cuando contradigan su legislación específica).",
    justificacion: "El artículo 2 del RD 96/2009 extiende la aplicación de las Reales Ordenanzas a los militares profesionales, alumnos de formación, reservistas incorporados y miembros de la Guardia Civil salvo que contradigan su legislación específica."
  },
  {
    id: "Q-W7-057",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Órdenes que Entrañen Ejecución de Actos Delictivos (Art. 48)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 48 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), si las órdenes entrañan la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar:",
    opciones: [
      "No estará obligado a obedecerlas; en todo caso asumirá la grave responsabilidad de su acción u omisión.",
      "Deberá ejecutarlas primero y presentar una queja anónima un mes después.",
      "Estará obligado a obedecerlas si vienen firmadas por escrito.",
      "Quedará exento de toda responsabilidad penal si las cumple."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, Reales Ordenanzas para las FAS, Artículo 48",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > Límites de la obediencia (Art. 48: Órdenes constitutivas de delito)",
    consejoAcademia: "Frase literal de las RROO (Art. 48) y de la Regla 10 del Militar (Art. 6 Ley 39/2007): *«Si las órdenes entrañan la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar **no estará obligado a obedecerlas**. En todo caso **asumirá la grave responsabilidad de su acción u omisión**»*.",
    justificacion: "El artículo 48 del RD 96/2009 establece que el militar no estará obligado a obedecer las órdenes que entrañen la ejecución de actos constitutivos de delito, asumiendo en todo caso la grave responsabilidad de su acción u omisión."
  },
  {
    id: "Q-W7-058",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Objeciones a una Orden (Art. 49)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 49 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), en el supuesto de que el militar considere su deber presentar alguna objeción a la orden recibida (sin que ésta sea constitutiva de delito), ¿cómo deberá proceder?",
    opciones: [
      "La formulará ante quien se la hubiera dado; si éste mantiene su orden, la cumplirá, aunque podrá comunicar su objeción al superior inmediato de quien la dictó.",
      "Se negará a cumplirla hasta que resuelva el Defensor del Pueblo.",
      "Convocará una asamblea en el patio de armas para someter la orden a votación.",
      "Publicará su objeción en redes sociales antes de ejecutarla."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, Reales Ordenanzas para las FAS, Artículo 49",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > Objeciones a las órdenes (Art. 49) vs Órdenes delictivas (Art. 48)",
    consejoAcademia: "¡No confundas el **Art. 48** (orden delictiva -> **NO** se obedece) con el **Art. 49** (objeción técnica o de servicio a una orden legítima -> se formula ante quien la dio, pero **si éste la mantiene, SE CUMPLE**)!.",
    justificacion: "El artículo 49 del RD 96/2009 dispone que la objeción se formulará ante quien dio la orden y, si éste la mantiene, el subordinado deberá cumplirla."
  },
  {
    id: "Q-W7-059",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Toma de Decisiones e Iniciativa (Arts. 56 a 63)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según los artículos 56 y 60 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), en relación con el ejercicio del mando y la capacidad de decisión:",
    opciones: [
      "La condición esencial del que ejerce mando es su capacidad para decidir; actuará con iniciativa y la fomentará entre los subordinados, pero nunca eludirá su responsabilidad transfiriéndola a los subordinados ni solicitará instrucciones cuando le corresponda decidir por sí mismo.",
      "El jefe debe delegar siempre su responsabilidad penal y disciplinaria en el soldado más moderno.",
      "En combate está prohibido tomar decisiones sin esperar una orden escrita por correo postal.",
      "El mando militar se ejerce por votación semanal de la compañía."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, Reales Ordenanzas para las FAS, Artículos 56 y 60",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > Acción de mando y capacidad para decidir (Arts. 55 a 63)",
    consejoAcademia: "Frase clave del **Art. 60 RROO**: *«La condición esencial del que ejerce mando es su **capacidad para decidir**»*, y la responsabilidad en el ejercicio del mando **es irrenunciable y no puede ser compartida** (Art. 56).",
    justificacion: "Los artículos 56 y 60 del RD 96/2009 establecen que la responsabilidad en el ejercicio del mando no puede ser renunciada ni compartida y que la condición esencial del que ejerce mando es su capacidad para decidir."
  },
  {
    id: "Q-W7-060",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Uso Legítimo de la Fuerza (Arts. 83 a 91)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 84 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), en el empleo legítimo de la fuerza, el militar:",
    opciones: [
      "Hará un uso gradual y proporcionado de la misma, de acuerdo con las reglas de enfrentamiento establecidas para las operaciones en las que participe.",
      "Empleará siempre la máxima potencia de fuego sin distinguir entre combatientes y población civil.",
      "No está sujeto a los Convenios de Ginebra ni al Derecho Internacional Humanitario.",
      "Puede ordenar represalias contra prisioneros de guerra y heridos."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, Reales Ordenanzas para las FAS, Artículo 84",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > Operaciones de combate y de paz: Uso gradual y proporcionado de la fuerza y Reglas de Enfrentamiento (ROE)",
    consejoAcademia: "Dos adjetivos clave del **Art. 84 RROO** sobre el uso de la fuerza: **GRADUAL y PROPORCIONADO**, de acuerdo con las **Reglas de Enfrentamiento (ROE)**.",
    justificacion: "El artículo 84 del RD 96/2009 exige que el militar haga un uso gradual y proporcionado de la fuerza de acuerdo con las reglas de enfrentamiento establecidas."
  },
  {
    id: "Q-W7-061",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Neutralidad Política y Sindical (Art. 7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 7 y 14 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, señale la opción estrictamente CORRECTA sobre los límites a la acción política y sindical del militar:",
    opciones: [
      "El militar está sujeto al deber de neutralidad política y sindical: no podrá fundar ni afiliarse a partidos políticos o sindicatos, ni realizar actividades políticas o sindicales, ni ejercer el derecho de huelga ni acciones sustitutivas o concertadas con el fin de alterar el normal funcionamiento de las Fuerzas Armadas; pudiendo, en cambio, afiliarse a asociaciones profesionales de miembros de las Fuerzas Armadas inscritas en el RAPFAS.",
      "El militar puede afiliarse a sindicatos de clase siempre que acuda a las huelgas vestido de paisano.",
      "El militar puede presentarse en listas electorales manteniendo la situación de servicio activo.",
      "El militar tiene prohibido votar en las elecciones municipales y generales."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de 27 de julio, de derechos y deberes de los miembros de las FAS, Artículos 7, 13 y 14",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Neutralidad política y sindical (Art. 7) vs Asociaciones Profesionales (RAPFAS)",
    consejoAcademia: "Tríada de prohibiciones constitucionales y orgánicas del militar (Art. 7 LO 9/2011): **Prohibido partidos políticos, prohibido sindicatos y prohibida la huelga (o acciones sustitutivas)**. Lo que SÍ tiene reconocido es el **derecho de asociación profesional** en asociaciones inscritas en el **RAPFAS**.",
    justificacion: "El artículo 7 de la LO 9/2011 impone el deber de neutralidad política y sindical y prohíbe la afiliación a partidos políticos o sindicatos y el ejercicio del derecho de huelga."
  },
  {
    id: "Q-W7-062",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Derecho de Petición (Art. 15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 15 de la Ley Orgánica 9/2011 (en relación con el artículo 29.2 de la Constitución Española), ¿cómo puede ejercer el militar el derecho fundamental de petición?",
    opciones: [
      "Únicamente de forma individual, en los supuestos y con las formalidades que señala la Ley Orgánica 4/2001, reguladora del Derecho de Petición (estando constitucionalmente prohibido su ejercicio colectivo por los miembros de las Fuerzas o Institutos armados).",
      "Tanto de forma individual como mediante recogida colectiva de firmas en el acuartelamiento.",
      "A través de manifestaciones públicas con uniforme y armamento.",
      "Los militares tienen suspendido el derecho de petición individual en tiempo de paz."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Artículo 15 y Constitución Española, Artículo 29.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Ejercicio exclusivamente INDIVIDUAL del derecho de petición (Art. 15 LO 9/2011 y Art. 29.2 CE)",
    consejoAcademia: "¡Palabra mágica del Art. 29.2 CE y Art. 15 LO 9/2011!: El derecho de petición (y también las quejas o iniciativas del Art. 28 LO 9/2011) los militares SOLO pueden ejercerlos **INDIVIDUALMENTE** (nunca de forma colectiva).",
    justificacion: "El artículo 29.2 CE y el artículo 15 de la LO 9/2011 disponen que los miembros de las Fuerzas Armadas sólo podrán ejercer el derecho de petición individualmente."
  },
  {
    id: "Q-W7-063",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - COPERFAS y Porcentajes RAPFAS (Arts. 40 a 49)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 48 de la Ley Orgánica 9/2011, para que una asociación profesional inscrita en el Registro de Asociaciones Profesionales de las Fuerzas Armadas (RAPFAS) pueda formar parte del Consejo de Personal de las Fuerzas Armadas (COPERFAS), ¿qué porcentaje mínimo de afiliados en servicio activo o reserva con destino debe acreditar?",
    opciones: [
      "El 1% del total de los miembros de las Fuerzas Armadas con derecho a estar afiliados, o bien el 3% de los efectivos de su categoría (Oficiales, Suboficiales o Tropa y Marinería) cuando la asociación sea de ámbito exclusivo de una categoría.",
      "El 50% del total de efectivos del Ejército de Tierra.",
      "El 25% de los Reservistas Voluntarios.",
      "Basta con tener 2 socios fundadores retirados."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de derechos y deberes de los miembros de las FAS, Artículo 48.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Requisitos de acceso al COPERFAS (Art. 48.2: 1% global o 3% de su categoría) y quiénes pueden afiliarse al RAPFAS",
    consejoAcademia: "¡Par numérico clave del **COPERFAS (Art. 48.2 LO 9/2011)**!: **1% del total de las FAS** o **3% de su categoría** (Oficiales, Suboficiales o Tropa y Marinería). Y recuerda: a las asociaciones del RAPFAS **solo se puede estar afiliado a UNA** (Art. 34), y **NO pueden formar parte del COPERFAS** las asociaciones integradas exclusivamente por militares en reserva sin destino o retirados.",
    justificacion: "El artículo 48.2 de la LO 9/2011 fija los umbrales del 1% del total de efectivos de las FAS o del 3% de los efectivos de una categoría para acceder al COPERFAS."
  },
  {
    id: "Q-W7-064",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Observatorio de la Vida Militar (Arts. 53 a 55)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con el Observatorio de la Vida Militar (regulado en los artículos 53 a 55 de la Ley Orgánica 9/2011), señale la respuesta CORRECTA sobre su adscripción, composición y mandato:",
    opciones: [
      "Es un órgano colegiado de carácter asesor y consultivo, adscrito a las Cortes Generales, compuesto por 9 miembros de reconocido prestigio (5 elegidos por el Congreso de los Diputados y 4 por el Senado, por mayoría de tres quintos) por un mandato de 5 años, sin que sus miembros tengan derecho a retribución fija (solo indemnizaciones por asistencia).",
      "Está adscrito a la Subsecretaría de Defensa y se compone de 12 Generales nombrados por 9 años.",
      "Es un sindicato militar integrado por 20 representantes elegidos cada 2 años.",
      "Tiene potestad sancionadora para imponer arrestos por faltas muy graves."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de derechos y deberes de los miembros de las FAS, Artículos 53, 54 y 55",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Observatorio de la Vida Militar (Arts. 53-55: Adscrito a las Cortes Generales, 9 miembros [5 Congreso + 4 Senado], 5 años)",
    consejoAcademia: "¡Cruce mortal del Tema 3!: El **COPERFAS** lo preside el **Ministro de Defensa** (o el Subsecretario por delegación) en el ámbito del Ministerio; pero el **Observatorio de la Vida Militar** está **adscrito a las CORTES GENERALES** y tiene **9 miembros (5 Congreso + 4 Senado)** por **5 años**.",
    justificacion: "Los artículos 53 a 55 de la LO 9/2011 configuran el Observatorio de la Vida Militar como órgano colegiado asesor y consultivo adscrito a las Cortes Generales e integrado por 9 personalidades (5 elegidas por el Congreso y 4 por el Senado) por 5 años."
  },
  {
    id: "Q-W7-065",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Sanciones por Faltas Leves, Graves y Muy Graves (Art. 11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 11 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿cuál es el cuadro exacto de sanciones que pueden imponerse por faltas LEVES, GRAVES y MUY GRAVES a los militares profesionales?",
    opciones: [
      "1) Por falta LEVE: Reprensión, Privación de salida de 1 a 8 días, Sanción económica de 1 a 7 días y Arresto de 1 a 14 días; 2) Por falta GRAVE: Sanción económica de 8 a 15 días, Arresto de 15 a 30 días, Pérdida de destino y Baja en el centro docente militar de formación; y 3) Por falta MUY GRAVE: Arresto de 31 a 60 días, Suspensión de empleo (de 1 mes a 1 año), Separación del servicio y Resolución de compromiso.",
      "Por falta leve se puede imponer pérdida de destino y arresto de 15 a 30 días.",
      "Por falta grave se puede imponer separación del servicio y arresto de 31 a 60 días.",
      "La sanción económica no existe en las Fuerzas Armadas desde 2014."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de 4 de diciembre, de Régimen Disciplinario de las FAS, Artículo 11",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Cuadro Maestro de Sanciones (Art. 11: Leves, Graves y Muy Graves)",
    consejoAcademia: "¡La tabla más preguntada de toda la oposición (Art. 11 LO 8/2014)!: • **Arrestos**: Leve = **1 a 14 días** (en domicilio o unidad) | Grave = **15 a 30 días** (en establecimiento disciplinario militar) | Muy Grave = **31 a 60 días** (en EDM). • **Económica**: Leve = **1 a 7 días** | Grave = **8 a 15 días** (en alumnos de formación NO se aplica sanción económica).",
    justificacion: "El artículo 11 de la LO 8/2014 clasifica de forma exhaustiva las sanciones correspondientes a las faltas leves, graves y muy graves."
  },
  {
    id: "Q-W7-066",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Prescripción de Faltas vs Prescripción de Sanciones vs Cancelación (Arts. 21, 24 y 65)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el triple cruce numérico de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, entre: A) Prescripción de las FALTAS (Art. 21), B) Prescripción de las SANCIONES (Art. 24) y C) CANCELACIÓN de las notas desfavorables (Art. 65), y señale la opción 100% CORRECTA:",
    opciones: [
      "A) Las FALTAS prescriben a los 2 meses (leves), 2 años (graves) y 3 años (muy graves); B) Las SANCIONES prescriben a los 3 meses (leves), 2 años (graves) y 3 años (muy graves); y C) Las notas de sanciones se CANCELAN (de oficio o a instancia de parte) al 1 año (leves), 2 años (graves) y 4 años (muy graves, excepto separación del servicio y resolución de compromiso, que no se cancelan).",
      "Tanto las faltas leves como las sanciones leves prescriben y se cancelan a los 6 meses.",
      "Las faltas muy graves prescriben a los 5 años y se cancelan a los 10 años.",
      "Las sanciones por falta leve no se anotan nunca y prescriben a los 15 días."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 21, 24 y 65",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > La Matriz de Oro: Prescripción Faltas (2m / 2a / 3a) vs Prescripción Sanciones (3m / 2a / 3a) vs Cancelación (1a / 2a / 4a)",
    consejoAcademia: "¡Memoriza esta matriz de 3 filas porque cae TODOS los años!: • **Prescripción FALTAS (Art. 21)**: **2 meses** (Leves) | **2 años** (Graves) | **3 años** (Muy Graves). • **Prescripción SANCIONES (Art. 24)**: **3 meses** (Leves) | **2 años** (Graves) | **3 años** (Muy Graves). • **CANCELACIÓN (Art. 65)**: **1 año** (Leves) | **2 años** (Graves) | **4 años** (Muy Graves, salvo Separación del servicio y Resolución de compromiso).",
    justificacion: "Los artículos 21, 24 y 65 de la LO 8/2014 fijan respectivamente los plazos de prescripción de faltas (2 meses / 2 años / 3 años), prescripción de sanciones (3 meses / 2 años / 3 años) y cancelación de notas (1 año / 2 años / 4 años)."
  },
  {
    id: "Q-W7-067",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Potestad Sancionadora de Mandos de Pelotón, Sección, Compañía, Batallón y Regimiento (Art. 32)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 32 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿cuál es la potestad sancionadora exacta de los Jefes de Pelotón, Jefes de Sección, Jefes de Compañía, Jefes de Batallón y Jefes de Regimiento?",
    opciones: [
      "1) Jefes de Pelotón (con categoría de Suboficial): Reprensión; 2) Jefes de Sección: Reprensión, Privación de salida hasta 4 días y Sanción económica hasta 3 días (¡sin arresto!); 3) Jefes de Compañía (o unidad similar): Reprensión, Privación de salida hasta 8 días, Sanción económica hasta 5 días y Arresto de 1 a 5 días; 4) Jefes de Batallón (o unidad similar): Reprensión, Privación de salida hasta 8 días, Sanción económica hasta 7 días y Arresto de 1 a 7 días; y 5) Jefes de Regimiento (o unidad independiente): Todas las sanciones por falta leve (hasta 14 días de arresto y 7 días de sanción económica).",
      "El Jefe de Pelotón puede imponer hasta 14 días de arresto y el Jefe de Sección hasta 30 días.",
      "El Jefe de Compañía puede imponer sanciones por falta grave de hasta 30 días de arresto.",
      "El Cabo Jefe de Escuadra tiene potestad para imponer 5 días de sanción económica."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículo 32",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Escalera de Potestad Sancionadora en Faltas Leves (Art. 32: Pelotón -> Sección -> Compañía -> Batallón -> Regimiento)",
    consejoAcademia: "¡La escalera del **Art. 32 LO 8/2014** que te hace sacar 10 en el Bloque 2!: • **Pelotón (Suboficial)**: Solo **Reprensión** (un Cabo o Cabo 1º jefe de pelotón NO tiene potestad sancionadora, da parte). • **Sección**: Reprensión + Salida hasta **4d** + Económica hasta **3d** (**¡0 días de arresto!**). • **Compañía**: Reprensión + Salida hasta **8d** + Económica hasta **5d** + **Arresto 1 a 5d** (¡es el primer escalón que puede arrestar!). • **Batallón**: Reprensión + Salida hasta **8d** + Económica hasta **7d** + **Arresto 1 a 7d**. • **Regimiento**: Todas las leves (**Arresto 1 a 14d** y Económica **1 a 7d**).",
    justificacion: "El artículo 32 de la LO 8/2014 gradúa con exactitud la potestad sancionadora por faltas leves desde el Jefe de Pelotón con empleo de Suboficial hasta el Jefe de Regimiento."
  },
  {
    id: "Q-W7-068",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Autoridades con Potestad para Sanciones Muy Graves (Arts. 27 a 31)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 27 a 31 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿quién tiene competencia EXCLUSIVA para imponer la sanción de «Separación del servicio» y quiénes pueden imponer la sanción de «Resolución de compromiso»?",
    opciones: [
      "La sanción de «Separación del servicio» es competencia exclusiva del Ministro de Defensa; mientras que la «Resolución de compromiso» pueden imponerla el Ministro de Defensa, el Subsecretario de Defensa (en su ámbito) y los Jefes de Estado Mayor del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio.",
      "Ambas sanciones las puede imponer el Coronel Jefe de Regimiento sin expediente previo.",
      "La Separación del servicio la impone el Jefe de Compañía y la Resolución de compromiso el Jefe de Batallón.",
      "Solo puede imponerlas el Tribunal Europeo de Derechos Humanos."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 27, 28, 29 y 30",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Autoridades sancionadoras en faltas muy graves: Separación del servicio (exclusiva del Ministro) vs Resolución de compromiso (Ministro, SUBDEF, JEME, AJEMA, JEMA)",
    consejoAcademia: "¡Diferencia quirúrgica de examen (Arts. 27-30 LO 8/2014)!: • **Separación del servicio** (militares de carrera) = **EXCLUSIVA del Ministro de Defensa**. • **Resolución de compromiso** (militares de complemento y tropa con compromiso temporal) = **Ministro de Defensa, SUBDEF y JEME / AJEMA / JEMA** (¡el JEMAD puede imponer arresto de 31 a 60 días y suspensión de empleo, pero NO resolución de compromiso ni separación del servicio!).",
    justificacion: "Los artículos 27 a 30 de la LO 8/2014 reservan en exclusiva al Ministro de Defensa la separación del servicio y atribuyen la resolución de compromiso al Ministro, al Subsecretario y a los Jefes de Estado Mayor de los tres Ejércitos."
  },
  {
    id: "Q-W7-069",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Plazos de Instrucción de Expedientes Graves vs Muy Graves (Art. 48)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 48 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿cuál es el plazo máximo en que debe instruirse y notificarse la resolución del expediente disciplinario por falta GRAVE y por falta MUY GRAVE?",
    opciones: [
      "El procedimiento por falta GRAVE no podrá exceder de 6 meses, y el procedimiento por falta MUY GRAVE no podrá exceder de 1 año, contados ambos desde la fecha del acuerdo de incoación hasta la fecha de notificación de la resolución al expedientado.",
      "Ambos procedimientos duran como máximo 15 días hábiles.",
      "El procedimiento por falta grave dura 2 años y el muy grave dura 5 años.",
      "En el régimen disciplinario militar no existe plazo de caducidad del expediente."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículo 48.1",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Caducidad y plazo máximo del expediente disciplinario (Art. 48: 6 meses en Graves / 1 año en Muy Graves)",
    consejoAcademia: "Pareja de plazos de **caducidad del expediente disciplinario (Art. 48 LO 8/2014)**: • Expediente por **Falta GRAVE = máx. 6 MESES**. • Expediente por **Falta MUY GRAVE = máx. 1 AÑO**. (En las faltas leves el procedimiento es preferentemente oral y se resuelve de inmediato tras oír al infractor).",
    justificacion: "El artículo 48.1 de la LO 8/2014 establece un plazo máximo de tramitación y notificación de 6 meses para los expedientes por falta grave y de 1 año para los expedientes por falta muy grave."
  },
  {
    id: "Q-W7-070",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Recursos Disciplinarios: Plazo de Interposición y Resolución (Arts. 66 a 70)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 68 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿cuál es el plazo para interponer recurso de alzada o de reposición contra una resolución sancionadora disciplinaria y cómo se computa si la sanción es por falta leve de arresto o privación de salida?",
    opciones: [
      "El recurso deberá interponerse en el plazo de 1 mes, que se iniciará el día siguiente al de la notificación de la sanción; no obstante, cuando la sanción impuesta por falta leve sea de arresto o de privación de salida y se estuviese cumpliendo, el plazo de 1 mes comenzará a contarse desde el día siguiente al de la finalización de su cumplimiento, y el órgano competente deberá resolver el recurso en el plazo máximo de 2 meses.",
      "El plazo de interposición es de 10 días naturales desde que empieza el arresto y se resuelve en 6 meses.",
      "No cabe recurso administrativo alguno contra las sanciones por falta leve.",
      "La interposición del recurso suspende automáticamente el cumplimiento del arresto disciplinario."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 60, 68 y 69",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Recursos en vía disciplinaria (Arts. 66-70): Plazo 1 mes (desde el día siguiente a finalizar el arresto/privación de salida leve) y resolución en 2 meses",
    consejoAcademia: "¡Tres trampas de examen en una sola pregunta sobre recursos de la LO 8/2014!: 1) Plazo para recurrir (alzada o reposición): **1 MES** (en todos los casos). 2) Si es **arresto leve o privación de salida** en cumplimiento, el mes empieza a contar **al día siguiente de FINALIZAR el cumplimiento** (Art. 68.2). 3) Plazo para resolver el recurso disciplinario: **2 MESES** (Art. 69.2, con silencio desestimatorio). Y recuerda: las sanciones son **inmediatamente ejecutivas** (recurrir no suspende el cumplimiento).",
    justificacion: "Los artículos 68 y 69 de la LO 8/2014 fijan el plazo de un mes para interponer el recurso (contado desde el día siguiente a finalizar el cumplimiento si es arresto o privación de salida por falta leve) y el plazo de dos meses para resolverlo."
  }
];

const WAVE7_QUESTIONS_PART2 = [
  {
    id: "Q-W7-071",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Arresto Cautelar (Art. 36)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 36 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿quién puede acordar el arresto cautelar de un subordinado, cuál es su duración máxima y qué efectos tiene sobre la sanción que finalmente se imponga?",
    opciones: [
      "Puede acordarlo todo militar que tenga mando sobre fuerzas o unidades o dirija centros u organismos, por el tiempo imprescindible y como máximo durante 48 horas; siendo dicho tiempo de abono para el cumplimiento de la sanción de arresto que pudiera imponerse.",
      "Puede acordarlo cualquier soldado más antiguo hasta un máximo de 15 días naturales.",
      "Solo puede acordarlo el Ministro de Defensa por un plazo de 30 días.",
      "El arresto cautelar no es abonable para la sanción final de arresto."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículo 36",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Medidas cautelares: Arresto cautelar por máximo de 48 horas (Art. 36) vs Cese cautelar en funciones por máximo de 5 días (Art. 54)",
    consejoAcademia: "¡Cruce de medidas cautelares en la LO 8/2014!: • **Arresto cautelar (Art. 36)** = máximo **48 HORAS** (en unidad, base o buque, abonable para la sanción). • **Cese cautelar en sus funciones por el mando o el instructor en faltas graves/muy graves (Art. 54.2)** = máximo **5 DÍAS**.",
    justificacion: "El artículo 36 de la LO 8/2014 regula el arresto cautelar con una duración máxima de 48 horas y prevé su abono para el cumplimiento del arresto que finalmente se imponga."
  },
  {
    id: "Q-W7-072",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Acumulación de Faltas Leves en Falta Grave (Art. 7.34)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 7.34 de la Ley Orgánica 8/2014, constituye una falta GRAVE cometer una falta leve teniendo anotadas y no canceladas al menos:",
    opciones: [
      "Tres faltas leves sancionadas, o bien dos faltas leves si alguna de ellas ha sido sancionada con arresto.",
      "Diez faltas leves en el último mes natural.",
      "Una sola falta leve de reprensión verbal.",
      "Cinco faltas leves cometidas hace más de diez años."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículo 7.34",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Reiteración disciplinaria: De falta leve a grave (Art. 7.34) y de falta grave a muy grave (Art. 8.14)",
    consejoAcademia: "¡La regla de acumulación disciplinaria más preguntada!: • **Pasa a ser FALTA GRAVE (Art. 7.34)**: Cometer una falta leve teniendo anotadas y no canceladas **3 faltas leves** (o **2 faltas leves si alguna fue sancionada con ARRESTO**). • **Pasa a ser FALTA MUY GRAVE (Art. 8.14)**: Cometer una falta grave teniendo anotadas y no canceladas **2 faltas graves**.",
    justificacion: "El artículo 7.34 de la LO 8/2014 tipifica como falta grave cometer una falta leve teniendo anotadas y no canceladas al menos tres faltas leves, o dos si alguna de ellas fue sancionada con arresto."
  },
  {
    id: "Q-W7-073",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Embriaguez o Consumo de Drogas (Arts. 6.18, 7.18 y 8.8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la tipificación disciplinaria del consumo de alcohol o drogas tóxicas en la Ley Orgánica 8/2014, ¿cuándo constituye falta MUY GRAVE conforme al artículo 8.8?",
    opciones: [
      "Cuando de forma reiterada y fuera de acto de servicio se embriague o consuma drogas tóxicas, estupefacientes o sustancias psicotrópicas vistiendo uniforme o en acuartelamientos, bases, buques o establecimientos militares, o cuando afecte a la imagen de las Fuerzas Armadas; o bien consumir o encontrarse bajo sus efectos durante el desempeño de un servicio de armas o de guardia de seguridad.",
      "Únicamente cuando se tome una cerveza estando de vacaciones en su domicilio particular de paisano.",
      "El consumo de drogas en servicio de armas constituye siempre una falta leve sancionada con reprensión.",
      "Solo se sanciona si se produce a bordo de aeronaves civiles extranjeras."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 6.18, 7.18 y 8.8",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Graduación de faltas por alcohol y drogas (Leve Art. 6.18 / Grave Art. 7.18 / Muy Grave Art. 8.8)",
    consejoAcademia: "Distingue los 3 peldaños de alcohol/drogas en la LO 8/2014: • **Muy Grave (Art. 8.8)**: En **servicio de armas**, o de forma **reiterada** fuera de servicio con uniforme / en bases, o consumo habitual que perjudique el servicio.",
    justificacion: "El artículo 8.8 de la LO 8/2014 tipifica como falta muy grave embriagarse o consumir drogas durante el servicio de armas o de forma reiterada vistiendo uniforme o en instalaciones militares."
  },
  {
    id: "Q-W7-074",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Plazo de Alegaciones al Pliego de Cargos y a la Propuesta de Resolución (Arts. 56 y 58)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "En el procedimiento sancionador por faltas graves y muy graves regulado en los artículos 56 y 58 de la Ley Orgánica 8/2014, ¿de qué plazo dispone el expedientado para contestar al pliego de cargos y proponer prueba, y de qué plazo dispone para formular alegaciones a la propuesta de resolución?",
    opciones: [
      "De un plazo de 10 días en ambos trámites (10 días desde la notificación del pliego de cargos para contestarlo y proponer pruebas, y 10 días desde la notificación de la propuesta de resolución para alegar cuanto considere conveniente a su defensa).",
      "De 24 horas para el pliego de cargos y de 3 meses para la propuesta de resolución.",
      "De 30 días naturales en el pliego de cargos y de 2 días en la propuesta de resolución.",
      "No existe trámite de pliego de cargos en las faltas graves."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 56.2 y 58.1",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Tramitación del expediente (Arts. 56 y 58: Doble plazo de 10 días hábiles para Pliego de Cargos y Propuesta de Resolución)",
    consejoAcademia: "¡Regla del **10 + 10** en el expediente disciplinario (LO 8/2014)!: • Contestar al **Pliego de Cargos** y proponer prueba (Art. 56.2) = **10 DÍAS**. • Alegaciones a la **Propuesta de Resolución** (Art. 58.1) = **10 DÍAS**.",
    justificacion: "Los artículos 56.2 y 58.1 de la LO 8/2014 conceden un plazo de diez días al expedientado tanto para contestar al pliego de cargos como para formular alegaciones a la propuesta de resolución."
  },
  {
    id: "Q-W7-075",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas - Plazo de Contestación y Escalón Superior (Arts. 7 a 13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 176/2014, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas relativas al régimen de personal y a las condiciones de vida que pueda plantear el militar, si transcurrido un plazo desde la presentación de una QUEJA no se hubiese contestado o el militar considerase que no han sido atendidas sus pretensiones, ¿en qué plazo y ante quién podrá acudir directamente?",
    opciones: [
      "Si transcurrido 1 mes desde la presentación de la queja no se hubiese contestado (o en el plazo de 1 mes desde la notificación del acuerdo si considera no atendida su pretensión), el militar podrá presentar la misma queja directamente ante el Mando o Jefatura de Personal de su Ejército (MAPER/JEPER) o ante el Director General de Personal (DIGENPER) en el caso de los Cuerpos Comunes, dando cuenta de ello al Jefe de su Unidad.",
      "Deberá esperar 6 meses y acudir directamente al Tribunal Constitucional.",
      "Si en 48 horas no le responden, se entiende estimada por silencio positivo.",
      "Podrá presentar una queja colectiva firmada por toda su compañía ante el Ayuntamiento."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, de 21 de marzo, de Iniciativas y Quejas, Artículo 13",
    ubicacionTemario: "Bloque 2 > Tema 5 (RD 176/2014 Iniciativas y Quejas) > Segunda instancia de las Quejas (Art. 13: Plazo de 1 mes para elevar a MAPER/JEPER o DIGENPER)",
    consejoAcademia: "Memoriza el circuito del **RD 176/2014**: 1) Las iniciativas y quejas se presentan en la unidad ante el **militar designado** (que ha de ser **más antiguo que los Cabos Mayores de la unidad**, normalmente el **Suboficial Mayor**). 2) Si en **1 MES** no hay respuesta (o no satisface al interesado), en el plazo de **1 MES** puede elevar la **QUEJA** directamente a **MAPER/JEPER (o DIGENPER)** dando cuenta al Jefe de Unidad. 3) En cambio, para las **INICIATIVAS** el plazo máximo de contestación motivada es de **6 MESES** (Art. 10).",
    justificacion: "El artículo 13 del RD 176/2014 establece el plazo de un mes para acudir directamente al Mando o Jefatura de Personal (o DIGENPER) cuando la queja no haya sido contestada en un mes o no haya sido atendida."
  },
  {
    id: "Q-W7-076",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas - Materias Excluidas (Art. 3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 3 del Real Decreto 176/2014, ¿cuáles de las siguientes materias quedan EXCLUIDAS del ámbito de aplicación del procedimiento de iniciativas y quejas?",
    opciones: [
      "Las que se refieran a materias objeto de un procedimiento administrativo o judicial en curso o sobre las que ya haya recaído resolución, las que dispongan de un procedimiento específico o de recursos propios, y las que entrañen el ejercicio del derecho de petición regulado por la Ley Orgánica 4/2001.",
      "Las relativas a las condiciones de vida en los alojamientos logísticos del acuartelamiento.",
      "Las propuestas de carácter general para mejorar la eficacia de los servicios de la unidad.",
      "Las quejas individuales sobre el estado de las instalaciones deportivas de la base."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, de 21 de marzo, de Iniciativas y Quejas, Artículo 3",
    ubicacionTemario: "Bloque 2 > Tema 5 (RD 176/2014 Iniciativas y Quejas) > Materias excluidas del RD 176/2014 (Art. 3) e inadmisión por anonimato o mala fe (Art. 6)",
    consejoAcademia: "No puedes usar una Queja del RD 176/2014 para recurrir un arresto o un destino (porque ya tienen su **recurso de alzada/reposición propio**), ni para asuntos sub iúdice, ni para el derecho de petición de la LO 4/2001. Además, se **inadmiten** las anónimas, las colectivas o las formuladas con **mala fe o abuso de derecho** (Art. 6).",
    justificacion: "El artículo 3 del RD 176/2014 excluye los procedimientos administrativos o judiciales en curso o resueltos, los que tengan procedimiento o recurso específico y el derecho de petición."
  },
  {
    id: "Q-W7-077",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 de Igualdad Efectiva y LO 2/2024 de Representación Paritaria - Principio de Presencia Equilibrada",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres (reforzada por la Ley Orgánica 2/2024, de representación paritaria y presencia equilibrada de mujeres y hombres), ¿qué porcentajes definen legalmente la «presencia o composición equilibrada» de ambos sexos?",
    opciones: [
      "Aquella situación en la que las personas de cada sexo no superen el 60% ni sean menos del 40% en el ámbito a que se refiera.",
      "Aquella en la que un sexo represente el 80% y el otro el 20%.",
      "Aquella en la que al menos exista un 10% de presencia de cualquiera de los sexos.",
      "Únicamente cuando el porcentaje sea exactamente del 50,00% en todas las unidades de combate."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Disposición Adicional Primera y Ley Orgánica 2/2024",
    ubicacionTemario: "Bloque 2 > Tema 6 (Igualdad, Observatorio Militar para la Igualdad y Protocolo Acoso) > Horquilla 60% / 40% de presencia equilibrada (LO 3/2007 y LO 2/2024)",
    consejoAcademia: "¡La horquilla del **60% / 40%** de la LO 3/2007 y LO 2/2024 cae muchísimo en examen!: Ningún sexo puede superar el **60%** ni ser inferior al **40%**.",
    justificacion: "La Disposición Adicional Primera de la LO 3/2007 y la LO 2/2024 definen la presencia o composición equilibrada como aquella en que las personas de cada sexo no superen el 60% ni sean menos del 40%."
  },
  {
    id: "Q-W7-078",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 de Igualdad Efectiva - Acoso Sexual vs Acoso por Razón de Sexo (Art. 7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 7 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, ¿cuál es la diferencia legal exacta entre «acoso sexual» y «acoso por razón de sexo»?",
    opciones: [
      "Constituye «acoso sexual» cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo; mientras que constituye «acoso por razón de sexo» cualquier comportamiento realizado en función del sexo de una persona, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo (como el trato hostil derivado del embarazo o la maternidad).",
      "El acoso sexual solo puede ser físico y el acoso por razón de sexo solo puede ser escrito.",
      "Son términos idénticos que requieren obligatoriamente contacto físico violento.",
      "Solo se consideran discriminatorios si se repiten durante más de dos años consecutivos."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, Artículo 7",
    ubicacionTemario: "Bloque 2 > Tema 6 (Igualdad y Protocolo de Acoso en las FAS) > Diferencia legal del Art. 7 LO 3/2007: Acoso sexual (naturaleza sexual) vs Acoso por razón de sexo (en función del sexo)",
    consejoAcademia: "Fíjate en la palabra clave que los distingue en el **Art. 7 LO 3/2007**: • **Acoso SEXUAL** = comportamiento verbal o físico **de naturaleza sexual**. • **Acoso POR RAZÓN DE SEXO** = comportamiento realizado **en función del sexo** de una persona (sin contenido sexual, por ejemplo, hostigamiento por embarazo o permiso de maternidad/paternidad). Ambos se consideran **siempre discriminatorios** (Art. 7.3).",
    justificacion: "El artículo 7 de la LO 3/2007 define en su apartado 1 el acoso sexual (de naturaleza sexual) y en su apartado 2 el acoso por razón de sexo (en función del sexo de una persona)."
  },
  {
    id: "Q-W7-079",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo de Actuación frente al Acoso en las FAS y Unidad de Protección frente al Acoso (UPA)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas (desarrollado en cumplimiento del artículo 48 de la Ley Orgánica 3/2007 y de la Ley 39/2007), cuando la víctima u otra persona decide comunicar o denunciar una situación de acoso a través de la Unidad de Protección frente al Acoso (UPA), señale la afirmación CORRECTA:",
    opciones: [
      "Las Unidades de Protección frente al Acoso (UPA) ofrecen asesoramiento confidencial y asistencia a la víctima, y la comunicación a la UPA puede realizarse directamente SIN necesidad de seguir el conducto reglamentario; además, en qué plazo máximo desde la recepción de la denuncia debe remitirse al órgano competente: con carácter inmediato (en el plazo máximo de 5 días si requiere valoración preliminar), garantizando el sigilo y la prohibición de represalias.",
      "Es obligatorio pedir permiso por escrito al presunto acosador si éste es su jefe directo antes de acudir a la UPA.",
      "Las UPA tienen potestad sancionadora directa para imponer la separación del servicio.",
      "Solo existe una UPA en toda España ubicada en el Congreso de los Diputados."
    ],
    correcta: 0,
    referencia: "Orden DEF/482/2016 y Protocolo de Actuación frente al Acoso Sexual y por Razón de Sexo en las FAS",
    ubicacionTemario: "Bloque 2 > Tema 7 (Protocolo frente al Acoso y UPA) > Salto del conducto reglamentario, confidencialidad y asesoramiento de las UPA (Unidad Central en DIGENPER y UPA en cada Ejército y EMAD)",
    consejoAcademia: "¡Dato clave de examen sobre las **UPA**!: 1) **NO es necesario seguir el conducto reglamentario** para acudir a la UPA. 2) Existen UPA en la **Subsecretaría (DIGENPER)**, en el **EMAD** y en cada uno de los **3 Ejércitos** (MAPER ET, JEPER Armada, MAPER EA). 3) Las UPA asesoran y canalizan, pero **NO instruyen ni sancionan** (la instrucción corresponde a la vía disciplinaria o penal).",
    justificacion: "El Protocolo frente al acoso en las FAS permite acudir a las UPA directamente sin observar el conducto reglamentario, garantizando la confidencialidad y la indemnidad frente a represalias."
  },
  {
    id: "Q-W7-080",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar para la Igualdad entre Mujeres y Hombres en las FAS (Orden DEF/111/2019)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Quién preside el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas y qué órgano ejerce su Secretaría Permanente?",
    opciones: [
      "Lo preside la persona titular de la Subsecretaría de Defensa (SUBDEF), y su Secretaría Permanente recae en la División de Igualdad y Apoyo Social al Personal de la Dirección General de Personal (DIGENPER).",
      "Lo preside el Presidente del Senado y su Secretaría recae en el Mando de Operaciones (MOPS).",
      "Lo preside el Jefe de Estado Mayor de la Defensa (JEMAD).",
      "Es el mismo órgano que el Observatorio de la Vida Militar de las Cortes Generales."
    ],
    correcta: 0,
    referencia: "Orden DEF/111/2019 y Real Decreto 205/2024",
    ubicacionTemario: "Bloque 2 > Tema 6 y Tema 7 > Diferencia entre Observatorio Militar para la Igualdad (presidido por SUBDEF) vs Observatorio de la Vida Militar (adscrito a las Cortes Generales)",
    consejoAcademia: "¡No confundas los dos Observatorios!: • **Observatorio de la Vida Militar** (LO 9/2011) = **Cortes Generales** (9 miembros por 5 años). • **Observatorio Militar para la Igualdad** (Orden DEF/111/2019) = **Ministerio de Defensa**, presidido por la persona titular de la **Subsecretaría de Defensa (SUBDEF)**.",
    justificacion: "El Observatorio Militar para la Igualdad está adscrito a la Subsecretaría de Defensa y presidido por su titular, actuando como Secretaría Permanente la unidad de igualdad de la DIGENPER."
  },
  {
    id: "Q-W7-081",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Cómputo de Plazos y Registro Electrónico (Arts. 30 y 31)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 30 y 31 de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, señale la opción estrictamente CORRECTA sobre el cómputo de plazos y la presentación en registro electrónico en un día inhábil:",
    opciones: [
      "Siempre que por Ley o en el Derecho de la Unión Europea no se exprese otro cómputo, cuando los plazos se señalen por días se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos; y la presentación de documentos en un registro electrónico en un día inhábil se entenderá realizada en la primera hora del primer día hábil siguiente salvo que una norma permita expresamente la recepción en día inhábil.",
      "En la Ley 39/2015 los sábados son siempre días hábiles para todos los procedimientos administrativos.",
      "Los registros electrónicos cierran los fines de semana y no permiten presentar escritos.",
      "Cuando los plazos se fijan en meses, todos los meses se computan como de 30 días hábiles."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 30.2 y 31.2.b)",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Cómputo de plazos (Art. 30: Sábados inhábiles, cómputo de fecha a fecha en meses/años) y Registro Electrónico (Art. 31)",
    consejoAcademia: "Tres reglas de oro de los **Arts. 30 y 31 Ley 39/2015**: 1) Por defecto, los días son **HÁBILES** (excluyendo **sábados, domingos y festivos**). 2) Si el plazo es por **meses o años**, se computa de fecha a fecha a partir del día siguiente; si en el mes de vencimiento no hubiera día equivalente, **el plazo expira el último día del mes** (Art. 30.4). 3) Presentar en registro electrónico en día inhábil = se entiende presentado en la **primera hora del primer día hábil siguiente**.",
    justificacion: "Los artículos 30.2 y 31.2.b) de la Ley 39/2015 declaran inhábiles los sábados, domingos y festivos y disponen que la presentación en registro electrónico en día inhábil se entiende realizada en la primera hora del primer día hábil siguiente."
  },
  {
    id: "Q-W7-082",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Ampliación de Plazos vs Tramitación de Urgencia (Arts. 32 y 33)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los artículos 32 (Ampliación de plazos) y 33 (Tramitación de urgencia) de la Ley 39/2015, del Procedimiento Administrativo Común, y señale la proposición CORRECTA:",
    opciones: [
      "La Administración, salvo precepto en contrario, podrá conceder de oficio o a petición de los interesados una ampliación de los plazos establecidos que no exceda de la mitad de los mismos (siempre que se pida y se resuelva antes del vencimiento del plazo); mientras que cuando razones de interés público lo aconsejen se podrá acordar la aplicación de la tramitación de urgencia, por la cual se reducirán a la mitad los plazos establecidos para el procedimiento ordinario, salvo los relativos a la presentación de solicitudes y recursos. En ningún caso cabrá recurso contra ambos acuerdos.",
      "La tramitación de urgencia reduce también a la mitad el plazo de un mes para interponer el recurso de alzada.",
      "Contra el acuerdo que deniegue la ampliación de plazos cabe recurso de alzada en el plazo de 15 días.",
      "Se puede ampliar un plazo administrativo una vez que ya ha vencido hace una semana."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 32 y 33",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Ampliación de plazos (+mitad antes del vencimiento, Art. 32) vs Urgencia (-mitad salvo solicitudes y recursos, Art. 33)",
    consejoAcademia: "¡Doble trampa clásica de los **Arts. 32 y 33 Ley 39/2015**!: 1) En la **Urgencia (Art. 33)** los plazos se reducen a la mitad **SALVO los relativos a la presentación de SOLICITUDES y RECURSOS**. 2) Ni contra el acuerdo de **ampliación de plazos** ni contra el de **tramitación de urgencia** **CABE RECURSO ALGUNO**.",
    justificacion: "Los artículos 32 y 33 de la Ley 39/2015 regulan la ampliación (hasta la mitad antes del vencimiento) y la urgencia (reducción a la mitad salvo solicitudes y recursos), estableciendo en ambos casos que no cabe recurso contra dichos acuerdos."
  },
  {
    id: "Q-W7-083",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Plazo Máximo para Resolver y Notificar y Silencio Administrativo (Arts. 21 y 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 21 de la Ley 39/2015, del Procedimiento Administrativo Común, ¿cuál es el plazo máximo en el que debe notificarse la resolución expresa de un procedimiento administrativo?",
    opciones: [
      "El fijado por la norma reguladora del correspondiente procedimiento, que NO podrá exceder de 6 meses salvo que una norma con rango de Ley establezca uno mayor o así venga previsto en el Derecho de la Unión Europea; y cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será de 3 meses.",
      "El plazo por defecto cuando la norma calla es de 6 meses y el tope máximo reglamentario es de 2 años.",
      "El plazo máximo en todos los procedimientos de España es de 15 días hábiles.",
      "La Administración no está obligada a resolver cuando opera la prescripción o la caducidad."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículo 21.2 y 21.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Obligación de resolver (Art. 21: Tope general 6 meses salvo Ley/UE; plazo supletorio por defecto 3 meses)",
    consejoAcademia: "¡No caigas en el cruce del **Art. 21 Ley 39/2015**!: • **Tope máximo reglamentario** = **6 MESES** (solo superable por norma con **rango de Ley** o Derecho UE). • **Plazo supletorio (cuando la norma no fija plazo)** = **3 MESES**.",
    justificacion: "El artículo 21.2 y 21.3 de la Ley 39/2015 fija en 6 meses el plazo máximo salvo norma con rango de Ley o Derecho UE, y en 3 meses el plazo supletorio cuando la norma reguladora no fije plazo máximo."
  },
  {
    id: "Q-W7-084",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Excepciones al Silencio Estimatorio y Doble Silencio en Alzada (Art. 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 24.1 de la Ley 39/2015, en los procedimientos iniciados a solicitud del interesado el silencio tendrá efecto desestimatorio en el derecho de petición, servicio público, dominio público, medio ambiente, responsabilidad patrimonial e impugnación de actos y disposiciones. Sin embargo, ¿en qué caso el silencio en un recurso de alzada pasa a ser ESTIMATORIO (positivo)?",
    opciones: [
      "Cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud por el transcurso del plazo, siempre que no se refiera a las materias enumeradas en el párrafo segundo del artículo 24.1 (derecho de petición, dominio o servicio público, medio ambiente o responsabilidad patrimonial).",
      "El silencio en los recursos administrativos es estimatorio en el 100% de los casos desde el primer día.",
      "Cuando se trate de un recurso extraordinario de revisión interpuesto fuera de plazo.",
      "Cuando se solicite una indemnización millonaria por responsabilidad patrimonial del Estado."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículo 24.1 párrafo tercero",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Silencio Administrativo (Art. 24): La regla del Doble Silencio en el Recurso de Alzada (Silencio + Silencio = Estimatorio salvo excepciones)",
    consejoAcademia: "¡La famosa regla del **Doble Silencio en Alzada** (Art. 24.1.3º Ley 39/2015)!: Solicitud desestimada por **silencio** + Recurso de Alzada no resuelto en **3 meses** (**segundo silencio**) = **SILENCIO ESTIMATORIO (Positivo)**, salvo que verse sobre petición (Art. 29 CE), dominio/servicio público, medio ambiente o responsabilidad patrimonial.",
    justificacion: "El tercer párrafo del artículo 24.1 de la Ley 39/2015 establece que cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio de una solicitud, se entenderá estimado si llegado el plazo de resolución no se dicta resolución expresa, salvo en las materias exceptuadas."
  },
  {
    id: "Q-W7-085",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Práctica de las Notificaciones en Papel y Electrónicas (Arts. 40 a 43)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare las reglas de notificación de los artículos 40, 42 y 43 de la Ley 39/2015 y señale la opción 100% CORRECTA:",
    opciones: [
      "1) Toda notificación deberá ser cursada dentro del plazo de 10 días a partir de la fecha en que el acto haya sido dictado; 2) En las notificaciones en papel en el domicilio, si nadie se hiciera cargo, se repetirá el intento por una sola vez y en una hora distinta dentro de los 3 días siguientes (dejando al menos un margen de diferencia de 3 horas entre ambos intentos, siendo el primero antes de las 15:00h y el segundo después, o viceversa); y 3) Las notificaciones por medios electrónicos se entenderán rechazadas cuando hayan transcurrido 10 días naturales desde la puesta a disposición de la notificación sin que se acceda a su contenido.",
      "Las notificaciones electrónicas se entienden rechazadas a los 30 días hábiles desde su envío.",
      "En papel hay que repetir el intento cinco veces en el mismo día con 15 minutos de diferencia.",
      "En las notificaciones en papel puede hacerse cargo cualquier menor de 8 años que se encuentre en el portal."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 40.2, 42.2 y 43.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Notificaciones (Arts. 40-43: Cursar en 10 días; Papel = mayor de 14 años, 2º intento en 3 días con 3h de margen y corte 15:00h; Electrónica = rechazo a los 10 días naturales)",
    consejoAcademia: "Todos los números de las **Notificaciones (Arts. 40-43 Ley 39/2015)**: • Plazo para cursarla: **10 días hábiles** desde que se dictó el acto. • En domicilio (papel): receptor **mayor de 14 años**; si ausente, 2º intento dentro de los **3 días siguientes**, en **franja horaria distinta (corte 15:00 horas)** y con al menos **3 horas de diferencia**. • Electrónica: rechazada a los **10 DÍAS NATURALES** sin acceder a su contenido.",
    justificacion: "Los artículos 40.2, 42.2 y 43.2 de la Ley 39/2015 regulan el plazo de 10 días para cursar la notificación, las reglas del segundo intento en domicilio en los 3 días siguientes con margen de 3 horas y el rechazo electrónico a los 10 días naturales."
  },
  {
    id: "Q-W7-086",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Nulidad de Pleno Derecho vs Anulabilidad (Arts. 47 y 48)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 47 y 48 de la Ley 39/2015, del Procedimiento Administrativo Común, ¿cuál de los siguientes vicios determina la NULIDAD DE PLENO DERECHO (Art. 47.1) y no la simple anulabilidad (Art. 48)?",
    opciones: [
      "Los actos dictados por órgano manifiestamente incompetente por razón de la materia o del territorio, los que lesionen los derechos y libertades susceptibles de amparo constitucional, los que tengan un contenido imposible, los que sean constitutivos de infracción penal o se dicten como consecuencia de ésta, y los dictados prescindiendo total y absolutamente del procedimiento legalmente establecido o de las normas que contienen las reglas esenciales para la formación de la voluntad de los órganos colegiados.",
      "Los actos dictados por órgano incompetente por razón de la jerarquía (que son anulables y convalidables por el superior jerárquico según el artículo 52.3).",
      "La realización de actuaciones administrativas fuera del tiempo establecido cuando el término no sea esencial.",
      "Cualquier defecto de forma que no produzca indefensión al interesado."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 47, 48 y 52",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Nulidad de pleno derecho (Art. 47) vs Anulabilidad (Art. 48) y Convalidación (Art. 52)",
    consejoAcademia: "¡La trampa número 1 de los **Arts. 47, 48 y 52 Ley 39/2015**!: La incompetencia manifiesta por razón de la **MATERIA o del TERRITORIO** es **NULA DE PLENO DERECHO** (Art. 47.1.b, no convalidable); pero la incompetencia por razón de la **JERARQUÍA** es simplemente **ANULABLE** y **SÍ puede ser convalidada** por el órgano superior jerárquico (Art. 52.3).",
    justificacion: "El artículo 47.1 de la Ley 39/2015 tasa los supuestos de nulidad de pleno derecho (incluyendo la incompetencia manifiesta por razón de la materia o del territorio), mientras que la incompetencia jerárquica es anulable y convalidable conforme al artículo 52.3."
  },
  {
    id: "Q-W7-087",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Subsanación de Solicitudes vs Caducidad por Paralización Imputable al Interesado (Arts. 68 y 95)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los plazos de los artículos 68 (Subsanación y mejora de la solicitud) y 95 (Caducidad en procedimientos iniciados a solicitud del interesado) de la Ley 39/2015 y señale la opción CORRECTA:",
    opciones: [
      "1) Si la solicitud de iniciación no reúne los requisitos exigidos, se requerirá al interesado para que en un plazo de 10 días subsane la falta (ampliable prudencialmente hasta en 5 días siempre que no se trate de procedimientos selectivos o de concurrencia competitiva); y 2) En los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos 3 meses, se producirá la caducidad del procedimiento.",
      "La subsanación de la solicitud tiene un plazo de 3 meses y la caducidad por paralización se produce a los 10 días.",
      "En las oposiciones y procesos selectivos se puede ampliar el plazo de subsanación en 15 días adicionales.",
      "La caducidad por sí sola produce siempre la prescripción de las acciones del particular."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 68 y 95",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Subsanación de solicitudes (Art. 68: 10 días + 5 días salvo procesos selectivos) vs Caducidad por inactividad del interesado (Art. 95: 3 meses)",
    consejoAcademia: "Memoriza este par de plazos de la **Ley 39/2015**: • **Subsanación de solicitud (Art. 68)** = **10 días hábiles** (ampliables hasta en **5 días**, **SALVO en procedimientos selectivos o de concurrencia competitiva**). • **Caducidad por paralización imputable al interesado (Art. 95)** = **3 MESES**.",
    justificacion: "Los artículos 68 y 95 de la Ley 39/2015 fijan el plazo de 10 días (ampliable hasta 5 salvo concurrencia competitiva) para subsanar la solicitud y el plazo de 3 meses de inactividad del interesado para declarar la caducidad."
  },
  {
    id: "Q-W7-088",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Informes y Trámite de Audiencia (Arts. 80 y 82)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 80 y 82 de la Ley 39/2015, del Procedimiento Administrativo Común, ¿qué carácter tienen los informes por regla general, en qué plazo deben evacuarse y cuál es la horquilla de plazo del trámite de audiencia a los interesados?",
    opciones: [
      "Salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes, y serán evacuados en el plazo de 10 días; por su parte, en el trámite de audiencia los interesados podrán alegar y presentar los documentos y justificaciones que estimen pertinentes en un plazo no inferior a 10 días ni superior a 15.",
      "Por regla general todos los informes administrativos son preceptivos y vinculantes, y se emiten en 2 meses.",
      "El trámite de audiencia dura entre 1 y 3 días naturales.",
      "Los informes deben emitirse siempre de forma verbal por teléfono."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 80 y 82",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Instrucción del procedimiento: Prueba (10-30 días + 10 extraordinario), Informes (Art. 80: Facultativos y no vinculantes, 10 días) y Audiencia (Art. 82: 10 a 15 días)",
    consejoAcademia: "Los **3 plazos de la Fase de Instrucción (Arts. 77 a 82 Ley 39/2015)**: 1) **Prueba (Art. 77)**: período ordinario de **10 a 30 días** (+ extraordinario de hasta **10 días**). 2) **Informes (Art. 80)**: por defecto **facultativos y no vinculantes**, plazo de **10 días**. 3) **Trámite de Audiencia (Art. 82)**: no inferior a **10 días** ni superior a **15 días**.",
    justificacion: "El artículo 80 de la Ley 39/2015 establece que los informes serán por defecto facultativos y no vinculantes y se evacuarán en 10 días, y el artículo 82 fija el plazo del trámite de audiencia entre 10 y 15 días."
  },
  {
    id: "Q-W7-089",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Tramitación Simplificada del Procedimiento (Art. 96)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 96.6 de la Ley 39/2015, salvo que reste menos para su tramitación ordinaria, los procedimientos administrativos tramitados de manera SIMPLIFICADA deberán ser resueltos en el plazo de:",
    opciones: [
      "30 días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada del procedimiento.",
      "6 meses prorrogables por otros 6 meses.",
      "3 meses desde la fecha del registro de entrada.",
      "48 horas naturales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículo 96.6",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Tramitación Simplificada (Art. 96: Resolución en 30 días y alegaciones al inicio en 5 días)",
    consejoAcademia: "En la **Tramitación Simplificada (Art. 96 Ley 39/2015)** quédate con dos números: • Plazo para resolver: **30 DÍAS** desde el siguiente a la notificación del acuerdo de tramitación simplificada. • Plazo de alegaciones formuladas al inicio del procedimiento: **5 DÍAS** (Art. 96.6.c).",
    justificacion: "El artículo 96.6 de la Ley 39/2015 establece que los procedimientos administrativos tramitados de manera simplificada deberán ser resueltos en treinta días."
  },
  {
    id: "Q-W7-090",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Revisión de Oficio y Declaración de Lesividad (Arts. 106 y 107)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Compare los plazos de los artículos 106 (Revisión de disposiciones y actos nulos) y 107 (Declaración de lesividad de actos anulables) de la Ley 39/2015 y señale la afirmación CORRECTA:",
    opciones: [
      "1) En la revisión de oficio de actos NULOS (Art. 106), que puede iniciarse en cualquier momento previo dictamen favorable del Consejo de Estado, si el procedimiento se hubiera iniciado de oficio el transcurso del plazo de 6 meses desde su inicio sin dictarse resolución producirá la caducidad del mismo (y si se inició a solicitud de interesado, se entenderá desestimado por silencio); y 2) En la declaración de lesividad de actos ANULABLES favorables (Art. 107), no podrá adoptarse una vez transcurridos 4 años desde que se dictó el acto administrativo, y el procedimiento caducará si transcurre el plazo de 6 meses desde su iniciación sin haberse declarado la lesividad.",
      "La declaración de lesividad puede adoptarse hasta los 15 años desde que se dictó el acto.",
      "La revisión de oficio de actos nulos caduca a los 10 días de su inicio.",
      "Para la declaración de lesividad es preceptivo el dictamen vinculante del Tribunal Constitucional."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 106 y 107",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Revisión de actos en vía administrativa: Revisión de oficio de Nulos (Art. 106: en cualquier momento, caduca a los 6 meses) vs Declaración de Lesividad de Anulables (Art. 107: máx. 4 años desde el acto, caduca a los 6 meses)",
    consejoAcademia: "¡Cruce de élite entre **Art. 106 (Nulos)** y **Art. 107 (Anulables)**!: • **Actos NULOS (Art. 106)** = revisión **en cualquier momento** (imprescriptible) con **dictamen favorable del Consejo de Estado**; el expediente caduca a los **6 meses**. • **Actos ANULABLES favorables (Art. 107)** = **Declaración de Lesividad** (previa a impugnarlos ante la Jurisdicción Contencioso-Administrativa) dentro de los **4 AÑOS desde que se dictó el acto**; el expediente también caduca a los **6 meses**.",
    justificacion: "Los artículos 106.5 y 107.2 y 107.3 de la Ley 39/2015 fijan en 6 meses la caducidad de ambos procedimientos y en 4 años el límite temporal desde que se dictó el acto para adoptar la declaración de lesividad."
  },
  {
    id: "Q-W7-091",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Cuadro Completo de Recursos Administrativos: Alzada, Reposición y Extraordinario de Revisión (Arts. 121 a 126)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el cruce completo de plazos de interposición y de resolución de los tres recursos administrativos regulados en la Ley 39/2015 (Alzada, Potestativo de Reposición y Extraordinario de Revisión) y señale la opción 100% CORRECTA:",
    opciones: [
      "1) Recurso de ALZADA (contra actos que NO agotan la vía administrativa): Interposición en 1 mes (si el acto es expreso; si no lo fuera, en cualquier momento a partir del día siguiente a aquel en que se produzcan los efectos del silencio) y Resolución en 3 meses; 2) Recurso POTESTATIVO DE REPOSICIÓN (contra actos que SÍ agotan la vía administrativa): Interposición en 1 mes (si es expreso; o en cualquier momento si es presunto) y Resolución en 1 mes; y 3) Recurso EXTRAORDINARIO DE REVISIÓN (contra actos firmes en vía administrativa): Interposición en 4 años (causa 1ª: error de hecho resultante de los propios documentos del expediente) o en 3 meses (causas 2ª, 3ª y 4ª: documentos esenciales posteriores o declarados falsos/prevaricación por sentencia firme) y Resolución en 3 meses.",
      "Tanto el recurso de alzada como el de reposición se resuelven en el plazo de 6 meses.",
      "Cuando el acto no es expreso (silencio administrativo), el plazo para interponer alzada o reposición es de 3 meses improrrogables.",
      "Contra la resolución de un recurso de reposición se puede volver a interponer un segundo recurso de reposición."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 121 a 126",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Tabla Maestra de Recursos Administrativos (Arts. 121-126: Alzada [1m / 3m], Reposición [1m / 1m] y Extraordinario de Revisión [4a o 3m / 3m])",
    consejoAcademia: "¡Esta pregunta resume todo el Capítulo II del Título V de la Ley 39/2015!: • **Alzada** = Interposición **1 mes** (expreso) / **en cualquier momento** (presunto) -> Resolución **3 meses**. • **Reposición** = Interposición **1 mes** (expreso) / **en cualquier momento** (presunto) -> Resolución **1 mes**. • **Extraordinario de Revisión** = Interposición **4 años** (error de hecho en documentos del expediente) o **3 meses** (documentos aparecidos o sentencia firme por falsedad/cohecho/prevaricación) -> Resolución **3 meses**.",
    justificacion: "Los artículos 122, 124, 125 y 126 de la Ley 39/2015 establecen exactamente dichos plazos de interposición y resolución para los tres recursos administrativos."
  },
  {
    id: "Q-W7-092",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Cruce Maestro: Recurso de Alzada en Ley 39/2015 LPACAP vs Recurso de Alzada en LO 8/2014 Disciplinario Militar",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare el plazo máximo de RESOLUCIÓN de un recurso de alzada en el procedimiento administrativo común (Ley 39/2015, art. 122.2) frente al plazo máximo de RESOLUCIÓN de un recurso disciplinario militar (Ley Orgánica 8/2014, art. 69.2), y señale la diferencia exacta:",
    opciones: [
      "En la Ley 39/2015 (procedimiento administrativo común) el plazo máximo para dictar y notificar la resolución del recurso de alzada es de 3 MESES; mientras que en la Ley Orgánica 8/2014 (Régimen Disciplinario de las Fuerzas Armadas) el órgano competente deberá resolver el recurso en el plazo máximo de 2 MESES.",
      "En ambas leyes el plazo para resolver es de 15 días hábiles.",
      "En la Ley 39/2015 es de 1 mes y en la LO 8/2014 es de 6 meses.",
      "En ninguna de las dos leyes existe plazo para resolver un recurso de alzada."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Artículo 122.2 y Ley Orgánica 8/2014, Artículo 69.2",
    ubicacionTemario: "Bloque 2 > Tema 4 y Tema 8 > Comparativa de Oro: Resolución del Recurso en Ley 39/2015 (3 meses en Alzada / 1 mes en Reposición) vs LO 8/2014 Disciplinario (2 meses)",
    consejoAcademia: "¡Apunta este cruce en rojo fuego!: Para **interponer** el recurso, en ambas leyes es **1 MES**. Pero para **RESOLVER** el recurso: en la **Ley 39/2015 (Alzada)** son **3 MESES** (y en Reposición **1 MES**), mientras que en el **Régimen Disciplinario Militar (LO 8/2014, Art. 69.2)** son **2 MESES**.",
    justificacion: "El artículo 122.2 de la Ley 39/2015 fija 3 meses para resolver la alzada administrativa común, mientras que el artículo 69.2 de la LO 8/2014 fija 2 meses para resolver los recursos en vía disciplinaria militar."
  },
  {
    id: "Q-W7-093",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Suspensión de la Ejecución del Acto Impugnado (Art. 117)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 117 de la Ley 39/2015, la interposición de cualquier recurso, excepto en los casos en que una disposición establezca lo contrario, NO suspenderá la ejecución del acto impugnado. No obstante, si el recurrente solicita la suspensión de la ejecución del acto impugnado, ¿qué ocurre si transcurre un plazo desde que la solicitud de suspensión tuvo entrada en el registro electrónico del órgano competente para decidir sobre la misma sin que éste haya dictado y notificado resolución expresa al respecto?",
    opciones: [
      "La ejecución del acto impugnado se entenderá SUSPENDIDA si transcurre 1 mes desde que la solicitud de suspensión haya tenido entrada en el registro electrónico de la Administración u Organismo competente para decidir sobre la misma sin que se haya dictado y notificado resolución expresa.",
      "Se entenderá denegada la suspensión a los 3 meses.",
      "La suspensión solo se concede si transcurren 2 años.",
      "Nunca puede suspenderse un acto administrativo aunque se solicite expresamente."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículo 117.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Suspensión de la ejecución del acto recurrido (Art. 117.3: Silencio POSITIVO al transcurrir 1 mes sin resolver sobre la solicitud de suspensión)",
    consejoAcademia: "¡Pregunta trampa de nivel experto (Art. 117.3 Ley 39/2015)!: Aunque el silencio en los recursos es negativo (salvo el doble silencio en alzada), el silencio respecto de la **solicitud de SUSPENSIÓN de la ejecución del acto recurrido** es **POSITIVO (se entiende suspendida la ejecución)** si transcurre **1 MES** sin dictar y notificar resolución sobre dicha suspensión.",
    justificacion: "El artículo 117.3 de la Ley 39/2015 establece que la ejecución del acto impugnado se entenderá suspendida si transcurre un mes desde que la solicitud de suspensión haya tenido entrada en el registro electrónico competente sin que se haya dictado y notificado resolución expresa."
  },
  {
    id: "Q-W7-094",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Medios de Ejecución Forzosa (Art. 100)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 100 de la Ley 39/2015, la ejecución forzosa por las Administraciones Públicas se efectuará, respetando siempre el principio de proporcionalidad, por los siguientes cuatro medios (¿cuál de ellos es el que se utiliza con carácter general si fueren varios los medios admisibles?):",
    opciones: [
      "Los cuatro medios son: 1) Apremio sobre el patrimonio, 2) Ejecución subsidiaria, 3) Multa coercitiva y 4) Compulsión sobre las personas; y si fueren varios los medios de ejecución admisibles se elegirá el menos restrictivo de la libertad individual.",
      "El único medio de ejecución forzosa es la prisión provisional dictada por el Alcalde.",
      "Siempre se aplicará en primer lugar la compulsión física sobre las personas para cobrar deudas tributarias.",
      "La multa coercitiva es una sanción penal que impide ejecutar el acto administrativo."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículo 100",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Ejecución forzosa (Art. 100: Apremio sobre el patrimonio, Ejecución subsidiaria, Multa coercitiva y Compulsión sobre las personas)",
    consejoAcademia: "Los **4 medios de ejecución forzosa (Art. 100 Ley 39/2015)**: 1) **Apremio sobre el patrimonio** (obligaciones dinerarias), 2) **Ejecución subsidiaria** (actos no personalísimos que puede realizar un sujeto distinto a costa del obligado), 3) **Multa coercitiva** (independiente de las sanciones y compatible con ellas) y 4) **Compulsión sobre las personas** (obligaciones personalísimas de no hacer o soportar, autorizada por ley). Si caben varios, se elige **el menos restrictivo de la libertad individual**.",
    justificacion: "El artículo 100 de la Ley 39/2015 enumera los cuatro medios de ejecución forzosa y ordena elegir el menos restrictivo de la libertad individual cuando fueren varios los admisibles."
  },
  {
    id: "Q-W7-095",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Expediente Personal e Informes Personales de Calificación IPEC (Arts. 80 y 81)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 81 de la Ley 39/2007, de la carrera militar, ¿qué es el Informe Personal de Calificación (IPEC) y qué peso tiene en el baremo del proceso selectivo de acceso a la condición de militar de carrera de Tropa y Marinería (Permanencia)?",
    opciones: [
      "Es la valoración objetiva de unos conceptos predeterminados que permitan apreciar las cualidades, méritos, aptitudes, competencia y forma de actuación profesional del militar; y en el baremo oficial de concurso para la Permanencia (Orden DEF/1341/2017) los últimos 5 IPEC ponderan hasta un máximo de 25 puntos sobre los 100 de la fase de concurso (multiplicando la nota media por 2,5).",
      "Es una encuesta anónima que rellenan los familiares del militar y vale 5 puntos.",
      "Es un informe médico secreto al que el interesado no tiene acceso en ningún aspecto.",
      "Solo se realiza a los Oficiales Generales cuando pasan al retiro."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Artículo 81 y Orden DEF/1341/2017, Anexo II",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Evaluaciones e IPEC (Art. 81) y su peso en el Baremo de Permanencia (25 puntos sobre 100)",
    consejoAcademia: "Recuerda la definición del **Art. 81 Ley 39/2007**: El **IPEC** es la valoración objetiva de las cualidades, méritos, aptitudes, competencia y forma de actuación profesional del militar. En el baremo de **Permanencia (Orden DEF/1341/2017)** vale hasta **25 puntos** (`Media de los 5 últimos IPEC × 2,5`).",
    justificacion: "El artículo 81 de la Ley 39/2007 define el IPEC y el Anexo II de la Orden DEF/1341/2017 le asigna hasta 25 puntos en la fase de concurso."
  },
  {
    id: "Q-W7-096",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Insuficiencia de Facultades Profesionales vs Condiciones Psicofísicas (Arts. 120 y 121)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a los artículos 120 y 121 de la Ley 39/2007, de la carrera militar, cuando a un militar se le incoa un expediente para determinar si existe insuficiencia de condiciones psicofísicas o insuficiencia de facultades profesionales, ¿qué ocurre con su destino tras transcurrir un determinado plazo en suspensión de funciones o cese?",
    opciones: [
      "Al iniciarse el expediente para determinar la insuficiencia de condiciones psicofísicas se acuerda el cese en el destino si la baja médica o limitación persiste en los términos legales, y el expediente es resuelto por el Ministro de Defensa (o Subsecretario por delegación) previo dictamen de los órganos médico-periciales de la Sanidad Militar.",
      "El expediente lo resuelve el Alcalde del municipio sin intervención de la Sanidad Militar.",
      "El militar pierde automáticamente la nacionalidad española al incoarse el expediente.",
      "No cabe recurso contencioso-administrativo contra la resolución final del expediente."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículos 120 y 121",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Expedientes de insuficiencia de facultades profesionales (Art. 120) e insuficiencia de condiciones psicofísicas (Art. 121)",
    consejoAcademia: "En los expedientes de los **Arts. 120 y 121 de la Ley 39/2007** recuerda que la resolución que implique el pase a retiro o la resolución del compromiso corresponde al **Ministro de Defensa** (previo informe del órgano médico pericial en el psicofísico o del Consejo Superior del Ejército correspondiente en el de facultades profesionales).",
    justificacion: "Los artículos 120 y 121 de la Ley 39/2007 regulan los expedientes de insuficiencia de facultades profesionales y de condiciones psicofísicas, cuya resolución corresponde al Ministro de Defensa."
  },
  {
    id: "Q-W7-097",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Estructura de Títulos de las RROO",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "El Real Decreto 96/2009, por el que se aprueban las Reales Ordenanzas para las Fuerzas Armadas, consta de 129 artículos. ¿En cuántos Títulos se estructura y cómo se denominan?",
    opciones: [
      "Se estructura en un Título Preliminar («Disposiciones generales») y 5 Títulos numerados: Título I («Del militar»), Título II («De la disciplina»), Título III («De la acción de mando»), Título IV («De las operaciones») y Título V («De las demás funciones»).",
      "Se estructura en 10 Títulos igual que la Constitución Española.",
      "Consta de un único capítulo sin división en títulos.",
      "Se divide en tres libros dedicados a Tierra, Mar y Aire."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, Reales Ordenanzas para las FAS",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > Estructura de las RROO: Título Preliminar + 5 Títulos (129 artículos)",
    consejoAcademia: "¡Estructura de las **RROO (RD 96/2009)** explicada en el Vídeo T13!: **129 artículos** repartidos en **Título Preliminar + 5 Títulos**: **I. Del militar**, **II. De la disciplina**, **III. De la acción de mando**, **IV. De las operaciones** (Combate, Paz y Seguridad/Bienestar) y **V. De las demás funciones** (Técnicas, Logísticas, Administrativas y Docentes).",
    justificacion: "El Real Decreto 96/2009 estructura sus 129 artículos en un Título Preliminar y cinco Títulos numerados."
  },
  {
    id: "Q-W7-098",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Libertad de Desplazamiento y Residencia (Arts. 9 y 23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 9 y 23 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, ¿qué obligaciones tiene el militar respecto a su lugar de residencia y a sus desplazamientos al extranjero?",
    opciones: [
      "El lugar de residencia del militar será el del municipio de su destino, aunque también podrá ser uno distinto siempre que se asegure el adecuado cumplimiento de sus obligaciones profesionales en los términos y con las condiciones que se establezcan por orden del Ministro de Defensa; y para desplazarse al extranjero deberá comunicarlo previamente (o contar con autorización en determinadas situaciones operativas o países) conforme a la normativa del Ministerio de Defensa.",
      "El militar tiene prohibido vivir fuera del acuartelamiento hasta cumplir los 58 años.",
      "El militar puede fijar su residencia habitual en otro continente mientras está destinado en una Brigada en España.",
      "No existe obligación de comunicar al mando el domicilio ni el teléfono de localización."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de derechos y deberes de los miembros de las FAS, Artículos 9 y 23",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Libertad de desplazamiento y circulación (Art. 9) y Deber de residencia y domicilio (Art. 23)",
    consejoAcademia: "En los **Arts. 9 y 23 LO 9/2011** recuerda: 1) El militar tiene la obligación de comunicar en su unidad el **lugar de su domicilio habitual o temporal** y los datos que permitan su **localización** (Art. 23.2). 2) Puede residir en municipio distinto al del destino siempre que se asegure el adecuado cumplimiento de sus obligaciones.",
    justificacion: "Los artículos 9 y 23 de la LO 9/2011 regulan la libertad de desplazamiento y la obligación de residencia en el municipio de destino o en otro distinto que asegure el cumplimiento de sus obligaciones."
  },
  {
    id: "Q-W7-099",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "Conciliación y Permisos en las FAS - Reducción de Jornada por Guarda Legal (Orden DEF/253/2015)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Orden DEF/253/2015, por la que se regula el régimen de vacaciones, permisos, reducciones de jornada y licencias de los miembros de las Fuerzas Armadas (y sus actualizaciones), el militar que por razones de guarda legal tenga a su cuidado directo algún menor de 12 años, persona mayor que requiera especial dedicación o persona con discapacidad que no desempeñe actividad retribuida:",
    opciones: [
      "Tendrá derecho a una reducción de la jornada de trabajo diaria, con la disminución proporcional de sus retribuciones, así como a la exención de la realización de guardias, servicios, maniobras o actividades análogas que interfieran con el disfrute de la reducción de jornada cuando las necesidades del servicio lo permitan.",
      "Percibirá el 150% del sueldo íntegro aunque reduzca su jornada a la mitad.",
      "Solo se concede para hijos menores de 3 años de edad.",
      "Pierde la condición de militar profesional si solicita una reducción de jornada."
    ],
    correcta: 0,
    referencia: "Orden DEF/253/2015 y Ley Orgánica 9/2011, Artículo 22",
    ubicacionTemario: "Bloque 2 > Tema 6 (Igualdad y Conciliación en las FAS) > Reducción de jornada por guarda legal de menor de 12 años y exención de guardias/maniobras",
    consejoAcademia: "¡Edad clave de examen en conciliación militar (**Orden DEF/253/2015**)!: La reducción de jornada por guarda legal de hijo menor abarca hasta los **12 AÑOS de edad** (con disminución proporcional de retribuciones). Y recuerda el permiso por nacimiento/adopción equiparado a **16 semanas** intransferibles para ambos progenitores.",
    justificacion: "La normativa de conciliación en las Fuerzas Armadas (Orden DEF/253/2015) reconoce el derecho a la reducción de jornada por guarda legal de menor de 12 años con disminución proporcional de haberes."
  },
  {
    id: "Q-W7-100",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Qué Actos Ponen Fin a la Vía Administrativa (Art. 114)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 114 de la Ley 39/2015, del Procedimiento Administrativo Común, ¿cuáles de los siguientes actos PONEN FIN a la vía administrativa en la Administración General del Estado (por lo que contra ellos cabe recurso potestativo de reposición o directamente recurso contencioso-administrativo, pero NO recurso de alzada)?",
    opciones: [
      "Las resoluciones de los recursos de alzada, las resoluciones de los órganos administrativos que carezcan de superior jerárquico (salvo que una Ley establezca lo contrario), los acuerdos, pactos o convenios que tengan la consideración de finalizadores del procedimiento, la resolución administrativa de los procedimientos de responsabilidad patrimonial, y en el ámbito estatal los actos y resoluciones de los Ministros y los Secretarios de Estado, así como los de los Directores Generales o nivel superior en materia de personal.",
      "Únicamente las cartas informativas firmadas por un Jefe de Negociado.",
      "Los actos de trámite no cualificados que impulsan el procedimiento.",
      "Contra la resolución de un recurso de alzada cabe siempre un segundo recurso de alzada ante el Rey."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículo 114",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Fin de la vía administrativa (Art. 114: Resoluciones de alzada, órganos sin superior jerárquico, responsabilidad patrimonial, Ministros/Secretarios de Estado y Directores Generales en materia de personal)",
    consejoAcademia: "¡Memoriza la lista del **Art. 114 Ley 39/2015** porque decide si toca **Alzada** o **Reposición**!: Ponen fin a la vía administrativa: 1) Las **resoluciones de los recursos de alzada**, 2) Órganos **sin superior jerárquico**, 3) Resoluciones de **responsabilidad patrimonial** y sancionadoras cuando así se prevea, 4) En la AGE: **Consejo de Ministros, Comisiones Delegadas, Ministros, Secretarios de Estado** y **Directores Generales (o superiores) EN MATERIA DE PERSONAL**.",
    justificacion: "El artículo 114.1 y 114.2 de la Ley 39/2015 enumera los actos que ponen fin a la vía administrativa tanto con carácter general como en el ámbito de la Administración General del Estado."
  },

  // =========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL Y OO.II. (B3-T01 A B3-T07) — Q-W7-101 A Q-W7-200
  // =========================================================================
  {
    id: "Q-W7-101",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional - Definición de Seguridad Nacional (Art. 3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 3 de la Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, ¿cómo se define legalmente la «Seguridad Nacional»?",
    opciones: [
      "Es la acción del Estado dirigida a proteger la libertad, los derechos y bienestar de los ciudadanos, a garantizar la defensa de España y sus principios y valores constitucionales, así como a contribuir junto a nuestros socios y aliados a la seguridad internacional en el cumplimiento de los compromisos asumidos.",
      "Es la actuación exclusiva de las empresas de seguridad privada en centros comerciales.",
      "Es la competencia exclusiva de los Ayuntamientos para regular el tráfico urbano.",
      "Es un estado excepcional que suspende la Constitución durante cinco años."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, Artículo 3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Ley 36/2015 de Seguridad Nacional y ESN 2021) > Definición legal de Seguridad Nacional (Art. 3: Los 3 pilares: Ciudadanos + Defensa de España + Seguridad Internacional)",
    consejoAcademia: "La definición del **Art. 3 Ley 36/2015** tiene **3 verbos clave**: 1) **Proteger** la libertad, derechos y bienestar de los ciudadanos, 2) **Garantizar** la defensa de España y sus principios y valores constitucionales, y 3) **Contribuir** junto a nuestros socios y aliados a la seguridad internacional.",
    justificacion: "El artículo 3 de la Ley 36/2015 define la Seguridad Nacional a través de esos tres ejes fundamentales."
  },
  {
    id: "Q-W7-102",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional - Periodicidad de la Estrategia de Seguridad Nacional (Art. 4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 4 de la Ley 36/2015, de Seguridad Nacional, ¿quién impulsa la elaboración de la Estrategia de Seguridad Nacional (ESN), mediante qué norma se aprueba y con qué periodicidad se revisará?",
    opciones: [
      "Se elabora a iniciativa del Presidente del Gobierno, quien la somete a la aprobación del Gobierno mediante Real Decreto, y se revisará cada 5 años o cuando lo aconsejen las circunstancias cambiantes del entorno estratégico.",
      "Se aprueba por Ley Orgánica de las Cortes Generales cada 10 años.",
      "La aprueba el JEMAD mediante Instrucción cada 6 meses.",
      "No se revisa nunca una vez publicada en el BOE."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, Artículo 4.3 y 4.4",
    ubicacionTemario: "Bloque 3 > Tema 1 (Ley 36/2015 de Seguridad Nacional y ESN 2021) > La Estrategia de Seguridad Nacional (Art. 4: Iniciativa del Presidente, aprobación por RD del Consejo de Ministros, revisión cada 5 años)",
    consejoAcademia: "Datos exactos del **Art. 4 Ley 36/2015**: • Iniciativa: **Presidente del Gobierno**. • Aprobación: **Real Decreto del Consejo de Ministros** (la vigente es la **ESN 2021**, aprobada por **RD 1150/2021, de 28 de diciembre**). • Revisión: **cada 5 AÑOS** (o antes si lo aconsejan las circunstancias).",
    justificacion: "El artículo 4 de la Ley 36/2015 establece que la ESN se impulsa por el Presidente del Gobierno, se aprueba por Real Decreto del Consejo de Ministros y se revisa cada cinco años o cuando lo aconsejen las circunstancias."
  },
  {
    id: "Q-W7-103",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional - Situación de Interés para la Seguridad Nacional (Arts. 22 a 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 22 a 24 de la Ley 36/2015, de Seguridad Nacional, ¿qué es la «Situación de Interés para la Seguridad Nacional», quién la declara y mediante qué instrumento jurídico, y puede implicar la suspensión de derechos fundamentales?",
    opciones: [
      "Es aquella en la que, por la gravedad de sus efectos y la dimensión, urgencia y transversalidad de las medidas para su resolución, requiere de la coordinación reforzada de las autoridades competentes bajo la dirección del Gobierno; la declara el Presidente del Gobierno mediante Real Decreto, y en ningún caso implica la suspensión de los derechos fundamentales y libertades públicas de los ciudadanos.",
      "La declara el Ministro del Interior por Orden Ministerial y suspende todos los derechos del Título I de la Constitución.",
      "Es sinónimo del estado de sitio del artículo 116.4 de la Constitución y requiere mayoría absoluta del Congreso.",
      "La declara el Rey sin refrendo por un plazo máximo de 48 horas."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, Artículos 23 y 24",
    ubicacionTemario: "Bloque 3 > Tema 1 (Ley 36/2015 de Seguridad Nacional) > Situación de Interés para la Seguridad Nacional (Arts. 22-24: Declarada por Real Decreto del Presidente del Gobierno, sin suspensión de derechos fundamentales)",
    consejoAcademia: "¡Cuidado con esta trampa que ha caído varias veces en examen oficial!: La **Situación de Interés para la Seguridad Nacional** (Art. 24 Ley 36/2015) la declara el **PRESIDENTE DEL GOBIERNO mediante Real Decreto** (no el Consejo de Ministros) y **NO supone en ningún caso la suspensión de derechos fundamentales** (no es ninguno de los estados del Art. 116 CE).",
    justificacion: "Los artículos 23.3 y 24.1 de la Ley 36/2015 disponen que la Situación de Interés para la Seguridad Nacional la declara el Presidente del Gobierno por Real Decreto y no implica suspensión de derechos fundamentales."
  },
  {
    id: "Q-W7-104",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional - Consejo de Seguridad Nacional vs Departamento de Seguridad Nacional (Arts. 20 y 21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura del Sistema de Seguridad Nacional (Ley 36/2015), ¿qué es el Consejo de Seguridad Nacional (CSN), qué condición tiene dentro del Gobierno y quién actúa como su Secretaría Técnica y órgano de trabajo permanente?",
    opciones: [
      "El Consejo de Seguridad Nacional tiene la condición de Comisión Delegada del Gobierno para la Seguridad Nacional y asiste al Presidente del Gobierno en la dirección de la Política de Seguridad Nacional; y el Departamento de Seguridad Nacional (DSN, integrado en el Gabinete de la Presidencia del Gobierno) ejerce las funciones de Secretaría Técnica y órgano de trabajo permanente del Consejo de Seguridad Nacional.",
      "El Consejo de Seguridad Nacional depende del Senado y su Secretaría Técnica la ejerce la DIGEREM.",
      "El Departamento de Seguridad Nacional depende del Ayuntamiento de Madrid.",
      "El Consejo de Seguridad Nacional solo se reúne una vez cada diez años."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, Artículos 20 y 21",
    ubicacionTemario: "Bloque 3 > Tema 1 (Ley 36/2015 de Seguridad Nacional) > Consejo de Seguridad Nacional (Comisión Delegada del Gobierno, Art. 21) y Departamento de Seguridad Nacional (DSN, Secretaría Técnica, Art. 20.3)",
    consejoAcademia: "Dos datos de examen directo sobre el **Sistema de Seguridad Nacional (Ley 36/2015)**: 1) El **Consejo de Seguridad Nacional (CSN)** es una **Comisión Delegada del Gobierno** (presidida por el Presidente del Gobierno, salvo cuando asista el Rey, en cuyo caso lo presidirá Su Majestad). 2) El **Departamento de Seguridad Nacional (DSN)** es su **Secretaría Técnica y órgano de trabajo permanente**.",
    justificacion: "El artículo 21 de la Ley 36/2015 configura al CSN como Comisión Delegada del Gobierno para la Seguridad Nacional y el artículo 20.3 atribuye al DSN su Secretaría Técnica y órgano de trabajo permanente."
  },
  {
    id: "Q-W7-105",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021) - Los 3 Ejes Estratégicos",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "La Estrategia de Seguridad Nacional 2021 (aprobada por el Real Decreto 1150/2021, de 28 de diciembre, bajo el lema «Un proyecto compartido») articula la acción del Estado en torno a tres grandes ejes o vectores de transformación. ¿Cuáles son?",
    opciones: [
      "Proteger, Promover y Participar (una España que protege la vida y derechos de sus ciudadanos, promueve su prosperidad y modelo de convivencia, y participa en la preservación de la paz y seguridad internacionales).",
      "Atacar, Replegar y Aislar.",
      "Tierra, Mar y Aire.",
      "Recaudar, Sancionar y Archivar."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021, Estrategia de Seguridad Nacional 2021, Capítulo 4",
    ubicacionTemario: "Bloque 3 > Tema 1 (ESN 2021) > Las 3 «P» de la Estrategia de Seguridad Nacional 2021: Proteger, Promover y Participar + 33 líneas de acción",
    consejoAcademia: "Regla mnemotécnica de las **3 «P» de la ESN 2021**: **PROTEGER** (seguridad y resiliencia), **PROMOVER** (prosperidad y bienestar) y **PARTICIPAR** (seguridad internacional y autonomía estratégica).",
    justificacion: "La Estrategia de Seguridad Nacional 2021 estructura sus objetivos y sus 33 líneas de acción en los tres ejes: Proteger, Promover y Participar."
  },
  {
    id: "Q-W7-106",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01(B) Empleo de las Fuerzas Armadas - Los 5 Dominios o Ámbitos de Operación",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Publicación Doctrinal Conjunta PDC-01 (Doctrina para el Empleo de las Fuerzas Armadas, elaborada por el CCDC del CESEDEN), las operaciones militares multidominio se desarrollan de forma sincronizada a través de cinco ámbitos de operación (dominios) y tres entornos transversales. ¿Cuáles son los 5 ámbitos de operación?",
    opciones: [
      "Terrestre, Marítimo, Aeroespacial (Aéreo y Espacial) y Ciberespacial —o los 5 dominios OTAN: Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial—, junto con el entorno cognitivo, el entorno de la información y el espectro electromagnético.",
      "Únicamente el ámbito terrestre y el ámbito fluvial.",
      "El ámbito mercantil, el ámbito bancario y el ámbito deportivo.",
      "Solo existen dos dominios: el continental y el insular."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las Fuerzas Armadas (EMAD / CESEDEN)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01 Empleo de las FAS) > Operaciones Multidominio: Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial + Entorno Cognitivo",
    consejoAcademia: "En la **PDC-01** recuerda: 1) Quien la aprueba es el **JEMAD** (y la elabora el **Centro Conjunto de Desarrollo de Conceptos - CCDC**, integrado en el **CESEDEN**). 2) Incorpora las **Operaciones Multidominio** integrando los ámbitos **Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial** más la dimensión **Cognitiva**.",
    justificacion: "La doctrina conjunta PDC-01 articula el empleo de la Fuerza Conjunta en operaciones multidominio abarcando los dominios físicos, espacial y ciberespacial, así como el entorno de la información y cognitivo."
  },
  {
    id: "Q-W7-107",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 Empleo de las Fuerzas Armadas - Niveles de Conducción de las Operaciones",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la doctrina conjunta española (PDC-01) y el Real Decreto 521/2020, ¿cuáles son los niveles de planeamiento y conducción de las operaciones militares y qué autoridad española ejerce el mando en el nivel estratégico-militar y en el nivel operacional?",
    opciones: [
      "Los niveles son el Político-Estratégico (Gobierno/Presidente y Ministro de Defensa), el Estratégico-Militar (ejercido por el JEMAD, auxiliado por el EMACON), el Operacional (ejercido por el Comandante del Mando de Operaciones - CMOPS) y el Táctico (ejercido por los Mandos Componentes o Mandos Operativos en el área de operaciones).",
      "El nivel táctico lo dirige el Congreso de los Diputados y el nivel estratégico lo dirige cada Jefe de Pelotón.",
      "Solo existe el nivel táctico en las Fuerzas Armadas españolas.",
      "El nivel operacional lo ejerce el Subsecretario de Defensa."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las FAS y Real Decreto 521/2020",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01) > Escalera de Niveles de las Operaciones: Político (Gobierno/Ministro) -> Estratégico-Militar (JEMAD/EMACON) -> Operacional (CMOPS/MOPS) -> Táctico (Mandos Componentes/Operativos)",
    consejoAcademia: "¡Emparejamiento estrella de los Vídeos T7 y T22!: • **Nivel Estratégico-Militar = JEMAD** (con el **EMACON**). • **Nivel Operacional = CMOPS** (Comandante del **MOPS**). • **Nivel Táctico = Mandos Operativos / Componentes** (MOT, MOM, MOA, MOC, MOESPA o Jefes de Fuerza desplegada).",
    justificacion: "La PDC-01 y el RD 521/2020 sitúan al JEMAD en el nivel estratégico-militar, al CMOPS en el nivel operacional y a los Mandos Operativos/Componentes en el nivel táctico."
  },
  {
    id: "Q-W7-108",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas (ONU) - Carta de San Francisco y los 6 Órganos Principales (Art. 7 Carta ONU)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 7 de la Carta de las Naciones Unidas (firmada en San Francisco el 26 de junio de 1945 y en vigor desde el 24 de octubre de 1945; ingreso de España el 14 de diciembre de 1955), ¿cuáles son los 6 órganos principales de la ONU y cuál de ellos tiene su sede en La Haya (Países Bajos) en lugar de en Nueva York?",
    opciones: [
      "Los 6 órganos principales son: la Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social (ECOSOC), el Consejo de Administración Fiduciaria, la Corte Internacional de Justicia y la Secretaría; siendo la Corte Internacional de Justicia (integrada por 15 magistrados elegidos por 9 años) el único de los 6 órganos principales que tiene su sede en el Palacio de la Paz de La Haya.",
      "Los 6 órganos tienen su sede en Ginebra (Suiza).",
      "El Fondo Monetario Internacional y la OTAN son dos de los seis órganos principales de la Carta de la ONU.",
      "La Corte Penal Internacional forma parte de los seis órganos principales de la Carta de 1945."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas (1945), Artículo 7 y Estatuto de la Corte Internacional de Justicia",
    ubicacionTemario: "Bloque 3 > Tema 3 (Naciones Unidas ONU) > Los 6 órganos principales (Art. 7) y sede de la Corte Internacional de Justicia en La Haya (15 jueces por 9 años)",
    consejoAcademia: "¡Cuidado con esta trampa clásica en el Tema de la ONU!: 1) Los **6 órganos principales (Art. 7 Carta ONU)**: Asamblea General, Consejo de Seguridad, ECOSOC (54 miembros por 3 años), Consejo de Administración Fiduciaria (suspendido en 1994 tras la independencia de Palaos), **Corte Internacional de Justicia** y Secretaría. 2) La **Corte Internacional de Justicia (CIJ)** tiene **15 magistrados por 9 años** y está en **LA HAYA** (los otros 5 están en Nueva York). ¡No confundas la CIJ con la Corte Penal Internacional (Estatuto de Roma de 1998, que NO es órgano principal de la Carta)!",
    justificacion: "El artículo 7 de la Carta de la ONU enumera sus seis órganos principales, teniendo la Corte Internacional de Justicia su sede en La Haya (Países Bajos) con 15 magistrados elegidos por 9 años."
  },
  {
    id: "Q-W7-109",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas (ONU) - Consejo de Seguridad: Composición y Mayoría de Votación (Arts. 23 y 27 Carta ONU)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 23 y 27 de la Carta de las Naciones Unidas, ¿cómo se compone el Consejo de Seguridad y cuántos votos afirmativos se requieren para adoptar decisiones sobre cuestiones de procedimiento y sobre todas las demás cuestiones (de fondo)?",
    opciones: [
      "Se compone de 15 miembros: 5 permanentes con derecho de veto (China, Estados Unidos, Federación de Rusia, Francia y Reino Unido) y 10 no permanentes elegidos por la Asamblea General por un período de 2 años; las decisiones sobre cuestiones de procedimiento requieren el voto afirmativo de 9 miembros cualesquiera, y las decisiones sobre las demás cuestiones requieren el voto afirmativo de 9 miembros, incluso los votos afirmativos de todos los miembros permanentes (derecho de veto).",
      "Se compone de 27 miembros elegidos por 5 años y decide por mayoría simple de 8 votos.",
      "Alemania, Japón y España son miembros permanentes con derecho de veto desde 1955.",
      "Los 10 miembros no permanentes pueden ser reelegidos indefinidamente para el período inmediatamente siguiente."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Artículos 23 y 27",
    ubicacionTemario: "Bloque 3 > Tema 3 (Naciones Unidas ONU) > Consejo de Seguridad (15 miembros: 5 permanentes + 10 no permanentes por 2 años sin reelección inmediata; mayoría de 9 votos sobre 15)",
    consejoAcademia: "Números clave del **Consejo de Seguridad de la ONU**: • Total = **15 miembros** (**5 permanentes** [EE.UU., Rusia, China, Francia, Reino Unido] + **10 no permanentes** elegidos por **2 años** por mayoría de 2/3 de la Asamblea General, **sin reelección inmediata**). • Mayoría para aprobar resoluciones = **9 votos afirmativos sobre 15** (en cuestiones de fondo, sin voto en contra/veto de ninguno de los 5 permanentes).",
    justificacion: "Los artículos 23 y 27 de la Carta de la ONU fijan la composición de 15 miembros (5 permanentes y 10 no permanentes por 2 años) y la mayoría de 9 votos afirmativos."
  },
  {
    id: "Q-W7-110",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas (ONU) - Capítulo VI vs Capítulo VII de la Carta",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la Carta de las Naciones Unidas, ¿cuál es la diferencia esencial entre el Capítulo VI y el Capítulo VII?",
    opciones: [
      "El Capítulo VI regula el «Arreglo pacífico de controversias» (negociación, investigación, mediación, conciliación, arbitraje o arreglo judicial), mientras que el Capítulo VII regula la «Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión» (permitiendo al Consejo de Seguridad adoptar medidas coercitivas, incluidas sanciones económicas o el uso de la fuerza armada conforme al artículo 42, y reconociendo en el artículo 51 el derecho inmanente de legítima defensa individual o colectiva).",
      "El Capítulo VI autoriza los bombardeos estratégicos y el Capítulo VII regula la UNESCO.",
      "Ambos capítulos fueron derogados en la Cumbre de Madrid de 2022.",
      "El Capítulo VII prohíbe el derecho de legítima defensa de los Estados atacados."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Capítulos VI (Arts. 33-38) y VII (Arts. 39-51)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Naciones Unidas ONU) > Diferencia entre Capítulo VI (Arreglo pacífico), Capítulo VII (Medidas coercitivas y Art. 51 Legítima defensa) y Operaciones de Mantenimiento de la Paz («Capítulo VI y medio»)",
    consejoAcademia: "¡Cruce clásico del Bloque 3!: • **Capítulo VI** = **Arreglo pacífico de controversias**. • **Capítulo VII** = **Medidas coercitivas / Uso de la fuerza** en caso de amenaza a la paz, quebrantamiento de la paz o acto de agresión (incluye el famoso **Art. 51: Derecho inmanente de legítima defensa**, sobre el que se apoya el Art. 5 del Tratado de Washington de la OTAN). • Y las **Operaciones de Mantenimiento de la Paz (Cascos Azules)** se conocen doctrinalmente como **«Capítulo VI y medio»** (Dag Hammarskjöld).",
    justificacion: "El Capítulo VI de la Carta de la ONU trata del arreglo pacífico de controversias y el Capítulo VII de la acción coercitiva ante amenazas o quebrantamientos de la paz y del derecho de legítima defensa (art. 51)."
  },
  {
    id: "Q-W7-111",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Organización del Tratado del Atlántico Norte) - Fechas, 32 Aliados y Artículos 4, 5 y 6 del Tratado de Washington",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con el Tratado del Atlántico Norte (firmado en Washington el 4 de abril de 1949 por 12 países fundadores; ingreso de España el 30 de mayo de 1982 como miembro n.º 16) y su ampliación hasta los actuales 32 Estados miembros, señale la opción 100% CORRECTA:",
    opciones: [
      "Los dos últimos países en incorporarse a la OTAN han sido Finlandia (miembro n.º 31, en abril de 2023) y Suecia (miembro n.º 32, el 7 de marzo de 2024); el Artículo 4 del Tratado regula las consultas cuando peligre la integridad territorial, independencia política o seguridad de cualquiera de las Partes, y el Artículo 5 consagra la cláusula de defensa colectiva (según la cual un ataque armado contra una o varias de ellas en Europa o en América del Norte se considerará como un ataque dirigido contra todas ellas).",
      "La OTAN cuenta actualmente con 28 miembros, siendo Austria y Suiza los dos últimos en ingresar en 2024.",
      "El Artículo 5 del Tratado de Washington se ha invocado diez veces, la primera de ellas en la Guerra de Corea.",
      "España fue uno de los 12 países fundadores del Tratado de Washington en 1949."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte (Washington, 4 de abril de 1949), Artículos 4, 5 y 6",
    ubicacionTemario: "Bloque 3 > Tema 4 (OTAN) > Hitos clave: 4 abril 1949 (12 fundadores), 30 mayo 1982 (España n.º 16), 2023 Finlandia (n.º 31), 7 marzo 2024 Suecia (n.º 32); Art. 4 (Consultas) vs Art. 5 (Defensa colectiva, invocado solo tras el 11-S)",
    consejoAcademia: "¡Los **6 datos de la OTAN** que valen oro en 2025/2026!: 1) Fundación: **4 de abril de 1949** en Washington (**12 países fundadores**). 2) España ingresó el **30 de mayo de 1982** (miembro **n.º 16**) y se integró plenamente en la estructura militar en **1999**. 3) Total actual: **32 países aliados** (**30º Macedonia del Norte [2020], 31º Finlandia [abril 2023], 32º Suecia [marzo 2024]**). 4) **Art. 4** = Consultas. 5) **Art. 5** = Defensa colectiva (invocado **una única vez en la historia**, tras los atentados del **11 de septiembre de 2001**). 6) **Art. 6** = Delimitación geográfica (Europa, América del Norte, Turquía e islas al norte del **Trópico de Cáncer**).",
    justificacion: "Con la adhesión de Finlandia (2023) y Suecia (marzo de 2024), la OTAN suma 32 aliados, regulándose las consultas en el artículo 4 y la defensa colectiva en el artículo 5 del Tratado de Washington."
  },
  {
    id: "Q-W7-112",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN - Estructura Civil y Militar: NAC, Comité Militar, ACO (SHAPE) y ACT (Norfolk)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura de mando política y militar de la OTAN, señale la relación CORRECTA entre el Consejo del Atlántico Norte (NAC), el Comité Militar (MC) y los dos Mandos Estratégicos (ACO y ACT):",
    opciones: [
      "El Consejo del Atlántico Norte (NAC, con sede en Bruselas y presidido por el Secretario General de la OTAN, donde las decisiones se toman por consenso/unanimidad) es el máximo órgano de decisión política; el Comité Militar (MC, integrado por los JEMAD de los países aliados) es la máxima autoridad militar asesora del NAC; y la Estructura de Mando Militar se encabeza por dos Mandos Estratégicos: el Mando Aliado de Operaciones (ACO / SHAPE, en Mons, Bélgica, bajo el mando de SACEUR) y el Mando Aliado de Transformación (ACT, en Norfolk, Virginia, EE.UU., bajo el mando de SACT).",
      "El Mando Aliado de Operaciones (SHAPE) está en Norfolk (EE.UU.) y el Mando Aliado de Transformación (ACT) está en Madrid.",
      "El Consejo del Atlántico Norte toma sus decisiones por mayoría simple de la mitad más uno.",
      "En España solo existe el CAOC de Torrejón y se cerró el Cuartel General de Bétera."
    ],
    correcta: 0,
    referencia: "Estructura Civil y Militar de la OTAN y Concepto Estratégico de Madrid 2022",
    ubicacionTemario: "Bloque 3 > Tema 4 (OTAN) > NAC (Bruselas, consenso), Comité Militar (MC) y los 2 Mandos Estratégicos: ACO/SHAPE (Mons, Bélgica) y ACT (Norfolk, EE.UU.) + CAOC Torrejón y HQ NRDC-ESP Bétera",
    consejoAcademia: "¡No cruces las dos sedes estratégicas de la OTAN!: • **ACO / SHAPE (Mando Aliado de Operaciones, SACEUR)** = **Mons (Bélgica)** (con sus 3 JFC en **Brunssum** [Países Bajos], **Nápoles** [Italia] y **Norfolk** [EE.UU.]). • **ACT (Mando Aliado de Transformación, SACT)** = **Norfolk (Virginia, EE.UU.)**. Y en **España** tenemos dos instalaciones clave OTAN: el **CAOC de Torrejón** (Centro de Operaciones Aéreas Combinadas) y el **HQ NRDC-ESP en Bétera (Valencia)**, además de los Centros de Excelencia (C-IED en Hoyo de Manzanares).",
    justificacion: "El NAC (Bruselas) es el máximo órgano político de la OTAN que decide por consenso, el Comité Militar es la máxima autoridad militar y los dos Mandos Estratégicos son ACO/SHAPE (Mons, Bélgica) y ACT (Norfolk, EE.UU.)."
  },
  {
    id: "Q-W7-113",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Organización para la Seguridad y la Cooperación en Europa) - Acta de Helsinki 1975, Carta de París 1990 y Cumbre de Budapest 1994",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con el origen, evolución histórica, número de Estados participantes y sede de la Secretaría de la Organización para la Seguridad y la Cooperación en Europa (OSCE), señale la respuesta CORRECTA:",
    opciones: [
      "Nació como Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE) con la firma del Acta Final de Helsinki el 1 de agosto de 1975; se institucionalizó con la Carta de París para una Nueva Europa (1990); adoptó su denominación actual de OSCE en la Cumbre de Budapest de 1994 (efectiva el 1 de enero de 1995); agrupa a 57 Estados participantes de América del Norte, Europa y Asia Central (desde Vancouver hasta Vladivostok), tiene su Secretaría permanente en Viena (Austria) y trabaja en tres dimensiones o «cestas»: Político-Militar, Económico-Medioambiental y Humana.",
      "La OSCE tiene 27 Estados miembros exclusivamente europeos y su sede está en Bruselas.",
      "La OSCE dispone de un ejército propio permanente de 500.000 efectivos para hacer guerras ofensivas.",
      "España no pertenece a la OSCE."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki (1975), Carta de París (1990) y Cumbre de Budapest (1994)",
    ubicacionTemario: "Bloque 3 > Tema 5 (OSCE) > Los 5 datos de examen: 1975 Acta de Helsinki (CSCE) -> 1990 Carta de París -> 1994 Cumbre de Budapest (pasa a llamarse OSCE) -> 57 Estados participantes -> Sede en Viena y 3 dimensiones (cestas)",
    consejoAcademia: "¡Todo el Tema 5 de la **OSCE** resumido en 5 datos de examen!: 1) **1975 = Acta Final de Helsinki** (nace como CSCE). 2) **1990 = Carta de París** (fin de la Guerra Fría). 3) **1994 = Cumbre de Budapest** (pasa de CSCE a **OSCE** a partir del 1 de enero de 1995). 4) **57 Estados participantes** (la mayor organización regional de seguridad del mundo bajo el Capítulo VIII de la Carta ONU), con Secretaría y Consejo Permanente en **VIENA (Austria)** y la **ODIHR** (Oficina de Instituciones Democráticas y Derechos Humanos) en **Varsovia**. 5) Las **3 Dimensiones (Cestas)**: Político-Militar, Económico-Medioambiental y Humana.",
    justificacion: "La OSCE procede del Acta Final de Helsinki (1975), adoptó el nombre de OSCE en la Cumbre de Budapest de 1994, cuenta con 57 Estados participantes, tiene su Secretaría en Viena y estructura su labor en tres dimensiones."
  },
  {
    id: "Q-W7-114",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea (UE) - Tratados Constitutivos, 27 Estados Miembros y las 7 Instituciones (Art. 13 TUE)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 13 del Tratado de la Unión Europea (TUE, reformado por el Tratado de Lisboa firmado en 2007 y en vigor desde el 1 de diciembre de 2009), ¿cuáles son las 7 Instituciones oficiales de la Unión Europea (integrada actualmente por 27 Estados miembros tras la salida del Reino Unido en 2020; ingreso de España el 1 de enero de 1986)?",
    opciones: [
      "1) El Parlamento Europeo, 2) El Consejo Europeo, 3) El Consejo (Consejo de la Unión Europea), 4) La Comisión Europea, 5) El Tribunal de Justicia de la Unión Europea (Luxemburgo), 6) El Banco Central Europeo (Fráncfort) y 7) El Tribunal de Cuentas (Luxemburgo).",
      "El Consejo de Europa (Estrasburgo) y el Tribunal Europeo de Derechos Humanos son instituciones de la Unión Europea.",
      "El Comité de las Regiones y el Comité Económico y Social son dos de las siete instituciones decisorias del artículo 13 TUE.",
      "La OTAN y la OSCE son instituciones dependientes de la Comisión Europea."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Artículo 13",
    ubicacionTemario: "Bloque 3 > Tema 6 (Unión Europea) > Las 7 Instituciones del Art. 13 TUE y la diferencia entre Consejo Europeo, Consejo de la UE y Consejo de Europa",
    consejoAcademia: "¡La trampa más famosa del Tema 6 (UE)!: No confundas los **3 «Consejos»**: 1) **Consejo Europeo** (Institución de la UE: Jefes de Estado o de Gobierno + su Presidente + Presidente de la Comisión; da impulso político pero **no ejerce función legislativa**). 2) **Consejo de la UE (o simplemente «el Consejo»)** (Institución de la UE: Ministros de los 27 Estados miembros; **colegislador** junto con el Parlamento Europeo). 3) **Consejo de Europa** (Organización internacional de **46 países con sede en Estrasburgo**, totalmente **AJENA a la Unión Europea**, a la que pertenece el Tribunal Europeo de Derechos Humanos - TEDH).",
    justificacion: "El artículo 13.1 del Tratado de la Unión Europea enumera taxativamente las siete instituciones de la Unión Europea."
  },
  {
    id: "Q-W7-115",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea (UE) - Política Común de Seguridad y Defensa (PCSD): Alto Representante, EDA, SATCEN, PESCO y Brújula Estratégica",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el ámbito de la Política Exterior y de Seguridad Común (PESC) y de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea, señale la opción 100% CORRECTA:",
    opciones: [
      "El Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR) preside el Consejo de Asuntos Exteriores, es uno de los Vicepresidentes de la Comisión Europea, dirige el Servicio Europeo de Acción Exterior (SEAE) y está al frente de la Agencia Europea de Defensa (EDA); además, el Centro de Satélites de la UE (SATCEN) tiene su sede en la Base Aérea de Torrejón de Ardoz (Madrid), la Cooperación Estructurada Permanente (PESCO) agrupa proyectos de capacidades de defensa, y la Brújula Estratégica (2022) impulsa una Capacidad de Despliegue Rápido de la UE de hasta 5.000 efectivos.",
      "El Centro de Satélites de la UE (SATCEN) tiene su sede en París y el Alto Representante es el Presidente del Parlamento Europeo.",
      "El Artículo 42.7 TUE es la cláusula de solidaridad por catástrofes naturales y el Artículo 222 TFUE es la cláusula de defensa mutua por agresión armada.",
      "La Unión Europea no realiza nunca misiones militares ni civiles en el exterior."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (Arts. 18, 27, 42 a 46) y Tratado de Funcionamiento de la UE (Art. 222)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Unión Europea y PCSD) > El Alto Representante (triple sombrero), SATCEN en Torrejón, PESCO, EDA, Brújula Estratégica (5.000 efectivos) y Art. 42.7 TUE vs Art. 222 TFUE",
    consejoAcademia: "Recuerda el **«triple sombrero» del Alto Representante (AR)**: 1) Dirige la **PESC/PCSD** y el **SEAE**, 2) Preside el **Consejo de Asuntos Exteriores**, y 3) Es **Vicepresidente de la Comisión Europea** (además de dirigir la **EDA**). Y nunca olvides que el **SATCEN** de la UE está en **Torrejón de Ardoz (Madrid)**.",
    justificacion: "Los artículos 18, 27 y 42 a 46 del TUE regulan la figura del Alto Representante, la PCSD, la EDA y la PESCO, teniendo el SATCEN su sede en Torrejón de Ardoz."
  },
  {
    id: "Q-W7-116",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España en Misiones Internacionales - Despliegue Actual por Organizaciones (ONU, OTAN y UE)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el emparejamiento entre las principales misiones internacionales con participación de las Fuerzas Armadas españolas y la organización internacional (ONU, OTAN o Unión Europea) bajo cuya bandera se desarrollan, y señale la opción 100% CORRECTA:",
    opciones: [
      "1) Bajo bandera de la ONU: Operación «Libre Hidalgo» (FINUL / UNIFIL) en el Líbano (Base «Miguel de Cervantes» en Marjayoun) y Misión de Verificación en Colombia; 2) Bajo bandera de la OTAN: Brigada Multinacional en Eslovaquia (Lešť, donde España es Nación Marco desde 2024), Presencia Avanzada en Letonia (Adazi) y Rumanía, Defensa antimisiles Patriot en Turquía (Adana — Active Fence), Misión de la OTAN en Irak (NMI), Policía Aérea del Báltico (BAP) y Agrupaciones Navales Permanentes (SNMG/SNMCMG); y 3) Bajo bandera de la UNIÓN EUROPEA (PCSD): Operación EUNAVFOR «Atalanta» contra la piratería en el Índico/Somalia (con Cuartel General Operacional OHQ en la Base Naval de Rota), EUTM Somalia, EUTM República Centroafricana y EUFOR «Althea» en Bosnia y Herzegovina.",
      "La Operación «Libre Hidalgo» en el Líbano es una misión de la OTAN y la Brigada en Eslovaquia es una misión de la ONU.",
      "La Operación «Atalanta» en el océano Índico pertenece a la OSCE y su cuartel general está en Viena.",
      "Las primeras misiones internacionales de España tuvieron lugar en 1975 en Vietnam."
    ],
    correcta: 0,
    referencia: "Ministerio de Defensa / EMAD - Operaciones en el Exterior de las Fuerzas Armadas Españolas (1989–2026)",
    ubicacionTemario: "Bloque 3 > Tema 7 (España y su participación en Misiones Internacionales) > Cuadro Maestro de Misiones por Bandera: ONU vs OTAN vs UE",
    consejoAcademia: "¡Si dominas este cuadro de 3 columnas (**ONU vs OTAN vs UE**), tienes el 100% de las preguntas del Tema 7 en el bolsillo!: • **ONU**: **Líbano** (*FINUL / Libre Hidalgo*) y **Colombia** (y en **1989** las dos primeras de la historia: **Angola [UNAVEM I]** y **Namibia [UNTAG]**). • **OTAN**: **Eslovaquia** (España Nación Marco en Lešť desde 2024), **Letonia**, **Rumanía**, **Turquía** (Patriot en Adana), **Irak (NMI)**, **Policía Aérea Báltico** y **SNMG/SNMCMG**. • **UE**: **Atalanta** (OHQ en **Rota**), **EUTM Somalia/RCA** y **EUFOR Althea** (Bosnia).",
    justificacion: "El cuadro recoge con exactitud la adscripción orgánica internacional (ONU, OTAN y UE) de las misiones exteriores vigentes de las Fuerzas Armadas españolas."
  },
  {
    id: "Q-W7-117",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Iniciativa Legislativa Popular (Art. 87.3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 87.3 de la Constitución Española, una ley orgánica regulará las formas de ejercicio y requisitos de la iniciativa popular para la presentación de proposiciones de ley. ¿Cuántas firmas acreditadas se exigen como mínimo y en qué materias NO procede dicha iniciativa legislativa popular?",
    opciones: [
      "Se exigirán no menos de 500.000 firmas acreditadas, y no procederá dicha iniciativa en materias propias de ley orgánica, tributarias o de carácter internacional, ni en lo relativo a la prerrogativa de gracia.",
      "Se exigen 50.000 firmas y sirve para reformar la Constitución y el Código Penal.",
      "Se exigen 1.000.000 de firmas y solo procede en materia tributaria y de presupuestos.",
      "Basta con 10.000 firmas electrónicas para aprobar una ley orgánica."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 87.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Iniciativa legislativa (Art. 87.3: Mínimo 500.000 firmas y las 4 materias excluidas + Reforma constitucional)",
    consejoAcademia: "Memoriza el **Art. 87.3 CE (Iniciativa Legislativa Popular)**: • Mínimo **500.000 firmas acreditadas** (regulada por LO 3/1984). • **PROHIBIDA en 4 materias del Art. 87.3 + 1 del Art. 166**: 1) **Ley Orgánica**, 2) **Tributarias**, 3) **Carácter internacional**, 4) **Prerrogativa de gracia (indultos)** y 5) **Reforma constitucional** (Art. 166 CE).",
    justificacion: "El artículo 87.3 CE exige no menos de 500.000 firmas acreditadas y excluye las materias propias de ley orgánica, tributarias, de carácter internacional y lo relativo a la prerrogativa de gracia."
  },
  {
    id: "Q-W7-118",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Diputación Permanente de las Cámaras (Art. 78)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 78 de la Constitución Española, en cada Cámara habrá una Diputación Permanente. ¿Por cuántos miembros estará compuesta como mínimo, quién la preside y hasta cuándo continúa ejerciendo sus funciones cuando expira el mandato o se disuelven las Cámaras?",
    opciones: [
      "Estará compuesta por un mínimo de 21 miembros (que representarán a los grupos parlamentarios en proporción a su importancia numérica), estará presidida por el Presidente de la Cámara respectiva, y expirado el mandato o en caso de disolución, las Diputaciones Permanentes seguirán ejerciendo sus funciones hasta la constitución de las nuevas Cortes Generales.",
      "Se compone de 50 miembros presididos por el Ministro de Justicia y cesa el mismo día de las elecciones.",
      "Solo existe Diputación Permanente en el Congreso, pero no en el Senado.",
      "Se compone de 12 magistrados nombrados por 9 años."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 78",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título III: La Diputación Permanente (Art. 78: Mínimo 21 miembros, presidida por el Presidente de la Cámara respectiva)",
    consejoAcademia: "Datos clave de la **Diputación Permanente (Art. 78 CE)**: • Existe en **ambas Cámaras** (una en el Congreso y otra en el Senado). • Mínimo **21 miembros** en proporción a los grupos parlamentarios. • Presidida por el **Presidente de la Cámara respectiva**. • Sigue en funciones tras la disolución **hasta la constitución de las nuevas Cortes Generales**.",
    justificacion: "El artículo 78 CE establece la composición mínima de 21 miembros de la Diputación Permanente en cada Cámara, su presidencia por el Presidente de la Cámara respectiva y su prórroga de funciones hasta la constitución de las nuevas Cortes."
  },
  {
    id: "Q-W7-119",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Recurso de Inconstitucionalidad: Legitimación y Plazo (Art. 162)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 162.1 de la Constitución Española, ¿quiénes están legitimados para interponer el recurso de inconstitucionalidad y quiénes están legitimados para interponer el recurso de amparo ante el Tribunal Constitucional?",
    opciones: [
      "1) Para interponer el recurso de INCONSTITUCIONALIDAD: el Presidente del Gobierno, el Defensor del Pueblo, 50 Diputados, 50 Senadores, los órganos colegiados ejecutivos de las Comunidades Autónomas y, en su caso, las Asambleas de las mismas; y 2) Para interponer el recurso de AMPARO: toda persona natural o jurídica que invoque un interés legítimo, así como el Defensor del Pueblo y el Ministerio Fiscal.",
      "Cualquier ciudadano particular puede interponer directamente un recurso de inconstitucionalidad contra una ley.",
      "El Ministerio Fiscal puede interponer el recurso de inconstitucionalidad pero no el recurso de amparo.",
      "Se requieren 35 Diputados o 35 Senadores para interponer el recurso de inconstitucionalidad."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículo 162.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española) > Título IX: Legitimación en el Recurso de Inconstitucionalidad vs Recurso de Amparo (Art. 162.1 CE)",
    consejoAcademia: "¡Cruce clásico del **Art. 162.1 CE**!: • El **Defensor del Pueblo** se repite en **AMBOS** (Inconstitucionalidad y Amparo). • El **Ministerio Fiscal** y los **ciudadanos con interés legítimo** van a **AMPARO** (¡no a Inconstitucionalidad!). • En **Inconstitucionalidad** son **50 Diputados o 50 Senadores** (no confundir con los **35 Diputados** para presentar moción de censura o pedir referéndum del Art. 167).",
    justificacion: "El artículo 162.1.a) y 162.1.b) CE distingue con precisión los sujetos legitimados para el recurso de inconstitucionalidad y para el recurso de amparo."
  },
  {
    id: "Q-W7-120",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Principios de la Potestad Sancionadora y Prescripción Supletoria (Arts. 25 a 31)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 30 de la Ley 40/2015, de Régimen Jurídico del Sector Público, cuando las leyes que establezcan las infracciones y sanciones administrativas NO fijen plazos específicos de prescripción, ¿cuáles son los plazos supletorios de prescripción de las INFRACCIONES y de las SANCIONES en la Ley 40/2015 (y en qué se diferencian de los plazos de la LO 8/2014 Disciplinaria Militar)?",
    opciones: [
      "En la Ley 40/2015 (régimen general supletorio), las INFRACCIONES muy graves prescribirán a los 3 años, las graves a los 2 años y las leves a los 6 meses; y las SANCIONES impuestas por faltas muy graves prescribirán a los 3 años, las graves a los 2 años y las leves al 1 año (mientras que en la LO 8/2014 Disciplinaria Militar las faltas leves prescriben a los 2 meses y las sanciones leves a los 3 meses).",
      "En la Ley 40/2015 todas las infracciones y sanciones prescriben a los 10 días.",
      "En la Ley 40/2015 las infracciones leves prescriben a los 2 meses igual que en la LO 8/2014.",
      "Las sanciones administrativas leves no prescriben nunca en la Ley 40/2015."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de Régimen Jurídico del Sector Público, Artículo 30.1",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) y Bloque 2 > Tema 4 (LO 8/2014) > Comparativa de Prescripción: Ley 40/2015 (Infracciones 3a/2a/6m; Sanciones 3a/2a/1a) vs LO 8/2014 (Faltas 3a/2a/2m; Sanciones 3a/2a/3m)",
    consejoAcademia: "¡Ojo a este cruce entre **Ley 40/2015 (Art. 30)** y **LO 8/2014 (Arts. 21 y 24)** en las **LEVES**!: En graves (**2 años**) y muy graves (**3 años**) coinciden ambas leyes; pero en las **LEVES**: • **Ley 40/2015 (General)** = Infracción leve prescribe a los **6 meses** | Sanción leve al **1 año**. • **LO 8/2014 (Militar)** = Falta leve prescribe a los **2 meses** | Sanción leve a los **3 meses**.",
    justificacion: "El artículo 30.1 de la Ley 40/2015 fija como plazos supletorios generales 3 años, 2 años y 6 meses para las infracciones y 3 años, 2 años y 1 año para las sanciones."
  },
  {
    id: "Q-W7-121",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Responsabilidad Patrimonial de las Administraciones Públicas: Plazo de Prescripción (Art. 67 LPACAP y Art. 32 LRJSP)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 32 de la Ley 40/2015 y al artículo 67 de la Ley 39/2015, los particulares tendrán derecho a ser indemnizados por las Administraciones Públicas de toda lesión que sufran en cualquiera de sus bienes y derechos (salvo en los casos de fuerza mayor o de daños que el particular tenga el deber jurídico de soportar). ¿En qué plazo prescribe el derecho a reclamar dicha indemnización?",
    opciones: [
      "Prescribe al 1 año de producido el hecho o el acto que motive la indemnización o se manifieste su efecto lesivo (y en caso de daños de carácter físico o psíquico a las personas, el plazo empezará a computarse desde la curación o la determinación del alcance de las secuelas).",
      "Prescribe a los 15 días hábiles desde el accidente.",
      "Prescribe a los 20 años naturales.",
      "Solo se indemniza cuando concurra fuerza mayor imprevisible."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Artículo 67.1 y Ley 40/2015, Artículo 32",
    ubicacionTemario: "Bloque 1 > Tema 3 y Bloque 2 > Tema 8 > Responsabilidad Patrimonial de la Administración: Exclusión de la fuerza mayor y prescripción al 1 año (Art. 67 LPACAP)",
    consejoAcademia: "Dos datos clave sobre **Responsabilidad Patrimonial**: 1) Se indemniza toda lesión antijurídica consecuencia del funcionamiento **normal o anormal** de los servicios públicos, **SALVO FUERZA MAYOR** (el caso fortuito sí se indemniza; la fuerza mayor no). 2) El derecho a reclamar **prescribe al 1 AÑO** (y el plazo máximo para resolver el procedimiento es de **6 meses** con silencio desestimatorio).",
    justificacion: "El artículo 67.1 de la Ley 39/2015 fija en un año el plazo de prescripción del derecho a reclamar por responsabilidad patrimonial de la Administración."
  },
  {
    id: "Q-W7-122",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - La Nueva Subdirección General de Planificación y Medio Ambiente en DIGENIN (Art. 9)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "En el Real Decreto 205/2024, dentro de la Dirección General de Infraestructura (DIGENIN, dependiente de la Secretaría de Estado de Defensa), ¿qué dos Subdirecciones Generales se estructuran para ejercer sus competencias sobre infraestructura, patrimonio y medio ambiente?",
    opciones: [
      "La Subdirección General de Planificación y Medio Ambiente, y la Subdirección General de Proyectos y Obras.",
      "La Subdirección General de Reclutamiento y la Subdirección General de Enseñanza Militar.",
      "La Subdirección General de Contabilidad y la Subdirección General de Contratación.",
      "La Subdirección General de Historia Militar y la Subdirección General de Farmacia."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículo 9",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > SEDEF > Dirección General de Infraestructura (DIGENIN: Planificación y Medio Ambiente + Proyectos y Obras)",
    consejoAcademia: "En **DIGENIN (Art. 9 RD 205/2024)** son **2 Subdirecciones Generales**: 1) **Planificación y Medio Ambiente** y 2) **Proyectos y Obras**.",
    justificacion: "El artículo 9 del RD 205/2024 estructura la Dirección General de Infraestructura (DIGENIN) en la Subdirección General de Planificación y Medio Ambiente y la Subdirección General de Proyectos y Obras."
  },
  {
    id: "Q-W7-123",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - Subdirecciones Generales de DIGENECO (Art. 8)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Conforme al artículo 8 del Real Decreto 205/2024, ¿cuáles son las tres Subdirecciones Generales que dependen de la Dirección General de Asuntos Económicos (DIGENECO, integrada en la SEDEF) más la Oficina Presupuestaria?",
    opciones: [
      "La Subdirección General de Contabilidad, la Subdirección General de Economía y la Subdirección General de Contratación, además de la Oficina Presupuestaria (con nivel de Subdirección General).",
      "La Subdirección General de Inspección, Regulación y Estrategia Industrial.",
      "La Subdirección General de Personal Civil y la Subdirección General de Acción Social.",
      "La Subdirección General de Planes y Relaciones Internacionales."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículo 8",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > SEDEF > DIGENECO (Contabilidad, Economía, Contratación y Oficina Presupuestaria)",
    consejoAcademia: "En **DIGENECO (Art. 8 RD 205/2024)** recuerda sus **4 unidades con nivel de Subdirección General**: **Contabilidad**, **Economía**, **Contratación** y **Oficina Presupuestaria** (además de la Junta General de Enajenaciones y Liquidadora de Material).",
    justificacion: "El artículo 8 del RD 205/2024 estructura la DIGENECO en las Subdirecciones Generales de Contabilidad, Economía y Contratación y en la Oficina Presupuestaria."
  },
  {
    id: "Q-W7-124",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - Subdirecciones Generales de la Secretaría General Técnica (Art. 11)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Según el artículo 11 del Real Decreto 205/2024, ¿cuáles son las cuatro unidades con nivel de Subdirección General en las que se estructura la Secretaría General Técnica (SGT, dependiente de la Subsecretaría de Defensa)?",
    opciones: [
      "La Vicesecretaría General Técnica, la Subdirección General de Régimen Interior, la Subdirección General de Recursos e Información Administrativa y la Subdirección General de Publicaciones y Patrimonio Cultural.",
      "La Subdirección General de Adquisiciones de Armamento y Material.",
      "La Subdirección General de Sistemas Terrestres, Navales y Aeroespaciales.",
      "La Subdirección General de Transformación Digital."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Artículo 11",
    ubicacionTemario: "Bloque 1 > Tema 4 (Ministerio de Defensa RD 205/2024) > SUBDEF > Secretaría General Técnica (SGT: Vicesecretaría, Régimen Interior, Recursos e Información Administrativa, y Publicaciones y Patrimonio Cultural)",
    consejoAcademia: "Las **4 patas de la SGT (Art. 11 RD 205/2024)**: 1) **Vicesecretaría General Técnica**, 2) **Régimen Interior**, 3) **Recursos e Información Administrativa** y 4) **Publicaciones y Patrimonio Cultural** (que edita el **BOD — Boletín Oficial del Ministerio de Defensa**). Y recuerda que de la SGT dependen también las **Delegaciones de Defensa**.",
    justificacion: "El artículo 11 del RD 205/2024 estructura la Secretaría General Técnica en la Vicesecretaría General Técnica y las tres Subdirecciones Generales de Régimen Interior, Recursos e Información Administrativa, y Publicaciones y Patrimonio Cultural."
  },
  {
    id: "Q-W7-125",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 y Orden DEF/710/2020 - órganos del CESEDEN (ESFAS, CCDC, IEEE, CEGET)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Orden DEF/710/2020, por la que se desarrolla la organización básica del Estado Mayor de la Defensa, ¿qué centros y órganos principales se integran dentro del Centro Superior de Estudios de la Defensa Nacional (CESEDEN)?",
    opciones: [
      "La Escuela Superior de las Fuerzas Armadas (ESFAS), el Centro Conjunto de Desarrollo de Conceptos (CCDC, encargado del desarrollo de la doctrina militar conjunta y combinada), el Instituto Español de Estudios Estratégicos (IEEE) y la Comisión Española de Historia Militar (en su relación funcional de estudios).",
      "La Academia General Militar de Zaragoza y la Academia General Básica de Suboficiales de Talarn.",
      "El Mando de Operaciones (MOPS) y el Mando Conjunto del Ciberespacio (MCCE).",
      "El Hospital Central de la Defensa «Gómez Ulla»."
    ],
    correcta: 0,
    referencia: "Orden DEF/710/2020, por la que se desarrolla la organización básica del Estado Mayor de la Defensa",
    ubicacionTemario: "Bloque 1 > Tema 5 (Organización Básica FAS RD 521/2020 y Orden DEF/710/2020) > El CESEDEN: ESFAS, CCDC (Doctrina Conjunta) e IEEE",
    consejoAcademia: "Dentro del **CESEDEN (EMAD)** memoriza sus **3 órganos estrella**: 1) **ESFAS** (Escuela Superior de las FAS: cursos de actualización para el ascenso a General y de Estado Mayor), 2) **CCDC** (Centro Conjunto de Desarrollo de Conceptos: elabora la doctrina **PDC-01**), y 3) **IEEE** (Instituto Español de Estudios Estratégicos).",
    justificacion: "La Orden DEF/710/2020 encuadra en el CESEDEN a la Escuela Superior de las Fuerzas Armadas (ESFAS), el Centro Conjunto de Desarrollo de Conceptos (CCDC) y el Instituto Español de Estudios Estratégicos (IEEE)."
  },
  {
    id: "Q-W7-126",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Ejército de Tierra - Direcciones del Mando de Personal (MAPER) y del Mando de Apoyo Logístico (MALE)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la Instrucción 14/2021 del JEME, compare las Direcciones que integran el Mando de Personal (MAPER) del Ejército de Tierra con las que integran el Mando de Apoyo Logístico (MALE) y el Mando de Adiestramiento y Doctrina (MADOC), y señale la opción CORRECTA:",
    opciones: [
      "1) En el MAPER se integran la Dirección de Personal (DIPER), la Dirección de Asistencia al Personal (DIAPER) y la Dirección de Sanidad (DISAN); 2) En el MALE se integran la Dirección de Adquisiciones (DIAD) y la Dirección de Integración de Funciones Logísticas (DINFULOG); y 3) En el MADOC (Granada) se integran la Dirección de Investigación, Doctrina, Orgánica y Materiales (DIDOM) y la Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE).",
      "La Dirección de Enseñanza (DIENADE) pertenece al MALE y la Dirección de Adquisiciones (DIAD) pertenece al MAPER.",
      "La Dirección de Acuartelamiento (DIACU) y la Dirección de Infraestructura (DINFE) pertenecen a FUTER.",
      "La Dirección de Sanidad (DISAN) depende del Mando de Canarias."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, de 8 de marzo, del JEME, por la que se desarrolla la organización del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización del ET Instrucción 14/2021) > Direcciones del Apoyo a la Fuerza: MAPER (DIPER, DIAPER, DISAN), MALE (DIAD, DINFULOG), MADOC (DIDOM, DIENADE) e IGE (DIACU, DINFE)",
    consejoAcademia: "¡Pizarra del Vídeo T8 sobre el **Apoyo a la Fuerza del ET (Instrucción 14/2021)**!: • **MAPER** = **DIPER + DIAPER + DISAN**. • **MALE** = **DIAD + DINFULOG**. • **MADOC (Granada)** = **DIDOM + DIENADE**. • **IGE (Barcelona)** = **DIACU** (Acuartelamiento) + **DINFE** (Infraestructura).",
    justificacion: "La Instrucción 14/2021 estructura MAPER en DIPER, DIAPER y DISAN; MALE en DIAD y DINFULOG; MADOC en DIDOM y DIENADE; e IGE en DIACU y DINFE."
  },
  {
    id: "Q-W7-127",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 15/2021 de la Armada - Direcciones de la Jefatura de Personal (JEPER) y de la Jefatura de Apoyo Logístico (JAL)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Conforme a la Instrucción 15/2021 del AJEMA, dentro del Apoyo a la Fuerza de la Armada, ¿qué Direcciones se integran en la Jefatura de Personal (JEPER, dirigida por el ALPER) y cuáles en la Jefatura de Apoyo Logístico (JAL, dirigida por el AJAL)?",
    opciones: [
      "En la JEPER se integran la Dirección de Personal (DIPER), la Dirección de Enseñanza Naval (DIENA), la Dirección de Asistencia al Personal (DIASPER) y la Dirección de Sanidad (DISAN); y en la JAL se integran la Dirección de Ingeniería y Construcciones Navales (DIC), la Dirección de Sostenimiento (DISOS) y la Dirección de Infraestructura (DIN), además de los Arsenales (Ferrol, Cartagena, Cádiz/La Carraca y Las Palmas).",
      "En la Armada la enseñanza depende de un órgano llamado MADOC Naval en Granada.",
      "Los Arsenales de la Armada dependen del Ejército del Aire y del Espacio.",
      "En la Armada no existe Dirección de Enseñanza Naval."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021, del AJEMA, por la que se desarrolla la organización de la Armada",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > Armada (Instrucción 15/2021): JEPER (DIPER, DIENA, DIASPER, DISAN) y JAL (DIC, DISOS, DIN y Arsenales)",
    consejoAcademia: "¡Diferencia clave del Vídeo T9 entre Tierra y Armada!: Mientras que en el ET la Enseñanza está en el **MADOC** y la Infraestructura está en la **IGE**, en la **Armada** la **Dirección de Enseñanza Naval (DIENA)** está dentro de **JEPER** y la **Dirección de Infraestructura (DIN) + los Arsenales** están dentro de la **JAL**.",
    justificacion: "La Instrucción 15/2021 del AJEMA integra DIENA en JEPER y las Direcciones de Ingeniería y Construcciones Navales (DIC), Sostenimiento (DISOS), Infraestructura (DIN) y los Arsenales en la JAL."
  },
  {
    id: "Q-W7-128",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 6/2024 del Ejército del Aire y del Espacio - Direcciones del MAPER y del MALOG",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Conforme a la Instrucción 6/2024 del JEMA, dentro del Apoyo a la Fuerza del Ejército del Aire y del Espacio, ¿dónde se encuadra la Dirección de Enseñanza (DEN, con sede en Sevilla) y qué Direcciones integran el Mando de Apoyo Logístico (MALOG)?",
    opciones: [
      "En el Mando de Personal (MAPER) del Ejército del Aire y del Espacio se integran la Dirección de Personal (DIPER), la Dirección de Enseñanza (DEN, en Sevilla), la Dirección de Asistencia al Personal (DIAPER) y la Dirección de Sanidad (DISAN); y en el Mando de Apoyo Logístico (MALOG) se integran la Dirección de Adquisiciones (DAD), la Dirección de Sostenimiento y Apoyo Logístico Operativo (DSALO), la Dirección de Ingeniería e Infraestructuras (DII) y las Maestranzas Aéreas (Madrid, Albacete y Sevilla).",
      "Las Maestranzas Aéreas pertenecen a la Armada y se denominan Arsenales.",
      "La Dirección de Enseñanza del EA depende del Mando del Espacio (MESPA).",
      "El MALOG está integrado en el Cuartel General del EMAD."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2024, del JEMA, por la que se desarrolla la organización del Ejército del Aire y del Espacio",
    ubicacionTemario: "Bloque 1 > Tema 6 (Organización de los Ejércitos) > Ejército del Aire y del Espacio (Instrucción 6/2024): MAPER (DIPER, DEN, DIAPER, DISAN) y MALOG (DAD, DSALO, DII y Maestranzas Aéreas de Madrid, Albacete y Sevilla)",
    consejoAcademia: "En el **Ejército del Aire y del Espacio (Instrucción 6/2024)**: • Igual que en la Armada, la **Dirección de Enseñanza (DEN, en Sevilla)** está dentro de **MAPER**. • Y en el **MALOG** están las **3 Maestranzas Aéreas**: **Madrid (Cuatro Vientos)**, **Albacete (Los Llanos)** y **Sevilla (Tablada)**.",
    justificacion: "La Instrucción 6/2024 del JEMA encuadra la Dirección de Enseñanza (DEN) en el MAPER y las Direcciones de Adquisiciones (DAD), Sostenimiento y Apoyo Logístico Operativo (DSALO), Ingeniería e Infraestructuras (DII) y las Maestranzas Aéreas en el MALOG."
  },
  {
    id: "Q-W7-129",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Cuerpos Específicos de los Ejércitos vs Cuerpos Comunes de las FAS (Arts. 25 a 40)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 25 a 40 de la Ley 39/2007, de la carrera militar, compare los Cuerpos específicos de cada Ejército con los cuatro Cuerpos Comunes de las Fuerzas Armadas y señale la opción 100% CORRECTA:",
    opciones: [
      "Los cuatro Cuerpos Comunes de las Fuerzas Armadas (cuya gestión de personal corresponde al Subsecretario de Defensa) son: el Cuerpo Jurídico Militar, el Cuerpo Militar de Intervención, el Cuerpo Militar de Sanidad y el Cuerpo de Músicas Militares; y el único de los cuatro Cuerpos Comunes que cuenta con Escala de Oficiales y Escala de Suboficiales es el Cuerpo de Músicas Militares (no existiendo categoría de Tropa y Marinería en ninguno de los Cuerpos Comunes).",
      "El Cuerpo de Intendencia y el Cuerpo de Ingenieros Politécnicos son Cuerpos Comunes de las Fuerzas Armadas.",
      "El Cuerpo Jurídico Militar tiene Escala de Tropa y Marinería.",
      "La Infantería de Marina es uno de los cuatro Cuerpos Comunes dependientes de la Subsecretaría."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículos 25 y 36 a 40",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Los 4 Cuerpos Comunes (Jurídico, Intervención, Sanidad y Músicas Militares) vs Cuerpos Específicos de ET, Armada y EA",
    consejoAcademia: "¡Tres trampas clásicas sobre los **Cuerpos de las FAS (Arts. 25-40 Ley 39/2007)**!: 1) **Intendencia** e **Ingenieros** NO son Cuerpos Comunes, sino **Cuerpos específicos** de cada Ejército (ET, Armada y EA). 2) Los **4 Cuerpos Comunes** son: **Jurídico Militar, Militar de Intervención, Militar de Sanidad y Músicas Militares** (dependientes de la **SUBDEF**). 3) De los 4 Cuerpos Comunes, solo **Músicas Militares** tiene **Escala de Suboficiales** (los otros 3 solo tienen Oficiales, y **ningún Cuerpo Común tiene Tropa y Marinería**).",
    justificacion: "Los artículos 25 y 36 a 40 de la Ley 39/2007 regulan los cuatro Cuerpos Comunes de las FAS, existiendo Escala de Suboficiales únicamente en el Cuerpo de Músicas Militares."
  },
  {
    id: "Q-W7-130",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Consejos Superiores de los Ejércitos (Art. 14)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 14 de la Ley 39/2007, de la carrera militar, ¿qué son los Consejos Superiores del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio y quién los preside?",
    opciones: [
      "Son órganos colegiados asesores y consultivos del Ministro de Defensa y del Jefe de Estado Mayor del ejército respectivo; los preside el Ministro de Defensa o, en su ausencia, el Jefe de Estado Mayor del Ejército correspondiente (JEME, AJEMA o JEMA).",
      "Son tribunales disciplinarios presididos por el Defensor del Pueblo.",
      "Son órganos ejecutivos presididos por el Cabo Mayor más antiguo de cada Ejército.",
      "Solo existe un Consejo Superior conjunto presidido por el Secretario de Estado de Defensa."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículo 14",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Los Consejos Superiores del ET, de la Armada y del EA (Art. 14: Órganos colegiados asesores y consultivos del Ministro y del JEME/AJEMA/JEMA)",
    consejoAcademia: "En los **Consejos Superiores de los Ejércitos (Art. 14 Ley 39/2007)** recuerda que asesoran tanto al **Ministro de Defensa** como al **Jefe de Estado Mayor respectivo**, e informan preceptivamente en las evaluaciones para ascensos por **elección** (como Oficiales Generales, Coronel, Suboficial Mayor o **Cabo Mayor**) y en los expedientes de insuficiencia de facultades profesionales.",
    justificacion: "El artículo 14 de la Ley 39/2007 define a los Consejos Superiores del Ejército de Tierra, de la Armada y del Ejército del Aire como órganos colegiados asesores y consultivos del Ministro de Defensa y del Jefe de Estado Mayor del ejército respectivo."
  },
  {
    id: "Q-W7-131",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Enseñanza en las Fuerzas Armadas (Arts. 43 a 45)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 43 de la Ley 39/2007, de la carrera militar, ¿cómo se estructura la enseñanza en las Fuerzas Armadas?",
    opciones: [
      "Se estructura en tres tipos de enseñanza: 1) Enseñanza de formación (tiene como finalidad la preparación para la incorporación a las escalas de militares profesionales), 2) Enseñanza de perfeccionamiento (capacita para el desempeño de los cometidos de empleos superiores o especialización) y 3) Enseñanza de altos estudios de la defensa nacional (impartida principalmente en el CESEDEN / ESFAS).",
      "Se estructura únicamente en Educación Primaria y Educación Secundaria.",
      "Solo existe la enseñanza de formación para Oficiales Generales.",
      "La enseñanza de perfeccionamiento es la que se imparte a los aspirantes civiles antes de jurar bandera."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículo 43",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Los 3 pilares de la Enseñanza Militar (Art. 43: Formación, Perfeccionamiento y Altos Estudios de la Defensa Nacional)",
    consejoAcademia: "Los **3 escalones de la Enseñanza Militar (Art. 43 Ley 39/2007)**: 1) **Formación** (acceso a las escalas: p. ej., CEFOT, AGBS, AGM), 2) **Perfeccionamiento** (cursos de actualización para ascenso a Cabo, Cabo 1º, Cabo Mayor o especialización) y 3) **Altos Estudios de la Defensa Nacional** (CESEDEN / ESFAS).",
    justificacion: "El artículo 43 de la Ley 39/2007 divide la enseñanza en las Fuerzas Armadas en enseñanza de formación, enseñanza de perfeccionamiento y altos estudios de la defensa nacional."
  },
  {
    id: "Q-W7-132",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Excedencia: Modalidades y Plazos (Art. 110)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 110 de la Ley 39/2007, de la carrera militar, en la situación administrativa de EXCEDENCIA por cuidado de familiares (para atender al cuidado de cada hijo, por naturaleza o adopción, o de un familiar hasta el segundo grado por consanguinidad o afinidad que no pueda valerse por sí mismo), ¿cuál es el período máximo de permanencia y qué ocurre con el destino?",
    opciones: [
      "El período de permanencia en esta modalidad de excedencia no será superior a 3 años para el cuidado de cada hijo (a contar desde la fecha de nacimiento o resolución judicial/administrativa) ni superior a 3 años para el cuidado de familiares hasta el segundo grado; durante el primer año tendrá derecho a la reserva del puesto de trabajo que desempeñaba, y el tiempo de permanencia será computable a efectos de trienios, tiempo de servicios y derechos pasivos.",
      "Dura como máximo 15 días y exige haber cumplido 30 años de servicio activo.",
      "En la excedencia por cuidado de hijos se percibe el 100% del sueldo mensual y las pagas extraordinarias.",
      "En la excedencia voluntaria por interés particular se exige llevar solo 1 mes de servicio y no hay plazo mínimo de permanencia."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la carrera militar, Artículo 110.4",
    ubicacionTemario: "Bloque 2 > Tema 1 y Tema 6 > Situación de Excedencia (Art. 110 Ley 39/2007): Cuidado de hijos/familiares (máx. 3 años, reserva de puesto el 1º año) vs Interés particular",
    consejoAcademia: "Cruce de números en la **Excedencia (Art. 110 Ley 39/2007)**: • **Por cuidado de hijos o familiares (hasta 2º grado)** = máximo **3 AÑOS** (con reserva del puesto de destino durante el **primer año**, computando el tiempo para trienios y derechos pasivos, pero sin retribuciones). • **Por razón de violencia de género** = sin exigencia de tiempo mínimo de servicios previos; durante los **6 primeros meses** tienen derecho a la reserva del puesto y los **2 primeros meses** perciben las retribuciones íntegras.",
    justificacion: "El artículo 110.4 de la Ley 39/2007 regula la excedencia por cuidado de hijos o familiares con una duración máxima de tres años y reserva del puesto durante el primer año."
  },
  {
    id: "Q-W7-133",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Conducto Reglamentario y Excepciones (Art. 37)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 37 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), para los asuntos del servicio el militar se relacionará con superiores y subordinados por conducto regular (conducto reglamentario) según la estructura jerárquica de su unidad, SALVO:",
    opciones: [
      "Que sea el propio superior quien se dirija directamente a él o tenga autorización de sus jefes; y tampoco será necesario seguir el conducto regular cuando se presente un recurso o queja contra el propio jefe inmediato u órgano de la cadena de mando previsto en las normas específicas (como acudir a la UPA frente al acoso o elevar la queja en segunda instancia a MAPER/JEPER).",
      "El conducto regular no existe en el Ejército de Tierra desde el año 2009.",
      "El soldado debe dirigirse siempre directamente por carta personal al Ministro de Defensa para pedir un día de asuntos propios.",
      "Está prohibido dirigirse a un subordinado aunque sea su jefe directo."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, Reales Ordenanzas para las FAS, Artículo 37",
    ubicacionTemario: "Bloque 2 > Tema 2 (Reales Ordenanzas RD 96/2009) > El Conducto Regular (Art. 37) y sus excepciones legales",
    consejoAcademia: "Recuerda que vulnerar el conducto regular cuando es exigible está tipificado como falta disciplinaria en la LO 8/2014 (Leve en el Art. 6.23: *«Omitir el conducto reglamentario para formular cualquier solicitud, reclamación o queja relacionadas con el servicio»*).",
    justificacion: "El artículo 37 del RD 96/2009 establece la regla general del conducto regular según la estructura jerárquica y sus excepciones."
  },
  {
    id: "Q-W7-134",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Libertad de Expresión e Información (Art. 12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 12 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, el militar tiene derecho a la libertad de expresión y a comunicar y recibir libremente información en los términos establecidos en la Constitución, pero en los asuntos estrictamente relacionados con el servicio en las Fuerzas Armadas:",
    opciones: [
      "El ejercicio de estos derechos se encontrará sujeto a los límites derivados de la disciplina, así como al deber de reserva sobre las materias clasificadas y sobre los datos que conozca por razón de su cargo o destino.",
      "Requiere censura previa obligatoria del Alcalde para escribir un libro de poesía o ciencia.",
      "Puede difundir libremente en internet los planos clasificados de las operaciones militares.",
      "El militar carece por completo de libertad de expresión incluso en el ámbito literario o artístico."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de derechos y deberes de los miembros de las FAS, Artículo 12",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Libertad de expresión e información (Art. 12: Sin censura previa, sujeta a los límites de la disciplina y deber de reserva en asuntos del servicio)",
    consejoAcademia: "En el **Art. 12 LO 9/2011**: El ejercicio de la libertad de expresión **no está sujeto a censura previa**, pero en los **asuntos estrictamente relacionados con el servicio en las FAS** está sujeto a los **límites derivados de la disciplina** y al **deber de reserva**.",
    justificacion: "El artículo 12.2 de la LO 9/2011 sujeta el ejercicio de la libertad de expresión en los asuntos estrictamente relacionados con el servicio en las FAS a los límites derivados de la disciplina y al deber de reserva."
  },
  {
    id: "Q-W7-135",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Derecho de Reunión y Manifestación (Art. 13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, ¿en qué condiciones puede asistir un militar a reuniones o manifestaciones?",
    opciones: [
      "El militar no podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical; y vistiendo el uniforme o haciendo uso de su condición militar, no podrá organizar, participar ni asistir en lugares de tránsito público a manifestaciones o a reuniones de carácter político, sindical o reivindicativo. Tampoco se podrán celebrar en las unidades reuniones políticas, sindicales o no autorizadas (salvo las informativas de las asociaciones profesionales del RAPFAS conforme a la ley).",
      "El militar puede encabezar manifestaciones sindicales vestido de uniforme de campaña si está de vacaciones.",
      "El militar tiene prohibido asistir de paisano a cualquier evento cultural o religioso en la vía pública.",
      "Cualquier partido político puede celebrar mítines electorales dentro de los acuartelamientos militares."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de derechos y deberes de los miembros de las FAS, Artículo 13",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Derecho de reunión y manifestación (Art. 13: Límites por razón de carácter político/sindical y por vestir el uniforme o hacer uso de la condición militar)",
    consejoAcademia: "Fíjate en la doble regla del **Art. 13.1 LO 9/2011**: 1) Incluso **de paisano**, el militar **NO podrá organizar ni participar activamente** en manifestaciones de carácter **político o sindical**. 2) **Vistiendo el uniforme o haciendo uso de su condición militar**, **NO podrá organizar, participar NI ASISTIR** en lugares de tránsito público a manifestaciones o reuniones de carácter **político, sindical O REIVINDICATIVO**.",
    justificacion: "El artículo 13.1 de la LO 9/2011 distingue la prohibición de organizar o participar activamente en reuniones políticas o sindicales y la prohibición absoluta de organizar, participar o asistir vistiendo el uniforme o invocando la condición militar a manifestaciones políticas, sindicales o reivindicativas."
  },
  {
    id: "Q-W7-136",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Sanciones a Alumnos de la Enseñanza de Formación (Arts. 11 a 16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 11 y siguientes de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, a los ALUMNOS de los centros docentes militares de formación (que no tengan previamente condición de militar profesional), ¿qué sanción económica se les puede imponer y qué sanción específica existe para ellos por falta grave?",
    opciones: [
      "A los alumnos de la enseñanza de formación (sin condición previa de militar profesional) NO se les aplicará la sanción económica (ni por falta leve ni por falta grave); y para ellos existe la sanción específica por falta grave de «Baja en el centro docente militar de formación» (que lleva consigo la pérdida de la condición de alumno).",
      "A los alumnos se les impone el doble de sanción económica que a los Oficiales.",
      "La «Baja en el centro docente militar de formación» es una sanción por falta leve que impone el Cabo de cuartel.",
      "A los alumnos de formación no se les aplica el Régimen Disciplinario de las Fuerzas Armadas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 11, 14 y 18",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Régimen especial de los Alumnos de formación: Exclusión de la sanción económica y sanción grave de Baja en el centro docente militar de formación",
    consejoAcademia: "¡Dos trampas de examen sobre los **Alumnos de Formación** en la LO 8/2014!: 1) **NO se les aplica la sanción económica** (salvo que ya fueran militares profesionales antes de ingresar como alumnos). 2) La **«Baja en el centro docente militar de formación»** es una sanción por **FALTA GRAVE** (Art. 11.2.d) cuya imposición corresponde al **Subsecretario de Defensa** (Art. 28).",
    justificacion: "Los artículos 11, 14 y 18 de la LO 8/2014 excluyen de la sanción económica a los alumnos sin condición previa de militar profesional y configuran la baja en el centro docente militar de formación como sanción por falta grave."
  },
  {
    id: "Q-W7-137",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Efectos de la Sanción de «Pérdida de Destino» (Art. 17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿qué supone la sanción por falta grave de «Pérdida de destino» y durante cuánto tiempo no podrá solicitar nuevo destino el sancionado en qué ámbito?",
    opciones: [
      "Supone el cese en el que viene ocupando el infractor, quien durante 2 años no podrá solicitar nuevo destino en la misma unidad o en la misma localidad en la que se encontraba destinado (según determine la resolución sancionadora motivadamente).",
      "Supone la imposibilidad de pedir destino en toda España durante 10 años.",
      "Solo dura 6 meses de prohibición en la misma unidad.",
      "Es una sanción por falta leve que impone el Capitán Jefe de Compañía."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículo 17",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Sanción por falta grave de Pérdida de Destino (Art. 17: Prohibición de pedir en la misma unidad o localidad durante 2 años)",
    consejoAcademia: "¡Número clave del **Art. 17 LO 8/2014 (Pérdida de destino)**: Durante **2 AÑOS** no podrá solicitar nuevo destino en la **misma unidad o en la misma localidad**! ¿Y quién tiene competencia para imponer la **Pérdida de destino**?: El **Ministro de Defensa**, el **JEMAD**, el **SUBDEF** y los **Jefes de Estado Mayor (JEME, AJEMA, JEMA)** (¡los Oficiales Generales subordinados o Jefes de Regimiento NO pueden imponer pérdida de destino!).",
    justificacion: "El artículo 17 de la LO 8/2014 establece que la sanción de pérdida de destino conlleva el cese en el que viene ocupando el infractor, quien durante dos años no podrá solicitar nuevo destino en la misma unidad o localidad."
  },
  {
    id: "Q-W7-138",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Efectos de la Sanción Económica y del Arresto (Arts. 14 a 16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare el lugar de cumplimiento y la participación en las actividades de la unidad durante el cumplimiento del arresto por falta LEVE (Art. 15 LO 8/2014) frente al arresto por falta GRAVE o MUY GRAVE (Art. 16 LO 8/2014), y señale la opción CORRECTA:",
    opciones: [
      "El arresto por falta LEVE (de 1 a 14 días) se cumplirá en el domicilio del sancionado o en su unidad, y el sancionado PARTICIPARÁ en las actividades de la unidad permaneciendo en los lugares señalados el resto del tiempo; mientras que el arresto por falta GRAVE (15 a 30 días) y MUY GRAVE (31 a 60 días) se cumplirá en un establecimiento disciplinario militar (con internamiento), y durante su cumplimiento el sancionado NO participará en las actividades de la unidad.",
      "Tanto en el arresto leve como en el muy grave el sancionado permanece en su casa de vacaciones.",
      "En el arresto por falta leve el sancionado ingresa en prisión militar y queda exento de trabajar.",
      "En el arresto por falta muy grave el sancionado acude a trabajar a su compañía de 08:00 a 15:00 horas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 15 y 16",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Diferencia esencial entre Arresto Leve (Art. 15: domicilio/unidad y SÍ participa en actividades) vs Arresto Grave/Muy Grave (Art. 16: Establecimiento Disciplinario Militar y NO participa en actividades)",
    consejoAcademia: "¡Pregunta fija de examen oficial sobre los arrestos (Arts. 15 y 16 LO 8/2014)!: • **Arresto LEVE (1-14 días)**: En domicilio o unidad + **SÍ participa en las actividades de la unidad**. • **Arresto GRAVE (15-30 días) y MUY GRAVE (31-60 días)**: En **Establecimiento Disciplinario Militar (EDM)** + **NO participa en las actividades de la unidad**.",
    justificacion: "Los artículos 15 y 16 de la LO 8/2014 distinguen el cumplimiento del arresto leve (en domicilio o unidad participando en las actividades de la unidad) y el del arresto grave y muy grave (en establecimiento disciplinario militar sin participar en las actividades de la unidad)."
  },
  {
    id: "Q-W7-139",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional - Ámbitos de Especial Interés para la Seguridad Nacional (Art. 10)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 10 de la Ley 36/2015, de Seguridad Nacional, ¿cuáles son los ámbitos de especial interés de la Seguridad Nacional expresamente enumerados en la Ley (que requieren una atención específica por resultar básicos para preservar los derechos y el bienestar de los ciudadanos)?",
    opciones: [
      "La ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la seguridad del espacio aéreo y ultraterrestre, la seguridad energética y la seguridad sanitaria, así como la preservación del medio ambiente.",
      "Exclusivamente la regulación de espectáculos taurinos y festejos locales.",
      "Únicamente el comercio minorista textil.",
      "La Ley 36/2015 prohíbe incluir la ciberseguridad y el espacio ultraterrestre en la Seguridad Nacional."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, Artículo 10",
    ubicacionTemario: "Bloque 3 > Tema 1 (Ley 36/2015 de Seguridad Nacional) > Ámbitos de especial interés (Art. 10) y sus Comités Especializados del CSN",
    consejoAcademia: "El **Art. 10 de la Ley 36/2015** enumera los ámbitos de especial interés (que cuentan con sus respectivos **Comités Especializados** dependientes del Consejo de Seguridad Nacional): **Ciberseguridad**, **Seguridad Económica y Financiera**, **Seguridad Marítima**, **Espacio Aéreo y Ultraterrestre**, **Seguridad Energética** y **Seguridad Sanitaria**.",
    justificacion: "El artículo 10 de la Ley 36/2015 declara como ámbitos de especial interés la ciberseguridad, la seguridad económica y financiera, la seguridad marítima, el espacio aéreo y ultraterrestre, la seguridad energética y la seguridad sanitaria."
  },
  {
    id: "Q-W7-140",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 Empleo de las Fuerzas Armadas - Capacidad Militar y Factores MIRADO-I",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la doctrina militar conjunta (PDC-01) y en el planeamiento de la defensa, una «Capacidad Militar» se define como la aptitud para realizar una acción a fin de alcanzar un objetivo o lograr un efecto deseado, integrando un conjunto de factores interrelacionados conocidos por el acrónimo MIRADO-I (o DOTMLPFI en OTAN). ¿Qué significan las siglas MIRADO-I?",
    opciones: [
      "Material (M), Infraestructura (I), Recursos Humanos (R), Adiestramiento (A), Doctrina (D), Organización (O) e Interoperabilidad (I).",
      "Mando, Inteligencia, Reconocimiento, Artillería, Defensa, Operaciones e Infantería.",
      "Ministerio, Intervención, Reclutamiento, Armamento, Destinos, Ordenanzas e Igualdad.",
      "Misiles, Infantería, Radares, Aviones, Drones, Obuses e Intendencia."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las Fuerzas Armadas y Planeamiento de Capacidades Militares",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01 Empleo de las FAS) > Concepto de Capacidad Militar y los 7 factores MIRADO-I",
    consejoAcademia: "¡Acrónimo estrella del Tema 2 del Bloque 3 (**MIRADO-I**)!: **M**aterial • **I**nfraestructura • **R**ecursos Humanos • **A**diestramiento • **D**octrina • **O**rganización • **I**nteroperabilidad.",
    justificacion: "En la doctrina conjunta española (PDC-01), toda Capacidad Militar se compone de los siete elementos funcionales del acrónimo MIRADO-I: Material, Infraestructura, Recursos Humanos, Adiestramiento, Doctrina, Organización e Interoperabilidad."
  }
];

const WAVE7_QUESTIONS_PART3 = [
  {
    id: "Q-W7-141",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 Empleo de las Fuerzas Armadas - Niveles de Conducción de las Operaciones",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Doctrina para el Empleo de las Fuerzas Armadas (PDC-01), ¿cuáles son los niveles en los que se conciben, planean y conducen las operaciones militares y qué autoridad dirige en España el nivel operacional?",
    opciones: [
      "Existen cuatro niveles interrelacionados: Político-Estratégico (Presidente del Gobierno / Ministro de Defensa), Militar-Estratégico (JEMAD), Operacional (Comandante del Mando de Operaciones - CMOPS) y Táctico (Comandantes de los Mandos Componentes o Fuerzas Operativas).",
      "Solo existen dos niveles: el nivel municipal y el nivel provincial.",
      "El nivel operacional lo dirige el Subsecretario de Defensa y el nivel táctico el Presidente del Senado.",
      "El nivel político-estratégico corresponde a los Jefes de Pelotón y el nivel táctico al Consejo de Ministros."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las Fuerzas Armadas",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01 Empleo de las FAS) > Los 4 niveles de las operaciones militares: Político-Estratégico, Militar-Estratégico (JEMAD), Operacional (CMOPS) y Táctico",
    consejoAcademia: "¡No confundas quién manda en cada nivel de la **PDC-01**!: • **Político-Estratégico** = Gobierno / Ministro de Defensa. • **Militar-Estratégico** = **JEMAD**. • **Operacional** = **CMOPS** (Comandante del Mando de Operaciones). • **Táctico** = Mandos Componentes / Jefes de Fuerza.",
    justificacion: "La PDC-01 estructura la conducción de las operaciones en los niveles político-estratégico, militar-estratégico (JEMAD), operacional (CMOPS) y táctico."
  },
  {
    id: "Q-W7-142",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 Empleo de las Fuerzas Armadas - Ámbitos o Dominios de Operación",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según la Doctrina para el Empleo de las Fuerzas Armadas (PDC-01), ¿cuáles son los cinco ámbitos físicos y no físicos (dominios operacionales) reconocidos en las operaciones multidominio, además del entorno cognitivo y del espectro electromagnético?",
    opciones: [
      "Terrestre, Marítimo, Aéreo, Espacial (ultraterrestre) y Ciberespacial, convergiendo sus efectos sobre el ámbito Cognitivo.",
      "Únicamente Terrestre y Marítimo, ya que el aire pertenece al ámbito civil.",
      "Subterráneo, Fluvial, Forestal, Urbano y Agrícola.",
      "Solamente el dominio nuclear y el dominio comercial."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las Fuerzas Armadas",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01 Empleo de las FAS) > Los 5 ámbitos operacionales (Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial) + Ámbito Cognitivo",
    consejoAcademia: "En la **PDC-01** recuerda siempre el esquema **5 + 1**: Los **5 ámbitos de operación** (**Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial**) + el **Ámbito Cognitivo** (donde se libra la batalla de las percepciones, la voluntad y la toma de decisiones del adversario).",
    justificacion: "La doctrina conjunta PDC-01 distingue los cinco ámbitos operacionales (terrestre, marítimo, aéreo, espacial y ciberespacial) y destaca la dimensión transversal del ámbito cognitivo."
  },
  {
    id: "Q-W7-143",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas (ONU) - Carta de San Francisco de 1945 y Órganos Principales (Art. 7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 7 de la Carta de las Naciones Unidas (firmada en San Francisco el 26 de junio de 1945 y en vigor desde el 24 de octubre de 1945), ¿cuáles son los SEIS órganos principales de la ONU y cuál de ellos ha suspendido sus operaciones desde 1994?",
    opciones: [
      "Los 6 órganos principales son: la Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social (ECOSOC), el Consejo de Administración Fiduciaria (que suspendió sus operaciones el 1 de noviembre de 1994 tras la independencia de Palaos), la Corte Internacional de Justicia (con sede en La Haya) y la Secretaría General.",
      "Los órganos principales son la OTAN, la OSCE, el FMI, el Banco Mundial, la UNESCO y la OMS.",
      "La Corte Penal Internacional de Roma es el único órgano principal de la Carta de 1945.",
      "El Consejo de Administración Fiduciaria fue disuelto en 1946 y sustituido por el G-20."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas de 1945, Artículo 7",
    ubicacionTemario: "Bloque 3 > Tema 3 (Organización de las Naciones Unidas - ONU) > Los 6 Órganos Principales (Art. 7 Carta ONU) y sede de la Corte Internacional de Justicia en La Haya",
    consejoAcademia: "¡Tres trampas clásicas de examen en el Tema 3 del Bloque 3 (ONU)!: 1) Los **6 órganos principales** están todos en Nueva York **EXCEPTO la Corte Internacional de Justicia (CIJ)**, que tiene su sede en el **Palacio de la Paz de La Haya (Países Bajos)**. 2) No confundas la **CIJ** (órgano principal de la ONU que juzga controversias entre Estados) con la **Corte Penal Internacional (CPI)** (Estatuto de Roma de 1998, que juzga personas por genocidio/crímenes de guerra y NO es órgano principal de la Carta). 3) España ingresó en la ONU el **14 de diciembre de 1955**.",
    justificacion: "El artículo 7 de la Carta de las Naciones Unidas establece como órganos principales la Asamblea General, el Consejo de Seguridad, el ECOSOC, el Consejo de Administración Fiduciaria, la Corte Internacional de Justicia y la Secretaría."
  },
  {
    id: "Q-W7-144",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas (ONU) - Consejo de Seguridad, Mayorías y Capítulos VI, VII y VIII",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Respecto al Consejo de Seguridad de las Naciones Unidas y a los Capítulos VI, VII y VIII de la Carta de la ONU, señale la opción 100% CORRECTA:",
    opciones: [
      "El Consejo de Seguridad se compone de 15 miembros: 5 permanentes con derecho de veto (China, Estados Unidos, Federación de Rusia, Francia y Reino Unido) y 10 no permanentes elegidos por la Asamblea General por un período de 2 años (renovándose por mitad cada año); las decisiones requieren el voto afirmativo de 9 miembros (incluidos los votos concurrentes de los 5 permanentes en cuestiones de fondo); el Capítulo VI regula el arreglo pacífico de controversias, el Capítulo VII la acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión (incluyendo el uso de la fuerza), y el Capítulo VIII los acuerdos regionales.",
      "El Consejo de Seguridad tiene 27 miembros y el mandato de los no permanentes es de 5 años.",
      "Alemania, Japón y España son miembros permanentes con derecho de veto desde 1955.",
      "El Capítulo VI autoriza el uso de la fuerza militar coercitiva y el Capítulo VII regula únicamente la mediación diplomática."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas de 1945, Artículos 23, 27 y Capítulos VI, VII y VIII",
    ubicacionTemario: "Bloque 3 > Tema 3 (ONU) > Consejo de Seguridad (15 miembros = 5 permanentes + 10 no permanentes por 2 años; mayoría de 9 votos) y Capítulos VI, VII y VIII",
    consejoAcademia: "¡Cruce de cifras y capítulos de la ONU que cae siempre!: • **Consejo de Seguridad** = **15 miembros** (**5 permanentes** con veto + **10 electos por 2 años**). • Mayoría para adoptar resoluciones = **9 votos de 15**. • **ECOSOC** = **54 miembros** por **3 años**. • **CIJ (La Haya)** = **15 magistrados** por **9 años**. • **Capítulo VI** = Arreglo pacífico | **Capítulo VII** = Acción coercitiva / Uso de la fuerza | **Capítulo VIII** = Acuerdos regionales.",
    justificacion: "Los artículos 23 y 27 de la Carta de la ONU regulan la composición de 15 miembros (5 permanentes y 10 no permanentes por dos años) y la mayoría de 9 votos del Consejo de Seguridad, dedicándose los Capítulos VI, VII y VIII al arreglo pacífico, acciones coercitivas y acuerdos regionales."
  },
  {
    id: "Q-W7-145",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte (OTAN) - Artículos 4, 5 y 6 del Tratado de Washington de 1949",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Tratado del Atlántico Norte (firmado en Washington el 4 de abril de 1949), ¿qué diferencia existe entre el artículo 4 y el artículo 5, cuántas veces se ha invocado el artículo 5 en la historia de la Alianza y cuál fue la fecha de ingreso de España en la OTAN?",
    opciones: [
      "El artículo 4 prevé la consulta entre las Partes cuando la integridad territorial, la independencia política o la seguridad de cualquiera de ellas se vea amenazada; el artículo 5 recoge la cláusula de defensa colectiva (un ataque armado contra una o varias Partes en Europa o América del Norte se considerará un ataque dirigido contra todas ellas, al amparo del artículo 51 de la Carta de la ONU), habiéndose invocado el artículo 5 una única vez en la historia (tras los atentados del 11 de septiembre de 2001 contra EE. UU.); y España ingresó en la OTAN el 30 de mayo de 1982 como 16.º aliado.",
      "El artículo 4 es la cláusula de ataque nuclear automático y el artículo 5 regula las cuotas financieras.",
      "El artículo 5 se ha invocado más de veinte veces y España fue uno de los 12 países fundadores en 1949.",
      "El artículo 6 amplía el área de defensa colectiva del Tratado al Polo Sur y a todo el océano Índico."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte (Washington, 4 de abril de 1949), Artículos 4, 5 y 6",
    ubicacionTemario: "Bloque 3 > Tema 4 (OTAN) > Tratado de Washington (4 de abril de 1949): Artículo 4 (Consultas) vs Artículo 5 (Defensa Colectiva, art. 51 Carta ONU), Concepto Estratégico de Madrid 2022 y 32 Aliados",
    consejoAcademia: "¡Datos de oro del Tema 4 (OTAN)!: • Fundación: **4 de abril de 1949** en Washington (**12 fundadores**). • Ingreso de España: **30 de mayo de 1982** (16.º miembro; en la estructura militar integrada en **1999**). • **Art. 4** = Consultas ante amenaza. • **Art. 5** = Defensa colectiva (invocado **solo 1 vez: 11-S de 2001**). • **Art. 6** = Delimitación geográfica (al norte del **Trópico de Cáncer**, por lo que **Ceuta y Melilla** quedan fuera del literal geográfico del Art. 6 aunque protegidas políticamente por la disuasión de la Cumbre de Madrid 2022). • Número actual de miembros tras **Finlandia (2023)** y **Suecia (marzo 2024)**: **32 aliados**.",
    justificacion: "Los artículos 4 y 5 del Tratado de Washington de 1949 regulan respectivamente las consultas ante amenazas y la defensa colectiva, habiendo ingresado España en la OTAN el 30 de mayo de 1982."
  },
  {
    id: "Q-W7-146",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN - Estructura de Mando Militar: ACO (SHAPE - Mons) vs ACT (Norfolk) y Comité Militar",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro de la estructura civil y militar de la OTAN, ¿cuál es el máximo órgano de decisión política, cuál es la máxima autoridad militar y cuáles son los DOS Mandos Estratégicos de la estructura de mando militar de la Alianza?",
    opciones: [
      "El máximo órgano de decisión política es el Consejo del Atlántico Norte (NAC, presidido por el Secretario General y donde las decisiones se adoptan por consenso/unanimidad); la máxima autoridad militar asesora del NAC es el Comité Militar (MC); y los dos Mandos Estratégicos son el Mando Aliado de Operaciones (ACO / SACEUR, con cuartel general en SHAPE - Mons, Bélgica) y el Mando Aliado de Transformación (ACT / SACT, con cuartel general en Norfolk, Virginia, EE. UU.).",
      "El máximo órgano político es el Parlamento Europeo y el único mando militar está en Ginebra.",
      "ACO está en Norfolk (EE. UU.) y ACT está en Mons (Bélgica).",
      "En el Consejo del Atlántico Norte las decisiones se toman por mayoría simple de la mitad más uno."
    ],
    correcta: 0,
    referencia: "Estructura Civil y Militar de la OTAN (NAC, Comité Militar, ACO y ACT)",
    ubicacionTemario: "Bloque 3 > Tema 4 (OTAN) > Consejo del Atlántico Norte (NAC - Bruselas), Comité Militar y los dos Mandos Estratégicos: ACO (SHAPE, Mons) y ACT (Norfolk, EE. UU.)",
    consejoAcademia: "¡La trampa favorita de examen es intercambiar las sedes de **ACO** y **ACT**!: • **ACO (Mando Aliado de Operaciones)**, mandado por **SACEUR** = **SHAPE (Mons, Bélgica)**. • **ACT (Mando Aliado de Transformación)**, mandado por **SACT** = **Norfolk (Virginia, EE. UU.)**. • Y en España tenemos el **CAOC Torrejón** (Madrid) y el **HQ NRDC-ESP** en **Bétera (Valencia)**.",
    justificacion: "El Consejo del Atlántico Norte (NAC) es el órgano supremo de decisión política por consenso, el Comité Militar es la máxima autoridad militar y los dos Mandos Estratégicos son ACO (en SHAPE, Mons) y ACT (en Norfolk, Virginia)."
  },
  {
    id: "Q-W7-147",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Organización para la Seguridad y la Cooperación en Europa) - Acta Final de Helsinki de 1975 y Cumbre de Budapest de 1994",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Respecto a la Organización para la Seguridad y la Cooperación en Europa (OSCE), señale la opción 100% CORRECTA en relación con su origen, su cambio de denominación, su número de Estados participantes y su sede:",
    opciones: [
      "Tiene su origen en la Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE) y el Acta Final de Helsinki de 1 de agosto de 1975 ( estructurada en tres «cestas» o dimensiones: político-militar, económico-medioambiental y humana); pasó a denominarse OSCE en la Cumbre de Budapest de 1994 (con efecto el 1 de enero de 1995); es la mayor organización regional de seguridad del mundo al amparo del Capítulo VIII de la Carta de la ONU con 57 Estados participantes (de América del Norte, Europa y Asia Central) y su Secretaría tiene sede en Viena (Austria).",
      "Nació en 1945 en Washington, tiene 27 Estados miembros y su sede está en Bruselas.",
      "Cuenta con un ejército permanente propio y una cláusula de defensa colectiva nuclear idéntica al artículo 5 de la OTAN.",
      "Pasó de llamarse OSCE a llamarse CSCE en la Cumbre de Lisboa de 2010."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki (1975), Carta de París (1990) y Cumbre de Budapest (1994)",
    ubicacionTemario: "Bloque 3 > Tema 5 (OSCE) > De la CSCE (Helsinki 1975) a la OSCE (Cumbre de Budapest 1994 / 1 enero 1995), 57 Estados participantes, 3 dimensiones y sede en Viena",
    consejoAcademia: "¡Las 4 claves que te dan el 100% de las preguntas de la **OSCE** (Tema 5 Bloque 3)!: 1) **1975**: **Acta Final de Helsinki** (nace como **CSCE** con sus **3 cestas/dimensiones**: Político-militar, Económico-medioambiental y Humana). 2) **1990**: **Carta de París** para una Nueva Europa. 3) **1994**: **Cumbre de Budapest** (pasa de CSCE a **OSCE** desde el 1 de enero de 1995). 4) **57 Estados participantes** y sede de la Secretaría y del Consejo Permanente en **VIENA (Austria)** (mientras que la **ODIHR** —Oficina de Instituciones Democráticas y Derechos Humanos— está en **Varsovia**).",
    justificacion: "La OSCE nació como CSCE en el Acta Final de Helsinki de 1975, adoptó el nombre de OSCE en la Cumbre de Budapest de 1994, cuenta con 57 Estados participantes y tiene su Secretaría en Viena."
  },
  {
    id: "Q-W7-148",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea (UE) - Tratado de Lisboa, PCSD, Cláusula de Asistencia Mutua (Art. 42.7 TUE) vs Cláusula de Solidaridad (Art. 222 TFUE)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el marco de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea tras el Tratado de Lisboa (firmado en 2007 y en vigor desde el 1 de diciembre de 2009), ¿qué diferencia existe entre la «Cláusula de Asistencia Mutua» y la «Cláusula de Solidaridad»?",
    opciones: [
      "La Cláusula de Asistencia Mutua (artículo 42.7 del Tratado de la Unión Europea - TUE) establece que si un Estado miembro es objeto de una agresión armada en su territorio, los demás Estados miembros le deberán ayuda y asistencia con todos los medios a su alcance (de conformidad con el artículo 51 de la Carta de la ONU y respetando el carácter específico de la política de seguridad y defensa de determinados Estados miembros); mientras que la Cláusula de Solidaridad (artículo 222 del Tratado de Funcionamiento de la Unión Europea - TFUE) establece la actuación conjunta de la Unión y sus Estados miembros si un Estado miembro es objeto de un ataque terrorista o víctima de una catástrofe natural o de origen humano.",
      "Ambas cláusulas están en el Tratado de Roma de 1957 y solo se aplican a crisis agrícolas.",
      "El artículo 42.7 TUE solo se aplica ante terremotos e inundaciones y el artículo 222 TFUE ante una invasión militar extranjera.",
      "La Unión Europea carece de cláusulas de asistencia o solidaridad entre sus 27 Estados miembros."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (Art. 42.7 TUE) y Tratado de Funcionamiento de la Unión Europea (Art. 222 TFUE)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Unión Europea - PCSD) > Cruce estelar de examen: Cláusula de Asistencia Mutua (Art. 42.7 TUE - agresión armada) vs Cláusula de Solidaridad (Art. 222 TFUE - terrorismo o catástrofe natural/humana)",
    consejoAcademia: "¡El cruce estrella del Tema 6 del Bloque 3 (Unión Europea)!: • **Art. 42.7 TUE = Cláusula de ASISTENCIA MUTUA** (ante **agresión armada** en el territorio de un Estado miembro; invocada por Francia tras los atentados de París de noviembre de 2015). • **Art. 222 TFUE = Cláusula de SOLIDARIDAD** (ante **ataque terrorista** o **catástrofe natural o de origen humano**).",
    justificacion: "El artículo 42.7 del TUE regula la cláusula de asistencia mutua en caso de agresión armada y el artículo 222 del TFUE regula la cláusula de solidaridad frente a ataques terroristas o catástrofes naturales o de origen humano."
  },
  {
    id: "Q-W7-149",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea (UE) - Instituciones del Artículo 13 TUE, PESCO, EDA y Brújula Estratégica",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 13 del Tratado de la Unión Europea (TUE) y a la arquitectura de la PCSD, ¿cuáles son las SIETE Instituciones oficiales de la Unión Europea y qué son la PESCO, la EDA y la Capacidad de Despliegue Rápido de la Brújula Estratégica?",
    opciones: [
      "Las 7 Instituciones de la UE son: el Parlamento Europeo, el Consejo Europeo, el Consejo de la Unión Europea (Consejo), la Comisión Europea, el Tribunal de Justicia de la Unión Europea, el Banco Central Europeo y el Tribunal de Cuentas; en el ámbito PCSD destacan la Cooperación Estructurada Permanente (PESCO, art. 42.6 y 46 TUE), la Agencia Europea de Defensa (EDA, creada en 2004) y la Capacidad de Despliegue Rápido de la UE (EU RDC) de hasta 5.000 efectivos prevista en la Brújula Estratégica (Strategic Compass, aprobada en marzo de 2022).",
      "El Consejo de Europa (con sede en Estrasburgo y 46 países) y el Tribunal Europeo de Derechos Humanos forman parte de las 7 instituciones de la Unión Europea.",
      "La Unión Europea tiene solo 3 instituciones y carece de Agencia Europea de Defensa.",
      "España ingresó en las Comunidades Europeas en 1957 como miembro fundador."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (Arts. 13, 42, 45 y 46 TUE) y Brújula Estratégica de la UE (2022)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Unión Europea) > Las 7 Instituciones de la UE (Art. 13 TUE), diferencia con el Consejo de Europa, PESCO, EDA y Capacidad de Despliegue Rápido (5.000 efectivos)",
    consejoAcademia: "¡Cuidado con la trampa mortal de los **3 «Consejos»**!: 1) **Consejo Europeo** (Jefes de Estado o de Gobierno de los 27 + Presidente del Consejo Europeo + Presidente de la Comisión; **Institución UE**). 2) **Consejo de la Unión Europea** (Ministros de los 27 por ramos; **Institución UE**). 3) **Consejo de Europa** (Organización internacional de **46 países** con sede en **Estrasburgo** para los Derechos Humanos —TEDH—, que **NO pertenece a la Unión Europea**). Y recuerda: España firmó su adhesión a las Comunidades Europeas el **12 de junio de 1985** y entró en vigor el **1 de enero de 1986**.",
    justificacion: "El artículo 13 del TUE enumera las siete instituciones de la Unión Europea, y en el ámbito de la PCSD destacan la PESCO, la Agencia Europea de Defensa (EDA) y la Capacidad de Despliegue Rápido de hasta 5.000 efectivos de la Brújula Estratégica de 2022."
  },
  {
    id: "Q-W7-150",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales - Autorización de Operaciones en el Exterior (Arts. 17 y 19 LO 5/2005)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 17 y 19 de la Ley Orgánica 5/2005, de la Defensa Nacional, y a la doctrina sobre la participación de España en misiones internacionales de paz, ¿qué requisitos exige la ley española para ordenar operaciones en el exterior que NO estén directamente relacionadas con la defensa de España o del interés nacional?",
    opciones: [
      "El Gobierno deberá realizar una consulta previa y recabar la autorización del Congreso de los Diputados (no del Senado); y en aquellas misiones que requieran una respuesta rápida o urgente, los trámites de consulta y autorización se realizarán por procedimientos de urgencia que permitan cumplir con los compromisos internacionales, o bien, si por razones de máxima urgencia no fuera posible realizar la consulta previa, el Gobierno someterá al Congreso de los Diputados lo antes posible la decisión adoptada para su ratificación.",
      "Solo requiere una orden verbal del Comandante del Mando de Operaciones sin intervención del Gobierno ni del Congreso.",
      "Exige un referéndum nacional vinculante convocado por el Senado con seis meses de antelación.",
      "La Ley Orgánica 5/2005 prohíbe a las Fuerzas Armadas españolas participar en misiones de la ONU, la OTAN o la Unión Europea."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, de 17 de noviembre, de la Defensa Nacional, Artículos 17 y 19",
    ubicacionTemario: "Bloque 3 > Tema 7 (España y su participación en Misiones Internacionales) > Requisitos legales de la LO 5/2005 (Consulta previa y autorización del Congreso de los Diputados; procedimiento de urgencia y ratificación)",
    consejoAcademia: "¡En el Tema 7 del Bloque 3 siempre conectan las misiones internacionales con los **Arts. 4.2, 17 y 19 de la LO 5/2005**!: • ¿Quién **ordena** las misiones? El **Gobierno**. • ¿Quién **autoriza** previamente? El **Congreso de los Diputados** (en Pleno o en Comisión de Defensa). • ¿Y si hay **máxima urgencia**? El Gobierno decide y lo somete **lo antes posible al Congreso para su RATIFICACIÓN**.",
    justificacion: "Los artículos 17 y 19 de la LO 5/2005 exigen que para ordenar operaciones en el exterior no directamente relacionadas con la defensa de España o del interés nacional el Gobierno realice consulta previa y recabe la autorización del Congreso de los Diputados (o su ratificación lo antes posible en caso de máxima urgencia)."
  },
  {
    id: "Q-W7-151",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales - Principales Operaciones de la ONU, OTAN y UE con presencia española",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Relacione correctamente cada una de las siguientes misiones internacionales en las que participan las Fuerzas Armadas españolas con la Organización Internacional bajo cuya bandera se desarrolla (ONU, OTAN o Unión Europea):",
    opciones: [
      "1) Bajo bandera de la ONU: UNIFIL / FINUL (Operación Libre Hidalgo en el Líbano, iniciada en 2006 tras la Resolución 1701); 2) Bajo bandera de la Unión Europea (PCSD): EUNAVFOR Operación Atalanta (lucha contra la piratería en el océano Índico/Cuerno de África, con su Cuartel General Operacional OHQ en la Base Naval de Rota, España), EUTM Malí / República Centroafricana / Somalia y EUFOR Althea (Bosnia y Herzegovina); y 3) Bajo bandera de la OTAN: Presencia Avanzada Reforzada (eFP en Letonia y Eslovaquia), Policía Aérea del Báltico (BAP), Sea Guardian (Mediterráneo), Apoyo a Turquía (Patriot en Adana/Incirlik) y NMI (Misión de la OTAN en Irak).",
      "La Operación Atalanta es una misión de la OSCE y la misión UNIFIL del Líbano pertenece a la OTAN.",
      "La Policía Aérea del Báltico (BAP) y la presencia en Letonia son misiones de la Corte Internacional de Justicia.",
      "El Cuartel General Operacional (OHQ) de la Operación Atalanta está en Moscú."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las Fuerzas Armadas Españolas (EMAD - MOPS)",
    ubicacionTemario: "Bloque 3 > Tema 7 (España y su participación en Misiones Internacionales) > Mapa maestro de misiones por bandera: ONU (UNIFIL/Libre Hidalgo), UE (Atalanta con OHQ en Rota, EUTM, Althea) y OTAN (eFP Letonia/Eslovaquia, BAP, Sea Guardian, NMI Irak)",
    consejoAcademia: "¡Esta tabla de misiones por bandera cae TODOS los años en el examen oficial!: • **ONU**: **UNIFIL / FINUL** en el **Líbano** (Operación *Libre Hidalgo*, Brigada Multinacional Sector Este en Marjayoun) + observadores en **Colombia**. • **UNIÓN EUROPEA (PCSD)**: **EUNAVFOR Atalanta** (Índico/Somalia, ¡con su **OHQ en ROTA** desde 2019 tras el Brexit!), **EUTM** (Malí, RCA, Somalia, Mozambique) y **EUFOR Althea** (Bosnia). • **OTAN**: **eFP** (**Letonia** y **Eslovaquia**), **BAP** (Policía Aérea del Báltico), **Sea Guardian** (Mediterráneo), **Apoyo a Turquía** (Batería Patriot en Incirlik/Adana) y **NMI** (Irak). • **Primera misión de España en la ONU (1989)**: **UNAVEM I** (Angola) y **UNTAG** (Namibia).",
    justificacion: "España participa en UNIFIL (Líbano) bajo bandera de la ONU; en EUNAVFOR Atalanta (con OHQ en Rota), las misiones EUTM y EUFOR Althea bajo bandera de la UE; y en eFP (Letonia y Eslovaquia), BAP, Sea Guardian, Apoyo a Turquía y NMI (Irak) bajo bandera de la OTAN."
  },
  {
    id: "Q-W7-152",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 - Reforma Constitucional Ordinaria (Art. 167) vs Agravada (Art. 168)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los procedimientos de reforma constitucional de los artículos 167 (ordinario) y 168 (agravado) de la Constitución Española de 1978 y señale la opción 100% CORRECTA:",
    opciones: [
      "1) El procedimiento ordinario (Art. 167) exige mayoría de tres quintos (3/5) de cada una de las Cámaras (o 2/3 del Congreso y mayoría absoluta del Senado si tras Comisión paritaria no hay acuerdo), y solo se somete a referéndum cuando así lo soliciten, dentro de los 15 días siguientes a su aprobación, una décima parte (1/10) de los miembros de cualquiera de las Cámaras; mientras que 2) El procedimiento agravado (Art. 168) se aplica a la revisión total de la Constitución o a una parcial que afecte al Título Preliminar (arts. 1 a 9), al Capítulo II, Sección 1.ª del Título I (arts. 15 a 29) o al Título II (La Corona, arts. 56 a 65), exigiendo aprobación del principio por mayoría de dos tercios (2/3) de cada Cámara, disolución inmediata de las Cortes, ratificación y aprobación del nuevo texto por mayoría de 2/3 de ambas Cámaras y referéndum obligatorio.",
      "El artículo 14 y el artículo 10 de la Constitución se reforman por el procedimiento agravado del artículo 168.",
      "El referéndum es obligatorio en el artículo 167 y facultativo en el artículo 168.",
      "Se puede iniciar la reforma de la Constitución en tiempo de guerra o durante la vigencia del estado de alarma (Art. 169)."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Artículos 167, 168 y 169",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española de 1978) > Título X: Reforma Constitucional Ordinaria (Art. 167: 3/5 y referéndum si lo pide 1/10 en 15 días) vs Agravada (Art. 168: 2/3 + disolución + 2/3 + referéndum obligatorio)",
    consejoAcademia: "¡Tres trampas letales del Título X de la Constitución!: 1) ¿Qué partes van por el **Art. 168 (2/3)**? Revisión total + **Título Preliminar (arts. 1-9)** + **Sección 1.ª del Cap. II del Título I (arts. 15 a 29)** + **Título II (La Corona, arts. 56-65)**. ¡OJO: el **Art. 10** y el **Art. 14** quedan FUERA del Art. 168 y van por el **Art. 167 (3/5)**! 2) En el **Art. 167** el referéndum es **facultativo** (si lo pide **1/10** de Diputados o Senadores en **15 días**). 3) Según el **Art. 169**, **NO podrá iniciarse** la reforma constitucional en **tiempo de guerra** o de vigencia de alguno de los estados del **Art. 116** (alarma, excepción y sitio).",
    justificacion: "Los artículos 167 y 168 de la Constitución regulan los procedimientos ordinario (mayoría de 3/5 y referéndum facultativo a solicitud de 1/10 en 15 días) y agravado (mayoría de 2/3, disolución de Cortes y referéndum obligatorio para revisión total, Título Preliminar, arts. 15 a 29 y Título II)."
  },
  {
    id: "Q-W7-153",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 - Las Tres Reformas Constitucionales (1992, 2011 y 2024)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Cuántas reformas se han aprobado en la Constitución Española de 1978 hasta la actualidad, en qué años, qué artículos se modificaron y por qué procedimiento se tramitaron todas ellas?",
    opciones: [
      "Se han aprobado TRES reformas constitucionales, todas ellas por el procedimiento ordinario del artículo 167 y sin celebración de referéndum: 1.ª en 1992 (artículo 13.2, añadiendo las palabras «y pasivo» en el sufragio municipal de extranjeros por el Tratado de Maastricht); 2.ª en 2011 (artículo 135, consagrando el principio de estabilidad presupuestaria); y 3.ª en 2024 (artículo 49, sustituyendo el término «disminuidos» por «personas con discapacidad»).",
      "Solo se han aprobado dos reformas (1992 y 2011) por el procedimiento agravado del artículo 168.",
      "La reforma del artículo 49 en 2024 exigió la disolución de las Cortes Generales por estar en la Sección 1.ª.",
      "Se han aprobado cinco reformas constitucionales, todas ellas sometidas a referéndum nacional."
    ],
    correcta: 0,
    referencia: "Reformas de la Constitución Española de 27 de agosto de 1992 (Art. 13.2), 27 de septiembre de 2011 (Art. 135) y 15 de febrero de 2024 (Art. 49)",
    ubicacionTemario: "Bloque 1 > Tema 1 (Constitución Española de 1978) > Las 3 reformas constitucionales: 1992 (Art. 13.2), 2011 (Art. 135) y 2024 (Art. 49)",
    consejoAcademia: "¡Pregunta actualizada de examen oficial!: Ya son **3 reformas de la Constitución Española** (y las 3 por el **Art. 167 sin referéndum**): • **1992**: **Art. 13.2** («y pasivo»). • **2011**: **Art. 135** (estabilidad presupuestaria). • **2024**: **Art. 49** («personas con discapacidad»).",
    justificacion: "La Constitución Española de 1978 ha sido reformada en tres ocasiones por la vía del artículo 167: en 1992 (art. 13.2), en 2011 (art. 135) y en febrero de 2024 (art. 49)."
  },
  {
    id: "Q-W7-154",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Atribuciones del Rey, las Cortes Generales, el Gobierno, el Presidente y el Ministro (Arts. 3 a 7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el reparto de competencias de los artículos 4, 5, 6 y 7 de la Ley Orgánica 5/2005, de la Defensa Nacional, ¿a quién corresponde «ordenar las misiones de las Fuerzas Armadas y disponer su empleo», a quién corresponde «determinar y ejecutar la política de defensa» y a quién corresponde «desarrollar y ejecutar la política de defensa»?",
    opciones: [
      "«Determinar y ejecutar la política de defensa» corresponde al GOBIERNO (Art. 5); «ordenar las misiones de las Fuerzas Armadas y disponer su empleo» (así como dirigir la política de defensa y ejercer su autoridad para ordenar, coordinar y dirigir la actuación de las FAS) corresponde al PRESIDENTE DEL GOBIERNO (Art. 6); y «desarrollar y ejecutar la política de defensa» (así como dirigir la actuación de las FAS bajo la autoridad del Presidente del Gobierno) corresponde al MINISTRO DE DEFENSA (Art. 7).",
      "Determinar la política de defensa corresponde al JEMAD y ordenar las misiones al Subsecretario de Defensa.",
      "Desarrollar y ejecutar la política de defensa corresponde al Senado y disponer el empleo de las FAS al Defensor del Pueblo.",
      "Todas las funciones anteriores corresponden en exclusiva al Jefe de Estado Mayor del Ejército de Tierra."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, de 17 de noviembre, de la Defensa Nacional, Artículos 5, 6 y 7",
    ubicacionTemario: "Bloque 1 > Tema 2 (LO 5/2005 Defensa Nacional) > Verbos exactos de examen: Gobierno («Determinar y ejecutar», Art. 5) vs Presidente («Dirigir la política de defensa y ordenar las misiones», Art. 6) vs Ministro («Desarrollar y ejecutar», Art. 7)",
    consejoAcademia: "¡En los exámenes oficiales de Permanencia te cambian una sola palabra entre los **Arts. 5, 6 y 7 de la LO 5/2005**!: • **GOBIERNO (Art. 5)** = **DETERMINAR** y ejecutar la política de defensa. • **PRESIDENTE DEL GOBIERNO (Art. 6)** = **DIRIGIR** la política de defensa + **ORDENAR las misiones** de las FAS y disponer su empleo + aprobar la **Directiva de Defensa Nacional (DDN)**. • **MINISTRO DE DEFENSA (Art. 7)** = **DESARROLLAR** y ejecutar la política de defensa + elaborar y aprobar la **Directiva de Política de Defensa**.",
    justificacion: "Los artículos 5, 6 y 7 de la LO 5/2005 atribuyen al Gobierno determinar la política de defensa, al Presidente del Gobierno dirigirla y ordenar las misiones de las FAS, y al Ministro de Defensa desarrollar y ejecutar la política de defensa."
  },
  {
    id: "Q-W7-155",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Abstención y Recusación (Arts. 23 y 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 23 y 24 de la Ley 40/2015, de Régimen Jurídico del Sector Público, ¿cuáles son los grados de parentesco que obligan a una autoridad o empleado público a abstenerse de intervenir en el procedimiento, qué ocurre si el recusado niega la causa de recusación y qué recurso cabe contra la resolución del incidente de recusación?",
    opciones: [
      "Es motivo de abstención (y de recusación) tener vínculo matrimonial o situación de hecho asimilable y el parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo, con cualquiera de los interesados (y también con los asesores, representantes legales o mandatarios que intervengan en el procedimiento, si bien con éstos la ley exige compartir despacho profesional o estar asociado con ellos); si el recusado niega la causa de recusación, el superior resolverá en el plazo de 3 días previos los informes y comprobaciones que considere oportunos; y contra las resoluciones adoptadas en esta materia NO cabrá recurso, sin perjuicio de la posibilidad de alegar la recusación al interponer el recurso que proceda contra el acto que ponga fin al procedimiento.",
      "El parentesco es de segundo grado de consanguinidad y cuarto de afinidad, y cabe recurso de alzada directo contra el rechazo de la recusación.",
      "La actuación de autoridades en las que concurran motivos de abstención implica siempre y necesariamente la nulidad radical del acto.",
      "La recusación solo puede plantearse una vez que el procedimiento ha terminado y archivado."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, de 1 de octubre, LRJSP, Artículos 23 y 24",
    ubicacionTemario: "Bloque 1 > Tema 3 (Ley 40/2015 LRJSP) > Abstención y Recusación (Arts. 23 y 24: 4.º grado consanguinidad / 2.º afinidad; resolución en 3 días; no implica necesariamente invalidez; sin recurso directo)",
    consejoAcademia: "¡Cuatro perlas de los **Arts. 23 y 24 Ley 40/2015** que caen siempre!: 1) Parentesco: **4.º grado de CONSANGUINIDAD** y **2.º grado de AFINIDAD** (y tener cuestión litigiosa pendiente, amistad íntima, enemistad manifiesta o haber prestado servicios profesionales en los **2 últimos años**). 2) La no abstención **NO implicará, necesariamente, y en todo caso, la invalidez** de los actos (Art. 23.4). 3) Plazo del superior para resolver si el recusado niega la causa: **3 DÍAS** (si la admite, lo sustituye en el acto al día siguiente). 4) **NO cabe recurso** contra la resolución del incidente de recusación.",
    justificacion: "Los artículos 23 y 24 de la Ley 40/2015 fijan el parentesco de cuarto grado de consanguinidad y segundo de afinidad, el plazo de tres días para que el superior resuelva la recusación si el recusado la niega y la improcedencia de recurso directo contra dicha resolución."
  },
  {
    id: "Q-W7-156",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa - CNI, CIFAS y CESTIC",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare el encuadramiento orgánico o funcional dentro del Ministerio de Defensa y las Fuerzas Armadas de los siguientes tres órganos: 1) Centro Nacional de Inteligencia (CNI), 2) Centro de Inteligencia de las Fuerzas Armadas (CIFAS) y 3) Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC), y señale la opción 100% CORRECTA:",
    opciones: [
      "1) El CNI está adscrito orgánicamente al Ministerio de Defensa (a través de la persona titular del Departamento, con rango de Secretario de Estado-Director); 2) El CIFAS forma parte del Estado Mayor Conjunto de la Defensa (EMACON) dentro del Estado Mayor de la Defensa (EMAD, bajo dependencia del JEMAD), siendo el órgano responsable de facilitar inteligencia militar al Ministro y al JEMAD; y 3) El CESTIC es una Dirección General dependiente directamente de la persona titular del Ministerio de Defensa (conforme al RD 205/2024).",
      "Tanto el CNI como el CIFAS y el CESTIC dependen del Jefe de Estado Mayor del Ejército de Tierra.",
      "El CIFAS depende de la Secretaría de Estado de Defensa y el CESTIC depende de la Guardia Real.",
      "El CNI forma parte de la Subsecretaría de Defensa con rango de Subdirección General."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Ley 11/2002 del CNI y Orden DEF/710/2020 del EMAD",
    ubicacionTemario: "Bloque 1 > Tema 4 y Tema 5 > Cruce de siglas de examen: CNI (adscrito al Ministro de Defensa) vs CIFAS (dentro de EMACON/EMAD) vs CESTIC (Dirección General dependiente directamente del Ministro)",
    consejoAcademia: "¡Cruce de siglas letal en los Temas 4 y 5 del Bloque 1!: • **CNI** = Adscrito al **Ministro de Defensa**. • **CESTIC** = Dirección General dependiente **directamente del Ministro de Defensa** (RD 205/2024). • **CIFAS** = Centro de Inteligencia de las FAS, integrado en el **EMACON (dentro del EMAD - JEMAD)**.",
    justificacion: "El CNI está adscrito al Ministerio de Defensa, el CESTIC depende directamente de la persona titular del Ministerio de Defensa con rango de Dirección General (RD 205/2024) y el CIFAS se integra en el EMACON dentro del EMAD."
  },
  {
    id: "Q-W7-157",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS y Orden DEF/710/2020 - Órganos Auxiliares del JEMAD",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020 y a la Orden DEF/710/2020, por la que se desarrolla la organización básica del Estado Mayor de la Defensa (EMAD), ¿cuáles son los órganos básicos del EMAD y qué centro docente militar de altos estudios se integra en él?",
    opciones: [
      "Los órganos básicos del EMAD son el Cuartel General del EMAD (que incluye el EMACON y el Gabinete del JEMAD), el Mando de Operaciones (MOPS), el Mando Conjunto del Ciberespacio (MCCE), el Centro de Inteligencia de las Fuerzas Armadas (CIFAS) y el Centro Superior de Estudios de la Defensa Nacional (CESEDEN, que incluye la Escuela Superior de las Fuerzas Armadas - ESFAS).",
      "El EMAD está integrado únicamente por el Mando de Personal (MAPER) y el Mando de Apoyo Logístico (MALE).",
      "El CESEDEN depende del Ejército del Aire y del Espacio y el MCCE depende del Ayuntamiento de Madrid.",
      "El Mando de Operaciones (MOPS) forma parte de la Subsecretaría de Defensa."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, de 19 de mayo, y Orden DEF/710/2020, de 27 de julio",
    ubicacionTemario: "Bloque 1 > Tema 5 (Organización Básica de las FAS - RD 521/2020) > Estructura del Estado Mayor de la Defensa (EMAD): EMACON, MOPS, MCCE, CIFAS y CESEDEN (ESFAS)",
    consejoAcademia: "Memoriza el quinteto del **EMAD (JEMAD)**: **EMACON** + **MOPS** + **MCCE** + **CIFAS** + **CESEDEN (con la ESFAS)**.",
    justificacion: "El RD 521/2020 y la Orden DEF/710/2020 estructuran el EMAD con el Cuartel General (EMACON), el MOPS, el MCCE, el CIFAS y el CESEDEN."
  },
  {
    id: "Q-W7-158",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 del Ejército de Tierra - Organización de la Fuerza del Ejército de Tierra",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021, del Jefe de Estado Mayor del Ejército de Tierra (JEME), por la que se desarrolla la organización del Ejército de Tierra, ¿en qué tres grandes Mandos de primer nivel se articula la Fuerza del Ejército de Tierra y dónde radican sus respectivos Cuarteles Generales?",
    opciones: [
      "1) El Cuartel General Terrestre de Alta Disponibilidad (CGTAD), con sede en Valencia (y su Estado Mayor Internacional HQ NRDC-ESP en Bétera); 2) la Fuerza Terrestre (FUTER), con sede en Sevilla (que encuadra las Divisiones «Castillejos» en Huesca y «San Marcial» en Burgos, además del Mando de Apoyo a la Maniobra en A Coruña); y 3) el Mando de Canarias del Ejército de Tierra (MCANA), con sede en Santa Cruz de Tenerife (que encuadra las Comandancias Generales de Baleares, Ceuta y Melilla, y la Brigada «Canarias» XVI).",
      "1) El MACOM en Madrid, 2) el MACAN en Las Palmas y 3) la FLOTA en Rota.",
      "Solo existe una única División en toda la Fuerza del Ejército de Tierra con sede en Zaragoza.",
      "Las Comandancias Generales de Ceuta, Melilla y Baleares dependen de la Fuerza Terrestre (FUTER) en Sevilla."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021, de 8 de marzo, del JEME, por la que se desarrolla la organización del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Instrucción 14/2021 del ET) > La Fuerza del ET: CGTAD (Valencia/Bétera), FUTER (Sevilla: Div. Castillejos, Div. San Marcial y MAM) y MCANA (Tenerife: COMGEBAL, COMGECEU, COMGEMEL y BRICAN XVI)",
    consejoAcademia: "¡La trampa más repetida del Tema 6 (Instrucción 14/2021 del ET)!: Desde la reorganización del ET, las **Comandancias Generales de Baleares (COMGEBAL), Ceuta (COMGECEU) y Melilla (COMGEMEL)**, junto con la **Brigada «Canarias» XVI**, dependen del **Mando de Canarias (MCANA, en Santa Cruz de Tenerife)**, ¡y NO de FUTER (Sevilla)!",
    justificacion: "La Instrucción 14/2021 del JEME articula la Fuerza del Ejército de Tierra en el CGTAD (Valencia), la Fuerza Terrestre - FUTER (Sevilla, con las Divisiones Castillejos y San Marcial y el MAM) y el Mando de Canarias - MCANA (Santa Cruz de Tenerife, que integra COMGEBAL, COMGECEU, COMGEMEL y la BRICAN XVI)."
  },
  {
    id: "Q-W7-159",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T07",
    materia: "Instrucción 15/2021 de la Armada - Estructura de la Flota y Apoyo a la Fuerza",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 15/2021, del Almirante Jefe de Estado Mayor de la Armada (AJEMA), por la que se desarrolla la organización de la Armada, ¿cuál es el órgano único que integra la Fuerza de la Armada, quién lo manda y cuáles son los tres órganos que integran el Apoyo a la Fuerza de la Armada?",
    opciones: [
      "La Fuerza de la Armada se denomina «La Flota» (mandada por el Almirante de la Flota - ALFLOT, con Cuartel General en la Base Naval de Rota), que agrupa la Fuerza de Acción Naval (ALNAV), la Fuerza de Acción Marítima (ALMART, en Cartagena), la Fuerza de Infantería de Marina (COMGEIM: Tercio de Armada - TEAR, Fuerza de Protección - FUPRO y Fuerza de Guerra Naval Especial - FGNE), la Flotilla de Aeronaves (FLOAN) y la Flotilla de Submarinos (FLOSUB); y el Apoyo a la Fuerza lo integran la Jefatura de Personal (JEPER), la Jefatura de Apoyo Logístico (JAL) y la Dirección de Asuntos Económicos (DAE).",
      "La Fuerza de la Armada se divide en FUTER y MACOM, y su Apoyo a la Fuerza se denomina MAPER y MALE.",
      "La Fuerza de Acción Marítima tiene su cuartel general en Madrid y la Flota en Valladolid.",
      "La Infantería de Marina pertenece orgánicamente al Ejército de Tierra."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021, de 11 de marzo, del AJEMA, por la que se desarrolla la organización de la Armada",
    ubicacionTemario: "Bloque 1 > Tema 7 (Instrucción 15/2021 de la Armada) > La Flota (ALFLOT en Rota: ALNAV, ALMART en Cartagena, COMGEIM [TEAR, FUPRO, FGNE], FLOAN y FLOSUB) y Apoyo a la Fuerza (JEPER, JAL y DAE)",
    consejoAcademia: "¡Compara las siglas de **Apoyo a la Fuerza** de los 3 Ejércitos (Temas 6, 7 y 8 del Bloque 1)!: • **Ejército de Tierra (Inst. 14/2021)**: **MAPER** + **MALE** + **MADOC** (en Granada) + **DIAE**. • **Armada (Inst. 15/2021)**: **JEPER** + **JAL** + **DAE** (¡la enseñanza naval está dentro de **JEPER - DIENA**!). • **Ejército del Aire y del Espacio (Inst. 6/2025)**: **MAPER** + **MALOG** + **DAE**.",
    justificacion: "La Instrucción 15/2021 del AJEMA organiza la Fuerza de la Armada en la Flota (ALFLOT, con sede en Rota) y el Apoyo a la Fuerza en la Jefatura de Personal (JEPER), la Jefatura de Apoyo Logístico (JAL) y la Dirección de Asuntos Económicos (DAE)."
  },
  {
    id: "Q-W7-160",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T08",
    materia: "Instrucción 6/2025 del Ejército del Aire y del Espacio - La Fuerza (MACOM, MACAN y MESP) y Cambio de Denominación (RD 524/2022)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 524/2022 y a la Instrucción 6/2025, del Jefe de Estado Mayor del Ejército del Aire y del Espacio (JEMA), ¿cuáles son los mandos que integran la Fuerza del Ejército del Aire y del Espacio y qué centros se encuadran en el Mando del Espacio (MESP)?",
    opciones: [
      "La Fuerza del Ejército del Aire y del Espacio está integrada por el Mando Aéreo de Combate (MACOM, en Torrejón de Ardoz), el Mando Aéreo de Canarias (MACAN, en Las Palmas de Gran Canaria) y el Mando del Espacio (MESP, en la Base Aérea de Torrejón de Ardoz), encuadrándose en el MESP el Centro de Operaciones de Vigilancia Espacial (COVE) y el Centro de Sistemas Aeroespaciales de Observación (CESAEROB).",
      "La Fuerza del Ejército del Aire y del Espacio está formada por la Flota y la Fuerza Terrestre.",
      "El Mando del Espacio (MESP) depende de la Armada y tiene su sede en Cartagena.",
      "El cambio de denominación a Ejército del Aire y del Espacio se aprobó en el año 1978."
    ],
    correcta: 0,
    referencia: "Real Decreto 524/2022, de 27 de junio, e Instrucción 6/2025, del JEMA",
    ubicacionTemario: "Bloque 1 > Tema 8 (Instrucción 6/2025 del Ejército del Aire y del Espacio) > La Fuerza Aeroespacial: MACOM, MACAN y MESP (COVE + CESAEROB)",
    consejoAcademia: "¡Novedad clave de la **Instrucción 6/2025 del JEMA**!: La Fuerza del Ejército del Aire y del Espacio suma al **MACOM** y al **MACAN** el nuevo **Mando del Espacio (MESP)** (con el **COVE** y el **CESAEROB** en Torrejón de Ardoz), además del **Mando Aéreo General (MAGEN)** en el Cuartel General.",
    justificacion: "La Instrucción 6/2025 del JEMA articula la Fuerza del Ejército del Aire y del Espacio con el MACOM, el MACAN y el Mando del Espacio (MESP, que integra el COVE y el CESAEROB)."
  },
  {
    id: "Q-W7-161",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería - Reserva de Plazas para Fuerzas y Cuerpos de Seguridad y Administración Civil (Arts. 20 y 21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los porcentajes de reserva de plazas establecidos en los artículos 20 y 21 de la Ley 8/2006, de Tropa y Marinería, para los militares profesionales de tropa y marinería que lleven más de 5 años de servicios efectivos:",
    opciones: [
      "1) Guardia Civil (Escala de Cabos y Guardias): reserva de un MÍNIMO del 40% de las plazas; 2) Cuerpo Nacional de Policía (Escala Básica): reserva de un MÍNIMO del 20% de las plazas; 3) Servicio de Vigilancia Aduanera: reserva de un MÍNIMO del 20% de las plazas; y 4) Personal laboral fijo del Ministerio de Defensa (y acceso libre a funcionarios/laborales de la Administración civil): reserva de al menos el 50% de las plazas de personal laboral convocadas por el Ministerio de Defensa.",
      "Para la Guardia Civil se reserva un máximo del 10% y para la Policía Nacional un máximo del 5%.",
      "Para acceder a la reserva del artículo 20 basta con llevar 6 meses de servicio como soldado.",
      "La Ley 8/2006 prohíbe reservar plazas de personal laboral en el Ministerio de Defensa."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, de 24 de abril, de Tropa y Marinería, Artículos 20 y 21",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 8/2006 de Tropa y Marinería) > Porcentajes de reserva de plazas tras > 5 años de servicio (Arts. 20 y 21: Guardia Civil mín. 40%, Policía Nacional mín. 20%, Vigilancia Aduanera mín. 20%, Laboral MINISDEF mín. 50%)",
    consejoAcademia: "¡Tabla de porcentajes de la **Ley 8/2006** que cae TODOS los años (requisito: **más de 5 años de servicios**)!: • **Guardia Civil** = **mínimo 40%**. • **Policía Nacional** = **mínimo 20%**. • **Vigilancia Aduanera** = **mínimo 20%**. • **Personal laboral del Ministerio de Defensa** = **al menos 50%**.",
    justificacion: "Los artículos 20 y 21 de la Ley 8/2006 fijan para los militares de tropa y marinería con más de 5 años de servicios una reserva mínima del 40% en la Guardia Civil, del 20% en la Policía Nacional, del 20% en Vigilancia Aduanera y de al menos el 50% en plazas de personal laboral del Ministerio de Defensa."
  },
  {
    id: "Q-W7-162",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Cuerpos Comunes de las Fuerzas Armadas (Arts. 25 a 29)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 25 a 29 de la Ley 39/2007, de la Carrera Militar, ¿cuáles son los CUATRO Cuerpos Comunes de las Fuerzas Armadas, de qué autoridad dependen orgánicamente y en cuál de ellos existen DOS escalas (Escala de Oficiales y Escala de Suboficiales)?",
    opciones: [
      "Los 4 Cuerpos Comunes son: el Cuerpo Jurídico Militar, el Cuerpo Militar de Intervención, el Cuerpo Militar de Sanidad y el Cuerpo de Músicas Militares; dependen orgánicamente de la Subsecretaría de Defensa (a través de la Dirección General de Personal - DIGENPER); y el único de los cuatro que cuenta con Escala de Oficiales y Escala de Suboficiales es el Cuerpo de Músicas Militares (mientras que el Jurídico, el de Intervención y el de Sanidad cuentan solo con Escala de Oficiales, además de los Oficiales Enfermeros en Sanidad).",
      "Los Cuerpos Comunes dependen del JEMAD y todos ellos tienen Escala de Tropa y Marinería.",
      "El Cuerpo de Intendencia y el Cuerpo de Ingenieros Politécnicos son Cuerpos Comunes.",
      "El Cuerpo Jurídico Militar tiene Escala de Suboficiales y Escala de Tropa."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar, Artículos 25, 26, 27, 28 y 29",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Los 4 Cuerpos Comunes de las FAS (Jurídico, Intervención, Sanidad y Músicas Militares): dependencia de SUBDEF y escalas",
    consejoAcademia: "¡Dos trampas clásicas sobre los **Cuerpos Comunes (Arts. 25-29 Ley 39/2007)**!: 1) **Intendencia** e **Ingenieros** **NO son Cuerpos Comunes** (cada Ejército tiene su propio Cuerpo de Intendencia y de Ingenieros). Los **4 Cuerpos Comunes** son solo: **Jurídico, Intervención, Sanidad y Músicas Militares** (y dependen de **SUBDEF**). 2) El **ÚNICO Cuerpo Común que tiene Escala de Suboficiales** es el **Cuerpo de Músicas Militares** (Art. 29). ¡Ningún Cuerpo Común tiene Escala de Tropa y Marinería!",
    justificacion: "Los artículos 25 a 29 de la Ley 39/2007 regulan los cuatro Cuerpos Comunes de las FAS (Jurídico, Intervención, Sanidad y Músicas Militares), siendo el Cuerpo de Músicas Militares el único que cuenta con Escala de Oficiales y Escala de Suboficiales."
  },
  {
    id: "Q-W7-163",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Sistemas de Ascenso en las Fuerzas Armadas (Arts. 88 a 92)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 88 y 89 de la Ley 39/2007, de la Carrera Militar, ¿cuáles son los CUATRO sistemas de ascenso existentes en las Fuerzas Armadas y por qué sistema se asciende en la Escala de Tropa y Marinería a los empleos de Cabo, Cabo Primero y Cabo Mayor?",
    opciones: [
      "Los cuatro sistemas de ascenso son: Elección, Clasificación, Concurso o Concurso-oposición y Antigüedad; y en la Escala de Tropa y Marinería se asciende a Cabo y a Cabo Primero por el sistema de Concurso o Concurso-oposición, y a Cabo Mayor por el sistema de Elección.",
      "A Cabo se asciende por Antigüedad, a Cabo Primero por Clasificación y a Cabo Mayor por Concurso-oposición.",
      "Todos los empleos de Tropa y Marinería ascienden exclusivamente por Antigüedad automática a los dos años.",
      "A Cabo Mayor se asciende por sorteo entre todos los Soldados de la unidad."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar, Artículos 88 y 89",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Los 4 sistemas de ascenso (Art. 88) y el régimen de ascensos en la Escala de Tropa y Marinería (Art. 89: Cabo y Cabo 1º por Concurso/Concurso-oposición; Cabo Mayor por Elección)",
    consejoAcademia: "¡Tabla de **Sistemas de Ascenso (Art. 89 Ley 39/2007)** que cae muchísimo en examen!: • **ELECCIÓN**: Todos los empleos de **Oficial General**, **Coronel**, **Suboficial Mayor** y **CABO MAYOR**. • **CLASIFICACIÓN**: **Teniente Coronel**, **Comandante**, **Subteniente** y **Brigada**. • **CONCURSO / CONCURSO-OPOSICIÓN**: **CABO PRIMERO** y **CABO**. • **ANTIGÜEDAD**: **Capitán** y **Sargento Primero**.",
    justificacion: "Los artículos 88 y 89 de la Ley 39/2007 establecen los cuatro sistemas de ascenso y determinan que en la Escala de Tropa y Marinería se asciende a Cabo y a Cabo Primero por concurso o concurso-oposición y a Cabo Mayor por elección."
  },
  {
    id: "Q-W7-164",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Competencia para Conceder los Ascensos (Art. 93)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 93 de la Ley 39/2007, de la Carrera Militar, ¿quién concede los ascensos a los empleos de Oficial General, quién concede el ascenso a Coronel, Suboficial Mayor y Cabo Mayor (por el sistema de elección) y quién concede el resto de ascensos?",
    opciones: [
      "1) Los ascensos a los empleos de la categoría de Oficiales Generales se conceden por Real Decreto acordado en Consejo de Ministros a propuesta del Ministro de Defensa; 2) Los ascensos por el sistema de elección (Coronel, Suboficial Mayor y Cabo Mayor) los concede el Jefe de Estado Mayor del Ejército correspondiente (JEME, AJEMA o JEMA), o el Subsecretario de Defensa en el caso de los Cuerpos Comunes; y 3) Los ascensos a los demás empleos los concede el Jefe de Estado Mayor del Ejército correspondiente (o el Subsecretario de Defensa en Cuerpos Comunes), quienes pueden delegar en los Jefes de Mando o Jefatura de Personal (o DIGENPER).",
      "El ascenso a Cabo Mayor se concede por Real Decreto del Consejo de Ministros firmado por el Rey.",
      "El ascenso a Cabo Primero lo concede el Jefe de Pelotón de su compañía.",
      "Todos los ascensos desde Soldado hasta General de Ejército los concede el JEMAD."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar, Artículo 93",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Autoridad que concede los ascensos (Art. 93: Consejo de Ministros para Oficiales Generales; JEME/AJEMA/JEMA o SUBDEF para el resto)",
    consejoAcademia: "Recuerda el **Art. 93 de la Ley 39/2007**: • **Oficiales Generales** = **Real Decreto del Consejo de Ministros** (a propuesta del Ministro de Defensa, quien oye al JEMAD/JEME/AJEMA/JEMA). • **Resto de empleos (incluidos Coronel, Suboficial Mayor y Cabo Mayor)** = **JEME / AJEMA / JEMA** (o **SUBDEF** en Cuerpos Comunes).",
    justificacion: "El artículo 93 de la Ley 39/2007 atribuye al Consejo de Ministros mediante Real Decreto los ascensos a Oficial General, y a los Jefes de Estado Mayor de los Ejércitos (o al Subsecretario en Cuerpos Comunes) la concesión de los restantes ascensos."
  },
  {
    id: "Q-W7-165",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Clasificación de los Destinos y Plazos de Permanencia (Arts. 100 y 101)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 101 de la Ley 39/2007, de la Carrera Militar (y al Reglamento de Destinos aprobado por Real Decreto 456/2011), ¿cuáles son las TRES formas de asignación de los destinos y cuáles son los tiempos mínimos generales de permanencia en un destino obtenido con carácter voluntario y con carácter forzoso?",
    opciones: [
      "Los destinos se clasifican según su forma de asignación en: de Libre Designación, de Concurso de Méritos y de Provisión por Antigüedad; pudiendo cubrirse con carácter voluntario, forzoso o anuente; y como norma general el tiempo mínimo de permanencia para solicitar otro destino es de 2 años si el destino actual se obtuvo con carácter voluntario y de 1 año si se obtuvo con carácter forzoso.",
      "Los destinos se asignan por sorteo o subasta y el tiempo mínimo de permanencia es de 10 años en todos los casos.",
      "El tiempo mínimo es de 1 año en los destinos voluntarios y de 5 años en los destinos forzosos.",
      "Un destino de libre designación no puede ser cesado discrecionalmente nunca."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar, Artículo 101 y Real Decreto 456/2011",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Formas de provisión de destinos (Libre Designación, Concurso de Méritos y Antigüedad) y permanencia mínima (2 años voluntario / 1 año forzoso)",
    consejoAcademia: "¡Pareja de cifras de oro en **Destinos (Art. 101 Ley 39/2007 y RD 456/2011)**!: • Formas de provisión: **Libre Designación**, **Concurso de Méritos** y **Antigüedad**. • Permanencia mínima general: **2 AÑOS** (si fue **voluntario**) y **1 AÑO** (si fue **forzoso**).",
    justificacion: "El artículo 101 de la Ley 39/2007 clasifica los destinos en libre designación, concurso de méritos y provisión por antigüedad, estableciéndose con carácter general una permanencia mínima de 2 años en destinos voluntarios y 1 año en forzosos."
  },
  {
    id: "Q-W7-166",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar - Situaciones Administrativas (Art. 107)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 107 de la Ley 39/2007, de la Carrera Militar, ¿cuáles son EXACTAMENTE las situaciones administrativas en las que pueden hallarse los militares profesionales y cuándo procede el pase a la situación de «Suspensión de funciones» frente a la de «Suspensión de empleo»?",
    opciones: [
      "Las situaciones administrativas son SEIS: 1) Servicio activo, 2) Servicios especiales, 3) Excedencia, 4) Suspensión de funciones, 5) Suspensión de empleo y 6) Reserva (y para los militares con compromiso temporal durante la primera renovación o antes de la permanente, las aplicables a su condición); pasando a «Suspensión de funciones» como medida cautelar por procesamiento, inculpación o adopción de medida cautelar en procedimiento penal o incoación de expediente disciplinario por falta muy grave (con cese en el destino si dura más de 6 meses), mientras que pasa a «Suspensión de empleo» por condena penal firme a pena de suspensión de empleo o cargo público o por imposición de sanción disciplinaria extraordinaria/muy grave de suspensión de empleo.",
      "La Reserva y el Retiro son la misma situación administrativa dentro de la relación de servicios profesionales.",
      "En la situación de Suspensión de funciones se cesa en el destino a las 48 horas.",
      "Solo existen dos situaciones administrativas: activo y vacaciones."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar, Artículos 107, 111 y 112",
    ubicacionTemario: "Bloque 2 > Tema 1 (Ley 39/2007 Carrera Militar) > Las 6 Situaciones Administrativas (Art. 107) y diferencia entre Suspensión de funciones (Art. 111) vs Suspensión de empleo (Art. 112) y Retiro (Art. 114)",
    consejoAcademia: "¡Tres trampas mortales en las **Situaciones Administrativas (Arts. 107-114 Ley 39/2007)**!: 1) **El RETIRO NO es una situación administrativa**: con el **Retiro (Art. 114)** **CESA la relación de servicios profesionales** con las FAS (aunque el militar retirado mantiene honores, uso de uniforme en actos solemnes y consideración si lo desea de adscrito a una unidad). En cambio, la **RESERVA (Art. 113)** **SÍ es una situación administrativa**. 2) En **Suspensión de FUNCIONES (Art. 111)** se cesa en el destino cuando exceda de **6 MESES** (o desde el inicio si se acuerda por expediente por falta muy grave). 3) En **Suspensión de EMPLEO (Art. 112)** se cesa en el destino **SIEMPRE** e implica pérdida de puestos en el escalafón.",
    justificacion: "Los artículos 107, 111 y 112 de la Ley 39/2007 enumeran las seis situaciones administrativas y diferencian la suspensión de funciones (cautelar penal o disciplinaria, con cese en el destino si supera 6 meses) de la suspensión de empleo (por condena penal o sanción disciplinaria muy grave)."
  },
  {
    id: "Q-W7-167",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Estructura Exacta y Número de Artículos",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "¿Cuál es la estructura exacta del Real Decreto 96/2009, de 6 de febrero, por el que se aprueban las Reales Ordenanzas para las Fuerzas Armadas?",
    opciones: [
      "Consta de 129 artículos estructurados en un Título Preliminar («Disposiciones generales», arts. 1 a 13) y CINCO Títulos: Título I («Del militar», arts. 14 a 43), Título II («De la disciplina», arts. 44 a 52), Título III («De la acción del mando», arts. 53 a 82), Título IV («De las operaciones», arts. 83 a 112) y Título V («De las demás funciones», arts. 113 a 129).",
      "Consta de 169 artículos divididos en 10 Títulos igual que la Constitución Española.",
      "Consta de 50 artículos y solo se aplica a los Oficiales Generales del Ejército de Tierra.",
      "Su Título I se denomina «De las operaciones» y su Título V «De la disciplina»."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, por el que se aprueban las Reales Ordenanzas para las Fuerzas Armadas",
    ubicacionTemario: "Bloque 2 > Tema 2 (RD 96/2009 Reales Ordenanzas para las FAS) > Estructura maestra de las RROO (129 artículos: Título Preliminar + 5 Títulos)",
    consejoAcademia: "¡Aprende de memoria la radiografía del **RD 96/2009 (Reales Ordenanzas)**: **129 artículos** = **Título Preliminar** + **5 Títulos**: • **Título I**: Del militar • **Título II**: De la disciplina • **Título III**: De la acción del mando • **Título IV**: De las operaciones • **Título V**: De las demás funciones (técnicas, logísticas, administrativas y docentes).",
    justificacion: "Las Reales Ordenanzas aprobadas por el RD 96/2009 constan de 129 artículos distribuidos en un Título Preliminar y cinco Títulos (Del militar, De la disciplina, De la acción del mando, De las operaciones y De las demás funciones)."
  },
  {
    id: "Q-W7-168",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Primer Deber del Militar y Principios Básicos (Arts. 3 y 14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 3 y al artículo 14 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), ¿cuál es el «primer y más fundamental deber del militar» y cómo se define su «disposición permanente para defender a España»?",
    opciones: [
      "El primer y más fundamental deber del militar es la disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario (Art. 3), lo que constituye su máxima expresión de amor a la Patria y de servicio al Rey y a la sociedad (Art. 14).",
      "El primer deber del militar es la gestión presupuestaria y contable de su unidad.",
      "Las Reales Ordenanzas excluyen la entrega de la vida salvo para los miembros de operaciones especiales.",
      "El primer deber del militar es afiliarse a un partido político o sindicato."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, Reales Ordenanzas para las FAS, Artículos 3 y 14",
    ubicacionTemario: "Bloque 2 > Tema 2 (RD 96/2009 Reales Ordenanzas) > Primer y más fundamental deber del militar (Art. 3: Disposición permanente para defender a España, incluso con la entrega de la vida)",
    consejoAcademia: "Cita textual de examen oficial (**Art. 3 RROO**): *«La **disposición permanente para defender a España**, incluso con la **entrega de la vida** cuando fuera necesario, constituye el **primer y más fundamental deber del militar**»*.",
    justificacion: "El artículo 3 de las Reales Ordenanzas proclama que la disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario, constituye el primer y más fundamental deber del militar."
  },
  {
    id: "Q-W7-169",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Conducto Reglamentario y Excepciones (Arts. 33 y 49)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 33 y 49 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), para los asuntos del servicio el militar se relacionará con superiores y subordinados por conducto regular (reglamentario) según la estructura jerárquica de su unidad. ¿En qué casos NO es obligatorio seguir dicho conducto regular?",
    opciones: [
      "Salvo en los casos en que esté establecido uno específico para dirigirse a otro órgano, o cuando se presente un recurso o una queja contra un jefe inmediato en los términos legalmente previstos (o en las comunicaciones a la Unidad de Protección frente al Acoso - UPA).",
      "El conducto reglamentario no tiene ninguna excepción, ni siquiera cuando se recurre una sanción impuesta por el jefe directo.",
      "El conducto reglamentario solo es obligatorio los lunes y viernes.",
      "Solo los Oficiales Generales están obligados a utilizar el conducto regular."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, Reales Ordenanzas para las FAS, Artículos 33 y 49",
    ubicacionTemario: "Bloque 2 > Tema 2 (RD 96/2009 Reales Ordenanzas) > Conducto regular o reglamentario y sus excepciones legales (Arts. 33 y 49)",
    consejoAcademia: "Recuerda la regla del **Art. 33 RROO**: Para asuntos del servicio se usa siempre el **conducto regular**, **SALVO**: 1) que esté establecido **uno específico** para dirigirse a otro órgano (ej. **UPA** frente al acoso, o **2.ª instancia de Quejas** ante MAPER/DIGENPER dando cuenta al Jefe de Unidad), o 2) cuando se interponga un **recurso** conforme a su ley reguladora.",
    justificacion: "El artículo 33 de las Reales Ordenanzas establece la obligación de utilizar el conducto regular según la estructura jerárquica para los asuntos del servicio, salvo que esté establecido uno específico para dirigirse a otro órgano o en la presentación de recursos/quejas conforme a su normativa."
  },
  {
    id: "Q-W7-170",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Capacidad de Decisión, Iniciativa y Sucesión en el Mando (Arts. 59 y 60)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 59 y 60 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), ¿cómo debe ejercer el militar su iniciativa ante situaciones imprevistas cuando no pueda recibir órdenes de sus superiores?",
    opciones: [
      "Cuando por ausencia de órdenes o por variación imprevista de la situación no pueda consultar a sus superiores, tomará por propia iniciativa las decisiones que estime más acertadas para cumplir la misión, inspirándose en el propósito del mando (intención del jefe superior) y asumiendo plenamente la responsabilidad de sus actos.",
      "Deberá paralizar toda actividad de la unidad y retirarse hasta que recupere la cobertura telefónica.",
      "Las Reales Ordenanzas prohíben tomar iniciativas sin orden escrita previa firmada ante notario.",
      "Delegará la decisión y la responsabilidad en el subordinado de menor antigüedad."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, Reales Ordenanzas para las FAS, Artículos 59 y 60",
    ubicacionTemario: "Bloque 2 > Tema 2 (RD 96/2009 Reales Ordenanzas) > Título III (De la acción del mando): Capacidad de decisión, iniciativa e intención del mando superior (Arts. 59 y 60)",
    consejoAcademia: "En el **Título III de las RROO (De la acción del mando)** recuerda siempre dos reglas de oro: 1) **La responsabilidad en el ejercicio del mando NO es renunciable ni puede ser compartida** (Art. 56). 2) Ante imprevistos sin enlace, el militar actúa con **iniciativa inspirándose en el propósito (intención) del mando superior**.",
    justificacion: "Los artículos 56, 59 y 60 de las Reales Ordenanzas regulan la irrenunciabilidad de la responsabilidad del mando y el ejercicio de la iniciativa guiada por el propósito del mando superior ante situaciones imprevistas."
  },
  {
    id: "Q-W7-171",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Uso Legítimo de la Fuerza y Derecho Internacional Humanitario (Arts. 84, 91 y 109)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 84 y 91 del Título IV («De las operaciones») de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), ¿bajo qué principios hará el militar un uso legítimo de la fuerza y a qué reglas ajustará su actuación?",
    opciones: [
      "Hará un uso gradual y proporcionado de la fuerza, de acuerdo con las reglas de enfrentamiento (ROE) establecidas para las operaciones en las que participe, respetando en todo momento el Derecho Internacional Humanitario (Convenios de Ginebra) y protegiendo especialmente a la población civil, heridos, enfermos, náufragos y prisioneros de guerra.",
      "Podrá utilizar cualquier medio sin límite de proporcionalidad ni sujeción a las reglas de enfrentamiento.",
      "Las reglas de enfrentamiento (ROE) solo obligan a los ejércitos extranjeros pero no a las FAS españolas.",
      "Las Reales Ordenanzas permiten atacar bienes culturales e instalaciones médicas si están sin vigilancia."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009, de 6 de febrero, Reales Ordenanzas para las FAS, Artículos 84, 91 y 109",
    ubicacionTemario: "Bloque 2 > Tema 2 (RD 96/2009 Reales Ordenanzas) > Título IV (De las operaciones): Uso gradual y proporcionado de la fuerza, Reglas de Enfrentamiento (ROE) y Derecho Internacional Humanitario",
    consejoAcademia: "Las dos palabras mágicas del **Art. 84 RROO** sobre el uso legítimo de la fuerza son: **«GRADUAL y PROPORCIONADO»**, conforme a las **Reglas de Enfrentamiento (ROE)**.",
    justificacion: "El artículo 84 de las Reales Ordenanzas dispone que el militar hará un uso gradual y proporcionado de la fuerza, de acuerdo con las reglas de enfrentamiento establecidas para las operaciones en que participe."
  },
  {
    id: "Q-W7-172",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS -Libertad de Desplazamiento y Comunicación de Salidas al Extranjero (Art. 11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 11 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, respecto a la libertad de desplazamiento y circulación de los militares, señale la opción 100% CORRECTA:",
    opciones: [
      "El militar podrá desplazarse libremente por el territorio nacional sin perjuicio de las limitaciones derivadas de las exigencias del deber de disponibilidad permanente; y en los desplazamientos al extranjero se aplicarán los mismos criterios que a los que se realicen en territorio nacional, si bien el militar tendrá la obligación de comunicar previamente a su unidad los desplazamientos al extranjero (y podrán establecerse limitaciones o exigirse autorización previa por razones de seguridad o de situación internacional).",
      "El militar tiene prohibido salir de la provincia donde radica su base durante los fines de semana.",
      "Para viajar a otra Comunidad Autónoma dentro de España es obligatorio pedir pasaporte diplomático al Ministro de Defensa.",
      "En los viajes al extranjero no existe ninguna obligación de comunicar previamente el desplazamiento a la unidad."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de 27 de julio, de derechos y deberes de los miembros de las FAS, Artículo 11",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Libertad de desplazamiento y circulación (Art. 11: Libre por territorio nacional; comunicación previa obligatoria en salidas al extranjero)",
    consejoAcademia: "¡Pregunta muy frecuente del **Art. 11 LO 9/2011**!: • En **territorio nacional**: libre desplazamiento (solo debe estar localizable según su disponibilidad). • Al **extranjero**: mismos criterios, pero con **obligación de COMUNICARLO PREVIAMENTE** (normalmente con 7 días de antelación según su desarrollo reglamentario, o autorización en zonas de riesgo).",
    justificacion: "El artículo 11 de la LO 9/2011 reconoce la libertad de desplazamiento por el territorio nacional y exige comunicar previamente los desplazamientos al extranjero."
  },
  {
    id: "Q-W7-173",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Derecho de Reunión y Manifestación (Art. 13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, ¿en qué condiciones puede el militar ejercer el derecho de reunión y qué tiene expresamente PROHIBIDO en relación con las manifestaciones o reuniones?",
    opciones: [
      "El militar podrá ejercer el derecho de reunión previsto en la Ley Orgánica 9/1983, pero NO podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical; y asistiendo a cualquier reunión o manifestación en lugares de tránsito público NO podrá vestir el uniforme, ni hacer uso de su condición militar, ni portar armas.",
      "El militar puede organizar manifestaciones políticas y sindicales siempre que acuda vestido con el uniforme de gala.",
      "Las asociaciones profesionales de las FAS pueden convocar huelgas y manifestaciones sindicales en la vía pública.",
      "En las unidades militares se pueden celebrar libremente mítines de partidos políticos sin autorización."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de 27 de julio, de derechos y deberes de los miembros de las FAS, Artículo 13",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Límites al derecho de reunión y manifestación (Art. 13: Prohibidas las de carácter político o sindical; nunca de uniforme ni haciendo uso de la condición militar)",
    consejoAcademia: "Recuerda la triple prohibición del **Art. 13 LO 9/2011**: 1) **NO** organizar ni participar activamente en reuniones o manifestaciones de carácter **político o sindical**. 2) **NO vestir el uniforme** ni hacer uso de su condición militar en manifestaciones en lugares de tránsito público. 3) Las reuniones en las unidades deben estar previa y expresamente autorizadas por su **Jefe de Unidad**.",
    justificacion: "El artículo 13 de la LO 9/2011 prohíbe al militar organizar o participar activamente en reuniones o manifestaciones de carácter político o sindical, así como acudir a manifestaciones vistiendo el uniforme o haciendo uso de su condición militar."
  },
  {
    id: "Q-W7-174",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Asociaciones Profesionales y Porcentajes para el COPERFAS (Arts. 33 a 48)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 34 y 48 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, ¿quiénes pueden afiliarse a las asociaciones profesionales de miembros de las FAS (inscritas en el RAPFAS) y qué porcentajes de afiliados se exigen para que una asociación pueda formar parte del Consejo de Personal de las Fuerzas Armadas (COPERFAS)?",
    opciones: [
      "Solo podrán afiliarse los militares que se encuentren en cualquiera de las situaciones administrativas en que conserven derechos y obligaciones inherentes a su condición (así como los retirados, sin que éstos computen a efectos de porcentajes de representatividad), pudiendo estar afiliados únicamente a UNA asociación profesional; y para acceder al COPERFAS deberán contar, el último día de cada año natural, con al menos el 1% de los efectivos de las Fuerzas Armadas (si es asociación de ámbito general de las tres categorías), el 3% de los efectivos de su categoría si es de Oficiales o de Suboficiales, o el 1,5% de los efectivos de su categoría si es de Tropa y Marinería.",
      "Un militar puede estar afiliado a cinco asociaciones profesionales a la vez y a dos sindicatos de clase.",
      "Los porcentajes para entrar en el COPERFAS son del 50% en Oficiales, 50% en Suboficiales y 50% en Tropa.",
      "Los alumnos de la enseñanza de formación sin condición previa de militar profesional pueden fundar asociaciones en el COPERFAS."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, de 27 de julio, de derechos y deberes de los miembros de las FAS, Artículos 34 y 48.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (LO 9/2011 Derechos y Deberes) > Asociaciones profesionales (RAPFAS) y porcentajes de acceso al COPERFAS (Art. 48.2: 1% general / 3% Oficiales o Suboficiales / 1,5% Tropa y Marinería)",
    consejoAcademia: "¡La regla del **1% - 3% - 1,5%** del **Art. 48.2 LO 9/2011** es pregunta estrella de examen!: • Asociación de las **3 categorías**: **1%** del total de efectivos de las FAS. • Asociación exclusiva de **Oficiales** o de **Suboficiales**: **3%** de su categoría. • Asociación exclusiva de **Tropa y Marinería**: **1,5%** de su categoría. ¡Y recuerda que los **alumnos de formación** que no tuvieran previamente condición de militar profesional **NO pueden afiliarse** (Art. 34.3)!",
    justificacion: "El artículo 48.2 de la LO 9/2011 fija los umbrales de representatividad para formar parte del COPERFAS en el 1% general, el 3% en las categorías de Oficiales o Suboficiales y el 1,5% en la categoría de Tropa y Marinería."
  },
  {
    id: "Q-W7-175",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Sanción Económica y Alumnos de Formación (Arts. 11, 13 y 14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 11.4, 13 y 14 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿en qué consiste la sanción de «privación de salida» frente a la «sanción económica» y cuál de ellas se aplica a los alumnos de los centros docentes militares de formación?",
    opciones: [
      "La sanción de «privación de salida» (de 1 a 8 días por falta leve) supone la permanencia del sancionado en su centro docente militar de formación fuera de las horas de actividad académica y se aplica EXCLUSIVAMENTE a los alumnos de la enseñanza de formación; mientras que la «sanción económica» (de 1 a 7 días en leves y de 8 a 15 días en graves) consiste en la pérdida de las retribuciones correspondientes a los días sancionados y NO es de aplicación a los alumnos de los centros docentes militares de formación.",
      "La privación de salida se aplica a los Coroneles y Generales y la sanción económica solo a los alumnos de las academias.",
      "La sanción económica dura de 31 a 60 días y se aplica por faltas muy graves.",
      "Al militar sancionado con sanción económica se le exime de acudir a trabajar durante los días en que se le descuenta el sueldo."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de 4 de diciembre, de Régimen Disciplinario de las FAS, Artículos 11.4, 13 y 14",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Régimen especial de los Alumnos de formación: SÍ Privación de salida (1-8 días) y Baja en el centro; NO Sanción económica",
    consejoAcademia: "¡Cruce de examen clásico de los **Arts. 11.4, 13 y 14 de la LO 8/2014**!: • A los **ALUMNOS de centros docentes de formación**: **SÍ** se les aplica la **Privación de salida (1 a 8 días, leve)** y la **Baja en el centro docente (grave)**, pero **NUNCA se les aplica la Sanción Económica**. • Y recuerda: la **Sanción Económica** (1-7 días leve / 8-15 días grave) **NO exime de prestar el servicio**.",
    justificacion: "Los artículos 11.4, 13 y 14 de la LO 8/2014 establecen que la privación de salida de 1 a 8 días y la baja en el centro son exclusivas de los alumnos de formación, a quienes no se les aplica la sanción económica."
  },
  {
    id: "Q-W7-176",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Pérdida de Destino y Plazo de Prohibición de Solicitar Nuevo Destino (Art. 17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 17 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, ¿qué efectos produce la sanción disciplinaria de «Pérdida de destino» (impuesta por falta grave) y durante cuánto tiempo no podrá el sancionado solicitar un nuevo destino en la misma unidad o localidad?",
    opciones: [
      "Supone el cese en el destino que ocupa el infractor, quien durante 2 años no podrá solicitar nuevo destino en la misma unidad o, cuando así se determine motivadamente en la resolución sancionadora, en la misma localidad o demarcación territorial específica en la que se encuentre ubicada.",
      "Impide solicitar cualquier destino en toda España durante 10 años.",
      "Solo impide pedir destino en la misma unidad durante 3 meses.",
      "Es una sanción por falta leve que impone el Jefe de Pelotón."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de 4 de diciembre, de Régimen Disciplinario de las FAS, Artículo 17",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Sanción de Pérdida de Destino por falta grave (Art. 17: Prohibición de pedir destino en la misma unidad/localidad durante 2 años)",
    consejoAcademia: "No olvides el número **2 AÑOS** del **Art. 17 de la LO 8/2014**: La **Pérdida de destino** (sanción por **falta grave**) impide solicitar nuevo destino en la misma unidad (o localidad motivada) durante **2 AÑOS**.",
    justificacion: "El artículo 17 de la LO 8/2014 establece que el sancionado con pérdida de destino cesa en el que ocupa y no podrá solicitar nuevo destino durante dos años en la misma unidad o, motivadamente, en la misma localidad o demarcación."
  },
  {
    id: "Q-W7-177",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las FAS - Falta de Puntualidad y Ausencia Injustificada: Leve vs Grave vs Muy Grave vs Delito de Abandono de Destino (Arts. 6.2, 7.12 y 8.3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En relación con la inasistencia o ausencia injustificada del destino o servicio en la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas (y su frontera con el Código Penal Militar), ¿cómo se gradúa entre falta leve, falta grave y falta muy grave?",
    opciones: [
      "1) Es falta LEVE (Art. 6.2) la falta de puntualidad a los actos de servicio y la ausencia injustificada o abandono temporal de éste cuando no constituya infracción más grave; 2) Es falta GRAVE (Art. 7.12) no incorporarse o ausentarse injustificadamente del destino o centro docente por un plazo superior a 24 horas (e inferior al que constituya delito de abandono de destino o residencia, que en tiempo de paz en el Código Penal Militar es de más de 3 días); y 3) Es falta MUY GRAVE (Art. 8.3) el incumplimiento reiterado de los deberes de asistencia al servicio o ausentarse de forma reiterada.",
      "Ausentarse durante 10 minutos constituye delito militar de deserción con pena de 15 años de prisión.",
      "Ausentarse durante 15 días seguidos sin justificación es una falta leve de reprensión.",
      "La falta de puntualidad no está sancionada en la Ley Orgánica 8/2014."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, de Régimen Disciplinario de las FAS, Artículos 6.2, 7.12 y 8.3 (en relación con el Art. 56 del Código Penal Militar)",
    ubicacionTemario: "Bloque 2 > Tema 4 (LO 8/2014 Régimen Disciplinario) > Frontera de plazos de ausencia injustificada: Hasta 24h (Falta Leve) | De >24h a 3 días (Falta Grave, Art. 7.12) | >3 días en paz (Delito de Abandono de Destino CPM)",
    consejoAcademia: "¡Esta línea temporal de la ausencia injustificada cae muchísimo en examen!: • **Hasta 24 horas** = **Falta LEVE** (Art. 6.2). • **Más de 24 horas (hasta 3 días)** = **Falta GRAVE** (Art. 7.12). • **Más de 3 días** (en tiempo de paz) = **Delito militar de Abandono de Destino** (Art. 56 CPM).",
    justificacion: "El artículo 7.12 de la LO 8/2014 tipifica como falta grave no incorporarse o ausentarse injustificadamente del destino o centro docente por un plazo superior a 24 horas cuando no constituya delito."
  },
  {
    id: "Q-W7-178",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas - Informe Anual y Estadística (Art. 14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 14 del Real Decreto 176/2014, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas, ¿con qué periodicidad remitirán los Mandos o Jefaturas de Personal de los Ejércitos y la Dirección General de Personal un informe con el análisis estadístico de las iniciativas y quejas, y a qué órganos se traslada?",
    opciones: [
      "Anualmente, dentro del primer trimestre de cada año (respecto a las presentadas en el año anterior), los Mandos o Jefaturas de Personal y la DIGENPER remitirán un informe a la Subsecretaría de Defensa, de cuyos resultados se dará traslado al Consejo de Personal de las Fuerzas Armadas (COPERFAS) y al Observatorio de la Vida Militar.",
      "Cada cinco años se remite un informe verbal al Ayuntamiento donde radique la unidad.",
      "Mensualmente se publica en el Boletín Oficial del Estado con los nombres y apellidos de los reclamantes.",
      "El Real Decreto 176/2014 prohíbe elaborar informes estadísticos sobre las iniciativas y quejas."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, de 21 de marzo, de Iniciativas y Quejas, Artículo 14",
    ubicacionTemario: "Bloque 2 > Tema 5 (RD 176/2014 Iniciativas y Quejas) > Informe anual a la Subsecretaría de Defensa y traslado al COPERFAS y al Observatorio de la Vida Militar (Art. 14)",
    consejoAcademia: "¡Detalle muy preguntado del **Art. 14 del RD 176/2014**!: El informe estadístico es **ANUAL**, lo centraliza la **Subsecretaría de Defensa (SUBDEF)** y se da traslado de sus resultados al **COPERFAS** y al **Observatorio de la Vida Militar**.",
    justificacion: "El artículo 14 del RD 176/2014 establece la remisión anual de informes sobre las iniciativas y quejas a la Subsecretaría de Defensa y el traslado de sus resultados al COPERFAS y al Observatorio de la Vida Militar."
  },
  {
    id: "Q-W7-179",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 de Igualdad Efectiva - Discriminación Directa vs Indirecta e Inversión de la Carga de la Prueba (Arts. 6 y 13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 6 y 13 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, ¿qué diferencia existe entre «discriminación directa» y «discriminación indirecta» por razón de sexo, y cómo opera la carga de la prueba en los procedimientos sobre discriminación por razón de sexo?",
    opciones: [
      "Se considera «discriminación directa» la situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable; y «discriminación indirecta» la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente en atención a una finalidad legítima y que los medios sean necesarios y adecuados; y en los procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, corresponderá a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad (salvo en los procesos penales).",
      "La inversión de la carga de la prueba se aplica también en los procesos penales anulando la presunción de inocencia.",
      "La discriminación directa parte siempre de una norma aparentemente neutra.",
      "Un trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye discriminación indirecta leve."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, Artículos 6, 8 y 13",
    ubicacionTemario: "Bloque 2 > Tema 6 (LO 3/2007 Igualdad Efectiva) > Discriminación directa vs indirecta (Art. 6), embarazo/maternidad como discriminación directa (Art. 8) e inversión de la carga de la prueba salvo en procesos penales (Art. 13)",
    consejoAcademia: "¡Tres claves de oro de la **LO 3/2007** que caen siempre!: 1) **Discriminación Indirecta (Art. 6.2)** = palabra clave **«aparentemente neutros»**. 2) Todo trato desfavorable a las mujeres relacionado con el **embarazo o la maternidad** constituye **DISCRIMINACIÓN DIRECTA por razón de sexo (Art. 8)**. 3) **Inversión de la carga de la prueba (Art. 13)**: corresponde al demandado probar la ausencia de discriminación, **EXCEPTO en los procesos PENALES** (Art. 13.2).",
    justificacion: "Los artículos 6, 8 y 13 de la LO 3/2007 definen la discriminación directa e indirecta, califican como discriminación directa el trato desfavorable por embarazo o maternidad y regulan la prueba de la ausencia de discriminación salvo en los procesos penales."
  },
  {
    id: "Q-W7-180",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 de Igualdad Efectiva - Órganos Colegiados de Igualdad: Comisión Interministerial vs Consejo de Participación de la Mujer (Arts. 76 a 78)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el Título VIII de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres (artículos 76 a 78), ¿qué diferencia existe entre la «Comisión Interministerial de Igualdad entre mujeres y hombres» y el «Consejo de Participación de la Mujer»?",
    opciones: [
      "La Comisión Interministerial de Igualdad entre mujeres y hombres (Art. 76) es el órgano colegiado responsable de la coordinación de las políticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres y promover su efectividad; mientras que el Consejo de Participación de la Mujer (Art. 78) es el órgano colegiado de consulta y asesoramiento con el fin esencial de servir de cauce para la participación de las mujeres en la consecución efectiva del principio de igualdad de trato y de oportunidades y la lucha contra la discriminación por razón de sexo (integrando a las Administraciones públicas y a las organizaciones y asociaciones de mujeres de ámbito estatal).",
      "La Comisión Interministerial es una asociación privada y el Consejo de Participación de la Mujer es un tribunal militar.",
      "Ambos órganos están integrados en el Estado Mayor de la Defensa y presididos por el JEMAD.",
      "Las Unidades de Igualdad (Art. 77) solo existen en los ayuntamientos de menos de 1.000 habitantes."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, Artículos 76, 77 y 78",
    ubicacionTemario: "Bloque 2 > Tema 6 (LO 3/2007 Igualdad Efectiva) > Título VIII (Arts. 76-78): Comisión Interministerial de Igualdad (coordinación ministerial), Unidades de Igualdad (Art. 77) y Consejo de Participación de la Mujer (consulta y participación de asociaciones)",
    consejoAcademia: "¡No confundas los tres órganos de los **Arts. 76, 77 y 78 de la LO 3/2007**!: • **Art. 76: Comisión Interministerial de Igualdad** = **Coordinación** entre los Ministerios. • **Art. 77: Unidades de Igualdad** = En **cada Ministerio** (en Defensa está en la DIGENPER - SUBDEF). • **Art. 78: Consejo de Participación de la Mujer** = Órgano de **consulta y participación** de las asociaciones de mujeres.",
    justificacion: "Los artículos 76, 77 y 78 de la LO 3/2007 regulan respectivamente la Comisión Interministerial de Igualdad, las Unidades de Igualdad en cada Ministerio y el Consejo de Participación de la Mujer."
  },
  {
    id: "Q-W7-181",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo de Actuación frente al Acoso Sexual y por Razón de Sexo en las FAS - Grupo de Asesoramiento (GA) y Plazos de Actuación",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas (Orden DEF/482/2016), cuando una Unidad de Protección frente al Acoso (UPA) recibe una comunicación o denuncia, ¿qué función cumple el Grupo de Asesoramiento (GA) y qué medidas preventivas pueden proponerse para proteger a la víctima?",
    opciones: [
      "En cada UPA se podrá constituir un Grupo de Asesoramiento (con apoyo jurídico, médico, psicológico y social) para valorar inicialmente el caso, prestar asistencia integral a la presunta víctima y proponer a la autoridad competente medidas preventivas o cautelares para evitar que la presunta víctima y el presunto acosador compartan espacio físico o dependencia jerárquica directa, sin que tales medidas puedan suponer en ningún caso perjuicio o menoscabo en las condiciones profesionales o retributivas de la víctima.",
      "El Grupo de Asesoramiento es un tribunal penal que dicta sentencias de prisión de hasta 20 años.",
      "Como medida preventiva obligatoria se descuenta el 50% del sueldo a la víctima mientras dura la investigación.",
      "Las comunicaciones presentadas ante la UPA se archivan sin informar ni asesorar a la persona afectada."
    ],
    correcta: 0,
    referencia: "Orden DEF/482/2016 y Protocolo de Actuación frente al Acoso Sexual y por Razón de Sexo en las FAS",
    ubicacionTemario: "Bloque 2 > Tema 7 (Protocolo frente al Acoso y UPA) > Funciones de la UPA, Grupo de Asesoramiento (jurídico, médico, psicológico y social) y protección de la víctima sin perjuicio profesional",
    consejoAcademia: "Recuerda en el **Tema 7 del Bloque 2**: Las **UPA** cuentan con un **Grupo de Asesoramiento (jurídico, médico, psicológico y social)**, actúan bajo **confidencialidad estricta**, **sin conducto reglamentario** y garantizando que las medidas de protección **jamás perjudiquen profesional o económicamente a la víctima**.",
    justificacion: "El Protocolo frente al acoso en las FAS contempla la asistencia multidisciplinar (jurídica, médica, psicológica y social) a través de las UPA y la propuesta de medidas preventivas que separen a víctima y presunto agresor sin menoscabo profesional para la víctima."
  },
  {
    id: "Q-W7-182",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Nulidad de Pleno Derecho (Art. 47) vs Anulabilidad (Art. 48) vs Convalidación (Art. 52)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los artículos 47 (Nulidad de pleno derecho), 48 (Anulabilidad) y 52 (Convalidación) de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, y señale la proposición 100% CORRECTA:",
    opciones: [
      "1) Son NULOS de pleno derecho (Art. 47.1) los actos que lesionen los derechos y libertades susceptibles de amparo constitucional, los dictados por órgano manifiestamente incompetente por razón de la materia o del territorio, los que tengan un contenido imposible, los que sean constitutivos de infracción penal o se dicten como consecuencia de ésta, y los dictados prescindiendo total y absolutamente del procedimiento legalmente establecido o de las normas que contienen las reglas esenciales para la formación de la voluntad de los órganos colegiados (así como las disposiciones administrativas que vulneren la Constitución o las leyes, Art. 47.2); 2) Son ANULABLES (Art. 48) los actos de la Administración que incurran en cualquier infracción del ordenamiento jurídico, incluso la desviación de poder; y 3) La Administración podrá CONVALIDAR (Art. 52) únicamente los actos anulables (nunca los nulos de pleno derecho), subsanando los vicios de que adolezcan (y si el vicio consistiera en incompetencia NO determinante de nulidad —es decir, incompetencia jerárquica—, la convalidación podrá realizarse por el órgano competente cuando sea superior jerárquico del que dictó el acto).",
      "La incompetencia jerárquica produce siempre nulidad de pleno derecho y la incompetencia territorial produce anulabilidad convalidable.",
      "La desviación de poder es siempre causa de nulidad de pleno derecho del artículo 47.1.",
      "La realización de actuaciones administrativas fuera del tiempo establecido implica siempre la nulidad de pleno derecho del acto."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 47, 48 y 52",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Las 4 trampas clásicas entre Nulidad (Art. 47) y Anulabilidad (Art. 48): Incompetencia material/territorial (Nula) vs jerárquica (Anulable convalidable, Art. 52) y Desviación de poder (Anulable)",
    consejoAcademia: "¡Aquí tienes las **4 preguntas trampa** que siempre ponen de los **Arts. 47, 48 y 52 Ley 39/2015**!: 1) Incompetencia por razón de la **MATERIA o del TERRITORIO** = **NULO de pleno derecho (Art. 47.1.b)**. 2) Incompetencia **JERÁRQUICA** = **ANULABLE y convalidable por el superior jerárquico (Art. 52.3)**. 3) **Desviación de poder** = **ANULABLE (Art. 48.1)**. 4) Actuaciones **fuera de plazo (extemporáneas)** = **solo implican anulabilidad si así lo impone la naturaleza del término o plazo** (Art. 48.3).",
    justificacion: "Los artículos 47, 48 y 52 de la Ley 39/2015 distinguen las causas tasadas de nulidad de pleno derecho (incluyendo la incompetencia material o territorial) de la anulabilidad (que incluye la desviación de poder y la incompetencia jerárquica, única susceptible de convalidación)."
  },
  {
    id: "Q-W7-183",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Subsanación y Mejora de la Solicitud (Art. 68) vs Trámite de Audiencia (Art. 82) vs Caducidad por Paralización del Interesado (Art. 95)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el triple cruce de plazos de la Ley 39/2015, del Procedimiento Administrativo Común, entre: A) Subsanación de la solicitud (Art. 68), B) Trámite de audiencia (Art. 82) y C) Caducidad por paralización imputable al interesado (Art. 95), y señale la opción 100% CORRECTA:",
    opciones: [
      "A) Para subsanar la falta de requisitos de la solicitud (Art. 68) se requerirá al interesado por un plazo de 10 días (ampliable prudencialmente hasta en 5 días, a petición del interesado o de oficio, cuando la aportación de documentos presente dificultades especiales, siempre que no se trate de procedimientos selectivos o de concurrencia competitiva); B) En el trámite de audiencia (Art. 82) los interesados podrán alegar y presentar documentos en un plazo no inferior a 10 días ni superior a 15; y C) En la caducidad de los procedimientos iniciados a solicitud del interesado por paralización imputable a éste (Art. 95), la Administración le advertirá que, transcurridos 3 meses, se producirá la caducidad del procedimiento.",
      "El plazo de subsanación es de 3 meses, el trámite de audiencia es de 24 horas y la caducidad opera a los 5 días.",
      "En las oposiciones y procesos selectivos se puede ampliar el plazo de subsanación hasta en 30 días.",
      "La caducidad por sí sola produce siempre la prescripción de las acciones del particular."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 68, 82 y 95",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Triple cruce de plazos procedimentales: Subsanación (10 días + hasta 5 salvo selectivos/concurrencia, Art. 68) vs Audiencia (10 a 15 días, Art. 82) vs Advertencia de Caducidad (3 meses, Art. 95)",
    consejoAcademia: "¡Triple cifra de oro de la **Ley 39/2015**!: • **Subsanación de solicitud (Art. 68)**: **10 días** (ampliables hasta en **5 días**, **SALVO en procesos selectivos o concurrencia competitiva**). • **Trámite de audiencia (Art. 82)**: entre **10 y 15 días**. • **Informes (Art. 80)**: **10 días** (por defecto son **facultativos y no vinculantes**). • **Advertencia de caducidad al interesado (Art. 95)**: **3 MESES** (y recuerda que la caducidad **no produce por sí sola la prescripción**, pero los procedimientos caducados **no interrumpen el plazo de prescripción**, Art. 95.3).",
    justificacion: "Los artículos 68, 82 y 95 de la Ley 39/2015 fijan el plazo de subsanación en 10 días (ampliable hasta 5 salvo procesos selectivos o concurrencia competitiva), el trámite de audiencia entre 10 y 15 días y la advertencia de caducidad por paralización del interesado en 3 meses."
  },
  {
    id: "Q-W7-184",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Revisión de Oficio de Actos Nulos (Art. 106) vs Declaración de Lesividad de Actos Anulables (Art. 107)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare el artículo 106 (Revisión de disposiciones y actos nulos) y el artículo 107 (Declaración de lesividad de actos anulables) de la Ley 39/2015, del Procedimiento Administrativo Común, y señale la opción 100% CORRECTA:",
    opciones: [
      "1) En la revisión de oficio de actos NULOS de pleno derecho (Art. 106), las Administraciones Públicas pueden declarar su nulidad en cualquier momento, por iniciativa propia o a solicitud de interesado, y previo dictamen FAVORABLE (preceptivo y vinculante) del Consejo de Estado u órgano consultivo autonómico equivalente, caducando el procedimiento en el plazo de 6 meses si se inició de oficio (o desestimándose por silencio si se inició a solicitud de interesado); mientras que 2) Para los actos favorables para los interesados que sean ANULABLES conforme al artículo 48 (Art. 107), la Administración NO puede anularlos por sí misma, sino que debe declararlos previamente lesivos para el interés público (en el plazo máximo de 4 años desde que se dictó el acto y con caducidad del procedimiento de lesividad a los 6 meses) para su ulterior impugnación ante el orden jurisdiccional contencioso-administrativo.",
      "La Administración puede anular por sí misma sin ir a los tribunales cualquier acto favorable anulable pasados 10 años.",
      "Para revisar un acto nulo de pleno derecho no se requiere dictamen del Consejo de Estado.",
      "La declaración de lesividad puede adoptarse transcurridos 15 años desde que se dictó el acto administrativo."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 106 y 107",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Revisión de oficio de Actos Nulos (Art. 106: en cualquier momento + dictamen favorable del Consejo de Estado + caducidad 6 meses) vs Declaración de Lesividad de Actos Anulables (Art. 107: plazo 4 años + caducidad 6 meses + impugnación ante el juez contencioso)",
    consejoAcademia: "¡Este cuadro comparativo entre el **Art. 106 y el Art. 107 de la Ley 39/2015** es oro puro para tu examen!: • **Actos NULOS (Art. 106)**: **En cualquier momento** + Dictamen **FAVORABLE** del Consejo de Estado + Lo anula la propia Administración. • **Actos favorables ANULABLES (Art. 107)**: **Declaración de lesividad** antes de **4 AÑOS** desde que se dictó el acto + luego la propia Administración debe **demandarlo ante la Jurisdicción Contencioso-Administrativa**. • En **ambos** procedimientos (Arts. 106.5 y 107.3), el plazo de **caducidad** si se inician de oficio es de **6 MESES**. • Y para **rectificar errores materiales, de hecho o aritméticos (Art. 109.2)**: **en cualquier momento**.",
    justificacion: "Los artículos 106 y 107 de la Ley 39/2015 regulan la revisión de oficio en cualquier momento de los actos nulos previo dictamen favorable del Consejo de Estado, y la declaración de lesividad de los actos favorables anulables dentro de los 4 años desde su dictado para su posterior impugnación contencioso-administrativa, caducando ambos procedimientos a los 6 meses."
  },
  {
    id: "Q-W7-185",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Tabla Maestra de Recursos Administrativos: Alzada, Reposición y Extraordinario de Revisión (Arts. 121 a 126)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Compare los TRES recursos administrativos regulados en los artículos 121 a 126 de la Ley 39/2015 (Alzada, Potestativo de Reposición y Extraordinario de Revisión) en cuanto a: 1) Actos contra los que proceden, 2) Plazo de interposición y 3) Plazo máximo de resolución, y señale la opción 100% CORRECTA:",
    opciones: [
      "1) Recurso de ALZADA (Arts. 121-122): contra actos que NO pongan fin a la vía administrativa, ante el órgano superior jerárquico; plazo de interposición de 1 mes (si el acto es expreso) o en cualquier momento a partir del día siguiente a aquel en que se produzcan los efectos del silencio (si es presunto); plazo máximo para dictar y notificar la resolución: 3 meses. 2) Recurso potestativo de REPOSICIÓN (Arts. 123-124): contra actos que PONGAN fin a la vía administrativa, ante el mismo órgano que los hubiera dictado; plazo de interposición de 1 mes (si es expreso) o en cualquier momento tras el silencio (si es presunto); plazo máximo para dictar y notificar la resolución: 1 mes. 3) Recurso EXTRAORDINARIO DE REVISIÓN (Arts. 125-126): contra actos FIRMES en vía administrativa ante el órgano que los dictó cuando concurra alguna de las 4 causas tasadas del art. 125.1; plazo de interposición de 4 años desde la notificación (si es por error de hecho que resulte de los propios documentos incorporados al expediente, causa 1.ª) o de 3 meses desde el conocimiento de los documentos o desde que la sentencia penal quedó firme (en las causas 2.ª, 3.ª y 4.ª); plazo máximo para resolver y notificar: 3 meses.",
      "El recurso de alzada se resuelve en 1 mes y el recurso de reposición se resuelve en 3 meses.",
      "Contra la resolución de un recurso de alzada cabe interponer un recurso potestativo de reposición.",
      "En el recurso extraordinario de revisión el plazo es de 3 meses para el error de hecho y de 4 años para el cohecho o prevaricación."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 121, 122, 123, 124, 125 y 126",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Tabla Maestra de los 3 Recursos Administrativos: Alzada (1m / resuelve en 3m), Reposición (1m / resuelve en 1m) y Extraordinario de Revisión (4 años error de hecho o 3 meses resto / resuelve en 3m)",
    consejoAcademia: "¡La tabla más importante de todo el Tema 8 del Bloque 2 (**Arts. 121 a 126 Ley 39/2015**)!: • **ALZADA**: No agota vía $\\rightarrow$ Superior $\\rightarrow$ Interposición **1 mes** (expreso) / **en cualquier momento** (presunto) $\\rightarrow$ Resolución **3 MESES**. • **REPOSICIÓN**: Sí agota vía $\\rightarrow$ Mismo órgano $\\rightarrow$ Interposición **1 mes** (expreso) / **en cualquier momento** (presunto) $\\rightarrow$ Resolución **1 MES**. • **EXTRAORDINARIO DE REVISIÓN**: Actos firmes $\\rightarrow$ Mismo órgano $\\rightarrow$ Interposición **4 AÑOS** (causa 1.ª: error de hecho de los documentos del expediente) o **3 MESES** (causas 2.ª, 3.ª y 4.ª: aparición de documentos esenciales, documentos/testimonios declarados falsos por sentencia firme o prevaricación/cohecho/violencia declarados por sentencia firme) $\\rightarrow$ Resolución **3 MESES**.",
    justificacion: "Los artículos 121 a 126 de la Ley 39/2015 regulan con exactitud los plazos de interposición y resolución de los recursos de alzada (1 mes / 3 meses), potestativo de reposición (1 mes / 1 mes) y extraordinario de revisión (4 años o 3 meses / 3 meses)."
  },
  {
    id: "Q-W7-186",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional - Comité de Situación y Declaración de Situación de Interés para la Seguridad Nacional (Arts. 21 a 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 21 a 24 de la Ley 36/2015, de Seguridad Nacional, respecto a la gestión de crisis y a la declaración de una «Situación de Interés para la Seguridad Nacional», señale la opción 100% CORRECTA:",
    opciones: [
      "La Situación de Interés para la Seguridad Nacional la declara el Presidente del Gobierno mediante Real Decreto (que incluirá la definición de la crisis, el ámbito geográfico, la duración, el nombramiento de una autoridad funcional si procede y la determinación de los recursos humanos y materiales necesarios), con obligación de informar de forma inmediata al Congreso de los Diputados; y el Consejo de Seguridad Nacional estará asistido por un Comité Especializado de carácter único para el conjunto del Sistema de Seguridad Nacional denominado «Comité de Situación».",
      "La Situación de Interés para la Seguridad Nacional la declara el JEMAD mediante Orden comunicada y suspende los derechos fundamentales igual que el estado de sitio.",
      "Existe un Comité de Situación distinto en cada provincia presidido por el Alcalde de la capital.",
      "Para declarar la Situación de Interés para la Seguridad Nacional es requisito previo haber declarado antes el estado de excepción."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional, Artículos 21, 22, 23 y 24",
    ubicacionTemario: "Bloque 3 > Tema 1 (Ley 36/2015 Seguridad Nacional) > Declaración de la Situación de Interés para la Seguridad Nacional por Real Decreto del Presidente del Gobierno (Art. 24) y el Comité de Situación (Art. 21.3)",
    consejoAcademia: "¡Tres datos clave de los **Arts. 21-24 de la Ley 36/2015**!: 1) ¿Quién declara la **Situación de Interés para la Seguridad Nacional**? El **Presidente del Gobierno por Real Decreto** (informando de inmediato al **Congreso de los Diputados**). 2) ¿Suspende derechos fundamentales? **¡NUNCA!** (se gestiona con los poderes ordinarios de las Administraciones, sin llegar a los estados del art. 116 CE). 3) ¿Cuál es el comité especializado único de gestión de crisis del CSN? El **Comité de Situación**.",
    justificacion: "Los artículos 21.3 y 24 de la Ley 36/2015 establecen el Comité de Situación como órgano único de apoyo al CSN en la gestión de crisis y atribuyen al Presidente del Gobierno mediante Real Decreto la declaración de la Situación de Interés para la Seguridad Nacional."
  },
  {
    id: "Q-W7-187",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021) - Estructura, Lema y Tres Ejes Estratégicos",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 1150/2021, de 28 de diciembre, por el que se aprueba la Estrategia de Seguridad Nacional 2021 («Un proyecto compartido»), ¿en cuántos Capítulos se estructura, cuáles son sus TRES ejes estratégicos de acción (objetivos de la matriz estratégica integrada) y con qué periodicidad se revisa conforme al artículo 4.3 de la Ley 36/2015?",
    opciones: [
      "Se revisa cada 5 años o cuando lo aconsejen las circunstancias cambiantes del entorno estratégico; consta de 5 Capítulos y articula una respuesta integrada basada en TRES ejes estratégicos («Proteger», «Promover» y «Participar»): un país más seguro y resiliente (Proteger), una España próspera y sostenible (Promover) y un socio fiable y comprometido con la paz y la seguridad internacional (Participar).",
      "Se revisa cada 15 años, consta de 12 Capítulos y sus tres ejes son «Atacar», «Recaudar» y «Aislarse».",
      "Fue aprobada por el Jefe de Estado Mayor del Ejército de Tierra mediante Instrucción general.",
      "La Estrategia de Seguridad Nacional 2021 derogó la Ley 36/2015 de Seguridad Nacional."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021, de 28 de diciembre (Estrategia de Seguridad Nacional 2021) y Artículo 4.3 de la Ley 36/2015",
    ubicacionTemario: "Bloque 3 > Tema 1 (Seguridad Nacional y ESN 2021) > Revisión cada 5 años (Art. 4.3 Ley 36/2015), 5 Capítulos y las «3 P» de la ESN 2021: Proteger, Promover y Participar",
    consejoAcademia: "¡La regla de las **«3 P»** de la **Estrategia de Seguridad Nacional 2021 (RD 1150/2021)**!: • **P**roteger • **P**romover • **P**articipar. Y recuerda: se aprueba por **Real Decreto del Consejo de Ministros** a iniciativa del **Presidente del Gobierno** y se revisa **cada 5 AÑOS** (o cuando cambie el entorno estratégico).",
    justificacion: "El artículo 4.3 de la Ley 36/2015 prevé la revisión quinquenal de la Estrategia de Seguridad Nacional, y la ESN 2021 (RD 1150/2021) se estructura en 5 capítulos y articula la acción del Estado en torno a los tres ejes de Proteger, Promover y Participar."
  },
  {
    id: "Q-W7-188",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 Empleo de las Fuerzas Armadas - Principios Fundamentales del Empleo de la Fuerza Militar",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Doctrina para el Empleo de las Fuerzas Armadas (PDC-01), ¿cuáles son los principios fundamentales que rigen el planeamiento y la ejecución de las operaciones militares conjuntas?",
    opciones: [
      "Voluntad de vencer, Libertad de acción, Capacidad de ejecución (y junto a ellos los principios operativos clásicos como Definición del objetivo, Unidad de esfuerzo/mando, Concentración del esfuerzo/economía de medios, Sorpresa, Seguridad, Sencillez, Flexibilidad, Sostenimiento y Legitimidad/Moral).",
      "Improvisación permanente, Dispersión del mando y Rigidez táctica.",
      "Neutralidad ante el enemigo, Ausencia de objetivos y Pasividad operativa.",
      "Los principios de la PDC-01 solo se aplican a las empresas contratistas civiles."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las Fuerzas Armadas",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01 Empleo de las FAS) > La tríada doctrinal clásica: Voluntad de vencer, Libertad de acción y Capacidad de ejecución",
    consejoAcademia: "En la **PDC-01** destaca siempre la **tríada doctrinal española**: **Voluntad de vencer** + **Libertad de acción** + **Capacidad de ejecución**, junto con el **Enfoque Integral (Comprehensive Approach)** y el **Mando Tipo Misión (Mission Command)** (mando centralizado en el *qué* y el *para qué*, y ejecución descentralizada en el *cómo*).",
    justificacion: "La PDC-01 consagra los principios del empleo de las Fuerzas Armadas, destacando la voluntad de vencer, la libertad de acción, la capacidad de ejecución y la filosofía del Mando Tipo Misión."
  },
  {
    id: "Q-W7-189",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 Empleo de las Fuerzas Armadas - Estructura Operativa de las FAS (JEMAD, CMOPS y Mandos Componentes)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En el empleo de las Fuerzas Armadas conforme a la PDC-01 y al Real Decreto 521/2020, ¿cómo pasan las unidades de la Estructura Orgánica (Ejército de Tierra, Armada y Ejército del Aire y del Espacio) a la Estructura Operativa (bajo mando del JEMAD)?",
    opciones: [
      "Los Ejércitos generan y adiestran las fuerzas (Estructura Orgánica) y las ponen a disposición de la Estructura Operativa mediante el proceso de «Transferencia de Autoridad» (TOA - Transfer of Authority), pasando bajo el mando operacional del JEMAD (quien conduce las operaciones a través del Comandante del Mando de Operaciones - CMOPS y del Comandante del Mando Conjunto del Ciberespacio - CMCCE).",
      "Las unidades nunca cambian de dependencia y son dirigidas en combate por el Subsecretario de Defensa.",
      "La Estructura Operativa se encarga de pagar las nóminas y gestionar los ascensos y la Estructura Orgánica dirige la guerra.",
      "La Transferencia de Autoridad (TOA) la firma el Presidente del Tribunal de Cuentas."
    ],
    correcta: 0,
    referencia: "PDC-01 Doctrina para el Empleo de las Fuerzas Armadas y Real Decreto 521/2020",
    ubicacionTemario: "Bloque 3 > Tema 2 (Doctrina PDC-01) y Bloque 1 > Tema 5 (RD 521/2020) > Paso de la Estructura Orgánica (preparación de la Fuerza por JEME/AJEMA/JEMA) a la Estructura Operativa (empleo de la Fuerza por JEMAD/CMOPS) mediante Transferencia de Autoridad (TOA)",
    consejoAcademia: "¡Concepto clave que une el **Tema 5 del Bloque 1** y el **Tema 2 del Bloque 3**!: • **Estructura ORGÁNICA** (JEME, AJEMA, JEMA) = **Prepara y genera** la Fuerza. • **Transferencia de Autoridad (TOA)** = el puente por el que las unidades pasan a la • **Estructura OPERATIVA** (**JEMAD / CMOPS**) = **Emplea** la Fuerza en las misiones.",
    justificacion: "Conforme al RD 521/2020 y la PDC-01, las unidades generadas por la Estructura Orgánica de los Ejércitos se integran en la Estructura Operativa bajo mando del JEMAD mediante la Transferencia de Autoridad (TOA)."
  },
  {
    id: "Q-W7-190",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas (ONU) - El Secretario General (Arts. 97 a 100 de la Carta) y la Asamblea General",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 97 de la Carta de las Naciones Unidas, ¿cómo se nombra al Secretario General de la ONU, cuál es la duración de su mandato según la práctica de la Organización y qué mayoría exige el artículo 18 de la Carta para las decisiones de la Asamblea General sobre «cuestiones importantes»?",
    opciones: [
      "El Secretario General es el más alto funcionario administrativo de la Organización y es nombrado por la Asamblea General a recomendación del Consejo de Seguridad (por un mandato de 5 años renovable); y las decisiones de la Asamblea General en cuestiones importantes (como recomendaciones relativas a la paz y la seguridad, elección de miembros no permanentes del Consejo de Seguridad, admisión de nuevos Miembros o cuestiones presupuestarias) se toman por mayoría de dos tercios (2/3) de los miembros presentes y votantes (y el resto de cuestiones por mayoría simple de los presentes y votantes).",
      "El Secretario General es elegido por sorteo entre los 5 miembros permanentes por un mandato vitalicio.",
      "En la Asamblea General de la ONU los 5 miembros permanentes también tienen derecho de veto.",
      "La Asamblea General solo se reúne una vez cada diez años en Ginebra."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas de 1945, Artículos 18 y 97",
    ubicacionTemario: "Bloque 3 > Tema 3 (ONU) > Nombramiento del Secretario General (Art. 97: Asamblea General a recomendación del Consejo de Seguridad, 5 años) y mayorías en la Asamblea General (Art. 18: 2/3 en cuestiones importantes)",
    consejoAcademia: "¡Dos detalles muy preguntados de la **ONU (Tema 3 Bloque 3)**!: 1) En la **Asamblea General** (193 Estados miembros) cada Estado tiene **1 voto**, **NO existe derecho de veto** y las **cuestiones importantes** requieren mayoría de **2/3 de los presentes y votantes** (Art. 18). 2) El **Secretario General** (actualmente **António Guterres**) lo nombra la **Asamblea General a recomendación del Consejo de Seguridad** por **5 años** (Art. 97).",
    justificacion: "El artículo 97 de la Carta de la ONU dispone que el Secretario General será nombrado por la Asamblea General a recomendación del Consejo de Seguridad, y el artículo 18 fija la mayoría de dos tercios de los miembros presentes y votantes para las cuestiones importantes de la Asamblea General."
  },
  {
    id: "Q-W7-191",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN - Concepto Estratégico de Madrid 2022 y las Tres Tareas Fundamentales (Core Tasks)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid (29-30 de junio de 2022), ¿cuáles son las TRES tareas fundamentales (Core Tasks) de la Alianza Atlántica y cómo se califica en dicho documento a la Federación de Rusia y al terrorismo?",
    opciones: [
      "Las tres tareas fundamentales (Core Tasks) de la OTAN son: 1) Disuasión y Defensa (Deterrence and Defence), 2) Prevención y Gestión de Crisis (Crisis Prevention and Management) y 3) Seguridad Cooperativa (Cooperative Security); identificándose a la Federación de Rusia como la «amenaza más significativa y directa» para la seguridad de los Aliados y al terrorismo (en todas sus formas y manifestaciones) como la «amenaza asimétrica más directa» para la seguridad de los ciudadanos y la paz y prosperidad internacionales.",
      "Las tres tareas fundamentales son el comercio exterior, la moneda única y la política agraria común.",
      "El Concepto Estratégico de Madrid 2022 declara a la Federación de Rusia como «socio estratégico prioritario».",
      "El Concepto Estratégico de la OTAN solo tiene una tarea fundamental y prohíbe las operaciones fuera de zona."
    ],
    correcta: 0,
    referencia: "Concepto Estratégico de la OTAN (Cumbre de Madrid, junio de 2022)",
    ubicacionTemario: "Bloque 3 > Tema 4 (OTAN) > Cumbre de Madrid 2022: Las 3 Core Tasks (Disuasión y Defensa, Prevención y Gestión de Crisis, y Seguridad Cooperativa) y amenazas principales",
    consejoAcademia: "¡En la Cumbre de Lisboa (2010) y en la **Cumbre de Madrid (2022)** las **3 Tareas Fundamentales (Core Tasks) de la OTAN** son pregunta fija!: 1) **Disuasión y Defensa**. 2) **Prevención y Gestión de Crisis** (en 2010 se llamaba solo *Gestión de Crisis*; Madrid 2022 añadió *Prevención*). 3) **Seguridad Cooperativa**.",
    justificacion: "El Concepto Estratégico de la OTAN de Madrid 2022 establece como tres tareas fundamentales de la Alianza la Disuasión y Defensa, la Prevención y Gestión de Crisis y la Seguridad Cooperativa."
  },
  {
    id: "Q-W7-192",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Órganos de Decisión e Instituciones Especializadas (Cumbre, Consejo Ministerial, Consejo Permanente, FSC y ODIHR)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Dentro de la estructura institucional de la Organización para la Seguridad y la Cooperación en Europa (OSCE), ¿qué diferencia existe entre la Cumbre, el Consejo Ministerial, el Consejo Permanente y el Foro de Cooperación en materia de Seguridad (FSC)?",
    opciones: [
      "1) La Cumbre de Jefes de Estado o de Gobierno fija las prioridades y orientaciones al más alto nivel político; 2) El Consejo Ministerial (integrado por los Ministros de Asuntos Exteriores de los 57 Estados participantes) es el órgano central de decisión y gobierno que se reúne una vez al año (en los años en que no hay Cumbre); 3) El Consejo Permanente (con sede en el Palacio Hofburg de Viena y compuesto por los representantes permanentes/embajadores) es el órgano regular de consulta política y toma de decisiones operativas que se reúne semanalmente; y 4) El Foro de Cooperación en materia de Seguridad (FSC, también semanal en Viena) es el órgano autónomo que negocia medidas de fomento de la confianza y la seguridad (MFCS/CSBM) y control de armamentos de la dimensión político-militar.",
      "El Consejo Permanente se reúne una vez cada diez años en Madrid y el Consejo Ministerial se reúne todos los martes en Nueva York.",
      "En la OSCE las decisiones se adoptan por mayoría simple y tienen carácter de tratado militar coercitivo.",
      "La Presidencia en Ejercicio de la OSCE (CiO) dura 5 años y la ejerce siempre el Secretario General de la ONU."
    ],
    correcta: 0,
    referencia: "Estructura y Órganos de Decisión de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (OSCE) > Órganos decisorios de la OSCE: Cumbre, Consejo Ministerial (anual), Consejo Permanente (semanal en Viena) y Foro de Cooperación en materia de Seguridad - FSC (semanal en Viena); Presidencia en Ejercicio anual (CiO) y Troika",
    consejoAcademia: "¡Cinco claves de los órganos de la **OSCE (Tema 5 Bloque 3)**!: 1) Todas las decisiones de la OSCE se adoptan por **CONSENSO** (y son **políticamente vinculantes**, no jurídicamente vinculantes). 2) **Presidencia en Ejercicio (CiO)**: la ostenta durante **1 AÑO natural** el Ministro de Exteriores de un Estado participante, auxiliado por la **Troika** (Presidente anterior + actual + siguiente). 3) **Consejo Ministerial**: **1 vez al año**. 4) **Consejo Permanente** y **FSC**: **semanalmente en Viena**. 5) **Secretario General de la OSCE**: nombrado por **3 años**.",
    justificacion: "La OSCE articula su toma de decisiones por consenso a través de las Cumbres, el Consejo Ministerial (anual), el Consejo Permanente (semanal en Viena) y el Foro de Cooperación en materia de Seguridad (FSC, semanal en Viena para la dimensión político-militar)."
  },
  {
    id: "Q-W7-193",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea (UE) - Alto Representante (AR/VP), SEAE, CPS (COPSI), EUMC y EUMS",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la estructura político-militar de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea, ¿qué funciones desempeñan el Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR/VP), el Comité Político y de Seguridad (CPS / COPSI), el Comité Militar de la UE (EUMC) y el Estado Mayor de la UE (EUMS)?",
    opciones: [
      "1) El Alto Representante (AR/VP, nombrado por el Consejo Europeo por mayoría cualificada con la aprobación del Presidente de la Comisión) dirige la PESC/PCSD, preside el Consejo de Asuntos Exteriores, es uno de los Vicepresidentes de la Comisión Europea, dirige la Agencia Europea de Defensa (EDA) y cuenta con el Servicio Europeo de Acción Exterior (SEAE); 2) El Comité Político y de Seguridad (CPS o COPSI, art. 38 TUE) sigue la situación internacional y ejerce, bajo la responsabilidad del Consejo y del AR, el control político y la dirección estratégica de las operaciones de gestión de crisis; 3) El Comité Militar de la UE (EUMC) es el máximo órgano militar integrado por los Jefes de Estado Mayor de la Defensa (CHOD/JEMAD) de los Estados miembros; y 4) El Estado Mayor de la UE (EUMS) proporciona alerta temprana, evaluación de situaciones y planeamiento estratégico.",
      "El Alto Representante preside el Banco Central Europeo y el Comité Militar de la UE está formado por diputados del Parlamento Europeo.",
      "El control político y la dirección estratégica de las misiones PCSD corresponde al Tribunal de Cuentas de Luxemburgo.",
      "El Estado Mayor de la UE (EUMS) tiene su sede en Washington y depende de SACEUR."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (Arts. 18, 27, 38 y 42 a 46 TUE)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Unión Europea - PCSD) > El «triple sombrero» del Alto Representante (AR/VP), el SEAE y los 3 órganos político-militares: CPS/COPSI (control político y dirección estratégica), EUMC (Comité Militar) y EUMS (Estado Mayor de la UE)",
    consejoAcademia: "¡Esta pregunta resume toda la estructura PCSD del **Tema 6 del Bloque 3**!: • **Alto Representante (AR/VP)** = «Triple sombrero»: Dirige la PESC/PCSD + Preside el **Consejo de Asuntos Exteriores** + Es **Vicepresidente de la Comisión Europea** (y se apoya en el **SEAE** y dirige la **EDA**). • **CPS / COPSI (Art. 38 TUE)** = **Control político y dirección estratégica** de las operaciones de gestión de crisis. • **EUMC (Comité Militar UE)** = Máximo órgano militar (compuesto por los **JEMAD** de los 27). • **EUMS (Estado Mayor UE)** = Alerta temprana y planeamiento estratégico (incluye la **MPCC** para misiones ejecutivas/no ejecutivas).",
    justificacion: "Los artículos 18, 27 y 38 del TUE y las decisiones del Consejo regulan las funciones del Alto Representante (apoyado por el SEAE), el Comité Político y de Seguridad (CPS), el Comité Militar de la UE (EUMC) y el Estado Mayor de la UE (EUMS)."
  },
  {
    id: "Q-W7-194",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea (UE) - Las Misiones Petersberg (Art. 43.1 TUE)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 43.1 del Tratado de la Unión Europea (que amplió en el Tratado de Lisboa las históricas «Misiones Petersberg» de 1992), ¿qué misiones están incluidas en el ámbito de la Política Común de Seguridad y Defensa (PCSD), en las que la Unión podrá recurrir a medios civiles y militares fuera de su territorio?",
    opciones: [
      "Las acciones conjuntas en materia de desarme, las misiones humanitarias y de rescate, las misiones de asesoramiento y asistencia en cuestiones militares, las misiones de prevención de conflictos y de mantenimiento de la paz, y las misiones en las que intervengan fuerzas de combate para la gestión de crisis, incluidas las misiones de restablecimiento de la paz y las operaciones de estabilización al término de los conflictos (todas las cuales podrán contribuir a la lucha contra el terrorismo).",
      "Exclusivamente el reparto de alimentos dentro de Bruselas sin personal militar.",
      "Únicamente la conquista territorial de Estados terceros mediante fuerzas nucleares.",
      "El artículo 43.1 TUE prohíbe el uso de fuerzas de combate para el restablecimiento de la paz."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Artículo 43.1",
    ubicacionTemario: "Bloque 3 > Tema 6 (Unión Europea - PCSD) > Las Misiones Petersberg ampliadas por el Tratado de Lisboa (Art. 43.1 TUE)",
    consejoAcademia: "Recuerda que las **Misiones Petersberg** nacieron en **1992** (en el seno de la UEO), se incorporaron al TUE en el **Tratado de Ámsterdam (1997)** y se **ampliaron en el Tratado de Lisboa (2007/2009, Art. 43.1 TUE)** añadiendo: **desarme**, **asesoramiento militar**, **prevención de conflictos**, **estabilización posconflicto** y **apoyo a la lucha contra el terrorismo**.",
    justificacion: "El artículo 43.1 del TUE enumera las misiones Petersberg ampliadas por el Tratado de Lisboa, que abarcan desarme, humanitarias y de rescate, asesoramiento militar, prevención de conflictos y mantenimiento de la paz, y fuerzas de combate en gestión de crisis (restablecimiento de la paz y estabilización posconflicto)."
  },
  {
    id: "Q-W7-195",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales - Conducción Nacional de las Operaciones en el Exterior (MOPS - Retamares)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la participación de las Fuerzas Armadas españolas en misiones internacionales y operaciones permanentes, ¿qué órgano del Estado Mayor de la Defensa es responsable de realizar el planeamiento y la conducción en el nivel operacional, dónde tiene su sede y cuál es la función del Ministro de Defensa respecto al seguimiento de dichas operaciones?",
    opciones: [
      "El Mando de Operaciones (MOPS), con sede en la Base de Retamares (Pozuelo de Alarcón, Madrid) y bajo el mando del Comandante del Mando de Operaciones (CMOPS, subordinado al JEMAD), es el órgano responsable del planeamiento operativo y de la conducción de las operaciones en el nivel operacional; mientras que al Ministro de Defensa le corresponde realizar el seguimiento de las operaciones e informar periódicamente al Congreso de los Diputados sobre su desarrollo (Art. 18 LO 5/2005).",
      "El planeamiento operacional lo realiza la Subsecretaría de Defensa en Valladolid y el seguimiento corresponde al Tribunal Constitucional.",
      "El Mando de Operaciones (MOPS) solo dirige ejercicios deportivos y no interviene en las misiones en el exterior.",
      "El Gobierno no tiene obligación de informar nunca al Congreso de los Diputados una vez iniciada una misión en el exterior."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005 (Arts. 12 y 18), Real Decreto 521/2020 y Doctrina de Operaciones en el Exterior",
    ubicacionTemario: "Bloque 3 > Tema 7 (España y su participación en Misiones Internacionales) > Conducción operacional desde el Mando de Operaciones (MOPS - Retamares) y control parlamentario periódico ante el Congreso (Art. 18 LO 5/2005)",
    consejoAcademia: "Conecta el **Tema 7 del Bloque 3** con la **LO 5/2005**: • **Nivel Estratégico Militar**: **JEMAD**. • **Nivel Operacional**: **CMOPS** (en **Retamares**, Madrid). • **Control parlamentario periódico (Art. 18 LO 5/2005)**: El Gobierno informa periódicamente (en un plazo que en ningún caso superará **1 año**) al **Congreso de los Diputados** sobre el desarrollo de las operaciones de las FAS en el exterior.",
    justificacion: "El Mando de Operaciones (MOPS), dependiente del JEMAD, conduce las operaciones en el nivel operacional desde Retamares, y conforme al artículo 18 de la LO 5/2005 el Gobierno informa periódicamente al Congreso de los Diputados sobre el desarrollo de las operaciones en el exterior."
  },
  {
    id: "Q-W7-196",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Gran Cruce Global de Plazos del Bloque 1 - CE 1978, LO 5/2005 y Ley 40/2015",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el gran cruce numérico del Bloque 1 entre la Constitución Española de 1978, la Ley Orgánica 5/2005 y la Ley 40/2015, y señale la opción en la que TODOS los datos son 100% CORRECTOS:",
    opciones: [
      "1) Detención preventiva máxima (Art. 17.2 CE): 72 horas; 2) Sanción y promulgación real de las leyes (Art. 91 CE): 15 días; 3) Convalidación o derogación de Decretos-leyes por el Congreso (Art. 86.2 CE): 30 días; 4) Veto o enmiendas del Senado (Art. 90.2 CE): 2 meses (o 20 días naturales en proyectos urgentes); 5) Estado de alarma por Decreto del Gobierno (Art. 116.2 CE): máximo 15 días; 6) Estado de excepción autorizado por el Congreso (Art. 116.3 CE): máximo 30 días prorrogables por otros 30; 7) Renovación del Consejo de Defensa Nacional en vocales electivos/designación: presidido por el Presidente del Gobierno (o el Rey cuando asiste, Art. 8 LO 5/2005); y 8) Convocatoria de órganos colegiados de la AGE (Art. 19.3 Ley 40/2015): antelación mínima de 2 días.",
      "La detención preventiva dura 48 horas, la sanción real 30 días y los Decretos-leyes se convalidan por el Senado en 15 días.",
      "El estado de alarma dura 30 días y el estado de excepción dura 15 días.",
      "La convocatoria de los órganos colegiados de la AGE en la Ley 40/2015 requiere una antelación mínima de 15 días hábiles."
    ],
    correcta: 0,
    referencia: "Constitución Española (Arts. 17, 86, 90, 91 y 116), LO 5/2005 (Art. 8) y Ley 40/2015 (Art. 19.3)",
    ubicacionTemario: "Bloque 1 > Síntesis Transversal de Plazos de Examen (CE 1978 + LO 5/2005 + Ley 40/2015)",
    consejoAcademia: "¡Guárdate esta pregunta en Favoritas ⭐ porque concentra **8 preguntas de examen oficial del Bloque 1** en una sola ficha!: • **72h** (Detención preventiva) • **15 días** (Sanción Real Art. 91 / Estado de Alarma Art. 116.2 / Referéndum Art. 167) • **30 días** (Convalidación Decreto-Ley Art. 86 / Estado de Excepción Art. 116.3) • **2 meses o 20 días naturales** (Senado Art. 90) • **2 días** (Convocatoria órgano colegiado AGE Art. 19.3 Ley 40/2015).",
    justificacion: "Todos los plazos citados en la primera opción coinciden exactamente con los artículos 17.2, 86.2, 90.2, 91 y 116 de la Constitución Española, el artículo 8 de la LO 5/2005 y el artículo 19.3 de la Ley 40/2015."
  },
  {
    id: "Q-W7-197",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Gran Cruce Global de Órganos de los Temas 4, 5, 6, 7 y 8 del Bloque 1 - MINISDEF, EMAD, ET, Armada y EA",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "En la organización del Ministerio de Defensa (RD 205/2024) y de las Fuerzas Armadas (RD 521/2020 e Instrucciones 14/2021, 15/2021 y 6/2025), señale la opción en la que TODAS las dependencias orgánicas son 100% CORRECTAS:",
    opciones: [
      "1) De la SEDEF dependen DIGAM, DIGENECO y DIGENIN; 2) De la SUBDEF dependen SGT, DIGENPER y DIGEREM (además de la Asesoría Jurídica General, la Intervención General de la Defensa, la Inspección General de Sanidad y el ISFAS); 3) De la SEGENPOL depende DIGENPOL; 4) Directamente del Ministro dependen CESTIC, DIAPER y la Guardia Real (en lo administrativo, dependiendo del Jefe del Cuarto Militar en su cometido de servicio a la Corona); 5) En el EMAD se integran EMACON, MOPS, MCCE, CIFAS y CESEDEN; 6) En la Fuerza del ET se integran CGTAD (Valencia), FUTER (Sevilla) y MCANA (Tenerife); 7) En la Armada la Fuerza es La Flota (Rota); y 8) En el Ejército del Aire y del Espacio la Fuerza la integran MACOM, MACAN y MESP.",
      "DIGAM depende de la SUBDEF, DIGENPER depende de la SEDEF y el MADOC pertenece a la Armada.",
      "El Mando del Espacio (MESP) pertenece al Ejército de Tierra y la Fuerza Terrestre (FUTER) tiene su sede en Cartagena.",
      "El ISFAS depende del Estado Mayor de la Defensa y el CESEDEN depende de la Secretaría General Técnica."
    ],
    correcta: 0,
    referencia: "RD 205/2024, RD 521/2020, Instrucción 14/2021 (ET), Instrucción 15/2021 (Armada) e Instrucción 6/2025 (EA)",
    ubicacionTemario: "Bloque 1 > Síntesis Transversal de Organigramas de Examen (Temas 4, 5, 6, 7 y 8)",
    consejoAcademia: "¡Otra ficha maestra para Favoritas ⭐!: De un solo vistazo repasas el organigrama completo del **RD 205/2024 (MINISDEF)**, **RD 521/2020 (EMAD)**, **Inst. 14/2021 (ET)**, **Inst. 15/2021 (Armada)** e **Inst. 6/2025 (EA)**.",
    justificacion: "La primera opción recoge con total exactitud el encuadramiento orgánico vigente en el RD 205/2024, el RD 521/2020 y las Instrucciones de organización de los tres Ejércitos."
  },
  {
    id: "Q-W7-198",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "Gran Cruce Global de Plazos del Bloque 2 - Ley 8/2006, Ley 39/2007, LO 9/2011, LO 8/2014 y RD 176/2014",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el gran cruce numérico del Bloque 2 entre la Ley 8/2006, la Ley 39/2007, la LO 9/2011, la LO 8/2014 y el RD 176/2014, y señale la opción 100% CORRECTA:",
    opciones: [
      "1) Compromiso inicial Tropa (Ley 8/2006): 2 o 3 años; Compromiso de larga duración (CLD): hasta los 45 años (accediendo tras >5 años de servicio); RED: a los 45 años (con >=18 años de servicio) hasta los 65 años; 2) COPERFAS y Observatorio de la Vida Militar (LO 9/2011): mandato de 4 años en COPERFAS y de 5 años en el Observatorio (9 miembros: 5 Congreso + 4 Senado); 3) Arrestos disciplinarios (LO 8/2014): Leve 1-14 días, Grave 15-30 días y Muy Grave 31-60 días; 4) Prescripción Faltas (2m / 2a / 3a), Prescripción Sanciones (3m / 2a / 3a) y Cancelación (1a / 2a / 4a); 5) Caducidad expedientes disciplinarios: 6 meses (Graves) y 1 año (Muy Graves); y 6) Quejas e Iniciativas (RD 176/2014): 1 mes para elevar Queja a 2.ª instancia (MAPER/JEPER o DIGENPER) y 6 meses máximo para contestar Iniciativas.",
      "El mandato del Observatorio de la Vida Militar es de 4 años y el del COPERFAS es de 5 años.",
      "Las faltas leves prescriben a los 3 meses y las sanciones leves prescriben a los 2 meses.",
      "El expediente disciplinario por falta grave caduca al año y el de falta muy grave a los 6 meses."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Ley 39/2007, LO 9/2011, LO 8/2014 y RD 176/2014",
    ubicacionTemario: "Bloque 2 > Síntesis Transversal de Plazos y Cifras de Examen (Temas 1, 2, 3, 4 y 5)",
    consejoAcademia: "¡La chuleta maestra del Bloque 2!: Fíjate cómo las opciones falsas son exactamente las trampas que pone el Tribunal (intercambiar **4 años COPERFAS vs 5 años Observatorio**, intercambiar **2 meses prescripción falta leve vs 3 meses prescripción sanción leve**, e intercambiar **6 meses expediente grave vs 1 año expediente muy grave**).",
    justificacion: "La primera opción resume con total precisión todos los plazos legales de la Ley 8/2006, la LO 9/2011, la LO 8/2014 y el RD 176/2014."
  },
  {
    id: "Q-W7-199",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Gran Cruce Global de Plazos de la Ley 39/2015 LPACAP - Todos los Plazos del Procedimiento Administrativo",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el gran cruce numérico del Tema 8 del Bloque 2 (Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas) y señale la opción en la que TODOS los plazos son 100% CORRECTOS:",
    opciones: [
      "1) Plazo máximo para resolver y notificar (Art. 21): máximo 6 meses salvo rango de Ley o Derecho UE, y 3 meses de plazo supletorio si la norma calla; 2) Expedición de certificado de silencio administrativo (Art. 24.4): 15 días; 3) Cursar toda notificación (Art. 40.2): 10 días desde que se dictó el acto; 4) Rechazo de notificación electrónica por falta de acceso (Art. 43.2): 10 días naturales; 5) Subsanación de solicitud (Art. 68): 10 días (+ hasta 5 días salvo selectivos/concurrencia); 6) Informes (Art. 80): 10 días; 7) Prueba (Art. 77): ordinario de 10 a 30 días (+ extraordinario hasta 10 días); 8) Trámite de audiencia (Art. 82): de 10 a 15 días; 9) Caducidad por paralización del interesado (Art. 95): 3 meses; y 10) Tramitación simplificada (Art. 96): resuelta en 30 días.",
      "El plazo para cursar la notificación es de 30 días y el rechazo electrónico se produce a los 15 días hábiles.",
      "El certificado de silencio administrativo se expide en 3 meses y la tramitación simplificada dura 6 meses.",
      "El período ordinario de prueba dura de 1 a 5 días y los informes se emiten en 2 meses."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, de 1 de octubre, LPACAP, Artículos 21, 24, 40, 43, 68, 77, 80, 82, 95 y 96",
    ubicacionTemario: "Bloque 2 > Tema 8 (Ley 39/2015 LPACAP) > Síntesis Maestra de los 10 Plazos de Examen de la LPACAP",
    consejoAcademia: "¡Aquí tienes los **10 plazos de la Ley 39/2015** reunidos en una sola tarjeta!: Si dominas esta pregunta y la tabla de los 3 recursos (Alzada, Reposición y Revisión), tienes asegurado el 100% de aciertos en el Tema 8 del Bloque 2.",
    justificacion: "Los diez plazos enumerados en la primera opción se corresponden exactamente con los artículos 21, 24.4, 40.2, 43.2, 68, 77, 80, 82, 95 y 96 de la Ley 39/2015."
  },
  {
    id: "Q-W7-200",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Gran Cruce Global del Bloque 3 - Ley 36/2015, PDC-01, ONU, OTAN, OSCE, UE y Misiones Internacionales",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Realice el gran cruce final del Bloque 3 (Seguridad Nacional y Organizaciones Internacionales) y señale la opción en la que TODOS los datos históricos, sedes, miembros y preceptos son 100% CORRECTOS:",
    opciones: [
      "1) Ley 36/2015 y ESN 2021: revisión cada 5 años, Secretaría Técnica del CSN en el DSN y Situación de Interés declarada por Real Decreto del Presidente del Gobierno; 2) PDC-01: factores MIRADO-I, 5 ámbitos operacionales + ámbito cognitivo y conducción operacional por el CMOPS; 3) ONU (Carta de San Francisco, 1945; ingreso de España el 14 de diciembre de 1955): 6 órganos principales (5 en Nueva York y la CIJ en La Haya) y Consejo de Seguridad de 15 miembros (5 permanentes con veto + 10 electos por 2 años, mayoría de 9 votos); 4) OTAN (Tratado de Washington, 4 de abril de 1949; ingreso de España el 30 de mayo de 1982): 32 aliados, Art. 4 (consultas), Art. 5 (defensa colectiva) y dos Mandos Estratégicos (ACO en SHAPE-Mons y ACT en Norfolk); 5) OSCE (Helsinki 1975 -> Budapest 1994): 57 Estados participantes, 3 dimensiones y Secretaría en Viena; y 6) Unión Europea (adhesión de España en vigor el 1 de enero de 1986; Tratado de Lisboa en vigor el 1 de diciembre de 2009): 27 Estados miembros, 7 Instituciones (Art. 13 TUE), Cláusula de Asistencia Mutua (Art. 42.7 TUE) y Cláusula de Solidaridad (Art. 222 TFUE).",
      "España ingresó en la ONU en 1945, en la OTAN en 1999 y en la Unión Europea en 2002.",
      "ACO tiene su sede en Norfolk y ACT tiene su sede en Mons, y la Corte Internacional de Justicia está en Nueva York.",
      "La OSCE tiene 32 miembros y la OTAN tiene 57 miembros."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, PDC-01, Carta de la ONU (1945), Tratado de Washington (1949), Acta de Helsinki (1975) / Budapest (1994) y Tratado de Lisboa (TUE/TFUE)",
    ubicacionTemario: "Bloque 3 > Síntesis Transversal de Todo el Bloque 3 (Temas 1 a 7)",
    consejoAcademia: "¡Enhorabuena! Con esta pregunta **Q-W7-200** alcanzamos las **1.400 PREGUNTAS OFICIALES Y DE ACADEMIA** en tu banco de estudio. Guárdate esta ficha en Favoritas ⭐ porque resume todo el **Bloque 3 (fechas de fundación, fechas de ingreso de España, sedes, miembros y artículos clave)**.",
    justificacion: "La primera opción sintetiza con total exactitud todos los datos normativos, orgánicos e históricos de los siete temas que integran el Bloque 3 del temario oficial de Permanencia."
  }
];

function mergeWave7QuestionsIntoBank() {
  if (typeof DEFAULT_QUESTIONS === "undefined") return;

  const existingIds = new Set(DEFAULT_QUESTIONS.map(q => q.id));
  const wave7All = [
    ...(typeof WAVE7_QUESTIONS_PART1 !== "undefined" ? WAVE7_QUESTIONS_PART1 : []),
    ...(typeof WAVE7_QUESTIONS_PART2 !== "undefined" ? WAVE7_QUESTIONS_PART2 : []),
    ...(typeof WAVE7_QUESTIONS_PART3 !== "undefined" ? WAVE7_QUESTIONS_PART3 : [])
  ];

  wave7All.forEach(q => {
    if (!existingIds.has(q.id)) {
      DEFAULT_QUESTIONS.push(q);
      existingIds.add(q.id);
    }
  });

  if (typeof OFFICIAL_EXAM_PACKS !== "undefined" && typeof WAVE7_NEW_EXAM_PACKS !== "undefined") {
    const existingPackIds = new Set(OFFICIAL_EXAM_PACKS.map(p => p.id));
    WAVE7_NEW_EXAM_PACKS.forEach(pack => {
      if (!existingPackIds.has(pack.id)) {
        OFFICIAL_EXAM_PACKS.push(pack);
        existingPackIds.add(pack.id);
      }
    });
  }
}

mergeWave7QuestionsIntoBank();
