/**
 * BASE DE DATOS DEL TEMARIO OFICIAL ESTRUCTURADO (ORDEN DEF/1341/2017 ANEXO III + ACTUALIZACIONES 2025/2026)
 * Oposición de Permanencia de Tropa y Marinería (Ejército de Tierra)
 * 21 TEMAS OFICIALES:
 * - Bloque 1: Organización (6 Temas: B1-T01 a B1-T06)
 * - Bloque 2: Jurídico-Social (8 Temas: B2-T01 a B2-T08)
 * - Bloque 3: Seguridad Nacional, Acción Conjunta y OO.II. (7 Temas: B3-T01 a B3-T07)
 */

const ACADEMY_INTELLIGENCE = {
  formatoOficial: {
    preguntas: 100,
    minutos: 120,
    opciones: 4,
    formula: "P = A - (E / 3)",
    pesoOposicion: "50% Oposición + 50% Concurso de Méritos"
  },
  repartoEstadisticoBloques: [
    {
      bloque: "Bloque 2: Jurídico-Social",
      porcentaje: "40%",
      preguntasMedia: "38 a 42 preguntas / examen",
      importancia: "CRÍTICO 🔥 (El bloque que decide el APTO)",
      temasEstrella: "Régimen Disciplinario (LO 8/2014), Carrera Militar (Ley 39/2007), Tropa y Marinería (Ley 8/2006), Reales Ordenanzas (RD 96/2009), Derechos y Deberes (LO 9/2011) y Ley 39/2015 (LPACAP)."
    },
    {
      bloque: "Bloque 1: Organización",
      porcentaje: "34%",
      preguntasMedia: "32 a 36 preguntas / examen",
      importancia: "MUY ALTA ⭐ (Muchas preguntas de organigramas)",
      temasEstrella: "Estructura MINISDEF actualizada (RD 205/2024 y RD 268/2025), Organización ET (Instrucción 14/2021), EMAD (Orden DEF/710/2020), Constitución Española y Ley 40/2015 (LRJSP)."
    },
    {
      bloque: "Bloque 3: Seguridad Nacional",
      porcentaje: "26%",
      preguntasMedia: "24 a 28 preguntas / examen",
      importancia: "ALTA 📌 (Puntos muy rentables y rápidos de asegurar)",
      temasEstrella: "Ley 36/2015 de Seguridad Nacional, Estrategia de Seguridad Nacional (RD 1150/2021), Doctrina PDC-01, ONU, OTAN, OSCE, UE y Misiones Internacionales."
    }
  ]
};

