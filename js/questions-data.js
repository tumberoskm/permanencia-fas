/**
 * BANCO OFICIAL DE PREGUNTAS - OPOSICIÓN PERMANENCIA DE TROPA (EJÉRCITO DE TIERRA) v3.0
 * Cubre los 21 Temas Oficiales (Orden DEF/1341/2017 Anexo III + actualizaciones RD 205/2024, RD 268/2025, Instrucción 14/2021 ET).
 * Incluye:
 * - ubicacionTemario: Referencia exacta al Bloque, Tema y Epígrafe del temario oficial.
 * - referencia: Precepto legal exacto (Ley, Real Decreto, Instrucción y Artículo).
 * - consejoAcademia: Regla mnemotécnica o advertencia de academias especializadas (por qué se falla y cómo acertarla siempre).
 * - justificacion: Explicación normativa completa para la Bolsa de Fallos y Corrección.
 */

const DEFAULT_QUESTIONS = [
  // =========================================================================
  // BLOQUE 1: ORGANIZACIÓN (Temas B1-T01 a B1-T06)
  // =========================================================================
  {
    id: "B1-001",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Misión FAS",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 8.1 de la Constitución Española, ¿cuál es la misión encomendada a las Fuerzas Armadas?",
    opciones: [
      "Asegurar la soberanía y velar por el orden público y la seguridad ciudadana.",
      "Garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.",
      "Mantener la paz social, custodiar las fronteras marítimas y defender los tratados de la Unión Europea.",
      "Ejecutar los acuerdos del Consejo de Seguridad Nacional y prestar auxilio en catástrofes."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española) ➔ Título Preliminar (Art. 8)",
    referencia: "Constitución Española de 1978, Art. 8.1",
    consejoAcademia: "No confundas nunca el Art. 8 (FAS: soberanía, independencia, integridad territorial y ordenamiento constitucional) con el Art. 104 (Fuerzas y Cuerpos de Seguridad: libre ejercicio de derechos y seguridad ciudadana).",
    justificacion: "El art. 8.1 de la CE establece textualmente: 'Las Fuerzas Armadas, constituidas por el Ejército de Tierra, la Armada y el Ejército del Aire, tienen como misión garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.'"
  },
  {
    id: "B1-002",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - La Corona y Refrendo",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al artículo 64 de la Constitución Española, ¿quién refrenda la propuesta y el nombramiento del Presidente del Gobierno realizados por el Rey?",
    opciones: [
      "El Presidente del Gobierno saliente en funciones.",
      "El Presidente del Congreso de los Diputados.",
      "El Presidente del Tribunal Constitucional.",
      "El Ministro de Justicia como Notario Mayor del Reino."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española) ➔ Título II: De la Corona (Art. 64)",
    referencia: "Constitución Española de 1978, Art. 64.1",
    consejoAcademia: "Pregunta trampa recurrente cada año: los actos del Rey los refrenda el Presidente del Gobierno o los Ministros, EXCEPTO tres actos que refrenda el Presidente del Congreso: 1) Propuesta de candidato a Presidente, 2) Nombramiento del Presidente del Gobierno, y 3) Disolución de las Cámaras del art. 99.5 CE.",
    justificacion: "El art. 64.1 de la CE establece que los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes. La propuesta y el nombramiento del Presidente del Gobierno, y la disolución prevista en el artículo 99, serán refrendados por el Presidente del Congreso."
  },
  {
    id: "B1-003",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Estados Art. 116",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según el artículo 116 de la Constitución Española, señale la diferencia exacta entre la declaración del Estado de Excepción y la del Estado de Sitio:",
    opciones: [
      "Ambos los declara el Gobierno mediante Real Decreto por 15 días.",
      "El Estado de Excepción lo declara el Gobierno previa autorización del Congreso (máx. 30 días), mientras que el Estado de Sitio lo declara la mayoría absoluta del Congreso a propuesta exclusiva del Gobierno.",
      "El Estado de Excepción lo declara el Rey y el de Sitio el Senado.",
      "El Estado de Excepción dura 60 días iniciales y el de Sitio 15 días."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española) ➔ Título V: Relaciones Gobierno y Cortes (Art. 116)",
    referencia: "Constitución Española de 1978, Arts. 116.3 y 116.4",
    consejoAcademia: "Regla rápida 15-30-Indefinido: Alarma = Gobierno (15 días, da cuenta al Congreso). Excepción = Gobierno PREVIA autorización del Congreso (30 días + 30). Sitio = Mayoría absoluta del Congreso a propuesta exclusiva del Gobierno.",
    justificacion: "Art. 116.3 CE: El estado de excepción será declarado por el Gobierno mediante decreto acordado en Consejo de Ministros, previa autorización del Congreso de los Diputados, sin que pueda exceder de 30 días prorrogables por otro plazo igual. Art. 116.4 CE: El estado de sitio será declarado por la mayoría absoluta del Congreso, a propuesta exclusiva del Gobierno."
  },
  {
    id: "B1-004",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Jefatura y Gobierno",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "¿A quién corresponde el Mando Supremo de las Fuerzas Armadas y a quién la dirección de la Administración militar y la defensa del Estado?",
    opciones: [
      "Ambos corresponden al Presidente del Gobierno.",
      "El Mando Supremo corresponde al Rey (Art. 62.h CE) y la dirección de la Administración militar y la defensa del Estado al Gobierno (Art. 97 CE).",
      "El Mando Supremo corresponde al Rey y la dirección de la defensa al JEMAD.",
      "El Mando Supremo corresponde al Congreso y la dirección de la defensa al Ministro de Defensa."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española) ➔ Título II y Título IV",
    referencia: "Constitución Española de 1978, Arts. 62.h y 97",
    consejoAcademia: "Memoriza el binomio: Rey = Mando Supremo (Art. 62.h CE). Gobierno = Dirige la Administración civil y militar y la defensa del Estado (Art. 97 CE). Presidente del Gobierno = Dirección de la política de defensa (Art. 6 LODN).",
    justificacion: "El art. 62.h CE atribuye al Rey el Mando Supremo de las Fuerzas Armadas, mientras que el art. 97 CE atribuye al Gobierno dirigir la política interior y exterior, la Administración civil y militar y la defensa del Estado."
  },
  {
    id: "B1-005",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "Cortes Generales - Plazos Electorales",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 68 de la Constitución Española, celebradas las elecciones generales, ¿dentro de qué plazo deberá ser convocado el Congreso electo?",
    opciones: [
      "Dentro de los 15 días siguientes a la celebración de las elecciones.",
      "Dentro de los 25 días siguientes a la celebración de las elecciones.",
      "Entre los 30 y 60 días siguientes a las elecciones.",
      "En el plazo máximo de 1 mes desde la proclamación de electos."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Defensa Nacional y Cortes Generales) ➔ El Congreso de los Diputados (Art. 68 CE)",
    referencia: "Constitución Española de 1978, Art. 68.6",
    consejoAcademia: "¡Cuidado con cruzar los dos plazos del Art. 68.6 CE! Las elecciones tienen lugar entre los 30 y 60 DÍAS desde la terminación del mandato; pero una vez celebradas, el Congreso electo debe ser convocado dentro de los 25 DÍAS siguientes.",
    justificacion: "El artículo 68.6 de la CE establece: 'Las elecciones tendrán lugar entre los treinta días y sesenta días desde la terminación del mandato. El Congreso electo deberá ser convocado dentro de los veinticinco días siguientes a la celebración de las elecciones.'"
  },
  {
    id: "B1-006",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "Ley Orgánica 5/2005 de la Defensa Nacional",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al artículo 17 de la Ley Orgánica 5/2005 de la Defensa Nacional, para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno:",
    opciones: [
      "Recabará autorización conjunta del Senado y del Consejo de Estado.",
      "Realizará una consulta previa y recabará la autorización del Congreso de los Diputados.",
      "Solo necesitará informar al Rey en el plazo de 48 horas.",
      "Requerirá mayoría de tres quintos de las Cortes Generales."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Defensa Nacional LO 5/2005) ➔ Control parlamentario y Misiones en el Exterior",
    referencia: "Ley Orgánica 5/2005, de 17 de noviembre, Art. 17.1",
    consejoAcademia: "En misiones internacionales de las FAS (LODN Art. 17), quien autoriza SIEMPRE es el CONGRESO DE LOS DIPUTADOS (nunca el Senado). En misiones que requieran máxima urgencia, el Gobierno decide y somete a ratificación del Congreso lo antes posible.",
    justificacion: "El art. 17.1 de la LO 5/2005 dispone que para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno realizará una consulta previa y recabará la autorización del Congreso de los Diputados."
  },
  {
    id: "B1-007",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Órganos Ministeriales",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según el artículo 55 de la Ley 40/2015 de Régimen Jurídico del Sector Público, en la organización central de la Administración General del Estado, ¿cuáles tienen la condición de ÓRGANOS SUPERIORES?",
    opciones: [
      "Los Ministros, los Secretarios de Estado y los Subsecretarios.",
      "Únicamente los Ministros y los Secretarios de Estado.",
      "Los Ministros, los Subsecretarios y los Secretarios Generales.",
      "El Consejo de Ministros y los Delegados del Gobierno."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Régimen Jurídico del Sector Público Ley 40/2015) ➔ Los Ministerios y su estructura interna",
    referencia: "Ley 40/2015 (LRJSP), Art. 55.2",
    consejoAcademia: "Pregunta fija en exámenes de 2023-2025: Órganos SUPERIORES son SOLO DOS: Ministros y Secretarios de Estado. Todos los demás (Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales y Subdirectores Generales) son Órganos DIRECTIVOS.",
    justificacion: "El artículo 55.2 de la Ley 40/2015 establece que en la organización central son órganos superiores: a) Los Ministros y b) Los Secretarios de Estado. Los Subsecretarios y Secretarios Generales son órganos directivos."
  },
  {
    id: "B1-008",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Delegados del Gobierno",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a la Ley 40/2015, ¿qué rango administrativo ostentan los Delegados del Gobierno en las Comunidades Autónomas y qué nivel tienen los Subdelegados del Gobierno en las provincias?",
    opciones: [
      "Rango de Secretario de Estado y nivel de Director General, respectivamente.",
      "Los Delegados del Gobierno tienen rango de Subsecretario y los Subdelegados del Gobierno tienen nivel de Subdirector General.",
      "Ambos tienen rango de Director General.",
      "Los Delegados tienen rango de Ministro autonómico y los Subdelegados de Secretario General Técnico."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Ley 40/2015 LRJSP) ➔ Organización Territorial de la AGE",
    referencia: "Ley 40/2015 (LRJSP), Art. 55.4",
    consejoAcademia: "Regla mnemotécnica infalible: Delegado del Gobierno en CCAA = rango de SUBSECRETARIO. Subdelegado del Gobierno en Provincia = nivel de SUBDIRECTOR GENERAL (ambos empiezan por SUB- en su escalón correspondiente).",
    justificacion: "El art. 55.4 de la Ley 40/2015 dispone que en la organización territorial de la AGE son órganos directivos tanto los Delegados del Gobierno en las CC.AA., que tendrán rango de Subsecretario, como los Subdelegados del Gobierno en las provincias, los cuales tendrán nivel de Subdirector General."
  },
  {
    id: "B1-009",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024 y RD 268/2025)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡ACTUALIZACIÓN NORMATIVA RD 205/2024! Según la estructura orgánica básica vigente del Ministerio de Defensa, ¿qué nueva Dirección General se integró bajo la dependencia de la Secretaría de Estado de Defensa (SEDEF)?",
    opciones: [
      "La Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM).",
      "La Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID).",
      "La Dirección General de Política de Defensa (DIGENPOL).",
      "La Inspección General de Sanidad de la Defensa (IGESAN)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Ministerio de Defensa, Estructura Orgánica) ➔ Secretaría de Estado de Defensa (SEDEF)",
    referencia: "Real Decreto 205/2024, Art. 4.2",
    consejoAcademia: "¡Pregunta estrella de examen 2025/2026! El RD 205/2024 creó dentro de la SEDEF la DIGEID (Dirección General de Estrategia e Innovación de la Industria de Defensa), que se suma a DGAM, DIGENECO, DIGENIN y CESTIC.",
    justificacion: "El artículo 4.2 del Real Decreto 205/2024 establece que de la Secretaría de Estado de Defensa (SEDEF) dependen la DGAM, la Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID), la DIGENECO, la DIGENIN y el CESTIC."
  },
  {
    id: "B1-010",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al Real Decreto 205/2024 de estructura orgánica básica del Ministerio de Defensa, ¿de qué órgano superior o directivo dependen la DIGENPER, la DIGEREM y la IGESAN, así como la adscripción del ISFAS y el INVIED?",
    opciones: [
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Subsecretaría de Defensa (SUBDEF).",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Del Estado Mayor de la Defensa (EMAD)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Ministerio de Defensa, Estructura Orgánica) ➔ Subsecretaría de Defensa (SUBDEF)",
    referencia: "Real Decreto 205/2024, Arts. 8 a 12",
    consejoAcademia: "Truco de academia: Todo lo que afecta a las PERSONAS (Personal DIGENPER, Reclutamiento y Enseñanza DIGEREM, Sanidad IGESAN, Asesoría Jurídica, Intervención, ISFAS e INVIED) cuelga SIEMPRE de la SUBDEF. Todo lo que es DINERO, ARMAS, OBRAS e INFORMÁTICA (DIGENECO, DGAM, DIGEID, DIGENIN, CESTIC, INTA) cuelga de la SEDEF.",
    justificacion: "De la Subsecretaría de Defensa (SUBDEF) dependen la Secretaría General Técnica (SEGENTE), la Dirección General de Personal (DIGENPER), la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM), la Asesoría Jurídica General, la Intervención General de la Defensa y la IGESAN, estando adscritos el ISFAS y el INVIED."
  },
  {
    id: "B1-011",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Organización Básica de las FAS (RD 521/2020)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el Real Decreto 521/2020 por el que se establece la organización básica de las Fuerzas Armadas, ¿mediante qué mecanismo pasan las unidades de los Ejércitos de la estructura orgánica a la estructura operativa para el cumplimiento de las misiones asignadas?",
    opciones: [
      "Mediante Decreto de Movilización General.",
      "Mediante la Transferencia de Autoridad (TOA) al Jefe de Estado Mayor de la Defensa (JEMAD).",
      "Mediante Orden comunicada de la Subsecretaría de Defensa.",
      "Mediante cesión administrativa temporal al Ministerio del Interior."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 5 (Organización Básica de las FAS RD 521/2020) ➔ Estructura Operativa y Generación de Fuerzas",
    referencia: "Real Decreto 521/2020, Arts. 6 y 9",
    consejoAcademia: "Concepto clave del RD 521/2020: Los Ejércitos (ET, Armada, EA) preparan la Fuerza en la estructura orgánica y la transfieren al JEMAD (estructura operativa) mediante la TOA (Transferencia de Autoridad).",
    justificacion: "Para la ejecución de las operaciones, los Jefes de Estado Mayor de los Ejércitos proporcionan las capacidades requeridas por el JEMAD mediante la correspondiente Transferencia de Autoridad (TOA) a la estructura operativa."
  },
  {
    id: "B1-012",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Organización Básica de las FAS (RD 521/2020)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al Real Decreto 521/2020 y la Orden DEF/710/2020, ¿cuáles son los Mandos Operativos permanentes integrados en la estructura operativa bajo el mando del JEMAD (a través del CMOPS)?",
    opciones: [
      "Mando Norte, Mando Sur, Mando Levante y Mando Canarias.",
      "Mando Operativo Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Ciberespacial (MOC) y Espacial/Aeroespacial (MOE).",
      "FUTER, FLOTA y MACOM únicamente.",
      "UME, Guardia Real y CNI."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 5 (Organización Básica de las FAS) ➔ Mandos Operativos Permanentes",
    referencia: "RD 521/2020 y Orden DEF/710/2020",
    consejoAcademia: "Recuerda los 5 dominios de operación = 5 Mandos Operativos Permanentes: MOT (Terrestre), MOM (Marítimo), MOA (Aéreo), MOC (Ciberespacial) y MOE (Espacial).",
    justificacion: "La estructura operativa cuenta con cinco Mandos Operativos permanentes subordinados al JEMAD a través del MOPS: Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Ciberespacial (MOC) y Espacial (MOE)."
  },
  {
    id: "B1-013",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Organización del Ejército de Tierra (Instrucción 14/2021)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡PREGUNTA CLÁSICA INSTRUCCIÓN 14/2021 ET! En la organización vigente de la Fuerza del Ejército de Tierra, ¿de qué Mando dependen orgánicamente las Comandancias Generales de Ceuta, de Melilla y de Baleares?",
    opciones: [
      "De la Fuerza Terrestre (FUTER - Sevilla).",
      "Del Mando de Canarias del Ejército de Tierra (MCANA).",
      "Del Cuartel General Terrestre de Alta Disponibilidad (CGTAD - Valencia).",
      "De la Inspección General del Ejército (IGE - Barcelona)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del EMAD, ET, Armada y EA) ➔ La Fuerza del Ejército de Tierra (Instrucción 14/2021)",
    referencia: "Instrucción 14/2021, del JEME, por la que se desarrolla la organización del Ejército de Tierra",
    consejoAcademia: "¡Mucho ojo! Antes de la Instrucción 14/2021 dependían de FUTER, pero con la Instrucción 14/2021 las Comandancias Generales de Ceuta, Melilla y Baleares (además de la Brigada 'Canarias' XVI) se encuadran en el MANDO DE CANARIAS DEL ET (MCANA).",
    justificacion: "Según la Instrucción 14/2021 del JEME, el Mando de Canarias del Ejército de Tierra (MCANA) encuadra su Cuartel General (en Santa Cruz de Tenerife), la Brigada 'Canarias' XVI, la Comandancia General de Baleares, la Comandancia General de Ceuta y la Comandancia General de Melilla."
  },
  {
    id: "B1-014",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Organización del Ejército de Tierra (Instrucción 14/2021)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a la Instrucción 14/2021 del Ejército de Tierra, ¿qué cuatro grandes Mandos integran el APOYO A LA FUERZA del Ejército de Tierra y cuáles son sus sedes?",
    opciones: [
      "EME, Gabinete JEME, JCISAT e IHCM (todos en Madrid).",
      "MAPER (Madrid), MALE (Madrid), MADOC (Granada) e IGE (Barcelona).",
      "FUTER (Sevilla), CGTAD (Valencia), MCANA (Tenerife) y FLO (A Coruña).",
      "División San Marcial (Burgos), División Castillejos (Huesca), MAM (A Coruña) y BRIPAC (Paracuellos)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del ET - Instrucción 14/2021) ➔ El Apoyo a la Fuerza",
    referencia: "Instrucción 14/2021 del JEME, Apdo. Quinto (Apoyo a la Fuerza)",
    consejoAcademia: "Apréndete los 3 bloques del ET sin dudar: 1) Cuartel General = EME, Gabinete JEME, JCISAT, IHCM, Asesoría Jurídica. 2) Fuerza = CGTAD (Bétera), FUTER (Sevilla) y MCANA (Tenerife). 3) Apoyo a la Fuerza = MAPER (Madrid), MALE (Madrid), MADOC (Granada) e IGE (Barcelona).",
    justificacion: "El Apoyo a la Fuerza del Ejército de Tierra está constituido por: el Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE), el Mando de Adiestramiento y Doctrina (MADOC) y la Inspección General del Ejército (IGE)."
  },
  {
    id: "B1-015",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Organización del Ejército de Tierra - FUTER",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Dentro de la Fuerza Terrestre (FUTER), ¿cuáles son sus tres grandes organizaciones subordinadas directas y dónde radican sus cuarteles generales?",
    opciones: [
      "División 'San Marcial' (Burgos), División 'Castillejos' (Huesca) y Mando de Apoyo a la Maniobra - MAM (A Coruña).",
      "Brigada de La Legión (Almería), BRIPAC (Madrid) y BRILAT (Pontevedra).",
      "Mando de Artillería, Mando de Ingenieros y Mando de Transmisiones.",
      "CGTAD (Valencia), MCANA (Tenerife) y Fuerza Logística (Sevilla)."
    ],
    correcta: 0,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del ET - Instrucción 14/2021) ➔ La Fuerza Terrestre (FUTER)",
    referencia: "Instrucción 14/2021 del JEME, Apdo. Cuarto",
    consejoAcademia: "Recuerda las 3 patas de FUTER (Sevilla): 1) División 'San Marcial' (Burgos: BRIPAC, MOE, FAMET, Tropas de Montaña), 2) División 'Castillejos' (Huesca: Brigadas Aragón I, Rey Alfonso XIII II de La Legión, Galicia VII, Guzmán el Bueno X, Extremadura XI y Guadarrama XII), y 3) Mando de Apoyo a la Maniobra - MAM (A Coruña).",
    justificacion: "La Fuerza Terrestre (FUTER), con Cuartel General en Sevilla, se articula en la División 'San Marcial' (Burgos), la División 'Castillejos' (Huesca) y el Mando de Apoyo a la Maniobra (A Coruña)."
  },

  // =========================================================================
  // BLOQUE 2: JURÍDICO - SOCIAL (Temas B2-T01 a B2-T08)
  // =========================================================================
  {
    id: "B2-001",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 de Tropa y Marinería",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Conforme al artículo 8 de la Ley 8/2006 de Tropa y Marinería, ¿hasta qué edad máxima se extiende el Compromiso de Larga Duración (CLD)?",
    opciones: [
      "Hasta los 42 años.",
      "Hasta cumplir los 45 años de edad.",
      "Hasta los 50 años.",
      "Hasta los 58 años en unidades no operativas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Régimen del Personal Militar Profesional) ➔ Ley 8/2006: Compromiso de Larga Duración",
    referencia: "Ley 8/2006, de 24 de abril, Art. 8.1",
    consejoAcademia: "No confundas las tres edades clave de Tropa: 45 años = fin del Compromiso de Larga Duración (CLD). 58 años = pase a la Reserva de Tropa Permanente (Militar de Carrera). 65 años = fin de la condición de Reservista de Especial Disponibilidad (RED) y edad de retiro.",
    justificacion: "El Compromiso de Larga Duración se extenderá hasta que el militar de tropa y marinería cumpla cuarenta y cinco años de edad (Art. 8.1, Ley 8/2006)."
  },
  {
    id: "B2-002",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 - Permanencia y RED",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En la Ley 8/2006 de Tropa y Marinería, ¿cuántos años mínimos de servicios se exigen para adquirir la condición de Reservista de Especial Disponibilidad (RED) al finalizar el CLD a los 45 años?",
    opciones: [
      "12 años de servicios.",
      "14 años de servicios.",
      "Al menos 18 años de servicios.",
      "20 años de servicios."
    ],
    correcta: 2,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Régimen del Personal Militar Profesional) ➔ Reservistas de Especial Disponibilidad",
    referencia: "Ley 8/2006, de 24 de abril, Art. 17.1",
    consejoAcademia: "Cruce clásico de examen: Para presentarse a la PERMANENCIA = 14 años de servicio. Para ser RED (Reservista de Especial Disponibilidad) al cumplir los 45 años = 18 años de servicio.",
    justificacion: "El art. 17.1 de la Ley 8/2006 exige haber cumplido al menos 18 años de servicios para adquirir la condición de Reservista de Especial Disponibilidad al finalizar el Compromiso de Larga Duración a los 45 años."
  },
  {
    id: "B2-003",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 de la Carrera Militar - Ascensos y Destinos",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según la Ley 39/2007 de la Carrera Militar, ¿por qué sistema se asciende al empleo de Cabo Mayor y a qué edad pasa a la situación de Reserva un militar de carrera de la categoría de Tropa y Marinería?",
    opciones: [
      "Se asciende por antigüedad y pasa a la reserva a los 61 años.",
      "Se asciende por el sistema de Elección y pasa a la situación de Reserva al cumplir los 58 años de edad.",
      "Se asciende por concurso-oposición y pasa a la reserva a los 56 años.",
      "Se asciende por clasificación y pasa a la reserva a los 65 años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 de la Carrera Militar) ➔ Régimen de Ascensos y Pase a la Reserva",
    referencia: "Ley 39/2007, Arts. 89 y 113.4",
    consejoAcademia: "Al empleo cumbre de cada categoría (Cabo Mayor, Suboficial Mayor y Oficiales Generales) se asciende SIEMPRE por ELECCIÓN. Y el pase a la Reserva en Tropa Permanente es a los 58 años.",
    justificacion: "Conforme al art. 89 de la Ley 39/2007, a Cabo Mayor se asciende por el sistema de elección. Según el art. 113.4, los militares de carrera de la categoría de tropa y marinería pasarán a la situación de reserva al cumplir los 58 años de edad."
  },
  {
    id: "B2-004",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas (RD 96/2009)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al artículo 3 de las Reales Ordenanzas para las FAS (RD 96/2009), ¿cuál constituye el primer y más fundamental deber del militar?",
    opciones: [
      "La obediencia incondicional a todos los mandos jerárquicos.",
      "La disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario.",
      "El perfeccionamiento técnico constante y el cuidado del armamento.",
      "La neutralidad política y sindical dentro y fuera de la unidad."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas RD 96/2009) ➔ Título Preliminar (Art. 3)",
    referencia: "Real Decreto 96/2009, Art. 3",
    consejoAcademia: "Pregunta literal de examen oficial: 'Primer y más fundamental deber del militar' = Disposición permanente para defender a España, incluso con la entrega de la vida (Art. 3). 'Factor de cohesión que obliga a mandar con responsabilidad y obedecer lo mandado' = La Disciplina (Art. 8).",
    justificacion: "El art. 3 de las Reales Ordenanzas (RD 96/2009) define que 'La disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario, constituye el primer y más fundamental deber del militar'."
  },
  {
    id: "B2-005",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas (RD 96/2009) - Operaciones y Prisionero",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 92 de las Reales Ordenanzas para las FAS, en caso de caer prisionero del enemigo, ¿qué únicos datos está obligado a declarar todo militar?",
    opciones: [
      "Nombre, unidad de destino, misión asignada y armamento reglamentario.",
      "Nombre y apellidos, empleo, número de filiación y fecha de nacimiento.",
      "Únicamente su Documento Nacional de Identidad y su nacionalidad.",
      "Nombre, graduación, nombre de su comandante y base de procedencia."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas RD 96/2009) ➔ Título IV: De las Operaciones (Art. 92)",
    referencia: "Real Decreto 96/2009, Art. 92",
    consejoAcademia: "Pregunta que se repite casi todos los años en Permanencia: recuerda los 4 datos de Ginebra/ROFAS Art. 92: 1) Nombre y apellidos, 2) Empleo, 3) Número de filiación, y 4) Fecha de nacimiento. ¡Jamás la unidad de destino ni la misión!",
    justificacion: "Conforme al art. 92 del RD 96/2009 y los Convenios de Ginebra, si el militar cae prisionero está obligado a facilitar únicamente su nombre y apellidos, empleo, número de filiación y fecha de nacimiento."
  },
  {
    id: "B2-006",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011) - Observatorio y COPERFAS",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿A qué institución está adscrito el Observatorio de la Vida Militar y cuántos miembros lo componen según la Ley Orgánica 9/2011?",
    opciones: [
      "Al Ministerio de Defensa (SUBDEF), compuesto por 12 generales.",
      "A las Cortes Generales, compuesto por 9 personalidades elegidas (5 por el Congreso y 4 por el Senado) por un mandato de 5 años.",
      "Al Estado Mayor de la Defensa, compuesto por 10 vocales de asociaciones.",
      "Al Consejo de Estado, compuesto por 7 magistrados militares."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (Derechos y Deberes LO 9/2011) ➔ Título IV: Del Observatorio de la Vida Militar",
    referencia: "Ley Orgánica 9/2011, Arts. 54 y 55",
    consejoAcademia: "No confundas los DOS Observatorios del temario: 1) Observatorio de la VIDA MILITAR (LO 9/2011) = adscrito a las CORTES GENERALES (9 miembros: 5 Congreso + 4 Senado, mandato 5 años). 2) Observatorio Militar para la IGUALDAD = adscrito a la SUBDEF (se reúne mín. 2 veces al año).",
    justificacion: "El Observatorio de la Vida Militar (Art. 54 LO 9/2011) está adscrito a las Cortes Generales y lo integran 9 miembros (5 elegidos por el Congreso de los Diputados y 4 por el Senado) por un mandato de 5 años."
  },
  {
    id: "B2-007",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011) - Asociaciones y COPERFAS",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según el artículo 48 de la Ley Orgánica 9/2011, para que una asociación profesional de miembros de las FAS exclusivamente de la categoría de Tropa y Marinería pueda formar parte del COPERFAS, ¿qué porcentaje mínimo de afiliados debe acreditar?",
    opciones: [
      "El 5% de los efectivos de su categoría.",
      "El 1,5% de los efectivos de la categoría de Tropa y Marinería (o el 1% del total de las FAS si es de ámbito general).",
      "El 3% de los efectivos de Tropa y Marinería.",
      "El 10% del total de las Fuerzas Armadas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (Derechos y Deberes LO 9/2011) ➔ Título III: Del Consejo de Personal de las FAS (COPERFAS)",
    referencia: "Ley Orgánica 9/2011, Art. 48.2",
    consejoAcademia: "¡Pregunta trampa de porcentajes muy repetida! Apunta la regla 1 - 3 - 3 - 1,5: Ámbito general FAS = 1%. Categoría de Oficiales = 3%. Categoría de Suboficiales = 3%. Categoría de Tropa y Marinería = 1,5%.",
    justificacion: "El artículo 48.2 de la LO 9/2011 exige, para formar parte del COPERFAS, contar con un mínimo del 1% de afiliados del total de efectivos de las FAS; o el 3% en el caso de asociaciones de Oficiales o de Suboficiales, y el 1,5% en las asociaciones de Tropa y Marinería."
  },
  {
    id: "B2-008",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014) - Sanciones",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 11 de la Ley Orgánica 8/2014 de Régimen Disciplinario de las FAS, ¿cuáles son las cuatro sanciones que pueden imponerse por FALTAS LEVES?",
    opciones: [
      "Reprensión, privación de salida de uno a ocho días, sanción económica de uno a ocho días y arresto de uno a catorce días.",
      "Amonestación verbal, rebajo de guardia y retención de sueldo por quince días.",
      "Pérdida de destino, arresto de 15 a 30 días y sanción económica de 8 a 15 días.",
      "Suspensión de empleo, reprensión y arresto de 1 a 30 días."
    ],
    correcta: 0,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Capítulo II: Sanciones disciplinarias (Art. 11)",
    referencia: "Ley Orgánica 8/2014, Art. 11.1",
    consejoAcademia: "Domina los tramos de días de la LO 8/2014: Leves = Privación salida (1-8), Económica (1-8), Arresto (1-14). Graves = Económica (8-15), Arresto (15-30), Pérdida destino, Baja centro formación. Muy Graves = Arresto (31-60), Suspensión empleo (1m-1a), Separación servicio, Resolución compromiso.",
    justificacion: "El Art. 11.1 de la LO 8/2014 establece que las sanciones que pueden imponerse por faltas leves son: reprensión, privación de salida de 1 a 8 días, sanción económica de 1 a 8 días y arresto de 1 a 14 días."
  },
  {
    id: "B2-009",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014) - Prescripción",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DE EXAMEN! Según los artículos 24 y 25 de la Ley Orgánica 8/2014, ¿cuál es el plazo de prescripción de las FALTAS LEVES frente al plazo de prescripción de las SANCIONES impuestas por falta leve?",
    opciones: [
      "Tanto la falta leve como la sanción leve prescriben a los 3 meses.",
      "Las faltas leves prescriben a los 2 MESES (Art. 24.1), mientras que las sanciones por falta leve prescriben a los 3 MESES (Art. 25.1).",
      "Las faltas leves prescriben al mes y las sanciones a los 6 meses.",
      "Las faltas leves prescriben a los 3 meses y las sanciones al año."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Extinción de la responsabilidad disciplinaria (Arts. 24 y 25)",
    referencia: "Ley Orgánica 8/2014, Arts. 24.1 y 25.1",
    consejoAcademia: "Esta pregunta cae prácticamente todos los años para pillar a quien no distingue Falta de Sanción: FALTAS prescriben en 2 meses (leves), 1 año (graves) y 2 años (muy graves). SANCIONES prescriben en 3 meses (leves), 1 año (graves) y 2 años (muy graves).",
    justificacion: "En la LO 8/2014, el Art. 24.1 fija que las faltas leves prescriben a los 2 meses, las graves al año y las muy graves a los 2 años. En cambio, el Art. 25.1 fija que las sanciones impuestas por falta leve prescriben a los 3 meses, las graves al año y las muy graves a los 2 años."
  },
  {
    id: "B2-010",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014) - Competencia Sancionadora",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 32 de la Ley Orgánica 8/2014, ¿qué sanciones puede imponer un Jefe de Compañía o unidad similar a los militares a sus órdenes?",
    opciones: [
      "Arresto de hasta 14 días y sanción económica de hasta 8 días.",
      "Reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días (NO puede imponer arresto).",
      "Únicamente la reprensión.",
      "Arresto de hasta 7 días y privación de salida de hasta 8 días."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Potestad sancionadora y competencia (Art. 32)",
    referencia: "Ley Orgánica 8/2014, Art. 32.5",
    consejoAcademia: "¡Recuérdalo siempre!: Un Capitán Jefe de Compañía NO puede meter días de arresto en la LO 8/2014; su tope es reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días. El arresto por falta leve (hasta 14 días) empieza en el Jefe de Batallón/Grupo.",
    justificacion: "El artículo 32.5 de la LO 8/2014 atribuye a los Jefes de Compañía o unidad similar competencia para imponer a los subordinados las sanciones de reprensión, privación de salida hasta cinco días y sanción económica hasta cinco días."
  },
  {
    id: "B2-011",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014) - Cancelación y Caducidad",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme a los artículos 48 y 65 de la Ley Orgánica 8/2014, ¿cuál es el plazo máximo de tramitación (caducidad) de un expediente por falta GRAVE y en qué plazo se cancela la nota desfavorable de una sanción por falta GRAVE?",
    opciones: [
      "El expediente caduca a los 3 meses y la nota se cancela al año.",
      "El expediente por falta grave caduca a los 6 MESES (Art. 48) y la nota desfavorable por falta grave se cancela a los 2 AÑOS (Art. 65).",
      "El expediente caduca al año y la nota se cancela a los 4 años.",
      "El expediente caduca a los 2 meses y la nota se cancela a los 3 meses."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Tramitación y Cancelación de notas",
    referencia: "Ley Orgánica 8/2014, Arts. 48 y 65",
    consejoAcademia: "Separa en tu mente: Caducidad del expediente = 6 meses (falta grave) y 1 año (falta muy grave). Cancelación de notas desfavorables en la hoja de servicios = 1 año (leve), 2 años (grave) y 4 años (muy grave).",
    justificacion: "El art. 48.1 establece en 6 meses el plazo máximo para instruir y resolver el procedimiento por falta grave (1 año para muy grave). El art. 65 establece la cancelación de notas al año (leve), 2 años (grave) y 4 años (muy grave)."
  },
  {
    id: "B2-012",
    temaCodigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Iniciativas y Quejas (RD 176/2014)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al Real Decreto 176/2014 de iniciativas y quejas, ¿qué empleo debe tener el militar de la categoría de Tropa y Marinería designado en las unidades para recepcionarlas, y en qué plazo puede el interesado acudir directamente al MAPER si el jefe de unidad no contesta su queja?",
    opciones: [
      "Cabo Primero; plazo de 15 días.",
      "Cabo Mayor; plazo de 1 MES desde la presentación de la queja.",
      "Cualquier Soldado con CLD; plazo de 3 meses.",
      "Cabo Mayor; plazo de 2 meses."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 5 (Tramitación de Iniciativas y Quejas RD 176/2014) ➔ Arts. 5 y 10",
    referencia: "Real Decreto 176/2014, Arts. 5 y 10",
    consejoAcademia: "Dos datos clave del RD 176/2014: 1) El receptor designado en la unidad es un Oficial, Suboficial o CABO MAYOR. 2) Si en 1 MES el jefe de unidad no contesta la queja, puedes elevarla directamente al Mando de Personal (MAPER).",
    justificacion: "El art. 5 del RD 176/2014 señala que en las unidades se designará un Oficial, Suboficial o Cabo Mayor. El art. 10 dispone que si en el plazo de un mes no se hubiera contestado a la queja, el militar podrá dirigirse directamente al Mando o Jefatura de Personal."
  },
  {
    id: "B2-013",
    temaCodigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley Orgánica 3/2007 de Igualdad Efectiva",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según la Disposición Adicional Primera de la Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres, ¿qué se entiende por 'presencia o composición equilibrada'?",
    opciones: [
      "Exactamente el 50% de hombres y el 50% de mujeres en todos los órganos.",
      "La presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo no superen el 60% ni sean menos del 40%.",
      "Que al menos un 25% de las plazas se reserven a mujeres.",
      "Que ningún sexo supere el 70% ni sea inferior al 30%."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 6 (Igualdad de trato y oportunidades LO 3/2007) ➔ Presencia equilibrada",
    referencia: "Ley Orgánica 3/2007, Disposición Adicional Primera",
    consejoAcademia: "Cifra exacta que pregunta el tribunal: Presencia equilibrada = horquilla del 40% al 60% (nadie más del 60%, nadie menos del 40%).",
    justificacion: "La Disposición Adicional Primera de la LO 3/2007 define como presencia o composición equilibrada aquella en la que las personas de cada sexo no superen el sesenta por ciento ni sean menos del cuarenta por ciento."
  },
  {
    id: "B2-014",
    temaCodigo: "B2-T07",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Observatorio Militar para la Igualdad y Protocolo Frente al Acoso (UPA)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "En relación con el Observatorio Militar para la Igualdad y el Protocolo frente al acoso en las FAS, señale la opción correcta:",
    opciones: [
      "El Observatorio está adscrito a las Cortes Generales y la denuncia por acoso exige seguir siempre el conducto reglamentario.",
      "El Observatorio está adscrito a la Subsecretaría de Defensa (se reúne en pleno al menos dos veces al año) y la denuncia de acoso puede presentarse directamente ante la UPA sin pasar por el conducto reglamentario.",
      "Solo existe una UPA en toda España ubicada en el Congreso.",
      "El Observatorio lo preside el JEMAD y se reúne cada cinco años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 7 (Observatorio Militar para la Igualdad y Protocolo frente al Acoso)",
    referencia: "Orden DEF/111/2019 y Protocolo frente al Acoso en las FAS",
    consejoAcademia: "Recuerda: existen 5 UPAs (Órgano Central, EMAD, ET, Armada y EA), puedes acudir a ellas SALTÁNDOTE el conducto reglamentario, y el Observatorio Militar para la Igualdad depende de la SUBDEF y se reúne mínimo 2 veces al año.",
    justificacion: "El Observatorio Militar para la Igualdad está adscrito a la Subsecretaría de Defensa y se reúne al menos dos veces al año. En caso de acoso sexual o por razón de sexo, se puede acudir directamente a la Unidad de Protección frente al Acoso (UPA) sin obligación de seguir el conducto reglamentario."
  },
  {
    id: "B2-015",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Procedimiento y Recursos",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a la Ley 39/2015 del Procedimiento Administrativo Común (LPACAP), ¿cuál es el plazo de interposición (en acto expreso) y el plazo máximo para dictar y notificar la resolución de un Recurso de Alzada frente a un Recurso Potestativo de Reposición?",
    opciones: [
      "En ambos el plazo para interponer es de 2 meses y para resolver de 6 meses.",
      "En ambos el plazo para interponer es de 1 MES (si el acto es expreso), pero el plazo máximo para resolver y notificar es de 3 MESES en Alzada y de 1 MES en Reposición.",
      "Alzada se interpone en 15 días hábiles y Reposición en 30 días.",
      "Alzada se resuelve en 1 mes y Reposición en 3 meses."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Procedimiento Administrativo Común Ley 39/2015) ➔ Recursos Administrativos",
    referencia: "Ley 39/2015 (LPACAP), Arts. 121 a 124",
    consejoAcademia: "Regla de oro LPACAP: Interponer = 1 mes (tanto Alzada como Reposición si el acto es expreso). Resolver = Alzada tiene 3 MESES (porque sube al superior jerárquico) y Reposición tiene 1 MES (porque lo resuelve el mismo órgano).",
    justificacion: "Según los arts. 122 y 124 de la Ley 39/2015, el plazo de interposición de ambos recursos es de 1 mes si el acto fuera expreso. El plazo máximo para dictar y notificar la resolución es de 3 meses en el recurso de alzada y de 1 mes en el potestativo de reposición."
  },
  {
    id: "B2-016",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Nulidad vs Anulabilidad",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según el artículo 47.1.b de la Ley 39/2015 (LPACAP), ¿cuándo produce NULIDAD DE PLENO DERECHO la falta de competencia del órgano que dicta un acto administrativo?",
    opciones: [
      "Siempre que exista cualquier incompetencia, incluida la jerárquica.",
      "Cuando sean dictados por órgano manifiestamente incompetente por razón de la MATERIA o del TERRITORIO.",
      "Únicamente cuando sea por incompetencia jerárquica.",
      "Nunca; la incompetencia solo constituye una irregularidad no invalidante."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Procedimiento Administrativo Común Ley 39/2015) ➔ Nulidad y Anulabilidad (Arts. 47 y 48)",
    referencia: "Ley 39/2015 (LPACAP), Art. 47.1.b y Art. 52.3",
    consejoAcademia: "¡Trampa favorita de Derecho Administrativo!: La incompetencia manifiesta por MATERIA o TERRITORIO = Nulidad de pleno derecho (Art. 47). En cambio, la incompetencia JERÁRQUICA = simple Anulabilidad (Art. 48) y puede ser subsanada/convalidada por el superior jerárquico (Art. 52.3).",
    justificacion: "El art. 47.1.b de la Ley 39/2015 dispone que son nulos de pleno derecho los actos dictados por órgano manifiestamente incompetente por razón de la materia o del territorio. Si el vicio consistiera en incompetencia no determinante de nulidad (jerárquica), la convalidación podrá realizarse por el órgano competente cuando sea superior jerárquico."
  },

  // =========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL, ACCIÓN CONJUNTA Y OO.II. (Temas B3-T01 a B3-T07)
  // =========================================================================
  {
    id: "B3-001",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 9, 21 y 24 de la Ley 36/2015 de Seguridad Nacional, ¿cuáles son los 3 componentes fundamentales de la Seguridad Nacional, con qué frecuencia mínima se reúne el Consejo de Seguridad Nacional y quién declara la Situación de Interés para la Seguridad Nacional?",
    opciones: [
      "Tierra, Mar y Aire; se reúne cada mes; la declara el Congreso.",
      "Defensa Nacional, Seguridad Pública y Acción Exterior; el Consejo se reúne como mínimo con carácter BIMESTRAL; y la Situación de Interés la declara el Presidente del Gobierno mediante Real Decreto.",
      "Policía, Guardia Civil y CNI; se reúne cada 6 meses; la declara el Rey.",
      "Defensa, Interior y Exteriores; se reúne semanalmente; la declara el JEMAD."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 y Estrategia de Seguridad Nacional) ➔ Componentes, CSN y Gestión de Crisis",
    referencia: "Ley 36/2015, Arts. 9, 21.5 y 24.1",
    consejoAcademia: "Tres preguntas de examen en una sola tarjeta: 1) Componentes fundamentales (Art. 9) = Defensa Nacional, Seguridad Pública y Acción Exterior. 2) Reunión del CSN (Art. 21.5) = mínimo BIMESTRAL (cada 2 meses). 3) Declaración Situación de Interés (Art. 24) = Presidente del Gobierno por Real Decreto.",
    justificacion: "La Ley 36/2015 fija en su art. 9 como componentes fundamentales la Defensa Nacional, la Seguridad Pública y la Acción Exterior; en su art. 21.5 que el CSN se reúne como mínimo con carácter bimestral; y en su art. 24.1 que el Presidente del Gobierno declara la Situación de Interés mediante Real Decreto."
  },
  {
    id: "B3-002",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 (Empleo de las FAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Doctrina para el Empleo de las FAS (PDC-01), ¿cuál es la diferencia entre una operación CONJUNTA, una COMBINADA y el concepto de MANDO TIPO MISIÓN?",
    opciones: [
      "Conjunta y Combinada son sinónimas, y el Mando Tipo Misión centraliza toda la ejecución.",
      "CONJUNTA emplea fuerzas de dos o más Ejércitos nacionales (ET, Armada, EA); COMBINADA emplea fuerzas de dos o más naciones aliadas; y el MANDO TIPO MISIÓN descentraliza la ejecución otorgando libertad de acción al subordinado basada en el propósito del comandante.",
      "Conjunta es con fuerzas civiles y Combinada es entre Infantería y Artillería.",
      "El Mando Tipo Misión prohíbe al subordinado tomar iniciativas tácticas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 2 (Doctrina para la acción conjunta PDC-01) ➔ Acción Conjunta, Combinada y Mando y Control",
    referencia: "Publicación Doctrinal Conjunta PDC-01 (A)",
    consejoAcademia: "En PDC-01 caen siempre estas tres definiciones: Conjunta = varios ejércitos de España. Combinada = varios países aliados. Mando Tipo Misión = ordenas el 'QUÉ' y el 'PARA QUÉ' (propósito del comandante) y das libertad de acción en el 'CÓMO' (ejecución descentralizada).",
    justificacion: "La PDC-01 define la acción conjunta como la realizada por fuerzas de dos o más Ejércitos nacionales, la combinada como la realizada por fuerzas de varios Estados, y el Mando Tipo Misión como el estilo de mando que combina dirección centralizada (propósito) con ejecución descentralizada."
  },
  {
    id: "B3-003",
    temaCodigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Organización de las Naciones Unidas (ONU)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "En relación con la Organización de las Naciones Unidas (ONU), ¿en qué año ingresó España, cuántos miembros componen el Consejo de Seguridad y cuál es el único órgano principal cuya sede NO está en Nueva York?",
    opciones: [
      "España ingresó en 1945; el Consejo tiene 10 miembros; la Secretaría General está en Ginebra.",
      "España ingresó el 14 de diciembre de 1955; el Consejo de Seguridad tiene 15 miembros (5 permanentes con derecho de veto y 10 no permanentes elegidos por 2 años); y la Corte Internacional de Justicia tiene su sede en La Haya (Países Bajos).",
      "España ingresó en 1982; el Consejo tiene 27 miembros; el ECOSOC está en Viena.",
      "España ingresó en 1986; el Consejo tiene 15 miembros permanentes; la Corte está en Bruselas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 3 (Organización de las Naciones Unidas ONU) ➔ Órganos principales y Relación con España",
    referencia: "Carta de las Naciones Unidas (1945), Arts. 7 y 23",
    consejoAcademia: "Memoriza el triplete de fechas de ingreso de España en el Bloque 3: ONU = 1955 (14 diciembre). OTAN = 1982 (30 mayo). Unión Europea (CEE) = 1986 (1 enero).",
    justificacion: "España ingresó en la ONU el 14 de diciembre de 1955. El Consejo de Seguridad consta de 15 miembros (5 permanentes: EE.UU., Rusia, China, Francia y Reino Unido; y 10 no permanentes por periodos de 2 años). La Corte Internacional de Justicia (15 jueces por 9 años) tiene su sede en La Haya."
  },
  {
    id: "B3-004",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OTAN - Tratado de Washington y Estructura",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Respecto a la OTAN, ¿cuántos Estados miembros la integran tras la incorporación de Finlandia y Suecia, qué diferencia hay entre los artículos 4 y 5 del Tratado de Washington, y cuáles son sus dos Mandos Estratégicos?",
    opciones: [
      "Tiene 27 miembros; el Art. 4 es nuclear y el Art. 5 convencional.",
      "Cuenta con 32 Estados miembros; el Art. 4 regula la CONSULTA ante amenaza y el Art. 5 la DEFENSA COLECTIVA ante ataque armado; y sus dos Mandos Estratégicos son ACO (Operaciones, en SHAPE - Mons, Bélgica) y ACT (Transformación, en Norfolk, EE.UU.).",
      "Cuenta con 30 miembros; ambos mandos estratégicos están en Bruselas.",
      "Cuenta con 57 miembros; sus mandos están en Viena y Varsovia."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 4 (OTAN) ➔ Tratado de Washington, Estados miembros y Estructura Militar",
    referencia: "Tratado del Atlántico Norte (1949) y Estructura de Mandos OTAN 2024/2025",
    consejoAcademia: "Dato actualizado de examen 2024/2025: La OTAN tiene 32 MIEMBROS (Finlandia fue el 31 en 2023 y Suecia el 32 en marzo de 2024). Sede política (NAC) = Bruselas. Mando Estratégico de Operaciones (ACO/SHAPE) = Mons (Bélgica). Mando Estratégico de Transformación (ACT) = Norfolk (EE.UU.).",
    justificacion: "Con la entrada de Finlandia (2023) y Suecia (2024), la OTAN suma 32 aliados. El Art. 4 establece las consultas aliadas y el Art. 5 la defensa colectiva. Sus dos mandos estratégicos son ACO (SHAPE, Mons) y ACT (Norfolk)."
  },
  {
    id: "B3-005",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OSCE - Historia, Dimensiones y Sedes",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿En qué documento de 1975 tiene su origen la OSCE, cómo se toman sus decisiones, dónde radica su Secretariado General y en qué año ejerció España su Presidencia?",
    opciones: [
      "En el Tratado de Roma de 1957; por mayoría simple; sede en Ginebra.",
      "En el Acta Final de Helsinki (1975); sus 57 Estados participantes adoptan las decisiones por CONSENSO; su Secretariado y Consejo Permanente están en VIENA (Austria); y España ejerció la Presidencia en 2007.",
      "En la Carta de San Francisco de 1945; sede en Bruselas; España la presidió en 1992.",
      "En el Tratado de Maastricht; sede en Estrasburgo."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 5 (Organización para la Seguridad y la Cooperación en Europa - OSCE)",
    referencia: "Acta Final de Helsinki (1975), Cumbre de Budapest (1994) y Estructura OSCE",
    consejoAcademia: "Palabras clave para acertar SIEMPRE cualquier pregunta de la OSCE: 1975 = Acta Final de Helsinki (nace como CSCE). 1994 = Cumbre de Budapest (pasa a llamarse OSCE desde 1995). 57 Estados participantes. 3 Dimensiones ('Cestas'): Político-Militar, Económica-Medioambiental y Humana. Sede = Viena (OIDDH en Varsovia). Presidencia española = 2007.",
    justificacion: "La OSCE nació como CSCE en el Acta Final de Helsinki de 1975 y adoptó su denominación actual en la Cumbre de Budapest de 1994. Cuenta con 57 Estados participantes que deciden por consenso, tiene su Secretariado en Viena y fue presidida por España en 2007."
  },
  {
    id: "B3-006",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - PCSD y Cláusulas",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "En el ámbito de la Unión Europea, señale la diferencia entre el Art. 42.7 del TUE y el Art. 222 del TFUE, e indique qué agencia de la PCSD tiene su sede en España:",
    opciones: [
      "Ambos regulan el euro y la agencia en España es Frontex.",
      "El Art. 42.7 TUE es la Cláusula de Asistencia Mutua (ante agresión armada en su territorio), el Art. 222 TFUE es la Cláusula de Solidaridad (ante ataque terrorista o catástrofe natural/humana), y en Torrejón de Ardoz (Madrid) tiene su sede el Centro de Satélites de la UE (SATCEN).",
      "El Art. 42.7 es de solidaridad y el Art. 222 de defensa armada; la agencia en España es Europol.",
      "Ninguna agencia de defensa de la UE tiene sede en España."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 6 (Unión Europea: Instituciones y PCSD) ➔ Cláusulas de defensa y Agencias",
    referencia: "Tratado de la Unión Europea (Art. 42.7) y TFUE (Art. 222)",
    consejoAcademia: "Asociación directa: 42.7 TUE = Agresión Armada (Asistencia Mutua). 222 TFUE = Terrorismo o Catástrofe (Cláusula de Solidaridad). Y recuerda que en Torrejón de Ardoz está el SATCEN (Centro de Satélites de la UE) y en Rota el OHQ de la Operación Atalanta.",
    justificacion: "El art. 42.7 del TUE recoge la cláusula de asistencia mutua en caso de agresión armada contra un Estado miembro; el art. 222 del TFUE recoge la cláusula de solidaridad ante ataques terroristas o catástrofes; y el Centro de Satélites de la UE (SATCEN) tiene su sede en Torrejón de Ardoz."
  },
  {
    id: "B3-007",
    temaCodigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "España en Misiones Internacionales (1989 - 2025)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡ACTUALIDAD DE MISIONES INTERNACIONALES! ¿En qué año y misiones comenzaron las operaciones de las FAS en el exterior, cómo se denomina la operación de la ONU en el Líbano, dónde está el OHQ de la Operación Atalanta y en qué país del Flanco Este ejerce España como 'Nación Marco' (Framework Nation) de la OTAN desde 2024?",
    opciones: [
      "Empezaron en 1995 en Bosnia; la operación en Líbano es Sophia; y España lidera en Polonia.",
      "Comenzaron en 1989 (UNAVEM I en Angola y UNTAG en Namibia); en el Líbano es FINUL/UNIFIL (Operación 'Libre Hidalgo'); el OHQ de EUNAVFOR Atalanta está en Rota (Cádiz); y desde 2024 España lidera como Nación Marco la Brigada Multinacional de la OTAN en ESLOVAQUIA (Lešť).",
      "Comenzaron en 1982 en Malvinas; el OHQ de Atalanta está en Cartagena; y España es Nación Marco en Estonia.",
      "Comenzaron en 2001 en Afganistán; y España solo despliega en Letonia."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 7 (España y su participación en Misiones Internacionales) ➔ Misiones realizadas y en curso",
    referencia: "Histórico Oficial de Misiones en el Exterior del EMAD / MOPS (2024/2025)",
    consejoAcademia: "¡Pregunta clave del Tema 7 en 2025!: 1989 = primeras misiones ONU (Angola UNAVEM I y Namibia UNTAG). Líbano (ONU) = FINUL / Libre Hidalgo. Índico (UE) = Atalanta (con Cuartel General Operacional OHQ en Rota). Flanco Este OTAN = Letonia (eFP Adazi) y ESLOVAQUIA (Lešť, donde España es Nación Marco desde 2024).",
    justificacion: "Las misiones en el exterior de las FAS se iniciaron en 1989 en Angola (UNAVEM I) y Namibia (UNTAG). Actualmente destacan FINUL (Libre Hidalgo) en Líbano, EUNAVFOR Atalanta (con OHQ en Rota) y el liderazgo español como Nación Marco de la OTAN en Eslovaquia (Lešť), junto al despliegue en Letonia."
  },
  {
    id: "B1-052",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española de 1978 - La Corona (Título II)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 64 de la Constitución Española, ¿quién refrenda los actos del Rey, salvo la propuesta y nombramiento del Presidente del Gobierno y la disolución prevista en el artículo 99?",
    opciones: [
      "El Presidente del Tribunal Constitucional en todos los casos.",
      "El Presidente del Gobierno y, en su caso, los Ministros competentes (mientras que la propuesta/nombramiento del Presidente del Gobierno y la disolución del art. 99 las refrenda el Presidente del Congreso).",
      "El Jefe de la Casa de Su Majestad el Rey.",
      "El Consejo de Estado en Pleno."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título II: De la Corona (Arts. 56 a 65)",
    referencia: "Constitución Española, Art. 64.1",
    consejoAcademia: "¡Cuidado con los refrendos del Art. 64 CE! Regla general: refrenda el Presidente del Gobierno o los Ministros. Excepción de examen: la propuesta/nombramiento del Presidente del Gobierno y la disolución de las Cámaras del art. 99 (si pasan 2 meses sin investidura) las refrenda el PRESIDENTE DEL CONGRESO. Y el art. 65.2 (nombramiento de miembros civiles y militares de Su Casa) lo hace el Rey LIBREMENTE.",
    justificacion: "El artículo 64.1 de la CE establece que los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes. La propuesta y el nombramiento del Presidente del Gobierno, y la disolución prevista en el artículo 99, serán refrendados por el Presidente del Congreso."
  },
  {
    id: "B1-053",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "Cortes Generales y Defensor del Pueblo (Título III CE)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al artículo 54 de la Constitución Española y su Ley Orgánica reguladora, el Defensor del Pueblo es el alto comisionado de las Cortes Generales designado por éstas para la defensa de los derechos comprendidos en:",
    opciones: [
      "Exclusivamente la Sección 1ª del Capítulo II del Título I.",
      "Todo el Título I de la Constitución, a cuyo efecto podrá supervisar la actividad de la Administración, dando cuenta a las Cortes Generales (mandato de 5 años).",
      "El Título Preliminar y el Título VIII de la Constitución (mandato de 4 años).",
      "Únicamente los derechos laborales de los funcionarios públicos."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Defensa Nacional y Cortes Generales) ➔ El Defensor del Pueblo (Art. 54 CE)",
    referencia: "Constitución Española, Art. 54 y LO 3/1981",
    consejoAcademia: "No confundas con el recurso de amparo: el Defensor del Pueblo defiende TODO el Título I de la CE, depende de las Cortes Generales y su mandato dura 5 AÑOS (igual que los vocales del Observatorio de la Vida Militar).",
    justificacion: "El artículo 54 de la CE dispone que una ley orgánica regulará la institución del Defensor del Pueblo, como alto comisionado de las Cortes Generales, designado por éstas para la defensa de los derechos comprendidos en el Título I, supervisando la actividad de la Administración."
  },
  {
    id: "B1-054",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Delegación de Competencias vs Avocación",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según los artículos 9 y 10 de la Ley 40/2015 (LRJSP), ¿qué diferencia existe entre la DELEGACIÓN DE COMPETENCIAS y la AVOCACIÓN, y qué recurso cabe contra el acuerdo de avocación?",
    opciones: [
      "Ambas suponen la cesión definitiva de la titularidad de la competencia y cabe recurso de alzada.",
      "En la delegación un órgano transfiere el ejercicio (no la titularidad) a otro órgano (incluso no jerárquicamente dependiente); en la avocación el órgano superior atrae para sí el conocimiento de un asunto; y contra el acuerdo de avocación NO cabe recurso alguno.",
      "La avocación la realiza el órgano inferior hacia el superior y cabe recurso de reposición.",
      "Se pueden delegar libremente la adopción de disposiciones de carácter general."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Régimen Jurídico del Sector Público Ley 40/2015) ➔ Competencia: Delegación, Avocación y Encomienda (Arts. 8-12)",
    referencia: "Ley 40/2015 (LRJSP), Arts. 9 y 10",
    consejoAcademia: "¡Doble trampa de examen en Ley 40/2015!: 1) Contra el acuerdo de AVOCACIÓN (Art. 10.2) NO CABE RECURSO (aunque podrá impugnarse en el que se interponga contra la resolución del procedimiento). 2)En la delegación de firma (Art. 12) NO es necesaria su publicación en el BOE, mientras que en la delegación de competencias (Art. 9.3) SÍ es obligatoria su publicación en el BOE.",
    justificacion: "El art. 9 de la Ley 40/2015 regula la delegación del ejercicio de competencias (debiendo publicarse en el BOE) y el art. 10 regula la avocación por los órganos superiores, estableciendo en el art. 10.2 que contra el acuerdo de avocación no cabrá recurso."
  },
  {
    id: "B1-016",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024 y RD 268/2025)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al Real Decreto 205/2024 de estructura orgánica básica del Ministerio de Defensa, ¿de qué órgano superior o directivo dependen la Intervención General de la Defensa (IGD) y la Asesoría Jurídica General de la Defensa?",
    opciones: [
      "De la Secretaría de Estado de Defensa (SEDEF).",
      "De la Subsecretaría de Defensa (SUBDEF), junto con la Secretaría General Técnica (SEGENTE), DIGENPER, DIGEREM y DIGESAN.",
      "De la Secretaría General de Política de Defensa (SEGENPOL).",
      "Del Estado Mayor de la Defensa (EMAD)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Estructura Orgánica Básica del MINISDEF RD 205/2024) ➔ La Subsecretaría de Defensa",
    referencia: "Real Decreto 205/2024, Art. 8",
    consejoAcademia: "Esquema infalible de los 3 grandes bloques del MINISDEF (RD 205/2024): 1) SEDEF = Recursos materiales, industria, infraestructura y CESTIC (DGAM, DIGEID, DIGENECO, DIGENIN, CESTIC). 2) SUBDEF = Personal, reclutamiento, enseñanza, sanidad, jurídico e intervención (SEGENTE, DIGENPER, DIGEREM, DIGESAN, Asesoría Jurídica General e Intervención General). 3) SEGENPOL = Política de defensa, diplomacia y cultura de defensa (DIGENPOL).",
    justificacion: "El artículo 8 del RD 205/2024 adscribe a la Subsecretaría de Defensa la Secretaría General Técnica, DIGENPER, DIGEREM, DIGESAN, la Asesoría Jurídica General de la Defensa y la Intervención General de la Defensa."
  },
  {
    id: "B1-017",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Organización Básica de las FAS (RD 521/2020 y Orden DEF/710/2020)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Orden DEF/710/2020 por la que se desarrolla la organización básica del Estado Mayor de la Defensa, ¿quién está al mando del EMACON, del MOPS y del CIFAS?",
    opciones: [
      "El JEMAD directamente sin mandos intermedios.",
      "El JEMACON (Jefe del Estado Mayor Conjunto), el CMOPS (Comandante del Mando de Operaciones) y el JECIFAS (Jefe del Centro de Inteligencia de las FAS), todos ellos Oficiales Generales dependientes del JEMAD.",
      "El Subsecretario de Defensa y el Secretario de Estado.",
      "El Jefe de Estado Mayor del Ejército de Tierra (JEME)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 5 y 6 (Organización Básica de las FAS RD 521/2020 y EMAD Orden DEF/710/2020)",
    referencia: "RD 521/2020 y Orden DEF/710/2020",
    consejoAcademia: "Quédate con las siglas de los Jefes en el EMAD: JEMAD (mando supremo operativo) ➔ JEMACON (EMACON), CMOPS (Mando de Operaciones), JEMCCE (Mando Conjunto del Ciberespacio), JECIFAS (Inteligencia) y DIGESEMAD (Ceseden).",
    justificacion: "Conforme al RD 521/2020 y la Orden DEF/710/2020, bajo el mando del JEMAD se articulan el EMACON (al mando del JEMACON), el MOPS (al mando del CMOPS), el MCCE (JEMCCE), el CIFAS (JECIFAS) y el CESEDEN."
  },
  {
    id: "B1-018",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Organización de la Armada (Instrucción 15/2021) y Ejército del Aire y del Espacio (Instrucción 6/2025)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "En la organización de la Fuerza de la Armada (Instrucción 15/2021) y del Ejército del Aire y del Espacio (Instrucción 6/2025), ¿cómo se denomina el mando principal de la Fuerza en la Armada (con sede en Rota) y qué novedad introduce el Ejército del Aire y del Espacio con el Mando del Espacio (MESPA)?",
    opciones: [
      "En la Armada es la FUTER en Sevilla y en el EA es el MACAN en Zaragoza.",
      "En la Armada el núcleo de la Fuerza es la FLOTA (al mando del ALFLOT, con Cuartel General en la Base Naval de Rota), que integra la Fuerza de Acción Marítima, Fuerza de Acción Naval y Fuerza de Infantería de Marina (COMGEIM); y en el Ejército del Aire y del Espacio la Fuerza incluye el MACOM, el MACAN y el Mando del Espacio (MESPA).",
      "En la Armada la Fuerza se llama Jefatura de Apoyo Logístico (JAL).",
      "El Ejército del Aire carece de mandos en las Islas Canarias."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización de la Armada Instrucción 15/2021 y Ejército del Aire y del Espacio Instrucción 6/2025)",
    referencia: "Instrucción 15/2021 (AJEMA) e Instrucción 6/2025 (JEMA)",
    consejoAcademia: "Aunque te presentes por el Ejército de Tierra, el Tema 6 incluye Armada y EA: En la ARMADA la Fuerza es la FLOTA (ALFLOT en Rota: Acción Naval + Acción Marítima en Cartagena + Infantería de Marina COMGEIM en San Fernando). En el EA la Fuerza son MACOM (Torrejón), MACAN (Las Palmas) y MESPA (Mando del Espacio).",
    justificacion: "En la Armada (Instrucción 15/2021), la Fuerza radica en la Flota (ALFLOT, Rota). En el Ejército del Aire y del Espacio (Instrucción 6/2025), la Fuerza se articula en el Mando Aéreo de Combate (MACOM), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MESPA)."
  },
  {
    id: "B2-017",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 de la Carrera Militar - Empleos y Categorías",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 21 de la Ley 39/2007 de la Carrera Militar, ¿cuáles son los empleos militares que integran la categoría de Tropa y Marinería y mediante qué sistema se asciende a Cabo y a Cabo Primero?",
    opciones: [
      "Soldado y Cabo; se asciende siempre por antigüedad pura.",
      "Soldado (o Marinero), Cabo, Cabo Primero y Cabo Mayor; a Cabo y Cabo Primero se asciende por concurso o concurso-oposición, y a Cabo Mayor por el sistema de elección.",
      "Soldado, Cabo y Sargento; se asciende por designación directa.",
      "Cabo, Cabo Primero, Cabo Mayor y Suboficial Mayor."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Régimen del Personal Militar Ley 39/2007) ➔ Categorías, empleos y sistemas de ascenso",
    referencia: "Ley 39/2007, Arts. 21 y 89",
    consejoAcademia: "Sistemas de ascenso en Tropa y Marinería (Art. 89 Ley 39/2007): A Cabo y Cabo 1º = Concurso o Concurso-Oposición. A Cabo Mayor = ELECCIÓN (previo curso de actualización).",
    justificacion: "El artículo 21 de la Ley 39/2007 enumera como empleos de la categoría de Tropa y Marinería: Soldado o Marinero, Cabo, Cabo Primero y Cabo Mayor. El artículo 89 establece que los ascensos a Cabo y Cabo Primero se producen por concurso o concurso-oposición, y a Cabo Mayor por elección."
  },
  {
    id: "B2-018",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas para las FAS (RD 96/2009) - Conducto Reglamentario y Saludo",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 28 y 52 de las Reales Ordenanzas para las FAS (RD 96/2009), ¿cuándo NO está obligado el militar a seguir el conducto reglamentario y qué representa el saludo militar?",
    opciones: [
      "Nunca; el conducto reglamentario no admite ninguna excepción en las Reales Ordenanzas.",
      "No estará obligado a seguir el conducto reglamentario cuando presente quejas o reclamaciones sobre asuntos relativos a su jefe inmediato o cuando interpusiere recurso; y el saludo militar (Art. 52) es muestra de respeto mutuo, disciplina y unión entre todos los miembros de las FAS.",
      "El saludo militar es únicamente una formalidad voluntaria fuera de formación.",
      "Se puede omitir el conducto reglamentario siempre que el militar tenga más de 10 años de servicio."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas para las FAS RD 96/2009) ➔ De la Disciplina (Arts. 28 y 52)",
    referencia: "Real Decreto 96/2009 (RROO), Arts. 28 y 52",
    consejoAcademia: "Dos artículos clásicos de las Reales Ordenanzas: Art. 28 (Conducto Reglamentario) y Art. 52 (El Saludo Militar = respeto mutuo, disciplina y unión entre todos los miembros de las FAS). Y recuerda también que en caso de acoso (UPA) tampoco se exige conducto reglamentario.",
    justificacion: "El Art. 28 de las RROO regula el conducto reglamentario y sus excepciones (quejas sobre su jefe inmediato o recursos), mientras que el Art. 52 define el saludo militar como expresión de respeto mutuo, disciplina y unión entre los miembros de las FAS."
  },
  {
    id: "B2-019",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011) - Neutralidad Política y Sindical",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme a los artículos 7 y 14 de la Ley Orgánica 9/2011 de derechos y deberes de los miembros de las FAS, en relación con los derechos de carácter político, sindical y de manifestación:",
    opciones: [
      "Los militares pueden afiliarse a sindicatos civiles siempre que no ejerzan el derecho de huelga.",
      "El militar está sujeto al deber de neutralidad política y sindical: NO puede afiliarse a partidos políticos ni sindicatos, NO puede ejercer el derecho de huelga, y podrá asistir a manifestaciones solo si NO viste el uniforme ni hace uso de su condición militar (salvo las organizadas por asociaciones profesionales en los términos de la ley).",
      "Los militares pueden hacer huelga en tiempo de paz con autorización del JEME.",
      "Los militares pueden asistir de uniforme a mítines políticos fuera de su horario laboral."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (Derechos y Deberes LO 9/2011) ➔ Neutralidad política y sindical (Arts. 7, 13 y 14)",
    referencia: "Ley Orgánica 9/2011, Arts. 7, 13 y 14",
    consejoAcademia: "En la LO 9/2011 quedan PROHIBIDOS para el militar en activo: 1) Afiliación a partidos políticos o sindicatos. 2) Derecho de huelga o acciones sustitutivas. 3) Petición colectiva. Lo que SÍ tienen es derecho de asociación profesional (inscritas en el RAPFAS).",
    justificacion: "Los artículos 7, 13 y 14 de la LO 9/2011 imponen la neutralidad política y sindical, prohíben la afiliación política/sindical, la huelga y la petición colectiva, y condicionan la asistencia a reuniones/manifestaciones a no vestir el uniforme ni invocar la condición militar."
  },
  {
    id: "B2-020",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014) - Recursos Disciplinarios",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DE PLAZOS EN RECURSOS! Según el artículo 68 de la Ley Orgánica 8/2014 de Régimen Disciplinario de las FAS, ¿cuál es el plazo para interponer un recurso de alzada o de reposición contra una sanción disciplinaria militar, y desde cuándo se computa?",
    opciones: [
      "1 mes contado desde el día siguiente al de la notificación, igual que en la Ley 39/2015.",
      "1 MES, que se contará desde el día SIGUIENTE al de la notificación de la resolución sancionadora; pero si la sanción es de arresto y se está cumpliendo, el plazo no finalizará hasta transcurridos 15 DÍAS desde la finalización del arresto.",
      "10 días hábiles desde la imposición verbal.",
      "2 meses improrrogables en todos los casos."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Recursos en materia disciplinaria (Art. 68)",
    referencia: "Ley Orgánica 8/2014, Art. 68.1",
    consejoAcademia: "¡Ojo a esta especialidad del Art. 68 LO 8/2014!: El plazo general del recurso disciplinario es de 1 MES (y el plazo para resolverlo es de 2 MESES según el Art. 70). Además, si el sancionado está cumpliendo arresto, el plazo para recurrir nunca termina antes de los 15 DÍAS siguientes a haber finalizado el arresto.",
    justificacion: "El art. 68.1 de la LO 8/2014 establece que el recurso podrá interponerse en el plazo de un mes desde el día siguiente a la notificación, añadiendo que cuando el sancionado se encuentre cumpliendo arresto, dicho plazo no finalizará hasta transcurridos quince días desde la finalización de su cumplimiento."
  },
  {
    id: "B2-021",
    temaCodigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley Orgánica 3/2007 de Igualdad - Conceptos de Acoso",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 7 de la Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres, ¿qué diferencia existe entre el 'acoso sexual' y el 'acoso por razón de sexo'?",
    opciones: [
      "Son exactamente el mismo concepto jurídico.",
      "El 'acoso sexual' es cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona; mientras que el 'acoso por razón de sexo' es cualquier comportamiento realizado en función del sexo de una persona con el mismo propósito o efecto intimidatorio, degradante u ofensivo.",
      "El acoso por razón de sexo solo puede producirse fuera del ámbito laboral.",
      "El acoso sexual exige siempre contacto físico."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 6 (Igualdad de trato y oportunidades LO 3/2007) ➔ Título I: Acoso sexual y acoso por razón de sexo (Art. 7)",
    referencia: "Ley Orgánica 3/2007, Art. 7.1 y 7.2",
    consejoAcademia: "Truco rápido para no fallar el Art. 7 LO 3/2007 en el examen: Si el enunciado dice 'de naturaleza sexual (verbal o físico)' = ACOSO SEXUAL (Art. 7.1). Si dice 'realizado en función del sexo de una persona' (ej. por embarazo o maternidad) = ACOSO POR RAZÓN DE SEXO (Art. 7.2). Ambos se consideran siempre discriminatorios.",
    justificacion: "El art. 7.1 de la LO 3/2007 define el acoso sexual como cualquier comportamiento, verbal o físico, de naturaleza sexual; y el art. 7.2 define el acoso por razón de sexo como cualquier comportamiento realizado en función del sexo de una persona."
  },
  {
    id: "B2-022",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Cómputo de Plazos y Notificaciones",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 30 y 43 de la Ley 39/2015 (LPACAP), cuando los plazos se señalen por días sin especificar, ¿cómo se entienden, y cuándo se entiende rechazada una notificación electrónica?",
    opciones: [
      "Se entienden naturales; y la notificación electrónica caduca a los 30 días.",
      "Siempre que por Ley o en el Derecho de la UE no se exprese otro cómputo, se entienden que son días HÁBILES (excluyéndose del cómputo los sábados, los domingos y los declarados festivos); y la notificación electrónica se entiende rechazada cuando hayan transcurridos 10 DÍAS NATURALES desde la puesta a disposición sin que se acceda a su contenido.",
      "Los sábados siguen siendo días hábiles en la Ley 39/2015.",
      "La notificación electrónica se entiende rechazada a los 10 días hábiles."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Procedimiento Administrativo Común Ley 39/2015) ➔ Términos, Plazos y Notificaciones (Arts. 30 y 43)",
    referencia: "Ley 39/2015 (LPACAP), Arts. 30.2 y 43.2",
    consejoAcademia: "¡Dos trampas letales de la Ley 39/2015!: 1) Desde 2015 los SÁBADOS son INHÁBILES en vía administrativa (Art. 30.2). 2) El rechazo de la notificación electrónica se produce a los 10 DÍAS NATURALES (¡ojo, naturales, no hábiles!) desde su puesta a disposición en la sede electrónica (Art. 43.2).",
    justificacion: "El art. 30.2 de la Ley 39/2015 establece que los plazos por días se entienden hábiles, excluyéndose sábados, domingos y festivos. El art. 43.2 dispone que la notificación por medios electrónicos se entenderá rechazada cuando hayan transcurrido diez días naturales desde la puesta a disposición sin que se acceda a su contenido."
  },
  {
    id: "B3-008",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 4 de la Ley 36/2015 y el Real Decreto 1150/2021 por el que se aprueba la Estrategia de Seguridad Nacional 2021, ¿con qué periodicidad se revisa la Estrategia de Seguridad Nacional y en cuántos ejes estratégicos se articula la ESN 2021?",
    opciones: [
      "Se revisa cada 10 años y tiene 2 ejes.",
      "Se revisará cada 5 AÑOS (o antes si lo aconsejan las circunstancias cambiantes del entorno estratégico), se aprueba mediante Real Decreto acordado en Consejo de Ministros a iniciativa del Presidente del Gobierno, y la ESN 2021 se estructura en 3 Ejes Estratégicos ('Proteger', 'Promover' y 'Participar') y 33 líneas de acción.",
      "Se revisa anualmente por las Cortes Generales.",
      "Se aprueba por Orden Ministerial del JEMAD cada 3 años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 y Estrategia de Seguridad Nacional ESN 2021)",
    referencia: "Ley 36/2015 (Art. 4) y Real Decreto 1150/2021 (ESN 2021)",
    consejoAcademia: "Recuerda las tres 'P' de los ejes de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021): 1) PROTEGER (España segura), 2) PROMOVER (España próspera), 3) PARTICIPAR (España abierta al mundo). Y recuerda que se revisa cada 5 AÑOS.",
    justificacion: "El art. 4 de la Ley 36/2015 dispone que la Estrategia de Seguridad Nacional se revisará cada cinco años o cuando lo aconsejen las circunstancias. La ESN 2021 (RD 1150/2021) se articula en una matriz de riesgos/amenazas y tres ejes estratégicos: Proteger, Promover y Participar."
  },
  {
    id: "B3-009",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 - Niveles de las Operaciones y Dominios",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según la Doctrina para el Empleo de las FAS (PDC-01), ¿cuáles son los niveles de conducción de las operaciones militares y cuáles son los 5 ámbitos o dominios de operación reconocidos en la doctrina conjunta actual?",
    opciones: [
      "Solo existen el nivel político y el táctico; y 3 dominios (Tierra, Mar y Aire).",
      "Los niveles de planeamiento y conducción militar son el ESTRATÉGICO, el OPERACIONAL y el TÁCTICO; y los 5 ámbitos o dominios de operación son: Terrestre, Marítimo, Aéreo, Espacial (Ultraterrestre) y Ciberespacial (actuando todos ellos sobre el entorno de la Información y el ámbito Cognitivo).",
      "Los niveles son Nacional, Autonómico y Municipal.",
      "El dominio Ciberespacial no forma parte de la acción conjunta."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 2 (Doctrina para la acción conjunta PDC-01) ➔ Niveles de las operaciones y Ámbitos de actuación",
    referencia: "Publicación Doctrinal Conjunta PDC-01 (A)",
    consejoAcademia: "En PDC-01: 3 Niveles = Estratégico (JEMAD), Operacional (CMOPS) y Táctico (Comandantes de Fuerza/Mandos Componentes). 5 Ámbitos/Dominios = Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial (+ Entorno de la Información y Cognitivo en Operaciones Multidominio).",
    justificacion: "La PDC-01 distingue los niveles estratégico, operacional y táctico en las operaciones militares, e identifica cinco ámbitos de operación (terrestre, marítimo, aéreo, espacial y ciberespacial) integrados en un enfoque multidominio."
  },
  {
    id: "B3-010",
    temaCodigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "ONU - Capítulos VI y VII de la Carta de San Francisco",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En la Carta de las Naciones Unidas (1945), ¿qué diferencia existe entre el Capítulo VI y el Capítulo VII en relación con el mantenimiento de la paz y la seguridad internacionales?",
    opciones: [
      "El Capítulo VI regula el uso de la fuerza armada y el Capítulo VII el presupuesto de la ONU.",
      "El Capítulo VI regula el 'Arreglo pacífico de controversias' (mediación, conciliación, arbitraje), mientras que el Capítulo VII regula la 'Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión' (incluyendo sanciones coercitivas y el uso de la fuerza militar autorizada por el Consejo de Seguridad).",
      "Ambos capítulos son competencia exclusiva de la Corte Internacional de Justicia.",
      "El Capítulo VII prohíbe al Consejo de Seguridad autorizar misiones militares."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 3 (Organización de las Naciones Unidas ONU) ➔ Capítulos VI y VII de la Carta",
    referencia: "Carta de las Naciones Unidas (1945), Capítulos VI y VII",
    consejoAcademia: "Diferencia clásica de examen en ONU: Capítulo VI = Arreglo PACÍFICO de controversias (misiones clásicas de mantenimiento de la paz / cascos azules tradicionales). Capítulo VII = Medidas COERCITIVAS y uso de la fuerza ante amenazas o quebrantamientos de la paz (imposición de la paz).",
    justificacion: "El Capítulo VI de la Carta de la ONU trata del arreglo pacífico de controversias (arts. 33-38), mientras que el Capítulo VII (arts. 39-51) faculta al Consejo de Seguridad para adoptar medidas coercitivas, incluido el uso de la fuerza armada, para restablecer la paz y la seguridad internacionales."
  },
  {
    id: "B3-011",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OTAN - Presencia militar aliada en España (Bétera, Torrejón y Rota)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¿Qué dos importantes organismos de la Estructura de Mandos y de Fuerzas de la OTAN tienen su sede permanente en territorio español (en Torrejón de Ardoz y en Bétera - Valencia)?",
    opciones: [
      "El SHAPE en Torrejón y el ACT en Valencia.",
      "El Centro de Operaciones Aéreas Combinadas del Sur de Europa (CAOC Torrejón) en Torrejón de Ardoz (Madrid), y el Cuartel General de Despliegue Rápido de la OTAN (HQ NRDC-ESP) en Bétera (Valencia).",
      "El Colegio de Defensa de la OTAN en Madrid y la Agencia NSPA en Sevilla.",
      "El Mando Marítimo Aliado (MARCOM) en Cartagena."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 4 (OTAN) ➔ Relación de España con la OTAN y Cuarteles Generales en España",
    referencia: "Estructura de Mandos y Fuerzas OTAN en España",
    consejoAcademia: "Dos sedes OTAN en España que siempre caen: 1) CAOC Torrejón (Centro de Operaciones Aéreas Combinadas, de la Estructura de Mandos OTAN, vigila el espacio aéreo del flanco sur europeo). 2) HQ NRDC-ESP en Bétera (Valencia, de la Estructura de Fuerzas OTAN, aportado sobre la base del CGTAD del ET).",
    justificacion: "España alberga en Torrejón de Ardoz el CAOC Torrejón (perteneciente a la Estructura de Mandos de la OTAN, subordinado al AIRCOM de Ramstein) y en Bétera (Valencia) el Cuartel General Terrestre de Alta Disponibilidad (HQ NRDC-ESP, perteneciente a la Estructura de Fuerzas de la OTAN)."
  },
  {
    id: "B3-012",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - Instituciones (Art. 13 TUE) y PESCO",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 13 del Tratado de la Unión Europea (TUE), ¿cuáles son las 7 Instituciones oficiales de la Unión Europea, y qué significan las siglas PESCO en el marco de la PCSD?",
    opciones: [
      "Son 5 instituciones incluyendo el Consejo de Europa; y PESCO es la policía de fronteras.",
      "Son 7: Parlamento Europeo, Consejo Europeo, Consejo (de la UE), Comisión Europea, Tribunal de Justicia de la UE, Banco Central Europeo y Tribunal de Cuentas; y PESCO es la Cooperación Estructurada Permanente en materia de seguridad y defensa.",
      "El Comité Económico y Social y el Comité de las Regiones son Instituciones del Art. 13 TUE.",
      "El Consejo de Europa (Estrasburgo, 46 países) es una Institución de la Unión Europea."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 6 (Unión Europea: Instituciones y PCSD) ➔ Art. 13 TUE y PESCO",
    referencia: "Tratado de la Unión Europea (TUE), Arts. 13 y 46",
    consejoAcademia: "¡El clásico 'Triángulo de las Bermudas' de la UE!: 1) CONSEJO EUROPEO = Jefes de Estado o de Gobierno (es una Institución de la UE). 2) CONSEJO DE LA UE = Ministros de los 27 Estados miembros (Institución de la UE). 3) CONSEJO DE EUROPA = Organización internacional AJENA a la UE (sede en Estrasburgo, Tribunal Europeo de Derechos Humanos).",
    justificacion: "El artículo 13 del TUE establece las 7 Instituciones de la Unión Europea (Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, TJUE, BCE y Tribunal de Cuentas). Por su parte, la PESCO (Permanent Structured Cooperation, art. 46 TUE) es la Cooperación Estructurada Permanente en defensa."
  },
  {
    id: "B3-013",
    temaCodigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "España en Misiones Internacionales - Autorización Parlamentaria (LO 5/2005)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 4.2 y 17 de la Ley Orgánica 5/2005 de la Defensa Nacional, para ordenar operaciones en el exterior que NO estén directamente relacionadas con la defensa de España o del interés nacional, ¿qué requisito debe cumplir el Gobierno?",
    opciones: [
      "Solicitar autorización previa al Senado por mayoría de dos tercios.",
      "Realizar una consulta previa y obtener la autorización del CONGRESO DE LOS DIPUTADOS (y en misiones que requieran una respuesta rápida, si por razones de máxima urgencia no fuera posible la consulta previa, el Gobierno someterá al Congreso lo antes posible la decisión para su ratificación).",
      "No necesita autorización de ninguna Cámara parlamentaria.",
      "Obtener el permiso previo del Tribunal Constitucional."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 7 (España y su participación en Misiones Internacionales) / Bloque 1 Tema 2 (LO 5/2005 Arts. 4.2 y 17)",
    referencia: "Ley Orgánica 5/2005 de la Defensa Nacional, Arts. 4.2 y 17",
    consejoAcademia: "Pregunta puente entre el Bloque 1 (Tema 2) y el Bloque 3 (Tema 7): ¿Quién autoriza las misiones de las FAS en el exterior? El CONGRESO DE LOS DIPUTADOS (¡nunca el Senado!), previa consulta del Gobierno. Y si hay máxima urgencia, el Gobierno decide y lo somete lo antes posible al Congreso para su ratificación.",
    justificacion: "Los artículos 4.2 y 17 de la LO 5/2005 establecen que para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno realizará una consulta previa y recabará la autorización del Congreso de los Diputados."
  },
  // =========================================================================
  // EXPANSIÓN V4 — LOTE 1: BLOQUE 1 ORGANIZACIÓN (B1-019 a B1-052)
  // =========================================================================
  {
    id: "B1-019",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Valores Superiores (Art. 1.1)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 1.1 de la Constitución Española, España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico:",
    opciones: [
      "La libertad, la justicia, la igualdad y la solidaridad territorial.",
      "La libertad, la justicia, la igualdad y el pluralismo político.",
      "La legalidad, la jerarquía normativa, la seguridad jurídica y la publicidad de las normas.",
      "La soberanía nacional, la unidad de la Nación y la monarquía parlamentaria."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título Preliminar (Art. 1.1)",
    referencia: "Constitución Española, Art. 1.1",
    consejoAcademia: "Truco mnemotécnico de academia 'LA Joven LI-IGUALA el PLURALISMO': Los 4 valores superiores del Art. 1.1 CE son Libertad, Justicia, Igualdad y Pluralismo político. ¡No los confundas con los principios del Art. 9.3 CE (legalidad, jerarquía normativa...) ni con el Art. 2 CE (unidad y solidaridad)!",
    justificacion: "El artículo 1.1 de la CE establece literalmente que España propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político."
  },
  {
    id: "B1-020",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Detención Preventiva y Habeas Corpus (Art. 17)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al artículo 17 de la Constitución Española, ¿cuál es el plazo máximo de duración de la detención preventiva y qué procedimiento produce la inmediata puesta a disposición judicial de toda persona detenida ilegalmente?",
    opciones: [
      "48 horas máximo; el procedimiento de recurso de amparo directo.",
      "El tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos y, en todo caso, en el plazo máximo de 72 HORAS el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial; regulándose por ley el procedimiento de 'habeas corpus'.",
      "72 horas mínimo en todos los casos; el procedimiento de extradición.",
      "24 horas para delitos leves y 5 días para delitos graves."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título I, Capítulo II, Sección 1ª (Art. 17)",
    referencia: "Constitución Española, Art. 17.2 y 17.4",
    consejoAcademia: "¡Cuidado con la trampa del Art. 17.2 CE!: No dura '72 horas fijas', sino 'el tiempo estrictamente necesario' con un MÁXIMO absoluto de 72 horas. Y el procedimiento contra detenciones ilegales es el Habeas Corpus (Art. 17.4, regulado por LO 6/1984).",
    justificacion: "El Art. 17.2 de la CE dispone que la detención preventiva no podrá durar más del tiempo estrictamente necesario y, en todo caso, en el plazo máximo de 72 horas el detenido deberá ser puesto en libertad o a disposición judicial. El Art. 17.4 regula el Habeas Corpus."
  },
  {
    id: "B1-021",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Suspensión de Derechos (Art. 55.1)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DE EXAMEN! Según el artículo 55.1 de la Constitución Española, ¿qué apartado del artículo 17 (derecho a la libertad y seguridad) NO puede suspenderse cuando se declara el estado de EXCEPCIÓN, pero SÍ puede suspenderse cuando se declara el estado de SITIO?",
    opciones: [
      "El plazo máximo de 72 horas de detención (Art. 17.2).",
      "El artículo 17.3 (derecho del detenido a ser informado de sus derechos y de las razones de su detención, a no declarar y a la asistencia de abogado), que SOLO puede suspenderse en el estado de SITIO y nunca en el de excepción ni en el de alarma.",
      "El procedimiento de Habeas Corpus (Art. 17.4).",
      "En el estado de alarma se suspenden todos los apartados del artículo 17."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título I, Capítulo V: De la suspensión de los derechos y libertades (Art. 55.1)",
    referencia: "Constitución Española, Art. 55.1",
    consejoAcademia: "Esta es la pregunta estrella de nivel pro sobre la Constitución: 1) En Estado de ALARMA NO se suspende ningún derecho (solo se limitan). 2) En EXCEPCIÓN y SITIO se pueden suspender los derechos del Art. 55.1, EXCEPTO el Art. 17.3 (información de derechos, no declarar y abogado al detenido), que SOLO se puede suspender en Estado de SITIO.",
    justificacion: "El artículo 55.1 de la CE exceptúa expresamente el apartado 3 del artículo 17 para el supuesto de declaración de estado de excepción, permitiendo su suspensión únicamente cuando se acuerde la declaración del estado de sitio."
  },
  {
    id: "B1-022",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Sucesión, Regencia y Tutela del Rey (Arts. 57-60)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al artículo 60 de la Constitución Española, ¿pueden acumularse los cargos de Regente y de Tutor del Rey menor de edad en una misma persona?",
    opciones: [
      "Sí, siempre que lo autorice el Presidente del Gobierno.",
      "No pueden acumularse, SINO en el padre, madre o ascendientes directos del Rey.",
      "Sí, pueden acumularse en cualquier miembro de las Cortes Generales.",
      "Nunca pueden acumularse bajo ningún concepto, ni siquiera en los padres del Rey."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título II: De la Corona (Art. 60.2)",
    referencia: "Constitución Española, Art. 60.2",
    consejoAcademia: "Regla de oro del Título II (La Corona): Regencia y Tutela del Rey menor son incompatibles, EXCEPTO en el padre, la madre o ascendientes directos del Rey (Art. 60.2). Además, para ser Regente basta ser español y mayor de edad (Art. 59.4), y si no hay nadie a quien corresponda la Regencia, la nombran las Cortes Generales componiéndose de 1, 3 o 5 personas (Art. 59.3).",
    justificacion: "El artículo 60.2 de la CE dispone que el ejercicio de la tutela es también incompatible con el de todo cargo o representación política, y que no podrán acumularse los cargos de Regente y de Tutor sino en el padre, madre o ascendientes directos del Rey."
  },
  {
    id: "B1-023",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Moción de Censura vs Cuestión de Confianza (Arts. 112-113)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 112 y 113 de la Constitución Española, ¿qué diferencia de firmantes y mayorías exige la Cuestión de Confianza frente a la Moción de Censura en el Congreso de los Diputados?",
    opciones: [
      "Ambas requieren mayoría absoluta y ser propuestas por 50 diputados.",
      "La Cuestión de Confianza la plantea el Presidente del Gobierno (previa deliberación del Consejo de Ministros) y se otorga por MAYORÍA SIMPLE; mientras que la Moción de Censura debe ser propuesta al menos por la DÉCIMA PARTE de los Diputados (con candidato alternativo), no puede votarse hasta que transcurran 5 DÍAS desde su presentación y exige MAYORÍA ABSOLUTA.",
      "La Moción de Censura se vota en el Senado por mayoría de 3/5.",
      "La Cuestión de Confianza requiere mayoría absoluta y la Moción de Censura mayoría simple."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título V: Relaciones entre el Gobierno y las Cortes Generales (Arts. 112 y 113)",
    referencia: "Constitución Española, Arts. 112 y 113",
    consejoAcademia: "Diferencia letal de examen: Cuestión de Confianza (Art. 112) = MAYORÍA SIMPLE. Moción de Censura (Art. 113) = propuesta por 1/10 de los Diputados + candidato alternativo + enfriamiento de 5 días (2 primeros días para mociones alternativas) + MAYORÍA ABSOLUTA.",
    justificacion: "Conforme al art. 112 CE, la confianza se entenderá otorgada cuando vote a favor la mayoría simple de los Diputados. Según el art. 113 CE, la moción de censura exige al menos la décima parte de los Diputados, candidato a la Presidencia, 5 días de plazo antes de su votación y mayoría absoluta del Congreso."
  },
  {
    id: "B1-024",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Reforma Constitucional (Arts. 167 y 168)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según el artículo 168 de la Constitución Española (procedimiento agravado de reforma constitucional), ¿qué partes de la Constitución exigen la aprobación por mayoría de DOS TERCIOS de cada Cámara y la disolución inmediata de las Cortes?",
    opciones: [
      "Cualquier reforma de cualquier artículo de la Constitución.",
      "La revisión total de la Constitución o una parcial que afecte al Título Preliminar, al Capítulo Segundo, Sección Primera del Título I (Arts. 15 a 29), o al Título II (De la Corona).",
      "El Título VIII (Organización Territorial del Estado) y el Título IX (Tribunal Constitucional).",
      "El artículo 14 y el Capítulo Tercero del Título I."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título X: De la reforma constitucional (Arts. 166 a 169)",
    referencia: "Constitución Española, Art. 168.1",
    consejoAcademia: "Fórmula exacta del procedimiento agravado (Art. 168 CE — mayoría de 2/3 + disolución Cortes + referéndum obligatorio): 1) Revisión TOTAL, 2) Título Preliminar (Arts. 1-9), 3) Sección 1ª del Cap. II del Título I (Arts. 15-29 — ¡ojo, el Art. 14 NO entra aquí!), y 4) Título II (La Corona, Arts. 56-65). El resto va por el Art. 167 (mayoría de 3/5).",
    justificacion: "El artículo 168.1 de la CE exige el procedimiento agravado (dos tercios de cada Cámara, disolución de las Cortes y referéndum ratificatorio) cuando se propusiere la revisión total de la Constitución o una parcial que afecte al Título Preliminar, al Capítulo II, Sección 1ª del Título I, o al Título II."
  },
  {
    id: "B1-025",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "LO 5/2005 de la Defensa Nacional - Consejo de Defensa Nacional (Arts. 7 y 8)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al artículo 8 de la Ley Orgánica 5/2005 de la Defensa Nacional, ¿qué es el Consejo de Defensa Nacional, en qué dos modalidades puede funcionar y quién actúa como Secretario?",
    opciones: [
      "Es un órgano judicial militar que funciona en Sala de Justicia y Sala de Gobierno.",
      "Es el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa; puede funcionar en Pleno o como Consejo Ejecutivo; y cuenta con una Comisión Interministerial de Defensa (CID) adscrita al Ministerio de Defensa.",
      "Es una comisión parlamentaria del Senado presidida por el JEMAD.",
      "Sustituye al Consejo de Ministros en tiempo de paz."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Ley Orgánica 5/2005 de la Defensa Nacional) ➔ El Consejo de Defensa Nacional (Art. 8)",
    referencia: "Ley Orgánica 5/2005, Art. 8",
    consejoAcademia: "Recuerda las 3 palabras del Consejo de Defensa Nacional (Art. 8 LO 5/2005): órgano colegiado, COORDINADOR, ASESOR y CONSULTIVO del Presidente del Gobierno en materia de defensa. Funciona en Pleno o como Consejo Ejecutivo, y su órgano de trabajo permanente es la Comisión Interministerial de Defensa (CID), cuyo Secretario es el SEGENPOL.",
    justificacion: "El artículo 8 de la LO 5/2005 define al Consejo de Defensa Nacional como el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa, pudiendo funcionar en Pleno o como Consejo Ejecutivo, asistido por la Comisión Interministerial de Defensa."
  },
  {
    id: "B1-026",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "LO 5/2005 de la Defensa Nacional - Reglas de Enfrentamiento y Doctrina (Art. 12)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 12.3 de la Ley Orgánica 5/2005 de la Defensa Nacional, ¿a qué autoridad corresponde elaborar y definir la estrategia militar, aprobar la doctrina militar conjuntamente y proponer al Ministro de Defensa las Reglas de Enfrentamiento (ROE) de las operaciones?",
    opciones: [
      "Al Jefe de Estado Mayor del Ejército de Tierra (JEME).",
      "Al Jefe de Estado Mayor de la Defensa (JEMAD).",
      "Al Subsecretario de Defensa (SUBDEF).",
      "Al Secretario de Estado de Defensa (SEDEF)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Ley Orgánica 5/2005 de la Defensa Nacional) ➔ El JEMAD y el EMAD (Art. 12)",
    referencia: "Ley Orgánica 5/2005, Art. 12.3",
    consejoAcademia: "En la LO 5/2005: el JEMAD ejerce el mando de la estructura operativa de las FAS y conduce estratégicamente las operaciones bajo la dependencia del Ministro de Defensa.",
    justificacion: "El artículo 12.3 de la LO 5/2005 atribuye al Jefe de Estado Mayor de la Defensa (JEMAD), entre otras funciones, elaborar y definir la estrategia militar y dirigir la conducción estratégica de las operaciones militares."
  },
  {
    id: "B1-027",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "Cortes Generales - Composición de Congreso y Senado (Arts. 68 y 69 CE)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¡TRAMPA CLÁSICA DEL TÍTULO III CE! Según el artículo 68.1 de la Constitución Española, el Congreso se compone de un mínimo y un máximo de Diputados; y según la LOREG, ¿cuántos tiene actualmente? ¿Y cuántos Senadores eligen Ceuta y Melilla según el Art. 69.4 CE?",
    opciones: [
      "La CE dice exactamente 350 Diputados; Ceuta y Melilla eligen 1 Senador cada una.",
      "La CE fija un mínimo de 300 y un máximo de 400 Diputados (siendo 350 según la LOREG); Ceuta y Melilla eligen 1 Diputado cada una y 2 SENADORES cada una.",
      "La CE fija entre 250 y 350 Diputados; Ceuta y Melilla eligen 4 Senadores cada una.",
      "El Congreso tiene 265 miembros y el Senado 400."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Defensa Nacional y Las Cortes Generales) ➔ El Congreso y el Senado (Arts. 68 y 69 CE)",
    referencia: "Constitución Española, Arts. 68 y 69",
    consejoAcademia: "¡Ojo a cómo redactan el enunciado!: Si preguntan 'según la Constitución (Art. 68.1)', el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados. Y en Ceuta y Melilla: eligen 1 DIPUTADO cada una (Art. 68.2), pero 2 SENADORES cada una (Art. 69.4). En las provincias peninsulares son 4 Senadores por provincia, 3 en las islas mayores (Gran Canaria, Mallorca y Tenerife) y 1 en las islas menores.",
    justificacion: "El art. 68.1 CE dispone que el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados; el art. 68.2 asigna 1 Diputado a Ceuta y 1 a Melilla; y el art. 69.4 dispone que las poblaciones de Ceuta y Melilla elegirán cada una de ellas dos Senadores."
  },
  {
    id: "B1-028",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "Cortes Generales - Periodos de Sesiones y Diputación Permanente (Arts. 73 y 78 CE)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 73 y 78 de la Constitución Española, ¿cuáles son los dos periodos ordinarios de sesiones de las Cámaras y cuántos miembros componen como mínimo la Diputación Permanente de cada Cámara?",
    opciones: [
      "De enero a junio y de julio a diciembre; mínimo de 50 miembros.",
      "El primero de septiembre a diciembre, y el segundo de febrero a junio (meses inhábiles ordinarios: enero, julio y agosto); y en cada Cámara habrá una Diputación Permanente compuesta por un mínimo de 21 MIEMBROS, que representarán a los grupos parlamentarios en proporción a su importancia numérica.",
      "De octubre a mayo en un único periodo; mínimo de 15 miembros.",
      "Solo el Congreso tiene Diputación Permanente, compuesta por 35 miembros."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Las Cortes Generales) ➔ Funcionamiento y Diputación Permanente (Arts. 73 y 78 CE)",
    referencia: "Constitución Española, Arts. 73.1 y 78.1",
    consejoAcademia: "Dos datos fijos de examen: 1) Periodos ordinarios de sesiones (Art. 73.1) = 1º de septiembre a diciembre; 2º de febrero a junio (enero, julio y agosto no son ordinarios). 2) Diputación Permanente (Art. 78.1) = en CADA Cámara (Congreso y Senado), presidida por el Presidente de la respectiva Cámara y con un mínimo de 21 MIEMBROS.",
    justificacion: "El artículo 73.1 de la CE fija los periodos ordinarios de sesiones de septiembre a diciembre y de febrero a junio. El artículo 78.1 establece que en cada Cámara habrá una Diputación Permanente compuesta por un mínimo de 21 miembros."
  },
  {
    id: "B1-029",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Órganos Superiores vs Directivos de la AGE (Art. 55)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 55 de la Ley 40/2015 de Régimen Jurídico del Sector Público (LRJSP), en la organización central de la Administración General del Estado, ¿cuáles son los únicos ÓRGANOS SUPERIORES y qué rango tienen los Delegados del Gobierno en las Comunidades Autónomas?",
    opciones: [
      "Son órganos superiores los Ministros, Subsecretarios y Directores Generales.",
      "Son ÓRGANOS SUPERIORES únicamente los Ministros y los Secretarios de Estado; y los Delegados del Gobierno en las Comunidades Autónomas son órganos directivos con rango de SUBSECRETARIO (mientras que los Subdelegados del Gobierno tienen nivel de Subdirector General).",
      "Los Secretarios Generales Técnicos son órganos superiores con rango de Secretario de Estado.",
      "Los Subsecretarios son órganos superiores y los Secretarios Generales tienen rango de Ministro."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Ley 40/2015 LRJSP) ➔ Organización Central y Territorial de la AGE (Art. 55)",
    referencia: "Ley 40/2015 (LRJSP), Art. 55",
    consejoAcademia: "¡Tabla sagrada de rangos en la Ley 40/2015 (Art. 55)!: 1) Órganos SUPERIORES = SOLO Ministros y Secretarios de Estado. 2) Órganos DIRECTIVOS = Subsecretarios y Secretarios Generales (ambos con rango de Subsecretario); Secretarios Generales Técnicos y Directores Generales (ambos con rango de Director General); y Subdirectores Generales. 3) En la AGE periférica: Delegado del Gobierno = rango de Subsecretario; Subdelegado del Gobierno = nivel de Subdirector General.",
    justificacion: "El artículo 55 de la Ley 40/2015 establece que en la organización central son órganos superiores los Ministros y los Secretarios de Estado, y órganos directivos los Subsecretarios, Secretarios Generales, Secretarios Generales Técnicos, Directores Generales y Subdirectores Generales. En la organización territorial, los Delegados del Gobierno tienen rango de Subsecretario."
  },
  {
    id: "B1-030",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Abstención y Recusación (Arts. 23 y 24)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 23 y 24 de la Ley 40/2015 (LRJSP), ¿hasta qué grado de parentesco alcanza el motivo de abstención y recusación de autoridades y personal al servicio de las Administraciones, y qué efecto tiene la no abstención sobre la validez del acto?",
    opciones: [
      "Hasta el segundo grado en ambos casos, e invalida siempre el acto dictado.",
      "Tener parentesco de consanguinidad dentro del CUARTO GRADO o de afinidad dentro del SEGUNDO GRADO con cualquiera de los interesados (y hasta el segundo grado en ambos casos con los administradores de entidades o asesores/representantes); y la actuación de autoridades en las que concurran motivos de abstención NO implicará, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido.",
      "Hasta el sexto grado de consanguinidad y cuarto de afinidad.",
      "Contra la resolución que decide sobre la recusación cabe recurso de alzada inmediato."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Ley 40/2015 LRJSP) ➔ Abstención y Recusación (Arts. 23 y 24)",
    referencia: "Ley 40/2015 (LRJSP), Arts. 23.2.b, 23.4 y 24.5",
    consejoAcademia: "Memoriza la regla '4-2 con interesados / 2-2 con asesores': Con los interesados = 4º grado consanguinidad y 2º afinidad. Con asesores/representantes = 2º grado consanguinidad y 2º afinidad. Además: la no abstención NO implica necesariamente la invalidez del acto (Art. 23.4), y contra la resolución de recusación NO cabe recurso (Art. 24.5).",
    justificacion: "El art. 23.2.b de la Ley 40/2015 fija como causa de abstención el parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo con los interesados. El art. 23.4 dispone que la no abstención no implicará necesariamente la invalidez de los actos, pero dará lugar a la responsabilidad que proceda."
  },
  {
    id: "B1-031",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Órganos Colegiados (Arts. 15 a 19)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 19 de la Ley 40/2015 (LRJSP), respecto a los órganos colegiados de la Administración General del Estado, ¿con qué antelación mínima deben recibir los miembros la convocatoria de las sesiones y quién puede tener voz pero NO voto si no es miembro del órgano?",
    opciones: [
      "Con 15 días de antelación; el Presidente tiene voz pero no voto.",
      "Con una antelación mínima de DOS DÍAS (48 horas), salvo las excepciones previstas; y el Secretario del órgano colegiado, cuando NO sea miembro del mismo (por ser un funcionario al servicio de la Administración), asistirá a las reuniones con voz pero SIN voto.",
      "Con 24 horas de antelación; todos los asistentes tienen siempre voto de calidad.",
      "Con 10 días hábiles; los vocales no pueden formular votos particulares."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Ley 40/2015 LRJSP) ➔ Funcionamiento de los Órganos Colegiados (Art. 19)",
    referencia: "Ley 40/2015 (LRJSP), Art. 19.3 y 19.4",
    consejoAcademia: "Tres datos estrella de Órganos Colegiados (Art. 19 Ley 40/2015): 1) Convocatoria mínima = 2 DÍAS (48 horas). 2) Votos particulares = se formulan por escrito en el plazo de 2 DÍAS (48 horas). 3) El Secretario tiene VOZ y VOTO si es miembro del órgano, pero solo VOZ (sin voto) si es un funcionario no miembro.",
    justificacion: "El artículo 19 de la Ley 40/2015 establece que los miembros del órgano colegiado deberán recibir la convocatoria con una antelación mínima de dos días, y que la designación del Secretario podrá recaer en un miembro del propio órgano o en una persona al servicio de la Administración correspondiente (en cuyo caso tendrá voz pero no voto)."
  },
  {
    id: "B1-032",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Principios de la Potestad Sancionadora (Arts. 25 a 31)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 30 de la Ley 40/2015 (LRJSP), si las leyes que establezcan las infracciones y sanciones administrativas NO fijan plazos específicos de prescripción, ¿en qué plazos prescribirán las infracciones y las sanciones administrativas con carácter supletorio general?",
    opciones: [
      "En 2 meses, 1 año y 2 años igual que en el Régimen Disciplinario Militar.",
      "Las INFRACCIONES prescribirán a los 3 años (muy graves), 2 años (graves) y 6 meses (leves); mientras que las SANCIONES prescribirán a los 3 años (muy graves), 2 años (graves) y 1 año (leves).",
      "Todas prescriben a los 5 años.",
      "Las infracciones nunca prescriben en vía administrativa."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Ley 40/2015 LRJSP) ➔ Principios de la potestad sancionadora: Prescripción (Art. 30)",
    referencia: "Ley 40/2015 (LRJSP), Art. 30.1",
    consejoAcademia: "¡ATENCIÓN AL CRUCE MORTAL DE LEYES!: No confundas la prescripción de la LO 8/2014 (Régimen Disciplinario Militar: Faltas 2m / 1a / 2a y Sanciones 3m / 1a / 2a) con la prescripción general administrativa del Art. 30 de la Ley 40/2015 (Infracciones: 6 meses leves / 2 años graves / 3 años muy graves; Sanciones: 1 año leves / 2 años graves / 3 años muy graves). ¡Fíjate siempre en qué ley menciona el enunciado!",
    justificacion: "El artículo 30.1 de la Ley 40/2015 dispone que si las leyes no fijan plazos de prescripción, las infracciones muy graves prescribirán a los tres años, las graves a los dos años y las leves a los seis meses; las sanciones impuestas por faltas muy graves prescribirán a los tres años, las graves a los dos años y las leves al año."
  },
  {
    id: "B1-033",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024) - Gabinete y Órganos dependientes del Ministro",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al Real Decreto 205/2024 (modificado por RD 268/2025), ¿qué rango tiene la Dirección del Gabinete de la persona titular del Ministerio de Defensa y qué nivel tiene el Gabinete Técnico?",
    opciones: [
      "Ambos tienen rango de Secretaría de Estado.",
      "El Gabinete de la persona titular del Departamento tiene nivel orgánico de DIRECCIÓN GENERAL, y la persona titular del Gabinete Técnico es un Oficial General con nivel orgánico de SUBDIRECCIÓN GENERAL.",
      "El Gabinete Técnico tiene rango de Subsecretaría.",
      "El Ministerio de Defensa no dispone de Gabinete Técnico militar."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Estructura Orgánica Básica del MINISDEF RD 205/2024) ➔ Órganos de asistencia directa al Ministro",
    referencia: "Real Decreto 205/2024, Art. 1",
    consejoAcademia: "En el despacho del Ministro de Defensa (RD 205/2024) hay dos gabinetes: 1) El Gabinete político (rango de Dirección General) y 2) El Gabinete Técnico militar (dirigido por un Oficial General con nivel de Subdirección General).",
    justificacion: "El artículo 1 del RD 205/2024 establece que como órganos de apoyo y asistencia inmediata a la persona titular del Ministerio de Defensa existen un Gabinete (con nivel orgánico de Dirección General) y un Gabinete Técnico (cuyo Director será un Oficial General, con nivel orgánico de Subdirección General)."
  },
  {
    id: "B1-034",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024) - CNI y Guardia Civil",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 1 del Real Decreto 205/2024, ¿de quién depende orgánicamente el Centro Nacional de Inteligencia (CNI) y qué rango tiene su persona titular (Secretario de Estado Director del CNI)?",
    opciones: [
      "Depende del Ministerio del Interior con rango de Director General.",
      "Está adscrito orgánicamente al Ministerio de Defensa, dependiendo directamente de su persona titular, y su Director tiene rango de SECRETARIO DE ESTADO.",
      "Depende del JEMAD e integra el CIFAS.",
      "Depende de la Subsecretaría de Defensa con nivel de Subdirección General."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Estructura Orgánica Básica del MINISDEF RD 205/2024) ➔ Adscripción del CNI",
    referencia: "Real Decreto 205/2024, Art. 1.7 y Ley 11/2002",
    consejoAcademia: "No confundas CIFAS con CNI: El CIFAS (Centro de Inteligencia de las FAS) está dentro del EMAD bajo el mando del JEMAD. En cambio, el CNI (Centro Nacional de Inteligencia) está adscrito al Ministerio de Defensa y su Director tiene rango de SECRETARIO DE ESTADO.",
    justificacion: "El RD 205/2024 recoge que el Centro Nacional de Inteligencia (CNI), regulado por la Ley 11/2002, está adscrito al Ministerio de Defensa a través de la persona titular del Departamento, teniendo su Director rango de Secretario de Estado."
  },
  {
    id: "B1-035",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024) - CESTIC y transformación digital",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al artículo 7 del Real Decreto 205/2024, ¿qué órgano directivo del Ministerio de Defensa es el responsable de las tecnologías de la información, comunicaciones, transformación digital y seguridad de la información, y de qué autoridad depende?",
    opciones: [
      "El MCCE, dependiente de la Subsecretaría de Defensa.",
      "El Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC), con rango de Dirección General, dependiente de la Secretaría de Estado de Defensa (SEDEF).",
      "El INTA, dependiente de la SEGENPOL.",
      "La DIGEREM, dependiente del EMAD."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Estructura Orgánica Básica del MINISDEF RD 205/2024) ➔ Secretaría de Estado de Defensa (CESTIC)",
    referencia: "Real Decreto 205/2024, Art. 7",
    consejoAcademia: "No confundas CESTIC con MCCE: El CESTIC (rango de Dirección General, depende de la SEDEF) lleva las redes, telecomunicaciones, transformación digital y la Infraestructura Integral de Información para la Defensa (I3D). El MCCE (Mando Conjunto del Ciberespacio, depende del JEMAD en el EMAD) lleva las operaciones militares en el dominio ciberespacial.",
    justificacion: "El artículo 7 del RD 205/2024 establece que el Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC), con nivel orgánico de Dirección General, depende de la Secretaría de Estado de Defensa (SEDEF)."
  },
  {
    id: "B1-036",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024) - Organismos Autónomos (INTA, ISFAS, INVIED)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En la estructura del Ministerio de Defensa (RD 205/2024), ¿a qué órganos están adscritos respectivamente el Instituto Nacional de Técnica Aeroespacial 'Esteban Terradas' (INTA), el ISFAS y el INVIED O.A.?",
    opciones: [
      "Los tres están adscritos al Estado Mayor de la Defensa.",
      "El INTA está adscrito a la Secretaría de Estado de Defensa (SEDEF); mientras que el ISFAS (Instituto Social de las FAS) y el INVIED O.A. (Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa) están adscritos a la Subsecretaría de Defensa (SUBDEF).",
      "El INTA depende de la SUBDEF y el ISFAS de la SEGENPOL.",
      "El INVIED depende del Ministerio de Vivienda."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Estructura Orgánica Básica del MINISDEF RD 205/2024) ➔ Organismos Autónomos adscritos",
    referencia: "Real Decreto 205/2024, Arts. 2.5 y 8.7",
    consejoAcademia: "Truco para los Organismos Autónomos del MINISDEF: Tecnología aeroespacial (INTA) ➔ va con material/industria en la SEDEF (rango de Dirección General). Prestaciones sociales y vivienda del personal (ISFAS e INVIED) ➔ van con personal en la SUBDEF.",
    justificacion: "Según el RD 205/2024, el organismo autónomo INTA está adscrito a la Secretaría de Estado de Defensa (art. 2.5), mientras que el ISFAS y el INVIED O.A. están adscritos a la Subsecretaría de Defensa (art. 8.7)."
  },
  {
    id: "B1-037",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "RD 521/2020 Organización Básica de las FAS - Capacidades y Fuerza Conjunta",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el Real Decreto 521/2020 por el que se establece la organización básica de las Fuerzas Armadas, ¿quién efectúa la transferencia de autoridad (TOA) de las fuerzas de los Ejércitos de la estructura orgánica a la estructura operativa, y bajo el mando operacional de quién quedan?",
    opciones: [
      "La efectúa el Subsecretario de Defensa y pasan a mando de la Guardia Civil.",
      "Los Jefes de Estado Mayor del ET, de la Armada y del EA proporcionan las fuerzas que son transferidas a la estructura operativa bajo el mando del JEMAD, siendo el Comandante del Mando de Operaciones (CMOPS) quien ejerce el mando operacional de las organizaciones operativas permanentes o eventuales.",
      "Las fuerzas nunca cambian de dependencia y siguen siempre bajo mando operativo del JEME en misiones exteriores.",
      "La transferencia de autoridad la realiza el Congreso de los Diputados en cada relevo."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 5 (Organización Básica de las FAS RD 521/2020) ➔ Estructura Orgánica y Operativa",
    referencia: "Real Decreto 521/2020, Arts. 5 a 11",
    consejoAcademia: "Recuerda la regla del RD 521/2020: Los JEM (JEME, AJEMA, JEMA) GENERAN y PREPARAN la Fuerza (Estructura Orgánica). Luego transfieren esas unidades (Transferencia de Autoridad - TOA) a la Estructura Operativa (JEMAD / CMOPS) para su EMPLEO en misiones.",
    justificacion: "El RD 521/2020 establece que los Ejércitos tienen como cometido principal la preparación de la Fuerza (estructura orgánica) para su transferencia a la estructura operativa, bajo el mando del JEMAD y la conducción operacional del CMOPS."
  },
  {
    id: "B1-038",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "RD 521/2020 Organización Básica de las FAS - Sanidad Operativa y Ciberdefensa",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al Real Decreto 521/2020 y la Orden DEF/710/2020, ¿dentro de qué órgano del Estado Mayor de la Defensa se encuadra la Jefatura Conjunta de Sanidad Operativa (JECOSAN)?",
    opciones: [
      "Dentro del CESEDEN.",
      "En el Estado Mayor Conjunto de la Defensa (EMACON) / Cuartel General del EMAD, apoyando al planeamiento y conducción de la sanidad en operaciones.",
      "En el Mando de Adiestramiento y Doctrina (MADOC) de Granada.",
      "En el Instituto Social de las Fuerzas Armadas (ISFAS)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 5 y 6 (RD 521/2020 y Orden DEF/710/2020 EMAD)",
    referencia: "Orden DEF/710/2020, Organización Básica del EMAD",
    consejoAcademia: "Ojo: La Inspección General de Sanidad de la Defensa (IGESAN) está en la SUBDEF (Órgano Central), mientras que la sanidad puramente OPERATIVA en operaciones conjuntas se coordina en el ámbito del EMAD.",
    justificacion: "La Orden DEF/710/2020 desarrolla la organización del EMAD integrando la sanidad operativa en el ámbito del planeamiento y conducción estratégica/operacional del EMAD."
  },
  {
    id: "B1-039",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Instrucción 14/2021 ET - El Cuartel General del Ejército de Tierra (CGET)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Instrucción 14/2021 por la que se desarrolla la organización del Ejército de Tierra, ¿qué órganos integran el Cuartel General del Ejército de Tierra (CGET) y cómo se articula el Estado Mayor del Ejército (EME)?",
    opciones: [
      "El CGET lo integran FUTER, MAPER y MALE.",
      "El CGET (Madrid) está integrado por el Estado Mayor del Ejército (EME), el Gabinete del JEME, la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), el Instituto de Historia y Cultura Militar (IHCM), la Asesoría Jurídica y la Intervención Delegada; articulándose el EME en Jefatura, Secretaría General y 3 Divisiones (Planes, Operaciones y Logística).",
      "El EME se articula en 10 Brigadas de combate.",
      "El IHCM y la JCISAT pertenecen a la Fuerza Terrestre de Sevilla."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del Ejército de Tierra Instrucción 14/2021) ➔ El Cuartel General (CGET)",
    referencia: "Instrucción 14/2021 del JEME, Apartado Cuarto (CGET)",
    consejoAcademia: "¡Pregunta muy frecuente de organización ET!: Dentro del CGET (Madrid) están el EME (que tiene 3 Divisiones: Planes - DIVPLA, Operaciones - DIVOPE y Logística - DIVLOG), el Gabinete del JEME, la JCISAT y el IHCM (Historia y Cultura Militar). ¡No metas a JCISAT ni a IHCM en el Apoyo a la Fuerza, están en el CGET!",
    justificacion: "Conforme a la Instrucción 14/2021 del JEME, el Cuartel General del Ejército de Tierra encuadra el EME (Jefatura, Secretaría General y las Divisiones de Planes, Operaciones y Logística), el Gabinete del JEME, la JCISAT, el IHCM, la Asesoría Jurídica y la Intervención Delegada Central."
  },
  {
    id: "B1-040",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Instrucción 14/2021 ET - La Fuerza Terrestre (FUTER): Divisiones y MAM",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a la Instrucción 14/2021 del JEME, ¿qué unidades encuadra la División 'San Marcial' (con sede en Burgos) frente a la División 'Castillejos' (con sede en Huesca) dentro de la Fuerza Terrestre (FUTER)?",
    opciones: [
      "La División San Marcial encuadra las Comandancias de Ceuta y Melilla, y Castillejos la Brigada de Canarias.",
      "La División 'San Marcial' (Burgos) agrupa las fuerzas de respuesta específica/operaciones especiales: BRI VI Paracaidista 'Almogávares', Mando de Operaciones Especiales (MOE), Fuerzas Aeromóviles del ET (FAMET), Mando de Tropas de Montaña (MTM) y Regimiento de Operaciones de Información nº 1; mientras que la División 'Castillejos' (Huesca) agrupa las Brigadas Polivalentes: BRI I 'Aragón', BRI II 'Rey Alfonso XIII' de la Legión, BRI VII 'Galicia', BRI X 'Guzmán el Bueno', BRI XI 'Extremadura' y BRI XII 'Guadarrama'.",
      "La División Castillejos encuadra el Mando de Artillería Antiaérea y el Mando de Ingenieros.",
      "Ambas divisiones tienen su Cuartel General en Sevilla."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del Ejército de Tierra Instrucción 14/2021) ➔ La Fuerza Terrestre (FUTER)",
    referencia: "Instrucción 14/2021 del JEME (Estructura de FUTER)",
    consejoAcademia: "¡Truco infalible para no confundir las dos Divisiones de FUTER!: 1) División 'CASTILLEJOS' (CG en Huesca) = las 6 BRIGADAS POLIVALENTES (I Aragón, II Legión, VII Brilat, X Córdoba, XI Bótoa, XII Goloso). 2) División 'SAN MARCIAL' (CG en Burgos) = Tropas de ÉLITE / ESPECÍFICAS: Paracaidistas (BRIPAC VI), Operaciones Especiales (MOE - Alicante), Helicópteros (FAMET - Colmenar Viejo), Montaña (MTM - Pamplona) y Operaciones de Información (ROI 1 - Valencia).",
    justificacion: "Según la Instrucción 14/2021, en la FUTER la División 'Castillejos' (Huesca) encuadra las seis Brigadas orgánicas polivalentes (I, II, VII, X, XI y XII), mientras que la División 'San Marcial' (Burgos) encuadra la BRIPAC VI, el MOE, las FAMET, el Mando de Tropas de Montaña y el ROI 1."
  },
  {
    id: "B1-041",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Instrucción 14/2021 ET - El Mando de Apoyo a la Maniobra (MAM)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según la Instrucción 14/2021 del JEME, ¿dónde tiene su Cuartel General el Mando de Apoyo a la Maniobra (MAM) de la Fuerza Terrestre (FUTER) y qué mandos y unidades lo integran?",
    opciones: [
      "Tiene su sede en Granada y lo integran las Academias Militares.",
      "Tiene su Cuartel General en A CORUÑA y encuadra: el Mando de Artillería de Campaña (MACA - San Andrés del Rabanedo, León), el Mando de Artillería Antiaérea (MAAA - Madrid), el Mando de Ingenieros (MING - Salamanca), el Mando de Transmisiones (MATRANS - Bétera, Valencia), la Brigada Logística (BRILOG - Zaragoza), la Brigada de Sanidad (BRISAN - Pozuelo, Madrid), el Regimiento de Defensa NBQ 'Valencia' nº 1 y el Regimiento de Inteligencia nº 1.",
      "Tiene su sede en Santa Cruz de Tenerife y depende del MCANA.",
      "Pertenece al Apoyo a la Fuerza dentro del MALE."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del Ejército de Tierra Instrucción 14/2021) ➔ Mando de Apoyo a la Maniobra (MAM)",
    referencia: "Instrucción 14/2021 del JEME (MAM)",
    consejoAcademia: "¡Súper pregunta de examen 2024/2025!: El MAM (Mando de Apoyo a la Maniobra, CG en A CORUÑA) está dentro de FUTER y agrupa todo el apoyo de combate y logístico operativo: MACA (León), MAAA (Madrid), MING (Salamanca), MATRANS (Bétera), BRILOG (Zaragoza), BRISAN (Madrid), RNBQ 1 y RINT 1. ¡Ojo: BRILOG y BRISAN están hoy en el MAM (dentro de FUTER), ya no en la antigua Fuerza Logística Operativa!",
    justificacion: "La Instrucción 14/2021 articula dentro de la FUTER el Mando de Apoyo a la Maniobra (MAM), con sede en A Coruña, integrando el MACA, MAAA, MING, MATRANS, BRILOG, BRISAN, Regimiento NBQ 1 y Regimiento de Inteligencia 1."
  },
  {
    id: "B1-042",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Instrucción 14/2021 ET - El Apoyo a la Fuerza (MAPER, MALE, MADOC, IGE)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En el Apoyo a la Fuerza del Ejército de Tierra (Instrucción 14/2021), ¿qué Direcciones integran el Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALE), el Mando de Adiestramiento y Doctrina (MADOC) y la Inspección General del Ejército (IGE)?",
    opciones: [
      "El MAPER integra la Dirección de Infraestructura y el MALE la Dirección de Enseñanza.",
      "MAPER (Madrid): Dirección de Personal (DIPE), Dirección de Asistencia al Personal (DIAPER) y Dirección de Sanidad (DISAN). MALE (Madrid): Dirección de Adquisiciones (DIAD) y Dirección de Integración de Funciones Logísticas (DINFULOG). MADOC (Granada): Dirección de Investigación, Doctrina, Orgánica y Materiales (DIDOM) y Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE). IGE (Barcelona): Dirección de Acuartelamiento (DIACU) y Dirección de Infraestructura (DINFE).",
      "La IGE tiene su sede en Sevilla y encuadra la DIPE y la DIAPER.",
      "El MADOC encuadra la DIACU y la DINFE en Barcelona."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del Ejército de Tierra Instrucción 14/2021) ➔ El Apoyo a la Fuerza",
    referencia: "Instrucción 14/2021 del JEME, Apoyo a la Fuerza",
    consejoAcademia: "Esta tarjeta vale 3 o 4 preguntas del examen oficial todos los años: 1) MAPER (Madrid) = DIPE + DIAPER + DISAN. 2) MALE (Madrid) = DIAD + DINFULOG. 3) MADOC (Granada) = DIDOM + DIENADE. 4) IGE (Barcelona) = DIACU (con las SUIGEs) + DINFE.",
    justificacion: "Conforme a la Instrucción 14/2021, el Apoyo a la Fuerza del ET se compone de MAPER (DIPE, DIAPER, DISAN), MALE (DIAD, DINFULOG), MADOC (DIDOM, DIENADE) e IGE (DIACU, DINFE)."
  },
  {
    id: "B1-043",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Organización de la Armada (Instrucción 15/2021)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Instrucción 15/2021 del AJEMA por la que se desarrolla la organización de la Armada, ¿cuáles son los órganos del Apoyo a la Fuerza de la Armada?",
    opciones: [
      "El MAPER, el MALE, el MADOC y la IGE.",
      "La Jefatura de Personal (JEPER), la Jefatura de Apoyo Logístico (JAL) y la Dirección de Asuntos Económicos (DAE).",
      "La Flota, la Fuerza de Acción Marítima y la Infantería de Marina.",
      "El MACOM, el MACAN y el MAGEN."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización de la Armada Instrucción 15/2021) ➔ Apoyo a la Fuerza",
    referencia: "Instrucción 15/2021 del AJEMA",
    consejoAcademia: "Fíjate cómo cambian las siglas del Apoyo a la Fuerza en cada Ejército: En el ET = MAPER, MALE, MADOC, IGE. En la ARMADA = JEPER (Personal), JAL (Apoyo Logístico) y DAE (Asuntos Económicos). En el EA = MAPER, MALOG y DAE.",
    justificacion: "La Instrucción 15/2021 del AJEMA articula el Apoyo a la Fuerza de la Armada en tres órganos: en el ámbito de recursos humanos la Jefatura de Personal (JEPER), en el de recursos materiales la Jefatura de Apoyo Logístico (JAL) y en el financiero la Dirección de Asuntos Económicos (DAE)."
  },
  {
    id: "B1-044",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Organización del Ejército del Aire y del Espacio (Instrucción 6/2025)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a la organización del Ejército del Aire y del Espacio (actualizada por Instrucción 6/2025 del JEMA), ¿cómo se estructuran la Fuerza y el Apoyo a la Fuerza del Ejército del Aire y del Espacio?",
    opciones: [
      "La Fuerza es la Flota y el Apoyo a la Fuerza es el MALE.",
      "La Fuerza está integrada por el Mando Aéreo de Combate (MACOM), el Mando Aéreo General (MAGEN), el Mando Aéreo de Canarias (MACAN) y el Mando del Espacio (MESPA); y el Apoyo a la Fuerza por el Mando de Personal (MAPER), el Mando de Apoyo Logístico (MALOG) y la Dirección de Asuntos Económicos (DAE).",
      "Solo existe el Mando Aéreo de Combate.",
      "El Mando del Espacio pertenece a la Armada."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 6 (Organización del Ejército del Aire y del Espacio Instrucción 6/2025)",
    referencia: "RD 521/2020 e Instrucción 6/2025 del JEMA",
    consejoAcademia: "En el Ejército del Aire y del Espacio (que cambió su denominación oficial por RD 524/2022): La Fuerza incluye MACOM, MAGEN, MACAN y el nuevo Mando del Espacio (MESPA). El Apoyo a la Fuerza son MAPER, MALOG y DAE.",
    justificacion: "En el Ejército del Aire y del Espacio, la Fuerza comprende el MACOM, el MAGEN, el MACAN y el Mando del Espacio (MESPA), y el Apoyo a la Fuerza se articula en el MAPER, el MALOG y la DAE."
  },
  {
    id: "B1-045",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - El Poder Judicial y el Ministerio Fiscal (Título VI)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según los artículos 122, 123 y 124 de la Constitución Española (Título VI: Del Poder Judicial), ¿cuántos vocales integran el Consejo General del Poder Judicial (CGPJ), cuál es su mandato y por medio de qué principios ejerce sus funciones el Ministerio Fiscal?",
    opciones: [
      "12 miembros por 9 años; el Ministerio Fiscal actúa con independencia absoluta sin sujeción jerárquica.",
      "El CGPJ está integrado por el Presidente del Tribunal Supremo (que lo preside) y por 20 MIEMBROS nombrados por el Rey por un periodo de 5 AÑOS; y el Ministerio Fiscal ejerce sus funciones conforme a los principios de UNIDAD DE ACTUACIÓN y DEPENDENCIA JERÁRQUICA, y con sujeción, en todo caso, a los de LEGALIDAD e IMPARCIALIDAD.",
      "El CGPJ tiene 15 miembros elegidos por el Gobierno por 4 años.",
      "El Fiscal General del Estado es elegido por el Senado."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título VI: Del Poder Judicial (Arts. 117 a 127)",
    referencia: "Constitución Española, Arts. 122.3 y 124.2",
    consejoAcademia: "¡No confundas TC con CGPJ!: Tribunal Constitucional (Art. 159) = 12 miembros por 9 años. Consejo General del Poder Judicial (Art. 122.3) = Presidente del TS + 20 vocales (12 entre jueces/magistrados y 8 entre abogados/juristas con +15 años de ejercicio: 4 Congreso y 4 Senado por mayoría de 3/5) por un periodo de 5 AÑOS. Y del Ministerio Fiscal (Art. 124.2) preguntan siempre sus 4 principios: Unidad de actuación, Dependencia jerárquica, Legalidad e Imparcialidad.",
    justificacion: "El art. 122.3 CE establece que el CGPJ estará integrado por el Presidente del TS y por 20 miembros nombrados por el Rey por un periodo de 5 años. El art. 124.2 dispone que el Ministerio Fiscal ejerce sus funciones conforme a los principios de unidad de actuación y dependencia jerárquica y con sujeción a los de legalidad e imparcialidad."
  },
  {
    id: "B1-046",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - El Gobierno y la Administración (Título IV)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a los artículos 97, 99 y 102 de la Constitución Española, si transcurrido el plazo de DOS MESES a partir de la primera votación de investidura ningún candidato hubiere obtenido la confianza del Congreso, ¿qué ocurre? ¿Y ante qué órgano es exigible la responsabilidad criminal del Presidente y los demás miembros del Gobierno?",
    opciones: [
      "El Rey nombra Presidente al candidato del partido más votado; y responde ante la Audiencia Nacional.",
      "El Rey disolverá ambas Cámaras y convocará nuevas elecciones con el refrendo del Presidente del Congreso (Art. 99.5); y la responsabilidad criminal será exigible, en su caso, ante la Sala de lo Penal del TRIBUNAL SUPREMO (Art. 102.1).",
      "Se disuelve únicamente el Congreso con el refrendo del Presidente del Gobierno en funciones.",
      "La responsabilidad criminal se exige ante el Tribunal Constitucional."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 1 (Constitución Española 1978) ➔ Título IV: Del Gobierno y de la Administración (Arts. 97 a 107)",
    referencia: "Constitución Española, Arts. 99.5 y 102.1",
    consejoAcademia: "Además del Art. 99.5 (2 meses desde la 1ª votación de investidura ➔ disolución de ambas Cámaras refrendada por el Presidente del Congreso), ten cuidado con el Art. 102.2 CE: si la acusación contra el Gobierno fuere por TRAICIÓN o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones, sólo podrá ser planteada por iniciativa de la CUARTA PARTE (1/4) de los miembros del Congreso y con la aprobación de la MAYORÍA ABSOLUTA del mismo, y no será aplicable la prerrogativa real de gracia (indulto).",
    justificacion: "El art. 99.5 CE dispone que si transcurrido el plazo de dos meses desde la primera votación de investidura ningún candidato obtiene la confianza, el Rey disolverá ambas Cámaras con el refrendo del Presidente del Congreso. El art. 102.1 atribuye la competencia penal sobre el Gobierno a la Sala de lo Penal del Tribunal Supremo."
  },
  // =========================================================================
  // EXPANSIÓN V4 — LOTE 2: BLOQUE 2 JURÍDICO-SOCIAL (B2-023 a B2-062)
  // =========================================================================
  {
    id: "B2-023",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 Carrera Militar - Cuerpos y Escalas del Ejército de Tierra",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 26 de la Ley 39/2007 de la Carrera Militar, ¿cuáles son los Cuerpos específicos del Ejército de Tierra y cuáles son los cuatro Cuerpos Comunes de las Fuerzas Armadas?",
    opciones: [
      "En el ET solo existe el Cuerpo General; y los Cuerpos Comunes son Infantería, Caballería, Artillería e Ingenieros.",
      "Los Cuerpos específicos del Ejército de Tierra son tres: el Cuerpo General del ET, el Cuerpo de Intendencia del ET y el Cuerpo de Ingenieros Politécnicos del ET; mientras que los cuatro Cuerpos Comunes de las FAS son el Cuerpo Jurídico Militar, el Cuerpo Militar de Intervención, el Cuerpo Militar de Sanidad y el Cuerpo de Músicas Militares.",
      "El Cuerpo de Especialistas sigue activo como cuarto cuerpo independiente en el ET.",
      "El Cuerpo de Intendencia es un Cuerpo Común de las Fuerzas Armadas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 Carrera Militar) ➔ Cuerpos y Escalas de las FAS (Arts. 25 a 39)",
    referencia: "Ley 39/2007, Arts. 25, 26 y 35",
    consejoAcademia: "¡Cuidado con confundir Cuerpos Específicos y Cuerpos Comunes!: 1) En cada Ejército (ET, Armada -con Infantería de Marina-, EA) hay Cuerpo General, Cuerpo de Intendencia y Cuerpo de Ingenieros (en el ET se llama de Ingenieros Politécnicos). 2) Los 4 CUERPOS COMUNES de las FAS son: Jurídico Militar, Militar de Intervención, Militar de Sanidad y Músicas Militares.",
    justificacion: "Los artículos 25 y 26 de la Ley 39/2007 enumeran los Cuerpos específicos de cada Ejército (General, Intendencia e Ingenieros Politécnicos en el ET) y los cuatro Cuerpos Comunes de las FAS (Jurídico Militar, Militar de Intervención, Militar de Sanidad y Músicas Militares)."
  },
  {
    id: "B2-024",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 Carrera Militar - Provisión de Destinos (Art. 100)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al artículo 100 de la Ley 39/2007 de la Carrera Militar, ¿cuáles son los tres procedimientos de provisión de los destinos de los militares profesionales?",
    opciones: [
      "Antigüedad, Oposición y Sorteo.",
      "Libre designación, Concurso de méritos y Provisión por antigüedad (pudiendo además asignarse destinos con carácter forzoso en ausencia de peticionarios o por necesidades del servicio).",
      "Elección, Clasificación y Antigüedad.",
      "Únicamente por orden de escalafón."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 Carrera Militar) ➔ Destinos (Arts. 99 a 106)",
    referencia: "Ley 39/2007, Art. 100",
    consejoAcademia: "¡No confundas Sistemas de ASCENSO (Elección, Clasificación, Concurso/Concurso-Oposición y Antigüedad — Art. 88) con Procedimientos de provisión de DESTINOS (Libre designación, Concurso de méritos y Antigüedad — Art. 100)!",
    justificacion: "El artículo 100 de la Ley 39/2007 establece que los destinos se proveerán por los procedimientos de libre designación, concurso de méritos y antigüedad."
  },
  {
    id: "B2-025",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 Carrera Militar - Suspensión de Funciones vs Suspensión de Empleo (Arts. 111-112)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DE SITUACIONES ADMINISTRATIVAS! Según los artículos 111 y 112 de la Ley 39/2007, ¿cuál es el límite máximo de la 'suspensión de funciones' acordada cautelarmente en un procedimiento penal o disciplinario y en qué se diferencia de la 'suspensión de empleo'?",
    opciones: [
      "Ambas duran 2 años y ninguna supone pérdida del destino.",
      "La 'suspensión de funciones' (cautelar en expediente por falta muy grave o proceso penal) no puede exceder de 6 MESES (salvo paralización imputable al interesado o prisión provisional) y supone el cese en el destino sólo cuando supere los 6 meses; mientras que la 'suspensión de empleo' (sanción firme o pena) produce SIEMPRE el cese en el destino y la imposibilidad de ascender durante el tiempo de la sanción.",
      "La suspensión de funciones produce siempre la baja definitiva en las FAS.",
      "La suspensión de empleo no afecta al tiempo de servicios ni al destino."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 Carrera Militar) ➔ Situaciones Administrativas (Arts. 107 a 113)",
    referencia: "Ley 39/2007, Arts. 111 y 112",
    consejoAcademia: "Truco clave para no fallar nunca Arts. 111 y 112 de la Ley 39/2007: 1) Suspensión de FUNCIONES = medida preventiva/cautelar (máx. 6 meses en vía disciplinaria; solo pierdes el destino si pasa de 6 meses). 2) Suspensión de EMPLEO = castigo/condena firme (pierdes el destino SIEMPRE desde el primer día).",
    justificacion: "Según los arts. 111 y 112 de la Ley 39/2007, la suspensión de funciones acordada en expediente disciplinario no podrá exceder de 6 meses y sólo conlleva cese en el destino cuando exceda de 6 meses (o prisión), mientras que la suspensión de empleo implica siempre el cese en el destino."
  },
  {
    id: "B2-026",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 de Tropa y Marinería - Causas de Resolución del Compromiso (Arts. 10 y 11)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a los artículos 10 y 11 de la Ley 8/2006 de Tropa y Marinería, para poder resolver el Compromiso de Larga Duración (CLD) a petición expresa del interesado, ¿con qué plazo de preaviso debe solicitarlo? ¿Y qué ocurre si el militar de tropa con compromiso inicial o CLD resulta con insuficiencia de condiciones psicofísicas?",
    opciones: [
      "Preaviso de 15 días; causa baja inmediata sin ningún derecho.",
      "A petición expresa del interesado con un preaviso de 3 MESES (Art. 10.2.a); y por insuficiencia de condiciones psicofísicas o de facultades profesionales se resuelve el compromiso tras la tramitación del correspondiente expediente.",
      "Preaviso de 1 año en todos los casos.",
      "El Compromiso de Larga Duración no puede resolverse nunca a petición propia."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 8/2006 de Tropa y Marinería) ➔ Finalización y resolución del compromiso (Arts. 10 y 11)",
    referencia: "Ley 8/2006, Art. 10.2.a",
    consejoAcademia: "Dato directo de examen en la Ley 8/2006: Para resolver el Compromiso de Larga Duración (CLD) a petición propia del militar de tropa, se exige un preaviso de 3 MESES (Art. 10.2.a). Y recuerda que en el Compromiso Inicial se puede resolver a petición propia una vez cumplidos 3 años de servicios con el mismo preaviso de 3 meses.",
    justificacion: "El artículo 10.2.a de la Ley 8/2006 establece que el compromiso de larga duración se resolverá, entre otras causas, a petición expresa del interesado con un preaviso de tres meses."
  },
  {
    id: "B2-027",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 de Tropa y Marinería - Acceso a Administración Civil, Guardia Civil y Policía Nacional (Arts. 20 y 21)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según los artículos 20 y 21 de la Ley 8/2006 de Tropa y Marinería, ¿qué porcentaje mínimo de plazas se reserva para militares profesionales de tropa y marinería con más de 5 años de servicios en el ingreso a la Guardia Civil y en el ingreso a la Escala Básica de la Policía Nacional?",
    opciones: [
      "Un 10% en la Guardia Civil y un 5% en la Policía Nacional.",
      "En la Guardia Civil una reserva de un mínimo del 40% de las plazas (ampliable al 50%); y en la Policía Nacional al menos un máximo del 20% de las plazas para militares de tropa y marinería con más de 5 años de servicios.",
      "Un 80% en ambos cuerpos policiales.",
      "No existe reserva de plazas en la Ley 8/2006."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 8/2006 de Tropa y Marinería) ➔ Cambio de actividad profesional y salidas (Arts. 16 a 21)",
    referencia: "Ley 8/2006, Art. 20.4 y 20.5",
    consejoAcademia: "Cifras clásicas de los artículos 16, 20 y 21 de la Ley 8/2006 (con +5 años de servicios): 1) Promoción interna a Suboficiales = reserva mínima del 80% de las plazas (Art. 15). 2) Ingreso a Guardia Civil = mínimo 40% (Art. 20.4). 3) Policía Nacional = hasta el 20% (Art. 20.5). 4) Personal laboral del MINISDEF = reserva mínima del 50% (Art. 21).",
    justificacion: "La Ley 8/2006 fija en su art. 15 una reserva de al menos el 80% de las plazas de acceso a la enseñanza de formación de Suboficiales; en su art. 20 al menos el 40% para Guardia Civil y el 20% para Policía Nacional; y en su art. 21 al menos el 50% para personal laboral del Ministerio de Defensa."
  },
  {
    id: "B2-028",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas para las FAS (RD 96/2009) - Estructura de Capítulos y Artículos",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿Mediante qué norma se aprobaron las vigentes Reales Ordenanzas para las Fuerzas Armadas, de cuántos capítulos y artículos constan, y a quién son de aplicación?",
    opciones: [
      "Por Ley Orgánica 9/2011; constan de 50 artículos; solo aplican a Oficiales.",
      "Por el Real Decreto 96/2009, de 6 de febrero; constan de 6 Capítulos (129 artículos), una Disposición adicional, una derogatoria y dos finales; y son de aplicación a TODOS los miembros de las Fuerzas Armadas (y a los alumnos de la enseñanza militar de formación y a los reservistas cuando se encuentren incorporados a las FAS).",
      "Por la Ley 85/1978; constan de 300 artículos.",
      "Por Orden Ministerial de 2020; no se aplican a los alumnos de centros docentes militares."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas para las FAS RD 96/2009) ➔ Capítulo I: Principios Generales (Arts. 1 y 2)",
    referencia: "Real Decreto 96/2009, Arts. 1 y 2",
    consejoAcademia: "Radiografía exacta del RD 96/2009 (Reales Ordenanzas): Tiene 6 CAPÍTULOS y 129 ARTÍCULOS: Cap. I Principios generales, Cap. II Del militar, Cap. III De la disciplina, Cap. IV De la acción del mando, Cap. V De las operaciones, y Cap. VI De otras funciones (apoyo a autoridades civiles, paz, etc.).",
    justificacion: "Las Reales Ordenanzas para las FAS fueron aprobadas por el Real Decreto 96/2009, de 6 de febrero, estructurándose en 6 capítulos y 129 artículos, siendo de aplicación a todos los miembros de las FAS, alumnos de formación y reservistas activados (Art. 2)."
  },
  {
    id: "B2-029",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas para las FAS (RD 96/2009) - De la Acción del Mando (Cap. IV)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según los artículos 55, 61 y 63 de las Reales Ordenanzas para las FAS (RD 96/2009), ¿en qué radica el 'prestigio' del militar que ejerce mando, puede ser nunca renunciable la responsabilidad en el ejercicio del mando, y cómo debe corregir las faltas?",
    opciones: [
      "La responsabilidad del mando puede delegarse íntegramente en el subordinado más antiguo.",
      "Reafirmará su liderazgo procurando conseguir el apoyo y cooperación de sus subordinados por el prestigio adquirido con su EJEMPLO, PREPARACIÓN y CAPACIDAD DE DECISIÓN (Art. 54-55); la responsabilidad en el ejercicio del mando NO ES RENUNCIABLE ni puede ser compartida (Art. 61); y como norma general no corregirá las faltas en presencia de otros de igual o inferior empleo si ello va en menoscabo del prestigio del que la ha cometido (Art. 68).",
      "Debe reprender siempre públicamente delante de los subordinados.",
      "La acción del mando se basa exclusivamente en la coacción disciplinaria."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas para las FAS RD 96/2009) ➔ Capítulo IV: De la acción del mando (Arts. 53 a 82)",
    referencia: "Real Decreto 96/2009 (RROO), Arts. 54, 61 y 68",
    consejoAcademia: "Tres frases literales del Capítulo IV de las RROO que el tribunal pregunta palabra por palabra: 1) El prestigio nace de su 'ejemplo, preparación y capacidad de decisión' (Art. 54). 2) 'La responsabilidad en el ejercicio del mando no es renunciable ni puede ser compartida' (Art. 61). 3) 'Capacidad para decidir' (Art. 62).",
    justificacion: "Los artículos 54, 61 y 68 de las Reales Ordenanzas establecen que el liderazgo se apoya en el prestigio ganado con el ejemplo, preparación y capacidad de decisión, que la responsabilidad en el ejercicio del mando no es renunciable ni puede ser compartida, y regulan el modo de efectuar las correcciones."
  },
  {
    id: "B2-030",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas para las FAS (RD 96/2009) - De las Operaciones y Derecho Internacional Humanitario (Cap. V)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 91, 108 y 111 de las Reales Ordenanzas para las FAS (RD 96/2009), en el desarrollo de las operaciones militares y en caso de caer prisionero:",
    opciones: [
      "El militar puede emplear cualquier medio de combate sin limitación proporcional.",
      "Hará un uso legítimo, gradual y PROPORCIONADO de la fuerza conforme a las Reglas de Enfrentamiento (Art. 91); protegerá a los heridos, enfermos, náufragos, prisioneros y población civil (Art. 109-111); y si cae prisionero tratará de evadirse y solo estará obligado a declarar su nombre y apellidos, empleo, número de filiación o DNI y fecha de nacimiento (Art. 95).",
      "Si cae prisionero debe informar sobre la organización y planes de su unidad.",
      "Las Reglas de Enfrentamiento solo se aplican en territorio nacional."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas para las FAS RD 96/2009) ➔ Capítulo V: De las operaciones (Arts. 83 a 114)",
    referencia: "Real Decreto 96/2009 (RROO), Arts. 91, 95 y 109",
    consejoAcademia: "¡Pregunta muy repetida del Art. 95 de las RROO (Comportamiento del prisionero)!: Si el militar cae prisionero, evitará facilitar otra información que no sea su NOMBRE Y APELLIDOS, EMPLEO, NÚMERO DE FILIACIÓN (o DNI) y FECHA DE NACIMIENTO.",
    justificacion: "El artículo 91 de las RROO exige un uso gradual y proporcionado de la fuerza conforme a las ROE, y el artículo 95 regula el comportamiento del prisionero conforme a los Convenios de Ginebra."
  },
  {
    id: "B2-031",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas para las FAS (RD 96/2009) - Símbolos de la Patria y Tradición Militar (Arts. 9-21)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 11 y 21 de las Reales Ordenanzas para las FAS (RD 96/2009), ¿a qué grandes maestres y héroes rinde homenaje la tradición militar española como estímulo para continuar la propia historia?",
    opciones: [
      "Exclusivamente a los generales del siglo XX.",
      "El militar que porta o da escolta a la Bandera tiene el deber de defenderla hasta perder la vida (Art. 11); y los miembros de las FAS se sentirán herederos y depositarios de la tradición militar española, homenajeando a los que dieron su vida por España y a los héroes que la forjaron (Art. 21).",
      "Las Reales Ordenanzas suprimieron toda mención a la tradición militar.",
      "Solo la Armada rinde honores a la Bandera Nacional."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas para las FAS RD 96/2009) ➔ Capítulos I y II (Arts. 11 y 21)",
    referencia: "Real Decreto 96/2009 (RROO), Arts. 11 y 21",
    consejoAcademia: "Artículos 11 y 21 de las RROO: Defensa de la Bandera y depositarios de la tradición militar española.",
    justificacion: "Los artículos 11 y 21 del RD 96/2009 consagran el máximo respeto a los símbolos de la Patria y el carácter de herederos y depositarios de la tradición militar española."
  },
  {
    id: "B2-032",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 9/2011 Derechos y Deberes - Libertad de Desplazamiento y Residencia (Arts. 11 y 23)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a los artículos 11 y 23 de la Ley Orgánica 9/2011 de derechos y deberes de los miembros de las FAS, respecto a la libertad de desplazamiento al extranjero y al lugar de residencia habitual del militar:",
    opciones: [
      "El militar necesita autorización del Consejo de Ministros para cualquier viaje turístico dentro de España.",
      "El militar podrá desplazarse libremente por el territorio nacional, si bien en los desplazamientos al extranjero se aplicarán las limitaciones o el deber de comunicación previa que se establezcan por razones de seguridad o disponibilidad; y su lugar de residencia será el del municipio de su destino, aunque podrá ser uno distinto siempre que se asegure el adecuado cumplimiento de sus obligaciones.",
      "El militar tiene prohibido salir del territorio nacional durante sus vacaciones.",
      "Está obligado a residir siempre dentro del acuartelamiento."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (LO 9/2011 Derechos y Deberes) ➔ Libertad de desplazamiento y Residencia (Arts. 11 y 23)",
    referencia: "Ley Orgánica 9/2011, Arts. 11 y 23",
    consejoAcademia: "En los artículos 11 y 23 de la LO 9/2011: 1) Residencia = el municipio de su destino (o uno distinto autorizado siempre que garantice el cumplimiento de sus obligaciones). 2) Desplazamientos al extranjero = sujetos a comunicación previa o autorización en situaciones que afecten a la seguridad o disponibilidad.",
    justificacion: "El art. 11 de la LO 9/2011 regula la libertad de desplazamiento y circulación, y el art. 23 regula la residencia y domicilio habitual del militar."
  },
  {
    id: "B2-033",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 9/2011 Derechos y Deberes - Asociaciones Profesionales y RAPFAS (Arts. 33 a 45)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según los artículos 33, 34 y 36 de la Ley Orgánica 9/2011, ¿quiénes pueden afiliarse a las asociaciones profesionales de miembros de las FAS, a cuántas asociaciones puede estar afiliado un mismo militar y dónde deben inscribirse?",
    opciones: [
      "Pueden afiliarse civiles y guardias civiles; un militar puede estar en hasta 3 asociaciones.",
      "Únicamente podrán afiliarse los militares que estén en cualquiera de las situaciones administrativas en que conserven derechos y obligaciones inherentes a su condición militar (y los retirados si lo contemplan los estatutos, sin ocupar cargos en COPERFAS); sólo podrán estar afiliados a UNA asociación profesional de las reguladas en este capítulo; y deberán inscribirse en el Registro de Asociaciones Profesionales de miembros de las FAS (RAPFAS), habilitado en el Ministerio de Defensa.",
      "Los alumnos de enseñanza militar de formación que no tengan condición previa de militar profesional pueden fundar asociaciones.",
      "Las asociaciones profesionales pueden recibir donaciones privadas de partidos políticos o sindicatos."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (LO 9/2011 Derechos y Deberes) ➔ Título III: De las asociaciones profesionales (Arts. 33 a 45)",
    referencia: "Ley Orgánica 9/2011, Arts. 34 y 36",
    consejoAcademia: "¡Tres trampas frecuentes del Título III de la LO 9/2011!: 1) Solo puedes estar afiliado a UNA asociación profesional (Art. 34.3). 2) Los alumnos de formación que NO tuvieran previamente condición de militar profesional NO pueden asociarse (Art. 34.1). 3) Las asociaciones tienen PROHIBIDO aceptar donaciones privadas (Art. 40.2) y se inscriben en el RAPFAS (Subsecretaría de Defensa).",
    justificacion: "Los artículos 34 y 36 de la LO 9/2011 establecen que los militares solo podrán afiliarse a una única asociación profesional inscrita en el Registro de Asociaciones Profesionales de miembros de las FAS (RAPFAS) en el Ministerio de Defensa."
  },
  {
    id: "B2-034",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 9/2011 Derechos y Deberes - El Consejo de Personal de las FAS (COPERFAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a los artículos 47 y 49 de la Ley Orgánica 9/2011, ¿quién preside el Consejo de Personal de las Fuerzas Armadas (COPERFAS) y qué materias quedan expresamente EXCLUIDAS de su ámbito de actuación?",
    opciones: [
      "Lo preside el JEMAD y debate la logística de las operaciones militares.",
      "Lo preside el Ministro de Defensa (y cuando no asista, el Subsecretario de Defensa); y quedan EXCLUIDAS de su conocimiento las decisiones de mando, el planeamiento y conducción de las operaciones militares, la preparación y empleo de la fuerza, y los procedimientos de selección, ascenso y asignación de destinos de carácter singular.",
      "Lo preside el Presidente del Congreso y resuelve recursos disciplinarios.",
      "Tiene carácter vinculante sobre las órdenes operativas de los Jefes de Unidad."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (LO 9/2011 Derechos y Deberes) ➔ Del Consejo de Personal de las FAS (Arts. 46 a 52)",
    referencia: "Ley Orgánica 9/2011, Arts. 47 y 49.3",
    consejoAcademia: "Datos clave del COPERFAS (Arts. 47-51 LO 9/2011): 1) Presidente = Ministro de Defensa (por sustitución, el SUBDEF). 2) Composición paritaria = representantes de las asociaciones profesionales + representantes del MINISDEF. 3) Excluido = mando, operaciones militares y empleo de la fuerza.",
    justificacion: "El artículo 47 de la LO 9/2011 establece que el COPERFAS estará presidido por el Ministro de Defensa o, cuando no asista, por el Subsecretario de Defensa. El artículo 49.3 excluye de su ámbito el mando, las operaciones militares y el empleo de la fuerza."
  },
  {
    id: "B2-035",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Ámbito de Aplicación y Principio Non Bis In Idem (Arts. 2 a 4)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 3 de la Ley Orgánica 8/2014 de Régimen Disciplinario de las FAS, cuando durante la tramitación de un procedimiento disciplinario por falta GRAVE o MUY GRAVE se aprecie que los hechos pudieran ser constitutivos de delito, ¿qué debe hacer la autoridad o mando competente?",
    opciones: [
      "Imponer la sanción disciplinaria inmediatamente antes de avisar al juez.",
      "Ponerlo en conocimiento del Ministerio Fiscal o autoridad judicial y ACORDAR LA SUSPENSIÓN de la tramitación del procedimiento disciplinario hasta que recaiga resolución judicial firme.",
      "Archivar definitivamente el expediente disciplinario sin esperar a la sentencia.",
      "En las faltas graves no se suspende nunca el procedimiento."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Disposiciones Generales (Art. 3)",
    referencia: "Ley Orgánica 8/2014, Art. 3.2",
    consejoAcademia: "Principio de prejudicialidad penal (Art. 3.2 LO 8/2014): Si los hechos pueden ser delito ➔ se da cuenta al Fiscal/Juez y se SUSPENDE el expediente disciplinario hasta que haya resolución judicial firme (y los hechos declarados probados por la sentencia judicial firme vinculan a la Administración militar).",
    justificacion: "El artículo 3.2 de la LO 8/2014 dispone que cuando los hechos pudieran ser constitutivos de delito se pondrá en conocimiento del Fiscal o Juez y se acordará la suspensión del procedimiento disciplinario hasta que recaiga resolución judicial firme."
  },
  {
    id: "B2-036",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Sanciones Económicas y Privación de Salida (Arts. 13 y 14)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a los artículos 13 y 14 de la Ley Orgánica 8/2014, ¿en qué consiste la sanción de 'privación de salida' (exclusiva para alumnos de centros docentes militares de formación) y qué tramos tiene la 'sanción económica' en faltas leves frente a faltas graves?",
    opciones: [
      "La privación de salida se aplica a todos los soldados y cabos; la sanción económica dura hasta 30 días.",
      "La privación de salida (de 1 a 8 días) supone la permanencia del ALUMNO en su centro docente militar de formación fuera de las horas de actividad académica; y la sanción económica supone la pérdida de retribuciones durante 1 a 8 DÍAS (por falta leve) o de 8 a 15 DÍAS (por falta grave).",
      "La sanción económica puede imponerse por falta muy grave hasta 60 días.",
      "La privación de salida dura de 15 a 30 días."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Las Sanciones Disciplinarias (Arts. 11 a 21)",
    referencia: "Ley Orgánica 8/2014, Arts. 13 y 14",
    consejoAcademia: "¡Dos trampas muy finas de los Arts. 13 y 14 de la LO 8/2014!: 1) La 'Privación de salida' (1 a 8 días) es EXCLUSIVA para los ALUMNOS de centros docentes militares de formación. 2) El número 8 es compartido en la sanción económica: Leve = 1 a 8 días; Grave = 8 a 15 días (en Muy Grave NO existe sanción económica).",
    justificacion: "El art. 13 de la LO 8/2014 regula la privación de salida (1 a 8 días) para los alumnos de centros de formación, y el art. 14 regula la sanción económica de 1 a 8 días en faltas leves y de 8 a 15 días en faltas graves."
  },
  {
    id: "B2-037",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Sanción de Pérdida de Destino (Art. 16)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡PREGUNTA CLÁSICA DE PLAZOS EN LO 8/2014! Según el artículo 16 de la Ley Orgánica 8/2014, el militar sancionado por falta grave con 'pérdida de destino' cesará en el que ocupa y, ¿durante cuánto tiempo NO podrá solicitar nuevo destino en la misma unidad, localidad o demarcación territorial específica?",
    opciones: [
      "Durante 6 meses.",
      "Durante DOS AÑOS no podrá solicitar nuevo destino en la misma unidad o, cuando así se determine motivadamente en la resolución sancionadora, en la misma localidad o demarcación territorial específica.",
      "Durante 4 años.",
      "Durante 1 año."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Sanción de pérdida de destino (Art. 16)",
    referencia: "Ley Orgánica 8/2014, Art. 16",
    consejoAcademia: "Apunta este número en rojo: Pérdida de destino (Art. 16 LO 8/2014, sanción por falta GRAVE) = prohibición de pedir destino en esa misma unidad (o localidad si se motiva) durante 2 AÑOS.",
    justificacion: "El artículo 16 de la LO 8/2014 establece que la sanción de pérdida de destino supone el cese en el que viene ocupando el infractor, quien durante dos años no podrá solicitar nuevo destino en la misma unidad o, motivadamente, en la misma localidad o demarcación."
  },
  {
    id: "B2-038",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Competencia para Sancionar (Arts. 26 a 32)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 28 y 32 de la Ley Orgánica 8/2014, ¿qué autoridad es la ÚNICA competente para imponer la sanción de 'Separación del servicio' (y 'Resolución de compromiso') por falta muy grave, y qué sanciones puede imponer un Jefe de Pelotón o Sección (Oficial o Suboficial)?",
    opciones: [
      "El JEME impone la separación del servicio; y el Jefe de Sección impone arresto de hasta 5 días.",
      "La Separación del servicio y la Resolución de compromiso solo las puede imponer el MINISTRO DE DEFENSA (Art. 28); y los Jefes de Sección o Pelotón (con empleo de Oficial o Suboficial) solo pueden imponer la sanción de REPRENSIÓN (Art. 32.6).",
      "El Subsecretario de Defensa impone la separación del servicio; y el Cabo 1º impone sanción económica.",
      "El Jefe de Regimiento puede imponer la resolución de compromiso."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Competencia sancionadora (Arts. 28 a 32)",
    referencia: "Ley Orgánica 8/2014, Arts. 28 y 32.6",
    consejoAcademia: "Escalera completa de competencia sancionadora en la LO 8/2014: 1) Jefe de Pelotón/Sección (Oficial o Suboficial) = SOLO Reprensión. 2) Jefe de Compañía = Reprensión + Salida/Económica hasta 5 días (SIN arresto). 3) Jefe de Batallón = Leves hasta 7 días de arresto y Salida/Económica hasta 8 días. 4) Jefe de Regimiento = Todas las Leves (arresto hasta 14 días). 5) JEME / AJEMA / JEMA / JEMAD / SUBDEF = Graves y Muy Graves (excepto Separación/Resolución). 6) MINISTRO DE DEFENSA = Separación del servicio y Resolución de compromiso.",
    justificacion: "El art. 28 de la LO 8/2014 reserva al Ministro de Defensa la imposición de la separación del servicio y la resolución de compromiso; y el art. 32.6 atribuye a los Jefes de Sección o Pelotón o unidad similar (con empleo igual o superior a Sargento) la competencia para imponer reprensión."
  },
  {
    id: "B2-039",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Orden de Arresto Preventivo o Cautelar (Art. 34)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al artículo 34 de la Ley Orgánica 8/2014, como medida cautelar ante una insubordinación o falta flagrante contra la disciplina, cualquier militar con mando o más antiguo puede ordenar el arresto cautelar del infractor por un tiempo máximo de:",
    opciones: [
      "72 horas.",
      "48 HORAS.",
      "5 días.",
      "14 días."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Medidas cautelares (Art. 34)",
    referencia: "Ley Orgánica 8/2014, Art. 34",
    consejoAcademia: "¡Cuidado con no confundir las 72 horas de detención policial del Art. 17 CE con las 48 HORAS del arresto cautelar/preventivo disciplinario del Art. 34 LO 8/2014! En la LO 8/2014 el arresto cautelar dura máximo 48 HORAS (y ese tiempo se abona luego si se impone sanción de arresto).",
    justificacion: "El artículo 34 de la LO 8/2014 establece que la medida cautelar de arresto preventivo para restablecer de inmediato la disciplina quebrantada no podrá exceder en ningún caso de 48 horas."
  },
  {
    id: "B2-040",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Ejecutividad y Suspensión de Sanciones (Arts. 60 a 62)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 60 de la Ley Orgánica 8/2014, las sanciones disciplinarias son inmediatamente ejecutivas desde el mismo día en que se notifiquen al infractor, EXCEPTO:",
    opciones: [
      "La reprensión, que tarda un mes en ejecutarse.",
      "La sanción de ARRESTO por falta LEVE, cuya ejecución no comenzará hasta que la sanción sea FIRME en vía disciplinaria (es decir, cuando transcurra el plazo de un mes para recurrir sin haberlo hecho o cuando se resuelva el recurso interpuesto).",
      "Las sanciones por falta muy grave, que nunca se ejecutan.",
      "Las sanciones económicas, que esperan siempre 2 años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Ejecución de las sanciones (Art. 60)",
    referencia: "Ley Orgánica 8/2014, Art. 60.1 y 60.2",
    consejoAcademia: "¡Esta fue la gran novedad garantista de la LO 8/2014 (Art. 60.2) y cae muchísimo!: Todas las sanciones son inmediatamente ejecutivas, EXCEPTO el ARRESTO POR FALTA LEVE (de 1 a 14 días), que NO se cumple hasta que sea firme en vía disciplinaria (si interpones recurso de alzada, no entras a cumplir el arresto leve hasta que resuelvan tu recurso).",
    justificacion: "El artículo 60.2 de la LO 8/2014 establece como excepción a la ejecutividad inmediata que las sanciones de arresto por falta leve no se ejecutarán hasta que alcancen firmeza en vía disciplinaria."
  },
  {
    id: "B2-041",
    temaCodigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "RD 176/2014 Iniciativas y Quejas - Ámbito y Exclusiones (Arts. 2 a 4)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el Real Decreto 176/2014 por el que se regula el procedimiento para la tramitación de las iniciativas y quejas relativas al régimen de personal y a las condiciones de vida que pueda plantear el militar, ¿cómo deben presentarse y qué pasa si se presentan de forma colectiva o anónima?",
    opciones: [
      "Pueden presentarse de forma anónima o firmadas por toda una compañía.",
      "Deben presentarse siempre de forma INDIVIDUAL, identificándose el militar con su nombre, apellidos, DNI/TIM, empleo y destino; no admitiéndose a trámite las presentadas de forma anónima ni las que entrañen el ejercicio conjunto o colectivo del derecho de queja.",
      "Se presentan a través de los sindicatos civiles.",
      "Sustituyen a los recursos de alzada contra sanciones disciplinarias."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 5 (Iniciativas y Quejas RD 176/2014) ➔ Disposiciones generales (Arts. 2 a 4)",
    referencia: "Real Decreto 176/2014, Arts. 2 a 4",
    consejoAcademia: "En el RD 176/2014: Las iniciativas y quejas son siempre INDIVIDUALES (nunca colectivas ni anónimas), por escrito, y NO sirven para tramitar recursos administrativos ni disciplinarios (que tienen su propio cauce legal).",
    justificacion: "El Real Decreto 176/2014 exige que las iniciativas y quejas se formulen siempre a título individual, rechazando las anónimas o colectivas y excluyendo las materias que dispongan de un procedimiento específico de recurso."
  },
  {
    id: "B2-042",
    temaCodigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "RD 176/2014 Iniciativas y Quejas - Plazos de Tramitación de Iniciativas vs Quejas (Arts. 7 a 11)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DEL RD 176/2014! ¿Cuál es la diferencia de plazos entre una INICIATIVA (Art. 8) y una QUEJA (Art. 10) cuando el Jefe de Unidad no la resuelve o traslada?",
    opciones: [
      "En ambos casos el plazo es de 15 días hábiles.",
      "En las QUEJAS, si transcurrido UN MES desde su presentación el Jefe de Unidad no ha contestado, el militar puede dirigirse directamente al Mando o Jefatura de Personal (MAPER); mientras que en las INICIATIVAS, el Jefe de Unidad acusa recibo y en el plazo de SEIS MESES se informa al proponente del resultado o acuerdo adoptado.",
      "Las quejas tardan 6 meses y las iniciativas 10 días.",
      "Contra la desestimación de una iniciativa cabe recurso contencioso-administrativo directo."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 5 (Iniciativas y Quejas RD 176/2014) ➔ Capítulos II (Iniciativas) y III (Quejas)",
    referencia: "Real Decreto 176/2014, Arts. 8 y 10",
    consejoAcademia: "Memoriza este contraste del RD 176/2014: QUEJA sin respuesta del Jefe de Unidad = a 1 MES puedes elevarla directo al MAPER (o SUBDEF en Órgano Central/EMAD). INICIATIVA = plazo de hasta 6 MESES para informar de la decisión adoptada.",
    justificacion: "Los artículos 8 y 10 del RD 176/2014 establecen el plazo de 6 meses para comunicar la resolución de las iniciativas y el plazo de 1 mes para que, ante la falta de contestación de una queja por el Jefe de Unidad, el interesado pueda acudir directamente al Mando de Personal."
  },
  {
    id: "B2-043",
    temaCodigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 3/2007 de Igualdad - Discriminación Directa vs Indirecta (Art. 6)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al artículo 6 de la Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres, ¿cuándo existe 'discriminación indirecta' por razón de sexo?",
    opciones: [
      "Cuando una persona es tratada de manera menos favorable que otra en situación comparable por razón de su sexo.",
      "Cuando una disposición, criterio o práctica APARENTEMENTE NEUTROS pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que puedan justificarse objetivamente en atención a una finalidad legítima y que los medios sean necesarios y adecuados.",
      "Cuando se aplica una acción positiva a favor de las mujeres.",
      "Únicamente cuando existe una orden verbal expresa discriminatoria."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 6 (LO 3/2007 de Igualdad Efectiva) ➔ Título I: El principio de igualdad y la tutela contra la discriminación (Art. 6)",
    referencia: "Ley Orgánica 3/2007, Art. 6.1 y 6.2",
    consejoAcademia: "Palabra clave para cazar al vuelo la respuesta en el Art. 6 LO 3/2007: Si ves 'trato menos favorable en situación comparable' = Discriminación DIRECTA (Art. 6.1). Si ves 'disposición, criterio o práctica APARENTEMENTE NEUTROS que pone en desventaja particular' = Discriminación INDIRECTA (Art. 6.2).",
    justificacion: "El artículo 6.2 de la LO 3/2007 define la discriminación indirecta por razón de sexo como la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro."
  },
  {
    id: "B2-044",
    temaCodigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 3/2007 de Igualdad - Carga de la Prueba e Informe de Impacto de Género (Arts. 13 y 19)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 13 de la Ley Orgánica 3/2007, en los procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, ¿a quién corresponde probar la ausencia de discriminación, y en qué tipo de procesos NO es de aplicación esta inversión de la carga de la prueba?",
    opciones: [
      "Siempre corresponde a la víctima probarlo todo, incluso en procesos laborales.",
      "Corresponderá a la PERSONA DEMANDADA probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad; si bien lo establecido en este apartado NO SERÁ DE APLICACIÓN A LOS PROCESOS PENALES (donde rige la presunción de inocencia).",
      "Se aplica exclusivamente a los procesos penales militares.",
      "Corresponde al Ministerio Fiscal asumir la prueba en nombre del demandado."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 6 (LO 3/2007 de Igualdad Efectiva) ➔ Prueba (Art. 13)",
    referencia: "Ley Orgánica 3/2007, Art. 13.1 y 13.2",
    consejoAcademia: "¡Pregunta trampa de oro del Art. 13 LO 3/2007!: En igualdad se invierte la carga de la prueba (prueba el DEMANDADO que no hubo discriminación), EXCEPTO en los PROCESOS PENALES (Art. 13.2), porque en el ámbito penal manda la presunción de inocencia del Art. 24 CE.",
    justificacion: "El artículo 13 de la LO 3/2007 establece la inversión de la carga de la prueba hacia la persona demandada en casos de discriminación por razón de sexo, exceptuando expresamente en su apartado 2 los procesos penales."
  },
  {
    id: "B2-045",
    temaCodigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 3/2007 de Igualdad - Igualdad en las Fuerzas Armadas y Empleo Público (Arts. 51 a 68)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 65 y 66 de la Ley Orgánica 3/2007 (Capítulo IV del Título V: Fuerzas Armadas), las normas sobre personal de las Fuerzas Armadas procurarán la efectividad del principio de igualdad entre mujeres y hombres, especialmente en:",
    opciones: [
      "La creación de escalas separadas por sexo para los ascensos.",
      "El régimen de acceso, capacitación, ascensos, destinos y situaciones administrativas, promoviendo las medidas necesarias para la conciliación de la vida personal, familiar y profesional y para la prevención del acoso sexual y por razón de sexo.",
      "La exención total de guardias y misiones internacionales.",
      "La reserva del 50% de los empleos de Oficial General."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 6 (LO 3/2007 de Igualdad Efectiva) ➔ Título V, Capítulo IV: Fuerzas Armadas (Arts. 65 y 66)",
    referencia: "Ley Orgánica 3/2007, Arts. 65 y 66",
    consejoAcademia: "Recuerda qué artículos de la LO 3/2007 hablan específicamente de las Fuerzas Armadas: los artículos 65 y 66 (y los arts. 67 y 68 hablan de las Fuerzas y Cuerpos de Seguridad del Estado).",
    justificacion: "Los artículos 65 y 66 de la LO 3/2007 disponen que las normas referidas al personal al servicio de las FAS procurarán la efectividad del principio de igualdad en el régimen de acceso, capacitación, ascensos, destinos y situaciones administrativas."
  },
  {
    id: "B2-046",
    temaCodigo: "B2-T07",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Observatorio Militar para la Igualdad (Orden DEF/111/2019)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Orden DEF/111/2019 por la que se regula la estructura y funcionamiento del Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas, ¿quién ejerce su Presidencia y quién actúa como Secretaría Permanente?",
    opciones: [
      "Lo preside el Presidente del Congreso y la Secretaría la ejerce el JEMAD.",
      "Su Presidencia corresponde a la persona titular de la SUBSECRETARÍA DE DEFENSA (SUBDEF), su Vicepresidencia a la persona titular de la Dirección General de Personal (DIGENPER), y cuenta con una Secretaría Permanente encuadrada en la División de Igualdad y Apoyo Social al Personal de la DIGENPER.",
      "Lo preside el Ministro del Interior y depende de las Cortes Generales.",
      "Lo preside el Jefe de Estado Mayor del Ejército de Tierra."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 7 (Observatorio Militar para la Igualdad y Protocolo Frente al Acoso) ➔ Orden DEF/111/2019",
    referencia: "Orden DEF/111/2019, Arts. 3 a 6",
    consejoAcademia: "Organigrama del Observatorio Militar para la Igualdad (Orden DEF/111/2019): Presidencia = SUBDEF (Subsecretario/a de Defensa). Vicepresidencia = DIGENPER (Director/a General de Personal). Secretaría Permanente = División de Igualdad y Apoyo Social al Personal (en la DIGENPER). Y recuerda que se reúne en Pleno al menos DOS VECES AL AÑO.",
    justificacion: "La Orden DEF/111/2019 establece que el Observatorio Militar para la Igualdad está adscrito a la Subsecretaría de Defensa, presidido por su titular, con Vicepresidencia en la persona titular de la DIGENPER."
  },
  {
    id: "B2-047",
    temaCodigo: "B2-T07",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Protocolo de Actuación frente al Acoso Sexual y por Razón de Sexo en las FAS (UPA)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas (Resolución 400/38199/2015 y sus actualizaciones), ¿cuáles son las funciones de las Unidades de Protección frente al Acoso (UPA) y dónde están ubicadas?",
    opciones: [
      "Las UPAs son tribunales militares que imponen directamente penas de prisión.",
      "Existen 5 UPAs (una en la Subsecretaría de Defensa/Órgano Central, una en el EMAD y una en cada uno de los tres Ejércitos: ET, Armada y EA), encargadas de prestar asesoramiento confidencial, canalizar las denuncias (que pueden presentarse directamente sin conducto reglamentario) y realizar el seguimiento y apoyo a la víctima; pero NO instruyen ni sancionan ellas mismas el expediente disciplinario o penal.",
      "Existe una UPA en cada Compañía o Batería de las Fuerzas Armadas.",
      "La denuncia ante la UPA puede ser anónima."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 7 (Protocolo de Actuación frente al Acoso en las FAS) ➔ Unidades de Protección frente al Acoso (UPA)",
    referencia: "Protocolo de actuación frente al acoso sexual y por razón de sexo en las FAS",
    consejoAcademia: "¡Tres datos clave de las UPAs que caen siempre!: 1) Son 5 UPAs (SUBDEF/Órgano Central, EMAD, MAPER del ET, JEPER de la Armada y MAPER del EA). 2) Puedes acudir a la UPA DIRECTAMENTE sin conducto reglamentario (o sí seguirlo, a elección de la víctima). 3) La UPA asesora, protege y canaliza, pero NO es órgano sancionador.",
    justificacion: "El Protocolo frente al acoso en las FAS articula cinco UPAs (Órgano Central, EMAD, ET, Armada y EA) con funciones de información, asesoramiento confidencial y recepción/canalización de denuncias sin exigencia de conducto reglamentario."
  },
  {
    id: "B2-048",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Interesados y Representación (Arts. 3 a 8)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 5 de la Ley 39/2015 del Procedimiento Administrativo Común (LPACAP), ¿para qué actos administrativos se exige ACREDITAR la representación (mientras que para los actos y gestiones de mero trámite se presume aquella representación)?",
    opciones: [
      "Únicamente para pedir información general en un registro.",
      "Para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona (y la falta o insuficiente acreditación de la representación no impedirá que se tenga por realizado el acto si se subsana dentro del plazo de 10 DÍAS).",
      "La representación nunca puede subsanarse una vez presentada la solicitud.",
      "Solo los abogados colegiados pueden ser representantes ante la Administración."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ De los interesados en el procedimiento: Representación (Art. 5)",
    referencia: "Ley 39/2015 (LPACAP), Art. 5.3 y 5.6",
    consejoAcademia: "Los 5 actos del Art. 5.3 LPACAP que exigen acreditar representación: 1) Formular solicitudes, 2) Declaraciones responsables o comunicaciones, 3) Interponer recursos, 4) Desistir de acciones, 5) Renunciar a derechos. Para actos de mero trámite SE PRESUME. Y el plazo para subsanar la falta de acreditación es de 10 DÍAS HÁBILES (Art. 5.6).",
    justificacion: "El artículo 5.3 de la Ley 39/2015 exige acreditar la representación para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos, concediendo el art. 5.6 un plazo de 10 días para subsanar el defecto."
  },
  {
    id: "B2-049",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Obligación de Resolver y Silencio Administrativo (Arts. 21 a 25)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DE LA LEY 39/2015! Según el artículo 21 de la Ley 39/2015 (LPACAP), ¿cuál es el plazo máximo en el que debe notificarse la resolución expresa si la norma reguladora del procedimiento NO fija plazo máximo, y qué plazo máximo no podrá exceder salvo que una norma con rango de Ley o de la UE establezca uno mayor?",
    opciones: [
      "El plazo supletorio es de 6 meses y el máximo legal es de 1 año.",
      "El plazo máximo será el fijado por la norma reguladora, que NO podrá exceder de SEIS MESES (salvo norma con rango de Ley o Derecho de la UE); pero cuando las normas reguladoras de los procedimientos NO fijen el plazo máximo, éste será de TRES MESES.",
      "El plazo supletorio es de 1 mes y el máximo de 3 meses.",
      "La Administración no tiene plazo máximo para resolver si hay silencio positivo."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ Obligación de resolver y Silencio Administrativo (Art. 21)",
    referencia: "Ley 39/2015 (LPACAP), Art. 21.2 y 21.3",
    consejoAcademia: "¡La pregunta más fallada del Art. 21 LPACAP!: Tope general para las normas reglamentarias = 6 MESES (Art. 21.2). Plazo SUPLETORIO cuando la norma no dice nada = 3 MESES (Art. 21.3). ¡Recuerda: 6 meses tope / 3 meses si calla la norma!",
    justificacion: "El artículo 21.2 de la Ley 39/2015 dispone que el plazo máximo fijado por la norma reguladora no podrá exceder de 6 meses salvo que una norma con rango de Ley o de Derecho de la UE prevea uno mayor; y el art. 21.3 establece que cuando las normas no fijen plazo máximo, éste será de 3 meses."
  },
  {
    id: "B2-050",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Doble Silencio en el Recurso de Alzada (Art. 24.1)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al artículo 24.1 (párrafo tercero) de la Ley 39/2015 (LPACAP), el sentido del silencio administrativo en los procedimientos de impugnación de actos y disposiciones (recursos) es desestimatorio; pero ¿cuándo se entiende ESTIMADO por silencio positivo un recurso de alzada?",
    opciones: [
      "Nunca; los recursos de alzada tienen siempre silencio negativo sin excepción.",
      "Cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud por el transcurso del plazo (regla del 'doble silencio'), siempre que no se refiera a materias de derecho de petición, dominio o servicio público, medio ambiente o responsabilidad patrimonial.",
      "Siempre que se interponga contra una multa de tráfico.",
      "Cuando transcurran 15 días hábiles desde su presentación."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ Silencio administrativo en procedimientos iniciados a solicitud del interesado (Art. 24)",
    referencia: "Ley 39/2015 (LPACAP), Art. 24.1",
    consejoAcademia: "¡Regla del DOBLE SILENCIO (Art. 24.1 LPACAP)!: Silencio negativo en tu solicitud inicial + interpones Recurso de Alzada y la Administración vuelve a callar durante 3 meses = SILENCIO POSITIVO (Estimado), salvo en las materias excluidas (petición, dominio/servicio público, medio ambiente o responsabilidad patrimonial).",
    justificacion: "El art. 24.1 de la Ley 39/2015 establece que cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud por el transcurso del plazo, se entenderá estimado el mismo si, llegado el plazo de resolución, el órgano administrativo competente no dictase y notificase resolución expresa, siempre que no se refiera a las materias enumeradas en el párrafo segundo."
  },
  {
    id: "B2-051",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Subsanación de Solicitudes y Tramitación Simplificada (Arts. 68 y 96)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según los artículos 68 y 96 de la Ley 39/2015 (LPACAP), ¿qué plazo se concede al interesado para subsanar la falta de requisitos de su solicitud (ampliable hasta cuántos días), y en qué plazo deben resolverse los procedimientos administrativos tramitados de manera SIMPLIFICADA?",
    opciones: [
      "Plazo de subsanación de 15 días; tramitación simplificada en 60 días.",
      "Plazo de subsanación de 10 DÍAS hábiles (ampliable prudencialmente hasta en 5 DÍAS cuando no sean procedimientos selectivos o de concurrencia competitiva); y los procedimientos tramitados de manera simplificada deberán ser resueltos en TREINTA DÍAS (30 días) a contar desde el siguiente al que se notifique el acuerdo de tramitación simplificada.",
      "Plazo de subsanación de 30 días; tramitación simplificada en 3 meses.",
      "En los procesos selectivos de oposición el plazo de subsanación se amplía siempre 15 días."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ Subsanación (Art. 68) y Tramitación Simplificada (Art. 96)",
    referencia: "Ley 39/2015 (LPACAP), Arts. 68.1, 68.2 y 96.6",
    consejoAcademia: "Dos números clave de la LPACAP: 1) Subsanación de solicitud (Art. 68) = 10 días hábiles (ampliables hasta +5 días, PERO nunca ampliables en oposiciones o concurrencia competitiva). 2) Tramitación simplificada (Art. 96.6) = se resuelve en 30 DÍAS.",
    justificacion: "El art. 68 de la Ley 39/2015 fija un plazo de 10 días para subsanar la solicitud (ampliable hasta 5 días salvo en procedimientos selectivos o de concurrencia competitiva). El art. 96.6 dispone que la tramitación simplificada deberá resolverse en 30 días."
  },
  {
    id: "B2-052",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Revisión de Oficio y Declaración de Lesividad (Arts. 106 y 107)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 106 y 107 de la Ley 39/2015 (LPACAP), ¿qué plazo tiene la Administración para declarar la nulidad de pleno derecho (revisión de oficio del Art. 106) frente al plazo para adoptar la declaración de lesividad de actos anulables (Art. 107)?",
    opciones: [
      "4 años para ambos procedimientos.",
      "La revisión de oficio de actos NULOS de pleno derecho (Art. 106) puede iniciarse EN CUALQUIER MOMENTO (previo dictamen favorable del Consejo de Estado) y caduca a los 6 meses si se inicia de oficio; mientras que la declaración de LESIVIDAD de actos favorables ANULABLES (Art. 107) no podrá adoptarse una vez transcurridos CUATRO AÑOS (4 años) desde que se dictó el acto administrativo (y el procedimiento caduca a los 6 meses).",
      "La declaración de lesividad puede hacerse en cualquier momento sin límite de años.",
      "Los errores materiales o de hecho (Art. 109.2) solo pueden rectificarse durante el primer mes."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ Revisión de oficio de los actos en vía administrativa (Arts. 106 a 111)",
    referencia: "Ley 39/2015 (LPACAP), Arts. 106, 107 y 109",
    consejoAcademia: "¡Cuadro mental de la Revisión de Oficio (Arts. 106-109 LPACAP)!: 1) Actos NULOS (Art. 106) = EN CUALQUIER MOMENTO (imprescriptible). 2) Declaración de LESIVIDAD de actos favorables ANULABLES (Art. 107) = límite de 4 AÑOS desde que se dictó el acto. 3) Rectificación de errores materiales, de hecho o aritméticos (Art. 109.2) = EN CUALQUIER MOMENTO. 4) Tanto el procedimiento de revisión de oficio (de oficio) como el de lesividad caducan a los 6 MESES.",
    justificacion: "El art. 106 de la Ley 39/2015 permite revisar de oficio actos nulos en cualquier momento, mientras que el art. 107.2 establece que la declaración de lesividad de actos anulables no podrá adoptarse una vez transcurridos cuatro años desde que se dictó el acto."
  },
  {
    id: "B2-053",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Recurso Extraordinario de Revisión (Arts. 125 y 126)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¡SÚPER TRAMPA DE RECURSOS ADMINISTRATIVOS! Según los artículos 125 y 126 de la Ley 39/2015 (LPACAP), contra los actos FIRMES en vía administrativa cabe el Recurso Extraordinario de Revisión ante el mismo órgano que los dictó; ¿cuáles son sus plazos de interposición y su plazo de resolución?",
    opciones: [
      "Se interpone siempre en 1 mes y se resuelve en 1 mes.",
      "Cuando se trate de error de hecho que resulte de los propios documentos incorporados al expediente (causa 1ª), dentro de los CUATRO AÑOS (4 años) siguientes a la notificación de la resolución; en el resto de causas (documentos esenciales posteriores, documentos/testimonios declarados falsos por sentencia firme, o prevaricación/cohecho), el plazo será de TRES MESES (3 meses) desde el conocimiento de los documentos o desde que la sentencia judicial quedó firme; y el plazo para resolverlo es de TRES MESES.",
      "Se interpone ante el superior jerárquico en el plazo de 2 años.",
      "Si pasan 3 meses sin resolverse, el silencio es estimatorio."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ Recurso Extraordinario de Revisión (Arts. 125 y 126)",
    referencia: "Ley 39/2015 (LPACAP), Arts. 125.2 y 126.3",
    consejoAcademia: "Domina los 3 recursos de la Ley 39/2015: 1) ALZADA (actos que no agotan vía) = interponer 1 mes / resolver 3 meses. 2) REPOSICIÓN (actos que agotan vía) = interponer 1 mes / resolver 1 mes. 3) EXTRAORDINARIO DE REVISIÓN (actos FIRMES) = interponer 4 AÑOS (si es error de hecho de los documentos del expediente) o 3 MESES (resto de causas: documento nuevo, falsedad, cohecho) / resolver 3 MESES (con silencio desestimatorio).",
    justificacion: "El artículo 125.2 de la Ley 39/2015 fija un plazo de 4 años para la causa primera (error de hecho resultante de los documentos del expediente) y de 3 meses para las demás causas. El artículo 126.3 fija un plazo de 3 meses para resolver y notificar, entendiéndose desestimado por silencio si transcurre dicho plazo."
  },
  {
    id: "B2-054",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 Carrera Militar - Excedencia Voluntaria y Reserva (Arts. 110 y 113)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 110 de la Ley 39/2007 de la Carrera Militar, ¿cuál es el tiempo mínimo de permanencia en la situación de excedencia voluntaria por interés particular, y se exige tiempo mínimo en la excedencia por cuidado de familiares o por violencia de género?",
    opciones: [
      "1 año en todos los casos, incluido el cuidado de hijos.",
      "En la excedencia voluntaria por interés particular el tiempo mínimo de permanencia es de DOS AÑOS (2 años) (y requiere haber cumplido el tiempo de servicios mínimos desde la adquisición de la condición de militar de carrera o compromiso inicial); mientras que en la excedencia por cuidado de familiares (hijos hasta 3 años) o por razón de violencia de género NO se exige tiempo mínimo de servicios previos ni de permanencia.",
      "El tiempo mínimo por interés particular es de 5 años.",
      "Los militares de carrera no tienen derecho a excedencia voluntaria."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 Carrera Militar) ➔ Situación de Excedencia (Art. 110)",
    referencia: "Ley 39/2007, Art. 110",
    consejoAcademia: "En la excedencia voluntaria por INTERÉS PARTICULAR (Art. 110.2 Ley 39/2007) la permanencia mínima en excedencia es de 2 AÑOS. En cambio, por cuidado de familiares (hijos hasta 3 años) no hay permanencia mínima y los primeros años computan a efectos de trienios y derechos pasivos.",
    justificacion: "El artículo 110 de la Ley 39/2007 establece un tiempo mínimo de permanencia de 2 años en la excedencia voluntaria por interés particular."
  },
  {
    id: "B2-055",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 Carrera Militar - Consejos Superiores de los Ejércitos (Art. 19)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al artículo 19 de la Ley 39/2007 de la Carrera Militar, ¿qué son los Consejos Superiores del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio y quién los preside?",
    opciones: [
      "Son órganos disciplinarios presididos por el Fiscal Togado.",
      "Son órganos colegiados asesores y consultivos de la persona titular del Ministerio de Defensa y del Jefe de Estado Mayor del ejército respectivo (en materias de personal, ascensos a Oficial General, evaluaciones extraordinarias, etc.), presididos por el Ministro de Defensa o, cuando no asista, por el JEM respectivo.",
      "Son sindicatos de Oficiales Generales.",
      "Están adscritos al Ministerio de Hacienda."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 Carrera Militar) ➔ Consejos Superiores de los Ejércitos (Art. 19)",
    referencia: "Ley 39/2007, Art. 19",
    consejoAcademia: "Los Consejos Superiores de cada Ejército (Art. 19 Ley 39/2007) son órganos colegiados asesores y consultivos del Ministro de Defensa y del JEME/AJEMA/JEMA respectivo (por ejemplo, son oídos en el expediente de separación del servicio o ascensos por elección).",
    justificacion: "El artículo 19 de la Ley 39/2007 define los Consejos Superiores del ET, Armada y EA como órganos colegiados asesores y consultivos del Ministro de Defensa y del Jefe de Estado Mayor del ejército respectivo."
  },
  {
    id: "B2-056",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Reales Ordenanzas para las FAS (RD 96/2009) - De Otras Funciones: Apoyo a Autoridades Civiles (Cap. VI)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 115 a 122 de las Reales Ordenanzas para las FAS (Capítulo VI: De otras funciones), cuando las Fuerzas Armadas actúen en misiones de apoyo a las fuerzas y cuerpos de seguridad o ante catástrofes y emergencias:",
    opciones: [
      "Asumen automáticamente el mando político de la Comunidad Autónoma.",
      "Ajustarán su actuación a la legislación vigente para cada situación, manteniendo siempre su estructura orgánica y cadena de mando militar, y en operaciones de mantenimiento de la paz fomentarán la confianza y el respeto hacia las costumbres locales.",
      "Dejan de estar sujetos a las Reales Ordenanzas y al Régimen Disciplinario.",
      "Pueden actuar por iniciativa propia sin orden superior."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 2 (Reales Ordenanzas para las FAS RD 96/2009) ➔ Capítulo VI: De otras funciones (Arts. 115 a 129)",
    referencia: "Real Decreto 96/2009 (RROO), Arts. 115 a 122",
    consejoAcademia: "El Capítulo VI de las Reales Ordenanzas cierra el texto (Arts. 115 a 129) regulando las actuaciones de las FAS en apoyo al bienestar de los ciudadanos, catástrofes (UME), colaboración con FCSE y misiones de paz.",
    justificacion: "Los artículos 115 a 129 del RD 96/2009 regulan la actuación del militar en misiones de apoyo a autoridades civiles, emergencias y operaciones de paz."
  },
  {
    id: "B2-057",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 9/2011 Derechos y Deberes - Prevención de Riesgos Laborales y Protección de Datos (Arts. 20 y 26)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme a los artículos 6, 12 y 26 de la Ley Orgánica 9/2011 de derechos y deberes de los miembros de las FAS, respecto a la libertad de expresión e información y la protección de la salud:",
    opciones: [
      "El militar puede difundir libremente planes de operaciones clasificadas en redes sociales.",
      "El militar tiene derecho a la libertad de expresión, pero en los asuntos estrictamente relacionados con el servicio en las FAS estará sujeto a los límites derivados de la DISCIPLINA y al deber de RESERVA sobre materias clasificadas; y tiene derecho a la protección de su salud y a la asistencia sanitaria a través del Sistema Sanitario Militar y del ISFAS.",
      "El militar carece de libertad de expresión incluso fuera de servicio.",
      "El militar no tiene derecho a reconocimiento médico periódico."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 3 (LO 9/2011 Derechos y Deberes) ➔ Libertad de expresión (Art. 12) y Protección de la salud (Art. 26)",
    referencia: "Ley Orgánica 9/2011, Arts. 12 y 26",
    consejoAcademia: "En el Art. 12 de la LO 9/2011 (Libertad de expresión e información): En asuntos del servicio está limitada por la DISCIPLINA, la NEUTRALIDAD POLÍTICA/SINDICAL y el DEBER DE RESERVA.",
    justificacion: "El artículo 12 de la LO 9/2011 reconoce la libertad de expresión e información del militar con los límites derivados de la disciplina, neutralidad y deber de reserva; y el artículo 26 garantiza la protección de la salud y asistencia sanitaria."
  },
  {
    id: "B2-058",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Procedimiento por Faltas Leves (Arts. 46 y 47)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según los artículos 46 y 47 de la Ley Orgánica 8/2014, en el procedimiento preferentemente oral para la imposición de sanciones por FALTAS LEVES, ¿qué trámites son obligatorios y qué contenido debe tener la resolución sancionadora?",
    opciones: [
      "No es necesario escuchar al interesado ni notificar por escrito.",
      "El procedimiento será preferentemente ORAL, en el que la autoridad o mando verificará la exactitud de los hechos, OIRÁ AL PRESUNTO INFRACTOR en relación con los mismos (informándole de su derecho a no declarar contra sí mismo y a asistencia si lo desea), comprobará si están tipificados como falta leve y dictará resolución POR ESCRITO expresando los hechos, el precepto infringido, la sanción y los recursos procedentes.",
      "Requiere el nombramiento de Instructor y Secretario del Cuerpo Jurídico Militar durante 6 meses.",
      "La resolución de falta leve solo se comunica verbalmente."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Procedimiento para faltas leves (Arts. 46 y 47)",
    referencia: "Ley Orgánica 8/2014, Arts. 46 y 47",
    consejoAcademia: "¡Cuidado con la trampa del Art. 46-47 LO 8/2014!: En faltas leves la tramitación es preferentemente ORAL (audiencia al interesado, sin Instructor ni Secretario), pero la RESOLUCIÓN SANCIONADORA se notifica SIEMPRE POR ESCRITO (Art. 47) indicando hechos, artículo, sanción y recurso.",
    justificacion: "Los artículos 46 y 47 de la LO 8/2014 disponen que el procedimiento por faltas leves será preferentemente oral (con trámite de audiencia obligatorio al interesado), pero la resolución sancionadora será siempre escrita y motivada."
  },
  {
    id: "B2-059",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Reiteración de Faltas Leves = Falta Grave (Art. 7.36)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¡SÚPER TRAMPA DE TIPIFICACIÓN DISCIPLINARIA! Según el artículo 7.36 de la Ley Orgánica 8/2014, ¿cuándo constituye una FALTA GRAVE la acumulación de sanciones previas por falta leve?",
    opciones: [
      "Cuando se cometa una segunda falta leve en un mismo mes.",
      "Cometer falta leve teniendo ANOTADAS Y NO CANCELADAS al menos TRES FALTAS LEVES sancionadas con ARRESTO (es decir, sería la cuarta falta leve tras tres arrestos leves vivos), o bien DOS FALTAS GRAVES sin cancelar cuando se comete una tercera grave para pasar a muy grave (Art. 8.18).",
      "Tener dos reprensiones anotadas en la hoja de servicios.",
      "La acumulación de faltas leves nunca puede convertirse en falta grave."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Faltas graves y muy graves por acumulación (Arts. 7.36 y 8.18)",
    referencia: "Ley Orgánica 8/2014, Arts. 7.36 y 8.18",
    consejoAcademia: "¡Apunta este doblete de oro de la LO 8/2014 que cae todos los años!: 1) Para que una falta LEVE se convierta en GRAVE (Art. 7.36) hace falta tener anotadas y no canceladas AL MENOS 3 FALTAS LEVES SANCIONADAS CON ARRESTO (¡si fueron sancionadas con reprensión o económica NO cuentan!). 2) Para que una falta GRAVE se convierta en MUY GRAVE (Art. 8.18) hace falta tener anotadas y no canceladas AL MENOS 2 FALTAS GRAVES.",
    justificacion: "El art. 7.36 de la LO 8/2014 tipifica como falta grave cometer falta leve teniendo anotadas y no canceladas al menos tres faltas leves sancionadas con arresto. El art. 8.18 tipifica como falta muy grave cometer una falta grave teniendo anotadas y no canceladas dos faltas graves."
  },
  {
    id: "B2-060",
    temaCodigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "RD 176/2014 Iniciativas y Quejas - Informe Anual y Registro",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Conforme al artículo 12 del Real Decreto 176/2014 de iniciativas y quejas, ¿a qué órganos se remite anualmente el informe estadístico con el análisis de las iniciativas y quejas planteadas en las Fuerzas Armadas?",
    opciones: [
      "Al Tribunal Constitucional y al Banco de España.",
      "Los Mandos o Jefaturas de Personal remiten sus informes a la Subsecretaría de Defensa, y se traslada información estadística anual al Consejo de Personal de las FAS (COPERFAS) y al Observatorio de la Vida Militar.",
      "A la OTAN y a la OSCE.",
      "No se elabora ningún informe estadístico anual."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 5 (Iniciativas y Quejas RD 176/2014) ➔ Seguimiento e Informes (Art. 12)",
    referencia: "Real Decreto 176/2014, Art. 12",
    consejoAcademia: "Las estadísticas anuales de Iniciativas y Quejas (RD 176/2014) se centralizan en la Subsecretaría de Defensa y se dan a conocer al COPERFAS y al Observatorio de la Vida Militar.",
    justificacion: "El artículo 12 del RD 176/2014 regula el seguimiento estadístico anual de las iniciativas y quejas y su remisión a través de la Subsecretaría de Defensa al COPERFAS y al Observatorio de la Vida Militar."
  },
  {
    id: "B2-061",
    temaCodigo: "B2-T07",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Protocolo Frente al Acoso en las FAS - Medidas Cautelares y Confidencialidad",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En el marco del Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas, ¿qué principios rigen todas las actuaciones desde el momento en que se presenta una comunicación o denuncia ante la UPA o la cadena de mando?",
    opciones: [
      "Publicidad en la orden diaria de la unidad y careo inmediato entre las partes.",
      "Celeridad, confidencialidad, sigilo, respeto a la dignidad e intimidad de las personas afectadas, protección de la víctima frente a posibles represalias y adopción de medidas preventivas o cautelares para evitar que compartan dependencia o relación jerárquica directa.",
      "Suspensión automática de empleo y sueldo de toda la unidad.",
      "Obligación de la víctima de pedir la baja en las Fuerzas Armadas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 7 (Protocolo de Actuación frente al Acoso en las FAS) ➔ Garantías del procedimiento",
    referencia: "Protocolo de actuación frente al acoso sexual y por razón de sexo en las FAS",
    consejoAcademia: "Palabras clave del Protocolo UPA: Confidencialidad, celeridad, prohibición de represalias y separación cautelar para proteger a la víctima.",
    justificacion: "El Protocolo frente al acoso en las FAS garantiza la confidencialidad, celeridad, indemnidad frente a represalias y la adopción inmediata de medidas preventivas para proteger a la víctima."
  },

  // =========================================================================
  // EXPANSIÓN V4 — LOTE 3: BLOQUE 3 SEGURIDAD NACIONAL, PDC-01 Y OO.II. (B3-014 a B3-045)
  // =========================================================================
  {
    id: "B3-014",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional - Ámbitos de Especial Interés (Art. 10)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¡TRAMPA FRECUENTE EN LEY 36/2015! No confundas los 3 'Componentes Fundamentales' (Art. 9) con los 'Ámbitos de especial interés' de la Seguridad Nacional (Art. 10). ¿Cuáles de los siguientes señala el artículo 10 de la Ley 36/2015 como ámbitos de especial interés?",
    opciones: [
      "Defensa Nacional, Seguridad Pública y Acción Exterior.",
      "La ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la seguridad del espacio aéreo y ultraterrestre, la seguridad energética, la seguridad sanitaria y la preservación del medio ambiente.",
      "El fútbol profesional, el turismo y la hostelería.",
      "Exclusivamente la defensa terrestre y naval."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 de Seguridad Nacional) ➔ Arts. 9 y 10",
    referencia: "Ley 36/2015, Arts. 9 y 10",
    consejoAcademia: "¡El cruce favorito del tribunal en el Tema 1 del Bloque 3!: Art. 9 (3 Componentes Fundamentales) = Defensa Nacional, Seguridad Pública y Acción Exterior. Art. 10 (7 Ámbitos de especial interés) = Ciberseguridad, Económica/Financiera, Marítima, Espacio Aéreo y Ultraterrestre, Energética, Sanitaria y Medio Ambiente.",
    justificacion: "El artículo 10 de la Ley 36/2015 enumera como ámbitos de especial interés de la Seguridad Nacional la ciberseguridad, la seguridad económica y financiera, la seguridad marítima, la del espacio aéreo y ultraterrestre, la energética, la sanitaria y la preservación del medio ambiente."
  },
  {
    id: "B3-015",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional - El Departamento de Seguridad Nacional (DSN) (Art. 20)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme al artículo 20 de la Ley 36/2015 de Seguridad Nacional, ¿qué es el Departamento de Seguridad Nacional (DSN), dónde se encuadra y quién es el Secretario Técnico del Consejo de Seguridad Nacional?",
    opciones: [
      "Es una Dirección General del Ministerio del Interior.",
      "Es el órgano de trabajo permanente del Consejo de Seguridad Nacional y de sus órganos de apoyo, así como de asesoramiento directo al Presidente del Gobierno en materia de Seguridad Nacional (integrado en el Gabinete de la Presidencia del Gobierno en Moncloa), y su Director ejerce las funciones de Secretario Técnico del Consejo de Seguridad Nacional.",
      "Es un mando militar subordinado al JEME.",
      "Depende del Senado y su sede está en Toledo."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 de Seguridad Nacional) ➔ Órganos competentes y DSN (Art. 20)",
    referencia: "Ley 36/2015, Art. 20.3 y Art. 21.3",
    consejoAcademia: "Datos clave del DSN (Art. 20 Ley 36/2015): 1) Está en la Presidencia del Gobierno (Moncloa). 2) Es el órgano de trabajo permanente del Consejo de Seguridad Nacional (CSN). 3) El Director del DSN actúa como Secretario Técnico del CSN. 4) Gestiona el Centro de Situación del DSN para seguimiento de crisis 24/7.",
    justificacion: "El artículo 20.3 de la Ley 36/2015 define al Departamento de Seguridad Nacional como el órgano de trabajo permanente del Consejo de Seguridad Nacional y de asistencia inmediata al Presidente del Gobierno."
  },
  {
    id: "B3-016",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional - Presidencia del Consejo de Seguridad Nacional (Art. 21)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 21 de la Ley 36/2015, ¿quién preside el Consejo de Seguridad Nacional cuando NO asiste Su Majestad el Rey, y quién informa al Rey al menos una vez al año sobre el grado de desarrollo de las previsiones de esta ley?",
    opciones: [
      "Lo preside el JEMAD; e informa al Rey el Ministro de Asuntos Exteriores.",
      "El Consejo de Seguridad Nacional es presidido por el Presidente del Gobierno, excepto cuando Su Majestad el Rey asista a sus reuniones, en cuyo caso le corresponderá presidirlo; y el Gobierno, a través de su Presidente, informará al Rey al menos una vez al año.",
      "Lo preside siempre el Presidente del Congreso.",
      "El Rey no puede asistir nunca al Consejo de Seguridad Nacional."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 de Seguridad Nacional) ➔ El Consejo de Seguridad Nacional (Arts. 14 y 21)",
    referencia: "Ley 36/2015, Arts. 14 y 21.2",
    consejoAcademia: "Igual que ocurre en el Consejo de Ministros (Art. 62.g CE) y en el Consejo de Defensa Nacional (LO 5/2005): el Consejo de Seguridad Nacional lo preside habitualmente el Presidente del Gobierno, salvo cuando asiste S.M. el Rey, en cuyo caso lo preside el Rey.",
    justificacion: "Los artículos 14 y 21 de la Ley 36/2015 disponen que el Consejo de Seguridad Nacional será presidido por el Presidente del Gobierno, salvo cuando asista S.M. el Rey, a quien el Presidente informará al menos una vez al año."
  },
  {
    id: "B3-017",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Estrategia de Seguridad Nacional 2021 (RD 1150/2021) - Comités Especializados del CSN",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "En el marco del Sistema de Seguridad Nacional (Ley 36/2015 y ESN 2021), ¿qué son los Comités Especializados (como el Comité de Situación, el Consejo Nacional de Ciberseguridad o el Consejo Nacional de Seguridad Marítima) y quién los crea?",
    opciones: [
      "Son tribunales militares creados por el Ministerio de Justicia.",
      "Son órganos de apoyo al Consejo de Seguridad Nacional en los distintos ámbitos de actuación; se crean por Acuerdo del propio Consejo de Seguridad Nacional y ejercen funciones de apoyo y coordinación interministerial (destacando el Comité de Situación para la dirección y coordinación de la gestión de crisis).",
      "Son comisiones parlamentarias del Senado.",
      "Están integrados exclusivamente por alcaldes."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 y ESN 2021) ➔ Órganos de apoyo al Consejo de Seguridad Nacional",
    referencia: "Ley 36/2015 (Art. 21.4) y RD 1150/2021",
    consejoAcademia: "Recuerda que el Comité Especializado único para la gestión de crisis de todo el Sistema de Seguridad Nacional es el COMITÉ DE SITUACIÓN (apoyado por el DSN).",
    justificacion: "El artículo 21.4 de la Ley 36/2015 prevé que el Consejo de Seguridad Nacional cuente con Comités Especializados como órganos de apoyo en los distintos ámbitos de la Seguridad Nacional y para la gestión de crisis (Comité de Situación)."
  },
  {
    id: "B3-018",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 - Funciones Conjuntas (Joint Functions)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Doctrina para el Empleo de las FAS (PDC-01), ¿qué son las 'Funciones Conjuntas' y cuáles integran el planeamiento y ejecución de las operaciones militares?",
    opciones: [
      "Son las escalas salariales del personal civil.",
      "Son el conjunto de capacidades y actividades relacionadas que permiten al comandante sincronizar e integrar la acción conjunta: Mando y Control (C2), Inteligencia, Maniobra, Fuegos, Información, Sostenimiento (Logística/Sanidad), Protección y Cooperación Cívico-Militar (CIMIC).",
      "Son únicamente el rancho y el vestuario de campaña.",
      "Solo se aplican en tiempo de paz en los acuartelamientos."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 2 (Doctrina para la acción conjunta PDC-01) ➔ Las Funciones Conjuntas",
    referencia: "Publicación Doctrinal Conjunta PDC-01 (A)",
    consejoAcademia: "Quédate con las Funciones Conjuntas de la PDC-01: Mando y Control (la función nuclear integradora), Inteligencia, Maniobra, Fuegos, Información, Sostenimiento, Protección y CIMIC.",
    justificacion: "La PDC-01 agrupa las capacidades operativas en Funciones Conjuntas (Mando y Control, Inteligencia, Maniobra, Fuegos, Información, Sostenimiento, Protección y CIMIC) para facilitar al Comandante Operacional el planeamiento y la conducción de las operaciones."
  },
  {
    id: "B3-019",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 - El Entorno Operativo y la Zona Gris / Amenazas Híbridas",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a la Doctrina PDC-01, ¿cómo se denomina el espacio del continuo de la competición (entre la paz y el conflicto armado abierto) donde adversarios estatales o no estatales emplean estrategias híbridas combinando medios militares, desinformación, ciberataques y coerción económica sin superar el umbral que desencadenaría una respuesta militar convencional?",
    opciones: [
      "Guerra nuclear total.",
      "La 'Zona Gris' (en el marco del continuo de las relaciones internacionales: cooperación, confrontación en zona gris y conflicto armado), donde operan las amenazas híbridas.",
      "Estado de alarma municipal.",
      "Neutralidad desmilitarizada."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 2 (Doctrina para la acción conjunta PDC-01) ➔ El Entorno Operativo y el Continuo de la Competición",
    referencia: "Publicación Doctrinal Conjunta PDC-01 (A)",
    consejoAcademia: "¡Término estrella en los exámenes recientes (2023-2025) sobre PDC-01 y ESN 2021!: La 'ZONA GRIS' es esa franja intermedia entre la Paz/Cooperación y la Guerra abierta donde el adversario usa estrategias HÍBRIDAS (desinformación, ciberataques, instrumentalización de flujos migratorios) por debajo del umbral del Art. 5 OTAN.",
    justificacion: "Tanto la PDC-01 como la ESN 2021 destacan la actuación de amenazas híbridas en la denominada 'Zona Gris' del conflicto, por debajo del umbral del conflicto armado tradicional."
  },
  {
    id: "B3-020",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 - Principios Operativos Fundamentales",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según la Doctrina para el Empleo de las FAS (PDC-01), ¿cuáles son los principios fundamentales que guían el empleo de la Fuerza Conjunta en las operaciones militares?",
    opciones: [
      "Improvisación, dispersión de esfuerzos y pasividad.",
      "Definición del objetivo (propósito claro), unidad de esfuerzo, iniciativa, libertad de acción, concentración del esfuerzo (economía de medios), sorpresa, seguridad, flexibilidad, moral y legitimidad.",
      "Rigidez absoluta y prohibición de cooperar con actores civiles.",
      "Actuar únicamente en un solo dominio físico a la vez."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 2 (Doctrina para la acción conjunta PDC-01) ➔ Principios del empleo de las FAS",
    referencia: "Publicación Doctrinal Conjunta PDC-01 (A)",
    consejoAcademia: "En PDC-01, los principios clásicos del arte operacional siempre parten de: Objetivo definido, Unidad de esfuerzo, Libertad de acción, Iniciativa y Legitimidad.",
    justificacion: "La PDC-01 recoge como principios rectores de las operaciones la definición del objetivo, unidad de esfuerzo, libertad de acción, iniciativa, concentración/economía de fuerzas, sorpresa, seguridad y legitimidad."
  },
  {
    id: "B3-021",
    temaCodigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "ONU - Origen, Carta de San Francisco y los 6 Órganos Principales (Art. 7)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿En qué fecha y ciudad se firmó la Carta de las Naciones Unidas (y cuándo entró en vigor), cuáles son los 6 órganos principales establecidos en su artículo 7, y cuál de ellos suspendió sus operaciones en 1994?",
    opciones: [
      "Se firmó en Ginebra en 1919; tiene 4 órganos principales.",
      "Se firmó el 26 de junio de 1945 en San Francisco y entró en vigor el 24 de octubre de 1945; sus 6 órganos principales son: Asamblea General, Consejo de Seguridad, Consejo Económico y Social (ECOSOC), Consejo de Administración Fiduciaria (que suspendió sus actividades el 1 de noviembre de 1994 tras la independencia de Palaos), Corte Internacional de Justicia y Secretaría General.",
      "Se firmó en Washington en 1949; el órgano que suspendió sus actividades fue el ECOSOC.",
      "Se firmó en París en 1948; cuenta con 10 órganos principales."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 3 (Organización de las Naciones Unidas ONU) ➔ Carta de la ONU y Órganos Principales (Art. 7)",
    referencia: "Carta de las Naciones Unidas (1945), Art. 7",
    consejoAcademia: "¡Tres datos favoritos del tribunal sobre la ONU!: 1) Firma = 26 junio 1945 en San Francisco (50 países + Polonia = 51 fundadores). Entrada en vigor = 24 octubre 1945 (Día de la ONU). 2) Son 6 órganos principales (Art. 7). 3) El Consejo de Administración Fiduciaria suspendió su funcionamiento en 1994 (con la independencia de Palaos).",
    justificacion: "La Carta de la ONU se firmó en San Francisco el 26 de junio de 1945 y entró en vigor el 24 de octubre de 1945. Su artículo 7 establece los 6 órganos principales, habiendo suspendido sus operaciones el Consejo de Administración Fiduciaria en 1994."
  },
  {
    id: "B3-022",
    temaCodigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "ONU - ECOSOC, Corte Internacional de Justicia y Secretaría General",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡CRUCE DE NÚMEROS EN LA ONU! ¿Cuántos miembros integran el Consejo Económico y Social (ECOSOC) y por cuántos años son elegidos; cuántos magistrados componen la Corte Internacional de Justicia (CIJ) y cuánto dura su mandato; y quién nombra al Secretario General de la ONU?",
    opciones: [
      "ECOSOC: 15 miembros por 2 años; CIJ: 12 jueces por 5 años.",
      "El ECOSOC está integrado por 54 MIEMBROS elegidos por la Asamblea General por periodos de 3 AÑOS; la Corte Internacional de Justicia (La Haya) se compone de 15 MAGISTRADOS elegidos por 9 AÑOS (por la Asamblea General y el Consejo de Seguridad); y el Secretario General es nombrado por la Asamblea General a recomendación del Consejo de Seguridad (por un mandato de 5 años renovable).",
      "El ECOSOC tiene 193 miembros y la CIJ 27 jueces.",
      "El Secretario General lo elige la Corte Internacional de Justicia por 9 años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 3 (Organización de las Naciones Unidas ONU) ➔ ECOSOC, CIJ y Secretaría General",
    referencia: "Carta de las Naciones Unidas, Arts. 61, 92 y 97",
    consejoAcademia: "¡Tabla numérica de los órganos de la ONU para clavar el test!: 1) Asamblea General = 193 Estados (1 voto cada uno; mayoría de 2/3 para cuestiones importantes). 2) Consejo de Seguridad = 15 miembros (5 permanentes con veto + 10 por 2 AÑOS; mayoría de 9 votos). 3) ECOSOC = 54 miembros por 3 AÑOS. 4) Corte Internacional de Justicia (La Haya) = 15 jueces por 9 AÑOS. 5) Secretario General (actualmente António Guterres) = mandato de 5 AÑOS.",
    justificacion: "Según la Carta de la ONU y el Estatuto de la CIJ, el ECOSOC cuenta con 54 miembros por 3 años (Art. 61), la CIJ con 15 magistrados por 9 años con sede en La Haya, y el Secretario General es nombrado por la Asamblea General a recomendación del Consejo de Seguridad (Art. 97)."
  },
  {
    id: "B3-023",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OTAN - El Consejo del Atlántico Norte (NAC), el Comité Militar y el Secretario General",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "En la estructura civil y militar de la OTAN, ¿cuál es el máximo órgano de decisión política (el único creado expresamente en el artículo 9 del Tratado de Washington de 1949), cómo adopta sus decisiones, cuál es la máxima autoridad militar de la Alianza y quién asumió el cargo de Secretario General de la OTAN en octubre de 2024?",
    opciones: [
      "El Parlamento de la OTAN; decide por mayoría simple; el mando militar es la Comisión Europea.",
      "El Consejo del Atlántico Norte (NAC, con sede en Bruselas) es el máximo órgano de decisión política y el único establecido por el Art. 9 del Tratado de Washington, adoptando todas sus decisiones por UNANIMIDAD / CONSENSO; la máxima autoridad militar asesora del NAC es el Comité Militar (MC, integrado por los JEMAD de los países aliados); y el Secretario General desde octubre de 2024 es Mark Rutte (sucediendo a Jens Stoltenberg).",
      "El máximo órgano político es el SHAPE en Mons.",
      "El Comité Militar está integrado por los Ministros de Economía."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 4 (OTAN) ➔ Estructura Política y Militar (NAC y Comité Militar)",
    referencia: "Tratado del Atlántico Norte (Art. 9) y Estructura OTAN 2024/2025",
    consejoAcademia: "¡Tres preguntas de examen en una sobre la OTAN!: 1) El único órgano citado en el Tratado de Washington (Art. 9) es el CONSEJO DEL ATLÁNTICO NORTE (NAC), que decide siempre por CONSENSO y lo preside el Secretario General (Mark Rutte desde oct. 2024). 2) La máxima autoridad MILITAR colegiada es el COMITÉ MILITAR (MC), formado por los JEMAD (MILREP). 3) Debajo del Comité Militar están los 2 Mandos Estratégicos: ACO (SACEUR, en SHAPE Mons) y ACT (SACT, en Norfolk).",
    justificacion: "El Consejo del Atlántico Norte (NAC) es el órgano supremo de decisión política de la OTAN previsto en el art. 9 del Tratado de Washington y decide por consenso; el Comité Militar es la máxima autoridad militar bajo el NAC."
  },
  {
    id: "B3-024",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OTAN - Concepto Estratégico de Madrid 2022 y Mandos Conjuntos (JFC)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el Concepto Estratégico de la OTAN aprobado en la Cumbre de Madrid de junio de 2022, ¿cuáles son las TRES TAREAS FUNDAMENTALES (Core Tasks) de la Alianza, y cuáles son los tres Mandos de Fuerzas Conjuntas (JFC) subordinados al Mando Aliado de Operaciones (ACO)?",
    opciones: [
      "Comercio libre, unión monetaria y control aduanero.",
      "Las 3 tareas fundamentales son: 1) Disuasión y Defensa, 2) Prevención y Gestión de Crisis, y 3) Seguridad Cooperativa; y los tres Mandos de Fuerzas Conjuntas (JFC) bajo ACO son: JFC Brunssum (Países Bajos), JFC Nápoles (Italia) y JFC Norfolk (EE.UU.), además de los mandos de componente terrestre (LANDCOM en Esmirna), marítimo (MARCOM en Northwood) y aéreo (AIRCOM en Ramstein).",
      "Solo tiene una tarea fundamental y un único mando en París.",
      "Los tres JFC están en Madrid, Roma y Berlín."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 4 (OTAN) ➔ Concepto Estratégico de Madrid 2022 y Estructura de Mandos (NCS)",
    referencia: "Concepto Estratégico de la OTAN (Cumbre de Madrid 2022) y Estructura ACO",
    consejoAcademia: "¡Ojo que la Cumbre de Madrid 2022 cae muchísimo en España!: 1) Las 3 Tareas Fundamentales (Core Tasks) de la OTAN son: Disuasión y Defensa + Prevención y Gestión de Crisis + Seguridad Cooperativa. 2) Los 3 JFC (Mandos de Fuerzas Conjuntas) son: Brunssum (Países Bajos), Nápoles (Italia) y Norfolk (EE.UU.). 3) Los 3 Mandos de Componente son: LANDCOM (Esmirna/Izmir, Turquía), MARCOM (Northwood, Reino Unido) y AIRCOM (Ramstein, Alemania).",
    justificacion: "El Concepto Estratégico de Madrid 2022 establece como tres tareas fundamentales de la OTAN la Disuasión y Defensa, la Prevención y Gestión de Crisis y la Seguridad Cooperativa. Bajo ACO operan los tres JFC (Brunssum, Nápoles y Norfolk) y los tres mandos componentes (LANDCOM, MARCOM y AIRCOM)."
  },
  {
    id: "B3-025",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OSCE - Órganos e Instituciones y sus Sedes (Viena, Praga, Varsovia, La Haya)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DE SEDES EN LA OSCE! En la Organización para la Seguridad y la Cooperación en Europa (OSCE), ¿dónde tienen su sede respectivamente el Secretariado y el Consejo Permanente, la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH/ODIHR), el Alto Comisionado para las Minorías Nacionales y la Asamblea Parlamentaria?",
    opciones: [
      "Todos los órganos de la OSCE tienen su sede en Bruselas.",
      "El Secretariado y el Consejo Permanente están en VIENA (Austria); la Oficina de Instituciones Democráticas y Derechos Humanos (OIDDH) está en VARSOVIA (Polonia); el Alto Comisionado para las Minorías Nacionales está en LA HAYA (Países Bajos); y el Secretariado Internacional de la Asamblea Parlamentaria está en COPENHAGUE (Dinamarca) (con oficina de documentación en Praga).",
      "El Secretariado está en Ginebra y la OIDDH en Berlín.",
      "La OSCE tiene su sede única en Nueva York."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 5 (OSCE) ➔ Estructura, Órganos de Decisión e Instituciones",
    referencia: "Estructura Oficial de la OSCE (Tema 5 Bloque 3)",
    consejoAcademia: "¡Con este mapa de sedes de la OSCE no fallarás ni una sola pregunta del Tema 5!: 1) VIENA = Secretariado General, Consejo Permanente y Foro de Cooperación para la Seguridad. 2) VARSOVIA = OIDDH (Derechos Humanos y observación electoral). 3) LA HAYA = Alto Comisionado para las Minorías Nacionales. 4) COPENHAGUE = Asamblea Parlamentaria de la OSCE.",
    justificacion: "En la estructura de la OSCE, el Secretariado y el Consejo Permanente radican en Viena, la OIDDH en Varsovia, el Alto Comisionado para las Minorías Nacionales en La Haya y la Secretaría de la Asamblea Parlamentaria en Copenhague."
  },
  {
    id: "B3-026",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OSCE - Cumbres, Consejo Ministerial y Presidencia en Ejercicio",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "En la estructura de decisión de la OSCE, ¿cuánto dura el mandato de la 'Presidencia en Ejercicio' (CiO), quién forma la 'Troika' de la OSCE y qué órgano se reúne semanalmente en el Palacio Hofburg de Viena?",
    opciones: [
      "La Presidencia dura 5 años; la Troika son EE.UU., Rusia y China.",
      "La Presidencia en Ejercicio la ostenta durante UN AÑO NATURAL (1 año) el Ministro de Asuntos Exteriores del Estado participante designado; la 'Troika' está formada por el Presidente en ejercicio, el anterior y el siguiente; y el órgano regular de consulta y decisión política que se reúne semanalmente en Viena es el CONSEJO PERMANENTE (junto al Foro de Cooperación para la Seguridad en el ámbito militar).",
      "La Presidencia es vitalicia y el Consejo Permanente se reúne cada 4 años.",
      "El Secretario General de la OSCE se elige por 10 años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 5 (OSCE) ➔ Presidencia en Ejercicio, Troika y Consejo Permanente",
    referencia: "Estructura Oficial de la OSCE",
    consejoAcademia: "Datos clave de la OSCE: 1) Presidencia en Ejercicio = rota cada 1 AÑO NATURAL entre los Ministros de Exteriores (España la ostentó en 2007). 2) Troika = Presidencia anterior + actual + siguiente. 3) Secretario General = nombrado por 3 AÑOS (prorrogable). 4) Consejo Ministerial = se reúne 1 vez al año (salvo años con Cumbre de Jefes de Estado). 5) Consejo Permanente = se reúne semanalmente en Viena.",
    justificacion: "La Presidencia en Ejercicio de la OSCE rota anualmente entre los Estados participantes (siendo asistida por la Troika: presidente anterior, actual y entrante), mientras que el Consejo Permanente es el órgano principal de decisión política regular que se reúne semanalmente en Viena."
  },
  {
    id: "B3-027",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - Tratados Históricos (París, Roma, Maastricht, Lisboa) y Miembros",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En la evolución histórica de la Unión Europea, ¿en qué año y tratado se creó la Unión Europea como tal sobre la estructura de tres pilares, qué tratado de 2007 (en vigor desde el 1 de diciembre de 2009) le dio su arquitectura institucional actual y cuántos Estados miembros tiene hoy la UE?",
    opciones: [
      "En el Tratado de Versalles de 1919; actualmente tiene 32 miembros.",
      "El Tratado de Maastricht (firmado en 1992, en vigor en 1993) creó la Unión Europea y la PESC; el Tratado de Lisboa (firmado en 2007, en vigor en 2009) eliminó la estructura de pilares, dotó de personalidad jurídica única a la UE y consolidó la PCSD; y actualmente la UE cuenta con 27 ESTADOS MIEMBROS (tras la salida del Reino Unido en 2020).",
      "El Tratado de Roma de 1957 creó la PCSD; actualmente tiene 28 miembros.",
      "España fue uno de los 6 países fundadores en el Tratado de París de 1951."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 6 (La Unión Europea) ➔ Evolución histórica y Tratados",
    referencia: "Tratado de la Unión Europea (Maastricht 1992 / Lisboa 2007)",
    consejoAcademia: "Línea temporal de la UE para no fallar nunca: 1951 Tratado de París (CECA: los 6 fundadores: Alemania, Francia, Italia, Bélgica, Países Bajos y Luxemburgo). 1957 Tratados de Roma (CEE y EURATOM). 1986 Ingreso de España y Portugal (1 de enero de 1986; firma del Tratado de Adhesión el 12 de junio de 1985). 1992 Tratado de Maastricht (nace la UE y la PESC). 2007 Tratado de Lisboa (en vigor en 2009: actual TUE y TFUE, PCSD). Miembros actuales = 27.",
    justificacion: "El Tratado de Maastricht (1992) instituyó la Unión Europea y el Tratado de Lisboa (2007, en vigor en 2009) configuró el marco actual del TUE y TFUE con 27 Estados miembros."
  },
  {
    id: "B3-028",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - Alto Representante, COPS, EUMC y EUMS (PCSD)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "En la estructura de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea, ¿cuáles son los tres órganos político-militares permanentes que asisten al Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad y al Consejo, y qué es la 'Brújula Estratégica' (Strategic Compass)?",
    opciones: [
      "El SHAPE, el ACT y la NSPA.",
      "El Comité Político y de Seguridad (COPS/PSC), el Comité Militar de la UE (CMUE/EUMC, compuesto por los JEMAD de los Estados miembros) y el Estado Mayor de la UE (EMUE/EUMS); y la 'Brújula Estratégica' (aprobada en 2022) es el documento estratégico de seguridad y defensa de la UE que prevé, entre otras capacidades, la Capacidad de Despliegue Rápido de la UE (EU RDC de hasta 5.000 efectivos).",
      "El Banco Central Europeo y el Tribunal de Cuentas.",
      "La UE carece de Comité Militar y de Estado Mayor."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 6 (La Unión Europea: PCSD) ➔ Órganos de la PCSD y Brújula Estratégica",
    referencia: "Tratado de la Unión Europea (Arts. 38 y 42) y Brújula Estratégica de la UE (2022)",
    consejoAcademia: "¡Las 3 siglas de la PCSD de la UE que caen en examen!: 1) COPS (Comité Político y de Seguridad: sigue la situación internacional y ejerce el control político y dirección estratégica de las misiones PCSD). 2) CMUE / EUMC (Comité Militar de la UE: máximo órgano militar del Consejo, integrado por los JEMAD). 3) EMUE / EUMS (Estado Mayor de la UE: alerta temprana, evaluación y planeamiento estratégico). Y recuerda la Agencia Europea de Defensa (EDA, sede en Bruselas) y el SATCEN (sede en Torrejón de Ardoz).",
    justificacion: "En la PCSD de la UE destacan el Comité Político y de Seguridad (COPS, art. 38 TUE), el Comité Militar de la UE (CMUE) y el Estado Mayor de la UE (EMUE), junto con la Agencia Europea de Defensa (EDA), el SATCEN y las directrices de la Brújula Estratégica (2022)."
  },
  {
    id: "B3-029",
    temaCodigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "España en Misiones Internacionales - Misiones de la UE en África y Mediterráneo (EUTM, Atalanta)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En relación con la participación de las Fuerzas Armadas españolas en misiones internacionales de la Unión Europea y de la OTAN, señale cuál de las siguientes relaciones Misión - Organización - Zona de Operaciones es CORRECTA:",
    opciones: [
      "Operación Libre Hidalgo (FINUL) — OTAN — Océano Índico.",
      "Operación EUNAVFOR Atalanta — Unión Europea — Lucha contra la piratería en el Océano Índico / Cuerno de África (con Cuartel General Operacional OHQ en la Base Naval de Rota, España); Operación Libre Hidalgo (FINUL) — ONU — Sur del Líbano (Base 'Miguel de Cervantes' en Marjayoun); y Operación Sea Guardian — OTAN — Seguridad marítima en el Mar Mediterráneo.",
      "Operación Atalanta — ONU — Mar Báltico.",
      "Operación Sea Guardian — OSCE — Estrecho de Ormuz."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 7 (España y su participación en Misiones Internacionales) ➔ Misiones en curso",
    referencia: "Misiones Internacionales de las FAS (EMAD / MOPS)",
    consejoAcademia: "¡Empareja siempre Misión + Organización + Lugar!: 1) FINUL / Libre Hidalgo = ONU (Líbano, Base Miguel de Cervantes en Marjayoun). 2) EUNAVFOR Atalanta = UE (Océano Índico/Somalia, OHQ en Rota). 3) EUMAM Ukraine = UE (adiestramiento militar a Ucrania, con TTCC en Toledo). 4) Sea Guardian = OTAN (Mediterráneo). 5) Policía Aérea del Báltico (BAP) y Flanco Este (Letonia y Eslovaquia) = OTAN. 6) Apoyo a Irak (NMI / OIR) = OTAN y Coalición Internacional (Bagdad).",
    justificacion: "España participa en FINUL (Libre Hidalgo) bajo bandera ONU en el Líbano, lidera EUNAVFOR Atalanta de la UE desde el OHQ de Rota en el Índico, y participa en Sea Guardian, BAP y las brigadas multinacionales de la OTAN en Letonia y Eslovaquia."
  },
  {
    id: "B3-030",
    temaCodigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "España en Misiones Internacionales - Despliegue Permanente y Defensa Aérea",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¿En qué país aliado mantiene España desde 2015 una batería de misiles antiaéreos PATRIOT en el marco de la operación 'Active Fence' (Apoyo a Turquía) de la OTAN, y dónde están desplegados los carros de combate Leopardo 2E y VCI Pizarro del Ejército de Tierra dentro de la presencia avanzada reforzada (eFP) de la OTAN en los países bálticos?",
    opciones: [
      "Los Patriot están en Noruega y los Leopardo en Finlandia.",
      "La batería Patriot del Ejército de Tierra está desplegada en la Base Aérea de Incirlik (Adana, TURQUÍA) en misión de defensa antimisiles de la OTAN; y el subgrupo táctico mecanizado/acorazado con Leopardo 2E y Pizarro (junto a una unidad NASAMS) está desplegado en la base de Adazi (LETONIA), además del nuevo despliegue liderado por España en Lešť (ESLOVAQUIA).",
      "Los Patriot están en Chipre y los Leopardo en Rumanía.",
      "España no tiene unidades de artillería antiaérea ni acorazadas en el exterior."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 7 (España y su participación en Misiones Internacionales) ➔ Misiones OTAN del Ejército de Tierra",
    referencia: "Despliegues del Ejército de Tierra en Operaciones en el Exterior (EMAD / MOPS 2024/2025)",
    consejoAcademia: "¡Las 4 grandes misiones terrestres en curso del Ejército de Tierra en el exterior para tu examen!: 1) LÍBANO (ONU - FINUL Libre Hidalgo, Base Miguel de Cervantes en Marjayoun). 2) LETONIA (OTAN - Base de Adazi, con Leopardo 2E, Pizarro y NASAMS). 3) ESLOVAQUIA (OTAN - Base de Lešť, donde España es Nación Marco de la Brigada Multinacional desde 2024). 4) TURQUÍA (OTAN - Base de Incirlik en Adana, batería antiaérea PATRIOT) e IRAK (OTAN NMI / Coalición).",
    justificacion: "El Ejército de Tierra mantiene desplegada una batería Patriot en Incirlik (Adana, Turquía), un contingente mecanizado/acorazado y antiaéreo en Adazi (Letonia) y el liderazgo como Nación Marco de la Brigada Multinacional de la OTAN en Lešť (Eslovaquia)."
  },
  {
    id: "B3-031",
    temaCodigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "ONU - Presencia de España en el Consejo de Seguridad y el Idioma Español",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿Cuáles son los 6 idiomas oficiales de la Organización de las Naciones Unidas (ONU) y en cuántas ocasiones ha formado parte España como miembro no permanente del Consejo de Seguridad de la ONU?",
    opciones: [
      "Inglés, francés y alemán; España nunca ha estado en el Consejo de Seguridad.",
      "Los 6 idiomas oficiales de la ONU son el árabe, el chino, el ESPAÑOL, el francés, el inglés y el ruso; y España ha sido elegida miembro no permanente del Consejo de Seguridad en 5 OCASIONES (1969-1970, 1981-1982, 1993-1994, 2003-2004 y 2015-2016).",
      "Solo el inglés y el francés son oficiales en la ONU.",
      "España es miembro permanente con derecho de veto desde 1955."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 3 (Organización de las Naciones Unidas ONU) ➔ Idiomas oficiales y Relación con España",
    referencia: "Carta de la ONU y Participación de España en el Consejo de Seguridad",
    consejoAcademia: "Dos datos clásicos del Tema 3 del Bloque 3: 1) Los 6 idiomas oficiales de la ONU = Árabe, Chino, Español, Francés, Inglés y Ruso. 2) España ha estado 5 VECES como miembro no permanente del Consejo de Seguridad (la última en el bienio 2015-2016).",
    justificacion: "La ONU cuenta con 6 idiomas oficiales (árabe, chino, español, francés, inglés y ruso), y España ha ocupado un puesto no permanente en el Consejo de Seguridad en cinco bienios (el último en 2015-2016)."
  },
  {
    id: "B3-032",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OTAN - Idiomas Oficiales, Financiación y el Compromiso del 2% del PIB (Cumbre de Gales 2014)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿Cuáles son los dos únicos idiomas oficiales de la OTAN y qué porcentaje del Producto Interior Bruto (PIB) acordaron destinar los aliados al gasto en defensa (y qué porcentaje de ese gasto a equipamiento principal e I+D) en el Compromiso de Inversión en Defensa de Gales (2014) ratificado en Madrid (2022) y Vilna (2023)?",
    opciones: [
      "Inglés, francés y español; un 5% del PIB.",
      "Los dos únicos idiomas oficiales de la OTAN son el INGLÉS y el FRANCÉS; y el compromiso de inversión en defensa fija como suelo al menos el 2% del PIB destinado a defensa, dedicando al menos el 20% de dicho presupuesto de defensa a la adquisición de equipamiento principal e investigación y desarrollo (regla 2% / 20%).",
      "Tiene 6 idiomas oficiales igual que la ONU; un 1% del PIB.",
      "Solo el inglés es idioma oficial de la OTAN."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 4 (OTAN) ➔ Funcionamiento y Compromiso de Inversión en Defensa",
    referencia: "Tratado del Atlántico Norte (Art. 14) y Cumbres de Gales 2014 / Madrid 2022 / Vilna 2023",
    consejoAcademia: "¡No caigas en la trampa de los idiomas!: ONU = 6 idiomas (incluido el español). OSCE = 6 idiomas (incluido el español: inglés, francés, alemán, italiano, ruso y español). OTAN = SOLO 2 idiomas oficiales (INGLÉS y FRANCÉS). Unión Europea = 24 lenguas oficiales.",
    justificacion: "Conforme al artículo 14 del Tratado de Washington, los textos en inglés y francés son igualmente auténticos, siendo los dos únicos idiomas oficiales de la OTAN. Asimismo, el compromiso de inversión aliada establece la regla del 2% del PIB en defensa y el 20% en grandes equipos e I+D."
  },
  {
    id: "B3-033",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "OSCE - Las Tres Dimensiones ('Cestas') de la Seguridad y el Documento de Viena",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En el concepto de seguridad integral y cooperativa de la OSCE, ¿en qué TRES DIMENSIONES (históricamente llamadas 'cestas' desde Helsinki 1975) desarrolla su actividad, y en cuál de ellas se encuadran las Medidas de Fomento de la Confianza y la Seguridad (MFCS) del Documento de Viena?",
    opciones: [
      "Tierra, Mar y Aire.",
      "1ª) Dimensión Político-Militar (donde se encuadran el control de armamentos, el Documento de Viena sobre Medidas de Fomento de la Confianza y la Seguridad - MFCS y el Tratado de Cielos Abiertos); 2ª) Dimensión Económica y Medioambiental; y 3ª) Dimensión Humana (derechos humanos, elecciones libres y Estado de Derecho).",
      "Dimensión Financiera, Dimensión Deportiva y Dimensión Cultural.",
      "Solo actúa en el ámbito de la observación electoral."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 5 (OSCE) ➔ Las tres dimensiones de la seguridad en la OSCE",
    referencia: "Acta Final de Helsinki (1975) y Documento de Viena de la OSCE",
    consejoAcademia: "Recuerda las 3 Dimensiones ('Cestas') de la OSCE: 1) Político-Militar (MFCS / Documento de Viena / Foro de Cooperación para la Seguridad), 2) Económica y Medioambiental, y 3) Humana (OIDDH en Varsovia).",
    justificacion: "La OSCE articula su enfoque integral de la seguridad a través de tres dimensiones: la dimensión político-militar, la dimensión económica y medioambiental y la dimensión humana."
  },
  {
    id: "B3-034",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - Derecho Originario vs Derecho Derivado (Reglamento, Directiva, Decisión - Art. 288 TFUE)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "¡SÚPER TRAMPA DEL TEMA DE LA UNIÓN EUROPEA! Según el artículo 288 del Tratado de Funcionamiento de la Unión Europea (TFUE), dentro del Derecho Derivado de la UE, ¿qué diferencia existe entre un REGLAMENTO, una DIRECTIVA y una RECOMENDACIÓN/DICTAMEN?",
    opciones: [
      "La Directiva es directamente aplicable sin necesidad de transposición y el Reglamento no es obligatorio.",
      "El REGLAMENTO tiene alcance general, es obligatorio en todos sus elementos y es DIRECTAMENTE APLICABLE en cada Estado miembro; la DIRECTIVA obliga al Estado miembro destinatario en cuanto al RESULTADO que deba conseguirse, dejando a las autoridades nacionales la elección de la forma y de los medios (requiere transposición nacional); y las RECOMENDACIONES y los DICTÁMENES NO son vinculantes.",
      "Las Recomendaciones y Dictámenes son leyes obligatorias con sanción penal.",
      "El Reglamento solo obliga a las instituciones europeas pero no a los ciudadanos."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 6 (Unión Europea) ➔ Actos jurídicos de la Unión (Art. 288 TFUE)",
    referencia: "Tratado de Funcionamiento de la Unión Europea (TFUE), Art. 288",
    consejoAcademia: "¡Esta pregunta del Art. 288 TFUE es un clásico absoluto de las oposiciones militares!: 1) REGLAMENTO = alcance general + obligatorio en TODOS sus elementos + DIRECTAMENTE APLICABLE. 2) DIRECTIVA = obliga en cuanto al RESULTADO + necesita TRANSPOSICIÓN por cada Estado. 3) DECISIÓN = obligatoria en todos sus elementos (para sus destinatarios). 4) RECOMENDACIONES y DICTÁMENES = NO vinculantes.",
    justificacion: "El artículo 288 del TFUE define los actos jurídicos de la Unión: el reglamento (alcance general, obligatorio en todos sus elementos y directamente aplicable), la directiva (obliga en cuanto al resultado dejando forma y medios al Estado), la decisión (obligatoria en todos sus elementos) y las recomendaciones y dictámenes (no vinculantes)."
  },
  {
    id: "B3-035",
    temaCodigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "España en Misiones Internacionales - Misiones Históricas (Bosnia UNPROFOR/IFOR/SFOR, Kosovo, Afganistán ISAF)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "En el repaso histórico de las misiones internacionales de las Fuerzas Armadas españolas desde 1989 (Tema 7 del Bloque 3), ¿en qué conflicto de los Balcanes desplegaron los cascos azules españoles bajo la 'Agrupación Málaga' y 'Agrupación Canarias' (UNPROFOR, luego IFOR/SFOR y EUFOR Althea), y cómo se denominó la misión liderada por la OTAN en Afganistán hasta 2014 (seguida por Resolute Support)?",
    opciones: [
      "En la Guerra del Sinaí; y la misión en Afganistán se llamó Atalanta.",
      "En Bosnia-Herzegovina (a partir de 1992 con UNPROFOR de la ONU, pasando en 1995 tras los Acuerdos de Dayton a IFOR/SFOR de la OTAN y desde 2004 a EUFOR Althea de la UE); y en Afganistán la fuerza internacional de asistencia para la seguridad bajo mando OTAN se denominó ISAF (con base española en Herat y Qala-i-Naw, provincia de Badghis), seguida de Resolute Support hasta 2021.",
      "En Corea del Sur; y la misión en Afganistán fue UNIFIL.",
      "España nunca participó en misiones en los Balcanes ni en Afganistán."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 7 (España y su participación en Misiones Internacionales) ➔ Misiones realizadas",
    referencia: "Histórico de Misiones Internacionales de las FAS (Tema 7 Bloque 3)",
    consejoAcademia: "Hitos históricos de las misiones españolas: 1) 1989: Angola (UNAVEM I) y Namibia (UNTAG) = las primeras de la ONU. 2) 1991: Kurdistán iraquí ('Provide Comfort' / Alfa Bravo). 3) 1992: Bosnia-Herzegovina (UNPROFOR ➔ IFOR/SFOR ➔ EUFOR Althea). 4) 1999: Kosovo (KFOR). 5) 2002-2021: Afganistán (ISAF / Resolute Support, en Herat y Badghis/Qala-i-Naw). 6) 2006-presente: Líbano (FINUL / Libre Hidalgo). 7) 2008-presente: Océano Índico (EUNAVFOR Atalanta).",
    justificacion: "En Bosnia-Herzegovina las FAS participaron sucesivamente en UNPROFOR (ONU), IFOR/SFOR (OTAN) y EUFOR Althea (UE); y en Afganistán participaron en ISAF y Resolute Support (OTAN) principalmente en Herat y Qala-i-Naw."
  },
  {
    id: "B1-047",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "LO 5/2005 de la Defensa Nacional - Contribución de los Recursos a la Defensa y Guardia Civil (Arts. 22 a 30)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 23 de la Ley Orgánica 5/2005 de la Defensa Nacional, ¿qué es la Guardia Civil y de qué Ministerios depende en el cumplimiento de las misiones de carácter militar que se le encomienden?",
    opciones: [
      "Es un instituto civil que depende únicamente de las Comunidades Autónomas.",
      "Es un Instituto armado de naturaleza militar, dependiente del Ministro del Interior en el desempeño de las funciones que le atribuye la LO 2/1986, y del MINISTRO DE DEFENSA en el cumplimiento de las misiones de carácter militar que se le encomienden y en tiempo de conflicto bélico y durante el estado de sitio.",
      "Forma parte orgánica del Ejército de Tierra en todo momento.",
      "Depende exclusivamente del Ministerio de Justicia."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 2 (Ley Orgánica 5/2005 de la Defensa Nacional) ➔ Guardia Civil en la Defensa Nacional (Art. 23)",
    referencia: "Ley Orgánica 5/2005, Art. 23",
    consejoAcademia: "Doble dependencia de la Guardia Civil (Art. 23 LO 5/2005, Ley 29/2014 y RD 205/2024): Seguridad ciudadana = Ministro del Interior. Misiones de carácter militar, ascensos, situaciones administrativas y en estado de sitio o conflicto bélico = Ministro de Defensa.",
    justificacion: "El artículo 23 de la LO 5/2005 define a la Guardia Civil como un Instituto armado de naturaleza militar que depende del Ministro de Defensa en el cumplimiento de las misiones de carácter militar que se le encomienden."
  },
  {
    id: "B1-048",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 40/2015 LRJSP - Encomienda de Gestión vs Suplencia (Arts. 11 y 13)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 11 y 13 de la Ley 40/2015 (LRJSP), ¿qué diferencia existe entre la 'Encomienda de gestión' y la 'Suplencia', y cuál de ellas NO supone cesión de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, sino la realización de actividades de carácter material o técnico?",
    opciones: [
      "La encomienda de gestión transfiere la titularidad para dictar resoluciones jurídicas.",
      "La 'Encomienda de gestión' (Art. 11) consiste en encargar la realización de actividades de carácter MATERIAL o TÉCNICO a otros órganos o entidades de Derecho Público (NO supone cesión de la titularidad ni de los elementos sustantivos, siendo responsabilidad del órgano encomendante dictar los actos jurídicos, y debe publicarse en el BOE); mientras que la 'Suplencia' (Art. 13) es la sustitución temporal de los titulares de los órganos en casos de vacante, ausencia o enfermedad (y NO requiere publicación en el BOE).",
      "La encomienda de gestión puede hacerse a favor de personas o empresas de Derecho privado.",
      "La suplencia implica cambio definitivo de la competencia del órgano."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 3 (Ley 40/2015 LRJSP) ➔ Encomienda de gestión y Suplencia (Arts. 11 y 13)",
    referencia: "Ley 40/2015 (LRJSP), Arts. 11 y 13",
    consejoAcademia: "¡Resumen de las 5 figuras de los Arts. 9 a 13 de la Ley 40/2015 sobre ¿cuáles se publican en el BOE?!: 1) Delegación de competencias (Art. 9) = SÍ BOE. 2) Avocación (Art. 10) = NO BOE (se notifica a los interesados). 3) Encomienda de gestión (Art. 11, actividades materiales o técnicas, nunca a sujetos de derecho privado) = SÍ BOE. 4) Delegación de firma (Art. 12) = NO BOE. 5) Suplencia (Art. 13, vacante/ausencia/enfermedad) = NO BOE.",
    justificacion: "El art. 11 de la Ley 40/2015 regula la encomienda de gestión para actividades materiales o técnicas (exigiendo su publicación en el diario oficial), y el art. 13 regula la suplencia temporal de los titulares de los órganos."
  },
  {
    id: "B1-049",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura MINISDEF (RD 205/2024) - DIGENPER, DIGEREM y DIGESAN",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Dentro de la Subsecretaría de Defensa (RD 205/2024), ¿qué Dirección General es la responsable de la planificación y desarrollo de la política de enseñanza militar, reclutamiento, reservistas voluntarios y desarrollo profesional (salidas profesionales de Tropa y Marinería)?",
    opciones: [
      "La Dirección General de Armamento y Material (DGAM).",
      "La Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM), de la que dependen las Subdirecciones Generales de Reclutamiento y Desarrollo Profesional y de Enseñanza Militar.",
      "La Secretaría General Técnica (SEGENTE).",
      "La Dirección General de Infraestructura (DIGENIN)."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 (Estructura Orgánica Básica del MINISDEF RD 205/2024) ➔ La Subsecretaría de Defensa (DIGEREM)",
    referencia: "Real Decreto 205/2024, Art. 11",
    consejoAcademia: "Distingue las 3 'DIGEs' de la SUBDEF en el RD 205/2024: 1) DIGENPER = Gestión de personal ya en filas, retribuciones, igualdad y acción social. 2) DIGEREM = Reclutamiento, Reservistas Voluntarios, Enseñanza Militar y Desarrollo Profesional (SAPROMIL). 3) DIGESAN (con la IGESAN) = Política sanitaria militar y farmacia.",
    justificacion: "El artículo 11 del RD 205/2024 asigna a la Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM), dependiente de la Subsecretaría de Defensa, la planificación y desarrollo de la política de enseñanza militar, reclutamiento y desarrollo profesional."
  },
  {
    id: "B1-050",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "RD 521/2020 Organización Básica de las FAS - El CESEDEN y la Escuela Superior de las FAS (ESFAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al Real Decreto 521/2020 y la Orden DEF/710/2020, ¿qué es el Centro Superior de Estudios de la Defensa Nacional (CESEDEN), de quién depende y qué escuela militar de altos estudios se integra en su estructura?",
    opciones: [
      "Es un centro privado dependiente del Ministerio de Universidades.",
      "Es el órgano principal docente conjunto de las Fuerzas Armadas, dependiente directamente del JEMAD dentro de la estructura del Estado Mayor de la Defensa (EMAD), y en él se integran la Escuela Superior de las Fuerzas Armadas (ESFAS) y el Instituto Español de Estudios Estratégicos (IEEE).",
      "Depende del MADOC del Ejército de Tierra en Granada.",
      "Depende del Ministerio de Asuntos Exteriores."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 5 y 6 (RD 521/2020 y Orden DEF/710/2020 EMAD) ➔ El CESEDEN",
    referencia: "RD 521/2020 y Orden DEF/710/2020",
    consejoAcademia: "En el CESEDEN (que depende del JEMAD en el EMAD) están dos centros muy preguntados: la ESFAS (Escuela Superior de las FAS, donde se imparte el curso de Estado Mayor de las FAS y ascenso a General) y el IEEE (Instituto Español de Estudios Estratégicos).",
    justificacion: "Según el RD 521/2020 y la Orden DEF/710/2020, el CESEDEN se encuadra en el EMAD bajo la dependencia del JEMAD e integra la ESFAS y el IEEE."
  },
  {
    id: "B1-051",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Instrucción 14/2021 ET - La Unidad Militar de Emergencias (UME) y su Relación Operativa",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En la estructura del Ministerio de Defensa (RD 205/2024 y RD 521/2020), ¿de quién depende orgánicamente la Unidad Militar de Emergencias (UME, con Cuartel General en Torrejón de Ardoz) y de quién depende operativamente cuando interviene en una emergencia?",
    opciones: [
      "Depende orgánica y operativamente del Jefe de Estado Mayor del Ejército de Tierra.",
      "Depende orgánicamente de la persona titular del Ministerio de Defensa y operativamente del Jefe de Estado Mayor de la Defensa (JEMAD), constituyendo una fuerza conjunta permanente cuya misión es la intervención en cualquier lugar del territorio nacional y en el exterior en supuestos de grave riesgo, catástrofe, calamidad u otras necesidades públicas.",
      "Depende del Ministerio de Transición Ecológica.",
      "Pertenece a la Fuerza Terrestre (FUTER) de Sevilla."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 1 (Organización) ➔ Tema 4 y 5 (RD 205/2024 y RD 521/2020) ➔ La Unidad Militar de Emergencias (UME)",
    referencia: "Real Decreto 205/2024 (Art. 1.6) y RD 521/2020",
    consejoAcademia: "¡Cuidado con la UME!: Aunque muchos de sus componentes vistan uniforme procedente del ET, la UME NO pertenece al Ejército de Tierra; es una Fuerza Conjunta que depende orgánicamente del MINISTRO DE DEFENSA y operativamente del JEMAD.",
    justificacion: "Conforme al RD 205/2024 y al RD 521/2020, la Unidad Militar de Emergencias (UME) depende orgánicamente de la persona titular del Ministerio de Defensa y operativamente del JEMAD."
  },
  {
    id: "B2-062",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 Carrera Militar - Pase a la Situación de Reserva yEdad de Retiro (Arts. 113 y 114)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Conforme a los artículos 113 y 114 de la Ley 39/2007 de la Carrera Militar, ¿a qué edad pasan a la situación de RESERVA los militares de carrera de la categoría de Tropa y Marinería (Tropa Permanente), y a qué edad se produce el RETIRO por edad de los militares de carrera?",
    opciones: [
      "Pasan a la reserva a los 45 años y al retiro a los 60 años.",
      "Los militares de carrera de la categoría de Tropa y Marinería pasan a la situación de RESERVA al cumplir los 58 AÑOS de edad (Art. 113.4); y el RETIRO por cumplimiento de la edad reglamentaria se declara de oficio al cumplir los 65 AÑOS de edad (Art. 114.2.a).",
      "Los militares de Tropa Permanente nunca pasan a la situación de reserva.",
      "El retiro se produce a los 55 años."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 1 (Ley 39/2007 Carrera Militar) ➔ Reserva y Retiro (Arts. 113 y 114)",
    referencia: "Ley 39/2007, Arts. 113.4 y 114.2.a",
    consejoAcademia: "¡Distinción vital para tu futuro como Militar de Carrera de Tropa (Permanente)!: 1) Si NO eres permanente (CLD), terminas a los 45 años y pasas a Reservista de Especial Disponibilidad (RED, de los 45 a los 65 años). 2) Cuando apruebas esta oposición y eres TROPA PERMANENTE (Militar de Carrera), estás en servicio activo hasta los 58 AÑOS, a los 58 años pasas a la situación de RESERVA (Art. 113.4 Ley 39/2007) y a los 65 AÑOS pasas a RETIRO (Art. 114).",
    justificacion: "El artículo 113.4 de la Ley 39/2007 dispone que los militares de carrera de la categoría de tropa y marinería pasarán en todo caso a la situación de reserva al cumplir los cincuenta y ocho años de edad. El artículo 114.2.a fija los 65 años para el pase a retiro."
  },
  {
    id: "B2-063",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "LO 8/2014 Régimen Disciplinario - Instructor y Secretario en Faltas Graves y Muy Graves (Art. 49)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 49 de la Ley Orgánica 8/2014, en el procedimiento por faltas GRAVES y MUY GRAVES la autoridad competente designará un Instructor y un Secretario; ¿en qué tipo de expediente es obligatorio que el Instructor pertenezca siempre al Cuerpo Jurídico Militar?",
    opciones: [
      "En las faltas leves sancionadas con reprensión.",
      "En los procedimientos por falta MUY GRAVE el Instructor deberá ser siempre un Oficial del CUERPO JURÍDICO MILITAR; mientras que en los procedimientos por falta GRAVE será un Oficial del Cuerpo Jurídico Militar o un Oficial de empleo superior o más antiguo que el expedientado.",
      "El Instructor nunca puede pertenecer al Cuerpo Jurídico Militar.",
      "El Instructor puede ser de inferior empleo que el investigado."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 4 (Régimen Disciplinario LO 8/2014) ➔ Procedimiento para faltas graves y muy graves (Art. 49)",
    referencia: "Ley Orgánica 8/2014, Art. 49.2",
    consejoAcademia: "¡Pregunta muy fina del Art. 49.2 LO 8/2014!: En expediente por falta MUY GRAVE = el Instructor TIENE que ser sí o sí del Cuerpo Jurídico Militar. En expediente por falta GRAVE = puede ser del Cuerpo Jurídico Militar O cualquier Oficial de mayor empleo o más antiguo que el inculpado.",
    justificacion: "El artículo 49.2 de la LO 8/2014 establece que el nombramiento de Instructor en los procedimientos por falta muy grave recaerá siempre en un oficial del Cuerpo Jurídico Militar."
  },
  {
    id: "B2-064",
    temaCodigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2015 LPACAP - Caducidad del Procedimiento por Causa del Interesado (Art. 95)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al artículo 95 de la Ley 39/2015 (LPACAP), en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que se producirá la CADUCIDAD del procedimiento transcurridos:",
    opciones: [
      "10 días hábiles.",
      "TRES MESES (3 meses).",
      "6 meses.",
      "1 año."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 2 (Jurídico-Social) ➔ Tema 8 (Ley 39/2015 LPACAP) ➔ Finalización del procedimiento: Caducidad (Art. 95)",
    referencia: "Ley 39/2015 (LPACAP), Art. 95.1",
    consejoAcademia: "En el Art. 95.1 de la Ley 39/2015: Si el procedimiento iniciado a solicitud del interesado se paraliza por culpa del propio interesado, la Administración le advierte de que pasados 3 MESES sin realizar la actuación requerida se declarará la CADUCIDAD y el archivo del expediente.",
    justificacion: "El artículo 95.1 de la Ley 39/2015 establece que en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad del procedimiento."
  },
  {
    id: "B3-036",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional - Contribución de Recursos y Catálogo (Arts. 27 a 30)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según los artículos 24 y 28 de la Ley 36/2015 de Seguridad Nacional, ¿conlleva la declaración de la 'Situación de Interés para la Seguridad Nacional' la suspensión de los derechos fundamentales de los ciudadanos, y qué órgano aprueba los criterios del Catálogo de Recursos de la Seguridad Nacional?",
    opciones: [
      "Sí, suspende los mismos derechos que el estado de sitio.",
      "NO; la Situación de Interés para la Seguridad Nacional NO conlleva en ningún caso la suspensión de derechos fundamentales y libertades públicas de los ciudadanos (si fuera necesario suspenderlos habría que acudir a los estados del art. 116 CE); y el Consejo de Seguridad Nacional coordina los criterios del Catálogo de Recursos de la Seguridad Nacional.",
      "La Situación de Interés la declara el Alcalde de cada municipio.",
      "Permite disolver las Cortes Generales."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 1 (Ley 36/2015 de Seguridad Nacional) ➔ Gestión de Crisis y Contribución de Recursos (Arts. 23 a 30)",
    referencia: "Ley 36/2015, Arts. 23, 24 y 28",
    consejoAcademia: "¡Diferencia capital en la Ley 36/2015!: La Situación de Interés para la Seguridad Nacional (declarada por el Presidente del Gobierno por Real Decreto) coordina recursos y autoridades bajo dirección del Presidente, pero NUNCA suspende derechos fundamentales (para eso están Excepción y Sitio de la LO 4/1981 y Art. 116 CE).",
    justificacion: "Conforme al Título III de la Ley 36/2015, la Situación de Interés para la Seguridad Nacional es un mecanismo de coordinación reforzada de gestión de crisis que no implica la suspensión de ningún derecho fundamental."
  },
  {
    id: "B3-037",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 - Organizaciones Operativas y Mandos Componentes",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "Según la Doctrina para el Empleo de las FAS (PDC-01), dentro de la estructura operativa de las Fuerzas Armadas bajo el mando operacional del CMOPS, ¿cuáles son los Mandos Componentes que pueden activarse para conducir las operaciones en cada ámbito específico?",
    opciones: [
      "El MAPER, el MALE y el MADOC.",
      "El Mando Componente Terrestre (MCC-T / LCC), el Mando Componente Marítimo (MCC-M / MCC), el Mando Componente Aéreo (MCC-A / ACC), el Mando Componente Espacial, el Mando Componente Ciberespacial (MCCE) y el Mando Componente de Operaciones Especiales (MCOE / SOCC).",
      "Las Subdelegaciones de Defensa provinciales.",
      "El Consejo de Estado y el Tribunal de Cuentas."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 2 (Doctrina para la acción conjunta PDC-01) ➔ Estructura Operativa y Mandos Componentes",
    referencia: "Publicación Doctrinal Conjunta PDC-01 (A) y RD 521/2020",
    consejoAcademia: "En el nivel táctico/operacional de la Acción Conjunta (PDC-01), bajo el Comandante del Mando de Operaciones (CMOPS) se articulan los Mandos Componentes por ámbito: Terrestre, Marítimo, Aéreo, Espacial, Ciberespacial y de Operaciones Especiales (MCOE).",
    justificacion: "La PDC-01 y el RD 521/2020 contemplan la organización de la Fuerza Conjunta a través de Mandos Componentes (Terrestre, Marítimo, Aéreo, Espacial, Ciberespacial y de Operaciones Especiales) subordinados al CMOPS."
  },
  {
    id: "B3-038",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - El Fondo Europeo de Defensa (EDF) y el Fondo Europeo de Apoyo a la Paz (EPF)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2025,
    pregunta: "En el marco de las iniciativas recientes de la Política Común de Seguridad y Defensa (PCSD) de la Unión Europea, ¿qué instrumento financiero extrapresupuestario creado en 2021 permite a la UE financiar los costes comunes de las operaciones militares PCSD y suministrar equipamiento militar a países socios (como Ucrania)?",
    opciones: [
      "El Banco Mundial.",
      "El Fondo Europeo de Apoyo a la Paz (FEAP / European Peace Facility - EPF), que sustituyó al antiguo mecanismo Athena; mientras que el Fondo Europeo de Defensa (FED / EDF) financia proyectos conjuntos de I+D y capacidades industriales de defensa dentro del presupuesto de la UE.",
      "El Fondo Monetario Internacional.",
      "El Plan Marshall."
    ],
    correcta: 1,
    ubicacionTemario: "Bloque 3 (Seguridad Nacional) ➔ Tema 6 (Unión Europea: PCSD) ➔ Instrumentos financieros de defensa de la UE",
    referencia: "Política Común de Seguridad y Defensa (PCSD) de la UE",
    consejoAcademia: "Distingue estos dos fondos europeos de defensa de máxima actualidad: 1) FEAP / EPF (Fondo Europeo de Apoyo a la Paz) = sustituyó al mecanismo Athena y financia operaciones militares en el exterior y ayuda militar a países socios. 2) FED / EDF (Fondo Europeo de Defensa) = financia la I+D e industria militar europea.",
    justificacion: "El Fondo Europeo de Apoyo a la Paz (FEAP / EPF) es el instrumento extrapresupuestario de la UE para financiar operaciones con repercusiones militares y de defensa, mientras que el Fondo Europeo de Defensa (EDF) impulsa la investigación y desarrollo industrial."
  }
];





