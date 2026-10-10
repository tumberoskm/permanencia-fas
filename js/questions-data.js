/**
 * BANCO OFICIAL DE PREGUNTAS - OPOSICIÓN PERMANENCIA DE TROPA (EJÉRCITO DE TIERRA)
 * Bloques Oficiales:
 * - Bloque 1: Organización (Ministerio de Defensa, Estructura FAS, Estructura ET, Reales Ordenanzas)
 * - Bloque 2: Jurídico-Social (Constitución, Régimen Disciplinario, Carrera Militar, Derechos y Deberes)
 * - Bloque 3: Seguridad Nacional e Internacional (Ley Seguridad Nacional, ESN, OTAN, UE, Misiones)
 */

const DEFAULT_QUESTIONS = [
  // ==========================================
  // BLOQUE 1: ORGANIZACIÓN
  // ==========================================
  {
    id: "B1-001",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española - FAS",
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
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
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
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    pregunta: "Según las Reales Ordenanzas, si una orden militar entraña manifiestamente la ejecución de actos contrarios a las leyes o de un delito, el militar:",
    opciones: [
      "Deberá cumplirla primero y elevar recurso disciplinario después.",
      "No estará obligado a obedecerla y actuará conforme a la legalidad.",
      "Solicitará que se la pongan por escrito y la cumplirá inmediatamente.",
      "Pedirá autorización al Oficial de Guardia para resolver su duda."
    ],
    correcta: 1,
    justificacion: "Art. 48 de las Reales Ordenanzas: 'Si las órdenes entrañan la ejecución de actos que manifiestamente sean contrarios a las leyes de la guerra o que constituyan delito, en particular contra la Constitución, el militar no estará obligado a obedecerlas'.",
    referencia: "RD 96/2009, Art. 48"
  },
  {
    id: "B1-004",
    bloque: "Bloque 1: Organización",
    materia: "Jefatura y Mando FAS",
    pregunta: "¿A quién corresponde, según la Constitución Española y la Ley Orgánica de Defensa Nacional, el Mando Supremo de las Fuerzas Armadas?",
    opciones: [
      "Al Presidente del Gobierno.",
      "A Su Majestad el Rey.",
      "Al Ministro de Defensa.",
      "Al Jefe de Estado Mayor de la Defensa (JEMAD)."
    ],
    correcta: 1,
    justificacion: "El art. 62.h de la Constitución Española y el art. 5 de la Ley Orgánica 5/2005 de la Defensa Nacional señalan que Su Majestad el Rey ejerce el Mando Supremo de las Fuerzas Armadas.",
    referencia: "CE Art. 62.h y LODN Art. 5"
  },
  {
    id: "B1-005",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ministerio de Defensa",
    pregunta: "¿Qué órgano superior del Ministerio de Defensa ostenta la representación ordinaria del Ministerio y dirige los servicios comunes, además de la política de personal militar?",
    opciones: [
      "La Secretaría de Estado de Defensa (SEDEF).",
      "La Subsecretaría de Defensa (SUBDEF).",
      "La Secretaría General de Política de Defensa (SEGENPOL).",
      "El Estado Mayor Conjunto (EMACON)."
    ],
    correcta: 1,
    justificacion: "La Subsecretaría de Defensa (SUBDEF) es el órgano al que le corresponde la representación ordinaria del Ministerio, la dirección de los servicios comunes y la gestión y política global del personal militar.",
    referencia: "Estructura Orgánica Básica del MINISDEF"
  },
  {
    id: "B1-006",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    pregunta: "El Ejército de Tierra está estructurado orgánicamente en tres escalones principales. ¿Cuáles son?",
    opciones: [
      "Cuartel General, Unidades Operativas y Reservas.",
      "Cuartel General, la Fuerza y el Apoyo a la Fuerza.",
      "Mando de Combate, Apoyo Logístico y Centros de Formación.",
      "Fuerza Terrestre, Fuerza de Maniobra y Estado Mayor Conjunto."
    ],
    correcta: 1,
    justificacion: "La estructura básica del Ejército de Tierra (y de los ejércitos en general) se compone de: Cuartel General, la Fuerza y el Apoyo a la Fuerza.",
    referencia: "LODN 5/2005 y Organización Básica del Ejército de Tierra"
  },
  {
    id: "B1-007",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    pregunta: "¿Dónde se encuentra la sede central del Cuartel General de la Fuerza Terrestre (FUTER)?",
    opciones: [
      "Madrid (Palacio de Buenavista).",
      "Sevilla (Edificio de Capitanía General).",
      "Zaragoza (Palacio de la Antigua Capitanía).",
      "Valencia (Convento de Santo Domingo)."
    ],
    correcta: 1,
    justificacion: "El Cuartel General de la Fuerza Terrestre (HQ FUTER) tiene su sede en Sevilla (Plaza de España / Capitanía General).",
    referencia: "Organización Básica del ET"
  },
  {
    id: "B1-008",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    pregunta: "¿Qué mando del Ejército de Tierra tiene como cometido principal la gestión, administración y control de la enseñanza militar, la doctrina y la investigación militar?",
    opciones: [
      "Mando de Personal (MAPER).",
      "Mando de Apoyo Logístico (MALE).",
      "Mando de Adiestramiento y Doctrina (MADOC).",
      "Mando de Canarias (MCANA)."
    ],
    correcta: 2,
    justificacion: "El Mando de Adiestramiento y Doctrina (MADOC), con sede principal en Granada, es el órgano responsable de la enseñanza militar, la doctrina y la investigación en el Ejército de Tierra.",
    referencia: "Organización Básica del ET - MADOC"
  },
  {
    id: "B1-009",
    bloque: "Bloque 1: Organización",
    materia: "Jefe de Estado Mayor de la Defensa (JEMAD)",
    pregunta: "¿A quién corresponde el mando operativo de las Fuerzas Armadas bajo la autoridad del Ministro de Defensa y del Presidente del Gobierno?",
    opciones: [
      "Al Jefe de Estado Mayor del Ejército de Tierra (JEME).",
      "Al Jefe de Estado Mayor de la Defensa (JEMAD).",
      "Al Comandante del Mando de Operaciones (CMOPS) de manera exclusiva e independiente.",
      "Al Secretario de Estado de Defensa (SEDEF)."
    ],
    correcta: 1,
    justificacion: "El Jefe de Estado Mayor de la Defensa (JEMAD) ostenta el mando operativo de las Fuerzas Armadas y ejerce la jefatura del Estado Mayor de la Defensa.",
    referencia: "Ley Orgánica 5/2005 de la Defensa Nacional, Art. 12"
  },
  {
    id: "B1-010",
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    pregunta: "En cuanto al saludo militar en las Reales Ordenanzas, señale la afirmación correcta:",
    opciones: [
      "Es una mera formalidad que solo se efectúa ante Oficiales Generales en actos solemnes.",
      "Constituye la expresión pública del respeto mutuo, disciplina y unión entre los miembros de las FAS.",
      "Solo es obligatorio cuando el militar se encuentre en formación con armas.",
      "Los soldados nunca deben devolver el saludo a sus iguales si están fuera de base militar."
    ],
    correcta: 1,
    justificacion: "El art. 19 de las Reales Ordenanzas establece que el saludo militar es la manifestación externa de respeto mutuo, de disciplina y de la unión entre los miembros de las Fuerzas Armadas.",
    referencia: "RD 96/2009, Art. 19"
  },
  {
    id: "B1-011",
    bloque: "Bloque 1: Organización",
    materia: "Estructura del Ejército de Tierra",
    pregunta: "¿Qué mando encuadra los cometidos de intendencia, armamento, material, mantenimiento, transporte e infraestructuras del ET en el Apoyo a la Fuerza?",
    opciones: [
      "Mando de Apoyo Logístico del Ejército (MALE).",
      "Mando de Personal (MAPER).",
      "Fuerza Logística Operativa (FLO).",
      "Inspección General del Ejército (IGE)."
    ],
    correcta: 0,
    justificacion: "El MALE (Mando de Apoyo Logístico del Ejército) es el órgano del Apoyo a la Fuerza responsable de la dirección, gestión, administración y control de los recursos materiales del ET.",
    referencia: "Organización Básica del ET - MALE"
  },
  {
    id: "B1-012",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española",
    pregunta: "¿Quién ejerce la función de Jefe del Estado y es símbolo de su unidad y permanencia según el Título II de la Constitución?",
    opciones: [
      "El Presidente de las Cortes Generales.",
      "El Rey de España.",
      "El Presidente del Tribunal Constitucional.",
      "El Presidente del Gobierno en funciones."
    ],
    correcta: 1,
    justificacion: "El artículo 56.1 de la CE: 'El Rey es el Jefe del Estado, símbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones...'",
    referencia: "CE Art. 56.1"
  },

  // ==========================================
  // BLOQUE 2: JURÍDICO - SOCIAL
  // ==========================================
  {
    id: "B2-001",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 de Tropa y Marinería",
    pregunta: "Conforme a la Ley 8/2006 de Tropa y Marinería, ¿hasta qué edad máxima se puede prestar servicio militar con Compromiso de Larga Duración (CLD)?",
    opciones: [
      "Hasta los 42 años.",
      "Hasta cumplir los 45 años.",
      "Hasta los 50 años.",
      "Hasta los 58 años en unidades no operativas."
    ],
    correcta: 1,
    justificacion: "El Compromiso de Larga Duración se extenderá hasta que el militar de tropa y marinería cumpla cuarenta y cinco años de edad (Art. 8, Ley 8/2006).",
    referencia: "Ley 8/2006, Art. 8.1"
  },
  {
    id: "B2-002",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 - Permanencia",
    pregunta: "¿Qué condición adquiere el militar profesional de tropa y marinería al superar el proceso selectivo de acceso a una relación de servicios de carácter permanente?",
    opciones: [
      "Militar de complemento fijo.",
      "Militar de carrera.",
      "Funcionario del Grupo C2 del Ministerio de Defensa.",
      "Personal estatutario de defensa nacional."
    ],
    correcta: 1,
    justificacion: "El acceso a una relación de servicios de carácter permanente supone la adquisición de la condición de militar de carrera (Ley 8/2006, Art. 12 y Ley 39/2007).",
    referencia: "Ley 8/2006, Art. 12"
  },
  {
    id: "B2-003",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 8/2006 - Permanencia",
    pregunta: "¿Cuántos años mínimos de servicios efectivos ininterrumpidos como militar profesional de tropa se exigen habitualmente para concurrir a la convocatoria de permanencia?",
    opciones: [
      "8 años de servicios.",
      "10 años de servicios.",
      "14 años de servicios.",
      "18 años de servicios."
    ],
    correcta: 2,
    justificacion: "Para participar en los procesos selectivos para el acceso a militar de tropa y marinería permanente se exige tener cumplidos al menos 14 años de servicios efectivos continuados.",
    referencia: "Ley 8/2006, Art. 12 y Convocatorias Permanencia FAS"
  },
  {
    id: "B2-004",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    pregunta: "Según la Ley Orgánica 8/2014 de Régimen Disciplinario de las FAS, ¿cuáles son las sanciones aplicables por faltas leves?",
    opciones: [
      "Reprensión, privación de salida de uno a ocho días, sanción económica de uno a ocho días y arresto de uno a catorce días.",
      "Amonestación verbal, rebajo de guardia y retención de nómina por quince días.",
      "Pérdida de destino, arresto de 15 a 30 días y privación de honores militares.",
      "Suspensión de empleo y sueldo de hasta tres meses."
    ],
    correcta: 0,
    justificacion: "Art. 11 de la LO 8/2014: Las sanciones que pueden imponerse por faltas leves son: 1. Reprensión. 2. Privación de salida de uno a ocho días. 3. Sanción económica de uno a ocho días. 4. Arresto de uno a catorce días.",
    referencia: "Ley Orgánica 8/2014, Art. 11"
  },
  {
    id: "B2-005",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    pregunta: "¿Cuál es el plazo de prescripción de las FALTAS LEVES en el régimen disciplinario militar?",
    opciones: [
      "Un mes.",
      "Tres meses.",
      "Seis meses.",
      "Un año."
    ],
    correcta: 1,
    justificacion: "Según el Art. 24 de la LO 8/2014, las faltas leves prescriben a los tres meses (las graves a los dos años y las muy graves a los tres años).",
    referencia: "Ley Orgánica 8/2014, Art. 24.1"
  },
  {
    id: "B2-006",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    pregunta: "¿Cuál es el plazo de prescripción de las FALTAS GRAVES y MUY GRAVES respectivamente?",
    opciones: [
      "6 meses y 1 año.",
      "1 año y 2 años.",
      "2 años las graves y 3 años las muy graves.",
      "3 años las graves y 5 años las muy graves."
    ],
    correcta: 2,
    justificacion: "Art. 24.1 LO 8/2014: 'Las faltas leves prescribirán a los tres meses, las graves a los dos años y las muy graves a los tres años'.",
    referencia: "Ley Orgánica 8/2014, Art. 24"
  },
  {
    id: "B2-007",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    pregunta: "¿Qué autoridad tiene competencia originaria para imponer la sanción de 'Resolución de compromiso' o 'Separación del servicio'?",
    opciones: [
      "El Coronel Jefe de Regimiento.",
      "El General Jefe de Estado Mayor del Ejército respectivo.",
      "El Ministro de Defensa.",
      "El Consejo de Ministros (o Ministro de Defensa en resolución de compromiso).",
    ],
    correcta: 3,
    justificacion: "La separación del servicio se impone por el Consejo de Ministros (o Ministro de Defensa según el vínculo); la resolución de compromiso corresponde al Ministro de Defensa.",
    referencia: "Ley Orgánica 8/2014, Art. 30"
  },
  {
    id: "B2-008",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011)",
    pregunta: "Conforme a la Ley Orgánica 9/2011 de Derechos y Deberes de los miembros de las Fuerzas Armadas, el militar:",
    opciones: [
      "Puede afiliarse a sindicatos civiles siempre que no ejerza cargos representativos.",
      "No podrá pertenecer a partidos políticos ni a organizaciones sindicales.",
      "Tiene derecho a la huelga cuando no esté en estado de alarma.",
      "Puede organizar manifestaciones militares con autorización de la Delegación del Gobierno."
    ],
    correcta: 1,
    justificacion: "El art. 7 de la LO 9/2011 y el art. 127 de la CE establecen la neutralidad política y sindical: los militares no pueden afiliarse a partidos políticos ni a sindicatos, y no tienen derecho de huelga.",
    referencia: "LO 9/2011, Art. 7 y Art. 11"
  },
  {
    id: "B2-009",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Derechos y Deberes (LO 9/2011)",
    pregunta: "¿Qué órgano colegiado del Ministerio de Defensa actúa como cauce de participación y diálogo con las asociaciones profesionales de militares?",
    opciones: [
      "El Consejo Superior del Ejército de Tierra.",
      "El Consejo de Personal de las Fuerzas Armadas (COPERFAS).",
      "La Junta de Jefes de Estado Mayor.",
      "El Comité Interministerial de Tropa y Marinería."
    ],
    correcta: 1,
    justificacion: "El Consejo de Personal de las Fuerzas Armadas (COPERFAS) es el órgano creado por la LO 9/2011 para la interlocución entre el Ministerio y las asociaciones profesionales de miembros de las FAS.",
    referencia: "LO 9/2011, Título III"
  },
  {
    id: "B2-010",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 de la Carrera Militar",
    pregunta: "¿Cuáles son las situaciones administrativas básicas en las que puede hallarse el militar profesional?",
    opciones: [
      "Activo, Licencia, Permiso y Jubilado.",
      "Servicio activo, Servicios especiales, Excedencia, Suspensión de empleo y Suspensión de funciones.",
      "Destinado, En comisión, Bajas médicas y Retirado voluntario.",
      "Servicio de armas, Servicio burocrático y Reserva transitoria."
    ],
    correcta: 1,
    justificacion: "El Art. 107 de la Ley 39/2007 enumera las situaciones administrativas: Servicio activo, Servicios especiales, Excedencia, Suspensión de empleo y Suspensión de funciones (además de la Reserva).",
    referencia: "Ley 39/2007, Art. 107"
  },
  {
    id: "B2-011",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Constitución Española - Derechos Fundamentales",
    pregunta: "¿Qué recurso judicial protege de forma inmediata y sumaria contra cualquier detención que no se ajuste a la legalidad según el art. 17 de la Constitución?",
    opciones: [
      "Recurso de Amparo.",
      "Procedimiento de Habeas Corpus.",
      "Recurso de Inconstitucionalidad.",
      "Petición de Gracia y Excarcelación Militar."
    ],
    correcta: 1,
    justificacion: "El artículo 17.4 de la CE establece la regulación del procedimiento de 'Habeas Corpus' para producir la inmediata puesta a disposición judicial de toda persona ilegalmente detenida.",
    referencia: "CE Art. 17.4"
  },
  {
    id: "B2-012",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    pregunta: "¿Cuál de las siguientes conductas se califica como FALTA GRAVE en la Ley Orgánica 8/2014?",
    opciones: [
      "El retraso injustificado de hasta dos horas en la incorporación al destino.",
      "La embriaguez o el consumo de drogas tóxicas durante la prestación del servicio de armas o guardia.",
      "La inexactitud en el cumplimiento de las órdenes si causa perjuicio grave al servicio militar.",
      "El descuido no reiterado en el aseo personal dentro de la base."
    ],
    correcta: 2,
    justificacion: "La inexactitud o descuido que cause perjuicio grave al servicio es falta grave (art. 7). Nota: la embriaguez durante el servicio de armas/guardia está tipificada como falta muy grave o delito militar según concurra.",
    referencia: "Ley Orgánica 8/2014, Art. 7"
  },

  // ==========================================
  // BLOQUE 3: SEGURIDAD NACIONAL E INTERNACIONAL
  // ==========================================
  {
    id: "B3-001",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
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
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
    pregunta: "¿Cómo se define en la Ley 36/2015 una 'Situación de interés para la Seguridad Nacional'?",
    opciones: [
      "El equivalente directo a la declaración del Estado de Guerra.",
      "Aquella en la que, por la gravedad de sus efectos, se requiere la aportación reforzada de recursos y coordinación de autoridades sin suspender derechos fundamentales.",
      "Cualquier conflicto bélico fuera del territorio nacional que involucre a tropas de la OTAN.",
      "Una situación de emergencia que conlleva el toque de queda y cierre de fronteras."
    ],
    correcta: 1,
    justificacion: "La situación de interés para la Seguridad Nacional es aquella que requiere la coordinación de los órganos competentes y la aportación de recursos adicionales, sin que proceda la declaración de los estados de alarma o excepción (no suspende derechos).",
    referencia: "Ley 36/2015, Art. 23"
  },
  {
    id: "B3-003",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Tratado de la OTAN (Tratado de Washington 1949)",
    pregunta: "¿Qué establece el emblemático Artículo 5 del Tratado del Atlántico Norte (OTAN)?",
    opciones: [
      "El reparto presupuestario obligatorio del 2% del PIB en defensa.",
      "El principio de defensa colectiva: un ataque armado contra uno o más miembros se considerará un ataque dirigido contra todos ellos.",
      "La obligación de ceder las bases aéreas a los mandos de los Estados Unidos.",
      "El derecho de veto exclusivo de los cinco miembros fundadores de la alianza."
    ],
    correcta: 1,
    justificacion: "El artículo 5 del Tratado del Atlántico Norte consagra la cláusula de defensa colectiva: 'Las partes convienen en que un ataque armado contra una o contra varias de ellas... será considerado como un ataque dirigido contra todas ellas'.",
    referencia: "Tratado de Washington (1949), Art. 5"
  },
  {
    id: "B3-004",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Organización de la OTAN",
    pregunta: "¿Cuál es el máximo órgano político de toma de decisiones de la Organización del Tratado del Atlántico Norte (OTAN)?",
    opciones: [
      "El Comité Militar (MC).",
      "El Consejo del Atlántico Norte (NAC).",
      "El Mando Supremo Aliado de Operaciones (SACEUR).",
      "La Asamblea Parlamentaria de la OTAN."
    ],
    correcta: 1,
    justificacion: "El Consejo del Atlántico Norte (North Atlantic Council - NAC) es el principal órgano político y de decisión colectiva de la OTAN.",
    referencia: "Estructura Política de la OTAN"
  },
  {
    id: "B3-005",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Unión Europea - PESC / PCSD",
    pregunta: "En el Tratado de la Unión Europea, ¿qué artículo contiene la cláusula de defensa mutua en caso de que un Estado miembro sea objeto de agresión armada en su territorio?",
    opciones: [
      "Artículo 5 del Tratado de Roma.",
      "Artículo 42.7 del Tratado de la Unión Europea (Tratado de Lisboa).",
      "Artículo 222 del Tratado de Funcionamiento (cláusula de solidaridad en catástrofes).",
      "Artículo 8 de la Carta Social Europea."
    ],
    correcta: 1,
    justificacion: "El artículo 42.7 del TUE establece que si un Estado miembro es objeto de una agresión armada en su territorio, los demás Estados miembros le prestarán ayuda y asistencia con todos los medios a su alcance.",
    referencia: "Tratado de la Unión Europea, Art. 42.7"
  },
  {
    id: "B3-006",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Organización de Naciones Unidas (ONU)",
    pregunta: "¿Qué capítulo de la Carta de las Naciones Unidas regula la acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión, autorizando el uso de la fuerza?",
    opciones: [
      "Capítulo V (Composición del Consejo de Seguridad).",
      "Capítulo VI (Arreglo pacífico de controversias).",
      "Capítulo VII (Acción en caso de amenazas a la paz y actos de agresión).",
      "Capítulo XIV (Corte Internacional de Justicia)."
    ],
    correcta: 2,
    justificacion: "El Capítulo VII de la Carta de la ONU faculta al Consejo de Seguridad para determinar la existencia de amenazas o actos de agresión y autorizar medidas coercitivas militares o no militares para restablecer la paz.",
    referencia: "Carta de las Naciones Unidas, Capítulo VII"
  },
  {
    id: "B3-007",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Estrategia de Seguridad Nacional (ESN)",
    pregunta: "¿Cuál es el documento estratégico de máximo nivel aprobado por el Gobierno que define las líneas de acción y amenazas para la seguridad de España?",
    opciones: [
      "La Directiva de Defensa Nacional (DDN).",
      "La Estrategia de Seguridad Nacional (ESN).",
      "El Libro Blanco de la Defensa.",
      "El Plan General Militar (PGM)."
    ],
    correcta: 1,
    justificacion: "La Estrategia de Seguridad Nacional (ESN) es el marco de referencia político-estratégico integral para la seguridad en España, impulsado por el Presidente del Gobierno.",
    referencia: "Ley 36/2015 y ESN"
  },
  {
    id: "B3-008",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley Orgánica de la Defensa Nacional (LODN 5/2005)",
    pregunta: "Para ordenar operaciones de las Fuerzas Armadas en el exterior que no estén directamente relacionadas con la defensa de España o el interés nacional, ¿qué requisito legal es imprescindible?",
    opciones: [
      "Aprobación unánime del Consejo Superior de Defensa.",
      "Previa autorización del Congreso de los Diputados.",
      "Firma conjunta del Ministro de Defensa y el Jefe de Estado Mayor de la Defensa.",
      "Ratificación por el Senado mediante mayoría absoluta."
    ],
    correcta: 1,
    justificacion: "El artículo 17 de la Ley Orgánica 5/2005 exige la previa consulta y autorización del Congreso de los Diputados para la participación de las FAS en misiones en el exterior.",
    referencia: "LODN 5/2005, Art. 17"
  },
  {
    id: "B3-009",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Estructura de la OTAN",
    pregunta: "¿Cuál es el cuartel general supremo de las operaciones de la OTAN en Europa y dónde radica su sede?",
    opciones: [
      "SHAPE (Supreme Headquarters Allied Powers Europe), en Mons (Bélgica).",
      "HQ Allied Command Transformation (ACT), en Norfolk (EE.UU.).",
      "LANDCOM (Comando Terrestre Aliado), en Esmirna (Turquía).",
      "AIRCOM (Comando Aéreo Aliado), en Ramstein (Alemania)."
    ],
    correcta: 0,
    justificacion: "El Cuartel General Supremo de las Potencias Aliadas en Europa (SHAPE) es el mando de las operaciones de la OTAN y se encuentra en Casteau/Mons (Bélgica).",
    referencia: "Estructura de Mandos de la OTAN"
  },
  {
    id: "B3-010",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Consejo de Seguridad de la ONU",
    pregunta: "¿Cuáles son los cinco miembros permanentes con derecho de veto en el Consejo de Seguridad de la ONU?",
    opciones: [
      "España, Estados Unidos, Reino Unido, Francia y Alemania.",
      "Estados Unidos, Rusia, China, Francia y Reino Unido.",
      "Estados Unidos, Canadá, Japón, Alemania y Reino Unido.",
      "Estados Unidos, Rusia, India, Francia y Brasil."
    ],
    correcta: 1,
    justificacion: "Los cinco miembros permanentes (P5) con derecho de veto en el Consejo de Seguridad de la ONU son: Estados Unidos, la Federación Rusa, la República Popular China, Francia y el Reino Unido.",
    referencia: "Carta de la ONU, Art. 23"
  },

  // ==========================================
  // PREGUNTAS COMPLEMENTARIAS DE PROFUNDIZACIÓN
  // ==========================================
  {
    id: "B1-013",
    bloque: "Bloque 1: Organización",
    materia: "Reales Ordenanzas (RD 96/2009)",
    pregunta: "En las Reales Ordenanzas, respecto al trato al subordinado, el que ejerza mando:",
    opciones: [
      "Deberá mantener una distancia estricta sin preocuparse de sus problemas personales o asistenciales.",
      "Se preocupará por sus hombres, procurando conocerlos, velando por su bienestar e instruyéndolos con el ejemplo.",
      "Solo se comunicará con ellos a través de los Cabos Primeros mediante órdenes de servicio.",
      "Evitará cualquier tipo de reconocimiento público para no generar favoritismos."
    ],
    correcta: 1,
    justificacion: "Art. 60 de las Reales Ordenanzas: 'El que ejerza mando se preocupará por el bienestar moral y material de sus subordinados, procurará conocerlos personalmente y velará por su seguridad e instrucción'.",
    referencia: "RD 96/2009, Art. 60"
  },
  {
    id: "B2-013",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Régimen Disciplinario FAS (LO 8/2014)",
    pregunta: "¿A qué autoridad militar compete resolver el recurso de alzada contra una sanción disciplinaria por falta leve impuesta por un Jefe de Batallón o Grupo?",
    opciones: [
      "Al mismo Jefe de Batallón mediante reposición.",
      "Al superior jerárquico de quien impuso la sanción (generalmente el Jefe de Regimiento / Brigada).",
      "Al Tribunal Militar Central.",
      "Al Subdelegado de Defensa provincial."
    ],
    correcta: 1,
    justificacion: "Conforme a la LO 8/2014, el recurso de alzada disciplinario militar se interpone ante la autoridad u órgano militar superior jerárquico del que dictó la resolución sancionadora.",
    referencia: "Ley Orgánica 8/2014, Art. 68"
  },
  {
    id: "B3-011",
    bloque: "Bloque 3: Seguridad Nacional",
    materia: "Ley 36/2015 de Seguridad Nacional",
    pregunta: "¿Qué órgano de apoyo técnico inmediato asiste al Consejo de Seguridad Nacional en la Presidencia del Gobierno?",
    opciones: [
      "El Departamento de Seguridad Nacional (DSN).",
      "El Centro Nacional de Inteligencia (CNI).",
      "El Gabinete del JEMAD.",
      "La Dirección General de Protección Civil y Emergencias."
    ],
    correcta: 0,
    justificacion: "El Departamento de Seguridad Nacional (DSN), radicado en el complejo de la Moncloa, actúa como órgano de trabajo permanente del Consejo de Seguridad Nacional.",
    referencia: "Ley 36/2015, Art. 20"
  },
  {
    id: "B2-014",
    bloque: "Bloque 2: Jurídico-Social",
    materia: "Ley 39/2007 de la Carrera Militar",
    pregunta: "¿En qué escala se integran los militares profesionales de tropa y marinería que obtienen la condición de militar de carrera?",
    opciones: [
      "Escala Básica de Suboficiales.",
      "Escala de Tropa y Marinería.",
      "Escala Técnica de Subinspección.",
      "Cuerpo Auxiliar de Especialistas."
    ],
    correcta: 1,
    justificacion: "La Ley 39/2007 define que los militares de carrera de la categoría de tropa y marinería se integran en la Escala de Tropa y Marinería de su respectivo cuerpo militar.",
    referencia: "Ley 39/2007, Art. 21 y 74"
  },
  {
    id: "B1-014",
    bloque: "Bloque 1: Organización",
    materia: "Constitución Española",
    pregunta: "Según el art. 116 de la Constitución Española, el 'Estado de Sitio' será declarado por:",
    opciones: [
      "El Presidente del Gobierno mediante Real Decreto.",
      "El Congreso de los Diputados, por mayoría absoluta de sus miembros, a propuesta exclusiva del Gobierno.",
      "El Rey con el refrendo del Ministro de Defensa y el JEMAD.",
      "El Senado por mayoría de dos tercios a petición del Consejo de Ministros."
    ],
    correcta: 1,
    justificacion: "El art. 116.4 de la CE dispone: 'El estado de sitio será declarado por la mayoría absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno'.",
    referencia: "CE Art. 116.4"
  }
];