const OFFICIAL_SYLLABUS = [
  // =========================================================================
  // BLOQUE 1: ORGANIZACIÓN (6 TEMAS OFICIALES - ORDEN DEF/1341/2017)
  // =========================================================================
  {
    codigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    numero: 1,
    frecuenciaExamen: "MUY ALTA 🔥 (6-8 preg/año)",
    titulo: "Tema 1. Organización Política y Territorial del Estado en la Constitución Española. La Monarquía Parlamentaria",
    normativa: "Constitución Española de 1978 (Título Preliminar, Título II La Corona, Título IV Gobierno y Título VIII Organización Territorial)",
    resumen: "Estudia la estructura constitucional del Estado español como Estado social y democrático de Derecho cuya forma política es la Monarquía parlamentaria (Art. 1). Analiza las funciones constitucionales del Rey como Jefe del Estado y Mando Supremo de las FAS (Título II, arts. 56 a 65), el Gobierno y la Administración (Título IV, arts. 97 a 107) y la organización territorial en municipios, provincias y Comunidades Autónomas (Título VIII, arts. 137 a 158).",
    puntosCalientes: [
      "Art. 1.1 CE: Valores superiores: Libertad, Justicia, Igualdad y Pluralismo político.",
      "Art. 8.1 CE: Misión de las FAS (ET, Armada y EA): garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.",
      "Art. 56 y 62.h CE: El Rey es el Jefe del Estado, símbolo de su unidad y permanencia; ejerce el Mando Supremo de las Fuerzas Armadas.",
      "Art. 64 CE (Refrendo): Los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes (salvo el nombramiento y relevo de los miembros civiles y militares de su Casa, art. 65.2).",
      "Art. 97 CE: El Gobierno dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado.",
      "Art. 116 CE: Estado de Alarma (Gobierno por decreto, máx. 15 días), Excepción (Gobierno previa autorización del Congreso, máx. 30 días prorrogables otros 30) y Sitio (Mayoría absoluta del Congreso a propuesta exclusiva del Gobierno)."
    ],
    trampas: [
      "⚠️ TRAMPA DE REFRENDO (Art. 64.1 CE): La propuesta y el nombramiento del Presidente del Gobierno, y la disolución prevista en el art. 99, serán refrendados por el PRESIDENTE DEL CONGRESO (no por el Presidente del Gobierno saliente).",
      "⚠️ TRAMPA ART. 8 VS ART. 104 CE: Defender el ordenamiento constitucional es misión de las FAS (Art. 8); proteger el libre ejercicio de derechos y garantizar la seguridad ciudadana es misión de las Fuerzas y Cuerpos de Seguridad (Art. 104)."
    ]
  },
  {
    codigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    numero: 2,
    frecuenciaExamen: "MUY ALTA 🔥 (5-7 preg/año)",
    titulo: "Tema 2. Regulación de la Defensa Nacional (LO 5/2005) y Las Cortes Generales",
    normativa: "Ley Orgánica 5/2005, de 17 de noviembre, de la Defensa Nacional y Título III CE (Cortes Generales, arts. 66 a 96)",
    resumen: "Desarrolla las bases de la organización militar conforme al artículo 8.2 CE y el papel de las Cortes Generales (Congreso de los Diputados y Senado). Regula las atribuciones del Gobierno, del Presidente del Gobierno, del Ministro de Defensa, del Consejo de Defensa Nacional y del JEMAD, así como el control parlamentario de las misiones en el exterior.",
    puntosCalientes: [
      "Art. 66 CE: Las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados (entre 300 y 400 diputados; LOREG fija 350) y el Senado (cámara de representación territorial).",
      "Art. 68.6 CE (Plazo clave de examen): Las elecciones tendrán lugar entre los 30 y 60 días desde la terminación del mandato. El Congreso electo deberá ser convocado dentro de los 25 DÍAS siguientes a la celebración de las elecciones.",
      "Art. 6 LODN 5/2005 (Presidente del Gobierno): Dirige la política de defensa, gestiona las situaciones de crisis y ordena las misiones de las FAS.",
      "Art. 11 LODN 5/2005 (Doble estructura de las FAS): Estructura ORGÁNICA (preparación de la fuerza: ET, Armada y EA) y estructura OPERATIVA (empleo de la fuerza en misiones, bajo mando del JEMAD).",
      "Art. 17 LODN 5/2005: Las operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional requieren consulta previa y autorización del CONGRESO DE LOS DIPUTADOS.",
      "Consejo de Defensa Nacional (Arts. 8 y 9 LODN): Órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa."
    ],
    trampas: [
      "⚠️ TRAMPA PLAZOS ELECTORALES (Art. 68.6 CE): Elecciones = entre 30 y 60 días tras fin de mandato. Convocatoria del Congreso electo = dentro de los 25 DÍAS siguientes a las elecciones.",
      "⚠️ TRAMPA CONSEJO DE DEFENSA NACIONAL: Puede funcionar en Pleno o como Consejo Ejecutivo (nunca confundir con la Junta de Defensa Nacional derogada)."
    ]
  },
  {
    codigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    numero: 3,
    frecuenciaExamen: "ALTA ⭐ (4-6 preg/año)",
    titulo: "Tema 3. Régimen Jurídico del Sector Público (Ley 40/2015)",
    normativa: "Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público (LRJSP)",
    resumen: "Regula la organización y funcionamiento interno de la Administración General del Estado (AGE), los órganos administrativos, la competencia (delegación, avocación, encomienda de gestión, delegación de firma y suplencia), la estructura de los Ministerios (Órganos Superiores y Órganos Directivos) y la Administración Periférica (Delegados y Subdelegados del Gobierno).",
    puntosCalientes: [
      "Órganos Superiores de un Ministerio (Art. 55 Ley 40/2015): 1) Los Ministros y 2) Los Secretarios de Estado.",
      "Órganos Directivos de la Organización Central (Art. 55 Ley 40/2015): 1) Subsecretarios y Secretarios Generales (tienen rango de Subsecretario), 2) Secretarios Generales Técnicos y Directores Generales (rango de Director General), y 3) Subdirectores Generales.",
      "Órganos Directivos de la Organización Territorial: Delegados del Gobierno en las CC.AA. (tienen rango de SUBSECRETARIO) y Subdelegados del Gobierno en las provincias (nivel de SUBDIRECTOR GENERAL).",
      "Creación de órganos (Art. 59 Ley 40/2015): Subsecretarías, Secretarías Generales, Secretarías Generales Técnicas y Direcciones Generales se crean por REAL DECRETO del Consejo de Ministros. Las Subdirecciones Generales se crean por Real Decreto, y los órganos inferiores por ORDEN MINISTERIAL.",
      "Delegación de competencias vs Avocación (Arts. 9 y 10): La delegación se publica en el BOE y las resoluciones se consideran dictadas por el órgano delegante. La avocación no es recurrible de forma independiente (solo junto con la resolución final)."
    ],
    trampas: [
      "⚠️ TRAMPA DE RANGOS (Art. 55 Ley 40/2015): Los Secretarios Generales NO son órganos superiores; son órganos DIRECTIVOS con rango de Subsecretario. Y los Delegados del Gobierno en las CC.AA. tienen rango de SUBSECRETARIO.",
      "⚠️ TRAMPA DELEGACIÓN (Art. 9.5): Salvo autorización expresa de una Ley, NO podrán delegarse las competencias que se ejerzan por delegación (prohibición de subdelegación)."
    ]
  },
  {
    codigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    numero: 4,
    frecuenciaExamen: "MUY ALTA 🔥 (6-8 preg/año)",
    titulo: "Tema 4. Ministerio de Defensa: Estructura Orgánica (RD 205/2024 y RD 268/2025)",
    normativa: "Real Decreto 205/2024, por el que se desarrolla la estructura orgánica básica del Ministerio de Defensa (y mod. RD 268/2025)",
    resumen: "Tema de máxima actualidad en las convocatorias 2024, 2025 y 2026. Detalla qué direcciones generales y organismos dependen directamente de la Persona Titular del Ministerio, de la Secretaría de Estado de Defensa (SEDEF), de la Subsecretaría de Defensa (SUBDEF) y de la Secretaría General de Política de Defensa (SEGENPOL).",
    puntosCalientes: [
      "Órganos principales del MINISDEF: 1) Las Fuerzas Armadas, 2) La Secretaría de Estado de Defensa (SEDEF), 3) La Subsecretaría de Defensa (SUBDEF), y 4) La Secretaría General de Política de Defensa (SEGENPOL).",
      "Dependen de la SEDEF: 1) Dirección General de Armamento y Material (DGAM), 2) Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID - ¡Novedad RD 205/2024!), 3) Dirección General de Asuntos Económicos (DIGENECO), 4) Dirección General de Infraestructura (DIGENIN), y 5) Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC).",
      "Dependen de la SUBDEF: 1) Secretaría General Técnica (SEGENTE), 2) Dirección General de Personal (DIGENPER), 3) Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM), 4) Asesoría Jurídica General de la Defensa, 5) Intervención General de la Defensa (IGD), e 6) Inspección General de Sanidad de la Defensa (IGESAN). También se le adscriben el INVIED e ISFAS.",
      "Depende de la SEGENPOL: La Dirección General de Política de Defensa (DIGENPOL), además de las Agregadurías de Defensa y la División de Coordinación y Estudios de Seguridad y Defensa (DICOES).",
      "Dependen directamente del Ministro de Defensa: La Guardia Real (operativamente del JEMAD), la Unidad Militar de Emergencias (UME), el Centro Nacional de Inteligencia (CNI) y la Dirección de Comunicación Institucional de la Defensa (DIRCOMDEF)."
    ],
    trampas: [
      "⚠️ ¡NOVEDAD ESTRELLA EXAMEN 2024/2025 (RD 205/2024)!: Se creó en la SEDEF la 'Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID)', sumando 4 Direcciones Generales + el CESTIC (con rango de Dirección General) en la SEDEF.",
      "⚠️ TRAMPA DE ADSCRIPCIÓN: El ISFAS y el INVIED están adscritos a la SUBSECRETARÍA DE DEFENSA (SUBDEF), mientras que el INTA (Instituto Nacional de Técnica Aeroespacial) está adscrito a la SECRETARÍA DE ESTADO DE DEFENSA (SEDEF)."
    ]
  },
  {
    codigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    numero: 5,
    frecuenciaExamen: "ALTA ⭐ (4-5 preg/año)",
    titulo: "Tema 5. Organización Básica de las Fuerzas Armadas (RD 521/2020)",
    normativa: "Real Decreto 521/2020, de 19 de mayo, por el que se establece la organización básica de las Fuerzas Armadas",
    resumen: "Establece los principios de la organización de las FAS en Estructura Operativa (bajo el mando del JEMAD, para el empleo de las fuerzas en operaciones) y Estructura Orgánica (ET, Armada y EA, bajo el mando de sus respectivos JEME, AJEMA y JEMA, responsables de generar y preparar la Fuerza).",
    puntosCalientes: [
      "Cadena de autoridades militares de las FAS (Art. 4 RD 521/2020): El JEMAD, el JEME, el AJEMA y el JEMA constituyen la cadena de autoridades militares.",
      "Estructura Operativa (Art. 6): Compuesta por el Estado Mayor de la Defensa (EMAD), los Mandos Operativos subordinados (Mando Operativo Terrestre MOT, Marítimo MOM, Aéreo MOA, Ciberespacial MOC y Espacial MOE) y las organizaciones operativas permanentes o temporales.",
      "Estructura Orgánica (Art. 14): Cada Ejército (Tierra, Armada y Aire y del Espacio) está compuesto por: 1) El Cuartel General, 2) La Fuerza, y 3) El Apoyo a la Fuerza.",
      "Transformación Digital y Acción Conjunta: El JEMAD impulsa la acción conjunta y define los requisitos operativos conjuntos."
    ],
    trampas: [
      "⚠️ TRAMPA MANDOS OPERATIVOS: Son CINCO Mandos Operativos permanentes bajo el mando del JEMAD a través del CMOPS: Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Ciberespacial (MOC) y Aeroespacial/Espacial (MOE).",
      "⚠️ TRAMPA TRANSFERENCIA DE AUTORIDAD (TOA): Las unidades de los Ejércitos pasan de la estructura orgánica a la estructura operativa mediante el procedimiento de Transferencia de Autoridad (TOA) al JEMAD."
    ]
  },
  {
    codigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    numero: 6,
    frecuenciaExamen: "MUY ALTA 🔥 (6-9 preg/año)",
    titulo: "Tema 6. Desarrollo de la Organización del EMAD, Ejército de Tierra, Armada y Ejército del Aire y del Espacio",
    normativa: "Orden DEF/710/2020 (EMAD), Instrucción 14/2021 (Ejército de Tierra), Instrucción 15/2021 (Armada) e Instrucción 6/2025 (EA)",
    resumen: "Desarrolla al detalle la estructura interna del EMAD y de los tres Ejércitos, con especial énfasis para el opositor del Ejército de Tierra en la Instrucción 14/2021 del JEME.",
    puntosCalientes: [
      "EMAD (Orden DEF/710/2020): Se articula en: 1) Cuartel General del EMAD (con el EMACON y JEFAD), 2) Mando de Operaciones (MOPS), 3) Centro de Inteligencia de las FAS (CIFAS), 4) Mando Conjunto del Ciberespacio (MCCE), y 5) CESEDEN.",
      "Ejército de Tierra - Cuartel General (Instrucción 14/2021): Integrado por el Estado Mayor del Ejército (EME), el Gabinete del JEME, la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), el Instituto de Historia y Cultura Militar (IHCM), la Asesoría Jurídica del ET y la Intervención Delegada Central.",
      "Ejército de Tierra - La Fuerza (Instrucción 14/2021): Compuesta por: 1) Cuartel General Terrestre de Alta Disponibilidad (CGTAD - Bétera, Valencia), 2) Fuerza Terrestre (FUTER - Sevilla, que encuadra la División 'San Marcial' en Burgos, la División 'Castillejos' en Huesca y el Mando de Apoyo a la Maniobra MAM en A Coruña), y 3) Mando de Canarias del ET (MCANA - Tenerife, que encuadra la BRICAN XVI y las Comandancias Generales de Ceuta, Melilla y Baleares).",
      "Ejército de Tierra - El Apoyo a la Fuerza (Instrucción 14/2021): Compuesto por: 1) Mando de Personal (MAPER - Madrid), 2) Mando de Apoyo Logístico (MALE - Madrid), 3) Mando de Adiestramiento y Doctrina (MADOC - Granada), y 4) Inspección General del Ejército (IGE - Barcelona)."
    ],
    trampas: [
      "⚠️ ¡SÚPER TRAMPA DE LA INSTRUCCIÓN 14/2021 DEL ET!: Las Comandancias Generales de Ceuta, Melilla y Baleares ya NO dependen de FUTER, sino del MANDO DE CANARIAS DEL EJÉRCITO DE TIERRA (MCANA).",
      "⚠️ TRAMPA DE UNIDADES EN DIVISIÓN 'SAN MARCIAL' (Burgos): Encuadra las fuerzas de respuesta muy alta / operaciones especiales / aeromóviles: Brigada 'Almogávares' VI de Paracaidistas (BRIPAC), Mando de Operaciones Especiales (MOE), Fuerzas Aeromóviles del ET (FAMET), Mando de Tropas de Montaña y Regimiento de Operaciones de Información nº 1."
    ]
  },

  // =========================================================================
  // BLOQUE 2: JURÍDICO - SOCIAL (8 TEMAS OFICIALES - ORDEN DEF/1341/2017)
  // =========================================================================
  {
    codigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 1,
    frecuenciaExamen: "MUY ALTA 🔥 (7-10 preg/año)",
    titulo: "Tema 1. Régimen del Personal Militar Profesional (Ley 39/2007 y Ley 8/2006)",
    normativa: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar y Ley 8/2006, de 24 de abril, de Tropa y Marinería",
    resumen: "Tema troncal de la oposición. Regula las categorías y empleos militares, la adquisición de la condición de militar de carrera, los compromisos de Tropa y Marinería (Inicial, Larga Duración y Permanencia), los Reservistas de Especial Disponibilidad (RED), el régimen de ascensos, la provisión de destinos y las situaciones administrativas.",
    puntosCalientes: [
      "Compromiso Inicial (Ley 8/2006, Art. 6-7): De 2 o 3 años, renovable por periodos de 2 o 3 años hasta un máximo de 6 años de servicios.",
      "Compromiso de Larga Duración - CLD (Art. 8 Ley 8/2006): Se suscribe tras más de 5 años de servicios (al cumplir los 6) y llega hasta cumplir los 45 AÑOS de edad.",
      "Acceso a la Permanencia (Art. 12 Ley 8/2006): Exige tener suscrito el CLD, contar con el tiempo mínimo de servicios fijado (14 años), poseer como mínimo el título de Técnico del Sistema Educativo General o equivalente y superar el proceso selectivo (concurso-oposición).",
      "Reservista de Especial Disponibilidad - RED (Art. 17 Ley 8/2006): Se adquiere al finalizar el CLD a los 45 años habiendo cumplido al menos 18 AÑOS de servicios, y se mantiene hasta cumplir los 65 AÑOS de edad.",
      "Sistemas de ascenso (Art. 88 Ley 39/2007): 1) Elección (Cabo Mayor, Suboficial Mayor, Oficiales Generales), 2) Clasificación, 3) Concurso o concurso-oposición (Cabo y Cabo 1º), y 4) Antigüedad.",
      "Provisión de destinos (Art. 100 Ley 39/2007): 1) Libre designación, 2) Concurso de méritos, y 3) Provisión por antigüedad.",
      "Situaciones Administrativas (Art. 107 Ley 39/2007): Servicio activo, Servicios especiales, Excedencia, Suspensión de empleo, Suspensión de funciones y Reserva."
    ],
    trampas: [
      "⚠️ TRAMPA DE RESERVA EN TROPA PERMANENTE (Art. 113 Ley 39/2007): Los militares de carrera de la categoría de Tropa y Marinería pasan a la situación de Reserva al cumplir los 58 AÑOS de edad.",
      "⚠️ TRAMPA DE SUSPENSIÓN DE FUNCIONES (Art. 112 Ley 39/2007): Si la suspensión de funciones excede de 6 MESES (o se acuerda por prisión preventiva superior a 6 meses), lleva aparejada el CESE EN EL DESTINO."
    ]
  },
  {
    codigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 2,
    frecuenciaExamen: "MUY ALTA 🔥 (5-7 preg/año)",
    titulo: "Tema 2. Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    normativa: "Real Decreto 96/2009, de 6 de febrero, por el que se aprueban las Reales Ordenanzas para las Fuerzas Armadas",
    resumen: "Código ético y de conducta de los militares españoles. Consta de 129 artículos divididos en un Título Preliminar y 5 Títulos (Del militar, De la disciplina, De la acción del mando, De las operaciones y De las demás funciones). Es de aplicación a todos los miembros de las FAS, a los alumnos de enseñanza militar de formación y a los reservistas cuando estén activados.",
    puntosCalientes: [
      "Art. 3 (Primer deber del militar): La disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario, constituye el primer y más fundamental deber del militar.",
      "Art. 8 (La disciplina): Factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado.",
      "Art. 14 (Espíritu militar) y Art. 22 (Virtudes fundamentales): Disciplina, valor, prontitud en la obediencia y exactitud en el servicio.",
      "Art. 44 (Definición de Orden): Mandato relativo al servicio que un militar da a un subordinado, en forma adecuada y dentro de las atribuciones que le correspondan, para que lleve a cabo u omita una actuación concreta.",
      "Art. 48 (Límites de la obediencia): Si las órdenes entrañan la ejecución de actos que manifiestamente constituyan delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar NO estará obligado a obedecerlas.",
      "Art. 92 (Prisionero): Si cae prisionero, procurará evitar ser capturado; en caso de caer prisionero, todo militar está obligado a dar únicamente su nombre y apellidos, empleo, número de filiación y fecha de nacimiento."
    ],
    trampas: [
      "⚠️ TRAMPA DE PRISIONERO DE GUERRA (Art. 92 RD 96/2009): Pregunta clásica de examen oficial: ¿Qué 4 datos está obligado a declarar únicamente el militar si cae prisionero? Nombre y apellidos, empleo, número de filiación (o DNI/TIM) y fecha de nacimiento.",
      "⚠️ TRAMPA OBJECIÓN A LAS ÓRDENES (Art. 49): Si el militar tiene alguna queja sobre una orden recibida, la cumplirá primero (salvo que constituya delito manifiesto) y después podrá formular la reclamación."
    ]
  },
  {
    codigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 3,
    frecuenciaExamen: "ALTA ⭐ (4-6 preg/año)",
    titulo: "Tema 3. Derechos y Deberes de los Miembros de las FAS (LO 9/2011)",
    normativa: "Ley Orgánica 9/2011, de 27 de julio, de derechos y deberes de los miembros de las Fuerzas Armadas",
    resumen: "Regula el ejercicio de los derechos fundamentales y libertades públicas por los militares con las adaptaciones exigidas por la disciplina y la neutralidad política y sindical. Regula las Asociaciones Profesionales de miembros de las FAS, el Consejo de Personal de las FAS (COPERFAS) y el Observatorio de la Vida Militar.",
    puntosCalientes: [
      "Neutralidad política y sindical (Art. 7): El militar no podrá fundar ni afiliarse a partidos políticos o sindicatos, ni realizar actividades políticas o sindicales.",
      "Libertad de desplazamiento (Art. 10): El militar puede desplazarse libremente por territorio nacional, sin perjuicio de las limitaciones derivadas de las exigencias del deber de disponibilidad permanente.",
      "Derecho de asociación profesional (Arts. 33 a 44): Pueden asociarse para la defensa de sus intereses profesionales, económicos y sociales en asociaciones inscritas en el RAPFAS. Para acceder al COPERFAS deben contar con al menos el 1% de los efectivos de las FAS, o el 3% de su categoría (o el 1,5% en Tropa y Marinería).",
      "COPERFAS (Arts. 46 a 52): Presidido por el Ministro de Defensa (o el Subsecretario de Defensa cuando no asista el Ministro).",
      "Observatorio de la Vida Militar (Arts. 54 y 55): Órgano colegiado asesor y consultivo adscrito a las CORTES GENERALES, compuesto por 9 miembros (5 elegidos por el Congreso y 4 por el Senado) por un mandato de 5 años."
    ],
    trampas: [
      "⚠️ ¡SÚPER TRAMPA DE PORCENTAJES EN EL COPERFAS (Art. 48 LO 9/2011)!: Para formar parte del COPERFAS, una asociación profesional necesita tener como afiliados al menos el 1% del total de efectivos de las FAS; o si es de ámbito de categoría, el 3% de Oficiales, el 3% de Suboficiales, o el 1,5% de Tropa y Marinería.",
      "⚠️ TRAMPA REUNIONES EN UNIDADES (Art. 13): Las reuniones de asociaciones profesionales en los acuartelamientos deben realizarse fuera del horario habitual de trabajo y requieren autorización previa del jefe de la unidad."
    ]
  },
  {
    codigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 4,
    frecuenciaExamen: "MUY ALTA 🔥 (8-11 preg/año)",
    titulo: "Tema 4. Régimen Disciplinario de las Fuerzas Armadas (LO 8/2014)",
    normativa: "Ley Orgánica 8/2014, de 4 de diciembre, de Régimen Disciplinario de las Fuerzas Armadas",
    resumen: "El tema con mayor densidad de preguntas por página de todo el examen. Regula las faltas leves, graves y muy graves, las sanciones aplicables, la potestad sancionadora de cada escalón de mando, el procedimiento sancionador, la prescripción de faltas y sanciones, la cancelación de notas y los recursos disciplinarios.",
    puntosCalientes: [
      "Sanciones por FALTA LEVE (Art. 11.1): 1) Reprensión, 2) Privación de salida de 1 a 8 días, 3) Sanción económica de 1 a 8 días, 4) Arresto de 1 a 14 días.",
      "Sanciones por FALTA GRAVE (Art. 11.2): 1) Sanción económica de 8 a 15 días, 2) Arresto de 15 a 30 días, 3) Pérdida de destino (imposibilidad de pedir destino en la misma unidad o localidad durante 2 años), 4) Baja en el centro docente militar de formación.",
      "Sanciones por FALTA MUY GRAVE (Art. 11.3): 1) Arresto de 31 a 60 días, 2) Suspensión de empleo (de 1 mes a 1 año), 3) Separación del servicio, 4) Resolución de compromiso.",
      "Competencia sancionadora (Art. 32): Jefe de Pelotón/Sección = NO figura con potestad de arresto. Jefe de Compañía = Reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días (SIN ARRESTO). Jefe de Batallón/Grupo = Todas las sanciones por falta leve (arresto hasta 14 días). Jefe de Regimiento = Faltas leves y, en graves, sanción económica hasta 8 días y arresto hasta 15 días.",
      "Prescripción de FALTAS (Art. 24.1): Leves = 2 MESES. Graves = 1 AÑO. Muy graves = 2 AÑOS.",
      "Prescripción de SANCIONES (Art. 25.1): Leves = 3 MESES. Graves = 1 AÑO. Muy graves = 2 AÑOS.",
      "Cancelación de notas (Art. 65): Leves = 1 AÑO. Graves = 2 AÑOS. Muy graves = 4 AÑOS.",
      "Caducidad del expediente disciplinario (Art. 48): El procedimiento por falta grave caduca a los 6 MESES; el expediente por falta muy grave caduca al AÑO (12 meses)."
    ],
    trampas: [
      "⚠️ TRAMPA DE CADUCIDAD DE EXPEDIENTES (Art. 48 LO 8/2014): El expediente disciplinario por falta GRAVE tiene un plazo máximo de tramitación de 6 MESES, mientras que el de falta MUY GRAVE tiene un plazo máximo de 1 AÑO.",
      "⚠️ TRAMPA PÉRDIDA DE DESTINO (Art. 16 LO 8/2014): Quien sufra la sanción de pérdida de destino no podrá solicitar nuevo destino en el plazo de 2 AÑOS en la misma unidad (o unidad de la misma localidad que determine la resolución)."
    ]
  },
  {
    codigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 5,
    frecuenciaExamen: "MEDIA 📌 (2-3 preg/año)",
    titulo: "Tema 5. Tramitación de Iniciativas y Quejas (RD 176/2014)",
    normativa: "Real Decreto 176/2014, de 21 de marzo, por el que se regula el procedimiento para la tramitación de las iniciativas y quejas",
    resumen: "Regula cómo los miembros de las FAS pueden presentar propuestas de carácter general (iniciativas) o reclamaciones relativas al régimen de personal y a las condiciones de vida (quejas), así como la figura del militar designado en cada unidad para su recepción.",
    puntosCalientes: [
      "Militar designado en la unidad (Art. 5 RD 176/2014): En cada unidad se designará a un Oficial, Suboficial o Cabo Mayor (de los más antiguos) para recibir, impulsar y facilitar la tramitación de las iniciativas y quejas.",
      "Plazo de respuesta a las quejas (Art. 10): Si transcurrido 1 MES desde la presentación de la queja ante el jefe de unidad no se hubiera contestado o la resolución no se considerase satisfactoria, el militar podrá dirigirse directamente al Mando o Jefatura de Personal (MAPER) y, en última instancia, al Subsecretario de Defensa.",
      "Rechazo motivado: No se admitirán las iniciativas o quejas anónimas ni las referidas a materias con procedimiento específico de recurso administrativo o disciplinario."
    ],
    trampas: [
      "⚠️ TRAMPA DE EMPLEO DESIGNADO (Art. 5 RD 176/2014): En la categoría de Tropa y Marinería, el militar designado en la unidad para recepcionar iniciativas y quejas debe ostentar el empleo de CABO MAYOR."
    ]
  },
  {
    codigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 6,
    frecuenciaExamen: "ALTA ⭐ (3-5 preg/año)",
    titulo: "Tema 6. Igualdad de Trato y Oportunidades entre Mujeres y Hombres (LO 3/2007)",
    normativa: "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres",
    resumen: "Regula el principio de igualdad de trato y de oportunidades entre mujeres y hombres, la prohibición de discriminación directa e indirecta, el acoso sexual y por razón de sexo, las acciones positivas, el Plan Estratégico de Igualdad de Oportunidades y el principio de presencia equilibrada en el empleo público.",
    puntosCalientes: [
      "Discriminación directa vs indirecta (Art. 6 LO 3/2007): Directa = situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable. Indirecta = disposición, criterio o práctica aparentemente neutros que pone a personas de un sexo en desventaja particular respecto a personas del otro.",
      "Acoso sexual vs Acoso por razón de sexo (Art. 7): Acoso sexual = comportamiento verbal o físico de naturaleza sexual. Acoso por razón de sexo = comportamiento realizado en función del sexo de una persona.",
      "Presencia o composición equilibrada (Disposición Adicional 1ª LO 3/2007): Presencia de mujeres y hombres de forma que las personas de cada sexo no superen el 60% ni sean menos del 40%.",
      "Inversión de la carga de la prueba (Art. 13): En los procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, corresponderá a la persona demandada probar la ausencia de discriminación (salvo en los procesos penales y sancionadores)."
    ],
    trampas: [
      "⚠️ TRAMPA PRESENCIA EQUILIBRADA: La horquilla legal de presencia equilibrada es exactamente 40% mínimo y 60% máximo para cada sexo.",
      "⚠️ TRAMPA CARGA DE LA PRUEBA (Art. 13.2): La inversión de la carga de la prueba NO es de aplicación a los procesos penales."
    ]
  },
  {
    codigo: "B2-T07",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 7,
    frecuenciaExamen: "ALTA ⭐ (3-4 preg/año)",
    titulo: "Tema 7. Observatorio Militar para la Igualdad y Protocolo Frente al Acoso en las FAS",
    normativa: "Orden DEF/111/2019 (Observatorio Militar para la Igualdad) y Acuerdo de Consejo de Ministros / Orden DEF/482/2016 (Protocolo frente al acoso en las FAS y UPA)",
    resumen: "Regula la composición y funciones del Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas y el Protocolo de actuación frente al acoso sexual y por razón de sexo, incluyendo las Unidades de Protección frente al Acoso (UPA).",
    puntosCalientes: [
      "Observatorio Militar para la Igualdad: Órgano colegiado adscrito a la Subsecretaría de Defensa (SUBDEF), presidido por la persona titular de la Subsecretaría de Defensa (o Director General de Personal por suplencia). Se reúne en pleno al menos 2 VECES AL AÑO.",
      "Secretaría Permanente del Observatorio: La ejerce la División de Igualdad y Apoyo Social al Personal de la Dirección General de Personal (DIGENPER).",
      "Unidades de Protección frente al Acoso (UPA): Existen 5 UPAs: en el Órgano Central, en el EMAD, en el Ejército de Tierra, en la Armada y en el Ejército del Aire y del Espacio.",
      "Vía de denuncia ante la UPA: La presunta víctima (o cualquier militar que tenga conocimiento de hechos de acoso) puede acudir directamente a la UPA sin necesidad de seguir el conducto reglamentario."
    ],
    trampas: [
      "⚠️ TRAMPA REUNIONES DEL OBSERVATORIO MILITAR PARA LA IGUALDAD: Se reúne en sesión ordinaria al menos DOS VECES AL AÑO (una por semestre), y está adscrito a la SUBDEF (no a las Cortes Generales como el Observatorio de la Vida Militar)."
    ]
  },
  {
    codigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 8,
    frecuenciaExamen: "MUY ALTA 🔥 (5-7 preg/año)",
    titulo: "Tema 8. Procedimiento Administrativo Común (Ley 39/2015 LPACAP)",
    normativa: "Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas",
    resumen: "Regula los interesados en el procedimiento, la actividad de las Administraciones Públicas, el cómputo de plazos, los actos administrativos (nulidad de pleno derecho art. 47 y anulabilidad art. 48), las fases del procedimiento (iniciación, ordenación, instrucción y finalización) y los recursos administrativos (alzada, reposición y extraordinario de revisión).",
    puntosCalientes: [
      "Cómputo de plazos (Art. 30): Cuando los plazos se señalen por días se entiende que son HÁBILES, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
      "Plazo máximo general para resolver y notificar (Art. 21): Será el fijado por la norma reguladora del procedimiento, sin que pueda exceder de 6 MESES salvo que una norma con rango de Ley o de la UE establezca uno mayor. Si la norma no fija plazo máximo, éste será de 3 MESES.",
      "Nulidad de pleno derecho (Art. 47) vs Anulabilidad (Art. 48): Son nulos de pleno derecho los actos que lesionen derechos susceptibles de amparo constitucional, los dictados por órgano manifiestamente incompetente por razón de la materia o del territorio, los de contenido imposible o los constitutivos de infracción penal.",
      "Recurso de Alzada (Arts. 121-122): Contra actos que NO ponen fin a la vía administrativa. Plazo interposición: 1 MES (expreso). Plazo resolución: 3 MESES.",
      "Recurso Potestativo de Reposición (Arts. 123-124): Contra actos que SÍ ponen fin a la vía administrativa. Plazo interposición: 1 MES (expreso). Plazo resolución: 1 MES.",
      "Recurso Extraordinario de Revisión (Art. 125): Contra actos firmes. Por error de hecho que resulte de los propios documentos del expediente = 4 AÑOS. Por aparecer documentos esenciales o sentencia firme por prevaricación/cohecho/violencia = 3 MESES."
    ],
    trampas: [
      "⚠️ TRAMPA DE PLAZOS EN SILENCIO ADMINISTRATIVO (Art. 21.2 y 21.3 Ley 39/2015): El plazo máximo no puede superar los 6 MESES (salvo Ley), pero el plazo supletorio (cuando la norma no dice nada) es de 3 MESES.",
      "⚠️ TRAMPA DE INCOMPETENCIA (Art. 47.1.b): Solo produce NULIDAD DE PLENO DERECHO la incompetencia manifiesta por razón de la MATERIA o del TERRITORIO. La incompetencia JERÁRQUICA produce simple ANULABILIDAD (y es convalidable por el superior)."
    ]
  },

  // =========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL, ACCIÓN CONJUNTA Y OO.II. (7 TEMAS OFICIALES)
  // =========================================================================
  {
    codigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 1,
    frecuenciaExamen: "MUY ALTA 🔥 (5-7 preg/año)",
    titulo: "Tema 1. Seguridad Nacional (Ley 36/2015) y Estrategia de Seguridad Nacional (ESN 2021)",
    normativa: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional y Real Decreto 1150/2021 (Estrategia de Seguridad Nacional 2021)",
    resumen: "Analiza el Sistema de Seguridad Nacional, sus principios básicos, los tres componentes fundamentales, el Consejo de Seguridad Nacional, el Departamento de Seguridad Nacional (DSN), la Situación de Interés para la Seguridad Nacional y los ejes y líneas de acción de la Estrategia de Seguridad Nacional (ESN 2021).",
    puntosCalientes: [
      "Principios básicos de la Política de Seguridad Nacional (Art. 4.2 Ley 36/2015): Unidad de acción, anticipación, prevención, eficiencia, sostenibilidad en el uso de los recursos, capacidad de resistencia y recuperación (resiliencia).",
      "Los 3 Componentes Fundamentales de la Seguridad Nacional (Art. 9): 1) La Defensa Nacional, 2) La Seguridad Pública, y 3) La Acción Exterior.",
      "Consejo de Seguridad Nacional (Art. 21): Comisión Delegada del Gobierno para la Seguridad Nacional. Lo preside el Presidente del Gobierno (salvo que asista SM el Rey). Se reúne a iniciativa del Presidente como mínimo con carácter BIMESTRAL (cada 2 meses).",
      "Situación de Interés para la Seguridad Nacional (Arts. 23 y 24): Declarada por el Presidente del Gobierno mediante REAL DECRETO.",
      "Estrategia de Seguridad Nacional 2021 (RD 1150/2021): Se revisa cada 5 AÑOS. Se articula en 3 objetivos/ejes (Proteger, Promover, Participar) y una matriz integrada de 16 riesgos y amenazas y 33 líneas de acción estratégicas."
    ],
    trampas: [
      "⚠️ TRAMPA DE REUNIONES DEL CONSEJO DE SEGURIDAD NACIONAL (Art. 21.5 Ley 36/2015): El Consejo de Seguridad Nacional se reúne como mínimo con carácter BIMESTRAL (cada dos meses), no bimensual.",
      "⚠️ TRAMPA DECLARACIÓN SITUACIÓN DE INTERÉS: La declara el Presidente del Gobierno por Real Decreto (NO suspende derechos fundamentales de los ciudadanos)."
    ]
  },
  {
    codigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 2,
    frecuenciaExamen: "ALTA ⭐ (4-6 preg/año)",
    titulo: "Tema 2. Doctrina para la Acción Conjunta de las FAS (PDC-01)",
    normativa: "Publicación Doctrinal Conjunta PDC-01 (A) — Doctrina para el Empleo de las Fuerzas Armadas",
    resumen: "Documento doctrinal cumbre elaborado por el EMAD (CCDC). Define el entorno operativo, el espectro del conflicto, los principios del empleo de la Fuerza, los 5 ámbitos de operación, los niveles de conducción de las operaciones y la integración en estructuras multinacionales.",
    puntosCalientes: [
      "Los 5 Ámbitos (Dominios) de Operación: Terrestre, Marítimo, Aéreo, Espacial (Ultraterrestre) y Ciberespacial, convergiendo sobre el Entorno de la Información y la Dimensión Cognitiva.",
      "Los 3 Niveles de Conducción de las Operaciones: 1) Nivel Estratégico (Político y Militar), 2) Nivel Operacional (vincula los objetivos estratégicos con el empleo táctico de las fuerzas en un Teatro de Operaciones, dirigido por el CMOPS), y 3) Nivel Táctico (ejecución de acciones y combates).",
      "Acción Conjunta vs Combinada vs Integrada: CONJUNTA = dos o más Ejércitos nacionales. COMBINADA = fuerzas de dos o más Estados aliados. INTEGRADA = sincronización del instrumento militar con actores civiles, diplomáticos, económicos y de información.",
      "Mando Tipo Misión (Mission Command): Filosofía de mando descentralizado en la que el jefe expresa claramente su propósito (Intención del Comandante), asigna cometidos y recursos, y otorga libertad de acción al subordinado sobre el 'cómo' ejecutarlo."
    ],
    trampas: [
      "⚠️ TRAMPA MANDO TIPO MISIÓN (PDC-01): En el Mando Tipo Misión se descentraliza la EJECUCIÓN dando libertad de acción al subordinado a partir del Propósito del Comandante.",
      "⚠️ TRAMPA NIVEL OPERACIONAL: El nivel que enlaza la estrategia militar con la táctica planificando campañas en un Teatro de Operaciones es el NIVEL OPERACIONAL."
    ]
  },
  {
    codigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 3,
    frecuenciaExamen: "ALTA ⭐ (3-5 preg/año)",
    titulo: "Tema 3. Organización de las Naciones Unidas (ONU)",
    normativa: "Carta de las Naciones Unidas (San Francisco, 26 de junio de 1945) — Entrada en vigor: 24 de octubre de 1945",
    resumen: "Estudia la historia e hitos de la ONU (Conferencias de Dumbarton Oaks, Yalta y San Francisco en 1945), los 193 Estados miembros actuales, los 6 órganos principales de la Carta, los Capítulos VI, VII y VIII, y la incorporación de España a la ONU (14 de diciembre de 1955).",
    puntosCalientes: [
      "Hitos fundacionales (1945): Firma de la Carta en San Francisco el 26 de junio de 1945 (por 50 países + Polonia = 51 miembros fundadores). Entrada en vigor el 24 de octubre de 1945 (Día de las Naciones Unidas).",
      "Ingreso de España en la ONU: 14 de diciembre de 1955. España ha sido miembro no permanente del Consejo de Seguridad en 5 ocasiones (1969-70, 1981-82, 1993-94, 2003-04 y 2015-16).",
      "Los 6 Órganos Principales (Art. 7): 1) Asamblea General (todos los 193 Estados miembros, 1 voto por Estado), 2) Consejo de Seguridad (15 miembros: 5 permanentes con veto — EE.UU., Rusia, China, Francia y Reino Unido — y 10 no permanentes por 2 años), 3) Consejo Económico y Social - ECOSOC (54 miembros por 3 años), 4) Consejo de Administración Fiduciaria (suspendió operaciones en 1994 tras la independencia de Palaos), 5) Corte Internacional de Justicia (15 magistrados por 9 años, sede en La Haya), y 6) Secretaría General.",
      "Capítulos clave de la Carta: Capítulo VI (Arreglo pacífico de controversias), Capítulo VII (Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión — uso de la fuerza), y Capítulo VIII (Acuerdos regionales)."
    ],
    trampas: [
      "⚠️ TRAMPA DE NÚMEROS ONU: Consejo de Seguridad = 15 miembros (5 permanentes + 10 no permanentes elegidos por 2 años; mayoría para decisiones = 9 votos). ECOSOC = 54 miembros (elegidos por 3 años). Corte Internacional de Justicia = 15 jueces (elegidos por 9 años, sede en La Haya)."
    ]
  },
  {
    codigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 4,
    frecuenciaExamen: "MUY ALTA 🔥 (4-6 preg/año)",
    titulo: "Tema 4. Organización del Tratado del Atlántico Norte (OTAN)",
    normativa: "Tratado del Atlántico Norte (Washington, 4 de abril de 1949) y Concepto Estratégico de Madrid 2022",
    resumen: "Analiza la creación de la OTAN en 1949 (12 países fundadores; actualmente 32 miembros tras el ingreso de Finlandia en 2023 y Suecia en 2024), el Tratado de Washington (14 artículos), la estructura política y militar, el Concepto Estratégico de Madrid 2022 y la incorporación de España (30 de mayo de 1982).",
    puntosCalientes: [
      "Fechas clave de España en la OTAN: Ingreso el 30 de mayo de 1982 (como miembro número 16). Referéndum de permanencia: 12 de marzo de 1986. Plena integración en la Estructura Militar de Mandos: 1 de enero de 1999.",
      "Artículos clave del Tratado de Washington (14 artículos): Art. 4 (Consultas ante amenaza), Art. 5 (Defensa Colectiva: un ataque armado contra uno o varios se considera contra todos), Art. 10 (Política de puertas abiertas / invitación a nuevos Estados europeos).",
      "Estructura Política: Consejo del Atlántico Norte (NAC - máximo órgano de decisión política, sede en Bruselas), Grupo de Planes Nucleares (NPG) y Secretario General.",
      "Estructura Militar: Comité Militar (MC - máxima autoridad militar integrada por los JEMAD/CHOD), y los 2 Mandos Estratégicos: 1) ACO (Allied Command Operations / SHAPE en Mons, Bélgica, mandado por SACEUR) y 2) ACT (Allied Command Transformation en Norfolk, EE.UU., mandado por SACT).",
      "Mandos de ACO de Nivel Operacional (JFC): JFC Brunssum (Países Bajos), JFC Naples (Nápoles, Italia) y JFC Norfolk (EE.UU.).",
      "Mandos de Componente Único: LANDCOM (Terrestre - Esmirna, Turquía), MARCOM (Marítimo - Northwood, Reino Unido) y AIRCOM (Aéreo - Ramstein, Alemania). En España radican el CGTAD/HQ NRDC-ESP (Bétera, Valencia) y el CAOC Torrejón (Madrid)."
    ],
    trampas: [
      "⚠️ ¡NOVEDAD AMPLIACIÓN OTAN (32 MIEMBROS)!: Con la adhesión de Finlandia (miembro 31 en abril de 2023) y Suecia (miembro 32 en marzo de 2024), la OTAN cuenta con 32 Estados miembros.",
      "⚠️ TRAMPA DE MANDOS TÁCTICOS EN ESPAÑA: En España se encuentran el CAOC Torrejón (Centro de Operaciones Aéreas Combinadas), el HQ NRDC-ESP (Bétera, Valencia) y el COE-C-IED (Centro de Excelencia contra Artefactos Explosivos Improvisados en Hoyo de Manzanares, Madrid)."
    ]
  },
  {
    codigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 5,
    frecuenciaExamen: "MEDIA 📌 (2-4 preg/año)",
    titulo: "Tema 5. Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    normativa: "Acta Final de Helsinki (1 de agosto de 1975) y Carta de París para una Nueva Europa (1990)",
    resumen: "La OSCE es la mayor organización regional de seguridad del mundo (57 Estados participantes de Europa, Asia Central y América del Norte). Tiene su origen en la Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE) y el Acta Final de Helsinki de 1975, adoptando el nombre de OSCE en la Cumbre de Budapest de 1994 (efectivo el 1 de enero de 1995).",
    puntosCalientes: [
      "Hitos históricos de la OSCE: 1) Acta Final de Helsinki (1975) con sus 3 'Cestas' o Dimensiones de Seguridad, 2) Carta de París para una Nueva Europa (1990), y 3) Cumbre de Budapest (1994), donde pasa de ser conferencia (CSCE) a organización permanente (OSCE) desde el 1 de enero de 1995.",
      "Las 3 Dimensiones ('Tres Cestas') de la Seguridad en la OSCE: 1) Dimensión Político-Militar, 2) Dimensión Económica y Medioambiental, y 3) Dimensión Humana (derechos humanos y elecciones democráticas).",
      "Sedes y Órganos de la OSCE: Secretariado y Consejo Permanente en VIENA (Austria). Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH / ODIHR) en VARSOVIA (Polonia). Alto Comisionado para las Minorías Nacionales en LA HAYA (Países Bajos). Asamblea Parlamentaria en COPENHAGUE (Dinamarca).",
      "España y la OSCE: España fue firmante originaria del Acta Final de Helsinki en 1975, acogió la Reunión de Madrid (1980-1983) y ejerció la Presidencia en ejercicio de la OSCE en el año 2007."
    ],
    trampas: [
      "⚠️ TRAMPA DE SEDES OSCE: Aunque el Secretariado General y el Consejo Permanente están en VIENA, la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH) está en VARSOVIA y el Alto Comisionado para las Minorías Nacionales en LA HAYA.",
      "⚠️ TRAMPA DE TOMA DE DECISIONES EN LA OSCE: Todas las decisiones políticas de la OSCE se adoptan por CONSENSO de los 57 Estados participantes."
    ]
  },
  {
    codigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 6,
    frecuenciaExamen: "ALTA ⭐ (3-5 preg/año)",
    titulo: "Tema 6. La Unión Europea (UE): Instituciones y Política Común de Seguridad y Defensa (PCSD)",
    normativa: "Tratado de la Unión Europea (TUE), Tratado de Funcionamiento de la UE (TFUE - Lisboa 2007) y Brújula Estratégica",
    resumen: "Analiza la evolución histórica de la construcción europea (Tratados de París 1951, Roma 1957, Adhesión de España el 1 de enero de 1986, Maastricht 1992, Ámsterdam 1997, Niza 2001 y Lisboa 2007), las 7 Instituciones de la Unión Europea y la Política Común de Seguridad y Defensa (PCSD).",
    puntosCalientes: [
      "Las 7 Instituciones Oficiales de la UE (Art. 13 TUE): 1) Parlamento Europeo, 2) Consejo Europeo, 3) Consejo de la Unión Europea (Consejo de Ministros), 4) Comisión Europea, 5) Tribunal de Justicia de la UE (Luxemburgo), 6) Banco Central Europeo (Fráncfort), y 7) Tribunal de Cuentas (Luxemburgo).",
      "Ingreso de España en las Comunidades Europeas: Firma del Tratado de Adhesión el 12 de junio de 1985; entrada en vigor el 1 de enero de 1986.",
      "Cláusulas de Defensa y Seguridad UE: Art. 42.7 TUE (Cláusula de Asistencia Mutua ante agresión armada en territorio de un Estado miembro) y Art. 222 TFUE (Cláusula de Solidaridad ante ataque terrorista o catástrofe natural o de origen humano).",
      "Estructuras militares de la PCSD: Comité Político y de Seguridad (CPS), Comité Militar de la UE (EUMC - integrado por los JEMAD de los 27 Estados miembros) y Estado Mayor de la UE (EUMS).",
      "Centro de Satélites de la Unión Europea (SATCEN): Agencia de la UE en el ámbito de la PCSD cuya sede se encuentra en la Base Aérea de TORREJÓN DE ARDOZ (Madrid, España)."
    ],
    trampas: [
      "⚠️ TRAMPA DE AGENCIA EUROPEA EN ESPAÑA: El Centro de Satélites de la Unión Europea (SATCEN), clave para la inteligencia geoespacial de la PCSD, tiene su sede en TORREJÓN DE ARDOZ (Madrid).",
      "⚠️ TRAMPA DE CONSEJOS: No confundir el CONSEJO EUROPEO (Jefes de Estado o de Gobierno de los 27 + su Presidente + Presidente de la Comisión, que da el impulso político), el CONSEJO DE LA UE (Ministros de los 27 por ramos, que legisla junto al Parlamento), y el CONSEJO DE EUROPA (organización ajena a la UE con sede en Estrasburgo de 46 países)."
    ]
  },
  {
    codigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 7,
    frecuenciaExamen: "ALTA ⭐ (3-5 preg/año)",
    titulo: "Tema 7. España y su Participación en Misiones Internacionales",
    normativa: "Ley Orgánica 5/2005 (Art. 17-19) e Histórico Oficial de Operaciones en el Exterior del EMAD / MOPS",
    resumen: "Estudia el hito del inicio de las misiones internacionales de las FAS españolas en 1989 (UNAVEM I en Angola y UNTAG en Namibia) y las principales misiones en curso bajo bandera de la ONU, la OTAN y la Unión Europea.",
    puntosCalientes: [
      "Primeras misiones en el exterior (1989): Inicio en enero de 1989 con observadores militares en UNAVEM I (Angola) y contingente del Ejército del Aire en UNTAG (Namibia).",
      "Misiones ONU actuales / históricas destacadas: UNIFIL / FINUL (Operación 'Libre Hidalgo' en el Líbano, iniciada en 2006 en Marjayoun) y Misión de Verificación de la ONU en Colombia.",
      "Misiones de la Unión Europea (PCSD): Operación EUNAVFOR ATALANTA (lucha contra la piratería en el Océano Índico / Somalia, cuyo Cuartel General Operacional OHQ está en ROTA, Cádiz), EUTM Malí / República Centroafricana / Somalia, y EUFOR ALTHEA (Bosnia y Herzegovina).",
      "Misiones de la OTAN (Disuasión y Defensa en el Flanco Este): Presencia Avanzada Reforzada (eFP) en LETONIA (Base de Adazi) y Brigada Multinacional en ESLOVAQUIA (Lešť, donde España ejerce como Nación Marco desde 2024), Policía Aérea del Báltico (BAP), Apoyo a Turquía (Batería Patriot en Adana/Incirlik), Grupos Navales Permanentes (SNMG/SNMCMG), Operación Sea Guardian (Mediterráneo) y NMI (Misión de la OTAN en Irak)."
    ],
    trampas: [
      "⚠️ ¡PREGUNTA DE ACTUALIDAD 2024/2025 EN MISIONES!: En 2024 España asumió el liderazgo como 'Nación Marco' (Framework Nation) del Battle Group / Brigada Multinacional de la OTAN en ESLOVAQUIA (campo de maniobras de Lešť), además de mantener su despliegue acorazado en LETONIA (Adazi).",
      "⚠️ TRAMPA CUARTEL GENERAL DE LA OPERACIÓN ATALANTA: El Cuartel General de Operaciones (OHQ) de la Operación EUNAVFOR ATALANTA de la Unión Europea se encuentra en la Base Naval de ROTA (Cádiz, España)."
    ]
  }
];

