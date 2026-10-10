/**
 * ============================================================================
 * OLEADA MUSCULAR 6 DE PREGUNTAS OFICIALES Y PIZARRA DE LOS 28 VÍDEOS DE YOUTUBE
 * (+200 NUEVAS PREGUNTAS: Q-W6-001 A Q-W6-200 -> HITO 1.200 PREGUNTAS TOTALES)
 * Y 2 NUEVOS SIMULACROS OFICIALES (#17 Y #18 -> 18 SIMULACROS CERRADOS)
 * ============================================================================
 */

const WAVE6_NEW_EXAM_PACKS = [
  {
    id: "PACK-17",
    numero: 17,
    titulo: "🎬 Simulacro #17 • Especial Pizarra del Profesor (28 Vídeos YouTube)",
    subtitulo: "100 Preguntas Extraídas de los 28 Vídeos de Academia • 120 Minutos",
    badge: "SIMULACRO #17 • VÍDEOS",
    badgeColor: "bg-sky-400 text-slate-950",
    borderClass: "border-sky-500/70 bg-sky-950/20",
    color: "sky",
    count: 100,
    preguntas: 100,
    durationMinutes: 120,
    tiempoMinutos: 120,
    reparto: "34 B1 • 40 B2 • 26 B3 (Pizarra 28 Vídeos)",
    mode: "ponderado_100",
    bloque: "ALL",
    tagFilter: "ALL",
    studyMode: true,
    descripcion: "Simulacro oficial de 100 preguntas centrado en los esquemas, cuadros de plazos, mayorías, estructura de los 3 Ejércitos y trampas explicadas en las 28 videoclases del curso."
  },
  {
    id: "PACK-18",
    numero: 18,
    titulo: "👑 Simulacro #18 • Gran Examen Final 'Hito 1.200 Preguntas' (Corte Plaza 2026)",
    subtitulo: "100 Preguntas Ponderadas de Máximo Nivel (34 B1 + 40 B2 + 26 B3) • 120 Minutos",
    badge: "SIMULACRO #18 • HITO 1.200",
    badgeColor: "bg-amber-400 text-slate-950",
    borderClass: "border-amber-400/80 bg-amber-950/25",
    color: "amber",
    count: 100,
    preguntas: 100,
    durationMinutes: 120,
    tiempoMinutos: 120,
    reparto: "34 B1 • 40 B2 • 26 B3 (Corte Real)",
    mode: "ponderado_100",
    bloque: "ALL",
    tagFilter: "Pregunta de Examen",
    studyMode: false,
    descripcion: "El examen definitivo para asegurar tu plaza de Cabo/Soldado Permanente. Selecciona 100 preguntas de corte oficial sobre el banco completo de 1.200 preguntas."
  }
];

const WAVE6_QUESTIONS_PART1 = [
  // ==========================================================================
  // BLOQUE 1: ORGANIZACIÓN (Q-W6-001 a Q-W6-070) — Temas B1-T01 a B1-T06 (Vídeos T1 a T10)
  // ==========================================================================
  {
    id: "Q-W6-001",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según explica el profesor en el Vídeo T1 sobre las fechas clave de la Constitución Española de 1978, ¿en qué fecha exacta fue APROBADA por los Plenos del Congreso y del Senado, y en qué fecha fue SANCIONADA y PROMULGADA por S.M. el Rey ante las Cortes Generales?",
    opciones: [
      "Fue aprobada por las Cortes Generales el 31 de octubre de 1978, y sancionada y promulgada por el Rey el 27 de diciembre de 1978.",
      "Fue aprobada por las Cortes el 6 de diciembre de 1978 y sancionada el 29 de diciembre de 1978.",
      "Fue aprobada el 27 de diciembre de 1978 y sancionada el 31 de octubre de 1978.",
      "Fue aprobada y sancionada el mismo día, el 6 de diciembre de 1978."
    ],
    correcta: 0,
    referencia: "Constitución Española de 1978, Proceso Constituyente",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Las 4 Fechas Sagradas de 1978",
    consejoAcademia: "Memoriza la secuencia cronológica de los 4 hitos de 1978: **31 de octubre** (Aprobación Cortes) $\\rightarrow$ **6 de diciembre** (Referéndum) $\\rightarrow$ **27 de diciembre** (Sanción y Promulgación Real) $\\rightarrow$ **29 de diciembre** (Publicación en BOE y Entrada en vigor el mismo día).",
    justificacion: "Las Cortes Generales aprobaron el texto el 31 de octubre de 1978 y S.M. el Rey lo sancionó y promulgó el 27 de diciembre de 1978."
  },
  {
    id: "Q-W6-002",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 1 de la Constitución Española (Vídeo T1), no debe confundirse el apartado 1 con el apartado 3. ¿Cuáles son exactamente los cuatro VALORES SUPERIORES del ordenamiento jurídico del Estado social y democrático de Derecho (Art. 1.1 CE)?",
    opciones: [
      "La libertad, la justicia, la igualdad y el pluralismo político.",
      "La unidad de la Nación, la autonomía de las nacionalidades, la solidaridad y el castellano.",
      "La legalidad, la jerarquía normativa, la publicidad de las normas y la irretroactividad.",
      "La soberanía popular, la Monarquía parlamentaria, la dignidad y la seguridad jurídica."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 1.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Valores Superiores del Art. 1.1 vs Principios del Art. 9.3",
    consejoAcademia: "¡Cuidado con el cruce entre el **Art. 1.1** (Valores Superiores: **Libertad, Justicia, Igualdad y Pluralismo Político**) y el **Art. 9.3** (Principios garantizados por la CE: legalidad, jerarquía normativa, publicidad, irretroactividad, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad)!",
    justificacion: "El artículo 1.1 de la Constitución propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político."
  },
  {
    id: "Q-W6-003",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 9.3 de la Constitución Española (Vídeo T1), la Constitución garantiza la irretroactividad de:",
    opciones: [
      "Las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.",
      "Todas las leyes penales, incluidas las que beneficien al reo.",
      "Únicamente los reglamentos municipales de tráfico.",
      "Cualquier norma tributaria o laboral aunque sea favorable al trabajador."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 9.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Los 7 Principios del Art. 9.3 CE",
    consejoAcademia: "¡Trampa clásica de test! La Constitución prohíbe la retroactividad de las disposiciones sancionadoras **NO FAVORABLES** o restrictivas de derechos individuales (Art. 9.3 CE). A sensu contrario, si una norma sancionadora posterior es **MÁS FAVORABLE** al infractor, sí se aplica retroactivamente (como recoge expresamente el Art. 3 de la LO 8/2014 de Régimen Disciplinario).",
    justificacion: "El artículo 9.3 de la Constitución garantiza la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales."
  },
  {
    id: "Q-W6-004",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 53.2 de la Constitución Española (Vídeo T1), ¿qué derechos y libertades son susceptibles de tutela mediante el RECURSO DE AMPARO ante el Tribunal Constitucional?",
    opciones: [
      "El principio de igualdad del artículo 14, la Sección 1ª del Capítulo Segundo del Título I (artículos 15 a 29) y la objeción de conciencia reconocida en el artículo 30.2.",
      "Todos los artículos del Título I (del artículo 10 al 55), incluidos los principios rectores del Capítulo Tercero.",
      "Únicamente el derecho a la vida (artículo 15) y el habeas corpus (artículo 17).",
      "Los derechos de propiedad privada (artículo 33) y libertad de empresa (artículo 38)."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 53.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Garantías de los Derechos y Recurso de Amparo (Art. 53.2)",
    consejoAcademia: "Fórmula matemática del **Recurso de Amparo (Art. 53.2 CE)**: **Art. 14 (Igualdad) + Arts. 15 al 29 (Sección 1ª Cap. II) + Art. 30.2 (Objeción de conciencia)**. Y recuerda: el procedimiento preferente y sumario ante los tribunales ordinarios protege el Art. 14 y los Arts. 15-29, pero **NO** el 30.2 (que va al amparo constitucional pero no al sumario ordinario).",
    justificacion: "El artículo 53.2 de la Constitución circunscribe el recurso de amparo ante el Tribunal Constitucional al artículo 14, la Sección 1ª del Capítulo II (arts. 15 a 29) y la objeción de conciencia del artículo 30.2."
  },
  {
    id: "Q-W6-005",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 de la Constitución Española (Vídeo T1), la detención preventiva no podrá durar más del tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos y, en todo caso, en el plazo máximo de SETENTA Y DOS HORAS (72 horas) el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial. ¿Por qué institución u órgano se regulará el procedimiento de 'habeas corpus'?",
    opciones: [
      "Por ley (mediante Ley Orgánica 6/1984 reguladora del procedimiento de Habeas Corpus) para producir la inmediata puesta a disposición judicial de toda persona detenida ilegalmente.",
      "Por Real Decreto del Consejo de Ministros.",
      "Por Orden Ministerial del Ministro del Interior.",
      "Por bando del Alcalde de cada municipio."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 17.2 y 17.4",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Libertad Personal, Detención Preventiva (72h) y Habeas Corpus (Art. 17)",
    consejoAcademia: "En el **Art. 17 CE** recuerda tres claves: 1) Tope constitucional general de la detención preventiva: **72 horas**; 2) El detenido tiene derecho a la asistencia de abogado en las diligencias policiales y judiciales; 3) La ley regulará un procedimiento de **'habeas corpus'** y determinará el plazo máximo de duración de la **prisión provisional**.",
    justificacion: "El artículo 17.4 de la Constitución dispone que la ley regulará un procedimiento de 'habeas corpus' para producir la inmediata puesta a disposición judicial de toda persona detenida ilegalmente."
  },
  {
    id: "Q-W6-006",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a los artículos 28 y 29 de la Constitución Española (Vídeo T1), ¿cómo regula la Constitución el derecho de SINDICACIÓN y el derecho de PETICIÓN en relación con los miembros de las Fuerzas o Institutos armados y demás Cuerpos sometidos a disciplina militar?",
    opciones: [
      "La ley podrá limitar o exceptuar el ejercicio del derecho de sindicación a las Fuerzas o Institutos armados (y de hecho la LO 9/2011 prohíbe a los militares la sindicación y la huelga); y respecto al derecho de petición (Art. 29.2 CE), sus miembros sólo podrán ejercerlo individualmente y con arreglo a lo dispuesto en su legislación específica.",
      "Los militares pueden ejercer colectivamente el derecho de petición y convocar huelgas generales.",
      "El derecho de petición está totalmente prohibido incluso de forma individual para los militares.",
      "Los militares pueden afiliarse a sindicatos políticos nacionales."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 28.1 y 29.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Derechos con Régimen Especial para las FAS (Arts. 28 y 29 CE)",
    consejoAcademia: "¡Pregunta fija de examen militar! **Art. 28.1 CE**: La ley podrá limitar o exceptuar el derecho de sindicación a las FAS. **Art. 29.2 CE**: Los miembros de las FAS sólo podrán ejercer el **derecho de petición INDIVIDUALMENTE** y con arreglo a su legislación específica (nunca en forma colectiva).",
    justificacion: "El artículo 28.1 permite exceptuar la sindicación a las FAS y el artículo 29.2 restringe el ejercicio del derecho de petición de los miembros de las FAS a la modalidad exclusivamente individual."
  },
  {
    id: "Q-W6-007",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 55.1 de la Constitución Española (Vídeo T1), ¿qué diferencia existe en relación con el artículo 17.3 CE (derecho del detenido a ser informado de sus derechos y razones de su detención, a no declarar y a la asistencia de abogado) entre el ESTADO DE EXCEPCIÓN y el ESTADO DE SITIO?",
    opciones: [
      "El apartado 3 del artículo 17 NO puede ser suspendido cuando se acuerde la declaración del estado de excepción, pero SÍ puede ser suspendido cuando se declare el estado de sitio.",
      "El artículo 17.3 puede suspenderse en el estado de alarma pero no en el de sitio.",
      "El artículo 17.3 nunca puede suspenderse ni siquiera en el estado de sitio.",
      "En el estado de alarma se suspenden todos los derechos del Título I."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 55.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Suspensión de Derechos: Excepción vs Sitio (Art. 55.1)",
    consejoAcademia: "¡LA PREGUNTA DE CORTE DEL ART. 55.1 CE! En el **Estado de Alarma** NO se suspende ningún derecho (solo se limitan). En **Excepción y Sitio** se pueden suspender los derechos de los arts. 17, 18.2 y 18.3, 19, 20.1.a/d y 20.5, 21, 28.2 y 37.2, **EXCEPTO el Art. 17.3** (información al detenido y abogado), que **SOLO puede suspenderse en el ESTADO DE SITIO** (nunca en el de excepción).",
    justificacion: "El artículo 55.1 de la Constitución exceptúa expresamente el apartado 3 del artículo 17 de la suspensión de derechos en el supuesto de declaración del estado de excepción, permitiéndola únicamente en el estado de sitio."
  },
  {
    id: "Q-W6-008",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 59 de la Constitución Española (Vídeo T2), ¿qué requisitos exige la Constitución para ejercer la REGENCIA o la TUTELA del Rey menor, y cuándo pueden acumularse ambos cargos en una misma persona?",
    opciones: [
      "Para ejercer la Regencia es preciso ser español y mayor de edad; para la Tutela del Rey menor hay que ser español de nacimiento y mayor de edad; y los cargos de Regente y de Tutor no podrán estar acumulados sino en el padre, madre o ascendientes directos del Rey.",
      "Cualquier ciudadano de la Unión Europea mayor de 16 años puede ser Regente y Tutor simultáneamente.",
      "El Presidente del Gobierno asume siempre acumulados los cargos de Regente y Tutor.",
      "El Regente y el Tutor nunca pueden coincidir en ninguna persona, ni siquiera en el padre o la madre del Rey."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 59 y 60",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > La Corona: Regencia (Art. 59) vs Tutela del Rey Menor (Art. 60)",
    consejoAcademia: "¡Fíjate en el matiz del Vídeo T2!: Para ser **Regente** (Art. 59.4 CE) basta ser **español y mayor de edad**. En cambio, para ser **Tutor testamentario** del Rey menor (Art. 60.1 CE) se exige ser **español DE NACIMIENTO y mayor de edad**. Y solo **padre, madre o ascendientes directos** del Rey pueden acumular Regencia + Tutela.",
    justificacion: "Los artículos 59.4 y 60.1 de la Constitución regulan los requisitos de la Regencia y la Tutela del Rey menor y la prohibición de acumular ambos cargos salvo en el padre, madre o ascendientes directos del Rey."
  },
  {
    id: "Q-W6-009",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 64 de la Constitución Española (Vídeo T2), los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes. ¿En qué supuestos el refrendo corresponde al PRESIDENTE DEL CONGRESO DE LOS DIPUTADOS, y qué actos realiza el Rey LIBREMENTE sin necesidad de refrendo (Art. 65)?",
    opciones: [
      "El Presidente del Congreso refrenda la propuesta y el nombramiento del Presidente del Gobierno, y la disolución de las Cámaras prevista en el artículo 99 (si transcurren 2 meses desde la primera votación de investidura sin que ningún candidato obtenga la confianza). Y el Rey realiza libremente (sin refrendo) la distribución de la cantidad global de su Presupuesto para el sostenimiento de su Familia y Casa y el nombramiento y relevo de los miembros civiles y militares de su Casa (Art. 65).",
      "El Presidente del Senado refrenda todos los Reales Decretos y el Rey nombra libremente a los Ministros.",
      "El Rey no necesita refrendo para declarar la guerra y hacer la paz.",
      "El Defensor del Pueblo refrenda el nombramiento del Presidente del Gobierno."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 64 y 65",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > El Refrendo de los Actos del Rey (Art. 64) y Excepciones del Art. 65",
    consejoAcademia: "¡Los **3 actos que refrenda el Presidente del Congreso** (Art. 64.1 CE)!: 1) La **propuesta** de candidato a Presidente del Gobierno; 2) El **nombramiento** del Presidente del Gobierno; 3) La **disolución automática de ambas Cámaras del Art. 99.5** si pasan **2 meses** desde la primera votación de investidura. ¿Y qué hace el Rey sin refrendo (Art. 65)? Distribuir la dotación de su Casa y nombrar/relevar a los miembros civiles y militares de su Casa.",
    justificacion: "El artículo 64.1 atribuye al Presidente del Congreso el refrendo de la propuesta y nombramiento del Presidente del Gobierno y la disolución del artículo 99, y el artículo 65 regula los actos libres del Rey en su Casa."
  },
  {
    id: "Q-W6-010",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 68 de la Constitución Española (Vídeo T2), el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados (350 según la LOREG). ¿Qué representación mínima inicial se asigna a cada circunscripción provincial y cuántos Diputados eligen Ceuta y Melilla?",
    opciones: [
      "La ley distribuirá el número total de Diputados, asignando una representación mínima inicial a cada circunscripción (2 Diputados por provincia según la LOREG) y distribuyendo los demás en proporción a la población; Ceuta y Melilla estarán representadas cada una de ellas por un (1) Diputado.",
      "Ceuta y Melilla eligen dos (2) Diputados cada una y cuatro (4) Senadores cada una.",
      "Todas las provincias eligen exactamente el mismo número de Diputados con independencia de su población.",
      "El Congreso se elige por circunscripción única nacional sin provincias."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 68.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Congreso (Art. 68) vs Senado (Art. 69): Ceuta y Melilla",
    consejoAcademia: "¡No confundas Ceuta y Melilla en el Congreso vs Senado! En el **Congreso (Art. 68.2 CE)**: Ceuta elige **1 Diputado** y Melilla elige **1 Diputado**. En el **Senado (Art. 69.4 CE)**: Ceuta elige **2 Senadores** y Melilla elige **2 Senadores**.",
    justificacion: "El artículo 68.2 de la Constitución dispone que Ceuta y Melilla estarán representadas cada una de ellas por un Diputado en el Congreso."
  },
  {
    id: "Q-W6-011",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 69 de la Constitución Española (Vídeo T2), el Senado es la Cámara de representación territorial. ¿Cuántos Senadores se eligen en cada provincia peninsular, cuántos en las islas mayores (Gran Canaria, Mallorca y Tenerife), cuántos en las demás islas o agrupaciones y cuántos designan las Comunidades Autónomas?",
    opciones: [
      "En cada provincia se elegirán 4 Senadores; en las islas mayores (Gran Canaria, Mallorca y Tenerife) 3 a cada una; en las demás islas o agrupaciones (Ibiza-Formentera, Menorca, Fuerteventura, Gomera, Hierro, Lanzarote y La Palma) 1 a cada una; en Ceuta y Melilla 2 a cada una; y las Comunidades Autónomas designarán además 1 Senador y otro más por cada millón de habitantes de su respectivo territorio.",
      "En cada provincia se eligen 5 Senadores y en todas las islas 2 Senadores.",
      "En las islas mayores se eligen 4 Senadores y en las menores 2 Senadores.",
      "Las Comunidades Autónomas designan 10 Senadores fijos cada una sin importar su población."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 69",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Composición del Senado: Regla 4 - 3 - 1 - 2 y CCAA (Art. 69)",
    consejoAcademia: "Memoriza la regla numérica del **Senado (Art. 69 CE)**: **4** por provincia peninsular | **3** por isla mayor (**Gran Canaria, Mallorca, Tenerife**) | **1** por isla menor o agrupación | **2** en **Ceuta** y **2** en **Melilla** | **CCAA**: **1 fijo + 1 más por cada millón de habitantes**.",
    justificacion: "El artículo 69 de la Constitución establece el reparto exacto de Senadores provinciales, insulares, de Ceuta y Melilla y designados por las Comunidades Autónomas."
  },
  {
    id: "Q-W6-012",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 73 de la Constitución Española (Vídeo T2), las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones. ¿Cuáles son exactamente esos dos períodos?",
    opciones: [
      "El primero, de septiembre a diciembre, y el segundo, de febrero a junio.",
      "El primero, de enero a mayo, y el segundo, de julio a noviembre.",
      "El primero, de octubre a enero, y el segundo, de marzo a julio.",
      "De enero a diciembre de forma ininterrumpida sin vacaciones parlamentarias."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 73.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Períodos Ordinarios de Sesiones de las Cámaras (Art. 73)",
    consejoAcademia: "Truco para no fallar nunca el **Art. 73.1 CE**: Los meses que quedan **FUERA** de los períodos ordinarios de sesiones son **ENERO, JULIO y AGOSTO**. Por tanto: 1º período = **septiembre a diciembre**; 2º período = **febrero a junio**.",
    justificacion: "El artículo 73.1 de la Constitución establece que las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones: el primero, de septiembre a diciembre, y el segundo, de febrero a junio."
  },
  {
    id: "Q-W6-013",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 112 y 113 de la Constitución Española (Vídeo T2), ¿qué diferencia existe entre la CUESTIÓN DE CONFIANZA y la MOCIÓN DE CENSURA en cuanto a quién la plantea y qué mayoría requiere para prosperar?",
    opciones: [
      "La cuestión de confianza la plantea el Presidente del Gobierno (previa deliberación del Consejo de Ministros) y se entiende otorgada con el voto de la mayoría SIMPLE de los Diputados; la moción de censura debe ser propuesta al menos por la décima parte (1/10) de los Diputados, debe incluir un candidato alternativo, no puede ser votada hasta que transcurran 5 días desde su presentación y requiere la mayoría ABSOLUTA del Congreso.",
      "Ambas requieren mayoría de dos tercios (2/3) del Congreso y del Senado.",
      "La cuestión de confianza requiere mayoría absoluta y la moción de censura mayoría simple.",
      "La moción de censura la propone el Rey y se vota en el Senado."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 112 y 113",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Cuestión de Confianza (Art. 112) vs Moción de Censura (Art. 113)",
    consejoAcademia: "¡Duelo clásico del Título V (Vídeos T2)! **Cuestión de Confianza (Art. 112)** = la pide el Presidente del Gobierno (previa deliberación del Consejo de Ministros) sobre su programa o declaración de política general y basta **MAYORÍA SIMPLE**. **Moción de Censura (Art. 113)** = constructiva (con candidato), la propone al menos **1/10 de los Diputados** (35 diputados), enfriamiento de **5 días** (en los **2 primeros días** caben mociones alternativas) y exige **MAYORÍA ABSOLUTA**.",
    justificacion: "Los artículos 112 y 113 de la Constitución regulan respectivamente la cuestión de confianza (mayoría simple) y la moción de censura constructiva (propuesta por 1/10 de los Diputados, espera de 5 días y mayoría absoluta)."
  },
  {
    id: "Q-W6-014",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 122 y 159 de la Constitución Española (Vídeo T2), compare usted la composición y el mandato del CONSEJO GENERAL DEL PODER JUDICIAL (CGPJ) con los del TRIBUNAL CONSTITUCIONAL (TC):",
    opciones: [
      "El CGPJ está integrado por el Presidente del Tribunal Supremo (que lo preside) y por 20 miembros nombrados por el Rey por un período de 5 años (12 entre Jueces y Magistrados y 8 entre abogados y juristas con más de 15 años de ejercicio, elegidos 4 por el Congreso y 4 por el Senado por mayoría de 3/5). El Tribunal Constitucional se compone de 12 miembros nombrados por el Rey por 9 años (4 a propuesta del Congreso por 3/5, 4 del Senado por 3/5, 2 del Gobierno y 2 del CGPJ), renovándose por terceras partes cada 3 años.",
      "El CGPJ tiene 12 miembros por 9 años y el Tribunal Constitucional tiene 20 miembros por 5 años.",
      "Tanto el CGPJ como el Tribunal Constitucional tienen un mandato vitalicio.",
      "Los miembros del Tribunal Constitucional son elegidos directamente por referéndum cada 4 años."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 122.3 y 159",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > CGPJ (1 + 20 por 5 años) vs Tribunal Constitucional (12 por 9 años)",
    consejoAcademia: "¡Cuadro comparativo imprescindible del Vídeo T2!: **CGPJ (Art. 122.3 CE)** = **Presidente del TS + 20 vocales** (12 judiciales + 8 juristas de >15 años), mandato **5 años**. **Tribunal Constitucional (Art. 159 CE)** = **12 magistrados** (**4 Congreso + 4 Senado + 2 Gobierno + 2 CGPJ**, >15 años de ejercicio), mandato **9 años** (se renuevan por tercios —4 magistrados— cada **3 años**). Y su Presidente lo nombra el Rey por **3 años**.",
    justificacion: "El artículo 122.3 regula el CGPJ (Presidente + 20 miembros por 5 años) y el artículo 159 regula el Tribunal Constitucional (12 miembros por 9 años, renovados por terceras partes cada 3 años)."
  },
  {
    id: "Q-W6-015",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 6, 7 y 8 de la Ley Orgánica 5/2005, de la Defensa Nacional (Vídeo T3), ¿a quién corresponde ordenar, coordinar y dirigir la actuación de las Fuerzas Armadas así como disponer su empleo; a quién corresponde acordar la participación de las Fuerzas Armadas en misiones fuera del territorio nacional; y a quién corresponde el desarrollo y la ejecución de la política de defensa?",
    opciones: [
      "Al Presidente del Gobierno le corresponde ordenar, coordinar y dirigir la actuación de las FAS y disponer su empleo (Art. 6); al Gobierno le corresponde acordar la participación de las FAS en misiones fuera del territorio nacional (Art. 17) y determinar la política de defensa (Art. 5); y al Ministro de Defensa le corresponde el desarrollo y la ejecución de la política de defensa (Art. 7).",
      "Al JEMAD le corresponde determinar la política de defensa y ordenar el envío de tropas al exterior.",
      "Al Rey le corresponde dirigir la política de defensa y aprobar el presupuesto militar.",
      "Al Senado le corresponde ejecutar la política de defensa."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Arts. 5, 6, 7 y 17",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Reparto de Competencias: Gobierno vs Presidente vs Ministro",
    consejoAcademia: "¡El trío de verbos que siempre pregunta el tribunal en la LO 5/2005 (Vídeo T3)!: 1) **Gobierno (Art. 5)**: **DETERMINA** la política de defensa y **ACUERDA** las misiones en el exterior; 2) **Presidente del Gobierno (Art. 6)**: **DIRIGE** la política de defensa, formula la **Directiva de Defensa Nacional** y **DISPONE EL EMPLEO** de las FAS; 3) **Ministro de Defensa (Art. 7)**: **DESARROLLA y EJECUTA** la política de defensa.",
    justificacion: "Los artículos 5, 6, 7 y 17 de la LO 5/2005 delimitan con precisión las atribuciones del Gobierno, del Presidente del Gobierno y del Ministro de Defensa."
  },
  {
    id: "Q-W6-016",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 11, 12 y 13 de la Ley Orgánica 5/2005 (Vídeo T3), ¿cuál es la distinción fundamental entre la ESTRUCTURA ORGÁNICA y la ESTRUCTURA OPERATIVA de las Fuerzas Armadas?",
    opciones: [
      "La estructura orgánica está compuesta por el Ejército de Tierra, la Armada y el Ejército del Aire y del Espacio y tiene como finalidad la PREPARACIÓN DE LA FUERZA (bajo el mando de sus respectivos JEME, AJEMA y JEMA); la estructura operativa está bajo el mando del JEMAD (en el EMAD) y tiene como finalidad el EMPLEO DE LA FUERZA en el desarrollo de las misiones asignadas.",
      "La estructura orgánica emplea la Fuerza en combate bajo el mando del JEMAD y la operativa prepara la Fuerza bajo el mando de la Subsecretaría.",
      "Ambas estructuras dependen directamente de los Delegados del Gobierno en las Comunidades Autónomas.",
      "La estructura operativa sólo existe en caso de declaración del estado de sitio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Arts. 11, 12 y 13",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Estructura Orgánica (Preparación) vs Estructura Operativa (Empleo)",
    consejoAcademia: "Regla de oro del Vídeo T3: **Estructura ORGÁNICA = PREPARACIÓN de la Fuerza** (3 Ejércitos: JEME, AJEMA, JEMA) $\\xrightarrow{\\text{Transferencia de Autoridad (TOA)}}$ **Estructura OPERATIVA = EMPLEO de la Fuerza en operaciones** (EMAD / **JEMAD**).",
    justificacion: "El artículo 11 de la LO 5/2005 establece que las Fuerzas Armadas se organizan en dos estructuras: una orgánica, para la preparación de la fuerza, y otra operativa, para su empleo en las misiones que se le asignen."
  },
  {
    id: "Q-W6-017",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 de la Ley Orgánica 5/2005 (Vídeo T3), para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno deberá realizar una consulta previa y recabar la autorización de:",
    opciones: [
      "El Congreso de los Diputados (y en las misiones que requieran una respuesta rápida o inmediata por razones de máxima urgencia, el Gobierno someterá al Congreso de los Diputados lo antes posible la ratificación de la decisión adoptada).",
      "El Senado por mayoría de dos tercios.",
      "El Tribunal Constitucional en Pleno.",
      "El Consejo de Estado mediante dictamen vinculante."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 17 y Art. 4.2.e",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Autorización de Misiones en el Exterior por el Congreso (Art. 17)",
    consejoAcademia: "¡No caigas en la trampa de 'las Cortes Generales' o 'el Senado'! Según los **Arts. 4.2.e y 17 de la LO 5/2005**, quien autoriza con carácter previo la participación de las FAS en misiones fuera del territorio nacional es **EL CONGRESO DE LOS DIPUTADOS**.",
    justificacion: "El artículo 17 de la LO 5/2005 atribuye al Congreso de los Diputados la autorización previa para la participación de las Fuerzas Armadas en misiones fuera del territorio nacional."
  },
  {
    id: "Q-W6-018",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "De acuerdo con el artículo 20 de la Ley Orgánica 5/2005 (Vídeo T3), el Consejo de Defensa Nacional es el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa. Cuando funciona en modalidad de Consejo Ejecutivo, ¿quiénes lo componen?",
    opciones: [
      "El Presidente del Gobierno (que lo preside), los Ministros de Defensa, del Interior, de Asuntos Exteriores y de Economía/Hacienda, el Jefe de Estado Mayor de la Defensa (JEMAD), el Director del CNI y el Director del Gabinete de la Presidencia del Gobierno.",
      "Únicamente los cuatro Generales de Ejército (JEMAD, JEME, AJEMA y JEMA).",
      "Los diecisiete Presidentes de las Comunidades Autónomas.",
      "Los miembros de la Mesa del Congreso y del Senado."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 20 (y Ley 36/2015 respecto al Consejo de Seguridad Nacional)",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Consejo de Defensa Nacional: Pleno vs Consejo Ejecutivo (Art. 20)",
    consejoAcademia: "En el **Consejo de Defensa Nacional (Art. 20 LO 5/2005)** diferencia: En el **Pleno** están tanto el **JEMAD** como los 3 Jefes de Estado Mayor (**JEME, AJEMA y JEMA**). En cambio, en el **Consejo Ejecutivo** militarmente solo entra el **JEMAD** (junto al Presidente, los 4 Ministros clave, el Director del CNI y el Director del Gabinete de Presidencia).",
    justificacion: "El artículo 20.4 de la LO 5/2005 regula la composición reducida del Consejo Ejecutivo del Consejo de Defensa Nacional."
  },
  {
    id: "Q-W6-019",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 28 de la Ley Orgánica 5/2005 (Vídeo T3), los bienes afectados a la Defensa Nacional integran el dominio público estatal. ¿A quién corresponde declarar las Zonas de Interés para la Defensa Nacional?",
    opciones: [
      "Al Gobierno, mediante Real Decreto, a propuesta del Ministro de Defensa.",
      "Al Alcalde del municipio donde radique el acuartelamiento.",
      "Al Jefe de la Unidad de Servicios de Base o Acuartelamiento (USBA).",
      "Al Presidente de la Comunidad Autónoma mediante Orden Foral."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 28",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Zonas de Interés para la Defensa Nacional (Art. 28)",
    consejoAcademia: "Las **Zonas de Interés para la Defensa Nacional** (Art. 28 LO 5/2005 y Ley 8/1975) las declara siempre el **Gobierno mediante Real Decreto**.",
    justificacion: "Corresponde al Gobierno, mediante Real Decreto, la declaración de las Zonas de Interés para la Defensa Nacional."
  },
  {
    id: "Q-W6-020",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 9 y 12 de la Ley 40/2015, de Régimen Jurídico del Sector Público (Vídeo T4), ¿cuál es la diferencia jurídica esencial entre la DELEGACIÓN DE COMPETENCIAS (Art. 9) y la DELEGACIÓN DE FIRMA (Art. 12)?",
    opciones: [
      "En la delegación de competencias se traslada el ejercicio de la competencia y las delegaciones y sus revocaciones DEBEN publicarse en el BOE (o diario oficial correspondiente), aunque las resoluciones se consideran dictadas por el órgano delegante; en cambio, la delegación de firma NO altera la competencia del órgano delegante y para su validez NO es necesaria su publicación.",
      "La delegación de firma exige publicación obligatoria en el BOE y la delegación de competencias es secreta.",
      "En la delegación de competencias se transmite la titularidad definitiva de la competencia.",
      "Se pueden delegar libremente la adopción de disposiciones de carácter general (reglamentos) y la resolución de recursos en los mismos órganos que dictaron los actos recurridos."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Arts. 9 y 12",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Las 6 Técnicas de Alteración de la Competencia (Arts. 8 a 14)",
    consejoAcademia: "¡El cuadro estrella del Vídeo T4 (Arts. 9 a 14 Ley 40/2015)!: **Delegación de competencias (Art. 9)** y **Encomienda de gestión (Art. 11)** y **Suplencia (si no está determinada)** $\\rightarrow$ **SÍ se publican** en el BOE (en Suplencia no es necesaria publicación). En cambio, la **DELEGACIÓN DE FIRMA (Art. 12)** y la **SUPLENCIA (Art. 13)** **NO alteran la competencia y NO necesitan publicación en el BOE para su validez**.",
    justificacion: "El artículo 9.3 exige la publicación en el BOE de las delegaciones de competencias y su revocación, mientras que el artículo 12.2 dispone expresamente que la delegación de firma no alterará la competencia del órgano delegante y para su validez no será necesaria su publicación."
  },
  {
    id: "Q-W6-021",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 10 de la Ley 40/2015 (Vídeo T4), cuando los órganos superiores atraen para sí el conocimiento de uno o varios asuntos cuya resolución corresponda ordinariamente o por delegación a sus órganos administrativos dependientes, estamos ante la figura de la AVOCACIÓN. ¿Qué recurso cabe contra el acuerdo de avocación?",
    opciones: [
      "Contra el acuerdo de avocación NO cabrá recurso, aunque podrá impugnarse en el que, en su caso, se interponga contra la resolución del procedimiento.",
      "Cabe recurso de alzada en el plazo de diez días ante el Consejo de Ministros.",
      "Cabe recurso extraordinario de revisión inmediato que paraliza el expediente.",
      "El acuerdo de avocación no requiere ser motivado ni notificado a los interesados."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Art. 10.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > La Avocación: Acuerdo Motivado y Sin Recurso Directo (Art. 10)",
    consejoAcademia: "En la **Avocación (Art. 10 Ley 40/2015)** recuerda las 2 reglas de examen: 1) Se realiza siempre mediante **acuerdo motivado** que debe notificarse a los interesados antes o simultáneamente a la resolución final; 2) **Contra el acuerdo de avocación NO CABE RECURSO** directo (solo se puede alegar al recurrir la resolución final del procedimiento).",
    justificacion: "El artículo 10.2 de la Ley 40/2015 dispone que contra el acuerdo de avocación no cabrá recurso, aunque podrá impugnarse en el que se interponga contra la resolución del procedimiento."
  },
  {
    id: "Q-W6-022",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 55 de la Ley 40/2015 (Vídeo T4), en la organización central de la Administración General del Estado (Ministerios), ¿cuáles son los ÓRGANOS SUPERIORES y cuáles son los ÓRGANOS DIRECTIVOS?",
    opciones: [
      "Son Órganos Superiores únicamente los Ministros y los Secretarios de Estado. Son Órganos Directivos los Subsecretarios y Secretarios Generales (con rango de Subsecretario), los Secretarios Generales Técnicos y Directores Generales (con rango de Director General), y los Subdirectores Generales.",
      "Los Subsecretarios y los Directores Generales son Órganos Superiores.",
      "Los Delegados del Gobierno son Órganos Superiores y los Ministros son Órganos Directivos.",
      "Los Subdirectores Generales tienen rango de Secretario de Estado."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Art. 55",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Órganos Superiores vs Órganos Directivos de la AGE (Art. 55)",
    consejoAcademia: "¡Regla de oro del Art. 55 Ley 40/2015!: **Órganos SUPERIORES solo hay DOS**: **Ministros y Secretarios de Estado**. Todos los demás (Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales, Subdirectores Generales, Delegados del Gobierno —rango de Subsecretario— y Subdelegados del Gobierno —nivel de Subdirector General—) son **Órganos DIRECTIVOS**.",
    justificacion: "El artículo 55.2 de la Ley 40/2015 clasifica los órganos ministeriales en órganos superiores (Ministros y Secretarios de Estado) y órganos directivos (Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales y Subdirectores Generales)."
  },
  {
    id: "Q-W6-023",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 59 y 67 de la Ley 40/2015 (Vídeo T4), ¿Mediante qué norma se crean, modifican y suprimen las Subsecretarías, Secretarías Generales, Secretarías Generales Técnicas, Direcciones Generales y Subdirecciones Generales; y quién nombra y separa a los SUBDIRECTORES GENERALES?",
    opciones: [
      "Se crean, modifican y suprimen por Real Decreto del Consejo de Ministros, a iniciativa del Ministro interesado y a propuesta del Ministro de Hacienda y Función Pública; y los Subdirectores Generales son nombrados y separados por el Ministro, Secretario de Estado o Subsecretario del que dependan (NO por Real Decreto).",
      "Se crean por Orden Ministerial y los Subdirectores Generales son nombrados por Real Decreto del Rey.",
      "Se crean por Ley Orgánica de las Cortes Generales.",
      "Los Subdirectores Generales no requieren ser funcionarios de carrera del Subgrupo A1."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Arts. 59.2 y 67.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Creación de Órganos y Nombramiento de Subdirectores Generales (Arts. 59 y 67)",
    consejoAcademia: "¡Doble trampa muy repetida en el Vídeo T4!: 1) **Creación/supresión**: Tanto Direcciones Generales como **Subdirecciones Generales** se crean por **Real Decreto del Consejo de Ministros** (Art. 59.2). 2) **Nombramiento**: Los Subsecretarios, Secretarios Generales, SGT y Directores Generales se nombran por **Real Decreto del Consejo de Ministros**, pero los **SUBDIRECTORES GENERALES (Art. 67.2)** los nombra y cesa por resolución el **Ministro, Secretario de Estado o Subsecretario** del que dependan (entre funcionarios de carrera **A1**).",
    justificacion: "El artículo 59.2 de la Ley 40/2015 exige Real Decreto del Consejo de Ministros para crear órganos hasta el nivel de Subdirección General, mientras que el artículo 67.2 atribuye el nombramiento de los Subdirectores Generales al Ministro, Secretario de Estado o Subsecretario del que dependan."
  },
  {
    id: "Q-W6-024",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según los artículos 72 y 74 de la Ley 40/2015 (Vídeo T4), en la Administración General del Estado en el territorio, ¿de quién dependen orgánicamente los DELEGADOS DEL GOBIERNO en las Comunidades Autónomas, qué rango tienen, y quién nombra a los SUBDELEGADOS DEL GOBIERNO en las provincias?",
    opciones: [
      "Los Delegados del Gobierno tienen rango de Subsecretario, dependen orgánicamente de la Presidencia del Gobierno (y funcionalmente del Ministerio competente por razón de la materia) y son nombrados por Real Decreto del Consejo de Ministros; los Subdelegados del Gobierno tienen nivel de Subdirector General y son nombrados por el Delegado del Gobierno mediante el procedimiento de libre designación entre funcionarios de carrera A1.",
      "Los Delegados del Gobierno tienen rango de Ministro y nombran por sorteo a los Alcaldes.",
      "Los Subdelegados del Gobierno tienen rango de Secretario de Estado y son nombrados por el Rey.",
      "Los Delegados del Gobierno dependen orgánicamente de los Presidentes de las Comunidades Autónomas."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Arts. 72 y 74",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Delegados del Gobierno (Subsecretario) vs Subdelegados (Subdirector General)",
    consejoAcademia: "Pareja de oro del Vídeo T4: **Delegado del Gobierno en CCAA** = rango de **Subsecretario**, depende orgánicamente de **Presidencia del Gobierno**, nombrado por **Real Decreto del Consejo de Ministros**. **Subdelegado del Gobierno en la provincia** (y Directores Insulares) = nivel de **Subdirector General**, nombrado por el **Delegado del Gobierno** por libre designación entre funcionarios **A1**.",
    justificacion: "Los artículos 72 y 74 de la Ley 40/2015 regulan el rango, dependencia y nombramiento de los Delegados y Subdelegados del Gobierno."
  },
  {
    id: "Q-W6-025",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 205/2024, por el que se desarrolla la estructura orgánica básica del Ministerio de Defensa (Vídeos T5 y T6), ¿cuál es el ÚNICO Órgano Superior del Departamento además de la persona titular del Ministerio, y qué tres Direcciones Generales dependen directamente de él?",
    opciones: [
      "La Secretaría de Estado de Defensa (SEDEF), de la que dependen la Dirección General de Armamento y Material (DGAM), la Dirección General de Asuntos Económicos (DIGENECO) y la Dirección General de Infraestructura (DIGENIN).",
      "La Subsecretaría de Defensa (SUBDEF), de la que dependen el EMAD y el CNI.",
      "La Secretaría General de Política de Defensa (SEGENPOL), que tiene rango de Ministerio.",
      "El Estado Mayor de la Defensa, del que dependen la DIGENPER y la DIGEREM."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 4 (Secretaría de Estado de Defensa - SEDEF)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5: RD 205/2024 MINISDEF I) > La SEDEF y sus 3 Direcciones Generales (DGAM, DIGENECO, DIGENIN)",
    consejoAcademia: "¡Esquema de los 4 pilares del MINISDEF (RD 205/2024, Vídeos T5 y T6)!: 1) **SEDEF** (Órgano Superior: recursos financieros, armamento e infraestructura) $\\rightarrow$ **DGAM + DIGENECO + DIGENIN** (el **CESTIC** salió de la SEDEF en 2024 para convertirse en la **DIGEID** directa del Ministro). 2) **SUBDEF** (personal, enseñanza y régimen interior) $\\rightarrow$ **SGT + DIGENPER + DIGEREM** (+ Asesoría Jurídica General, Intervención General e IGESAN). 3) **SEGENPOL** (rango de Subsecretaría) $\\rightarrow$ **DIGENPOL**. 4) Directos del Ministro: **DIGEID**, **CNI** y **DICOES**.",
    justificacion: "El artículo 4 del Real Decreto 205/2024 estructura la Secretaría de Estado de Defensa (SEDEF) con tres Direcciones Generales: DGAM, DIGENECO y DIGENIN."
  },
  {
    id: "Q-W6-026",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 11 del Real Decreto 205/2024 (Vídeo T6), la gran novedad orgánica de 2024 que sustituyó al antiguo CESTIC se denomina Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID). ¿De quién depende directamente la DIGEID y qué Subdirecciones Generales se integran en ella?",
    opciones: [
      "Depende directamente de la persona titular del Ministerio de Defensa, e integra la Subdirección General de Planificación, Tecnología e Innovación y la Subdirección General de Sistemas de Información y Comunicaciones para la Defensa (además del Centro de Sistemas y Tecnologías de la Información y las Comunicaciones - CESTIC con nivel de Subdirección General).",
      "Depende de la Subsecretaría de Defensa (SUBDEF) junto con la DIGEREM.",
      "Depende de la Secretaría General de Política de Defensa (SEGENPOL).",
      "Depende del Jefe de Estado Mayor del Ejército de Tierra (JEME)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 1.5 y Art. 11 (DIGEID)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > La Gran Novedad 2024: DIGEID Directa del Ministro",
    consejoAcademia: "¡PREGUNTA SEGURA DE CONVOCATORIA! El **RD 205/2024** creó la **DIGEID** (Dirección General de Estrategia e Innovación de la Industria de Defensa) dependiente **DIRECTAMENTE DEL MINISTRO DE DEFENSA** (ya NO depende de la SEDEF).",
    justificacion: "Los artículos 1.5 y 11 del Real Decreto 205/2024 adscriben la DIGEID directamente a la persona titular del Ministerio de Defensa."
  },
  {
    id: "Q-W6-027",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 7, 8, 9 y 10 del Real Decreto 205/2024 (Vídeo T6), ¿qué órganos directivos dependen de la SUBSECRETARÍA DE DEFENSA (SUBDEF) y qué tres órganos dependen funcional y orgánicamente de ella en el ámbito jurídico, económico-fiscal y sanitario?",
    opciones: [
      "De la SUBDEF dependen la Secretaría General Técnica (SGT), la Dirección General de Personal (DIGENPER) y la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM); y asimismo dependen de ella la Asesoría Jurídica General de la Defensa, la Intervención General de la Defensa y la Inspección General de Sanidad de la Defensa (IGESAN).",
      "De la SUBDEF dependen la DGAM, la DIGENECO y la DIGENIN.",
      "De la SUBDEF dependen el Mando de Operaciones (MOPS) y el MCCE.",
      "De la SUBDEF depende únicamente la Guardia Real."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 7 (Subsecretaría de Defensa)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > Subsecretaría de Defensa (SUBDEF): SGT, DIGENPER, DIGEREM y 3 Órganos Especiales",
    consejoAcademia: "Memoriza el bloque **SUBDEF (Vídeo T6)**: **3 órganos directivos** (**SGT + DIGENPER + DIGEREM**) + **3 órganos del Cuerpo Común** (**Asesoría Jurídica General + Intervención General de la Defensa + IGESAN**) + el **ISFAS** (organismo autónomo adscrito a la SUBDEF).",
    justificacion: "El artículo 7 del Real Decreto 205/2024 determina los órganos directivos y asesorías/inspecciones dependientes de la Subsecretaría de Defensa."
  },
  {
    id: "Q-W6-028",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al Real Decreto 205/2024 (Vídeos T5 y T6), existen tres grandes organismos autónomos/públicos adscritos al Ministerio de Defensa: el INTA, el INVIED O.A. y el ISFAS. ¿A qué órgano superior o directivo del Ministerio está adscrito cada uno de ellos?",
    opciones: [
      "El INTA (Instituto Nacional de Técnica Aeroespacial 'Esteban Terradas') y el INVIED O.A. (Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa) están adscritos a la Secretaría de Estado de Defensa (SEDEF), mientras que el ISFAS (Instituto Social de las Fuerzas Armadas) está adscrito a la Subsecretaría de Defensa (SUBDEF).",
      "Los tres (INTA, INVIED e ISFAS) están adscritos a la SEGENPOL.",
      "El ISFAS está adscrito a la SEDEF y el INTA a la SUBDEF.",
      "El INVIED está adscrito al Estado Mayor del Ejército de Tierra."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Arts. 4.8 y 7.12",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeos T5 y T6: RD 205/2024 MINISDEF) > Adscripción de INTA, INVIED (SEDEF) e ISFAS (SUBDEF)",
    consejoAcademia: "¡Asociación infalible para el test!: **SEDEF** (tecnología e infraestructura) $\\rightarrow$ **INTA + INVIED O.A.**; **SUBDEF** (personal y acción social) $\\rightarrow$ **ISFAS**.",
    justificacion: "El Real Decreto 205/2024 adscribe el INTA y el INVIED O.A. a la Secretaría de Estado de Defensa (Art. 4), y el ISFAS a la Subsecretaría de Defensa (Art. 7)."
  },
  {
    id: "Q-W6-029",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 15 del Real Decreto 205/2024 (Vídeo T6), ¿de qué órgano directivo dependen las Delegaciones de Defensa en las Comunidades Autónomas y las Subdelegaciones de Defensa en las provincias?",
    opciones: [
      "Dependen orgánicamente de la Subsecretaría de Defensa (SUBDEF), a través de la Secretaría General Técnica (SGT).",
      "Dependen orgánicamente de la Dirección General de Política de Defensa (DIGENPOL).",
      "Dependen de la Dirección General de Armamento y Material (DGAM).",
      "Dependen del Mando de Apoyo a la Maniobra (MAM)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 8 (Secretaría General Técnica - SGT)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > Delegaciones de Defensa: Dependencia de la SGT / SUBDEF",
    consejoAcademia: "¡Ojo con esta pregunta de corte del Vídeo T6! Las **Delegaciones de Defensa** (organización territorial del MINISDEF) dependen de la **Subsecretaría de Defensa (SUBDEF)** a través de la **Secretaría General Técnica (SGT)** (Subdirección General de Administración Periférica).",
    justificacion: "El artículo 8 del Real Decreto 205/2024 atribuye a la Secretaría General Técnica (dependiente de la Subsecretaría de Defensa) la dirección y coordinación de las Delegaciones de Defensa."
  },
  {
    id: "Q-W6-030",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeos T7, T8, T9 y T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020 y a la Instrucción 65/2025 del EMAD (Vídeo T7), ¿cuáles son los principales órganos que integran el ESTADO MAYOR DE LA DEFENSA (EMAD) bajo el mando del JEMAD?",
    opciones: [
      "El Cuartel General del EMAD (CGEMAD, donde se encuadra el Estado Mayor Conjunto de la Defensa - EMACON, mandado por el JEMACON), el Mando de Operaciones (MOPS), el Centro de Inteligencia de las Fuerzas Armadas (CIFAS), el Mando Conjunto del Ciberespacio (MCCE) y el Centro Superior de Estudios de la Defensa Nacional (CESEDEN).",
      "La Fuerza Terrestre (FUTER), la Flota y el Mando Aéreo de Combate (MACOM).",
      "La Dirección General de Personal (DIGENPER) y la Intervención General.",
      "El Mando de Canarias (MCANA) y la Fuerza Logística Operativa (FLO)."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 12 e Instrucción 65/2025 del JEMAD",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T7: Organización del EMAD) > Los 5 Grandes Órganos del EMAD (CGEMAD/EMACON, MOPS, CIFAS, MCCE y CESEDEN)",
    consejoAcademia: "¡Las 5 piezas del **EMAD** que debes cantar de memoria (Vídeo T7)!: 1) **CGEMAD** (con el **EMACON**); 2) **MOPS** (planeamiento operativo y conducción de operaciones); 3) **CIFAS** (inteligencia militar estratégica y operacional); 4) **MCCE** (operaciones en el ciberespacio); 5) **CESEDEN** (altos estudios de la defensa y doctrina conjunta a través del **CCDC**).",
    justificacion: "El artículo 12 del Real Decreto 521/2020 y la Instrucción 65/2025 estructuran el EMAD en el CGEMAD (con el EMACON), el MOPS, el CIFAS, el MCCE y el CESEDEN."
  },
  {
    id: "Q-W6-031",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización Básica de las FAS y EMAD (Vídeo T7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 521/2020 (Vídeo T7), ¿cuáles son los CUATRO MANDOS OPERATIVOS permanentes subordinados al JEMAD (a través del Comandante del Mando de Operaciones - CMOPS) para las operaciones permanentes de vigilancia y presencia?",
    opciones: [
      "El Mando Operativo Terrestre (MOT), el Mando Operativo Marítimo (MOM), el Mando Operativo Aéreo (MOA) y el Mando Operativo Ciberespacial (MOC), a los que se suma el Mando Operativo Espacial (MOESPA).",
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE) y la Inspección del Ejército (IGE).",
      "La División Castillejos, la División San Marcial y la Brigada Paracaidista.",
      "La Guardia Real y la Unidad Militar de Emergencias."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 14 e Instrucción 65/2025",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T7: Organización del EMAD) > Los Mandos Operativos Permanentes (MOT, MOM, MOA, MOC, MOESPA)",
    consejoAcademia: "¡Pregunta estrella del Vídeo T7! No confundas los Mandos de la Fuerza de los Ejércitos con los **Mandos Operativos Permanentes** de la estructura operativa del EMAD: **MOT** (Terrestre, cuyo comandante suele ser el GEJMCANA), **MOM** (Marítimo, ALMART), **MOA** (Aéreo, GJMACOM), **MOC** (Ciberespacial, CMCCE) y **MOESPA** (Espacial).",
    justificacion: "La estructura operativa cuenta con los Mandos Operativos permanentes Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Ciberespacial (MOC) y Espacial (MOESPA)."
  },
  {
    id: "Q-W6-032",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización de la Armada - Instrucción 15/2021 (Vídeo T9)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020 y a la Instrucción 15/2021 del AJEMA por la que se desarrolla la organización de la ARMADA (Vídeo T9), ¿cómo se articula la Armada bajo el mando del Almirante Jefe de Estado Mayor de la Armada (AJEMA)?",
    opciones: [
      "En el Cuartel General de la Armada (CGA), la Fuerza (integrada en una única organización denominada LA FLOTA, al mando del Almirante de la Flota - ALFLOT) y el Apoyo a la Fuerza (integrado por la Jefatura de Personal - JEPER, la Jefatura de Apoyo Logístico - JAL y la Dirección de Asuntos Económicos - DAE).",
      "En FUTER, MCANA y CGTAD.",
      "En MACOM, MAGEN y MASESP.",
      "En el Mando de Operaciones y el Centro de Inteligencia."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 22 e Instrucción 15/2021 del AJEMA",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T9: Organización de la Armada - Inst. 15/2021) > CGA, La Flota (ALFLOT) y Apoyo a la Fuerza (JEPER, JAL, DAE)",
    consejoAcademia: "¡Truco infalible para diferenciar los 3 Ejércitos en los Vídeos T8, T9 y T10!: En el **ET y EA** los órganos del Apoyo a la Fuerza se llaman **MANDOS o DIRECCIONES** (**MAPER, MADOC, MALE, DIAE** en el ET; **MAPER, MALOG, DAE** en el EA), pero en la **ARMADA (Vídeo T9, Inst. 15/2021)** se llaman **JEFATURAS**: **JEPER** (Jefatura de Personal) y **JAL** (Jefatura de Apoyo Logístico) + **DAE**. Y toda la Fuerza de la Armada se agrupa en **LA FLOTA (ALFLOT)**.",
    justificacion: "La Instrucción 15/2021 del AJEMA estructura la Armada en el Cuartel General de la Armada, la Flota (como único mando de primer nivel de la Fuerza) y el Apoyo a la Fuerza (JEPER, JAL y DAE)."
  },
  {
    id: "Q-W6-033",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización de la Armada - Instrucción 15/2021 (Vídeo T9)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la Instrucción 15/2021 del AJEMA sobre la organización de la Armada (Vídeo T9), ¿cuáles son los mandos principales que integran LA FLOTA bajo el mando del Almirante de la Flota (ALFLOT), y qué unidades componen la Fuerza de Infantería de Marina (FIM)?",
    opciones: [
      "La Flota se estructura en la Fuerza de Acción Naval (FAN, al mando del ALNAV), la Fuerza de Acción Marítima (FAM, al mando del ALMART), la Fuerza de Infantería de Marina (FIM, al mando del COMGEIM), la Flotilla de Aeronaves (FLOAN) y la Flotilla de Submarinos (FLOSUB). Y la Fuerza de Infantería de Marina (FIM) está integrada por la Brigada de Infantería de Marina 'Tercio de Armada' (TEAR), la Fuerza de Protección de la Armada (FUPRO) y la Fuerza de Guerra Naval Especial (FGne).",
      "La Flota se divide en División Castillejos y División San Marcial.",
      "La Infantería de Marina depende del Ejército de Tierra.",
      "La Fuerza de Acción Marítima depende del Ministerio de Transportes."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA, Organización de la Flota y de la FIM",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T9: Organización de la Armada - Inst. 15/2021) > Estructura de la Flota (FAN, FAM, FIM, FLOAN, FLOSUB) y de la FIM (TEAR, FUPRO, FGNE)",
    consejoAcademia: "¡Esquema de la **Flota (Vídeo T9)**!: **FAN** (Acción Naval - Rota) + **FAM** (Acción Marítima - Cartagena) + **FIM** (Infantería de Marina: **TEAR + FUPRO + FGNE**) + **FLOAN** (Aeronaves) + **FLOSUB** (Submarinos).",
    justificacion: "La Instrucción 15/2021 encuadra dentro de la Flota a la FAN, FAM, FIM (integrada por el TEAR, la FUPRO y la FGNE), FLOAN y FLOSUB."
  },
  {
    id: "Q-W6-034",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización del Ejército del Aire y del Espacio - Instrucción 6/2025 (Vídeo T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020 (tras el cambio de denominación a Ejército del Aire y del Espacio por RD 524/2022) y a la Instrucción 6/2025 del JEMA (Vídeo T10), ¿qué mandos integran LA FUERZA del Ejército del Aire y del Espacio?",
    opciones: [
      "El Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MASESP).",
      "La Fuerza Terrestre (FUTER), el Mando de Canarias (MCANA) y el CGTAD.",
      "La Fuerza de Acción Naval (FAN) y la Fuerza de Acción Marítima (FAM).",
      "La Jefatura de Personal (JEPER) y la Jefatura de Apoyo Logístico (JAL)."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 25 e Instrucción 6/2025 del JEMA",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T10: Ejército del Aire y del Espacio - Inst. 6/2025) > La Fuerza del EA: MACOM, MAGEN, MACAN y MASESP",
    consejoAcademia: "¡Las 4 patas de la Fuerza del **Ejército del Aire y del Espacio (Vídeo T10, Inst. 6/2025)**!: **MACOM** (Mando Aéreo de Combate) + **MAGEN** (Mando Aéreo General) + **MACAN** (Mando Aéreo de Canarias) + **MASESP** (Mando del Espacio, novedad clave creada tras pasar a llamarse Ejército del Aire y del Espacio). Y en su **Apoyo a la Fuerza**: **MAPER**, **MALOG** (Mando de Apoyo Logístico) y **DAE**.",
    justificacion: "La Fuerza del Ejército del Aire y del Espacio se estructura en el MACOM, el MAGEN, el MACAN y el Mando del Espacio (MASESP)."
  },
  {
    id: "Q-W6-035",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME, por la que se desarrolla la organización del Ejército de Tierra (Vídeo T8), ¿cuáles son los TRES Mandos de Primer Nivel que integran LA FUERZA del Ejército de Tierra y cuáles son los CUATRO órganos que integran el APOYO A LA FUERZA del Ejército de Tierra?",
    opciones: [
      "La Fuerza del ET está integrada por el Cuartel General Terrestre de Alta Disponibilidad (CGTAD), la Fuerza Terrestre (FUTER) y el Mando de Canarias del Ejército de Tierra (MCANA). El Apoyo a la Fuerza del ET está integrado por el Mando de Personal (MAPER), el Mando de Adiestramiento y Doctrina (MADOC), el Mando de Apoyo Logístico (MALE) y la Inspección General del Ejército (IGE), además de la Dirección de Asuntos Económicos (DIAE) en el ámbito del recurso financiero.",
      "La Fuerza del ET la forman la División Castillejos, la Brigada de la Legión y la Guardia Real.",
      "El Apoyo a la Fuerza del ET lo forman el MOPS, el CIFAS y el MCCE.",
      "La Fuerza del ET está formada por el MACOM, el MAGEN y el MACAN."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME (y RD 521/2020, Arts. 19-21)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Los 3 Mandos de la Fuerza (CGTAD, FUTER, MCANA) y el Apoyo a la Fuerza (MAPER, MADOC, MALE, IGE, DIAE)",
    consejoAcademia: "¡EL ESQUEMA MÁS PREGUNTADO EN EL EJÉRCITO DE TIERRA (Vídeo T8)!: **LA FUERZA DEL ET (3)** = **CGTAD** (Bétera, Valencia) + **FUTER** (Sevilla) + **MCANA** (Santa Cruz de Tenerife). **APOYO A LA FUERZA DEL ET** = **MAPER** (Madrid) + **MADOC** (Granada) + **MALE** (Madrid) + **IGE** (Barcelona) + **DIAE** (recurso económico).",
    justificacion: "La Instrucción 14/2021 estructura la Fuerza del Ejército de Tierra en CGTAD, FUTER y MCANA, y el Apoyo a la Fuerza en MAPER, MADOC, MALE, IGE y DIAE."
  },
  {
    id: "Q-W6-036",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), dentro de la FUERZA TERRESTRE (FUTER), ¿qué unidades se encuadran en la DIVISIÓN 'CASTILLEJOS', cuáles en la DIVISIÓN 'SAN MARCIAL' y cuáles en el MANDO DE APOYO A LA MANIOBRA (MAM)?",
    opciones: [
      "En la División 'Castillejos' se encuadran las 4 Brigadas polivalentes: Brigada 'Aragón' I, Brigada 'Rey Alfonso XIII' II de La Legión, Brigada 'Galicia' VII y Brigada 'Guzmán el Bueno' X (más la Brigada 'Guadarrama' XII). En la División 'San Marcial' se encuadran las fuerzas de respuesta inmediata y especializadas: Brigada 'Almogávares' VI de Paracaidistas (BRIPAC), Mando de Operaciones Especiales (MOE), Fuerzas Aeromóviles del ET (FAMET), Mando de Tropas de Montaña (MTM) y Regimiento de Operaciones de Información nº 1 (ROI 1). Y en el Mando de Apoyo a la Maniobra (MAM) se encuadran el Mando de Artillería de Campaña (MACA), Mando de Artillería Antiaérea (MAAA), Mando de Ingenieros (MING), Mando de Transmisiones (MATRANS), Brigada Logística (BRILOG), Regimiento de Defensa NBQ 'Valencia' nº 1 y Regimiento de Inteligencia nº 1.",
      "La BRIPAC, el MOE y las FAMET pertenecen al Mando de Canarias (MCANA).",
      "Las Comandancias Generales de Ceuta, Melilla y Baleares pertenecen a la División Castillejos.",
      "La Brigada 'Canarias' XVI pertenece a la División San Marcial."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Organización de FUTER y MCANA",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > FUTER (División Castillejos, División San Marcial y MAM) vs MCANA (Ceuta, Melilla, Baleares y BRI XVI)",
    consejoAcademia: "¡LA TRAMPA Nº 1 DEL TEMA 6 (Vídeo T8)!: 1) **FUTER** tiene **3 grandes pilares**: **División 'Castillejos'** (Brigadas I, II Legión, VII, X y XII), **División 'San Marcial'** (**BRIPAC VI + MOE + FAMET + Mando de Tropas de Montaña**) y **MAM (Mando de Apoyo a la Maniobra)** (**MACA, MAAA, MING, MATRANS, BRILOG, RNBQ 1, RINT 1**). 2) **MCANA (Mando de Canarias)** tiene **4 grandes subordinados** (que **NO** están en FUTER): **COMGECEU (Ceuta) + COMGEMEL (Melilla) + COMGEBAL (Baleares) + Brigada 'Canarias' XVI ( más el RAAA 94 y el RT 22)**.",
    justificacion: "La Instrucción 14/2021 articula la Fuerza Terrestre (FUTER) en la División 'Castillejos', la División 'San Marcial' y el Mando de Apoyo a la Maniobra (MAM), mientras que encuadra en el MCANA a las Comandancias Generales de Ceuta, Melilla y Baleares y a la Brigada 'Canarias' XVI."
  },
  {
    id: "Q-W6-037",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8), dentro del CUARTEL GENERAL DEL EJÉRCITO DE TIERRA (CGET), ¿qué órganos existen además del Estado Mayor del Ejército (EME) y el Gabinete del JEME?",
    opciones: [
      "El Instituto de Historia y Cultura Militar (IHCM), la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), la Asesoría Jurídica del Ejército de Tierra (ASEJUT), la Intervención Delegada Central y el Regimiento de Infantería 'Inmemorial del Rey' nº 1.",
      "La Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE).",
      "La Dirección de Acuartelamiento (DIACU) y la Dirección de Infraestructura (DINFE).",
      "La Dirección de Adquisiciones (DIAD) y la Dirección de Integración de Funciones Logísticas (DINFULOG)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Art. 6 (Cuartel General del Ejército de Tierra - CGET)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Órganos del Cuartel General del Ejército (CGET)",
    consejoAcademia: "¡No mezcles los órganos del **CGET** con las Direcciones de los Mandos de Apoyo a la Fuerza! En el **CGET** están: **EME + Gabinete JEME + JCISAT + IHCM (Historia y Cultura Militar) + Regimiento 'Inmemorial del Rey' nº 1 + ASEJUT + Intervención Delegada Central**.",
    justificacion: "La Instrucción 14/2021 encuadra en el Cuartel General del Ejército de Tierra (CGET) al EME, Gabinete del JEME, JCISAT, IHCM, Regimiento 'Inmemorial del Rey' nº 1, ASEJUT e Intervención Delegada Central."
  },
  {
    id: "Q-W6-038",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), relacione correctamente cada Mando del APOYO A LA FUERZA del Ejército de Tierra (MAPER, MADOC, MALE e IGE) con sus respectivas Direcciones subordinadas:",
    opciones: [
      "MAPER: Dirección de Personal (DIPER), Dirección de Asistencia al Personal (DIAPER) y Dirección de Sanidad (DISAN). MADOC: Dirección de Investigación, Doctrina, Orgánica y Materiales (DIDOM) y Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE). MALE: Dirección de Adquisiciones (DIAD) y Dirección de Integración de Funciones Logísticas (DINFULOG). IGE: Dirección de Acuartelamiento (DIACU) y Dirección de Infraestructura (DINFE).",
      "MAPER tiene la DIACU y la DINFE, y la IGE tiene la DIPER y la DIAPER.",
      "MADOC tiene la DIAD y la DINFULOG, y el MALE tiene la DIDOM y la DIENADE.",
      "Todas las Direcciones dependen directamente del CGTAD de Valencia."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Apoyo a la Fuerza del ET",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Las Direcciones del MAPER, MADOC, MALE e IGE",
    consejoAcademia: "¡Cuadro de Direcciones del Apoyo a la Fuerza del ET (Vídeo T8) que da puntos de oro!: **MAPER** = **DIPER + DIAPER + DISAN**; **MADOC** (Granada) = **DIDOM + DIENADE**; **MALE** = **DIAD + DINFULOG** (+ PCM, Parques y Centros de Mantenimiento); **IGE** (Barcelona) = **DIACU** (de la que dependen las **SUIGE** y las **USBA/USAC**) + **DINFE**.",
    justificacion: "La Instrucción 14/2021 distribuye las Direcciones del Apoyo a la Fuerza entre MAPER (DIPER, DIAPER, DISAN), MADOC (DIDOM, DIENADE), MALE (DIAD, DINFULOG) e IGE (DIACU, DINFE)."
  },
  {
    id: "Q-W6-039",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 167 y 168 de la Constitución Española (Vídeo T2), ¿cuándo debe seguirse obligatoriamente el procedimiento AGRAVADO del artículo 168 para reformar la Constitución y qué mayorías exige?",
    opciones: [
      "Cuando se proponga la revisión total de la Constitución o una parcial que afecte al Título Preliminar (arts. 1 a 9), al Capítulo Segundo, Sección 1ª del Título I (arts. 15 a 29) o al Título II (La Corona, arts. 56 a 65); exigiendo la aprobación del principio por mayoría de dos tercios (2/3) de cada Cámara, la disolución inmediata de las Cortes, la ratificación por las nuevas Cámaras elegidas, la aprobación del nuevo texto por mayoría de dos tercios (2/3) de ambas Cámaras y su sometimiento obligatorio a referéndum.",
      "Cuando se reforme cualquier artículo de la Constitución, exigiendo mayoría de tres quintos (3/5) sin disolución de las Cámaras.",
      "El artículo 14 (igualdad) y el artículo 30 (defensa de España) obligan a aplicar el artículo 168.",
      "En el procedimiento del artículo 168 el referéndum es facultativo sólo si lo pide una décima parte (1/10) de los Diputados o Senadores."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 167 y 168",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Reforma Constitucional: Ordinaria (Art. 167: 3/5) vs Agravada (Art. 168: 2/3 + Disolución + Referéndum)",
    consejoAcademia: "¡Ojo a la trampa del **Art. 14 CE** en la Reforma Constitucional!: Aunque el Art. 14 tiene recurso de amparo, está fuera de la Sección 1ª (arts. 15-29), por lo que **reformar el Art. 14 va por la vía ORDINARIA del Art. 167 (3/5)** y NO por la agravada del Art. 168. La vía agravada (**Art. 168 = 2/3 + Disolución + Nuevas Cámaras + 2/3 + Referéndum obligatorio**) solo aplica a: **Revisión total**, **Título Preliminar (1-9)**, **Sección 1ª Cap. II Tít. I (15-29)** o **Título II La Corona (56-65)**.",
    justificacion: "El artículo 168 de la Constitución reserva el procedimiento agravado de reforma (2/3, disolución de Cortes y referéndum obligatorio) a la revisión total o a la parcial que afecte al Título Preliminar, a la Sección 1ª del Capítulo II del Título I (arts. 15-29) o al Título II."
  },
  {
    id: "Q-W6-040",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 167 de la Constitución Española (Vídeo T2), en la reforma constitucional ORDINARIA (mayoría de 3/5 de cada Cámara), ¿cuándo se someterá la reforma aprobada por las Cortes Generales a REFERÉNDUM para su ratificación?",
    opciones: [
      "Cuando así lo soliciten, dentro de los quince (15) días siguientes a su aprobación, una décima parte (1/10) de los miembros de cualquiera de las Cámaras.",
      "Es obligatorio en todos los casos sin necesidad de que nadie lo solicite.",
      "Cuando lo solicite el Defensor del Pueblo en el plazo de treinta días.",
      "Nunca cabe referéndum en el procedimiento del artículo 167."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 167.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Referéndum Facultativo en la Reforma Ordinaria: 15 Días y 1/10 (Art. 167.3)",
    consejoAcademia: "En la reforma ordinaria (**Art. 167.3 CE**, como las tres reformas de 1992, 2011 y 2024), el referéndum es **FACULTATIVO**: solo se celebra si lo solicita **1/10 de los Diputados o 1/10 de los Senadores** dentro de los **15 DÍAS siguientes** a su aprobación.",
    justificacion: "El artículo 167.3 de la Constitución prevé el referéndum facultativo cuando lo soliciten, dentro de los quince días siguientes a su aprobación, una décima parte de los miembros de cualquiera de las Cámaras."
  },
  {
    id: "Q-W6-041",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según explica el profesor en el Vídeo T1, la Constitución Española de 1978 ha sido reformada en TRES ocasiones a lo largo de su historia, todas ellas por el procedimiento ordinario del artículo 167. ¿En qué años y qué artículos se modificaron?",
    opciones: [
      "En 1992 (artículo 13.2, añadiendo 'y pasivo' en las elecciones municipales para ciudadanos de la UE), en 2011 (artículo 135, principio de estabilidad presupuestaria) y en febrero de 2024 (artículo 49, sustituyendo el término 'disminuidos' por 'personas con discapacidad').",
      "En 1981 (artículo 8), en 2005 (artículo 57) y en 2020 (artículo 116).",
      "Sólo se ha reformado dos veces: en 1992 y en 2011.",
      "En 2024 se reformó el artículo 57 por la vía agravada del artículo 168."
    ],
    correcta: 0,
    referencia: "Reformas Constitucionales de 1992 (Art. 13.2), 2011 (Art. 135) y 2024 (Art. 49)",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > Las 3 Reformas de la Constitución Española (1992, 2011 y 2024)",
    consejoAcademia: "¡Actualización crítica de 2024! Ya no son dos reformas, sino **TRES REFORMAS CONSTITUCIONALES** (todas por el **Art. 167** y sin referéndum): **1992 (Art. 13.2)**, **2011 (Art. 135)** y **15 de febrero de 2024 (Art. 49, personas con discapacidad)**.",
    justificacion: "La Constitución Española ha experimentado tres reformas por la vía del artículo 167: el artículo 13.2 en 1992, el artículo 135 en 2011 y el artículo 49 en febrero de 2024."
  },
  {
    id: "Q-W6-042",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 86 de la Constitución Española (Vídeo T2), en caso de extraordinaria y urgente necesidad, el Gobierno podrá dictar disposiciones legislativas provisionales que tomarán la forma de DECRETOS-LEYES. ¿Qué materias NO pueden afectar y quién debe convalidarlos o derogarlos en el plazo de TREINTA DÍAS (30 días)?",
    opciones: [
      "No podrán afectar al ordenamiento de las instituciones básicas del Estado, a los derechos, deberes y libertades de los ciudadanos regulados en el Título I, al régimen de las Comunidades Autónomas ni al Derecho electoral general; y deberán ser inmediatamente sometidos a debate y votación de totalidad al CONGRESO DE LOS DIPUTADOS en el plazo de los treinta (30) días siguientes a su promulgación.",
      "Son convalidados conjuntamente por el Congreso y el Senado en el plazo de sesenta días.",
      "Pueden regular libremente el Derecho electoral general y los derechos fundamentales.",
      "Son dictados por el Rey sin intervención del Gobierno."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 86",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Decretos-Leyes (Art. 86) vs Decretos Legislativos (Arts. 82-85)",
    consejoAcademia: "¡En el **Decreto-Ley (Art. 86 CE)** el Senado NO interviene en su convalidación! Lo convalida o deroga **exclusivamente el CONGRESO DE LOS DIPUTADOS** en el plazo de **30 DÍAS** desde su promulgación.",
    justificacion: "El artículo 86 de la Constitución regula los límites materiales de los Decretos-leyes y su convalidación o derogación exclusiva por el Congreso de los Diputados en el plazo de 30 días."
  },
  {
    id: "Q-W6-043",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 82 de la Constitución Española (Vídeo T2), cuando las Cortes Generales delegan en el Gobierno la potestad de dictar normas con rango de ley (DECRETOS LEGISLATIVOS), ¿mediante qué tipo de ley deberá otorgarse la delegación cuando su objeto sea la formación de TEXTOS ARTICULADOS y mediante qué tipo de ley cuando sea para refundir varios textos legales en un TEXTO REFUNDIDO?",
    opciones: [
      "Deberá otorgarse mediante una LEY DE BASES cuando su objeto sea la formación de textos articulados, o por una LEY ORDINARIA cuando se trate de refundir varios textos legales en uno solo (texto refundido).",
      "Mediante Ley Orgánica en ambos casos.",
      "Mediante Ley Ordinaria para textos articulados y Ley de Bases para textos refundidos.",
      "Mediante Real Decreto-Ley."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 82.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Delegación Legislativa (Art. 82.2): Ley de Bases (Articulado) vs Ley Ordinaria (Refundido)",
    consejoAcademia: "Pareja inseparable del **Art. 82.2 CE**: **Ley de BASES $\\rightarrow$ Texto ARTICULADO** (crea regulación articulada ex novo sobre esas bases); **Ley ORDINARIA $\\rightarrow$ Texto REFUNDIDO** (unifica varios textos legales preexistentes).",
    justificacion: "El artículo 82.2 de la Constitución establece que la delegación legislativa deberá otorgarse mediante una ley de bases cuando su objeto sea la formación de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno solo."
  },
  {
    id: "Q-W6-044",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 90 de la Constitución Española (Vídeo T2), aprobado un proyecto de ley ordinaria u orgánica por el Congreso de los Diputados, el Senado dispone de un plazo de DOS MESES (que se reduce a VEINTE DÍAS NATURALES en los proyectos declarados urgentes) para oponer su veto o introducir enmiendas. Si el Senado opone su VETO (por mayoría absoluta), ¿cómo puede levantar dicho veto el Congreso de los Diputados?",
    opciones: [
      "Ratificando el texto inicial por mayoría ABSOLUTA o, una vez transcurridos DOS MESES desde la interposición del veto, por mayoría SIMPLE.",
      "Únicamente por unanimidad de los 350 Diputados.",
      "El veto del Senado es definitivo y el proyecto queda archivado para siempre.",
      "Sometiendo el proyecto a la decisión del Tribunal Supremo."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 90.2 y 90.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Plazos del Senado en Leyes (2 Meses / 20 Días Naturales) y Levantamiento del Veto (Art. 90)",
    consejoAcademia: "¡Números de oro del **Art. 90 CE**!: 1) Plazo del Senado para enmendar o vetar: **2 meses** (o **20 días naturales** si es urgente); 2) El Senado veta por **mayoría absoluta**; 3) El Congreso levanta el veto del Senado al instante por **mayoría absoluta**, o esperando **2 meses** por **mayoría simple**.",
    justificacion: "El artículo 90.2 de la Constitución permite al Congreso levantar el veto del Senado ratificando por mayoría absoluta el texto inicial, o por mayoría simple una vez transcurridos dos meses desde la interposición del mismo."
  },
  {
    id: "Q-W6-045",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 91 de la Constitución Española (Vídeo T2), ¿en qué plazo sancionará el Rey las leyes aprobadas por las Cortes Generales, y qué otros dos actos realiza simultáneamente?",
    opciones: [
      "El Rey sancionará en el plazo de quince (15) días las leyes aprobadas por las Cortes Generales, y las promulgará y ordenará su inmediata publicación.",
      "En el plazo de treinta (30) días hábiles.",
      "En el plazo de diez (10) días naturales.",
      "En el plazo de dos (2) meses."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 91",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Sanción Real de las Leyes en 15 Días (Art. 91)",
    consejoAcademia: "Art. 91 CE: El Rey **sanciona en 15 DÍAS** las leyes aprobadas por las Cortes Generales, las **promulga** y ordena su inmediata **publicación**.",
    justificacion: "El artículo 91 de la Constitución fija en quince días el plazo para que el Rey sancione las leyes aprobadas por las Cortes Generales."
  },
  {
    id: "Q-W6-046",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 19 de la Ley Orgánica 5/2005, de la Defensa Nacional (Vídeo T3), ¿cuáles son las condiciones básicas que deben cumplirse para las operaciones de las Fuerzas Armadas en el exterior?",
    opciones: [
      "Que se realicen por petición expresa del Gobierno del Estado en cuyo territorio se desarrollen o estén autorizadas en Resoluciones del Consejo de Seguridad de las Naciones Unidas o acordadas, en su caso, por organizaciones internacionales de las que España forme parte (como la UE o la OTAN), y que cumplan con los fines defensivos, humanitarios, de estabilización o de mantenimiento de la paz previstos en el Derecho Internacional.",
      "Que tengan carácter ofensivo de conquista territorial.",
      "Que no intervenga ninguna organización internacional.",
      "Que sean financiadas íntegramente por los ayuntamientos españoles."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 19",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Condiciones de las Misiones en el Exterior (Art. 19)",
    consejoAcademia: "El **Art. 19 de la LO 5/2005** exige tres requisitos acumulativos de legitimidad internacional para las misiones en el exterior: petición expresa del Estado anfitrión o mandato del **Consejo de Seguridad de la ONU** o acuerdo de la **UE/OTAN**, conformidad con la Carta de la ONU y fines defensivos, humanitarios o de paz.",
    justificacion: "El artículo 19 de la LO 5/2005 establece los requisitos y condiciones que deben reunir las operaciones de las Fuerzas Armadas en el exterior."
  },
  {
    id: "Q-W6-047",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 22 de la Ley Orgánica 5/2005 (Vídeo T3), la Guardia Civil es un Instituto armado de naturaleza militar. ¿De qué Ministerios depende la Guardia Civil en el cumplimiento de las misiones que la ley le encomienda, y de quién depende en tiempo de guerra y durante el estado de sitio?",
    opciones: [
      "Depende del Ministro del Interior en el desempeño de las funciones que la Ley Orgánica 2/1986 le atribuye para la seguridad ciudadana, y del Ministro de Defensa en el cumplimiento de las misiones de carácter militar que se le encomienden (así como en el régimen de ascensos y situaciones del personal); y en tiempo de guerra y durante el estado de sitio dependerá exclusivamente del Ministro de Defensa.",
      "Depende siempre y únicamente del Ministro de Justicia.",
      "En tiempo de paz depende exclusivamente del JEME.",
      "Durante el estado de sitio pasa a depender de los Alcaldes."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Arts. 22 y 23",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > La Guardia Civil y las Misiones Militares (Arts. 22 y 23)",
    consejoAcademia: "En los **Arts. 22 y 23 de la LO 5/2005**: La Guardia Civil tiene doble dependencia en paz (Interior para seguridad ciudadana / Defensa para misiones militares y ascensos), pero en **tiempo de guerra y durante el estado de sitio depende EXCLUSIVAMENTE del Ministro de Defensa**.",
    justificacion: "Los artículos 22 y 23 de la LO 5/2005 regulan la naturaleza militar y el régimen de dependencia de la Guardia Civil respecto a los Ministerios del Interior y de Defensa."
  },
  {
    id: "Q-W6-048",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 25 de la Ley Orgánica 5/2005 (Vídeo T3), el Cuerpo Nacional de Policía es un Instituto armado de naturaleza civil dependiente del Ministro del Interior. ¿En qué supuestos pasará a depender del Ministro de Defensa en los términos que determine el Presidente del Gobierno?",
    opciones: [
      "En caso de guerra y durante la vigencia del estado de sitio.",
      "Durante el estado de alarma por lluvias torrenciales.",
      "Todos los fines de semana del año.",
      "El Cuerpo Nacional de Policía nunca puede coordinarse ni depender del Ministro de Defensa ni siquiera en caso de guerra."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 25",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3: LO 5/2005 Defensa Nacional) > Coordinación del Cuerpo Nacional de Policía en Guerra o Sitio (Art. 25)",
    consejoAcademia: "¡Detalle muy preguntado del **Art. 25 LO 5/2005**! Incluso el **Cuerpo Nacional de Policía** (que es civil), en **caso de guerra y durante el estado de sitio**, será coordinado por el Consejo de Defensa Nacional y dependerá del **Ministro de Defensa** en el alcance y términos que determine el **Presidente del Gobierno**.",
    justificacion: "El artículo 25 de la LO 5/2005 prevé que en caso de guerra y durante el estado de sitio el Cuerpo Nacional de Policía dependerá del Ministro de Defensa en los términos que determine el Presidente del Gobierno."
  },
  {
    id: "Q-W6-049",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 de la Ley 40/2015, de Régimen Jurídico del Sector Público (Vídeo T4), para la válida constitución de un ÓRGANO COLEGIADO, a efectos de la celebración de sesiones, deliberaciones y toma de acuerdos, ¿qué quórum de asistencia se requerirá en primera convocatoria?",
    opciones: [
      "Se requerirá la asistencia, presencial o a distancia, del Presidente y Secretario (o en su caso, de quienes les suplan), y la de la mitad, al menos, de sus miembros.",
      "Basta con que asista únicamente el Secretario sin el Presidente.",
      "Se requiere siempre el cien por cien (100%) de los miembros titulares.",
      "No se exige ningún quórum para constituir un órgano colegiado."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Art. 17.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Régimen de los Órganos Colegiados: Quórum y Acuerdos (Art. 17)",
    consejoAcademia: "Fórmula del **Quórum de un Órgano Colegiado (Art. 17.2 Ley 40/2015)**: **Presidente + Secretario** (o suplentes) + **al menos la MITAD (1/2) de sus miembros**. ¿Y con qué mayoría se adoptan los acuerdos (Art. 17.5)? Por **MAYORÍA DE VOTOS**.",
    justificacion: "El artículo 17.2 de la Ley 40/2015 exige para la válida constitución del órgano colegiado la asistencia del Presidente y Secretario y de la mitad, al menos, de sus miembros."
  },
  {
    id: "Q-W6-050",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 19.3 de la Ley 40/2015 (Vídeo T4), salvo que las normas reguladoras del órgano colegiado fijen otro plazo por razones de urgencia justificada, ¿con qué antelación mínima deberán recibir los miembros del órgano colegiado la convocatoria con el orden del día de las reuniones?",
    opciones: [
      "Con una antelación mínima de dos (2) días (48 horas).",
      "Con una antelación mínima de treinta (30) días hábiles.",
      "Con una antelación mínima de quince (15) minutos.",
      "Con una antelación mínima de seis (6) meses."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Art. 19.3.a",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Convocatoria de Órganos Colegiados en la AGE: Mínimo 2 Días (Art. 19.3)",
    consejoAcademia: "¡Plazo numérico clave de la Ley 40/2015 (Art. 19.3.a)! En los órganos colegiados de la AGE, los vocales deben recibir la convocatoria con el orden del día con una antelación mínima de **2 DÍAS** (48 horas).",
    justificacion: "El artículo 19.3.a de la Ley 40/2015 fija en dos días la antelación mínima con que los miembros de los órganos colegiados de la AGE deben recibir la convocatoria."
  },
  {
    id: "Q-W6-051",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 23 y 24 de la Ley 40/2015 (Vídeo T4), cuando en una autoridad o personal al servicio de las Administraciones concurra interés personal en el asunto, parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo, amistad íntima o enemistad manifiesta, deberá ABSTENERSE de intervenir. Si no se abstuviera y el interesado promueve su RECUSACIÓN, ¿en qué plazo resolverá el superior jerárquico si el recusado niega la causa?",
    opciones: [
      "Al día siguiente el recusado manifestará a su inmediato superior si se da o no en él la causa alegada, y si el recusado niega la causa de recusación, el superior resolverá en el plazo de tres (3) días, previos los informes y comprobaciones que considere oportunos; y contra las resoluciones adoptadas en esta materia NO cabrá recurso.",
      "El superior resolverá en el plazo de seis meses y cabe recurso de alzada.",
      "Cualquier acto en el que haya intervenido una autoridad con causa de abstención es automáticamente nulo de pleno derecho en el 100% de los casos.",
      "El parentesco que obliga a abstenerse es hasta el décimo grado de consanguinidad."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Arts. 23 y 24",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Abstención (Art. 23: 4º Consanguinidad / 2º Afinidad) y Recusación (Art. 24: 1 Día y 3 Días)",
    consejoAcademia: "¡Tres datos letales de **Abstención y Recusación (Arts. 23 y 24 Ley 40/2015)**!: 1) Grados de parentesco: **4º de consanguinidad y 2º de afinidad**; 2) La actuación de autoridades en las que concurran motivos de abstención **NO implicará, necesariamente, y en todo caso, la invalidez de los actos** en que hayan intervenido (Art. 23.4); 3) En la **Recusación (Art. 24)**: se plantea en cualquier momento de la tramitación, al **día siguiente (1 día)** el recusado informa, si la niega el superior resuelve en **3 DÍAS**, y **NO cabe recurso** directo contra esa resolución.",
    justificacion: "Los artículos 23 y 24 de la Ley 40/2015 regulan las causas de abstención (4º grado consanguinidad / 2º afinidad) y el procedimiento y plazos de la recusación (1 día para manifestarse y 3 días para resolver el superior, sin recurso directo)."
  },
  {
    id: "Q-W6-052",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 1 del Real Decreto 205/2024 (Vídeo T5), ¿de quién dependen la Guardia Real y la Unidad Militar de Emergencias (UME)?",
    opciones: [
      "La Unidad Militar de Emergencias (UME) depende orgánicamente de la persona titular del Ministerio de Defensa y operativamente del Jefe de Estado Mayor de la Defensa (JEMAD); y la Guardia Real depende funcionalmente del Jefe del Cuarto Militar de la Casa de S.M. el Rey.",
      "Tanto la UME como la Guardia Real pertenecen a la División Castillejos de FUTER.",
      "La UME depende orgánicamente del Ministerio de Transición Ecológica.",
      "La Guardia Real depende de la Dirección General de la Policía."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 1 y RD 521/2020",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5: RD 205/2024 MINISDEF I) > Dependencia de la UME (Ministro / JEMAD) y de la Guardia Real",
    consejoAcademia: "La **UME** es una Fuerza Conjunta que depende **orgánicamente del Ministro de Defensa**, **operativamente del JEMAD** y, en el ámbito de los recursos humanos y materiales de uso común, de la **Subsecretaría de Defensa / SEDEF**.",
    justificacion: "El Real Decreto 205/2024 y el Real Decreto 521/2020 establecen la dependencia orgánica de la UME respecto a la persona titular del Ministerio de Defensa y operativa respecto al JEMAD."
  },
  {
    id: "Q-W6-053",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 10 del Real Decreto 205/2024 (Vídeo T6), ¿qué dos Subdirecciones Generales integran la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM), dependiente de la Subsecretaría de Defensa?",
    opciones: [
      "La Subdirección General de Enseñanza Militar y la Subdirección General de Reclutamiento y Desarrollo Profesional de Personal Militar y Reservistas de Especial Disponibilidad.",
      "La Subdirección General de Personal Militar y la Subdirección General de Personal Civil.",
      "La Subdirección General de Contabilidad y la Subdirección General de Contratación.",
      "La Subdirección General de Planes y Relaciones Internacionales."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 10 (DIGEREM)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > Subdirecciones Generales de DIGENPER vs DIGEREM",
    consejoAcademia: "No confundas las Subdirecciones de **DIGENPER (Art. 9)** (**Personal Militar**, **Personal Civil** y **Apoyo Social y Atención al Personal / División de Igualdad**) con las de **DIGEREM (Art. 10)** (**Enseñanza Militar** y **Reclutamiento y Desarrollo Profesional de Personal Militar y RED**).",
    justificacion: "El artículo 10 del Real Decreto 205/2024 estructura la DIGEREM en la Subdirección General de Enseñanza Militar y la Subdirección General de Reclutamiento y Desarrollo Profesional de Personal Militar y Reservistas de Especial Disponibilidad."
  },
  {
    id: "Q-W6-054",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 12 del Real Decreto 205/2024 (Vídeo T6), la Secretaría General de Política de Defensa (SEGENPOL) es el órgano directivo al que corresponde el desarrollo y ejecución de la política de defensa, las relaciones internacionales de defensa y la difusión de la cultura de defensa. ¿Qué rango tiene su titular y qué Dirección General depende de ella?",
    opciones: [
      "Su titular tiene rango de Subsecretario, y de la SEGENPOL depende la Dirección General de Política de Defensa (DIGENPOL), además de la División de Coordinación y Estudios de Seguridad y Defensa (DICOES).",
      "Su titular tiene rango de Secretario de Estado y de ella depende la DGAM.",
      "Su titular tiene rango de Subdirector General y depende de la SUBDEF.",
      "Su titular es siempre el Almirante de la Flota."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Arts. 12 y 13 (SEGENPOL y DIGENPOL)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > SEGENPOL (Rango de Subsecretario) y DIGENPOL",
    consejoAcademia: "Recuerda en la Ley 40/2015 (Art. 55) y en el RD 205/2024: Todos los **Secretarios Generales** (como el titular de la **SEGENPOL**) tienen categoría/rango de **SUBSECRETARIO** (Órgano Directivo). Y de la SEGENPOL depende la **DIGENPOL**.",
    justificacion: "El artículo 12 del Real Decreto 205/2024 regula la Secretaría General de Política de Defensa (con rango de Subsecretaría) y adscribe a ella la Dirección General de Política de Defensa (DIGENPOL)."
  },
  {
    id: "Q-W6-055",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeos T7 a T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 4 del Real Decreto 521/2020, por el que se establece la organización básica de las Fuerzas Armadas (Vídeo T7), ¿qué es una FUERZA CONJUNTA y cómo se denomina el acto formal por el que los Jefes de Estado Mayor de los Ejércitos transfieren el mando operativo de las unidades al JEMAD?",
    opciones: [
      "Una Fuerza Conjunta es la constituida por elementos de dos o más Ejércitos bajo un mando único para la ejecución de operaciones; y el acto formal por el que los JEME, AJEMA y JEMA ponen las unidades generadas a disposición del JEMAD se denomina Transferencia de Autoridad (TOA).",
      "Una Fuerza Conjunta es la integrada exclusivamente por unidades de Infantería Ligera de un solo Ejército.",
      "La Transferencia de Autoridad la realiza el Alcalde al Subdelegado del Gobierno.",
      "Las Fuerzas Conjuntas sólo pueden ser mandadas por Oficiales del Cuerpo Jurídico Militar."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Arts. 4 y 13",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T7: RD 521/2020 y EMAD) > Fuerza Conjunta, Generación de Fuerzas y Transferencia de Autoridad (TOA)",
    consejoAcademia: "En doctrina y organización básica (**RD 521/2020**): **Específica** = 1 solo Ejército; **Conjunta** = 2 o más Ejércitos nacionales; **Combinada (o Multinacional)** = fuerzas de 2 o más países aliados. Y el paso de la estructura orgánica (Ejércitos) a la operativa (JEMAD) se realiza mediante la **Transferencia de Autoridad (TOA)**.",
    justificacion: "El Real Decreto 521/2020 define la Fuerza Conjunta y regula el proceso de generación de fuerzas y la Transferencia de Autoridad (TOA) de la estructura orgánica a la estructura operativa."
  },
  {
    id: "Q-W6-056",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización del EMAD - Instrucción 65/2025 (Vídeo T7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al Real Decreto 521/2020 y a la Instrucción 65/2025 del EMAD (Vídeo T7), dentro del Centro Superior de Estudios de la Defensa Nacional (CESEDEN), ¿qué escuelas y centros se integran?",
    opciones: [
      "La Escuela Superior de las Fuerzas Armadas (ESFAS), el Instituto Español de Estudios Estratégicos (IEEE) y el Centro Conjunto de Desarrollo de Conceptos (CCDC), además de la Comisión Española de Historia Militar (CEHISMI).",
      "La Academia General Militar (AGM) de Zaragoza y la Academia General Básica de Suboficiales (AGBS) de Talarn.",
      "El Centro de Inteligencia de las Fuerzas Armadas (CIFAS) y el Mando de Operaciones (MOPS).",
      "La Escuela Naval Militar de Marín y la Academia General del Aire de San Javier."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 17 e Instrucción 65/2025 (CESEDEN)",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T7: Organización del EMAD) > Estructura Interna del CESEDEN (ESFAS, IEEE y CCDC)",
    consejoAcademia: "¡En el **CESEDEN (EMAD, Vídeo T7)** están tres siglas que caen muchísimo en examen!: **ESFAS** (Escuela Superior de las FAS, donde se imparte el Curso de Actualización para el Ascenso a General y el Curso de Estado Mayor), **IEEE** (Instituto Español de Estudios Estratégicos) y **CCDC** (Centro Conjunto de Desarrollo de Conceptos, responsable de la doctrina conjunta como la **PDC-01**).",
    justificacion: "El CESEDEN encuadra la Escuela Superior de las Fuerzas Armadas (ESFAS), el Instituto Español de Estudios Estratégicos (IEEE) y el Centro Conjunto de Desarrollo de Conceptos (CCDC)."
  },
  {
    id: "Q-W6-057",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización del Ejército del Aire y del Espacio - Instrucción 6/2025 (Vídeo T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la Instrucción 6/2025 del JEMA sobre la organización del Ejército del Aire y del Espacio (Vídeo T10), ¿qué centro operativo espacial se integra dentro del Mando del Espacio (MASESP) en la Base Aérea de Torrejón de Ardoz?",
    opciones: [
      "El Centro de Operaciones de Vigilancia Espacial (COVE).",
      "El Instituto Hidrográfico de la Marina (IHM).",
      "El Centro Geográfico del Ejército de Tierra (CEGET).",
      "El Cuartel General Terrestre de Alta Disponibilidad (CGTAD)."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2025 del JEMA, Mando del Espacio (MASESP) y COVE",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T10: Ejército del Aire y del Espacio - Inst. 6/2025) > El Mando del Espacio (MASESP) y el COVE",
    consejoAcademia: "En el **Ejército del Aire y del Espacio (Vídeo T10)**: El **MASESP (Mando del Espacio)** cuenta como órgano operativo principal con el **COVE (Centro de Operaciones de Vigilancia Espacial)**.",
    justificacion: "El Centro de Operaciones de Vigilancia Espacial (COVE) es el núcleo operativo del Mando del Espacio (MASESP) del Ejército del Aire y del Espacio."
  },
  {
    id: "Q-W6-058",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "Organización de la Armada - Instrucción 15/2021 (Vídeo T9)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con la Instrucción 15/2021 del AJEMA sobre la organización de la Armada (Vídeo T9), ¿dónde se encuadran el Instituto de Historia y Cultura Naval (IHCN), el Real Instituto y Observatorio de la Armada (ROA, en San Fernando) y el Instituto Hidrográfico de la Marina (IHM, en Cádiz)?",
    opciones: [
      "En el ámbito del Cuartel General de la Armada (CGA) / Fuerza de Acción Marítima (el IHM en la FAM y el IHCN y ROA en el CGA).",
      "En la Jefatura de Apoyo Logístico del Ejército de Tierra (MALE).",
      "En el Mando Aéreo de Canarias (MACAN).",
      "En la Subsecretaría de Defensa."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA (Organización de la Armada)",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T9: Organización de la Armada - Inst. 15/2021) > Órganos Históricos y Científicos de la Armada (IHCN, ROA e IHM)",
    consejoAcademia: "En la **Armada (Vídeo T9)** recuerda el **ROA** (Real Instituto y Observatorio de la Armada en San Fernando, responsable de la hora oficial de España), el **IHCN** (Instituto de Historia y Cultura Naval, en el CGA) y el **IHM** (Instituto Hidrográfico de la Marina, encargado de la cartografía náutica oficial).",
    justificacion: "La Instrucción 15/2021 regula el encuadramiento del IHCN, el ROA y el IHM dentro de la estructura de la Armada."
  },
  {
    id: "Q-W6-059",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8), el Cuartel General Terrestre de Alta Disponibilidad (CGTAD), con sede en Bétera (Valencia), es uno de los tres Mandos de Primer Nivel de la Fuerza del Ejército de Tierra. ¿Qué unidad depende orgánicamente del CGTAD?",
    opciones: [
      "El Regimiento de Apoyo e Inteligencia de la Fuerza Conjunta / Batallón de Policía Militar I (BPM I) y el Regimiento de Inteligencia nº 1 (en apoyo al CGTAD / HQ NRDC-ESP).",
      "La Comandancia General de Melilla (COMGEMEL) y la Comandancia General de Ceuta (COMGECEU).",
      "La Academia General Militar (AGM) de Zaragoza.",
      "La Dirección de Asistencia al Personal (DIAPER)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Art. 12 (CGTAD)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > El CGTAD (Bétera, Valencia) y el Batallón de Policía Militar I",
    consejoAcademia: "Del **CGTAD (Bétera, Valencia)** depende orgánicamente su Estado Mayor Internacional (**HQ NRDC-ESP** ofrecido a la OTAN) y el **Batallón de Policía Militar I (BPM I)**.",
    justificacion: "La Instrucción 14/2021 encuadra el Batallón de Policía Militar I bajo la dependencia orgánica del CGTAD en Bétera (Valencia)."
  },
  {
    id: "Q-W6-060",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), dentro de la Inspección General del Ejército (IGE), cuya sede está en el Palacio de Capitanía General de Barcelona, la Dirección de Acuartelamiento (DIACU) se articula territorialmente en cinco Subinspecciones Generales del Ejército (SUIGE). ¿Cuáles son esas cinco SUIGE?",
    opciones: [
      "SUIGE Primera (Centro - Madrid), SUIGE Segunda (Sur - Sevilla), SUIGE Tercera (Pirenaica - Barcelona), SUIGE Cuarta (Noroeste - Valladolid) y SUIGE Quinta (Canarias - Santa Cruz de Tenerife).",
      "SUIGE Norte, SUIGE Levante, SUIGE Baleares, SUIGE Ceuta y SUIGE Melilla.",
      "Sólo existen dos SUIGE: Península e Islas.",
      "Las SUIGE dependen de la Fuerza Terrestre (FUTER)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Inspección General del Ejército (IGE / DIACU / SUIGE)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > La IGE (Barcelona), la DIACU y las 5 SUIGE (y USBA/USAC)",
    consejoAcademia: "¡Las **5 SUIGE** de la **DIACU (IGE)** donde se encuadran todas las **USBA y USAC** de España!: **1ª Centro (Madrid)**, **2ª Sur (Sevilla)**, **3ª Pirenaica (Barcelona)**, **4ª Noroeste (Valladolid)** y **5ª Canarias (Santa Cruz de Tenerife)**.",
    justificacion: "La Dirección de Acuartelamiento (DIACU), dependiente de la IGE, se articula en cinco Subinspecciones Generales del Ejército (Centro, Sur, Pirenaica, Noroeste y Canarias), de las que dependen las USBA y USAC."
  },
  {
    id: "Q-W6-061",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8), ¿cuál es la diferencia organizativa entre un BATALLÓN y un GRUPO en el Ejército de Tierra?",
    opciones: [
      "Ambos constituyen la unidad táctica fundamental al mando de un Teniente Coronel, denominándose Batallón en las unidades de Infantería, Ingenieros, Transmisiones y Policía Militar (y Helicópteros BHELMA), y denominándose Grupo en las unidades de Caballería, Artillería (de Campaña y Antiaérea) y Logística.",
      "El Batallón está al mando de un General de Brigada y el Grupo al mando de un Sargento.",
      "El Grupo es superior al Regimiento y a la Brigada.",
      "En Infantería las unidades tácticas se denominan siempre Grupos y Escuadrones."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Unidades del Ejército de Tierra",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Escalones Tácticos: Compañía/Escuadrón/Batería y Batallón/Grupo",
    consejoAcademia: "Recuerda la equivalencia clásica de escalones en el **Ejército de Tierra (Vídeo T8)**: 1) Escalón Capitán: **Compañía** (Infantería, Ingenieros, Transmisiones, Logística) = **Escuadrón** (Caballería) = **Batería** (Artillería). 2) Escalón Teniente Coronel: **Batallón** (Infantería, Ingenieros, Transmisiones, FAMET) = **Grupo** (Caballería, Artillería, Logística).",
    justificacion: "En la organización del Ejército de Tierra, el Batallón y el Grupo son escalones equivalentes al mando de un Teniente Coronel, variando su denominación según el Arma o Especialidad."
  },
  {
    id: "Q-W6-062",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 87.3 de la Constitución Española (Vídeo T2), para el ejercicio de la INICIATIVA LEGISLATIVA POPULAR se exigirán no menos de 500.000 firmas acreditadas. ¿En qué materias NO procede la iniciativa legislativa popular?",
    opciones: [
      "No procederá dicha iniciativa en materias propias de ley orgánica, tributarias o de carácter internacional, ni en lo relativo a la prerrogativa de gracia.",
      "No procede en materia de medio ambiente ni de protección de los consumidores.",
      "Sí procede para reformar la Constitución y aprobar los Presupuestos Generales del Estado.",
      "Se exigen únicamente 50.000 firmas."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 87.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Iniciativa Legislativa Popular: 500.000 Firmas y Materias Excluidas (Art. 87.3)",
    consejoAcademia: "Memoriza el **Art. 87.3 CE (Iniciativa Legislativa Popular)**: Mínimo **500.000 firmas**, y **PROHIBIDA en 4 materias** (+ reforma constitucional Art. 166): **1) Ley Orgánica**, **2) Tributarias**, **3) Carácter internacional** y **4) Prerrogativa de gracia (indultos)**.",
    justificacion: "El artículo 87.3 de la Constitución exige no menos de 500.000 firmas acreditadas y excluye las materias propias de ley orgánica, tributarias, de carácter internacional y la prerrogativa de gracia."
  },
  {
    id: "Q-W6-063",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 54 de la Constitución Española (Vídeo T1) y su Ley Orgánica 3/1981, el DEFENSOR DEL PUEBLO es el alto comisionado de las Cortes Generales designado por éstas para la defensa de los derechos comprendidos en el Título I, a cuyo efecto podrá supervisar la actividad de la Administración. ¿Por qué mayoría de cada Cámara es elegido y cuál es la duración de su mandato?",
    opciones: [
      "Es elegido por las Cortes Generales por mayoría de tres quintos (3/5) de cada Cámara para un mandato de cinco (5) años, y cuenta con dos Adjuntos (Primero y Segundo).",
      "Es nombrado por el Consejo de Ministros para un mandato de cuatro (4) años.",
      "Es elegido únicamente por el Senado por mayoría simple para nueve (9) años.",
      "Depende jerárquicamente del Fiscal General del Estado."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 54 y Ley Orgánica 3/1981",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1: CE 1978 I) > El Defensor del Pueblo: Alto Comisionado de las Cortes Generales (Art. 54)",
    consejoAcademia: "Datos clave del **Defensor del Pueblo (Art. 54 CE y LO 3/1981)**: Alto comisionado de las **Cortes Generales**, defiende el **Título I CE**, supervisa la Administración (incluida la Administración Militar sin interferir en el mando de la Defensa Nacional), elegido por **3/5 del Congreso y 3/5 del Senado** por **5 AÑOS**, y está legitimado para interponer tanto el **recurso de inconstitucionalidad** como el **recurso de amparo** (Art. 162.1 CE).",
    justificacion: "El artículo 54 de la Constitución define al Defensor del Pueblo como alto comisionado de las Cortes Generales, regulando la LO 3/1981 su elección por mayoría de 3/5 de cada Cámara por un período de 5 años."
  },
  {
    id: "Q-W6-064",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 162.1 de la Constitución Española (Vídeo T2), ¿quiénes están legitimados para interponer el RECURSO DE INCONSTITUCIONALIDAD y quiénes para interponer el RECURSO DE AMPARO ante el Tribunal Constitucional?",
    opciones: [
      "Para el recurso de INCONSTITUCIONALIDAD: el Presidente del Gobierno, el Defensor del Pueblo, 50 Diputados, 50 Senadores, los órganos colegiados ejecutivos de las Comunidades Autónomas y, en su caso, las Asambleas de las mismas. Para el recurso de AMPARO: toda persona natural o jurídica que invoque un interés legítimo, así como el Defensor del Pueblo y el Ministerio Fiscal.",
      "El Ministerio Fiscal puede interponer el recurso de inconstitucionalidad y 50 Diputados pueden interponer el recurso de amparo.",
      "Cualquier ciudadano particular puede interponer directamente un recurso de inconstitucionalidad contra una Ley.",
      "El Rey y el JEMAD están legitimados para interponer ambos recursos."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 162.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2: CE 1978 II) > Legitimación en Inconstitucionalidad vs Amparo (Art. 162.1)",
    consejoAcademia: "¡LA TRAMPA DEL MINISTERIO FISCAL EN EL ART. 162.1 CE (Vídeo T2)!: El **Defensor del Pueblo** está en los **DOS** (Inconstitucionalidad y Amparo). En cambio, el **Ministerio Fiscal SOLO está legitimado en el Recurso de AMPARO** (NO puede interponer recurso de inconstitucionalidad). Y **50 Diputados / 50 Senadores / Presidente del Gobierno** solo están en **Inconstitucionalidad**.",
    justificacion: "El artículo 162.1 de la Constitución distingue con precisión los sujetos legitimados para el recurso de inconstitucionalidad (apartado a) y para el recurso de amparo (apartado b)."
  },
  {
    id: "Q-W6-065",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 61 de la Ley 40/2015 (Vídeo T4), ¿a quién corresponde ejercer la jefatura superior de todo el personal de un Departamento ministerial, y a quién corresponde desempeñar la jefatura directa del personal del Departamento?",
    opciones: [
      "A los Ministros les corresponde ejercer la jefatura superior de todo el personal del Departamento (Art. 61.f), mientras que a los Subsecretarios les corresponde desempeñar la jefatura superior de todo el personal del Departamento por delegación/atribución legal de gestión ordinaria (Art. 63.1.i: desempeñar la jefatura superior de todo el personal del Departamento).",
      "Al Secretario General Técnico le corresponde la jefatura superior de todo el personal.",
      "Al Director del Gabinete le corresponde la jefatura de personal.",
      "A los Subdirectores Generales."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Art. 63.1.i",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Competencias del Subsecretario: Jefatura Superior de Todo el Personal del Departamento (Art. 63)",
    consejoAcademia: "¡Literalidad exacta del **Art. 63.1.i de la Ley 40/2015** muy preguntada en test!: Corresponde a los **SUBSECRETARIOS** *'desempeñar la jefatura superior de todo el personal del Departamento'* y dirigir la inspección de los servicios.",
    justificacion: "El artículo 63.1.i de la Ley 40/2015 atribuye expresamente a los Subsecretarios desempeñar la jefatura superior de todo el personal del Departamento."
  },
  {
    id: "Q-W6-066",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 2 del Real Decreto 205/2024 (Vídeo T5), ¿cómo se articula la organización básica del Ministerio de Defensa?",
    opciones: [
      "En las Fuerzas Armadas (EMAD, ET, Armada y EA) y en el Órgano Central (integrado por la Secretaría de Estado de Defensa, la Subsecretaría de Defensa, la Secretaría General de Política de Defensa y los órganos dependientes directamente del Ministro).",
      "Únicamente en las Delegaciones de Defensa provinciales.",
      "En el Consejo de Estado y las Cortes Generales.",
      "En las diecisiete Consejerías Autonómicas."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 1",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5: RD 205/2024 MINISDEF I) > Estructura General del Ministerio de Defensa (Art. 1)",
    consejoAcademia: "El Ministerio de Defensa suma **Fuerzas Armadas** (EMAD + ET + Armada + EA) + **Órgano Central** (SEDEF + SUBDEF + SEGENPOL + DIGEID + CNI + órganos asesores).",
    justificacion: "El artículo 1 del Real Decreto 205/2024 establece la organización general del Ministerio de Defensa integrando las Fuerzas Armadas y los órganos superiores y directivos del Órgano Central."
  },
  {
    id: "Q-W6-067",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa (Vídeos T5 y T6)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 21 del Real Decreto 205/2024 (Vídeo T6), el Consejo Superior del Ejército de Tierra, el Consejo Superior de la Armada y el Consejo Superior del Ejército del Aire y del Espacio son órganos colegiados asesores y consultivos:",
    opciones: [
      "De la persona titular del Ministerio de Defensa y del Jefe de Estado Mayor del ejército respectivo.",
      "Del Presidente del Tribunal Constitucional.",
      "De las Asociaciones Profesionales inscritas en el RAPFAS.",
      "Del Observatorio de la Vida Militar."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 21",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > Los Consejos Superiores de los Ejércitos (Art. 21)",
    consejoAcademia: "Los **Consejos Superiores de los tres Ejércitos** (Art. 21 RD 205/2024) son órganos colegiados asesores y consultivos tanto del **Ministro de Defensa** como del respectivo **Jefe de Estado Mayor (JEME, AJEMA, JEMA)**.",
    justificacion: "El artículo 21 del Real Decreto 205/2024 define los Consejos Superiores del ET, de la Armada y del EA como órganos colegiados asesores y consultivos de la persona titular del Ministerio de Defensa y del Jefe de Estado Mayor del ejército respectivo."
  },
  {
    id: "Q-W6-068",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeos T7 a T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 15 del Real Decreto 521/2020 y la Instrucción 65/2025 (Vídeo T7), el Centro de Inteligencia de las Fuerzas Armadas (CIFAS) es el órgano del EMAD responsable de facilitar al Ministro de Defensa, a través del JEMAD, y a las autoridades militares la inteligencia militar necesaria para alertar sobre situaciones de interés militar. ¿Qué relación funcional mantiene con las organizaciones de inteligencia de los tres Ejércitos?",
    opciones: [
      "El CIFAS dirige funcionalmente el Sistema de Inteligencia de las Fuerzas Armadas (SIFAS), dando directrices técnicas a los órganos de inteligencia de los Ejércitos (ET, Armada y EA) sin perjuicio de la dependencia orgánica de éstos respecto a sus respectivos Jefes de Estado Mayor.",
      "El CIFAS sustituye y disuelve todas las secciones de inteligencia de los Ejércitos.",
      "El CIFAS depende orgánicamente del Ministerio del Interior.",
      "El CIFAS sólo actúa en asuntos tributarios civiles."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 15 (CIFAS y SIFAS)",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T7: Organización del EMAD) > El CIFAS y el Sistema de Inteligencia de las FAS (SIFAS)",
    consejoAcademia: "El **CIFAS** (encuadrado en el **EMAD**) es el órgano central del **SIFAS (Sistema de Inteligencia de las Fuerzas Armadas)** y proporciona inteligencia militar de nivel estratégico y operacional.",
    justificacion: "El artículo 15 del Real Decreto 521/2020 atribuye al CIFAS la dirección funcional del Sistema de Inteligencia de las Fuerzas Armadas (SIFAS)."
  },
  {
    id: "Q-W6-069",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), ¿dónde se ubica el Cuartel General de la Fuerza Terrestre (FUTER), dónde el de la División 'Castillejos', dónde el de la División 'San Marcial' y dónde el del Mando de Apoyo a la Maniobra (MAM)?",
    opciones: [
      "El CG de FUTER está en Sevilla; el CG de la División 'Castillejos' en Huesca; el CG de la División 'San Marcial' en Burgos; y el CG del Mando de Apoyo a la Maniobra (MAM) en A Coruña.",
      "Todos tienen su sede en el Paseo de la Castellana de Madrid.",
      "El CG de FUTER está en Santa Cruz de Tenerife y el de la División Castillejos en Valencia.",
      "El CG del MAM está en Palma de Mallorca y el de la División San Marcial en Cádiz."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Sedes de los Cuarteles Generales de FUTER",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Ubicación Geográfica de los Cuarteles Generales del ET",
    consejoAcademia: "¡Mapa geográfico del **Ejército de Tierra (Vídeo T8)** que encanta al tribunal!: **CGET / MAPER / MALE** = **Madrid** | **MADOC** = **Granada** | **IGE** = **Barcelona** | **CGTAD** = **Bétera (Valencia)** | **FUTER** = **Sevilla** | **División Castillejos** = **Huesca** | **División San Marcial** = **Burgos** | **MAM** = **A Coruña** | **MCANA** = **Santa Cruz de Tenerife**.",
    justificacion: "Los Cuarteles Generales de la Fuerza Terrestre se ubican en Sevilla (FUTER), Huesca (División Castillejos), Burgos (División San Marcial) y A Coruña (Mando de Apoyo a la Maniobra)."
  },
  {
    id: "Q-W6-070",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra (Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8), ¿qué es la 'Fuerza 35' (BRIEX 2035) que impulsa el Ejército de Tierra en su proceso de transformación tecnológica y organizativa?",
    opciones: [
      "El modelo de Fuerza futura del Ejército de Tierra en el horizonte 2035 (basado en la Brigada Experimental 2035), orientado a disponer de unidades tecnológicamente avanzadas, digitalizadas y multidominio.",
      "Una unidad compuesta exclusivamente por 35 soldados reservistas.",
      "El nombre del antiguo servicio militar obligatorio de 1935.",
      "Un órgano dependiente de la Subsecretaría de Hacienda."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME y Concepto Fuerza 2035 del ET",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Transformación y Concepto Fuerza 35",
    consejoAcademia: "En el Vídeo T8 el profesor destaca que la **Instrucción 14/2021** alinea la estructura de la Fuerza del ET (simplificando la cadena orgánica en **FUTER** y **MCANA**) con la implantación progresiva del proyecto **Fuerza 35 (Horizonte 2035)**.",
    justificacion: "La organización establecida por la Instrucción 14/2021 responde a la evolución hacia el modelo Fuerza 35 del Ejército de Tierra."
  }
];

const WAVE6_QUESTIONS_PART2 = [
  // ==========================================================================
  // BLOQUE 2: JURÍDICO-SOCIAL (Q-W6-071 a Q-W6-140) — Temas B2-T01 a B2-T08 (Vídeos T11 a T20)
  // ==========================================================================
  {
    id: "Q-W6-071",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería y Ley 39/2007 Carrera Militar (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 6, 8 y 9 de la Ley 8/2006, de Tropa y Marinería (Vídeo T11), ¿cuál es la duración del COMPROMISO INICIAL, hasta cuántos años como máximo puede prorrogarse mediante renovaciones de 2 o 3 años, y cuándo se suscribe el COMPROMISO DE LARGA DURACIÓN (CLD)?",
    opciones: [
      "El compromiso inicial tiene una duración de 2 o 3 años (según la convocatoria) y puede renovarse por períodos de 2 o 3 años hasta alcanzar un máximo de 6 años de servicios; cumplidos los 5 años de servicios (con los 3 últimos en el mismo Ejército), y previa evaluación de idoneidad antes de cumplir los 6 años, se puede suscribir el Compromiso de Larga Duración (CLD) hasta los 45 años de edad.",
      "El compromiso inicial dura 10 años y el de larga duración hasta los 65 años de edad.",
      "El compromiso de larga duración se firma el primer día de ingreso en el Centro de Formación.",
      "El compromiso inicial puede renovarse indefinidamente cada año hasta los 58 años."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Arts. 6, 8 y 9",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 8/2006 Tropa y Marinería) > Escalera de Compromisos: Inicial (2-3 años), Renovaciones (tope 6 años) y CLD (hasta los 45 años)",
    consejoAcademia: "¡La escalera de la Ley 8/2006 que explica el profesor en el Vídeo T11!: 1) **Compromiso Inicial**: **2 o 3 años**; 2) **Renovaciones**: de 2 o 3 años hasta un **tope máximo de 6 años**; 3) **Compromiso de Larga Duración (CLD)**: se solicita con **más de 5 años de servicios** (al menos los **3 últimos en el mismo Ejército**), se suscribe al cumplir los 6 años y dura **hasta los 45 años de edad**.",
    justificacion: "Los artículos 6, 8 y 9 de la Ley 8/2006 regulan el compromiso inicial (2 o 3 años), sus renovaciones (hasta 6 años) y el compromiso de larga duración hasta los 45 años de edad."
  },
  {
    id: "Q-W6-072",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería (Vídeo T11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 12 de la Ley 8/2006, de Tropa y Marinería, y al artículo 95 de la Ley 39/2007 (Vídeos T11 y T12), ¿qué requisitos debe reunir un Militar de Tropa y Marinería para participar en el proceso selectivo de acceso a una relación de servicios de carácter PERMANente (adquiriendo la condición de militar de carrera)?",
    opciones: [
      "Tener suscrito el Compromiso de Larga Duración (CLD), estar en posesión como mínimo del título de Técnico del Sistema Educativo General (FP Grado Medio) o equivalente (o Bachiller), tener un tiempo mínimo de servicios de catorce (14) años (o el que fije la convocatoria, habitualmente a partir de los 8-14 años según RD de reglamento de ingreso y promoción), informes personales de calificación favorables y superar las pruebas selectivas de concurso-oposición (con un máximo de 3 convocatorias ordinarias y 2 extraordinarias).",
      "Llevar únicamente seis meses de compromiso inicial y no tener estudios secundarios.",
      "Tener más de cincuenta años de edad.",
      "El acceso a la permanencia es automático por sorteo sin examen."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Art. 12 y Ley 39/2007, Art. 95",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeos T11 y T12: Tropa y Carrera Militar) > Acceso a la Condición de Permanente (Concurso-Oposición)",
    consejoAcademia: "Recuerda en el Vídeo T11: Al superar este proceso selectivo de acceso a la **Permanencia**, el Militar de Tropa y Marinería con CLD pasa a tener una relación de servicios de carácter **PERMANENTE** y adquiere la condición de **MILITAR DE CARRERA** (Art. 3.2 y 76 Ley 39/2007).",
    justificacion: "El artículo 12 de la Ley 8/2006 y la Ley 39/2007 regulan el acceso de los militares de tropa y marinería con compromiso de larga duración a una relación de servicios de carácter permanente, adquiriendo la condición de militar de carrera."
  },
  {
    id: "Q-W6-073",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería (Vídeo T11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 16, 17 y 19 de la Ley 8/2006, de Tropa y Marinería (Vídeo T11), ¿qué requisitos se exigen para adquirir la condición de RESERVISTA DE ESPECIAL DISPONIBILIDAD (RED) al finalizar el Compromiso de Larga Duración, hasta qué edad se mantiene dicha condición y qué asignación económica mensual conlleva?",
    opciones: [
      "Se adquiere al finalizar el Compromiso de Larga Duración al cumplir los 45 años de edad siempre que se acrediten al menos 18 años de servicios (y se solicite voluntariamente); se mantiene hasta cumplir los 65 años de edad; y da derecho a percibir una asignación mensual en 12 pagas, que es compatible con las retribuciones del sector privado (pero incompatible con las retribuciones como personal funcionario o laboral del sector público).",
      "Se adquiere a los 25 años de edad con 2 años de servicios y dura hasta los 90 años.",
      "Es totalmente incompatible con trabajar en una empresa privada civil.",
      "Consiste en una paga extraordinaria única de 500 euros."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Arts. 17, 18 y 19",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 8/2006 Tropa y Marinería) > Reservista de Especial Disponibilidad (RED): 45 a 65 años y 18 años de servicio",
    consejoAcademia: "¡Las 4 cifras de oro del **RED (Reservista de Especial Disponibilidad, Arts. 17-19 Ley 8/2006)**!: 1) Edad de inicio: **45 años**; 2) Tiempo mínimo de servicios exigido: **18 AÑOS**; 3) Edad de fin: **65 AÑOS**; 4) Asignación en **12 pagas mensuales**, **SÍ compatible con trabajo en el sector PRIVADO**, pero **INCOMPATIBLE con sueldos del sector PÚBLICO**.",
    justificacion: "Los artículos 17 a 19 de la Ley 8/2006 regulan la condición de Reservista de Especial Disponibilidad entre los 45 y los 65 años tras haber cumplido al menos 18 años de servicios."
  },
  {
    id: "Q-W6-074",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 de Tropa y Marinería (Vídeo T11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 20 y 21 de la Ley 8/2006 (Vídeo T11), para el ingreso en la Escala Básica de la Guardia Civil y en la Escala Básica del Cuerpo Nacional de Policía, ¿qué porcentajes mínimos de plazas se reservan para los Militares Profesionales de Tropa y Marinería que lleven al menos 5 años de servicios efectivos?",
    opciones: [
      "Un mínimo del 40% de las plazas en la Guardia Civil y un máximo del 20% de las plazas en el Cuerpo Nacional de Policía (además de una reserva de al menos el 50% para el acceso a la enseñanza militar de formación de Suboficiales será reservada al menos el 80% por promoción interna).",
      "El 100% en el Cuerpo Nacional de Policía y el 5% en la Guardia Civil.",
      "El 10% en ambos Cuerpos con sólo 1 año de servicio.",
      "No existe ninguna reserva legal de plazas en las Fuerzas y Cuerpos de Seguridad del Estado."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Arts. 15, 20 y 21",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 8/2006 Tropa y Marinería) > Reserva de Plazos con 5 Años de Servicio: 40% Guardia Civil y 20% Policía Nacional",
    consejoAcademia: "¡Cruza siempre los porcentajes de la Ley 8/2006 con **5 años de servicio**!: **Guardia Civil (Art. 20.4)** = mínimo **40%** (ampliable al 50%); **Policía Nacional (Art. 20.5)** = hasta el **20%**; **Personal laboral del MINISDEF (Art. 21)** = al menos el **50%** de las plazas libres; **Promoción a Suboficiales (Art. 15 / Ley 39/2007)** = al menos el **80%** de las plazas.",
    justificacion: "El artículo 20 de la Ley 8/2006 establece para los militares de tropa y marinería con al menos 5 años de servicios una reserva mínima del 40% de las plazas en la Guardia Civil y de hasta el 20% en la Policía Nacional."
  },
  {
    id: "Q-W6-075",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 26 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), ¿cuáles son los CUATRO CUERPOS COMUNES de las Fuerzas Armadas?",
    opciones: [
      "El Cuerpo Jurídico Militar, el Cuerpo Militar de Intervención, el Cuerpo Militar de Sanidad y el Cuerpo de Músicas Militares.",
      "El Cuerpo General, el Cuerpo de Intendencia, el Cuerpo de Ingenieros Politécnicos y el Cuerpo de Especialistas.",
      "La Guardia Real, la Unidad Militar de Emergencias, la Legión y la Brigada Paracaidista.",
      "El Cuerpo de Infantería de Marina y el Cuerpo de Ingenieros de la Armada."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 26",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Cuerpos Específicos de los Ejércitos vs Los 4 Cuerpos Comunes (Art. 26)",
    consejoAcademia: "¡Cuidado con la trampa entre Cuerpos Específicos y Cuerpos Comunes (Vídeo T12)!: Los **4 Cuerpos Comunes de las FAS** (dependientes de la SUBDEF) son: **1) Jurídico Militar**, **2) Militar de Intervención**, **3) Militar de Sanidad** y **4) Músicas Militares**. En cambio, **Intendencia** e **Ingenieros** (Politécnicos en el ET / de la Armada / del EA) e **Infantería de Marina** son **Cuerpos Específicos** de sus respectivos Ejércitos.",
    justificacion: "El artículo 26 de la Ley 39/2007 enumera como Cuerpos Comunes de las Fuerzas Armadas el Cuerpo Jurídico Militar, el Cuerpo Militar de Intervención, el Cuerpo Militar de Sanidad y el Cuerpo de Músicas Militares."
  },
  {
    id: "Q-W6-076",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 89 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), ¿cuáles son los CUATRO sistemas de ascenso en las Fuerzas Armadas, y qué sistema se aplica específicamente para el ascenso a CABO y a CABO PRIMERO en la Escala de Tropa y Marinería?",
    opciones: [
      "Los cuatro sistemas son: elección, clasificación, concurso o concurso-oposición, y antigüedad. En la Escala de Tropa y Marinería, los ascensos a Cabo y a Cabo Primero se producen por el sistema de CONCURSO o CONCURSO-OPOSICIÓN, mientras que el ascenso a Cabo Mayor se produce por el sistema de ELECCIÓN.",
      "El ascenso a Cabo y a Cabo Primero se produce por rigurosa antigüedad sin examen ni concurso.",
      "El ascenso a Cabo Mayor se produce por antigüedad automática a los 30 años.",
      "Sólo existe un sistema de ascenso en todas las Fuerzas Armadas: el sorteo."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Arts. 89 y 90",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Los 4 Sistemas de Ascenso (Art. 89) y Ascensos en Tropa (Art. 90)",
    consejoAcademia: "¡Tabla sagrada de **Sistemas de Ascenso del Art. 90 Ley 39/2007** (Vídeo T12)!: 1) **ELECCIÓN**: Todos los empleos de **Oficiales Generales**, **Coronel**, **Suboficial Mayor** y **CABO MAYOR**; 2) **CLASIFICACIÓN**: Teniente Coronel, Comandante, Subteniente y Brigada; 3) **CONCURSO o CONCURSO-OPOSICIÓN**: **CABO** y **CABO PRIMERO**; 4) **ANTIGÜEDAD**: Capitán y Sargento Primero.",
    justificacion: "Los artículos 89 y 90 de la Ley 39/2007 establecen que en la Escala de Tropa y Marinería se asciende a Cabo y a Cabo Primero por concurso o concurso-oposición, y a Cabo Mayor por elección."
  },
  {
    id: "Q-W6-077",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 101 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), ¿cuáles son las TRES clases de provisión de destinos en las Fuerzas Armadas?",
    opciones: [
      "Libre designación, concurso de méritos y provisión por antigüedad.",
      "Oposición libre, sorteo público y herencia.",
      "Elección, clasificación y evaluación.",
      "Comisión de servicio, adscripción temporal y permuta."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 101.1",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Las 3 Formas de Asignación de Destinos (Art. 101)",
    consejoAcademia: "¡No confundas los **4 sistemas de ASCENSO (Art. 89)**: Elección, Clasificación, Concurso/Concurso-Oposición y Antigüedad, con las **3 formas de provisión de DESTINOS (Art. 101)**: **Libre designación**, **Concurso de méritos** y **Antigüedad**!",
    justificacion: "El artículo 101.1 de la Ley 39/2007 clasifica los destinos, según su forma de asignación, en de libre designación, de concurso de méritos y de provisión por antigüedad."
  },
  {
    id: "Q-W6-078",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 107 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), ¿cuáles son todas las SITUACIONES ADMINISTRATIVAS en las que pueden hallarse los militares profesionales?",
    opciones: [
      "Servicio activo, servicios especiales, excedencia, suspensión de funciones, suspensión de empleo y, para los militares de carrera, reserva.",
      "Servicio activo, jubilación parcial, paro y retiro.",
      "Activo, disponible, arrestado y licenciado.",
      "Únicamente servicio activo y retiro."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 107",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Las 6 Situaciones Administrativas (Art. 107)",
    consejoAcademia: "¡Trampa mortal del **Art. 107 vs Art. 114 de la Ley 39/2007**!: El **RETIRO NO es una situación administrativa**, sino la extinción de la relación de servicios profesionales (Art. 114). Las **6 situaciones administrativas del Art. 107** son: **1) Servicio activo**, **2) Servicios especiales**, **3) Excedencia**, **4) Suspensión de funciones**, **5) Suspensión de empleo** y **6) Reserva** (esta última exclusiva de los militares de carrera).",
    justificacion: "El artículo 107 de la Ley 39/2007 enumera las seis situaciones administrativas de los militares profesionales: servicio activo, servicios especiales, excedencia, suspensión de funciones, suspensión de empleo y reserva."
  },
  {
    id: "Q-W6-079",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a los artículos 111 y 112 de la Ley 39/2007 (Vídeo T12), ¿qué diferencia fundamental existe entre la situación de SUSPENSIÓN DE FUNCIONES (Art. 111) y la situación de SUSPENSIÓN DE EMPLEO (Art. 112), y a partir de cuántos meses en dichas situaciones se produce el CESE EN EL DESTINO?",
    opciones: [
      "La suspensión de funciones es una medida cautelar/provisional acordada como consecuencia del procesamiento, inculpación o adopción de alguna medida cautelar contra el imputado en un procedimiento penal o por la incoación de un expediente disciplinario por falta muy grave; la suspensión de empleo se produce por condena en sentencia firme a pena de prisión o suspensión de empleo o por la imposición de sanción disciplinaria firme de suspensión de empleo por falta muy grave. En ambas situaciones, cuando superen los SEIS MESES (6 meses), supondrán el cese en el destino.",
      "Ambas suponen el cese en el destino desde el primer día en todos los casos.",
      "La suspensión de funciones sólo se aplica a los Oficiales Generales.",
      "El cese en el destino se produce a los cinco años."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Arts. 111 y 112",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Suspensión de Funciones vs Suspensión de Empleo: Cese en el Destino a los 6 Meses",
    consejoAcademia: "¡Regla de oro de los **Arts. 111 y 112 Ley 39/2007** (Vídeo T12)!: **Suspensión de FUNCIONES** = medida **provisional/cautelar** durante proceso penal o expediente muy grave (no puede exceder de **6 meses** en expediente disciplinario). **Suspensión de EMPLEO** = condena penal firme o sanción disciplinaria firme por falta muy grave. Y el número mágico común: **Si dura MÁS DE 6 MESES (o se impone por más de 6 meses) $\\rightarrow$ CESE EN EL DESTINO**.",
    justificacion: "Los artículos 111 y 112 de la Ley 39/2007 distinguen la suspensión de funciones y la suspensión de empleo y fijan en seis meses el umbral que determina el cese en el destino."
  },
  {
    id: "Q-W6-080",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 113 de la Ley 39/2007 (Vídeo T12), ¿a qué edad pasan a la situación de RESERVA por edad los Militares de Tropa y Marinería que tienen una relación de servicios de carácter PERMANENTE (militares de carrera)?",
    opciones: [
      "Al cumplir los cincuenta y ocho (58) años de edad.",
      "Al cumplir los cuarenta y cinco (45) años de edad.",
      "Al cumplir los sesenta y cinco (65) años de edad.",
      "Al cumplir los cincuenta (50) años de edad."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 113.4",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Pase a la Reserva por Edad de la Tropa Permanente: 58 Años (Art. 113.4)",
    consejoAcademia: "¡No confundas las 3 edades clave de la Tropa!: **45 años** = fin del Compromiso de Larga Duración (CLD temporal, pasa a RED si tiene 18 años de servicio). **58 AÑOS (Art. 113.4 Ley 39/2007)** = pase a la situación de **RESERVA** de los **Militares de Tropa y Marinería PERMANENTES**. **65 años** = pase a **RETIRO** (Art. 114).",
    justificacion: "El artículo 113.4 de la Ley 39/2007 dispone que los militares de carrera de la categoría de tropa y marinería pasarán a la situación de reserva al cumplir los cincuenta y ocho años de edad."
  },
  {
    id: "Q-W6-081",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 1 y 2 de las Reales Ordenanzas para las Fuerzas Armadas, aprobadas por Real Decreto 96/2009 (Vídeo T13), ¿qué constituyen las Reales Ordenanzas y a quiénes son de aplicación?",
    opciones: [
      "Constituyen el código de conducta de los militares, definen los principios éticos y las reglas de comportamiento de acuerdo con la Constitución y el resto del ordenamiento jurídico; y son de aplicación a todos los miembros de las Fuerzas Armadas, a los alumnos de la enseñanza militar de formación y a los aspirantes a reservistas voluntarios y a los reservistas cuando se encuentren incorporados a las Fuerzas Armadas (y a la Guardia Civil, salvo cuando contradigan su legislación específica).",
      "Son una Ley Orgánica penal aplicable exclusivamente a los Generales de Ejército.",
      "Sólo se aplican fuera de España en misiones de la ONU.",
      "Están derogadas desde el año 2014."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Arts. 1 y 2",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > Objeto y Ámbito de Aplicación de las RROO (Arts. 1 y 2)",
    consejoAcademia: "En el Vídeo T13 el profesor recalca que las **Reales Ordenanzas (RD 96/2009)** son el **Código de Conducta** de los militares y se aplican a: 1) Todos los **militares profesionales**; 2) Los **alumnos** de centros docentes militares de formación; 3) Los **reservistas incorporados**; y 4) Los miembros de la **Guardia Civil** (dada su naturaleza militar, excepto cuando contradigan su legislación específica).",
    justificacion: "Los artículos 1 y 2 del Real Decreto 96/2009 definen el objeto de las Reales Ordenanzas como código de conducta militar y determinan su ámbito subjetivo de aplicación."
  },
  {
    id: "Q-W6-082",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 44 y 48 de las Reales Ordenanzas para las Fuerzas Armadas (Vídeo T13), ¿cómo debe actuar el militar en relación con la OBEDIENCIA a las órdenes (Art. 44) y qué debe hacer si las órdenes entrañan la ejecución de actos constitutivos de DELITO (Art. 48)?",
    opciones: [
      "Deberá obedecer las órdenes que son los mandatos relativos al servicio que un militar da a un subordinado en forma adecuada y dentro de las atribuciones que le correspondan (Art. 44); pero si las órdenes entrañan la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar NO estará obligado a obedecerlas y, en todo caso, asumirá la grave responsabilidad de su acción u omisión (Art. 48).",
      "La obediencia ciega exime siempre de toda responsabilidad penal aunque la orden consista en cometer un delito de traición o genocidio.",
      "El subordinado puede desobedecer cualquier orden simplemente porque le parezca incómoda.",
      "Las órdenes sólo son obligatorias si se entregan ante notario."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Arts. 44 y 48",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > De la Disciplina: Obediencia (Art. 44) vs Límite ante el Delito (Art. 48)",
    consejoAcademia: "¡Cruza siempre los **Arts. 44, 47 y 48 de las Reales Ordenanzas (RD 96/2009)**!: **Art. 44**: Concepto de orden y deber de obedecer. **Art. 47 (Objeción sobre órdenes)**: Si tiene alguna queja u objeción sobre una orden (que no sea delito), la cumple y luego puede formular queja. **Art. 48 (Órdenes delictivas)**: Si la orden entraña **DELITO** (especialmente contra la CE o personas/bienes protegidos en conflicto armado), **NO está obligado a obedecerla** y asumirá la grave responsabilidad de su acción u omisión.",
    justificacion: "El artículo 48 de las Reales Ordenanzas establece el límite de la obediencia debida cuando las órdenes entrañen la ejecución de actos constitutivos de delito."
  },
  {
    id: "Q-W6-083",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 54, 55 y 61 de las Reales Ordenanzas para las Fuerzas Armadas (Vídeo T13), ¿puede el comandante o militar que ejerce el mando DELEGAR la responsabilidad de su ejercicio?",
    opciones: [
      "La responsabilidad en el ejercicio del mando militar NO es renunciable ni puede ser compartida (Art. 55); los que ejerzan mando tratarán de inculcar una disciplina basada en el convencimiento y todo mando tiene el deber de exigir obediencia a sus subordinados y el derecho a que se respete su autoridad, pero NO podrá delegar su responsabilidad.",
      "La responsabilidad del mando se delega íntegramente en el subordinado más moderno.",
      "La responsabilidad del mando es renunciable mediante instancia simple.",
      "El mando militar se ejerce por votación asamblearia de la unidad."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Arts. 54 y 55",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > De la Acción del Mando: Responsabilidad Irrenunciable (Art. 55)",
    consejoAcademia: "¡Frase literal de examen (**Art. 55 RROO**)!: *'La **responsabilidad** en el ejercicio del mando militar **no es renunciable ni puede ser compartida**.'* Se puede delegar el ejercicio de cometidos o funciones concretas, pero **NUNCA se delega la responsabilidad del mando**.",
    justificacion: "El artículo 55 de las Reales Ordenanzas proclama que la responsabilidad en el ejercicio del mando militar no es renunciable ni puede ser compartida."
  },
  {
    id: "Q-W6-084",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS (Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "De acuerdo con los artículos 83 a 95 del Capítulo VI ('De las operaciones de paz y humanitarias') y del Capítulo VII ('De las operaciones de combate') de las Reales Ordenanzas (Vídeo T13), en el empleo legítimo de la fuerza el militar hará un uso gradual y proporcionado de la misma, de acuerdo con:",
    opciones: [
      "Las reglas de enfrentamiento (ROE) establecidas para las operaciones en las que participe, respetando el Derecho Internacional Humanitario y protegiendo especialmente a la población civil, heridos, enfermos, náufragos y prisioneros.",
      "Su criterio particular sin sujeción a ninguna regla de enfrentamiento.",
      "Las ordenanzas fiscales municipales.",
      "El uso ilimitado de cualquier medio bélico sin distinción entre combatientes y civiles."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Art. 91 y Capítulos VI y VII",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > Uso Gradual y Proporcionado de la Fuerza y Reglas de Enfrentamiento (Art. 91)",
    consejoAcademia: "El **Art. 91 de las Reales Ordenanzas** exige siempre un **uso gradual y proporcionado de la fuerza**, ajustado a las **Reglas de Enfrentamiento (ROE)** y al Derecho Internacional Humanitario.",
    justificacion: "El artículo 91 de las Reales Ordenanzas establece que el militar hará un uso gradual y proporcionado de la fuerza, de acuerdo con las reglas de enfrentamiento establecidas para las operaciones en las que participe."
  },
  {
    id: "Q-W6-085",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 7, 13 y 14 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas (Vídeo T14), ¿qué deber de neutralidad tienen los militares y cómo pueden ejercer el derecho de REUNIÓN y MANIFESTACIÓN?",
    opciones: [
      "El militar está sujeto al deber de neutralidad política y sindical (no puede fundar ni afiliarse a partidos políticos ni sindicatos ni realizar actividades sindicales o huelgas). Podrá ejercer el derecho de reunión, pero NO podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical; y asistiendo a reuniones o manifestaciones en lugares de tránsito público NO podrá vestir el uniforme ni hacer uso de su condición militar.",
      "El militar puede acudir de uniforme reglamentario a manifestaciones políticas y sindicales.",
      "El militar puede afiliarse a sindicatos de clase y convocar paros en los cuarteles.",
      "Las asociaciones profesionales de las FAS pueden convocar manifestaciones políticas y huelgas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 7, 13 y 14",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Neutralidad Política y Sindical y Límites en Reunión/Manifestación (Arts. 7, 13 y 14)",
    consejoAcademia: "¡Las 3 reglas de oro del **Art. 13 LO 9/2011 (Reunión y Manifestación)** en el Vídeo T14!: 1) Prohibido organizar o participar activamente en reuniones/manifestaciones **políticas o sindicales**; 2) Prohibido ir **vistiendo el uniforme** o haciendo uso de su condición militar a manifestaciones en lugares de tránsito público; 3) Las reuniones de las asociaciones profesionales en las unidades deben celebrarse **fuera del horario de trabajo** y con **autorización previa del Jefe de la Unidad**.",
    justificacion: "Los artículos 7, 13 y 14 de la LO 9/2011 regulan la neutralidad política y sindical y las limitaciones en el ejercicio del derecho de reunión y manifestación de los militares."
  },
  {
    id: "Q-W6-086",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 33 y 34 de la Ley Orgánica 9/2011 (Vídeo T14), las Asociaciones Profesionales de miembros de las Fuerzas Armadas tienen como finalidad la promoción y defensa de los intereses profesionales, económicos y sociales de sus afiliados. ¿Quiénes pueden afiliarse a ellas, a cuántas asociaciones profesionales puede estar afiliado un militar simultáneamente, y dónde deben inscribirse?",
    opciones: [
      "Pueden afiliarse los militares en servicio activo y en reserva, así como los retirados (aunque los retirados no se contabilizan para los porcentajes del COPERFAS); sólo podrán estar afiliados a UNA (1) asociación profesional de las reguladas en esta ley; y deberán inscribirse en el Registro de Asociaciones Profesionales de miembros de las Fuerzas Armadas (RAPFAS), habilitado en el Ministerio de Defensa.",
      "Un militar puede estar afiliado simultáneamente a cinco asociaciones profesionales del RAPFAS y a dos sindicatos.",
      "Los alumnos de la enseñanza de formación de acceso directo pueden fundar asociaciones profesionales en la Academia.",
      "Las asociaciones profesionales se inscriben en el Registro Mercantil."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 33, 34 y 36 (RAPFAS)",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Asociaciones Profesionales y el RAPFAS: Afiliación Única (Arts. 33-36)",
    consejoAcademia: "¡Tres trampas de examen sobre las **Asociaciones Profesionales (LO 9/2011)**!: 1) Solo se puede estar afiliado a **UNA (1) asociación profesional** a la vez; 2) Los **alumnos de acceso directo** (sin condición previa de militar profesional) **NO pueden afiliarse** hasta adquirir la condición de militar profesional; 3) Se inscriben en el **RAPFAS** (Ministerio de Defensa) y tienen prohibido financiarse con donaciones privadas o de partidos/sindicatos.",
    justificacion: "Los artículos 34 y 36 de la LO 9/2011 establecen la afiliación única a una sola asociación profesional y la inscripción obligatoria en el RAPFAS del Ministerio de Defensa."
  },
  {
    id: "Q-W6-087",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 47 y 49 de la Ley Orgánica 9/2011 (Vídeo T14), ¿quién preside el Consejo de Personal de las Fuerzas Armadas (COPERFAS), y qué materias quedan expresamente EXCLUIDAS de su ámbito de actuación?",
    opciones: [
      "El COPERFAS está presidido por el Ministro de Defensa (y cuando no asista lo preside el Subsecretario de Defensa); y quedan expresamente excluidas de su ámbito de conocimiento las materias relacionadas con las decisiones de política de seguridad y defensa, con el planeamiento y desarrollo de los ejercicios u operaciones militares y con el empleo de la fuerza.",
      "El COPERFAS lo preside el Presidente del Tribunal Supremo y decide sobre el planeamiento de las operaciones militares.",
      "El COPERFAS es un tribunal penal que juzga delitos militares.",
      "El COPERFAS está adscrito al Senado y tiene 9 miembros."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 47 y 49",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > El COPERFAS: Presidencia (Ministro / SUBDEF) y Materias Excluidas (Arts. 47-49)",
    consejoAcademia: "En el **COPERFAS (Arts. 47-49 LO 9/2011)**: Lo preside el **Ministro de Defensa** (suplido por el **Subsecretario de Defensa**), participan las asociaciones que superan los umbrales del **1% (general), 3% (oficiales o suboficiales) o 1,5% (tropa y marinería)**, y tiene **PROHIBIDO tratar operaciones militares, ejercicios, empleo de la fuerza o política de seguridad y defensa**.",
    justificacion: "Los artículos 47 y 49 de la LO 9/2011 atribuyen la presidencia del COPERFAS al Ministro de Defensa (o al Subsecretario en su ausencia) y excluyen de su ámbito las operaciones militares y el empleo de la fuerza."
  },
  {
    id: "Q-W6-088",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 7 y 8 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15), en relación con la acumulación de faltas y la reiteración de conductas sancionadas en los dos años anteriores, ¿cómo clasifica la ley la inexactitud o desatención en el cumplimiento de las órdenes o de los deberes militares?",
    opciones: [
      "Depende de la gravedad: por ejemplo, la falta de puntualidad o abandonar temporalmente el servicio o puesto (sin ser delito) o las ausencias injustificadas varían entre falta leve, grave o muy grave según el número de días o las circunstancias; y además, cometer una falta leve teniendo anotadas y no canceladas DOS faltas leves sancionadas en los dos años anteriores constituye FALTA GRAVE (Art. 7.36), y cometer una falta grave teniendo anotadas DOS faltas graves en los dos años anteriores constituye FALTA MUY GRAVE (Art. 8.15).",
      "Cualquier falta leve cometida por segunda vez conlleva automáticamente la separación del servicio.",
      "La acumulación de faltas nunca agrava la calificación disciplinaria.",
      "Para pasar de leve a grave hacen falta diez faltas leves en un mismo mes."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 7.36 y 8.15",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Acumulación de Faltas (La Tercera Falta en 2 Años sube de Escalón)",
    consejoAcademia: "¡LA REGLA DE LA TERCERA FALTA EN 2 AÑOS (Arts. 7.36 y 8.15 LO 8/2014, Vídeo T15)!: 1) Si tienes **2 faltas LEVES** firmes anotadas (y sin cancelar) en los últimos **2 años** y cometes una **3ª falta leve** $\\rightarrow$ pasa a ser **FALTA GRAVE**. 2) Si tienes **2 faltas GRAVES** firmes anotadas en los últimos **2 años** y cometes una **3ª falta grave** $\\rightarrow$ pasa a ser **FALTA MUY GRAVE**.",
    justificacion: "Los artículos 7.36 y 8.15 de la LO 8/2014 tipifican como falta grave y muy grave, respectivamente, la comisión de una tercera falta leve o grave teniendo anotadas y no canceladas otras dos de la misma naturaleza en los dos años anteriores."
  },
  {
    id: "Q-W6-089",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 6, 7 y 8 de la Ley Orgánica 8/2014 (Vídeo T15), ¿cómo se gradúa la falta disciplinaria de NO INCORPORARSE o AUSENTARSE injustificadamente del destino o unidad (cuando no constituya delito de abandono de destino o deserción del Código Penal Militar)?",
    opciones: [
      "La ausencia injustificada por un plazo superior a 24 horas (1 día) e inferior o igual a 3 días (si no es delito) o la falta de puntualidad / ausencia hasta 24 horas se encuadra entre falta leve (hasta 24 horas) y falta grave (más de 24 horas, computadas de momento a momento, siempre que no constituya delito militar de abandono de destino o residencia, que en tiempo de paz se consuma a los más de 3 días).",
      "Un retraso de cinco minutos al entrar al cuartel es siempre delito militar de deserción.",
      "La ausencia injustificada de diez días es una falta leve sancionada con reprensión.",
      "No existe infracción por ausentarse de la unidad en tiempo de paz."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 6.2 y 7.12 (en relación con el Código Penal Militar)",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Tramos de Ausencia Injustificada: Hasta 24h (Leve) vs Más de 24h hasta 3 Días (Grave) vs Más de 3 Días (Delito CPM)",
    consejoAcademia: "¡La escala temporal de las **Ausencias Injustificadas** del Vídeo T15!: **Hasta 24 horas** = **Falta LEVE** (Art. 6.2 LO 8/2014); **Más de 24 horas (hasta 3 días)** = **Falta GRAVE** (Art. 7.12 LO 8/2014, computadas de momento a momento); **Más de 3 días** en tiempo de paz = **DELITO militar de abandono de destino/residencia** (Art. 56 Código Penal Militar).",
    justificacion: "El artículo 6.2 de la LO 8/2014 tipifica como falta leve la ausencia injustificada hasta 24 horas, y el artículo 7.12 como falta grave la superior a 24 horas siempre que no constituya delito (más de 3 días según el CPM)."
  },
  {
    id: "Q-W6-090",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 13 y 14 de la Ley Orgánica 8/2014 (Vídeo T15), ¿en qué consiste exactamente la sanción de PRIVACIÓN DE SALIDA (Art. 13) y la de SANCIÓN ECONÓMICA (Art. 14)?",
    opciones: [
      "La privación de salida (de 1 a 8 días, exclusiva de faltas leves y aplicable a los alumnos de centros docentes militares de formación y, en su caso, según régimen interior) supone la permanencia del sancionado en su unidad o centro fuera de las horas de actividad sin perjuicio del cumplimiento de sus obligaciones; y la sanción económica (de 1 a 7 días en leves y de 8 a 15 días en graves) consiste en la pérdida de las retribuciones diarias correspondientes a los días sancionados.",
      "La sanción económica puede ser de hasta noventa días de sueldo.",
      "La privación de salida se cumple en un establecimiento disciplinario militar durante treinta días.",
      "La sanción económica exime de acudir a trabajar durante los días descontados."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 13 y 14",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Privación de Salida (1-8 días) y Sanción Económica (1-7 días Leve / 8-15 días Grave)",
    consejoAcademia: "En la **Sanción Económica (Art. 14 LO 8/2014)** el sancionado pierde la retribución de **1 a 7 días (Falta Leve)** o de **8 a 15 días (Falta Grave)**, pero **SIGUE OBLIGADO A REALIZAR EL SERVICIO NORMALMENTE**.",
    justificacion: "Los artículos 13 y 14 de la LO 8/2014 regulan el contenido y duración de las sanciones de privación de salida (1 a 8 días) y sanción económica (1 a 7 días en faltas leves y 8 a 15 días en faltas graves)."
  },
  {
    id: "Q-W6-091",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 15 y 16 de la Ley Orgánica 8/2014 (Vídeo T15), ¿dónde se cumple el ARRESTO POR FALTA LEVE (de 1 a 14 días) y dónde se cumple el ARRESTO POR FALTA GRAVE (de 15 a 30 días) o por FALTA MUY GRAVE (de 31 a 60 días)?",
    opciones: [
      "El arresto por falta leve (1 a 14 días) se cumple en la unidad del sancionado o en el lugar que se designe (o en su domicilio si así se acuerda justificadamente), PARTICIPANDO en las actividades de la unidad; en cambio, el arresto por falta grave (15 a 30 días) y por falta muy grave (31 a 60 días) se cumple en un Establecimiento Disciplinario Militar (EDM), SIN participar en las actividades de su unidad durante el tiempo de internamiento.",
      "El arresto por falta leve se cumple siempre en una prisión civil y sin trabajar.",
      "El arresto por falta muy grave se cumple en el domicilio particular yendo al cine por las tardes.",
      "No existe diferencia en el lugar de cumplimiento entre el arresto leve y el muy grave."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 15 y 16",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Cumplimiento del Arresto Leve (en Unidad/Domicilio trabajando) vs Grave y Muy Grave (en Establecimiento Disciplinario Militar)",
    consejoAcademia: "¡DIFERENCIA CLAVE DE EXAMEN (Arts. 15 y 16 LO 8/2014)!: 1) **Arresto por Falta LEVE (1-14 días)**: Se cumple en la **Unidad** (o domicilio) y el militar **SÍ PARTICIPA en las actividades de la unidad** (permaneciendo en los lugares señalados el resto del tiempo). 2) **Arresto por Falta GRAVE (15-30 días) o MUY GRAVE (31-60 días)**: Se cumple internado en un **Establecimiento Disciplinario Militar (EDM)** y **NO participa** en las actividades de su unidad.",
    justificacion: "Los artículos 15 y 16 de la LO 8/2014 establecen el régimen de cumplimiento del arresto por falta leve (en la unidad o domicilio, participando en las actividades) y del arresto por falta grave y muy grave (en Establecimiento Disciplinario Militar)."
  },
  {
    id: "Q-W6-092",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 31 de la Ley Orgánica 8/2014 (Vídeo T15), todo mando tiene el deber de corregir las infracciones que observe en los de inferior empleo. Si además de corregirlas considera que merecen sanción y NO tiene potestad sancionadora (por ejemplo, un Sargento o un Teniente que no es Jefe de Compañía), ¿qué puede ordenar como medida preventiva inmediata en caso de falta leve?",
    opciones: [
      "Podrá ordenar el arresto cautelar del infractor en su unidad o alojamiento por un tiempo máximo de CUARENTA Y OCHO HORAS (48 horas), dando cuenta inmediata al mando con potestad sancionadora de quien dependa el infractor.",
      "Puede imponer directamente treinta días de arresto firme en un Establecimiento Disciplinario Militar.",
      "Puede descontarle quince días de haberes de su nómina.",
      "No puede hacer absolutamente nada ni dar parte a nadie."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 31",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Arresto Cautelar de 48 Horas por Mando sin Potestad Sancionadora (Art. 31)",
    consejoAcademia: "¡EL FAMOSO **ARRESTO CAUTELAR DE 48 HORAS DEL ART. 31 LO 8/2014**! Cualquier militar que observe una infracción en un subordinado y no tenga potestad sancionadora debe dar parte al mando competente, y si la naturaleza de los hechos lo exige para mantener la disciplina, puede ordenar un **arresto cautelar máximo de 48 HORAS** (que luego se abona/descuenta si se le impone sanción de arresto).",
    justificacion: "El artículo 31 de la LO 8/2014 faculta para ordenar el arresto cautelar por un tiempo máximo de 48 horas dando cuenta inmediata a la autoridad o mando con competencia sancionadora."
  },
  {
    id: "Q-W6-093",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 32 de la Ley Orgánica 8/2014 (Vídeo T15), ¿qué autoridades tienen competencia exclusiva para imponer las sanciones de SEPARACIÓN DEL SERVICIO y de RESOLUCIÓN DE COMPROMISO por falta muy grave?",
    opciones: [
      "Únicamente el Ministro de Defensa tiene competencia para imponer las sanciones de separación del servicio y de resolución de compromiso (mientras que el JEMAD, el Subsecretario de Defensa y los Jefes de Estado Mayor del ET, Armada y EA pueden imponer las sanciones de arresto de 31 a 60 días y de suspensión de empleo por falta muy grave).",
      "El Jefe de Regimiento puede imponer la resolución de compromiso y la separación del servicio.",
      "El Jefe de Batallón puede imponer la separación del servicio.",
      "El Capitán Jefe de Compañía."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 32.1 y 32.2",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Competencia Exclusiva del Ministro de Defensa en Faltas Muy Graves (Art. 32)",
    consejoAcademia: "¡Pregunta de oro sobre el **Art. 32 LO 8/2014 (Faltas Muy Graves)**!: El **JEMAD, SUBDEF, JEME, AJEMA y JEMA** pueden imponer por falta muy grave el **arresto de 31 a 60 días** y la **suspensión de empleo**. Pero las dos sanciones expulsivas máximas (**SEPARACIÓN DEL SERVICIO** para militares de carrera y **RESOLUCIÓN DE COMPROMISO** para militares temporales) son competencia **EXCLUSIVA DEL MINISTRO DE DEFENSA**.",
    justificacion: "El artículo 32.1 de la LO 8/2014 reserva en exclusiva al Ministro de Defensa la imposición de las sanciones de separación del servicio y resolución de compromiso."
  },
  {
    id: "Q-W6-094",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Procedimiento de Iniciativas y Quejas (Vídeo T16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 1, 2 y 7 del Real Decreto 176/2014, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas relativas al régimen de personal y a las condiciones de vida que pueda plantear el militar (Vídeo T16), ¿cómo deben presentarse las iniciativas y quejas y qué está expresamente prohibido?",
    opciones: [
      "Deben presentarse siempre de forma INDIVIDUAL (por escrito y firmadas e identificadas por el militar), quedando expresamente prohibida e inadmitiéndose cualquier presentación colectiva de iniciativas o quejas.",
      "Pueden presentarse de forma colectiva firmadas por toda una Compañía.",
      "Pueden presentarse de forma anónima sin indicar nombre ni apellidos.",
      "Sustituyen a los recursos administrativos de alzada y reposición."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Arts. 2 y 5",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > Carácter Estrictamente Individual y Prohibición de Quejas Colectivas o Anónimas",
    consejoAcademia: "En el **RD 176/2014 (Vídeo T16)** recuerda las **3 causas principales de INADMISIÓN (Art. 5)**: 1) Que sean **anónimas** o **colectivas**; 2) Que se refieran a materias que tengan su propio procedimiento específico (como **recursos administrativos o disciplinarios**); 3) Que carezcan manifiestamente de fundamento o afecten a decisiones operativas/empleo de la fuerza.",
    justificacion: "Los artículos 2 y 5 del Real Decreto 176/2014 exigen la presentación individual e identificada del militar e inadmiten las quejas colectivas o anónimas."
  },
  {
    id: "Q-W6-095",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Procedimiento de Iniciativas y Quejas (Vídeo T16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a los artículos 8 y 10 del Real Decreto 176/2014 (Vídeo T16), cuando un militar presenta una INICIATIVA (propuesta para mejorar el funcionamiento de las unidades o la calidad de vida) ante su unidad y el Jefe de Unidad no es competente para adoptarla porque excede de su ámbito, ¿a quién la elevará y quién aprueba el informe anual de iniciativas y quejas?",
    opciones: [
      "El Jefe de Unidad la elevará por conducto reglamentario, acompañada de un informe motivado sobre su viabilidad y oportunidad, hasta el Mando o Jefatura de Personal de su Ejército (o DIGENPER); y los Mandos o Jefaturas de Personal y la DIGENPER remitirán anualmente un informe estadístico a la Subsecretaría de Defensa y al Consejo de Personal (COPERFAS).",
      "El Jefe de Unidad la destruye si no tiene competencia para resolverla.",
      "Se remite directamente al Parlamento Europeo.",
      "El militar que presenta una iniciativa pierde sus vacaciones anuales."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Arts. 8, 9 y 15",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > Tramitación de Iniciativas (Arts. 7-10) vs Quejas (Arts. 11-14)",
    consejoAcademia: "Diferencia en el **RD 176/2014 (Vídeo T16)**: **INICIATIVA (Arts. 7-10)** = propuesta general de mejora para las unidades o el personal; **QUEJA (Arts. 11-14)** = reclamación individual relativa al régimen de personal o condiciones de vida (y en la queja el militar puede acudir directamente a su Jefe de Unidad o a través del militar de mayor empleo y antigüedad de su categoría).",
    justificacion: "Los artículos 8 a 10 del Real Decreto 176/2014 regulan el análisis, adopción o elevación con informe motivado de las iniciativas que excedan de la competencia del Jefe de Unidad."
  },
  {
    id: "Q-W6-096",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 7 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres (Vídeo T17), ¿qué diferencia establece la ley entre el ACOSO SEXUAL (Art. 7.1) y el ACOSO POR RAZÓN DE SEXO (Art. 7.2)?",
    opciones: [
      "Constituye acoso SEXUAL cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo; y constituye acoso POR RAZÓN DE SEXO cualquier comportamiento realizado en función del sexo de una persona, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.",
      "Son exactamente lo mismo y requieren siempre contacto físico violento.",
      "El acoso por razón de sexo exige que haya proposiciones de naturaleza sexual.",
      "El condicionamiento de un derecho a la aceptación de una situación de acoso sexual no se considera discriminación."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 7",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Acoso Sexual (Art. 7.1) vs Acoso por Razón de Sexo (Art. 7.2)",
    consejoAcademia: "¡El truco de examen del **Art. 7 LO 3/2007 (Vídeos T17 y T18)**!: Si en la definición aparece la expresión **'de naturaleza sexual' (verbal o físico)** $\\rightarrow$ **ACOSO SEXUAL (Art. 7.1)**. Si dice **'realizado en función del sexo de una persona'** (por ejemplo, por embarazo, maternidad o por ser mujer/hombre, sin connotación erótica/sexual) $\\rightarrow$ **ACOSO POR RAZÓN DE SEXO (Art. 7.2)**.",
    justificacion: "El artículo 7 de la LO 3/2007 define y diferencia el acoso sexual (comportamiento verbal o físico de naturaleza sexual) y el acoso por razón de sexo (comportamiento realizado en función del sexo de una persona), considerándose ambos discriminatorios."
  },
  {
    id: "Q-W6-097",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 13 de la Ley Orgánica 3/2007 (Vídeo T17), en los procedimientos judiciales o administrativos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, ¿a quién corresponderá probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad, y en qué único tipo de procesos NO es de aplicación esta inversión de la carga de la prueba?",
    opciones: [
      "Corresponderá a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad; pero lo establecido en este precepto NO será de aplicación a los procesos PENALES (donde rige siempre la presunción de inocencia del artículo 24.2 CE).",
      "La inversión de la carga de la prueba se aplica también en los procesos penales para condenar sin pruebas.",
      "Corresponde siempre a la víctima demostrar la intención subjetiva del agresor sin ayuda judicial.",
      "Sólo se aplica en juicios mercantiles sobre letras de cambio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 13.1 y 13.2",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Prueba de la Discriminación y Excepción de los Procesos Penales (Art. 13)",
    consejoAcademia: "¡LA PREGUNTA MÁS REPETIDA DE LA LO 3/2007 (Art. 13)!: Cuando la parte actora aporta indicios fundados de discriminación por razón de sexo, se invierte la carga de la prueba y **corresponde al demandado probar la ausencia de discriminación**, **EXCEPTO EN LOS PROCESOS PENALES** (Art. 13.2).",
    justificacion: "El artículo 13 de la LO 3/2007 regula la inversión de la carga de la prueba en casos de discriminación por razón de sexo y exceptúa expresamente de su aplicación a los procesos penales."
  },
  {
    id: "Q-W6-098",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 45 de la Ley Orgánica 3/2007 (tras su modificación por el Real Decreto-ley 6/2019, explicada en el Vídeo T17), ¿a partir de cuántas personas trabajadoras están obligadas las empresas a elaborar y aplicar un PLAN DE IGUALDAD?",
    opciones: [
      "En el caso de las empresas de cincuenta (50) o más personas trabajadoras (anteriormente eran más de 250, pero la reforma lo rebajó a 50 o más personas trabajadoras).",
      "Únicamente las empresas de más de cinco mil (5.000) trabajadores.",
      "Las empresas de dos (2) o más trabajadores.",
      "Los Planes de Igualdad son siempre voluntarios en todas las empresas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 45.2 (modificado por RDL 6/2019)",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Obligatoriedad del Plan de Igualdad en Empresas de 50 o Más Trabajadores (Art. 45.2)",
    consejoAcademia: "¡Cuidado con los test antiguos que decían 250 trabajadores! En el vigente **Art. 45.2 de la LO 3/2007** (explicado en el Vídeo T17), el **Plan de Igualdad es obligatorio para todas las empresas de 50 O MÁS personas trabajadoras**.",
    justificacion: "El artículo 45.2 de la LO 3/2007 obliga a elaborar y aplicar un plan de igualdad a las empresas de cincuenta o más personas trabajadoras."
  },
  {
    id: "Q-W6-099",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo Frente al Acoso FAS (Vídeos T17 y T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Orden DEF/1113/2021, por la que se regula el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas (Vídeo T17), ¿con qué periodicidad mínima se reúne el Pleno del Observatorio en sesión ordinaria?",
    opciones: [
      "Se reunirá en sesión ordinaria al menos dos veces al año (semestralmente), y en sesión extraordinaria cuantas veces sea convocado por la Presidencia por propia iniciativa o a solicitud de al menos un tercio de sus miembros.",
      "Una vez cada cinco años.",
      "Todos los lunes de cada semana.",
      "Una vez cada diez años."
    ],
    correcta: 0,
    referencia: "Orden DEF/1113/2021, Art. 6 (Funcionamiento del Observatorio Militar para la Igualdad)",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T17: Observatorio Militar para la Igualdad) > Reuniones Ordinarias: Al Menos 2 Veces al Año",
    consejoAcademia: "Tanto el **Observatorio Militar para la Igualdad** (Orden DEF/1113/2021) como el **COPERFAS** celebran sesiones ordinarias **al menos DOS VECES AL AÑO (semestralmente)**.",
    justificacion: "El artículo 6 de la Orden DEF/1113/2021 establece que el Observatorio Militar para la Igualdad se reunirá en sesión ordinaria al menos dos veces al año."
  },
  {
    id: "Q-W6-100",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo de Actuación Frente al Acoso en las FAS (Vídeo T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas (Orden DEF/482/2016 y Real Decreto 247/2024, Vídeo T18), cuando una víctima o cualquier persona que tenga conocimiento de una conducta de acoso presenta la denuncia o parte directamente ante una Unidad de Protección frente al Acoso (UPA), ¿en qué plazo máximo deberá la UPA remitir la denuncia a la autoridad u órgano con competencia sancionadora o judicial?",
    opciones: [
      "En el plazo máximo de cinco (5) días desde su recepción, dando cuenta simultáneamente a la UPA Central de la DIGENPER con fines estadísticos y de seguimiento.",
      "En el plazo de seis (6) meses.",
      "En el plazo de dos (2) años.",
      "La UPA archiva las denuncias y nunca las remite a la autoridad disciplinaria."
    ],
    correcta: 0,
    referencia: "Orden DEF/482/2016 y Protocolo frente al Acoso en las FAS (Plazo de 5 días de la UPA)",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: Protocolo frente al Acoso y UPA) > Plazo Máximo de 5 Días de la UPA para Remitir la Denuncia",
    consejoAcademia: "¡El plazo estrella del **Vídeo T18 (UPA)**!: Si la víctima opta por presentar la denuncia ante la **UPA** (en vez de por conducto reglamentario, lo cual es totalmente legítimo y confidencial), la UPA dispone de un plazo máximo de **5 DÍAS** para remitirla a la autoridad competente para incoar el procedimiento disciplinario o dar traslado a la jurisdicción penal.",
    justificacion: "El Protocolo de actuación frente al acoso en las Fuerzas Armadas fija un plazo máximo de 5 días para que la UPA remita la denuncia recibida a la autoridad con competencia sancionadora."
  },
  {
    id: "Q-W6-101",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo de Actuación Frente al Acoso en las FAS y LO 8/2014 (Vídeo T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Ley Orgánica 8/2014 de Régimen Disciplinario y el Protocolo frente al acoso (Vídeo T18), ¿cómo está tipificado disciplinariamente realizar actos que impliquen acoso sexual y por razón de sexo o acoso profesional, y qué protección tiene quien presenta una denuncia de buena fe?",
    opciones: [
      "Está tipificado como FALTA MUY GRAVE en el artículo 8.12 de la LO 8/2014 (cuando no constituya delito del Código Penal Militar); y el Protocolo garantiza la confidencialidad, celeridad y la prohibición absoluta de represalias (indemnidad) contra el denunciante de buena fe, testigos o asesores.",
      "Está tipificado únicamente como falta leve sancionada con reprensión verbal.",
      "Sólo se castiga si ocurre fuera del cuartel.",
      "El denunciante pierde su destino automáticamente al presentar la queja."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 8.12 y Protocolo Frente al Acoso FAS",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: Protocolo frente al Acoso y UPA) > Tipificación como Falta Muy Grave (Art. 8.12 LO 8/2014) y Garantía de Indemnidad",
    consejoAcademia: "En el Vídeo T18 recuerda la doble vía punitiva frente al acoso en las FAS: Si reviste gravedad penal es **Delito Militar** (Art. 47 a 50 del Código Penal Militar LO 14/2015), y en vía disciplinaria es **FALTA MUY GRAVE (Art. 8.12 LO 8/2014)** (o falta grave del Art. 7.28 si se trata de trato degradante o discriminatorio de menor entidad).",
    justificacion: "El artículo 8.12 de la LO 8/2014 tipifica como falta muy grave el acoso sexual y por razón de sexo y el acoso profesional cuando el acto no constituya delito."
  },
  {
    id: "Q-W6-102",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 14.2 de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas (Vídeo T19), ¿quiénes están OBLIGADOS en todo caso a relacionarse a través de medios electrónicos con las Administraciones Públicas para la realización de cualquier trámite de un procedimiento administrativo?",
    opciones: [
      "Las personas jurídicas, las entidades sin personalidad jurídica, quienes ejerzan una actividad profesional para la que se requiera colegiación obligatoria, quienes representen a un interesado que esté obligado a relacionarse electrónicamente, y los empleados de las Administraciones Públicas para los trámites y actuaciones que realicen con ellas por razón de su condición de empleado público.",
      "Todas las personas físicas mayores de sesenta y cinco años aunque no tengan ordenador.",
      "Nadie está obligado nunca a relacionarse por medios electrónicos con la Administración.",
      "Únicamente las empresas extranjeras."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 14.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Sujetos Obligados a Relacionarse Electrónicamente (Art. 14.2)",
    consejoAcademia: "¡Atención en el **Art. 14 LPACAP** (Vídeo T19)! Las **personas físicas** (ciudadanos particulares) tienen derecho a **elegir** si se comunican en papel o por medios electrónicos (Art. 14.1), **EXCEPTO los empleados públicos** (incluidos los **militares profesionales**) para los trámites que realicen con su Administración por razón de su condición de empleado público (Art. 14.2.e), quienes **SÍ están obligados a relacionarse electrónicamente**.",
    justificacion: "El artículo 14.2 de la Ley 39/2015 enumera los cinco colectivos obligados a relacionarse electrónicamente con las Administraciones Públicas, incluyendo a los empleados públicos por razón de su condición."
  },
  {
    id: "Q-W6-103",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 5 de la Ley 39/2015 (Vídeo T19), para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona deberá acreditarse la REPRESENTACIÓN (mientras que para los actos y gestiones de mero trámite se presumirá aquella representación). ¿De qué plazo dispone el interesado para subsanar la falta o insuficiente acreditación de la representación?",
    opciones: [
      "Deberá concederse un plazo de diez (10) días (o de un plazo superior cuando las circunstancias del caso así lo requieran) para aportar la acreditación o subsanar el defecto.",
      "Se archiva la solicitud en el acto sin dar ningún plazo de subsanación.",
      "De un plazo de seis (6) meses.",
      "De veinticuatro (24) horas."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 5.6",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > La Representación y el Plazo de 10 Días de Subsanación (Art. 5.6)",
    consejoAcademia: "En la **Ley 39/2015 (LPACAP)** el plazo estándar de **10 DÍAS HÁBILES** se repite en cuatro sitios clave: 1) Subsanar la falta de **representación (Art. 5.6)**; 2) Subsanar o mejorar la **solicitud de iniciación (Art. 68.1)** (ampliable hasta 5 días más salvo selectivos/concurrencia); 3) Cumplimiento de **trámites por los interesados (Art. 73)**; 4) Evacuar **informes (Art. 80.2)** y cursar **notificaciones (Art. 40.2)**.",
    justificacion: "El artículo 5.6 de la Ley 39/2015 establece que la falta o insuficiente acreditación de la representación no impedirá que se tenga por realizado el acto siempre que se aporte o subsane dentro del plazo de diez días."
  },
  {
    id: "Q-W6-104",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 25 de la Ley 39/2015 (Vídeo T19), en los procedimientos iniciados DE OFICIO por la Administración, ¿qué efectos produce el vencimiento del plazo máximo establecido sin que se haya dictado y notificado resolución expresa?",
    opciones: [
      "Si del procedimiento pudiera derivarse el reconocimiento o la constitución de derechos u otras situaciones jurídicas favorables para los interesados, éstos podrán entender DESESTIMADAS sus pretensiones por silencio administrativo; y en los procedimientos en que la Administración ejercite potestades sancionadoras o, en general, de intervención, susceptibles de producir efectos desfavorables o de gravamen, se producirá la CADUCIDAD.",
      "En los procedimientos sancionadores iniciados de oficio el silencio administrativo impone automáticamente la multa máxima.",
      "En los procedimientos iniciados de oficio siempre hay silencio positivo.",
      "La caducidad de un procedimiento sancionador impide volver a incoarlo aunque la infracción no haya prescrito."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 25.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Falta de Resolución en Procedimientos Iniciados de Oficio: Silencio Negativo vs Caducidad (Art. 25)",
    consejoAcademia: "¡Esquema mental perfecto del **Art. 25 LPACAP (Procedimientos iniciados DE OFICIO)**!: 1) Si el procedimiento de oficio es para **reconocer derechos/favorable** (ej. subvención de oficio) $\\rightarrow$ **SILENCIO NEGATIVO (desestimado)**; 2) Si el procedimiento de oficio es **sancionador o de gravamen/desfavorable** $\\rightarrow$ **CADUCIDAD y archivo** (y recuerda el Art. 95.3: la caducidad no produce por sí sola la prescripción, pero los procedimientos caducados no interrumpen el plazo de prescripción).",
    justificacion: "El artículo 25.1 de la Ley 39/2015 distingue en los procedimientos iniciados de oficio entre el efecto desestimatorio (cuando pudieran derivarse efectos favorables) y la caducidad (en procedimientos sancionadores o de gravamen)."
  },
  {
    id: "Q-W6-105",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 32 y 33 de la Ley 39/2015 (Vídeo T19), compare usted la AMPLIACIÓN DE PLAZOS (Art. 32) con la TRAMITACIÓN DE URGENCIA (Art. 33) en el procedimiento administrativo común:",
    opciones: [
      "La ampliación de los plazos establecidos no podrá exceder de la mitad de los mismos (si las circunstancias lo aconsejan y no se perjudican derechos de tercero) y deberá acordarse antes del vencimiento del plazo de que se trate; la tramitación de urgencia reduce a la mitad los plazos establecidos para el procedimiento ordinario, SALVO los relativos a la presentación de solicitudes y recursos. En ambos casos (arts. 32 y 33), contra el acuerdo que resuelva sobre la ampliación de plazos o sobre la tramitación de urgencia NO cabrá recurso alguno.",
      "La tramitación de urgencia reduce también a la mitad el plazo de un mes para interponer el recurso de alzada.",
      "Se puede ampliar un plazo que ya esté vencido.",
      "Contra la denegación de la ampliación de plazos cabe recurso de alzada en diez días."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 32 y 33",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Ampliación de Plazos (Art. 32) vs Tramitación de Urgencia (Art. 33)",
    consejoAcademia: "¡DOS TRAMPAS CLÁSICAS EN LOS ARTS. 32 Y 33 LPACAP!: 1) En la **Tramitación de Urgencia (Art. 33)** los plazos se reducen a la mitad, **EXCEPTO los plazos para presentar SOLICITUDES y RECURSOS** (es decir, el recurso de alzada sigue teniendo 1 mes entero aunque el expediente haya sido urgente). 2) Contra los acuerdos sobre ampliación de plazos o tramitación de urgencia **NO CABE RECURSO ALGUNO**.",
    justificacion: "Los artículos 32 y 33 de la Ley 39/2015 regulan la ampliación de plazos (hasta la mitad, antes del vencimiento) y la tramitación de urgencia (reducción a la mitad salvo solicitudes y recursos), excluyendo todo recurso contra ambos acuerdos."
  },
  {
    id: "Q-W6-106",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 56.2 de la Ley 39/2015 (Vídeo T20), antes de la iniciación del procedimiento administrativo, el órgano competente podrá adoptar de forma motivada MEDIDAS PROVISIONALES en los casos de urgencia inaplazable y para la protección provisional de los intereses implicados. ¿En qué plazo deberán ser confirmadas, modificadas o levantadas en el acuerdo de iniciación del procedimiento, y qué ocurre si no se inicia el procedimiento en ese plazo?",
    opciones: [
      "Deberán ser confirmadas, modificadas o levantadas en el acuerdo de iniciación del procedimiento, que deberá efectuarse dentro de los QUINCE DÍAS (15 días) siguientes a su adopción; y quedarán sin efecto si no se inicia el procedimiento en dicho plazo o cuando el acuerdo de iniciación no contenga un pronunciamiento expreso acerca de las mismas.",
      "Dentro de los seis meses siguientes a su adopción.",
      "Las medidas provisionalísimas duran indefinidamente aunque nunca se inicie el expediente.",
      "Dentro de las setenta y dos horas siguientes."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 56.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Medidas Provisionales Previas al Inicio del Procedimiento: Caducan a los 15 Días (Art. 56.2)",
    consejoAcademia: "¡Plazo de oro del **Art. 56.2 LPACAP** (Vídeo T20)!: Las medidas provisionales adoptadas **ANTES** de incoar el procedimiento caducan y quedan sin efecto si en el plazo de **15 DÍAS** siguientes a su adopción no se dicta el acuerdo de iniciación del procedimiento confirmándolas o modificándolas.",
    justificacion: "El artículo 56.2 de la Ley 39/2015 exige que las medidas provisionales previas sean confirmadas, modificadas o levantadas en el acuerdo de iniciación dentro de los quince días siguientes a su adopción."
  },
  {
    id: "Q-W6-107",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 77, 80 y 82 de la Ley 39/2015 (Vídeo T20), en la fase de INSTRUCCIÓN del procedimiento administrativo común, ¿cuáles son los plazos legales del período de PRUEBA, de emisión de INFORMES y del TRÁMITE DE AUDIENCIA?",
    opciones: [
      "Período de prueba (Art. 77.2): no superior a 30 días ni inferior a 10 días (más un período extraordinario de hasta 10 días). Emisión de informes (Art. 80.2): son facultativos y no vinculantes salvo disposición expresa en contrario, y se evacuarán en el plazo de 10 días. Trámite de audiencia (Art. 82.2): plazo no inferior a 10 días ni superior a 15 días.",
      "Prueba: 6 meses; Informes: vinculantes en 2 meses; Audiencia: 30 días.",
      "Tanto la prueba como la audiencia duran exactamente 5 días naturales.",
      "Los informes son siempre preceptivos y vinculantes."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 77, 80 y 82",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Los 3 Plazos de la Fase de Instrucción: Prueba (10-30d), Informes (10d) y Audiencia (10-15d)",
    consejoAcademia: "¡Memoriza la tríada de la **Instrucción en LPACAP (Vídeo T20)**!: 1) **PRUEBA (Art. 77)** = de **10 a 30 días** (+ extraordinario de hasta **10 días**); 2) **INFORMES (Art. 80)** = regla general **facultativos y NO vinculantes**, plazo de **10 días**; 3) **TRÁMITE DE AUDIENCIA (Art. 82)** = de **10 a 15 días** (e Información Pública Art. 83 = nunca inferior a **20 días**).",
    justificacion: "Los artículos 77, 80 y 82 de la Ley 39/2015 fijan los plazos de prueba (10 a 30 días), informes (10 días, facultativos y no vinculantes por regla general) y audiencia (10 a 15 días)."
  },
  {
    id: "Q-W6-108",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 96 de la Ley 39/2015 (Vídeo T20), cuando razones de interés público o la falta de complejidad del procedimiento así lo aconsejen, las Administraciones Públicas podrán acordar, de oficio o a solicitud del interesado, la TRAMITACIÓN SIMPLIFICADA del procedimiento. ¿En qué plazo máximo deberán ser resueltos los procedimientos tramitados de manera simplificada desde el siguiente al que se notifique el acuerdo de tramitación simplificada?",
    opciones: [
      "En treinta (30) días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada del procedimiento.",
      "En tres (3) meses.",
      "En seis (6) meses.",
      "En diez (10) días naturales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 96.6",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Tramitación Simplificada del Procedimiento: Plazo de 30 Días (Art. 96)",
    consejoAcademia: "¡Dato clave del **Art. 96 LPACAP (Tramitación Simplificada)**!: Si alguno de los interesados manifiesta su oposición expresa, la Administración deberá seguir la **tramitación ordinaria** (salvo en los procedimientos sancionadores por infracción leve, donde no cabe oponerse a la simplificada). Y el plazo para resolver el procedimiento simplificado es de **30 DÍAS**.",
    justificacion: "El artículo 96.6 de la Ley 39/2015 establece que los procedimientos administrativos tramitados de manera simplificada deberán ser resueltos en treinta días."
  },
  {
    id: "Q-W6-109",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 106 y 107 de la Ley 39/2015 (Vídeo T20), compare usted la REVISIÓN DE OFICIO DE ACTOS NULOS (Art. 106) con la DECLARACIÓN DE LESIVIDAD DE ACTOS ANULABLES (Art. 107) favorables para los interesados:",
    opciones: [
      "La revisión de oficio de actos NULOS de pleno derecho (Art. 106) puede iniciarse en cualquier momento (no tiene plazo de prescripción), requiere dictamen favorable del Consejo de Estado (u órgano consultivo autonómico) y caduca a los 6 meses si se inició de oficio; en cambio, la declaración de lesividad de actos favorables ANULABLES (Art. 107) para su posterior impugnación ante la Jurisdicción Contencioso-Administrativa no podrá adoptarse una vez transcurridos CUATRO AÑOS (4 años) desde que se dictó el acto administrativo, y el procedimiento caduca a los 6 meses.",
      "Tanto la revisión de actos nulos como la lesividad de actos anulables prescriben al mes.",
      "La declaración de lesividad requiere dictamen vinculante del Tribunal Constitucional.",
      "La Administración puede anular por sí misma sin ir al juez cualquier acto favorable anulable."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 106 y 107",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Revisión de Oficio de Actos Nulos (Art. 106: En cualquier momento) vs Declaración de Lesividad de Anulables (Art. 107: 4 Años)",
    consejoAcademia: "¡CUADRO DE ORO DEL TÍTULO V LPACAP (Vídeo T20)!: 1) **Actos NULOS (Art. 106)**: Revisión de oficio **en cualquier momento**, con **dictamen favorable del Consejo de Estado**, y el procedimiento caduca a los **6 meses** (si fue de oficio) o se desestima por silencio a los **6 meses** (si fue a solicitud del interesado). 2) **Actos favorables ANULABLES (Art. 107)**: Declaración de **lesividad** en el plazo máximo de **4 AÑOS** desde que se dictó el acto (caduca a los **6 meses** desde su inicio) para luego impugnarlo ante los tribunales contencioso-administrativos.",
    justificacion: "Los artículos 106 y 107 de la Ley 39/2015 regulan respectivamente la revisión de disposiciones y actos nulos (en cualquier momento, previo dictamen favorable del Consejo de Estado) y la declaración de lesividad de actos anulables (dentro de los 4 años desde que se dictó el acto, caducando el expediente a los 6 meses)."
  },
  {
    id: "Q-W6-110",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 121 a 126 de la Ley 39/2015 (Vídeo T20), compare los plazos de INTERPOSICIÓN y de RESOLUCIÓN de los tres recursos administrativos: ALZADA (Arts. 121-122), POTESTATIVO DE REPOSICIÓN (Arts. 123-124) y EXTRAORDINARIO DE REVISIÓN (Arts. 125-126):",
    opciones: [
      "Recurso de ALZADA (contra actos que NO ponen fin a la vía administrativa): interposición en 1 mes si el acto es expreso (o en cualquier momento si es presunto) y resolución en 3 meses. Recurso POTESTATIVO DE REPOSICIÓN (contra actos que SÍ ponen fin a la vía administrativa): interposición en 1 mes si es expreso (o en cualquier momento si es presunto) y resolución en 1 mes. Recurso EXTRAORDINARIO DE REVISIÓN (contra actos firmes en vía administrativa): interposición en 4 años (si es por error de hecho que resulte de los propios documentos del expediente) o en 3 meses (en los otros tres supuestos de documentos esenciales o delito de prevaricación/cohecho/falsedad), y resolución en 3 meses.",
      "El recurso de alzada se resuelve en 1 mes y el de reposición en 3 meses.",
      "Contra la resolución de un recurso de reposición puede interponerse de nuevo otro recurso de reposición.",
      "El plazo para interponer el recurso de alzada contra un acto presunto es de 10 días."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 121 a 126",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Tabla Maestra de los 3 Recursos Administrativos (Alzada, Reposición y Extraordinario de Revisión)",
    consejoAcademia: "¡LA TABLA DE RECURSOS QUE VALE UNA PLAZA DE PERMANENTE (Vídeo T20)!: \n• **ALZADA**: Actos que **NO** agotan vía $\\rightarrow$ Interposición: **1 mes** (expreso) / **en cualquier momento** (presunto) $\\rightarrow$ Resolución: **3 MESES**.\n• **REPOSICIÓN**: Actos que **SÍ** agotan vía $\\rightarrow$ Interposición: **1 mes** (expreso) / **en cualquier momento** (presunto) $\\rightarrow$ Resolución: **1 MES**.\n• **EXTRAORDINARIO DE REVISIÓN**: Actos **FIRMES** $\\rightarrow$ Interposición: **4 AÑOS** (causa 1ª: error de hecho de documentos del expediente) o **3 MESES** (causas 2ª, 3ª y 4ª) $\\rightarrow$ Resolución: **3 MESES**.",
    justificacion: "Los artículos 121 a 126 de la Ley 39/2015 regulan el objeto y los plazos de interposición y resolución de los recursos de alzada, potestativo de reposición y extraordinario de revisión."
  },
  {
    id: "Q-W6-111",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 17 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), el Consejo Superior del Ejército de Tierra, el de la Armada y el del Ejército del Aire y del Espacio tienen atribuidas competencias fundamentales en materia de evaluaciones para el ascenso. ¿Quién realiza las evaluaciones para el ascenso por el sistema de ELECCIÓN y de CLASIFICACIÓN?",
    opciones: [
      "Las evaluaciones para los ascensos por los sistemas de elección y de clasificación son realizadas por el Consejo Superior del Ejército correspondiente (o Junta Superior del Cuerpo Común respectivo), que eleva sus propuestas al Ministro de Defensa o al Jefe de Estado Mayor según corresponda.",
      "Las realiza el Jefe de Compañía de cada acuartelamiento.",
      "Las realiza el Observatorio de la Vida Militar.",
      "Se realizan por sorteo informático automático sin evaluación."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Arts. 17 y 91",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Evaluaciones para el Ascenso por los Consejos Superiores (Arts. 17 y 91)",
    consejoAcademia: "En la **Ley 39/2007 (Vídeo T12)**: Los **Consejos Superiores** de cada Ejército evalúan los ascensos por **Elección** (incluyendo el ascenso a **Cabo Mayor**) y por **Clasificación**, y son oídos en los expedientes disciplinarios por falta muy grave de separación del servicio.",
    justificacion: "Los artículos 17 y 91 de la Ley 39/2007 atribuyen a los Consejos Superiores de los Ejércitos las evaluaciones para el ascenso por elección y clasificación."
  },
  {
    id: "Q-W6-112",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 121 de la Ley 39/2007 (Vídeo T12), cuando a un militar se le incoa un expediente de insuficiencia de condiciones psicofísicas para determinar si existe inutilidad permanente para el servicio, ¿en qué plazo máximo deberá resolverse dicho expediente y qué órgano médico pericial emite el dictamen preceptivo?",
    opciones: [
      "El expediente, en el que constarán los dictámenes de la Junta Médico-Pericial de la Sanidad Militar, deberá resolverse en el plazo máximo de seis (6) meses (descontando el tiempo de suspensión por informes médicos), siendo resuelto por el Ministro de Defensa o el Subsecretario de Defensa según proceda el retiro o la limitación para ocupar determinados destinos.",
      "Lo resuelve el médico civil de cabecera en 24 horas.",
      "No requiere dictamen de ninguna Junta Médico-Pericial.",
      "El plazo máximo es de diez años."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 120 y Art. 121",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Expediente de Insuficiencia de Condiciones Psicofísicas (Arts. 120-121)",
    consejoAcademia: "En los **Arts. 120 y 121 de la Ley 39/2007** recuerda: Si el militar lleva un período prolongado de baja médica (1 año en Tropa temporal o 2 años en militares de carrera, o antes si las lesiones son irreversibles), se inicia expediente de **insuficiencia de condiciones psicofísicas** con dictamen de la **Junta Médico-Pericial**, que puede terminar en: 1) **Apto**; 2) **Apto con limitación (APL)** para ocupar determinados destinos; o 3) **No apto / Retiro (o resolución de compromiso)** por inutilidad permanente.",
    justificacion: "Los artículos 120 y 121 de la Ley 39/2007 regulan el expediente para determinar si existe insuficiencia de condiciones psicofísicas, previo dictamen de los órganos médico-periciales de la Sanidad Militar."
  },
  {
    id: "Q-W6-113",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 14 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009, Vídeo T13), ¿cuál es el elemento fundamental que da cohesión a las Fuerzas Armadas y garantiza la eficacia en el cumplimiento de sus misiones?",
    opciones: [
      "La disciplina, factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado, será practicada y exigida en las Fuerzas Armadas como norma de actuación (Art. 8 y Art. 44).",
      "La antigüedad en el carné de conducir.",
      "La libre opinión política en los actos de servicio.",
      "La ausencia de jerarquía entre los empleos militares."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Art. 8 y Título II",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > La Disciplina como Factor de Cohesión (Art. 8)",
    consejoAcademia: "¡Definición literal del **Art. 8 de las Reales Ordenanzas** (y Regla 6ª del Art. 6 de la LO 9/2011)!: *'La **disciplina**, factor de cohesión que obliga a **mandar con responsabilidad y a obedecer lo mandado**, será practicada y exigida en las Fuerzas Armadas como norma de actuación. Tiene su expresión colectiva en el acatamiento a la Constitución y su manifestación individual en el cumplimiento de las órdenes recibidas.'*",
    justificacion: "El artículo 8 del Real Decreto 96/2009 define la disciplina como el factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado."
  },
  {
    id: "Q-W6-114",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS (Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 52 de las Reales Ordenanzas para las Fuerzas Armadas (Vídeo T13), ¿qué constituyen los SIGNOS EXTERNOS de disciplina, cortesía militar y policía?",
    opciones: [
      "El saludo militar (que debe ser efectuado por el de menor empleo y correspondido siempre por el superior, y entre los de igual empleo se practicará de acuerdo con las reglas de cortesía), así como la correcta uniformidad y el trato respetuoso recíproco.",
      "Son meras costumbres opcionales que cada soldado puede ignorar.",
      "El saludo militar sólo es obligatorio para los Cabos y no debe ser devuelto por los Oficiales.",
      "Sólo se saluda los días festivos nacionales."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Art. 52",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > Signos Externos de Disciplina y Cortesía Militar: El Saludo (Art. 52)",
    consejoAcademia: "En el **Art. 52 de las Reales Ordenanzas (RD 96/2009)**: El **saludo militar** constituye expresión sincera de respeto mutuo, disciplina y unión entre todos los miembros de las FAS; lo inicia el de inferior empleo y **es deber inexcusable del superior corresponderlo**.",
    justificacion: "El artículo 52 de las Reales Ordenanzas regula el saludo militar y los signos externos de disciplina, cortesía militar y policía."
  },
  {
    id: "Q-W6-115",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 6 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas (Vídeo T14), ¿cuántas REGLAS ESENCIALES definen el comportamiento del militar y cuál es la Regla Primera?",
    opciones: [
      "Son dieciséis (16) Reglas Esenciales del comportamiento del militar (idénticas a las recogidas en el artículo 4 de la Ley 39/2007 de la Carrera Militar), siendo la Primera: 'La disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario, constituye su primer y más fundamental deber, que ha de tener su diaria expresión en el más exacto cumplimiento de los preceptos contenidos en la Constitución, en la Ley Orgánica de la Defensa Nacional y en esta ley.'",
      "Son cinco reglas esenciales y la primera trata sobre las vacaciones de verano.",
      "Son cincuenta reglas esenciales aprobadas por cada Ayuntamiento.",
      "Sólo existen reglas para los Oficiales Generales."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 6.1 (Las 16 Reglas Esenciales del Comportamiento del Militar)",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Las 16 Reglas Esenciales del Comportamiento del Militar (Art. 6)",
    consejoAcademia: "¡Las **16 Reglas Esenciales del Comportamiento del Militar** aparecen exactamente igual en dos leyes del temario!: en el **Art. 4.1 de la Ley 39/2007 (Carrera Militar)** y en el **Art. 6.1 de la LO 9/2011 (Derechos y Deberes)**.",
    justificacion: "El artículo 6.1 de la LO 9/2011 establece las 16 reglas esenciales que definen el comportamiento del militar."
  },
  {
    id: "Q-W6-116",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 12 de la Ley Orgánica 9/2011 (Vídeo T14), el militar tiene derecho a la libertad de expresión y a comunicar y recibir libremente información en los términos establecidos en la Constitución, sin otros límites que los derivados de la salvaguarda de la seguridad y defensa nacional, el deber de reserva y el respeto a la dignidad de las personas y de las instituciones y poderes públicos. En los asuntos estrictamente relacionados con el servicio en las Fuerzas Armadas, ¿a qué límite está sujeto el ejercicio de este derecho?",
    opciones: [
      "Estará sujeto a los límites derivados de la disciplina (Art. 12.2).",
      "No tiene absolutamente ningún límite y puede difundir información clasificada secreta en redes sociales.",
      "Requiere autorización previa de un juez civil para hablar con su familia.",
      "Está prohibido escribir libros de historia o ciencia."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 12.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Libertad de Expresión e Información y Límites de la Disciplina (Art. 12)",
    consejoAcademia: "Fíjate en la frase exacta del **Art. 12.2 LO 9/2011** que cae en tipo test: *'En los asuntos **estrictamente relacionados con el servicio** en las Fuerzas Armadas, los militares en el ejercicio de la libertad de expresión estarán sujetos a los **límites derivados de la disciplina**.'*",
    justificacion: "El artículo 12.2 de la LO 9/2011 sujeta el ejercicio de la libertad de expresión en los asuntos estrictamente relacionados con el servicio a los límites derivados de la disciplina."
  },
  {
    id: "Q-W6-117",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 45 de la Ley Orgánica 8/2014 (Vídeo T15), a diferencia de la regla general de la Ley 39/2015 (LPACAP), ¿cómo se computan los plazos señalados por días en los procedimientos disciplinarios militares?",
    opciones: [
      "En los procedimientos disciplinarios militares todos los plazos establecidos en esta ley se computarán por DÍAS NATURALES, excepto cuando el plazo sea inferior a cinco (5) días en el procedimiento por faltas leves, en cuyo caso se descontarán del cómputo los sábados, domingos y festivos.",
      "Todos los plazos se computan siempre por días hábiles descontando sábados, domingos y todo el mes de agosto.",
      "Sólo se cuentan los días laborables de lunes a jueves.",
      "Los plazos en la LO 8/2014 se cuentan por semanas lunares."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 45",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Cómputo de Plazos por Días Naturales y la Excepción de Menos de 5 Días en Leves (Art. 45)",
    consejoAcademia: "¡LA GRAN TRAMPA DE CRUCE ENTRE EL TEMA 4 (LO 8/2014) Y EL TEMA 8 (LPACAP)!: \n• En **LPACAP (Ley 39/2015, Art. 30)**: Si dice 'días' sin especificar, son **DÍAS HÁBILES** (sin sábados, domingos ni festivos).\n• En **Régimen Disciplinario Militar (LO 8/2014, Art. 45)**: Todos los plazos se computan por **DÍAS NATURALES**, con **UNA SOLA EXCEPCIÓN**: cuando en el procedimiento por **falta leve** el plazo sea **inferior a 5 días** (en cuyo caso sí se descuentan sábados, domingos y festivos).",
    justificacion: "El artículo 45 de la LO 8/2014 dispone que los plazos se computarán por días naturales, salvo cuando sean inferiores a cinco días en el procedimiento por faltas leves."
  },
  {
    id: "Q-W6-118",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 46 de la Ley Orgánica 8/2014 (Vídeo T15), ¿cómo se tramita el procedimiento preferentemente ORAL para la imposición de sanciones por FALTA LEVE?",
    opciones: [
      "El mando con competencia sancionadora verificará la exactitud de los hechos, oirá al presunto infractor (quien podrá acudir asistido por un militar o abogado de su elección si así lo desea en sus alegaciones), comprobará si están tipificados como falta leve y graduará e impondrá la sanción mediante resolución escrita y motivada que notificará al interesado con indicación de los recursos que procedan.",
      "Requiere nombrar un Instructor y un Secretario y tramitar un expediente escrito de seis meses con vista oral ante el Tribunal Supremo.",
      "Se impone en secreto sin escuchar al presunto infractor ni entregarle resolución escrita.",
      "No cabe ningún recurso contra las sanciones por falta leve."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 46 y 47",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Procedimiento Preferentemente Oral por Falta Leve (Arts. 46 y 47)",
    consejoAcademia: "En el procedimiento por **Falta Leve (Arts. 46 y 47 LO 8/2014)**: La tramitación es **preferentemente ORAL** (sin Instructor ni Secretario), pero es **imprescindible el trámite de audiencia** al interesado y la **resolución final siempre debe ser ESCRITA y motivada**.",
    justificacion: "Los artículos 46 y 47 de la LO 8/2014 regulan el procedimiento preferentemente oral para faltas leves, exigiendo audiencia al interesado y resolución sancionadora escrita y motivada."
  },
  {
    id: "Q-W6-119",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 54 de la Ley Orgánica 8/2014 (Vídeo T15), durante la instrucción de un expediente disciplinario por falta grave o muy grave, la autoridad que lo incoó podrá acordar motivadamente, a propuesta o previo informe del Instructor, el ARRESTO PREVENTIVO del expedientado en un Establecimiento Disciplinario Militar. ¿Cuál es la duración máxima de este arresto preventivo?",
    opciones: [
      "No podrá exceder en ningún caso de VEINTE DÍAS (20 días), y dicho tiempo se abonará en su totalidad para el cumplimiento de la sanción de arresto que pudiera imponerse.",
      "Hasta seis meses de duración.",
      "Cuarenta y ocho horas como máximo.",
      "Dos años."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 54",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Arresto Preventivo en Faltas Graves/Muy Graves: Máximo 20 Días (Art. 54)",
    consejoAcademia: "¡No confundas los **DOS arrestos cautelares/preventivos** de la LO 8/2014 (Vídeo T15)!:\n1) **Arresto CAUTELAR del Art. 31** (por cualquier mando ante infracción flagrante/leve): máximo **48 HORAS**.\n2) **Arresto PREVENTIVO del Art. 54** (acordado por la autoridad que incoa un expediente por falta **grave o muy grave**): máximo **20 DÍAS**.",
    justificacion: "El artículo 54 de la LO 8/2014 fija en veinte días la duración máxima del arresto preventivo durante la tramitación de un expediente disciplinario por falta grave o muy grave."
  },
  {
    id: "Q-W6-120",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 60 de la Ley Orgánica 8/2014 (Vídeo T15), las sanciones disciplinarias serán inmediatamente ejecutivas y comenzarán a cumplirse el mismo día en que se notifique al infractor la resolución por la que se le imponen, SALVO una excepción prevista en el apartado 2 para el ARRESTO POR FALTA GRAVE O MUY GRAVE cuando se haya interpuesto recurso:",
    opciones: [
      "En las sanciones de arresto por falta grave o por falta muy grave, la autoridad que las hubiera impuesto acordará la suspensión de su ejecución durante el plazo de interposición del recurso o mientras se sustancia y resuelve éste, si el sancionado lo solicita (salvo que cause perjuicio a la disciplina).",
      "Las sanciones por falta leve nunca son ejecutivas hasta que transcurran cinco años.",
      "La sanción económica se devuelve con intereses antes de notificarse.",
      "Ninguna sanción disciplinaria es ejecutiva en las Fuerzas Armadas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 60 y Art. 61",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Ejecutividad Inmediata de las Sanciones y Suspensión del Arresto Grave/Muy Grave (Arts. 60-61)",
    consejoAcademia: "En los **Arts. 60 y 61 de la LO 8/2014**: Regla general = **ejecutividad inmediata** el mismo día de la notificación (y en el arresto por falta leve a más tardar al día siguiente). Pero en el **arresto por falta GRAVE o MUY GRAVE** (que se cumple en Establecimiento Disciplinario Militar), el sancionado puede solicitar la **suspensión de la ejecución** mientras recurre en vía disciplinaria.",
    justificacion: "Los artículos 60 y 61 de la LO 8/2014 regulan la ejecutividad inmediata de las sanciones disciplinarias y el régimen de suspensión en los casos de arresto por falta grave o muy grave."
  },
  {
    id: "Q-W6-121",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 62 de la Ley Orgánica 8/2014 (Vídeo T15), cuando concurran en un mismo sancionado varias sanciones y no fuera posible su cumplimiento simultáneo, ¿en qué orden se cumplirán y cuál es el límite máximo de tiempo continuo que podrá permanecer en arresto?",
    opciones: [
      "Se cumplirán por orden de mayor a menor gravedad, sin que el tiempo total de permanencia continua en arresto pueda exceder de SESENTA DÍAS (60 días).",
      "Se cumplirán de menor a mayor gravedad hasta un máximo continuo de cinco años.",
      "Se anulan todas las sanciones menos la más leve.",
      "El límite continuo de arresto es de trescientos sesenta y cinco días."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 62",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Concurrencia de Sanciones: De Mayor a Menor Gravedad y Tope de 60 Días de Arresto Continuo (Art. 62)",
    consejoAcademia: "¡Dos reglas del **Art. 62 LO 8/2014** que caen muchísimo!: 1) Orden de cumplimiento: **de MAYOR a MENOR gravedad**; 2) Tope máximo de permanencia continua en arresto: **60 DÍAS**.",
    justificacion: "El artículo 62 de la LO 8/2014 establece que las sanciones que no puedan cumplirse simultáneamente se cumplirán de mayor a menor gravedad, con el límite máximo de 60 días de permanencia continua en arresto."
  },
  {
    id: "Q-W6-122",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 68 y 69 de la Ley Orgánica 8/2014 (Vídeo T15), contra las resoluciones sancionadoras cabe interponer recurso de ALZADA (en el plazo de 1 mes ante la autoridad o mando superior al que impuso la sanción). ¿En qué dos casos NO cabe recurso de alzada, sino directamente RECURSO DE REPOSICIÓN (preceptivo o potestativo según el caso) antes de acudir a la Jurisdicción Militar?",
    opciones: [
      "Cuando la sanción hubiera sido impuesta por el Ministro de Defensa o por la Sala de Gobierno del Tribunal Militar Central, en cuyo caso podrá interponerse recurso de reposición en el plazo de un (1) mes.",
      "Cuando la sanción la imponga un Capitán Jefe de Compañía.",
      "Cuando la sanción la imponga un Teniente Coronel Jefe de Batallón.",
      "Nunca cabe recurso de reposición en la LO 8/2014."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 68 y 69",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Recurso de Alzada (Art. 68) vs Recurso de Reposición (Art. 69)",
    consejoAcademia: "¡Esquema de Recursos en la **LO 8/2014 (Arts. 68 a 71)**!: 1) Contra sanciones impuestas por cualquier mando militar (desde Jefe de Compañía hasta JEMAD/JEME/SUBDEF) $\\rightarrow$ **Recurso de ALZADA** ante el superior; 2) Contra sanciones impuestas directamente por el **Ministro de Defensa** o la **Sala de Gobierno del Tribunal Militar Central** (que no tienen superior jerárquico disciplinario) $\\rightarrow$ **Recurso de REPOSICIÓN** (Art. 69). Y recuerda: si la sanción fue impuesta por el Jefe de Compañía, el recurso de alzada lo resuelve el **Jefe de Regimiento/Unidad independiente** (Art. 68.1).",
    justificacion: "El artículo 69 de la LO 8/2014 prevé el recurso de reposición contra las resoluciones sancionadoras dictadas en primera instancia por el Ministro de Defensa o por la Sala de Gobierno del Tribunal Militar Central."
  },
  {
    id: "Q-W6-123",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 68.1 (segundo párrafo) de la Ley Orgánica 8/2014 (Vídeo T15), cuando la sanción por falta leve hubiera sido impuesta por un Jefe de Compañía o unidad similar (o Comandante de unidad inferior a buque/escuadrón), ¿ante quién se interpone el recurso de alzada?",
    opciones: [
      "Ante el Jefe de Regimiento o Comandante de unidad similar (saltando el escalón de Batallón para garantizar la resolución por el Jefe de Unidad independiente).",
      "Ante el Cabo Mayor de la Compañía.",
      "Ante el Tribunal Europeo de Derechos Humanos.",
      "Ante el Alcalde del municipio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 68.1 párrafo 2º",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Especialidad del Recurso de Alzada contra Sanción del Jefe de Compañía (Art. 68.1)",
    consejoAcademia: "¡Detalle fino de corte del **Art. 68.1 párrafo 2º LO 8/2014**!: Si te sanciona el **Jefe de Compañía (Capitán)**, el recurso de alzada **NO** lo resuelve el Jefe de Batallón (Teniente Coronel), sino que sube directamente al **JEFE DE REGIMIENTO (Coronel)** o Comandante de buque/unidad similar.",
    justificacion: "El artículo 68.1 segundo párrafo de la LO 8/2014 dispone que cuando la sanción hubiera sido impuesta por el mando de escalón compañía o unidad similar, el recurso de alzada se interpondrá ante el Jefe de Regimiento o Comandante de unidad similar."
  },
  {
    id: "Q-W6-124",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 70.3 de la Ley Orgánica 8/2014 (Vídeo T15), ¿en qué plazo máximo deberá notificarse la resolución de un recurso de alzada o de reposición en vía disciplinaria militar, y qué efecto tiene el silencio si transcurre dicho plazo sin resolución expresa?",
    opciones: [
      "Deberá notificarse en el plazo máximo de DOS MESES (2 meses) desde su interposición; y transcurrido dicho plazo sin que se hubiera notificado resolución expresa, el interesado podrá entenderlo DESESTIMADO por silencio administrativo a los efectos de interponer el recurso contencioso-disciplinario militar.",
      "En el plazo de tres meses y el silencio es estimatorio (positivo).",
      "En el plazo de diez días hábiles.",
      "En el plazo de un año."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 70.3",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Plazo para Resolver Recursos Disciplinarios: 2 Meses y Silencio Negativo (Art. 70.3)",
    consejoAcademia: "¡CRUCE MORTAL ENTRE LO 8/2014 Y LEY 39/2015 LPACAP!:\n• Plazo para **INTERPONER** Alzada o Reposición: **1 MES** en las dos leyes (coinciden).\n• Plazo de la Administración para **RESOLVER** los recursos:\n  - En **LPACAP (Ley 39/2015)**: Alzada = **3 meses** / Reposición = **1 mes**.\n  - En **Disciplinario Militar (LO 8/2014, Art. 70.3)**: Tanto Alzada como Reposición se resuelven en **2 MESES** (con silencio desestimatorio).",
    justificacion: "El artículo 70.3 de la LO 8/2014 establece un plazo máximo de dos meses para resolver y notificar los recursos de alzada y de reposición en materia disciplinaria."
  },
  {
    id: "Q-W6-125",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 40.2 de la Ley 39/2015, del Procedimiento Administrativo Común (Vídeo T19), toda notificación deberá ser cursada dentro del plazo de:",
    opciones: [
      "Diez (10) días a partir de la fecha en que el acto haya sido dictado.",
      "Treinta (30) días naturales desde la solicitud inicial.",
      "Veinticuatro (24) horas.",
      "Tres (3) meses."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 40.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Plazo de 10 Días para Cursar Toda Notificación (Art. 40.2)",
    consejoAcademia: "Art. 40.2 LPACAP: Toda notificación deberá ser cursada dentro del plazo de **10 DÍAS** a partir de la fecha en que el acto haya sido dictado.",
    justificacion: "El artículo 40.2 de la Ley 39/2015 fija en diez días a partir de la fecha en que el acto haya sido dictado el plazo para cursar su notificación."
  },
  {
    id: "Q-W6-126",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 100 de la Ley 39/2015 (Vídeo T20), la ejecución forzosa de los actos administrativos por las Administraciones Públicas se efectuará, respetando siempre el principio de proporcionalidad, por los siguientes CUATRO medios:",
    opciones: [
      "Apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.",
      "Arresto domiciliario, embargo preventivo, subasta y destierro.",
      "Amonestación verbal, recargo del 500% y clausura perpetua.",
      "Revocación, convalidación, conversión y rectificación."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 100.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Los 4 Medios de Ejecución Forzosa (Art. 100)",
    consejoAcademia: "¡Los **4 medios de ejecución forzosa del Art. 100 LPACAP**!: **1) Apremio sobre el patrimonio** (deudas líquidas de dinero); **2) Ejecución subsidiaria** (actos NO personalísimos que puede hacer otro a costa del obligado); **3) Multa coercitiva** (independiente de las sanciones y compatible con ellas); **4) Compulsión sobre las personas** (obligaciones personalísimas de no hacer o soportar, cuando la ley expresamente lo autorice). Y si concurren varios medios, se elegirá siempre el **menos restrictivo de la libertad individual** (Art. 100.2).",
    justificacion: "El artículo 100.1 de la Ley 39/2015 enumera los cuatro medios de ejecución forzosa: apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas."
  },
  {
    id: "Q-W6-127",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 114 de la Ley 39/2015 (Vídeo T20), ¿qué actos PONEN FIN A LA VÍA ADMINISTRATIVA en el ámbito general y en la Administración General del Estado?",
    opciones: [
      "Las resoluciones de los recursos de alzada, las resoluciones de los órganos administrativos que carezcan de superior jerárquico (salvo que una ley establezca lo contrario), los acuerdos, pactos o convenios finalizadores del procedimiento, la resolución administrativa de los procedimientos de responsabilidad patrimonial y de los procedimientos complementarios en materia sancionadora; y en la AGE, los actos del Gobierno, de los Ministros y de los Secretarios de Estado, y los emanados de órganos directivos con nivel de Director General o superior en materia de PERSONAL.",
      "Únicamente los actos dictados por los Jefes de Negociado.",
      "Las resoluciones de los recursos de alzada nunca ponen fin a la vía administrativa y permiten interponer un segundo recurso de alzada.",
      "En materia de personal sólo ponen fin a la vía administrativa los actos de los Subdirectores Generales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 114.1 y 114.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Actos que Ponen Fin a la Vía Administrativa (Art. 114)",
    consejoAcademia: "¡Ojo al detalle estrella del **Art. 114.2.c LPACAP** en la AGE!: Por regla general, agotan la vía administrativa los actos de **Gobierno, Ministros y Secretarios de Estado** (los Órganos Superiores). Pero en **MATERIA DE PERSONAL**, también agotan la vía administrativa los actos emanados de órganos directivos con nivel de **DIRECTOR GENERAL o superior** (es decir, **Subsecretarios, Secretarios Generales y Directores Generales como DIGENPER o DIGEREM**).",
    justificacion: "El artículo 114 de la Ley 39/2015 determina los actos que ponen fin a la vía administrativa, incluyendo en la AGE los actos en materia de personal dictados por órganos directivos con nivel de Director General o superior."
  },
  {
    id: "Q-W6-128",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 95 de la Ley 39/2015 (Vídeo T20), en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que se producirá la CADUCIDAD del procedimiento si no realiza las actividades necesarias para reanudar la tramitación en el plazo de:",
    opciones: [
      "Tres (3) meses.",
      "Diez (10) días.",
      "Quince (15) días.",
      "Un (1) año."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 95.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Caducidad por Paralización Imputable al Interesado: 3 Meses (Art. 95.1)",
    consejoAcademia: "¡Plazo de oro del **Art. 95.1 LPACAP**!: Si el procedimiento iniciado a solicitud del interesado se paraliza por culpa del interesado, la Administración le advierte de que pasados **3 MESES** sin actuar se acordará el archivo por **caducidad**.",
    justificacion: "El artículo 95.1 de la Ley 39/2015 fija un plazo de tres meses de inactividad imputable al interesado tras la advertencia administrativa para que opere la caducidad del procedimiento."
  },
  {
    id: "Q-W6-129",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 94 de la Ley 39/2015 (Vídeo T20), ¿cuál es la diferencia jurídica esencial entre el DESISTIMIENTO y la RENUNCIA por parte del interesado en un procedimiento administrativo?",
    opciones: [
      "Con el desistimiento el interesado abandona únicamente su solicitud en ese procedimiento concreto (pudiendo volver a plantearla en otro procedimiento futuro si el derecho no ha prescrito); en cambio, con la renuncia el interesado abandona el derecho mismo (no pudiendo volver a ejercitarlo en el futuro), siempre que tal renuncia no esté prohibida por el ordenamiento jurídico.",
      "En la renuncia se puede volver a presentar la solicitud al día siguiente y en el desistimiento se pierde el derecho para siempre.",
      "Tanto el desistimiento como la renuncia requieren escritura pública notarial.",
      "Ningún interesado puede desistir nunca de una solicitud administrativa."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 94",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Terminación del Procedimiento: Desistimiento vs Renuncia (Art. 94)",
    consejoAcademia: "Regla mnemotécnica del **Art. 94 LPACAP**: **DESISTIMIENTO** = abandonas el **procedimiento/solicitud actual** (conservas el derecho para el futuro); **RENUNCIA** = abandonas el **DERECHO mismo** de forma definitiva.",
    justificacion: "El artículo 94 de la Ley 39/2015 regula el desistimiento de la solicitud y la renuncia a los derechos cuando ésta no esté prohibida por el ordenamiento jurídico."
  },
  {
    id: "Q-W6-130",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 109 de la Ley 39/2015 (Vídeo T20), las Administraciones Públicas podrán REVOCAR mientras no haya transcurrido el plazo de prescripción sus actos de gravamen o desfavorables, y asimismo podrán RECTIFICAR en cualquier momento, de oficio o a instancia de los interesados:",
    opciones: [
      "Los errores materiales, de hecho o aritméticos existentes en sus actos (Art. 109.2).",
      "Los actos declarativos de derechos favorables sin ningún límite ni procedimiento.",
      "Las leyes orgánicas aprobadas por las Cortes Generales.",
      "Las sentencias firmes de la Sala de lo Militar del Tribunal Supremo."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 109.1 y 109.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Revocación de Actos de Gravamen y Rectificación de Errores Materiales (Art. 109)",
    consejoAcademia: "En el **Art. 109 LPACAP**: 1) **Revocación (Art. 109.1)**: Solo para actos **de gravamen o desfavorables**, mientras no haya transcurrido el plazo de prescripción (y siempre que no constituya dispensa o exención no permitida por las leyes ni sea contraria al principio de igualdad o al interés público). 2) **Rectificación de errores materiales, de hecho o aritméticos (Art. 109.2)**: **EN CUALQUIER MOMENTO**.",
    justificacion: "El artículo 109 de la Ley 39/2015 regula la revocación de actos de gravamen o desfavorables y la rectificación en cualquier momento de los errores materiales, de hecho o aritméticos."
  },
  {
    id: "Q-W6-131",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 20 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), ¿cuáles son las TRES categorías en que se agrupan los militares profesionales y cuáles son los empleos militares que integran la categoría de TROPA Y MARINERÍA?",
    opciones: [
      "Las tres categorías son Oficiales Generales, Oficiales, Suboficiales y Tropa y Marinería (cuatro categorías considerando Oficiales Generales de forma diferenciada dentro de la estructura jerárquica del Art. 20: Oficiales Generales, Oficiales, Suboficiales y Tropa y Marinería); y en la categoría de Tropa y Marinería los empleos son, de menor a mayor: Soldado o Marinero, Cabo, Cabo Primero y Cabo Mayor.",
      "Soldado, Soldado de Primera, Sargento y Brigada.",
      "Recluta, Cabo, Subteniente y Alférez.",
      "En la categoría de Tropa y Marinería sólo existe el empleo de Soldado."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 20 y Art. 21",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > Categorías y Empleos Militares en las FAS (Arts. 20 y 21)",
    consejoAcademia: "¡Atención a la trampa del empleo 'Soldado de Primera'!: En la vigente **Ley 39/2007 (Art. 21)**, en la categoría de **Tropa y Marinería** existen **4 empleos**: **1) Soldado (o Marinero)**, **2) Cabo**, **3) Cabo Primero** y **4) Cabo Mayor** (el antiguo empleo de 'Soldado de 1ª' se declaró a extinguir en la Disposición Transitoria).",
    justificacion: "Los artículos 20 y 21 de la Ley 39/2007 establecen las categorías militares y enumeran en la de Tropa y Marinería los empleos de Soldado o Marinero, Cabo, Cabo Primero y Cabo Mayor."
  },
  {
    id: "Q-W6-132",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 de la Carrera Militar (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 7 de la Ley 39/2007, de la Carrera Militar (Vídeo T12), todo militar, antes de adquirir la condición de militar profesional, deberá prestar juramento o promesa ante la Bandera de España. ¿Cuál es la fórmula legal del acto de juramento o promesa ante la Bandera?",
    opciones: [
      "'¡Soldados! ¿Juráis por Dios o prometéis por vuestra conciencia y honor cumplir fielmente vuestras obligaciones militares, guardar y hacer guardar la Constitución como norma fundamental del Estado, obedecer y respetar al Rey y a vuestros jefes, no abandonarlos nunca y, si preciso fuera, entregar vuestra vida en defensa de España?' a lo que se contesta '¡Sí, lo hacemos!', seguido del beso a la Bandera y el desfile bajo ella.",
      "Consiste únicamente en firmar un impreso administrativo en la Subdelegación de Defensa.",
      "Sólo prestan juramento ante la Bandera los Oficiales Generales.",
      "El juramento ante la Bandera es voluntario para los militares profesionales."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 7 (Juramento o promesa ante la Bandera de España)",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 39/2007 Carrera Militar) > El Juramento o Promesa ante la Bandera como Requisito Previo e Indispensable (Art. 7)",
    consejoAcademia: "El **Art. 7 de la Ley 39/2007** establece que el **juramento o promesa ante la Bandera de España** es requisito **previo e indispensable** a la adquisición de la condición de militar de carrera, de militar de complemento y de militar de tropa y marinería.",
    justificacion: "El artículo 7 de la Ley 39/2007 regula la fórmula solemne del juramento o promesa ante la Bandera de España como requisito previo e indispensable para adquirir la condición de militar profesional."
  },
  {
    id: "Q-W6-133",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 15 de la Ley Orgánica 9/2011 (Vídeo T14), en relación con el derecho de PETICIÓN (reconocido en el artículo 29.2 de la Constitución), ¿cómo podrán ejercerlo los miembros de las Fuerzas Armadas?",
    opciones: [
      "El militar podrá ejercer el derecho de petición sólo INDIVIDUALMENTE, en los supuestos y en la forma establecidos en la Ley Orgánica 4/2001, reguladora del Derecho de Petición (sin que puedan ser objeto de este derecho aquellas solicitudes, quejas o sugerencias para cuya satisfacción el ordenamiento jurídico establezca un procedimiento específico distinto).",
      "Pueden ejercerlo colectivamente mediante recogida de firmas de toda la Brigada.",
      "Tienen prohibido el derecho de petición incluso de forma individual.",
      "El derecho de petición sustituye al recurso de alzada."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 15 y Constitución Española, Art. 29.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Ejercicio Exclusivamente Individual del Derecho de Petición (Art. 15)",
    consejoAcademia: "Tanto el **Art. 29.2 CE** como el **Art. 15 de la LO 9/2011** coinciden al 100%: el militar sólo puede ejercer el derecho de petición **INDIVIDUALMENTE**.",
    justificacion: "El artículo 15 de la LO 9/2011 dispone que el militar podrá ejercer el derecho de petición sólo individualmente, conforme a la LO 4/2001."
  },
  {
    id: "Q-W6-134",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según los artículos 30 y 32 de la Ley Orgánica 9/2011 (Vídeo T14), ¿en qué consiste el APOYO AL PERSONAL en las Fuerzas Armadas y qué es el Pase a Retiro con relación honorífica con las unidades?",
    opciones: [
      "El Ministerio de Defensa facilitará al militar y a su familia apoyo social, atención en misiones, ayudas al estudio, movilidad geográfica y protección específica ante situaciones de necesidad a través de las Oficinas de Apoyo al Personal (OFAP) en las bases y acuartelamientos; y los militares retirados mantendrán, si lo solicitan, una especial relación con las Fuerzas Armadas mediante su adscripción con carácter honorífico a la unidad que elijan, pudiendo asistir a actos y ceremonias militares vistiendo el uniforme.",
      "Al pasar a retiro se prohíbe al militar volver a usar el uniforme en ceremonias militares.",
      "Las OFAP son oficinas recaudadoras de impuestos municipales.",
      "El apoyo al personal sólo existe para civiles extranjeros."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 30 a 32 y Ley 39/2007, Art. 115",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Apoyo al Personal (OFAP) y Derechos de los Militares Retirados",
    consejoAcademia: "En los **Puntos de Apoyo al Personal (OFAP)** de las bases y acuartelamientos (coordinados en el ET por la **DIAPER del MAPER**) se facilita información, apoyo social, formación y atención a las familias de los militares desplegados en operaciones.",
    justificacion: "Los artículos 30 a 32 de la LO 9/2011 regulan la protección social y el apoyo al personal y a sus familias en las Fuerzas Armadas."
  },
  {
    id: "Q-W6-135",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 18 de la Ley Orgánica 8/2014 (Vídeo T15), la sanción disciplinaria de SUSPENSIÓN DE EMPLEO (aplicable únicamente por faltas muy graves) priva de todas las funciones propias del mismo por un período:",
    opciones: [
      "Mínimo de un (1) mes y máximo de un (1) año (salvo cuando se imponga por condena penal firme en que durará el tiempo de la pena principal o accesoria).",
      "Mínimo de un (1) día y máximo de quince (15) días.",
      "Mínimo de dos (2) años y máximo de diez (10) años.",
      "De carácter perpetuo e irreversible."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 18",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Duración de la Sanción de Suspensión de Empleo: De 1 Mes a 1 Año (Art. 18)",
    consejoAcademia: "¡Plazo exacto del **Art. 18 LO 8/2014**!: La sanción disciplinaria de **Suspensión de Empleo** (falta muy grave) tiene una duración de **1 MES a 1 AÑO** (y recuerda que si se impone por **más de 6 meses** conlleva además el **cese en el destino** según el Art. 112 de la Ley 39/2007).",
    justificacion: "El artículo 18 de la LO 8/2014 establece que la suspensión de empleo privará de todas las funciones propias del mismo por un período mínimo de un mes y máximo de un año."
  },
  {
    id: "Q-W6-136",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 8 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres (Vídeo T17), ¿cómo califica la ley todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad?",
    opciones: [
      "Constituye discriminación DIRECTA por razón de sexo (Art. 8).",
      "Constituye discriminación indirecta justificable.",
      "No constituye ningún tipo de discriminación según la ley.",
      "Constituye una acción positiva."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 8",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Trato Desfavorable por Embarazo o Maternidad = Discriminación Directa (Art. 8)",
    consejoAcademia: "¡Trampa muy repetida en los exámenes oficiales!: El trato desfavorable a las mujeres relacionado con el **embarazo o la maternidad** es siempre **DISCRIMINACIÓN DIRECTA por razón de sexo (Art. 8 LO 3/2007)** (nunca indirecta).",
    justificacion: "El artículo 8 de la LO 3/2007 dispone expresamente que constituye discriminación directa por razón de sexo todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad."
  },
  {
    id: "Q-W6-137",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 11 de la Ley Orgánica 3/2007 (Vídeo T17), con el fin de hacer efectivo el derecho constitucional de la igualdad, los Poderes Públicos adoptarán medidas específicas en favor de las mujeres para corregir situaciones patentes de desigualdad de hecho respecto de los hombres. ¿Cómo denomina la ley a estas medidas y qué requisito deben cumplir?",
    opciones: [
      "Se denominan ACCIONES POSITIVAS, y serán aplicables en tanto subsistan dichas situaciones de desigualdad, habiendo de ser razonables y proporcionadas en relación con el objetivo perseguido en cada caso.",
      "Se denominan sanciones punitivas perpetuas.",
      "Están prohibidas por el artículo 14 de la Constitución.",
      "Sólo pueden ser adoptadas por asociaciones privadas extranjeras."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 11",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Las Acciones Positivas: Razonables, Proporcionadas y Temporales (Art. 11)",
    consejoAcademia: "Las **Acciones Positivas (Art. 11 LO 3/2007)** exigen tres notas: 1) Corregir situaciones patentes de **desigualdad de hecho**; 2) Temporales (**en tanto subsistan** dichas situaciones); 3) **Razonables y proporcionadas**.",
    justificacion: "El artículo 11 de la LO 3/2007 regula las acciones positivas como medidas específicas, razonables y proporcionadas para corregir situaciones patentes de desigualdad de hecho."
  },
  {
    id: "Q-W6-138",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 24.4 de la Ley 39/2015 (Vídeo T19), los actos administrativos producidos por silencio administrativo se podrán hacer valer tanto ante la Administración como ante cualquier persona física o jurídica, pública o privada. Si el interesado solicita el CERTIFICADO ACREDITATIVO DEL SILENCIO PRODUCIDO, ¿en qué plazo deberá expedirse de oficio o a instancia del interesado por el órgano competente para resolver?",
    opciones: [
      "En el plazo de QUINCE DÍAS (15 días) desde que expire el plazo máximo para resolver el procedimiento (o desde el día siguiente a aquél en que la petición del certificado tuviese entrada en el registro electrónico de la Administración u Organismo competente).",
      "En el plazo de seis meses.",
      "En el plazo de dos años.",
      "La Administración no está obligada a expedir ningún certificado del silencio."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 24.4",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Certificado Acreditativo del Silencio Administrativo: Plazo de 15 Días (Art. 24.4)",
    consejoAcademia: "Plazo clásico de examen en el **Art. 24.4 LPACAP**: El **certificado acreditativo del silencio administrativo** debe emitirse en el plazo máximo de **15 DÍAS**.",
    justificacion: "El artículo 24.4 de la Ley 39/2015 fija en quince días el plazo para expedir el certificado acreditativo del silencio administrativo producido."
  },
  {
    id: "Q-W6-139",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 117 de la Ley 39/2015 (Vídeo T20), la interposición de cualquier recurso administrativo, excepto en los casos en que una disposición establezca lo contrario, NO suspenderá la ejecución del acto impugnado. No obstante, si el recurrente solicita la suspensión de la ejecución del acto impugnado al interponer el recurso, ¿cuándo se entenderá SUSPENDIDA la ejecución por silencio positivo si el órgano competente no ha dictado y notificado resolución expresa sobre la solicitud de suspensión?",
    opciones: [
      "Cuando haya transcurrido UN MES (1 mes) desde que la solicitud de suspensión haya tenido entrada en el registro electrónico de la Administración u Organismo competente para decidir sobre la misma.",
      "Cuando hayan transcurrido veinticuatro horas.",
      "Nunca se suspende la ejecución por silencio.",
      "Cuando hayan transcurrido cinco años."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 117.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Suspensión Automática de la Ejecución al Mes de Solicitarla en un Recurso (Art. 117.3)",
    consejoAcademia: "¡La joya del **Art. 117.3 LPACAP** (Vídeo T20)!: Aunque en los recursos administrativos el silencio al resolver el fondo es negativo (salvo el doble silencio en alzada), respecto a la **solicitud cautelar de SUSPENSIÓN de la ejecución del acto recurrido**, si la Administración no contesta a esa solicitud de suspensión en **1 MES**, la ejecución del acto **queda automáticamente SUSPENDIDA (silencio positivo cautelar)**.",
    justificacion: "El artículo 117.3 de la Ley 39/2015 dispone que la ejecución del acto impugnado se entenderá suspendida si transcurrido un mes desde que la solicitud de suspensión haya tenido entrada en el registro electrónico no se ha dictado y notificado resolución expresa al respecto."
  },
  {
    id: "Q-W6-140",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 85 de la Ley 39/2015 (Vídeo T20), en los procedimientos sancionadores administrativos, si el infractor reconoce su responsabilidad o realiza el pago voluntario de la sanción pecuniaria en cualquier momento anterior a la resolución, ¿qué porcentaje mínimo de reducción del importe de la sanción pecuniaria propuesta aplicará el órgano competente?",
    opciones: [
      "Aplicará reducciones de, al menos, el veinte por ciento (20%) sobre el importe de la sanción propuesta, siendo éstos acumulables entre sí (y su efectividad estará condicionada al desistimiento o renuncia de cualquier acción o recurso en vía administrativa contra la sanción).",
      "Una reducción fija del noventa y nueve por ciento (99%) manteniendo el derecho a recurrir en alzada.",
      "No existe ninguna reducción por pronto pago ni por reconocimiento de responsabilidad en la Ley 39/2015.",
      "Un recargo del cincuenta por ciento (50%)."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 85.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Reducción Mínima del 20% Acumulable en Sanciones Pecuniarias (Art. 85.3)",
    consejoAcademia: "¡Cifra muy preguntada del **Art. 85.3 LPACAP**!: En procedimientos sancionadores con sanción pecuniaria, el reconocimiento de responsabilidad ($\ge 20\%$) y el pago voluntario antes de la resolución ($\ge 20\%$) suponen reducciones de **al menos el 20% cada una, ACUMULABLES entre sí** (pudiendo llegar al 40% o más según la normativa sectorial), condicionadas a la renuncia a recurrir en vía administrativa.",
    justificacion: "El artículo 85.3 de la Ley 39/2015 establece reducciones de al menos el 20% sobre el importe de la sanción propuesta, acumulables entre sí."
  }
];

const WAVE6_QUESTIONS_PART3 = [
  // ==========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL Y ACCIÓN EXTERIOR (Q-W6-141 a Q-W6-200)
  // Temas B3-T01 a B3-T07 (Vídeos T21 a T28)
  // ==========================================================================
  {
    id: "Q-W6-141",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 3 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), ¿qué se entiende legalmente por SEGURIDAD NACIONAL?",
    opciones: [
      "La acción del Estado dirigida a proteger la libertad, los derechos y bienestar de los ciudadanos, a garantizar la defensa de España y sus principios y valores constitucionales, así como a contribuir junto a nuestros socios y aliados a la seguridad internacional en el cumplimiento de los compromisos asumidos.",
      "El uso exclusivo de la fuerza policial dentro de los municipios españoles.",
      "La vigilancia privada de los edificios comerciales.",
      "La ausencia total de relaciones diplomáticas con otros Estados."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, de Seguridad Nacional, Art. 3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Definición Legal y los 3 Pilares de la Seguridad Nacional (Art. 3)",
    consejoAcademia: "¡Los **3 pilares de la definición de Seguridad Nacional (Art. 3 Ley 36/2015)** que destaca el profesor en el Vídeo T21!: **1) Proteger la libertad, derechos y bienestar de los ciudadanos**; **2) Garantizar la defensa de España y sus principios y valores constitucionales**; **3) Contribuir junto a nuestros socios y aliados a la seguridad internacional**.",
    justificacion: "El artículo 3 de la Ley 36/2015 define la Seguridad Nacional integrando la protección de los ciudadanos, la defensa de España y la contribución a la seguridad internacional."
  },
  {
    id: "Q-W6-142",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 4 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), la Estrategia de Seguridad Nacional es el marco político estratégico de referencia de la Política de Seguridad Nacional. ¿Por iniciativa de quién se elabora, quién la aprueba y mediante qué disposición, y con qué periodicidad se revisará?",
    opciones: [
      "Se elabora a iniciativa del Presidente del Gobierno, quien la somete a la aprobación del Gobierno mediante Real Decreto, y se revisará cada CINCO AÑOS (5 años) o cuando lo aconsejen las circunstancias cambiantes del entorno estratégico.",
      "La elabora el JEMAD y la aprueba el Senado por Ley Orgánica cada diez años.",
      "Se aprueba por Orden Ministerial del Ministro del Interior cada dos años.",
      "Se revisa obligatoriamente todos los meses de enero."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 4",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > La Estrategia de Seguridad Nacional: Real Decreto del Gobierno y Revisión Cada 5 Años (Art. 4)",
    consejoAcademia: "¡Las 3 claves del **Art. 4 Ley 36/2015**!: 1) **Iniciativa**: Presidente del Gobierno; 2) **Aprobación**: Gobierno mediante **Real Decreto** (la vigente ESN 2021 se aprobó por **RD 1150/2021, de 28 de diciembre**); 3) **Revisión**: Cada **5 AÑOS** (o antes si cambia el entorno estratégico).",
    justificacion: "El artículo 4 de la Ley 36/2015 establece que la Estrategia de Seguridad Nacional se elabora a iniciativa del Presidente del Gobierno, se aprueba por Real Decreto del Consejo de Ministros y se revisa cada cinco años."
  },
  {
    id: "Q-W6-143",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 9 y 10 de la Ley 36/2015 (Vídeo T21), ¿cuáles son los SEIS ÁMBITOS DE ESPECIAL INTERÉS de la Seguridad Nacional expresamente enumerados en el artículo 10 de la Ley?",
    opciones: [
      "La ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la seguridad del espacio aéreo y ultraterrestre, la seguridad energética y la seguridad sanitaria.",
      "El fútbol profesional, la tauromaquia, el turismo rural, la hostelería, la caza y la pesca.",
      "Únicamente la defensa terrestre y la protección civil municipal.",
      "La recaudación del IRPF y del IVA."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 10",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Los 6 Ámbitos de Especial Interés (Art. 10) vs Los 4 Componentes Fundamentales (Art. 9)",
    consejoAcademia: "¡NO CONFUNDAS EL **ART. 9** CON EL **ART. 10** DE LA LEY 36/2015 (Vídeo T21)!:\n• **Art. 9 (4 Componentes Fundamentales de la Seguridad Nacional)**: **1) Defensa Nacional**, **2) Seguridad Pública**, **3) Acción Exterior** y **4) Inteligencia**.\n• **Art. 10 (6 Ámbitos de Especial Interés)**: **1) Ciberseguridad**, **2) Seguridad económica y financiera**, **3) Seguridad marítima**, **4) Seguridad del espacio aéreo y ultraterrestre**, **5) Seguridad energética** y **6) Seguridad sanitaria**.",
    justificacion: "El artículo 10 de la Ley 36/2015 enumera como ámbitos de especial interés la ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la seguridad del espacio aéreo y ultraterrestre, la seguridad energética y la seguridad sanitaria."
  },
  {
    id: "Q-W6-144",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 15, 20 y 21 de la Ley 36/2015 (Vídeo T21), ¿quién dirige el Sistema de Seguridad Nacional, qué órgano es la Comisión Delegada del Gobierno para la Seguridad Nacional y cuál es el órgano de trabajo permanente del Consejo de Seguridad Nacional que actúa como Centro de Situación?",
    opciones: [
      "El Presidente del Gobierno dirige el Sistema de Seguridad Nacional; el Consejo de Seguridad Nacional (CSN) tiene la condición de Comisión Delegada del Gobierno para la Seguridad Nacional (presidido por el Presidente del Gobierno, salvo cuando asista S.M. el Rey, en cuyo caso lo presidirá el Rey); y el Departamento de Seguridad Nacional (DSN, integrado en el Gabinete de la Presidencia del Gobierno) es el órgano de trabajo permanente y Secretaría Técnica del CSN.",
      "El Ministro del Interior dirige el Sistema de Seguridad Nacional y la Secretaría General Técnica es su órgano de trabajo.",
      "El Consejo de Seguridad Nacional está adscrito al Senado.",
      "El Rey nunca puede asistir a las reuniones del Consejo de Seguridad Nacional."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Arts. 15, 20 y 21",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Presidente del Gobierno, Consejo de Seguridad Nacional (CSN) y Departamento de Seguridad Nacional (DSN)",
    consejoAcademia: "En el Sistema de Seguridad Nacional (**Ley 36/2015, Vídeo T21**): 1) **Consejo de Seguridad Nacional (CSN, Art. 21)**: Comisión Delegada del Gobierno presidida por el **Presidente del Gobierno** (o por **S.M. el Rey** cuando asista) y que se reúne al menos **cada bimestre (cada 2 meses)**; 2) **Departamento de Seguridad Nacional (DSN, Art. 20)**: Órgano de asesoramiento inmediato al Presidente, Secretaría Técnica y órgano de trabajo permanente del CSN.",
    justificacion: "Los artículos 15, 20 y 21 de la Ley 36/2015 regulan la dirección del Sistema por el Presidente del Gobierno, el Consejo de Seguridad Nacional y el Departamento de Seguridad Nacional."
  },
  {
    id: "Q-W6-145",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 23 y 24 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), ¿qué es una SITUACIÓN DE INTERÉS PARA LA SEGURIDAD NACIONAL y quién y cómo la declara?",
    opciones: [
      "Es aquella en la que, por la gravedad de sus efectos y la dimensión, urgencia y transversalidad de las medidas para su resolución, requiere de la coordinación reforzada de las autoridades competentes bajo la dirección del Gobierno, sin llegar a requerir necesariamente la declaración de los estados de alarma, excepción o sitio; y la declara el PRESIDENTE DEL GOBIERNO mediante REAL DECRETO.",
      "La declara el Ministro de Defensa mediante Orden Ministerial.",
      "La declara el Congreso de los Diputados por mayoría de dos tercios e implica la suspensión de los derechos fundamentales.",
      "La declara el Alcalde de cada localidad."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Arts. 23 y 24",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Declaración de la Situación de Interés para la Seguridad Nacional: Real Decreto del Presidente del Gobierno (Art. 24)",
    consejoAcademia: "¡LA PREGUNTA TRAMPA Nº 1 DE LA LEY 36/2015 (Art. 24)!:\n• La **Estrategia de Seguridad Nacional (Art. 4)** la aprueba el **GOBIERNO (Consejo de Ministros)** por Real Decreto.\n• En cambio, la **SITUACIÓN DE INTERÉS PARA LA SEGURIDAD NACIONAL (Art. 24)** la declara en exclusiva el **PRESIDENTE DEL GOBIERNO mediante Real Decreto** (e incluye la definición de la crisis, el ámbito geográfico, la duración, el nombramiento en su caso de una autoridad funcional y la determinación de los recursos humanos y materiales).",
    justificacion: "El artículo 24.1 de la Ley 36/2015 establece que la Situación de Interés para la Seguridad Nacional la declarará el Presidente del Gobierno mediante Real Decreto."
  },
  {
    id: "Q-W6-146",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 - RD 1150/2021 (Vídeo T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 1150/2021, por el que se aprueba la Estrategia de Seguridad Nacional 2021 (ESN 2021, Vídeo T22), bajo el lema 'Un proyecto compartido', ¿en cuántos capítulos se estructura la ESN 2021 y cuáles son los TRES EJES ESTRATÉGICOS (objetivos) que articulan sus líneas de acción?",
    opciones: [
      "Se estructura en 5 Capítulos, y su Capítulo 4 articula el planeamiento estratégico en TRES Ejes: 1º Proteger (vida de las personas, derechos e infraestructuras frente a amenazas y catástrofes), 2º Promover (prosperidad, bienestar ciudadano, estabilidad económica y proyección exterior de España) y 3º Participar (en la preservación de la paz y seguridad internacional y el fortalecimiento del orden multilateral junto a la UE, OTAN y ONU).",
      "Se estructura en 20 Capítulos y sus tres ejes son Atacar, Recaudar y Sancionar.",
      "Fue aprobada en el año 1995 y nunca se ha actualizado.",
      "Sólo contempla amenazas militares convencionales excluyendo pandemias y ciberataques."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (Estrategia de Seguridad Nacional 2021), Capítulo 4",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: Estrategia de Seguridad Nacional 2021) > Los 5 Capítulos y la Regla de las 3 'P': Proteger, Promover y Participar",
    consejoAcademia: "¡La regla mnemotécnica de las **3 'P' de la ESN 2021 (Vídeo T22)**!: **1) PROTEGER** + **2) PROMOVER** + **3) PARTICIPAR** (que desarrollan **33 líneas de acción** agrupadas en **15 ámbitos de actuación**). Y recuerda las **4 ediciones históricas** de la Estrategia: **2011** (primera Estrategia Española de Seguridad), **2013**, **2017** y **2021**.",
    justificacion: "El Capítulo 4 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021) estructura su planeamiento en torno a tres grandes ejes: Proteger, Promover y Participar."
  },
  {
    id: "Q-W6-147",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 - RD 1150/2021 (Vídeo T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el Capítulo 3 ('Riesgos y Amenazas') de la Estrategia de Seguridad Nacional 2021 (Vídeo T22), ¿qué fenómeno transversal destaca especialmente la ESN 2021 como multiplicador e interconector de riesgos al combinar acciones convencionales, irregulares, ciberataques, desinformación y coerción económica en la llamada 'zona gris'?",
    opciones: [
      "Las estrategias híbridas (amenazas híbridas) y las campañas de desinformación en la zona gris.",
      "Únicamente los duelos de caballería del siglo XIX.",
      "El comercio minorista local.",
      "La navegación deportiva a vela."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulo 3 (Riesgos y Amenazas)",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: Estrategia de Seguridad Nacional 2021) > Amenazas Híbridas, Zona Gris, Desinformación y Vector de Transformación Digital y Ecológica",
    consejoAcademia: "En el **Capítulo 3 de la ESN 2021 (Vídeo T22)** el profesor subraya el protagonismo de las **estrategias híbridas** en la **zona gris**, las campañas de **desinformación**, la **vulnerabilidad del ciberespacio**, las **epidemias y pandemias** y los efectos del **cambio climático**.",
    justificacion: "La Estrategia de Seguridad Nacional 2021 identifica las estrategias híbridas y la desinformación en la zona gris como uno de los principales vectores de riesgo interconectados."
  },
  {
    id: "Q-W6-148",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la publicación doctrinal conjunta PDC-01(B), 'Doctrina para el empleo de las Fuerzas Armadas' (élaborada por el CCDC del CESEDEN y aprobada por el JEMAD, Vídeo T23), ¿cuál es el rasgo definitorio del entorno operativo actual y cuáles son los CINCO DOMINIOS (ámbitos de operación) reconocidos en las operaciones multidominio?",
    opciones: [
      "Son cinco ámbitos o dominios físicos y no físicos: Terrestre, Marítimo, Aéreo (Aeroespacial), Espacial (Ultraterrestre) y Ciberespacial, a los que se superpone de forma transversal el Entorno Cognitivo y el Espectro Electromagnético.",
      "Sólo existen dos dominios: Tierra y Mar.",
      "Los cinco dominios son Infantería, Caballería, Artillería, Ingenieros y Transmisiones.",
      "El ciberespacio y el espacio exterior no se consideran ámbitos de operación militar en la PDC-01."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Ámbitos de Operación y Operaciones Multidominio",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > Los 5 Dominios Operativos (Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial) y el Ámbito Cognitivo",
    consejoAcademia: "¡Pregunta clave del **Vídeo T23 (PDC-01)**!: Los **5 ámbitos/dominios de operación** en las operaciones **Multidominio (MDO)** son: **1) Terrestre**, **2) Marítimo**, **3) Aéreo**, **4) Espacial** y **5) Ciberespacial**, actuando además sobre el **ámbito cognitivo** (percepciones, voluntades y toma de decisiones del adversario y de las audiencias) y el **entorno de la información**.",
    justificacion: "La doctrina conjunta PDC-01 establece la actuación sincronizada de las Fuerzas Armadas a través de los cinco dominios operativos (terrestre, marítimo, aéreo, espacial y ciberespacial) y en el ámbito cognitivo."
  },
  {
    id: "Q-W6-149",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la PDC-01 (Vídeo T23), las operaciones militares se desarrollan en un continuo de las relaciones internacionales ('Continuo del Conflicto') y se articulan en TRES NIVELES de planeamiento y conducción. ¿Cuáles son esos tres niveles y quién lidera en las Fuerzas Armadas españolas el nivel OPERACIONAL?",
    opciones: [
      "Los tres niveles son el Nivel Estratégico (político-estratégico y estratégico-militar, bajo el JEMAD), el Nivel Operacional (donde se planean y conducen las campañas y operaciones conjuntas para alcanzar objetivos estratégicos, liderado en España por el Comandante del Mando de Operaciones - CMOPS) y el Nivel Táctico (donde se planean y ejecutan las batallas, combates y acciones tácticas). Y el Continuo del Conflicto comprende Competición (Paz), Crisis y Conflicto Armado.",
      "Los tres niveles son Municipal, Provincial y Autonómico.",
      "El nivel táctico está por encima del nivel estratégico.",
      "El Comandante del Mando de Operaciones (CMOPS) sólo actúa en el nivel municipal."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Niveles de las Operaciones",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > Los 3 Niveles de las Operaciones (Estratégico, Operacional y Táctico) y el Continuo del Conflicto",
    consejoAcademia: "¡Cruza siempre los **3 Niveles de las Operaciones** en la **PDC-01 (Vídeo T23)**!:\n• **Nivel ESTRATÉGICO-MILITAR**: **JEMAD** (asesorado por el EMACON).\n• **Nivel OPERACIONAL**: **CMOPS (Comandante del Mando de Operaciones)** — es el eslabón que traduce los objetivos estratégicos en campañas y operaciones conjuntas.\n• **Nivel TÁCTICO**: Mandos Componentes (**MCC**) y unidades en el terreno que ejecutan combates y acciones.",
    justificacion: "La PDC-01 distingue los niveles estratégico, operacional (conducido por el CMOPS) y táctico, dentro del continuo de competición, crisis y conflicto armado."
  },
  {
    id: "Q-W6-150",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01 (Vídeo T23), ¿cuáles son las FUNCIONES CONJUNTAS (Joint Functions) que agrupan las capacidades y actividades relacionadas para ayudar a los comandantes a integrar, sincronizar y dirigir las operaciones?",
    opciones: [
      "Mando y Control (C2), Inteligencia, Maniobra, Fuegos, Sostenimiento (Logística), Protección e Información (Entorno de la Información / Comunicación Estratégica).",
      "Contabilidad, Nóminas, Vacaciones y Jardinería.",
      "Sólo existen dos funciones conjuntas: Marchar y Acampar.",
      "Las funciones conjuntas sólo se aplican en la Armada."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Funciones Conjuntas",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > Las Funciones Conjuntas en la Doctrina Militar",
    consejoAcademia: "Memoriza las **Funciones Conjuntas de la PDC-01 (Vídeo T23)**: **1) Mando y Control (C2)** (que es la función central e integradora, ejercida bajo la filosofía del **Mando Tipo Misión / Mission Command**), **2) Inteligencia**, **3) Maniobra**, **4) Fuegos** (letales y no letales), **5) Sostenimiento**, **6) Protección** y **7) Información**.",
    justificacion: "La PDC-01 articula la acción conjunta a través de las Funciones Conjuntas de Mando y Control, Inteligencia, Maniobra, Fuegos, Sostenimiento, Protección e Información."
  },
  {
    id: "Q-W6-151",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la PDC-01 (Vídeo T23), ¿en qué consiste la filosofía de mando denominada 'MANDO ORIENTADO A LA MISIÓN' (Mando Tipo Misión / Mission Command)?",
    opciones: [
      "Es el estilo de ejercicio del mando que promueve la iniciativa descentralizada de los subordinados dentro del propósito del comandante superior: el jefe indica claramente QUÉ se debe alcanzar (su propósito, efecto deseado y estado final) y POR QUÉ, otorgando al subordinado libertad de acción y los recursos necesarios para decidir CÓMO ejecutarlo, basándose en la confianza mutua y el entendimiento compartido.",
      "Consiste en la micromanipulación absoluta donde el subordinado tiene prohibido tomar ninguna decisión sin permiso escrito previo.",
      "Consiste en que cada soldado elige su propia misión sin obedecer el propósito del comandante.",
      "Sólo se aplica en desfiles protocolarios."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Mando Orientado a la Misión (Mission Command)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > Filosofía del Mando Orientado a la Misión (Qué y Por Qué vs Cómo)",
    consejoAcademia: "¡Concepto estrella de la **PDC-01 (Vídeo T23)**!: **Mando Orientado a la Misión (Mando Tipo Misión)**: El superior fija el **PROPÓSITO ('QUÉ' y 'POR QUÉ')**, y delega en el subordinado la ejecución descentralizada (**'CÓMO'**), cimentado en la **confianza mutua**, la **comprensión compartida** y la **iniciativa disciplinada**.",
    justificacion: "La PDC-01 consagra el Mando Orientado a la Misión como la filosofía fundamental del ejercicio del mando en las Fuerzas Armadas españolas."
  },
  {
    id: "Q-W6-152",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la PDC-01 (Vídeo T23), en el diseño operativo de una campaña, ¿qué es el CENTRO DE GRAVEDAD (COG - Center of Gravity) y cómo se relaciona con las Capacidades Críticas (CC), los Requerimientos Críticos (CR) y las Vulnerabilidades Críticas (CV)?",
    opciones: [
      "El Centro de Gravedad (COG) es la fuente principal de poder (física o moral) que proporciona a un actor su fuerza, libertad de acción o voluntad de combatir; se analiza identificando sus Capacidades Críticas (lo que le permite funcionar como COG), sus Requerimientos Críticos (las condiciones, recursos y medios esenciales para que esa capacidad sea operativa) y sus Vulnerabilidades Críticas (aquellos requerimientos críticos que son deficientes o vulnerables a ser neutralizados o atacados).",
      "El Centro de Gravedad es únicamente el punto geográfico central del mapa.",
      "Las Vulnerabilidades Críticas son los puntos más fuertes e invulnerables del enemigo.",
      "En el planeamiento operativo está prohibido analizar el Centro de Gravedad propio."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Elementos del Diseño Operativo (COG, CC, CR, CV)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > Centro de Gravedad (COG), Capacidades Críticas (CC), Requerimientos Críticos (CR) y Vulnerabilidades Críticas (CV)",
    consejoAcademia: "¡La cadena del **Diseño Operativo (PDC-01, Vídeo T23)** que siempre cae en el Bloque 3!: **COG (Centro de Gravedad: lo que es / fuente de poder)** $\\rightarrow$ **CC (Capacidad Crítica: lo que hace)** $\\rightarrow$ **CR (Requerimiento Crítico: lo que necesita)** $\\rightarrow$ **CV (Vulnerabilidad Crítica: su punto débil atacable)**. Y recuerda: hay que proteger el **COG propio** y atacar/neutralizar el **COG adversario** a través de sus **CV**.",
    justificacion: "La PDC-01 define el Centro de Gravedad como la fuente principal de poder físico o moral y lo desglosa en Capacidades Críticas, Requerimientos Críticos y Vulnerabilidades Críticas."
  },
  {
    id: "Q-W6-153",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según explica el profesor en el Vídeo T24 sobre la Organización de las Naciones Unidas (ONU), ¿en qué fecha y ciudad se firmó la Carta de las Naciones Unidas, en qué fecha entró en vigor (Día de las Naciones Unidas) y en qué fecha exacta ingresó ESPAÑA en la ONU?",
    opciones: [
      "La Carta de la ONU se firmó el 26 de junio de 1945 en San Francisco (al concluir la Conferencia de las Naciones Unidas sobre Organización Internacional) y entró en vigor el 24 de octubre de 1945; y España ingresó en la ONU el 14 de diciembre de 1955.",
      "La Carta se firmó en Bruselas en 1949 y España ingresó en 1986.",
      "La Carta se firmó en Helsinki en 1975 y España ingresó en 1973.",
      "España fue uno de los 51 Estados fundadores originarios en 1945."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas (1945) e Ingreso de España en la ONU (14/12/1955)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > Fechas Clave de la ONU: 26 Junio 1945 (Firma), 24 Octubre 1945 (Vigor) y 14 Diciembre 1955 (Ingreso de España)",
    consejoAcademia: "¡Cruza siempre las fechas de **España en las 4 Organizaciones del Bloque 3 (Vídeos T24, T25 y T26)**!:\n• **ONU**: Carta **1945** (26 junio firma en San Francisco / **24 octubre** entrada en vigor) $\\rightarrow$ España ingresa el **14 de diciembre de 1955**.\n• **OTAN**: Tratado de Washington **4 de abril de 1949** $\\rightarrow$ España ingresa el **30 de mayo de 1982** (miembro nº 16).\n• **OSCE**: Acta Final de Helsinki **1 de agosto de 1975** (España miembro fundador desde el inicio: 1973/1975).\n• **Unión Europea (CEE)**: Tratado de Roma **25 de marzo de 1957** $\\rightarrow$ España firma adhesión el 12 de junio de 1985 e ingresa el **1 de enero de 1986**.",
    justificacion: "La Carta de la ONU se firmó en San Francisco el 26 de junio de 1945, entró en vigor el 24 de octubre de 1945, y España fue admitida como Estado miembro el 14 de diciembre de 1955."
  },
  {
    id: "Q-W6-154",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 7 de la Carta de las Naciones Unidas (Vídeo T24), ¿cuáles son los SEIS ÓRGANOS PRINCIPALES de las Naciones Unidas y cuál de ellos es el único que NO tiene su sede en Nueva York?",
    opciones: [
      "Los seis órganos principales son: la Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social (ECOSOC), el Consejo de Administración Fiduciaria (que suspendió sus operaciones en 1994 tras la independencia de Palaos), la Corte Internacional de Justicia y la Secretaría; siendo la CORTE INTERNACIONAL DE JUSTICIA el único órgano principal con sede fuera de Nueva York, en el Palacio de la Paz de La Haya (Países Bajos).",
      "El Consejo de Seguridad tiene su sede en Ginebra y la Secretaría en París.",
      "El Fondo Monetario Internacional y la OTAN son órganos principales del artículo 7 de la Carta.",
      "El Tribunal Penal Internacional de Roma es uno de los seis órganos principales de la Carta de 1945."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 7 y Art. 92 (Corte Internacional de Justicia)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > Los 6 Órganos Principales de la ONU (Art. 7) y Sede de la CIJ en La Haya",
    consejoAcademia: "¡Las dos preguntas clásicas de los **6 Órganos Principales de la ONU (Art. 7 Carta, Vídeo T24)**!: 1) Cinco están en **Nueva York** y **UNO SOLO está en LA HAYA (Países Bajos)**: la **Corte Internacional de Justicia (CIJ)**, compuesta por **15 magistrados elegidos por 9 años** por la Asamblea General y el Consejo de Seguridad; 2) El **Consejo de Administración Fiduciaria** suspendió sus actividades el 1 de noviembre de **1994** tras la independencia de Palaos.",
    justificacion: "El artículo 7 de la Carta de la ONU establece los seis órganos principales, teniendo cinco su sede en Nueva York y la Corte Internacional de Justicia en La Haya."
  },
  {
    id: "Q-W6-155",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 23 y 27 de la Carta de las Naciones Unidas (Vídeo T24), el CONSEJO DE SEGURIDAD tiene la responsabilidad primordial de mantener la paz y la seguridad internacionales. ¿De cuántos miembros se compone, cuáles son los 5 miembros permanentes con derecho de veto y cuántos votos afirmativos se requieren para adoptar decisiones?",
    opciones: [
      "Se compone de 15 miembros: 5 permanentes (China, Estados Unidos, Federación de Rusia, Francia y Reino Unido) y 10 no permanentes elegidos por la Asamblea General por un período de 2 años (renovándose de 5 en 5 cada año, sin reelección inmediata). Las decisiones requieren el voto afirmativo de 9 miembros (9 de 15), que en todas las cuestiones de fondo (no de procedimiento) deben incluir los votos afirmativos (o no veto) de los 5 miembros permanentes.",
      "Se compone de 54 miembros elegidos por 3 años como el ECOSOC.",
      "Alemania, Japón y España son miembros permanentes con derecho de veto.",
      "Las decisiones del Consejo de Seguridad son meras recomendaciones no vinculantes y requieren unanimidad de los 15 miembros."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Arts. 23, 25 y 27",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > El Consejo de Seguridad: 15 Miembros (5 Permanentes + 10 por 2 Años) y Mayoría de 9/15 (Arts. 23-27)",
    consejoAcademia: "¡Números sagrados del **Consejo de Seguridad de la ONU (Vídeo T24)**!: **15 miembros** = **5 Permanentes (P5: EE.UU., Reino Unido, Francia, Rusia y China)** + **10 No Permanentes** elegidos por la Asamblea General (por mayoría de 2/3) para **2 AÑOS** (sin reelección inmediata). Mayoría para decidir: **9 votos afirmativos sobre 15** (y en cuestiones de fondo, sin voto en contra/veto de ninguno de los 5 permanentes). ¡Y sus decisiones son **VINCULANTES** para todos los Estados miembros (Art. 25)! (No lo confundas con el **ECOSOC**, que tiene **54 miembros por 3 años**).",
    justificacion: "Los artículos 23 y 27 de la Carta de la ONU regulan la composición de 15 miembros del Consejo de Seguridad (5 permanentes y 10 elegidos por 2 años) y la mayoría de 9 votos afirmativos."
  },
  {
    id: "Q-W6-156",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la Carta de las Naciones Unidas (Vídeo T24), ¿qué diferencia existe entre el CAPÍTULO VI, el CAPÍTULO VII y el CAPÍTULO VIII de la Carta en relación con el mantenimiento de la paz y la seguridad internacionales?",
    opciones: [
      "El Capítulo VI regula el 'Arreglo pacífico de controversias' (negociación, investigación, mediación, conciliación, arbitraje, arreglo judicial); el Capítulo VII regula la 'Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión' (medidas coercitivas sin uso de la fuerza del Art. 41 como embargos/sanciones, uso de la fuerza militar del Art. 42 y legítima defensa individual o colectiva del Art. 51); y el Capítulo VIII regula los 'Acuerdos regionales'.",
      "El Capítulo VI regula la guerra nuclear y el Capítulo VII regula las becas culturales.",
      "El derecho de legítima defensa está en el Capítulo I y está prohibido en toda circunstancia.",
      "Las Operaciones de Mantenimiento de la Paz (Cascos Azules) se denominaban antiguamente 'Capítulo Cero'."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Capítulos VI, VII (Arts. 39, 41, 42 y 51) y VIII",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > Capítulos VI (Arreglo Pacífico), VII (Acción Coercitiva y Art. 51 Legítima Defensa) y VIII (Acuerdos Regionales)",
    consejoAcademia: "¡Trilogía esencial de la **Carta de la ONU (Vídeo T24)**!:\n• **Capítulo VI**: **Arreglo pacífico** de controversias.\n• **Capítulo VII**: **Acción coercitiva** ante amenazas/quebrantamientos de la paz (**Art. 41** sanciones sin fuerza; **Art. 42** fuerza militar; **Art. 51** derecho inmanente de legítima defensa individual o colectiva, en el que se basa el Art. 5 de la OTAN).\n• **Capítulo VIII**: **Acuerdos y organismos regionales**.\n*(Nota del profesor: a las Operaciones de Mantenimiento de la Paz clásicas se las llamó doctrinalmente 'del Capítulo VI y medio' porque nacieron entre la mediación del Cap. VI y la coerción del Cap. VII)*.",
    justificacion: "Los Capítulos VI, VII y VIII de la Carta de las Naciones Unidas regulan respectivamente el arreglo pacífico de controversias, las acciones coercitivas ante amenazas a la paz y los acuerdos regionales."
  },
  {
    id: "Q-W6-157",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según explica el profesor en el Vídeo T25 sobre la Organización del Tratado del Atlántico Norte (OTAN), tras las recientes adhesiones de Finlandia (abril de 2023) y de Suecia (7 de marzo de 2024), ¿cuántos Estados aliados integran actualmente la OTAN y cuántos fueron sus miembros fundadores en el Tratado de Washington del 4 de abril de 1949?",
    opciones: [
      "Actualmente la OTAN está integrada por 32 Estados aliados (siendo Finlandia el aliado nº 31 en 2023 y Suecia el aliado nº 32 en marzo de 2024); y el Tratado de Washington fue firmado el 4 de abril de 1949 por 12 Estados fundadores.",
      "Actualmente tiene 27 Estados miembros igual que la Unión Europea.",
      "Actualmente tiene 57 Estados participantes igual que la OSCE.",
      "Actualmente tiene 30 miembros porque Finlandia y Suecia son neutrales."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte (Washington, 1949) y Ampliaciones 2023-2024 (Finlandia #31 y Suecia #32)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > De los 12 Fundadores (1949) a los 32 Aliados Actuales (Finlandia 2023 y Suecia 2024)",
    consejoAcademia: "¡PREGUNTA DE EXAMEN 100% SEGURA! No confundas nunca el número de miembros de las 4 organizaciones:\n• **Unión Europea (UE)**: **27 Estados miembros**.\n• **OTAN**: **32 Estados aliados** (12 fundadores en 1949; España fue el nº 16 el 30/05/1982; Macedonia del Norte #30 en 2020; **Finlandia #31 el 4/04/2023**; **Suecia #32 el 7/03/2024**).\n• **OSCE**: **57 Estados participantes**.\n• **ONU**: **193 Estados miembros**.",
    justificacion: "Con la incorporación de Finlandia (abril de 2023) y de Suecia (marzo de 2024), la OTAN pasó de 30 a 32 Estados aliados."
  },
  {
    id: "Q-W6-158",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 4 y 5 del Tratado del Atlántico Norte (Tratado de Washington de 1949, que cuenta con 14 artículos en total, Vídeo T25), ¿qué diferencia existe entre el ARTÍCULO 4 y el ARTÍCULO 5 del Tratado?",
    opciones: [
      "El Artículo 4 establece el mecanismo de CONSULTA entre las Partes siempre que, a juicio de cualquiera de ellas, la integridad territorial, la independencia política o la seguridad de cualquiera de las Partes fuese amenazada; mientras que el Artículo 5 consagra la cláusula de DEFENSA COLECTIVA, por la que un ataque armado contra una o más de las Partes en Europa o en América del Norte se considerará como un ataque dirigido contra todas ellas (al amparo del artículo 51 de la Carta de la ONU).",
      "El Artículo 4 regula la defensa nuclear y el Artículo 5 regula las cuotas económicas.",
      "El Artículo 5 se ha invocado veinte veces, mientras que el Artículo 4 nunca se ha utilizado.",
      "El Tratado de Washington tiene 250 artículos."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte (Washington, 1949), Arts. 4 y 5",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Los 14 Artículos del Tratado de Washington: Consultas (Art. 4) vs Defensa Colectiva (Art. 5) y Ámbito Geográfico (Art. 6)",
    consejoAcademia: "¡Cruza siempre los **Arts. 4, 5, 6 y 10 del Tratado de Washington (14 artículos, Vídeo T25)**!:\n• **Art. 4**: **CONSULTAS** políticas cuando un aliado siente amenazada su integridad, independencia o seguridad.\n• **Art. 5**: **DEFENSA COLECTIVA** ante un ataque armado (solo se ha invocado **UNA VEZ en la historia**: tras los atentados del **11 de septiembre de 2001** contra EE.UU.).\n• **Art. 6**: Delimita el **área geográfica** cubierta por el Art. 5 (Europa, América del Norte, Turquía e islas de las Partes en el Atlántico Norte al norte del **Trópico de Cáncer**).\n• **Art. 10**: Política de **Puertas Abiertas** (invitación por unanimidad a otros Estados europeos).",
    justificacion: "En el Tratado de Washington de 1949, el artículo 4 regula las consultas entre aliados ante amenazas y el artículo 5 regula el compromiso de defensa colectiva ante un ataque armado."
  },
  {
    id: "Q-W6-159",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid de junio de 2022 (Vídeo T25), ¿cuáles son las TRES TAREAS FUNDAMENTALES (Core Tasks) de la Alianza Atlántica y cómo define dicho documento a la Federación de Rusia y al terrorismo?",
    opciones: [
      "Las tres tareas fundamentales son: 1ª Disuasión y Defensa, 2ª Prevención y Gestión de Crisis, y 3ª Seguridad Cooperativa. Asimismo, el Concepto Estratégico de Madrid 2022 identifica a la Federación de Rusia como la amenaza más significativa y directa para la seguridad de los aliados, y al terrorismo en todas sus formas como la amenaza asimétrica más directa para la seguridad de los ciudadanos.",
      "Las tres tareas son Comercio Exterior, Unión Monetaria y Política Agraria Común.",
      "El Concepto Estratégico de Madrid 2022 considera a Rusia como socio estratégico de paz.",
      "La OTAN sólo tiene una tarea fundamental desde 2022."
    ],
    correcta: 0,
    referencia: "Concepto Estratégico de la OTAN (Cumbre de Madrid, 2022)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > El Concepto Estratégico de Madrid 2022 y las 3 Tareas Fundamentales de la OTAN",
    consejoAcademia: "¡Las **3 Tareas Fundamentales de la OTAN (Concepto Estratégico de Madrid 2022, Vídeo T25)**!: **1) Disuasión y Defensa**; **2) Prevención y Gestión de Crisis**; **3) Seguridad Cooperativa**. Y recuerda la novedad de Madrid 2022: **Rusia** pasa de 'socio estratégico' (Lisboa 2010) a ser calificada como **'la amenaza más significativa y directa'**, y por primera vez se menciona a **China (RPC)** como desafío sistémico.",
    justificacion: "El Concepto Estratégico de la OTAN de Madrid 2022 reafirma las tres tareas fundamentales (Disuasión y Defensa, Prevención y Gestión de Crisis, y Seguridad Cooperativa) y define a Rusia como la amenaza más significativa y directa."
  },
  {
    id: "Q-W6-160",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la estructura civil y militar de la OTAN explicada en el Vídeo T25, ¿cuál es el máximo órgano de decisión política de la Alianza, cuál es su máxima autoridad militar colegiada y cuáles son sus DOS Mandos Estratégicos (ACO y ACT) junto con sus sedes?",
    opciones: [
      "El máximo órgano de decisión política es el Consejo del Atlántico Norte (NAC, presidido por el Secretario General de la OTAN, donde las decisiones se adoptan por consenso/unanimidad); la máxima autoridad militar colegiada es el Comité Militar (MC, integrado por los JEMAD de los 32 aliados); y los dos Mandos Estratégicos son el Mando Aliado de Operaciones (ACO / SHAPE, con sede en Mons, Bélgica, al mando del SACEUR) y el Mando Aliado de Transformación (ACT, con sede en Norfolk, Virginia, EE.UU., al mando del SACT).",
      "El Mando Aliado de Operaciones (ACO) está en Norfolk y el de Transformación (ACT) está en Mons.",
      "En el Consejo del Atlántico Norte las decisiones se toman por mayoría simple.",
      "El Secretario General de la OTAN es siempre un General estadounidense en activo."
    ],
    correcta: 0,
    referencia: "Estructura Civil y Militar de la OTAN (NAC, Comité Militar, ACO-Mons y ACT-Norfolk)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > NAC, Comité Militar y los 2 Mandos Estratégicos: ACO (Mons, Bélgica) y ACT (Norfolk, EE.UU.)",
    consejoAcademia: "¡EL CRUCE DE SEDES DE LA OTAN QUE SIEMPRE PONE EL TRIBUNAL (Vídeo T25)!:\n• **Sede Política de la OTAN (NAC / Comité Militar)**: **Bruselas** (Bélgica).\n• **ACO (Allied Command Operations / SHAPE, mandado por SACEUR)**: **MONS (Bélgica)** (de quien dependen los 3 Mandos de Fuerza Conjunta JFC de **Brunssum**, **Nápoles** y **Norfolk**, y los Centros de Operaciones Aéreas como el **CAOC Torrejón** en España).\n• **ACT (Allied Command Transformation, mandado por SACT)**: **NORFOLK (Virginia, EE.UU.)**.",
    justificacion: "La estructura de mando de la OTAN se encabeza políticamente por el Consejo del Atlántico Norte (NAC), militarmente por el Comité Militar (MC) y estratégicamente por los dos Mandos Estratégicos: ACO en Mons (Bélgica) y ACT en Norfolk (EE.UU.)."
  },
  {
    id: "Q-W6-161",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "Organización para la Seguridad y la Cooperación en Europa - OSCE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según explica el profesor en el Vídeo T26 sobre la Organización para la Seguridad y la Cooperación en Europa (OSCE), ¿cuál es su origen histórico en 1975, en qué Cumbre y año pasó de denominarse Conferencia (CSCE) a Organización (OSCE), cuántos Estados participantes la integran y dónde tiene su Secretaría General?",
    opciones: [
      "Tiene su origen en la Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE) y el Acta Final de Helsinki del 1 de agosto de 1975; pasó a denominarse OSCE en la Cumbre de Budapest de 1994 (con efectos el 1 de enero de 1995); es la mayor organización regional de seguridad del mundo (al amparo del Capítulo VIII de la Carta de la ONU) con 57 Estados participantes de América del Norte, Europa y Asia Central; y su Secretaría General y el Consejo Permanente tienen su sede en VIENA (Austria).",
      "Tiene 27 Estados miembros y su sede está en Bruselas.",
      "Fue fundada en 1949 en Washington y tiene un ejército permanente propio.",
      "Sus decisiones se toman por mayoría simple y sólo abarca países de la zona euro."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki (1975), Cumbre de Budapest (1994) y Estructura de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Origen (Helsinki 1975), Paso a OSCE (Budapest 1994), 57 Estados Participantes y Sede en Viena",
    consejoAcademia: "¡Las 5 claves de la **OSCE (Vídeo T26)** para no fallar ni una!: 1) Origen: **Acta Final de Helsinki (1 de agosto de 1975)** (con el famoso Decálogo de Helsinki); 2) Carta de París para una Nueva Europa (**1990**) y cambio de nombre de CSCE a **OSCE en la Cumbre de Budapest de 1994** (efectivo 1 enero 1995); 3) **57 Estados participantes** ('de Vancouver a Vladivostok'); 4) Sede de la Secretaría y del Consejo Permanente: **VIENA (Austria)**; 5) Toma de decisiones por **CONSENSO** (y de carácter **políticamente vinculante**, no jurídico).",
    justificacion: "La OSCE nació como CSCE con el Acta Final de Helsinki de 1975, adoptó el nombre de OSCE tras la Cumbre de Budapest de 1994, cuenta con 57 Estados participantes y tiene su Secretaría en Viena."
  },
  {
    id: "Q-W6-162",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "Organización para la Seguridad y la Cooperación en Europa - OSCE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Vídeo T26, el concepto de seguridad integral y cooperativa de la OSCE se articula en TRES DIMENSIONES ('las tres cestas de Helsinki'). ¿Cuáles son exactamente esas tres dimensiones y qué instituciones autónomas destacan en la tercera dimensión?",
    opciones: [
      "Las tres dimensiones son: 1ª Dimensión Político-Militar (control de armamentos, MFCS del Documento de Viena y prevención de conflictos), 2ª Dimensión Económica y Medioambiental, y 3ª Dimensión Humana (derechos humanos, elecciones democráticas, Estado de Derecho y libertades fundamentales). Y sus tres instituciones especializadas son la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH / ODIHR, con sede en Varsovia), el Alto Comisionado para las Minorías Nacionales (ACMN, con sede en La Haya) y el Representante para la Libertad de los Medios de Comunicación (en Viena).",
      "Las tres dimensiones son Tierra, Mar y Aire.",
      "La OSCE sólo tiene una dimensión exclusivamente militar.",
      "La Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH) tiene su sede en Madrid."
    ],
    correcta: 0,
    referencia: "Las 3 Dimensiones de la Seguridad de la OSCE e Instituciones (Varsovia, La Haya, Viena)",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Las 3 Dimensiones de la OSCE y Sedes de sus Instituciones (Viena, Varsovia, La Haya, Praga y Copenhague)",
    consejoAcademia: "¡Cruza siempre las **sedes de la OSCE (Vídeo T26)**!:\n• **Secretaría, Consejo Permanente, Foro de Cooperación para la Seguridad y Representante Libertad de Medios**: **VIENA**.\n• **OIDDH / ODIHR (Oficina de Instituciones Democráticas y Derechos Humanos)**: **VARSOVIA (Polonia)**.\n• **Alto Comisionado para las Minorías Nacionales (ACMN)**: **LA HAYA (Países Bajos)**.\n• **Asamblea Parlamentaria de la OSCE (323 parlamentarios)**: **COPENHAGUE (Dinamarca)**.\n• **Centro de Documentación / Consejo Ministerial**: oficina en **PRAGA**.",
    justificacion: "La OSCE articula su enfoque integral de seguridad en tres dimensiones (Político-Militar, Económica y Medioambiental, y Humana) y cuenta con la OIDDH en Varsovia, el ACMN en La Haya y el Representante para la Libertad de los Medios en Viena."
  },
  {
    id: "Q-W6-163",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "Organización para la Seguridad y la Cooperación en Europa - OSCE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la estructura de órganos de toma de decisiones de la OSCE (Vídeo T26), ¿cómo se organiza la PRESIDENCIA EN EJERCICIO de la OSCE y qué es la 'TROIKA' de la OSCE?",
    opciones: [
      "La Presidencia en Ejercicio de la OSCE rota anualmente (por períodos de 1 año natural) entre los Estados participantes, siendo ejercida por el Ministro de Asuntos Exteriores del país designado; y cuenta con el apoyo de la Troika, integrada por el Presidente en ejercicio actual, el Presidente anterior (saliente) y el Presidente siguiente (entrante).",
      "El Presidente de la OSCE es vitalicio y siempre es un ciudadano suizo.",
      "La Presidencia de la OSCE rota cada seis meses igual que el Consejo de la Unión Europea.",
      "La Troika de la OSCE está formada por el Banco Central Europeo, el FMI y la Comisión Europea."
    ],
    correcta: 0,
    referencia: "Estructura de la OSCE: Presidencia en Ejercicio (Anual) y Troika",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Presidencia Anual en Ejercicio y la Troika de la OSCE",
    consejoAcademia: "¡NO CONFUNDAS LA PRESIDENCIA DE LA OSCE CON LA DEL CONSEJO DE LA UE!:\n• **OSCE**: Presidencia rotatoria **ANUAL (1 año)** ejercida por el Ministro de Asuntos Exteriores del país (apoyado por la **Troika**: anterior, actual y siguiente). Y su **Secretario General** es nombrado por **3 años**.\n• **Consejo de la Unión Europea**: Presidencia rotatoria **SEMESTRAL (6 meses)**.",
    justificacion: "La Presidencia en Ejercicio de la OSCE rota anualmente entre los Estados participantes y es asistida por la Troika (presidencia anterior, actual y entrante)."
  },
  {
    id: "Q-W6-164",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 13 del Tratado de la Unión Europea (TUE, tras el Tratado de Lisboa firmado en 2007 y en vigor desde el 1 de diciembre de 2009, Vídeo T26), ¿cuáles son exactamente las SIETE INSTITUCIONES de la Unión Europea?",
    opciones: [
      "El Parlamento Europeo, el Consejo Europeo, el Consejo (Consejo de la Unión Europea), la Comisión Europea, el Tribunal de Justicia de la Unión Europea, el Banco Central Europeo y el Tribunal de Cuentas.",
      "El Consejo de Europa, el Tribunal Europeo de Derechos Humanos de Estrasburgo y la OTAN.",
      "El Comité Económico y Social, el Comité de las Regiones y el Defensor del Pueblo Europeo.",
      "La Asamblea General, el ECOSOC y la Secretaría General."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Art. 13.1",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Las 7 Instituciones Oficiales de la Unión Europea (Art. 13 TUE)",
    consejoAcademia: "¡LA TRAMPA MÁS FAMOSA DEL TEMA 6 DEL BLOQUE 3 (Vídeo T26)!:\n1) Las **7 Instituciones de la UE (Art. 13 TUE)** son: **Parlamento Europeo** + **Consejo Europeo** + **Consejo (de la UE)** + **Comisión Europea** + **TJUE (Luxemburgo)** + **BCE (Fráncfort)** + **Tribunal de Cuentas (Luxemburgo)**.\n2) ¡Cuidado!: El **Consejo de Europa** (organización internacional ajena a la UE con 46 países y sede en Estrasburgo, de la que depende el Tribunal Europeo de Derechos Humanos) **NO pertenece a la Unión Europea**. Y el Comité de las Regiones y el Comité Económico y Social son órganos consultivos, no instituciones del Art. 13.",
    justificacion: "El artículo 13.1 del Tratado de la Unión Europea enumera las siete instituciones de la Unión: Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia de la UE, Banco Central Europeo y Tribunal de Cuentas."
  },
  {
    id: "Q-W6-165",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 15 y 16 del Tratado de la Unión Europea (Vídeo T26), diferencie usted el CONSEJO EUROPEO (Art. 15 TUE) del CONSEJO DE LA UNIÓN EUROPEA (Art. 16 TUE):",
    opciones: [
      "El Consejo Europeo (Art. 15) está compuesto por los Jefes de Estado o de Gobierno de los 27 Estados miembros, así como por su Presidente (elegido por 2 años y medio, renovable una vez) y el Presidente de la Comisión, y da a la Unión los impulsos políticos necesarios pero NO ejerce función legislativa alguna; en cambio, el Consejo de la Unión Europea (Art. 16) está compuesto por un representante de cada Estado miembro de rango ministerial y SÍ ejerce, conjuntamente con el Parlamento Europeo, la función legislativa y la función presupuestaria.",
      "El Consejo Europeo aprueba todas las directivas y reglamentos y está formado por Alcaldes.",
      "El Presidente del Consejo Europeo rota cada seis meses.",
      "Son exactamente el mismo órgano con dos nombres distintos."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Arts. 15 y 16",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Consejo Europeo (Jefes de Estado/Gobierno, NO legisla) vs Consejo de la UE (Ministros, SÍ legisla con el Parlamento)",
    consejoAcademia: "¡Cruza siempre estas dos instituciones de la UE (Vídeo T26)!:\n• **CONSEJO EUROPEO (Art. 15 TUE)**: **Jefes de Estado o de Gobierno** + su Presidente permanente (**2,5 años**, renovable 1 vez = máx. 5 años) + Presidente de la Comisión (y participa el Alto Representante). Define la orientación política general y **NO EJERCE FUNCIÓN LEGISLATIVA**.\n• **CONSEJO DE LA UE (Art. 16 TUE)**: **Ministros** de los 27 Estados según la materia (Presidencia rotatoria cada **6 meses**, salvo el Consejo de Asuntos Exteriores que lo preside fijo el **Alto Representante**). **SÍ EJERCE LA FUNCIÓN LEGISLATIVA Y PRESUPUESTARIA** junto con el **Parlamento Europeo**.",
    justificacion: "Los artículos 15 y 16 del TUE diferencian la composición y funciones del Consejo Europeo (órgano de impulso político sin función legislativa) y del Consejo de la Unión Europea (colegislador junto con el Parlamento Europeo)."
  },
  {
    id: "Q-W6-166",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - PCSD (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 42 del Tratado de la Unión Europea (Vídeo T26), dentro de la Política Común de Seguridad y Defensa (PCSD), ¿qué diferencia existe entre la CLÁUSULA DE ASISTENCIA MUTUA (Art. 42.7 TUE) y la CLÁUSULA DE SOLIDARIDAD (Art. 222 TFUE), y qué estructura militar permanente de la UE integran el COPS, el EUMC y el EUMS?",
    opciones: [
      "El artículo 42.7 TUE establece la cláusula de asistencia mutua en caso de que un Estado miembro sea objeto de una agresión armada en su territorio (debiendo los demás prestarle ayuda y asistencia con todos los medios a su alcance, de conformidad con el Art. 51 de la Carta de la ONU), mientras que el artículo 222 TFUE regula la cláusula de solidaridad ante ataques terroristas o catástrofes naturales o de origen humano; y la estructura político-militar de la PCSD cuenta con el Comité Político y de Seguridad (COPS), el Comité Militar de la UE (EUMC, formado por los JEMAD de los 27) y el Estado Mayor de la UE (EUMS), además de la Agencia Europea de Defensa (EDA) y la Cooperación Estructurada Permanente (PESCO).",
      "La Unión Europea prohíbe ayudarse entre Estados miembros en caso de agresión armada.",
      "El Comité Militar de la UE está formado por los Ministros de Agricultura.",
      "La PCSD depende del Banco Central Europeo."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Arts. 38, 42.7 y 46, y Art. 222 TFUE",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > PCSD: Cláusula de Asistencia Mutua (Art. 42.7 TUE), COPS, EUMC, EUMS, PESCO y Brújula Estratégica",
    consejoAcademia: "¡Las siglas y artículos de oro de la **PCSD de la Unión Europea (Vídeo T26)**!:\n• **Art. 42.7 TUE**: Cláusula de **Asistencia Mutua** ante agresión armada en el territorio de un Estado miembro (invocada por primera vez en la historia por Francia tras los atentados de París de noviembre de 2015).\n• **Art. 222 TFUE**: Cláusula de **Solidaridad** (terrorismo o catástrofes).\n• **COPS (Art. 38 TUE)**: Comité Político y de Seguridad.\n• **EUMC**: Comité Militar de la UE (los 27 JEMAD).\n• **EUMS**: Estado Mayor de la UE (dentro del Servicio Europeo de Acción Exterior - SEAE del Alto Representante).\n• **PESCO (Art. 42.6 y 46 TUE)**: Cooperación Estructurada Permanente en defensa.\n• **Brújula Estratégica (Strategic Compass, aprobada en 2022)**: Hoja de ruta operativa de la PCSD que crea la Capacidad de Despliegue Rápido de la UE de hasta **5.000 efectivos**.",
    justificacion: "El artículo 42.7 del TUE regula la cláusula de asistencia mutua ante agresión armada, el artículo 222 del TFUE la cláusula de solidaridad, y los artículos 38 a 46 del TUE las estructuras e instrumentos de la PCSD."
  },
  {
    id: "Q-W6-167",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales (Vídeos T27 y T28)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según explica el profesor en los Vídeos T27 y T28 sobre la participación de España en misiones internacionales (iniciada en 1989 con las misiones de la ONU UNAVEM I en Angola y UNTAG en Namibia), ¿bajo qué paraguas internacional (ONU, OTAN o Unión Europea) se desarrolla cada una de las siguientes misiones reales en las que participan las Fuerzas Armadas españolas?",
    opciones: [
      "Bajo bandera de NACIONES UNIDAS (ONU): UNIFIL / FINUL en Líbano (Operación Libre Hidalgo, Sector Este en Marjayoun) y la Misión de Verificación de la ONU en Colombia. Bajo bandera de la UNIÓN EUROPEA (PCSD): EUNAVFOR Atalanta en el Océano Índico / Somalia (con el Cuartel General Operacional OHQ en Rota y el Destacamento Aéreo 'Orión' en Yibuti), EUTM Somalia, EUTM República Centroafricana y EUFOR Althea en Bosnia y Herzegovina. Bajo bandera de la OTAN: Presencia Avanzada Reforzada (eFP / Flanco Este) en Letonia (Base de Adazi) y como Nación Marco del Battle Group multinacional en ESLOVAQUIA (Lešť), Policía Aérea del Báltico (BAP / Destacamentos Paznic, Viespe, Tigru, Strela, Ámbar), Operación Sea Guardian en el Mediterráneo, Misión de la OTAN en Irak (NMI) y apoyo antiaéreo en Turquía (Operación Active Fence en Incirlik).",
      "La operación Atalanta pertenece a la OTAN y la misión en Letonia pertenece a la ONU.",
      "La misión FINUL en el Líbano pertenece a la Unión Europea.",
      "La misión en Eslovaquia pertenece a la OSCE."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las Fuerzas Armadas Españolas (ONU, UE, OTAN y Coalición)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeos T27 y T28: España y Misiones Internacionales) > Mapa Maestro de Misiones por Organización (ONU vs UE vs OTAN)",
    consejoAcademia: "¡LA TABLA QUE DEBES LLEVAR TATUADA AL EXAMEN (Vídeos T27 y T28)!:\n1) **ONU**: **Líbano (UNIFIL / FINUL — Operación Libre Hidalgo**, Base Miguel de Cervantes en Marjayoun) + **Colombia** (Misión de Verificación ONU).\n2) **UNIÓN EUROPEA (UE)**: **Operación Atalanta** (Océano Índico / Cuerno de África, contra la piratería; **OHQ en la Base Naval de Rota** y **Destacamento 'Orión'** en Yibuti) + **EUTM Somalia** + **EUTM RCA** + **EUFOR Althea (Bosnia)** + **Destacamento 'Marfil'** (Senegal, apoyo aéreo).\n3) **OTAN**: **Letonia** (eFP en Adazi) + **ESLOVAQUIA** (Nación Marco del Battle Group OTAN en Lešť desde 2024, relevando a R. Checa) + **Policía Aérea del Báltico (BAP / eAP)** + **Sea Guardian** (Mediterráneo) + **Grupos Navales Permanentes (SNMG / SNMCMG)** + **Turquía** (batería Patriot en Incirlik) + **Irak (NMI)**.\n4) **Coalición Internacional**: **Operación Inherent Resolve (OIR)** en Irak contra el Daesh.",
    justificacion: "Las Fuerzas Armadas españolas despliegan bajo mandato de la ONU (FINUL en Líbano, Colombia), de la Unión Europea (EUNAVFOR Atalanta, EUTM Somalia, EUTM RCA, EUFOR Althea), de la OTAN (Letonia, Eslovaquia, Policía Aérea, Sea Guardian, SNMG, Turquía, NMI Irak) y de la Coalición Internacional en Irak."
  },
  {
    id: "Q-W6-168",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales (Vídeos T27 y T28)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los Vídeos T27 y T28, dentro de las misiones de disuasión y defensa en el Flanco Este de la OTAN, desde el año 2024 España ha asumido por primera vez el liderazgo como NACIÓN MARCO (Framework Nation) de una Agrupación Táctica Multinacional (Multinational Battlegroup) de la OTAN. ¿En qué país aliado se despliega esta misión liderada por España?",
    opciones: [
      "En ESLOVAQUIA (en el campo de maniobras de Lešť), relevando a la República Checa como Nación Marco.",
      "En Letonia (donde la Nación Marco del Battlegroup en Adazi es Canadá).",
      "En Finlandia.",
      "En Portugal."
    ],
    correcta: 0,
    referencia: "Despliegue de las FAS en el Flanco Este de la OTAN (Nación Marco en Eslovaquia 2024-2026)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeos T27 y T28: España y Misiones Internacionales) > Novedad Estrella 2024-2026: España Nación Marco de la OTAN en Eslovaquia (vs Canadá en Letonia)",
    consejoAcademia: "¡NOVEDAD DE CORTE 2024-2026 EN EL BLOQUE 3!: No confundas **Letonia** (donde España participa en Adazi desde 2017 con carros Leopardo y Pizarro, pero la **Nación Marco es CANADÁ**) con **ESLOVAQUIA (Lešť)**, donde desde julio de **2024 ESPAÑA ES LA NACIÓN MARCO (líder)** del Battlegroup multinacional de la OTAN.",
    justificacion: "Desde 2024 España ejerce como Nación Marco del Battlegroup multinacional de la OTAN desplegado en Lešť (Eslovaquia)."
  },
  {
    id: "Q-W6-169",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales (Vídeos T27 y T28)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los Vídeos T27 y T28, ¿en qué localidad española se encuentra desde marzo de 2019 (tras el Brexit) el Cuartel General Operacional (OHQ - Operational Headquarters) de la Operación EUNAVFOR ATALANTA de la Unión Europea contra la piratería en el Océano Índico?",
    opciones: [
      "En la Base Naval de Rota (Cádiz), en el ES-OHQ (Spanish Operational Headquarters).",
      "En el Cuartel General de Bétera (Valencia).",
      "En la Base Aérea de Zaragoza.",
      "En Londres (Reino Unido)."
    ],
    correcta: 0,
    referencia: "Operación EUNAVFOR Atalanta de la UE, Cuartel General Operacional en Rota (Cádiz)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeos T27 y T28: España y Misiones Internacionales) > Operación EUNAVFOR Atalanta: OHQ en la Base Naval de Rota y Destacamento Orión en Yibuti",
    consejoAcademia: "En la **Operación EUNAVFOR Atalanta** (primera operación naval de la Unión Europea, iniciada en diciembre de 2008 bajo la Resolución 1816 de la ONU): desde el 29 de marzo de **2019** España asume el mando estratégico operacional desde el **Cuartel General Operacional (OHQ) en la Base Naval de ROTA (Cádiz)**, además de aportar buques de la Armada y el **Destacamento Aéreo 'Orión'** en **Yibuti**.",
    justificacion: "Desde marzo de 2019 el Cuartel General Operacional (OHQ) de la operación EUNAVFOR Atalanta de la Unión Europea se ubica en la Base Naval de Rota (Cádiz), bajo el mando de un Almirante español."
  },
  {
    id: "Q-W6-170",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y su Participación en Misiones Internacionales (Vídeos T27 y T28)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los Vídeos T27 y T28, ¿qué nombre nacional recibe la operación española integrada en la Fuerza Provisional de las Naciones Unidas en el Líbano (UNIFIL / FINUL), en qué año comenzó el despliegue español tras la Resolución 1701 del Consejo de Seguridad de la ONU y cómo se llama la base principal española en Marjayoun?",
    opciones: [
      "Recibe el nombre de Operación 'Libre Hidalgo', comenzó en septiembre de 2006 en cumplimiento de la Resolución 1701 del Consejo de Seguridad de la ONU, y el contingente español lidera la Brigada Multinacional del Sector Este desde la Base 'Miguel de Cervantes' en las proximidades de Marjayoun.",
      "Recibe el nombre de Operación 'Atalanta' y su base está en Mogadiscio.",
      "Es una misión de la OTAN iniciada en 2022.",
      "Su base principal se llama Base 'Gran Capitán' en Besmayah."
    ],
    correcta: 0,
    referencia: "Operación Libre Hidalgo (UNIFIL / FINUL en Líbano, Resolución 1701 de la ONU, 2006)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeos T27 y T28: España y Misiones Internacionales) > Misión UNIFIL / FINUL en Líbano: Operación Libre Hidalgo, Resolución 1701 y Base Miguel de Cervantes (Marjayoun)",
    consejoAcademia: "¡Asociación fija de examen (Vídeos T27 y T28)!:\n• **Líbano (ONU - UNIFIL/FINUL, Res. 1701 desde 2006)** = **Operación 'Libre Hidalgo'** $\\rightarrow$ **Base 'Miguel de Cervantes'** (Marjayoun, Sector Este).\n• **Turquía (OTAN - Apoyo Antiaéreo desde 2015)** = **Operación 'Active Fence' (Apoyo a Turquía)** $\\rightarrow$ Batería de misiles **Patriot** del ET en la Base Aérea de **Incirlik (Adana)**.",
    justificacion: "La participación española en UNIFIL/FINUL (Líbano) se denomina Operación 'Libre Hidalgo', se inició en septiembre de 2006 bajo la Resolución 1701 de la ONU y tiene su cabecera en la Base 'Miguel de Cervantes' en Marjayoun."
  },
  {
    id: "Q-W6-171",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 16 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), ¿a través de qué órgano ejercen las Cortes Generales el control parlamentario de la Política de Seguridad Nacional y ante quién presenta el Gobierno el Informe Anual de Seguridad Nacional?",
    opciones: [
      "A través de la Comisión Mixta Congreso-Senado de Seguridad Nacional, ante la cual el Gobierno presenta anualmente el Informe Anual de Seguridad Nacional.",
      "A través del Tribunal de Cuentas únicamente.",
      "No existe control parlamentario de la Seguridad Nacional.",
      "A través de las Diputaciones Provinciales."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 14 y Disposición Adicional Quinta (Comisión Mixta de Seguridad Nacional)",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Control Parlamentario: Comisión Mixta Congreso-Senado e Informe Anual de Seguridad Nacional",
    consejoAcademia: "En la **Ley 36/2015 (Vídeo T21)**: El control parlamentario se articula en la **Comisión Mixta (Congreso-Senado) de Seguridad Nacional**, ante la que se presenta el **Informe Anual de Seguridad Nacional**.",
    justificacion: "La Ley 36/2015 atribuye a la Comisión Mixta Congreso-Senado de Seguridad Nacional el seguimiento parlamentario de la Política de Seguridad Nacional y la recepción del Informe Anual de Seguridad Nacional."
  },
  {
    id: "Q-W6-172",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 de Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 21 de la Ley 36/2015 (Vídeo T21), para el apoyo al Consejo de Seguridad Nacional en los distintos ámbitos de especial interés (ciberseguridad, seguridad marítima, seguridad energética, seguridad aeroespacial, etc.), el Consejo de Seguridad Nacional crea órganos colegiados especializados denominados:",
    opciones: [
      "Comités Especializados (como el Consejo Nacional de Ciberseguridad, el Consejo Nacional de Seguridad Marítima, el Consejo Nacional de Seguridad Aeroespacial, el Comité Especializado de Seguridad Energética, el Comité Especializado de No Proliferación o el Comité Especializado de Inmigración) y el Comité de Situación para la gestión de crisis.",
      "Juntas Municipales de Distrito.",
      "Tribunales de Excepción.",
      "Sindicatos de Seguridad."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 21.3 (Comités Especializados del Consejo de Seguridad Nacional)",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > El Comité de Situación y los Comités Especializados del CSN",
    consejoAcademia: "El **Consejo de Seguridad Nacional (CSN)** cuenta con un **Comité de Situación** único para apoyar la gestión de crisis y con **Comités Especializados** en los ámbitos de actuación de la Estrategia de Seguridad Nacional.",
    justificacion: "El artículo 21 de la Ley 36/2015 prevé la creación de Comités Especializados de apoyo al Consejo de Seguridad Nacional en los ámbitos de especial interés y para la gestión de crisis."
  },
  {
    id: "Q-W6-173",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01 (Vídeo T23), ¿cuáles son los PRINCIPIOS FUNDAMENTALES de las operaciones militares que guían al comandante en el planeamiento y ejecución de la acción conjunta?",
    opciones: [
      "Definición del objetivo (propósito claro y alcanzable), unidad de esfuerzo (y unidad de mando), libertad de acción, concentración de esfuerzo (economía de medios), sorpresa, seguridad, iniciativa (ofensiva), moral/voluntad de vencer, sencillez, flexibilidad y legitimidad/perseverancia.",
      "Improvisación, dispersión de mando, rigidez y secreto ante el propio Estado Mayor.",
      "Sólo existe un principio: el azar.",
      "Los principios de las operaciones sólo se aplican en tiempo de paz."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Principios de las Operaciones",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > Principios de las Operaciones Militares en la PDC-01",
    consejoAcademia: "En la **PDC-01 (Vídeo T23)** destaca como principio rector el **Objetivo** (toda operación militar debe dirigirse hacia un objetivo claramente definido, decisivo y alcanzable), junto con la **Unidad de Esfuerzo**, la **Libertad de Acción**, la **Seguridad** y la **Legitimidad**.",
    justificacion: "La PDC-01 recoge los principios doctrinales fundamentales que presiden el planeamiento y conducción de las operaciones militares conjuntas."
  },
  {
    id: "Q-W6-174",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme a la PDC-01 (Vídeo T23), ¿en qué consiste el 'ENFOQUE INTEGRAL' (Comprehensive Approach) en la gestión de crisis y resolución de conflictos?",
    opciones: [
      "En la coordinación y sincronización de todos los instrumentos de poder del Estado (diplomático, informativo, militar y económico - DIME) así como con otros actores gubernamentales, organizaciones internacionales, ONG y autoridades locales, dado que ningún conflicto complejo actual puede resolverse únicamente por medios militares.",
      "En emplear exclusivamente carros de combate sin coordinarse con la diplomacia ni las autoridades civiles.",
      "En transferir el mando de las Fuerzas Armadas a empresas privadas.",
      "En actuar de forma aislada sin aliados internacionales."
    ],
    correcta: 0,
    referencia: "PDC-01(B) Doctrina para el Empleo de las FAS, Enfoque Integral e Instrumentos de Poder (DIME)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01 Doctrina FAS) > El Enfoque Integral (Comprehensive Approach) y los Instrumentos de Poder (DIME)",
    consejoAcademia: "Recuerda la sigla **DIME** en la **PDC-01 (Vídeo T23)**: Los **4 Instrumentos de Poder Nacional** que se sincronizan mediante el **Enfoque Integral** son: **D**iplomático, de la **I**nformación, **M**ilitar y **E**conómico.",
    justificacion: "La PDC-01 define el Enfoque Integral como la combinación armónica y coordinada del instrumento militar con los restantes instrumentos de poder del Estado (diplomático, informativo y económico) y actores civiles."
  },
  {
    id: "Q-W6-175",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 18 y 20 de la Carta de las Naciones Unidas (Vídeo T24), en la ASAMBLEA GENERAL de la ONU están representados todos los Estados miembros (193), teniendo cada miembro un voto. ¿Por qué mayoría se adoptan las decisiones de la Asamblea General en las 'CUESTIONES IMPORTANTES' (como recomendaciones sobre paz y seguridad, elección de miembros no permanentes del Consejo de Seguridad, admisión de nuevos miembros o cuestiones presupuestarias)?",
    opciones: [
      "Por una mayoría de DOS TERCIOS (2/3) de los miembros presentes y votantes (mientras que las demás cuestiones se deciden por mayoría simple de los miembros presentes y votantes).",
      "Por unanimidad obligatoria de los 193 Estados miembros.",
      "Por el voto exclusivo de los cinco miembros permanentes.",
      "Por mayoría de tres quintos (3/5)."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 18",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > La Asamblea General: Igualdad de Voto y Mayoría de 2/3 en Cuestiones Importantes (Art. 18)",
    consejoAcademia: "¡Dato clave de la **Asamblea General de la ONU (Art. 18 Carta, Vídeo T24)**!: Cada Estado = **1 voto**; Cuestiones importantes = **Mayoría de DOS TERCIOS (2/3)** de los presentes y votantes; Resto de cuestiones = **Mayoría simple**.",
    justificacion: "El artículo 18.2 de la Carta de las Naciones Unidas dispone que las decisiones de la Asamblea General en cuestiones importantes se tomarán por el voto de una mayoría de dos tercios de los miembros presentes y votantes."
  },
  {
    id: "Q-W6-176",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 97 de la Carta de las Naciones Unidas (Vídeo T24), el SECRETARIO GENERAL de las Naciones Unidas es el más alto funcionario administrativo de la Organización. ¿Cómo es nombrado y cuál es la duración de su mandato?",
    opciones: [
      "Es nombrado por la Asamblea General a recomendación del Consejo de Seguridad, por un mandato de CINCO AÑOS (5 años) renovable.",
      "Es elegido directamente por sufragio universal mundial cada cuatro años.",
      "Es nombrado por la Corte Internacional de Justicia de La Haya por nueve años.",
      "Es nombrado únicamente por el Presidente de los Estados Unidos."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 97",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > El Secretario General de la ONU: Nombramiento y Mandato de 5 Años (Art. 97)",
    consejoAcademia: "¡Fórmula exacta del **Art. 97 de la Carta de la ONU**!: El **Secretario General de la ONU** (actualmente el portugués António Guterres) lo **recomienda el Consejo de Seguridad** (por lo que puede ser vetado por cualquiera de los 5 permanentes) y lo **nombra la Asamblea General** por un mandato de **5 AÑOS**.",
    justificacion: "El artículo 97 de la Carta de la ONU establece que el Secretario General será nombrado por la Asamblea General a recomendación del Consejo de Seguridad."
  },
  {
    id: "Q-W6-177",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la doctrina de las Operaciones de Mantenimiento de la Paz de las Naciones Unidas (OMP / Peacekeeping, Vídeo T24), ¿cuáles son los TRES PRINCIPIOS BÁSICOS ('Principios de Hammarskjöld / Doctrina Capstone') que rigen tradicionalmente el despliegue de los Cascos Azules de la ONU?",
    opciones: [
      "1º Consentimiento de las partes; 2º Imparcialidad; y 3º No uso de la fuerza salvo en legítima defensa y en defensa del mandato.",
      "1º Ocupación territorial; 2º Parcialidad hacia un bando; y 3º Uso ofensivo ilimitado de la fuerza.",
      "1º Secreto; 2º Lucro económico; y 3º Anexión.",
      "Las Operaciones de Mantenimiento de la Paz no tienen principios rectores."
    ],
    correcta: 0,
    referencia: "Doctrina Capstone de Operaciones de Mantenimiento de la Paz de la ONU (3 Principios Básicos)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > Los 3 Principios de las Operaciones de Mantenimiento de la Paz (Consentimiento, Imparcialidad y Uso de la Fuerza sólo en Legítima Defensa y Defensa del Mandato)",
    consejoAcademia: "¡Trilogía clásica del **Vídeo T24 (Cascos Azules ONU)**!: **1) Consentimiento de las partes**; **2) Imparcialidad** (no confundir con pasividad o neutralidad ante violaciones del mandato); **3) No uso de la fuerza excepto en legítima defensa y en defensa del mandato**.",
    justificacion: "Las Operaciones de Mantenimiento de la Paz de las Naciones Unidas se rigen por los tres principios fundamentales de consentimiento de las partes, imparcialidad y no uso de la fuerza excepto en legítima defensa y en defensa del mandato."
  },
  {
    id: "Q-W6-178",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el Vídeo T25 sobre la estructura de fuerzas y cuarteles generales de la OTAN en España, ¿qué dos importantes organismos operativos/doctrinales de la OTAN tienen su sede permanente en territorio español (además del CGTAD HQ NRDC-ESP de Bétera ofrecido a la Estructura de Fuerzas)?",
    opciones: [
      "El Centro Combinado de Operaciones Aéreas de Torrejón (CAOC Torrejón, en Madrid, perteneciente a la Estructura de Mandos de la OTAN para la vigilancia y policía aérea del flanco sur de Europa) y el Centro de Excelencia contra Artefactos Explosivos Improvisados (C-IED COE, en Hoyo de Manzanares, Madrid).",
      "El Cuartel General Supremo de las Potencias Aliadas en Europa (SHAPE) y el Mando Aliado de Transformación (ACT).",
      "El Mando Conjunto de Brunssum y el Mando Marítimo Aliado (MARCOM) de Northwood.",
      "La OTAN no tiene ninguna instalación ni cuartel general en España."
    ],
    correcta: 0,
    referencia: "Presencia de la Estructura de Mandos y Centros de Excelencia de la OTAN en España (CAOC Torrejón, C-IED COE y HQ NRDC-ESP Bétera)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Cuarteles Generales y Centros de la OTAN en España: CAOC Torrejón, HQ NRDC-ESP (Bétera) y C-IED COE (Hoyo de Manzanares)",
    consejoAcademia: "¡Las **3 sedes OTAN en España** que pregunta el tribunal (Vídeo T25)!:\n1) **CAOC Torrejón (Madrid)**: Centro Combinado de Operaciones Aéreas de la **Estructura de Mandos de la OTAN** (junto al CAOC Uedem en Alemania y el DACCC en Poggio Renatico, Italia).\n2) **HQ NRDC-ESP en Bétera (Valencia)**: Cuartel General Terrestre de Alta Disponibilidad de la **Estructura de Fuerzas de la OTAN**.\n3) **C-IED COE en Hoyo de Manzanares (Madrid)**: Centro de Excelencia contra Artefactos Explosivos Improvisados.",
    justificacion: "En España se ubican el CAOC Torrejón (de la Estructura de Mandos de la OTAN), el HQ NRDC-ESP en Bétera (de la Estructura de Fuerzas) y el Centro de Excelencia C-IED en Hoyo de Manzanares."
  },
  {
    id: "Q-W6-179",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 288 del Tratado de Funcionamiento de la Unión Europea (TFUE, Vídeo T26), dentro del Derecho Derivado de la Unión Europea, ¿cuál es la diferencia jurídica exacta entre un REGLAMENTO, una DIRECTIVA y una DECISIÓN?",
    opciones: [
      "El REGLAMENTO tiene alcance general y es obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro (sin necesidad de norma nacional de transposición); la DIRECTIVA obliga al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios (requiere transposición interna en plazo); y la DECISIÓN es obligatoria en todos sus elementos (y cuando designe destinatarios, sólo será obligatoria para éstos). Por su parte, las RECOMENDACIONES y los DICTÁMENES no son vinculantes.",
      "La Directiva es directamente aplicable en todos sus elementos sin transposición y el Reglamento requiere ley nacional de transposición.",
      "Las Recomendaciones y los Dictámenes son obligatorios y conllevan penas de prisión.",
      "En la Unión Europea sólo existen leyes orgánicas."
    ],
    correcta: 0,
    referencia: "Tratado de Funcionamiento de la Unión Europea (TFUE), Art. 288",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Derecho Derivado de la UE (Art. 288 TFUE): Reglamento vs Directiva vs Decisión vs Recomendaciones y Dictámenes",
    consejoAcademia: "¡LA PREGUNTA REINA DEL DERECHO DE LA UNIÓN EUROPEA (Art. 288 TFUE, Vídeo T26)!:\n• **REGLAMENTO**: Alcance general + obligatorio en todos sus elementos + **DIRECTAMENTE APLICABLE** en los 27 Estados (desde su publicación en el DOUE).\n• **DIRECTIVA**: Obliga en cuanto al **RESULTADO**, pero deja a cada Estado la elección de forma y medios (**necesita TRANSPOSICIÓN nacional**).\n• **DECISIÓN**: Obligatoria en todos sus elementos (para sus destinatarios).\n• **RECOMENDACIONES y DICTÁMENES**: **NO VINCULANTES**.",
    justificacion: "El artículo 288 del TFUE define los actos jurídicos de la Unión Europea: reglamentos, directivas, decisiones, recomendaciones y dictámenes."
  },
  {
    id: "Q-W6-180",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 14 y 17 del Tratado de la Unión Europea (Vídeo T26), ¿cuál es el número máximo de eurodiputados del PARLAMENTO EUROPEO previsto en el Tratado, dónde tiene sus sedes de trabajo y quién ostenta el cuasi-monopolio de la INICIATIVA LEGISLATIVA y el papel de 'guardiana de los Tratados'?",
    opciones: [
      "El Parlamento Europeo no excederá de 750 miembros más el Presidente (751 máximo constitucional en el TUE; 720 eurodiputados en la legislatura 2024-2029, correspondiendo 61 a España), elegidos por sufragio universal directo por 5 años, con sede de sesiones plenarias en Estrasburgo (comisiones en Bruselas y Secretaría en Luxemburgo); y la COMISIÓN EUROPEA (mandato de 5 años, 1 comisario por cada Estado miembro = 27) es la institución que promueve el interés general de la Unión, ostenta por regla general la iniciativa legislativa y vela por la aplicación de los Tratados ('guardiana de los Tratados').",
      "El Parlamento Europeo tiene 350 miembros elegidos por 4 años con sede única en Madrid.",
      "La iniciativa legislativa en la Unión Europea corresponde al Tribunal de Cuentas.",
      "La Comisión Europea está formada por 15 magistrados elegidos por 9 años."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Arts. 14 y 17",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Parlamento Europeo (Art. 14 TUE: máx. 750 + Presidente, 5 años) y Comisión Europea (Art. 17 TUE: Iniciativa Legislativa y Guardiana de los Tratados)",
    consejoAcademia: "En las Instituciones de la **UE (Vídeo T26)** recuerda: **Parlamento Europeo** = mandato **5 años**, tope del Art. 14.2 TUE de **750 más el Presidente (751)** (actualmente **720 escaños**, **61 de España**), plenos en **Estrasburgo**. **Comisión Europea** = mandato **5 años**, **27 comisarios** (incluido su Presidente y el Alto Representante, que es uno de los Vicepresidentes de la Comisión), sede en **Bruselas**, tiene la **iniciativa legislativa** y es la **guardiana de los Tratados**.",
    justificacion: "Los artículos 14 y 17 del TUE regulan la composición y mandato de 5 años del Parlamento Europeo y de la Comisión Europea."
  },
  {
    id: "Q-W6-181",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Repaso Transversal Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el repaso transversal de plazos constitucionales del Vídeo T28 (artículos 99 y 115 de la Constitución Española), ¿en qué dos supuestos NO puede el Presidente del Gobierno proponer la disolución de las Cámaras, y qué plazo debe transcurrir desde una disolución anterior para poder acordar una nueva disolución discrecional?",
    opciones: [
      "No podrá presentarse propuesta de disolución cuando esté en trámite una moción de censura (Art. 115.2) ni mientras estén declarados algunos de los estados previstos en el artículo 116 (alarma, excepción y sitio, Art. 116.5); y no procederá nueva disolución antes de que transcurra UN AÑO (1 año) desde la anterior, salvo lo dispuesto en el artículo 99, apartado 5 (disolución automática tras 2 meses sin investidura).",
      "El Presidente del Gobierno puede disolver el Congreso en mitad de una moción de censura para evitar que la voten.",
      "Pueden disolverse las Cámaras cada quince días sin ningún límite.",
      "Durante el estado de alarma queda disuelto automáticamente el Congreso de los Diputados."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 99.5, 115.2, 115.3 y 116.5",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T2 y T28: CE 1978) > Límites a la Disolución de las Cámaras: Moción de Censura, Estados del Art. 116 y Plazo de 1 Año (Art. 115)",
    consejoAcademia: "¡Las **3 prohibiciones de disolución del Congreso/Senado (Arts. 115 y 116.5 CE)**!: 1) Prohibido disolver si está en trámite una **moción de censura**; 2) Prohibido disolver mientras esté vigente el **estado de alarma, excepción o sitio**; 3) Prohibida una nueva disolución antes de **1 AÑO** desde la anterior, **SALVO la disolución automática del Art. 99.5** (cuando pasan 2 meses desde la primera votación de investidura sin elegir Presidente).",
    justificacion: "Los artículos 115 y 116.5 de la Constitución establecen los límites temporales y circunstanciales a la facultad de disolución de las Cámaras."
  },
  {
    id: "Q-W6-182",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española 1978 - Repaso Transversal Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 116 de la Constitución Española y a la Ley Orgánica 4/1981 (Vídeos T1, T2 y T28), compare usted quién declara y por cuánto tiempo los estados de ALARMA, de EXCEPCIÓN y de SITIO:",
    opciones: [
      "El estado de ALARMA lo declara el Gobierno mediante Decreto acordado en Consejo de Ministros por un plazo máximo de 15 días, dando cuenta al Congreso, sin cuya autorización no podrá ser prorrogado. El estado de EXCEPCIÓN lo declara el Gobierno mediante Decreto acordado en Consejo de Ministros, PREVIA autorización del Congreso de los Diputados, sin que pueda exceder de 30 días, prorrogables por otro plazo igual (30 días más). Y el estado de SITIO lo declara la mayoría ABSOLUTA del Congreso de los Diputados, a propuesta exclusiva del Gobierno, determinando el Congreso su ámbito territorial, duración y condiciones.",
      "Los tres estados los declara el Rey por un plazo fijo de seis meses.",
      "El estado de alarma requiere autorización previa del Senado y dura 30 días.",
      "El estado de excepción lo declara el Congreso y el estado de sitio lo declara el Gobierno por 15 días."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 116",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T2 y T28: CE 1978) > Tabla Maestra del Art. 116 CE: Alarma (15 días), Excepción (30 + 30 días) y Sitio (Mayoría Absoluta del Congreso)",
    consejoAcademia: "¡EL CUADRO DEL **ART. 116 CE** QUE NO PUEDES FALLAR JAMÁS!:\n• **ALARMA**: Declara el **Gobierno** (dando cuenta al Congreso; prórroga con autorización del Congreso) $\\rightarrow$ **Máx. 15 DÍAS**.\n• **EXCEPCIÓN**: Declara el **Gobierno PREVIA autorización del Congreso** $\\rightarrow$ **Máx. 30 DÍAS** (+ prórroga de otros **30 días**).\n• **SITIO**: Declara el **CONGRESO DE LOS DIPUTADOS por MAYORÍA ABSOLUTA**, a propuesta exclusiva del Gobierno $\\rightarrow$ **Duración que fije el Congreso**.",
    justificacion: "El artículo 116 de la Constitución regula la competencia y los plazos de declaración de los estados de alarma (15 días), excepción (30 días prorrogables por otros 30) y sitio (declarado por mayoría absoluta del Congreso)."
  },
  {
    id: "Q-W6-183",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 de la Defensa Nacional - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 12 de la Ley Orgánica 5/2005, de la Defensa Nacional (Vídeos T3 y T28), el Jefe de Estado Mayor de la Defensa (JEMAD), bajo la dependencia del Ministro de Defensa, ostenta la categoría de:",
    opciones: [
      "General de Ejército, Almirante General o General del Aire (según el Ejército de pertenencia), tiene rango de Secretario de Estado, es nombrado por Real Decreto acordado en Consejo de Ministros a propuesta del Presidente del Gobierno (oído el Ministro de Defensa) y ejerce el mando de la estructura operativa de las Fuerzas Armadas.",
      "Teniente General con nivel de Subdirector General.",
      "Ministro sin cartera elegido por el Senado.",
      "General de Brigada nombrado por el Subsecretario."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 12 y Real Decreto 521/2020",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeos T3 y T7: LO 5/2005 y EMAD) > Estatuto y Nombramiento del JEMAD (Art. 12 LO 5/2005)",
    consejoAcademia: "¡Detalle muy preguntado sobre el **nombramiento del JEMAD vs JEME/AJEMA/JEMA**!: Al **JEMAD (Art. 12 LO 5/2005)** lo nombra el Rey por Real Decreto del Consejo de Ministros **a propuesta del PRESIDENTE DEL GOBIERNO** (oído el Ministro de Defensa). En cambio, a los **JEME, AJEMA y JEMA (Art. 13 LO 5/2005)** se les nombra por Real Decreto del Consejo de Ministros **a propuesta del MINISTRO DE DEFENSA** (oído el JEMAD).",
    justificacion: "El artículo 12 de la LO 5/2005 regula el nombramiento del JEMAD a propuesta del Presidente del Gobierno y sus atribuciones al frente de la estructura operativa."
  },
  {
    id: "Q-W6-184",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 9.2 de la Ley 40/2015, de Régimen Jurídico del Sector Público (Vídeos T4 y T28), ¿qué competencias NO podrán ser objeto de DELEGACIÓN en ningún caso?",
    opciones: [
      "Los asuntos que se refieran a relaciones con la Jefatura del Estado, la Presidencia del Gobierno de la Nación, las Cortes Generales, las Presidencias de los Consejos de Gobierno de las Comunidades Autónomas y las Asambleas Legislativas de las Comunidades Autónomas; la adopción de disposiciones de carácter general; la resolución de recursos en los órganos administrativos que hayan dictado los actos objeto de recurso; y las materias en que así se determine por norma con rango de Ley (además de no poder delegarse las competencias que ya se ejerzan por delegación, salvo autorización expresa de una Ley).",
      "No se puede delegar nunca la contratación menor ni la concesión de licencias.",
      "La adopción de disposiciones de carácter general (reglamentos) sí puede delegarse libremente en cualquier negociado.",
      "No existe ninguna prohibición de delegación en la Ley 40/2015."
    ],
    correcta: 0,
    referencia: "Ley 40/2015 (LRJSP), Art. 9.2 y 9.5",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4: Ley 40/2015 LRJSP) > Materias Indelegables del Art. 9.2 y Prohibición de Subdelegación (Art. 9.5)",
    consejoAcademia: "¡Las **4 materias INDELEGABLES del Art. 9.2 Ley 40/2015** + la regla del **Art. 9.5**!: 1) Relaciones con Jefatura del Estado, Presidencia del Gobierno, Cortes y Presidencias/Asambleas de CCAA; 2) Adopción de **disposiciones de carácter general** (reglamentos); 3) Resolución de **recursos en los mismos órganos que dictaron el acto recurrido**; 4) Materias prohibidas por **norma con rango de Ley**; 5) Prohibido **subdelegar** competencias que se ejerzan por delegación (salvo autorización expresa de una Ley).",
    justificacion: "Los apartados 2 y 5 del artículo 9 de la Ley 40/2015 establecen las competencias que en ningún caso pueden ser objeto de delegación."
  },
  {
    id: "Q-W6-185",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Estructura del Ministerio de Defensa - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 205/2024 (Vídeos T5, T6 y T28), ¿qué órgano del Ministerio de Defensa es el responsable del planeamiento y desarrollo de la política de enseñanza del personal militar, del reclutamiento y del régimen general de los Centros Docentes Militares?",
    opciones: [
      "La Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM), dependiente de la Subsecretaría de Defensa (SUBDEF).",
      "La Dirección General de Armamento y Material (DGAM), dependiente de la SEDEF.",
      "La Dirección General de Política de Defensa (DIGENPOL), dependiente de la SEGENPOL.",
      "La Dirección General de Infraestructura (DIGENIN)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 10 (DIGEREM)",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T6: RD 205/2024 MINISDEF II) > Competencias de la DIGEREM (Enseñanza Militar, Reclutamiento y RED)",
    consejoAcademia: "En la **SUBDEF (RD 205/2024)**: **DIGENPER** gestiona el personal militar y civil en activo/reserva y la acción social/igualdad; mientras que **DIGEREM** gestiona la **enseñanza militar**, el **reclutamiento/acceso** (incluida esta oposición de Permanencia a través de sus órganos de selección) y los **Reservistas de Especial Disponibilidad (RED)**.",
    justificacion: "El artículo 10 del Real Decreto 205/2024 atribuye a la DIGEREM el planeamiento y desarrollo de la política de enseñanza militar y de reclutamiento."
  },
  {
    id: "Q-W6-186",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 y Organización de los Ejércitos - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 521/2020 y la Instrucción 65/2025 del EMAD (Vídeos T7 y T28), ¿a qué órgano del Estado Mayor de la Defensa corresponde el planeamiento, la conducción y el seguimiento de las operaciones militares para asegurar la eficacia operativa de las Fuerzas Armadas?",
    opciones: [
      "Al Mando de Operaciones (MOPS), bajo el mando del Comandante del Mando de Operaciones (CMOPS).",
      "Al Centro Superior de Estudios de la Defensa Nacional (CESEDEN).",
      "A la Jefatura de Apoyo Logístico de la Armada (JAL).",
      "Al Instituto de Historia y Cultura Militar (IHCM)."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 13 (Mando de Operaciones - MOPS)",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T7: Organización del EMAD) > El Mando de Operaciones (MOPS) como Órgano de Nivel Operacional",
    consejoAcademia: "En el **EMAD (Vídeo T7)**: **EMACON** = nivel estratégico-militar (auxilia al JEMAD); **MOPS** (en la Base de Retamares, Pozuelo de Alarcón) = nivel **operacional** (planea y conduce todas las operaciones permanentes y en el exterior).",
    justificacion: "El artículo 13 del Real Decreto 521/2020 establece que el Mando de Operaciones (MOPS) es el órgano del EMAD responsable del planeamiento operacional, la conducción y el seguimiento de las operaciones militares."
  },
  {
    id: "Q-W6-187",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Instrucción 14/2021 Organización del Ejército de Tierra - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeos T8 y T28), ¿en cuál de las dos Divisiones de la Fuerza Terrestre (FUTER) se encuadran la Brigada 'Almogávares' VI de Paracaidistas (BRIPAC), el Mando de Operaciones Especiales 'Órdenes Militares' (MOE), las Fuerzas Aeromóviles del Ejército de Tierra (FAMET) y el Mando de Tropas de Montaña 'Roncesvalles' (MTM)?",
    opciones: [
      "En la División 'San Marcial' (con Cuartel General en Burgos).",
      "En la División 'Castillejos' (con Cuartel General en Huesca).",
      "En el Mando de Canarias (MCANA).",
      "En la Inspección General del Ejército (IGE)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Art. 14 (División 'San Marcial')",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Organización del ET - Inst. 14/2021) > Unidades de la División 'San Marcial' (BRIPAC, MOE, FAMET, MTM y ROI 1)",
    consejoAcademia: "¡Truco mnemotécnico de la **División 'San Marcial' (Burgos)** en el Vídeo T8!: Es la División de las **tropas de alta especialización** (saltan en paracaídas = **BRIPAC VI**; operaciones especiales = **MOE**; vuelan en helicópteros = **FAMET**; escalan montañas = **Mando de Tropas de Montaña**; operaciones de información = **ROI 1**). Mientras que las Brigadas polivalentes de combate (**Aragón I, Legión II, Galicia VII, Guzmán el Bueno X y Guadarrama XII**) están en la **División 'Castillejos' (Huesca)**.",
    justificacion: "La Instrucción 14/2021 del JEME encuadra en la División 'San Marcial' a la BRIPAC VI, el MOE, las FAMET, el Mando de Tropas de Montaña y el Regimiento de Operaciones de Información nº 1."
  },
  {
    id: "Q-W6-188",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 y Ley 39/2007 - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 10 de la Ley 8/2006, de Tropa y Marinería (Vídeos T11 y T28), ¿cuáles son las causas de RESOLUCIÓN del Compromiso de Larga Duración (CLD), y en qué supuesto el militar que resuelve voluntariamente su compromiso debe preavisar con TRES MESES (3 meses) de antelación?",
    opciones: [
      "Entre las causas de resolución del CLD están la petición expresa del interesado con un preaviso de TRES MESES (siempre que haya cumplido al menos 3 años desde la firma del CLD o las condiciones de tiempo mínimo de servicios tras cursos), la adquisición de la condición de militar de carrera o de complemento, el ingreso en Cuerpos de Seguridad o como funcionario/laboral de las AAPP, la insuficiencia de facultades profesionales o de condiciones psicofísicas, la imposición de sanción disciplinaria de resolución de compromiso por falta muy grave y la condena por delito doloso.",
      "El Compromiso de Larga Duración no puede resolverse nunca a petición propia del militar.",
      "El preaviso voluntario es de veinticuatro horas.",
      "Cumplir 30 años de edad extingue automáticamente el Compromiso de Larga Duración."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Art. 10.2 (Causas de resolución del Compromiso de Larga Duración)",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 8/2006 Tropa y Marinería) > Resolución del Compromiso de Larga Duración y Preaviso de 3 Meses (Art. 10)",
    consejoAcademia: "En el **Art. 10.2.a de la Ley 8/2006 (Vídeo T11)**: La baja/resolución voluntaria a petición expresa del interesado en el **Compromiso de Larga Duración (CLD)** exige un **preaviso de 3 MESES**.",
    justificacion: "El artículo 10.2 de la Ley 8/2006 regula las causas de resolución del compromiso de larga duración, incluyendo la petición expresa del interesado con un preaviso de tres meses."
  },
  {
    id: "Q-W6-189",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "RD 96/2009 Reales Ordenanzas para las FAS - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 35 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009, Vídeos T13 y T28), ¿por qué conducto deberá dirigirse el militar para asuntos relativos al servicio, y en qué caso podrá salvar dicho conducto reglamentario?",
    opciones: [
      "Para asuntos del servicio se relacionará a través del conducto reglamentario (siguiendo los escalones jerárquicos de su cadena de mando), salvo en los casos en que esté establecido uno específico para presentar quejas, iniciativas o denuncias de acoso (o cuando la queja se refiera a su inmediato superior).",
      "El conducto reglamentario no existe en las Reales Ordenanzas.",
      "Todo soldado debe escribir siempre directamente al Presidente del Gobierno para pedir el día libre.",
      "Está prohibido dirigirse a los superiores por escrito."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (Reales Ordenanzas para las FAS), Art. 35 y Art. 41",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: RD 96/2009 Reales Ordenanzas) > Conducto Reglamentario y Excepciones Legales",
    consejoAcademia: "En las **Reales Ordenanzas (RD 96/2009)** la regla general para todo asunto del servicio es el **conducto reglamentario**, con las excepciones expresamente previstas en las normas (como el **RD 176/2014 de Iniciativas y Quejas** tras 1 mes / 6 meses o el **Protocolo frente al Acoso ante la UPA**).",
    justificacion: "Las Reales Ordenanzas establecen el conducto reglamentario para las relaciones relativas al servicio, sin perjuicio de los cauces específicos regulados para quejas o denuncias de acoso."
  },
  {
    id: "Q-W6-190",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes de los Miembros de las FAS - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 40 de la Ley Orgánica 9/2011 (Vídeos T14 y T28), ¿quiénes NO pueden ejercer funciones de representación en una asociación profesional ni formar parte de sus órganos directivos aunque estén afiliados?",
    opciones: [
      "Los militares que se encuentren destinados en determinados órganos superiores o directivos o unidades de especial responsabilidad cuando así se establezca reglamentariamente por razón de conflicto de intereses, y los militares retirados (que pueden estar afiliados pero con las limitaciones de representación activa previstas en la ley); además de tener todas las asociaciones prohibido el ejercicio del derecho de huelga, la negociación colectiva sindical y la realización de actividades políticas.",
      "Los Cabos y Soldados tienen prohibido formar parte de las juntas directivas de las asociaciones de Tropa.",
      "Sólo los civiles pueden dirigir asociaciones profesionales militares.",
      "Las asociaciones profesionales pueden presentarse como partidos políticos a las elecciones generales."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 34, 40 y 41",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Régimen y Prohibiciones de las Asociaciones Profesionales (Arts. 33-41)",
    consejoAcademia: "Recuerda en el **Art. 41 de la LO 9/2011**: Están **excluidas del ámbito de actuación de las asociaciones profesionales** el llamamiento o ejercicio de la **huelga**, las acciones sustitutivas o similares, la **negociación colectiva** y las medidas de **conflicto colectivo**.",
    justificacion: "Los artículos 34 a 41 de la LO 9/2011 regulan el régimen de las asociaciones profesionales y excluyen expresamente la huelga, la negociación colectiva y el conflicto colectivo."
  },
  {
    id: "Q-W6-191",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el repaso comparativo del Vídeo T28 sobre la Ley Orgánica 8/2014 (artículo 50), una vez notificado el PLIEGO DE CARGOS al expedientado en un procedimiento disciplinario por falta grave o muy grave, y una vez notificada posteriormente la PROPUESTA DE RESOLUCIÓN del Instructor, ¿de qué plazo dispone el interesado en cada uno de esos dos trámites para formular alegaciones y proponer pruebas?",
    opciones: [
      "Dispone de un plazo de DIEZ DÍAS (10 días) para contestar al pliego de cargos y proponer las pruebas que estime convenientes, y de otro plazo de DIEZ DÍAS (10 días) para alegar cuanto considere oportuno ante la propuesta de resolución del Instructor.",
      "Dispone de 24 horas en ambos trámites.",
      "Dispone de tres meses para el pliego de cargos y de seis meses para la propuesta de resolución.",
      "En el procedimiento por falta grave no existe pliego de cargos ni propuesta de resolución."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 56 y 58",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15 y T28: LO 8/2014 Régimen Disciplinario) > Plazo de 10 Días en el Pliego de Cargos (Art. 56) y 10 Días en la Propuesta de Resolución (Art. 58)",
    consejoAcademia: "¡Doble plazo de **10 DÍAS** en el expediente disciplinario por falta grave/muy grave (**LO 8/2014**)!:\n• Contestación al **Pliego de Cargos y proposición de prueba (Art. 56)**: **10 DÍAS**.\n• Alegaciones a la **Propuesta de Resolución del Instructor (Art. 58)**: **10 DÍAS**.",
    justificacion: "Los artículos 56 y 58 de la LO 8/2014 conceden al expedientado un plazo de diez días para contestar al pliego de cargos y de diez días para formular alegaciones a la propuesta de resolución."
  },
  {
    id: "Q-W6-192",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 59.2 de la Ley Orgánica 8/2014 (Vídeos T15 y T28), cuando la propuesta de resolución del expediente disciplinario por falta muy grave consista en la imposición de la sanción de SEPARACIÓN DEL SERVICIO, ¿qué órgano colegiado deberá ser oído preceptivamente antes de que el Ministro de Defensa dicte resolución?",
    opciones: [
      "El Consejo Superior del Ejército respectivo (o la Junta Superior del Cuerpo Común al que pertenezca el expedientado).",
      "El Consejo de Estado en Pleno.",
      "El Observatorio Militar para la Igualdad.",
      "La Junta Electoral Central."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 59.2",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Informe Preceptivo del Consejo Superior antes de imponer la Separación del Servicio (Art. 59.2)",
    consejoAcademia: "¡Detalle de oro del **Art. 59.2 LO 8/2014**!: Para imponer la **Separación del Servicio** (a un militar de carrera, como un Permanente), antes de que resuelva el Ministro de Defensa es **preceptivo oír al Consejo Superior del Ejército respectivo** (o Junta Superior del Cuerpo Común). *(Ojo: además siempre es preceptivo el informe del Asesor Jurídico en todo expediente por falta grave o muy grave)*.",
    justificacion: "El artículo 59.2 de la LO 8/2014 exige oír preceptivamente al Consejo Superior del Ejército o Junta Superior del Cuerpo Común correspondiente antes de imponer la sanción de separación del servicio."
  },
  {
    id: "Q-W6-193",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 4 del Real Decreto 176/2014 (Vídeos T16 y T28), ¿qué funciones realiza el militar de mayor empleo y antigüedad de cada categoría (Oficiales, Suboficiales y Tropa y Marinería) designado en cada Unidad en relación con las iniciativas y quejas?",
    opciones: [
      "Recibir las iniciativas y quejas que le presenten los miembros de su misma categoría, acusar recibo de las mismas, trasladarlas al Jefe de la Unidad y mantener informado al interesado del estado de su tramitación (sin perjuicio de que el militar pueda presentar siempre su queja directamente ante el Jefe de la Unidad si así lo prefiere).",
      "Resolver él mismo las quejas y anular las órdenes del Coronel Jefe del Regimiento.",
      "Imponer sanciones de arresto a quienes presenten quejas.",
      "Representar sindicalmente a la unidad en huelgas."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Art. 4 y Art. 11",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > Funciones del Militar Designado por Categoría (Art. 4)",
    consejoAcademia: "En el **RD 176/2014 (Art. 4 y 11)**: El militar de mayor empleo y antigüedad de cada categoría **recibe, acusa recibo y traslada al Jefe de Unidad** (pero **NO resuelve**, porque quien resuelve en primera instancia es el **Jefe de la Unidad**). Y acudir a través de él es voluntario: el interesado también puede presentarla **directamente al Jefe de la Unidad**.",
    justificacion: "Los artículos 4 y 11 del Real Decreto 176/2014 regulan las funciones de recepción, acuse de recibo y traslado del militar designado por cada categoría en la unidad."
  },
  {
    id: "Q-W6-194",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo Acoso - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al repaso comparativo del Vídeo T28, distinga usted sin confundirlos los TRES órganos colegiados/consultivos de ámbito social y de personal en las Fuerzas Armadas: 1) COPERFAS, 2) Observatorio de la Vida Militar y 3) Observatorio Militar para la Igualdad:",
    opciones: [
      "1) COPERFAS (LO 9/2011, Art. 47): órgano de participación de las asociaciones profesionales del RAPFAS (umbrales 1%, 3%, 1,5%), presidido por el Ministro de Defensa (o SUBDEF). 2) Observatorio de la Vida Militar (LO 9/2011, Art. 54): órgano colegiado asesor y consultivo adscrito a las CORTES GENERALES, compuesto por 9 personalidades (5 elegidas por el Congreso y 4 por el Senado) por 5 años. 3) Observatorio Militar para la Igualdad (Orden DEF/1113/2021): órgano colegiado del Ministerio de Defensa para promover la igualdad efectiva entre mujeres y hombres en las FAS, presidido por la persona titular de la SUBSECRETARÍA DE DEFENSA (SUBDEF).",
      "Los tres están adscritos al Senado y presididos por el JEMAD.",
      "El Observatorio de la Vida Militar depende de la Subsecretaría de Defensa y el Observatorio Militar para la Igualdad depende de las Cortes Generales.",
      "El COPERFAS tiene 9 miembros elegidos por el Congreso y el Senado."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011 (Arts. 47 y 54) y Orden DEF/1113/2021 (Art. 3)",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeos T14, T17 y T28) > Triple Cruce de Examen: COPERFAS vs Observatorio de la Vida Militar vs Observatorio Militar para la Igualdad",
    consejoAcademia: "¡EL TRIPLE CRUCE QUE SIEMPRE INTENTA LIAR EL TRIBUNAL (Vídeo T28)!:\n• **COPERFAS** = Asociaciones profesionales (1% / 3% / 1,5%), preside **Ministro de Defensa / SUBDEF**.\n• **Observatorio de la VIDA MILITAR** = Adscrito a las **CORTES GENERALES**, **9 miembros** (**5 Congreso + 4 Senado**) por **5 años**.\n• **Observatorio Militar para la IGUALDAD** = Órgano del **MINISDEF**, preside **SUBDEF (Subsecretaría de Defensa)**.",
    justificacion: "La LO 9/2011 regula el COPERFAS (Art. 47) y el Observatorio de la Vida Militar adscrito a las Cortes Generales (Art. 54), mientras que la Orden DEF/1113/2021 regula el Observatorio Militar para la Igualdad presidido por la Subsecretaría de Defensa."
  },
  {
    id: "Q-W6-195",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP - Repaso Transversal Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 30.4 de la Ley 39/2015 (Vídeos T19 y T28), si un plazo administrativo se fija en MESES o AÑOS, ¿a partir de qué día se computará y qué día concluye el plazo?",
    opciones: [
      "Se computarán a partir del día siguiente a aquel en que tenga lugar la notificación o publicación del acto de que se trate (o desde el siguiente a aquel en que se produzca la estimación o desestimación por silencio administrativo), y el plazo concluirá el mismo día en que se produjo la notificación, publicación o silencio en el mes o el año de vencimiento (regla de fecha a fecha); y si en el mes de vencimiento no hubiera día equivalente a aquel en que comienza el cómputo, se entenderá que el plazo expira el último día del mes.",
      "Los plazos en meses se cuentan siempre como bloques de treinta días hábiles.",
      "El plazo concluye un día después del día en que se produjo la notificación.",
      "En los plazos por meses se descuentan los domingos."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 30.4",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeos T19 y T28: Ley 39/2015 LPACAP) > Cómputo de Plazos por Meses o Años: Regla de Fecha a Fecha (Art. 30.4)",
    consejoAcademia: "¡La famosa **Regla de Fecha a Fecha del Art. 30.4 LPACAP**!: Aunque el plazo en meses empieza a correr al día siguiente de la notificación, **vence el MISMO DÍA (mismo número de fecha) en que se produjo la notificación** en el mes o año de vencimiento (ej. notificado el 15 de marzo con plazo de 1 mes $\\rightarrow$ el último día del plazo es el **15 de abril**, o el primer día hábil siguiente si el 15 de abril fuera inhábil).",
    justificacion: "El artículo 30.4 de la Ley 39/2015 establece que en los plazos fijados en meses o años el plazo concluirá el mismo día en que se produjo la notificación, publicación o silencio en el mes o el año de vencimiento."
  },
  {
    id: "Q-W6-196",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 y ESN 2021 - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 27 de la Ley 36/2015, de Seguridad Nacional (Vídeos T21 y T28), ¿en qué consiste la Contribución de Recursos a la Seguridad Nacional y cómo se articula el Catálogo de Recursos de la Seguridad Nacional?",
    opciones: [
      "Consiste en la aportación de recursos humanos y materiales, tanto públicos como privados, cuando se declare una Situación de Interés para la Seguridad Nacional; organizándose un Catálogo de Recursos de la Seguridad Nacional (coordinado por el Consejo de Seguridad Nacional a través del DSN con la participación de los Ministerios y las Comunidades Autónomas), y generando derecho a indemnización aquellos perjuicios patrimoniales directos derivados de la requisa o aportación de bienes privados.",
      "Consiste en un impuesto municipal obligatorio sobre los vehículos.",
      "Los recursos privados nunca pueden ser requeridos en una situación de crisis nacional.",
      "El Catálogo de Recursos lo gestiona en exclusiva cada Ayuntamiento sin coordinación estatal."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Arts. 26 a 29 (Contribución de Recursos a la Seguridad Nacional)",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Contribución de Recursos y Catálogo de Recursos de la Seguridad Nacional (Arts. 26-29)",
    consejoAcademia: "En el **Título III de la Ley 36/2015 (Arts. 26-29)**: La Contribución de Recursos a la Seguridad Nacional abarca recursos **públicos y privados**, se planifica preventivamente en el **Catálogo de Recursos de la Seguridad Nacional** y se activa al declararse por el Presidente del Gobierno una **Situación de Interés para la Seguridad Nacional**.",
    justificacion: "Los artículos 26 a 29 de la Ley 36/2015 regulan la contribución de recursos públicos y privados y el Catálogo de Recursos de la Seguridad Nacional."
  },
  {
    id: "Q-W6-197",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 4, 5 y 6 de la Carta de las Naciones Unidas (Vídeos T24 y T28), ¿qué órgano admite a los nuevos Estados miembros en la ONU, o suspende o expulsa a un miembro que haya violado repetidamente los Principios de la Carta, y a propuesta de quién?",
    opciones: [
      "Lo decide la ASAMBLEA GENERAL (por mayoría de 2/3) a recomendación previa del CONSEJO DE SEGURIDAD.",
      "Lo decide en solitario el Secretario General de la ONU.",
      "Lo decide el ECOSOC por mayoría simple.",
      "Lo decide la Corte Internacional de Justicia sin intervención de la Asamblea General."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Arts. 4, 5 y 6",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Naciones Unidas - ONU) > Admisión, Suspensión y Expulsión de Miembros: Recomendación del Consejo de Seguridad + Decisión de la Asamblea General (Arts. 4-6)",
    consejoAcademia: "¡El tándem **Consejo de Seguridad (recomienda) + Asamblea General (decide por 2/3)** funciona exactamente igual en **4 grandes actos de la Carta de la ONU**!: 1) **Admisión** de nuevos miembros (Art. 4); 2) **Suspensión** de derechos de un miembro (Art. 5); 3) **Expulsión** de un miembro (Art. 6); 4) **Nombramiento del Secretario General** (Art. 97).",
    justificacion: "Los artículos 4, 5 y 6 de la Carta de la ONU exigen en todos los casos la recomendación del Consejo de Seguridad y la decisión de la Asamblea General."
  },
  {
    id: "Q-W6-198",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN, OSCE y Unión Europea - Repaso Vídeo T28",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al cuadro comparativo final del Vídeo T28 sobre las cuatro organizaciones internacionales del Bloque 3 (ONU, OTAN, OSCE y Unión Europea), indique cuál de las siguientes relaciones de SEDES, NÚMERO DE MIEMBROS y REGLA DE VOTACIÓN es 100% correcta:",
    opciones: [
      "ONU: 193 miembros, sede principal en Nueva York (CIJ en La Haya), Consejo de Seguridad vota por 9 de 15 (con derecho de veto de los 5 permanentes). OTAN: 32 aliados (tras Finlandia en 2023 y Suecia en 2024), sede política en Bruselas (ACO en Mons y ACT en Norfolk), decisiones en el NAC por consenso/unanimidad. OSCE: 57 Estados participantes, Secretaría y Consejo Permanente en Viena (OIDDH en Varsovia y ACMN en La Haya), decisiones por consenso políticamente vinculantes. Unión Europea: 27 Estados miembros, instituciones en Bruselas, Estrasburgo, Luxemburgo y Fráncfort, mayoría cualificada en el Consejo (55% Estados = 15 países y 65% población) y unanimidad en PESC/PCSD.",
      "ONU: 57 miembros en Viena; OTAN: 27 miembros en Estrasburgo; OSCE: 32 miembros en Mons; UE: 193 miembros en Nueva York.",
      "En las cuatro organizaciones las decisiones se toman por sorteo y todas tienen exactamente 50 miembros.",
      "La OTAN tiene 30 miembros y la Unión Europea tiene 28 miembros."
    ],
    correcta: 0,
    referencia: "Síntesis Comparativa Bloque 3 (ONU, OTAN, OSCE y Unión Europea)",
    ubicacionTemario: "Bloque 3 > Temas 3, 4, 5 y 6 (Vídeo T28: Gran Repaso General) > Tabla Comparativa Maestra: ONU (193) vs OTAN (32) vs OSCE (57) vs UE (27)",
    consejoAcademia: "¡ESTA PREGUNTA RESUME TODO EL BLOQUE 3 EN UNA SOLA FICHA (Vídeo T28)!:\n• **ONU** = **193** miembros | Nueva York (+ La Haya) | CS: **15** (5P + 10NP por 2 años, mayoría **9/15**).\n• **OTAN** = **32** aliados (12 en 1949; España 1982; Finlandia #31 en 2023; Suecia #32 en 2024) | Bruselas + **ACO (Mons)** + **ACT (Norfolk)** | **Consenso**.\n• **OSCE** = **57** Estados | **Viena** (+ Varsovia OIDDH + La Haya ACMN) | **Consenso** (Acta Helsinki 1975 / Budapest 1994).\n• **UE** = **27** Estados (España 1986) | **7 Instituciones (Art. 13 TUE)** | Doble mayoría en Consejo (**55% Estados y 65% población**).",
    justificacion: "La opción correcta recoge con exactitud el número actual de miembros, las sedes principales y las reglas de toma de decisiones de la ONU (193), la OTAN (32), la OSCE (57) y la Unión Europea (27)."
  },
  {
    id: "Q-W6-199",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - Mayoría Cualificada en el Consejo (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 16.4 del Tratado de la Unión Europea (Vídeo T26), cuando el Consejo de la Unión Europea delibera y vota por MAYORÍA CUALIFICADA (sistema de 'doble mayoría' a propuesta de la Comisión), ¿qué dos porcentajes deben alcanzarse simultáneamente?",
    opciones: [
      "Un mínimo del 55% de los miembros del Consejo (que incluya al menos a 15 de los 27 Estados miembros) y que representen a Estados miembros que reúnan como mínimo el 65% de la población de la Unión (además de que la minoría de bloqueo debe estar compuesta por al menos 4 miembros del Consejo).",
      "El 90% de los Estados miembros y el 90% de la población.",
      "El 30% de los Estados miembros y el 40% de la población.",
      "Basta el voto de dos Estados miembros cualesquiera."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Art. 16.4",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > La Doble Mayoría Cualificada en el Consejo de la UE: 55% Estados y 65% Población (Art. 16.4 TUE)",
    consejoAcademia: "¡La regla del **55% - 65% - 4** del **Consejo de la UE (Art. 16.4 TUE, Vídeo T26)**!: **55% de los Estados** (mínimo 15 países) + **65% de la población de la UE** (y si no hay propuesta de la Comisión o del Alto Representante, el 55% sube al **72% de los Estados** manteniéndose el 65% de la población). Y para bloquear una decisión (minoría de bloqueo) hacen falta al menos **4 Estados**.",
    justificacion: "El artículo 16.4 del TUE define la mayoría cualificada como al menos el 55% de los miembros del Consejo que representen como mínimo el 65% de la población de la Unión."
  },
  {
    id: "Q-W6-200",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales - Operaciones Permanentes (Vídeos T27 y T28)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al cierre de los Vídeos T27 y T28, además de las misiones en el exterior, las Fuerzas Armadas españolas ejecutan las 24 horas de los 365 días del año las OPERACIONES PERMANENTES de Presencia, Vigilancia y Disuasión en los espacios de soberanía e interés nacional. ¿Quién conduce estas operaciones permanentes y qué Mandos Operativos las ejecutan?",
    opciones: [
      "Las conduce el Comandante del Mando de Operaciones (CMOPS), bajo la dirección estratégica del JEMAD, a través de los Mandos Operativos permanentes: Mando Operativo Terrestre (MOT), Mando Operativo Marítimo (MOM), Mando Operativo Aéreo (MOA), Mando Operativo Ciberespacial (MOC) y Mando Operativo Espacial (MOESPA).",
      "Las conduce el Ministerio de Asuntos Exteriores a través de las Embajadas.",
      "Sólo se activan durante dos semanas en verano.",
      "Las conduce el Consejo de Personal de las Fuerzas Armadas (COPERFAS)."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, PDC-01 y Operaciones Permanentes de Presencia, Vigilancia y Disuasión",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeos T27 y T28: España y Misiones Internacionales) > Operaciones Permanentes de Presencia, Vigilancia y Disuasión (CMOPS y MOT, MOM, MOA, MOC, MOESPA)",
    consejoAcademia: "¡Broche de oro de las **1.200 preguntas del Banco Oficial**!: Las **Operaciones Permanentes de Presencia, Vigilancia y Disuasión** en territorio e interés nacional las dirige estratégicamente el **JEMAD**, las conduce operacionalmente el **CMOPS** y las ejecutan los **5 Mandos Operativos permanentes**: **MOT, MOM, MOA, MOC y MOESPA**.",
    justificacion: "Las Operaciones Permanentes de Presencia, Vigilancia y Disuasión son conducidas por el CMOPS a través de los Mandos Operativos Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Ciberespacial (MOC) y Espacial (MOESPA)."
  }
];

function mergeWave6QuestionsIntoBank() {
  if (typeof DEFAULT_QUESTIONS === "undefined") return;

  const existingIds = new Set(DEFAULT_QUESTIONS.map(q => q.id));
  const allWave6 = [
    ...(typeof WAVE6_QUESTIONS_PART1 !== "undefined" ? WAVE6_QUESTIONS_PART1 : []),
    ...(typeof WAVE6_QUESTIONS_PART2 !== "undefined" ? WAVE6_QUESTIONS_PART2 : []),
    ...(typeof WAVE6_QUESTIONS_PART3 !== "undefined" ? WAVE6_QUESTIONS_PART3 : [])
  ];

  allWave6.forEach(q => {
    if (!existingIds.has(q.id)) {
      DEFAULT_QUESTIONS.push(q);
      existingIds.add(q.id);
    }
  });

  if (typeof OFFICIAL_EXAM_PACKS !== "undefined" && typeof WAVE6_NEW_EXAM_PACKS !== "undefined") {
    const existingPackIds = new Set(OFFICIAL_EXAM_PACKS.map(p => p.id));
    WAVE6_NEW_EXAM_PACKS.forEach(pack => {
      if (!existingPackIds.has(pack.id)) {
        OFFICIAL_EXAM_PACKS.push(pack);
        existingPackIds.add(pack.id);
      }
    });
  }
}

mergeWave6QuestionsIntoBank();
