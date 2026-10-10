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
    id: "B1-013",
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
    id: "B1-014",
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
    id: "B1-015",
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
  }
];