/**
 * TABLAS COMPARATIVAS TÁCTICAS DE BOLSILLO (CAZA-TRAMPAS)
 */
const COMPARATIVE_TABLES = [
  {
    id: "TAB-01",
    titulo: "⚖️ Régimen Disciplinario (LO 8/2014): Sanciones, Prescripción, Caducidad y Cancelación",
    bloque: "Bloque 2: Jurídico-Social",
    headers: ["Gravedad", "Arresto", "Sanción Económica", "Otras Sanciones", "Prescripción Falta (Art. 24)", "Prescripción Sanción (Art. 25)", "Caducidad Expediente", "Cancelación Nota (Art. 65)"],
    rows: [
      ["FALTA LEVE", "1 a 14 días", "1 a 8 días", "Reprensión / Privación salida (1 a 8 días)", "2 meses", "3 meses", "Procedimiento oral/preferente", "1 año"],
      ["FALTA GRAVE", "15 a 30 días", "8 a 15 días", "Pérdida de destino (2 años) / Baja centro formación", "1 año", "1 año", "6 meses", "2 años"],
      ["FALTA MUY GRAVE", "31 a 60 días", "No aplica", "Suspensión empleo (1m-1a) / Separación servicio / Resolución compromiso", "2 años", "2 años", "1 año (12 meses)", "4 años (salvo expulsión)"]
    ]
  },
  {
    id: "TAB-02",
    titulo: "🎖️ Competencia Sancionadora de los Mandos por Falta Leve (Art. 32 LO 8/2014)",
    bloque: "Bloque 2: Jurídico-Social",
    headers: ["Autoridad / Mando", "Reprensión", "Privación de Salida", "Sanción Económica", "Arresto por Falta Leve"],
    rows: [
      ["Jefe de Regimiento / Batallón / Grupo", "SÍ", "Hasta 8 días", "Hasta 8 días", "SÍ: De 1 a 14 días"],
      ["Jefe de Compañía o Unidad similar", "SÍ", "Hasta 5 días", "Hasta 5 días", "❌ NO PUEDE IMPONER ARRESTO"],
      ["Jefe de Sección o Pelotón", "No (eleva parte)", "❌ No", "❌ No", "❌ No"]
    ]
  },
  {
    id: "TAB-03",
    titulo: "🏛️ Estructura Orgánica del Ministerio de Defensa (RD 205/2024 y RD 268/2025)",
    bloque: "Bloque 1: Organización",
    headers: ["Órgano Superior / Directivo", "Direcciones Generales Dependientes", "Organismos Adscritos / Especiales"],
    rows: [
      ["SEDEF (Secretaría de Estado de Defensa)", "• DGAM (Armamento y Material)\n• DIGEID (Estrategia e Innovación Industria Defensa - ¡Novedad!)\n• DIGENECO (Asuntos Económicos)\n• DIGENIN (Infraestructura)\n• CESTIC (Rango de D.G.)", "INTA (Instituto Nacional de Técnica Aeroespacial)"],
      ["SUBDEF (Subsecretaría de Defensa)", "• SEGENTE (Secretaría General Técnica)\n• DIGENPER (Personal)\n• DIGEREM (Reclutamiento y Enseñanza Militar)", "Asesoría Jurídica General, Intervención General (IGD), IGESAN (Sanidad), ISFAS e INVIED"],
      ["SEGENPOL (Secretaría Gral. Política Defensa)", "• DIGENPOL (Dirección General de Política de Defensa)", "DICOES, Agregadurías de Defensa y Comisión Española de Historia Militar"],
      ["Ministro/a de Defensa (Directamente)", "• DIRCOMDEF (Comunicación Institucional)", "UME, Guardia Real, CNI"]
    ]
  },
  {
    id: "TAB-04",
    titulo: "🏛️ Estados Constitucionales del Art. 116 CE (Alarma, Excepción y Sitio)",
    bloque: "Bloque 1: Organización",
    headers: ["Estado", "¿Quién lo declara?", "Intervención del Congreso", "Duración Inicial", "Prórroga"],
    rows: [
      ["ALARMA", "El Gobierno (por Decreto)", "Se da cuenta al Congreso; autorización necesaria para prorrogar", "Máximo 15 días", "Con autorización expresa del Congreso"],
      ["EXCEPCIÓN", "El Gobierno (por Decreto)", "PREVIA autorización del Congreso de los Diputados", "Máximo 30 días", "Prorrogable por otros 30 días"],
      ["SITIO", "El Congreso de los Diputados (Mayoría Absoluta)", "Lo declara el propio Congreso a propuesta exclusiva del Gobierno", "La que determine el Congreso en cada caso", "Según determine el Congreso"]
    ]
  },
  {
    id: "TAB-05",
    titulo: "🎖️ Compromisos de Tropa y Marinería (Ley 8/2006 y Ley 39/2007)",
    bloque: "Bloque 2: Jurídico-Social",
    headers: ["Modalidad", "Requisitos Clave", "Duración / Límite de Edad", "Condición / Observación"],
    rows: [
      ["Compromiso Inicial", "Superar selección y formación militar", "2 o 3 años (renovable hasta máx. 6 años)", "Militar Profesional de Tropa y Marinería (MPTM)"],
      ["Compromiso Larga Duración (CLD)", "Más de 5 años de servicios (al cumplir los 6)", "Hasta cumplir los 45 años de edad", "MPTM temporal de larga duración"],
      ["Permanencia", "Tener CLD + mín. 14 años de servicios + Título Técnico + oposición", "Pase a Reserva a los 58 años de edad", "MILITAR DE CARRERA (Escala de Tropa y Marinería)"],
      ["Reservista Especial Disponibilidad (RED)", "Finalizar CLD a los 45 años con al menos 18 años de servicio", "Desde los 45 hasta los 65 años de edad", "Percibe asignación económica mensual incompatible con empleo público"]
    ]
  },
  {
    id: "TAB-06",
    titulo: "🌍 Cláusulas y Misiones Internacionales Clave (OTAN / UE / ONU / OSCE)",
    bloque: "Bloque 3: Seguridad Nacional",
    headers: ["Organización", "Ingreso España / Sede", "Precepto / Hito Clave", "Misiones / Presencia de España"],
    rows: [
      ["ONU (1945)", "España ingresa: 14 dic 1955\nSede: Nueva York (CIJ en La Haya)", "Cap. VI (Pacífico), Cap. VII (Uso fuerza), Cap. VIII (Acuerdos regionales)", "FINUL / Libre Hidalgo (Líbano) y Verificación en Colombia"],
      ["OTAN (1949)", "España ingresa: 30 may 1982\nSede política: Bruselas | SHAPE: Mons", "Art. 4 (Consulta), Art. 5 (Defensa Colectiva), 32 miembros actuales", "Nación Marco en Eslovaquia (Lešť), eFP Letonia (Adazi), Patriot Turquía, BAP, NMI Irak"],
      ["Unión Europea", "España ingresa: 1 ene 1986\nAgencia en España: SATCEN (Torrejón)", "Art. 42.7 TUE (Asistencia Mutua) y Art. 222 TFUE (Solidaridad)", "EUNAVFOR Atalanta (OHQ en Rota, Cádiz), EUTM Somalia/RCA y EUFOR Althea"],
      ["OSCE (1975/1995)", "Acta Helsinki: 1975\nSecretariado: Viena | OIDDH: Varsovia", "3 Dimensiones (Cestas) de seguridad. 57 Estados por consenso", "Presidencia española de la OSCE en 2007"]
    ]
  },
  {
    id: "TAB-07",
    titulo: "🎬 Equivalencia Oficial: 21 Temas BOE (Orden DEF/1341/2017) ↔ 28 Temas Vídeos YouTube / Academias",
    bloque: "Guía de Estudio y Vídeos",
    headers: ["Código BOE (21 Temas)", "Temas en Vídeos (28 Temas)", "Normativa / Materia Incluida", "¿Por qué cambia la numeración?"],
    rows: [
      ["B1-T01 y B1-T02", "Vídeos T1, T2 y T3", "Constitución Española 1978 (Títulos Preliminar a VIII) + LO 5/2005 Defensa Nacional", "En vídeo se divide la Constitución en 2 partes (T1 y T2) y LO 5/2005 pasa a ser el T3."],
      ["B1-T03, B1-T04 y B1-T05", "Vídeos T4, T5 y T6", "Ley 40/2015 LRJSP (T4), Estructura MINISDEF RD 205/2024 (T5) y Org. Básica FAS RD 521/2020 (T6)", "Correspondencia directa 1 a 1 con el desplazamiento de +1 de la Constitución."],
      ["B1-T06 (1 Tema en BOE)", "Vídeos T7, T8, T9 y T10 (4 Vídeos)", "T7: EMAD (Orden DEF/710/2020) • T8: Ejército de Tierra (Inst. 14/2021) • T9: Armada (Inst. 15/2021) • T10: Ejército del Aire y del Espacio (Inst. 6/2025)", "El BOE agrupa EMAD, ET, Armada y EA en el Tema 6 de Organización; las academias hacen 4 vídeos separados (+3 temas)."],
      ["B2-T01 (1 Tema en BOE)", "Vídeos T11 y T12 (2 Vídeos)", "T11: Ley 39/2007 de la Carrera Militar • T12: Ley 8/2006 de Tropa y Marinería", "El BOE une ambas leyes en el Tema 1 Jurídico-Social; en vídeo se separan en 2 temas (+1 tema)."],
      ["B2-T02 a B2-T06", "Vídeos T13, T14, T15 y T16", "T13: RROO (RD 96/2009) • T14: Derechos y Deberes (LO 9/2011) • T15: Régimen Disciplinario (LO 8/2014) e Iniciativas/Quejas (RD 176/2014) • T16: Igualdad Efectiva (LO 3/2007)", "Mismo contenido íntegro del Bloque Jurídico-Social."],
      ["B2-T07 y B2-T08", "Vídeos T17, T18, T19 y T20", "T17: Observatorio Igualdad • T18: Protocolo Acoso y UPA • T19 y T20: Ley 39/2015 LPACAP (Actos/Procedimiento y Recursos)", "El BOE agrupa Observatorio+UPA en B2-T07 y toda la Ley 39/2015 en B2-T08 (+2 temas en vídeo)."],
      ["B3-T01 (1 Tema en BOE)", "Vídeos T21 y T22 (2 Vídeos)", "T21: Ley 36/2015 de Seguridad Nacional • T22: Estrategia de Seguridad Nacional 2021 (RD 1150/2021)", "El BOE une Ley 36/2015 y ESN en el Tema 1 de Seguridad Nacional; en vídeo son T21 y T22 (+1 tema)."],
      ["B3-T02 a B3-T07 (6 Temas BOE)", "Vídeos T23, T24, T25, T26, T27 y T28", "T23: Doctrina PDC-01 • T24: ONU • T25: OTAN • T26: OSCE • T27: Unión Europea • T28: Misiones Internacionales FAS", "Correspondencia exacta 1 a 1 hasta cerrar en el Tema 28 (Misiones FAS)."]
    ]
  }
];

