/**
 * BASE DE DATOS DEL TEMARIO OFICIAL ESTRUCTURADO POR BLOQUES Y TEMAS
 * Oposición de Permanencia de Tropa y Marinería (Ejército de Tierra)
 * Incluye: Resumen Ejecutivo, Puntos Calientes de Examen, Trampas del Tribunal y Tablas Comparativas.
 */

const OFFICIAL_SYLLABUS = [
  // =========================================================================
  // BLOQUE 1: ORGANIZACIÓN (6 TEMAS OFICIALES)
  // =========================================================================
  {
    codigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    numero: 1,
    titulo: "La Constitución Española de 1978",
    normativa: "Constitución Española (BOE núm. 311, de 29 de diciembre de 1978)",
    resumen: "Norma suprema del ordenamiento jurídico español. Consta de 169 artículos estructurados en un Preámbulo, un Título Preliminar (arts. 1 a 9) y 10 Títulos, además de 4 Disposiciones Adicionales, 9 Transitorias, 1 Derogatoria y 1 Final. Regula los valores superiores (libertad, justicia, igualdad y pluralismo político), la misión de las Fuerzas Armadas (Art. 8), los Derechos y Deberes Fundamentales (Título I), la Corona (Título II), las Cortes Generales (Título III), el Gobierno y la Administración (Título IV) y los estados de alarma, excepción y sitio (Art. 116).",
    puntosCalientes: [
      "Art. 1.1 CE: Valores superiores del ordenamiento jurídico: Libertad, Justicia, Igualdad y Pluralismo político.",
      "Art. 1.2 CE: La soberanía nacional reside en el pueblo español. Art. 1.3 CE: La forma política del Estado español es la Monarquía parlamentaria.",
      "Art. 8.1 CE: Las FAS (Ejército de Tierra, Armada y Ejército del Aire) tienen como misión garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.",
      "Art. 8.2 CE: Una Ley Orgánica regulará las bases de la organización militar (actualmente la LO 5/2005).",
      "Art. 62.h CE: Corresponde al Rey el Mando Supremo de las Fuerzas Armadas.",
      "Art. 97 CE: El Gobierno dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado.",
      "Art. 116 CE: Estados de Alarma (Gobierno por decreto, máx. 15 días), Excepción (Gobierno previa autorización del Congreso, máx. 30 días prorrogables otros 30) y Sitio (Mayoría absoluta del Congreso a propuesta exclusiva del Gobierno)."
    ],
    trampas: [
      "⚠️ TRAMPA CLÁSICA: Confundir el Art. 8 (Fuerzas Armadas) con el Art. 104 (Fuerzas y Cuerpos de Seguridad, cuya misión es proteger el libre ejercicio de los derechos y garantizar la seguridad ciudadana).",
      "⚠️ TRAMPA DE PLAZOS: El Estado de Alarma lo declara el Gobierno por 15 días dando cuenta al Congreso (solo necesita autorización del Congreso para PRORROGARLO). En cambio, el Estado de Excepción requiere autorización PREVIA del Congreso.",
      "⚠️ TRAMPA DE MANDO: El Mando Supremo de las FAS corresponde al Rey (Art. 62.h), pero la dirección de la defensa del Estado y de la Administración militar corresponde al Gobierno (Art. 97)."
    ]
  },
  {
    codigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    numero: 2,
    titulo: "Ley Orgánica 5/2005 de la Defensa Nacional",
    normativa: "Ley Orgánica 5/2005, de 17 de noviembre, de la Defensa Nacional",
    resumen: "Regula las bases de la organización militar conforme al artículo 8.2 de la Constitución. Define las atribuciones de los órganos constitucionales en materia de defensa (Corona, Cortes Generales, Gobierno, Presidente del Gobierno y Ministro de Defensa), el Consejo de Defensa Nacional, la estructura básica de las Fuerzas Armadas (estructura orgánica y estructura operativa) y el régimen de autorización de las operaciones en el exterior.",
    puntosCalientes: [
      "Presidente del Gobierno (Art. 6):Le corresponde la dirección de la política de defensa y la determinación de sus objetivos, la gestión de las situaciones de crisis y ordenar las misiones de las FAS.",
      "Ministro de Defensa (Art. 7):Le corresponde el desarrollo y la ejecución de la política de defensa y asistir al Presidente en la dirección estratégica de las operaciones militares.",
      "JEMAD (Art. 12): Ostenta el mando de la estructura operativa de las FAS y ejerce la dirección militar de las operaciones bajo la dependencia del Ministro de Defensa.",
      "Estructura de las FAS (Art. 11): Se organizan en dos estructuras: una ORGÁNICA (para la preparación de la fuerza, compuesta por ET, Armada y EA) y otra OPERATIVA (para su empleo en las misiones, bajo el mando del JEMAD).",
      "Misiones en el exterior (Art. 17): Para ordenar operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, el Gobierno realizará consulta previa y recabará la autorización del Congreso de los Diputados."
    ],
    trampas: [
      "⚠️ TRAMPA DE ÓRGANOS: Quien autoriza las misiones en el exterior es el CONGRESO DE LOS DIPUTADOS (no el Senado ni las Cortes Generales en sesión conjunta).",
      "⚠️ TRAMPA ORGÁNICA VS OPERATIVA: Los Jefes de Estado Mayor de los Ejércitos (JEME, AJEMA, JEMA) desarrollan la estructura ORGÁNICA (preparación de la fuerza), mientras que el JEMAD manda la estructura OPERATIVA (empleo de la fuerza)."
    ]
  },
  {
    codigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    numero: 3,
    titulo: "Procedimiento Administrativo y Régimen Jurídico (Leyes 39/2015 y 40/2015)",
    normativa: "Ley 39/2015 (LPACAP) y Ley 40/2015 (LRJSP)",
    resumen: "La Ley 39/2015 regula las relaciones 'ad extra' entre la Administración y los ciudadanos (actos administrativos, plazos, silencio administrativo, recursos de alzada, potestativo de reposición y extraordinario de revisión). La Ley 40/2015 regula el funcionamiento interno 'ad intra' de las Administraciones Públicas (principios de actuación, órganos colegiados, competencia, delegación de competencias, avocación y encomienda de gestión).",
    puntosCalientes: [
      "Recurso de Alzada (Arts. 121-122 Ley 39/2015): Contra resoluciones que NO pongan fin a la vía administrativa. Plazo de interposición: 1 MES si el acto es expreso (3 meses si es presunto). Plazo máximo para dictar y notificar resolución: 3 MESES.",
      "Recurso Potestativo de Reposición (Arts. 123-124 Ley 39/2015): Contra actos que SÍ pongan fin a la vía administrativa. Se interpone ante el mismo órgano que los dictó. Plazo: 1 MES si es expreso. Plazo para resolver: 1 MES.",
      "Recurso Extraordinario de Revisión (Art. 125 Ley 39/2015): Contra actos firmes en vía administrativa cuando concurra error de hecho (plazo 4 años) o aparezcan documentos esenciales / prevaricación / cohecho (plazo 3 meses).",
      "Cómputo de plazos (Art. 30 Ley 39/2015): Siempre que por Ley o Derecho de la UE no se exprese otro cómputo, cuando los plazos se señalen por días se entiende que éstos son HÁBILES, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
      "Delegación de competencias vs Avocación (Arts. 9 y 10 Ley 40/2015): En la delegación las resoluciones se consideran dictadas por el órgano delegante; en la avocación un órgano superior atrae para sí el conocimiento de un asunto concreto."
    ],
    trampas: [
      "⚠️ TRAMPA DE DÍAS HÁBILES: Con la Ley 39/2015, los SÁBADOS son días INHÁBILES en el procedimiento administrativo común.",
      "⚠️ TRAMPA ALZADA VS REPOSICIÓN: El recurso de Alzada tarda máximo 3 MESES en resolverse; el de Reposición tarda máximo 1 MES en resolverse."
    ]
  },
  {
    codigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    numero: 4,
    titulo: "Organización Básica del Ministerio de Defensa y de las FAS",
    normativa: "RD Estructura Orgánica Básica del MINISDEF y RD Organización Básica de las FAS",
    resumen: "El Ministerio de Defensa se estructura en las Fuerzas Armadas (bajo el mando operativo del JEMAD y orgánico de JEME, AJEMA y JEMA) y tres grandes órganos superiores/directivos centrales: la Secretaría de Estado de Defensa (SEDEF), la Subsecretaría de Defensa (SUBDEF) y la Secretaría General de Política de Defensa (SEGENPOL). El EMAD se articula en el Cuartel General del EMAD, el Mando de Operaciones (MOPS), el Centro de Inteligencia de las FAS (CIFAS) y el Mando Conjunto del Ciberespacio (MCCE).",
    puntosCalientes: [
      "SEDEF (Secretaría de Estado de Defensa): Responsable de recursos económicos, armamento y material (DGAM), infraestructura (DIGENIN) y transformación digital (CESTIC).",
      "SUBDEF (Subsecretaría de Defensa): Responsable de la política de personal, reclutamiento y enseñanza militar (DIGEREM / DIGENPER), Asesoría Jurídica General, Intervención General y Sanidad Militar (IGESAN).",
      "SEGENPOL (Secretaría General de Política de Defensa): Responsable de la política de defensa, relaciones internacionales de defensa, diplomacia de defensa y difusión de la cultura de defensa.",
      "Órganos del EMAD: Mando de Operaciones (MOPS), Centro de Inteligencia de las FAS (CIFAS), Mando Conjunto del Ciberespacio (MCCE) y CESEDEN.",
      "UME (Unidad Militar de Emergencias): Fuerza conjunta permanente dentro de las FAS que depende orgánicamente del Ministro de Defensa y operativamente del JEMAD."
    ],
    trampas: [
      "⚠️ TRAMPA SEDEF VS SUBDEF: Todo lo relativo a PERSONAL y ENSEÑANZA MILITAR depende de la SUBSECRETARÍA DE DEFENSA (SUBDEF). Todo lo relativo a ARMAMENTO, MATERIAL, INFRAESTRUCTURA y PRESUPUESTOS depende de la SECRETARÍA DE ESTADO DE DEFENSA (SEDEF).",
      "⚠️ TRAMPA SEGENPOL: Tiene rango de Subsecretaría (no de Secretaría de Estado)."
    ]
  },
  {
    codigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    numero: 5,
    titulo: "Organización Básica del Ejército de Tierra",
    normativa: "Orden DEF / Instrucción de Organización del Ejército de Tierra",
    resumen: "El Ejército de Tierra, bajo el mando del Jefe de Estado Mayor del Ejército de Tierra (JEME), se articula en tres grandes componentes: el Cuartel General del Ejército de Tierra (CGET), la Fuerza del Ejército de Tierra y el Apoyo a la Fuerza del Ejército de Tierra.",
    puntosCalientes: [
      "Cuartel General del ET (CGET - Madrid): Encuadra el Estado Mayor del Ejército (EME), el Gabinete del JEME, la Jefatura de los Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), el Instituto de Historia y Cultura Militar (IHCM) y la Asesoría Jurídica del ET.",
      "La Fuerza del ET: Integrada por el Cuartel General Terrestre de Alta Disponibilidad (CGTAD - Valencia/Bétera), la Fuerza Terrestre (FUTER - Sevilla) y el Mando de Canarias del ET (MCANA - Santa Cruz de Tenerife).",
      "El Apoyo a la Fuerza del ET: Integrado por el Mando de Personal (MAPER - Madrid), el Mando de Apoyo Logístico (MALE - Madrid), el Mando de Adiestramiento y Doctrina (MADOC - Granada) y la Inspección General del Ejército (IGE - Barcelona).",
      "Divisiones de FUTER: División 'San Marcial' (Burgos) y División 'Castillejos' (Huesca), además del Mando de Apoyo a la Maniobra (MAM - A Coruña)."
    ],
    trampas: [
      "⚠️ TRAMPA DE SEDES: CGET, MAPER y MALE están en Madrid; FUTER en Sevilla; CGTAD en Valencia (Bétera); MADOC en Granada; IGE en Barcelona; MCANA en Tenerife.",
      "⚠️ TRAMPA ESCALÓN: La Inspección General del Ejército (IGE), encargada de la infraestructura, vida en bases y prevención de riesgos laborales, pertenece al APOYO A LA FUERZA (no al Cuartel General)."
    ]
  },
  {
    codigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    numero: 6,
    titulo: "Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009)",
    normativa: "Real Decreto 96/2009, de 6 de febrero, por el que se aprueban las Reales Ordenanzas para las FAS",
    resumen: "Constituyen el código de conducta de los militares, definiendo los principios éticos y las reglas de comportamiento de acuerdo con la Constitución y el resto del ordenamiento jurídico. Constan de 129 artículos distribuidos en un Título Preliminar y 5 Títulos (Del militar, De la disciplina, De la acción del mando, De las operaciones y De las demás funciones).",
    puntosCalientes: [
      "Art. 3 (Primer deber del militar): La disposición permanente para defender a España, incluso con la entrega de la vida cuando fuera necesario, constituye el primer y más fundamental deber del militar.",
      "Art. 8 (Disciplina): La disciplina, factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado, será practicada y exigida en las FAS como norma de actuación.",
      "Art. 19 (Saludo militar): Es la expresión de respeto mutuo, disciplina y unión entre todos los miembros de las FAS.",
      "Art. 44 (De la obediencia): El militar obedecerá las órdenes que son los mandatos relativos al servicio que un militar da a un subordinado, en forma adecuada y dentro de las atribuciones que le correspondan.",
      "Art. 48 (Límites de la obediencia): Si las órdenes entrañan la ejecución de actos que manifiestamente constituyan delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, el militar NO estará obligado a obedecerlas.",
      "Art. 56 (Estilo de mando): El que ejerza mando tratará de inculcar una disciplina basada en el convencimiento."
    ],
    trampas: [
      "⚠️ TRAMPA DE CONCEPTOS: El 'primer y más fundamental deber del militar' es la disposición permanente para defender a España (Art. 3), mientras que el 'factor de cohesión que obliga a mandar con responsabilidad y a obedecer lo mandado' es la Disciplina (Art. 8).",
      "⚠️ TRAMPA DE ÓRDENES ILEGALES: Ante una orden que manifiestamente constituya delito, el militar NO está obligado a obedecerla en ningún caso."
    ]
  },

  // =========================================================================
  // BLOQUE 2: JURÍDICO - SOCIAL (6 TEMAS OFICIALES)
  // =========================================================================
  {
    codigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 1,
    titulo: "Ley 8/2006 de Tropa y Marinería",
    normativa: "Ley 8/2006, de 24 de abril, de Tropa y Marinería",
    resumen: "Regula el régimen específico de los militares profesionales de tropa y marinería: el compromiso inicial, el compromiso de larga duración (CLD), el acceso a una relación de servicios de carácter permanente (adquiriendo la condición de militar de carrera), las medidas de incorporación laboral y la condición de Reservista de Especial Disponibilidad (RED).",
    puntosCalientes: [
      "Compromiso Inicial (Art. 6-7): Duración de 2 o 3 años según convocatoria, renovable hasta completar un máximo de 6 años de servicios.",
      "Compromiso de Larga Duración - CLD (Art. 8): Se suscribe tras más de 5 años de servicios (al cumplir los 6) y se extiende hasta que el militar cumpla 45 AÑOS de edad.",
      "Acceso a la Permanencia (Art. 12): Podrán acceder a una relación de servicios de carácter permanente los militares con CLD que cuenten con un mínimo de 14 AÑOS de servicios efectivos (según bases de convocatoria), titulación de Técnico del Sistema Educativo General o equivalente y superen el proceso selectivo (concurso-oposición).",
      "Reservista de Especial Disponibilidad - RED (Arts. 17-19): Quienes finalicen su CLD a los 45 años habiendo cumplido al menos 18 años de servicios pueden adquirir la condición de RED hasta cumplir los 65 años de edad, percibiendo una asignación económica mensual."
    ],
    trampas: [
      "⚠️ TRAMPA DE EDADES Y AÑOS: Compromiso Inicial = máximo 6 años. Para pedir CLD = tener más de 5 años de servicio. Duración del CLD = hasta los 45 años de edad. Para ser Reservista de Especial Disponibilidad (RED) = haber cumplido al menos 18 años de servicios y finalizar a los 45 años (se mantiene hasta los 65 años).",
      "⚠️ TRAMPA CONDICIÓN PERMANENTE: Al aprobar la permanencia se adquiere la condición de MILITAR DE CARRERA dentro de la Escala de Tropa y Marinería."
    ]
  },
  {
    codigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 2,
    titulo: "Ley 39/2007 de la Carrera Militar",
    normativa: "Ley 39/2007, de 19 de noviembre, de la Carrera Militar",
    resumen: "Establece el estatuto profesional de los militares de las Fuerzas Armadas: categorías y empleos militares, cuerpos y escalas, enseñanza en las FAS, historial militar, evaluaciones y clasificaciones, régimen de ascensos, provisión de destinos y situaciones administrativas.",
    puntosCalientes: [
      "Categorías militares (Art. 20): Oficiales Generales (Capitán General, General de Ejército, Teniente General, General de División, General de Brigada), Oficiales (Coronel, Teniente Coronel, Comandante, Capitán, Teniente, Alférez), Suboficiales (Suboficial Mayor, Subteniente, Brigada, Sargento 1º, Sargento) y Tropa y Marinería (Cabo Mayor, Cabo 1º, Cabo, Soldado).",
      "Formas de provisión de destinos (Art. 100): 1) Libre designación, 2) Concurso de méritos, y 3) Provisión por antigüedad.",
      "Sistemas de ascenso (Art. 88): 1) Elección (ej. a Cabo Mayor y Suboficial Mayor), 2) Clasificación, 3) Concurso o concurso-oposición (ej. a Cabo y Cabo 1º), y 4) Antigüedad.",
      "Situaciones Administrativas (Art. 107): Servicio activo, Servicios especiales, Excedencia, Suspensión de empleo, Suspensión de funciones y Reserva."
    ],
    trampas: [
      "⚠️ TRAMPA DE SISTEMAS DE ASCENSO EN TROPA: A Cabo y Cabo 1º se asciende por CONCURSO o CONCURSO-OPOSICIÓN; en cambio, a Cabo Mayor se asciende por el sistema de ELECCIÓN.",
      "⚠️ TRAMPA SUSPENSIÓN DE EMPLEO VS FUNCIONES: La 'Suspensión de funciones' es una medida provisional (o por procesamiento) que no implica pérdida del destino si no supera los 6 meses. La 'Suspensión de empleo' (sanción muy grave o pena) supone el cese en el destino e imposibilidad de ascender durante el tiempo de la suspensión."
    ]
  },
  {
    codigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 3,
    titulo: "Régimen Disciplinario de las FAS (Ley Orgánica 8/2014)",
    normativa: "Ley Orgánica 8/2014, de 4 de diciembre, de Régimen Disciplinario de las Fuerzas Armadas",
    resumen: "Es uno de los temas más preguntados de toda la oposición. Regula las faltas disciplinarias (leves, graves y muy graves), las sanciones correspondientes, las autoridades con potestad sancionadora, los plazos de prescripción de faltas y sanciones, la cancelación de notas desfavorables y el régimen de recursos disciplinarios.",
    puntosCalientes: [
      "Sanciones por FALTA LEVE (Art. 11.1): 1) Reprensión, 2) Privación de salida de 1 a 8 días, 3) Sanción económica de 1 a 8 días, 4) Arresto de 1 a 14 días.",
      "Sanciones por FALTA GRAVE (Art. 11.2): 1) Sanción económica de 8 a 15 días, 2) Arresto de 15 a 30 días, 3) Pérdida de destino, 4) Baja en el centro docente militar de formación.",
      "Sanciones por FALTA MUY GRAVE (Art. 11.3): 1) Arresto de 31 a 60 días, 2) Suspensión de empleo (de 1 mes a 1 año), 3) Separación del servicio, 4) Resolución de compromiso.",
      "Prescripción de FALTAS (Art. 24): Leves = 2 MESES. Graves = 1 AÑO. Muy graves = 2 AÑOS. (¡Atención exacta al Art. 24 de la LO 8/2014!).",
      "Prescripción de SANCIONES (Art. 25): Leves = 3 MESES. Graves = 1 AÑO. Muy graves = 2 AÑOS.",
      "Cancelación de notas desfavorables (Art. 65): Sanciones por falta leve = 1 AÑO. Falta grave = 2 AÑOS. Falta muy grave = 4 AÑOS (no se cancelan separación del servicio ni resolución de compromiso).",
      "Plazo para interponer Recurso de Alzada Disciplinario (Art. 68): 1 MES contado a partir del día siguiente al de la notificación de la resolución."
    ],
    trampas: [
      "⚠️ ¡SÚPER TRAMPA DE PLAZOS EN LO 8/2014!: Las FALTAS LEVES prescriben a los 2 MESES (Art. 24.1), pero las SANCIONES impuestas por falta leve prescriben a los 3 MESES (Art. 25.1). Las graves prescriben al AÑO y las muy graves a los 2 AÑOS.",
      "⚠️ TRAMPA DE SANCIONES ECONÓMICAS: El día de 8 días coincide: de 1 a 7 días es exclusivamente leve, de 9 a 15 días es exclusivamente grave, y exactamente 8 días puede ser leve o grave según la falta cometida.",
      "⚠️ TRAMPA DE AUTORIDADES (Art. 32): Un Jefe de Compañía o unidad similar puede imponer reprensión, privación de salida hasta 5 días y sanción económica hasta 5 días (NO puede imponer arresto)."
    ]
  },
  {
    codigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 4,
    titulo: "Derechos y Deberes de los Miembros de las FAS (LO 9/2011)",
    normativa: "Ley Orgánica 9/2011, de 27 de julio, de derechos y deberes de los miembros de las FAS",
    resumen: "Regula el ejercicio por los militares de los derechos fundamentales y libertades públicas establecidos en la Constitución, sus limitaciones específicas derivadas de la disciplina y la neutralidad política y sindical, las asociaciones profesionales de miembros de las FAS, el Consejo de Personal de las FAS (COPERFAS) y el Observatorio de la Vida Militar.",
    puntosCalientes: [
      "Neutralidad política y sindical (Art. 7): El militar está sujeto al deber de neutralidad política y no podrá fundar ni afiliarse a partidos políticos ni a sindicatos.",
      "Derecho de reunión y manifestación (Art. 13): El militar no podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical. Vistiendo el uniforme o haciendo uso de su condición militar, no podrá asistir a ninguna manifestación.",
      "Derecho de asociación profesional (Título III): Las asociaciones profesionales de miembros de las FAS deben inscribirse en el RAPFAS (Registro de Asociaciones Profesionales de miembros de las FAS). No pueden realizar actividades políticas ni sindicales ni recurrir a la huelga.",
      "COPERFAS (Art. 46): Consejo de Personal de las Fuerzas Armadas, presidido por el Ministro de Defensa (o el Subsecretario de Defensa cuando no asista el Ministro).",
      "Observatorio de la Vida Militar (Art. 54): Órgano colegiado de carácter asesor y consultivo adscrito a las Cortes Generales, compuesto por 9 personalidades elegidas (5 por el Congreso y 4 por el Senado) por un mandato de 5 años."
    ],
    trampas: [
      "⚠️ TRAMPA OBSERVATORIO DE LA VIDA MILITAR: Está adscrito a las CORTES GENERALES (no al Ministerio de Defensa), y sus 9 miembros se eligen 5 por el Congreso y 4 por el Senado.",
      "⚠️ TRAMPA ASOCIACIONES PROFESIONALES: Un militar solo puede estar afiliado a UNA asociación profesional inscrita en el RAPFAS."
    ]
  },
  {
    codigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 5,
    titulo: "Iniciativas y Quejas (Real Decreto 176/2014)",
    normativa: "Real Decreto 176/2014, de 21 de marzo, de tramitación de iniciativas y quejas",
    resumen: "Regula el procedimiento para que los miembros de las FAS puedan plantear iniciativas (propuestas de carácter general para mejorar el régimen de personal y condiciones de vida) y quejas (reclamaciones relativas al régimen de personal y condiciones de vida).",
    puntosCalientes: [
      "Presentación de Iniciativas: Las presenta el militar en su unidad ante el Oficial, Suboficial o Cabo Mayor designado para recepcionarlas, o directamente ante el mando de unidad.",
      "Presentación de Quejas: Se presentan siguiendo el conducto reglamentario ante el jefe de la unidad. Si en el plazo de 1 MES no se hubiera contestado o la resolución no se considerase satisfactoria, el militar podrá dirigirse directamente al Mando de Personal (MAPER) y, en última instancia, al Subsecretario de Defensa.",
      "Materias excluidas: No pueden tramitarse como quejas aquellas cuestiones que tengan su propio procedimiento de recurso administrativo o disciplinario."
    ],
    trampas: [
      "⚠️ TRAMPA DE PLAZO EN QUEJAS: El plazo tras el cual el militar puede elevar la queja directamente al Mando de Personal si no recibe respuesta del Jefe de Unidad es de 1 MES."
    ]
  },
  {
    codigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    numero: 6,
    titulo: "Igualdad Efectiva y Protocolo frente al Acoso en las FAS",
    normativa: "Ley Orgánica 3/2007 de Igualdad y Protocolo de actuación frente al acoso sexual y por razón de sexo en las FAS",
    resumen: "Establece el principio de igualdad de trato y de oportunidades entre mujeres y hombres en las Fuerzas Armadas, las medidas de conciliación de la vida profesional, personal y familiar, el Observatorio Militar para la Igualdad y las Unidades de Protección frente al Acoso (UPA).",
    puntosCalientes: [
      "Observatorio Militar para la Igualdad: Órgano colegiado adscrito a la Subsecretaría de Defensa encargado de analizar y promover la igualdad y conciliación en las FAS.",
      "UPA (Unidad de Protección frente al Acoso): Unidades creadas en el Órgano Central, EMAD, ET, Armada y EA para prestar asesoramiento confidencial, apoyo e información a la presunta víctima desde el primer momento.",
      "Acoso sexual vs Acoso por razón de sexo (Art. 7 LO 3/2007): Acoso sexual es cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad; acoso por razón de sexo es cualquier comportamiento realizado en función del sexo de una persona con el propósito o efecto de atentar contra su dignidad.",
      "Vía de denuncia del acoso: La víctima puede presentar la denuncia por conducto reglamentario o directamente ante la UPA (sin obligación de pasar por el presunto acosador si fuera su superior)."
    ],
    trampas: [
      "⚠️ TRAMPA CONDUCTO REGLAMENTARIO EN ACOSO: En casos de acoso sexual o por razón de sexo, el militar puede acudir DIRECTAMENTE a la UPA sin necesidad de seguir el conducto reglamentario ordinario."
    ]
  },

  // =========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL E INTERNACIONAL (6 TEMAS OFICIALES)
  // =========================================================================
  {
    codigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 1,
    titulo: "Ley 36/2015 de Seguridad Nacional",
    normativa: "Ley 36/2015, de 28 de septiembre, de Seguridad Nacional",
    resumen: "Define la Seguridad Nacional como la acción del Estado dirigida a proteger la libertad, los derechos y bienestar de los ciudadanos, a garantizar la defensa de España y sus principios y valores constitucionales, así como a contribuir junto a nuestros socios y aliados a la seguridad internacional. Crea el Sistema de Seguridad Nacional y regula la Situación de Interés para la Seguridad Nacional.",
    puntosCalientes: [
      "Componentes Fundamentales de la Seguridad Nacional (Art. 9): 1) La Defensa Nacional, 2) La Seguridad Pública, y 3) La Acción Exterior.",
      "Consejo de Seguridad Nacional (Art. 21): En su condición de Comisión Delegada del Gobierno para la Seguridad Nacional, asiste al Presidente del Gobierno en la dirección de la política de Seguridad Nacional. Lo preside el Presidente del Gobierno, excepto cuando asista SM el Rey, en cuyo caso lo presidirá éste.",
      "Departamento de Seguridad Nacional - DSN (Art. 20): Órgano de trabajo permanente del Consejo de Seguridad Nacional y de apoyo inmediato al Presidente del Gobierno.",
      "Declaración de Situación de Interés para la Seguridad Nacional (Art. 24): Se declarará por el Presidente del Gobierno mediante REAL DECRETO (no supone por sí sola la suspensión de derechos fundamentales).",
      "Periodicidad de la Estrategia de Seguridad Nacional (Art. 4): Se revisará cada 5 AÑOS, o antes si lo aconsejan las circunstancias cambiantes del entorno estratégico."
    ],
    trampas: [
      "⚠️ TRAMPA DE ÓRGANO: Quien declara la 'Situación de Interés para la Seguridad Nacional' es el PRESIDENTE DEL GOBIERNO mediante Real Decreto (no el Consejo de Ministros ni el Congreso).",
      "⚠️ TRAMPA COMPONENTES FUNDAMENTALES: Son exactamente TRES según el Art. 9: Defensa Nacional, Seguridad Pública y Acción Exterior."
    ]
  },
  {
    codigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 2,
    titulo: "Estrategia de Seguridad Nacional (ESN)",
    normativa: "Real Decreto por el que se aprueba la Estrategia de Seguridad Nacional vigente",
    resumen: "Es el marco político-estratégico de referencia de la política de Seguridad Nacional. Identifica los principales riesgos y amenazas, establece los objetivos generales y articula los ámbitos de actuación (Defensa Nacional, Lucha contra el Terrorismo, Ciberseguridad, Seguridad Marítima, Seguridad Aeroespacial, Seguridad Energética, Seguridad Económica y Financiera, No proliferación de armas de destrucción masiva, etc.).",
    puntosCalientes: [
      "Ejes estratégicos de la ESN: 1) Proteger (vida, derechos y bienestar), 2) Promover (una España próspera y competitiva), y 3) Participar (en la preservación de la paz y seguridad internacional con UE, OTAN y ONU).",
      "Amenazas Híbridas y Desinformación: Acciones sincronizadas (ciberataques, coerción económica, campañas de desinformación, instrumentalización de flujos migratorios) que explotan las vulnerabilidades de los Estados por debajo del umbral del conflicto armado tradicional.",
      "Comités Especializados del Consejo de Seguridad Nacional: Comité de Situación, Consejo Nacional de Ciberseguridad, Consejo Nacional de Seguridad Marítima, Consejo Nacional de Seguridad Aeroespacial, Comité Especializado contra el Terrorismo, Comité Especializado de Inmigración."
    ],
    trampas: [
      "⚠️ TRAMPA DE REVISIÓN: La ESN se elabora a iniciativa del Presidente del Gobierno, quien la somete a la aprobación del Consejo de Ministros mediante Real Decreto, y se revisa cada 5 años."
    ]
  },
  {
    codigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 3,
    titulo: "Doctrina para el Empleo de las FAS (PDC-01)",
    normativa: "Publicación Doctrinal Conjunta PDC-01 — Doctrina para el Empleo de las FAS",
    resumen: "Documento doctrinal de más alto nivel en el ámbito militar elaborado por el EMAD (CCDC). Establece los principios fundamentales que guían el empleo del Instrumento Militar de la nación a través de la Acción Conjunta, Combinada e Integrada en todos los dominios de operación.",
    puntosCalientes: [
      "Los 5 Ámbitos / Dominios de Operación: Terrestre, Marítimo, Aéreo, Espacial (Ultraterrestre) y Ciberespacial, actuando todos ellos sobre el Entorno Cognitivo y de la Información.",
      "Los 3 Niveles de Conducción de las Operaciones: 1) Nivel Estratégico (Político-Militar y Militar, JEMAD), 2) Nivel Operacional (donde se planifican y conducen las campañas y operaciones conjuntas, CMOPS), y 3) Nivel Táctico (donde se ejecutan los combates y enfrentamientos).",
      "Acción Conjunta vs Combinada vs Integrada: CONJUNTA = participan fuerzas de dos o más Ejércitos nacionales (ET, Armada, EA). COMBINADA = participan fuerzas militares de dos o más naciones aliadas. INTEGRADA = acción militar sincronizada con instrumentos no militares (diplomáticos, civiles, policiales)."
    ],
    trampas: [
      "⚠️ TRAMPA CONJUNTA VS COMBINADA: Conjunta = varios ejércitos del MISMO país (ej. Tierra + Armada). Combinada = fuerzas de VARIOS países (ej. España + Francia + Italia)."
    ]
  },
  {
    codigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 4,
    titulo: "Organización de las Naciones Unidas (ONU)",
    normativa: "Carta de las Naciones Unidas (San Francisco, 26 de junio de 1945) — Ingreso de España: 1955",
    resumen: "Organización internacional universal fundada en 1945 tras la Segunda Guerra Mundial para mantener la paz y la seguridad internacionales. España ingresó en la ONU el 14 de diciembre de 1955.",
    puntosCalientes: [
      "Los 6 Órganos Principales de la ONU (Art. 7 de la Carta): 1) Asamblea General, 2) Consejo de Seguridad, 3) Consejo Económico y Social (ECOSOC), 4) Consejo de Administración Fiduciaria, 5) Corte Internacional de Justicia (sede en La Haya), y 6) Secretaría General.",
      "Consejo de Seguridad: Compuesto por 15 miembros: 5 permanentes con derecho de veto (EE.UU., Rusia, China, Francia y Reino Unido) y 10 no permanentes elegidos por la Asamblea General por periodos de 2 años.",
      "Capítulo VI vs Capítulo VII de la Carta: Capítulo VI = Arreglo pacífico de controversias. Capítulo VII = Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión (autoriza medidas coercitivas y el uso de la fuerza armada).",
      "Capítulo VIII de la Carta: Acuerdos regionales (colaboración con organizaciones regionales como UE, OTAN, Unión Africana)."
    ],
    trampas: [
      "⚠️ TRAMPA CORTE INTERNACIONAL DE JUSTICIA: Es el único de los 6 órganos principales de la ONU que NO tiene su sede en Nueva York, sino en el Palacio de la Paz en LA HAYA (Países Bajos).",
      "⚠️ TRAMPA INGRESO DE ESPAÑA EN LA ONU: España ingresó en la ONU en 1955 (no en 1945 ni en 1982)."
    ]
  },
  {
    codigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 5,
    titulo: "Organización del Tratado del Atlántico Norte (OTAN)",
    normativa: "Tratado del Atlántico Norte (Washington, 4 de abril de 1949) — Ingreso de España: 30 de mayo de 1982",
    resumen: "Alianza político-militar intergubernamental basada en el Tratado de Washington de 1949 (14 artículos). España se convirtió en el aliado número 16 el 30 de mayo de 1982 y se integró plenamente en la estructura militar en 1999. En la Cumbre de Madrid de 2022 se aprobó el vigente Concepto Estratégico de la OTAN.",
    puntosCalientes: [
      "Artículo 4 del Tratado: Consultas entre los aliados siempre que cualquiera de ellos considere que la integridad territorial, la independencia política o la seguridad de cualquiera de las Partes se ve amenazada.",
      "Artículo 5 del Tratado (Defensa Colectiva): Un ataque armado contra uno o más aliados en Europa o América del Norte se considerará un ataque dirigido contra todos ellos.",
      "Consejo del Atlántico Norte (NAC): Máximo órgano político de decisión de la OTAN (sede en Bruselas), presidido por el Secretario General.",
      "Comité Militar (MC): Máxima autoridad militar de la OTAN, integrada por los Jefes de Estado Mayor de la Defensa (CHODs) de los países miembros.",
      "Los 2 Mandos Estratégicos de la OTAN: 1) ACO (Allied Command Operations / SHAPE, con sede en Mons, Bélgica, dirigido por SACEUR) y 2) ACT (Allied Command Transformation, con sede en Norfolk, EE.UU., dirigido por SACT).",
      "Las 3 Tareas Fundamentales del Concepto Estratégico de Madrid 2022: 1) Disuasión y Defensa, 2) Prevención y Gestión de Crisis, y 3) Seguridad Cooperativa."
    ],
    trampas: [
      "⚠️ TRAMPA ART. 4 VS ART. 5 OTAN: El Art. 4 es el deber de CONSULTA ante una amenaza; el Art. 5 es la cláusula de DEFENSA COLECTIVA ante un ataque armado.",
      "⚠️ TRAMPA SEDES MILITARES OTAN: La sede política (Cuartel General de la OTAN) está en BRUSELAS; el Cuartel General de Operaciones (SHAPE/ACO) está en MONS (Bélgica); el Mando de Transformación (ACT) está en NORFOLK (Virginia, EE.UU.). CAOC Torrejón está en España."
    ]
  },
  {
    codigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    numero: 6,
    titulo: "La Unión Europea (PESC / PCSD) y la OSCE",
    normativa: "Tratado de la Unión Europea (TUE - Lisboa) y Brújula Estratégica de la UE",
    resumen: "La Política Común de Seguridad y Defensa (PCSD) forma parte integrante de la Política Exterior y de Seguridad Común (PESC) de la Unión Europea, permitiendo a la Unión disponer de una capacidad operativa civil y militar para misiones fuera de la Unión (misiones Petersberg ampliadas) con el fin de garantizar el mantenimiento de la paz, la prevención de conflictos y el fortalecimiento de la seguridad internacional.",
    puntosCalientes: [
      "Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad (AR/VP): Dirige la PESC/PCSD, preside el Consejo de Asuntos Exteriores, es Vicepresidente de la Comisión Europea y dirige la Agencia Europea de Defensa (EDA).",
      "Art. 42.7 del Tratado de la Unión Europea (Cláusula de Asistencia Mutua): Si un Estado miembro es objeto de una agresión armada en su territorio, los demás Estados miembros le deberán ayuda y asistencia con todos los medios a su alcance.",
      "Art. 222 del TFUE (Cláusula de Solidaridad): La Unión y sus Estados miembros actuarán conjuntamente si un Estado miembro es objeto de un ataque terrorista o víctima de una catástrofe natural o de origen humano.",
      "PESCO (Cooperación Estructurada Permanente) y EDA (Agencia Europea de Defensa): Iniciativas para desarrollar capacidades militares conjuntas europeas.",
      "Los 4 Pilares de la Brújula Estratégica de la UE: 1) Actuar (Capacidad de despliegue rápido de la UE de hasta 5.000 efectivos), 2) Garantizar la seguridad, 3) Invertir, y 4) Asociarse.",
      "OSCE (Organización para la Seguridad y la Cooperación en Europa): Nacida del Acta Final de Helsinki (1975), con sede del Secretariado en Viena (Austria)."
    ],
    trampas: [
      "⚠️ TRAMPA ART. 42.7 TUE VS ART. 222 TFUE: El Art. 42.7 TUE es la cláusula de ASISTENCIA MUTUA ante AGRESIÓN ARMADA en su territorio; el Art. 222 TFUE es la cláusula de SOLIDARIDAD ante ATAQUE TERRORISTA o CATÁSTROFE natural/humana."
    ]
  }
];

