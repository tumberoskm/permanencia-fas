/**
 * ============================================================================
 * OLEADA MUSCULAR 5 DE PREGUNTAS OFICIALES (+200 PREGUNTAS -> HITO 1.000 TOTALES)
 * Y 4 NUEVOS SIMULACROS OFICIALES (#13 a #16 -> 16 SIMULACROS CERRADOS)
 * ============================================================================
 */

const WAVE5_NEW_EXAM_PACKS = [
  {
    id: "SIM-PACK-VIDEOS-28",
    titulo: "🎬 Simulacro Especial: Los 28 Temas de Academia / Vídeos YouTube",
    subtitulo: "65 Preguntas Cruzadas (21 Temas BOE ↔ 28 Temas Vídeos) • 78 Minutos",
    badge: "ESPECIAL 28 VÍDEOS",
    badgeColor: "bg-sky-400 text-slate-950",
    borderClass: "border-sky-500/70 bg-sky-950/20",
    count: 65,
    durationMinutes: 78,
    mode: "official",
    bloque: "ALL",
    tagFilter: "Importante",
    studyMode: true,
    descripcion: "Recorre en orden los 28 temas de los vídeos de YouTube y manuales de Intranet (CE I y II, EMAD/ET/Armada/EA desglosados, Tropa/Carrera, Acoso/Igualdad y Misiones)."
  },
  {
    id: "SIM-PACK-DISCIPLINARIO-LPACAP",
    titulo: "⚖️ Simulacro Duelo de Plazos: Disciplinario (LO 8/2014) vs LPACAP (Ley 39/2015)",
    subtitulo: "50 Preguntas de Cruce Jurídico • 60 Minutos",
    badge: "CRUCE MORTAL",
    badgeColor: "bg-rose-500 text-white",
    borderClass: "border-rose-500/70 bg-rose-950/20",
    count: 50,
    durationMinutes: 60,
    mode: "official",
    bloque: "Bloque 2: Jurídico-Social",
    tagFilter: "Trampa",
    studyMode: true,
    descripcion: "Entrena el cruce más peligroso del examen: recursos de alzada y reposición (1 mes en LPACAP vs 1 mes en LO 8/2014), caducidad (3 meses vs 6 meses) y prescripción de faltas."
  },
  {
    id: "SIM-PACK-EJERCITOS-4",
    titulo: "🪖 Simulacro Monográfico: EMAD, Ejército de Tierra, Armada y Ejército del Aire",
    subtitulo: "45 Preguntas de Organización Operativa (Vídeos T7, T8, T9 y T10) • 54 Minutos",
    badge: "4 INSTRUCCIONES",
    badgeColor: "bg-emerald-500 text-slate-950",
    borderClass: "border-emerald-500/70 bg-emerald-950/20",
    count: 45,
    durationMinutes: 54,
    mode: "official",
    bloque: "Bloque 1: Organización",
    tagFilter: "ALL",
    studyMode: true,
    descripcion: "Domina las diferencias entre MCANA y FUTER en el ET (Inst. 14/2021), la Flota e Infantería de Marina en la Armada (Inst. 15/2021), el MACOM/MASESP en el EA (Inst. 6/2025) y el EMAD (Inst. 65/2025)."
  },
  {
    id: "SIM-PACK-MEGA-1000",
    titulo: "🏆 Gran Simulacro Magistral 'Hito 1.000 Preguntas' (Corte Plaza 2026)",
    subtitulo: "100 Preguntas Ponderadas de Élite (34 B1 + 40 B2 + 26 B3) • 120 Minutos",
    badge: "HITO 1.000 PREG.",
    badgeColor: "bg-amber-400 text-slate-950",
    borderClass: "border-amber-400/80 bg-amber-950/25",
    count: 100,
    durationMinutes: 120,
    mode: "ponderado_100",
    bloque: "ALL",
    tagFilter: "Pregunta de Examen",
    studyMode: false,
    descripcion: "El examen definitivo extraído del banco de 1.000 preguntas oficiales para medir tu nota real sobre 100 puntos y cruzarla con tu Baremo en la pestaña 🎖️ Baremo."
  }
];