const VIDEO_28_EQUIVALENCE = {
  "B1-T01": "🎬 Vídeos T1 y T2 (Constitución I y II)",
  "B1-T02": "🎬 Vídeo T2/T3 (Cortes y LO 5/2005 Defensa Nacional)",
  "B1-T03": "🎬 Vídeo T4 (Ley 40/2015 LRJSP y Ministerios)",
  "B1-T04": "🎬 Vídeo T5 (Estructura MINISDEF RD 205/2024)",
  "B1-T05": "🎬 Vídeo T6 (Org. Básica FAS RD 521/2020)",
  "B1-T06": "🎬 Vídeos T7, T8, T9 y T10 (EMAD, ET, Armada y EA)",
  "B2-T01": "🎬 Vídeos T11 y T12 (Ley 39/2007 Carrera y Ley 8/2006 Tropa)",
  "B2-T02": "🎬 Vídeo T13 (Reales Ordenanzas RD 96/2009)",
  "B2-T03": "🎬 Vídeo T14 (Derechos y Deberes LO 9/2011)",
  "B2-T04": "🎬 Vídeo T15 (Régimen Disciplinario LO 8/2014)",
  "B2-T05": "🎬 Vídeo T15-B (Iniciativas y Quejas RD 176/2014)",
  "B2-T06": "🎬 Vídeo T16 (Igualdad Efectiva LO 3/2007)",
  "B2-T07": "🎬 Vídeos T17 y T18 (Observatorio Igualdad + UPA y Acoso)",
  "B2-T08": "🎬 Vídeos T19 y T20 (Ley 39/2015 LPACAP I y II)",
  "B3-T01": "🎬 Vídeos T21 y T22 (Ley 36/2015 Seg. Nacional + ESN 2021)",
  "B3-T02": "🎬 Vídeo T23 (Doctrina Empleo FAS PDC-01)",
  "B3-T03": "🎬 Vídeo T24 (Naciones Unidas ONU)",
  "B3-T04": "🎬 Vídeo T25 (OTAN / Alianza Atlántica)",
  "B3-T05": "🎬 Vídeo T26 (OSCE)",
  "B3-T06": "🎬 Vídeo T27 (Unión Europea UE)",
  "B3-T07": "🎬 Vídeo T28 (Misiones Internacionales FAS)"
};

