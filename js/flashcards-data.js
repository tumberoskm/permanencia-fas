/**
 * BANCO DE TARJETAS FLASHCARDS - OPOSICIÓN PERMANENCIA FAS
 */

const DEFAULT_FLASHCARDS = [
  {
    id: "FC-001",
    bloque: "Bloque 1: Organización",
    concepto: "Art. 8.1 Constitución Española — Misión de las FAS",
    frente: "¿Cuáles son los 3 pilares de la misión de las Fuerzas Armadas según el Art. 8.1 de la CE?",
    reverso: "1. Garantizar la soberanía e independencia de España.\n2. Defender su integridad territorial.\n3. Defender el ordenamiento constitucional.",
    clave: "CE Art. 8.1"
  },
  {
    id: "FC-002",
    bloque: "Bloque 1: Organización",
    concepto: "Escalones orgánicos del Ejército de Tierra",
    frente: "¿En qué 3 grandes escalones se articula la organización básica del Ejército de Tierra?",
    reverso: "1. El Cuartel General (CGET - Madrid).\n2. La Fuerza (FUTER, FLO, MCANA).\n3. El Apoyo a la Fuerza (MAPER, MALE, MADOC, IGE).",
    clave: "Estructura ET"
  },
  {
    id: "FC-003",
    bloque: "Bloque 1: Organización",
    concepto: "Sedes de Mandos del Ejército de Tierra",
    frente: "¿Dónde radican las sedes de: CGET, FUTER, MADOC e IGE?",
    reverso: "• CGET (Estado Mayor): Madrid (Palacio de Buenavista)\n• FUTER (Fuerza Terrestre): Sevilla\n• MADOC (Adiestramiento y Doctrina): Granada\n• IGE (Inspección General del Ejército): Barcelona",
    clave: "Sedes ET"
  },
  {
    id: "FC-004",
    bloque: "Bloque 1: Organización",
    concepto: "Estados de Excepcionalidad (Art. 116 CE)",
    frente: "¿Quién declara los estados de Alarma, Excepción y Sitio?",
    reverso: "• ALARMA: El Gobierno mediante Decreto (máx. 15 días, da cuenta al Congreso).\n• EXCEPCIÓN: El Gobierno mediante Decreto, PREVIA autorización del Congreso (máx. 30 días prorrogables).\n• SITIO: Mayoría absoluta del Congreso a propuesta exclusiva del Gobierno.",
    clave: "CE Art. 116"
  },
  {
    id: "FC-005",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Sanciones por Faltas Leves (LO 8/2014)",
    frente: "¿Cuáles son las 4 sanciones posibles por FALTA LEVE y su duración máxima?",
    reverso: "1. Reprensión.\n2. Privación de salida: de 1 a 8 días.\n3. Sanción económica: de 1 a 8 días.\n4. Arresto: de 1 a 14 días.",
    clave: "LO 8/2014 Art. 11"
  },
  {
    id: "FC-006",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Sanciones por Faltas Graves y Muy Graves",
    frente: "¿Cuáles son los tramos de ARRESTO para faltas leves, graves y muy graves?",
    reverso: "• Falta Leve: 1 a 14 días.\n• Falta Grave: 15 a 30 días.\n• Falta Muy Grave: 31 a 60 días.",
    clave: "LO 8/2014 Art. 11"
  },
  {
    id: "FC-007",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Prescripción de Faltas Disciplinarias (LO 8/2014)",
    frente: "¿En qué plazos prescriben las Faltas Leves, Graves y Muy Graves?",
    reverso: "• Faltas Leves: 3 meses.\n• Faltas Graves: 2 años.\n• Faltas Muy Graves: 3 años.",
    clave: "LO 8/2014 Art. 24"
  },
  {
    id: "FC-008",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Cancelación de Notas Desfavorables",
    frente: "¿A qué plazos se cancelan las anotaciones de sanciones (Leves, Graves, Muy Graves)?",
    reverso: "• Sanción por falta leve: 1 año.\n• Sanción por falta grave: 2 años.\n• Sanción por falta muy grave: 4 años.",
    clave: "LO 8/2014 Art. 65"
  },
  {
    id: "FC-009",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Ley 8/2006 Tropa y Marinería — Compromisos",
    frente: "¿Cuáles son los 3 tipos de relación de servicios en Tropa y Marinería y sus límites?",
    reverso: "1. Compromiso Inicial: renovable hasta 6 años.\n2. Compromiso de Larga Duración (CLD): hasta los 45 años de edad.\n3. Condición de Permanente (Militar de Carrera): a partir de 14 años de servicio superando oposición.",
    clave: "Ley 8/2006"
  },
  {
    id: "FC-010",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Cláusulas de Defensa Colectiva (OTAN vs UE)",
    frente: "Diferencia entre el artículo de defensa colectiva de la OTAN y el de la Unión Europea:",
    reverso: "• OTAN: Artículo 5 del Tratado de Washington (1949).\n• Unión Europea: Artículo 42.7 del Tratado de la Unión Europea (Asistencia mutua ante agresión armada) y Art. 222 TFUE (Cláusula de Solidaridad ante terrorismo o catástrofes).",
    clave: "OTAN / UE"
  },
  {
    id: "FC-011",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Consejo de Seguridad Nacional (Ley 36/2015)",
    frente: "¿Qué es el Consejo de Seguridad Nacional y quién actúa como órgano de apoyo técnico?",
    reverso: "• Es una Comisión Delegada del Gobierno para la Seguridad Nacional.\n• Presidido por el Presidente del Gobierno (o SM el Rey si asiste).\n• Su órgano de trabajo permanente es el DSN (Departamento de Seguridad Nacional).",
    clave: "Ley 36/2015 Art. 20-21"
  },
  {
    id: "FC-012",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Fórmula Oficial Examen Permanencia",
    frente: "¿Cómo se calcula la puntuación directa de una prueba tipo test en la oposición de Permanencia?",
    reverso: "Puntuación = Aciertos - (Errores / 3)\n• Cada fallo resta 0,333 puntos.\n• Las preguntas en blanco NO restan (0 puntos).",
    clave: "Fórmula Oficial BOD"
  }
];