const WAVE5_QUESTIONS_PART1 = [
  // ==========================================================================
  // BLOQUE 1: ORGANIZACIÓN (B1-T01 a B1-T06) — 60 NUEVAS PREGUNTAS (Q-W5-001 a Q-W5-060)
  // ==========================================================================
  {
    id: "Q-W5-001",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 1.2 de la Constitución Española de 1978, ¿en quién reside la soberanía nacional y de quién emanan los poderes del Estado?",
    opciones: [
      "En las Cortes Generales, de las que emanan las leyes orgánicas y ordinarias.",
      "En el pueblo español, del que emanan los poderes del Estado.",
      "En el Rey como Jefe del Estado y símbolo de su unidad y permanencia.",
      "En el Gobierno de la Nación y en el Consejo General del Poder Judicial."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 1.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1) > Título Preliminar (Art. 1.2 CE)",
    consejoAcademia: "No confundas Art. 1.2 (soberanía nacional reside en el pueblo español) con Art. 66.1 (las Cortes Generales representan al pueblo español).",
    justificacion: "El artículo 1.2 de la Constitución establece literalmente que la soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado."
  },
  {
    id: "Q-W5-002",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "De acuerdo con el artículo 9.3 de la Constitución Española, ¿cuál de los siguientes principios está garantizado expresamente por la Constitución junto con el principio de legalidad y la jerarquía normativa?",
    opciones: [
      "La retroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.",
      "La irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de los poderes públicos.",
      "La discrecionalidad absoluta de la Administración civil y militar.",
      "El secreto de las normas reglamentarias de carácter sancionador."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 9.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1) > Garantías del Art. 9.3 CE",
    consejoAcademia: "¡Trampa clásica de examen! El Art. 9.3 garantiza la IRRETROACTIVIDAD de las disposiciones sancionadoras NO favorables o restrictivas de derechos individuales (a sensu contrario, las favorables sí pueden ser retroactivas).",
    justificacion: "El artículo 9.3 CE garantiza el principio de legalidad, la jerarquía normativa, la publicidad de las normas, la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de los poderes públicos."
  },
  {
    id: "Q-W5-003",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 11 de la Constitución Española, en relación con la nacionalidad española:",
    opciones: [
      "Ningún español de origen podrá ser privado de su nacionalidad.",
      "Cualquier español de origen puede ser privado de su nacionalidad por sanción disciplinaria extraordinaria.",
      "El Estado no podrá concertar tratados de doble nacionalidad con países iberoamericanos.",
      "La nacionalidad española sólo se adquiere al cumplir los 21 años."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 11.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1) > Nacionalidad y Extranjería (Art. 11 CE)",
    consejoAcademia: "Clave del Art. 11.2 CE: Ningún español DE ORIGEN podrá ser privado de su nacionalidad.",
    justificacion: "El artículo 11.2 de la Constitución dispone taxativamente que ningún español de origen podrá ser privado de su nacionalidad."
  },
  {
    id: "Q-W5-004",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 17.2 de la Constitución Española, la detención preventiva no podrá durar más del tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos y, en todo caso, en qué plazo máximo deberá el detenido ser puesto en libertad o a disposición de la autoridad judicial:",
    opciones: [
      "En el plazo máximo de veinticuatro horas.",
      "En el plazo máximo de setenta y dos horas.",
      "En el plazo máximo de cuarenta y ocho horas.",
      "En el plazo máximo de cinco días hábiles."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 17.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1) > Libertad Personal y Detención Preventiva (Art. 17.2 CE)",
    consejoAcademia: "Detención preventiva ordinaria (Art. 17.2 CE) = máximo 72 horas (3 días). En estado de excepción (LO 4/1981) puede ampliarse hasta un máximo de 10 días comunicándolo al Juez en 24 horas.",
    justificacion: "El artículo 17.2 CE establece que en todo caso, en el plazo máximo de setenta y dos horas, el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial."
  },
  {
    id: "Q-W5-005",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 21 de la Constitución Española, el ejercicio del derecho de reunión pacífica y sin armas no necesitará autorización previa. No obstante, en los casos de reuniones en lugares de tránsito público y manifestaciones:",
    opciones: [
      "Se dará comunicación previa a la autoridad, que sólo podrá prohibirlas cuando existan razones fundadas de alteración del orden público, con peligro para personas o bienes.",
      "Requerirá autorización escrita del Consejo de Ministros con treinta días de antelación.",
      "Está prohibido en todo el territorio nacional los fines de semana.",
      "Sólo puede ser prohibido por sentencia firme del Tribunal Constitucional."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 21.1 y 21.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T1) > Derecho de Reunión y Manifestación (Art. 21 CE)",
    consejoAcademia: "Reunión pacífica = NO necesita autorización previa. Si es en lugar de tránsito público o manifestación = exige COMUNICACIÓN PREVIA a la autoridad, que solo puede prohibirla por razones fundadas de alteración del orden público con peligro para personas o bienes.",
    justificacion: "El artículo 21.2 CE exige comunicación previa a la autoridad para reuniones en lugares de tránsito público y manifestaciones."
  },
  {
    id: "Q-W5-006",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 57.1 de la Constitución Española, la sucesión en el trono seguirá el orden regular de primogenitura y representación, siendo preferida siempre:",
    opciones: [
      "La línea anterior a las posteriores; en la misma línea, el grado más próximo al más remoto; en el mismo grado, el varón a la mujer, y en el mismo sexo, la persona de más edad a la de menos.",
      "La línea colateral a la directa y el grado más remoto al más próximo.",
      "La elección por sorteo entre los miembros mayores de edad de la Casa Real.",
      "La designación testamentaria libre del Presidente del Congreso."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 57.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > La Corona: Orden de Sucesión (Art. 57.1 CE)",
    consejoAcademia: "Memoriza las 4 preferencias del Art. 57.1 CE en orden exacto: 1º Línea anterior a posterior; 2º Grado más próximo a más remoto; 3º Varón a mujer (en el mismo grado); 4º Más edad a menos edad (en el mismo sexo).",
    justificacion: "El artículo 57.1 CE regula literalmente las cuatro reglas de preferencia en el orden regular de sucesión a la Corona."
  },
  {
    id: "Q-W5-007",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 59.3 de la Constitución Española, si no hubiere ninguna persona a quien corresponda la Regencia conforme a las reglas ordinarias (padre, madre o pariente mayor de edad más próximo a suceder), ¿quién nombrará la Regencia y de cuántas personas se compondrá?",
    opciones: [
      "Será nombrada por las Cortes Generales, y se compondrá de una, tres o cinco personas.",
      "Será nombrada por el Tribunal Constitucional, y se compondrá de dos o cuatro personas.",
      "La asumirá automáticamente el Presidente del Gobierno en solitario.",
      "Será elegida por el Consejo de Estado y se compondrá de siete personas."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 59.3 y 59.4",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > La Regencia Dativa (Art. 59.3 CE)",
    consejoAcademia: "Regencia nombrada por las Cortes Generales (Art. 59.3 CE): se compone de 1, 3 o 5 personas. Requisitos para ser Regente (Art. 59.4): ser español y mayor de edad.",
    justificacion: "El artículo 59.3 CE establece que si no hubiere ninguna persona a quien corresponda la Regencia, ésta será nombrada por las Cortes Generales, y se compondrá de una, tres o cinco personas."
  },
  {
    id: "Q-W5-008",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 68 de la Constitución Española, el Congreso de los Diputados se compone de un mínimo y un máximo de Diputados, y la circunscripción electoral es la provincia. ¿Cuántos Diputados asigna la Constitución a Ceuta y a Melilla?",
    opciones: [
      "Las poblaciones de Ceuta y Melilla estarán representadas cada una de ellas por un Diputado (y elegirá cada una de ellas dos Senadores según el artículo 69.4).",
      "Tres Diputados cada una y un Senador cada una.",
      "Dos Diputados cada una y cuatro Senadores cada una.",
      "Cuatro Diputados cada una."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 68.2 y 69.4",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > Las Cortes Generales: Ceuta y Melilla (Arts. 68 y 69 CE)",
    consejoAcademia: "¡Cruza siempre Ceuta y Melilla en Congreso vs Senado! Congreso (Art. 68.2) = 1 Diputado cada una. Senado (Art. 69.4) = 2 Senadores cada una.",
    justificacion: "El artículo 68.2 CE asigna 1 Diputado a Ceuta y 1 a Melilla, mientras que el artículo 69.4 CE asigna 2 Senadores a cada una."
  },
  {
    id: "Q-W5-009",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 86 de la Constitución Española, en caso de extraordinaria y urgente necesidad, el Gobierno podrá dictar disposiciones legislativas provisionales que tomarán la forma de Decretos-leyes. ¿En qué plazo deberán ser inmediatamente sometidos a debate y votación de totalidad al Congreso de los Diputados?",
    opciones: [
      "En el plazo de los treinta días siguientes a su promulgación.",
      "En el plazo de los quince días naturales siguientes a su publicación.",
      "En el plazo de dos meses ante el Senado.",
      "En el plazo de seis meses ante ambas Cámaras."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 86.2",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > Decretos-leyes y Plazo de Convalidación (Art. 86 CE)",
    consejoAcademia: "Decreto-ley (Art. 86 CE): extraordinaria y urgente necesidad + convalidación o derogación exclusivamente por el CONGRESO (o su Diputación Permanente) en los 30 DÍAS siguientes a su promulgación.",
    justificacion: "El artículo 86.2 CE dispone que los Decretos-leyes deberán ser inmediatamente sometidos a debate y votación de totalidad al Congreso de los Diputados en el plazo de los treinta días siguientes a su promulgación."
  },
  {
    id: "Q-W5-010",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a los artículos 112 y 113 de la Constitución Española, ¿qué diferencia de mayoría y iniciativa existe entre la Cuestión de Confianza y la Moción de Censura en el Congreso de los Diputados?",
    opciones: [
      "La cuestión de confianza la plantea el Presidente del Gobierno (previa deliberación del Consejo de Ministros) y se otorga por mayoría simple de los Diputados; la moción de censura debe ser propuesta al menos por la décima parte (1/10) de los Diputados, incluir un candidato a la Presidencia y ser adoptada por mayoría absoluta del Congreso.",
      "Ambas exigen mayoría de tres quintos del Congreso y del Senado.",
      "La cuestión de confianza exige mayoría absoluta y la moción de censura mayoría simple.",
      "La moción de censura puede votarse al día siguiente de su presentación sin plazo de enfriamiento."
    ],
    correcta: 0,
    referencia: "Constitución Española, Arts. 112 y 113",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > Cuestión de Confianza vs Moción de Censura (Arts. 112 y 113 CE)",
    consejoAcademia: "Tabla de oro: Cuestión de Confianza (Art. 112) = Mayoría SIMPLE. Moción de Censura (Art. 113) = Propuesta por 1/10 de los Diputados + Candidato alternativo + 5 días de enfriamiento + Mayoría ABSOLUTA.",
    justificacion: "Los artículos 112 y 113 CE regulan respectivamente la cuestión de confianza (mayoría simple) y la moción de censura constructiva (1/10 de Diputados, candidato alternativo, 5 días de espera y mayoría absoluta)."
  },

  // --- B1-T02: Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3) ---
  {
    id: "Q-W5-011",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 2 de la Ley Orgánica 5/2005, de la Defensa Nacional, ¿cuál es la finalidad de la política de defensa?",
    opciones: [
      "La protección del conjunto de la sociedad española, de su Constitución, de los valores superiores, principios e instituciones que en ella se consagran, del Estado social y democrático de derecho, del pleno ejercicio de los derechos y libertades, y de la garantía, independencia e integridad territorial de España, así como contribuir a la preservación de la paz y seguridad internacionales.",
      "Exclusivamente la vigilancia aduanera y recaudación fiscal en fronteras terrestres.",
      "La dirección de la política monetaria del Banco de España.",
      "La gestión de los servicios municipales de protección civil."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 2",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Finalidad de la Política de Defensa (Art. 2 LODN)",
    consejoAcademia: "El Art. 2 LODN une la dimensión interna (proteger sociedad, CE, Estado social y democrático, independencia e integridad territorial) con la externa (preservar paz y seguridad internacionales en el marco de los compromisos del Reino de España).",
    justificacion: "El artículo 2 de la Ley Orgánica 5/2005 define de forma integral la finalidad de la política de defensa."
  },
  {
    id: "Q-W5-012",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 6 y 7 de la Ley Orgánica 5/2005, ¿a quién corresponde ordenar, coordinar y dirigir la actuación de las Fuerzas Armadas, y a quién corresponde disponer la aplicación de las misiones de las Fuerzas Armadas?",
    opciones: [
      "Ordenar, coordinar y dirigir la actuación de las FAS corresponde al Presidente del Gobierno (Art. 6.2.b), mientras que disponer la aplicación de las misiones de las FAS y determinar y ejecutar la política militar corresponde al Gobierno (Art. 5).",
      "Ambas competencias corresponden en exclusiva al Jefe de Estado Mayor del Ejército de Tierra.",
      "Corresponden al Defensor del Pueblo y al Tribunal de Cuentas.",
      "Corresponden al Subsecretario de Defensa."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Arts. 5, 6 y 7",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Atribuciones del Gobierno, Presidente y Ministro (Arts. 5-7 LODN)",
    consejoAcademia: "Recuerda la clave del Presidente del Gobierno (Art. 6 LODN): formula la Directiva de Defensa Nacional y ordena, coordina y dirige la actuación de las FAS. El Ministro de Defensa (Art. 7) desarrolla y ejecuta la política de defensa y dirige la actuación de las FAS bajo la autoridad del Presidente.",
    justificacion: "Los artículos 5, 6 y 7 de la LO 5/2005 delimitan las atribuciones del Gobierno, del Presidente del Gobierno y del Ministro de Defensa."
  },
  {
    id: "Q-W5-013",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 4.2 de la Ley Orgánica 5/2005, a las Cortes Generales les corresponde otorgar las autorizaciones previas para prestar el consentimiento del Estado a obligarse por medio de tratados o convenios internacionales de carácter militar, así como:",
    opciones: [
      "Debatir las líneas generales de la política de defensa y autorizar con carácter previo la participación de las Fuerzas Armadas en misiones fuera del territorio nacional.",
      "Nombrar directamente a los Coroneles Jefes de Regimiento.",
      "Redactar las Reales Ordenanzas mediante acuerdo de la Mesa del Senado.",
      "Dirigir tácticamente los batallones desplegados en el exterior."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 4.2 y Art. 17",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Las Cortes Generales y la Defensa (Arts. 4 y 17 LODN)",
    consejoAcademia: "Las Cortes Generales debaten las líneas generales de la política de defensa, aprueban las leyes relativas a la defensa y los créditos presupuestarios, y autorizan con carácter previo las misiones en el exterior.",
    justificacion: "El artículo 4.2 de la LO 5/2005 regula las funciones de las Cortes Generales en materia de defensa."
  },
  {
    id: "Q-W5-014",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 17.2 de la Ley Orgánica 5/2005, en las misiones en el exterior que requieran una respuesta rápida o inmediata a determinadas situaciones, los trámites de consulta previa y autorización de las Cortes Generales se realizarán mediante procedimientos de urgencia. Cuando por razones de máxima urgencia no fuera posible realizar la consulta previa:",
    opciones: [
      "El Gobierno someterá al Congreso de los Diputados lo antes posible la decisión que haya adoptado para la ratificación, en su caso.",
      "La misión quedará automáticamente prohibida sin excepción.",
      "Será suficiente con comunicarlo al Alcalde de Madrid.",
      "Deberá pedir autorización al Tribunal Supremo en el plazo de un año."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 17.3",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Autorización de Misiones por Máxima Urgencia (Art. 17.3 LODN)",
    consejoAcademia: "¡Pregunta frecuente de examen! Si por MÁXIMA URGENCIA no es posible la consulta previa, el Gobierno puede decidir y someterá LO ANTES POSIBLE la decisión al CONGRESO DE LOS DIPUTADOS para su RATIFICACIÓN.",
    justificacion: "El artículo 17.3 de la LO 5/2005 prevé que en supuestos de máxima urgencia en que no sea posible la consulta previa, el Gobierno someterá al Congreso de los Diputados lo antes posible la decisión adoptada para su ratificación."
  },
  {
    id: "Q-W5-015",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 11 de la Ley Orgánica 5/2005, las Fuerzas Armadas se organizan en dos estructuras. ¿Cuál es la finalidad de la estructura orgánica y cuál la de la estructura operativa?",
    opciones: [
      "La estructura orgánica está orientada a la preparación de la fuerza (en los Ejércitos) y la estructura operativa está orientada al empleo de la fuerza en las misiones asignadas (en el Estado Mayor de la Defensa / cadena operativa).",
      "La estructura orgánica dirige los combates y la operativa gestiona las pensiones de retiro.",
      "Ambas estructuras dependen directamente del Ministerio del Interior.",
      "La estructura orgánica sólo existe en tiempo de guerra."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 11",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Estructura Orgánica vs Estructura Operativa (Art. 11 LODN)",
    consejoAcademia: "Binomio sagrado del Art. 11 LODN: Estructura ORGÁNICA = PREPARACIÓN de la Fuerza (JEME, AJEMA, JEMA) -> aporta capacidades; Estructura OPERATIVA = EMPLEO de la Fuerza en misiones (JEMAD / MOPS).",
    justificacion: "El artículo 11 de la LO 5/2005 distingue entre la estructura orgánica, para la preparación de la fuerza, y la estructura operativa, para su empleo en las misiones que se le asignen."
  },
  {
    id: "Q-W5-016",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 28 de la Ley Orgánica 5/2005, la Guardia Civil es un Instituto armado de naturaleza militar. ¿De quién depende en el cumplimiento de las misiones de carácter militar que se le encomienden?",
    opciones: [
      "Del Ministro de Defensa.",
      "Exclusivamente del Ministro de Asuntos Exteriores.",
      "De los Alcaldes de cada municipio.",
      "Del Presidente del Consejo de Estado."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 28",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Guardia Civil y Misiones de Carácter Militar (Art. 28 LODN)",
    consejoAcademia: "La Guardia Civil depende del Ministro del Interior en seguridad ciudadana, del Ministro de Defensa en los ascensos, misiones de carácter militar y en tiempo de guerra/estado de sitio.",
    justificacion: "El artículo 28 de la LO 5/2005 dispone que la Guardia Civil es un Instituto armado de naturaleza militar, dependiente del Ministro de Defensa en el cumplimiento de las misiones de carácter militar y del Ministro del Interior en lo relativo a la seguridad ciudadana."
  },

  // --- B1-T03: Ley 40/2015 de Régimen Jurídico del Sector Público (Vídeo T4) ---
  {
    id: "Q-W5-017",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 55 de la Ley 40/2015, de Régimen Jurídico del Sector Público, en la organización central de la Administración General del Estado, ¿cuáles son los órganos superiores y cuáles los órganos directivos?",
    opciones: [
      "Son órganos superiores los Ministros y los Secretarios de Estado; son órganos directivos los Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales y Subdirectores Generales.",
      "Son órganos superiores los Directores Generales y Subdirectores Generales.",
      "Son órganos superiores únicamente los Subsecretarios y Secretarios Generales Técnicos.",
      "Todos los órganos ministeriales tienen la consideración de órganos superiores."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 55.2 y 55.3",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Órganos Superiores vs Directivos en la AGE (Art. 55 Ley 40/2015)",
    consejoAcademia: "¡Pregunta fija de examen! Órganos SUPERIORES (solo 2): Ministros y Secretarios de Estado. Todos los demás (Subsecretarios, Secretarios Generales, SGT, Directores Generales y Subdirectores Generales) son órganos DIRECTIVOS.",
    justificacion: "El artículo 55 de la Ley 40/2015 clasifica los órganos de la organización central en órganos superiores (Ministros y Secretarios de Estado) y órganos directivos."
  },
  {
    id: "Q-W5-018",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 55.11 de la Ley 40/2015, ¿quiénes ostentan la condición de ALTO CARGO en la organización central de la Administración General del Estado?",
    opciones: [
      "Los órganos superiores y los órganos directivos, TODOS ellos excepto los Subdirectores Generales y asimilados.",
      "Incluso los Subdirectores Generales y Jefes de Negociado tienen condición de alto cargo.",
      "Únicamente los Ministros.",
      "Exclusivamente los Delegados del Gobierno en las Comunidades Autónomas."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 55.11",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Condición de Alto Cargo y Excepción del Subdirector General (Art. 55.11)",
    consejoAcademia: "¡LA TRAMPA DEL SUBDIRECTOR GENERAL!: El Subdirector General SÍ es órgano directivo, pero NO es Alto Cargo (y es nombrado y separado por el Ministro o Secretario de Estado, no por Real Decreto del Consejo de Ministros).",
    justificacion: "El artículo 55.11 de la Ley 40/2015 establece que los órganos superiores y directivos tienen además la condición de alto cargo, excepto los Subdirectores generales y asimilados."
  },
  {
    id: "Q-W5-019",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 9 de la Ley 40/2015, sobre la delegación de competencias, ¿cuál de las siguientes materias NO puede ser objeto de delegación en ningún caso?",
    opciones: [
      "La adopción de disposiciones de carácter general, los asuntos que se refieran a relaciones con la Jefatura del Estado, la Presidencia del Gobierno o las Cortes Generales, y la resolución de recursos en los órganos administrativos que hayan dictado los actos objeto de recurso.",
      "La firma de contratos menores de suministros de oficina.",
      "La concesión de permisos ordinarios al personal de una unidad.",
      "La tramitación de expedientes ordinarios de gestión económica."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 9.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Límites a la Delegación de Competencias (Art. 9.2 Ley 40/2015)",
    consejoAcademia: "En la delegación (Art. 9): las resoluciones dictadas por delegación se consideran dictadas por el órgano DELEGANTE, no cabe subdelegar salvo ley expresa, y NUNCA se pueden delegar reglamentos (disposiciones generales) ni resolver recursos en el mismo órgano que dictó el acto recurrido.",
    justificacion: "El artículo 9.2 de la Ley 40/2015 enumera las competencias indelegables."
  },
  {
    id: "Q-W5-020",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 10 de la Ley 40/2015, contra el acuerdo de AVOCACIÓN de un asunto por parte de un órgano superior:",
    opciones: [
      "No cabrá recurso, aunque podrá impugnarse en el que, en su caso, se interponga contra la resolución del procedimiento.",
      "Cabe recurso de alzada en el plazo de diez días hábiles.",
      "Cabe recurso extraordinario de revisión ante el Consejo de Ministros.",
      "No es necesario motivar el acuerdo de avocación ni notificarlo a los interesados."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 10.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > La Avocación y su Régimen de Impugnación (Art. 10 Ley 40/2015)",
    consejoAcademia: "La avocación se realiza SIEMPRE mediante acuerdo motivado que debe notificarse a los interesados antes o simultáneamente a la resolución final, y contra el acuerdo de avocación NO CABE RECURSO directo (solo al recurrir la resolución final del procedimiento).",
    justificacion: "El artículo 10.2 de la Ley 40/2015 establece que contra el acuerdo de avocación no cabrá recurso, aunque podrá impugnarse en el que se interponga contra la resolución del procedimiento."
  },
  {
    id: "Q-W5-021",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 12 de la Ley 40/2015, la delegación de firma:",
    opciones: [
      "No alterará la competencia del órgano delegante y para su validez no será necesaria su publicación, debiendo hacerse constar en las resoluciones la autoridad de procedencia.",
      "Transfiere la titularidad de la competencia al inferior y exige publicación obligatoria en el BOE.",
      "Permite delegar la firma en personas ajenas a la Administración Pública.",
      "Es irrevocable por el órgano titular de la competencia."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 12",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Delegación de Competencias vs Delegación de Firma (Arts. 9 y 12)",
    consejoAcademia: "¡Diferencia clave de examen! Delegación de competencias (Art. 9) y Encomienda de gestión (Art. 11) SÍ exigen publicación en el BOE/Diario Oficial. Delegación de firma (Art. 12) y Suplencia (Art. 13) NO exigen publicación para su validez.",
    justificacion: "El artículo 12 de la Ley 40/2015 dispone que la delegación de firma no alterará la competencia del órgano delegante y para su validez no será necesaria su publicación."
  },
  {
    id: "Q-W5-022",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 24 de la Ley 40/2015, cuando un interesado plantea la RECUSACIÓN de una autoridad o empleado público por concurrir causa de abstención, si el recusado niega la causa de recusación, ¿en qué plazo resolverá el superior jerárquico y qué recurso cabe contra dicho acuerdo?",
    opciones: [
      "El superior resolverá en el plazo de tres días, previos los informes y comprobaciones que considere oportunos, y contra las resoluciones adoptadas en esta materia no cabrá recurso, sin perjuicio de alegar la recusación al interponer el recurso que proceda contra el acto que ponga fin al procedimiento.",
      "El superior resolverá en el plazo de seis meses y cabe recurso de alzada.",
      "Si el recusado lo niega, se archiva la recusación sin intervención del superior.",
      "Resuelve el Tribunal Constitucional en quince días."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 24.4 y 24.5",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Abstención y Recusación: Plazos (Arts. 23 y 24 Ley 40/2015)",
    consejoAcademia: "Plazos de la Recusación (Art. 24 Ley 40/2015): Al día siguiente (1 día) el recusado manifiesta a su inmediato superior si se da o no la causa; si la niega, el superior resuelve en 3 DÍAS. Y no cabe recurso autónomo contra esa decisión.",
    justificacion: "El artículo 24 de la Ley 40/2015 regula el trámite incidental de recusación con plazos de 1 día (manifestación del recusado) y 3 días (resolución del superior)."
  },

  // --- B1-T04: RD 205/2024 Estructura Orgánica Básica del Ministerio de Defensa (Vídeo T5) ---
  {
    id: "Q-W5-023",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Real Decreto 205/2024, por el que se desarrolla la estructura orgánica básica del Ministerio de Defensa, ¿qué cuatro Direcciones Generales dependen directamente de la Secretaría de Estado de Defensa (SEDEF)?",
    opciones: [
      "La Dirección General de Armamento y Material (DGAM), la Dirección General de Asuntos Económicos (DIGENECO), la Dirección General de Infraestructura (DIGENIN) y la Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID).",
      "La Dirección General de Personal (DIGENPER) y la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "La Secretaría General Técnica y la Asesoría Jurídica General de la Defensa.",
      "La Dirección General de Política de Defensa (DIGENPOL) y el CNI."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 4",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Secretaría de Estado de Defensa (SEDEF) y Nueva DIGEID (Art. 4 RD 205/2024)",
    consejoAcademia: "¡NOVEDAD ESTRELLA DEL RD 205/2024! La SEDEF tiene ahora 4 Direcciones Generales: DGAM, DIGENECO, DIGENIN y la nueva **DIGEID** (Estrategia e Innovación de la Industria de Defensa), además del CESTIC (con rango de Dirección General).",
    justificacion: "El artículo 4 del Real Decreto 205/2024 adscribe a la SEDEF las cuatro Direcciones Generales: DGAM, DIGENECO, DIGENIN y DIGEID, así como el CESTIC."
  },
  {
    id: "Q-W5-024",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 205/2024, ¿de qué órgano superior o directivo del Ministerio de Defensa dependen la Intervención General de la Defensa, la Asesoría Jurídica General de la Defensa y la Inspección General de Sanidad de la Defensa (IGESAN)?",
    opciones: [
      "De la Subsecretaría de Defensa (SUBDEF), junto con la Secretaría General Técnica, la DIGENPER y la DIGEREM.",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Del Estado Mayor Conjunto de la Defensa (EMACON).",
      "De la Secretaría de Estado de Defensa (SEDEF)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 8",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Subsecretaría de Defensa (SUBDEF) (Art. 8 RD 205/2024)",
    consejoAcademia: "Todo lo relativo a Personal, Enseñanza, Leyes, Control Interno y Sanidad cuelga de la SUBDEF: SGT, DIGENPER, DIGEREM + Asesoría Jurídica General, Intervención General de la Defensa e IGESAN.",
    justificacion: "El artículo 8 del Real Decreto 205/2024 establece la dependencia de la SGT, DIGENPER, DIGEREM, Asesoría Jurídica General, Intervención General e IGESAN respecto de la Subsecretaría de Defensa."
  },
  {
    id: "Q-W5-025",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el Real Decreto 205/2024, ¿qué rango orgánico tiene el titular de la Secretaría General de Política de Defensa (SEGENPOL) y qué Dirección General depende de ella?",
    opciones: [
      "Tiene rango de Subsecretario y de ella depende la Dirección General de Política de Defensa (DIGENPOL).",
      "Tiene rango de Secretario de Estado y de ella depende la DGAM.",
      "Tiene rango de Subdirector General y depende del JEME.",
      "Tiene rango de Ministro sin cartera."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 14",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > SEGENPOL y DIGENPOL (Art. 14 RD 205/2024)",
    consejoAcademia: "En la Ley 40/2015 y el RD 205/2024: los Secretarios Generales (como SEGENPOL) tienen rango de SUBSECRETARIO. Y de SEGENPOL depende la DIGENPOL, la División de Coordinación y Estudios de Seguridad y Defensa y las Agregadurías de Defensa.",
    justificacion: "El artículo 14 del Real Decreto 205/2024 regula la Secretaría General de Política de Defensa, con rango de Subsecretaría, de la que depende la Dirección General de Política de Defensa (DIGENPOL)."
  },
  {
    id: "Q-W5-026",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 1 del Real Decreto 205/2024, ¿de quién depende orgánicamente el Centro Nacional de Inteligencia (CNI) y quién ostenta el rango de Secretario de Estado al frente del mismo?",
    opciones: [
      "El CNI está adscrito al Ministerio de Defensa y depende directamente de la persona titular del Departamento, teniendo su Secretario de Estado Director rango de Secretario de Estado.",
      "Depende de la Dirección General de la Policía en el Ministerio del Interior.",
      "Depende del Jefe de Estado Mayor del Ejército del Aire y del Espacio.",
      "Está adscrito a la Secretaría General Técnica de Defensa."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 1",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Adscripción del CNI y Órganos Directamente Dependientes del Ministro",
    consejoAcademia: "En los vídeos antiguos de YouTube a veces citan adscripciones temporales antiguas: recuerda que en el vigente RD 205/2024 el CNI está adscrito directamente a la persona titular del Ministerio de Defensa.",
    justificacion: "El artículo 1 del Real Decreto 205/2024 adscribe el Centro Nacional de Inteligencia directamente a la persona titular del Ministerio de Defensa."
  },
  {
    id: "Q-W5-027",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el Real Decreto 205/2024, ¿qué tres organismos autónomos están adscritos al Ministerio de Defensa (dos a través de la Subsecretaría y uno a través de la SEDEF)?",
    opciones: [
      "El Instituto Social de las Fuerzas Armadas (ISFAS) y el Servicio Militar de Construcciones (adscritos a través de la SUBDEF), y el Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa (INVIED O.A.) junto con el INTA (adscritos a través de la SEDEF).",
      "El Banco de España y la Fábrica Nacional de Moneda y Timbre.",
      "Renfe y AENA.",
      "Muface y Mugeju."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Arts. 4 y 8",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Organismos Autónomos del MINISDEF (ISFAS, INVIED, INTA)",
    consejoAcademia: "¡Cruza siempre los organismos autónomos! ISFAS (prestaciones sociales/sanitarias) cuelga de SUBDEF; INVIED (vivienda/infraestructura) e INTA (tecnología aeroespacial 'Esteban Terradas') cuelgan de SEDEF.",
    justificacion: "El Real Decreto 205/2024 adscribe el ISFAS a la Subsecretaría de Defensa y el INVIED O.A. y el INTA a la Secretaría de Estado de Defensa."
  },
  {
    id: "Q-W5-028",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al Real Decreto 205/2024, el Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC), dependiente de la SEDEF, tiene nivel orgánico de:",
    opciones: [
      "Dirección General.",
      "Subdirección General.",
      "Secretaría de Estado.",
      "Negociado Administrativo."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 13",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > El CESTIC y su Rango Orgánico (Art. 13 RD 205/2024)",
    consejoAcademia: "El CESTIC depende de la SEDEF, tiene nivel orgánico de DIRECCIÓN GENERAL y es responsable de las políticas de transformación digital, telecomunicaciones, ciberseguridad (en el ámbito del Ministerio) e infraestructura integral de información (I3D).",
    justificacion: "El artículo 13 del Real Decreto 205/2024 otorga al CESTIC el rango orgánico de Dirección General dependiente de la Secretaría de Estado de Defensa."
  },

  // --- B1-T05: RD 521/2020 Organización Básica de las Fuerzas Armadas (Vídeo T6) ---
  {
    id: "Q-W5-029",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 2 del Real Decreto 521/2020, por el que se establece la organización básica de las Fuerzas Armadas, éstas se constituyen como:",
    opciones: [
      "Una entidad única e integradora de las distintas formas de acción de sus componentes, que posibilita el empleo óptimo de sus capacidades militares.",
      "Tres ministerios independientes sin mando operativo común.",
      "Una agencia civil adscrita a las Comunidades Autónomas.",
      "Un cuerpo policial de ámbito municipal."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 2.2",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Concepto de Entidad Única e Integradora (Art. 2 RD 521/2020)",
    consejoAcademia: "Expresión literal del Art. 2.2 RD 521/2020 que siempre cae en examen: las Fuerzas Armadas constituyen una 'ENTIDAD ÚNICA E INTEGRADORA' de las distintas formas de acción de sus componentes (acción conjunta).",
    justificacion: "El artículo 2.2 del Real Decreto 521/2020 define a las Fuerzas Armadas como una entidad única e integradora."
  },
  {
    id: "Q-W5-030",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Real Decreto 521/2020, ¿cuáles son los cuatro Mandos Operativos subordinados al JEMAD en la estructura operativa de las Fuerzas Armadas (los cuatro entornos de operación permanente)?",
    opciones: [
      "El Mando Operativo Terrestre (MOT), el Mando Operativo Marítimo (MOM), el Mando Operativo Aéreo (MOA) y el Mando Operativo Ciberespacial (MOC) —junto al Mando Operativo Espacial (MOESPA)—.",
      "El Mando de Personal, el Mando de Apoyo Logístico, la Inspección del Ejército y la Dirección de Acuartelamiento.",
      "La Guardia Real, la UME, la Legión y la Brigada Paracaidista.",
      "El CIFAS, el CESEDEN, el CESTIC y el INTA."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 14 e Instrucción 65/2025 EMAD",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Los Mandos Operativos Permanentes (MOT, MOM, MOA, MOC / MOESPA)",
    consejoAcademia: "En el RD 521/2020 figuran los Mandos Operativos Permanentes (MOT, MOM, MOA y MOC) bajo control operativo del Comandante del MOPS (CMOPS), a los que la actualización operativa suma el entorno espacial (MOESPA).",
    justificacion: "El artículo 14 del Real Decreto 521/2020 regula los Mandos Operativos subordinados dentro de la cadena operativa de las Fuerzas Armadas."
  },
  {
    id: "Q-W5-031",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 17 del Real Decreto 521/2020, el Ejército de Tierra, la Armada y el Ejército del Aire y del Espacio están compuestos cada uno de ellos por tres grandes bloques orgánicos. ¿Cuáles son?",
    opciones: [
      "El Cuartel General, la Fuerza y el Apoyo a la Fuerza.",
      "El Estado Mayor Conjunto, el MOPS y el CIFAS.",
      "La Subsecretaría, la Secretaría General Técnica y la Intervención.",
      "Las Comandancias, los Puestos y las Patrullas Fiscales."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 17",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Estructura Orgánica de los Ejércitos (Art. 17 RD 521/2020)",
    consejoAcademia: "Los 3 pilares de la estructura orgánica de cada Ejército (ET, Armada y EA) son siempre: 1) Cuartel General, 2) Fuerza y 3) Apoyo a la Fuerza.",
    justificacion: "El artículo 17 del Real Decreto 521/2020 establece que cada Ejército está compuesto por el Cuartel General, la Fuerza y el Apoyo a la Fuerza."
  },
  {
    id: "Q-W5-032",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el Real Decreto 521/2020, ¿qué órgano del Estado Mayor de la Defensa es el responsable de realizar el planeamiento y la conducción operacional de las operaciones militares bajo la dirección del JEMAD?",
    opciones: [
      "El Mando de Operaciones (MOPS).",
      "El Centro Superior de Estudios de la Defensa Nacional (CESEDEN).",
      "La Jefatura de Recursos Humanos del EMAD.",
      "La Dirección General de Reclutamiento y Enseñanza Militar."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 13",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > El Mando de Operaciones (MOPS) (Art. 13 RD 521/2020)",
    consejoAcademia: "EMACON = nivel estratégico militar (auxilia al JEMAD en estrategia y planes); MOPS = nivel OPERACIONAL (planeamiento y conducción operacional de las operaciones militares).",
    justificacion: "El artículo 13 del Real Decreto 521/2020 atribuye al Mando de Operaciones (MOPS) el planeamiento y la conducción operacional de las operaciones militares."
  },
  {
    id: "Q-W5-033",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 15 del Real Decreto 521/2020, ¿cuál es el órgano del Estado Mayor de la Defensa responsable de facilitar al Ministro de Defensa y al JEMAD la inteligencia militar necesaria para alertar sobre situaciones de interés militar y apoyar las operaciones?",
    opciones: [
      "El Centro de Inteligencia de las Fuerzas Armadas (CIFAS).",
      "El Mando Conjunto del Ciberespacio (MCCE).",
      "El Instituto Español de Estudios Estratégicos (IEEE).",
      "El Centro Geográfico del Ejército."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 15",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > El CIFAS y la Inteligencia Militar (Art. 15 RD 521/2020)",
    consejoAcademia: "No confundas el CNI (Inteligencia nacional global, adscrito al Ministro de Defensa en RD 205/2024) con el CIFAS (Inteligencia Militar Conjunta y de las operaciones, integrado en el EMAD).",
    justificacion: "El artículo 15 del Real Decreto 521/2020 regula el Centro de Inteligencia de las Fuerzas Armadas (CIFAS) dentro del Estado Mayor de la Defensa."
  },
  {
    id: "Q-W5-034",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 16 del Real Decreto 521/2020, el Mando Conjunto del Ciberespacio (MCCE) es el órgano responsable del planeamiento, dirección, coordinación, control y ejecución de las acciones conducentes a asegurar la libertad de acción de las FAS en el ámbito ciberespacial. ¿Quién es el Comandante del Mando Operativo Ciberespacial (CMOC)?",
    opciones: [
      "El Comandante del Mando Conjunto del Ciberespacio (MCCE).",
      "El Director del CESTIC.",
      "El Jefe del Mando de Transmisiones del Ejército de Tierra.",
      "El Subsecretario de Defensa."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Arts. 14 y 16",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Mando Conjunto del Ciberespacio (MCCE) y CMOC (Art. 16 RD 521/2020)",
    consejoAcademia: "Relación de mandos: MOT = GE JMCANA; MOM = ALFLOT; MOA = GJMACOM; MOC = Comandante del MCCE; MOESPA = Comandante del MASESP.",
    justificacion: "Conforme a los artículos 14 y 16 del Real Decreto 521/2020, el Comandante del Mando Conjunto del Ciberespacio (MCCE) ejerce como Comandante del Mando Operativo Ciberespacial (CMOC)."
  },

  // --- B1-T06: Instrucciones de Organización EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10) ---
  {
    id: "Q-W5-035",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME, por la que se desarrolla la organización del Ejército de Tierra (Vídeo T8), ¿cuáles son los tres grandes componentes que integran LA FUERZA del Ejército de Tierra?",
    opciones: [
      "El Cuartel General Terrestre de Alta Disponibilidad (CGTAD), la Fuerza Terrestre (FUTER) y el Mando de Canarias (MCANA).",
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE) y la Inspección General del Ejército (IGE).",
      "La Dirección de Enseñanza (DIEN), la Dirección de Sanidad (DISAN) y la Dirección de Asuntos Económicos (DIAE).",
      "La Flota, la Fuerza de Acción Marítima y la Infantería de Marina."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Organización de la Fuerza del ET",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > La Fuerza del ET: CGTAD, FUTER y MCANA",
    consejoAcademia: "¡Pregunta nº 1 del Ejército de Tierra! LA FUERZA del ET tiene 3 pilares: 1) CGTAD (Valencia/Bétera), 2) FUTER (Sevilla) y 3) MCANA (Tenerife). ¡Y recuerda que el Mando de Operaciones Especiales (MOE) y las FAMET están en FUTER (División San Marcial), mientras que el Regimiento de Guerra Electrónica 32 y el Mando de Artillería Antiaérea están en el MCANA!",
    justificacion: "La Instrucción 14/2021 del JEME estructura la Fuerza del Ejército de Tierra en el CGTAD, la Fuerza Terrestre (FUTER) y el Mando de Canarias (MCANA)."
  },
  {
    id: "Q-W5-036",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), dentro de la Fuerza Terrestre (FUTER), ¿qué unidades se integran en la División 'San Marcial' (a diferencia de la División 'Castillejos')?",
    opciones: [
      "La Brigada 'Almogávares' VI de Paracaidistas (BRIPAC), el Mando de Operaciones Especiales (MOE), las Fuerzas Aeromóviles del Ejército de Tierra (FAMET), el Mando de Tropas de Montaña y el Regimiento de Operaciones de Información nº 1.",
      "Las Comandancias Generales de Ceuta, Melilla y Baleares.",
      "El Mando de Ingenieros, el Mando de Artillería de Campaña y el Mando de Transmisiones.",
      "El Tercio de Armada y la Flotilla de Aeronaves."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Fuerza Terrestre (FUTER)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > FUTER: División Castillejos vs División San Marcial vs MATRANS",
    consejoAcademia: "Truco infalible: División 'Castillejos' = las 4 Brigadas de Combate (Aragón I, Rey Alfonso XIII II de La Legión, Galicia VII BRILAT y Guzmán el Bueno X) + RC 11. División 'San Marcial' = Fuerzas de respuesta muy rápida/específicas: BRIPAC VI, MOE, FAMET, Mando de Tropas de Montaña y ROI 1. Y en el Mando de Apoyo a la Maniobra (MAM) están MACA, MAAA, MING, MATRANS, RNBQ 1 y RINT 1.",
    justificacion: "En la Instrucción 14/2021 del JEME, la División 'San Marcial' agrupa las capacidades de respuesta inmediata y específica: BRIPAC VI, MOE, FAMET, Mando de Tropas de Montaña y ROI 1."
  },
  {
    id: "Q-W5-037",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8), ¿de qué mando de La Fuerza del Ejército de Tierra dependen orgánicamente las Comandancias Generales de Ceuta, de Melilla y de Baleares, así como la Brigada 'Canarias' XVI?",
    opciones: [
      "Del Mando de Canarias (MCANA).",
      "De la Fuerza Terrestre (FUTER).",
      "Del Cuartel General Terrestre de Alta Disponibilidad (CGTAD).",
      "De la Inspección General del Ejército (IGE)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Mando de Canarias (MCANA)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > Mando de Canarias (MCANA): Ceuta, Melilla, Baleares y BRICAN XVI",
    consejoAcademia: "¡LA GRAN TRAMPA DEL EJÉRCITO DE TIERRA! Desde la Instrucción 14/2021, Ceuta (COMGECEU), Melilla (COMGEMEL) y Baleares (COMGEBAL), junto con la Brigada 'Canarias' XVI, dependen del **Mando de Canarias (MCANA)**, cuyo General Jefe es además el Comandante del Mando Operativo Terrestre (CMOT).",
    justificacion: "La Instrucción 14/2021 del JEME encuadra en el Mando de Canarias (MCANA) a la Brigada 'Canarias' XVI y a las Comandancias Generales de Ceuta, Melilla y Baleares."
  },
  {
    id: "Q-W5-038",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), ¿qué cuatro órganos integran el APOYO A LA FUERZA del Ejército de Tierra?",
    opciones: [
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE), la Inspección General del Ejército (IGE) y la Dirección de Asuntos Económicos (DIAE), además del MADOC en su ámbito.",
      "El CGTAD, la FUTER y el MCANA.",
      "La Brigada Paracaidista, la Legión y las FAMET.",
      "El MOPS, el CIFAS y el MCCE."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Apoyo a la Fuerza y Cuartel General del ET",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > El Apoyo a la Fuerza (MAPER, MALE, IGE, DIAE) vs MADOC",
    consejoAcademia: "En el ET (Inst. 14/2021): Apoyo a la Fuerza = MAPER (Personal), MALE (Logística), IGE (Infraestructura/Acuartelamiento/Prevención) y DIAE (Económicos). ¡Ojo! El **MADOC** (Mando de Adiestramiento y Doctrina, Granada) se encuadra dentro del **Cuartel General del ET**.",
    justificacion: "En la Instrucción 14/2021 del JEME, el Apoyo a la Fuerza del ET está constituido por el MAPER, el MALE, la IGE y la DIAE, mientras que el MADOC forma parte del Cuartel General del ET."
  },
  {
    id: "Q-W5-039",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 15/2021 del AJEMA, por la que se desarrolla la organización de la Armada (Vídeo T9), ¿dónde se encuadra la Fuerza de Infantería de Marina (FIM) —compuesta por el Tercio de Armada (TEAR), la Fuerza de Protección (FUPRO) y la Fuerza de Guerra Naval Especial (FGNE)—?",
    opciones: [
      "Dentro de La Flota, que constituye el núcleo principal de la Fuerza de la Armada.",
      "Dentro de la Jefatura de Apoyo Logístico (JAL).",
      "En el Ejército de Tierra dentro de la División Castillejos.",
      "En la Dirección de Asuntos Económicos de la Armada."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA, Organización de la Fuerza de la Armada (La Flota)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T9: La Armada) > La Flota y la Fuerza de Infantería de Marina (FIM)",
    consejoAcademia: "En la Armada (Inst. 15/2021): toda la Fuerza se agrupa en **LA FLOTA** (bajo el mando del ALFLOT), que integra la Fuerza de Acción Naval (FAN), la Fuerza de Acción Marítima (FAM), la Fuerza de Infantería de Marina (FIM: TEAR + FUPRO + FGNE), la Flotilla de Aeronaves (FLOAN) y la Flotilla de Submarinos (FLOSUB).",
    justificacion: "La Instrucción 15/2021 del AJEMA integra en La Flota a la Fuerza de Acción Naval, la Fuerza de Acción Marítima, la Fuerza de Infantería de Marina, la Flotilla de Aeronaves y la Flotilla de Submarinos."
  },
  {
    id: "Q-W5-040",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeos T7, T8, T9 y T10)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Instrucción 6/2025 del JEMA, por la que se desarrolla la organización del Ejército del Aire y del Espacio (Vídeo T10), ¿cuáles son los mandos que integran LA FUERZA del Ejército del Aire y del Espacio?",
    opciones: [
      "El Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MASESP).",
      "El MAPER, el MALOG y la Dirección de Asuntos Económicos.",
      "La Flota y el Mando de Canarias del ET.",
      "El CESEDEN y la Escuela de Guerra Naval."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2025 del JEMA, La Fuerza del Ejército del Aire y del Espacio",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T10: Ejército del Aire y del Espacio) > La Fuerza del EA: MACOM, MAGEN, MACAN y MASESP",
    consejoAcademia: "¡NOVEDAD CLAVE DE LA INSTRUCCIÓN 6/2025 DEL JEMA! En los vídeos antiguos de YouTube solo salían 3 mandos en la Fuerza del EA (MACOM, MAGEN y MACAN). Con la Instrucción 6/2025 son **4 Mandos en la Fuerza del EA**: **MACOM, MAGEN, MACAN y el nuevo Mando del Espacio (MASESP)**.",
    justificacion: "La Instrucción 6/2025 del JEMA estructura la Fuerza del Ejército del Aire y del Espacio en el Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MASESP)."
  },

  // --- MÁS PREGUNTAS BLOQUE 1 (Q-W5-041 a Q-W5-060) ---
  {
    id: "Q-W5-041",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T7: EMAD)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Instrucción 65/2025 del JEMAD, por la que se regula la organización del Estado Mayor de la Defensa (Vídeo T7), ¿qué órgano del EMAD es el responsable de impulsar la transformación digital y el desarrollo de capacidades conjuntas futuras, y qué centro docente militar de altos estudios forma parte del EMAD?",
    opciones: [
      "El Estado Mayor Conjunto de la Defensa (EMACON) —junto con la Jefatura Conjunta de Sanidad/transformación— y el Centro Superior de Estudios de la Defensa Nacional (CESEDEN) como principal centro docente militar conjunto.",
      "El MADOC en Granada y la Academia General Militar de Zaragoza.",
      "El Instituto Social de las Fuerzas Armadas (ISFAS).",
      "La Subdirección General de Publicaciones y Patrimonio Cultural."
    ],
    correcta: 0,
    referencia: "RD 521/2020 e Instrucción 65/2025 del JEMAD",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T7: Organización del EMAD) > Órganos del EMAD y CESEDEN",
    consejoAcademia: "En el EMAD (Vídeo T7 / Inst. 65/2025): recuerda sus grandes órganos: Cuartel General del EMAD (con el EMACON), MOPS, CIFAS, MCCE y CESEDEN (Centro Superior de Estudios de la Defensa Nacional).",
    justificacion: "El Estado Mayor de la Defensa se articula en el Cuartel General (con el EMACON), el MOPS, el CIFAS, el MCCE y el CESEDEN."
  },
  {
    id: "Q-W5-042",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 159 de la Constitución Española, los doce miembros del Tribunal Constitucional serán designados por un período de nueve años y se renovarán por terceras partes cada:",
    opciones: [
      "Tres años (siendo propuestos 4 por el Congreso por mayoría de 3/5, 4 por el Senado por mayoría de 3/5, 2 por el Gobierno y 2 por el CGPJ).",
      "Cinco años todos a la vez.",
      "Cuatro años coincidiendo con las elecciones generales.",
      "Dos años por sorteo."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 159.1 y 159.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > El Tribunal Constitucional (Art. 159 CE)",
    consejoAcademia: "Fórmula del Tribunal Constitucional (Art. 159 CE): **12 miembros = 4 Congreso (3/5) + 4 Senado (3/5) + 2 Gobierno + 2 CGPJ**. Mandato: **9 años**, renovados por terceras partes (4 magistrados) cada **3 años**. Presidente nombrado por el Rey entre sus miembros por **3 años**.",
    justificacion: "El artículo 159 de la Constitución establece que el Tribunal Constitucional se compone de 12 miembros nombrados por el Rey por 9 años y renovados por terceras partes cada 3 años."
  },
  {
    id: "Q-W5-043",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 162.1 de la Constitución Española, ¿quiénes están legitimados para interponer el RECURSO DE INCONSTITUCIONALIDAD y quiénes para el RECURSO DE AMPARO?",
    opciones: [
      "Para el recurso de inconstitucionalidad: el Presidente del Gobierno, el Defensor del Pueblo, 50 Diputados, 50 Senadores, los órganos colegiados ejecutivos de las CC.AA. y, en su caso, las Asambleas de las mismas. Para el recurso de amparo: toda persona natural o jurídica que invoque un interés legítimo, así como el Defensor del Pueblo y el Ministerio Fiscal.",
      "Cualquier ciudadano individualmente puede interponer el recurso de inconstitucionalidad contra una ley.",
      "El Ministerio Fiscal puede interponer el recurso de inconstitucionalidad y 50 Diputados el recurso de amparo.",
      "Sólo el Rey puede interponer ambos recursos."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 162.1.a y 162.1.b",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > Legitimación en Inconstitucionalidad vs Amparo (Art. 162 CE)",
    consejoAcademia: "¡TRAMPA FAVORITA DEL TRIBUNAL! El **Defensor del Pueblo** es el ÚNICO que repite en los dos recursos (Inconstitucionalidad y Amparo). El **Ministerio Fiscal** y los **ciudadanos con interés legítimo** SOLO están en el Recurso de Amparo (nunca en el de inconstitucionalidad).",
    justificacion: "El artículo 162.1 CE diferencia los sujetos legitimados para el recurso de inconstitucionalidad (apartado a) y para el recurso de amparo (apartado b)."
  },
  {
    id: "Q-W5-044",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 167 de la Constitución Española (procedimiento ordinario de reforma constitucional), aprobada la reforma por las Cortes Generales (por mayoría de 3/5 de cada Cámara o 2/3 del Congreso y mayoría absoluta del Senado), ¿cuándo será sometida a referéndum para su ratificación?",
    opciones: [
      "Cuando así lo soliciten, dentro de los quince días siguientes a su aprobación, una décima parte (1/10) de los miembros de cualquiera de las Cámaras.",
      "Es obligatorio siempre en todos los casos aunque nadie lo pida.",
      "Está prohibido celebrar referéndum en la vía del artículo 167.",
      "Cuando lo pidan cinco concejales en el plazo de seis meses."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 167.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > Reforma Constitucional: Art. 167 vs Art. 168",
    consejoAcademia: "Compara siempre: Art. 167 (Reforma ordinaria) = 3/5 de cada Cámara + Referéndum FACULTATIVO si lo pide **1/10** de Diputados o Senadores en **15 días**. Art. 168 (Reforma agravada: revisión total, Título Preliminar, Cap. 2º Secc. 1ª Título I o Título II) = **2/3** + disolución Cortes + **2/3** + Referéndum **OBLIGATORIO**.",
    justificacion: "El artículo 167.3 CE establece que la reforma aprobada por las Cortes Generales será sometida a referéndum para su ratificación cuando así lo soliciten, dentro de los quince días siguientes a su aprobación, una décima parte de los miembros de cualquiera de las Cámaras."
  },
  {
    id: "Q-W5-045",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 8 de la Ley Orgánica 5/2005, el Consejo de Defensa Nacional es el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa. ¿Quién puede presidirlo cuando no asista el Rey?",
    opciones: [
      "El Presidente del Gobierno.",
      "El Ministro de Hacienda.",
      "El Presidente del Senado.",
      "El Defensor del Pueblo."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 8",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > El Consejo de Defensa Nacional (Art. 8 LODN)",
    consejoAcademia: "El Consejo de Defensa Nacional (Art. 8 LODN) asesora al Presidente del Gobierno; a iniciativa del Presidente puede funcionar en Pleno o como Consejo Ejecutivo, y cuando asiste el Rey lo preside Su Majestad (en caso contrario, lo preside el Presidente del Gobierno).",
    justificacion: "El artículo 8 de la LO 5/2005 regula el Consejo de Defensa Nacional como órgano colegiado asesor del Presidente del Gobierno."
  },
  {
    id: "Q-W5-046",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional (Vídeo T3)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 12 de la Ley Orgánica 5/2005, el Jefe de Estado Mayor de la Defensa (JEMAD), bajo la dependencia del Ministro de Defensa, es un órgano colaborador inmediato del Ministro en el planeamiento y ejecución de los aspectos operativos de la política militar. ¿Por qué norma se lleva a cabo su nombramiento y quién ostenta la representación institucional de las Fuerzas Armadas?",
    opciones: [
      "Es nombrado por Real Decreto acordado en Consejo de Ministros a propuesta del Presidente del Gobierno, oído el Ministro de Defensa, y ostenta la representación institucional de las Fuerzas Armadas, y la militar nacional ante las organizaciones internacionales de seguridad y defensa.",
      "Es nombrado por Orden Ministerial del Subsecretario de Defensa.",
      "Es elegido por votación de los Diputados cada dos años.",
      "No tiene rango de Secretario de Estado ni ostenta representación alguna."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 12.2 y 12.3",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Nombramiento y Funciones del JEMAD (Art. 12 LODN)",
    consejoAcademia: "¡Detalle muy preguntado! A los JEME, AJEMA y JEMA los propone el **Ministro de Defensa** (previa deliberación del Consejo de Ministros), pero al **JEMAD** lo propone el **Presidente del Gobierno**, oído el Ministro de Defensa, y tiene rango de Secretario de Estado.",
    justificacion: "El artículo 12.2 de la LO 5/2005 establece que el nombramiento del JEMAD se lleva a cabo por Real Decreto acordado en Consejo de Ministros, a propuesta del Presidente del Gobierno, oído el Ministro de Defensa."
  },
  {
    id: "Q-W5-047",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 66 de la Ley 40/2015, ¿a qué órgano directivo de un Ministerio corresponde la jefatura superior de todo el personal del Departamento y el desempeño de la inspección de los centros, dependencias y organismos afectos al mismo?",
    opciones: [
      "Al Subsecretario del Departamento.",
      "Al Secretario General Técnico.",
      "Al Subdirector General de Recursos.",
      "Al Director del Gabinete de Prensa."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 63.1.h y 63.1.i",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Competencias de los Subsecretarios (Art. 63 Ley 40/2015)",
    consejoAcademia: "El **Subsecretario** (Art. 63 Ley 40/2015) ostenta la representación ordinaria del Ministerio, dirige los servicios comunes, ejerce la **jefatura superior de todo el personal del Departamento** y tiene adscrita la Secretaría General Técnica y la Asesoría Jurídica.",
    justificacion: "El artículo 63 de la Ley 40/2015 atribuye a los Subsecretarios la jefatura superior de todo el personal del Departamento y la dirección de los servicios comunes."
  },
  {
    id: "Q-W5-048",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 59 de la Ley 40/2015, ¿mediante qué norma se crean, modifican y suprimen las Subsecretarías, las Secretarías Generales, las Secretarías Generales Técnicas, las Direcciones Generales y las Subdirecciones Generales?",
    opciones: [
      "Por Real Decreto del Consejo de Ministros, a iniciativa del Ministro interesado y a propuesta del Ministro de Hacienda y Función Pública (Transformación Digital y Función Pública).",
      "Por Real Decreto del Presidente del Gobierno (que se reserva para crear/suprimir Ministerios y Secretarías de Estado).",
      "Por Ley Orgánica aprobada por las Cortes Generales.",
      "Por resolución verbal del Subdirector General."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Arts. 57.3 y 59.1",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Creación de Órganos Superiores vs Directivos (Arts. 57 y 59 Ley 40/2015)",
    consejoAcademia: "¡Cruza siempre los dos Reales Decretos! 1) **Ministerios y Secretarías de Estado** (Órganos Superiores) = Real Decreto del **Presidente del Gobierno** (Art. 57.3). 2) **Subsecretarías, SG, SGT, DG y SDG** (Órganos Directivos) = Real Decreto del **Consejo de Ministros** (Art. 59.1). 3) Nivel inferior a Subdirección General = Orden Ministerial.",
    justificacion: "El artículo 59.1 de la Ley 40/2015 dispone que las Subsecretarías, Secretarías Generales, SGT, Direcciones Generales y Subdirecciones Generales se crean, modifican y suprimen por Real Decreto del Consejo de Ministros."
  },
  {
    id: "Q-W5-049",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 10 del Real Decreto 205/2024, ¿a qué Dirección General de la Subsecretaría de Defensa le corresponde planificar y gestionar la política de personal militar y civil, el régimen retributivo y la acción social, y a cuál le corresponde el reclutamiento, la enseñanza militar y el apoyo a la movilidad geográfica y desvinculación?",
    opciones: [
      "La primera a la Dirección General de Personal (DIGENPER) y la segunda a la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "Ambas corresponden a la Dirección General de Infraestructura (DIGENIN).",
      "Ambas corresponden a la Dirección General de Armamento y Material (DGAM).",
      "Corresponden al Centro de Inteligencia de las Fuerzas Armadas."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Arts. 10 y 11",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > DIGENPER vs DIGEREM en la SUBDEF (Arts. 10 y 11 RD 205/2024)",
    consejoAcademia: "En la SUBDEF: **DIGENPER** = gestión de personal en activo/reserva, plantillas, retribuciones, expedientes y acción social; **DIGEREM** = acceso/reclutamiento, reservistas voluntarios, enseñanza militar (formación, perfeccionamiento y altos estudios) y desarrollo profesional/salida.",
    justificacion: "Los artículos 10 y 11 del Real Decreto 205/2024 delimitan las competencias de la DIGENPER y de la DIGEREM."
  },
  {
    id: "Q-W5-050",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al artículo 9 del Real Decreto 205/2024, ¿a qué órgano directivo de la Subsecretaría de Defensa corresponden las publicaciones oficiales (como el Boletín Oficial del Ministerio de Defensa - BOD), los archivos, bibliotecas, museos y el patrimonio cultural de Defensa, así como la tramitación de los recursos administrativos?",
    opciones: [
      "A la Secretaría General Técnica (SGT) del Ministerio de Defensa.",
      "A la Dirección General de Armamento y Material (DGAM).",
      "A la Jefatura de Sistemas de Información del ET.",
      "Al Mando de Operaciones (MOPS)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 9",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Competencias de la Secretaría General Técnica (SGT) (Art. 9 RD 205/2024)",
    consejoAcademia: "La **SGT** (Secretaría General Técnica) tiene rango de Dirección General dentro de la SUBDEF y gestiona producción normativa, recursos administrativos (Subdirección General de Recursos e Información Administrativa), BOD/publicaciones y patrimonio cultural.",
    justificacion: "El artículo 9 del Real Decreto 205/2024 regula las funciones de la Secretaría General Técnica del Ministerio de Defensa."
  },
  {
    id: "Q-W5-051",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Organización Básica de las FAS (Vídeo T6)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 4 del Real Decreto 521/2020, ¿dónde está encuadrada orgánicamente la Unidad Militar de Emergencias (UME) y de quién depende operativamente cuando interviene en supuestos de grave riesgo, catástrofe o calamidad pública?",
    opciones: [
      "Es una fuerza conjunta que depende orgánicamente de la persona titular del Ministerio de Defensa y operativamente del JEMAD (a través de la cadena operativa / MOPS).",
      "Está integrada orgánicamente dentro de la División Castillejos del Ejército de Tierra.",
      "Depende orgánica y operativamente de los Ayuntamientos.",
      "Forma parte de la Secretaría General Técnica."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 4 y RD 205/2024, Art. 2",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Dependencia Orgánica y Operativa de la UME",
    consejoAcademia: "La UME es una fuerza conjunta: depende **orgánicamente** del Ministro de Defensa y **operativamente** del JEMAD.",
    justificacion: "El Real Decreto 521/2020 y el Real Decreto 205/2024 establecen la dependencia orgánica de la UME respecto del Ministro de Defensa y su dependencia operativa del JEMAD."
  },
  {
    id: "Q-W5-052",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T8: Ejército de Tierra)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8), ¿qué órgano del Cuartel General del Ejército de Tierra es el responsable de la gestión del patrimonio histórico, cultural y documental del Ejército de Tierra, incluidos sus museos y archivos?",
    opciones: [
      "El Instituto de Historia y Cultura Militar (IHCM).",
      "El Mando de Apoyo Logístico del Ejército (MALE).",
      "El Cuartel General Terrestre de Alta Disponibilidad (CGTAD).",
      "La Brigada Logística (BRILOG)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Cuartel General del ET",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > El Cuartel General del ET: EME, GABJEME, MADOC, JCISAT e IHCM",
    consejoAcademia: "Los órganos del Cuartel General del ET (Inst. 14/2021) son: el Estado Mayor del Ejército (EME), el Gabinete del JEME (GABJEME), el MADOC, la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), el Instituto de Historia y Cultura Militar (IHCM) y la Asesoría Jurídica del ET.",
    justificacion: "La Instrucción 14/2021 del JEME encuadra al Instituto de Historia y Cultura Militar (IHCM) en el Cuartel General del Ejército de Tierra."
  },
  {
    id: "Q-W5-053",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T8: Ejército de Tierra)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8), ¿dónde está encuadrada la Brigada Logística (BRILOG) y la Brigada de Sanidad (BRISAN) tras la reorganización de la Fuerza Terrestre (FUTER)?",
    opciones: [
      "Ambas forman parte de la Fuerza Terrestre (FUTER), integradas en el Mando de Apoyo a la Maniobra (MAM).",
      "Forman parte del Cuartel General del EMAD.",
      "Dependen del Mando Aéreo de Combate (MACOM).",
      "Dependen de la Flota de la Armada."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Fuerza Terrestre (Mando de Apoyo a la Maniobra - MAM)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > Mando de Apoyo a la Maniobra (MAM) en FUTER",
    consejoAcademia: "¡Ojo con esta pregunta de ET! La **BRILOG** (Brigada Logística) y la **BRISAN** (Brigada de Sanidad) son unidades operativas de apoyo logístico y sanitario en campaña y por eso están dentro de **LA FUERZA (FUTER -> Mando de Apoyo a la Maniobra - MAM)**, no en el Apoyo a la Fuerza.",
    justificacion: "La Instrucción 14/2021 del JEME encuadra la Brigada Logística (BRILOG) y la Brigada de Sanidad (BRISAN) en el Mando de Apoyo a la Maniobra (MAM) de la Fuerza Terrestre (FUTER)."
  },
  {
    id: "Q-W5-054",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T9: La Armada)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la Instrucción 15/2021 del AJEMA (Vídeo T9), ¿cuáles son los tres grandes órganos del APOYO A LA FUERZA de la Armada?",
    opciones: [
      "La Jefatura de Personal (JEPER), la Jefatura de Apoyo Logístico (JAL) y la Dirección de Asuntos Económicos (DAE).",
      "El MAPER, el MALE y la IGE.",
      "El MACOM, el MAGEN y el MACAN.",
      "El Tercio de Armada, el Tercio del Norte y el Tercio del Sur."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA, Apoyo a la Fuerza de la Armada",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T9: La Armada) > Apoyo a la Fuerza: JEPER, JAL y DAE",
    consejoAcademia: "Compara las siglas de Apoyo a la Fuerza en los 3 Ejércitos: ET = MAPER, MALE, IGE, DIAE; Armada = **JEPER, JAL y DAE**; Ejército del Aire = **MAPER, MALOG y DAE**.",
    justificacion: "La Instrucción 15/2021 del AJEMA organiza el Apoyo a la Fuerza de la Armada en la Jefatura de Personal (JEPER), la Jefatura de Apoyo Logístico (JAL) y la Dirección de Asuntos Económicos (DAE)."
  },
  {
    id: "Q-W5-055",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T9: La Armada)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a la Instrucción 15/2021 del AJEMA (Vídeo T9), dentro de la Fuerza de Infantería de Marina (FIM), ¿cuáles son las unidades que integran la Fuerza de Protección de la Armada (FUPRO)?",
    opciones: [
      "El Tercio del Norte (Ferrol), el Tercio del Sur (San Fernando), el Tercio de Levante (Cartagena), la Agrupación de Infantería de Marina de Madrid (AGRUMAD) y la Unidad de Seguridad de Canarias (USCAN).",
      "Únicamente los submarinos S-80.",
      "Las fragatas F-100 y los buques de aprovisionamiento.",
      "Los escuadrones de caza EF-18."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA, Fuerza de Infantería de Marina (FUPRO)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T9: La Armada) > Estructura de la FIM: TEAR, FUPRO y FGNE",
    consejoAcademia: "No confundas el **TEAR** (Tercio de Armada + Brigada de Infantería de Marina 'Tercio de Armada' BRIMAR, fuerza expedicionaria anfibia en San Fernando) con la **FUPRO** (Fuerza de Protección: Tercio Norte, Tercio Sur, Tercio Levante, AGRUMAD y USCAN) ni con la **FGNE** (Fuerza de Guerra Naval Especial en Cartagena).",
    justificacion: "La Fuerza de Protección (FUPRO) de la Armada agrupa a los Tercios del Norte, Sur y Levante, la AGRUMAD y la USCAN."
  },
  {
    id: "Q-W5-056",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T10: Ejército del Aire y del Espacio)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según la Instrucción 6/2025 del JEMA (Vídeo T10), ¿qué unidad del Ejército del Aire y del Espacio es el centro responsable de la vigilancia y conocimiento de la situación espacial (SSA/SST), integrado en el ámbito del Mando del Espacio (MASESP)?",
    opciones: [
      "El Centro de Operaciones de Vigilancia Espacial (COVE), ubicado en la Base Aérea de Torrejón.",
      "El Instituto Hidrográfico de la Marina en Cádiz.",
      "La Escuela Militar de Montaña y Operaciones Especiales en Jaca.",
      "El Archivo General Militar de Segovia."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2025 del JEMA, Mando del Espacio (MASESP) y COVE",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T10: Ejército del Aire y del Espacio) > Mando del Espacio (MASESP) y COVE",
    consejoAcademia: "El **COVE** (Centro de Operaciones de Vigilancia Espacial) es la unidad clave operativa bajo el Mando del Espacio (**MASESP**) en el Ejército del Aire y del Espacio.",
    justificacion: "La Instrucción 6/2025 del JEMA regula el Mando del Espacio (MASESP), del que depende el Centro de Operaciones de Vigilancia Espacial (COVE)."
  },
  {
    id: "Q-W5-057",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española de 1978 (Vídeos T1 y T2)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 116 de la Constitución Española, ¿quién declara el ESTADO DE EXCEPCIÓN, qué requisito previo exige y cuál es su plazo máximo inicial?",
    opciones: [
      "Será declarado por el Gobierno mediante decreto acordado en Consejo de Ministros, previa autorización del Congreso de los Diputados, y su duración no podrá exceder de treinta días, prorrogables por otro plazo igual con los mismos requisitos.",
      "Lo declara el Gobierno dando cuenta al Congreso por un plazo máximo de quince días.",
      "Lo declara el Congreso de los Diputados por mayoría absoluta sin límite de tiempo.",
      "Lo declara el Senado a propuesta de los Alcaldes por sesenta días."
    ],
    correcta: 0,
    referencia: "Constitución Española, Art. 116.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeo T2) > Estados de Alarma, Excepción y Sitio (Art. 116 CE)",
    consejoAcademia: "Tríada del Art. 116 CE: 1) **Alarma** = Declara el Gobierno por 15 días dando cuenta al Congreso (prórroga requiere autorización del Congreso). 2) **Excepción** = Declara el Gobierno **previa autorización del Congreso** por máximo **30 días** (+30 prorrogables). 3) **Sitio** = Declara el **Congreso por mayoría absoluta** a propuesta exclusiva del Gobierno.",
    justificacion: "El artículo 116.3 CE establece que el estado de excepción será declarado por el Gobierno mediante decreto acordado en Consejo de Ministros, previa autorización del Congreso de los Diputados, sin exceder de 30 días prorrogables por otro plazo igual."
  },
  {
    id: "Q-W5-058",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP (Vídeo T4)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 72 de la Ley 40/2015, los Delegados del Gobierno en las Comunidades Autónomas representan al Gobierno de la Nación en el territorio de la respectiva Comunidad Autónoma. ¿Qué rango orgánico tienen y de quién dependen orgánicamente?",
    opciones: [
      "Tienen rango de Subsecretario y dependen orgánicamente de la Presidencia del Gobierno (y funcionalmente del Ministerio competente por razón de la materia).",
      "Tienen rango de Subdirector General y dependen de los Alcaldes.",
      "Tienen rango de Ministro y dependen del Senado.",
      "Son elegidos por las Asambleas Autonómicas con rango de Director General."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 72",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Delegados y Subdelegados del Gobierno (Arts. 72 y 74 Ley 40/2015)",
    consejoAcademia: "¡Cruza siempre Delegado vs Subdelegado del Gobierno! **Delegado del Gobierno en CC.AA.** = Rango de **Subsecretario**, nombrado por RD del Consejo de Ministros a propuesta del Presidente del Gobierno, depende orgánicamente de Presidencia. **Subdelegado del Gobierno en la provincia** = Nivel de **Subdirector General**, nombrado por el Delegado del Gobierno por libre designación entre funcionarios A1.",
    justificacion: "El artículo 72 de la Ley 40/2015 asigna a los Delegados del Gobierno en las Comunidades Autónomas el rango de Subsecretario y dependencia orgánica de la Presidencia del Gobierno."
  },
  {
    id: "Q-W5-059",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "RD 205/2024 Ministerio de Defensa (Vídeo T5)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 6 del Real Decreto 205/2024, ¿a qué Dirección General de la SEDEF le corresponde planificar y programar las políticas de armamento y material y dirigir y controlar su ejecución, incluyendo los programas de obtención y modernización?",
    opciones: [
      "A la Dirección General de Armamento y Material (DGAM).",
      "A la Dirección General de Personal (DIGENPER).",
      "A la Secretaría General Técnica (SGT).",
      "A la Inspección General de Sanidad de la Defensa (IGESAN)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 5",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Competencias de la DGAM vs DIGEID (Arts. 5 y 5 bis / 6 RD 205/2024)",
    consejoAcademia: "En la SEDEF (RD 205/2024): **DGAM** = obtención, programas de armamento y material e inspección industrial; **DIGEID** = estrategia industrial de defensa, innovación tecnológica e impulso internacional de la base industrial.",
    justificacion: "El Real Decreto 205/2024 atribuye a la DGAM la planificación, programación y ejecución de la política de armamento y material."
  },
  {
    id: "Q-W5-060",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD, ET, Armada y EA (Vídeo T10: Ejército del Aire y del Espacio)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la Instrucción 6/2025 del JEMA (Vídeo T10), ¿qué unidad del Cuartel General del Ejército del Aire y del Espacio tiene por misión conservar, investigar y difundir el patrimonio histórico, cultural, museístico y bibliográfico aeronáutico?",
    opciones: [
      "El Servicio Histórico y Cultural del Ejército del Aire y del Espacio (SHYCEA).",
      "El Instituto de Historia y Cultura Militar (IHCM).",
      "El Órgano de Historia y Cultura Naval (OHCN).",
      "El Centro Cartográfico y Fotográfico (CECAF)."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2025 del JEMA, Cuartel General del EA (SHYCEA)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T10: Ejército del Aire y del Espacio) > Órganos de Historia y Cultura de los 3 Ejércitos",
    consejoAcademia: "Compara los 3 órganos de Historia y Cultura: ET = **IHCM** (Instituto de Historia y Cultura Militar); Armada = **OHCN** (Órgano de Historia y Cultura Naval); EA = **SHYCEA** (Servicio Histórico y Cultural del Ejército del Aire y del Espacio).",
    justificacion: "En el Cuartel General del Ejército del Aire y del Espacio se encuadra el Servicio Histórico y Cultural del Ejército del Aire y del Espacio (SHYCEA)."
  },

  // ==========================================================================
  // BLOQUE 2: JURÍDICO-SOCIAL (B2-T01 a B2-T08) — 80 NUEVAS PREGUNTAS (Q-W5-061 a Q-W5-140)
  // ==========================================================================

  // --- B2-T01: Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa y Marinería (Vídeos T11 y T12) ---
  {
    id: "Q-W5-061",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 6 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), el compromiso inicial de los militares profesionales de tropa y marinería puede renovarse hasta alcanzar una duración máxima de:",
    opciones: [
      "Seis años.",
      "Tres años.",
      "Diez años.",
      "Cuarenta y cinco años."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Art. 6 y Art. 8",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006 Tropa y Marinería) > Compromiso Inicial (2 o 3 años, renovable hasta 6 años) y Larga Duración (hasta 45 años)",
    consejoAcademia: "¡Números sagrados de la Ley 8/2006 (Vídeo T12)! 1) **Compromiso inicial**: 2 o 3 años, renovable por periodos de 2 o 3 años hasta un máximo de **6 años**. 2) **Compromiso de Larga Duración (CLD)**: se suscribe tras más de **5 años** de servicios (al cumplir los 6 del inicial) y llega hasta los **45 años de edad**. 3) **Permanencia**: se accede teniendo suscrito el CLD.",
    justificacion: "El artículo 6 de la Ley 8/2006 establece que el compromiso inicial es de 2 o 3 años y podrá renovarse hasta alcanzar una duración máxima de 6 años."
  },
  {
    id: "Q-W5-062",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 10 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), ¿cuál de las siguientes es causa de RESOLUCIÓN del compromiso de larga duración con derecho a percibir la prima por servicios prestados y acceso a las medidas de incorporación laboral?",
    opciones: [
      "El cumplimiento de la edad de cuarenta y cinco años (pasando en su caso a la condición de Reservista de Especial Disponibilidad si cuenta con al menos dieciocho años de servicios).",
      "La pérdida de la nacionalidad española.",
      "La imposición de pena principal o accesoria de pérdida de empleo.",
      "La renuncia voluntaria al día siguiente de firmar el compromiso inicial."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Arts. 10 y 17",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006 Tropa y Marinería) > Finalización del CLD a los 45 Años y RED (18 años de servicio)",
    consejoAcademia: "Recuerda los requisitos de **Reservista de Especial Disponibilidad (RED)** en la Ley 8/2006 (Art. 17): cumplir **45 años de edad** habiendo cumplido al menos **18 años de servicios** y solicitarlo. La condición de RED se mantiene hasta cumplir los **65 años de edad**.",
    justificacion: "Los artículos 10 y 17 de la Ley 8/2006 regulan la finalización del compromiso de larga duración al cumplir los 45 años de edad y el acceso a la condición de Reservista de Especial Disponibilidad con al menos 18 años de servicio."
  },
  {
    id: "Q-W5-063",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 16 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), para el ingreso en los centros docentes militares de formación con el fin de acceder por promoción interna a las Escalas de Suboficiales, ¿qué porcentaje de las plazas convocadas se reservará como mínimo para los militares profesionales de tropa y marinería?",
    opciones: [
      "Al menos el 80 por ciento de las plazas convocadas (y en algunos supuestos la totalidad de las mismas).",
      "El 10 por ciento de las plazas.",
      "El 25 por ciento de las plazas.",
      "No existe reserva alguna de plazas en la Ley 8/2006."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Art. 15",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006 Tropa y Marinería) > Promoción Interna a Suboficiales (Art. 15 Ley 8/2006)",
    consejoAcademia: "Dato clásico del Vídeo T12 (Art. 15 Ley 8/2006): para acceso a las Escalas de Suboficiales por promoción interna se reserva **al menos el 80%** de las plazas convocadas a los militares profesionales de tropa y marinería que lleven al menos 1 año de tiempo de servicios (según Ley 39/2007).",
    justificacion: "El artículo 15 de la Ley 8/2006 establece una reserva mínima del 80% de las plazas convocadas para el acceso a las Escalas de Suboficiales por promoción interna."
  },
  {
    id: "Q-W5-064",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 20 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), ¿qué consideración tendrá el tiempo de servicios prestados en las Fuerzas Armadas como militar profesional de tropa y marinería para el acceso a las Administraciones Públicas, y qué porcentaje de plazas se reserva para el acceso a la Escala de Cabos y Guardias de la Guardia Civil y a la Policía Nacional?",
    opciones: [
      "Se considerará como mérito en los sistemas de selección de las Administraciones Públicas; reservándose al menos un 40% de las plazas en la Guardia Civil (ampliable al 50%) y hasta un 20% en la Policía Nacional para quienes lleven más de 5 años de servicios.",
      "No se valora como mérito en ninguna oposición pública.",
      "Se reserva el 100% de las plazas de Jueces y Fiscales.",
      "Sólo se valora si se han prestado más de treinta años de servicio."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Arts. 20 y 21",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006 Tropa y Marinería) > Salidas Profesionales: Guardia Civil, Policía Nacional y AAPP (Arts. 20-21)",
    consejoAcademia: "¡Cruza siempre los porcentajes de la Ley 8/2006 con más de **5 años de servicios**!: Guardia Civil = mínimo **40%** (en convocatorias suele llegar al 50%); Policía Nacional (Escala Básica) = reserva de plazas (20%); Personal laboral de Defensa = **al menos el 50%** de las plazas; Vigilancia Aduanera / Instituciones Penitenciarias = reserva específica.",
    justificacion: "Los artículos 20 y 21 de la Ley 8/2006 regulan la valoración del tiempo de servicios como mérito y los cupos de reserva para Guardia Civil, Policía Nacional y personal laboral del Ministerio de Defensa."
  },
  {
    id: "Q-W5-065",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 26 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), los Cuerpos Comunes de las Fuerzas Armadas son cuatro. ¿Cuáles son?",
    opciones: [
      "Cuerpo Jurídico Militar, Cuerpo Militar de Intervención, Cuerpo Militar de Sanidad y Cuerpo de Músicas Militares.",
      "Cuerpo General, Cuerpo de Intendencia, Cuerpo de Ingenieros Politécnicos y Cuerpo de Especialistas.",
      "Cuerpo de Infantería de Marina, Cuerpo de Ingenieros de la Armada y Cuerpo de Intendencia.",
      "Cuerpo de la Guardia Civil y Cuerpo Nacional de Policía."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 25.2",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Los 4 Cuerpos Comunes de las FAS (Art. 25 Ley 39/2007)",
    consejoAcademia: "Los 4 Cuerpos Comunes de las FAS (dependientes de la SUBDEF en gestión de personal) son: **Jurídico Militar, Militar de Intervención, Militar de Sanidad y Músicas Militares**.",
    justificacion: "El artículo 25.2 de la Ley 39/2007 enumera los cuatro Cuerpos Comunes de las Fuerzas Armadas."
  },
  {
    id: "Q-W5-066",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 89 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), existen cuatro sistemas de ascenso en las Fuerzas Armadas. ¿Mediante qué sistema se asciende al empleo de Cabo Primero y mediante cuál al de Cabo Mayor?",
    opciones: [
      "A Cabo Primero por concurso o concurso-oposición; y a Cabo Mayor por el sistema de elección.",
      "A Cabo Primero por antigüedad pura y a Cabo Mayor por sorteo.",
      "Ambos empleos se alcanzan exclusivamente por antigüedad sin evaluación.",
      "A Cabo Primero por elección y a Cabo Mayor por concurso-oposición."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Arts. 89 y 90",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Los 4 Sistemas de Ascenso en Tropa y Marinería (Arts. 89 y 90)",
    consejoAcademia: "¡Tabla de ascensos en la Escala de Tropa y Marinería (Art. 90 Ley 39/2007) que cae todos los años!: 1) A **Cabo** y a **Cabo 1º** = **Concurso o Concurso-Oposición**; 2) A **Cabo Mayor** = **Elección** (igual que a Oficial General y a Suboficial Mayor).",
    justificacion: "El artículo 90 de la Ley 39/2007 establece que los ascensos a Cabo y Cabo Primero se producirán por concurso o concurso-oposición, y el ascenso a Cabo Mayor por el sistema de elección."
  },
  {
    id: "Q-W5-067",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 101 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), los destinos, según su forma de asignación, son de tres tipos. ¿Cuáles son?",
    opciones: [
      "De libre designación, de concurso de méritos y de provisión por antigüedad.",
      "Ordinarios, extraordinarios y secretos.",
      "Municipales, provinciales y autonómicos.",
      "Por sorteo, por oposición y por herencia."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 100",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Clasificación de los Destinos (Art. 100 Ley 39/2007)",
    consejoAcademia: "Los 3 tipos de destinos (Art. 100 Ley 39/2007) son: **Libre designación** (pueden ser cesados discrecionalmente), **Concurso de méritos** y **Provisión por antigüedad**.",
    justificacion: "El artículo 100 de la Ley 39/2007 clasifica los destinos en de libre designación, de concurso de méritos y de provisión por antigüedad."
  },
  {
    id: "Q-W5-068",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 107 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), ¿cuáles son todas las situaciones administrativas en que pueden hallarse los militares profesionales?",
    opciones: [
      "Servicio activo, Servicios especiales, Excedencia, Suspensión de funciones, Suspensión de empleo y Reserva.",
      "Únicamente Servicio activo, Reserva y Retiro (el retiro es el cese definitivo en la relación de servicios profesionales, no una situación administrativa).",
      "Activo, Vacaciones, Baja médica y Jubilación.",
      "En plaza, En comisión y En expectativa."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 107 y Art. 114",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Las 6 Situaciones Administrativas vs El Retiro (Arts. 107 y 114)",
    consejoAcademia: "¡TRAMPA MORTAL DE EXAMEN! Las situaciones administrativas son **6** (Servicio activo, Servicios especiales, Excedencia, Suspensión de funciones, Suspensión de empleo y Reserva). **¡EL RETIRO NO ES UNA SITUACIÓN ADMINISTRATIVA!** (El retiro es la extinción de la relación de servicios profesionales, Art. 114).",
    justificacion: "El artículo 107 de la Ley 39/2007 enumera las seis situaciones administrativas, mientras que el retiro supone el cese definitivo en la relación de servicios profesionales."
  },
  {
    id: "Q-W5-069",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 113 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), ¿a qué edad pasan a la situación de RESERVA los militares profesionales de tropa y marinería que tienen una relación de servicios de carácter PERMANENTE?",
    opciones: [
      "Al cumplir los cincuenta y ocho (58) años de edad.",
      "Al cumplir los cuarenta y cinco (45) años de edad.",
      "Al cumplir los sesenta y cinco (65) años de edad.",
      "Al cumplir los cincuenta (50) años de edad."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 113.6",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Pase a la Reserva del Militar Permanente de Tropa (58 años) vs Retiro (65 años)",
    consejoAcademia: "¡No confundas las 3 edades de Tropa! 1) **45 años** = Fin del Compromiso de Larga Duración (para los NO permanentes). 2) **58 años** = Pase a la situación de **RESERVA** del militar de Tropa y Marinería **PERMANENTE** (Art. 113.6 Ley 39/2007). 3) **65 años** = Pase a **RETIRO** (Art. 114).",
    justificacion: "El artículo 113.6 de la Ley 39/2007 dispone que los militares profesionales de tropa y marinería con una relación de servicios de carácter permanente pasarán a la situación de reserva al cumplir los cincuenta y ocho años de edad."
  },
  {
    id: "Q-W5-070",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según los artículos 111 y 112 de la Ley 39/2007 (Vídeo T11), ¿qué diferencia fundamental de efectos existe entre la situación de SUSPENSIÓN DE FUNCIONES y la de SUSPENSIÓN DE EMPLEO en cuanto al cese en el destino?",
    opciones: [
      "En la suspensión de funciones el cese en el destino se produce cuando exceda de seis meses de duración (o cuando se acuerde por procesamiento/imputación); en cambio, la suspensión de empleo supone SIEMPRE el cese en el destino que se venía desempeñando y la pérdida de puestos en el escalafón.",
      "En la suspensión de empleo nunca se pierde el destino y en la suspensión de funciones se pierde desde el primer día.",
      "Ambas situaciones sólo pueden durar un máximo de quince días.",
      "En ambas situaciones el militar percibe el 100% de sus retribuciones complementarias."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Arts. 111 y 112",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Suspensión de Funciones vs Suspensión de Empleo (Arts. 111 y 112)",
    consejoAcademia: "¡Regla de oro del Vídeo T11! **Suspensión de EMPLEO** (sanción extraordinaria o pena) = cese en el destino **SIEMPRE** (desde el primer día) + tiempo no computa ni para ascenso ni permanece inmóvil en el escalafón. **Suspensión de FUNCIONES** = cese en el destino solo si supera los **6 meses** (o si el Ministro lo acuerda en procedimiento penal).",
    justificacion: "Los artículos 111 y 112 de la Ley 39/2007 regulan los efectos de la suspensión de funciones y de la suspensión de empleo sobre el destino y el cómputo de tiempo."
  }
];

const WAVE5_QUESTIONS_PART2 = [
  // --- B2-T02: Reales Ordenanzas para las Fuerzas Armadas RD 96/2009 (Vídeo T13) ---
  {
    id: "Q-W5-071",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 1 de las Reales Ordenanzas para las Fuerzas Armadas (Real Decreto 96/2009, Vídeo T13), éstas constituyen:",
    opciones: [
      "El código de conducta de los militares, definen los principios éticos y las reglas de comportamiento de acuerdo con la Constitución y el resto del ordenamiento jurídico.",
      "Un código penal aplicable a todos los ciudadanos civiles y extranjeros.",
      "Un reglamento exclusivamente económico sobre retribuciones.",
      "Una norma con rango de Ley Orgánica aprobada por el Senado."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 1",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Objeto y Ámbito de Aplicación (Arts. 1 y 2)",
    consejoAcademia: "Definición literal del Art. 1 RROO: constituyen el **CÓDIGO DE CONDUCTA de los militares**, definen los principios éticos y las reglas de comportamiento y deben servir de guía para fomentar el amor a España, el honor, la disciplina y el valor.",
    justificacion: "El artículo 1 del Real Decreto 96/2009 define las Reales Ordenanzas como el código de conducta de los militares."
  },
  {
    id: "Q-W5-072",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 2 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), respecto a los miembros del Cuerpo de la Guardia Civil:",
    opciones: [
      "Dada su naturaleza militar y la condición de militar de sus miembros, en su normativa específica se recogerá lo que disponen estas Reales Ordenanzas en aquello que les sea aplicable, y en todo caso les serán de aplicación cuando, en el cumplimiento de misiones de carácter militar o integrados en unidades militares, dependan del Ministro de Defensa.",
      "No les son aplicables en ningún caso ni siquiera en tiempo de guerra.",
      "Se aplican únicamente a los Policías Locales y Autonómicos.",
      "Sólo se les aplican cuando están de vacaciones."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 2.2",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Aplicación a Militares, Alumnos, Reservistas y Guardia Civil (Art. 2)",
    consejoAcademia: "El Art. 2 RROO aplica a todos los militares profesionales, a los **alumnos** de la enseñanza militar de formación, a los **reservistas y aspirantes a reservistas** cuando estén incorporados a las FAS, y a la **Guardia Civil** en lo aplicable y siempre que cumplan misiones militares o integrados en unidades militares bajo dependencia del Ministro de Defensa.",
    justificacion: "El artículo 2.2 del Real Decreto 96/2009 regula la aplicación de las Reales Ordenanzas a los miembros de la Guardia Civil."
  },
  {
    id: "Q-W5-073",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 8 de las Reales Ordenanzas (RD 96/2009), la DISCIPLINA, factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado, será practicada y exigida en las Fuerzas Armadas como:",
    opciones: [
      "Norma de actuación. Tiene su expresión colectiva en el acatamiento a la Constitución y su manifestación individual en el cumplimiento de las órdenes recibidas.",
      "Un castigo discrecional sin sujeción a las leyes.",
      "Expresión individual en el acatamiento a la Constitución y expresión colectiva en el cumplimiento de las órdenes.",
      "Una recomendación voluntaria sólo aplicable a la escala de tropa."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 8",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > La Disciplina: Expresión Colectiva e Individual (Art. 8)",
    consejoAcademia: "¡TRAMPA CLÁSICA DEL TRIBUNAL! En los exámenes te cambian 'colectiva' por 'individual': Expresión **COLECTIVA** = acatamiento a la **Constitución**; Manifestación **INDIVIDUAL** = cumplimiento de las **órdenes recibidas**.",
    justificacion: "El artículo 8 del Real Decreto 96/2009 establece que la disciplina tiene su expresión colectiva en el acatamiento a la Constitución y su manifestación individual en el cumplimiento de las órdenes recibidas."
  },
  {
    id: "Q-W5-074",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 48 de las Reales Ordenanzas (RD 96/2009), si las órdenes entrañan la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar:",
    opciones: [
      "No estará obligado a obedecerlas; en todo caso asumirá la grave responsabilidad de su acción u omisión.",
      "Deberá obedecerlas primero y presentar una queja seis meses después.",
      "Quedará exento de toda responsabilidad penal si la orden fue dada por escrito.",
      "Deberá someter la orden a votación de la compañía."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 48",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Límites a la Obediencia (Art. 48)",
    consejoAcademia: "Art. 48 RROO: Si la orden entraña ejecución de actos constitutivos de **DELITO** (en especial contra la CE o personas/bienes protegidos en conflicto armado), el militar **NO estará obligado a obedecerlas**, asumiendo en todo caso la grave responsabilidad de su acción u omisión.",
    justificacion: "El artículo 48 del Real Decreto 96/2009 regula los límites de la obediencia ante órdenes constitutivas de delito."
  },
  {
    id: "Q-W5-075",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según los artículos 54 y 55 de las Reales Ordenanzas (RD 96/2009), la preparación para el ejercicio del mando y la capacidad de decisión se caracterizan porque el mando:",
    opciones: [
      "En el ejercicio de su autoridad será prudente en la toma de decisiones, fruto del análisis de la situación y la valoración de la información disponible, las expresará en órdenes concretas, claras y concisas, y no podrá renunciar al ejercicio de sus atribuciones ni traspasar su responsabilidad a los subordinados.",
      "Puede renunciar libremente a sus atribuciones y delegar toda su responsabilidad en los subordinados cuando la situación sea difícil.",
      "Debe expresar sus órdenes de forma ambigua para no comprometerse.",
      "No necesita supervisar la ejecución de sus órdenes."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Arts. 55, 59 y 61",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Del Mando: Responsabilidad Irrenunciable y Órdenes (Arts. 55-62)",
    consejoAcademia: "En el Título III (De la acción de mando): la responsabilidad en el ejercicio del mando militar **NO es renunciable ni puede ser compartida** (Art. 56), y las órdenes deben ser **concretas, claras y concisas** (Art. 61).",
    justificacion: "Los artículos 55 a 61 del Real Decreto 96/2009 establecen el carácter irrenunciable de la responsabilidad del mando y las características de las órdenes."
  },
  {
    id: "Q-W5-076",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 36 de las Reales Ordenanzas (RD 96/2009), cuando un militar tenga alguna queja o reclamación sobre asuntos del servicio que puedan afectar a sus intereses o considere perjudicados sus derechos, la presentará:",
    opciones: [
      "Con buen modo y por conducto regular, haciéndolo de forma individual y nunca colectiva.",
      "De forma anónima a través de los medios de comunicación social.",
      "Colectivamente mediante recogida de firmas en el acuartelamiento.",
      "Directamente ante el Consejo de Seguridad de las Naciones Unidas."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 36",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Quejas y Reclamaciones por Conducto Regular (Art. 36)",
    consejoAcademia: "Fórmula clásica del Art. 36 RROO: las quejas o reclamaciones se hacen **con buen modo, por conducto regular y de forma individual**.",
    justificacion: "El artículo 36 del Real Decreto 96/2009 regula la presentación de quejas y reclamaciones por conducto regular y con buen modo."
  },

  // --- B2-T03: LO 9/2011 Derechos y Deberes de los Miembros de las FAS (Vídeo T14) ---
  {
    id: "Q-W5-077",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 7 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas (Vídeo T14), el militar está sujeto al deber de neutralidad política y sindical. En consecuencia, ¿qué tiene expresamente prohibido?",
    opciones: [
      "Fundar partidos políticos o sindicatos, así como afiliarse o colaborar en ellos, y realizar actividades políticas o sindicales o asistir públicamente a actos de dicha naturaleza vistiendo el uniforme o haciendo uso de su condición militar.",
      "Ejercer el derecho de sufragio activo en las elecciones generales.",
      "Pertenecer a asociaciones culturales, deportivas o filantrópicas.",
      "Leer prensa escrita fuera del horario de servicio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 7",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Neutralidad Política y Sindical (Art. 7)",
    consejoAcademia: "El militar NO puede afiliarse a partidos políticos ni sindicatos ni ejercer derecho de huelga (Arts. 7 y 14 LO 9/2011). Sí puede asociarse en **Asociaciones Profesionales de miembros de las FAS** inscritas en el **RAPFAS** (o en asociaciones civiles de carácter cultural, deportivo, social o humanitario).",
    justificacion: "El artículo 7 de la LO 9/2011 consagra el deber de neutralidad política y sindical de los miembros de las Fuerzas Armadas."
  },
  {
    id: "Q-W5-078",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 13 de la Ley Orgánica 9/2011 (Vídeo T14), en relación con el derecho de reunión y manifestación, el militar:",
    opciones: [
      "No podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical. Tampoco podrá asistir a manifestaciones o reuniones en lugares de tránsito público vistiendo el uniforme o haciendo uso de su condición militar.",
      "Puede asistir de uniforme a cualquier manifestación política siempre que sea en domingo.",
      "Puede organizar mítines sindicales dentro de los acuartelamientos.",
      "Tiene prohibido asistir a cualquier reunión familiar en su domicilio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 13.1",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Derecho de Reunión y Manifestación (Art. 13)",
    consejoAcademia: "Art. 13 LO 9/2011: Prohibido organizar o participar activamente en reuniones/manifestaciones políticas o sindicales, y prohibido asistir a reuniones/manifestaciones en lugares de tránsito público vistiendo el uniforme o invocando su condición militar. Las reuniones en las unidades requieren autorización previa de su Jefe.",
    justificacion: "El artículo 13.1 de la LO 9/2011 regula los límites al ejercicio del derecho de reunión y manifestación de los miembros de las Fuerzas Armadas."
  },
  {
    id: "Q-W5-079",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 34 de la Ley Orgánica 9/2011 (Vídeo T14), respecto a las Asociaciones Profesionales de miembros de las Fuerzas Armadas:",
    opciones: [
      "Deberán tener ámbito nacional, se inscribirán en el Registro de Asociaciones Profesionales de miembros de las Fuerzas Armadas (RAPFAS) habilitado en el Ministerio de Defensa, y los militares sólo podrán estar afiliados a UNA asociación profesional de las reguladas en este capítulo.",
      "Pueden tener ámbito municipal o provincial y un militar puede afiliarse a cinco asociaciones profesionales a la vez.",
      "Pueden convocar huelgas generales y negociar convenios colectivos laborales.",
      "Se financian mediante cuotas aportadas por partidos políticos y sindicatos."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 33, 34 y 36",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Asociaciones Profesionales y RAPFAS (Arts. 33-45)",
    consejoAcademia: "4 reglas de oro de las Asociaciones Profesionales (LO 9/2011): 1) Ámbito **NACIONAL**; 2) Inscritas en el **RAPFAS** (Ministerio de Defensa); 3) Solo se puede estar afiliado a **UNA** asociación profesional; 4) Los miembros en retiro solo pueden permanecer afiliados si ya lo estaban antes de pasar a retiro (sin formar parte de COPERFAS).",
    justificacion: "Los artículos 33 a 36 de la LO 9/2011 establecen el ámbito nacional, la inscripción en el RAPFAS y la afiliación única."
  },
  {
    id: "Q-W5-080",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 48 de la Ley Orgánica 9/2011 (Vídeo T14), para que una asociación profesional inscrita en el RAPFAS pueda formar parte del Consejo de Personal de las Fuerzas Armadas (COPERFAS), ¿qué porcentajes mínimos de afiliados en servicio activo o reserva con destino debe acreditar?",
    opciones: [
      "El 1% del total de los efectivos de las Fuerzas Armadas cuando la asociación sea de ámbito abierto a todas las categorías; el 3% de los efectivos de su categoría si es exclusiva de Oficiales o de Suboficiales; o el 1,5% de los efectivos de su categoría si es exclusiva de Tropa y Marinería.",
      "El 50% de los efectivos en todos los casos.",
      "El 10% para Tropa, el 20% para Suboficiales y el 30% para Oficiales.",
      "No se exige ningún porcentaje de afiliados para entrar en el COPERFAS."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 48.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Porcentajes para entrar en COPERFAS: 1% - 3% - 1,5% (Art. 48.2)",
    consejoAcademia: "¡LA REGLA DEL **1% - 3% - 1,5%** DEL COPERFAS (Art. 48.2 LO 9/2011)! Memorízala así: Todas las categorías = **1%**; Solo Oficiales o Solo Suboficiales = **3%**; Solo Tropa y Marinería = **1,5%**.",
    justificacion: "El artículo 48.2 de la LO 9/2011 fija los porcentajes del 1% (general), 3% (oficiales o suboficiales) y 1,5% (tropa y marinería) para acceder al COPERFAS."
  },
  {
    id: "Q-W5-081",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 54 de la Ley Orgánica 9/2011 (Vídeo T14), el Observatorio de la Vida Militar es un órgano colegiado, de carácter asesor y consultivo, adscrito a las Cortes Generales. ¿De cuántos miembros se compone, quién los elige y cuál es la duración de su mandato?",
    opciones: [
      "Se compone de nueve personalidades de reconocido prestigio (5 elegidas por el Congreso de los Diputados y 4 por el Senado), por un mandato de cinco años, siendo su cargo gratuito e incompatible con la situación de servicio activo.",
      "Se compone de doce magistrados elegidos por el Rey por nueve años.",
      "Se compone de veinte vocales nombrados por el Ministro de Defensa por cuatro años.",
      "Se compone de seis generales en activo con sueldo de Secretario de Estado."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 54 y 55",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Observatorio de la Vida Militar: 9 miembros (5 Congreso + 4 Senado) por 5 años",
    consejoAcademia: "¡No confundas el **Observatorio de la Vida Militar** (LO 9/2011, Art. 54: **9 miembros = 5 Congreso + 4 Senado**, mandato **5 años**, adscrito a las Cortes Generales) con el **Observatorio Militar para la Igualdad** (Orden DEF/1113/2021, presidido por la Subsecretaria de Defensa)!",
    justificacion: "Los artículos 54 y 55 de la LO 9/2011 establecen que el Observatorio de la Vida Militar está integrado por 9 miembros (5 elegidos por el Congreso y 4 por el Senado) por un mandato de 5 años."
  },
  {
    id: "Q-W5-082",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 22 de la Ley Orgánica 9/2011 (Vídeo T14), el militar tiene el deber de disponibilidad permanente para el servicio, que se adaptará a las características propias del destino y a las circunstancias de la situación. En relación con el lugar de residencia:",
    opciones: [
      "El lugar de residencia habitual del militar será el del municipio de su destino, aunque podrá ser autorizado a fijarla en otro distinto siempre que se asegure el adecuado cumplimiento de sus obligaciones profesionales.",
      "El militar no puede salir nunca del término municipal de su unidad ni siquiera en días festivos.",
      "El militar puede residir en cualquier continente sin comunicarlo a su unidad.",
      "La residencia la fija obligatoriamente el Alcalde de la localidad."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Arts. 22 y 23",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Disponibilidad Permanente y Residencia (Arts. 22 y 23)",
    consejoAcademia: "Art. 23 LO 9/2011: La residencia habitual es la del municipio de su destino, pero se puede autorizar fijarla en otro municipio distinto siempre que permita cumplir adecuadamente sus obligaciones y tiempos de incorporación.",
    justificacion: "El artículo 23 de la LO 9/2011 regula la residencia y los desplazamientos de los miembros de las Fuerzas Armadas."
  },

  // --- B2-T04: LO 8/2014 Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15) ---
  {
    id: "Q-W5-083",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 11 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas (Vídeo T15), ¿cuáles son las sanciones que pueden imponerse por la comisión de FALTAS LEVES, por FALTAS GRAVES y por FALTAS MUY GRAVES?",
    opciones: [
      "Por faltas leves: reprensión, privación de salida de 1 a 8 días, sanción económica de 1 a 7 días y arresto de 1 a 14 días. Por faltas graves: sanción económica de 8 a 15 días, arresto de 15 a 30 días, pérdida de destino y baja en el Centro Docente Militar de Formación. Por faltas muy graves: arresto de 31 a 60 días, suspensión de empleo, separación del servicio y resolución de compromiso.",
      "Por faltas leves: arresto de 15 a 30 días y pérdida de destino.",
      "Por faltas graves: separación del servicio y arresto de 31 a 60 días.",
      "Por faltas muy graves: privación de salida de 1 a 8 días."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 11",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Cuadro General de Sanciones (Art. 11)",
    consejoAcademia: "¡CUADRO SAGRADO DEL ART. 11 LO 8/2014! Memoriza los tramos exactos: **Leves** = Reprensión | Privación salida **1-8 días** | Económica **1-7 días** | Arresto **1-14 días**. **Graves** = Económica **8-15 días** | Arresto **15-30 días** | Pérdida de destino | Baja centro formación. **Muy Graves** = Arresto **31-60 días** | Suspensión de empleo (1 mes a 1 año) | Separación del servicio | Resolución de compromiso.",
    justificacion: "El artículo 11 de la LO 8/2014 establece el catálogo tasado de sanciones disciplinarias para faltas leves, graves y muy graves."
  },
  {
    id: "Q-W5-084",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 32 de la Ley Orgánica 8/2014 (Vídeo T15), ¿qué sanciones tiene potestad para imponer un Jefe de Compañía o unidad similar, un Jefe de Batallón o Grupo, y un Jefe de Regimiento o Unidad independiente?",
    opciones: [
      "Jefe de Compañía: reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días (NUNCA arresto). Jefe de Batallón/Grupo: reprensión, privación de salida hasta 8 días, sanción económica hasta 7 días y arresto de 1 a 7 días. Jefe de Regimiento: todas las sanciones por falta leve (incluido arresto hasta 14 días).",
      "El Jefe de Compañía puede imponer arresto de hasta 7 días.",
      "El Jefe de Batallón puede imponer arresto de hasta 30 días por falta grave.",
      "El Jefe de Regimiento puede imponer la separación del servicio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 32",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Competencia Sancionadora de los Mandos (Art. 32)",
    consejoAcademia: "¡LA PREGUNTA MÁS REPETIDA DE TODA LA OPOSICIÓN! **El Jefe de Compañía (Capitán) NO PUEDE IMPONER ARRESTO** (solo reprensión, privación de salida hasta **5 días** y económica hasta **5 días**). El Jefe de Batallón (Teniente Coronel) impone arresto de **1 a 7 días** (y salida hasta 8 / económica hasta 7). El Jefe de Regimiento (Coronel) impone todas las leves (arresto hasta **14 días**).",
    justificacion: "El artículo 32 de la LO 8/2014 distribuye la potestad sancionadora entre los distintos escalones de mando."
  },
  {
    id: "Q-W5-085",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 21 y 24 de la Ley Orgánica 8/2014 (Vídeo T15), ¿en qué plazos PRESCRIBEN las faltas disciplinarias (leves, graves y muy graves) y en qué plazos PRESCRIBEN las sanciones ya impuestas?",
    opciones: [
      "Las faltas prescriben: las leves a los 2 meses, las graves al año (1 año) y las muy graves a los 2 años. Las sanciones impuestas prescriben: las impuestas por falta leve a los 3 meses, las graves al año (1 año) y las muy graves a los 2 años.",
      "Tanto las faltas leves como las sanciones por falta leve prescriben a los 6 meses.",
      "Las faltas muy graves prescriben a los 5 años y las leves al mes.",
      "Las faltas disciplinarias nunca prescriben."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 21 y 24",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Prescripción de Faltas (2m / 1a / 2a) vs Prescripción de Sanciones (3m / 1a / 2a)",
    consejoAcademia: "¡Fíjate en la única diferencia entre prescripción de FALTAS y de SANCIONES en la LO 8/2014!: **Falta leve prescribe a los 2 MESES**, pero la **Sanción por falta leve prescribe a los 3 MESES**. En graves (**1 año**) y muy graves (**2 años**) coinciden ambos plazos.",
    justificacion: "El artículo 21 de la LO 8/2014 fija la prescripción de las faltas en 2 meses (leves), 1 año (graves) y 2 años (muy graves), y el artículo 24 fija la prescripción de las sanciones en 3 meses (leves), 1 año (graves) y 2 años (muy graves)."
  },
  {
    id: "Q-W5-086",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 65 de la Ley Orgánica 8/2014 (Vídeo T15), las notas desfavorables estampadas en la documentación militar se CANCELARÁN de oficio o a instancia de parte una vez cumplida la sanción, siempre que durante los plazos siguientes no se le haya impuesto ninguna pena o sanción disciplinaria:",
    opciones: [
      "Un año (1 año) para las sanciones por falta leve, dos años (2 años) para las impuestas por falta grave y cuatro años (4 años) para las impuestas por falta muy grave (excepto separación del servicio y resolución de compromiso, que no se cancelan).",
      "Dos meses para las leves, un año para las graves y dos años para las muy graves.",
      "Seis meses para todas las sanciones.",
      "Cinco años para las leves y diez años para las graves."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 65",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Cancelación de Notas Desfavorables: 1, 2 y 4 años (Art. 65)",
    consejoAcademia: "Regla mnemotécnica del **1 - 2 - 4** para la **CANCELACIÓN** de notas desfavorables (Art. 65 LO 8/2014): Leves = **1 año**, Graves = **2 años**, Muy Graves = **4 años** (se duplica cada escalón: $1 \rightarrow 2 \rightarrow 4$). ¡Y ojo: Separación del servicio y Resolución de compromiso NO se cancelan!",
    justificacion: "El artículo 65 de la LO 8/2014 establece los plazos de 1 año, 2 años y 4 años para la cancelación de las anotaciones de sanciones por faltas leves, graves y muy graves respectivamente."
  },
  {
    id: "Q-W5-087",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 19 de la Ley Orgánica 8/2014 (Vídeo T15), la sanción de PÉRDIDA DE DESTINO supone el cese en el que viene ocupando el infractor, quien durante un plazo determinado no podrá solicitar nuevo destino en la misma unidad o, cuando así se determine motivadamente en la resolución sancionadora, en la misma localidad o demarcación territorial específica de su Ejército. ¿Cuál es ese plazo?",
    opciones: [
      "Durante dos años (2 años).",
      "Durante seis meses.",
      "Durante cinco años.",
      "Durante un mes."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 19",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Efectos de la Pérdida de Destino: 2 años (Art. 19)",
    consejoAcademia: "Pérdida de destino (falta grave, Art. 19 LO 8/2014) = prohibición de pedir vacante en la misma unidad (o localidad/demarcación si se motiva en la resolución) durante **2 AÑOS**.",
    justificacion: "El artículo 19 de la LO 8/2014 dispone que quien sufra la sanción de pérdida de destino no podrá solicitar nuevo destino en la misma unidad (o localidad/demarcación) durante dos años."
  },
  {
    id: "Q-W5-088",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 48 de la Ley Orgánica 8/2014 (Vídeo T15), ¿cuál es el plazo máximo en que deberá tramitarse y notificarse la resolución de un expediente disciplinario por FALTA GRAVE o por FALTA MUY GRAVE desde la fecha del acuerdo de incoación?",
    opciones: [
      "El plazo máximo de tramitación es de seis meses (tanto para faltas graves como para faltas muy graves), produciéndose la caducidad del expediente si vence dicho plazo sin haberse notificado la resolución.",
      "Un mes para faltas graves y tres meses para faltas muy graves.",
      "Dos años para faltas graves y cinco años para faltas muy graves.",
      "Diez días hábiles."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 48.2",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Plazo Máximo de Instrucción y Caducidad: 6 Meses (Art. 48)",
    consejoAcademia: "En la anterior ley de 1998 eran distintos, pero en la vigente **LO 8/2014 (Art. 48.2)** el plazo máximo de tramitación y notificación del expediente disciplinario es de **6 MESES** tanto para faltas **graves** como para **muy graves**.",
    justificacion: "El artículo 48.2 de la LO 8/2014 establece un plazo máximo de seis meses desde el acuerdo de incoación hasta la notificación de la resolución en el procedimiento por faltas graves y muy graves."
  },
  {
    id: "Q-W5-089",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 68 de la Ley Orgánica 8/2014 (Vídeo T15), ¿cuál es el plazo para interponer el recurso de alzada o el recurso de reposición contra las resoluciones sancionadoras disciplinarias, y desde cuándo se computa cuando el sancionado se encuentra cumpliendo arresto?",
    opciones: [
      "El plazo es de un mes (1 mes), que se contará desde el día siguiente al de la notificación de la resolución o, en el caso de que la sanción sea de arresto o privación de salida y hubiera comenzado a cumplirse, desde el día siguiente al de la finalización de su cumplimiento.",
      "Diez días naturales sin excepción aunque esté cumpliendo arresto.",
      "Quince días hábiles desde que se cometió la falta.",
      "Tres meses desde la incoación del expediente."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 68.3",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Recursos en Vía Disciplinaria: Plazo de 1 Mes (Art. 68)",
    consejoAcademia: "¡Detalle de oro de la LO 8/2014 (Art. 68.3)! El plazo para recurrir cualquier sanción disciplinaria (alzada o reposición) es de **1 MES**. Y si la sanción es de **arresto o privación de salida** y ya ha empezado a cumplirse, el mes no empieza a correr hasta el **día siguiente a finalizar su cumplimiento**.",
    justificacion: "El artículo 68.3 de la LO 8/2014 fija en un mes el plazo de interposición de los recursos disciplinarios, computado desde el día siguiente a finalizar el cumplimiento si fuera arresto o privación de salida."
  },

  // --- B2-T05: RD 176/2014 Iniciativas y Quejas (Vídeo T16) ---
  {
    id: "Q-W5-090",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas (Vídeo T16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 4 del Real Decreto 176/2014, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas (Vídeo T16), en cada unidad se designará para recibir e impulsar la tramitación de las iniciativas y quejas a:",
    opciones: [
      "Un militar de mayor empleo y antigüedad de cada una de las categorías de oficiales, suboficiales y tropa y marinería destinados en la unidad.",
      "Un abogado civil contratado externamente por el Ayuntamiento.",
      "El militar más moderno recién incorporado a la unidad.",
      "Un representante sindical elegido en elecciones sindicales."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Art. 4.1",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > El Militar Designado por Categoría en la UCO (Art. 4)",
    consejoAcademia: "En cada UCO se designa a **1 militar de mayor empleo y antigüedad de CADA CATEGORÍA** (1 Oficial, 1 Suboficial y 1 de Tropa y Marinería) para canalizar, acusar recibo y trasladar al Jefe de Unidad las iniciativas y quejas.",
    justificacion: "El artículo 4.1 del Real Decreto 176/2014 establece la designación del militar de mayor empleo y antigüedad de cada categoría en la unidad."
  },
  {
    id: "Q-W5-091",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas (Vídeo T16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 12 y 13 del Real Decreto 176/2014 (Vídeo T16), ¿qué diferencia existe entre el plazo de UN MES y el plazo de SEIS MESES en la tramitación de una QUEJA presentada ante el Jefe de la Unidad?",
    opciones: [
      "Si transcurrido UN MES el Jefe de Unidad no hubiese contestado (o el acuerdo no satisficiera al interesado), podrá reproducir su queja ante el superior jerárquico inmediato de aquél; y si transcurridos SEIS MESES desde la presentación inicial no se hubiese contestado o no satisficiera al interesado, podrá dirigirse directamente al Mando o Jefatura de Personal de su Ejército (o DIGENPER), dando cuenta al Jefe de su Unidad.",
      "Al mes puede acudir al Tribunal Supremo y a los seis meses a la ONU.",
      "Al mes se archiva la queja por silencio positivo y a los seis meses prescribe.",
      "No existe plazo de un mes, sólo un plazo de cinco años."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Arts. 12 y 13",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > Los Dos Plazos Clave de las Quejas: 1 Mes vs 6 Meses (Arts. 12 y 13)",
    consejoAcademia: "¡Cruza siempre el **1 MES** y los **6 MESES** del RD 176/2014! **1 MES** sin respuesta satisfactoria del Jefe de UCO $\rightarrow$ acude al **superior jerárquico inmediato**. **6 MESES** desde la presentación inicial $\rightarrow$ acude **directamente al Mando/Jefatura de Personal (MAPER/JEPER) o DIGENPER**, dando cuenta al Jefe de su Unidad.",
    justificacion: "Los artículos 12 y 13 del Real Decreto 176/2014 regulan respectivamente el paso al superior jerárquico tras 1 mes y el acceso directo al Mando o Jefatura de Personal tras 6 meses."
  },
  {
    id: "Q-W5-092",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas (Vídeo T16)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 6 del Real Decreto 176/2014 (Vídeo T16), cuando se acuerda la INADMISIÓN de una iniciativa o queja por concurrir alguna de las causas tasadas del artículo 5, dicha resolución:",
    opciones: [
      "Deberá ser motivada y notificarse por escrito al militar que la presentó en el plazo de un mes desde su presentación.",
      "No requiere motivación alguna ni notificación al interesado.",
      "Implica automáticamente un arresto de catorce días para el solicitante.",
      "Debe publicarse íntegra en el Boletín Oficial del Estado."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Art. 5.2",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > Inadmisión Motivada en 1 Mes (Art. 5.2)",
    consejoAcademia: "La inadmisión de una iniciativa o queja (Art. 5.2 RD 176/2014) debe ser siempre **motivada** y notificarse al interesado en el plazo máximo de **1 MES**.",
    justificacion: "El artículo 5.2 del Real Decreto 176/2014 exige que la inadmisión sea motivada y notificada al interesado en el plazo de un mes."
  },

  // --- B2-T06 y B2-T07: Igualdad LO 3/2007, Observatorio Militar Igualdad y Protocolo UPA Acoso (Vídeos T17 y T18) ---
  {
    id: "Q-W5-093",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 6 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, ¿qué diferencia conceptual establece la ley entre DISCRIMINACIÓN DIRECTA y DISCRIMINACIÓN INDIRECTA por razón de sexo?",
    opciones: [
      "Discriminación directa es la situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable; discriminación indirecta es la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente en atención a una finalidad legítima.",
      "Discriminación directa es la que ocurre por internet y la indirecta la que ocurre por correo postal.",
      "Ambas exigen que exista agresión física.",
      "La ley sólo reconoce la discriminación directa."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 6.1 y 6.2",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Discriminación Directa vs Indirecta (Art. 6)",
    consejoAcademia: "Palabra clave para cazar al vuelo en el test: Si el enunciado dice **'disposición, criterio o práctica APARENTEMENTE NEUTROS'** que pone a un sexo en desventaja particular $\rightarrow$ marca siempre **DISCRIMINACIÓN INDIRECTA** (Art. 6.2 LO 3/2007).",
    justificacion: "El artículo 6 de la LO 3/2007 define la discriminación directa (Art. 6.1) y la discriminación indirecta (Art. 6.2)."
  },
  {
    id: "Q-W5-094",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Disposición Adicional Primera de la Ley Orgánica 3/2007, se entiende por COMPOSICIÓN O PRESENCIA EQUILIBRADA de mujeres y hombres aquella situación en la que las personas de cada sexo:",
    opciones: [
      "No superen el sesenta por ciento (60%) ni sean menos del cuarenta por ciento (40%).",
      "Sean exactamente el cincuenta por ciento (50%) en todos los casos sin margen alguno.",
      "No superen el ochenta por ciento (80%) ni sean menos del veinte por ciento (20%).",
      "No superen el setenta por ciento (70%) ni sean menos del treinta por ciento (30%)."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Disposición Adicional Primera",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Presencia Equilibrada: Regla 60% / 40% (DA 1ª)",
    consejoAcademia: "¡Cifra estrella de la LO 3/2007! **Presencia o composición equilibrada = horquilla 60% máximo / 40% mínimo** para cada sexo.",
    justificacion: "La Disposición Adicional Primera de la LO 3/2007 define la presencia o composición equilibrada como aquella en que ningún sexo supere el 60% ni sea inferior al 40%."
  },
  {
    id: "Q-W5-095",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo UPA (Vídeos T17 y T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Orden DEF/1113/2021, por la que se regula el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas (Vídeo T17), ¿quién ostenta la PRESIDENCIA de dicho Observatorio y quién ejerce su Secretaría?",
    opciones: [
      "La Presidencia corresponde a la persona titular de la Subsecretaría de Defensa (SUBDEF), y la Secretaría (con voz y voto) al titular de la División de Igualdad y Apoyo Social al Personal de la DIGENPER.",
      "Lo preside el Presidente del Congreso de los Diputados.",
      "Lo preside el Jefe de Estado Mayor de la Defensa (JEMAD).",
      "Lo preside el Defensor del Pueblo."
    ],
    correcta: 0,
    referencia: "Orden DEF/1113/2021, Art. 3",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T17: Observatorio Militar para la Igualdad) > Presidencia (SUBDEF) y Secretaría (División de Igualdad DIGENPER)",
    consejoAcademia: "No confundas: **Observatorio de la Vida Militar** (LO 9/2011) = adscrito a las Cortes Generales, 9 miembros elegidos por Congreso/Senado. **Observatorio Militar para la Igualdad** (Orden DEF/1113/2021) = órgano colegiado del MINISDEF presidido por el/la **Subsecretario/a de Defensa (SUBDEF)**.",
    justificacion: "El artículo 3 de la Orden DEF/1113/2021 atribuye la presidencia del Observatorio Militar para la Igualdad a la persona titular de la Subsecretaría de Defensa."
  },
  {
    id: "Q-W5-096",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo UPA (Vídeos T17 y T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas (Orden DEF/482/2016 y actualización RD 247/2024, Vídeo T18), ¿cuál es la función principal de la Unidad de Protección frente al Acoso (UPA)?",
    opciones: [
      "Prestar asesoramiento y apoyo integral, confidencial e inmediato a la presunta víctima (psicológico, médico, jurídico y social), recibir comunicaciones o denuncias y canalizarlas al órgano competente, pero SIN ejercer potestad disciplinaria ni instruir el expediente sancionador.",
      "Actuar como Juez Togado Militar e imponer penas de prisión de hasta diez años.",
      "Resolver recursos de alzada contra sanciones de tráfico.",
      "Sancionar directamente con la separación del servicio sin expediente."
    ],
    correcta: 0,
    referencia: "Orden DEF/482/2016 y Real Decreto 247/2024 (Protocolo de Acoso FAS / UPA)",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: Protocolo Acoso y UPA) > Funciones de la UPA (Asesoramiento y Canalización, NO sanciona)",
    consejoAcademia: "¡TRAMPA CLÁSICA DEL VÍDEO T18! La **UPA (Unidad de Protección frente al Acoso)** asesora, apoya de forma confidencial y canaliza la denuncia (en un plazo máximo de **5 días** tras recibirla la remite a la autoridad con competencia sancionadora/judicial), pero **LA UPA NUNCA SANCIONA NI INSTRUYE EL EXPEDIENTE**.",
    justificacion: "Las Unidades de Protección frente al Acoso (UPA) son órganos de asesoramiento, apoyo a la víctima y canalización, careciendo de potestad sancionadora o instructora."
  },
  {
    id: "Q-W5-097",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo UPA (Vídeos T17 y T18)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según la normativa de protección frente al acoso en las Fuerzas Armadas (Vídeo T18), ¿dónde existen Unidades de Protección frente al Acoso (UPA)?",
    opciones: [
      "Existe una UPA Central en el Órgano Central (en la DIGENPER / Subsecretaría de Defensa) y sendas UPA en el Estado Mayor de la Defensa y en cada uno de los tres Ejércitos (ET, Armada y EA), dependientes de sus respectivos Mandos o Jefaturas de Personal.",
      "Sólo existe una única UPA en el Ayuntamiento de cada capital de provincia.",
      "Las UPA dependen del Ministerio de Trabajo y Economía Social.",
      "Sólo se activan cuando se declara el estado de sitio."
    ],
    correcta: 0,
    referencia: "Orden DEF/482/2016 y RD 247/2024, Organización de las UPA",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: Protocolo Acoso y UPA) > Despliegue de las UPA (Órgano Central, EMAD, ET, Armada y EA)",
    consejoAcademia: "Hay **5 UPA** en las FAS: 1 en el **Órgano Central** (SUBDEF/DIGENPER), 1 en el **EMAD** y 1 en cada **Ejército** (**MAPER del ET**, **JEPER de la Armada** y **MAPER del EA**).",
    justificacion: "El protocolo de actuación frente al acoso estructura las UPA en el Órgano Central, el EMAD y los Mandos o Jefaturas de Personal de los tres Ejércitos."
  },

  // --- B2-T08: Ley 39/2015 del Procedimiento Administrativo Común de las AAPP - LPACAP (Vídeos T19 y T20) ---
  {
    id: "Q-W5-098",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 30 de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas (Vídeo T19), salvo que por Ley o en el Derecho de la Unión Europea se exprese otro cómputo, cuando los plazos se señalen por DÍAS:",
    opciones: [
      "Se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
      "Se entiende que son naturales, incluyéndose sábados, domingos y festivos.",
      "Los sábados se consideran días hábiles administrativos como en la antigua Ley 30/1992.",
      "Sólo se cuentan los lunes, miércoles y viernes."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 30.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Cómputo de Plazos: Los Sábados son Inhábiles (Art. 30)",
    consejoAcademia: "¡Regla de oro de la Ley 39/2015 (Art. 30.2) frente a la LO 8/2014!: En la **Ley 39/2015 LPACAP**, si no dice nada, los días son **HÁBILES** (excluyendo **sábados**, domingos y festivos). En cambio, en el **Régimen Disciplinario Militar (LO 8/2014, Art. 45)** todos los plazos se computan por **DÍAS NATURALES** salvo que en el procedimiento por falta leve sean inferiores a 5 días.",
    justificacion: "El artículo 30.2 de la Ley 39/2015 establece que cuando los plazos se señalen por días se entiende que son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos."
  },
  {
    id: "Q-W5-099",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 21 de la Ley 39/2015 (Vídeo T19), la Administración está obligada a dictar resolución expresa y a notificarla en todos los procedimientos cualquiera que sea su forma de iniciación. ¿Cuál es el plazo máximo en el que debe notificarse la resolución expresa, y cuál es el plazo supletorio cuando las normas reguladoras del procedimiento NO fijen plazo máximo?",
    opciones: [
      "El plazo máximo no podrá exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o así venga previsto en el Derecho de la Unión Europea; y cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será de tres meses.",
      "El plazo máximo es siempre de diez años y el supletorio de un año.",
      "El plazo máximo es de tres meses y el supletorio de seis meses.",
      "El plazo supletorio es de quince días hábiles."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 21.2 y 21.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Obligación de Resolver: Tope de 6 Meses vs Supletorio de 3 Meses (Art. 21)",
    consejoAcademia: "¡EL CRUCE MÁS PREGUNTADO DE LPACAP (Art. 21)! No los inviertas nunca: **Tope legal máximo reglamentario = 6 MESES** (solo ampliable por norma con rango de Ley o Derecho UE). **Plazo supletorio si la norma calla (no fija plazo) = 3 MESES**.",
    justificacion: "El artículo 21.2 de la Ley 39/2015 fija en 6 meses el tope general reglamentario y el artículo 21.3 fija en 3 meses el plazo supletorio cuando la norma no establezca plazo máximo."
  },
  {
    id: "Q-W5-100",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 24 de la Ley 39/2015 (Vídeo T19), en los procedimientos iniciados a solicitud del interesado, el vencimiento del plazo máximo sin haberse notificado resolución expresa legitima al interesado para entenderla estimada por silencio administrativo, EXCEPTO en los supuestos siguientes en los que el silencio tendrá efecto DESESTIMATORIO:",
    opciones: [
      "En los procedimientos relativos al ejercicio del derecho de petición (Art. 29 CE), aquellos cuya estimación tuviera como consecuencia que se transfirieran al solicitante o a terceros facultades relativas al dominio público o al servicio público, impliquen actividades que puedan dañar el medio ambiente, los de responsabilidad patrimonial de las AAPP y los procedimientos de impugnación de actos y disposiciones (recursos).",
      "En todos los procedimientos el silencio administrativo es siempre positivo sin excepción alguna.",
      "En las solicitudes de licencias menores de obra civil.",
      "Únicamente en los procedimientos tributarios municipales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 24.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Silencio Administrativo Positivo y Excepciones Negativas (Art. 24)",
    consejoAcademia: "En solicitudes del interesado la regla general es el silencio POSITIVO, salvo las **5 excepciones de silencio NEGATIVO del Art. 24.1**: 1) Derecho de petición Art. 29 CE; 2) Dominio público o servicio público; 3) Daño al medio ambiente; 4) Responsabilidad patrimonial de las AAPP; 5) Recursos e impugnación de actos (salvo la excepción del doble silencio en alzada).",
    justificacion: "El artículo 24.1 de la Ley 39/2015 regula el silencio administrativo en procedimientos iniciados a solicitud del interesado y sus excepciones desestimatorias."
  },
  {
    id: "Q-W5-101",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 24.1 (tercer párrafo) de la Ley 39/2015 (Vídeo T20), ¿en qué único caso el silencio administrativo en un RECURSO DE ALZADA tiene carácter ESTIMATORIO (positivo)?",
    opciones: [
      "Cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud por el transcurso del plazo (doble silencio), siempre que no se refiera a las materias de derecho de petición, dominio público, servicio público, medio ambiente o responsabilidad patrimonial.",
      "Cuando el recurso de alzada se interpone contra una sanción disciplinaria.",
      "En los recursos de reposición siempre hay doble silencio positivo.",
      "Nunca existe el doble silencio en el Derecho administrativo español."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 24.1 párrafo 3º",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > La Regla del Doble Silencio en el Recurso de Alzada (Art. 24.1)",
    consejoAcademia: "**REGLA DEL DOBLE SILENCIO (Art. 24.1 LPACAP):** Solicitud en silencio negativo + Recurso de Alzada también en silencio = **ESTIMADO (Positivo)**, salvo que toque las materias blindadas (petición Art. 29 CE, dominio/servicio público, medio ambiente o responsabilidad patrimonial).",
    justificacion: "El artículo 24.1 tercer párrafo de la Ley 39/2015 prevé el efecto estimatorio del silencio en el recurso de alzada interpuesto contra la desestimación por silencio de una solicitud inicial."
  },
  {
    id: "Q-W5-102",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 42.2 de la Ley 39/2015 (Vídeo T19), cuando la notificación se practique en el domicilio del interesado, de no hallarse presente éste en el momento de entregarse la notificación, podrá hacerse cargo de la misma cualquier persona que se encuentre en el domicilio y haga constar su identidad, siempre que sea:",
    opciones: [
      "Mayor de catorce (14) años.",
      "Mayor de dieciocho (18) años.",
      "Mayor de dieciséis (16) años.",
      "Mayor de veintiún (21) años."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 42.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Práctica de las Notificaciones en Papel: 14 Años y Regla de los 3 Días / 15 Horas (Art. 42)",
    consejoAcademia: "¡Números mágicos del Art. 42.2 LPACAP (Notificación en domicilio)!: 1) Puede recogerla cualquier persona en el domicilio **mayor de 14 AÑOS**; 2) Si nadie se hace cargo, se repite el intento por una sola vez en una hora distinta dentro de los **3 DÍAS siguientes**; 3) Si el primer intento fue antes de las **15:00 horas**, el segundo deberá hacerse después de las **15:00 horas** (y viceversa), dejando al menos **3 HORAS** de diferencia entre ambos intentos.",
    justificacion: "El artículo 42.2 de la Ley 39/2015 exige que la persona que se haga cargo de la notificación en el domicilio sea mayor de catorce años."
  },
  {
    id: "Q-W5-103",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 43.2 de la Ley 39/2015 (Vídeo T19), las notificaciones por medios electrónicos se entenderán practicadas en el momento en que se produzca el acceso a su contenido. Cuando la notificación por medios electrónicos sea de carácter obligatorio, o haya sido expresamente elegida por el interesado, ¿cuándo se entenderá RECHAZADA si no se accede a su contenido?",
    opciones: [
      "Cuando hayan transcurrido diez días naturales desde la puesta a disposición de la notificación sin que se acceda a su contenido.",
      "Cuando hayan transcurrido diez días hábiles.",
      "Cuando haya transcurrido un mes.",
      "A las cuarenta y ocho horas desde el envío."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 43.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Notificación Electrónica: Rechazo a los 10 Días Naturales (Art. 43.2)",
    consejoAcademia: "¡TRAMPA DE EXAMEN EN EL ART. 43.2 LPACAP! Aunque en LPACAP casi todos los plazos en días son hábiles, el plazo para entender rechazada una **notificación electrónica** tras su puesta a disposición es de **10 DÍAS NATURALES**.",
    justificacion: "El artículo 43.2 de la Ley 39/2015 establece que la notificación electrónica se entenderá rechazada cuando hayan transcurrido diez días naturales desde la puesta a disposición sin acceder a su contenido."
  },
  {
    id: "Q-W5-104",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 47 y 48 de la Ley 39/2015 (Vídeo T20), ¿cuál de los siguientes vicios determina la NULIDAD DE PLENO DERECHO (Art. 47) de un acto administrativo y no la simple anulabilidad (Art. 48)?",
    opciones: [
      "Los actos dictados por órgano manifiestamente incompetente por razón de la materia o del territorio, los que lesionen derechos y libertades susceptibles de amparo constitucional, los que tengan un contenido imposible, sean constitutivos de infracción penal o se dicten prescindiendo total y absolutamente del procedimiento legalmente establecido.",
      "Los actos dictados por órgano incompetente únicamente por razón de la jerarquía (que son anulables y convalidables por el superior).",
      "El defecto de forma que no produzca indefensión.",
      "La realización de actuaciones administrativas fuera del tiempo establecido cuando no lo imponga la naturaleza del término o plazo."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 47.1 y 48",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Nulidad de Pleno Derecho (Art. 47) vs Anulabilidad (Art. 48)",
    consejoAcademia: "¡El truco más famoso de las academias para el Art. 47.1.b LPACAP!: Incompetencia manifiesta por razón de la **MATERIA o del TERRITORIO** = **NULO DE PLENO DERECHO** (no convalidable). Incompetencia por razón de la **JERARQUÍA** = **ANULABLE** (y sí es convalidable por el superior jerárquico según el Art. 52.3).",
    justificacion: "El artículo 47.1 de la Ley 39/2015 tasa los supuestos de nulidad de pleno derecho de los actos administrativos."
  },
  {
    id: "Q-W5-105",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 68 y 73 de la Ley 39/2015 (Vídeo T20), ¿cuál es el plazo general que se concede al interesado para SUBSANAR una solicitud que no reúne los requisitos legales, y cuál es el plazo general para el CUMPLIMIENTO DE TRÁMITES por los interesados?",
    opciones: [
      "Diez días (10 días hábiles) en ambos casos; si bien en la subsanación de solicitudes (Art. 68) dicho plazo podrá ser ampliado prudencialmente hasta en cinco días (salvo procedimientos selectivos o de concurrencia competitiva).",
      "Un mes para subsanar y tres meses para cumplir trámites.",
      "Quince días naturales improrrogables.",
      "Veinticuatro horas."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 68.1 y 73.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Subsanación de Solicitudes (10 días + 5 ampliables, Art. 68) y Cumplimiento de Trámites (10 días, Art. 73)",
    consejoAcademia: "En LPACAP casi todos los trámites intermedios del interesado duran **10 DÍAS HÁBILES**: Subsanar solicitud (Art. 68) = **10 días** (+5 ampliables, excepto en oposiciones/concurrencia competitiva); Cumplir trámites (Art. 73) = **10 días**. En cambio, el trámite de **Audiencia** (Art. 82) dura **entre 10 y 15 días**, y la **Información Pública** (Art. 83) nunca menos de **20 días**.",
    justificacion: "Los artículos 68 y 73 de la Ley 39/2015 fijan el plazo de diez días hábiles para la subsanación de solicitudes y el cumplimiento de trámites."
  },
  {
    id: "Q-W5-106",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con los artículos 121 a 125 de la Ley 39/2015 (Vídeo T20), ¿cuáles son los plazos de INTERPOSICIÓN (si el acto es expreso) y de RESOLUCIÓN de los tres recursos administrativos (Alzada, Reposición y Extraordinario de Revisión)?",
    opciones: [
      "Recurso de Alzada: interposición en 1 mes (si es expreso) y resolución en 3 meses. Recurso potestativo de Reposición: interposición en 1 mes (si es expreso) y resolución en 1 mes. Recurso Extraordinario de Revisión: interposición en 4 años (causa 1ª: error de hecho resultante de los propios documentos) o en 3 meses (causas 2ª, 3ª y 4ª: documentos esenciales, falsedad o prevaricación/cohecho) y resolución en 3 meses.",
      "Todos los recursos se interponen en 15 días y se resuelven en 6 meses.",
      "El recurso de alzada se resuelve en 1 mes y el de reposición en 3 meses.",
      "El recurso extraordinario de revisión se resuelve en 10 días."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 122, 124, 125 y 126",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Tabla Maestra de Recursos Administrativos (Arts. 121-126)",
    consejoAcademia: "¡TABLA DE ORO DE LOS RECURSOS LPACAP! **Alzada** (contra actos que NO agotan vía administrativa, ante el superior): Interposición **1 mes** (expreso) / en cualquier momento (presunto) $\rightarrow$ Resolución **3 meses**. **Reposición** (potestativo, contra actos que SÍ agotan vía, ante el mismo órgano): Interposición **1 mes** $\rightarrow$ Resolución **1 mes**. **Extraordinario de Revisión** (contra actos firmes en vía administrativa): Interposición **4 años** (error de hecho) o **3 meses** (resto causas) $\rightarrow$ Resolución **3 meses**.",
    justificacion: "Los artículos 121 a 126 de la Ley 39/2015 regulan los plazos de interposición y resolución de los recursos de alzada, potestativo de reposición y extraordinario de revisión."
  },
  {
    id: "Q-W5-107",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según los artículos 106 y 107 de la Ley 39/2015 (Vídeo T20), ¿qué diferencia de plazos existe entre la REVISIÓN DE OFICIO de actos nulos de pleno derecho (Art. 106) y la DECLARACIÓN DE LESIVIDAD de actos anulables favorables (Art. 107)?",
    opciones: [
      "La revisión de oficio de actos nulos (Art. 106) puede iniciarse en cualquier momento (con dictamen favorable del Consejo de Estado) y caduca a los 6 meses si se inició de oficio; en cambio, la declaración de lesividad de actos anulables (Art. 107) no podrá adoptarse una vez transcurridos cuatro años (4 años) desde que se dictó el acto administrativo y el procedimiento caduca a los 6 meses.",
      "La declaración de lesividad puede adoptarse a los veinte años y caduca a los tres meses.",
      "La revisión de oficio de actos nulos prescribe a los dos meses.",
      "Ninguna de las dos exige audiencia a los interesados."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Arts. 106 y 107",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Revisión de Oficio (Art. 106) vs Declaración de Lesividad: 4 Años y Caducidad a los 6 Meses (Art. 107)",
    consejoAcademia: "Compara siempre: **Actos Nulos (Art. 106)** = revisión de oficio **en cualquier momento** + dictamen preceptivo y favorable del Consejo de Estado + caduca a los **6 meses** (si es de oficio). **Actos Anulables favorables (Art. 107)** = Declaración de **Lesividad** antes de **4 AÑOS** desde que se dictó el acto + caduca a los **6 meses** + posterior impugnación ante la Jurisdicción Contencioso-Administrativa.",
    justificacion: "Los artículos 106 y 107 de la Ley 39/2015 regulan la revisión de disposiciones y actos nulos y la declaración de lesividad de actos anulables."
  },

  // --- MÁS PREGUNTAS BLOQUE 2 (Q-W5-108 a Q-W5-140) ---
  {
    id: "Q-W5-108",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 3 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), ¿a través de qué vínculo adquieren la condición de militar de carrera los militares profesionales de tropa y marinería?",
    opciones: [
      "Quienes quedan vinculados a las Fuerzas Armadas con una relación de servicios profesionales de carácter permanente (tras superar el proceso selectivo de acceso a la permanencia) adquieren la condición de militar de carrera.",
      "Desde el primer día que ingresan en el centro docente militar de formación.",
      "Los militares de tropa y marinería nunca pueden adquirir la condición de militar de carrera.",
      "Únicamente al pasar a la situación de retiro a los 65 años."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 3.2 y Art. 77",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Adquisición de la Condición de Militar de Carrera por la Tropa Permanente (Arts. 3 y 77)",
    consejoAcademia: "¡Por esto mismo estás estudiando esta oposición! Según el Art. 3 y el Art. 77 de la Ley 39/2007 y el Art. 12 de la Ley 8/2006, al superar este concurso-oposición de **Permanencia**, el militar de Tropa y Marinería suscribe una relación de servicios de carácter **PERMANENTE** y adquiere de pleno derecho la condición de **MILITAR DE CARRERA**.",
    justificacion: "Los artículos 3 y 77 de la Ley 39/2007 establecen que los militares de tropa y marinería que acceden a una relación de servicios de carácter permanente adquieren la condición de militar de carrera."
  },
  {
    id: "Q-W5-109",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 12 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), y al Real Decreto de ingreso y promoción, ¿cuáles son los requisitos principales que deben reunir los militares profesionales de tropa y marinería para participar en el proceso selectivo de acceso a una relación de servicios de carácter PERMANENTE?",
    opciones: [
      "Tener suscrito el compromiso de larga duración, poseer como mínimo el título de Técnico del Sistema Educativo General (FP Grado Medio) o equivalente (o Bachiller/Superior), tener un tiempo mínimo de servicios de catorce años (según convocatoria/normativa vigente de acceso, o el fijado reglamentariamente desde los 8 años en Ley 8/2006) y tener cumplidos los tiempos y evaluaciones exigidos con un número máximo de tres convocatorias.",
      "Acabar de ingresar en el centro de formación sin compromiso de larga duración.",
      "Tener más de 58 años de edad y estar en la reserva.",
      "No se exige ninguna titulación académica ni compromiso de larga duración."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Art. 12 y Orden DEF/1341/2017",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006 Tropa y Marinería) > Requisitos de Acceso a la Permanencia (Art. 12 Ley 8/2006)",
    consejoAcademia: "En el texto literal del **Art. 12 de la Ley 8/2006**: exige tener suscrito el **Compromiso de Larga Duración**, titulación mínima de **Técnico del Sistema Educativo General o equivalente**, un mínimo de **8 años de tiempo de servicios** en la ley (elevado reglamentariamente a 14 años en el Reglamento de ingreso y promoción), y un máximo de **3 convocatorias** ordinarias (+2 extraordinarias).",
    justificacion: "El artículo 12 de la Ley 8/2006 regula el acceso de los militares profesionales de tropa y marinería a una relación de servicios de carácter permanente."
  },
  {
    id: "Q-W5-110",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 81 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), el Informe Personal de Calificación (IPEC) es la valoración objetiva de unos conceptos predeterminados que permitan apreciar las cualidades, méritos, aptitudes, competencia y forma de actuación profesional del militar. ¿Por quién es elaborado el IPEC?",
    opciones: [
      "Por la Junta de Calificación, integrada por tres calificadores con sujeción a las normas que establezca el Ministro de Defensa.",
      "Por el propio militar evaluado en solitario.",
      "Por el Ayuntamiento del municipio donde resida el militar.",
      "Por sorteo informático."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 81",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > El Informe Personal de Calificación (IPEC) (Art. 81)",
    consejoAcademia: "Recuerda además que en el Baremo de tu oposición de Permanencia (Anexo II Orden DEF/1341/2017), la nota media de los **5 últimos IPEC** se multiplica por **2,5** hasta un máximo de **25 puntos**.",
    justificacion: "El artículo 81 de la Ley 39/2007 regula el Informe Personal de Calificación (IPEC) dentro del historial militar."
  },
  {
    id: "Q-W5-111",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 120 de la Ley 39/2007 (Vídeo T11), ¿a quién corresponde acordar la incoación de un expediente de insuficiencia de facultades profesionales o de condiciones psicofísicas, y a quién corresponde resolverlo cuando suponga el pase a retiro o la resolución del compromiso?",
    opciones: [
      "La incoación corresponde al Jefe de Estado Mayor del Ejército respectivo (o Subsecretario de Defensa para Cuerpos Comunes), y la resolución que implique el pase a retiro o la pérdida de la condición de militar corresponde al Ministro de Defensa (previo dictamen del órgano médico pericial o del Consejo Superior del Ejército respectivo).",
      "Lo incoa y resuelve el Cabo de Cuartel en veinticuatro horas.",
      "Lo resuelve el Alcalde de la localidad.",
      "No requiere audiencia del interesado ni dictamen médico."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Arts. 120 y 121",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Expedientes de Insuficiencia de Facultades Profesionales y Condiciones Psicofísicas (Arts. 120-121)",
    consejoAcademia: "En los expedientes de insuficiencia de facultades profesionales y de condiciones psicofísicas (Arts. 120 y 121 Ley 39/2007), la resolución final que acuerde el retiro o resolución de compromiso corresponde al **Ministro de Defensa** (o Subsecretario por delegación en psicofísicas).",
    justificacion: "Los artículos 120 y 121 de la Ley 39/2007 regulan los expedientes de insuficiencia de facultades profesionales y de condiciones psicofísicas."
  },
  {
    id: "Q-W5-112",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 14 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009, Vídeo T13), el militar cuyo propio HONOR y espíritu no le estimulen a obrar siempre bien:",
    opciones: [
      "Vale muy poco para el servicio.",
      "Será ascendido por elección al empleo inmediato superior.",
      "Quedará exento de realizar guardias de seguridad.",
      "Tendrá preferencia para comisiones en el extranjero."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 14",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Espíritu Militar y Honor de Calderón de la Barca / Ordenanzas de Carlos III (Art. 14)",
    consejoAcademia: "Frase histórica inmortal de las Ordenanzas de Carlos III mantenida literalmente en el **Art. 14 del RD 96/2009**: *'El militar cuyo propio honor y espíritu no le estimulen a obrar siempre bien, vale muy poco para el servicio'*.",
    justificacion: "El artículo 14 del Real Decreto 96/2009 recoge literalmente este principio tradicional del espíritu militar."
  },
  {
    id: "Q-W5-113",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 83 de las Reales Ordenanzas (RD 96/2009, Vídeo T13), en los supuestos de actuaciones en operaciones de combate, el militar hará un uso de la fuerza:",
    opciones: [
      "Gradual y proporcionado a la amenaza y adecuado a las reglas de enfrentamiento establecidas para la operación en que participe, de acuerdo con el Derecho Internacional Humanitario.",
      "Ilimitado y sin sujeción a reglas de enfrentamiento ni convenios internacionales.",
      "Prohibido incluso en legítima defensa ante un ataque armado hostil.",
      "Sometido previamente a consulta postal con su Ayuntamiento."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Arts. 83 y 91",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Uso Legítimo de la Fuerza y Reglas de Enfrentamiento (ROE) (Arts. 83 y 91)",
    consejoAcademia: "Palabras clave del uso de la fuerza en las RROO (Arts. 83 y 91): **gradual, proporcionado** y ajustado a las **Reglas de Enfrentamiento (ROE)** y al Derecho Internacional Humanitario.",
    justificacion: "Los artículos 83 y 91 del Real Decreto 96/2009 establecen los criterios de uso gradual y proporcionado de la fuerza conforme a las reglas de enfrentamiento."
  },
  {
    id: "Q-W5-114",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas RD 96/2009 (Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 106 de las Reales Ordenanzas (RD 96/2009, Vídeo T13), si el militar cayera PRISIONERO del enemigo en conflicto armado, además de tratar de evadirse y ayudar a que lo logren sus compañeros, ¿qué únicos datos está obligado a declarar si es interrogado conforme a los Convenios de Ginebra?",
    opciones: [
      "Su nombre y apellidos, empleo, fecha de nacimiento y número de filiación o matrícula.",
      "El despliegue táctico completo de su Brigada y las frecuencias de radio.",
      "Los planes de operaciones del JEMAD y las claves criptográficas.",
      "Su domicilio familiar y la nómina de su unidad."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 106",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13: Reales Ordenanzas RD 96/2009) > Comportamiento como Prisionero de Guerra (Art. 106)",
    consejoAcademia: "Los **4 únicos datos** que un prisionero de guerra puede y debe dar (Art. 106 RROO y III Convenio de Ginebra): **1) Nombre y apellidos, 2) Empleo, 3) Fecha de nacimiento y 4) Número de filiación o matrícula**.",
    justificacion: "El artículo 106 del Real Decreto 96/2009 recoge el deber del militar prisionero de limitarse a facilitar su nombre y apellidos, empleo, fecha de nacimiento y número de filiación o matrícula."
  },
  {
    id: "Q-W5-115",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 49 de la Ley Orgánica 9/2011 (Vídeo T14), el Consejo de Personal de las Fuerzas Armadas (COPERFAS) es presidido por:",
    opciones: [
      "El Ministro de Defensa y, cuando no asista, por el Subsecretario de Defensa.",
      "El Presidente del Tribunal Constitucional.",
      "El representante de la asociación profesional con menos afiliados.",
      "El Defensor del Pueblo."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 47.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Presidencia y Funcionamiento del COPERFAS (Arts. 47-51)",
    consejoAcademia: "El **COPERFAS** (Art. 47.2 LO 9/2011) lo preside el **Ministro de Defensa** y, cuando no asista, el **Subsecretario de Defensa**. En cambio, el **Observatorio Militar para la Igualdad** (Orden DEF/1113/2021) lo preside directamente el **Subsecretario de Defensa**.",
    justificacion: "El artículo 47.2 de la LO 9/2011 establece que el Consejo de Personal de las Fuerzas Armadas estará presidido por el Ministro de Defensa y, cuando no asista, por el Subsecretario de Defensa."
  },
  {
    id: "Q-W5-116",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 12 de la Ley Orgánica 9/2011 (Vídeo T14), el militar tiene derecho a la libertad de expresión y a comunicar y recibir libremente información en los términos establecidos en la Constitución, sin otros límites que los derivados de:",
    opciones: [
      "La salvaguarda de la seguridad y defensa nacional, el deber de reserva y el respeto a la dignidad de las personas y de las instituciones y poderes públicos, debiendo mantener además una estricta neutralidad pública en relación con la actuación de los partidos políticos y sindicatos.",
      "La censura previa obligatoria de todas sus cartas privadas familiares.",
      "La prohibición absoluta de publicar libros científicos o literarios.",
      "No existe ningún límite ni siquiera respecto a materias clasificadas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 12",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Libertad de Expresión y de Información (Art. 12)",
    consejoAcademia: "En los asuntos estrictamente relacionados con el servicio en las FAS, el ejercicio de la libertad de expresión se encuentra sujeto a los límites derivados de la **disciplina** (Art. 12.2 LO 9/2011).",
    justificacion: "El artículo 12 de la LO 9/2011 regula el derecho a la libertad de expresión e información y sus límites específicos en el ámbito militar."
  },
  {
    id: "Q-W5-117",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 6, 7 y 8 de la Ley Orgánica 8/2014 (Vídeo T15), en relación con la inasistencia injustificada al servicio o incorporación tardía en situaciones ordinarias (no en operaciones ni alarma/excepción/sitio), ¿cuándo constituye FALTA LEVE, cuándo FALTA GRAVE y cuándo FALTA MUY GRAVE?",
    opciones: [
      "La falta de puntualidad o abandono temporal de actos del servicio es falta leve; no incorporarse o permanecer ausente injustificadamente por un plazo superior a 24 horas (e inferior al delito de abandono de destino/residencia de más de 3 días) es falta grave; y el incumplimiento reiterado o en operaciones/guardia de seguridad se agrava conforme a los tipos de los artículos 7 y 8.",
      "Llegar cinco minutos tarde es siempre delito militar castigado con diez años de prisión.",
      "Ausentarse durante un mes entero es una simple falta leve.",
      "La falta de puntualidad no está tipificada en la LO 8/2014."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 6, 7 y 8 y Código Penal Militar",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Graduación de Faltas de Puntualidad y Ausencia Injustificada (Arts. 6-8)",
    consejoAcademia: "Recuerda la frontera temporal clave: La inexactitud o falta de puntualidad es **falta leve** (Art. 6); permanecer ausente injustificadamente por más de **24 horas** (hasta **3 días**, momento en que pasa a ser delito de abandono de destino/residencia en el Código Penal Militar en tiempo de paz) es **falta grave** (Art. 7).",
    justificacion: "Los artículos 6 y 7 de la LO 8/2014 tipifican las faltas leves y graves de inexactitud en el cumplimiento de las obligaciones de presencia y ausencia injustificada."
  },
  {
    id: "Q-W5-118",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 32 de la Ley Orgánica 8/2014 (Vídeo T15), ¿qué autoridades tienen competencia para imponer las sanciones de SEPARACIÓN DEL SERVICIO y de RESOLUCIÓN DE COMPROMISO por falta muy grave?",
    opciones: [
      "Únicamente el Ministro de Defensa.",
      "El Jefe de Estado Mayor del Ejército respectivo (que puede imponer arresto de 31 a 60 días y suspensión de empleo, pero NO separación del servicio ni resolución de compromiso).",
      "El Coronel Jefe de Regimiento.",
      "El General Jefe de Brigada."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 32.1 y 32.2",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Competencia Exclusiva del Ministro de Defensa vs JEMAD/JEME/AJEMA/JEMA (Art. 32)",
    consejoAcademia: "¡DISTINCIÓN CRÍTICA EN FALTAS MUY GRAVES (Art. 32 LO 8/2014)! El **JEMAD, SUBDEF, JEME, AJEMA y JEMA** pueden imponer por falta muy grave el **arresto de 31 a 60 días** y la **suspensión de empleo**. Pero la **Separación del Servicio** y la **Resolución de Compromiso** son competencia **EXCLUSIVA DEL MINISTRO DE DEFENSA**.",
    justificacion: "El artículo 32.1 de la LO 8/2014 reserva en exclusiva al Ministro de Defensa la imposición de las sanciones de separación del servicio y resolución de compromiso."
  },
  {
    id: "Q-W5-119",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 31 de la Ley Orgánica 8/2014 (Vídeo T15), todo mando militar tiene el deber de corregir las infracciones que observe en los de inferior empleo. Si no tiene competencia sancionadora directa sobre el infractor o considera que merece mayor sanción, podrá ordenar un ARRESTO CAUTELAR por un tiempo máximo de:",
    opciones: [
      "Cuarenta y ocho (48) horas.",
      "Setenta y dos (72) horas.",
      "Catorce (14) días.",
      "Veinticuatro (24) horas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 31",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > El Arresto Cautelar de 48 Horas (Art. 31)",
    consejoAcademia: "¡No confundas las **72 horas** de la detención preventiva policial/constitucional (Art. 17.2 CE) con las **48 HORAS** del **Arresto Cautelar** ordenado por cualquier superior militar en el Art. 31 de la LO 8/2014! (Además, ese tiempo de arresto cautelar se abona/descuenta luego de la sanción que se imponga).",
    justificacion: "El artículo 31 de la LO 8/2014 faculta al superior que observe una falta grave o muy grave (o para restablecer la disciplina) a ordenar un arresto cautelar por un tiempo máximo de 48 horas dando cuenta inmediata a quien tenga potestad sancionadora."
  },
  {
    id: "Q-W5-120",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 15 de la Ley Orgánica 8/2014 (Vídeo T15), la sanción de PRIVACIÓN DE SALIDA (de 1 a 8 días por falta leve) supone la permanencia del sancionado en su unidad, acuartelamiento, base, buque o establecimiento:",
    opciones: [
      "Fuera de las horas de trabajo o actividad, con participación en las actividades programadas en la unidad durante el servicio.",
      "Encerrado en celda de aislamiento sin participar en las actividades de su unidad.",
      "Perdiendo el 100% de su sueldo durante un mes.",
      "En su domicilio particular sin acudir a trabajar al cuartel."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 15",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Privación de Salida (1 a 8 días) vs Arresto (Arts. 15 y 17)",
    consejoAcademia: "Diferencia clave en LO 8/2014: **Privación de salida** (1 a 8 días, Art. 15) = permanece en su UCO fuera de las horas de trabajo participando en las actividades del servicio; **Arresto por falta leve** (1 a 14 días, Art. 17) = se cumple en la unidad o en el lugar que se designe (participando en las actividades de la unidad o permaneciendo en los lugares señalados); **Arresto por falta grave o muy grave** (15 a 60 días) = se cumple en un **Establecimiento Disciplinario Militar** (sin participar en las actividades de la unidad).",
    justificacion: "El artículo 15 de la LO 8/2014 define el contenido y forma de cumplimiento de la sanción de privación de salida."
  },
  {
    id: "Q-W5-121",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 16 de la Ley Orgánica 8/2014 (Vídeo T15), la SANCIÓN ECONÓMICA (de 1 a 7 días en faltas leves y de 8 a 15 días en faltas graves) consiste en la pérdida de retribuciones durante los días impuestos, calculándose cada día a razón de:",
    opciones: [
      "La treintava parte (1/30) de las retribuciones mensuales ordinarias que se perciban en el momento de la comisión de la falta.",
      "El 100% de la paga extraordinaria de Navidad.",
      "Una multa fija de 500 euros por día.",
      "La décima parte de las indemnizaciones por razón del servicio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 16",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > La Sanción Económica y la Regla del 50% (Art. 16)",
    consejoAcademia: "Dos datos clave del Art. 16 LO 8/2014 sobre la Sanción Económica: 1) Se calcula sobre las retribuciones ordinarias en el momento de **comisión de la falta**; 2) En una misma nómina mensual **NO podrá deducirse más del 50%** de las retribuciones mensuales percibidas (fraccionándose el resto en los meses siguientes).",
    justificacion: "El artículo 16 de la LO 8/2014 regula la sanción económica y el límite máximo de deducción mensual del 50% de las retribuciones."
  },
  {
    id: "Q-W5-122",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas (Vídeo T16)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 2 del Real Decreto 176/2014 (Vídeo T16), ¿qué diferencia existe entre una INICIATIVA y una QUEJA?",
    opciones: [
      "Las iniciativas son las propuestas que presentan los militares para mejorar el régimen de personal y las condiciones de vida o las de carácter general relativas a las unidades; las quejas son las reclamaciones que presentan los militares relativas al régimen de personal y a las condiciones de vida cuando consideren afectados sus derechos o intereses legítimos.",
      "Las iniciativas son anónimas y las quejas son colectivas.",
      "Las iniciativas se presentan ante el Tribunal Constitucional y las quejas ante la OTAN.",
      "Son exactamente lo mismo y sólo pueden presentarlas los Oficiales Generales."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Arts. 7 y 10",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T16: RD 176/2014 Iniciativas y Quejas) > Concepto de Iniciativa (Propuesta de Mejora) vs Queja (Reclamación)",
    consejoAcademia: "**Iniciativa** = Propuesta de mejora (constructiva); **Queja** = Reclamación relativa al régimen de personal o condiciones de vida (siempre que no tenga un procedimiento específico de recurso administrativo o disciplinario).",
    justificacion: "Los artículos 7 y 10 del Real Decreto 176/2014 definen respectivamente el objeto de las iniciativas y de las quejas."
  },
  {
    id: "Q-W5-123",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 7 de la Ley Orgánica 3/2007 (Vídeo T17), ¿qué diferencia establece la ley entre ACOSO SEXUAL y ACOSO POR RAZÓN DE SEXO?",
    opciones: [
      "Constituye acoso sexual cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo; y constituye acoso por razón de sexo cualquier comportamiento realizado en función del sexo de una persona, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.",
      "El acoso sexual sólo puede ser físico y el acoso por razón de sexo sólo puede ser escrito.",
      "El condicionamiento de un derecho a la aceptación de una situación de acoso sexual no se considera discriminación.",
      "Ambos conceptos sólo se aplican en empresas privadas y no en las Administraciones Públicas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 7.1 y 7.2",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Acoso Sexual vs Acoso por Razón de Sexo (Art. 7)",
    consejoAcademia: "Truco rápido para el Art. 7 LO 3/2007: Si el enunciado dice **'comportamiento verbal o físico DE NATURALEZA SEXUAL'** $\rightarrow$ **Acoso Sexual** (Art. 7.1). Si dice **'comportamiento realizado EN FUNCIÓN DEL SEXO de una persona'** (ej. por embarazo/maternidad o condición femenina/masculina sin connotación sexual) $\rightarrow$ **Acoso por Razón de Sexo** (Art. 7.2).",
    justificacion: "El artículo 7 de la LO 3/2007 diferencia el acoso sexual (Art. 7.1) y el acoso por razón de sexo (Art. 7.2), considerando ambos discriminatorios."
  },
  {
    id: "Q-W5-124",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva de Mujeres y Hombres (Vídeo T17)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 8 de la Ley Orgánica 3/2007 (Vídeo T17), constituye discriminación DIRECTA por razón de sexo:",
    opciones: [
      "Todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad.",
      "Establecer pruebas físicas adaptadas fisiológicamente por sexo conforme a la ley.",
      "Adoptar medidas de acción positiva para corregir situaciones patentes de desigualdad de hecho.",
      "Conceder permisos de lactancia y nacimiento."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 8",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T17: LO 3/2007 Igualdad) > Discriminación por Embarazo o Maternidad = Discriminación Directa (Art. 8)",
    consejoAcademia: "¡No caigas en la trampa! Todo trato desfavorable relacionado con el **embarazo o la maternidad** es siempre **DISCRIMINACIÓN DIRECTA** por razón de sexo (Art. 8 LO 3/2007), nunca indirecta.",
    justificacion: "El artículo 8 de la LO 3/2007 dispone expresamente que constituye discriminación directa por razón de sexo todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad."
  },
  {
    id: "Q-W5-125",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo UPA (Vídeos T17 y T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Orden DEF/1113/2021, ¿con qué periodicidad mínima se reúne en sesión ordinaria el Pleno del Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas (Vídeo T17)?",
    opciones: [
      "Al menos dos veces al año (semestralmente) en sesión ordinaria, y en sesión extraordinaria cuantas veces sea convocado por su Presidencia.",
      "Una sola vez cada cinco años.",
      "Todos los lunes del año de forma obligatoria.",
      "Cada tres años coincidiendo con la renovación del Tribunal Constitucional."
    ],
    correcta: 0,
    referencia: "Orden DEF/1113/2021, Art. 5",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T17: Observatorio Militar para la Igualdad) > Reuniones del Pleno: Al menos 2 veces al año (Art. 5)",
    consejoAcademia: "Tanto el **Pleno del COPERFAS** (LO 9/2011) como el **Pleno del Observatorio Militar para la Igualdad** (Orden DEF/1113/2021) y el **Observatorio de la Vida Militar** se reúnen en sesión ordinaria **AL MENOS DOS VECES AL AÑO** (1 por semestre).",
    justificacion: "El artículo 5 de la Orden DEF/1113/2021 establece que el Observatorio Militar para la Igualdad se reunirá en sesión ordinaria al menos dos veces al año."
  },
  {
    id: "Q-W5-126",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad y Protocolo UPA (Vídeos T17 y T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la Ley Orgánica 8/2014 y el Protocolo frente al acoso en las Fuerzas Armadas (Vídeo T18), ¿cómo está tipificado en el Régimen Disciplinario Militar realizar actos que impliquen acoso sexual y por razón de sexo o acoso profesional, y qué ocurre si los hechos revisten caracteres de delito del Código Penal Militar?",
    opciones: [
      "Está tipificado como falta muy grave (o grave según la entidad en el Art. 7/8 LO 8/2014), sin perjuicio de que cuando revista caracteres de delito (Art. 48/50 del Código Penal Militar) la autoridad militar lo ponga de inmediato en conocimiento de la Jurisdicción Militar o del Ministerio Fiscal, suspendiendo el expediente disciplinario hasta que recaiga resolución judicial firme.",
      "Se considera una simple falta leve sancionada únicamente con reprensión verbal.",
      "No constituye ni falta disciplinaria ni delito militar.",
      "Permite imponer dos sanciones idénticas por el mismo hecho vulnerando el principio 'non bis in idem'."
    ],
    correcta: 0,
    referencia: "LO 8/2014, Arts. 4, 7.29 y 8.12 y Protocolo UPA",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: Protocolo Acoso y UPA) > Prejudicialidad Penal y Tipificación Disciplinaria del Acoso",
    consejoAcademia: "Principio de **prejudicialidad penal** (Art. 4 LO 8/2014): si en cualquier fase del procedimiento disciplinario se aprecia que los hechos pueden ser constitutivos de delito, se comunica al Juez Togado / Fiscal Jurídico Militar y **se suspende la tramitación del expediente disciplinario** hasta la resolución judicial firme (y los hechos declarados probados por sentencia penal firme vinculan a la Administración).",
    justificacion: "La LO 8/2014 y el Protocolo de Acoso establecen la tipificación disciplinaria y la suspensión por prejudicialidad penal cuando los hechos puedan constituir delito."
  },
  {
    id: "Q-W5-127",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 32 de la Ley 39/2015 (Vídeo T19), la Administración, salvo precepto en contrario, podrá conceder de oficio o a petición de los interesados una AMPLIACIÓN DE LOS PLAZOS establecidos, que:",
    opciones: [
      "No exceda de la mitad de los mismos, si las circunstancias lo aconsejan y con ello no se perjudican derechos de tercero, debiendo producirse el acuerdo de ampliación y su notificación antes del vencimiento del plazo de que se trate, sin que quepa recurso contra el acuerdo que resuelva sobre la ampliación de plazos.",
      "Permita triplicar cualquier plazo incluso después de haber vencido.",
      "Sea susceptible de recurso de alzada con efectos suspensivos.",
      "Se aplique automáticamente sin acuerdo motivado."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 32.1 y 32.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Ampliación de Plazos (Mitad) vs Tramitación de Urgencia (Mitad) (Arts. 32 y 33)",
    consejoAcademia: "Compara los artículos gemelos **32 y 33 de la Ley 39/2015**: **Art. 32 (Ampliación de plazos)** = amplía hasta la **MITAD** del plazo (nunca si ya ha vencido) y **NO cabe recurso**. **Art. 33 (Tramitación de urgencia)** = reduce a la **MITAD** los plazos del procedimiento (salvo los relativos a la presentación de solicitudes y recursos) y **tampoco cabe recurso**.",
    justificacion: "El artículo 32 de la Ley 39/2015 regula la ampliación de plazos hasta la mitad de los mismos antes de su vencimiento y sin posibilidad de recurso."
  },
  {
    id: "Q-W5-128",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 35 de la Ley 39/2015 (Vídeo T19), deberán ser MOTIVADOS, con sucinta referencia de hechos y fundamentos de derecho:",
    opciones: [
      "Los actos que limiten derechos subjetivos o intereses legítimos, los que resuelvan procedimientos de revisión de oficio, recursos administrativos y procedimientos de arbitraje, los que se separen del criterio seguido en actuaciones precedentes o del dictamen de órganos consultivos, los acuerdos de suspensión de actos, los de aplicación de laurgencia o ampliación de plazos, los que rechacen pruebas propuestas por los interesados y los dictados en el ejercicio de potestades discrecionales.",
      "Únicamente las sentencias del Tribunal Supremo, ya que los actos administrativos nunca requieren motivación.",
      "Sólo los actos favorables que conceden becas o premios sin concurrencia.",
      "Ningún acuerdo de ampliación de plazos ni de rechazo de pruebas."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 35.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: Ley 39/2015 LPACAP I) > Actos que Deben Ser Motivados (Art. 35)",
    consejoAcademia: "El **Art. 35.1 LPACAP** es un clásico de examen: recuerda especialmente que deben motivarse los actos que **se separen del precedente o del dictamen de órganos consultivos**, los que **rechacen pruebas** propuestas por los interesados y los dictados en ejercicio de **potestades discrecionales**.",
    justificacion: "El artículo 35.1 de la Ley 39/2015 enumera los actos administrativos que deben ser obligatoriamente motivados."
  },
  {
    id: "Q-W5-129",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 80 de la Ley 39/2015 (Vídeo T20), salvo disposición expresa en contrario, los INFORMES en el procedimiento administrativo serán:",
    opciones: [
      "Facultativos y no vinculantes, y deberán ser emitidos a través de medios electrónicos en el plazo de diez días.",
      "Preceptivos y vinculantes en todos los casos, con un plazo de seis meses.",
      "Verbales y secretos para el interesado.",
      "Emitidos en el plazo de treinta días naturales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 80.1 y 80.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Regla General de los Informes: Facultativos, No Vinculantes y en 10 Días (Art. 80)",
    consejoAcademia: "¡Tres datos en una sola frase del Art. 80 LPACAP!: Salvo disposición expresa en contrario, los informes son **1) FACULTATIVOS**, **2) NO VINCULANTES** y se emiten en el plazo de **3) 10 DÍAS**.",
    justificacion: "El artículo 80 de la Ley 39/2015 dispone que salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes y se emitirán en el plazo de diez días."
  },
  {
    id: "Q-W5-130",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 77.2 de la Ley 39/2015 (Vídeo T20), cuando la Administración no tenga por ciertos los hechos alegados por los interesados o la naturaleza del procedimiento lo exija, el instructor del mismo acordará la apertura de un PERÍODO DE PRUEBA por un plazo:",
    opciones: [
      "No superior a treinta días ni inferior a diez (entre 10 y 30 días), pudiendo abrirse además un período extraordinario de prueba por un plazo no superior a diez días.",
      "De seis meses improrrogables.",
      "De cuarenta y ocho horas.",
      "Inferior a cinco días naturales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 77.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Período de Prueba Ordinario (10 a 30 días) y Extraordinario (hasta 10 días) (Art. 77)",
    consejoAcademia: "¡Cruza los plazos de la fase de instrucción LPACAP!: **Prueba ordinaria** (Art. 77) = **de 10 a 30 días**; **Prueba extraordinaria** = **hasta 10 días**; **Informes** (Art. 80) = **10 días**; **Trámite de Audiencia** (Art. 82) = **de 10 a 15 días**; **Información Pública** (Art. 83) = **mínimo 20 días**.",
    justificacion: "El artículo 77.2 de la Ley 39/2015 regula el período ordinario de prueba (de 10 a 30 días) y el período extraordinario de prueba (no superior a 10 días)."
  },
  {
    id: "Q-W5-131",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 94 de la Ley 39/2015 (Vídeo T20), todo interesado podrá DESISTIR de su solicitud o, cuando ello no esté prohibido por el ordenamiento jurídico, RENUNCIAR a sus derechos. ¿Qué diferencia fundamental de efectos existe entre el DESISTIMIENTO y la RENUNCIA?",
    opciones: [
      "En el desistimiento el interesado abandona este procedimiento concreto pero conserva intacto su derecho (pudiendo volver a presentar otra solicitud si no ha prescrito); en la renuncia el interesado abandona el derecho mismo, por lo que no podrá volver a ejercitarlo en el futuro.",
      "En la renuncia se puede volver a presentar la solicitud al día siguiente y en el desistimiento se pierde el derecho para siempre.",
      "Si el escrito de iniciación se hubiera formulado por dos o más interesados, el desistimiento o la renuncia de uno de ellos afecta obligatoriamente a todos los demás.",
      "No existe ninguna diferencia entre desistimiento y renuncia."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 94",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Desistimiento vs Renuncia (Art. 94)",
    consejoAcademia: "Regla de oro del Art. 94 LPACAP: **Desistimiento** = abandonas la *solicitud/procedimiento actual* (puedes iniciar otro después); **Renuncia** = abandonas el *derecho* para siempre. Y si hay varios interesados, el desistimiento o la renuncia **SOLO afecta a aquellos que la hubiesen formulado**.",
    justificacion: "El artículo 94 de la Ley 39/2015 regula el desistimiento y la renuncia de los interesados."
  },
  {
    id: "Q-W5-132",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 100 de la Ley 39/2015 (Vídeo T20), la EJECUCIÓN FORZOSA por las Administraciones Públicas se efectuará, respetando siempre el principio de proporcionalidad, por los cuatro medios siguientes:",
    opciones: [
      "Apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.",
      "Prisión provisional, destierro, confiscación general de bienes y arresto domiciliario.",
      "Apercibimiento verbal, publicación en prensa y embargo sin título ejecutivo.",
      "Suspensión de empleo, pérdida de destino y separación del servicio."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 100.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Los 4 Medios de Ejecución Forzosa (Art. 100)",
    consejoAcademia: "Memoriza los **4 medios de ejecución forzosa (Art. 100 LPACAP)**: 1) **Apremio sobre el patrimonio** (deudas líquidas de dinero); 2) **Ejecución subsidiaria** (actos NO personalísimos que puede hacer otro a costa del obligado); 3) **Multa coercitiva** (reiterada por lapsos de tiempo, independiente de las sanciones y compatible con ellas); 4) **Compulsión sobre las personas** (obligaciones personalísimas de no hacer o soportar, cuando la ley lo autorice expresamente).",
    justificacion: "El artículo 100.1 de la Ley 39/2015 enumera los cuatro medios de ejecución forzosa de los actos administrativos."
  },
  {
    id: "Q-W5-133",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 117 de la Ley 39/2015 (Vídeo T20), la interposición de cualquier recurso administrativo, excepto en los casos en que una disposición establezca lo contrario, NO suspenderá la ejecución del acto impugnado. No obstante, si el interesado solicita la suspensión al interponer el recurso, ¿cuándo se entenderá suspendida la ejecución por silencio positivo si el órgano competente no ha dictado y notificado resolución expresa sobre dicha solicitud de suspensión?",
    opciones: [
      "Una vez transcurrido un mes (1 mes) desde que la solicitud de suspensión haya tenido entrada en el registro electrónico de la Administración u Organismo competente para decidir sobre la misma.",
      "Transcurridos seis meses.",
      "A las veinticuatro horas.",
      "Nunca se suspende por silencio, siempre se entiende denegada."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 117.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Suspensión de la Ejecución en Recursos: Silencio Positivo al Mes (Art. 117.3)",
    consejoAcademia: "¡EXCEPCIÓN DE ORO DEL ART. 117.3 LPACAP! Aunque en los recursos administrativos el silencio sobre el fondo del recurso es negativo, en la **solicitud cautelar de SUSPENSIÓN de la ejecución del acto recurrido**, si la Administración no resuelve sobre la suspensión en **1 MES**, el acto queda **SUSPENDIDO automáticamente (silencio positivo cautelar)**.",
    justificacion: "El artículo 117.3 de la Ley 39/2015 dispone que la ejecución del acto impugnado se entenderá suspendida si transcurrido un mes desde que la solicitud de suspensión tuvo entrada en el registro electrónico del órgano competente para decidir sobre la misma, éste no ha dictado y notificado resolución expresa al respecto."
  },
  {
    id: "Q-W5-134",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 115.2 de la Ley 39/2015 (Vídeo T20), el error o la ausencia de la calificación del recurso por parte del recurrente:",
    opciones: [
      "No será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter.",
      "Determina la inadmisión automática e insubsanable del recurso.",
      "Obliga al recurrente a pagar una tasa de penalización.",
      "Anula el acto administrativo recurrido."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 115.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Principio Antiformalista en la Calificación del Recurso (Art. 115.2)",
    consejoAcademia: "Art. 115.2 LPACAP (y también aplicable en vía disciplinaria): Si el ciudadano o militar llama 'recurso de reposición' a lo que en realidad es una 'alzada' (o viceversa), **el error o la ausencia de calificación del recurso NO impide su tramitación** siempre que se deduzca su verdadero carácter.",
    justificacion: "El artículo 115.2 de la Ley 39/2015 consagra el principio antiformalista respecto al error o ausencia en la calificación del recurso."
  },
  {
    id: "Q-W5-135",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 46 de la Ley Orgánica 8/2014 (Vídeo T15), en el procedimiento sancionador por FALTA LEVE (que es preferentemente oral), tras verificar la exactitud de los hechos, oír al presunto infractor e informarle de sus derechos, la resolución sancionadora se notificará por escrito al interesado y al mando que dio parte. ¿Contendrá dicha notificación los recursos que procedan, autoridad ante quien presentarlos y plazos?",
    opciones: [
      "Sí, deberá notificarse por escrito expresando claramente los hechos, el precepto infringido, la sanción impuesta, la autoridad que la impone y el recurso que cabe (alzada), órgano ante el que ha de presentarse y plazo para interponerlo (un mes).",
      "No se notifica por escrito nunca en las faltas leves.",
      "Contra las sanciones por falta leve no cabe ningún recurso administrativo ni judicial.",
      "El plazo para recurrir una falta leve es de veinticuatro horas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Arts. 46, 47 y 68",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Procedimiento por Falta Leve y Notificación Escrita (Arts. 46 y 47)",
    consejoAcademia: "En faltas leves (Arts. 46-47 LO 8/2014): la **tramitación** es preferentemente **oral**, pero la **resolución sancionadora y su notificación son SIEMPRE POR ESCRITO** y con pie de recurso (1 mes).",
    justificacion: "Los artículos 46 y 47 de la LO 8/2014 exigen que la resolución sancionadora por falta leve se documente y notifique por escrito al interesado con indicación de los recursos procedentes."
  },
  {
    id: "Q-W5-136",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario FAS (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con el artículo 54 de la Ley Orgánica 8/2014 (Vídeo T15), en el procedimiento por faltas graves y muy graves, la autoridad que acuerde la incoación del expediente disciplinario podrá acordar motivadamente, como MEDIDA CAUTELAR, el arresto preventivo del expedientado en su unidad o en un establecimiento disciplinario militar cuando las circunstancias lo aconsejen para restablecer la disciplina. ¿Cuál es la duración máxima de este arresto preventivo?",
    opciones: [
      "En ningún caso podrá exceder de veinte (20) días, siéndole de abono para el cumplimiento de la sanción de arresto que pudiera imponérsele.",
      "Sesenta (60) días.",
      "Seis (6) meses.",
      "Cuarenta y ocho (48) horas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 54.1",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15: LO 8/2014 Régimen Disciplinario) > Arresto Cautelar (48 horas, Art. 31) vs Arresto Preventivo en Expediente (máx 20 días, Art. 54)",
    consejoAcademia: "¡DIFERENCIA BRUTAL DE EXAMEN ENTRE LOS DOS ARRESTOS PROVISIONALES DE LA LO 8/2014!: 1) **Arresto Cautelar** ordenado en el acto por cualquier superior (Art. 31) = máximo **48 HORAS**; 2) **Arresto Preventivo** como medida cautelar acordada por la autoridad que incoa un expediente por falta grave o muy grave (Art. 54.1) = máximo **20 DÍAS**.",
    justificacion: "El artículo 54.1 de la LO 8/2014 establece que la medida cautelar de arresto preventivo en expedientes por falta grave o muy grave no podrá exceder en ningún caso de veinte días."
  },
  {
    id: "Q-W5-137",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el artículo 19 de la Ley 39/2007, de la Carrera Militar (Vídeo T11), los Consejos Superiores del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio son:",
    opciones: [
      "Órganos colegiados asesores y consultivos del Ministro de Defensa y del Jefe de Estado Mayor del ejército respectivo.",
      "Tribunales jurisdiccionales integrados en el Poder Judicial.",
      "Asociaciones profesionales inscritas en el RAPFAS.",
      "Órganos ejecutivos de las Comunidades Autónomas."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 19",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Los Consejos Superiores de los Ejércitos (Art. 19)",
    consejoAcademia: "Los **Consejos Superiores de cada Ejército** (Art. 19 Ley 39/2007) son órganos colegiados **asesores y consultivos** del Ministro de Defensa y del JEME/AJEMA/JEMA respectivo (informan p. ej. evaluaciones para ascenso por elección, idoneidad, expedientes de insuficiencia o separación del servicio).",
    justificacion: "El artículo 19 de la Ley 39/2007 define a los Consejos Superiores de los Ejércitos como órganos colegiados asesores y consultivos del Ministro de Defensa y del Jefe de Estado Mayor respectivo."
  },
  {
    id: "Q-W5-138",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar y Ley 8/2006 Tropa (Vídeos T11 y T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 21 de la Ley 39/2007 (Vídeo T11), dentro de la categoría de Tropa y Marinería, ¿cuáles son los empleos militares ordenados de menor a mayor jerarquía?",
    opciones: [
      "Soldado o Marinero, Soldado de Primera o Marinero de Primera (a extinguir/histórico según régimen transitorio, siendo la escala activa: Soldado/Marinero, Cabo, Cabo Primero y Cabo Mayor).",
      "Soldado, Sargento, Brigada y Subteniente.",
      "Marinero, Alférez de Fragata, Teniente de Navío y Capitán de Corbeta.",
      "Recluta, Cabo Segundo, Cabo Primero y Sargento Mayor."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 21.2.d",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007 Carrera Militar) > Empleos de la Categoría de Tropa y Marinería (Art. 21)",
    consejoAcademia: "En el **Art. 21.2.d de la Ley 39/2007**, los empleos de la categoría de Tropa y Marinería son **4**: **Soldado o Marinero, Cabo, Cabo Primero y Cabo Mayor** (mientras que en el Baremo de Concurso del Anexo II aún se contempla 1 punto para quienes conserven el empleo a extinguir de Soldado/Marinero de 1ª).",
    justificacion: "El artículo 21.2.d de la Ley 39/2007 enumera los empleos de la categoría de tropa y marinería: Soldado o Marinero, Cabo, Cabo Primero y Cabo Mayor."
  },
  {
    id: "Q-W5-139",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes FAS (Vídeo T14)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 30 de la Ley Orgánica 9/2011 (Vídeo T14), los miembros de las Fuerzas Armadas tienen derecho al desarrollo de su carrera militar, combinando preparación y experiencia profesional, y el Ministerio de Defensa promoverá acciones para facilitar la conciliación de la vida profesional, personal y familiar:",
    opciones: [
      "Atendiendo a las necesidades del servicio, que prevalecerán en caso de conflicto, especialmente en el desarrollo de misiones u operaciones militares.",
      "Prevaleciendo siempre el interés particular sobre cualquier misión operativa de combate.",
      "Suprimiendo las guardias de 24 horas en todas las unidades de las Fuerzas Armadas.",
      "Sin sujeción a horario ni disponibilidad alguna."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 22 y Art. 25",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14: LO 9/2011 Derechos y Deberes) > Conciliación y Necesidades del Servicio",
    consejoAcademia: "En la LO 9/2011 las medidas de conciliación de la vida profesional, personal y familiar se aplican siempre teniendo en cuenta las **necesidades del servicio**, que prevalecen en operaciones y misiones.",
    justificacion: "La LO 9/2011 garantiza las medidas de conciliación armonizándolas con las exigencias de disponibilidad y las necesidades del servicio."
  },
  {
    id: "Q-W5-140",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeos T19 y T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 114 de la Ley 39/2015 (Vídeo T20), en el ámbito de la Administración General del Estado, ¿cuáles de los siguientes actos PONEN FIN A LA VÍA ADMINISTRATIVA (y por tanto contra ellos cabe recurso potestativo de reposición o contencioso-administrativo, pero NO recurso de alzada)?",
    opciones: [
      "Los actos administrativos de los miembros y órganos del Gobierno (Consejo de Ministros y Ministros), los emanados de los Ministros y los Secretarios de Estado en el ejercicio de las competencias que tienen atribuidas los órganos de los que son titulares, y los emanados de los órganos directivos con nivel de Director general o superior en materia de personal.",
      "Los actos dictados por un Jefe de Negociado en materia de archivo.",
      "Las sanciones por falta leve impuestas por un Capitán Jefe de Compañía.",
      "Ningún acto de un Ministro pone fin a la vía administrativa."
    ],
    correcta: 0,
    referencia: "Ley 39/2015 (LPACAP), Art. 114.1 y 114.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: Ley 39/2015 LPACAP II) > Actos que Ponen Fin a la Vía Administrativa en la AGE (Art. 114)",
    consejoAcademia: "¡Detalle fino del **Art. 114.2.c LPACAP**!: En la AGE agotan la vía administrativa: 1) Actos del Gobierno; 2) Actos de **Ministros y Secretarios de Estado**; 3) Actos de órganos directivos con nivel de **Director General o superior (DG, SGT, SG, Subsecretario) EN MATERIA DE PERSONAL**.",
    justificacion: "El artículo 114.2 de la Ley 39/2015 enumera los actos que ponen fin a la vía administrativa en el ámbito estatal."
  }
];
const WAVE5_QUESTIONS_PART3 = [
  // ==========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL Y ACCIÓN CONJUNTA (B3-T01 a B3-T07)
  // 60 NUEVAS PREGUNTAS (Q-W5-141 a Q-W5-200) — Vídeos T21 a T27
  // ==========================================================================

  // --- B3-T01: Ley 36/2015 de Seguridad Nacional y RD 1150/2021 ESN 2021 (Vídeos T21 y T22) ---
  {
    id: "Q-W5-141",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 3 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), ¿cómo se define la Seguridad Nacional?",
    opciones: [
      "La acción del Estado dirigida a proteger la libertad, los derechos y bienestar de los ciudadanos, a garantizar la defensa de España y sus principios y valores constitucionales, así como a contribuir junto a nuestros socios y aliados a la seguridad internacional en el cumplimiento de los compromisos asumidos.",
      "La acción exclusiva de las policías municipales para regular el tráfico urbano.",
      "El conjunto de tratados comerciales bilaterales firmados por las Cámaras de Comercio.",
      "Un estado excepcional que suspende de forma permanente la Constitución."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Concepto de Seguridad Nacional (Art. 3)",
    consejoAcademia: "Los **3 pilares** de la definición de Seguridad Nacional (Art. 3 Ley 36/2015): 1) Proteger la **libertad, derechos y bienestar de los ciudadanos**; 2) Garantizar la **defensa de España** y sus principios y valores constitucionales; 3) Contribuir con **socios y aliados a la seguridad internacional**.",
    justificacion: "El artículo 3 de la Ley 36/2015 define la Seguridad Nacional en torno a estos tres ejes esenciales."
  },
  {
    id: "Q-W5-142",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 4.3 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), la Estrategia de Seguridad Nacional se elaborará a iniciativa del Presidente del Gobierno, quien la someterá a la aprobación del Consejo de Ministros, y se revisará:",
    opciones: [
      "Cada cinco años o cuando lo aconsejen las circunstancias cambiantes del entorno estratégico; una vez aprobada mediante Real Decreto, será presentada en las Cortes Generales.",
      "Cada diez años mediante Ley Orgánica aprobada por el Senado.",
      "Anualmente por el Jefe de Estado Mayor de la Defensa.",
      "Únicamente cuando se declare el estado de sitio."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 4.3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Aprobación y Revisión Quinquenal de la ESN (Art. 4.3)",
    consejoAcademia: "La **Estrategia de Seguridad Nacional (ESN)**: iniciativa del **Presidente del Gobierno** $\\rightarrow$ aprueba el **Consejo de Ministros por Real Decreto** $\\rightarrow$ se presenta en las **Cortes Generales** $\\rightarrow$ revisión **cada 5 años** o cuando lo aconsejen las circunstancias del entorno estratégico.",
    justificacion: "El artículo 4.3 de la Ley 36/2015 establece el procedimiento de elaboración, aprobación por Real Decreto y revisión quinquenal de la Estrategia de Seguridad Nacional."
  },
  {
    id: "Q-W5-143",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 12 de la Ley 36/2015 (Vídeo T21), ¿cuáles son los órganos competentes de la Seguridad Nacional (y componentes fundamentales del Sistema de Seguridad Nacional)?",
    opciones: [
      "El Congreso de los Diputados y el Senado (a través de la Comisión Mixta de Seguridad Nacional), el Gobierno, el Presidente del Gobierno, los Ministros, el Consejo de Seguridad Nacional y los Delegados del Gobierno en las Comunidades Autónomas y en las Ciudades con Estatuto de Autonomía.",
      "Únicamente los Alcaldes y los Jueces de Paz.",
      "El Tribunal Constitucional y el Defensor del Pueblo.",
      "Las Cámaras de Comercio y los Colegios Profesionales."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 12",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Órganos Competentes de la Seguridad Nacional (Art. 12)",
    consejoAcademia: "Ojo al Art. 12 de la Ley 36/2015: incluye también a los **Delegados del Gobierno en las CC.AA. y en Ceuta y Melilla**, además de las Cortes Generales, el Gobierno, el Presidente del Gobierno, los Ministros y el Consejo de Seguridad Nacional.",
    justificacion: "El artículo 12 de la Ley 36/2015 enumera los órganos competentes en materia de Seguridad Nacional."
  },
  {
    id: "Q-W5-144",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 21 de la Ley 36/2015 (Vídeo T21), el Consejo de Seguridad Nacional es el órgano colegiado del Gobierno al que corresponde asistir al Presidente del Gobierno en la dirección de la Política de Seguridad Nacional. ¿Quién preside sus reuniones cuando NO asiste el Rey, y cada cuánto tiempo se reúne como mínimo?",
    opciones: [
      "Lo preside el Presidente del Gobierno (salvo cuando el Rey asista a sus reuniones, en cuyo caso lo presidirá Su Majestad el Rey a petición del Presidente del Gobierno) y se reúne a iniciativa del Presidente del Gobierno como mínimo con carácter bimestral.",
      "Lo preside siempre el JEMAD y se reúne una vez cada cuatro años.",
      "Lo preside el Presidente del Senado y se reúne todos los lunes.",
      "Lo preside el Director del CNI y sólo se reúne en caso de guerra."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 21",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > El Consejo de Seguridad Nacional: Presidencia y Reuniones Bimestrales (Art. 21)",
    consejoAcademia: "¡No confundas periodicidad! El **Consejo de Seguridad Nacional** (Ley 36/2015, Art. 21.5) se reúne como mínimo con carácter **BIMESTRAL** (cada dos meses) o cuantas veces lo considere necesario su Presidente. Y el **Departamento de Seguridad Nacional (DSN)** ejerce las funciones de **Secretaría Técnica y órgano de trabajo permanente** del Consejo de Seguridad Nacional (Art. 20.3).",
    justificacion: "El artículo 21 de la Ley 36/2015 regula la composición, presidencia y periodicidad mínima bimestral de las reuniones del Consejo de Seguridad Nacional."
  },
  {
    id: "Q-W5-145",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a los artículos 23 y 24 de la Ley 36/2015 (Vídeo T21), ¿qué es la SITUACIÓN DE INTERÉS PARA LA SEGURIDAD NACIONAL y quién la declara?",
    opciones: [
      "Es aquella en la que, por la gravedad de sus efectos y la dimensión, urgencia y transversalidad de las medidas para su resolución, requiere de la coordinación reforzada de las autoridades competentes bajo la dirección del Gobierno, sin requerir la declaración de los estados de alarma y de excepción; la declara el Presidente del Gobierno mediante Real Decreto.",
      "Es un estado que suspende el derecho a la vida y lo declara un Alcalde por bando municipal.",
      "Es sinónimo de estado de sitio y lo declara el Congreso por mayoría de 3/5.",
      "La declara el JEMAD mediante Instrucción Comunicada."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Arts. 23 y 24",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Situación de Interés para la Seguridad Nacional (Arts. 23-24)",
    consejoAcademia: "¡Pregunta estrella del Vídeo T21! La **Situación de Interés para la Seguridad Nacional** (Art. 24 Ley 36/2015): 1) La declara el **Presidente del Gobierno por Real Decreto**; 2) **NO supone suspensión de derechos fundamentales** (es previa/distinta a los estados de alarma, excepción o sitio del Art. 116 CE); 3) El Presidente convocará al **Consejo de Seguridad Nacional** y nombrará una **Autoridad Funcional** de dirección si procede.",
    justificacion: "Los artículos 23 y 24 de la Ley 36/2015 definen la Situación de Interés para la Seguridad Nacional y atribuyen su declaración al Presidente del Gobierno mediante Real Decreto."
  },
  {
    id: "Q-W5-146",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la Estrategia de Seguridad Nacional 2021 (Real Decreto 1150/2021, Vídeo T22), el Capítulo 4 articula el planeamiento estratégico integrado en torno a TRES EJES ESTRATÉGICOS (que agrupan 33 líneas de acción). ¿Cuáles son exactamente esos 3 ejes?",
    opciones: [
      "Eje 1: Proteger (una España segura y resiliente); Eje 2: Promover (una España próspera y proyectada al exterior); y Eje 3: Participar (una España comprometida con la seguridad internacional y el multilateralismo).",
      "Eje 1: Atacar; Eje 2: Recaudar; y Eje 3: Sancionar.",
      "Eje 1: Tierra; Eje 2: Mar; y Eje 3: Aire.",
      "Eje 1: Municipal; Eje 2: Provincial; y Eje 3: Comarcal."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulo 4",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: Estrategia de Seguridad Nacional 2021 RD 1150/2021) > Los 3 Ejes Estratégicos: Proteger, Promover y Participar",
    consejoAcademia: "Regla mnemotécnica de las **3 P de la ESN 2021 (RD 1150/2021, Vídeo T22)**: **PROTEGER, PROMOVER y PARTICIPAR**, con **15 ámbitos de la Seguridad Nacional** y **33 líneas de acción**.",
    justificacion: "El Capítulo 4 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021) estructura las 33 líneas de acción en tres ejes: Proteger, Promover y Participar."
  },
  {
    id: "Q-W5-147",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al Capítulo 3 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021, Vídeo T22), dentro del mapa de riesgos y amenazas, ¿qué fenómeno destaca por combinar acciones convencionales e irregulares con ciberataques, campañas de desinformación, coerción económica o instrumentalización de flujos migratorios en la denominada 'zona gris'?",
    opciones: [
      "Las estrategias híbridas.",
      "El cambio horario estacional.",
      "La despoblación rural exclusivamente.",
      "El comercio electrónico minorista."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulo 3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: Estrategia de Seguridad Nacional 2021 RD 1150/2021) > Las Estrategias Híbridas y la Zona Gris",
    consejoAcademia: "En la ESN 2021 (RD 1150/2021) las **estrategias híbridas** y las campañas de **desinformación** actúan como **vectores multiplicadores** de otros riesgos y amenazas operando por debajo del umbral del conflicto armado tradicional (**zona gris**).",
    justificacion: "El Capítulo 3 de la ESN 2021 (RD 1150/2021) analiza las estrategias híbridas en la zona gris como uno de los principales vectores de amenaza."
  },
  {
    id: "Q-W5-148",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el Capítulo 2 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021, Vídeo T22), bajo el título 'Una España segura y global', la posición geoestratégica de España viene condicionada por su pertenencia a la Unión Europea y a la OTAN y por su condición de frontera exterior europea. ¿Cuáles son las tres regiones prioritarias de especial interés geopolítico señaladas junto con el espacio euroatlántico?",
    opciones: [
      "El Norte de África (Magreb), el Sahel y el Golfo de Guinea (además de los vínculos históricos con Iberoamérica y el Mediterráneo).",
      "Únicamente la Antártida y el Océano Glacial Ártico.",
      "Polinesia, Micronesia y Melanesia.",
      "Siberia Oriental y Kamchatka."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulo 2",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: Estrategia de Seguridad Nacional 2021 RD 1150/2021) > Regiones de Interés Geopolítico para España",
    consejoAcademia: "En la ESN 2021 (Vídeo T22) el denominado **Flanco Sur / Vecindad Sur** comprende como arcos críticos para España el **Magreb (Norte de África), el Sahel y el Golfo de Guinea**, además del Mediterráneo e Iberoamérica.",
    justificacion: "El Capítulo 2 de la ESN 2021 destaca el Magreb, el Sahel y el Golfo de Guinea, junto con el Mediterráneo e Iberoamérica, como espacios prioritarios para la seguridad de España."
  },
  {
    id: "Q-W5-149",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 10 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), ¿cuáles son los ámbitos de especial interés de la Seguridad Nacional enumerados expresamente en dicho precepto legal?",
    opciones: [
      "La ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la seguridad del espacio aéreo y ultraterrestre, la seguridad energética, la seguridad sanitaria y la preservación del medio ambiente.",
      "Únicamente el fútbol profesional y la tauromaquia.",
      "Solamente la recaudación del impuesto de bienes inmuebles.",
      "La gestión de parques infantiles municipales."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 10",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Ámbitos de Especial Interés de la Seguridad Nacional (Art. 10)",
    consejoAcademia: "En el **Art. 10 de la Ley 36/2015** se citan esos **7 ámbitos de especial interés** (que luego la ESN 2021 amplía y desarrolla hasta 15 ámbitos sectoriales con sus respectivos Comités Especializados del Consejo de Seguridad Nacional).",
    justificacion: "El artículo 10 de la Ley 36/2015 enumera los ámbitos de especial interés de la Seguridad Nacional que requieren una atención específica."
  },

  // --- B3-T02: PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23) ---
  {
    id: "Q-W5-150",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según la publicación doctrinal conjunta PDC-01(B) 'Doctrina para el empleo de las Fuerzas Armadas' (Vídeo T23), ¿qué autoridad aprueba la PDC-01 y qué nivel ocupa dentro de la arquitectura doctrinal nacional?",
    opciones: [
      "La aprueba el Jefe de Estado Mayor de la Defensa (JEMAD) y constituye la publicación doctrinal conjunta de primer nivel (cúspide de la doctrina militar nacional), de la que derivan las demás publicaciones doctrinales conjuntas y específicas.",
      "La aprueba el Alcalde de Madrid y es de rango municipal.",
      "La aprueba el Ministro de Hacienda y regula impuestos.",
      "La aprueba la ONU y sólo rige para cascos azules extranjeros."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Doctrina para el empleo de las FAS",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Naturaleza y Aprobación por el JEMAD",
    consejoAcademia: "La **PDC-01(B)** es aprobada por el **JEMAD** y es la **publicación doctrinal de nivel superior (1er nivel)** en las FAS españolas, alineada con la doctrina aliada **AJP-01**.",
    justificacion: "La PDC-01(B) es aprobada por el JEMAD como documento cumbre de la doctrina militar conjunta de las Fuerzas Armadas españolas."
  },
  {
    id: "Q-W5-151",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la PDC-01(B) (Vídeo T23), el entorno operativo en el que actúan las Fuerzas Armadas se estructura en CINCO ÁMBITOS DE OPERACIÓN (dominios operativos) estrechamente interconectados. ¿Cuáles son esos 5 ámbitos?",
    opciones: [
      "Terrestre, Marítimo, Aeroespacial (Aéreo y Espacial), Ciberespacial y Cognitivo.",
      "Urbano, Rural, Montañoso, Desértico y Polar.",
      "Político, Sindical, Judicial, Mediático y Deportivo.",
      "Local, Comarcal, Provincial, Autonómico y Estatal."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Ámbitos de Operación (Dominios Operativos)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Los 5 Ámbitos de Operación: Terrestre, Marítimo, Aeroespacial, Ciberespacial y Cognitivo",
    consejoAcademia: "¡NOVEDAD ESENCIAL DE LA PDC-01(B) (Vídeo T23)! Frente a ediciones antiguas, la PDC-01(B) consolida los **5 ÁMBITOS DE OPERACIÓN**: **Terrestre, Marítimo, Aeroespacial, Ciberespacial y COGNITIVO** (este 5º ámbito cognitivo abarca las percepciones, voluntades y toma de decisiones de las audiencias y del adversario). ¡No confundas los 5 ámbitos de la PDC-01(B) con los 4 instrumentos de poder nacional DIME!",
    justificacion: "La PDC-01(B) establece cinco ámbitos de operación para la acción conjunta y multidominio: terrestre, marítimo, aeroespacial, ciberespacial y cognitivo."
  },
  {
    id: "Q-W5-152",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01(B) (Vídeo T23), el poder nacional se ejerce de forma integral combinando cuatro instrumentos básicos de poder conocidos por el acrónimo 'DIME'. ¿Qué significan las siglas DIME?",
    opciones: [
      "Diplomático, de la Información, Militar y Económico.",
      "Directivo, Interior, Municipal y Exterior.",
      "Defensivo, Industrial, Marítimo y Espacial.",
      "Docente, Investigador, Médico y Ecológico."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Instrumentos de Poder Nacional (DIME)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Instrumentos de Poder Nacional (DIME) y Enfoque Integral",
    consejoAcademia: "Acrónimo **DIME** en la PDC-01(B): **D**iplomático, **I**nformación, **M**ilitar y **E**conómico.",
    justificacion: "La PDC-01(B) identifica los cuatro instrumentos de poder nacional bajo el acrónimo DIME: Diplomático, Información, Militar y Económico."
  },
  {
    id: "Q-W5-153",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la PDC-01(B) (Vídeo T23), el continuo de la competición (espectro del conflicto) abarca una gradación de relaciones entre actores. ¿Cuáles son los estadios fundamentales de ese continuo de la competición?",
    opciones: [
      "Cooperación, Competición (o rivalidad/confrontación por debajo del umbral del conflicto armado) y Conflicto armado.",
      "Únicamente Paz absoluta y Guerra nuclear total.",
      "Tregua, Armisticio y Capitulación.",
      "Fase alfa, Fase beta y Fase gamma."
    ],
    correcta: 0,
    referencia: "PDC-01(B), El Continuo de la Competición",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > El Continuo de la Competición: Cooperación, Competición/Confrontación y Conflicto Armado",
    consejoAcademia: "En la PDC-01(B) (Vídeo T23) ya no se habla de una frontera rígida paz/guerra, sino del **Continuo de la Competición**: **Cooperación $\\leftrightarrow$ Competición / Confrontación (Zona Gris) $\\leftrightarrow$ Conflicto Armado**.",
    justificacion: "La PDC-01(B) describe el continuo de la competición entre actores internacionales a través de la cooperación, la competición/confrontación bajo el umbral bélico y el conflicto armado."
  },
  {
    id: "Q-W5-154",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la PDC-01(B) (Vídeo T23), ¿cuáles son los niveles de conducción de las operaciones militares y qué autoridad dirige en España el nivel operacional?",
    opciones: [
      "Los niveles son Político-Estratégico (Gobierno/Ministro), Militar-Estratégico (JEMAD), Operacional (Comandante del Mando de Operaciones - CMOPS) y Táctico (Comandantes de las fuerzas/mandos componentes asignados); conduciendo el nivel operacional el CMOPS.",
      "Sólo existen dos niveles: el municipal y el autonómico.",
      "El nivel operacional lo dirige el Alcalde y el estratégico un Cabo.",
      "El nivel táctico lo dirige el Senado."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Niveles de las Operaciones Militares",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Niveles de Planeamiento y Conducción de las Operaciones",
    consejoAcademia: "¡Cruza siempre los niveles con sus autoridades en España!: 1) **Estratégico-Militar** = **JEMAD** (asistido por el EMACON); 2) **Operacional** = **CMOPS** (Comandante del Mando de Operaciones); 3) **Táctico** = Mandos Componentes / Comandantes de Fuerza en teatro.",
    justificacion: "La PDC-01(B) distingue los niveles político-estratégico, estratégico-militar (JEMAD), operacional (CMOPS) y táctico."
  },
  {
    id: "Q-W5-155",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01(B) (Vídeo T23), ¿cuáles son las FUNCIONES CONJUNTAS (Joint Functions) que agrupan las capacidades y actividades sincronizadas por el comandante para alcanzar los objetivos en las operaciones?",
    opciones: [
      "Mando y Control (C2), Inteligencia, Maniobra y Fuegos (o Acción/Fuegos), Sostenimiento (Logística), Protección de la Fuerza, Información y Cooperación Cívico-Militar (CIMIC).",
      "Contabilidad, Nóminas, Vacaciones y Comedor.",
      "Reclutamiento, Vestuario, Música y Deporte.",
      "Aduanas, Correos y Telégrafos."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Funciones Conjuntas",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Las Funciones Conjuntas en las Operaciones",
    consejoAcademia: "Recuerda las **Funciones Conjuntas** de la PDC-01(B) (situando a **Mando y Control** y a **Información** como funciones centrales/transversales): **Mando y Control, Inteligencia, Maniobra, Fuegos, Sostenimiento, Protección e Información (con CIMIC)**.",
    justificacion: "La PDC-01(B) articula el empleo sincronizado de las capacidades militares mediante las Funciones Conjuntas."
  },
  {
    id: "Q-W5-156",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "De acuerdo con la PDC-01(B) (Vídeo T23), ¿qué diferencia existe entre una operación CONJUNTA, una operación COMBINADA y una operación INTEGRADA (o Multidominio)?",
    opciones: [
      "Conjunta es aquella en la que participan fuerzas de dos o más Ejércitos (ET, Armada, EA) de una misma nación; Combinada (o multinacional) es aquella en la que participan fuerzas de dos o más naciones; y Multidominio sincroniza efectos convergiendo en los 5 ámbitos de operación e integrándose con otros instrumentos de poder.",
      "Conjunta es con otros países y Combinada es de un solo Ejército.",
      "Conjunta significa sin armamento y Combinada significa sólo marítima.",
      "Son exactamente sinónimos y significan que interviene un solo batallón."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Acción Conjunta, Combinada e Integrada",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Acción Específica, Conjunta, Combinada e Integrada",
    consejoAcademia: "¡Básico e imprescindible!: **Específica** = 1 solo Ejército; **Conjunta** = 2 o más Ejércitos de la **misma nación**; **Combinada** = fuerzas de **2 o más países/aliados**; **Conjunta-Combinada** = varios Ejércitos y varios países.",
    justificacion: "La PDC-01(B) define la acción conjunta como la que integra fuerzas de dos o más Ejércitos nacionales y la acción combinada como la que integra fuerzas de dos o más estados."
  },
  {
    id: "Q-W5-157",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme a la PDC-01(B) (Vídeo T23), dentro de la filosofía de mando en las Fuerzas Armadas, ¿en qué consiste el principio de 'MANDO TIPO MISIÓN' (Mission Command)?",
    opciones: [
      "Es un estilo de ejercicio del mando que promueve la iniciativa descentralizada de los subordinados dentro del propósito (intención) del comandante superior, basándose en la confianza mutua, el entendimiento compartido y la asignación de qué efecto alcanzar y por qué, dejando libertad de acción sobre cómo lograrlo.",
      "Consiste en que el comandante superior dicta cada movimiento paso a paso prohibiendo toda iniciativa del subordinado.",
      "Significa que cada soldado elige libremente su propia misión sin obedecer al mando.",
      "Sólo se aplica en desfiles militares protocolarios."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Mando Tipo Misión (Mission Command)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Filosofía del Mando Tipo Misión",
    consejoAcademia: "El **Mando Tipo Misión (Mission Command)** es nuclear en la PDC-01(B): combina **dirección centralizada** (propósito/intención clara del jefe: *qué* y *para qué*) con **ejecución descentralizada** (libertad de acción e iniciativa disciplinada del subordinado en el *cómo*), sustentado en la **confianza mutua**.",
    justificacion: "La PDC-01(B) consagra el Mando Tipo Misión como la filosofía de mando de las Fuerzas Armadas basada en la intención del comandante, la confianza mutua y la ejecución descentralizada."
  },
  {
    id: "Q-W5-158",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la PDC-01(B) (Vídeo T23), dentro del diseño operativo, ¿qué se entiende por 'CENTRO DE GRAVEDAD' (Center of Gravity - COG)?",
    opciones: [
      "La fuente principal de poder (física o moral) que proporciona a un actor su fuerza, libertad de acción o voluntad de luchar.",
      "El punto geográfico exacto situado en el centro del mapa topográfico.",
      "El almacén de víveres más pequeño de una compañía.",
      "La oficina de prensa del Ministerio."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Elementos del Diseño Operativo: Centro de Gravedad (COG)",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Centro de Gravedad, Capacidades Críticas y Vulnerabilidades Críticas",
    consejoAcademia: "En diseño operativo (PDC-01(B)): **Centro de Gravedad (COG)** = fuente principal de poder/fuerza; **Capacidades Críticas (CC)** = habilidades primarias que permiten al COG funcionar; **Requisitos Críticos (CR)** = condiciones/recursos esenciales para que una CC sea operativa; **Vulnerabilidades Críticas (CV)** = requisitos críticos deficientes o vulnerables a ser neutralizados.",
    justificacion: "La PDC-01(B) define el Centro de Gravedad (COG) como la fuente de poder que proporciona fuerza, libertad de acción o voluntad de combatir a un actor."
  },

  // --- B3-T03: Organización de las Naciones Unidas - ONU (Vídeo T24) ---
  {
    id: "Q-W5-159",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según la Carta de las Naciones Unidas (Vídeo T24), ¿en qué fecha y ciudad se firmó la Carta de la ONU y en qué fecha entró en vigor (celebrándose desde entonces el Día de las Naciones Unidas)?",
    opciones: [
      "Se firmó el 26 de junio de 1945 en San Francisco (al concluir la Conferencia de las Naciones Unidas sobre Organización Internacional) y entró en vigor el 24 de octubre de 1945.",
      "Se firmó el 4 de abril de 1949 en Washington y entró en vigor en 1982.",
      "Se firmó el 7 de febrero de 1992 en Maastricht.",
      "Se firmó el 6 de diciembre de 1978 en Madrid."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas (1945)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Firma en San Francisco (26/06/1945) y Entrada en Vigor (24/10/1945)",
    consejoAcademia: "¡No confundas las dos fechas de 1945 en la ONU (Vídeo T24)!: **26 de junio de 1945** = **Firma** de la Carta en San Francisco (por 50 países + Polonia = 51 miembros originarios); **24 de octubre de 1945** = **Entrada en vigor** (Día de la ONU). Y **España ingresó en la ONU el 14 de diciembre de 1955**.",
    justificacion: "La Carta de las Naciones Unidas fue firmada en San Francisco el 26 de junio de 1945 y entró en vigor el 24 de octubre de 1945."
  },
  {
    id: "Q-W5-160",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 7 de la Carta de las Naciones Unidas (Vídeo T24), ¿cuáles son los SEIS ÓRGANOS PRINCIPALES de las Naciones Unidas?",
    opciones: [
      "La Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social (ECOSOC), el Consejo de Administración Fiduciaria, la Corte Internacional de Justicia y la Secretaría.",
      "El Parlamento Europeo, el Consejo Europeo, la Comisión Europea y el Banco Central.",
      "La UNESCO, la OMS, la FAO, el FMI, la OIT y UNICEF (éstos son organismos especializados o fondos/programas, no los 6 órganos principales de la Carta).",
      "El Consejo del Atlántico Norte y el Comité Militar."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 7",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Los 6 Órganos Principales de la ONU (Art. 7)",
    consejoAcademia: "¡Pregunta clásica de examen! Los **6 órganos principales de la ONU** (Art. 7 de la Carta) tienen todos su sede en **Nueva York**, excepto **UNO**: la **Corte Internacional de Justicia (CIJ)**, que tiene su sede en el Palacio de la Paz de **La Haya (Países Bajos)**.",
    justificacion: "El artículo 7 de la Carta de las Naciones Unidas establece como órganos principales la Asamblea General, el Consejo de Seguridad, el ECOSOC, el Consejo de Administración Fiduciaria, la Corte Internacional de Justicia y la Secretaría."
  },
  {
    id: "Q-W5-161",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 23 y 27 de la Carta de las Naciones Unidas (Vídeo T24), ¿cómo está compuesto el Consejo de Seguridad de la ONU y qué mayoría requiere para adoptar decisiones sobre cuestiones NO procesales (de fondo)?",
    opciones: [
      "Se compone de 15 miembros: 5 permanentes con derecho de veto (China, Francia, Federación de Rusia, Reino Unido y Estados Unidos) y 10 no permanentes elegidos por la Asamblea General por un periodo de 2 años; las decisiones de fondo requieren el voto afirmativo de 9 miembros, incluidos los votos afirmativos (o no veto) de los 5 miembros permanentes.",
      "Se compone de 54 miembros elegidos por 3 años sin derecho de veto.",
      "Se compone de 193 miembros y decide por mayoría simple.",
      "Se compone de 15 jueces elegidos por 9 años con sede en La Haya."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Arts. 23 y 27",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > El Consejo de Seguridad: 15 Miembros (5 Permanentes + 10 No Permanentes) y Mayoría de 9/15",
    consejoAcademia: "Números clave de los órganos de la ONU (Vídeo T24): 1) **Consejo de Seguridad**: **15 miembros** (5 permanentes + 10 elegidos por **2 años**; mayoría **9 de 15**). 2) **ECOSOC**: **54 miembros** elegidos por **3 años**. 3) **Corte Internacional de Justicia**: **15 magistrados** elegidos por **9 años** (sede en La Haya). 4) **Secretario General**: nombrado por la Asamblea General a recomendación del Consejo de Seguridad por **5 años** renovables.",
    justificacion: "Los artículos 23 y 27 de la Carta de la ONU regulan la composición de 15 miembros del Consejo de Seguridad y la mayoría de 9 votos incluyendo la concurrencia de los 5 permanentes."
  },
  {
    id: "Q-W5-162",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Carta de las Naciones Unidas (Vídeo T24), ¿qué diferencia fundamental existe entre el Capítulo VI y el Capítulo VII de la Carta en relación con el mantenimiento de la paz y la seguridad internacionales?",
    opciones: [
      "El Capítulo VI regula el 'Arreglo pacífico de controversias' (negociación, investigación, mediación, conciliación, arbitraje, arreglo judicial); mientras que el Capítulo VII regula la 'Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión', permitiendo al Consejo de Seguridad adoptar medidas coercitivas (sanciones e incluso el uso de la fuerza armada).",
      "El Capítulo VI autoriza la guerra nuclear y el Capítulo VII regula el turismo.",
      "El Capítulo VI se aplica sólo en Europa y el Capítulo VII sólo en Asia.",
      "El Capítulo VI corresponde al FMI y el Capítulo VII a la UNESCO."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Capítulos VI (Arts. 33-38) y VII (Arts. 39-51)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Capítulo VI vs Capítulo VII de la Carta de la ONU",
    consejoAcademia: "¡Cruza siempre **Capítulo VI vs Capítulo VII vs Capítulo VIII** de la Carta de la ONU!: **Cap. VI** = Arreglo **pacífico** de controversias; **Cap. VII** = Medidas **coercitivas / uso de la fuerza** ante amenazas o quebrantamientos de la paz y derecho de legítima defensa (Art. 51); **Cap. VIII** = Acuerdos u organismos **regionales**.",
    justificacion: "El Capítulo VI de la Carta de la ONU trata del arreglo pacífico de controversias y el Capítulo VII de la acción coercitiva en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión."
  },
  {
    id: "Q-W5-163",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según la doctrina de las Operaciones de Mantenimiento de la Paz (OMP) de las Naciones Unidas (Vídeo T24), ¿cuáles son los TRES PRINCIPIOS BÁSICOS tradicionales que rigen el mantenimiento de la paz de la ONU?",
    opciones: [
      "Consentimiento de las partes, Imparcialidad, y No uso de la fuerza excepto en legítima defensa y en defensa del mandato.",
      "Ataque preventivo, Parcialidad absoluta y Ocupación indefinida.",
      "Neutralidad económica, Cobro de impuestos y Sustitución del Gobierno local.",
      "Secreto bancario, Libre comercio y Unión aduanera."
    ],
    correcta: 0,
    referencia: "Doctrina ONU de Operaciones de Mantenimiento de la Paz (Principios de Capstone)",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Los 3 Principios de las OMP de la ONU",
    consejoAcademia: "Los **3 principios de oro de las OMP de la ONU (Cascos Azules)**: 1) **Consentimiento de las partes**; 2) **Imparcialidad**; 3) **No uso de la fuerza salvo en legítima defensa y en defensa del mandato**.",
    justificacion: "Las Operaciones de Mantenimiento de la Paz de las Naciones Unidas se rigen por los principios de consentimiento de las partes, imparcialidad y uso de la fuerza únicamente en legítima defensa y en defensa del mandato."
  },
  {
    id: "Q-W5-164",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 18 de la Carta de las Naciones Unidas (Vídeo T24), en la Asamblea General cada Miembro tiene un voto. ¿Qué mayoría se requiere para las decisiones de la Asamblea General sobre 'cuestiones importantes' (como recomendaciones relativas a la paz y seguridad, elección de miembros no permanentes del Consejo de Seguridad o admisión de nuevos Miembros)?",
    opciones: [
      "Una mayoría de dos tercios (2/3) de los miembros presentes y votantes.",
      "Unanimidad de los 193 Estados miembros.",
      "El voto favorable exclusivo de los 5 miembros permanentes.",
      "Una mayoría de un 10% de los asistentes."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 18.2",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Votaciones en la Asamblea General (Art. 18)",
    consejoAcademia: "En la **Asamblea General de la ONU** (Art. 18 de la Carta): cada Estado tiene **1 voto**. Las **cuestiones importantes** requieren mayoría de **2/3 de los miembros presentes y votantes**; las demás cuestiones se deciden por **mayoría simple** de los presentes y votantes.",
    justificacion: "El artículo 18.2 de la Carta de la ONU exige mayoría de dos tercios de los miembros presentes y votantes para las decisiones de la Asamblea General sobre cuestiones importantes."
  },

  // --- B3-T04: Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25) ---
  {
    id: "Q-W5-165",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el Tratado del Atlántico Norte (Vídeo T25), ¿en qué fecha y ciudad se firmó el Tratado fundacional de la OTAN, por cuántos países fundadores y en qué fecha ingresó España como miembro número 16?",
    opciones: [
      "Se firmó en Washington el 4 de abril de 1949 por 12 países fundadores, y España ingresó el 30 de mayo de 1982 (contando actualmente la Alianza con 32 Estados miembros tras las adhesiones de Finlandia en 2023 y Suecia en 2024).",
      "Se firmó en París en 1957 por 6 países y España ingresó en 1986.",
      "Se firmó en Varsovia en 1955 y España ingresó en 1975.",
      "Se firmó en San Francisco en 1945 por 51 países."
    ],
    correcta: 0,
    referencia: "Tratado de Washington de 4 de abril de 1949",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Tratado de Washington (04/04/1949), Ingreso de España (30/05/1982) y 32 Aliados",
    consejoAcademia: "¡Datos clave de la OTAN (Vídeo T25)!: 1) Firma: **4 de abril de 1949 en Washington** (**12 países fundadores** y **14 artículos**); 2) Ingreso de España: **30 de mayo de 1982** (miembro nº 16; en 1999 España se integró plenamente en la estructura militar); 3) Total actual: **32 países aliados** (31º **Finlandia** en abril de 2023 y 32º **Suecia** en marzo de 2024).",
    justificacion: "El Tratado de Washington se firmó el 4 de abril de 1949 por 12 Estados, España se adhirió el 30 de mayo de 1982 y tras la incorporación de Finlandia (2023) y Suecia (2024) la OTAN cuenta con 32 aliados."
  },
  {
    id: "Q-W5-166",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Tratado de Washington (Vídeo T25), ¿qué regulan respectivamente el Artículo 4 y el Artículo 5 del Tratado del Atlántico Norte?",
    opciones: [
      "El Artículo 4 regula las consultas entre las Partes cuando cualquiera de ellas considere que está amenazada su integridad territorial, independencia política o seguridad; y el Artículo 5 consagra la cláusula de defensa colectiva (un ataque armado contra una o varias de las Partes en Europa o América del Norte se considerará como un ataque dirigido contra todas ellas).",
      "El Artículo 4 regula el presupuesto y el Artículo 5 regula la expulsión de aliados.",
      "El Artículo 4 es la cláusula de defensa colectiva y el Artículo 5 trata del comercio agrícola.",
      "Ambos artículos prohíben la legítima defensa reconocida en el artículo 51 de la Carta de la ONU."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte (Washington, 1949), Arts. 4 y 5",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Artículo 4 (Consultas) vs Artículo 5 (Defensa Colectiva)",
    consejoAcademia: "¡Diferencia vital en el examen!: **Art. 4 OTAN** = **Consultas** ante amenaza a la integridad territorial, independencia política o seguridad; **Art. 5 OTAN** = **Defensa Colectiva** (invocado por única vez en la historia tras los atentados del **11 de septiembre de 2001** en EE.UU., amparado en el Art. 51 de la Carta de la ONU); **Art. 6 OTAN** = delimita el área geográfica del Art. 5 (incluyendo territorio en Europa/Norteamérica, islas en el Atlántico Norte **al norte del Trópico de Cáncer**, fuerzas, buques o aeronaves).",
    justificacion: "El artículo 4 del Tratado de Washington establece el mecanismo de consulta aliada y el artículo 5 consagra el principio de defensa colectiva."
  },
  {
    id: "Q-W5-167",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid de junio de 2022 (Vídeo T25), ¿cuáles son las TRES TAREAS FUNDAMENTALES (Core Tasks) de la Alianza Atlántica?",
    opciones: [
      "1) Disuasión y Defensa; 2) Prevención y Gestión de Crisis; y 3) Seguridad Cooperativa.",
      "1) Unión Monetaria; 2) Política Agrícola Común; y 3) Espacio Schengen.",
      "1) Comercio Exterior; 2) Turismo; y 3) Educación Primaria.",
      "1) Arbitraje Judicial; 2) Administración Fiduciaria; y 3) Desarrollo Sostenible."
    ],
    correcta: 0,
    referencia: "Concepto Estratégico de la OTAN (Cumbre de Madrid, 2022)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Las 3 Tareas Fundamentales del Concepto Estratégico de Madrid 2022",
    consejoAcademia: "Memoriza las **3 Tareas Fundamentales (Core Tasks) de la OTAN (Concepto Estratégico de Madrid 2022, Vídeo T25)**: 1) **Disuasión y Defensa (Deterrence and Defence)**; 2) **Prevención y Gestión de Crisis (Crisis Prevention and Management)**; y 3) **Seguridad Cooperativa (Cooperative Security)**.",
    justificacion: "El Concepto Estratégico de la OTAN de Madrid 2022 establece como tres tareas fundamentales de la Alianza: Disuasión y Defensa, Prevención y Gestión de Crisis, y Seguridad Cooperativa."
  },
  {
    id: "Q-W5-168",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la estructura de la OTAN (Vídeo T25), ¿cuál es el máximo órgano de decisión política de la Alianza, quién lo preside y cómo se adoptan todas sus decisiones?",
    opciones: [
      "El Consejo del Atlántico Norte (NAC - North Atlantic Council), presidido por el Secretario General de la OTAN, donde todas las decisiones se adoptan por consenso (unanimidad, sin votaciones por mayoría).",
      "El Comité Militar, presidido por el SACEUR, que decide por mayoría simple.",
      "La Asamblea Parlamentaria de la OTAN, que aprueba leyes comunitarias por mayoría cualificada.",
      "El Tribunal de La Haya, que decide por sorteo."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte, Art. 9 y Estructura Política OTAN",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > El Consejo del Atlántico Norte (NAC) y el Principio de Consenso",
    consejoAcademia: "El **Consejo del Atlántico Norte (NAC)** es el único órgano creado expresamente en el **Art. 9 del Tratado de Washington**. Tiene sede en **Bruselas**, lo preside el **Secretario General de la OTAN** y toma **todas sus decisiones por CONSENSO**.",
    justificacion: "El Consejo del Atlántico Norte (NAC) es el principal órgano de decisión política de la OTAN, presidido por el Secretario General y regido por el principio de consenso."
  },
  {
    id: "Q-W5-169",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la Estructura de Mandos de la OTAN (Vídeo T25), bajo la autoridad militar superior del Comité Militar (MC) existen DOS MANDOS ESTRATÉGICOS. ¿Cuáles son y dónde tienen sus respectivas sedes?",
    opciones: [
      "El Mando Aliado de Operaciones (ACO - Allied Command Operations), dirigido por el SACEUR con cuartel general (SHAPE) en Mons (Bélgica); y el Mando Aliado de Transformación (ACT - Allied Command Transformation), dirigido por el SACT con sede en Norfolk (Virginia, Estados Unidos).",
      "Uno en Madrid y otro en Roma.",
      "Uno en Berlín y otro en Varsovia.",
      "El Mando del Pacífico en Tokio y el Mando del Índico en Canberra."
    ],
    correcta: 0,
    referencia: "Estructura Militar de Mandos de la OTAN (ACO y ACT)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Los 2 Mandos Estratégicos: ACO (SHAPE - Mons) y ACT (Norfolk)",
    consejoAcademia: "¡Pregunta fija de la estructura militar de la OTAN (Vídeo T25)!: 1) **ACO (Mando Aliado de Operaciones)** $\\rightarrow$ comandante **SACEUR** $\\rightarrow$ Cuartel General **SHAPE en Mons (Bélgica)** (del que dependen los 3 Mandos de Fuerza Conjunta: **JFC Brunssum** en Países Bajos, **JFC Naples** en Italia y **JFC Norfolk** en EE.UU., además de AIRCOM Ramstein, MARCOM Northwood y LANDCOM Esmirna). 2) **ACT (Mando Aliado de Transformación)** $\\rightarrow$ comandante **SACT** $\\rightarrow$ sede en **Norfolk (Virginia, EE.UU.)**.",
    justificacion: "La estructura de mando militar de la OTAN cuenta con dos Mandos Estratégicos: ACO en Mons (Bélgica) y ACT en Norfolk (Virginia, EE.UU.)."
  },
  {
    id: "Q-W5-170",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el Vídeo T25 sobre la aportación de España a la Estructura de Fuerzas y Mandos de la OTAN, ¿qué Cuarteles Generales o centros aliados de relevancia se ubican en territorio español?",
    opciones: [
      "El Centro de Operaciones Aéreas Combinadas de Torrejón (CAOC Torrejón, en la Estructura de Mandos de la OTAN), el Cuartel General Terrestre de Alta Disponibilidad (HQ NRDC-ESP en Bétera, Valencia, en la Estructura de Fuerzas) y el Centro de Excelencia Contra Artefactos Explosivos Improvisados (C-IED COE en Hoyo de Manzanares, Madrid).",
      "El Cuartel General Supremo SHAPE en Mons y el MARCOM en Northwood.",
      "El JFC Brunssum y el LANDCOM en Esmirna.",
      "Ninguna instalación aliada se ubica en España."
    ],
    correcta: 0,
    referencia: "Estructura de Mandos y Fuerzas de la OTAN en España",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Presencia de la OTAN en España: CAOC Torrejón, HQ NRDC-ESP Bétera y C-IED COE",
    consejoAcademia: "En España destacan: 1) **CAOC Torrejón** (Madrid, defensa aérea del flanco sur europeo, dentro de la Estructura de Mandos OTAN bajo AIRCOM); 2) **HQ NRDC-ESP en Bétera (Valencia)** (Cuartel General Terrestre de Alta Disponibilidad en la Estructura de Fuerzas); 3) **C-IED COE en Hoyo de Manzanares (Madrid)** (Centro de Excelencia contra IED); y 4) La **Base Naval de Rota** (apoyo al escudo antimisiles de la OTAN).",
    justificacion: "España alberga el CAOC de Torrejón, el HQ NRDC-ESP en Bétera (Valencia) y el Centro de Excelencia C-IED en Hoyo de Manzanares (Madrid)."
  },

  // --- B3-T05: Organización para la Seguridad y la Cooperación en Europa - OSCE (Vídeo T26) ---
  {
    id: "Q-W5-171",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Seguridad y Cooperación en Europa (Vídeo T26)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el Vídeo T26 sobre la OSCE, ¿cuál es el documento fundacional de la entonces Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE), en qué fecha se firmó y en qué Cumbre pasó a denominarse Organización para la Seguridad y la Cooperación en Europa (OSCE)?",
    opciones: [
      "El Acta Final de Helsinki, firmada el 1 de agosto de 1975; pasando de CSCE a denominarse OSCE en la Cumbre de Budapest de diciembre de 1994 (con efectos desde el 1 de enero de 1995).",
      "El Tratado de Roma de 1957 y la Cumbre de Lisboa de 2007.",
      "La Carta de San Francisco de 1945.",
      "El Tratado de Bruselas de 1948."
    ],
    correcta: 0,
    referencia: "Acta Final de Helsinki (1975) y Cumbre de Budapest (1994)",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Del Acta Final de Helsinki (1975) a la Cumbre de Budapest (1994)",
    consejoAcademia: "¡Las 3 fechas históricas de la OSCE (Vídeo T26)!: 1) **1 de agosto de 1975**: **Acta Final de Helsinki** (nace la **CSCE** con el Decálogo de Helsinki y las 3 cestas/dimensiones); 2) **Noviembre de 1990**: **Carta de París para una Nueva Europa** (fin de la Guerra Fría e institucionalización); 3) **Cumbre de Budapest de 1994** (efectiva el **1 de enero de 1995**): pasa de llamarse CSCE a **OSCE**.",
    justificacion: "La CSCE tuvo su origen en el Acta Final de Helsinki del 1 de agosto de 1975 y adoptó el nombre de OSCE en la Cumbre de Budapest de 1994 (con efectos el 1 de enero de 1995)."
  },
  {
    id: "Q-W5-172",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Seguridad y Cooperación en Europa (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Vídeo T26, la OSCE es la mayor organización regional de seguridad del mundo (al amparo del Capítulo VIII de la Carta de la ONU), abarcando desde Vancouver hasta Vladivostok. ¿Cuántos Estados participantes la integran, dónde está su Secretaría y a través de qué TRES DIMENSIONES desarrolla su concepto de seguridad integral?",
    opciones: [
      "La integran 57 Estados participantes (de Europa, Asia Central y América del Norte), tiene su Secretaría en Viena (Austria) y actúa en tres dimensiones: 1) Político-Militar, 2) Económica y Medioambiental, y 3) Humana.",
      "La integran 27 Estados miembros exclusivamente europeos con sede en Estrasburgo y una sola dimensión militar.",
      "La integran 32 Estados con sede en Bruselas y cláusula de defensa colectiva armada.",
      "La integran 193 Estados con sede en Ginebra."
    ],
    correcta: 0,
    referencia: "Estructura y Dimensiones de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > 57 Estados Participantes, Sede en Viena y las 3 Dimensiones de la Seguridad",
    consejoAcademia: "¡No confundas el número de miembros de las organizaciones internacionales!: **ONU** = 193; **OSCE** = **57 Estados participantes** (sede de la Secretaría y del Consejo Permanente en **Viena**); **Consejo de Europa** = 46; **OTAN** = **32**; **Unión Europea** = **27**. Y las **3 dimensiones ('cestas') de la OSCE** son: **Político-Militar**, **Económica y Medioambiental**, y **Humana**.",
    justificacion: "La OSCE cuenta con 57 Estados participantes, su Secretaría se ubica en Viena y su enfoque integral de la seguridad abarca las dimensiones político-militar, económico-medioambiental y humana."
  },
  {
    id: "Q-W5-173",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Seguridad y Cooperación en Europa (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la estructura orgánica de la OSCE (Vídeo T26), ¿cuál es el órgano regular de consulta política y toma de decisiones operativas cotidianas que se reúne semanalmente en el Palacio Hofburg de Viena a nivel de Representantes Permanentes (Embajadores)?",
    opciones: [
      "El Consejo Permanente (junto con el Foro de Cooperación para la Seguridad en el ámbito político-militar).",
      "El Consejo Europeo de Bruselas.",
      "El Consejo de Administración Fiduciaria.",
      "El Comité Militar de Mons."
    ],
    correcta: 0,
    referencia: "Órganos Decisorios de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Cumbre, Consejo Ministerial, Consejo Permanente y Foro de Cooperación para la Seguridad",
    consejoAcademia: "Jerarquía de órganos decisorios de la OSCE (Vídeo T26): 1) **La Cumbre** (Jefes de Estado o de Gobierno, máximo nivel político); 2) **El Consejo Ministerial** (Ministros de Asuntos Exteriores, se reúne **una vez al año** al final de cada Presidencia en Ejercicio); 3) **El Consejo Permanente** (Embajadores/Representantes Permanentes, se reúne **semanalmente en Viena**); 4) **Foro de Cooperación para la Seguridad (FCS)** (semanalmente en Viena sobre control de armamentos y medidas de fomento de la confianza y la seguridad - MFCS). La **Presidencia en Ejercicio** rota **anualmente** (1 año) entre los Ministros de Exteriores de los Estados participantes.",
    justificacion: "El Consejo Permanente es el principal órgano regular de consulta política y toma de decisiones operativas de la OSCE, reuniéndose semanalmente en Viena."
  },
  {
    id: "Q-W5-174",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Seguridad y Cooperación en Europa (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "De acuerdo con la estructura institucional de la OSCE (Vídeo T26), ¿dónde tienen sus respectivas sedes la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH / ODIHR), el Alto Comisionado para las Minorías Nacionales y la Asamblea Parlamentaria de la OSCE?",
    opciones: [
      "La OIDDH (ODIHR) tiene su sede en Varsovia (Polonia), el Alto Comisionado para las Minorías Nacionales en La Haya (Países Bajos) y la Secretaría Internacional de la Asamblea Parlamentaria de la OSCE en Copenhague (Dinamarca).",
      "Todas tienen su sede en Madrid.",
      "Todas tienen su sede en Nueva York.",
      "La OIDDH está en Lisboa y la Asamblea Parlamentaria en Atenas."
    ],
    correcta: 0,
    referencia: "Instituciones de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Sedes de la OSCE: Viena, Varsovia, La Haya y Copenhague",
    consejoAcademia: "¡Mapa de sedes de la OSCE que preguntan para pillar en el examen (Vídeo T26)!: **Secretaría, Consejo Permanente y Representante para la Libertad de los Medios de Comunicación** = **Viena**; **OIDDH (Oficina de Instituciones Democráticas y DD.HH.)** = **Varsovia**; **Alto Comisionado para las Minorías Nacionales** = **La Haya**; **Asamblea Parlamentaria (Secretaría)** = **Copenhague**.",
    justificacion: "Dentro de la OSCE, la OIDDH tiene sede en Varsovia, el Alto Comisionado para las Minorías Nacionales en La Haya y la Asamblea Parlamentaria en Copenhague, mientras que la Secretaría está en Viena."
  },
  {
    id: "Q-W5-175",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Seguridad y Cooperación en Europa (Vídeo T26)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el Vídeo T26 sobre la OSCE, ¿cuál es la naturaleza de las decisiones que adoptan los órganos de la OSCE y qué regla de votación se aplica?",
    opciones: [
      "Se adoptan por consenso de los Estados participantes y tienen carácter políticamente vinculante (no son tratados jurídicamente vinculantes salvo que se formalicen aparte como tales).",
      "Son leyes penales aprobadas por mayoría simple.",
      "Las dicta en solitario el Secretario General con derecho de veto.",
      "Se aprueban por sorteo cada cinco años."
    ],
    correcta: 0,
    referencia: "Funcionamiento y Toma de Decisiones de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Regla del Consenso y Carácter Políticamente Vinculante",
    consejoAcademia: "Rasgo distintivo de la OSCE: sus decisiones se toman por **CONSENSO** (en algunas excepciones muy tasadas, 'consenso menos uno' ante violaciones graves de compromisos de la dimensión humana) y sus compromisos son **políticamente vinculantes**.",
    justificacion: "En la OSCE las decisiones se adoptan por consenso entre los 57 Estados participantes y tienen naturaleza políticamente vinculante."
  },

  // --- B3-T06: La Unión Europea - UE (Vídeo T26) ---
  {
    id: "Q-W5-176",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Según el artículo 13 del Tratado de la Unión Europea (TUE, Vídeo T26), ¿cuáles son las SIETE INSTITUCIONES de la Unión Europea?",
    opciones: [
      "El Parlamento Europeo, el Consejo Europeo, el Consejo (de la Unión Europea), la Comisión Europea, el Tribunal de Justicia de la Unión Europea, el Banco Central Europeo y el Tribunal de Cuentas.",
      "El Consejo de Europa, el Tribunal Europeo de Derechos Humanos, la OSCE y la OTAN.",
      "El Comité Económico y Social y el Comité de las Regiones (éstos son órganos consultivos, no instituciones del art. 13 TUE).",
      "La Asamblea General, el ECOSOC y el FMI."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Art. 13",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Las 7 Instituciones de la Unión Europea (Art. 13 TUE)",
    consejoAcademia: "¡TRAMPA CLÁSICA DEL EXAMEN! No confundas: 1) **Consejo Europeo** (Jefes de Estado o de Gobierno de los 27 + su Presidente + Presidente de la Comisión; da impulso político pero **NO ejerce función legislativa**); 2) **Consejo de la Unión Europea** (o simplemente 'el Consejo': Ministros de los 27 por materias; **SÍ legisla** y aprueba el presupuesto junto al Parlamento Europeo); 3) **Consejo de Europa** (**NO es de la UE**, es otra organización internacional de 46 países con sede en Estrasburgo a la que pertenece el TEDH).",
    justificacion: "El artículo 13 del Tratado de la Unión Europea enumera las siete instituciones de la Unión Europea."
  },
  {
    id: "Q-W5-177",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme a la evolución histórica de los Tratados de la Unión Europea (Vídeo T26), ¿en qué fecha se firmó el Tratado de adhesión de España y Portugal a las Comunidades Europeas y en qué fecha entró en vigor?",
    opciones: [
      "Se firmó el 12 de junio de 1985 (en Madrid y Lisboa) y entró en vigor el 1 de enero de 1986.",
      "Se firmó el 25 de marzo de 1957 en Roma y entró en vigor en 1958.",
      "Se firmó el 7 de febrero de 1992 en Maastricht.",
      "Se firmó el 13 de diciembre de 2007 en Lisboa."
    ],
    correcta: 0,
    referencia: "Tratado de Adhesión de España a las Comunidades Europeas (1985/1986)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Fechas Clave de la Integración Europea y Adhesión de España (1985/1986)",
    consejoAcademia: "Cronología europea imprescindible (Vídeo T26): **1951** = Tratado de París (CECA, 6 fundadores: Alemania, Francia, Italia, Bélgica, Países Bajos y Luxemburgo); **1957** = Tratados de Roma (CEE y EURATOM); **12/06/1985 (firma) y 01/01/1986 (entrada en vigor)** = Adhesión de **España**; **1992 (en vigor 1993)** = Tratado de **Maastricht** (crea la UE y la PESC); **2007 (en vigor 01/12/2009)** = Tratado de **Lisboa**.",
    justificacion: "España firmó el Tratado de Adhesión a las Comunidades Europeas el 12 de junio de 1985 y su ingreso efectivo se produjo el 1 de enero de 1986."
  },
  {
    id: "Q-W5-178",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 18 y 27 del Tratado de la Unión Europea (Vídeo T26), el Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR) dirige la Política Exterior y de Seguridad Común (PESC) y la Política Común de Seguridad y Defensa (PCSD). ¿Qué otros dos cargos ostenta simultáneamente y de qué servicio se apoya?",
    opciones: [
      "Es simultáneamente uno de los Vicepresidentes de la Comisión Europea y preside el Consejo de Asuntos Exteriores (además de ser Jefe de la Agencia Europea de Defensa - EDA), apoyándose en el Servicio Europeo de Acción Exterior (SEAE).",
      "Es simultáneamente Presidente del Parlamento Europeo y Gobernador del Banco Central Europeo.",
      "Es simultáneamente Secretario General de la OTAN y Presidente del Tribunal de Cuentas.",
      "No forma parte de la Comisión Europea ni preside ningún Consejo."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Arts. 18 y 27",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > El Alto Representante (AR/VP) y el Servicio Europeo de Acción Exterior (SEAE)",
    consejoAcademia: "El **Alto Representante (AR/VP)** tiene 'doble sombrero' institucional (Arts. 18 y 27 TUE): 1) Preside de forma permanente el **Consejo de Asuntos Exteriores** (única formación del Consejo que NO tiene presidencia rotatoria semestral); 2) Es **Vicepresidente de la Comisión Europea**; 3) Dirige el **SEAE (Servicio Europeo de Acción Exterior)** y la **EDA (Agencia Europea de Defensa)**.",
    justificacion: "Los artículos 18 y 27 del TUE establecen que el Alto Representante preside el Consejo de Asuntos Exteriores, es uno de los Vicepresidentes de la Comisión Europea y cuenta con el apoyo del Servicio Europeo de Acción Exterior (SEAE)."
  },
  {
    id: "Q-W5-179",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con la estructura de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea (Vídeo T26), ¿cuál es el órgano militar más alto creado en el seno del Consejo, integrado por los Jefes de Estado Mayor de la Defensa (CHOD/JEMAD) de los Estados miembros, y cuál es el órgano que sigue la situación internacional y ejerce el control político y la dirección estratégica de las operaciones de gestión de crisis?",
    opciones: [
      "El Comité Militar de la Unión Europea (CMUE / EUMC) es el órgano militar superior integrado por los JEMAD (representados permanentemente por sus Representantes Militares - MILREP) y asesorado por el Estado Mayor de la Unión Europea (EMUE / EUMS); mientras que el Comité Político y de Seguridad (CPS / PSC) ejerce el control político y la dirección estratégica de las operaciones de gestión de crisis.",
      "El SHAPE de Mons y el ACT de Norfolk.",
      "El Banco Europeo de Inversiones y el Defensor del Pueblo Europeo.",
      "El Tribunal General de Luxemburgo."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Art. 38 y Estructura PCSD",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Órganos de la PCSD: CPS, CMUE (EUMC) y EMUE (EUMS)",
    consejoAcademia: "Trilogía de órganos de la **PCSD en la UE** (Vídeo T26): 1) **CPS (Comité Político y de Seguridad, Art. 38 TUE)**: control político y dirección estratégica de las misiones PCSD; 2) **CMUE (Comité Militar de la UE)**: máximo órgano militar en el Consejo (compuesto por los JEMAD de los 27); 3) **EMUE (Estado Mayor de la UE)**: alerta temprana, evaluación de situación y planeamiento estratégico.",
    justificacion: "En la PCSD de la Unión Europea, el Comité Político y de Seguridad (CPS) ejerce el control político y dirección estratégica, el Comité Militar de la UE (CMUE) es el máximo órgano militar y el Estado Mayor de la UE (EMUE) proporciona apoyo y planeamiento militar."
  },
  {
    id: "Q-W5-180",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Tratado de Lisboa (Vídeo T26), ¿qué regulan respectivamente la cláusula de ASISTENCIA MUTUA del artículo 42.7 del TUE y la cláusula de SOLIDARIDAD del artículo 222 del TFUE, y qué son la PESCO y la Brújula Estratégica?",
    opciones: [
      "El art. 42.7 TUE establece el deber de ayuda y asistencia por todos los medios a su alcance si un Estado miembro es objeto de una agresión armada en su territorio; el art. 222 TFUE establece la actuación conjunta solidaria si un Estado miembro es objeto de un ataque terrorista o víctima de una catástrofe natural o de origen humano; la PESCO es la Cooperación Estructurada Permanente en defensa y la Brújula Estratégica (2022) es el plan de acción político-estratégico de seguridad y defensa de la UE.",
      "Ambas cláusulas tratan únicamente sobre aranceles aduaneros y cuotas pesqueras.",
      "La PESCO es el banco central de la eurozona.",
      "El artículo 42.7 TUE prohíbe a los Estados miembros pertenecer a la OTAN."
    ],
    correcta: 0,
    referencia: "TUE Art. 42.6, 42.7, 46 (PESCO) y TFUE Art. 222",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Cláusula de Asistencia Mutua (Art. 42.7 TUE), Cláusula de Solidaridad (Art. 222 TFUE), PESCO y Brújula Estratégica",
    consejoAcademia: "¡Cruza siempre estas dos cláusulas de la UE!: **Art. 42.7 TUE (Asistencia Mutua)** = **Agresión armada** en el territorio de un Estado miembro (invocada por Francia en noviembre de 2015 tras los atentados de París); **Art. 222 TFUE (Cláusula de Solidaridad)** = **Ataque terrorista o catástrofe natural o de origen humano**. Y recuerda la **Brújula Estratégica (Strategic Compass, marzo 2022)** con sus **4 pilares**: **Actuar, Invertir, Asociarse y Asegurar (Proteger)**, incluyendo la Capacidad de Despliegue Rápido de la UE de hasta **5.000 efectivos**.",
    justificacion: "El artículo 42.7 TUE regula la cláusula de asistencia mutua ante agresión armada, el artículo 222 TFUE la cláusula de solidaridad ante terrorismo o catástrofes, el artículo 46 TUE la PESCO y la Brújula Estratégica (2022) guía la acción en seguridad y defensa de la UE."
  },
  {
    id: "Q-W5-181",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 288 del Tratado de Funcionamiento de la Unión Europea (TFUE, Vídeo T26), dentro del Derecho derivado de la Unión Europea, ¿qué diferencia existe entre un REGLAMENTO, una DIRECTIVA y una DECISIÓN?",
    opciones: [
      "El Reglamento tendrá un alcance general, será obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro; la Directiva obligará al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios (requiere transposición); y la Decisión será obligatoria en todos sus elementos (y si designa destinatarios, sólo será obligatoria para éstos).",
      "El Reglamento es una mera recomendación no vinculante y la Directiva se aplica sin transposición.",
      "La Directiva sólo obliga a las empresas privadas y el Reglamento no es obligatorio.",
      "Los tres actos carecen de fuerza jurídica vinculante, igual que los Dictámenes."
    ],
    correcta: 0,
    referencia: "Tratado de Funcionamiento de la Unión Europea (TFUE), Art. 288",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Actos Jurídicos de la Unión: Reglamento, Directiva, Decisión, Recomendación y Dictamen (Art. 288 TFUE)",
    consejoAcademia: "¡Pregunta clásica de Derecho de la UE (Art. 288 TFUE)!: 1) **Reglamento** = Alcance general + obligatorio en todos sus elementos + **directamente aplicable**; 2) **Directiva** = Obliga en cuanto al **resultado** (requiere **transposición** nacional); 3) **Decisión** = Obligatoria en todos sus elementos (para sus destinatarios); 4) **Recomendaciones y Dictámenes** = **NO vinculantes**.",
    justificacion: "El artículo 288 del TFUE define y diferencia los Reglamentos, Directivas, Decisiones, Recomendaciones y Dictámenes de la Unión Europea."
  },

  // --- B3-T07: España y su Participación en Misiones Internacionales (Vídeo T27) ---
  {
    id: "Q-W5-182",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según los artículos 4.2 y 17 de la Ley Orgánica 5/2005, de la Defensa Nacional (Vídeo T27), para ordenar operaciones en el exterior que NO estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno deberá:",
    opciones: [
      "Realizar una consulta previa y recabar la autorización del Congreso de los Diputados (y en las misiones que requieran de acuerdo con los tratados internacionales una respuesta rápida o inmediata, los trámites de consulta y autorización se realizarán mediante procedimientos de urgencia que permitan cumplir con dichos compromisos).",
      "Solicitar permiso previo a las Asambleas Legislativas de todas las Comunidades Autónomas.",
      "Convocar un referéndum nacional obligatorio antes de cada relevo de contingente.",
      "No necesita consultar ni informar nunca al Congreso de los Diputados."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Arts. 4.2, 17 y 19",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Autorización del Congreso de los Diputados (Art. 17 LO 5/2005)",
    consejoAcademia: "¡Marco legal de las misiones en el exterior (LO 5/2005, Arts. 4, 17, 18 y 19, Vídeo T27)!: 1) Las ordena el **Gobierno**; 2) Requieren **consulta previa y autorización del Congreso de los Diputados**; 3) El Gobierno debe informar periódicamente (al menos anualmente) al Congreso sobre el desarrollo de las operaciones.",
    justificacion: "El artículo 17 de la Ley Orgánica 5/2005 establece que para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno realizará una consulta previa y recabará la autorización del Congreso de los Diputados."
  },
  {
    id: "Q-W5-183",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil", "Importante"],
    pregunta: "Conforme al Vídeo T27 sobre la historia de la participación española en misiones internacionales, ¿en qué año comenzó la participación de las Fuerzas Armadas españolas en misiones de mantenimiento de la paz de las Naciones Unidas y cuáles fueron esas primeras misiones en 1989?",
    opciones: [
      "En 1989, con el despliegue de observadores militares en UNAVEM I (Angola) y en el Grupo de Asistencia de las Naciones Unidas para el Período de Transición en Namibia (UNTAG), seguidas ese mismo año por ONUCA en Centroamérica.",
      "En 1945 en la Segunda Guerra Mundial.",
      "En 2015 en la misión de Letonia.",
      "En 1978 en Afganistán."
    ],
    correcta: 0,
    referencia: "Historia de las Misiones Internacionales de las FAS Españolas (1989)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Inicio Histórico en 1989: Angola (UNAVEM), Namibia (UNTAG) y Centroamérica (ONUCA)",
    consejoAcademia: "Año clave del inicio de las misiones internacionales de las FAS españolas (Vídeo T27): **1989**, bajo bandera de la **ONU** en **Angola (UNAVEM I)**, **Namibia (UNTAG)** y **Centroamérica (ONUCA)**.",
    justificacion: "La participación de las Fuerzas Armadas españolas en operaciones internacionales de paz comenzó en el año 1989 con las misiones de la ONU en Angola (UNAVEM) y Namibia (UNTAG), seguidas por ONUCA en Centroamérica."
  },
  {
    id: "Q-W5-184",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Vídeo T27 sobre las misiones internacionales activas de las Fuerzas Armadas españolas bajo bandera de la UNIÓN EUROPEA (PCSD), ¿cuáles son las operaciones navales y de asistencia militar en las que España desempeña un papel destacado, incluyendo el mando operacional desde el ES-OHQ de Rota?",
    opciones: [
      "La Operación EUNAVFOR ATALANTA (lucha contra la piratería en el Océano Índico Occidental / Cuerno de África, cuyo Cuartel General Operacional ES-OHQ se encuentra en la Base Naval de Rota), además de misiones como EUTM Somalia / EUMAM y EUFOR Althea (Bosnia y Herzegovina).",
      "La misión UNIFIL en Líbano (que es de la ONU, no de la UE).",
      "La Policía Aérea del Báltico (que es de la OTAN, no de la UE).",
      "La Operación Sea Guardian (que es de la OTAN, no de la UE)."
    ],
    correcta: 0,
    referencia: "Misiones Internacionales de las FAS en el marco de la Unión Europea",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Misiones UE: EUNAVFOR Atalanta (ES-OHQ Rota), EUTM Somalia/Mali/RCA y EUFOR Althea",
    consejoAcademia: "¡No confundas la bandera/organización de cada misión en el examen (Vídeo T27)!: **Unión Europea (UE)** = **EUNAVFOR Atalanta** (Índico/Somalia, con **OHQ en Rota**), **EUTM** (Somalia, Mali, RCA), **EUMAM Ucrania**, **EUFOR Althea** (Bosnia y Herzegovina). **ONU** = **UNIFIL / FINUL** (Operación Libre Hidalgo en **Líbano**, Base 'Miguel de Cervantes' en Marjayoun) y Misión de Verificación en **Colombia**. **OTAN** = **eFP / Presencia Avanzada Reforzada** (**Letonia**, **Eslovaquia** —donde España es nación marco—, **Rumanía**), **BAP** (Policía Aérea del Báltico), **Apoyo a Turquía** (batería Patriot en Adana), **Sea Guardian** (Mediterráneo) y **NMI** (Misión de la OTAN en Irak).",
    justificacion: "La Operación EUNAVFOR Atalanta es una misión militar de la Unión Europea contra la piratería en el Índico cuyo Cuartel General Operacional (ES-OHQ) está liderado por España en la Base Naval de Rota."
  },
  {
    id: "Q-W5-185",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el Vídeo T27 sobre las misiones internacionales actuales de las Fuerzas Armadas españolas, ¿bajo qué organización internacional se desarrolla la misión 'LIBRE HIDALGO' desplegada en el sur del Líbano (Sector Este, Base 'Miguel de Cervantes' en Marjayoun) desde septiembre de 2006?",
    opciones: [
      "Bajo bandera de la Organización de las Naciones Unidas (ONU), integrada en la Fuerza Provisional de las Naciones Unidas en el Líbano (FINUL / UNIFIL), conforme a la Resolución 1701 del Consejo de Seguridad.",
      "Bajo bandera de la OTAN dentro de la operación Sea Guardian.",
      "Bajo bandera del Consejo de Europa.",
      "Es una misión bilateral con Japón."
    ],
    correcta: 0,
    referencia: "Misión UNIFIL / FINUL de la ONU en Líbano (Operación Libre Hidalgo, Resolución 1701 CSNU)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Misiones ONU: FINUL/UNIFIL en Líbano (Operación Libre Hidalgo, Base Miguel de Cervantes)",
    consejoAcademia: "Datos de examen de la misión en **Líbano (Vídeo T27)**: Nombre nacional = **Operación Libre Hidalgo**; Misión ONU = **FINUL / UNIFIL**; Resolución del Consejo de Seguridad = **Resolución 1701 (año 2006)**; Base española = **Base 'Miguel de Cervantes'** cerca de **Marjayoun** (Sector Este).",
    justificacion: "La Operación Libre Hidalgo es la contribución española a la misión FINUL (UNIFIL) de las Naciones Unidas en el sur del Líbano bajo el mandato de la Resolución 1701 (2006) del Consejo de Seguridad."
  },
  {
    id: "Q-W5-186",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Vídeo T27 sobre el refuerzo de la Disuasión y Defensa en el Flanco Este de la OTAN, España despliega contingentes terrestres mecanizados/acorazados en Letonia (Base de Adazi) desde 2017 y lidera como Nación Marco (Framework Nation) una Agrupación Táctica Multinacional de la OTAN desde 2024 en:",
    opciones: [
      "Eslovaquia (campo de maniobras y base de Lest), además de contribuir a la vigilancia del espacio aéreo aliado (Policía Aérea del Báltico y Destacamentos Aéreos Tácticos en el Flanco Este como Rumanía/Lituania/Estonia) y a las Agrupaciones Navales Permanentes de la OTAN (SNMG y SNMCMG).",
      "Australia y Nueva Zelanda.",
      "Argentina y Chile.",
      "Islandia y Groenlandia."
    ],
    correcta: 0,
    referencia: "Presencia Avanzada Reforzada de la OTAN en el Flanco Este (Letonia, Eslovaquia y Rumanía)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Flanco Este OTAN: Letonia (Adazi), Eslovaquia (Nación Marco en Lest), BAP y SNMG/SNMCMG",
    consejoAcademia: "¡Hito actual de nuestras FAS en la OTAN (Vídeo T27)!: En **Letonia (Base de Adazi)** España participa en el Battle Group liderado por Canadá desde 2017; y en **Eslovaquia (Base de Lest)** **España es la NACIÓN MARCO (líder)** de la Brigada/Battle Group multinacional de la OTAN en el Flanco Este.",
    justificacion: "España participa en la presencia avanzada de la OTAN en Letonia (Adazi) y ejerce como Nación Marco de la agrupación multinacional aliada desplegada en Eslovaquia (Lest)."
  },
  {
    id: "Q-W5-187",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el Vídeo T27 y la Ley Orgánica 5/2005 (Art. 19), ¿cuáles son los requisitos o condiciones internacionales para que las Fuerzas Armadas españolas puedan realizar misiones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional?",
    opciones: [
      "1) Que se realicen por petición expresa del Gobierno del Estado en cuyo territorio se desarrollen o estén autorizadas en Resoluciones del Consejo de Seguridad de las Naciones Unidas o acordadas, en su caso, por organizaciones internacionales de las que España forme parte (como la UE o la OTAN); 2) Que cumplan con fines defensivos, humanitarios, de estabilización o de mantenimiento y preservación de la paz; y 3) Que sean conformes con la Carta de las Naciones Unidas y no contradigan los principios del derecho internacional convencional que España ha incorporado a su ordenamiento.",
      "Que no exista mandato internacional alguno y tengan carácter de conquista territorial.",
      "Que sean financiadas por empresas privadas extranjeras.",
      "Que participen únicamente reservistas voluntarios sin militares de carrera."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 19",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Las 3 Condiciones Legales de las Operaciones en el Exterior (Art. 19 LO 5/2005)",
    consejoAcademia: "Memoriza las **3 condiciones del Art. 19 de la LO 5/2005** para las operaciones en el exterior: 1) **Petición expresa del Estado anfitrión, Resolución del CSNU o acuerdo de OO.II. (UE/OTAN/OSCE)**; 2) **Fines defensivos, humanitarios, de estabilización o de mantenimiento de la paz**; 3) **Conformidad con la Carta de la ONU y el Derecho Internacional**.",
    justificacion: "El artículo 19 de la Ley Orgánica 5/2005 establece las tres condiciones que deben reunir las operaciones en el exterior de las Fuerzas Armadas españolas."
  },
  {
    id: "Q-W5-188",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el Vídeo T27 sobre las Operaciones Permanentes de las Fuerzas Armadas en territorio y espacios de soberanía nacional (conducidas por el MOPS bajo el JEMAD), ¿cómo se estructuran los Mandos Operativos Permanentes?",
    opciones: [
      "En cinco Mandos Operativos Permanentes: Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Espacial (MOESP) y Ciberespacial (MOC), que desarrollan las Operaciones de Presencia, Vigilancia y Disuasión (OPVD) las 24 horas de los 365 días del año.",
      "En un único mando policial dependiente de los Ayuntamientos.",
      "En diez comisiones parlamentarias.",
      "Sólo se activan un día al año durante el desfile de la Fiesta Nacional."
    ],
    correcta: 0,
    referencia: "Operaciones Permanentes de Presencia, Vigilancia y Disuasión (OPVD) - MOPS",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Operaciones Permanentes (OPVD) y los 5 Mandos Operativos: MOT, MOM, MOA, MOESP y MOC",
    consejoAcademia: "Las **Operaciones Permanentes de Presencia, Vigilancia y Disuasión (OPVD)** en espacios de soberanía e interés nacional son conducidas por el **MOPS** a través de los **5 Mandos Operativos**: **MOT** (Terrestre), **MOM** (Marítimo), **MOA** (Aéreo), **MOESP** (Espacial) y **MOC** (Ciberespacial).",
    justificacion: "El Mando de Operaciones (MOPS) conduce las Operaciones Permanentes de Presencia, Vigilancia y Disuasión a través de los cinco Mandos Operativos: MOT, MOM, MOA, MOESP y MOC."
  },

  // --- REFUERZO TRANSVERSAL BLOQUE 3 (Q-W5-189 a Q-W5-200) ---
  {
    id: "Q-W5-189",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 27 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), la contribución de recursos a la Seguridad Nacional se rige por varios principios y requiere la elaboración de un Catálogo de Recursos de la Seguridad Nacional. ¿Qué órgano aprueba los criterios generales para la elaboración de dicho Catálogo y qué Ministerio coordina los recursos del sector privado cuando se declare una Situación de Interés para la Seguridad Nacional?",
    opciones: [
      "El Consejo de Seguridad Nacional aprueba los criterios generales del Catálogo de Recursos (en coordinación con las CC.AA. y el Sistema Nacional de Protección Civil), y la contribución de recursos privados se articula conforme a la ley con derecho a indemnización por los daños y perjuicios causados.",
      "Los criterios los aprueba un Juez de Paz y nunca existe indemnización alguna.",
      "Sólo pueden emplearse recursos municipales gratuitos.",
      "La Ley 36/2015 prohíbe elaborar catálogos de recursos."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Arts. 27, 28 y 29",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015 Seguridad Nacional) > Contribución de Recursos a la Seguridad Nacional (Arts. 27-29)",
    consejoAcademia: "En el Título IV de la Ley 36/2015 (Arts. 27-29): existe un **Catálogo de Recursos de la Seguridad Nacional**, y los particulares tienen el deber de colaborar en caso de declararse una **Situación de Interés para la Seguridad Nacional**, con **derecho a ser indemnizados** de acuerdo con las leyes por los daños o perjuicios patrimoniales.",
    justificacion: "Los artículos 27 a 29 de la Ley 36/2015 regulan la contribución de recursos públicos y privados a la Seguridad Nacional y el Catálogo de Recursos."
  },
  {
    id: "Q-W5-190",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional y ESN 2021 (Vídeos T21 y T22)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Capítulo 5 de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021, Vídeo T22), para afrontar las vulnerabilidades en el suministro de bienes y recursos esenciales para la sociedad (reveladas durante crisis como la pandemia de COVID-19), la ESN 2021 impulsa la creación de:",
    opciones: [
      "Una Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI), junto con un Sistema de Alerta Temprana de Indicadores y un modelo integrado de gestión de crisis.",
      "Un impuesto especial sobre los alimentos básicos.",
      "El cierre permanente de todas las fronteras aéreas y marítimas.",
      "La supresión de los Comités Especializados del Consejo de Seguridad Nacional."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulo 5",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: Estrategia de Seguridad Nacional 2021 RD 1150/2021) > Novedades del Capítulo 5: Reserva Estratégica (RECAPI) y Gestión de Crisis",
    consejoAcademia: "¡Pregunta muy fina del Capítulo 5 de la ESN 2021 (Vídeo T22)!: La **Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI)** es una de las grandes novedades de la ESN 2021 para garantizar suministros esenciales y autonomía estratégica nacional.",
    justificacion: "El Capítulo 5 de la ESN 2021 (RD 1150/2021) contempla el establecimiento de una Reserva Estratégica basada en las Capacidades Nacionales de Producción Industrial (RECAPI)."
  },
  {
    id: "Q-W5-191",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según la PDC-01(B) (Vídeo T23), las Fuerzas Armadas deben contar con valores y principios que sustenten su eficacia operativa. ¿Cuáles son los PRINCIPIOS FUNDAMENTALES DE LAS OPERACIONES (principios del arte operacional / empleo de la fuerza) destacados en la doctrina?",
    opciones: [
      "Definición del objetivo (propósito claro), Unidad de esfuerzo, Iniciativa, Libertad de acción, Concentración del esfuerzo, Economía de medios, Flexibilidad, Sorpresa, Seguridad, Moral y Sostenimiento (además de Legitimidad, Perseverancia y Restricción).",
      "Improvisación, Dispersión absoluta, Desconocimiento del objetivo y Rigidez.",
      "Lucro mercantil, Competencia desleal y Publicidad comercial.",
      "Neutralidad ante el enemigo y Rendición inmediata."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Principios de las Operaciones",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Principios de las Operaciones Militares",
    consejoAcademia: "En la PDC-01(B) (Vídeo T23) el **primer principio rector** de toda operación militar es siempre la **DEFINICIÓN DEL OBJETIVO** (un propósito claro, alcanzable y decisivo), acompañado de la **Unidad de esfuerzo**, **Libertad de acción**, **Iniciativa**, **Concentración**, **Economía de medios**, **Sorpresa**, **Seguridad** y **Legitimidad**.",
    justificacion: "La PDC-01(B) enumera los principios de las operaciones encabezados por la definición clara del objetivo, la unidad de esfuerzo, la iniciativa y la libertad de acción."
  },
  {
    id: "Q-W5-192",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "PDC-01(B) Doctrina para el Empleo de las FAS (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con la PDC-01(B) (Vídeo T23), ¿qué es la 'CAPACIDAD MILITAR' y cuáles son los factores que la componen (conocidos por el acrónimo MIRADO-I)?",
    opciones: [
      "Es la aptitud para realizar una acción a fin de alcanzar un objetivo o producir un efecto, integrada por un conjunto de factores interrelacionados: Material, Infraestructura, Recursos Humanos (Personal), Adiestramiento, Doctrina, Organización e Interoperabilidad (MIRADO-I).",
      "Es únicamente el número de carros de combate almacenados sin personal ni doctrina.",
      "Es el presupuesto anual de un Ayuntamiento.",
      "Es la suma de las multas disciplinarias impuestas en un año."
    ],
    correcta: 0,
    referencia: "PDC-01(B), Capacidad Militar y Factores MIRADO-I",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: PDC-01(B) Doctrina FAS) > Concepto de Capacidad Militar y Acrónimo MIRADO-I",
    consejoAcademia: "Acrónimo español de los componentes de una **Capacidad Militar** en la PDC-01(B): **MIRADO-I** (**M**aterial, **I**nfraestructura, **R**ecursos humanos, **A**diestramiento, **D**octrina, **O**rganización e **I**nteroperabilidad; equivalente al aliado *DOTMLPFI*).",
    justificacion: "La PDC-01(B) define la capacidad militar a través de los componentes del acrónimo MIRADO-I: Material, Infraestructura, Recursos humanos, Adiestramiento, Doctrina, Organización e Interoperabilidad."
  },
  {
    id: "Q-W5-193",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al artículo 4 de la Carta de las Naciones Unidas (Vídeo T24), ¿cómo se efectúa la ADMISIÓN de nuevos Estados como Miembros de las Naciones Unidas?",
    opciones: [
      "Por decisión de la Asamblea General (por mayoría de dos tercios) a recomendación del Consejo de Seguridad.",
      "Por decisión exclusiva del Secretario General sin intervención de ningún otro órgano.",
      "Por sentencia de la Corte Internacional de Justicia.",
      "Mediante sorteo en el Consejo Económico y Social."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 4.2",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Admisión, Suspensión y Expulsión de Miembros (Arts. 4-6)",
    consejoAcademia: "En los Arts. 4, 5 y 6 de la Carta de la ONU (admisión, suspensión y expulsión de miembros) y en el Art. 97 (nombramiento del Secretario General), la fórmula es siempre la misma: **decide la Asamblea General A RECOMENDACIÓN del Consejo de Seguridad**.",
    justificacion: "El artículo 4.2 de la Carta de las Naciones Unidas establece que la admisión de tales Estados como Miembros de las Naciones Unidas se efectuará por decisión de la Asamblea General a recomendación del Consejo de Seguridad."
  },
  {
    id: "Q-W5-194",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Organización de las Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Según el artículo 111 de la Carta de las Naciones Unidas (Vídeo T24), ¿cuáles son los SEIS IDIOMAS OFICIALES de las Naciones Unidas?",
    opciones: [
      "Árabe, Chino, Español, Francés, Inglés y Ruso.",
      "Alemán, Italiano, Portugués, Japonés, Hindi y Turco.",
      "Únicamente Inglés y Francés.",
      "Latín, Griego y Esperanto."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 111 y Reglamento de la Asamblea General",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: Organización de las Naciones Unidas) > Los 6 Idiomas Oficiales de la ONU",
    consejoAcademia: "¡Diferencia entre idiomas oficiales de la **ONU** vs la **OTAN**!: En la **ONU** son **6 idiomas oficiales**: **Árabe, Chino, Español, Francés, Inglés y Ruso**. En la **OTAN** los idiomas oficiales son sólo **2**: **Inglés y Francés**.",
    justificacion: "Las Naciones Unidas tienen seis idiomas oficiales: árabe, chino, español, francés, inglés y ruso (el árabe se sumó en 1973 a los cinco textos auténticos del art. 111 de la Carta)."
  },
  {
    id: "Q-W5-195",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "De acuerdo con el artículo 10 del Tratado del Atlántico Norte (política de 'puertas abiertas', Vídeo T25), ¿a qué Estados pueden invitar las Partes a adherirse al Tratado y qué acuerdo requiere dicha invitación?",
    opciones: [
      "Por acuerdo unánime, las Partes pueden invitar a ingresar a cualquier otro Estado europeo que esté en condiciones de favorecer el desarrollo de los principios del Tratado y de contribuir a la seguridad de la región del Atlántico Norte.",
      "A cualquier país de América del Sur o de Oceanía por mayoría simple.",
      "A cualquier empresa multinacional sin acuerdo de los Estados.",
      "El Tratado de Washington prohíbe admitir nuevos miembros desde 1949."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte (Washington, 1949), Art. 10",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Política de Puertas Abiertas: Artículo 10 del Tratado de Washington",
    consejoAcademia: "¡Detalle literal del **Art. 10 del Tratado de Washington**!: Sólo se puede invitar a ingresar a **cualquier otro ESTADO EUROPEO**, y requiere el **acuerdo UNÁNIME** de todos los Aliados.",
    justificacion: "El artículo 10 del Tratado del Atlántico Norte regula la ampliación de la Alianza mediante invitación por acuerdo unánime a cualquier otro Estado europeo que cumpla las condiciones del Tratado."
  },
  {
    id: "Q-W5-196",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "Organización del Tratado del Atlántico Norte - OTAN (Vídeo T25)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Según el Vídeo T25 sobre las relaciones de asociación de la OTAN con países terceros no miembros, ¿cuáles son los dos grandes marcos históricos de cooperación creados en 1994 para los países del espacio euroatlántico/ex-soviético y para los países de la ribera sur del Mediterráneo, respectivamente?",
    opciones: [
      "La Asociación para la Paz (PfP - Partnership for Peace) y el Diálogo Mediterráneo (además de la Iniciativa de Cooperación de Estambul de 2004 con países del Golfo Pérsico y los socios globales).",
      "El Pacto de Varsovia y el Mercosur.",
      "La Comunidad Andina y la ASEAN.",
      "El Tratado de Maastricht y el Acuerdo de Schengen."
    ],
    correcta: 0,
    referencia: "Programas de Asociación de la OTAN (PfP 1994, Diálogo Mediterráneo 1994, ICI 2004)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Seguridad Cooperativa: Asociación para la Paz (PfP), Diálogo Mediterráneo e Iniciativa de Estambul (ICI)",
    consejoAcademia: "Los **3 grandes foros de socios de la OTAN** (dentro de la Tarea Fundamental de **Seguridad Cooperativa**): 1) **Asociación para la Paz (PfP, 1994)**; 2) **Diálogo Mediterráneo (1994)** (Argelia, Egipto, Israel, Jordania, Mauritania, Marruecos y Túnez); 3) **Iniciativa de Cooperación de Estambul (ICI, 2004)** (Bahréin, Catar, Emiratos Árabes Unidos y Kuwait).",
    justificacion: "En 1994 la OTAN puso en marcha la Asociación para la Paz (PfP) y el Diálogo Mediterráneo, seguidos en 2004 por la Iniciativa de Cooperación de Estambul (ICI)."
  },
  {
    id: "Q-W5-197",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE - Seguridad y Cooperación en Europa (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Conforme al Vídeo T26 sobre la primera dimensión (Político-Militar) de la OSCE, ¿qué documento clave de la OSCE regula las Medidas de Fomento de la Confianza y la Seguridad (MFCS), incluyendo el intercambio anual de información militar, la notificación previa de determinadas actividades militares y la observación de ejercicios?",
    opciones: [
      "El Documento de Viena (sobre Medidas de Fomento de la Confianza y la Seguridad - MFCS), junto con instrumentos del acervo político-militar como el Código de Conducta sobre los Aspectos Político-Militares de la Seguridad.",
      "El Tratado de Tordesillas de 1494.",
      "El Reglamento General de Circulación Vial.",
      "La Directiva Europea del IVA."
    ],
    correcta: 0,
    referencia: "Documento de Viena de la OSCE sobre MFCS y Código de Conducta (1994)",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Dimensión Político-Militar: Documento de Viena (MFCS), Cielos Abiertos y Tratado FACE",
    consejoAcademia: "En la **Dimensión Político-Militar de la OSCE (Vídeo T26)** destacan: el **Documento de Viena** (sobre **Medidas de Fomento de la Confianza y la Seguridad - MFCS**), el **Código de Conducta sobre los aspectos político-militares de la seguridad (1994)**, el histórico **Tratado FACE** (Fuerzas Armadas Convencionales en Europa) y el **Tratado de Cielos Abiertos**.",
    justificacion: "El Documento de Viena es el instrumento fundamental de la OSCE que regula las Medidas de Fomento de la Confianza y la Seguridad (MFCS) en el ámbito político-militar."
  },
  {
    id: "Q-W5-198",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "La Unión Europea - UE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el artículo 43 del Tratado de la Unión Europea (Vídeo T26), ¿qué son las denominadas 'Misiones Petersberg' (incorporadas originariamente en el Tratado de Ámsterdam y ampliadas por el Tratado de Lisboa) dentro de la Política Común de Seguridad y Defensa (PCSD)?",
    opciones: [
      "El catálogo de misiones civiles y militares que puede realizar la Unión Europea en el exterior para garantizar el mantenimiento de la paz, la prevención de conflictos y el fortalecimiento de la seguridad internacional: misiones humanitarias y de rescate, de asesoramiento y asistencia en cuestiones militares, de prevención de conflictos y mantenimiento de la paz, de fuerzas de combate para la gestión de crisis (incluidas las de restablecimiento de la paz y estabilización al término de los conflictos) y acciones conjuntas en materia de desarme.",
      "Misiones espaciales tripuladas a Marte organizadas por el Banco Central Europeo.",
      "Inspecciones fiscales dentro de los ayuntamientos europeos.",
      "Operaciones exclusivas de defensa nuclear estratégica."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Art. 43.1",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T26: Unión Europea) > Las Misiones Petersberg Ampliadas en el Tratado de Lisboa (Art. 43 TUE)",
    consejoAcademia: "Las **Misiones Petersberg** (formuladas en 1992 en la UEO, incorporadas al TUE en Ámsterdam 1997 y ampliadas en **Lisboa, Art. 43.1 TUE**) constituyen las misiones operativas de la **PCSD** de la Unión Europea.",
    justificacion: "El artículo 43.1 del TUE recoge las misiones Petersberg ampliadas que puede desempeñar la Unión Europea utilizando medios civiles y militares en el marco de la PCSD."
  },
  {
    id: "Q-W5-199",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "Importante"],
    pregunta: "Conforme al Vídeo T27 sobre las misiones internacionales en África Occidental y el Sahel, ¿en qué consiste las Actividades de Seguridad Cooperativa y Diplomacia de Defensa que desarrollan las Fuerzas Armadas españolas (incluyendo los Destacamentos Aéreos como el Destacamento 'Marfil' en Senegal y despliegues navales en el Golfo de Guinea)?",
    opciones: [
      "Son actividades bilaterales y multilaterales de adiestramiento, asesoramiento y desarrollo de capacidades de las fuerzas armadas de países socios (como Senegal, Mauritania, Cabo Verde o países ribereños del Golfo de Guinea) para reforzar su estabilidad y capacidad autónoma de seguridad frente al terrorismo, el crimen organizado y la piratería, además del apoyo al transporte aéreo estratégico aliado desde Dakar (Destacamento Marfil).",
      "Consisten en la anexión territorial de puertos africanos.",
      "Son operaciones gestionadas por el Ministerio de Agricultura.",
      "Sólo participan funcionarios civiles de correos."
    ],
    correcta: 0,
    referencia: "Diplomacia de Defensa, Seguridad Cooperativa y Destacamento Aéreo Marfil (Senegal)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Seguridad Cooperativa en África Occidental, Golfo de Guinea y Destacamento Marfil",
    consejoAcademia: "Recuerda en el Vídeo T27 los **Destacamentos Aéreos del Ejército del Aire y del Espacio en África**: **Destacamento 'Marfil'** (en Dakar, **Senegal**, apoyo aéreo al Sahel) y **Destacamento 'Orión'** (en **Yibuti**, patrulla marítima dentro de la Operación EUNAVFOR Atalanta).",
    justificacion: "Las Actividades de Seguridad Cooperativa y los Destacamentos Aéreos 'Marfil' (Senegal) y 'Orión' (Yibuti) proyectan la contribución española a la estabilidad en el Sahel, Golfo de Guinea y Cuerno de África."
  },
  {
    id: "Q-W5-200",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "España y Misiones Internacionales (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Importante"],
    pregunta: "Según el Vídeo T27 sobre las misiones en Oriente Próximo, España participa en Irak a través de dos marcos multinacionales complementarios para apoyar al Gobierno iraquí en el adiestramiento de sus fuerzas de seguridad y en la derrota definitiva del Daesh. ¿Cuáles son esos dos marcos?",
    opciones: [
      "La Misión de la OTAN en Irak (NMI - NATO Mission Iraq, de asesoramiento y fortalecimiento institucional no de combate) y la Coalición Internacional contra el Daesh (Operación Inherent Resolve - OIR).",
      "La Operación EUNAVFOR Atalanta y la misión EUFOR Althea.",
      "La Misión de Verificación de la ONU en Colombia y la misión MINURSO.",
      "El Tratado de Cielos Abiertos y el Documento de Viena."
    ],
    correcta: 0,
    referencia: "Participación Española en Irak: NMI (OTAN) y Coalición Internacional Inherent Resolve",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T27: España y Misiones Internacionales) > Presencia Española en Irak: Misión NMI (OTAN) y Operación Inherent Resolve",
    consejoAcademia: "En **Irak (Vídeo T27)** España participa simultáneamente en: 1) **NMI (NATO Mission Iraq)** de la **OTAN** (que España llegó a liderar al mando de un Teniente General español en Bagdad); y 2) La **Coalición Internacional contra el Daesh (Operación Inherent Resolve - OIR)**.",
    justificacion: "La participación española en Irak se articula a través de la Misión de la OTAN en Irak (NMI) y la Coalición Internacional contra el Daesh (Operación Inherent Resolve)."
  }
];

function mergeWave5QuestionsIntoBank() {
  if (typeof DEFAULT_QUESTIONS === "undefined") return;

  const existingIds = new Set(DEFAULT_QUESTIONS.map(q => q.id));
  const allWave5 = [
    ...(typeof WAVE5_QUESTIONS_PART1 !== "undefined" ? WAVE5_QUESTIONS_PART1 : []),
    ...(typeof WAVE5_QUESTIONS_PART2 !== "undefined" ? WAVE5_QUESTIONS_PART2 : []),
    ...(typeof WAVE5_QUESTIONS_PART3 !== "undefined" ? WAVE5_QUESTIONS_PART3 : [])
  ];

  allWave5.forEach(q => {
    if (!existingIds.has(q.id)) {
      DEFAULT_QUESTIONS.push(q);
      existingIds.add(q.id);
    }
  });

  if (typeof OFFICIAL_EXAM_PACKS !== "undefined" && typeof WAVE5_NEW_EXAM_PACKS !== "undefined") {
    const existingPackIds = new Set(OFFICIAL_EXAM_PACKS.map(p => p.id));
    WAVE5_NEW_EXAM_PACKS.forEach(pack => {
      if (!existingPackIds.has(pack.id)) {
        OFFICIAL_EXAM_PACKS.push(pack);
        existingPackIds.add(pack.id);
      }
    });
  }
}

mergeWave5QuestionsIntoBank();