if (typeof OFFICIAL_SYLLABUS !== "undefined" && Array.isArray(OFFICIAL_SYLLABUS)) {
  OFFICIAL_SYLLABUS.forEach(t => {
    t.equivalencia28 = VIDEO_28_EQUIVALENCE[t.codigo] || "";
  });
}

// =========================================================================
// BAREMO OFICIAL DE CONCURSO (ANEXO II ORDEN DEF/1341/2017 BOE-A-2018-585
// + ORDEN DEF/15/2026 BOE-A-2026-1379)
// =========================================================================
const OFFICIAL_BAREMO_CONFIG = {
  maxConcurso: 100,
  maxOposicion: 100,
  maxTotal: 200,
  notasCorteReferenciaET: {
    operativas: {
      nombre: "Agrupación de Especialidades Operativas (AEO - ET)",
      corteTotal200: 118.5,
      mediaConcursoTipica: 58.0,
      consejo: "En Especialidades Operativas del ET la nota de corte final suele rondar entre 114 y 122 puntos sobre 200. Con un concurso medio de 58 pts, asegurar 62+ puntos netos en el examen te sitúa en zona franca de plaza."
    },
    tecnicas: {
      nombre: "Agrupación de Especialidades Técnicas (AET - ET)",
      corteTotal200: 124.0,
      mediaConcursoTipica: 60.0,
      consejo: "En Especialidades Técnicas suele haber menos plazas por especialidad y cortes ligeramente más altos (120-128 sobre 200). Apunta a superar 65 puntos netos en el test."
    },
    armada_ea: {
      nombre: "Armada / Ejército del Aire y del Espacio (Referencia)",
      corteTotal200: 126.0,
      mediaConcursoTipica: 61.0,
      consejo: "Excelente ratio de plazas para quienes superan el corte de 65+ puntos netos en la prueba de conocimientos."
    }
  }
};

