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
    reverso: "1. El Cuartel General (CGET - Madrid).\n2. La Fuerza (FUTER, CGTAD, MCANA).\n3. El Apoyo a la Fuerza (MAPER, MALE, MADOC, IGE).",
    clave: "Estructura ET"
  },
  {
    id: "FC-003",
    bloque: "Bloque 1: Organización",
    concepto: "Sedes de Mandos del Ejército de Tierra",
    frente: "¿Dónde radican las sedes de: CGET, FUTER, CGTAD, MADOC, IGE y MCANA?",
    reverso: "• CGET, MAPER y MALE: Madrid\n• FUTER (Fuerza Terrestre): Sevilla\n• CGTAD: Valencia (Bétera)\n• MADOC: Granada\n• IGE: Barcelona\n• MCANA: Santa Cruz de Tenerife",
    clave: "Sedes ET"
  },
  {
    id: "FC-004",
    bloque: "Bloque 1: Organización",
    concepto: "Estados de Excepcionalidad (Art. 116 CE)",
    frente: "¿Quién declara los estados de Alarma, Excepción y Sitio y por cuánto tiempo?",
    reverso: "• ALARMA: El Gobierno por Decreto (máx. 15 días, da cuenta al Congreso; prórroga con autorización del Congreso).\n• EXCEPCIÓN: El Gobierno por Decreto, PREVIA autorización del Congreso (máx. 30 días prorrogables otros 30).\n• SITIO: Mayoría absoluta del Congreso a propuesta exclusiva del Gobierno.",
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
    concepto: "⚠️ TRAMPA: Prescripción de FALTAS vs SANCIONES (LO 8/2014)",
    frente: "¿En qué plazos prescriben las FALTAS (Art. 24) frente a las SANCIONES (Art. 25) en la LO 8/2014?",
    reverso: "📌 PRESCRIPCIÓN DE FALTAS (Art. 24):\n• Leves: 2 meses | Graves: 1 año | Muy graves: 2 años.\n\n📌 PRESCRIPCIÓN DE SANCIONES (Art. 25):\n• Leves: 3 meses | Graves: 1 año | Muy graves: 2 años.",
    clave: "LO 8/2014 Arts. 24-25"
  },
  {
    id: "FC-008",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Cancelación de Notas Desfavorables (Art. 65 LO 8/2014)",
    frente: "¿A qué plazos se cancelan las anotaciones de sanciones (Leves, Graves, Muy Graves)?",
    reverso: "• Sanción por falta leve: 1 año.\n• Sanción por falta grave: 2 años.\n• Sanción por falta muy grave: 4 años.",
    clave: "LO 8/2014 Art. 65"
  },
  {
    id: "FC-009",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Ley 8/2006 Tropa y Marinería — Compromisos y RED",
    frente: "¿Cuáles son los límites de Compromiso Inicial, CLD, Permanencia y RED?",
    reverso: "1. Compromiso Inicial: hasta 6 años.\n2. Compromiso de Larga Duración (CLD): hasta los 45 años de edad.\n3. Permanencia (Militar de Carrera): mínimo 14 años de servicio + oposición.\n4. Reservista Especial Disponibilidad (RED): mínimo 18 años de servicio, de los 45 a los 65 años.",
    clave: "Ley 8/2006"
  },
  {
    id: "FC-010",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Cláusulas de Defensa Colectiva (OTAN vs UE)",
    frente: "Diferencia entre el artículo de defensa colectiva de la OTAN y los de la Unión Europea:",
    reverso: "• OTAN: Art. 4 (Consulta) y Art. 5 (Defensa Colectiva) del Tratado de Washington (1949).\n• Unión Europea: Art. 42.7 TUE (Asistencia mutua ante agresión armada) y Art. 222 TFUE (Cláusula de Solidaridad ante terrorismo o catástrofes).",
    clave: "OTAN / UE"
  },
  {
    id: "FC-011",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Consejo de Seguridad Nacional (Ley 36/2015)",
    frente: "¿Quién declara la Situación de Interés para la Seguridad Nacional y cuáles son los 3 componentes fundamentales?",
    reverso: "• La declara el Presidente del Gobierno mediante Real Decreto (Art. 24).\n• Los 3 componentes fundamentales (Art. 9) son: Defensa Nacional, Seguridad Pública y Acción Exterior.",
    clave: "Ley 36/2015 Arts. 9 y 24"
  },
  {
    id: "FC-012",
    bloque: "Bloque 1: Organización",
    concepto: "Recursos Administrativos (Ley 39/2015 LPACAP)",
    frente: "Diferencia de plazos entre el Recurso de Alzada y el Potestativo de Reposición:",
    reverso: "• Interposición (ambos): 1 mes si el acto es expreso (3 meses si es presunto).\n• Plazo máximo para RESOLVER:\n  - Alzada: 3 MESES.\n  - Reposición: 1 MES.",
    clave: "Ley 39/2015 Arts. 121-124"
  }
];
