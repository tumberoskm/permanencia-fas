/**
 * BANCO OFICIAL DE PREGUNTAS - OPOSICIÓN PERMANENCIA DE TROPA (EJÉRCITO DE TIERRA)
 * Etiquetado por:
 * - bloque: Bloque 1, Bloque 2, Bloque 3
 * - temaCodigo: B1-T01 a B3-T06 (18 Temas Oficiales)
 * - dificultad: 'media' | 'trampa'
 * - esExamenOficial: true | false
 */

const DEFAULT_QUESTIONS = [
  // ==========================================
  // BLOQUE 1: ORGANIZACIÓN (B1-T01 a B1-T06)
  // ==========================================
  {
    id: "B1-001",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - FAS",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el artículo 8 de la Constitución Española, ¿cuál es la misión encomendada a las Fuerzas Armadas?",
    opciones: [
      "Asegurar la soberanía y velar por el orden público y la seguridad ciudadana.",
      "Garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.",
      "Mantener la paz social, custodiar las fronteras marítimas y defender los tratados de la Unión Europea.",
      "Ejecutar los acuerdos del Consejo de Seguridad Nacional y prestar auxilio en catástrofes."
    ],
    correcta: 1,
    justificacion: "El art. 8.1 de la CE establece textualmente: 'Las Fuerzas Armadas, constituidas por el Ejército de Tierra, la Armada y el Ejército del Aire, tienen como misión garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.'",
    referencia: "Constitución Española, Art. 8.1"
  },
  {
    id: "B1-002",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Conforme a las Reales Ordenanzas para las FAS (RD 96/2009), ¿cuál es el primer y más fundamental deber del militar?",
    opciones: [
      "La obediencia incondicional e inexcusable a todos los mandos jerárquicos.",
      "La disposición permanente para defender a España, incluso con la entrega de la propia vida si fuera necesario.",
      "El perfeccionamiento técnico constante y el respeto estricto del orden cuartelario.",
      "La adhesión y juramento a los tratados militares de la Alianza Atlántica."
    ],
    correcta: 1,
    justificacion: "El art. 3 de las Reales Ordenanzas (RD 96/2009) define que 'La disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario, constituye el primer y más fundamental deber del militar'.",
    referencia: "RD 96/2009, Art. 3"
  },
  {
    id: "B1-003",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el art. 48 de las Reales Ordenanzas, si una orden militar entraña manifiestamente la ejecución de actos constitutivos de delito, el militar:",
    opciones: [
      "Deberá cumplirla primero por disciplina y elevar parte por escrito después.",
      "No estará obligado a obedecerla.",
      "Solicitará que se la ratifiquen por escrito y la ejecutará inmediatamente.",
      "Consultará previamente al Oficial de Guardia antes de ejecutarla."
    ],
    correcta: 1,
    justificacion: "Art. 48 de las Reales Ordenanzas: 'Si las órdenes entrañan la ejecución de actos que manifiestamente constituyan delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar no estará obligado a obedecerlas'.",
    referencia: "RD 96/2009, Art. 48"
  },
  {
    id: "B1-004",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Jefatura y Mando FAS",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2021,
    pregunta: "¿A quién corresponde el Mando Supremo de las Fuerzas Armadas y a quién la dirección de la Administración militar y la defensa del Estado?",
    opciones: [
      "Ambos corresponden al Presidente del Gobierno.",
      "El Mando Supremo corresponde al Rey (Art. 62.h CE) y la dirección de la Administración militar y la defensa del Estado al Gobierno (Art. 97 CE).",
      "El Mando Supremo corresponde al Rey y la dirección de la defensa al JEMAD.",
      "El Mando Supremo corresponde al Congreso y la dirección de la defensa al Ministro de Defensa."
    ],
    correcta: 1,
    justificacion: "Trampa clásica de examen: El art. 62.h CE atribuye al Rey el Mando Supremo de las FAS, mientras que el art. 97 CE atribuye al Gobierno dirigir la Administración civil y militar y la defensa del Estado.",
    referencia: "CE Arts. 62.h y 97"
  },
  {
    id: "B1-005",
    temaCodigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ministerio de Defensa",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿Qué órgano superior o directivo del Ministerio de Defensa dirige la política de PERSONAL y ENSEÑANZA militar, frente al que dirige ARMAMENTO, MATERIAL e INFRAESTRUCTURA?",
    opciones: [
      "Personal depende de la SEDEF y Armamento de la SUBDEF.",
      "Personal y Enseñanza dependen de la Subsecretaría de Defensa (SUBDEF), mientras que Armamento, Material e Infraestructura dependen de la Secretaría de Estado de Defensa (SEDEF).",
      "Ambos dependen directamente del Estado Mayor de la Defensa (EMAD).",
      "Personal depende de la SEGENPOL y Armamento del JEMAD."
    ],
    correcta: 1,
    justificacion: "Regla de oro para el examen: SUBDEF = Personal, Reclutamiento, Enseñanza, Sanidad y Régimen Interior. SEDEF = Presupuestos, Armamento y Material (DGAM), Infraestructura (DIGENIN) y CESTIC.",
    referencia: "Estructura Orgánica Básica del MINISDEF"
  },
  {
    id: "B1-006",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "El Ejército de Tierra está estructurado orgánicamente en tres grandes componentes. ¿Cuáles son?",
    opciones: [
      "Cuartel General, Unidades Operativas y Reservas.",
      "Cuartel General, la Fuerza y el Apoyo a la Fuerza.",
      "Mando de Combate, Apoyo Logístico y Centros de Formación.",
      "Fuerza Terrestre, Fuerza de Maniobra y Estado Mayor Conjunto."
    ],
    correcta: 1,
    justificacion: "La estructura básica del Ejército de Tierra se compone de: el Cuartel General, la Fuerza y el Apoyo a la Fuerza.",
    referencia: "LODN 5/2005 y Organización Básica del Ejército de Tierra"
  },
  {
    id: "B1-007",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿Dónde se encuentra la sede central del Cuartel General de la Fuerza Terrestre (FUTER)?",
    opciones: [
      "Madrid (Palacio de Buenavista).",
      "Sevilla (Edificio de Capitanía General).",
      "Zaragoza (Palacio de la Antigua Capitanía).",
      "Valencia (Convento de Santo Domingo)."
    ],
    correcta: 1,
    justificacion: "El Cuartel General de la Fuerza Terrestre (FUTER) tiene su sede en Sevilla (Plaza de España / Capitanía General).",
    referencia: "Organización Básica del ET"
  },
  {
    id: "B1-008",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2021,
    pregunta: "¿Qué mando del Apoyo a la Fuerza del Ejército de Tierra tiene como cometido la enseñanza militar, la doctrina y la investigación, y dónde radica su sede?",
    opciones: [
      "Mando de Personal (MAPER), en Madrid.",
      "Mando de Apoyo Logístico (MALE), en Sevilla.",
      "Mando de Adiestramiento y Doctrina (MADOC), en Granada.",
      "Inspección General del Ejército (IGE), en Barcelona."
    ],
    correcta: 2,
    justificacion: "El Mando de Adiestramiento y Doctrina (MADOC), con sede en Granada, dirige la enseñanza militar, la doctrina, orgánica y materiales en el ET.",
    referencia: "Organización Básica del ET - MADOC"
  },
  {
    id: "B1-009",
    temaCodigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    materia: "Ley Orgánica 5/2005 (Defensa Nacional)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿A quién corresponde el mando de la estructura operativa de las Fuerzas Armadas y la dirección militar de las operaciones?",
    opciones: [
      "Al Jefe de Estado Mayor del Ejército de Tierra (JEME).",
      "Al Jefe de Estado Mayor de la Defensa (JEMAD).",
      "Al Subsecretario de Defensa (SUBDEF).",
      "Al Secretario General de Política de Defensa (SEGENPOL)."
    ],
    correcta: 1,
    justificacion: "El Jefe de Estado Mayor de la Defensa (JEMAD) ostenta el mando de la estructura operativa de las FAS bajo la dependencia del Ministro de Defensa.",
    referencia: "Ley Orgánica 5/2005 de la Defensa Nacional, Art. 12"
  },
  {
    id: "B1-010",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    dificultad: "media",
    esExamenOficial: false,
    pregunta: "En cuanto al saludo militar en el art. 19 de las Reales Ordenanzas, señale la afirmación correcta:",
    opciones: [
      "Es una mera formalidad que solo se efectúa ante Oficiales Generales en actos solemnes.",
      "Constituye la expresión de respeto mutuo, disciplina y unión entre todos los miembros de las FAS.",
      "Solo es obligatorio cuando el militar se encuentre en formación con armas.",
      "Los soldados nunca deben devolver el saludo a sus iguales si están fuera de base militar."
    ],
    correcta: 1,
    justificacion: "El art. 19 de las Reales Ordenanzas establece que el saludo militar constituye la expresión de respeto mutuo, disciplina y unión entre todos los miembros de las Fuerzas Armadas.",
    referencia: "RD 96/2009, Art. 19"
  },
  {
    id: "B1-011",
    temaCodigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿En qué escalón del Ejército de Tierra se encuadra la Inspección General del Ejército (IGE) y dónde tiene su sede?",
    opciones: [
      "En el Cuartel General del ET, con sede en Madrid.",
      "En el Apoyo a la Fuerza, con sede en Barcelona.",
      "En la Fuerza Terrestre, con sede en Zaragoza.",
      "En el Estado Mayor Conjunto, con sede en Burgos."
    ],
    correcta: 1,
    justificacion: "Trampa habitual: La IGE (encargada de infraestructura, acuartelamiento y prevención de riesgos laborales) forma parte del APOYO A LA FUERZA (junto con MAPER, MALE y MADOC) y su sede está en el Palacio de Capitanía General de Barcelona.",
    referencia: "Organización Básica del ET - Apoyo a la Fuerza"
  },
  {
    id: "B1-012",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española",
    dificultad: "media",
    esExamenOficial: false,
    pregunta: "¿Quién es el Jefe del Estado y símbolo de su unidad y permanencia según el artículo 56 de la Constitución?",
    opciones: [
      "El Presidente de las Cortes Generales.",
      "El Rey.",
      "El Presidente del Tribunal Constitucional.",
      "El Presidente del Gobierno."
    ],
    correcta: 1,
    justificacion: "El artículo 56.1 de la CE: 'El Rey es el Jefe del Estado, símbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones...'",
    referencia: "CE Art. 56.1"
  },
  {
    id: "B1-013",
    temaCodigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    dificultad: "media",
    esExamenOficial: false,
    pregunta: "En las Reales Ordenanzas, respecto al trato al subordinado, el que ejerza mando:",
    opciones: [
      "Deberá mantener una distancia estricta sin preocuparse de sus problemas personales o asistenciales.",
      "Se preocupará por sus subordinados, procurando conocerlos, velando por su bienestar e instruyéndolos con el ejemplo.",
      "Solo se comunicará con ellos a través de los Cabos Primeros mediante órdenes de servicio.",
      "Evitará cualquier tipo de reconocimiento público para no generar favoritismos."
    ],
    correcta: 1,
    justificacion: "Art. 60 de las Reales Ordenanzas: 'El que ejerza mando se preocupará por el bienestar moral y material de sus subordinados, procurará conocerlos personalmente y velará por su seguridad e instrucción'.",
    referencia: "RD 96/2009, Art. 60"
  },
  {
    id: "B1-014",
    temaCodigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - Estados Art. 116",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el art. 116 de la Constitución Española, señale la diferencia exacta entre la declaración del Estado de Excepción y la del Estado de Sitio:",
    opciones: [
      "Ambos los declara el Gobierno mediante Real Decreto por 15 días.",
      "El Estado de Excepción lo declara el Gobierno previa autorización del Congreso (máx. 30 días), mientras que el Estado de Sitio lo declara la mayoría absoluta del Congreso a propuesta exclusiva del Gobierno.",
      "El Estado de Excepción lo declara el Rey y el de Sitio el Senado.",
      "El Estado de Excepción dura 60 días iniciales y el de Sitio 15 días."
    ],
    correcta: 1,
    justificacion: "Art. 116.3 y 116.4 CE: El estado de excepción será declarado por el Gobierno mediante decreto acordado en Consejo de Ministros, previa autorización del Congreso (máx. 30 días prorrogables por otro plazo igual). El estado de sitio será declarado por la mayoría absoluta del Congreso, a propuesta exclusiva del Gobierno.",
    referencia: "CE Art. 116.3 y 116.4"
  },
  {
    id: "B1-015",
    temaCodigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    materia: "Ley 39/2015 - Procedimiento Administrativo",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme a la Ley 39/2015 (LPACAP), ¿cuál es el plazo de interposición (en acto expreso) y el plazo máximo para dictar y notificar la resolución de un Recurso de Alzada frente a un Recurso Potestativo de Reposición?",
    opciones: [
      "En ambos el plazo para interponer es de 2 meses y para resolver de 6 meses.",
      "En ambos el plazo para interponer es de 1 mes (si el acto es expreso), pero el plazo máximo para resolver es de 3 MESES en Alzada y de 1 MES en Reposición.",
      "Alzada se interpone en 15 días y Reposición en 30 días.",
      "Alzada se resuelve en 1 mes y Reposición en 3 meses."
    ],
    correcta: 1,
    justificacion: "Arts. 122 y 124 de la Ley 39/2015: Tanto Alzada como Reposición tienen un plazo de interposición de 1 MES si el acto es expreso (3 meses si es presunto). Pero el plazo máximo para dictar y notificar la resolución es de 3 MESES en el recurso de Alzada y de 1 MES en el de Reposición.",
    referencia: "Ley 39/2015, Arts. 121 a 124"
  },

  // ==========================================
  // BLOQUE 2: JURÍDICO - SOCIAL (B2-T01 a B2-T06)
  // ==========================================
  {
    id: "B2-001",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 de Tropa y Marinería",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Conforme a la Ley 8/2006 de Tropa y Marinería, ¿hasta qué edad máxima se extiende el Compromiso de Larga Duración (CLD)?",
    opciones: [
      "Hasta los 42 años.",
      "Hasta cumplir los 45 años de edad.",
      "Hasta los 50 años.",
      "Hasta los 58 años en unidades no operativas."
    ],
    correcta: 1,
    justificacion: "El Compromiso de Larga Duración se extenderá hasta que el militar de tropa y marinería cumpla cuarenta y cinco años de edad (Art. 8, Ley 8/2006).",
    referencia: "Ley 8/2006, Art. 8.1"
  },
  {
    id: "B2-002",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 - Permanencia",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿Qué condición adquiere el militar profesional de tropa y marinería al superar el proceso selectivo de acceso a una relación de servicios de carácter permanente?",
    opciones: [
      "Militar de complemento fijo.",
      "Militar de carrera.",
      "Funcionario civil del Grupo C2 del Ministerio de Defensa.",
      "Reservista de Especial Disponibilidad permanente."
    ],
    correcta: 1,
    justificacion: "El acceso a una relación de servicios de carácter permanente supone la adquisición de la condición de militar de carrera integrado en la Escala de Tropa y Marinería (Ley 8/2006, Art. 12 y Ley 39/2007).",
    referencia: "Ley 8/2006, Art. 12"
  },
  {
    id: "B2-003",
    temaCodigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 - Permanencia y RED",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En la Ley 8/2006, ¿cuántos años mínimos de servicios se exigen para optar a la condición de Reservista de Especial Disponibilidad (RED) al finalizar el CLD a los 45 años?",
    opciones: [
      "12 años de servicios.",
      "14 años de servicios.",
      "Al menos 18 años de servicios.",
      "20 años de servicios."
    ],
    correcta: 2,
    justificacion: "Trampa habitual entre Permanencia (14 años de servicio) y RED (18 años de servicio): El art. 17 de la Ley 8/2006 exige haber cumplido al menos 18 años de servicios para adquirir la condición de Reservista de Especial Disponibilidad al finalizar el CLD a los 45 años.",
    referencia: "Ley 8/2006, Art. 17"
  },
  {
    id: "B2-004",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el art. 11 de la Ley Orgánica 8/2014 de Régimen Disciplinario de las FAS, ¿cuáles son las sanciones aplicables por faltas leves?",
    opciones: [
      "Reprensión, privación de salida de uno a ocho días, sanción económica de uno a ocho días y arresto de uno a catorce días.",
      "Amonestación verbal, rebajo de guardia y retención de nómina por quince días.",
      "Pérdida de destino, arresto de 15 a 30 días y privación de honores militares.",
      "Suspensión de empleo y sueldo de hasta tres meses."
    ],
    correcta: 0,
    justificacion: "Art. 11.1 de la LO 8/2014: Las sanciones que pueden imponerse por faltas leves son: 1. Reprensión. 2. Privación de salida de 1 a 8 días. 3. Sanción económica de 1 a 8 días. 4. Arresto de 1 a 14 días.",
    referencia: "Ley Orgánica 8/2014, Art. 11.1"
  },
  {
    id: "B2-005",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¡ATENCIÓN TRAMPA! Según los artículos 24 y 25 de la Ley Orgánica 8/2014, ¿cuál es el plazo de prescripción de las FALTAS LEVES frente al plazo de prescripción de las SANCIONES impuestas por falta leve?",
    opciones: [
      "Tanto la falta leve como la sanción leve prescriben a los 3 meses.",
      "Las faltas leves prescriben a los 2 MESES (Art. 24), mientras que las sanciones por falta leve prescriben a los 3 MESES (Art. 25).",
      "Las faltas leves prescriben al mes y las sanciones a los 6 meses.",
      "Las faltas leves prescriben a los 6 meses y las sanciones al año."
    ],
    correcta: 1,
    justificacion: "Esta es la pregunta trampa número 1 de Régimen Disciplinario: En la LO 8/2014, las FALTAS prescriben a los 2 meses (leves), 1 año (graves) y 2 años (muy graves) [Art. 24.1]. En cambio, las SANCIONES prescriben a los 3 meses (leves), 1 año (graves) y 2 años (muy graves) [Art. 25.1].",
    referencia: "Ley Orgánica 8/2014, Arts. 24.1 y 25.1"
  },
  {
    id: "B2-006",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Según el art. 65 de la Ley Orgánica 8/2014, ¿en qué plazos se cancelan las notas desfavorables por sanciones de falta leve, grave y muy grave en el historial militar?",
    opciones: [
      "2 meses las leves, 1 año las graves y 2 años las muy graves.",
      "1 año las leves, 2 años las graves y 4 años las muy graves (salvo separación del servicio y resolución de compromiso).",
      "6 meses las leves, 2 años las graves y 5 años las muy graves.",
      "Todas se cancelan de oficio a los 3 años."
    ],
    correcta: 1,
    justificacion: "No confundir prescripción con cancelación de notas (Art. 65 LO 8/2014): las anotaciones de sanciones se cancelan al 1 AÑO (falta leve), 2 AÑOS (falta grave) y 4 AÑOS (falta muy grave).",
    referencia: "Ley Orgánica 8/2014, Art. 65"
  },
  {
    id: "B2-007",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el art. 32 de la Ley Orgánica 8/2014, ¿qué sanciones puede imponer un Jefe de Compañía o unidad similar?",
    opciones: [
      "Arresto de hasta 14 días y sanción económica de hasta 8 días.",
      "Reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días (NO tiene competencia para imponer arresto).",
      "Únicamente la reprensión verbal.",
      "Arresto de hasta 7 días y privación de salida de hasta 8 días."
    ],
    correcta: 1,
    justificacion: "Trampa muy frecuente: Los Jefes de Compañía o unidad similar NO pueden imponer la sanción de arresto; solo pueden imponer reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días (el Jefe de Batallón sí puede imponer todas las leves, incluido arresto hasta 14 días).",
    referencia: "Ley Orgánica 8/2014, Art. 32.5"
  },
  {
    id: "B2-008",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Conforme a la Ley Orgánica 9/2011 de Derechos y Deberes de los miembros de las Fuerzas Armadas, el militar:",
    opciones: [
      "Puede afiliarse a sindicatos civiles siempre que no ejerza cargos representativos.",
      "No podrá fundar ni afiliarse a partidos políticos ni a sindicatos, ni ejercer el derecho de huelga.",
      "Tiene derecho a la huelga cuando no esté en estado de alarma.",
      "Puede asistir de uniforme a manifestaciones políticas si está fuera de su horario de trabajo."
    ],
    correcta: 1,
    justificacion: "Los arts. 7 y 13 de la LO 9/2011 consagran la neutralidad política y sindical: el militar no puede afiliarse a partidos políticos ni sindicatos, no tiene derecho de huelga y no puede asistir a manifestaciones vistiendo el uniforme.",
    referencia: "LO 9/2011, Arts. 7, 13 y 14"
  },
  {
    id: "B2-009",
    temaCodigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "¿A qué institución está adscrito el Observatorio de la Vida Militar y cuántos miembros lo componen según la LO 9/2011?",
    opciones: [
      "Al Ministerio de Defensa (SUBDEF), compuesto por 12 generales.",
      "A las Cortes Generales, compuesto por 9 personalidades elegidas (5 por el Congreso y 4 por el Senado) por un mandato de 5 años.",
      "Al Estado Mayor de la Defensa, compuesto por 10 vocales sindicales.",
      "Al Consejo de Estado, compuesto por 7 magistrados militares."
    ],
    correcta: 1,
    justificacion: "Trampa clásica entre COPERFAS (Ministerio de Defensa) y el Observatorio de la Vida Militar: El Observatorio (Art. 54 LO 9/2011) está adscrito a las CORTES GENERALES y lo integran 9 miembros (5 elegidos por el Congreso y 4 por el Senado) cada 5 años.",
    referencia: "LO 9/2011, Arts. 54 y 55"
  },
  {
    id: "B2-010",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 de la Carrera Militar",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2021,
    pregunta: "¿Cuáles son las formas de provisión de los destinos en las Fuerzas Armadas según el artículo 100 de la Ley 39/2007?",
    opciones: [
      "Sorteo, oposición libre y designación directa.",
      "Libre designación, concurso de méritos y provisión por antigüedad.",
      "Elección, clasificación y permuta.",
      "Comisión de servicio, adscripción temporal y destino forzoso."
    ],
    correcta: 1,
    justificacion: "El Art. 100 de la Ley 39/2007 establece que los destinos se proveerán por: libre designación, concurso de méritos y provisión por antigüedad.",
    referencia: "Ley 39/2007, Art. 100"
  },
  {
    id: "B2-011",
    temaCodigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 - Ascensos en Tropa",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según la Ley 39/2007 de la Carrera Militar, ¿por qué sistema se asciende al empleo de Cabo Mayor?",
    opciones: [
      "Por antigüedad estricta.",
      "Por el sistema de Elección.",
      "Por oposición libre.",
      "Por clasificación automática a los 20 años de servicio."
    ],
    correcta: 1,
    justificacion: "Mientras que a los empleos de Cabo y Cabo 1º se asciende por concurso o concurso-oposición, al empleo de Cabo Mayor (al igual que a Suboficial Mayor y General de Brigada) se asciende por el sistema de ELECCIÓN.",
    referencia: "Ley 39/2007, Art. 89"
  },
  {
    id: "B2-012",
    temaCodigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Iniciativas y Quejas (RD 176/2014)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Conforme al RD 176/2014 de iniciativas y quejas, si el jefe de unidad no contesta a una queja o la resolución no se considera satisfactoria, ¿en qué plazo puede el militar dirigirse directamente al Mando de Personal (MAPER)?",
    opciones: [
      "Transcurridos 10 días naturales.",
      "Transcurrido 1 MES desde la presentación de la queja.",
      "Transcurridos 3 meses.",
      "Transcurridos 6 meses."
    ],
    correcta: 1,
    justificacion: "Si en el plazo de UN MES no se hubiese contestado a la queja o la resolución no se considerase satisfactoria por el interesado, éste podrá dirigirse directamente al Mando o Jefatura de Personal de su Ejército.",
    referencia: "RD 176/2014, Art. 10"
  },
  {
    id: "B2-013",
    temaCodigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿Cuál es el plazo para interponer el Recurso de Alzada contra una resolución sancionadora disciplinaria según el art. 68 de la LO 8/2014?",
    opciones: [
      "15 días hábiles.",
      "Un mes, contado a partir del día siguiente al de la notificación de la resolución.",
      "Dos meses desde la imposición del arresto.",
      "Diez días naturales."
    ],
    correcta: 1,
    justificacion: "El art. 68.3 de la LO 8/2014 establece que el recurso de alzada disciplinario podrá interponerse en el plazo de UN MES, contado a partir del día siguiente al de la notificación de la sanción.",
    referencia: "Ley Orgánica 8/2014, Art. 68.3"
  },
  {
    id: "B2-014",
    temaCodigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Igualdad y Protocolo Frente al Acoso en las FAS",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En el Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas, ¿está obligada la presunta víctima a tramitar su denuncia por el conducto reglamentario si el presunto acosador es su superior directo?",
    opciones: [
      "Sí, el conducto reglamentario nunca admite excepción.",
      "No; puede presentar la denuncia directamente ante la Unidad de Protección frente al Acoso (UPA) sin pasar por el conducto reglamentario.",
      "Solo si cuenta con permiso escrito del Jefe de Compañía.",
      "Debe esperar a cambiar de destino para denunciar."
    ],
    correcta: 1,
    justificacion: "En materia de acoso sexual o por razón de sexo, la víctima puede dirigirse directamente a la Unidad de Protección frente al Acoso (UPA) con total confidencialidad, quedando exceptuado el conducto reglamentario.",
    referencia: "Protocolo frente al Acoso en las FAS y RD 176/2014"
  },

  // ==========================================
  // BLOQUE 3: SEGURIDAD NACIONAL (B3-T01 a B3-T06)
  // ==========================================
  {
    id: "B3-001",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "Conforme a la Ley 36/2015, ¿quién preside el Consejo de Seguridad Nacional (salvo que asista Su Majestad el Rey)?",
    opciones: [
      "El Ministro de Asuntos Exteriores.",
      "El Presidente del Gobierno.",
      "El Ministro de Defensa.",
      "El Jefe de Estado Mayor de la Defensa."
    ],
    correcta: 1,
    justificacion: "El Art. 21 de la Ley 36/2015 establece que el Consejo de Seguridad Nacional está presidido por el Presidente del Gobierno, excepto cuando asista Su Majestad el Rey, en cuyo caso lo presidirá éste.",
    referencia: "Ley 36/2015, Art. 21"
  },
  {
    id: "B3-002",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Según el art. 24 de la Ley 36/2015, ¿qué órgano declara la 'Situación de Interés para la Seguridad Nacional' y mediante qué instrumento?",
    opciones: [
      "El Congreso de los Diputados por mayoría absoluta.",
      "El Presidente del Gobierno mediante Real Decreto.",
      "El Ministro del Interior mediante Orden Ministerial.",
      "El JEMAD mediante Directiva Operativa."
    ],
    correcta: 1,
    justificacion: "Trampa habitual: A diferencia del Estado de Alarma (que lo declara el Consejo de Ministros), la Situación de Interés para la Seguridad Nacional la declara exclusivamente el PRESIDENTE DEL GOBIERNO mediante Real Decreto (Art. 24.1 Ley 36/2015).",
    referencia: "Ley 36/2015, Art. 24.1"
  },
  {
    id: "B3-003",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Tratado de la OTAN (Washington 1949)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "En el Tratado del Atlántico Norte (OTAN), ¿cuál es la diferencia entre el Artículo 4 y el Artículo 5?",
    opciones: [
      "El Art. 4 regula el presupuesto militar y el Art. 5 la expulsión de miembros.",
      "El Art. 4 establece el mecanismo de CONSULTA cuando un aliado considera amenazada su seguridad, y el Art. 5 consagra la DEFENSA COLECTIVA ante un ataque armado.",
      "El Art. 4 regula las misiones de la ONU y el Art. 5 las misiones de la Unión Europea.",
      "El Art. 4 es de defensa colectiva y el Art. 5 de cooperación nuclear."
    ],
    correcta: 1,
    justificacion: "Art. 4 = Consultas entre aliados ante amenaza a la integridad territorial, independencia política o seguridad. Art. 5 = Defensa Colectiva (un ataque armado contra uno se considera un ataque contra todos).",
    referencia: "Tratado de Washington (1949), Arts. 4 y 5"
  },
  {
    id: "B3-004",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Organización de la OTAN",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2021,
    pregunta: "¿Cuál es el máximo órgano político de toma de decisiones de la OTAN?",
    opciones: [
      "El Comité Militar (MC).",
      "El Consejo del Atlántico Norte (NAC).",
      "El Mando Aliado de Operaciones (ACO).",
      "La Asamblea Parlamentaria de la OTAN."
    ],
    correcta: 1,
    justificacion: "El Consejo del Atlántico Norte (North Atlantic Council - NAC), presidido por el Secretario General en Bruselas, es el máximo órgano de decisión política de la OTAN.",
    referencia: "Estructura Política de la OTAN"
  },
  {
    id: "B3-005",
    temaCodigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - PCSD",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "En el ámbito de la Unión Europea, señale la diferencia entre el Art. 42.7 del TUE y el Art. 222 del TFUE:",
    opciones: [
      "No existe diferencia, ambos regulan el presupuesto del Banco Central Europeo.",
      "El Art. 42.7 TUE es la Cláusula de Asistencia Mutua ante agresión armada en territorio de un Estado miembro, y el Art. 222 TFUE es la Cláusula de Solidaridad ante ataque terrorista o catástrofe natural/humana.",
      "El Art. 42.7 regula las fronteras Schengen y el Art. 222 el comercio exterior.",
      "El Art. 42.7 pertenece a la OTAN y el Art. 222 a la ONU."
    ],
    correcta: 1,
    justificacion: "Pregunta estrella del Bloque 3: Art. 42.7 TUE = Asistencia Mutua (agresión armada). Art. 222 TFUE = Cláusula de Solidaridad (terrorismo o catástrofes).",
    referencia: "Art. 42.7 TUE y Art. 222 TFUE"
  },
  {
    id: "B3-006",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Organización de Naciones Unidas (ONU)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2022,
    pregunta: "¿Qué capítulo de la Carta de las Naciones Unidas regula la acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión, autorizando medidas coercitivas y el uso de la fuerza?",
    opciones: [
      "Capítulo V (Composición del Consejo de Seguridad).",
      "Capítulo VI (Arreglo pacífico de controversias).",
      "Capítulo VII (Acción en caso de amenazas a la paz y actos de agresión).",
      "Capítulo XIV (Corte Internacional de Justicia)."
    ],
    correcta: 2,
    justificacion: "El Capítulo VII de la Carta de la ONU faculta al Consejo de Seguridad para autorizar medidas coercitivas y el uso de la fuerza armada para restablecer la paz.",
    referencia: "Carta de las Naciones Unidas, Capítulo VII"
  },
  {
    id: "B3-007",
    temaCodigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Estrategia de Seguridad Nacional (ESN)",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "Conforme al art. 4 de la Ley 36/2015, ¿con qué periodicidad se revisa la Estrategia de Seguridad Nacional (ESN)?",
    opciones: [
      "Cada año.",
      "Cada 5 años, o antes si lo aconsejan las circunstancias cambiantes del entorno estratégico.",
      "Cada 10 años de forma improrrogable.",
      "Únicamente cuando se reforma la Constitución."
    ],
    correcta: 1,
    justificacion: "El artículo 4.3 de la Ley 36/2015 dispone que la Estrategia de Seguridad Nacional se revisará cada cinco años, o antes si lo aconsejan las circunstancias cambiantes del entorno estratégico.",
    referencia: "Ley 36/2015, Art. 4.3"
  },
  {
    id: "B3-008",
    temaCodigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Doctrina PDC-01 (Empleo de las FAS)",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según la Doctrina para el Empleo de las FAS (PDC-01), ¿cuál es la diferencia entre una operación CONJUNTA y una operación COMBINADA?",
    opciones: [
      "Son exactamente sinónimas.",
      "CONJUNTA es aquella en la que participan fuerzas de dos o más Ejércitos del mismo país (ET, Armada, EA), mientras que COMBINADA es aquella en la que participan fuerzas militares de dos o más naciones aliadas.",
      "Conjunta es con la Guardia Civil y Combinada es con Protección Civil.",
      "Conjunta es terrestre y Combinada es anfibia."
    ],
    correcta: 1,
    justificacion: "Concepto doctrinal clave de la PDC-01: Acción Conjunta = varios ejércitos nacionales (Tierra, Mar, Aire). Acción Combinada = fuerzas de varios Estados/países.",
    referencia: "PDC-01 Doctrina para el Empleo de las FAS"
  },
  {
    id: "B3-009",
    temaCodigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Estructura Militar de la OTAN",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2023,
    pregunta: "¿Cuáles son los dos Mandos Estratégicos de la estructura militar de la OTAN y dónde tienen sus sedes?",
    opciones: [
      "ACO (Operaciones, en SHAPE - Mons, Bélgica) y ACT (Transformación, en Norfolk, EE.UU.).",
      "EUROCORPS (Estrasburgo) y EUROMARFOR (Rota).",
      "LANDCOM (Madrid) y AIRCOM (París).",
      "SACEUR (Londres) y SACLANT (Lisboa)."
    ],
    correcta: 0,
    justificacion: "La estructura de mandos de la OTAN tiene dos mandos estratégicos: ACO (Allied Command Operations), con cuartel general en SHAPE (Mons, Bélgica), y ACT (Allied Command Transformation), con sede en Norfolk (Virginia, EE.UU.).",
    referencia: "Estructura Militar de la OTAN"
  },
  {
    id: "B3-010",
    temaCodigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Consejo de Seguridad de la ONU",
    dificultad: "media",
    esExamenOficial: true,
    anioConvocatoria: 2021,
    pregunta: "¿Cuáles son los cinco miembros permanentes con derecho de veto en el Consejo de Seguridad de la ONU?",
    opciones: [
      "España, Estados Unidos, Reino Unido, Francia y Alemania.",
      "Estados Unidos, Rusia, China, Francia y Reino Unido.",
      "Estados Unidos, Canadá, Japón, Alemania y Reino Unido.",
      "Estados Unidos, Rusia, India, Francia y Brasil."
    ],
    correcta: 1,
    justificacion: "Los cinco miembros permanentes (P5) con derecho de veto en el Consejo de Seguridad de la ONU son: Estados Unidos, Rusia, China, Francia y Reino Unido.",
    referencia: "Carta de la ONU, Art. 23"
  },
  {
    id: "B3-011",
    temaCodigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
    dificultad: "trampa",
    esExamenOficial: true,
    anioConvocatoria: 2024,
    pregunta: "Según el artículo 9 de la Ley 36/2015, ¿cuáles son los TRES Componentes Fundamentales de la Seguridad Nacional?",
    opciones: [
      "Ejército de Tierra, Armada y Ejército del Aire.",
      "La Defensa Nacional, la Seguridad Pública y la Acción Exterior.",
      "Policía Nacional, Guardia Civil y Centro Nacional de Inteligencia.",
      "Ciberseguridad, Protección Civil y Fronteras."
    ],
    correcta: 1,
    justificacion: "Art. 9 de la Ley 36/2015: 'Son componentes fundamentales de la Seguridad Nacional la Defensa Nacional, la Seguridad Pública y la Acción Exterior'.",
    referencia: "Ley 36/2015, Art. 9"
  }
];