/**
 * TABLAS COMPARATIVAS TÁCTICAS DE BOLSILLO (CAZA-TRAMPAS)
 * Resúmenes cruzados de los datos que el tribunal utiliza para confundir en el examen.
 */
const COMPARATIVE_TABLES = [
  {
    id: "TAB-01",
    titulo: "⚖️ Régimen Disciplinario (LO 8/2014): Sanciones, Prescripción y Cancelación",
    bloque: "Bloque 2: Jurídico-Social",
    headers: ["Gravedad", "Arresto", "Sanción Económica", "Otras Sanciones", "Prescripción Falta", "Prescripción Sanción", "Cancelación Nota"],
    rows: [
      ["FALTA LEVE", "1 a 14 días", "1 a 8 días", "Reprensión / Privación salida (1 a 8 días)", "2 meses", "3 meses", "1 año"],
      ["FALTA GRAVE", "15 a 30 días", "8 a 15 días", "Pérdida de destino / Baja centro formación", "1 año", "1 año", "2 años"],
      ["FALTA MUY GRAVE", "31 a 60 días", "No aplica", "Suspensión empleo (1m-1a) / Separación servicio / Resolución compromiso", "2 años", "2 años", "4 años (salvo expulsión)"]
    ]
  },
  {
    id: "TAB-02",
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
    id: "TAB-03",
    titulo: "🎖️ Compromisos de Tropa y Marinería (Ley 8/2006)",
    bloque: "Bloque 2: Jurídico-Social",
    headers: ["Modalidad", "Requisitos de Acceso", "Duración / Límite", "Condición Adquirida"],
    rows: [
      ["Compromiso Inicial", "Superar ciclo de selección y fase de formación militar", "2 o 3 años (renovable hasta máximo 6 años)", "Militar Profesional de Tropa y Marinería (MPTM)"],
      ["Compromiso Larga Duración (CLD)", "Más de 5 años de servicios (al cumplir los 6) + evaluación positiva", "Hasta cumplir los 45 años de edad", "MPTM con relación temporal de larga duración"],
      ["Permanencia", "Tener CLD vigente + mínimo 14 años de servicio + titulación Técnico + superar oposición", "Hasta edad de pase a reserva / retiro", "MILITAR DE CARRERA (Escala de Tropa y Marinería)"],
      ["Reservista Especial Disponibilidad (RED)", "Finalizar CLD a los 45 años con al menos 18 años de servicio", "Desde los 45 hasta los 65 años de edad", "Reservista con asignación económica mensual"]
    ]
  },
  {
    id: "TAB-04",
    titulo: "🌍 Cláusulas Internacionales de Defensa y Seguridad (OTAN / UE / ONU)",
    bloque: "Bloque 3: Seguridad Nacional",
    headers: ["Organización", "Precepto Legal", "Nombre Clave", "¿Cuándo se activa?"],
    rows: [
      ["OTAN (1949)", "Artículo 4 (Tratado Washington)", "Consulta Aliada", "Cuando un aliado considera amenazada su integridad territorial o seguridad"],
      ["OTAN (1949)", "Artículo 5 (Tratado Washington)", "Defensa Colectiva", "Ataque armado contra uno o más aliados en Europa o América del Norte"],
      ["Unión Europea", "Artículo 42.7 (TUE)", "Asistencia Mutua", "Si un Estado miembro sufre una agresión armada en su territorio"],
      ["Unión Europea", "Artículo 222 (TFUE)", "Cláusula de Solidaridad", "Si un Estado miembro sufre un ataque terrorista o catástrofe natural/humana"],
      ["ONU (1945)", "Capítulo VII (Carta ONU)", "Medidas Coercitivas / Uso de Fuerza", "Amenazas a la paz, quebrantamientos de la paz o actos de agresión"]
    ]
  }
];
