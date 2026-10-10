/**
 * ============================================================================
 * OLEADA MUSCULAR 4 DE PREGUNTAS OFICIALES (+150 PREGUNTAS -> TOTAL 800)
 * Basadas en el Temario Oficial (Orden DEF/1341/2017 + Orden DEF/15/2026)
 * y en el desglose de los 28 temas de vídeos de academia (EMAD, ET, Armada, EA,
 * Carrera Militar, Tropa, Observatorio, UPA, LPACAP, Seguridad Nacional, ESN y Misiones).
 * ============================================================================
 */

const WAVE4_QUESTIONS_PART1 = [
  // =========================================================================
  // B1-T01: CONSTITUCIÓN ESPAÑOLA I y II (VÍDEOS T1 y T2) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-001",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 3 de la Constitución Española, la riqueza de las distintas modalidades lingüísticas de España es un patrimonio cultural que será objeto de:",
    opciones: [
      "Regulación exclusiva por las Cortes Generales mediante ley orgánica.",
      "Especial respeto y protección.",
      "Oficialidad automática en todo el territorio nacional.",
      "Tutela directa por el Consejo de Estado."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 3.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título Preliminar (Art. 3)",
    consejoAcademia: "Literal fijo del Art. 3.3 CE: 'especial respeto y protección'.",
    justificacion: "El artículo 3.3 de la CE dispone que la riqueza de las distintas modalidades lingüísticas de España es un patrimonio cultural que será objeto de especial respeto y protección."
  },
  {
    id: "Q-W4-002",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 59.1 de la Constitución Española, cuando el Rey fuere menor de edad, ¿quién entrará a ejercer inmediatamente la Regencia y durante cuánto tiempo?",
    opciones: [
      "El Presidente del Congreso de los Diputados durante un máximo de un año.",
      "El padre o la madre del Rey y, en su defecto, el pariente mayor de edad más próximo a suceder en la Corona, durante el tiempo de la minoría de edad.",
      "Las Cortes Generales mediante una Regencia colegiada de tres o cinco personas.",
      "La Reina consorte exclusivamente hasta que las Cortes nombren un Tutor."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 59.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título II La Corona (Art. 59)",
    consejoAcademia: "Si no hay ninguna persona a quien corresponda la Regencia, la nombrarán las Cortes Generales y se compondrá de 1, 3 o 5 personas (Art. 59.3 CE).",
    justificacion: "El artículo 59.1 CE establece que cuando el Rey fuere menor de edad, el padre o la madre del Rey y, en su defecto, el pariente mayor de edad más próximo a suceder en la Corona, entrará a ejercer inmediatamente la Regencia durante el tiempo de la minoría de edad del Rey."
  },
  {
    id: "Q-W4-003",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 60.1 de la Constitución Española, ¿pueden acumularse los cargos de Regente y de Tutor del Rey menor en una misma persona?",
    opciones: [
      "Sí, en cualquier pariente colateral de segundo grado que designen las Cortes.",
      "No, en ningún caso, ni siquiera en sus progenitores directos.",
      "No podrán acumularse sino en el padre, madre o ascendientes directos del Rey.",
      "Sí, siempre que lo autorice el Tribunal Constitucional por mayoría absoluta."
    ],
    correcta: 2,
    referencia: "Constitución Española, Art. 60.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título II La Corona (Art. 60)",
    consejoAcademia: "Pregunta clásica del vídeo T1/T2: Regente y Tutor solo pueden acumularse en el padre, madre o ascendientes directos del Rey.",
    justificacion: "El artículo 60.1 in fine de la Constitución dispone que no podrán acumularse los cargos de Regente y de tutor sino en el padre, madre o ascendientes directos del Rey."
  },
  {
    id: "Q-W4-004",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según el artículo 102 de la Constitución Española, la responsabilidad criminal del Presidente y los demás miembros del Gobierno será exigible, en su caso, ante:",
    opciones: [
      "El Pleno del Tribunal Constitucional.",
      "La Sala de lo Penal del Tribunal Supremo.",
      "La Sala de lo Penal de la Audiencia Nacional.",
      "El Tribunal Militar Central cuando afecte a la seguridad del Estado."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 102.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título IV Gobierno (Art. 102)",
    consejoAcademia: "Si la acusación fuere por traición o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones, sólo podrá ser planteada por iniciativa de la cuarta parte (1/4) de los miembros del Congreso y con la aprobación de la mayoría absoluta del mismo (Art. 102.2).",
    justificacion: "El artículo 102.1 CE dispone que la responsabilidad criminal del Presidente y los demás miembros del Gobierno será exigible, en su caso, ante la Sala de lo Penal del Tribunal Supremo."
  },
  {
    id: "Q-W4-005",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "Rebuscada"],
    pregunta: "Conforme al artículo 115.2 de la Constitución Española, la propuesta de disolución del Congreso, del Senado o de las Cortes Generales por el Presidente del Gobierno NO podrá presentarse cuando:",
    opciones: [
      "Falten menos de seis meses para la terminación ordinaria de la legislatura.",
      "Esté en trámite una moción de censura, ni antes de que transcurra un año desde la anterior disolución, salvo lo dispuesto en el artículo 99.5.",
      "Se haya declarado el estado de alarma en una parte del territorio nacional.",
      "El Senado se encuentre debatiendo los Presupuestos Generales del Estado."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 115.2 y 115.3",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título V Relaciones Gobierno-Cortes (Art. 115)",
    consejoAcademia: "Recuerda las 3 prohibiciones de disolución: 1) Moción de censura en trámite, 2) Menos de 1 año desde la anterior disolución (salvo Art. 99.5), y 3) Estados del Art. 116 declarados (solo afecta al Congreso, Art. 116.5).",
    justificacion: "Según los apartados 2 y 3 del artículo 115 CE, la propuesta de disolución no podrá presentarse cuando esté en trámite una moción de censura, ni procederá nueva disolución antes de que transcurra un año desde la anterior, salvo lo dispuesto en el artículo 99, apartado 5."
  },
  {
    id: "Q-W4-006",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "media",
    esExamenOficial: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "Según el artículo 124.4 de la Constitución Española, el Fiscal General del Estado será nombrado por el Rey, a propuesta del Gobierno, oído:",
    opciones: [
      "El Tribunal Constitucional.",
      "El Consejo General del Poder Judicial.",
      "El Consejo de Estado.",
      "El Ministro de Justicia exclusivamente."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 124.4",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título VI Poder Judicial (Art. 124)",
    consejoAcademia: "Fiscal General del Estado = nombrado por el Rey + a propuesta del Gobierno + oído el CGPJ.",
    justificacion: "El artículo 124.4 de la CE establece que el Fiscal General del Estado será nombrado por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial."
  },
  {
    id: "Q-W4-007",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T01",
    materia: "Constitución Española",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "De acuerdo con el artículo 155.1 de la Constitución Española, si una Comunidad Autónoma no cumpliere las obligaciones que la Constitución u otras leyes le impongan, el Gobierno, previo requerimiento al Presidente de la Comunidad Autónoma y, en el caso de no ser atendido, podrá adoptar las medidas necesarias con la aprobación por:",
    opciones: [
      "Mayoría absoluta del Congreso de los Diputados.",
      "Mayoría absoluta del Senado.",
      "Mayoría de tres quintos de ambas Cámaras en sesión conjunta.",
      "Real Decreto del Consejo de Ministros dando cuenta posterior al Senado."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 155.1",
    ubicacionTemario: "Bloque 1 > Tema 1 (Vídeos T1-T2) > Título VIII Organización Territorial (Art. 155)",
    consejoAcademia: "Art. 155 CE = Cámara territorial = SENADO por MAYORÍA ABSOLUTA.",
    justificacion: "El artículo 155.1 CE exige previo requerimiento al Presidente de la Comunidad Autónoma y, en el caso de no ser atendido, la aprobación por la mayoría absoluta del Senado."
  },

  // =========================================================================
  // B1-T02: CORTES Y LO 5/2005 DEFENSA NACIONAL (VÍDEO T3) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-008",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 Defensa Nacional",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 2 de la Ley Orgánica 5/2005, de la Defensa Nacional, la finalidad de la política de defensa es:",
    opciones: [
      "Garantizar exclusivamente el orden público interior en apoyo a las Fuerzas y Cuerpos de Seguridad.",
      "La protección del conjunto de la sociedad española, de su Constitución, de los valores superiores, principios e instituciones que en ella se consagran, del Estado social y democrático de derecho, del pleno ejercicio de los derechos y libertades, y de la garantía, soberanía e independencia de España.",
      "El planeamiento presupuestario anual de los tres Ejércitos.",
      "Dirigir la política comercial exterior en el marco de la Unión Europea."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 5/2005, Art. 2",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Finalidad de la Política de Defensa (Art. 2)",
    consejoAcademia: "El Art. 2 LODN conecta directamente la política de defensa con la protección de la sociedad española, la Constitución y el Estado social y democrático de derecho.",
    justificacion: "El artículo 2 de la LO 5/2005 define la finalidad de la política de defensa como la protección del conjunto de la sociedad española, de su Constitución, de sus valores e instituciones y de la soberanía e independencia de España."
  },
  {
    id: "Q-W4-009",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 Defensa Nacional",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 18 de la Ley Orgánica 5/2005, sobre el control parlamentario de las operaciones en el exterior, el Gobierno dará cuenta periódicamente de la evolución de las operaciones autorizadas:",
    opciones: [
      "Al Consejo de Estado en un plazo no superior a seis meses.",
      "Al Congreso de los Diputados, en un plazo que en ningún caso superará un año.",
      "Al Senado exclusivamente cada tres meses.",
      "Al Tribunal Constitucional al finalizar cada misión."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 5/2005, Art. 18",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Misiones en el Exterior (Art. 18)",
    consejoAcademia: "¡Plazo de oro del Art. 18 LODN!: El Gobierno informa periódicamente al Congreso de los Diputados en un plazo que EN NINGÚN CASO SUPERARÁ UN AÑO.",
    justificacion: "El artículo 18 de la LO 5/2005 establece que el Gobierno informará periódicamente, en un plazo que en ningún caso superará un año, al Congreso de los Diputados sobre el desarrollo de las operaciones de las Fuerzas Armadas en el exterior."
  },
  {
    id: "Q-W4-010",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 Defensa Nacional",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 17.3 de la Ley Orgánica 5/2005, en las misiones en el exterior que, de acuerdo con compromisos internacionales, requieran una respuesta rápida o inmediata a determinadas situaciones, los trámites de consulta previa y autorización del Congreso se realizarán:",
    opciones: [
      "Quedarán suprimidos definitivamente sin necesidad de ratificación.",
      "Mediante procedimientos de urgencia que permitan cumplir con dichos compromisos, y cuando por razones de máxima urgencia no fuera posible la consulta previa, el Gobierno someterá al Congreso lo antes posible la decisión adoptada para su ratificación.",
      "Por decisión unilateral del JEMAD comunicada al Senado en 30 días.",
      "Previo dictamen vinculante del Tribunal Supremo."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 5/2005, Art. 17.3",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Autorización de Operaciones en el Exterior (Art. 17.3)",
    consejoAcademia: "En casos de máxima urgencia en que no sea posible la consulta previa, el Gobierno someterá al Congreso LO ANTES POSIBLE la decisión adoptada para su RATIFICACIÓN.",
    justificacion: "El artículo 17.3 de la LO 5/2005 regula el procedimiento de urgencia y la ratificación lo antes posible por el Congreso de los Diputados cuando por razones de máxima urgencia no fuera posible realizar la consulta previa."
  },
  {
    id: "Q-W4-011",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 Defensa Nacional",
    dificultad: "media",
    esExamenOficial: false,
    etiquetas: ["Nivel Medio", "Importante"],
    pregunta: "De acuerdo con el artículo 21 de la Ley Orgánica 5/2005, ¿qué órgano o departamento es el encargado de realizar la aportación de otros recursos (no estrictamente militares) a la Defensa Nacional en situaciones de crisis o conflicto?",
    opciones: [
      "El Gobierno establecerá los criterios relativos a la contribución de los recursos humanos y materiales no propiamente militares para satisfacer las necesidades de la defensa nacional.",
      "Exclusivamente los Ayuntamientos fronterizos.",
      "El Mando de Apoyo Logístico del Ejército de Tierra sin intervención del Gobierno.",
      "El Banco de España mediante decreto propio."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 21 y 25",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Contribución de Recursos a la Defensa (Arts. 21-26)",
    consejoAcademia: "Recuerda que en tiempo de conflicto armado o estado de sitio, el sistema de disponibilidad permanente de recursos será coordinado por el Consejo de Defensa Nacional (Art. 26 LODN).",
    justificacion: "Conforme a los artículos 21 y 25 de la LO 5/2005, el Gobierno establece los criterios relativos a la contribución de recursos humanos y materiales no propiamente militares a la defensa nacional."
  },
  {
    id: "Q-W4-012",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Cortes Generales (CE)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 79.2 de la Constitución Española, para adoptar acuerdos las Cámaras deben estar reunidas reglamentariamente y con asistencia de la mayoría de sus miembros. Dichos acuerdos, para ser válidos, deberán ser aprobados por:",
    opciones: [
      "La mayoría absoluta de los miembros de derecho de la Cámara, como regla general.",
      "La mayoría de los miembros presentes, sin perjuicio de las mayorías especiales que establezcan la Constitución o las leyes orgánicas y las que para elección de personas establezcan los Reglamentos de las Cámaras.",
      "Mayoría de tres quintos en primera votación y mayoría simple en segunda.",
      "Unanimidad de los portavoces parlamentarios."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 79.1 y 79.2",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T2/T3) > Funcionamiento de las Cámaras (Art. 79 CE)",
    consejoAcademia: "¡No confundas QUÓRUM DE ASISTENCIA (mayoría de los miembros de la Cámara, Art. 79.1) con MAYORÍA DE VOTACIÓN GENERAL (mayoría simple de los miembros PRESENTES, Art. 79.2)!",
    justificacion: "El artículo 79.1 CE exige quórum de asistencia de la mayoría de los miembros, y el artículo 79.2 CE establece como regla general la aprobación por la mayoría de los miembros presentes."
  },
  {
    id: "Q-W4-013",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "Cortes Generales (CE)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 87.3 de la Constitución Española, ¿en qué materias NO procede en ningún caso la iniciativa legislativa popular (que exige al menos 500.000 firmas acreditadas)?",
    opciones: [
      "En materias propias de ley ordinaria sobre medio ambiente o cultura.",
      "En materias propias de ley orgánica, tributarias o de carácter internacional, ni en lo relativo a la prerrogativa de gracia.",
      "En materias de consumo y comercio interior.",
      "En reformas de estatutos de colegios profesionales."
    ],
    correcta: 1,
    referencia: "Constitución Española, Art. 87.3",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T2/T3) > Elaboración de las Leyes (Art. 87 CE)",
    consejoAcademia: "Las 4 exclusiones de la ILP (Art. 87.3 CE): 1) Ley Orgánica, 2) Tributarias, 3) Carácter internacional y 4) Prerrogativa de gracia.",
    justificacion: "El artículo 87.3 de la CE dispone que no procederá dicha iniciativa en materias propias de ley orgánica, tributarias o de carácter internacional, ni en lo relativo a la prerrogativa de gracia."
  },
  {
    id: "Q-W4-014",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T02",
    materia: "LO 5/2005 Defensa Nacional",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 29 de la Ley Orgánica 5/2005, de la Defensa Nacional, la Guardia Civil es un Instituto armado de naturaleza militar que:",
    opciones: [
      "Integra de forma permanente el Cuartel General del Ejército de Tierra.",
      "Depende del Ministro del Interior en el desempeño de las funciones que le atribuye la LO 2/1986, y del Ministro de Defensa en el cumplimiento de las misiones de carácter militar que se le encomienden.",
      "Depende exclusivamente del JEMAD en todo tiempo.",
      "Carece de misiones de carácter militar en tiempo de paz."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 5/2005, Art. 29",
    ubicacionTemario: "Bloque 1 > Tema 2 (Vídeo T3) > Guardia Civil en la Defensa Nacional (Art. 29)",
    consejoAcademia: "En tiempo de conflicto armado y durante la vigencia del estado de sitio dependerá exclusivamente del Ministro de Defensa (Art. 29.2 LODN).",
    justificacion: "El artículo 29 de la LO 5/2005 regula la doble dependencia de la Guardia Civil (Interior para seguridad ciudadana y Defensa para misiones militares y ascensos/situaciones de personal)."
  },

  // =========================================================================
  // B1-T03: LEY 40/2015 LRJSP (VÍDEO T4) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-015",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 10 de la Ley 40/2015 (LRJSP), ¿en qué consiste la 'avocación' de competencias y qué recurso cabe contra el acuerdo de avocación?",
    opciones: [
      "Los órganos inferiores asumen competencias de los superiores; cabe recurso de alzada.",
      "Los órganos superiores pueden avocar para sí el conocimiento de uno o varios asuntos cuya resolución corresponda ordinariamente o por delegación a sus órganos administrativos dependientes; contra el acuerdo de avocación NO cabrá recurso, aunque podrá impugnarse en el que, en su caso, se interponga contra la resolución del procedimiento.",
      "Supone el cambio definitivo de titularidad de la competencia mediante ley orgánica.",
      "Solo puede acordarse entre Administraciones de distintas Comunidades Autónomas."
    ],
    correcta: 1,
    referencia: "Ley 40/2015, Art. 10.1 y 10.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Competencia: Avocación (Art. 10)",
    consejoAcademia: "¡Trampa clásica de la Ley 40/2015!: El acuerdo de avocación debe ser MOTIVADO y NOTIFICADO a los interesados, pero contra él NO CABE RECURSO directo (solo al recurrir la resolución final).",
    justificacion: "El artículo 10 de la Ley 40/2015 regula la avocación por los órganos superiores mediante acuerdo motivado contra el cual no cabrá recurso directo."
  },
  {
    id: "Q-W4-016",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 11 de la Ley 40/2015 (LRJSP), la realización de actividades de carácter material o técnico de la competencia de los órganos administrativos o de las Entidades de Derecho Público podrá ser encomendada a otros órganos o Entidades mediante la figura de:",
    opciones: [
      "La encomienda de gestión, que no supone cesión de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio.",
      "La suplencia temporal del titular del órgano.",
      "La desconcentración jerárquica por Real Decreto.",
      "El conflicto de atribuciones."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 11.1 y 11.2",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Encomienda de Gestión (Art. 11)",
    consejoAcademia: "Encomienda de gestión = actividades MATERIALES o TÉCNICAS (por razones de eficacia o falta de medios técnicos idóneos). ¡NO cede titularidad ni dictado de actos jurídicos!",
    justificacion: "El artículo 11 de la Ley 40/2015 regula la encomienda de gestión para actividades de carácter material o técnico, sin cesión de titularidad de la competencia."
  },
  {
    id: "Q-W4-017",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 12 de la Ley 40/2015 (LRJSP), cuando se designa quién firma las resoluciones y actos del titular de un órgano administrativo sin alterar la competencia del órgano delegante y sin que sea necesaria su publicación para su validez, estamos ante:",
    opciones: [
      "Una delegación de competencias del artículo 9.",
      "Una delegación de firma.",
      "Una avocación.",
      "Una desconcentración."
    ],
    correcta: 1,
    referencia: "Ley 40/2015, Art. 12",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Delegación de Firma (Art. 12)",
    consejoAcademia: "Diferencia vital: La delegación de competencias (Art. 9) SÍ exige publicación en BOE/Diario Oficial; la delegación de firma (Art. 12) NO requiere publicación.",
    justificacion: "El artículo 12.1 de la Ley 40/2015 establece que la delegación de firma no alterará la competencia del órgano delegante y para su validez no será necesaria su publicación."
  },
  {
    id: "Q-W4-018",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 13 de la Ley 40/2015 (LRJSP), en los supuestos de vacante, ausencia o enfermedad de los titulares de los órganos administrativos, la sustitución temporal en el ejercicio de las funciones del órgano se denomina:",
    opciones: [
      "Suplencia (y no implicará alteración de la competencia ni será necesaria su publicación para su validez).",
      "Encomienda de gestión.",
      "Avocación forzosa.",
      "Abstención."
    ],
    correcta: 0,
    referencia: "Ley 40/2015, Art. 13.1",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Suplencia (Art. 13)",
    consejoAcademia: "Vacante, ausencia o enfermedad (o abstención/recusación) = SUPLENCIA (Art. 13). Tampoco altera la competencia ni requiere publicación.",
    justificacion: "El artículo 13.1 de la Ley 40/2015 regula la suplencia temporal de los titulares de órganos administrativos en casos de vacante, ausencia o enfermedad."
  },
  {
    id: "Q-W4-019",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 14.1 de la Ley 40/2015 (LRJSP), los conflictos de atribuciones sólo podrán suscitarse entre órganos de una misma Administración:",
    opciones: [
      "Relacionados jerárquicamente entre sí, respecto a asuntos ya finalizados.",
      "No relacionados jerárquicamente, y respecto de asuntos sobre los que no haya finalizado el procedimiento administrativo.",
      "De distintas Comunidades Autónomas.",
      "Judiciales y militares."
    ],
    correcta: 1,
    referencia: "Ley 40/2015, Art. 14.1",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Decisiones sobre Competencia (Art. 14)",
    consejoAcademia: "¡Doble requisito del Art. 14.1!: 1) Órganos de una misma Administración NO relacionados jerárquicamente, y 2) Procedimiento NO finalizado.",
    justificacion: "El artículo 14.1 de la Ley 40/2015 dispone que los conflictos de atribuciones sólo podrán suscitarse entre órganos de una misma Administración no relacionados jerárquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo."
  },
  {
    id: "Q-W4-020",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "De acuerdo con el artículo 24.2 de la Ley 40/2015 (LRJSP), planteada por un interesado la recusación de una autoridad o empleado público, si el recusado niega la causa de recusación, el superior resolverá en el plazo de:",
    opciones: [
      "Veinticuatro horas.",
      "Tres días, previos los informes y comprobaciones que considere oportunos.",
      "Diez días hábiles.",
      "Un mes."
    ],
    correcta: 1,
    referencia: "Ley 40/2015, Art. 24.2 y 24.4",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Abstención y Recusación (Arts. 23 y 24)",
    consejoAcademia: "Plazos de recusación (Art. 24): Al día siguiente el recusado manifiesta a su superior si se da o no la causa; si la niega, el superior resuelve en 3 DÍAS. Contra esta resolución NO cabe recurso directo.",
    justificacion: "El artículo 24.4 de la Ley 40/2015 establece que si el recusado niega la causa de recusación, el superior resolverá en el plazo de tres días, previos los informes y comprobaciones que considere oportunos."
  },
  {
    id: "Q-W4-021",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T03",
    materia: "Ley 40/2015 LRJSP",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 59.1 de la Ley 40/2015 (LRJSP), ¿mediante qué norma se crean, modifican y suprimen las Subsecretarías, las Secretarías Generales, las Secretarías Generales Técnicas, las Direcciones Generales y las Subdirecciones Generales?",
    opciones: [
      "Mediante Real Decreto del Presidente del Gobierno.",
      "Mediante Real Decreto del Consejo de Ministros, a iniciativa del Ministro o Ministros interesados y a propuesta del Ministro de Hacienda y Función Pública.",
      "Mediante Orden Ministerial de cada Departamento.",
      "Mediante Ley Orgánica de las Cortes Generales."
    ],
    correcta: 1,
    referencia: "Ley 40/2015, Art. 59.1",
    ubicacionTemario: "Bloque 1 > Tema 3 (Vídeo T4) > Creación de Órganos Ministeriales (Arts. 57-59)",
    consejoAcademia: "No confundas: Ministerios y Secretarías de Estado = Real Decreto del Presidente del Gobierno (Art. 57.3). Subsecretarías, SG, SGT, DG y SDG = Real Decreto del Consejo de Ministros (Art. 59.1). Órganos inferiores a SDG = Orden Ministerial (Art. 59.2).",
    justificacion: "El artículo 59.1 de la Ley 40/2015 establece que las Subsecretarías, Secretarías Generales, Secretarías Generales Técnicas, Direcciones Generales y Subdirecciones Generales se crean, modifican y suprimen por Real Decreto del Consejo de Ministros."
  },

  // =========================================================================
  // B1-T04: ESTRUCTURA MINISDEF RD 205/2024 (VÍDEO T5) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-022",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil", "2025/2026"],
    pregunta: "Conforme al Real Decreto 205/2024, ¿de qué órgano superior o directivo del Ministerio de Defensa depende la Dirección General de Asuntos Económicos (DIGENECO)?",
    opciones: [
      "De la Subsecretaría de Defensa (SUBDEF).",
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Del Estado Mayor de la Defensa (EMAD)."
    ],
    correcta: 1,
    referencia: "Real Decreto 205/2024, Art. 4 y 7",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Secretaría de Estado de Defensa (SEDEF)",
    consejoAcademia: "Las 5 Direcciones Generales de SEDEF: DGAM, DIGEID (novedad 2024), DIGENECO, DIGENIN y CESTIC.",
    justificacion: "Según el artículo 4 del Real Decreto 205/2024, la Dirección General de Asuntos Económicos (DIGENECO) depende de la Secretaría de Estado de Defensa (SEDEF)."
  },
  {
    id: "Q-W4-023",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "2025/2026"],
    pregunta: "Según el Real Decreto 205/2024, ¿de qué órgano directivo del Ministerio de Defensa dependen la Dirección General de Personal (DIGENPER) y la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM)?",
    opciones: [
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Subsecretaría de Defensa (SUBDEF).",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Directamente de los Jefes de Estado Mayor de los Ejércitos."
    ],
    correcta: 1,
    referencia: "Real Decreto 205/2024, Art. 10, 12 y 13",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Subsecretaría de Defensa (SUBDEF)",
    consejoAcademia: "En la SUBDEF están las 3 patas de gestión interna: SEGENTE (Técnica), DIGENPER (Personal) y DIGEREM (Reclutamiento y Enseñanza).",
    justificacion: "El artículo 10 del Real Decreto 205/2024 adscribe a la Subsecretaría de Defensa la Secretaría General Técnica, la DIGENPER y la DIGEREM."
  },
  {
    id: "Q-W4-024",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "2025/2026"],
    pregunta: "De acuerdo con el Real Decreto 205/2024, ¿a qué órgano del Ministerio de Defensa está adscrito el Instituto Nacional de Técnica Aeroespacial 'Esteban Terradas' (INTA)?",
    opciones: [
      "Al Cuartel General del Ejército del Aire y del Espacio.",
      "A la Secretaría de Estado de Defensa (SEDEF).",
      "A la Subsecretaría de Defensa (SUBDEF).",
      "A la Secretaría General de Política de Defensa (SEGENPOL)."
    ],
    correcta: 1,
    referencia: "Real Decreto 205/2024, Art. 4",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Organismos Adscritos a SEDEF",
    consejoAcademia: "¡Trampa muy frecuente!: Aunque se llame 'Aeroespacial', el INTA es un Organismo Autónomo adscrito a la SEDEF (mientras que ISFAS e INVIED están adscritos a la SUBDEF).",
    justificacion: "El Real Decreto 205/2024 adscribe el organismo autónomo Instituto Nacional de Técnica Aeroespacial «Esteban Terradas» (INTA) a la Secretaría de Estado de Defensa."
  },
  {
    id: "Q-W4-025",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio", "2025/2026"],
    pregunta: "Según el artículo 14 del Real Decreto 205/2024, ¿de qué órgano dependen la Asesoría Jurídica General de la Defensa, la Intervención General de la Defensa (IGD) y la Inspección General de Sanidad de la Defensa (IGESAN)?",
    opciones: [
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Subsecretaría de Defensa (SUBDEF).",
      "Del Estado Mayor de la Defensa (EMAD).",
      "De la Secretaría General de Política de Defensa (SEGENPOL)."
    ],
    correcta: 1,
    referencia: "Real Decreto 205/2024, Art. 10 y 14-16",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Órganos Dependientes de la SUBDEF",
    consejoAcademia: "Los Cuerpos Comunes (Jurídico, Intervención, Sanidad y Músicas Militares) dependen de la SUBDEF.",
    justificacion: "Conforme al Real Decreto 205/2024, la Asesoría Jurídica General de la Defensa, la Intervención General de la Defensa y la Inspección General de Sanidad de la Defensa dependen de la Subsecretaría de Defensa."
  },
  {
    id: "Q-W4-026",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "2025/2026"],
    pregunta: "Conforme al artículo 17 del Real Decreto 205/2024, la División de Coordinación y Estudios de Seguridad y Defensa (DICOES) y las Agregadurías de Defensa en las misiones diplomáticas dependen de:",
    opciones: [
      "La Secretaría General de Política de Defensa (SEGENPOL).",
      "La Subsecretaría de Defensa (SUBDEF).",
      "La Secretaría de Estado de Defensa (SEDEF).",
      "La Dirección de Comunicación Institucional de la Defensa (DIRCOMDEF)."
    ],
    correcta: 0,
    referencia: "Real Decreto 205/2024, Art. 17 y 18",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Secretaría General de Política de Defensa (SEGENPOL)",
    consejoAcademia: "Todo lo internacional/diplomático y cultura de defensa (DIGENPOL, DICOES, Agregadurías de Defensa, Comisión Española de Historia Militar) cuelga de SEGENPOL.",
    justificacion: "Según el artículo 17 del Real Decreto 205/2024, de la Secretaría General de Política de Defensa dependen la DIGENPOL, la DICOES y las Agregadurías de Defensa."
  },
  {
    id: "Q-W4-027",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "rebuscada",
    esExamenOficial: false,
    etiquetas: ["Rebuscada", "2025/2026"],
    pregunta: "Según el Real Decreto 205/2024, ¿de quién depende orgánicamente el Tribunal Militar Central y los Tribunales Militares Territoriales en lo relativo a medios personales y materiales (gobierno interno administrativo), sin perjuicio de su independencia jurisdiccional?",
    opciones: [
      "De la Secretaría de Estado de Defensa.",
      "Están adscritos orgánicamente a la Subsecretaría de Defensa.",
      "De la Secretaría General de Política de Defensa.",
      "Del Mando de Apoyo Logístico del Ejército de Tierra."
    ],
    correcta: 1,
    referencia: "Real Decreto 205/2024, Art. 10",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Subsecretaría de Defensa",
    consejoAcademia: "Los órganos de la jurisdicción militar están adscritos orgánicamente a la SUBDEF a efectos de provisión de medios, manteniendo plena independencia judicial.",
    justificacion: "El artículo 10 del Real Decreto 205/2024 señala que los órganos de la jurisdicción militar están adscritos orgánicamente a la Subsecretaría de Defensa, sin perjuicio de que ejerzan su función jurisdiccional con plena independencia."
  },
  {
    id: "Q-W4-028",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T04",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa", "2025/2026"],
    pregunta: "Según el artículo 2 del Real Decreto 205/2024, ¿qué rango orgánico tiene el titular de la Secretaría General de Política de Defensa (SEGENPOL)?",
    opciones: [
      "Rango de Secretario de Estado.",
      "Rango de Subsecretario.",
      "Rango de Director General.",
      "Rango de Subdirector General."
    ],
    correcta: 1,
    referencia: "Real Decreto 205/2024, Art. 17 y Ley 40/2015, Art. 64",
    ubicacionTemario: "Bloque 1 > Tema 4 (Vídeo T5) > Órganos Directivos del MINISDEF",
    consejoAcademia: "¡Regla general de la Ley 40/2015 (Art. 64) y del RD 205/2024!: Los Secretarios Generales tienen categoría/rango de SUBSECRETARIO.",
    justificacion: "Conforme a la Ley 40/2015 y al Real Decreto 205/2024, la Secretaría General de Política de Defensa es un órgano directivo cuyo titular tiene rango de Subsecretario."
  },

  // =========================================================================
  // B1-T05: ORGANIZACIÓN BÁSICA FAS RD 521/2020 (VÍDEO T6) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-029",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 4 del Real Decreto 521/2020, por el que se establece la organización básica de las Fuerzas Armadas, las Fuerzas Armadas se organizan en dos estructuras:",
    opciones: [
      "Una estructura territorial y una estructura expedicionaria.",
      "Una estructura orgánica, para la preparación de la Fuerza, y una estructura operativa, para su empleo en las misiones que se le asignen.",
      "Una estructura civil y una estructura militar.",
      "Una estructura táctica y una estructura logística."
    ],
    correcta: 1,
    referencia: "Real Decreto 521/2020, Art. 4",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Estructuras Orgánica y Operativa (Art. 4)",
    consejoAcademia: "Orgánica = Preparación de la Fuerza (JEME, AJEMA, JEMA). Operativa = Empleo de la Fuerza en misiones (JEMAD).",
    justificacion: "El artículo 4 del Real Decreto 521/2020 establece que las Fuerzas Armadas se organizan en una estructura orgánica, para la preparación de la Fuerza, y una estructura operativa, para su empleo en las misiones que se le asignen."
  },
  {
    id: "Q-W4-030",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al Real Decreto 521/2020, el paso de unidades de la Fuerza de los Ejércitos y la Armada de la estructura orgánica a la estructura operativa para el cumplimiento de las misiones asignadas se denomina:",
    opciones: [
      "Adscripción funcional permanente.",
      "Transferencia de autoridad.",
      "Encomienda de gestión táctica.",
      "Reasignación orgánica."
    ],
    correcta: 1,
    referencia: "Real Decreto 521/2020, Art. 4 y 14",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Generación y Transferencia de Fuerza",
    consejoAcademia: "Concepto estrella de examen: Las unidades pasan de la estructura orgánica (Ejércitos) a la operativa (JEMAD) mediante la TRANSFERENCIA DE AUTORIDAD (TOA).",
    justificacion: "El Real Decreto 521/2020 regula la generación y transferencia de autoridad de las capacidades militares desde la estructura orgánica de los Ejércitos y la Armada hacia la estructura operativa bajo mando del JEMAD."
  },
  {
    id: "Q-W4-031",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 17 del Real Decreto 521/2020, cada uno de los Ejércitos y la Armada está compuesto por tres grandes componentes orgánicos:",
    opciones: [
      "El Cuartel General, la Fuerza y el Apoyo a la Fuerza.",
      "El Estado Mayor, la Reserva y la Guardia de Honor.",
      "El Mando Operativo, el Mando Logístico y el Mando de Personal.",
      "La División, la Brigada y el Regimiento."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 17",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Estructura Orgánica de los Ejércitos (Art. 17)",
    consejoAcademia: "Los 3 pilares de todo Ejército (ET, Armada y EA): 1) Cuartel General, 2) La Fuerza y 3) El Apoyo a la Fuerza.",
    justificacion: "El artículo 17 del Real Decreto 521/2020 dispone que el Ejército de Tierra, la Armada y el Ejército del Aire y del Espacio están compuestos por el Cuartel General, la Fuerza y el Apoyo a la Fuerza."
  },
  {
    id: "Q-W4-032",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 12 del Real Decreto 521/2020, ¿cuáles son los cinco Mandos Operativos Permanentes subordinados al JEMAD dentro de la estructura operativa de las Fuerzas Armadas?",
    opciones: [
      "Mando Operativo Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Espacial (MOESPA) y Ciberespacial (MOC).",
      "Mando de Operaciones (MOPS), Mando de Personal, Mando Logístico, UME y Guardia Real.",
      "FUTER, FLOAN, MACOM, UME y CIFAS.",
      "Mando Norte, Mando Sur, Mando Canario, Mando Balear y Mando Pirenaico."
    ],
    correcta: 0,
    referencia: "Real Decreto 521/2020, Art. 12",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Mandos Operativos Permanentes (Art. 12)",
    consejoAcademia: "Los 5 Mandos Operativos Permanentes cubren los 5 dominios: MOT (Tierra), MOM (Mar), MOA (Aire), MOESPA (Espacio) y MOC (Ciberespacio).",
    justificacion: "El artículo 12 del Real Decreto 521/2020 enumera los Mandos Operativos subordinados al JEMAD: Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Espacial (MOESPA) y Ciberespacial (MOC)."
  },
  {
    id: "Q-W4-033",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 20 del Real Decreto 521/2020, dentro de cada Ejército y la Armada, el conjunto de órganos responsables de la dirección, gestión, administración y control de los recursos humanos, materiales y financieros asignados a cada uno de ellos constituye:",
    opciones: [
      "La Fuerza.",
      "El Apoyo a la Fuerza.",
      "El Cuartel General.",
      "La Estructura Operativa."
    ],
    correcta: 1,
    referencia: "Real Decreto 521/2020, Art. 20",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > El Apoyo a la Fuerza (Art. 20)",
    consejoAcademia: "La Fuerza (Art. 19) tiene por cometido principal prepararse para realizar operaciones militares. El Apoyo a la Fuerza (Art. 20) gestiona los recursos humanos (MAPER), materiales/logísticos (MALE) y financieros (DIAE).",
    justificacion: "El artículo 20 del Real Decreto 521/2020 define el Apoyo a la Fuerza como el conjunto de órganos responsables de la dirección, gestión, administración y control de los recursos humanos, materiales y financieros."
  },
  {
    id: "Q-W4-034",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Conforme al artículo 12 del Real Decreto 521/2020, ¿quién nombra a los Comandantes de los Mandos Operativos Permanentes (CMOT, CMOM, CMOA, CMOESPA y CMOC)?",
    opciones: [
      "El Rey mediante Real Decreto acordado en Consejo de Ministros.",
      "La persona titular del Ministerio de Defensa, a propuesta del JEMAD.",
      "El propio JEMAD sin intervención del Ministro de Defensa.",
      "El Congreso de los Diputados."
    ],
    correcta: 1,
    referencia: "Real Decreto 521/2020, Art. 12.2",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Mandos Operativos (Art. 12.2)",
    consejoAcademia: "Los Comandantes de los Mandos Operativos son nombrados por el MINISTRO DE DEFENSA a propuesta del JEMAD (oídos los JEME/AJEMA/JEMA respectivos cuando recaen en mandos de su estructura).",
    justificacion: "El artículo 12.2 del Real Decreto 521/2020 establece que los Comandantes de los Mandos Operativos serán nombrados por la persona titular del Ministerio de Defensa, a propuesta del JEMAD."
  },
  {
    id: "Q-W4-035",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T05",
    materia: "RD 521/2020 Org. Básica FAS",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 6 del Real Decreto 521/2020, ¿qué autoridad ostenta la representación institucional de las Fuerzas Armadas, especialmente en el ámbito internacional?",
    opciones: [
      "El Secretario General de Política de Defensa (SEGENPOL).",
      "El Jefe de Estado Mayor de la Defensa (JEMAD).",
      "El Subsecretario de Defensa.",
      "El Jefe de Estado Mayor del Ejército de Tierra."
    ],
    correcta: 1,
    referencia: "Real Decreto 521/2020, Art. 6.2.a",
    ubicacionTemario: "Bloque 1 > Tema 5 (Vídeo T6) > Competencias del JEMAD (Art. 6)",
    consejoAcademia: "El JEMAD ostenta la representación institucional de las FAS, mientras que cada JEME/AJEMA/JEMA ostenta la representación institucional de su respectivo Ejército o Armada.",
    justificacion: "El artículo 6.2.a) del Real Decreto 521/2020 atribuye al JEMAD la representación institucional de las Fuerzas Armadas."
  },

  // =========================================================================
  // B1-T06: EMAD, ET, ARMADA Y EA (VÍDEOS T7, T8, T9 y T10) — 10 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-036",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD (Orden DEF/710/2020 - Vídeo T7)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según la Orden DEF/710/2020, por la que se desarrolla la organización básica del Estado Mayor de la Defensa (Vídeo T7), ¿cuáles son las Divisiones en que se articula el Estado Mayor Conjunto de la Defensa (EMACON)?",
    opciones: [
      "Secretaría General del EMACON (SEGEMACON), División de Planes (DIVPLA), División de Estrategia (DIVESTRA) y División de Desarrollo de la Fuerza (DIVDEF).",
      "División de Operaciones, División de Logística y División de Inteligencia.",
      "MOPS, CIFAS, MCCE y CESEDEN.",
      "División Terrestre, División Naval y División Aérea."
    ],
    correcta: 0,
    referencia: "Orden DEF/710/2020, Art. 4",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T7: EMAD) > Estado Mayor Conjunto (EMACON)",
    consejoAcademia: "Pregunta fija del Vídeo T7 (EMAD): El EMACON tiene una Secretaría General (SEGEMACON) y 3 Divisiones: DIVPLA (Planes), DIVESTRA (Estrategia) y DIVDEF (Desarrollo de la Fuerza).",
    justificacion: "El artículo 4 de la Orden DEF/710/2020 articula el EMACON en la Secretaría General del Estado Mayor Conjunto (SEGEMACON), la División de Planes (DIVPLA), la División de Estrategia (DIVESTRA) y la División de Desarrollo de la Fuerza (DIVDEF)."
  },
  {
    id: "Q-W4-037",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "EMAD (Orden DEF/710/2020 - Vídeo T7)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Conforme a la Orden DEF/710/2020 (Vídeo T7: EMAD), ¿cuál es el órgano del Estado Mayor de la Defensa responsable de facilitar al Ministro de Defensa y al JEMAD la inteligencia militar necesaria para alertar sobre situaciones de crisis y apoyar las operaciones?",
    opciones: [
      "El Centro Nacional de Inteligencia (CNI).",
      "El Centro de Inteligencia de las Fuerzas Armadas (CIFAS), integrado en el Cuartel General del EMAD.",
      "El Mando Conjunto del Ciberespacio (MCCE).",
      "El Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC)."
    ],
    correcta: 1,
    referencia: "Orden DEF/710/2020, Art. 5 y RD 521/2020, Art. 10",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T7: EMAD) > CIFAS",
    consejoAcademia: "¡No confundas el CNI (inteligencia estratégica nacional) con el CIFAS (inteligencia militar conjunta dentro del Cuartel General del EMAD)!",
    justificacion: "El CIFAS forma parte del Cuartel General del Estado Mayor de la Defensa y es el órgano responsable de facilitar al Ministro de Defensa y al JEMAD la inteligencia militar necesaria para alertar sobre posibles situaciones de crisis y apoyar las operaciones."
  },
  {
    id: "Q-W4-038",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Ejército de Tierra (Inst. 14/2021 - Vídeo T8)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8: Ejército de Tierra), ¿en qué Divisiones se articula el Estado Mayor del Ejército de Tierra (EME)?",
    opciones: [
      "Secretaría General del EME (SEGENEME), División de Planes (DIVPLA), División de Operaciones (DIVOPE) y División de Logística (DIVLOG).",
      "División Castillejos y División San Marcial.",
      "Mando de Personal, Mando de Apoyo Logístico y MADOC.",
      "DIACU, DIPE, DIASPER y DISAN."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Apartado Quinto",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > Estado Mayor del ET (EME)",
    consejoAcademia: "¡Compara con el EMACON!: En el EME del Ejército de Tierra (y también en EMA y EMA de Armada/EA) las 3 Divisiones clásicas son: DIVPLA (Planes), DIVOPE (Operaciones) y DIVLOG (Logística), más su Secretaría General (SEGENEME).",
    justificacion: "La Instrucción 14/2021 estructura el Estado Mayor del Ejército (EME) en la Secretaría General del Estado Mayor del Ejército (SEGENEME), la División de Planes (DIVPLA), la División de Operaciones (DIVOPE) y la División de Logística (DIVLOG)."
  },
  {
    id: "Q-W4-039",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Ejército de Tierra (Inst. 14/2021 - Vídeo T8)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme a la Instrucción 14/2021 del JEME (Vídeo T8: Ejército de Tierra), dentro de la Fuerza Terrestre (FUTER), ¿de qué gran unidad depende orgánicamente la Brigada 'Rey Alfonso XIII' II de La Legión y las Brigadas 'Aragón' I, 'Guzmán el Bueno' X, 'Extremadura' XI, 'Guadarrama' XII y 'Galicia' VII?",
    opciones: [
      "De la División 'San Marcial'.",
      "De la División 'Castillejos'.",
      "Del Mando de Canarias del Ejército de Tierra (MCANA).",
      "Del Mando de Apoyo a la Maniobra (MAM)."
    ],
    correcta: 1,
    referencia: "Instrucción 14/2021 del JEME, Fuerza Terrestre (FUTER)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > FUTER: División Castillejos vs San Marcial",
    consejoAcademia: "¡Truco infalible del Vídeo T8!: División CASTILLEJOS = las 6 Brigadas de Combate (I Aragón, II Legión, VII Brilat, X, XI y XII). División SAN MARCIAL = Tropas de Montaña, BRIPAC VI, FAMET, MOE y Regimiento de Operaciones de Información.",
    justificacion: "En la Fuerza Terrestre (FUTER), la División «Castillejos» encuadra las seis Brigadas de Combate polivalentes (Aragón I, Legión II, Galicia VII, Guzmán el Bueno X, Extremadura XI y Guadarrama XII)."
  },
  {
    id: "Q-W4-040",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Ejército de Tierra (Inst. 14/2021 - Vídeo T8)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8: Ejército de Tierra), ¿en qué gran unidad de la Fuerza Terrestre (FUTER) se encuadran la Brigada 'Almogávares' VI de Paracaidistas (BRIPAC), el Mando de Operaciones Especiales (MOE), las Fuerzas Aeromóviles del ET (FAMET) y el Mando de Tropas de Montaña (MTM)?",
    opciones: [
      "En la División 'San Marcial'.",
      "En la División 'Castillejos'.",
      "En el Mando de Apoyo a la Maniobra (MAM).",
      "En el Cuartel General Terrestre de Alta Disponibilidad (CGTAD)."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Fuerza Terrestre (FUTER)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > FUTER: División San Marcial",
    consejoAcademia: "División SAN MARCIAL (sede en Burgos) agrupa las unidades de respuesta específica/disponibilidad: BRIPAC VI, MOE, FAMET, Mando de Tropas de Montaña (MTM) y ROI.",
    justificacion: "Según la Instrucción 14/2021, la División «San Marcial» encuadra la Brigada «Almogávares» VI de Paracaidistas, el Mando de Tropas de Montaña, las FAMET, el Mando de Operaciones Especiales y el Regimiento de Operaciones de Información."
  },
  {
    id: "Q-W4-041",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Ejército de Tierra (Inst. 14/2021 - Vídeo T8)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con la Instrucción 14/2021 del JEME (Vídeo T8: Ejército de Tierra), ¿qué unidades dependen del Mando de Canarias del Ejército de Tierra (MCANA), encuadrado en La Fuerza del ET?",
    opciones: [
      "La Brigada 'Canarias' XVI, la Comandancia General de Baleares (COMGEBAL), la Comandancia General de Ceuta (COMGECEU) y la Comandancia General de Melilla (COMGEMEL).",
      "Únicamente la Brigada 'Canarias' XVI y el Mando Aéreo de Canarias.",
      "La División 'Castillejos' y el Mando de Artillería de Costa.",
      "La Flota de Acción Marítima de Canarias."
    ],
    correcta: 0,
    referencia: "Instrucción 14/2021 del JEME, Mando de Canarias (MCANA)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > Mando de Canarias (MCANA)",
    consejoAcademia: "¡Pregunta muy repetida en Tierra!: Del MCANA dependen la Brigada Canarias XVI + las 3 Comandancias Generales extrapeninsulares: Baleares (COMGEBAL), Ceuta (COMGECEU) y Melilla (COMGEMEL), además del Regimiento de Guerra Electrónica 32 y BHELMA VI.",
    justificacion: "La Instrucción 14/2021 establece que del Mando de Canarias (MCANA) dependen la Brigada «Canarias» XVI y las Comandancias Generales de Baleares, de Ceuta y de Melilla."
  },
  {
    id: "Q-W4-042",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Ejército de Tierra (Inst. 14/2021 - Vídeo T8)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Según la Instrucción 14/2021 del JEME (Vídeo T8: Ejército de Tierra), ¿cuáles son las cuatro Direcciones que integran el Mando de Personal (MAPER) dentro del Apoyo a la Fuerza del Ejército de Tierra?",
    opciones: [
      "Dirección de Adquisiciones, Dirección de Integración de Funciones Logísticas, Dirección de Enseñanza y Dirección de Acuartelamiento.",
      "Dirección de Personal (DIPE), Dirección de Asistencia al Personal (DIASPER), Dirección de Sanidad (DISAN) y Dirección de Acuartelamiento (DIACU).",
      "Dirección de Investigación, Doctrina, Orgánica y Materiales (DIDOM) y Dirección de Enseñanza (DIEN).",
      "DIGENPER, DIGEREM, ISFAS e INVIED."
    ],
    correcta: 1,
    referencia: "Instrucción 14/2021 del JEME, Mando de Personal (MAPER)",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T8: Ejército de Tierra) > Apoyo a la Fuerza: MAPER, MALE, MADOC, DIAE",
    consejoAcademia: "Apoyo a la Fuerza del ET: MAPER = DIPE + DIASPER + DISAN + DIACU (con las SUIGEs). MALE = DINFL + DAD. MADOC = DIEN + DIDOM.",
    justificacion: "Conforme a la Instrucción 14/2021, el Mando de Personal (MAPER) del Ejército de Tierra se articula en la Dirección de Personal (DIPE), la Dirección de Asistencia al Personal (DIASPER), la Dirección de Sanidad (DISAN) y la Dirección de Acuartelamiento (DIACU)."
  },
  {
    id: "Q-W4-043",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Armada (Inst. 15/2021 - Vídeo T9)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según la Instrucción 15/2021 del AJEMA (Vídeo T9: Organización de la Armada), ¿cuáles son los elementos principales que integran La Fuerza de la Armada (la Flota), bajo el mando del Almirante de la Flota (ALFLOT)?",
    opciones: [
      "La Fuerza de Acción Naval (FAN), la Fuerza de Acción Marítima (FAM), la Fuerza de Infantería de Marina (FIM) y la Flotilla de Aeronaves (FLOAN).",
      "El Arsenal de Ferrol, el Arsenal de Cartagena y el Arsenal de Cádiz.",
      "La Jefatura de Personal (JEPER) y la Jefatura de Apoyo Logístico (JAL).",
      "El Instituto Hidrográfico de la Marina y el Real Observatorio de la Armada."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA, La Flota",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T9: Armada) > La Fuerza: La Flota (ALFLOT)",
    consejoAcademia: "En la Armada (Vídeo T9): La Fuerza es LA FLOTA (mandada por ALFLOT) y tiene 4 patas operativas: FAN (Acción Naval), FAM (Acción Marítima), FIM (Infantería de Marina: TEAR, FUPRO y FGNE) y FLOAN (Flotilla de Aeronaves), además del Cuartel General Marítimo de Alta Disponibilidad y la Flotilla de Submarinos.",
    justificacion: "La Instrucción 15/2021 del AJEMA estructura La Fuerza de la Armada en la Flota (ALFLOT), que integra la Fuerza de Acción Naval, la Fuerza de Acción Marítima, la Fuerza de Infantería de Marina y la Flotilla de Aeronaves."
  },
  {
    id: "Q-W4-044",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Armada (Inst. 15/2021 - Vídeo T9)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Conforme a la Instrucción 15/2021 del AJEMA (Vídeo T9: Armada), ¿cuáles son las tres grandes unidades que componen la Fuerza de Infantería de Marina (FIM)?",
    opciones: [
      "El Tercio de Armada (TEAR, que incluye la Brigada de Infantería de Marina 'Tercio de Armada' BRIMAR), la Fuerza de Protección de la Armada (FUPRO) y la Fuerza de Guerra Naval Especial (FGNE).",
      "La Legión, la BRIPAC y el MOE.",
      "El Escuadrón de Zapadores Paracaidistas (EZAPAC) y el EADA.",
      "Únicamente los Tercios del Norte, Sur y Levante."
    ],
    correcta: 0,
    referencia: "Instrucción 15/2021 del AJEMA, Fuerza de Infantería de Marina",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T9: Armada) > Fuerza de Infantería de Marina (FIM)",
    consejoAcademia: "Las 3 patas de la Infantería de Marina (FIM): 1) TEAR (con la BRIMAR), 2) FUPRO (Tercio Norte, Sur, Levante, USCAN y AGRUMAD) y 3) FGNE (Guerra Naval Especial).",
    justificacion: "Según la Instrucción 15/2021 del AJEMA, la Fuerza de Infantería de Marina (FIM) está constituida por el Tercio de Armada (TEAR), la Fuerza de Protección (FUPRO) y la Fuerza de Guerra Naval Especial (FGNE)."
  },
  {
    id: "Q-W4-045",
    bloque: "Bloque 1: Organización",
    temaCodigo: "B1-T06",
    materia: "Ejército del Aire y del Espacio (Inst. 6/2025 - Vídeo T10)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "2025/2026"],
    pregunta: "Según la Instrucción 6/2025 del JEMA (Vídeo T10: Ejército del Aire y del Espacio), ¿cuáles son los tres Mandos que integran La Fuerza del Ejército del Aire y del Espacio?",
    opciones: [
      "El Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN) y el Mando Aéreo de Canarias (MACAN), además del Mando del Espacio (MESPA).",
      "El Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALOG) y la Dirección de Asuntos Económicos (DAE).",
      "El Mando Aéreo del Estrecho, el Mando Aéreo de Levante y el Mando Aéreo Pirenaico.",
      "La Flotilla de Aeronaves y las FAMET."
    ],
    correcta: 0,
    referencia: "Instrucción 6/2025 del JEMA, La Fuerza del EA",
    ubicacionTemario: "Bloque 1 > Tema 6 (Vídeo T10: Ejército del Aire y del Espacio) > La Fuerza del EA",
    consejoAcademia: "¡Actualización estrella Vídeo T10 (Inst. 6/2025)!: En la Fuerza del EA están MACOM, MAGEN, MACAN y el nuevo MANDO DEL ESPACIO (MESPA). Y en el Apoyo a la Fuerza del EA están MAPER, MALOG y DAE.",
    justificacion: "La organización de la Fuerza del Ejército del Aire y del Espacio comprende el Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MESPA)."
  },

  // =========================================================================
  // B2-T01: CARRERA MILITAR Y TROPA (VÍDEOS T11 y T12) — 9 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-046",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar (Vídeo T11)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 20 de la Ley 39/2007, de la carrera militar (Vídeo T11), los militares profesionales se agrupan en las siguientes categorías:",
    opciones: [
      "Oficiales Generales, Oficiales, Suboficiales y Tropa y Marinería.",
      "Militares de Carrera, Militares de Complemento y Reservistas.",
      "Cuerpos Generales, Cuerpos de Intendencia y Cuerpos Comunes.",
      "Mando, Administración y Apoyo Técnico."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 20",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007) > Categorías y Empleos Militares (Art. 20)",
    consejoAcademia: "¡No confundas la vinculación profesional (Carrera, Complemento, Tropa y Marinería, Art. 3) con las 4 CATEGORÍAS militares (Oficiales Generales, Oficiales, Suboficiales y Tropa y Marinería, Art. 20)!",
    justificacion: "El artículo 20 de la Ley 39/2007 establece que los militares profesionales se agrupan en las categorías de Oficiales Generales, Oficiales, Suboficiales y Tropa y Marinería."
  },
  {
    id: "Q-W4-047",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar (Vídeo T11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 26 de la Ley 39/2007, de la carrera militar (Vídeo T11), ¿cuáles son los cuatro Cuerpos Comunes de las Fuerzas Armadas?",
    opciones: [
      "Cuerpo Jurídico Militar, Cuerpo Militar de Intervención, Cuerpo Militar de Sanidad y Cuerpo de Músicas Militares.",
      "Cuerpo General, Cuerpo de Intendencia, Cuerpo de Ingenieros Politécnicos y Cuerpo de Especialistas.",
      "Cuerpo de Estado Mayor, Cuerpo Eclesiástico, Cuerpo de Farmacia y Cuerpo de Veterinaria.",
      "Cuerpo de Guardia Real, Cuerpo de la UME y Cuerpo de Reservistas."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 26",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007) > Cuerpos Comunes de las FAS (Art. 26)",
    consejoAcademia: "¡Ojo con la trampa!: Intendencia e Ingenieros NO son Cuerpos Comunes (son cuerpos específicos de cada Ejército/Armada). Los 4 Cuerpos Comunes son: Jurídico, Intervención, Sanidad y Músicas Militares.",
    justificacion: "El artículo 26 de la Ley 39/2007 enumera los cuatro Cuerpos Comunes de las Fuerzas Armadas: Cuerpo Jurídico Militar, Cuerpo Militar de Intervención, Cuerpo Militar de Sanidad y Cuerpo de Músicas Militares."
  },
  {
    id: "Q-W4-048",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar (Vídeo T11)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 89 de la Ley 39/2007, de la carrera militar (Vídeo T11), ¿cuáles son los cuatro sistemas de ascenso en las Fuerzas Armadas?",
    opciones: [
      "Antigüedad, concurso-oposición, elección y clasificación.",
      "Libre designación, sorteo, antigüedad y mérito de guerra.",
      "Oposición libre, promoción interna, comisión de servicio y reserva.",
      "Evaluación anual, trienal, quinquenal y extraordinaria."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 89",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007) > Régimen de Ascensos (Art. 89)",
    consejoAcademia: "Recuerda a qué empleos de Tropa se asciende por cada sistema (Art. 90): A Cabo y a Cabo 1º = Concurso-oposición; a Cabo Mayor = ELECCIÓN.",
    justificacion: "El artículo 89.1 de la Ley 39/2007 establece que los sistemas de ascenso son: antigüedad, concurso-oposición, elección y clasificación."
  },
  {
    id: "Q-W4-049",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar (Vídeo T11)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "De acuerdo con el artículo 101 de la Ley 39/2007 (Vídeo T11), los destinos en las Fuerzas Armadas, según su forma de asignación, se clasifican en:",
    opciones: [
      "Destinos de libre designación, de concurso de méritos y de provisión por antigüedad.",
      "Destinos voluntarios, forzosos y en comisión de servicio.",
      "Destinos operativos, logísticos y administrativos.",
      "Destinos nacionales y destinos internacionales."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 101.1",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007) > Provisión de Destinos (Art. 101)",
    consejoAcademia: "¡Cuidado!: Voluntario o forzoso es el carácter con que se cubre la vacante (Art. 101.3), pero la clasificación de los destinos por su forma de asignación (Art. 101.1) es: 1) Libre designación, 2) Concurso de méritos y 3) Provisión por antigüedad.",
    justificacion: "El artículo 101.1 de la Ley 39/2007 clasifica los destinos, según su forma de asignación, en destinos de libre designación, de concurso de méritos y de provisión por antigüedad."
  },
  {
    id: "Q-W4-050",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 39/2007 Carrera Militar (Vídeo T11)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 107 de la Ley 39/2007 (Vídeo T11), ¿cuáles son las situaciones administrativas en que pueden hallarse los militares profesionales?",
    opciones: [
      "Servicio activo, servicios especiales, excedencia, suspensión de funciones, suspensión de empleo y reserva.",
      "Disponible, destinado, en comisión de servicio y retirado.",
      "Baja temporal, licencia por asuntos propios y jubilación.",
      "Compromiso inicial, compromiso de larga duración y permanencia."
    ],
    correcta: 0,
    referencia: "Ley 39/2007, Art. 107",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T11: Ley 39/2007) > Situaciones Administrativas (Art. 107)",
    consejoAcademia: "¡Trampa habitual!: El RETIRO (Art. 114) NO es una situación administrativa (es la extinción de la relación de servicios profesionales). Las 6 situaciones administrativas son: Servicio activo, Servicios especiales, Excedencia, Suspensión de funciones, Suspensión de empleo y Reserva.",
    justificacion: "El artículo 107 de la Ley 39/2007 enumera las seis situaciones administrativas: servicio activo, servicios especiales, excedencia, suspensión de funciones, suspensión de empleo y reserva."
  },
  {
    id: "Q-W4-051",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 Tropa y Marinería (Vídeo T12)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 16 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), a los militares profesionales de tropa y marinería que lleven más de 8 años de servicios efectivos se les reservará al menos un porcentaje de las plazas convocadas para el ingreso en la Escala de Guardias Cabos y Guardias de la Guardia Civil de:",
    opciones: [
      "El 20 por ciento.",
      "El 40 por ciento (con al menos 5 años de servicios efectivos).",
      "El 80 por ciento.",
      "El 10 por ciento."
    ],
    correcta: 1,
    referencia: "Ley 8/2006, Art. 20.4",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006) > Salidas Profesionales: Guardia Civil y CNP (Arts. 20-21)",
    consejoAcademia: "Cifras clave de reserva de plazas en la Ley 8/2006 (>5 años de servicio): Guardia Civil = mínimo 40% (Art. 20.4); Policía Nacional Escala Básica = hasta un 20% (Art. 20.5); Promoción interna a Suboficiales = al menos el 80% de las plazas (Art. 15).",
    justificacion: "El artículo 20.4 de la Ley 8/2006 establece una reserva de un mínimo del 40 por ciento de las plazas de ingreso en la Escala de Cabos y Guardias de la Guardia Civil para militares profesionales de tropa y marinería que lleven al menos 5 años de servicios."
  },
  {
    id: "Q-W4-052",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Ley 8/2006 Tropa y Marinería (Vídeo T12)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 10.2 de la Ley 8/2006, de Tropa y Marinería (Vídeo T12), ¿cuál de las siguientes es una causa de resolución expresa del compromiso de larga duración con derecho a percibir la prima por servicios prestados y acceso a la condición de Reservista de Especial Disponibilidad (si se cumplen 18 años de servicio)?",
    opciones: [
      "El cumplimiento de la edad de 45 años.",
      "La imposición de pena principal o accesoria de pérdida de empleo.",
      "La insuficiencia de facultades profesionales.",
      "La renuncia voluntaria con un año de servicio."
    ],
    correcta: 0,
    referencia: "Ley 8/2006, Art. 9, 10 y 17",
    ubicacionTemario: "Bloque 2 > Tema 1 (Vídeo T12: Ley 8/2006) > Finalización del CLD a los 45 años y RED",
    consejoAcademia: "El CLD se suscribe hasta los 45 años (Art. 9). Al cumplir los 45 años con al menos 18 años de servicio, se adquiere a petición propia la condición de Reservista de Especial Disponibilidad (RED) hasta los 65 años (Art. 17).",
    justificacion: "Conforme a los artículos 9 y 17 de la Ley 8/2006, el compromiso de larga duración finaliza al cumplir el interesado 45 años de edad, pudiendo adquirir la condición de reservista de especial disponibilidad si cuenta con al menos 18 años de servicios."
  },
  {
    id: "Q-W4-053",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Orden DEF/1341/2017 y Orden DEF/15/2026",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "2025/2026"],
    pregunta: "Según el artículo 6 de la Orden DEF/1341/2017, por la que se aprueban las normas de las fases selectivas de acceso a una relación de servicios de carácter permanente, la calificación final del proceso selectivo (concurso-oposición) se obtendrá de la suma de las puntuaciones de concurso (máx. 100) y oposición (máx. 100). En caso de empate en la puntuación final, ¿cuál es el PRIMER criterio de desempate?",
    opciones: [
      "La mayor nota obtenida en la prueba de conocimientos (oposición).",
      "La mayor calificación obtenida en el correspondiente concurso; de persistir, el de mayor empleo y antigüedad en el mismo.",
      "El sorteo público directo.",
      "La menor edad del aspirante."
    ],
    correcta: 1,
    referencia: "Orden DEF/1341/2017, Art. 6.4 (BOE-A-2018-585)",
    ubicacionTemario: "Bloque 2 > Tema 1 > Normas del Proceso Selectivo a la Permanencia (Orden DEF/1341/2017)",
    consejoAcademia: "¡Orden exacto de desempate en Permanencia (Art. 6.4 Orden DEF/1341/2017)!: 1º Mayor calificación en el CONCURSO; 2º Mayor empleo y antigüedad; 3º Mayor número de convocatorias consumidas; 4º Mayor edad; 5º Sorteo.",
    justificacion: "El artículo 6.4 de la Orden DEF/1341/2017 establece que en caso de igualdad en la puntuación final se recurrirá a la mayor calificación obtenida en el concurso; de persistir, precederá el de mayor empleo y antigüedad; luego quien haya consumido mayor número de convocatorias, luego el de mayor edad y finalmente el sorteo."
  },
  {
    id: "Q-W4-054",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T01",
    materia: "Orden DEF/15/2026 Pruebas Físicas Unificadas",
    dificultad: "media",
    esExamenOficial: false,
    etiquetas: ["Importante", "Nivel Medio", "2025/2026"],
    pregunta: "De acuerdo con el artículo 10 de la nueva Orden DEF/15/2026, de 13 de enero (BOE-A-2026-1379), sobre pruebas físicas de evaluación periódica y acceso a la permanencia, ¿con qué periodicidad máxima deberán realizar las pruebas físicas los militares de carrera y los de tropa y marinería, y qué vigencia máxima tienen antes del acceso a la permanencia?",
    opciones: [
      "Periodicidad máxima de dos años, y para la firma de nuevo compromiso o acceso a la permanencia una antelación y validez no superior a doce meses.",
      "Periodicidad máxima de cinco años sin límite previo para la permanencia.",
      "Periodicidad mensual obligatoria.",
      "Solo se realizan una vez al ingresar en el centro de formación."
    ],
    correcta: 0,
    referencia: "Orden DEF/15/2026, Art. 10.2 y 10.4 (BOE-A-2026-1379)",
    ubicacionTemario: "Bloque 2 > Tema 1 > Actualización 2026: Orden DEF/15/2026 Pruebas Físicas",
    consejoAcademia: "¡Novedad BOE enero 2026 (Orden DEF/15/2026, Art. 10.4)!: Periodicidad general máxima = 2 años; validez previa obligatoria para nuevo compromiso o acceso a la permanencia = no superior a 12 MESES. Además, el tiempo mínimo de práctica físico-deportiva en la unidad es de 3 horas semanales dentro de la jornada laboral (Art. 19.1).",
    justificacion: "El artículo 10.4 de la Orden DEF/15/2026 dispone que los militares de tropa y marinería realizarán las pruebas con una periodicidad máxima de dos años y, con carácter previo y obligatorio antes de la firma de un nuevo compromiso o al acceso a la permanencia, con una validez no superior a doce meses."
  },

  // =========================================================================
  // B2-T02: REALES ORDENANZAS RD 96/2009 (VÍDEO T13) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-055",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 14 de las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009), el militar cuyo propio honor y espíritu no le estimulen a obrar siempre bien:",
    opciones: [
      "Valdrá muy poco para el servicio.",
      "Deberá ser destinado exclusivamente a tareas administrativas.",
      "Recibirá formación complementaria cada semestre.",
      "Quedará exento de guardias de seguridad."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 14",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Espíritu Militar (Art. 14 RROO)",
    consejoAcademia: "Aforismo clásico de las Ordenanzas de Carlos III mantenido en el Art. 14 RROO: 'El militar cuyo propio honor y espíritu no le estimulen a obrar siempre bien, vale muy poco para el servicio'.",
    justificacion: "El artículo 14 de las Reales Ordenanzas dispone literalmente que el militar cuyo propio honor y espíritu no le estimulen a obrar siempre bien, vale muy poco para el servicio."
  },
  {
    id: "Q-W4-056",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 17 de las Reales Ordenanzas (RD 96/2009), entre las virtudes fundamentales del militar que ha de mantener a toda costa la serenidad y el espíritu de lucha se encuentran:",
    opciones: [
      "La disciplina, el valor, la prontitud en la obediencia y la exactitud en el servicio.",
      "La neutralidad política, la reserva sindical y la excedencia.",
      "La antigüedad en el escalafón y la especialización técnica.",
      "La delegación de firma y la desconcentración."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 17",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Virtudes Fundamentales (Art. 17 RROO)",
    consejoAcademia: "Las 4 virtudes fundamentales del Art. 17 RROO: Disciplina, Valor, Prontitud en la obediencia y Exactitud en el servicio.",
    justificacion: "El artículo 17 de las Reales Ordenanzas señala como virtudes fundamentales del militar la disciplina, el valor, la prontitud en la obediencia y la exactitud en el servicio."
  },
  {
    id: "Q-W4-057",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 49 de las Reales Ordenanzas (RD 96/2009), en el supuesto de que las órdenes entrañen la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar:",
    opciones: [
      "Deberá obedecerlas primero y dar parte por escrito después.",
      "No estará obligado a obedecerlas; en todo caso asumirá la grave responsabilidad de su acción u omisión.",
      "Consultará previamente al Defensor del Pueblo antes de actuar.",
      "Solicitará el relevo del destino en un plazo de diez días."
    ],
    correcta: 1,
    referencia: "Real Decreto 96/2009 (RROO), Art. 49",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Límites de la Obediencia (Art. 49 RROO)",
    consejoAcademia: "Tanto el Art. 49 de las RROO como el Art. 6.1 regla 12ª de la LO 9/2011 establecen que si las órdenes entrañan actos constitutivos de delito, el militar NO estará obligado a obedecerlas.",
    justificacion: "El artículo 49 de las Reales Ordenanzas dispone que si las órdenes entrañan la ejecución de actos constitutivos de delito, el militar no estará obligado a obedecerlas y asumirá la grave responsabilidad de su acción u omisión."
  },
  {
    id: "Q-W4-058",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 55 de las Reales Ordenanzas (RD 96/2009), la responsabilidad en el ejercicio del mando militar:",
    opciones: [
      "Puede ser renunciada o compartida con los subordinados directos mediante acta escrita.",
      "No es renunciable ni puede ser compartida; los que ejerzan mando tratarán de inculcar una disciplina basada en el convencimiento.",
      "Recae exclusivamente en el oficial de guardia de la unidad.",
      "Se transfiere íntegramente al órgano asesor jurídico."
    ],
    correcta: 1,
    referencia: "Real Decreto 96/2009 (RROO), Art. 55",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Responsabilidad en el Mando (Art. 55 RROO)",
    consejoAcademia: "Frase literal de examen (Art. 55 RROO): 'La responsabilidad en el ejercicio del mando militar no es renunciable ni puede ser compartida'.",
    justificacion: "El artículo 55 de las Reales Ordenanzas establece que la responsabilidad en el ejercicio del mando militar no es renunciable ni puede ser compartida."
  },
  {
    id: "Q-W4-059",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 62 de las Reales Ordenanzas (RD 96/2009), la condición esencial del que ejerce mando, con la que logrará obtener de sus subordinados la colaboración espontánea en los propósitos del jefe, es:",
    opciones: [
      "La capacidad para decidir (que se materializa en la oportuna difusión de la misión y el propósito).",
      "La imposición sistemática de arrestos preventivos.",
      "Evitar tomar decisiones hasta recibir confirmación escrita de todos los escalones.",
      "La antigüedad en el empleo."
    ],
    correcta: 0,
    referencia: "Real Decreto 96/2009 (RROO), Art. 62",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Capacidad para Decidir (Art. 62 RROO)",
    consejoAcademia: "Art. 62 RROO: 'Condición esencial del que ejerce mando es su capacidad para decidir'.",
    justificacion: "El artículo 62 de las Reales Ordenanzas dispone que condición esencial del que ejerce mando es su capacidad para decidir."
  },
  {
    id: "Q-W4-060",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Conforme al artículo 89 de las Reales Ordenanzas (RD 96/2009), el militar que sea hecho prisionero por el enemigo tendrá en cuenta que sigue siendo un combatiente y evitará:",
    opciones: [
      "Intentar evadirse para reincorporarse a filas.",
      "Prestar juramento o dar palabra de no volver a tomar las armas, limitándose a facilitar su nombre, empleo, filiación y fecha de nacimiento.",
      "Mantener la estructura jerárquica entre los compañeros prisioneros.",
      "Recibir asistencia médica."
    ],
    correcta: 1,
    referencia: "Real Decreto 96/2009 (RROO), Art. 89",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Operaciones de Combate: Prisioneros (Art. 89 RROO)",
    consejoAcademia: "En caso de caer prisionero (Art. 89 RROO): solo dará los 4 datos del Convenio de Ginebra (nombre, empleo, filiación/número y fecha de nacimiento) y jamás dará palabra de no volver a tomar las armas.",
    justificacion: "El artículo 89 de las Reales Ordenanzas regula el comportamiento del militar hecho prisionero, prohibiendo prestar promesa de no volver a tomar las armas y limitando la información a nombre, empleo, filiación y fecha de nacimiento."
  },
  {
    id: "Q-W4-061",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T02",
    materia: "Reales Ordenanzas (RD 96/2009 - Vídeo T13)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 2.2 de las Reales Ordenanzas (RD 96/2009), ¿a qué miembros de la Guardia Civil resultan de aplicación las Reales Ordenanzas para las Fuerzas Armadas?",
    opciones: [
      "No les resultan de aplicación en ningún caso.",
      "Dada su naturaleza militar y la condición militar de sus miembros, en su normativa específica se recogerá lo que disponen estas Reales Ordenanzas en aquello que les sea aplicable y, en todo caso, cuando desempeñen misiones de carácter militar o se integren en unidades militares.",
      "Únicamente a los Oficiales Generales de la Guardia Civil.",
      "Solo cuando se encuentren fuera del territorio nacional."
    ],
    correcta: 1,
    referencia: "Real Decreto 96/2009 (RROO), Art. 2.2",
    ubicacionTemario: "Bloque 2 > Tema 2 (Vídeo T13) > Ámbito de Aplicación (Art. 2 RROO)",
    consejoAcademia: "A la Guardia Civil se le aplican en todo caso cuando desempeñen misiones de carácter militar o se integren en unidades militares (Art. 2.2 RROO).",
    justificacion: "El artículo 2.2 del Real Decreto 96/2009 establece su aplicación en todo caso a los miembros de la Guardia Civil cuando desempeñen misiones de carácter militar o se integren en unidades militares."
  },

  // =========================================================================
  // B2-T03: DERECHOS Y DEBERES LO 9/2011 (VÍDEO T14) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-062",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 9/2011, de derechos y deberes de los miembros de las Fuerzas Armadas, respecto a las reuniones en las unidades militares:",
    opciones: [
      "Están prohibidas todo tipo de reuniones dentro de las unidades militares sin excepción.",
      "No se podrán organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical; para las reuniones en las unidades (por ejemplo, de asociaciones profesionales) se requerirá autorización previa de su jefe, quien podrá denegarla motivadamente ponderando la salvaguarda de la disciplina y las necesidades del servicio.",
      "No requieren comunicación ni autorización previa del Jefe de la Unidad si se celebran fuera del horario de instrucción.",
      "Pueden convocarse con fines electorales dentro de los acuartelamientos."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 9/2011, Art. 13 y 45",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Derecho de Reunión y Manifestación (Art. 13)",
    consejoAcademia: "En los acuartelamientos las reuniones exigen AUTORIZACIÓN PREVIA del Jefe de la Unidad, y siempre fuera del horario habitual de trabajo.",
    justificacion: "Los artículos 13 y 45 de la LO 9/2011 prohíben las reuniones políticas o sindicales y exigen autorización previa del jefe de la unidad para celebrar reuniones asociativas en los acuartelamientos."
  },
  {
    id: "Q-W4-063",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 15 de la Ley Orgánica 9/2011, el militar podrá ejercer el derecho de petición:",
    opciones: [
      "De forma colectiva para reclamar mejoras salariales o de régimen interior.",
      "Sólo individualmente, en los supuestos y con las formalidades que señala la Ley Orgánica 4/2001, reguladora del Derecho de Petición.",
      "Directamente ante el Comité Militar de la OTAN.",
      "Mediante huelga o paro parcial."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 9/2011, Art. 15",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Derecho de Petición (Art. 15)",
    consejoAcademia: "Art. 29.2 CE y Art. 15 LO 9/2011: Los miembros de las Fuerzas o Institutos armados SÓLO pueden ejercer el derecho de petición INDIVIDUALMENTE.",
    justificacion: "El artículo 15 de la LO 9/2011 establece que el militar podrá ejercer el derecho de petición sólo individualmente, conforme al artículo 29.2 de la Constitución y a la Ley Orgánica 4/2001."
  },
  {
    id: "Q-W4-064",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 34.1 de la Ley Orgánica 9/2011, ¿pueden formar parte de las asociaciones profesionales de miembros de las Fuerzas Armadas los militares en situación de retiro y los alumnos de la enseñanza militar de formación que no tengan previamente la condición de militar profesional?",
    opciones: [
      "Los militares retirados sí pueden afiliarse (sin interferir en cuestiones de servicio activo), pero los alumnos de formación que no tuvieran previamente la condición de militar profesional NO podrán asociarse.",
      "Ni los retirados ni los alumnos pueden afiliarse en ningún caso.",
      "Ambos pueden afiliarse con plenos derechos de representación en el COPERFAS.",
      "Solo los alumnos pueden afiliarse, pero no los retirados."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 34",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Asociaciones Profesionales (Art. 34)",
    consejoAcademia: "¡Detalle muy preguntado!: Solo se puede estar afiliado a UNA asociación profesional (Art. 34.3). Los retirados SÍ pueden estar asociados, pero NO cuentan para calcular el porcentaje de representatividad en el COPERFAS.",
    justificacion: "El artículo 34 de la LO 9/2011 permite asociarse a los militares profesionales y a los retirados, excluyendo a los alumnos de formación que no tuvieran previamente la condición de militar profesional."
  },
  {
    id: "Q-W4-065",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Rebuscada"],
    pregunta: "Conforme al artículo 48.2 de la Ley Orgánica 9/2011, para que una asociación profesional pueda formar parte del Consejo de Personal de las Fuerzas Armadas (COPERFAS), deberá contar, en relación a los efectivos de las Fuerzas Armadas en las situaciones a que se refiere el artículo 34.1, con un porcentaje mínimo de afiliados de:",
    opciones: [
      "El 1% del total de efectivos de las FAS, o el 3% de los de su categoría (Oficiales, Suboficiales o Tropa y Marinería).",
      "El 10% del total de efectivos de las FAS, o el 25% de su categoría.",
      "Un mínimo fijo de 5.000 afiliados sin importar la categoría.",
      "Basta con estar inscrita en el Registro sin mínimo de afiliados."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 9/2011, Art. 48.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Consejo de Personal de las FAS - COPERFAS (Art. 48)",
    consejoAcademia: "¡Números mágicos de examen del Art. 48.2 LO 9/2011!: Para entrar en el COPERFAS hace falta el **1% del total de las FAS** o bien el **3% de una categoría** (Oficiales, Suboficiales o Tropa y Marinería).",
    justificacion: "El artículo 48.2 de la LO 9/2011 exige para formar parte del Consejo de Personal contar con al menos el 1 por ciento de afiliados del total de efectivos o el 3 por ciento de los efectivos de una de las categorías."
  },
  {
    id: "Q-W4-066",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 47 de la Ley Orgánica 9/2011, ¿quién preside el Consejo de Personal de las Fuerzas Armadas (COPERFAS)?",
    opciones: [
      "El Jefe de Estado Mayor de la Defensa (JEMAD).",
      "El Ministro de Defensa (y cuando no asista lo presidirá el Subsecretario de Defensa).",
      "El Presidente del Observatorio de la Vida Militar.",
      "El Director General de Personal (DIGENPER) en todo caso."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 9/2011, Art. 47.2",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Presidencia del COPERFAS (Art. 47)",
    consejoAcademia: "El COPERFAS lo preside el Ministro de Defensa (o el Subsecretario de Defensa cuando no asista el Ministro).",
    justificacion: "El artículo 47.2 de la LO 9/2011 dispone que el Consejo de Personal de las Fuerzas Armadas estará presidido por el Ministro de Defensa y, cuando no asista, lo presidirá el Subsecretario de Defensa."
  },
  {
    id: "Q-W4-067",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "De acuerdo con los artículos 54 y 55 de la Ley Orgánica 9/2011, el Observatorio de la Vida Militar es un órgano colegiado, de carácter asesor y consultivo, adscrito a las Cortes Generales, compuesto por:",
    opciones: [
      "Doce vocales nombrados por el Ministro de Defensa por un período de cuatro años.",
      "Nueve personalidades de reconocido prestigio (5 elegidas por el Congreso de los Diputados y 4 por el Senado), por mayoría de tres quintos (3/5) y por un mandato de cinco años.",
      "Quince generales en situación de reserva designados por el JEMAD.",
      "Diez representantes de las asociaciones profesionales elegidos por sufragio directo."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 9/2011, Art. 54 y 55",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Observatorio de la Vida Militar (Arts. 53-55)",
    consejoAcademia: "¡Cifras clave del Observatorio de la Vida Militar (Art. 55 LO 9/2011)!: **9 miembros** (5 Congreso + 4 Senado), elegidos por mayoría de **3/5** de cada Cámara, mandato de **5 años** y cargo gratuito/no retribuido. Ellos mismos eligen de entre sus miembros a su Presidente.",
    justificacion: "El artículo 55 de la LO 9/2011 establece que el Observatorio de la Vida Militar se compone de nueve miembros (cinco designados por el Congreso y cuatro por el Senado) elegidos por mayoría de tres quintos por un período de cinco años."
  },
  {
    id: "Q-W4-068",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T03",
    materia: "LO 9/2011 Derechos y Deberes (Vídeo T14)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 22 de la Ley Orgánica 9/2011, los miembros de las Fuerzas Armadas tienen deber de disponibilidad permanente para el servicio, que se adaptará a las características propias del destino y a las circunstancias de la situación y que:",
    opciones: [
      "Solo es exigible durante las maniobras internacionales.",
      "Será exigible en todo momento cuando así lo demanden las necesidades del servicio.",
      "Queda suspendido los fines de semana y días festivos.",
      "Solo afecta a la categoría de Oficiales Generales."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 9/2011, Art. 22",
    ubicacionTemario: "Bloque 2 > Tema 3 (Vídeo T14) > Disponibilidad para el Servicio (Art. 22)",
    consejoAcademia: "Art. 22 LO 9/2011: Los militares estarán en disponibilidad permanente para el servicio.",
    justificacion: "El artículo 22 de la LO 9/2011 regula el deber de disponibilidad permanente para el servicio de los miembros de las Fuerzas Armadas."
  },

  // =========================================================================
  // B2-T04: RÉGIMEN DISCIPLINARIO LO 8/2014 (VÍDEO T15) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-069",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según los artículos 6, 7 y 8 de la Ley Orgánica 8/2014, de Régimen Disciplinario de las Fuerzas Armadas, la 'inexactitud en el cumplimiento de las órdenes o de las normas de régimen interior' constituye una falta:",
    opciones: [
      "Leve, mientras que el 'incumplimiento' de las órdenes o instrucciones constituye falta grave o muy grave según su entidad.",
      "Muy grave en todo caso, sancionada con separación del servicio.",
      "Grave, sancionada siempre con pérdida de destino.",
      "No constituye infracción disciplinaria."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 6.2 y Art. 7",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Faltas Leves vs Graves (Arts. 6 y 7)",
    consejoAcademia: "¡Palabra clave del Tribunal!: 'INEXACTITUD' o 'descuido' = Falta LEVE (Art. 6). 'INCUMPLIMIENTO' = Falta GRAVE (Art. 7). 'Incumplimiento reiterado o de especial gravedad / insubordinación' = Falta MUY GRAVE (Art. 8).",
    justificacion: "El artículo 6 de la LO 8/2014 tipifica como falta leve la inexactitud o descuido en el cumplimiento de las órdenes o normas de régimen interior, mientras que el incumplimiento se tipifica como falta grave o muy grave."
  },
  {
    id: "Q-W4-070",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme a los artículos 6.13 y 7.15 de la Ley Orgánica 8/2014, la falta de puntualidad a los actos de servicio o el abandono temporal o ausencia injustificada de la unidad o servicio, ¿a partir de qué plazo pasa de ser falta LEVE a ser falta GRAVE?",
    opciones: [
      "Cuando la ausencia injustificada supere las veinticuatro horas (24 horas).",
      "Cuando supere las seis horas.",
      "Cuando supere los tres días hábiles.",
      "Cuando supere las setenta y dos horas."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 6.13 y Art. 7.15",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Ausencia Injustificada: 24 Horas (Arts. 6 y 7)",
    consejoAcademia: "¡Frontera numérica de examen!: Ausencia injustificada hasta 24 horas = Falta LEVE (Art. 6.13). Ausencia injustificada superior a 24 horas = Falta GRAVE (Art. 7.15).",
    justificacion: "Según los artículos 6.13 y 7.15 de la LO 8/2014, la ausencia injustificada por un plazo no superior a 24 horas es falta leve, y cuando supere las 24 horas (sin constituir falta muy grave o delito de abandono de destino) es falta grave."
  },
  {
    id: "Q-W4-071",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 8.9 de la Ley Orgánica 8/2014, embriagarse o consumir drogas tóxicas, estupefacientes o sustancias psicotrópicas de forma reiterada fuera del servicio, o realizar estos mismos actos durante el desempeño del servicio, ¿cuándo constituye falta MUY GRAVE por episodios reiterados?",
    opciones: [
      "Cuando haya sido sancionado en al menos tres ocasiones en un período no superior a dos años.",
      "Con una sola vez fuera del servicio.",
      "Cuando haya sido sancionado cinco veces en diez años.",
      "Solo constituye falta leve."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 8.8 y 8.9",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Faltas Muy Graves: Alcohol y Drogas (Art. 8)",
    consejoAcademia: "En la LO 8/2014 la reiteración que convierte conductas graves en muy graves suele exigir **3 ocasiones en un período no superior a 2 años** (igual que la acumulación de 3 sanciones graves firmes en 2 años).",
    justificacion: "El artículo 8 de la LO 8/2014 aprecia reiteración constitutiva de falta muy grave cuando los episodios o sanciones se produzcan en al menos tres ocasiones en un período no superior a dos años."
  },
  {
    id: "Q-W4-072",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "De acuerdo con el artículo 15 de la Ley Orgánica 8/2014, la sanción de 'pérdida de destino' (prevista para faltas graves) supone el cese en el que venía ocupando el infractor, quien durante un plazo determinado no podrá solicitar nuevo destino en la misma unidad o localidad en la que se encontraba destinado. ¿Cuál es ese plazo?",
    opciones: [
      "Seis meses.",
      "Un año.",
      "Dos años.",
      "Cuatro años."
    ],
    correcta: 2,
    referencia: "Ley Orgánica 8/2014, Art. 15",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Sanciones: Pérdida de Destino (Art. 15)",
    consejoAcademia: "Pérdida de destino (Art. 15 LO 8/2014) = prohibición de solicitar destino en la misma unidad o localidad durante **2 AÑOS**.",
    justificacion: "El artículo 15 de la LO 8/2014 dispone que quien sufra la sanción de pérdida de destino no podrá solicitar nuevo destino durante dos años en la misma unidad o localidad en la que se encontraba destinado."
  },
  {
    id: "Q-W4-073",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "Según el artículo 28 de la Ley Orgánica 8/2014, ¿qué autoridad tiene competencia exclusiva para imponer la sanción de 'separación del servicio' por falta muy grave?",
    opciones: [
      "El Jefe de Estado Mayor del Ejército correspondiente.",
      "El Ministro de Defensa.",
      "El Subsecretario de Defensa.",
      "El Jefe de la Fuerza Terrestre."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 8/2014, Art. 28",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Competencia Sancionadora (Arts. 28-32)",
    consejoAcademia: "¡La sanción más grave (Separación del Servicio) SOLO puede imponerla el MINISTRO DE DEFENSA (previo informe del Consejo Superior del Ejército respectivo)!",
    justificacion: "El artículo 28 de la LO 8/2014 reserva en exclusiva al Ministro de Defensa la competencia para imponer la sanción de separación del servicio."
  },
  {
    id: "Q-W4-074",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 31 de la Ley Orgánica 8/2014, ¿qué autoridades tienen competencia para imponer la sanción de 'resolución de compromiso' (a militares temporales por falta muy grave) y la de 'suspensión de empleo'?",
    opciones: [
      "El Ministro de Defensa, el JEMAD, el Subsecretario de Defensa y los Jefes de Estado Mayor del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio.",
      "Los Jefes de Regimiento o Batallón.",
      "Los Jefes de Compañía.",
      "Exclusivamente el Consejo de Ministros."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 8/2014, Art. 28 a 31",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Competencias en Faltas Muy Graves (Arts. 28-31)",
    consejoAcademia: "Separación del servicio = SOLO Ministro de Defensa. Resto de sanciones por falta muy grave (arresto 31-60d, suspensión de empleo, resolución de compromiso) = Ministro, JEMAD, SUBDEF y JEME/AJEMA/JEMA.",
    justificacion: "Según los artículos 28 a 31 de la LO 8/2014, la resolución de compromiso y la suspensión de empleo pueden ser impuestas por el Ministro de Defensa, el JEMAD, el Subsecretario de Defensa y los Jefes de Estado Mayor de los Ejércitos y la Armada."
  },
  {
    id: "Q-W4-075",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T04",
    materia: "LO 8/2014 Régimen Disciplinario (Vídeo T15)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "De acuerdo con el artículo 59 de la Ley Orgánica 8/2014, las sanciones disciplinarias impuestas son inmediatamente ejecutivas y comienzan a cumplirse el mismo día en que se notifique al infractor la resolución por la que se le imponen, SALVO la sanción de:",
    opciones: [
      "Reprensión, que requiere firmeza en vía judicial.",
      "Arresto por falta leve, grave o muy grave cuando la autoridad que la impuso acuerde motivadamente la suspensión o inejecución temporal, o en los casos de resolución de compromiso / separación del servicio en los términos legales.",
      "Sanción económica, que tarda seis meses en ejecutarse.",
      "Privación de salida, que nunca es ejecutiva."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 8/2014, Art. 59 y 60",
    ubicacionTemario: "Bloque 2 > Tema 4 (Vídeo T15) > Ejecución de las Sanciones (Arts. 59-61)",
    consejoAcademia: "Regla general (Art. 59 LO 8/2014): Inmediata ejecutividad desde el mismo día de la notificación (el arresto se abona con el tiempo pasado en arresto cautelar/preventivo).",
    justificacion: "Los artículos 59 y 60 de la LO 8/2014 establecen la ejecutividad inmediata de las sanciones disciplinarias desde el día de su notificación, regulando los supuestos excepcionales de suspensión de la ejecución."
  }
];

const WAVE4_QUESTIONS_PART2 = [
  // =========================================================================
  // B2-T05: INICIATIVAS Y QUEJAS RD 176/2014 (VÍDEO T15-B) — 6 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-076",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 4 del Real Decreto 176/2014, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas, en cada unidad, centro u organismo (UCO) se designará para recibir e impulsar la tramitación de las iniciativas y quejas a:",
    opciones: [
      "Un militar de mayor empleo o antigüedad de cada categoría, o un Suboficial Mayor.",
      "Un abogado civil externo contratado por el Ayuntamiento.",
      "Un vocal del Observatorio de la Vida Militar.",
      "El oficial médico de la unidad exclusivamente."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Art. 4",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T15-B) > Presentación y Recepción en las UCO (Art. 4)",
    consejoAcademia: "Las iniciativas y quejas se presentan en la UCO ante el Jefe de la Unidad o a través del Suboficial Mayor / militar designado al efecto.",
    justificacion: "El artículo 4 del Real Decreto 176/2014 regula la presentación y recepción de las iniciativas y quejas en las unidades, centros u organismos."
  },
  {
    id: "Q-W4-077",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 13 del Real Decreto 176/2014, si transcurridos SEIS MESES desde que el militar presentó una queja ante el Jefe de su Unidad ésta no hubiera sido contestada o la contestación no satisficiera al interesado, el militar podrá:",
    opciones: [
      "Interponer recurso de casación ante el Tribunal Supremo.",
      "Dirigir su queja directamente a los Mandos o Jefatura de Personal de su Ejército (MAPER/JEPER), dando cuenta de ello al Jefe de su Unidad.",
      "Declararse en huelga administrativa.",
      "Acudir directamente al Tribunal Europeo de Derechos Humanos."
    ],
    correcta: 1,
    referencia: "Real Decreto 176/2014, Art. 13 y LO 9/2011, Art. 28",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T15-B) > Plazo de 6 Meses y Elevación Directa (Art. 13)",
    consejoAcademia: "¡No confundas el plazo de 1 MES (si el Jefe de Unidad no contesta en 1 mes, puede acudir al superior jerárquico inmediato) con el plazo de 6 MESES (para acudir directamente al Mando/Jefatura de Personal o DIGENPER dando cuenta al Jefe de su UCO)!",
    justificacion: "Conforme al artículo 28 de la LO 9/2011 y al artículo 13 del RD 176/2014, transcurridos seis meses sin contestación o si no le satisface, podrá dirigirse directamente al Mando o Jefatura de Personal dando cuenta al Jefe de su Unidad."
  },
  {
    id: "Q-W4-078",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 5 del Real Decreto 176/2014, ¿cuál de los siguientes supuestos es causa de INADMISIÓN de una iniciativa o queja?",
    opciones: [
      "Que sea presentada por un Soldado con compromiso inicial.",
      "Que carezca de los datos de identificación del militar (anónima), se formule de forma colectiva o se refiera a materias sujetas a procedimiento administrativo, judicial o disciplinario específico.",
      "Que proponga mejoras en las instalaciones de vida de la unidad.",
      "Que esté escrita en papel común."
    ],
    correcta: 1,
    referencia: "Real Decreto 176/2014, Art. 5",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T15-B) > Causas de Inadmisión (Art. 5)",
    consejoAcademia: "Las iniciativas y quejas SIEMPRE son individuales e identificadas (nunca anónimas ni colectivas) y nunca sustituyen a los recursos administrativos o disciplinarios.",
    justificacion: "El artículo 5 del Real Decreto 176/2014 establece la inadmisión de las iniciativas o quejas anónimas, colectivas o referidas a materias con procedimiento específico de recurso."
  },
  {
    id: "Q-W4-079",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 8 del Real Decreto 176/2014, si el Jefe de la Unidad no es competente para resolver sobre una iniciativa relativa al régimen de personal o condiciones de vida, ¿qué deberá hacer?",
    opciones: [
      "Archivarla sin más trámite.",
      "Elevarla en el plazo establecido, acompañada de un informe motivado, a la autoridad u órgano competente, informando de ello al militar que la presentó.",
      "Devolverla al interesado para que la envíe por correo postal.",
      "Remitirla al Consejo de Estado."
    ],
    correcta: 1,
    referencia: "Real Decreto 176/2014, Art. 8",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T15-B) > Tramitación de Iniciativas (Art. 8)",
    consejoAcademia: "Si el Jefe de UCO no tiene competencia para implantar la iniciativa, la eleva con su informe motivado al escalón competente y se lo comunica al interesado.",
    justificacion: "El artículo 8 del Real Decreto 176/2014 dispone que cuando la iniciativa exceda de las competencias del Jefe de Unidad, éste la elevará con informe motivado a la autoridad competente."
  },
  {
    id: "Q-W4-080",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 3 del Real Decreto 176/2014, ¿suspende la presentación de una queja el cumplimiento de las órdenes del servicio o los plazos de los recursos administrativos?",
    opciones: [
      "Sí, suspende inmediatamente la orden impugnada.",
      "No; la presentación de una queja nunca eximirá del cumplimiento de las órdenes recibidas ni suspenderá los plazos establecidos para la interposición de recursos administrativos o jurisdiccionales.",
      "Suspende los plazos durante quince días hábiles.",
      "Exime del servicio de guardia mientras se tramita."
    ],
    correcta: 1,
    referencia: "Real Decreto 176/2014, Art. 3 y 11",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T15-B) > Efectos de las Quejas (Arts. 3 y 11)",
    consejoAcademia: "Principio sagrado: La queja NUNCA exime de cumplir una orden ni suspende los plazos de los recursos.",
    justificacion: "Los artículos 3 y 11 del Real Decreto 176/2014 establecen que la presentación de una queja en ningún caso exime del cumplimiento de las órdenes ni interrumpe los plazos de los recursos."
  },
  {
    id: "Q-W4-081",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T05",
    materia: "RD 176/2014 Iniciativas y Quejas",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Conforme al artículo 14 del Real Decreto 176/2014, los Mandos o Jefatura de Personal de los Ejércitos y la Armada y la Dirección General de Personal elaborarán un informe con los datos estadísticos y análisis de las iniciativas y quejas presentadas con periodicidad:",
    opciones: [
      "Anual.",
      "Mensual.",
      "Quinquenal.",
      "Decenal."
    ],
    correcta: 0,
    referencia: "Real Decreto 176/2014, Art. 14",
    ubicacionTemario: "Bloque 2 > Tema 5 (Vídeo T15-B) > Informe Anual (Art. 14)",
    consejoAcademia: "El informe estadístico de iniciativas y quejas se elabora con carácter ANUAL (y se remite a la Subsecretaría de Defensa y al COPERFAS / Observatorio de la Vida Militar).",
    justificacion: "El artículo 14 del Real Decreto 176/2014 prevé la elaboración de un informe anual sobre las iniciativas y quejas tramitadas."
  },

  // =========================================================================
  // B2-T06: IGUALDAD EFECTIVA LO 3/2007 (VÍDEO T16) — 6 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-082",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva (Vídeo T16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 6 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres (Vídeo T16), cuando una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente en atención a una finalidad legítima, estamos ante:",
    opciones: [
      "Discriminación directa por razón de sexo.",
      "Discriminación indirecta por razón de sexo.",
      "Acción positiva institucional.",
      "Acoso sexual ambiental."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 3/2007, Art. 6.2",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T16) > Discriminación Directa vs Indirecta (Art. 6)",
    consejoAcademia: "¡Clave del Vídeo T16!: 'Aparentemente neutro' = Discriminación INDIRECTA (Art. 6.2). Trato menos favorable directo por embarazo o maternidad = Discriminación DIRECTA (Art. 8).",
    justificacion: "El artículo 6.2 de la LO 3/2007 define la discriminación indirecta por razón de sexo como la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular."
  },
  {
    id: "Q-W4-083",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva (Vídeo T16)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 7 de la Ley Orgánica 3/2007 (Vídeo T16), ¿cuál es la diferencia exacta entre 'acoso sexual' (Art. 7.1) y 'acoso por razón de sexo' (Art. 7.2)?",
    opciones: [
      "El acoso sexual es cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad de una persona; mientras que el acoso por razón de sexo es cualquier comportamiento realizado en función del sexo de una persona con el propósito o efecto de atentar contra su dignidad y crear un entorno intimidatorio, degradante u ofensivo.",
      "El acoso sexual solo puede ser físico y el acoso por razón de sexo solo puede ser verbal.",
      "Son sinónimos exactos en la ley sin ninguna distinción.",
      "El acoso por razón de sexo solo se aplica en el sector privado."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 7.1 y 7.2",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T16) > Acoso Sexual vs Acoso por Razón de Sexo (Art. 7)",
    consejoAcademia: "¡Trampa estrella de los Vídeos T16 y T18!: Acoso SEXUAL = comportamiento de NATURALEZA SEXUAL (verbal o físico). Acoso POR RAZÓN DE SEXO = comportamiento en FUNCIÓN DEL SEXO de una persona (sin necesidad de contenido sexual, p.ej. por estar embarazada o por ser mujer/hombre). ¡Ambos se consideran discriminatorios en todo caso (Art. 7.3)!",
    justificacion: "El artículo 7 de la LO 3/2007 distingue entre el acoso sexual (de naturaleza sexual, art. 7.1) y el acoso por razón de sexo (en función del sexo de una persona, art. 7.2)."
  },
  {
    id: "Q-W4-084",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva (Vídeo T16)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 13 de la Ley Orgánica 3/2007 (Vídeo T16), en los procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, ¿a quién corresponderá probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad (inversión de la carga de la prueba), salvo en qué tipo de procesos?",
    opciones: [
      "A la persona demandada, salvo en los procesos penales (y procedimientos administrativos sancionadores).",
      "Siempre a la víctima incluso en vía civil y laboral.",
      "Únicamente en los procesos penales se invierte la carga de la prueba.",
      "Al Ministerio Fiscal en exclusiva."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 13",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T16) > Prueba y Procesos Penales (Art. 13)",
    consejoAcademia: "¡Ojo con la excepción del Art. 13.2 LO 3/2007!: La inversión de la carga de la prueba (corresponde al demandado probar la ausencia de discriminación) NO será de aplicación a los PROCESOS PENALES (donde rige la presunción de inocencia del Art. 24 CE).",
    justificacion: "El artículo 13.1 de la LO 3/2007 establece que corresponderá a la persona demandada probar la ausencia de discriminación, y el artículo 13.2 exceptúa expresamente los procesos penales."
  },
  {
    id: "Q-W4-085",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva (Vídeo T16)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con la Disposición Adicional Primera de la Ley Orgánica 3/2007 (Vídeo T16), se entenderá por 'composición equilibrada' la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo:",
    opciones: [
      "Sean exactamente el 50 por ciento en todos los casos.",
      "No superen el sesenta por ciento (60%) ni sean menos del cuarenta por ciento (40%).",
      "No superen el setenta por ciento (70%) ni sean menos del treinta por ciento (30%).",
      "Representen al menos un veinticinco por ciento (25%)."
    ],
    correcta: 1,
    referencia: "Ley Orgánica 3/2007, Disposición Adicional Primera",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T16) > Presencia o Composición Equilibrada (60% / 40%)",
    consejoAcademia: "Horquilla oficial de composición equilibrada en la LO 3/2007: **40% mínimo — 60% máximo** para cada sexo.",
    justificacion: "La Disposición Adicional Primera de la LO 3/2007 define la composición equilibrada como aquella en la que las personas de cada sexo no superen el 60% ni sean menos del 40%."
  },
  {
    id: "Q-W4-086",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva (Vídeo T16)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 17 de la Ley Orgánica 3/2007 (Vídeo T16), el Gobierno aprobará periódicamente, en las materias que sean de la competencia del Estado, un:",
    opciones: [
      "Plan Estratégico de Igualdad de Oportunidades.",
      "Reglamento de Sanciones Militares.",
      "Estatuto Básico de las Comunidades Autónomas.",
      "Presupuesto Especial de Defensa."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 17",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T16) > Políticas Públicas para la Igualdad (Art. 17)",
    consejoAcademia: "Art. 17 LO 3/2007: El Gobierno aprobará un Plan Estratégico de Igualdad de Oportunidades (PEIO). Y los proyectos de disposiciones de carácter general y planes de especial relevancia que se sometan al Consejo de Ministros incorporarán un Informe sobre su impacto por razón de género (Art. 19).",
    justificacion: "El artículo 17 de la LO 3/2007 establece que el Gobierno aprobará periódicamente un Plan Estratégico de Igualdad de Oportunidades."
  },
  {
    id: "Q-W4-087",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T06",
    materia: "LO 3/2007 Igualdad Efectiva (Vídeo T16)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Conforme al artículo 77 de la Ley Orgánica 3/2007 (Vídeo T16), en todos los Ministerios se encomendará a uno de sus órganos directivos el desarrollo de las funciones relacionadas con el principio de igualdad entre mujeres y hombres, denominándose dichas unidades:",
    opciones: [
      "Unidades de Igualdad.",
      "Comisiones Mixtas Paritarias.",
      "Juzgados de Igualdad Ministerial.",
      "Agencias Estatales de Género."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 3/2007, Art. 77",
    ubicacionTemario: "Bloque 2 > Tema 6 (Vídeo T16) > Unidades de Igualdad en los Ministerios (Art. 77)",
    consejoAcademia: "Art. 77 LO 3/2007 = Unidades de Igualdad en cada Ministerio. Art. 76 = Comisión Interministerial de Igualdad entre mujeres y hombres.",
    justificacion: "El artículo 77 de la LO 3/2007 regula las Unidades de Igualdad en todos los Ministerios."
  },

  // =========================================================================
  // B2-T07: OBSERVATORIO IGUALDAD + UPA Y ACOSO (VÍDEOS T17 y T18) — 8 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-088",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad (OM 51/2011 - Vídeo T17)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según la Orden Ministerial 51/2011 (Vídeo T17), ¿a qué órgano del Ministerio de Defensa está adscrito el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas y quién ostenta su Presidencia?",
    opciones: [
      "Está adscrito a la Subsecretaría de Defensa y su Presidencia corresponde a la persona titular de la Subsecretaría de Defensa (o Dirección General de Personal por delegación/estructura).",
      "Está adscrito a las Cortes Generales y lo preside el Defensor del Pueblo.",
      "Está adscrito al Estado Mayor de la Defensa y lo preside el JEMAD.",
      "Está adscrito a la Secretaría de Estado de Defensa."
    ],
    correcta: 0,
    referencia: "Orden Ministerial 51/2011 y RD 205/2024",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T17: Observatorio Militar para la Igualdad) > Adscripción y Presidencia",
    consejoAcademia: "¡Diferencia clave de examen!: El Observatorio de la VIDA MILITAR (LO 9/2011) está adscrito a las CORTES GENERALES; en cambio, el Observatorio Militar para la IGUALDAD (OM 51/2011) está en el ámbito de la SUBSECRETARÍA DE DEFENSA (DIGENPER).",
    justificacion: "Conforme a la OM 51/2011 y al RD 205/2024, el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas depende del ámbito de la Subsecretaría de Defensa / DIGENPER."
  },
  {
    id: "Q-W4-089",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad (OM 51/2011 - Vídeo T17)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con la Orden Ministerial 51/2011 (Vídeo T17), ¿qué órgano ejerce la Secretaría Permanente del Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas?",
    opciones: [
      "La División de Igualdad y Apoyo Social al Personal de la Dirección General de Personal (DIGENPER).",
      "La Secretaría General Técnica del Ministerio del Interior.",
      "El Mando de Operaciones (MOPS).",
      "El Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa (INVIED)."
    ],
    correcta: 0,
    referencia: "Orden Ministerial 51/2011, Art. 4 y RD 205/2024, Art. 12",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T17: Observatorio Militar para la Igualdad) > Secretaría Permanente",
    consejoAcademia: "La División de Igualdad y Apoyo Social al Personal (dentro de DIGENPER) actúa como Secretaría Permanente del Observatorio Militar para la Igualdad y alberga la Unidad de Protección frente al Acoso (UPA Central).",
    justificacion: "La Secretaría Permanente del Observatorio Militar para la Igualdad recae en la División de Igualdad y Apoyo Social al Personal de la Dirección General de Personal (DIGENPER)."
  },
  {
    id: "Q-W4-090",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Observatorio Militar Igualdad (OM 51/2011 - Vídeo T17)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 5 de la Orden Ministerial 51/2011 (Vídeo T17), el Pleno del Observatorio Militar para la Igualdad se reunirá en sesión ordinaria al menos:",
    opciones: [
      "Dos veces al año (una vez por semestre), y en sesión extraordinaria cuando lo convoque su Presidencia.",
      "Una vez cada cinco años.",
      "Todas las semanas los lunes.",
      "Solo cuando se reforme la Constitución."
    ],
    correcta: 0,
    referencia: "Orden Ministerial 51/2011, Art. 5",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T17: Observatorio Militar para la Igualdad) > Régimen de Reuniones",
    consejoAcademia: "Tanto el Observatorio Militar para la Igualdad como el COPERFAS tienen un régimen ordinario de reunión de al menos 2 veces al año (semestral).",
    justificacion: "El artículo 5 de la Orden Ministerial 51/2011 establece que el Observatorio Militar para la Igualdad se reunirá en sesión ordinaria al menos dos veces al año."
  },
  {
    id: "Q-W4-091",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo Acoso y UPA (Vídeo T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según la Orden DEF/482/2016 y el Protocolo de actuación frente al acoso sexual y por razón de sexo en las FAS (Vídeo T18), ¿dónde están ubicadas las Unidades de Protección frente al Acoso (UPA)?",
    opciones: [
      "Existe una UPA en cada Compañía o Escuadrón de las Fuerzas Armadas.",
      "Existe una UPA Central en la Dirección General de Personal (DIGENPER) y una UPA en el Estado Mayor de la Defensa (EMAD) y en cada uno de los Mandos o Jefatura de Personal de los Ejércitos y la Armada (MAPER ET, JEPER Armada y MAPER EA).",
      "Solo existe una UPA en el Tribunal Militar Central.",
      "Están integradas en las Delegaciones de Hacienda."
    ],
    correcta: 1,
    referencia: "Orden DEF/482/2016, Art. 2",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: UPA y Protocolo de Acoso) > Estructura de las UPA",
    consejoAcademia: "¡Cuento exacto del Vídeo T18!: Son **5 UPA en total**: 1 UPA Central (en DIGENPER) + 4 UPA específicas (1 en EMAD, 1 en MAPER del ET, 1 en JEPER de la Armada y 1 en MAPER del EA).",
    justificacion: "El artículo 2 de la Orden DEF/482/2016 regula la UPA de la Dirección General de Personal y las UPA en el EMAD, el Ejército de Tierra, la Armada y el Ejército del Aire y del Espacio."
  },
  {
    id: "Q-W4-092",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo Acoso y UPA (Vídeo T18)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas (Resolución 400/38199/2015 - Vídeo T18), cuando la víctima o cualquier persona que tenga conocimiento de una conducta de acoso opta por remitir la denuncia directamente a la UPA sin seguir el conducto reglamentario, o por entregarla en sobre cerrado al Jefe de Unidad, ¿en qué plazo máximo debe el Jefe de Unidad remitir la comunicación recibida a la autoridad sancionadora y/o UPA?",
    opciones: [
      "De forma inmediata y, en todo caso, en un plazo máximo de 24 a 48 horas (sin abrir el sobre cerrado si va dirigido a la UPA).",
      "En un plazo máximo de treinta días hábiles.",
      "En un plazo de seis meses.",
      "Al finalizar el año natural."
    ],
    correcta: 0,
    referencia: "Resolución 400/38199/2015, Protocolo de Actuación frente al Acoso en las FAS",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: UPA y Protocolo de Acoso) > Cauces y Plazos de Tramitación",
    consejoAcademia: "¡Dos claves vitales del Vídeo T18!: 1) La víctima PUEDE acudir directamente a la UPA sin pasar por el conducto reglamentario para asesoramiento o canalización; 2) La tramitación es urgente y confidencial.",
    justificacion: "El Protocolo de actuación frente al acoso en las FAS garantiza la confidencialidad, la celeridad e inmediatez en el traslado de las denuncias y la posibilidad de acudir directamente a las UPA."
  },
  {
    id: "Q-W4-093",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo Acoso y UPA (Vídeo T18)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la Orden DEF/482/2016 (Vídeo T18), ¿tienen las Unidades de Protección frente al Acoso (UPA) competencia para instruir expedientes disciplinarios o imponer sanciones por sí mismas?",
    opciones: [
      "Sí, las UPA imponen directamente la separación del servicio.",
      "No; las UPA son unidades de información, asesoramiento, atención y apoyo integral a la víctima, así como de recepción y canalización de denuncias, pero la potestad disciplinaria y judicial corresponde a las autoridades y órganos competentes.",
      "Sí, funcionan como tribunales militares de excepción.",
      "Solo pueden imponer arrestos de hasta catorce días."
    ],
    correcta: 1,
    referencia: "Orden DEF/482/2016, Art. 3 y 4",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: UPA y Protocolo de Acoso) > Funciones de las UPA",
    consejoAcademia: "¡Pregunta trampa clásica del Vídeo T18!: La UPA asesora, apoya psicológica/médica/jurídicamente, recibe y canaliza, pero NO es órgano sancionador ni instructor del expediente disciplinario.",
    justificacion: "Conforme a la Orden DEF/482/2016, las UPA realizan funciones de prevención, asesoramiento, apoyo y canalización de denuncias, sin asumir la potestad sancionadora disciplinaria ni jurisdiccional."
  },
  {
    id: "Q-W4-094",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo Acoso y UPA (Vídeo T18)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el Protocolo de actuación frente al acoso en las Fuerzas Armadas (Vídeo T18), una vez incoado el procedimiento disciplinario o penal por acoso, ¿qué medidas cautelares o preventivas deben valorarse con carácter prioritario para proteger a la víctima?",
    opciones: [
      "El arresto preventivo de la víctima.",
      "Medidas que garanticen la separación física entre el presunto acosador y la víctima (como el cambio temporal de puesto o comisión de servicio), evitando que supongan menoscabo o perjuicio en las condiciones laborales de la víctima.",
      "La publicación del nombre de ambas partes en el tablón de anuncios de la compañía.",
      "La baja definitiva de la víctima en las Fuerzas Armadas."
    ],
    correcta: 1,
    referencia: "Resolución 400/38199/2015, Garantías y Medidas Preventivas",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: UPA y Protocolo de Acoso) > Protección de la Víctima",
    consejoAcademia: "Principio de protección a la víctima y prohibición de represalias: Separación física entre presunto agresor y víctima sin que jamás suponga perjuicio para la víctima.",
    justificacion: "El Protocolo de actuación frente al acoso prevé la adopción de medidas preventivas para evitar el contacto entre el presunto acosador y la víctima, garantizando la indemnidad y ausencia de represalias."
  },
  {
    id: "Q-W4-095",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T07",
    materia: "Protocolo Acoso y UPA (Vídeo T18)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 6 de la Orden DEF/482/2016 (Vídeo T18), el personal destinado o que preste servicios en las Unidades de Protección frente al Acoso (UPA) está sujeto respecto de todas las informaciones y actuaciones que conozca a un estricto deber de:",
    opciones: [
      "Publicidad trimestral de los nombres de los denunciantes.",
      "Sigilo, confidencialidad y reserva.",
      "Dependencia orgánica de las asociaciones profesionales.",
      "Rotación semanal de puesto."
    ],
    correcta: 1,
    referencia: "Orden DEF/482/2016, Art. 6",
    ubicacionTemario: "Bloque 2 > Tema 7 (Vídeo T18: UPA y Protocolo de Acoso) > Confidencialidad",
    consejoAcademia: "El deber de confidencialidad y sigilo se mantiene incluso después de cesar en su destino en la UPA.",
    justificacion: "El artículo 6 de la Orden DEF/482/2016 impone un estricto deber de confidencialidad, sigilo y reserva a todo el personal de las UPA."
  },

  // =========================================================================
  // B2-T08: LEY 39/2015 LPACAP I y II (VÍDEOS T19 y T20) — 9 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-096",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T19)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 5.6 de la Ley 39/2015 (LPACAP - Vídeo T19), cuando en una solicitud, recurso o acto que no sea de mero trámite se actúe por medio de representante y no se acredite la representación (o sea insuficiente), el órgano administrativo deberá conceder un plazo para subsanar dicho defecto de:",
    opciones: [
      "Diez días (o un plazo superior cuando las circunstancias del caso así lo requieran).",
      "Veinticuatro horas improrrogables.",
      "Un mes natural.",
      "Tres meses."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 5.6",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: LPACAP I) > Representación (Art. 5.6)",
    consejoAcademia: "En la Ley 39/2015 la regla general de subsanación (tanto de representación del Art. 5.6 como de la solicitud de inicio del Art. 68.1) es de **10 DÍAS HÁBILES**.",
    justificacion: "El artículo 5.6 de la Ley 39/2015 establece que la falta o insuficiente acreditación de la representación no impedirá que se tenga por realizado el acto siempre que se aporte o subsane el defecto dentro del plazo de diez días que deberá conceder al efecto el órgano administrativo."
  },
  {
    id: "Q-W4-097",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T19)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 32 de la Ley 39/2015 (LPACAP - Vídeo T19), la Administración, salvo precepto en contrario, podrá conceder de oficio o a petición de los interesados una ampliación de los plazos establecidos que NO exceda de:",
    opciones: [
      "El doble del plazo original, y contra el acuerdo que resuelva sobre la ampliación cabrá recurso de alzada.",
      "La mitad de los mismos, si las circunstancias lo aconsejan y con ello no se perjudican derechos de tercero; tanto la petición como la decisión deberán producirse antes del vencimiento del plazo de que se trate, y contra el acuerdo de ampliación o denegación NO cabrá recurso alguno.",
      "Treinta días naturales en cualquier momento, incluso una vez vencido el plazo.",
      "Tres meses prorrogables."
    ],
    correcta: 1,
    referencia: "Ley 39/2015, Art. 32.1 y 32.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: LPACAP I) > Ampliación de Plazos y Tramitación de Urgencia (Arts. 32 y 33)",
    consejoAcademia: "¡Doble regla de oro de los Arts. 32 y 33 LPACAP!: Ampliación de plazos (Art. 32) = hasta la MITAD más. Tramitación de urgencia (Art. 33) = reduce los plazos a la MITAD (salvo los de presentación de solicitudes y recursos). ¡Y en ambos casos NO CABE RECURSO contra el acuerdo!",
    justificacion: "El artículo 32 de la Ley 39/2015 permite ampliar los plazos por un tiempo que no exceda de la mitad de los mismos, siempre antes del vencimiento del plazo, sin que quepa recurso contra el acuerdo."
  },
  {
    id: "Q-W4-098",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T19)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 42.2 de la Ley 39/2015 (LPACAP - Vídeo T19), cuando la notificación se practique en papel en el domicilio del interesado y nadie se hiciera cargo de ella, se hará constar esta circunstancia en el expediente junto con el día y la hora, y el intento se repetirá por una sola vez y en una hora distinta dentro de:",
    opciones: [
      "Los tres días siguientes (dejando en todo caso al menos un margen de diferencia de tres horas entre ambos intentos si el primero se realizó antes de las 15:00 horas se hará después, y viceversa).",
      "Los diez días siguientes a la misma hora exacta.",
      "El mes siguiente.",
      "No se repite nunca el intento."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 42.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: LPACAP I) > Práctica de las Notificaciones en Papel (Art. 42.2)",
    consejoAcademia: "¡Regla de las notificaciones en domicilio (Art. 42.2 LPACAP)!: Si nadie la recoge: 1) Puede hacerse cargo cualquier mayor de **14 años** que esté en el domicilio; 2) Si no hay nadie, se repite 1 sola vez dentro de los **3 DÍAS siguientes**, en franja horaria distinta (antes/después de las 15:00h) y con al menos **3 HORAS de diferencia**.",
    justificacion: "El artículo 42.2 de la Ley 39/2015 regula el segundo intento de notificación en papel dentro de los tres días siguientes, en franja horaria distinta y dejando al menos tres horas de diferencia."
  },
  {
    id: "Q-W4-099",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T19)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "De acuerdo con el artículo 43.2 de la Ley 39/2015 (LPACAP - Vídeo T19), las notificaciones por medios electrónicos se entenderán practicadas en el momento en que se produzca el acceso a su contenido. Cuando la notificación por medios electrónicos sea de carácter obligatorio o haya sido expresamente elegida por el interesado, se entenderá RECHAZADA cuando hayan transcurrido desde la puesta a disposición sin que se acceda a su contenido:",
    opciones: [
      "Diez días naturales.",
      "Diez días hábiles.",
      "Quince días hábiles.",
      "Treinta días naturales."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 43.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T19: LPACAP I) > Notificaciones Electrónicas (Art. 43.2)",
    consejoAcademia: "¡LA TRAMPA MÁS FAMOSA DE LA LEY 39/2015!: Casi todos los plazos en días de la Ley 39/2015 son hábiles, PERO el plazo de rechazo de la notificación electrónica (Art. 43.2) es de **10 DÍAS NATURALES**.",
    justificacion: "El artículo 43.2 de la Ley 39/2015 establece expresamente que la notificación electrónica se entenderá rechazada cuando hayan transcurrido diez días naturales desde la puesta a disposición de la notificación sin que se acceda a su contenido."
  },
  {
    id: "Q-W4-100",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T20)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según el artículo 77.2 de la Ley 39/2015 (LPACAP - Vídeo T20), cuando la Administración no tenga por ciertos los hechos alegados por los interesados o la naturaleza del procedimiento lo exija, el instructor del mismo acordará la apertura de un período de prueba por un plazo:",
    opciones: [
      "No superior a treinta días ni inferior a diez.",
      "Fijo de cinco días.",
      "De seis meses.",
      "No superior a diez días ni inferior a tres."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 77.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: LPACAP II) > Instrucción del Procedimiento: Prueba (Art. 77)",
    consejoAcademia: "Horquilla de los plazos de Instrucción en la Ley 39/2015: Periodo de PRUEBA (Art. 77.2) = entre **10 y 30 días** (+ periodo extraordinario de hasta 10 días). Trámite de AUDIENCIA (Art. 82.2) = entre **10 y 15 días**. INFORMES (Art. 80.2) = **10 días**.",
    justificacion: "El artículo 77.2 de la Ley 39/2015 dispone que el instructor acordará la apertura de un período de prueba por un plazo no superior a treinta días ni inferior a diez."
  },
  {
    id: "Q-W4-101",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T20)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al artículo 80 de la Ley 39/2015 (LPACAP - Vídeo T20), salvo disposición expresa en contrario, los informes que se soliciten en la instrucción de un procedimiento administrativo serán:",
    opciones: [
      "Preceptivos y vinculantes en todo caso, y se emitirán en el plazo de un mes.",
      "Facultativos y no vinculantes, y serán emitidos en el plazo de diez días.",
      "Secretos y vinculantes.",
      "Orales y sin plazo."
    ],
    correcta: 1,
    referencia: "Ley 39/2015, Art. 80.1 y 80.2",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: LPACAP II) > Informes (Art. 80)",
    consejoAcademia: "Regla general de los informes (Art. 80 LPACAP): Son **facultativos y no vinculantes**, y el plazo general para emitirlos es de **10 días**.",
    justificacion: "El artículo 80.1 de la Ley 39/2015 dispone que, salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes, y el artículo 80.2 fija un plazo de emisión de diez días."
  },
  {
    id: "Q-W4-102",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 95.1 de la Ley 39/2015 (LPACAP - Vídeo T20), en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que se producirá la caducidad del procedimiento transcurridos:",
    opciones: [
      "Tres meses sin que el particular realice las actividades necesarias para reanudar la tramitación.",
      "Diez días naturales.",
      "Seis meses.",
      "Un año."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 95.1",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: LPACAP II) > Terminación: Caducidad por Paralización del Interesado (Art. 95)",
    consejoAcademia: "Caducidad por inactividad del interesado en procedimientos iniciados a su solicitud (Art. 95.1 LPACAP) = **3 MESES** tras requerimiento de la Administración.",
    justificacion: "El artículo 95.1 de la Ley 39/2015 establece que en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad del procedimiento."
  },
  {
    id: "Q-W4-103",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T20)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "Importante"],
    pregunta: "De acuerdo con el artículo 107.2 de la Ley 39/2015 (LPACAP - Vídeo T20), la declaración de lesividad de los actos anulables favorables para los interesados (previa a su impugnación ante el orden contencioso-administrativo) NO podrá adoptarse una vez transcurridos desde que se dictó el acto administrativo:",
    opciones: [
      "Cuatro años (y el procedimiento de lesividad caducará si transcurren seis meses desde su iniciación sin haberse declarado la lesividad).",
      "Un año (y caducará a los tres meses).",
      "Diez años.",
      "No existe límite temporal (como ocurre en la revisión de oficio de actos nulos de pleno derecho del art. 106)."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 107.2 y 107.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: LPACAP II) > Declaración de Lesividad de Actos Anulables (Art. 107)",
    consejoAcademia: "¡Compara Art. 106 vs Art. 107 LPACAP!: Revisión de oficio de actos NULOS (Art. 106) = en cualquier momento (sin límite de años, previo dictamen favorable del Consejo de Estado; caduca en 6 meses si es de oficio). Declaración de lesividad de actos ANULABLES (Art. 107) = máximo **4 AÑOS** desde que se dictó el acto (y el procedimiento caduca a los **6 MESES**).",
    justificacion: "Los apartados 2 y 3 del artículo 107 de la Ley 39/2015 establecen un límite de cuatro años desde que se dictó el acto para adoptar la declaración de lesividad, y la caducidad del procedimiento a los seis meses desde su iniciación."
  },
  {
    id: "Q-W4-104",
    bloque: "Bloque 2: Jurídico-Social",
    temaCodigo: "B2-T08",
    materia: "Ley 39/2015 LPACAP (Vídeo T20)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el artículo 117.3 de la Ley 39/2015 (LPACAP - Vídeo T20), la ejecución del acto impugnado se entenderá SUSPENDIDA automáticamente si, desde que la solicitud de suspensión haya tenido entrada en el registro electrónico de la Administración competente para decidir sobre la misma, el órgano competente no ha dictado y notificado resolución expresa al respecto transcurrido el plazo de:",
    opciones: [
      "Un mes.",
      "Tres meses.",
      "Diez días.",
      "Veinticuatro horas."
    ],
    correcta: 0,
    referencia: "Ley 39/2015, Art. 117.3",
    ubicacionTemario: "Bloque 2 > Tema 8 (Vídeo T20: LPACAP II) > Suspensión de la Ejecución en Recursos (Art. 117.3)",
    consejoAcademia: "¡Excepción famosísima de silencio positivo en recursos!: Aunque el recurso no suspende por sí mismo el acto, si pides la suspensión y la Administración no te contesta en **1 MES**, la ejecución del acto queda automáticamente SUSPENDIDA (Art. 117.3 LPACAP).",
    justificacion: "El artículo 117.3 de la Ley 39/2015 dispone que la ejecución del acto impugnado se entenderá suspendida si transcurrido un mes desde que la solicitud de suspensión haya tenido entrada en el registro electrónico de la Administración competente para decidir sobre la misma, el órgano a quien competa no ha dictado y notificado resolución expresa al respecto."
  },

  // =========================================================================
  // B3-T01: SEGURIDAD NACIONAL Y ESN 2021 (VÍDEOS T21 y T22) — 8 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-105",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional (Vídeo T21)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el artículo 3 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), la acción del Estado dirigida a proteger la libertad, los derechos y bienestar de los ciudadanos, a garantizar la defensa de España y sus principios y valores constitucionales, así como a contribuir junto a nuestros socios y aliados a la seguridad internacional en el cumplimiento de los compromisos asumidos, es la definición legal de:",
    opciones: [
      "Defensa Civil.",
      "Seguridad Nacional.",
      "Seguridad Ciudadana.",
      "Acción Conjunta Militar."
    ],
    correcta: 1,
    referencia: "Ley 36/2015, Art. 3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015) > Concepto de Seguridad Nacional (Art. 3)",
    consejoAcademia: "Los 3 pilares de la definición de Seguridad Nacional (Art. 3 Ley 36/2015): 1) Proteger libertad, derechos y bienestar de los ciudadanos; 2) Garantizar la defensa de España y sus valores constitucionales; 3) Contribuir con socios y aliados a la seguridad internacional.",
    justificacion: "El artículo 3 de la Ley 36/2015 define literalmente el concepto de Seguridad Nacional en esos tres ejes."
  },
  {
    id: "Q-W4-106",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 4.3 de la Ley 36/2015, de Seguridad Nacional (Vídeo T21), ¿con qué periodicidad se revisará la Estrategia de Seguridad Nacional?",
    opciones: [
      "Cada cinco años, o antes si lo aconsejan las circunstancias cambiantes del entorno estratégico, y será aprobada mediante Real Decreto del Consejo de Ministros a iniciativa del Presidente del Gobierno.",
      "Cada dos años mediante Ley Orgánica de las Cortes Generales.",
      "Cada diez años por Orden del Ministro de Defensa.",
      "Anualmente por el JEMAD."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 4.2 y 4.3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015) > Estrategia de Seguridad Nacional (Art. 4)",
    consejoAcademia: "¡Pregunta fija de los Vídeos T21 y T22!: La ESN la impulsa el Presidente del Gobierno, la aprueba el Consejo de Ministros por REAL DECRETO y se revisa **cada 5 años** (o cuando lo aconsejen las circunstancias).",
    justificacion: "El artículo 4 de la Ley 36/2015 dispone que la Estrategia de Seguridad Nacional se aprobará por Real Decreto acordado en Consejo de Ministros a iniciativa del Presidente del Gobierno, y se revisará cada cinco años o cuando lo aconsejen las circunstancias."
  },
  {
    id: "Q-W4-107",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional (Vídeo T21)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 24 de la Ley 36/2015 (Vídeo T21), ¿quién declara la 'Situación de Interés para la Seguridad Nacional' y mediante qué disposición?",
    opciones: [
      "El Congreso de los Diputados por mayoría absoluta.",
      "El Presidente del Gobierno, mediante Real Decreto.",
      "El Consejo de Seguridad Nacional mediante acuerdo interno.",
      "El Ministro del Interior mediante Orden Ministerial."
    ],
    correcta: 1,
    referencia: "Ley 36/2015, Art. 24.1",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015) > Situación de Interés para la Seguridad Nacional (Arts. 23-24)",
    consejoAcademia: "¡Cuidado con esta trampa mortal!: La Estrategia de Seguridad Nacional la aprueba el Consejo de Ministros por Real Decreto (Art. 4.2), PERO la **Situación de Interés para la Seguridad Nacional** la declara el **PRESIDENTE DEL GOBIERNO por Real Decreto** (Art. 24.1), e informa inmediatamente al Congreso de los Diputados!",
    justificacion: "El artículo 24.1 de la Ley 36/2015 establece que la Situación de Interés para la Seguridad Nacional la declarará el Presidente del Gobierno mediante Real Decreto."
  },
  {
    id: "Q-W4-108",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional (Vídeo T21)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el artículo 20 de la Ley 36/2015 (Vídeo T21), ¿cuál es el órgano de trabajo permanente del Consejo de Seguridad Nacional y de sus órganos de apoyo, que ejerce las funciones de Secretaría Técnica y mantiene el Centro de Situación?",
    opciones: [
      "El Departamento de Seguridad Nacional (DSN), integrado en la Presidencia del Gobierno.",
      "El Estado Mayor Conjunto de la Defensa (EMACON).",
      "La Secretaría General de Política de Defensa (SEGENPOL).",
      "El Consejo de Defensa Nacional."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 20.3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015) > Departamento de Seguridad Nacional - DSN (Art. 20.3)",
    consejoAcademia: "El DSN (Departamento de Seguridad Nacional) es el órgano de trabajo permanente y Secretaría Técnica del Consejo de Seguridad Nacional, y su Director es el Secretario del Consejo de Seguridad Nacional.",
    justificacion: "El artículo 20.3 de la Ley 36/2015 configura al Departamento de Seguridad Nacional (DSN) como el órgano de trabajo permanente del Consejo de Seguridad Nacional y de sus órganos de apoyo."
  },
  {
    id: "Q-W4-109",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 (Vídeo T22)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Según la Estrategia de Seguridad Nacional 2021 (aprobada por Real Decreto 1150/2021 - Vídeo T22), bajo el lema 'Un país seguro y resiliente', el planeamiento estratégico integrado se articula en torno a:",
    opciones: [
      "Tres ejes estratégicos (Proteger, Promover y Participar) y una matriz conectada de 33 líneas de acción.",
      "Cinco cajas de seguridad desconectadas entre sí.",
      "Un único eje exclusivamente militar.",
      "Diez directivas de defensa territorial."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulo 5",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: ESN 2021) > Los 3 Ejes ('Las 3 P') de la ESN 2021",
    consejoAcademia: "¡Las '3 P' de la ESN 2021 (Vídeo T22)!: **1) PROTEGER** (la vida de las personas, el modelo democrático y los intereses estratégicos), **2) PROMOVER** (una España próspera, sostenible y resiliente) y **3) PARTICIPAR** (en la preservación de la paz y seguridad internacional, reforzando la autonomía estratégica europea y el vínculo transatlántico).",
    justificacion: "La Estrategia de Seguridad Nacional 2021 (RD 1150/2021) articula su acción estratégica en tres ejes ('Proteger', 'Promover' y 'Participar') y 33 líneas de acción."
  },
  {
    id: "Q-W4-110",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 (Vídeo T22)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme a la Estrategia de Seguridad Nacional 2021 (RD 1150/2021 - Vídeo T22), ¿qué son las 'estrategias híbridas' destacadas como uno de los principales vectores de transformación y riesgo para la seguridad nacional?",
    opciones: [
      "Acciones sincronizadas y combinadas (desinformación, ciberataques, coerción económica, instrumentalización de flujos migratorios, espionaje) que explotan las vulnerabilidades del Estado situándose deliberadamente por debajo del umbral del conflicto armado tradicional.",
      "Operaciones exclusivamente convencionales con carros de combate y artillería.",
      "Acuerdos comerciales bilaterales dentro de la OCDE.",
      "Maniobras conjuntas entre el Ejército de Tierra y la Armada."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Capítulos 2 y 3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: ESN 2021) > Amenazas y Estrategias Híbridas",
    consejoAcademia: "La ESN 2021 sitúa las estrategias híbridas (desinformación, ciberataques, presión energética/migratoria bajo el umbral de la guerra abierta) en el centro del mapa de riesgos interconectados.",
    justificacion: "La ESN 2021 analiza las estrategias híbridas como acciones coordinadas que combinan instrumentos no militares y militares bajo el umbral del conflicto armado para desestabilizar a los Estados."
  },
  {
    id: "Q-W4-111",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Ley 36/2015 Seguridad Nacional (Vídeo T21)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Según el artículo 21.1.f) de la Ley 36/2015 (Vídeo T21), ¿con qué periodicidad se reunirá el Consejo de Seguridad Nacional a iniciativa del Presidente del Gobierno?",
    opciones: [
      "Como mínimo con carácter bimestral (cada dos meses), o cuantas veces lo considere necesario su Presidente.",
      "Una sola vez cada cuatro años.",
      "Todos los días laborables.",
      "Únicamente cuando se declare el estado de sitio."
    ],
    correcta: 0,
    referencia: "Ley 36/2015, Art. 21.3",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T21: Ley 36/2015) > Reuniones del Consejo de Seguridad Nacional (Art. 21.3)",
    consejoAcademia: "¡Plazo de examen del Art. 21.3 Ley 36/2015!: El Consejo de Seguridad Nacional se reúne como mínimo con carácter **BIMESTRAL** (cada 2 meses).",
    justificacion: "El artículo 21.3 de la Ley 36/2015 establece que el Consejo de Seguridad Nacional se reunirá a iniciativa del Presidente del Gobierno como mínimo con carácter bimestral o cuantas veces lo considere necesario."
  },
  {
    id: "Q-W4-112",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T01",
    materia: "Estrategia de Seguridad Nacional 2021 (Vídeo T22)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según la Estrategia de Seguridad Nacional 2021 (Vídeo T22), ¿cuáles son los cinco espacios comunes globales (o dominios de confrontación/cooperación) cuya seguridad resulta crítica para España?",
    opciones: [
      "El ciberespacio, el espacio marítimo, el espacio aéreo y ultraterrestre (espacio exterior), y los espacios polares (además del ámbito cognitivo/informativo).",
      "Únicamente los ríos y lagos peninsulares.",
      "Las carreteras nacionales y autovías.",
      "Las embajadas y consulados."
    ],
    correcta: 0,
    referencia: "Real Decreto 1150/2021 (ESN 2021), Espacios Comunes Globales",
    ubicacionTemario: "Bloque 3 > Tema 1 (Vídeo T22: ESN 2021) > Espacios Comunes Globales",
    consejoAcademia: "En la ESN 2021 destacan como espacios comunes globales el ciberespacio, el espacio marítimo, el espacio aéreo y ultraterrestre (espacio exterior).",
    justificacion: "La ESN 2021 dedica un apartado específico a la vulnerabilidad y protección de los espacios comunes globales: el ciberespacio, el espacio marítimo y el espacio aéreo y ultraterrestre."
  },

  // =========================================================================
  // B3-T02: DOCTRINA PDC-01 (VÍDEO T23) — 6 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-113",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 (Vídeo T23)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según la publicación doctrinal PDC-01(B) 'Doctrina para el empleo de las Fuerzas Armadas' (Vídeo T23), ¿quién aprueba esta doctrina de carácter conjunto de primer nivel?",
    opciones: [
      "El Jefe de Estado Mayor de la Defensa (JEMAD).",
      "El Jefe de Estado Mayor del Ejército de Tierra.",
      "El Ministro del Interior.",
      "El Secretario General de la ONU."
    ],
    correcta: 0,
    referencia: "PDC-01, Doctrina para el empleo de las FAS",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: Doctrina PDC-01) > Naturaleza y Aprobación de la PDC-01",
    consejoAcademia: "La PDC-01 es el documento doctrinal conjunto de máximo nivel de nuestras FAS y la aprueba el JEMAD (elaborada a través del CICD del CESEDEN/EMAD).",
    justificacion: "La PDC-01 es aprobada por el Jefe de Estado Mayor de la Defensa (JEMAD) como doctrina conjunta de primer nivel para el empleo de las Fuerzas Armadas."
  },
  {
    id: "Q-W4-114",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio"],
    pregunta: "Conforme a la Doctrina PDC-01 (Vídeo T23), las operaciones militares se desarrollan de manera sincronizada a través de los cinco ámbitos o dominios de operación, que son:",
    opciones: [
      "Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial (integrados en un entorno de Operaciones Multidominio - MDO y apoyados en los entornos físico, virtual y cognitivo).",
      "Infantería, Caballería, Artillería, Ingenieros y Transmisiones.",
      "Nacional, Autonómico, Provincial, Insular y Municipal.",
      "Logístico, Sanitario, Jurídico, Económico y Musical."
    ],
    correcta: 0,
    referencia: "PDC-01, Ámbitos de Operación y Operaciones Multidominio",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: Doctrina PDC-01) > Los 5 Dominios y los 3 Entornos",
    consejoAcademia: "¡Clave del Vídeo T23!: 5 Dominios = Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial. 3 Entornos (dimensiones del entorno operativo) = Físico, Virtual (información/datos) y Cognitivo (percepciones/voluntades).",
    justificacion: "La PDC-01 establece los cinco ámbitos o dominios operativos (terrestre, marítimo, aéreo, espacial y ciberespacial) y las tres dimensiones del entorno operativo (física, virtual y cognitiva)."
  },
  {
    id: "Q-W4-115",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 (Vídeo T23)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según la Doctrina PDC-01 (Vídeo T23), dentro de los niveles de conducción de las operaciones militares (Estratégico, Operacional y Táctico), ¿en qué nivel se conciben, planean y conducen las campañas y operaciones principales dentro de un Teatro de Operaciones para alcanzar los objetivos estratégicos?",
    opciones: [
      "En el nivel Político.",
      "En el nivel Operacional (ejercido en España por el Comandante del Mando de Operaciones - CMOPS).",
      "En el nivel Táctico elemental de pelotón.",
      "En el nivel Administrativo."
    ],
    correcta: 1,
    referencia: "PDC-01, Niveles de las Operaciones Militares",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: Doctrina PDC-01) > Niveles Político, Estratégico, Operacional y Táctico",
    consejoAcademia: "Eslabones de mando en operaciones: Nivel Estratégico Militar = JEMAD. Nivel Operacional = CMOPS (planea y conduce las campañas y operaciones). Nivel Táctico = Mandos Componentes y fuerzas desplegadas (ejecutan combates y acciones tácticas).",
    justificacion: "En la doctrina PDC-01, el nivel operacional es el eslabón que enlaza los objetivos estratégicos con el empleo táctico de las fuerzas mediante el planeamiento y conducción de campañas y operaciones (CMOPS)."
  },
  {
    id: "Q-W4-116",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con la Doctrina PDC-01 (Vídeo T23), el principio del Mando y Control (C2) por el cual el comandante superior expresa claramente el propósito (el 'qué' y el 'para qué' de la misión) y otorga a los mandos subordinados libertad de acción e iniciativa disciplinada sobre el 'cómo' alcanzarlo se denomina:",
    opciones: [
      "Mando tipo misión (Mission Command).",
      "Control centralizado absoluto.",
      "Delegación de firma administrativa.",
      "Transferencia de autoridad logística."
    ],
    correcta: 0,
    referencia: "PDC-01, Filosofía de Mando: Mando Tipo Misión",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: Doctrina PDC-01) > Mando y Control: Mando Tipo Misión",
    consejoAcademia: "Filosofía fundamental de mando en la PDC-01: **Mando Tipo Misión (Mission Command)**, basado en la confianza mutua, comprensión compartida del propósito del jefe e iniciativa disciplinada.",
    justificacion: "La PDC-01 consagra el 'Mando tipo misión' como la filosofía de mando de las Fuerzas Armadas españolas, basada en la centralización del propósito y la descentralización de la ejecución."
  },
  {
    id: "Q-W4-117",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 (Vídeo T23)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la Doctrina PDC-01 (Vídeo T23), cuando en una operación participan de forma integrada fuerzas de dos o más Ejércitos/Armada de una misma nación bajo un mando único, hablamos de una operación:",
    opciones: [
      "Conjunta (mientras que si participan fuerzas de dos o más Estados/naciones se denomina Combinada o Multinacional).",
      "Combinada.",
      "Interagencias exclusivamente.",
      "Unilateral terrestre."
    ],
    correcta: 0,
    referencia: "PDC-01, Acción Conjunta y Acción Combinada",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: Doctrina PDC-01) > Conjunta vs Combinada vs Integrada",
    consejoAcademia: "¡Distinción básica que siempre cae!: **Conjunta** = varios Ejércitos/Armada del mismo país. **Combinada (o Multinacional)** = fuerzas de dos o más países. **Conjunta-Combinada** = varios ejércitos de varios países. **Acción Integrada** = coordinación con actores no militares (diplomáticos, policiales, civiles).",
    justificacion: "La doctrina PDC-01 define la acción conjunta como la que integra capacidades de dos o más Ejércitos y la Armada bajo mando único, y la combinada como aquella en la que participan fuerzas de dos o más naciones."
  },
  {
    id: "Q-W4-118",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T02",
    materia: "Doctrina PDC-01 (Vídeo T23)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Conforme a la Doctrina PDC-01 (Vídeo T23), las Funciones Conjuntas (Joint Functions) que agrupan capacidades y actividades homogéneas para ayudar al comandante a integrar, sincronizar y dirigir las operaciones son:",
    opciones: [
      "Mando y Control, Inteligencia, Maniobra y Fuegos (o Acción), Sostenimiento (Logística), Protección e Información/Comunicación Estratégica.",
      "Solamente Alimentación, Transporte y Municionamiento.",
      "Presupuesto, Contratación y Auditoría.",
      "Reclutamiento, Formación y Retiro."
    ],
    correcta: 0,
    referencia: "PDC-01, Funciones Conjuntas",
    ubicacionTemario: "Bloque 3 > Tema 2 (Vídeo T23: Doctrina PDC-01) > Funciones Conjuntas",
    consejoAcademia: "Las Funciones Conjuntas en la doctrina española y aliada son: Mando y Control, Inteligencia, Maniobra/Fuegos, Sostenimiento, Protección e Información.",
    justificacion: "La PDC-01 estructura el empleo de las capacidades operativas a través de las Funciones Conjuntas: Mando y Control, Inteligencia, Maniobra/Fuegos, Sostenimiento, Protección e Información."
  },

  // =========================================================================
  // B3-T03: NACIONES UNIDAS - ONU (VÍDEO T24) — 6 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-119",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según la Carta de las Naciones Unidas (Vídeo T24), ¿en qué fecha y ciudad se firmó la Carta de las Naciones Unidas y en qué fecha entró en vigor?",
    opciones: [
      "Se firmó el 26 de junio de 1945 en San Francisco y entró en vigor el 24 de octubre de 1945.",
      "Se firmó el 4 de abril de 1949 en Washington y entró en vigor el 14 de diciembre de 1955.",
      "Se firmó el 1 de agosto de 1975 en Helsinki.",
      "Se firmó el 7 de febrero de 1992 en Maastricht."
    ],
    correcta: 0,
    referencia: "Tema 3 Bloque 3 (Vídeo T24: ONU), Carta de las Naciones Unidas",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: ONU) > Origen y Carta de San Francisco (1945)",
    consejoAcademia: "Fechas clave ONU (Vídeo T24): Firma en San Francisco = **26 junio 1945**. Entrada en vigor (Día de la ONU) = **24 octubre 1945**. Ingreso de España en la ONU = **14 diciembre 1955**.",
    justificacion: "La Carta de las Naciones Unidas se firmó el 26 de junio de 1945 en San Francisco al concluir la Conferencia de las Naciones Unidas sobre Organización Internacional y entró en vigor el 24 de octubre de 1945."
  },
  {
    id: "Q-W4-120",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al artículo 7 de la Carta de las Naciones Unidas (Vídeo T24), ¿cuáles son los SEIS órganos principales de las Naciones Unidas y cuál de ellos suspendió sus operaciones el 1 de noviembre de 1994 tras la independencia de Palaos?",
    opciones: [
      "La Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social (ECOSOC), el Consejo de Administración Fiduciaria (que suspendió operaciones en 1994), la Corte Internacional de Justicia y la Secretaría.",
      "La UNESCO, la OMS, la FAO, el FMI, la OIT y el UNICEF.",
      "El Consejo del Atlántico Norte, el Comité Militar y la Asamblea Parlamentaria.",
      "El Consejo Europeo, la Comisión Europea y el Parlamento Europeo."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 7",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: ONU) > Los 6 Órganos Principales de la ONU",
    consejoAcademia: "¡No confundas los 6 Órganos Principales (Art. 7: Asamblea General, Consejo de Seguridad, ECOSOC, Consejo de Administración Fiduciaria, CIJ y Secretaría) con las agencias especializadas (UNESCO, OMS, FAO, OIT)! Todos tienen sede en Nueva York SALVO la Corte Internacional de Justicia (La Haya, Países Bajos).",
    justificacion: "El artículo 7 de la Carta de la ONU establece seis órganos principales: Asamblea General, Consejo de Seguridad, ECOSOC, Consejo de Administración Fiduciaria (inactivo desde 1994), Corte Internacional de Justicia y Secretaría."
  },
  {
    id: "Q-W4-121",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el artículo 27 de la Carta de las Naciones Unidas (Vídeo T24), el Consejo de Seguridad se compone de 15 miembros (5 permanentes y 10 no permanentes elegidos por la Asamblea General por mandatos de 2 años). Para adoptar decisiones sobre cuestiones que NO sean de procedimiento (cuestiones de fondo), se requiere el voto afirmativo de:",
    opciones: [
      "Nueve miembros (9 de 15), incluso los votos afirmativos de todos los miembros permanentes (derecho de veto de China, Estados Unidos, Francia, Reino Unido y Rusia).",
      "Ocho miembros cualesquiera por mayoría simple sin derecho de veto.",
      "Los quince miembros por unanimidad absoluta.",
      "Únicamente los cinco miembros permanentes."
    ],
    correcta: 0,
    referencia: "Carta de las Naciones Unidas, Art. 23 y 27",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: ONU) > Consejo de Seguridad: Composición y Votación",
    consejoAcademia: "En el Consejo de Seguridad de la ONU (15 miembros): Mayoría necesaria = **9 votos afirmativos de 15**. En cuestiones de procedimiento valen 9 cualesquiera; en las demás cuestiones no debe haber voto en contra (veto) de ninguno de los 5 permanentes (P5).",
    justificacion: "El artículo 27 de la Carta de las Naciones Unidas exige nueve votos afirmativos de los quince miembros del Consejo de Seguridad, incluyendo la concurrencia de los cinco miembros permanentes en las cuestiones de fondo."
  },
  {
    id: "Q-W4-122",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el Estatuto de la Corte Internacional de Justicia (Vídeo T24), ¿por cuántos magistrados independientes está integrada la CIJ (con sede en La Haya), cuál es la duración de su mandato y quién los elige?",
    opciones: [
      "Por 15 magistrados elegidos por 9 años por la Asamblea General y el Consejo de Seguridad (sin que pueda haber dos de la misma nacionalidad).",
      "Por 54 magistrados elegidos por 3 años únicamente por el Secretario General.",
      "Por 27 jueces elegidos por 5 años en Bruselas.",
      "Por 9 jueces vitalicios."
    ],
    correcta: 0,
    referencia: "Estatuto de la Corte Internacional de Justicia, Arts. 3 y 13",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: ONU) > Corte Internacional de Justicia (CIJ) y ECOSOC",
    consejoAcademia: "Cifras clave ONU: CIJ = **15 magistrados por 9 años** (sede en el Palacio de la Paz de La Haya). ECOSOC = **54 miembros por 3 años**. Secretario General ONU = nombrado por la Asamblea General a recomendación del Consejo de Seguridad por **5 años** (actualmente António Guterres).",
    justificacion: "La Corte Internacional de Justicia se compone de 15 magistrados elegidos por un mandato de 9 años por la Asamblea General y el Consejo de Seguridad en votaciones independientes."
  },
  {
    id: "Q-W4-123",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según el tema oficial de la ONU (Vídeo T24), ¿dónde se encuentra ubicada en territorio español la Base de Apoyo Logístico / Centro de Comunicaciones y Tecnología de la Información de las Naciones Unidas para las operaciones de mantenimiento de la paz?",
    opciones: [
      "En Quart de Poblet / Manises (Valencia), complementando a la base logística de Brindisi (Italia).",
      "En Zaragoza.",
      "En la Base Naval de Marín (Pontevedra).",
      "En Valladolid."
    ],
    correcta: 0,
    referencia: "Tema 3 Bloque 3 (Vídeo T24: ONU), España y la ONU",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: ONU) > España y las Naciones Unidas (Base ONU en Valencia)",
    consejoAcademia: "¡Dato de examen sobre España y la ONU!: España ingresó el 14/12/1955, ha sido miembro no permanente del Consejo de Seguridad en **5 ocasiones** (1969-70, 1981-82, 1993-94, 2003-04 y 2015-16) y alberga en **Quart de Poblet (Valencia)** el Centro de Tecnología de la Información y Comunicaciones de la ONU (UNICTF).",
    justificacion: "En Quart de Poblet (Valencia) se ubica la base tecnológica y de comunicaciones de apoyo a las misiones de paz de las Naciones Unidas en España."
  },
  {
    id: "Q-W4-124",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T03",
    materia: "Naciones Unidas - ONU (Vídeo T24)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Conforme a la Carta de las Naciones Unidas (Vídeo T24), ¿qué Capítulo regula la 'Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión' (incluyendo sanciones coercitivas y el uso de la fuerza armada)?",
    opciones: [
      "El Capítulo VI (Arreglo pacífico de controversias).",
      "El Capítulo VII.",
      "El Capítulo VIII (Acuerdos regionales).",
      "El Capítulo I."
    ],
    correcta: 1,
    referencia: "Carta de las Naciones Unidas, Capítulos VI, VII y VIII",
    ubicacionTemario: "Bloque 3 > Tema 3 (Vídeo T24: ONU) > Capítulos VI, VII y VIII de la Carta",
    consejoAcademia: "Trilogía de Capítulos de la Carta ONU: Cap. VI = Arreglo pacífico de controversias; Cap. VII = Medidas coercitivas y uso de la fuerza ante amenazas/quebrantamientos de la paz; Cap. VIII = Acuerdos regionales.",
    justificacion: "El Capítulo VII de la Carta de las Naciones Unidas (artículos 39 a 51) regula la acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión."
  },

  // =========================================================================
  // B3-T04: OTAN (VÍDEO T25) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-125",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil", "2025/2026"],
    pregunta: "Tras las recientes adhesiones de Finlandia (abril de 2023) y Suecia (marzo de 2024), y el relevo en la Secretaría General en octubre de 2024 (Vídeo T25), ¿cuántos países miembros integran actualmente la OTAN y quién es su Secretario General?",
    opciones: [
      "32 países miembros, siendo su Secretario General el neerlandés Mark Rutte (quien relevó a Jens Stoltenberg).",
      "30 países miembros, siendo su Secretario General Javier Solana.",
      "27 países miembros, siendo su Secretaria General Ursula von der Leyen.",
      "57 países participantes."
    ],
    correcta: 0,
    referencia: "Tema 4 Bloque 3 (Vídeo T25: OTAN), Actualización 2024-2026",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Estados Miembros (32) y Secretario General",
    consejoAcademia: "¡Dato actualizado de examen 2025/2026!: La OTAN cuenta con **32 aliados** (12 fundadores en Washington el 4 de abril de 1949; España el nº 16 el 30 de mayo de 1982; Finlandia el nº 31 en 2023 y Suecia el nº 32 en 2024) y su Secretario General desde octubre de 2024 es **Mark Rutte**.",
    justificacion: "Tras la incorporación de Finlandia (2023) y Suecia (2024), la OTAN está integrada por 32 Estados miembros, y desde el 1 de octubre de 2024 su Secretario General es Mark Rutte."
  },
  {
    id: "Q-W4-126",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según la estructura militar de mando de la OTAN (Vídeo T25), ¿cuáles son los dos Mandos Estratégicos de la Alianza y dónde tienen sus respectivas sedes?",
    opciones: [
      "El Mando Aliado de Operaciones (ACO, cuyo cuartel general es SHAPE en Mons, Bélgica) y el Mando Aliado de Transformación (ACT, con sede en Norfolk, Virginia, EE. UU.).",
      "El Mando de Bruselas y el Mando de Estrasburgo.",
      "El Mando de Brunssum y el Mando de Nápoles exclusivamente.",
      "El Comité Militar y la Asamblea Parlamentaria de la OTAN."
    ],
    correcta: 0,
    referencia: "Tema 4 Bloque 3 (Vídeo T25: OTAN), Estructura Militar de la OTAN (ACO y ACT)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > ACO (SHAPE - Mons) y ACT (Norfolk)",
    consejoAcademia: "¡Pregunta estrella del Vídeo T25!: Los 2 Mandos Estratégicos bajo el Comité Militar son: **ACO** (Operaciones, mandado por SACEUR en SHAPE, Mons, Bélgica) y **ACT** (Transformación, mandado por SACT en Norfolk, EE. UU.). Y debajo de ACO están los 3 Mandos de Fuerza Conjunta (JFC): **Brunssum** (Países Bajos), **Nápoles** (Italia) y **Norfolk** (EE. UU.).",
    justificacion: "La estructura de mando militar de la OTAN se articula en dos Mandos Estratégicos: el Mando Aliado de Operaciones (ACO, en SHAPE, Mons, Bélgica) y el Mando Aliado de Transformación (ACT, en Norfolk, Virginia, EE. UU.)."
  },
  {
    id: "Q-W4-127",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el tema oficial de la OTAN (Vídeo T25), ¿qué cuarteles generales y centros de la estructura de fuerzas y de mando de la OTAN se encuentran ubicados en territorio español?",
    opciones: [
      "El Centro Combinado de Operaciones Aéreas de Torrejón (CAOC Torrejón, en Madrid), el Cuartel General Terrestre de Alta Disponibilidad (HQ NRDC-ESP en Bétera, Valencia) y el Centro de Excelencia contra Artefactos Explosivos Improvisados (C-IED COE en Hoyo de Manzanares, Madrid).",
      "El SHAPE en Madrid y el Mando Marítimo Aliado (MARCOM) en Cádiz.",
      "El Mando Aéreo Aliado (AIRCOM) en Zaragoza.",
      "Ninguno, ya que España no participa en la estructura militar integrada."
    ],
    correcta: 0,
    referencia: "Tema 4 Bloque 3 (Vídeo T25: OTAN), España en la OTAN",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Centros OTAN en España",
    consejoAcademia: "¡Los 3 centros OTAN en España que siempre preguntan (Vídeo T25)!: 1) **CAOC Torrejón** (Madrid, vigilancia espacio aéreo sur de Europa); 2) **HQ NRDC-ESP en Bétera** (Valencia, Cuartel General Terrestre de Alta Disponibilidad); 3) **COE C-IED en Hoyo de Manzanares** (Madrid). Además en Albacete está el TLP (Tactical Leadership Programme).",
    justificacion: "En España se ubican el CAOC de Torrejón (estructura de mando), el HQ NRDC-ESP de Bétera (estructura de fuerzas) y el Centro de Excelencia C-IED en Hoyo de Manzanares."
  },
  {
    id: "Q-W4-128",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "Según la historia de la relación de España con la OTAN (Vídeo T25), ¿en qué fecha ingresó España en la Alianza Atlántica, en qué fecha se celebró el referéndum de permanencia y en qué año culminó su plena integración en la estructura militar integrada?",
    opciones: [
      "Ingresó el 30 de mayo de 1982, celebró el referéndum el 12 de marzo de 1986 y se integró plenamente en la estructura militar el 1 de enero de 1999.",
      "Ingresó en 1949 como miembro fundador.",
      "Ingresó el 1 de enero de 1986 junto con la entrada en la CEE.",
      "Se integró en la estructura militar en 1975."
    ],
    correcta: 0,
    referencia: "Tema 4 Bloque 3 (Vídeo T25: OTAN), Proceso de incorporación de España",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Cronología de España en la OTAN (1982, 1986, 1999, Cumbre Madrid 2022)",
    consejoAcademia: "Las 4 fechas de España en la OTAN: **30 mayo 1982** (ingreso como aliado nº 16), **12 marzo 1986** (referéndum), **1 enero 1999** (plena integración en la estructura militar tras la Cumbre de Madrid de 1997) y **junio 2022** (Cumbre de Madrid que aprobó el nuevo Concepto Estratégico de la OTAN 2022).",
    justificacion: "España ingresó en la OTAN el 30 de mayo de 1982, ratificó su permanencia en referéndum el 12 de marzo de 1986 y culminó su integración en la estructura militar el 1 de enero de 1999."
  },
  {
    id: "Q-W4-129",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Conforme al Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid de junio de 2022 (Vídeo T25), ¿cuáles son las tres tareas fundamentales (core tasks) de la Alianza Atlántica?",
    opciones: [
      "1) Disuasión y defensa; 2) Prevención y gestión de crisis; y 3) Seguridad cooperativa.",
      "1) Comercio libre; 2) Unión monetaria; y 3) Política agraria.",
      "1) Policía interior; 2) Justicia penal; y 3) Control aduanero.",
      "1) Exploración espacial; 2) Ayuda al desarrollo; y 3) Cultura."
    ],
    correcta: 0,
    referencia: "Concepto Estratégico de la OTAN (Madrid 2022)",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Las 3 Tareas Fundamentales (Cumbre de Madrid 2022)",
    consejoAcademia: "Las 3 misiones/tareas fundamentales de la OTAN (Concepto Estratégico de Madrid 2022): **1. Disuasión y defensa**, **2. Prevención y gestión de crisis**, **3. Seguridad cooperativa**.",
    justificacion: "El Concepto Estratégico de la OTAN de Madrid 2022 define como las tres tareas fundamentales de la Alianza: Disuasión y defensa, Prevención y gestión de crisis, y Seguridad cooperativa."
  },
  {
    id: "Q-W4-130",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según la estructura política de la OTAN (Vídeo T25), ¿cuál es el máximo órgano de decisión política de la Alianza, presidido por el Secretario General y donde todas las decisiones se toman por consenso unánime?",
    opciones: [
      "El Consejo del Atlántico Norte (NAC).",
      "El Comité Militar (MC).",
      "El Grupo de Planes Nucleares (NPG).",
      "El Estado Mayor Internacional (IMS)."
    ],
    correcta: 0,
    referencia: "Tratado del Atlántico Norte, Art. 9",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > El Consejo del Atlántico Norte (NAC)",
    consejoAcademia: "El Consejo del Atlántico Norte (NAC, creado por el Art. 9 del Tratado de Washington) es el único órgano mencionado expresamente en el Tratado y es la máxima autoridad política de la OTAN.",
    justificacion: "El Consejo del Atlántico Norte (NAC) es el principal órgano de toma de decisiones políticas de la OTAN, presidido por el Secretario General."
  },
  {
    id: "Q-W4-131",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T04",
    materia: "OTAN (Vídeo T25)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "En la estructura de mando de la OTAN (Vídeo T25), ¿dónde tienen su sede los tres Mandos Componentes únicos bajo dependencia de ACO (Terrestre LANDCOM, Marítimo MARCOM y Aéreo AIRCOM)?",
    opciones: [
      "LANDCOM en Esmirna (Izmir, Turquía), MARCOM en Northwood (Reino Unido) y AIRCOM en Ramstein (Alemania).",
      "Los tres tienen su sede en Bruselas (Bélgica).",
      "LANDCOM en Madrid, MARCOM en Rota y AIRCOM en Torrejón.",
      "LANDCOM en Varsovia, MARCOM en Roma y AIRCOM en París."
    ],
    correcta: 0,
    referencia: "Tema 4 Bloque 3 (Vídeo T25: OTAN), Mandos Componentes de la OTAN",
    ubicacionTemario: "Bloque 3 > Tema 4 (Vídeo T25: OTAN) > Sedes de LANDCOM, MARCOM y AIRCOM",
    consejoAcademia: "¡Sedes de los 3 Mandos Componentes OTAN!: **LANDCOM** (Tierra) = Esmirna/Izmir (Turquía); **MARCOM** (Mar) = Northwood (Reino Unido); **AIRCOM** (Aire) = Ramstein (Alemania).",
    justificacion: "En la estructura militar de la OTAN, el Mando Terrestre Aliado (LANDCOM) se ubica en Esmirna (Turquía), el Mando Marítimo Aliado (MARCOM) en Northwood (Reino Unido) y el Mando Aéreo Aliado (AIRCOM) en Ramstein (Alemania)."
  },

  // =========================================================================
  // B3-T05: OSCE (VÍDEO T26) — 6 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-132",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Vídeo T26)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según el tema oficial de la OSCE (Vídeo T26), ¿cuántos Estados participantes integran la Organización para la Seguridad y la Cooperación en Europa (de América del Norte, Europa y Asia Central) y dónde tiene su sede su Secretariado Permanente?",
    opciones: [
      "57 Estados participantes y su Secretariado tiene sede en Viena (Austria).",
      "32 Estados miembros y su sede está en Bruselas.",
      "27 Estados miembros y su sede está en Estrasburgo.",
      "193 Estados miembros y su sede está en Ginebra."
    ],
    correcta: 0,
    referencia: "Tema 5 Bloque 3 (Vídeo T26: OSCE)",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Estados Participantes (57) y Sede en Viena",
    consejoAcademia: "¡No confundas las cifras de Estados miembros!: **UE = 27**, **OTAN = 32**, **OSCE = 57** (¡en la OSCE se llaman 'Estados participantes'!), **ONU = 193**.",
    justificacion: "La OSCE cuenta con 57 Estados participantes de Europa, Asia Central y América del Norte, y su Secretariado e instituciones permanentes principales radican en Viena (Austria)."
  },
  {
    id: "Q-W4-133",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al origen histórico de la OSCE (Vídeo T26), nació inicialmente como Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE) con la firma del Acta Final de Helsinki el 1 de agosto de 1975. ¿En qué Cumbre de 1994 se acordó su cambio de denominación a Organización (OSCE), efectivo el 1 de enero de 1995?",
    opciones: [
      "En la Cumbre de Budapest de 1994.",
      "En la Cumbre de Lisboa de 2010.",
      "En la Cumbre de Roma de 1957.",
      "En la Cumbre de San Francisco de 1945."
    ],
    correcta: 0,
    referencia: "Tema 5 Bloque 3 (Vídeo T26: OSCE), Hitos históricos",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > De CSCE (Helsinki 1975 / Carta de París 1990) a OSCE (Budapest 1994)",
    consejoAcademia: "Hitos de la OSCE (Vídeo T26): **1975** = Acta Final de Helsinki; **1990** = Carta de París para una Nueva Europa; **1994** = Cumbre de Budapest (pasa de CSCE a OSCE el 1 de enero de 1995); **1999** = Cumbre de Estambul (Carta para la Seguridad Europea); **2007** = Presidencia española de la OSCE.",
    justificacion: "En la Cumbre de Budapest de diciembre de 1994 se decidió transformar la CSCE en una organización permanente bajo el nombre de OSCE a partir del 1 de enero de 1995."
  },
  {
    id: "Q-W4-134",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Vídeo T26)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el enfoque integral de seguridad de la OSCE (Vídeo T26), ¿cuáles son las tres dimensiones (antiguamente llamadas 'cestas' en Helsinki) en que desarrolla su actividad?",
    opciones: [
      "1) Dimensión político-militar; 2) Dimensión económica y medioambiental; y 3) Dimensión humana (derechos humanos, democracia y Estado de Derecho).",
      "1) Dimensión terrestre; 2) Dimensión naval; y 3) Dimensión aérea.",
      "1) Dimensión fiscal; 2) Dimensión aduanera; y 3) Dimensión monetaria.",
      "1) Dimensión penal; 2) Dimensión civil; y 3) Dimensión laboral."
    ],
    correcta: 0,
    referencia: "Tema 5 Bloque 3 (Vídeo T26: OSCE), Las 3 Dimensiones de la Seguridad",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Las 3 Dimensiones (Cestas)",
    consejoAcademia: "Las 3 Dimensiones (Cestas) de la OSCE: **1. Político-militar**, **2. Económica y medioambiental** y **3. Humana**.",
    justificacion: "La OSCE aborda la seguridad desde tres dimensiones complementarias: la político-militar, la económica y medioambiental, y la dimensión humana."
  },
  {
    id: "Q-W4-135",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Vídeo T26)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Trampa"],
    pregunta: "De acuerdo con la estructura institucional de la OSCE (Vídeo T26), ¿dónde tienen su sede la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH / ODIHR) y el Alto Comisionado para las Minorías Nacionales?",
    opciones: [
      "La OIDDH tiene su sede en Varsovia (Polonia) y el Alto Comisionado para las Minorías Nacionales en La Haya (Países Bajos).",
      "Ambos tienen su sede en Madrid (España).",
      "Ambos tienen su sede en Nueva York.",
      "La OIDDH en Roma y el Alto Comisionado en Berlín."
    ],
    correcta: 0,
    referencia: "Tema 5 Bloque 3 (Vídeo T26: OSCE), Instituciones de la OSCE",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Sedes de la OSCE (Viena, Varsovia, La Haya, Copenhague)",
    consejoAcademia: "¡Mapa de sedes de la OSCE que cae en los tests!: Secretariado y Consejo Permanente = **Viena**; OIDDH (Derechos Humanos/Elecciones) = **Varsovia**; Alto Comisionado para las Minorías Nacionales = **La Haya**; Asamblea Parlamentaria (Secretariado) = **Copenhague**.",
    justificacion: "Dentro de la OSCE, la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH) tiene su sede en Varsovia (Polonia) y el Alto Comisionado para las Minorías Nacionales en La Haya (Países Bajos)."
  },
  {
    id: "Q-W4-136",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Vídeo T26)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la organización de la OSCE (Vídeo T26), ¿quién ejerce la Presidencia en Ejercicio (Chairperson-in-Office) de la OSCE y durante cuánto tiempo?",
    opciones: [
      "Rota anualmente (por 1 año natural) entre los Estados participantes, siendo ejercida por el Ministro de Asuntos Exteriores del país que ostenta la presidencia ese año (asistido por la Troika de la OSCE: presidente anterior, actual y siguiente).",
      "El Secretario General de la OTAN por un mandato de diez años.",
      "El Presidente de la Comisión Europea.",
      "Un militar con empleo de Capitán General de forma vitalicia."
    ],
    correcta: 0,
    referencia: "Tema 5 Bloque 3 (Vídeo T26: OSCE), Presidencia en Ejercicio",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Presidencia Anual y Troika",
    consejoAcademia: "La Presidencia en Ejercicio de la OSCE rota **anualmente (1 año)** y la ostenta el Ministro de Asuntos Exteriores del Estado designado (España la ostentó en **2007**; el Consejo Ministerial previo de la CSCE se celebró en Madrid entre 1980 y 1983).",
    justificacion: "La Presidencia en Ejercicio de la OSCE rota cada año natural entre los Estados participantes y recae en el Ministro de Asuntos Exteriores del país correspondiente."
  },
  {
    id: "Q-W4-137",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T05",
    materia: "OSCE (Vídeo T26)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Conforme al tema de la OSCE (Vídeo T26), ¿en qué órgano autónomo de la OSCE, que se reúne semanalmente en Viena, se negocian acuerdos sobre control de armamentos y Medidas de Fomento de la Confianza y la Seguridad (MFCS, como el Documento de Viena)?",
    opciones: [
      "En el Foro de Cooperación para la Seguridad (FCS / FSC).",
      "En el Tribunal de Cuentas Europeo.",
      "En el Consejo Económico y Social.",
      "En la Agencia Europea de Defensa."
    ],
    correcta: 0,
    referencia: "Tema 5 Bloque 3 (Vídeo T26: OSCE), Foro de Cooperación para la Seguridad",
    ubicacionTemario: "Bloque 3 > Tema 5 (Vídeo T26: OSCE) > Foro de Cooperación para la Seguridad (FCS)",
    consejoAcademia: "En Viena se reúnen semanalmente dos órganos principales de la OSCE: el **Consejo Permanente** (decisiones políticas) y el **Foro de Cooperación para la Seguridad (FCS)** (aspectos militares, control de armas y medidas de confianza).",
    justificacion: "El Foro de Cooperación para la Seguridad (FCS) es el órgano autónomo de la OSCE encargado de la dimensión político-militar, el control de armamentos y las Medidas de Fomento de la Confianza y la Seguridad."
  },

  // =========================================================================
  // B3-T06: UNIÓN EUROPEA - UE (VÍDEO T27) — 6 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-138",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea - UE (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el artículo 13 del Tratado de la Unión Europea (TUE - Vídeo T27), ¿cuáles son las SIETE instituciones oficiales de la Unión Europea?",
    opciones: [
      "El Parlamento Europeo, el Consejo Europeo, el Consejo (de la UE), la Comisión Europea, el Tribunal de Justicia de la UE, el Banco Central Europeo y el Tribunal de Cuentas.",
      "El Comité de las Regiones, el Comité Económico y Social, el Defensor del Pueblo Europeo y Europol.",
      "El Consejo de Europa, el Tribunal Europeo de Derechos Humanos y la OSCE.",
      "La OTAN, la ONU y el FMI."
    ],
    correcta: 0,
    referencia: "Tratado de la Unión Europea (TUE), Art. 13",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T27: Unión Europea) > Las 7 Instituciones de la UE (Art. 13 TUE)",
    consejoAcademia: "¡Trampa mortal del Vídeo T27!: 1) No confundas **Consejo Europeo** (Jefes de Estado o de Gobierno, institución UE) con **Consejo de la UE** (Ministros de los 27, institución UE) ni con el **Consejo de Europa** (organización ajena a la UE de 46 países con sede en Estrasburgo). 2) El SEAE y la AED son órganos/agencias de la PCSD, no una de las 7 instituciones del Art. 13.",
    justificacion: "El artículo 13.1 del Tratado de la Unión Europea enumera las siete instituciones de la UE: Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia de la UE, Banco Central Europeo y Tribunal de Cuentas."
  },
  {
    id: "Q-W4-139",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea - UE (Vídeo T27)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Conforme al Tratado de la Unión Europea y al Tratado de Funcionamiento de la UE (Vídeo T27), ¿qué diferencia existe entre la cláusula del artículo 42.7 del TUE y la cláusula del artículo 222 del TFUE?",
    opciones: [
      "El Art. 42.7 TUE es la Cláusula de Asistencia Mutua (si un Estado miembro es objeto de una agresión armada en su territorio, los demás le deberán ayuda y asistencia con todos los medios a su alcance); mientras que el Art. 222 TFUE es la Cláusula de Solidaridad (actuación conjunta si un Estado miembro es objeto de un ataque terrorista o víctima de una catástrofe natural o de origen humano).",
      "El Art. 42.7 TUE regula el euro y el Art. 222 TFUE regula la política pesquera.",
      "Son exactamente al revés: el Art. 42.7 es para catástrofes naturales y el Art. 222 para agresión armada.",
      "Ambas cláusulas fueron derogadas por el Tratado de Lisboa."
    ],
    correcta: 0,
    referencia: "Art. 42.7 TUE y Art. 222 TFUE",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T27: Unión Europea) > Cláusula de Asistencia Mutua (42.7 TUE) vs Solidaridad (222 TFUE)",
    consejoAcademia: "¡Pregunta fija de examen en el Vídeo T27!: **Art. 42.7 TUE = Asistencia Mutua ante AGRESIÓN ARMADA** (el 'Art. 5 europeo'). **Art. 222 TFUE = Solidaridad ante ATAQUE TERRORISTA o CATÁSTROFE natural/humana**.",
    justificacion: "El artículo 42.7 del TUE consagra la cláusula de asistencia mutua en caso de agresión armada en el territorio de un Estado miembro, y el artículo 222 del TFUE establece la cláusula de solidaridad frente a ataques terroristas o catástrofes."
  },
  {
    id: "Q-W4-140",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea - UE (Vídeo T27)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según la estructura de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea (Vídeo T27), ¿cuál es el órgano militar más alto creado en el seno del Consejo, compuesto por los Jefes de Estado Mayor de la Defensa (JEMAD) de los Estados miembros, que asesora al Comité Político y de Seguridad (CPS)?",
    opciones: [
      "El Comité Militar de la Unión Europea (CMUE / EUMC), apoyado por el Estado Mayor de la Unión Europea (EMUE / EUMS).",
      "La Agencia Europea de Guardia de Fronteras y Costas (Frontex).",
      "El Banco Europeo de Inversiones.",
      "La Comisión Mixta del Eurogrupo."
    ],
    correcta: 0,
    referencia: "Tema 6 Bloque 3 (Vídeo T27: Unión Europea), Estructura PCSD (CPS, CMUE, EMUE)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T27: Unión Europea) > Órganos de la PCSD: ARVAE, SEAE, CPS, CMUE, EMUE y AED",
    consejoAcademia: "Escalera de la PCSD en el Vídeo T27: **ARVAE** (Alto Representante, apoyado por el **SEAE**) ➔ **CPS** (Comité Político y de Seguridad, nivel embajadores) ➔ **CMUE** (Comité Militar de la UE, formado por los JEMAD) ➔ **EMUE** (Estado Mayor de la UE). Y para capacidades e industria de defensa: **AED** (Agencia Europea de Defensa) y **PESCO** (Cooperación Estructurada Permanente).",
    justificacion: "El Comité Militar de la Unión Europea (CMUE) es el máximo órgano militar establecido en el Consejo, integrado por los Jefes de Defensa de los Estados miembros, y dirige las actividades del Estado Mayor de la UE (EMUE)."
  },
  {
    id: "Q-W4-141",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea - UE (Vídeo T27)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el tema oficial de la Unión Europea (Vídeo T27), ¿qué agencia de la Unión Europea en el ámbito de la PCSD tiene su sede en la Base Aérea de Torrejón de Ardoz (Madrid) y qué cuartel general operativo estratégico de la UE radica en la Base Naval de Rota (Cádiz)?",
    opciones: [
      "El Centro de Satélites de la Unión Europea (SATCEN) en Torrejón de Ardoz y el Cuartel General de Operaciones de la UE en Rota (ES-OHQ, mando de la Operación EUNAVFOR Atalanta).",
      "La Agencia Europea de Defensa (AED) en Madrid y Europol en Cádiz.",
      "El Instituto de Estudios de Seguridad de la UE en Sevilla.",
      "El Tribunal de Justicia de la UE en Barcelona."
    ],
    correcta: 0,
    referencia: "Tema 6 Bloque 3 (Vídeo T27: Unión Europea), España y la PCSD",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T27: Unión Europea) > SATCEN (Torrejón) y ES-OHQ (Rota)",
    consejoAcademia: "¡Dos sedes de la UE en España en el ámbito de Defensa!: 1) **SATCEN** (Centro de Satélites de la UE) en **Torrejón de Ardoz (Madrid)**; 2) **ES-OHQ** (Cuartel General Operativo de la UE) en la **Base Naval de Rota (Cádiz)**.",
    justificacion: "España alberga en Torrejón de Ardoz el Centro de Satélites de la Unión Europea (SATCEN) y en la Base Naval de Rota el Cuartel General Operativo (ES-OHQ) que dirige la operación EUNAVFOR Atalanta."
  },
  {
    id: "Q-W4-142",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea - UE (Vídeo T27)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según la evolución histórica de la Unión Europea (Vídeo T27), ¿en qué fecha firmó España el Tratado de Adhesión a las Comunidades Europeas en el Palacio Real de Madrid y en qué fecha entró en vigor su ingreso efectivo?",
    opciones: [
      "Firmó el Tratado de Adhesión el 12 de junio de 1985 y entró en vigor el 1 de enero de 1986.",
      "Firmó en 1957 en Roma como miembro fundador.",
      "Ingresó el 14 de diciembre de 1955.",
      "Ingresó el 30 de mayo de 1982."
    ],
    correcta: 0,
    referencia: "Tema 6 Bloque 3 (Vídeo T27: Unión Europea), España en la UE",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T27: Unión Europea) > Adhesión de España (1985 / 1986)",
    consejoAcademia: "No confundas la fecha de firma en el Palacio Real de Madrid (**12 de junio de 1985**) con la entrada en vigor efectiva del ingreso de España y Portugal (**1 de enero de 1986**). Además, España ha ostentado la Presidencia del Consejo de la UE en **5 ocasiones** (1989, 1995, 2002, 2010 y segundo semestre de 2023).",
    justificacion: "España firmó el Tratado de Adhesión el 12 de junio de 1985 y se convirtió en miembro de pleno derecho el 1 de enero de 1986."
  },
  {
    id: "Q-W4-143",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T06",
    materia: "Unión Europea - UE (Vídeo T27)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada", "2025/2026"],
    pregunta: "Conforme al documento 'Brújula Estratégica para la Seguridad y la Defensa' (Strategic Compass) aprobado por la Unión Europea en marzo de 2022 (Vídeo T27), ¿qué capacidad militar de despliegue rápido se acordó crear para responder a crisis fuera de las fronteras de la UE?",
    opciones: [
      "La Capacidad de Despliegue Rápido de la UE (EU Rapid Deployment Capacity - RDC), con hasta 5.000 efectivos modulares.",
      "Un ejército permanente de 500.000 soldados de reemplazo obligatorio.",
      "La disolución de los Grupos de Combate (Battlegroups).",
      "La transferencia del mando europeo a la OSCE."
    ],
    correcta: 0,
    referencia: "Tema 6 Bloque 3 (Vídeo T27: Unión Europea), Brújula Estratégica (2022)",
    ubicacionTemario: "Bloque 3 > Tema 6 (Vídeo T27: Unión Europea) > Brújula Estratégica y Capacidad de Despliegue Rápido (5.000 efectivos)",
    consejoAcademia: "La Brújula Estratégica (2022) se estructura en 4 pilares (Actuar, Garantizar la seguridad, Invertir y Asociarse) y prevé la **Capacidad de Despliegue Rápido de la UE (hasta 5.000 militares)**.",
    justificacion: "La Brújula Estratégica de la UE establece la creación de una Capacidad de Despliegue Rápido de la UE de hasta 5.000 efectivos para distintos tipos de crisis."
  },

  // =========================================================================
  // B3-T07: MISIONES INTERNACIONALES FAS (VÍDEO T28) — 7 PREGUNTAS
  // =========================================================================
  {
    id: "Q-W4-144",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Fácil"],
    pregunta: "Según la historia de las misiones internacionales de las Fuerzas Armadas españolas (Vídeo T28), ¿en qué año y en qué misión de las Naciones Unidas inició España su participación en operaciones de mantenimiento de la paz en el exterior?",
    opciones: [
      "En 1989, en las misiones de la ONU en Angola (UNAVEM I) y Namibia (UNTAG).",
      "En 1955 en la Guerra de Corea.",
      "En 2006 en el Líbano.",
      "En 1999 en Kosovo."
    ],
    correcta: 0,
    referencia: "Tema 7 Bloque 3 (Vídeo T28: Misiones FAS), Hitos Históricos (1989)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > Primeras Misiones Internacionales (1989: Angola y Namibia)",
    consejoAcademia: "¡Fecha inaugural de las misiones en el exterior (Vídeo T28)!: **Año 1989**, con observadores militares en **Angola (UNAVEM)** y un destacamento del Ejército del Aire con aviones T-12 Aviocar en **Namibia (UNTAG)**, seguido ese mismo año por Centroamérica (**ONUCA**).",
    justificacion: "España inició su participación en misiones internacionales de paz en 1989 bajo bandera de la ONU en Angola (UNAVEM I) y Namibia (UNTAG)."
  },
  {
    id: "Q-W4-145",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Nivel Medio", "2025/2026"],
    pregunta: "Conforme al despliegue actual de las Fuerzas Armadas españolas en el exterior bajo el paraguas de la OTAN en el Flanco Este (Vídeo T28), ¿en qué país ejerce España desde 2024 el papel de 'Nación Marco' (Framework Nation) liderando la Brigada Multinacional de la Alianza en el campo de maniobras de Lešť?",
    opciones: [
      "En Eslovaquia (Operación F/E SVK).",
      "En Letonia (donde España participa en el Battlegroup liderado por Canadá en Adazi).",
      "En Estonia.",
      "En Finlandia."
    ],
    correcta: 0,
    referencia: "Tema 7 Bloque 3 (Vídeo T28: Misiones FAS), Misiones OTAN en el Flanco Este (2024-2026)",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > España en el Flanco Este OTAN: Eslovaquia, Letonia y Rumanía",
    consejoAcademia: "¡Pregunta estrella de actualidad 2025/2026 del Vídeo T28!: En **Letonia (Adazi)** la Nación Marco es Canadá (España aporta subgrupo mecanizado/acorazado y artillería); en **Eslovaquia (Lešť)** **ESPAÑA es la NACIÓN MARCO** liderando el Multinational Battlegroup desde 2024!",
    justificacion: "Desde 2024 España ejerce como Nación Marco (Framework Nation) de la agrupación táctica multinacional de la OTAN desplegada en Lešť (Eslovaquia)."
  },
  {
    id: "Q-W4-146",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "trampa",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Importante", "Trampa"],
    pregunta: "Según el cuadro de misiones internacionales en curso de las FAS (Vídeo T28), ¿a qué organización internacional pertenece cada una de las siguientes misiones en las que participa España: 1) FINUL / Operación Libre Hidalgo (Líbano), 2) Operación Atalanta (Océano Índico / Somalia) y 3) Operación Sea Guardian (Mediterráneo)?",
    opciones: [
      "1) FINUL = ONU; 2) Operación Atalanta = Unión Europea (EUNAVFOR); y 3) Operación Sea Guardian = OTAN.",
      "1) FINUL = OTAN; 2) Atalanta = ONU; y 3) Sea Guardian = Unión Europea.",
      "Las tres pertenecen a la Unión Europea.",
      "Las tres pertenecen a la OTAN."
    ],
    correcta: 0,
    referencia: "Tema 7 Bloque 3 (Vídeo T28: Misiones FAS), Clasificación por Organización Internacional",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > Misiones ONU, OTAN y UE",
    consejoAcademia: "¡La pregunta más repetida del Tema 28!: El Tribunal mezcla las siglas de misiones entre ONU, OTAN y UE. Recuerda: **ONU** = FINUL (Líbano, 'Libre Hidalgo' en Base Miguel de Cervantes de Marjayoun) y Colombia. **OTAN** = Flanco Este (Letonia, Eslovaquia, Rumanía), Policía Aérea Báltico (BAP), Turquía (Patriot en Incirlik, 'Apoyo a Turquía'), Irak (NMI) y **Sea Guardian** (Mediterráneo). **UE** = **EUNAVFOR Atalanta** (Índico), **EUTM Somalia**, **EUTM RCA** (Rep. Centroafricana), **EUFOR Althea** (Bosnia-Herzegovina) y **EUMAM Ucrania**.",
    justificacion: "La misión FINUL (Operación Libre Hidalgo en Líbano) es una misión de la ONU; la Operación EUNAVFOR Atalanta en el Índico es de la Unión Europea; y la Operación Sea Guardian en el Mediterráneo es de la OTAN."
  },
  {
    id: "Q-W4-147",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "De acuerdo con el tema de Misiones Internacionales (Vídeo T28), ¿qué es la 'Operación Balmis' (2020) y las Operaciones Permanentes de Presencia, Vigilancia y Disuasión (OPVD) en los espacios de soberanía nacional?",
    opciones: [
      "Son operaciones conducidas por el Mando de Operaciones (MOPS) bajo mando operativo del JEMAD en territorio y espacios de soberanía nacional (a través del MOT, MOM, MOA, MOESPA y MOC) para garantizar la seguridad y protección de los ciudadanos.",
      "Son misiones exclusivas de la OSCE en Asia Central.",
      "Son ejercicios deportivos internacionales.",
      "Son misiones dependientes del Ministerio de Agricultura."
    ],
    correcta: 0,
    referencia: "Tema 7 Bloque 3 (Vídeo T28: Misiones FAS), Operaciones Permanentes y MOPS",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > Conducción por el MOPS y Operaciones Permanentes",
    consejoAcademia: "Todas las operaciones (tanto en el exterior como las Operaciones Permanentes de Presencia, Vigilancia y Disuasión 24/7 en los 5 dominios nacionales) son conducidas en el nivel operacional por el **Mando de Operaciones (MOPS)** en Retamares (Pozuelo de Alarcón, Madrid).",
    justificacion: "El Mando de Operaciones (MOPS), subordinado al JEMAD, conduce tanto las misiones internacionales en el exterior como las Operaciones Permanentes de Presencia, Vigilancia y Disuasión en los espacios de soberanía nacional."
  },
  {
    id: "Q-W4-148",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "media",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Nivel Medio"],
    pregunta: "Según el despliegue español en Turquía dentro del marco de la OTAN (Operación 'Apoyo a Turquía' / Active Fence - Vídeo T28), ¿en qué ciudad turca se encuentra desplegada la batería española de misiles antiaéreos Patriot para la defensa antimisiles de la población aliada?",
    opciones: [
      "En la Base Aérea de Incirlik (Adana, Turquía).",
      "En Estambul.",
      "En Esmirna.",
      "En Ankara."
    ],
    correcta: 0,
    referencia: "Tema 7 Bloque 3 (Vídeo T28: Misiones FAS), Operación Apoyo a Turquía",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > Batería Patriot en Incirlik (Adana, Turquía)",
    consejoAcademia: "La unidad Patriot del Ejército de Tierra está desplegada desde 2015 en la Base Aérea de **Incirlik (Adana, Turquía)** en misión de defensa aérea de la OTAN.",
    justificacion: "El contingente español de artillería antiaérea con misiles Patriot se encuentra desplegado en la Base Aérea de Incirlik (Adana, Turquía) bajo mando de la OTAN."
  },
  {
    id: "Q-W4-149",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "rebuscada",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Rebuscada"],
    pregunta: "Conforme al tema de Misiones Internacionales y de Seguridad Cooperativa (Vídeo T28), los despliegues de buques de la Armada y destacamentos aéreos españoles en el Golfo de Guinea y África Occidental (como los Destacamentos Aéros Tácticos 'Marfil' en Senegal) se enmarcan en el concepto de:",
    opciones: [
      "Actividades de Seguridad Cooperativa y Presencia Marítima Coordinada de la UE en el Golfo de Guinea, orientadas a reforzar las capacidades locales y prevenir el terrorismo, el tráfico ilícito y la piratería.",
      "Aplicación del Artículo 5 del Tratado de Washington.",
      "Intervención bajo el Capítulo VII de la Carta de la ONU en el Ártico.",
      "Misión de observación electoral de la OSCE."
    ],
    correcta: 0,
    referencia: "Tema 7 Bloque 3 (Vídeo T28: Misiones FAS), Seguridad Cooperativa y África Occidental",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > Seguridad Cooperativa y Golfo de Guinea",
    consejoAcademia: "En África Occidental y el Golfo de Guinea destacan las actividades de **Seguridad Cooperativa**, las Presencias Marítimas Coordinadas de la UE y el apoyo aéreo desde Dakar (Senegal).",
    justificacion: "Los despliegues en África Occidental y el Golfo de Guinea forman parte de las actividades de Seguridad Cooperativa y de la Presencia Marítima Coordinada para fortalecer la estabilidad regional."
  },
  {
    id: "Q-W4-150",
    bloque: "Bloque 3: Seguridad Nacional",
    temaCodigo: "B3-T07",
    materia: "Misiones Internacionales FAS (Vídeo T28)",
    dificultad: "facil",
    esExamenOficial: true,
    etiquetas: ["Pregunta de Examen", "Fácil"],
    pregunta: "Según el artículo 19 de la Ley Orgánica 5/2005 y el tema de Misiones Internacionales (Vídeo T28), para que las unidades de las Fuerzas Armadas españolas participen en misiones fuera del territorio nacional que no estén directamente relacionadas con la defensa de España, ¿cuáles son las condiciones establecidas legalmente?",
    opciones: [
      "Que se realicen por petición expresa del Estado en cuyo territorio se desarrollen o estén autorizadas en Resoluciones del Consejo de Seguridad de la ONU o acordadas por organizaciones internacionales de las que España forme parte (UE, OTAN, OSCE), cumplan con los fines defensivos/humanitarios/de paz y sean conforme al derecho internacional.",
      "Que tengan carácter exclusivamente lucrativo para sufragar el presupuesto del Ministerio.",
      "Que las apruebe únicamente el Alcalde de la localidad donde radique la base militar.",
      "No se exige ninguna condición ni autorización parlamentaria."
    ],
    correcta: 0,
    referencia: "Ley Orgánica 5/2005, Art. 19",
    ubicacionTemario: "Bloque 3 > Tema 7 (Vídeo T28: Misiones FAS) > Condiciones de las Misiones en el Exterior (Art. 19 LODN)",
    consejoAcademia: "Las 3 condiciones del Art. 19 LODN: 1) Petición expresa del Estado anfitrión o resolución ONU / acuerdo UE-OTAN-OSCE; 2) Fines defensivos, humanitarios, de estabilización o mantenimiento de la paz; 3) Conformidad con la Carta de la ONU y el Derecho Internacional convencional.",
    justificacion: "El artículo 19 de la Ley Orgánica 5/2005 regula las condiciones que deben cumplir las operaciones de las Fuerzas Armadas en el exterior."
  }
];

function mergeWave4QuestionsIntoBank() {
  if (typeof DEFAULT_QUESTIONS === "undefined" || !Array.isArray(DEFAULT_QUESTIONS)) return;
  const existingIds = new Set(DEFAULT_QUESTIONS.map(q => q.id));
  const allWave4 = [...WAVE4_QUESTIONS_PART1, ...WAVE4_QUESTIONS_PART2];

  allWave4.forEach(q => {
    if (!existingIds.has(q.id)) {
      DEFAULT_QUESTIONS.push(q);
      existingIds.add(q.id);
    }
  });
}

mergeWave4QuestionsIntoBank();
