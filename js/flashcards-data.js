/**
 * BANCO DE TARJETAS FLASHCARDS TÁCTICAS v3.0 (24 TARJETAS DE ALTO IMPACTO)
 * OPOSICIÓN PERMANENCIA FAS — EJÉRCITO DE TIERRA (ACTUALIZADO 2025/2026)
 */

const DEFAULT_FLASHCARDS = [
  {
    id: "FC-001",
    bloque: "Bloque 1: Organización",
    concepto: "Art. 8.1 Constitución Española — Misión de las FAS",
    frente: "¿Cuáles son los 3 pilares de la misión de las Fuerzas Armadas según el Art. 8.1 de la CE y en qué Título se ubica?",
    reverso: "📍 Ubicación: TÍTULO PRELIMINAR (Art. 8.1 CE).\n1. Garantizar la soberanía e independencia de España.\n2. Defender su integridad territorial.\n3. Defender el ordenamiento constitucional.",
    clave: "CE Art. 8.1 (Título Preliminar)"
  },
  {
    id: "FC-002",
    bloque: "Bloque 1: Organización",
    concepto: "Escalones orgánicos del Ejército de Tierra (Instrucción 14/2021)",
    frente: "¿En qué 3 grandes escalones se articula la organización básica del Ejército de Tierra?",
    reverso: "1. El Cuartel General (CGET - Madrid).\n2. La Fuerza (FUTER, CGTAD y MCANA).\n3. El Apoyo a la Fuerza (MAPER, MALE, MADOC e IGE).",
    clave: "Instrucción 14/2021 ET"
  },
  {
    id: "FC-003",
    bloque: "Bloque 1: Organización",
    concepto: "Sedes de Mandos del Ejército de Tierra",
    frente: "¿Dónde radican las sedes de: CGET, FUTER, CGTAD, MADOC, IGE y MCANA?",
    reverso: "• CGET, MAPER y MALE: Madrid\n• FUTER (Fuerza Terrestre): Sevilla\n• CGTAD (HQ NRDC-ESP): Valencia (Bétera)\n• MADOC (Adiestramiento y Doctrina): Granada\n• IGE (Inspección General): Barcelona\n• MCANA (Mando de Canarias): Santa Cruz de Tenerife",
    clave: "Sedes Oficiales ET"
  },
  {
    id: "FC-004",
    bloque: "Bloque 1: Organización",
    concepto: "⚠️ TRAMPA 2025: Unidades dependientes de FUTER vs MCANA",
    frente: "¿De qué Mando dependen las Comandancias Generales de Ceuta, Melilla y Baleares en la Instrucción 14/2021?",
    reverso: "🔥 ¡OJO TRAMPA DE EXAMEN!\n• Las COMGE de Ceuta, Melilla y Baleares + la BRI XVI (Canarias) dependen del MANDO DE CANARIAS (MCANA).\n• La FUTER (Sevilla) encuadra: División 'San Marcial' (Burgos), División 'Castillejos' (Huesca) y Mando de Apoyo a la Maniobra (MAM - A Coruña).",
    clave: "Instrucción 14/2021 (MCANA vs FUTER)"
  },
  {
    id: "FC-005",
    bloque: "Bloque 1: Organización",
    concepto: "🔥 NOVEDAD 2024/2025: Estructura del MINISDEF (RD 205/2024)",
    frente: "¿Qué nueva Dirección General creó el RD 205/2024 dentro de la SEDEF junto a la DGAM, y qué órganos dependen de la SUBDEF?",
    reverso: "• En la SEDEF se creó la DIGEID (Dirección General de Estrategia e Innovación de la Industria de Defensa), junto a DGAM, DIGENECO, DIGENIN y CESTIC.\n• De la SUBDEF dependen: SEGENTE, DIGENPER, DIGEREM, DIGESAN, Asesoría Jurídica General e Intervención General.",
    clave: "RD 205/2024 y RD 268/2025"
  },
  {
    id: "FC-006",
    bloque: "Bloque 1: Organización",
    concepto: "Estados de Excepcionalidad (Art. 116 CE)",
    frente: "¿Quién declara los estados de Alarma, Excepción y Sitio y por cuánto tiempo?",
    reverso: "• ALARMA: El Gobierno por Decreto (máx. 15 días, dando cuenta al Congreso; prórroga con autorización del Congreso).\n• EXCEPCIÓN: El Gobierno por Decreto, PREVIA autorización del Congreso (máx. 30 días prorrogables otros 30).\n• SITIO: Mayoría absoluta del Congreso a propuesta exclusiva del Gobierno.",
    clave: "CE Art. 116"
  },
  {
    id: "FC-007",
    bloque: "Bloque 1: Organización",
    concepto: "Defensor del Pueblo y Tribunal Constitucional (CE)",
    frente: "¿Cuántos miembros forman el Tribunal Constitucional, cuánto dura su mandato y cuánto dura el del Defensor del Pueblo?",
    reverso: "• Tribunal Constitucional (Art. 159 CE): 12 miembros nombrados por el Rey (4 Congreso por 3/5, 4 Senado por 3/5, 2 Gobierno, 2 CGPJ). Mandato de 9 AÑOS (renovados por tercios cada 3 años).\n• Defensor del Pueblo (Art. 54 CE): Alto comisionado de las Cortes Generales para defender todo el Título I. Mandato de 5 AÑOS.",
    clave: "CE Arts. 54 y 159"
  },
  {
    id: "FC-008",
    bloque: "Bloque 1: Organización",
    concepto: "Ley 40/2015 LRJSP — Delegación de Competencias vs Avocación",
    frente: "¿Se publica en el BOE la delegación de competencias y la delegación de firma? ¿Cabe recurso contra la avocación?",
    reverso: "• Delegación de competencias (Art. 9): SÍ se publica obligatoriamente en el BOE.\n• Delegación de firma (Art. 12): NO requiere publicación en el BOE.\n• Avocación (Art. 10.2): Contra el acuerdo de avocación NO CABE RECURSO.",
    clave: "Ley 40/2015 Arts. 9, 10 y 12"
  },
  {
    id: "FC-009",
    bloque: "Bloque 1: Organización",
    concepto: "Organización Básica de las FAS y EMAD (RD 521/2020 y Orden DEF/710/2020)",
    frente: "¿Cuáles son los órganos básicos del Estado Mayor de la Defensa (EMAD) bajo el mando del JEMAD?",
    reverso: "1. Cuartel General del EMAD (con el EMACON al mando del JEMACON).\n2. Mando de Operaciones (MOPS - Retamares, al mando del CMOPS).\n3. Centro de Inteligencia de las FAS (CIFAS - JECIFAS).\n4. Mando Conjunto del Ciberespacio (MCCE - JEMCCE).\n5. CESEDEN.",
    clave: "RD 521/2020 / Orden DEF/710/2020"
  },
  {
    id: "FC-010",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Ley 8/2006 Tropa y Marinería — Compromisos y RED",
    frente: "¿Cuáles son los requisitos y límites de Compromiso Inicial, CLD, Permanencia y RED?",
    reverso: "1. Compromiso Inicial: renovable hasta 6 años.\n2. Compromiso de Larga Duración (CLD): >5 años de servicio (3 en inicial), hasta los 45 años de edad.\n3. Permanencia (Militar de Carrera): tener suscrito el CLD + mín. 14 años de servicio (según convocatoria) + oposición.\n4. Reservista Especial Disponibilidad (RED): cumplir 45 años + mín. 18 años de servicio (hasta los 65 años).",
    clave: "Ley 8/2006"
  },
  {
    id: "FC-011",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Ley 39/2007 Carrera Militar — Situaciones Administrativas (Art. 107)",
    frente: "¿Cuáles son las 6 situaciones administrativas de los militares profesionales?",
    reverso: "1. Servicio activo.\n2. Servicios especiales.\n3. Excedencia.\n4. Suspensión de funciones.\n5. Suspensión de empleo.\n6. Reserva.",
    clave: "Ley 39/2007 Art. 107"
  },
  {
    id: "FC-012",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Sanciones por Faltas Leves, Graves y Muy Graves (LO 8/2014)",
    frente: "¿Cuáles son todas las sanciones previstas en el Art. 11 de la LO 8/2014 para cada tipo de falta?",
    reverso: "• LEVES: Reprensión | Privación salida (1-8 días) | Económica (1-8 días) | Arresto (1-14 días).\n• GRAVES: Económica (8-15 días) | Arresto (15-30 días) | Pérdida de destino | Baja en centro docente.\n• MUY GRAVES: Arresto (31-60 días) | Suspensión de empleo (1 mes a 1 año) | Separación del servicio | Resolución de compromiso.",
    clave: "LO 8/2014 Art. 11"
  },
  {
    id: "FC-013",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "⚠️ SÚPER TRAMPA: Prescripción de FALTAS vs SANCIONES (LO 8/2014)",
    frente: "¿En qué plazos prescriben las FALTAS (Art. 24) frente a las SANCIONES (Art. 25) en la LO 8/2014?",
    reverso: "📌 PRESCRIPCIÓN DE FALTAS (Art. 24):\n• Leves: 2 MESES | Graves: 1 año | Muy graves: 2 años.\n\n📌 PRESCRIPCIÓN DE SANCIONES (Art. 25):\n• Leves: 3 MESES | Graves: 1 año | Muy graves: 2 años.",
    clave: "LO 8/2014 Arts. 24-25"
  },
  {
    id: "FC-014",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Competencia sancionadora y Cancelación de Notas (LO 8/2014)",
    frente: "¿Puede un Jefe de Compañía imponer arresto? ¿A qué plazos se cancelan las notas desfavorables (Art. 65)?",
    reverso: "• Jefe de Compañía (Art. 32.5): NO impone arresto. Su tope es Reprensión, Privación de salida hasta 5 días y Económica hasta 5 días.\n• Cancelación de notas (Art. 65): Falta Leve = 1 año | Falta Grave = 2 años | Falta Muy Grave = 4 años.",
    clave: "LO 8/2014 Arts. 32.5 y 65"
  },
  {
    id: "FC-015",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "⚠️ TRAMPA: Los Dos Observatorios y porcentajes COPERFAS (LO 9/2011)",
    frente: "Diferencia entre el Observatorio de la Vida Militar y el Observatorio Militar para la Igualdad, y porcentajes del COPERFAS:",
    reverso: "1. Observatorio de la VIDA MILITAR (LO 9/2011): adscrito a las CORTES GENERALES (9 miembros: 5 Congreso + 4 Senado, por 5 años).\n2. Observatorio Militar para la IGUALDAD: adscrito a la SUBDEF (mín. 2 reuniones/año).\n3. Porcentajes COPERFAS (Art. 48): 1% general FAS | 3% Oficiales | 3% Suboficiales | 1,5% Tropa y Marinería.",
    clave: "LO 9/2011 Arts. 48 y 54"
  },
  {
    id: "FC-016",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Iniciativas y Quejas (RD 176/2014) y Protocolo Acoso (UPA)",
    frente: "¿Quién recepciona las iniciativas/quejas en la unidad, qué pasa si no contestan en 1 mes, y cómo se denuncia ante la UPA?",
    reverso: "• Iniciativas y Quejas (RD 176/2014): se designa un Oficial, Suboficial o CABO MAYOR. Si en 1 MES el jefe de unidad no contesta la queja, el militar puede acudir directamente al MAPER.\n• Protocolo Acoso (UPA): se puede acudir directamente a la UPA SIN seguir el conducto reglamentario.",
    clave: "RD 176/2014 / Protocolo UPA"
  },
  {
    id: "FC-017",
    bloque: "Bloque 2: Jurídico-Social",
    concepto: "Recursos Administrativos y Nulidad (Ley 39/2015 LPACAP)",
    frente: "Plazos de Alzada vs Reposición y diferencia entre incompetencia territorial/material vs jerárquica:",
    reverso: "• Alzada vs Reposición: Ambos se interponen en 1 MES (acto expreso). Plazo para RESOLVER: Alzada = 3 MESES | Reposición = 1 MES.\n• Incompetencia manifiesta por MATERIA o TERRITORIO = Nulidad de pleno derecho (Art. 47). Incompetencia JERÁRQUICA = Anulabilidad convalidable (Arts. 48 y 52).",
    clave: "Ley 39/2015 Arts. 47, 121-124"
  },
  {
    id: "FC-018",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Ley 36/2015 de Seguridad Nacional y ESN 2021 (RD 1150/2021)",
    frente: "¿Quién declara la Situación de Interés para la Seguridad Nacional, cuáles son sus 3 componentes y cada cuánto se revisa la ESN?",
    reverso: "• La declara el Presidente del Gobierno por Real Decreto (Art. 24).\n• Los 3 componentes fundamentales (Art. 9): Defensa Nacional, Seguridad Pública y Acción Exterior.\n• El Consejo de Seguridad Nacional se reúne mín. cada 2 meses (bimestral).\n• La Estrategia (ESN 2021) se revisa cada 5 AÑOS.",
    clave: "Ley 36/2015 y RD 1150/2021"
  },
  {
    id: "FC-019",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Doctrina de Acción Conjunta (PDC-01)",
    frente: "¿Qué diferencia hay entre Operación Conjunta y Combinada, cuáles son los 5 dominios y qué es el Mando Tipo Misión?",
    reverso: "• CONJUNTA: fuerzas de dos o más Ejércitos nacionales (ET, Armada, EA).\n• COMBINADA: fuerzas de dos o más países aliados.\n• 5 Dominios: Terrestre, Marítimo, Aéreo, Espacial y Ciberespacial.\n• Mando Tipo Misión: dirección centralizada (propósito del comandante) con ejecución descentralizada.",
    clave: "Doctrina PDC-01"
  },
  {
    id: "FC-020",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Organización de las Naciones Unidas (ONU)",
    frente: "¿Cuándo ingresó España en la ONU, cómo se compone el Consejo de Seguridad y qué regulan los Capítulos VI y VII?",
    reverso: "• Ingreso de España: 14 de diciembre de 1955.\n• Consejo de Seguridad: 15 miembros (5 permanentes con veto: EE.UU., Rusia, China, Francia y Reino Unido + 10 elegidos por 2 años).\n• Capítulo VI: Arreglo pacífico de controversias.\n• Capítulo VII: Acción coercitiva y uso de la fuerza ante amenazas a la paz.",
    clave: "Carta ONU (1945)"
  },
  {
    id: "FC-021",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "OTAN — Miembros 2024/2025, Mandos y Sedes en España",
    frente: "¿Cuántos miembros tiene la OTAN, cuáles son sus 2 Mandos Estratégicos y qué sedes OTAN hay en España?",
    reverso: "• 32 Estados miembros (Finlandia 31 en 2023, Suecia 32 en 2024). España ingresó el 30 de mayo de 1982.\n• Mandos Estratégicos: ACO (Operaciones, en SHAPE - Mons, Bélgica) y ACT (Transformación, en Norfolk, EE.UU.).\n• En España: CAOC Torrejón (Estructura de Mandos) y HQ NRDC-ESP en Bétera, Valencia (Estructura de Fuerzas).",
    clave: "OTAN (32 Aliados)"
  },
  {
    id: "FC-022",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "OSCE — Origen, Miembros, Dimensiones y Sede",
    frente: "¿Dónde nació la OSCE, cuántos Estados participantes tiene, cómo decide y dónde está su Secretariado?",
    reverso: "• Origen: Acta Final de Helsinki (1975, como CSCE); pasa a llamarse OSCE en la Cumbre de Budapest (1994).\n• 57 Estados participantes (Norteamérica, Europa y Asia Central) que deciden por CONSENSO.\n• 3 Dimensiones ('Cestas'): Político-Militar, Económica-Medioambiental y Humana.\n• Sede: VIENA (Austria). España la presidió en 2007.",
    clave: "OSCE (Tema 5 Bloque 3)"
  },
  {
    id: "FC-023",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "Unión Europea — Cláusulas de Defensa (Art. 42.7 TUE vs Art. 222 TFUE)",
    frente: "Diferencia entre el Art. 42.7 del TUE y el Art. 222 del TFUE, y qué agencia de defensa UE está en España:",
    reverso: "• Art. 42.7 TUE (Cláusula de Asistencia Mutua): ante AGRESIÓN ARMADA contra el territorio de un Estado miembro.\n• Art. 222 TFUE (Cláusula de Solidaridad): ante ATAQUE TERRORISTA o catástrofe natural o de origen humano.\n• En Torrejón de Ardoz (Madrid) está la sede del Centro de Satélites de la UE (SATCEN).",
    clave: "UE Art. 42.7 TUE / Art. 222 TFUE"
  },
  {
    id: "FC-024",
    bloque: "Bloque 3: Seguridad Nacional",
    concepto: "🔥 España en Misiones Internacionales (Actualizado 2024/2025)",
    frente: "¿Cuándo empezaron las misiones en el exterior, quién las autoriza y dónde es España 'Nación Marco' de la OTAN desde 2024?",
    reverso: "• Inicio histórico: 1989 en Angola (UNAVEM I) y Namibia (UNTAG).\n• Autorización (Art. 17 LO 5/2005): el CONGRESO DE LOS DIPUTADOS.\n• Misiones clave actuales: FINUL ('Libre Hidalgo' en Líbano), EUNAVFOR Atalanta (OHQ en Rota), Letonia (eFP Adazi) y ESLOVAQUIA (Lešť), donde España lidera como 'Nación Marco' desde 2024.",
    clave: "Misiones Internacionales FAS"
  }
];
