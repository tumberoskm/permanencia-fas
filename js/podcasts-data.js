// ============================================================================
// RADIO PERMANENCIA ET — PODCAST CONVERSACIONAL DE ACADEMIA (21 EPISODIOS)
// "La Tertulia del Cuartel": El Brigada Carlos (Instructor) y la Cabo 1º Marta
// Explicando las leyes desde cero con ejemplos reales de unidad, humor y trampas
// ============================================================================

const PODCAST_EPISODES = {
  "B1-T01": {
    codigo: "B1-T01",
    bloque: "Bloque 1: Organización",
    titulo: "Episodio 1: La Constitución Española sin bostezos (con ejemplos reales)",
    subtitulo: "Fechas clave, el artículo 8 de las FAS, estados de alarma/excepción/sitio y por qué el Rey reina pero no gobierna",
    duracionEstimada: "06:45",
    audioUrl: "./audio/podcast-B1-T01.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El semáforo de emergencias del Art. 116 CE (Alarma = una gran nevada Filomena; Excepción = grave alteración del orden público; Sitio = intento de invasión o insurrección armada).",
      "El Art. 8 CE en el patio de armas: por qué las FAS están en el Título Preliminar y por qué las Fuerzas y Cuerpos de Seguridad están en el Art. 104 (Título IV, Gobierno).",
      "El reloj de las 72 horas de detención policial frente al Habeas Corpus."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Introducción",
        texto: "¡Buenas a todos los compañeros que estáis dándole caña a la Permanencia! Estoy aquí con el Brigada Carlos porque hoy empezamos con el Tema 1 del Bloque 1: la Constitución Española de 1978. Y te voy a ser sincera, mi Brigada: cuando uno abre la Constitución a palo seco, a los diez minutos se te cierran los ojos. ¡Necesitamos entenderla con ejemplos de la vida real!"
      },
      {
        speaker: "carlos",
        etiqueta: "💡 La Constitución en cristiano",
        texto: "¡Qué pasa, Marta, y un saludo a todos los futuros permanentes! Tienes toda la razón. La gente falla la Constitución porque intenta memorizar los 169 artículos como un loro sin visualizar la película. Piensa en la Constitución como las normas de régimen interior de una gran base militar donde vivimos 48 millones de españoles. Tiene una puerta de entrada que es el Preámbulo, un vestíbulo blindado que es el Título Preliminar, del artículo 1 al 9, y luego diez edificios más, que son los diez Títulos."
      },
      {
        speaker: "marta",
        etiqueta: "📅 Las 4 fechas que lían a todo el mundo",
        texto: "Vale, antes de entrar en ese vestíbulo, aclárame de una vez las cuatro fechas de 1978, que en los tests siempre nos cambian quién hizo qué en octubre o en diciembre."
      },
      {
        speaker: "carlos",
        etiqueta: "🎯 Truco de las 4 fechas",
        texto: "¡Facilísimo! Imagínate una receta de cocina en cuatro pasos. Paso uno, 31 de octubre de 1978: los cocineros, que son los diputados y senadores de las Cortes Generales, aprueban el texto el día de Halloween. Paso dos, 6 de diciembre de 1978: el pueblo español prueba el plato y dice que sí en referéndum, por eso el 6 de diciembre tenemos festivo. Paso tres, 27 de diciembre: el Rey firma y promulga la ley ante las Cortes. Y paso cuatro, 29 de diciembre de 1978: sale publicada en el BOE y entra en vigor ese mismo día, justo antes de las uvas de Nochevieja, para que nadie se confunda con los veinte días habituales de otras leyes."
      },
      {
        speaker: "marta",
        etiqueta: "🪖 Ejemplo real: Artículo 8 vs Artículo 104",
        texto: "¡Ostras, lo de las uvas del 29 de diciembre no se me olvida en la vida! Ahora vamos a lo nuestro: nosotros, los militares, salimos en el artículo 8, en pleno Título Preliminar. ¿Por qué nos ponen ahí tan arriba y qué trampa nos meten en el examen con la Policía y la Guardia Civil?"
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 La cáscara de plátano del Art. 8",
        texto: "Mira qué buen ejemplo: las Fuerzas Armadas están en el artículo 8, en el corazón mismo del Estado, porque nuestras tres misiones son existenciales: garantizar la soberanía e independencia de España, defender su integridad territorial y defender el ordenamiento constitucional. Y ojo al dato: el artículo 8 dice que las Fuerzas Armadas están constituidas exclusivamente por el Ejército de Tierra, la Armada y el Ejército del Aire, hoy del Aire y del Espacio. En cambio, la Policía y la Guardia Civil están en el artículo 104, dentro del Título Cuarto del Gobierno, y su misión es proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana. En el examen te cambian una frase por otra para ver si picas."
      },
      {
        speaker: "marta",
        etiqueta: "🚨 Ejemplo práctico: Alarma, Excepción y Sitio",
        texto: "¡Apuntado! Otro punto donde la ley parece un trabalenguas es el artículo 116: estado de alarma, estado de excepción y estado de sitio. Explícamelo con tres ejemplos reales para no cruzarlos jamás."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Los 3 casos reales del Art. 116",
        texto: "¡Vamos con tres películas reales! Primera película: cae una nevada histórica como Filomena, o hay una epidemia o una inundación grave. No hay enemigos atacando el Estado, es una catástrofe o crisis sanitaria. Eso es el Estado de Alarma. Como hay que actuar rápido, lo declara el Gobierno por decreto en Consejo de Ministros por un máximo de 15 días, y solo da cuenta al Congreso; para prorrogarlo más de 15 días, ahí sí necesita autorización del Congreso. ¡Y atención: en el estado de alarma NO se suspende ningún derecho fundamental, solo se pueden limitar desplazamientos!"
      },
      {
        speaker: "marta",
        etiqueta: "⚖️ ¿Y Excepción y Sitio?",
        texto: "Vale, alarma igual a catástrofe natural o sanitaria, Gobierno 15 días. ¿Y cuándo pasamos a Excepción o a Sitio?"
      },
      {
        speaker: "carlos",
        etiqueta: "🛡️ Escalada de gravedad",
        texto: "Segunda película: imagínate disturbios violentísimos en las calles que desbordan por completo el orden público ordinario. Eso es el Estado de Excepción. Aquí sí se pueden suspender derechos como el plazo de detención o la inviolabilidad del domicilio. Por eso el Gobierno NO puede declararlo solo: primero tiene que pedir autorización previa al Congreso de los Diputados, y luego lo declara por decreto por un máximo de 30 días, prorrogables por otros 30. Y tercera película, la más grave: una insurrección armada o un acto de fuerza contra la soberanía o integridad de España. Eso es el Estado de Sitio, el equivalente moderno al antiguo estado de guerra. Aquí quien lo declara directamente es el Congreso de los Diputados por mayoría absoluta, a propuesta exclusiva del Gobierno."
      },
      {
        speaker: "marta",
        etiqueta: "👑 El Rey y el Refrendo",
        texto: "¡Qué claridad! Así sí se entiende. Y para rematar el tema: cuando el artículo 62 dice que al Rey le corresponde el mando supremo de las Fuerzas Armadas, ¿significa que el Rey puede llamar mañana al JEMAD y ordenar un despliegue?"
      },
      {
        speaker: "carlos",
        etiqueta: "🏆 Broche de oro de examen",
        texto: "¡Exactamente ahí está el meollo de nuestra Monarquía Parlamentaria! El Rey es el Capitán General y ostenta el mando supremo simbólico y constitucional del artículo 62.h, pero todos sus actos necesitan el refrendo, es decir, la firma y responsabilidad del Presidente del Gobierno o de los Ministros competentes, salvo dos cosas contadas del artículo 65 como nombrar y relevar libremente a los miembros civiles y militares de su Casa y distribuir el presupuesto de su Casa. Quien dirige la política de defensa y la Administración militar en el día a día es el Gobierno según el artículo 97. Si llevas claros el artículo 8, el 97, el 116 y las 3 reformas de 1992, 2011 y 2024, tienes el Tema 1 en el bolsillo."
      }
    ]
  },

  "B1-T02": {
    codigo: "B1-T02",
    bloque: "Bloque 1: Organización",
    titulo: "Episodio 2: Ley Orgánica 5/2005 de la Defensa Nacional (Quién manda qué)",
    subtitulo: "Cómo distinguir qué hace el Gobierno, el Presidente, el Ministro, el Congreso y el JEMAD con un caso práctico de misión en el exterior",
    duracionEstimada: "06:30",
    audioUrl: "./audio/podcast-B1-T02.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "Operación real en el Líbano o el mar Rojo: qué hace cada autoridad paso a paso desde La Moncloa y el Congreso hasta el Mando de Operaciones en Retamares.",
      "El truco de los 3 verbos: Gobierno DETERMINA, Presidente DIRIGE y ORDENA misiones, Ministro DESARROLLA y ejecuta.",
      "La mudanza de tu unidad: por qué ya no existen las antiguas Regiones Militares territoriales."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ El lío de los artículos 4 al 7",
        texto: "Mi Brigada, entramos en el Tema 2: la Ley Orgánica 5/2005 de la Defensa Nacional. Te confieso mi mayor pesadilla en este tema: leo los artículos 4, 5, 6 y 7 y me parece que el Gobierno, el Presidente del Gobierno y el Ministro de Defensa hacen exactamente lo mismo. En los tests me cambian un verbo y fallo. ¿Cómo lo distinguimos con un ejemplo real?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo real: Desplegamos una fragata y una unidad del ET",
        texto: "¡Vamos a vivirlo con una misión real! Imagina que Naciones Unidas o la Unión Europea nos pide mañana enviar un contingente español a una misión de paz en el exterior que no es defensa directa del territorio español. Vamos a ver qué hace cada uno en la cadena de mando de la Ley Orgánica 5/2005 como si fuera una obra de teatro."
      },
      {
        speaker: "marta",
        etiqueta: "🏛️ Acto 1: El Congreso y el Gobierno",
        texto: "Venga, ¿quién sale primero al escenario?"
      },
      {
        speaker: "carlos",
        etiqueta: "⚖️ Consulta previa y autorización",
        texto: "Primero: como es una misión en el exterior que no está directamente relacionada con la defensa de España, el Gobierno tiene que consultar previamente y pedir autorización al Congreso de los Diputados. ¡Ojo, al Congreso, nunca al Senado! Y si la misión fuera de máxima urgencia y no diera tiempo a pedir permiso antes de despegar, el Gobierno toma la decisión y la somete lo antes posible al Congreso para que la ratifique. Y recuerda el verbo del Gobierno en el artículo 5: el Gobierno DETERMINA la política de defensa."
      },
      {
        speaker: "marta",
        etiqueta: "🎯 Acto 2: El Presidente vs El Ministro",
        texto: "Vale, el Congreso autoriza y el Gobierno determina la política. Ahora tengo sentados juntos al Presidente del Gobierno y al Ministro de Defensa. ¿Qué firma cada uno?"
      },
      {
        speaker: "carlos",
        etiqueta: "🔑 El truco de los verbos",
        texto: "¡Aquí está el oro del examen! El Presidente del Gobierno, en el artículo 6, tiene el timón político: él DIRIGE la política de defensa, aprueba la Directiva de Defensa Nacional y es quien ORDENA las misiones de las Fuerzas Armadas y dispone su empleo. En cambio, el Ministro de Defensa, en el artículo 7, es quien DESARROLLA y ejecuta la política de defensa y dirige la actuación de las Fuerzas Armadas bajo la autoridad del Presidente."
      },
      {
        speaker: "marta",
        etiqueta: "🛡️ El Consejo de Defensa Nacional",
        texto: "Entonces: Gobierno DETERMINA, Presidente DIRIGE y ORDENA las misiones, y Ministro DESARROLLA y ejecuta. ¿Y si el Presidente quiere reunir a su órgano colegiado asesor en materia de defensa? Ese es el Consejo de Defensa Nacional del artículo 8, ¿no?"
      },
      {
        speaker: "carlos",
        etiqueta: "👑 ¿Quién preside y quién hace la secretaría?",
        texto: "¡Exacto! Imagínate la mesa del Consejo de Defensa Nacional. Cuando asiste el Rey, la preside el Rey; y si no asiste el Rey, la preside el Presidente del Gobierno. Ahí se sientan los Vicepresidentes, los Ministros de Defensa, Interior, Exteriores y Economía, el JEMAD, los tres Jefes de Estado Mayor de Tierra, Armada y Aire, el Director del CNI y el Director del Gabinete de la Presidencia. ¿Y quién lleva los papeles y ejerce la Secretaría Técnica Permanente de ese Consejo en el Ministerio de Defensa? La SEGENPOL, la Secretaría General de Política de Defensa, a través de la DIGENPOL."
      },
      {
        speaker: "marta",
        etiqueta: "⚔️ Ejemplo práctico: Estructura Orgánica vs Operativa",
        texto: "¡Buenísimo! Y para terminar el tema, explícanos con un ejemplo de cuartel la diferencia del artículo 11 entre la Estructura Orgánica y la Estructura Operativa, porque muchos compañeros se lían entre lo que hace el JEME y lo que hace el JEMAD."
      },
      {
        speaker: "carlos",
        etiqueta: "🏟️ El símil del entrenador de club y el seleccionador nacional",
        texto: "Piénsalo como el fútbol: el JEME en el Ejército de Tierra, el AJEMA en la Armada y el JEMA en el Aire son como los entrenadores de los clubes. Ellos están en la Estructura Orgánica: entrenan a tu Brigada en el campo de maniobras de San Gregorio, cuidan el armamento, la instrucción y la moral; es decir, PREPARAN la Fuerza. Pero cuando llega el día de salir de misión al Líbano o a Letonia, le ceden esas unidades al seleccionador nacional, que es el JEMAD, mediante la Transferencia de Autoridad. Y el JEMAD, desde la Estructura Operativa y a través del Comandante del Mando de Operaciones en Retamares, es quien EMPLEA esa Fuerza en combate o en la misión. ¡Con ese ejemplo del club y la selección no fallas ni una!"
      }
    ]
  },

  "B1-T03": {
    codigo: "B1-T03",
    bloque: "Bloque 1: Organización",
    titulo: "Episodio 3: Ley 40/2015 del Sector Público explicada con una mudanza y una junta",
    subtitulo: "Órganos superiores vs directivos, Delegación vs Avocación vs Encomienda, y Abstención/Recusación sin dolor de cabeza",
    duracionEstimada: "07:10",
    audioUrl: "./audio/podcast-B1-T03.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El edificio de un Ministerio: en el ático están los políticos que marcan el rumbo (Órganos Superiores) y en las plantas de abajo los gestores (Órganos Directivos).",
      "Las 5 figuras del Art. 8-13 explicadas con el Capitán de tu Compañía (Delegación, Avocación, Encomienda de gestión, Delegación de firma y Suplencia).",
      "Tu cuñado en el tribunal de oposición: cuándo hay que abstenerse (4.º grado consanguinidad / 2.º afinidad)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La ley más árida del Bloque 1",
        texto: "Mi Brigada, llegamos al Tema 3: la Ley 40/2015 de Régimen Jurídico del Sector Público. Te digo la verdad: cuando empiezo a leer desconcentración, avocación, encomienda de gestión, órganos superiores y directivos... me dan ganas de cerrar el libro e irme a correr diez kilómetros. ¡Sálvanos con ejemplos claros!"
      },
      {
        speaker: "carlos",
        etiqueta: "🏢 Ejemplo 1: El edificio del Ministerio",
        texto: "¡Respira, Marta, que hoy vas a domar la Ley 40/2015 en cinco minutos! Primero, imagínate la sede central de cualquier Ministerio como un edificio. En el ático solo viven DOS personas: el Ministro y el Secretario de Estado. Esos dos, y nadie más que esos dos, son los Órganos Superiores. ¿Por qué? Porque ellos diseñan los planes políticos. Todos los demás que tienen despacho debajo —el Subsecretario, el Secretario General, el Secretario General Técnico, el Director General y el Subdirector General— son Órganos Directivos, que ejecutan esos planes."
      },
      {
        speaker: "marta",
        etiqueta: "🪤 La trampa del Secretario General",
        texto: "¡Espera! Ahí es donde siempre caemos: como 'Secretario de Estado' y 'Secretario General' empiezan por Secretario, en el examen te ponen que los dos son órganos superiores..."
      },
      {
        speaker: "carlos",
        etiqueta: "🎖️ Quién tiene que ser funcionario A1",
        texto: "¡Exacto! El Secretario de Estado es Órgano Superior; en cambio, el Secretario General es Órgano Directivo, no es obligatorio en todos los ministerios y tiene el mismo rango que un Subsecretario. Y mira qué truco para saber a quién exigen ser funcionario de carrera del Subgrupo A1: al Subsecretario, al Secretario General Técnico, al Director General —salvo que el Real Decreto del Ministerio permita una excepción motivada— y al Subdirector General. ¿A quién NO le exigen ser funcionario A1? Ni al Ministro, ni al Secretario de Estado, ni tampoco al Secretario General."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Ejemplo 2: Delegación, Avocación y Encomienda en el cuartel",
        texto: "¡Clarísimo! Ahora explícanos con un ejemplo de cuartel la diferencia entre Delegación de competencias, Avocación, Encomienda de gestión, Delegación de firma y Suplencia, que parecen primas hermanas."
      },
      {
        speaker: "carlos",
        etiqueta: "🪖 Las 5 figuras con el Coronel y el Capitán",
        texto: "¡Imagínate a tu Coronel! Caso uno, Delegación de competencias: el Coronel tiene la competencia para autorizar ciertos permisos, pero para agilizar el trabajo dicta una resolución, la publica en el Boletín Oficial, y le pasa el ejercicio de esa competencia al Teniente Coronel. Ojo: cuando el Teniente Coronel firma por delegación, a todos los efectos legales es como si la resolución la hubiera dictado el Coronel. Caso dos, Avocación: es justo el camino inverso. El Coronel ve que un asunto concreto que lleva el Teniente Coronel es delicadísimo, y dice: 'Trae acá ese expediente concreto que lo voy a resolver yo'. Esa avocación es motivada y no se publica en el BOE, solo se notifica a los interesados."
      },
      {
        speaker: "marta",
        etiqueta: "🔧 ¿Y la Encomienda de gestión, la Firma y la Suplencia?",
        texto: "Vale: Delegación baja la competencia publicándose en el BOE; Avocación la sube para un caso concreto sin publicarse en el BOE. ¿Y las otras tres?"
      },
      {
        speaker: "carlos",
        etiqueta: "📝 El taller mecánico y las vacaciones",
        texto: "Caso tres, Encomienda de gestión: imagínate que el Ministerio tiene que hacer el mantenimiento técnico de unos servidores informáticos, pero no tiene técnicos suficientes y le encarga ese trabajo material o técnico a otro órgano. Aquí NO se cede ni la titularidad ni las decisiones jurídicas; el órgano que encomienda sigue dictando todas las resoluciones, el otro solo pone las manos técnicas, y sí se publica en el BOE. Caso cuatro, Delegación de firma: el Coronel ya ha tomado él mismo la decisión, pero le dice al ayudante que estampe la firma; no se publica en el BOE y está prohibida para resoluciones sancionadoras. Y caso cinco, Suplencia: el Coronel se pone enfermo de gripe o se va de vacaciones; no se transfiere ninguna competencia, simplemente otro mando ocupa temporalmente su silla y no hace falta publicarlo en el BOE."
      },
      {
        speaker: "marta",
        etiqueta: "👨‍👩‍👧‍👦 Ejemplo 3: Tu cuñado en el procedimiento (Abstención y Recusación)",
        texto: "¡Madre mía, explicado así es imposible confundirlas! ¿Y qué pasa si en un tribunal de evaluación o en un expediente administrativo el que tiene que decidir resulta que es mi tío o mi cuñado?"
      },
      {
        speaker: "carlos",
        etiqueta: "⚖️ La regla del 4 y el 2 (Arts. 23 y 24)",
        texto: "Ahí entran la Abstención y la Recusación de los artículos 23 y 24. Regla de oro de la familia: tienes obligación de abstenerte si tienes parentesco de consanguinidad hasta el cuarto grado —que llega hasta tu primo hermano o tu tío abuelo— o de afinidad hasta el segundo grado —que llega hasta tus suegros y tus cuñados—. Si el funcionario no se aparta solo, tú como interesada lo recusas por escrito; si él lo niega, su jefe superior resuelve en 3 días, y contra esa decisión no cabe recurso directo."
      }
    ]
  },

  "B1-T04": {
    codigo: "B1-T04",
    bloque: "Bloque 1: Organización",
    titulo: "Episodio 4: El Ministerio de Defensa por dentro (RD 205/2024 y las 3 Columnas)",
    subtitulo: "Paseo guiado por Castellana 109: qué lleva SEDEF, qué lleva SUBDEF, qué lleva SEGENPOL y las novedades de 2024",
    duracionEstimada: "06:50",
    audioUrl: "./audio/podcast-B1-T04.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "Las 3 ventanillas del Ministerio: SEDEF (el bolsillo, las compras de carros/fragatas y las obras), SUBDEF (nuestra vida como personas: nóminas, ascensos, leyes, sanidad y reclutamiento) y SEGENPOL (diplomacia militar, OTAN y UE).",
      "La novedad estrella del RD 205/2024: el desdoblamiento de DIGAM y la nueva DIGEID.",
      "Por qué CESTIC y DIAPER cuelgan directamente del despacho de la Ministra."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La sopa de siglas del RD 205/2024",
        texto: "Mi Brigada, estamos en el Tema 4: la estructura orgánica básica del Ministerio de Defensa según el Real Decreto 205/2024. Aquí el problema que tenemos todos los opositores es la ensalada de siglas: SEDEF, SUBDEF, SEGENPOL, DIGAM, DIGEID, DIGENECO, DIGENIN, DIGENPER, DIGEREM, CESTIC... Si no tengo un truco lógico para saber qué hace cada uno, en el examen las mezclo todas."
      },
      {
        speaker: "carlos",
        etiqueta: "🏛️ El truco de las 3 grandes columnas",
        texto: "¡Pues vamos a ordenar el armario ahora mismo, Marta! Imagínate que entras en la sede central del Ministerio de Defensa en el Paseo de la Castellana 109. Debajo de la persona titular del Ministerio y de la cúpula militar del JEMAD, el Ministerio civil se apoya en TRES grandes columnas. Si entiendes la personalidad de cada columna, adivinas cualquier sigla aunque no la hayas visto nunca."
      },
      {
        speaker: "marta",
        etiqueta: "💰 Columna 1: La SEDEF (El dinero y el material)",
        texto: "A ver, ¿cuál es la personalidad de la primera columna, la Secretaría de Estado de Defensa, la SEDEF?"
      },
      {
        speaker: "carlos",
        etiqueta: "🛡️ DIGAM, DIGEID, DIGENECO y DIGENIN",
        texto: "La SEDEF, que es el único Órgano Superior además del Ministro, es 'el ingeniero y el banquero' de la casa. Todo lo que sea comprar armamento, tratar con la industria militar, pagar presupuestos y construir cuarteles va a la SEDEF. Antes tenía tres Direcciones Generales, pero con el Real Decreto 205/2024 de febrero de 2024 ahora tiene CUATRO: primera, la DIGAM, Armamento y Material; segunda, la gran novedad de examen, la DIGEID, Estrategia e Innovación de la Industria de Defensa; tercera, la DIGENECO, Asuntos Económicos; y cuarta, la DIGENIN, Infraestructura."
      },
      {
        speaker: "marta",
        etiqueta: "👥 Columna 2: La SUBDEF (Las personas y las leyes)",
        texto: "¡Ojo con la DIGEID, que siendo novedad del RD 205/2024 tiene papeletas de caer seguro! ¿Y la segunda columna, la Subsecretaría de Defensa, la SUBDEF?"
      },
      {
        speaker: "carlos",
        etiqueta: "📋 SGT, DIGENPER, DIGEREM, Jurídico, Intervención y Sanidad",
        texto: "La SUBDEF es 'Recursos Humanos, Leyes y Salud'. Todo lo que tenga que ver contigo como persona y militar —desde que entras por reclutamiento en una Subdelegación de Defensa, tu enseñanza militar, tu expediente personal, tus ascensos, las leyes, los médicos y el ISFAS— cuelga de la SUBDEF. Por eso de la Subsecretaría dependen la Secretaría General Técnica, la DIGENPER de Personal y la DIGEREM de Reclutamiento y Enseñanza Militar. Y además, de la SUBDEF cuelgan la Asesoría Jurídica General, la Intervención General de la Defensa y la Inspección General de Sanidad, junto con los cuatro Cuerpos Comunes."
      },
      {
        speaker: "marta",
        etiqueta: "🌍 Columna 3: La SEGENPOL y los que van por libre",
        texto: "¡Qué fácil se ve así: cosas materiales y dinero en SEDEF; personas, leyes y sanidad en SUBDEF! ¿Y la tercera columna?"
      },
      {
        speaker: "carlos",
        etiqueta: "📡 SEGENPOL, CESTIC, DIAPER y Guardia Real",
        texto: "La tercera columna es la SEGENPOL, la Secretaría General de Política de Defensa, que tiene rango de Subsecretaría. Es 'el diplomático' del Ministerio: lleva las relaciones con la OTAN, la Unión Europea, los agregados de defensa en las embajadas y la cultura de defensa, a través de su única Dirección General, la DIGENPOL. Y para sacar el diez en el examen, recuerda las dos Direcciones Generales que NO están en ninguna de las tres columnas porque dependen directamente del Ministro de Defensa: el CESTIC, que lleva toda la informática y ciberseguridad del Ministerio, y la DIAPER, la Dirección de Asuntos de Personal y protocolo del gabinete."
      }
    ]
  },

  "B1-T05": {
    codigo: "B1-T05",
    bloque: "Bloque 1: Organización",
    titulo: "Episodio 5: Organización Básica de las FAS y el EMAD (RD 521/2020)",
    subtitulo: "Qué pasa dentro del Estado Mayor de la Defensa: EMACON, MOPS, MCCE, CIFAS y CESEDEN explicados en una operación real",
    duracionEstimada: "06:35",
    audioUrl: "./audio/podcast-B1-T05.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El cuartel general del JEMAD en Vitrubio y la base de Retamares: cómo operan juntos EMACON, MOPS, MCCE y CIFAS cuando surge una crisis.",
      "Los 5 Mandos Operativos Permanentes (MOT, MOM, MOA, MOC y MOESPA) vigilando España 24/7 los 365 días del año.",
      "La diferencia entre CIFAS (inteligencia militar conjunta en el EMAD) y CNI (inteligencia nacional adscrita al Ministro)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Entrando en el Estado Mayor de la Defensa",
        texto: "Mi Brigada, vamos a por el Tema 5 del Bloque 1: el Real Decreto 521/2020 de Organización Básica de las Fuerzas Armadas y la Orden DEF/710/2020 del Estado Mayor de la Defensa. Explícanos cómo funciona la casa del JEMAD con un ejemplo real para no confundir EMACON, MOPS, MCCE, CIFAS y CESEDEN."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo real: Alerta a las 3 de la mañana",
        texto: "¡Imagínate que son las tres de la mañana! Se detecta simultáneamente una intrusión de buques sospechosos cerca de aguas de soberanía española, un ciberataque contra redes militares y una crisis en una zona donde tenemos tropas desplegadas. ¿Cómo reacciona el Estado Mayor de la Defensa bajo el mando del JEMAD? Vamos pieza por pieza."
      },
      {
        speaker: "marta",
        etiqueta: "🧠 Pieza 1 y 2: CIFAS y EMACON",
        texto: "Vale, primero habrá que saber quién nos está atacando y asesorar al JEMAD en la estrategia general, ¿no?"
      },
      {
        speaker: "carlos",
        etiqueta: "🕵️‍♂️ Inteligencia y estrategia militar",
        texto: "¡Clavado! Primero entra en juego el CIFAS, el Centro de Inteligencia de las Fuerzas Armadas. Ojo a la trampa de examen: el CIFAS está dentro del EMAD y es el órgano único de inteligencia militar conjunta para alertar al Ministro y al JEMAD; no lo confundas con el CNI, que es el centro nacional adscrito al Ministro. Y junto a él trabaja el EMACON, el Estado Mayor Conjunto de la Defensa, que es el cerebro auxiliar del JEMAD en el nivel estratégico militar: elabora la estrategia militar y planea las capacidades futuras."
      },
      {
        speaker: "marta",
        etiqueta: "🎯 Pieza 3 y 4: MOPS y MCCE en acción",
        texto: "Una vez que el JEMAD tiene la estrategia lista, ¿quién conduce la operación en el terreno y quién frena el ciberataque?"
      },
      {
        speaker: "carlos",
        etiqueta: "💻 Retamares y el sexto dominio",
        texto: "Ahí bajan al barro operacional dos mandos clave en la Base de Retamares: primero, el MOPS, el Mando de Operaciones, al mando del CMOPS, que planea y conduce en el nivel operacional todas las misiones en el exterior y también las Operaciones Permanentes de Presencia, Vigilancia y Disuasión las 24 horas del día a través de los cinco Mandos Operativos: Terrestre MOT, Marítimo MOM, Aéreo MOA, Ciberespacial MOC y Espacial MOESPA. Y segundo, para frenar el ciberataque y asegurar la libertad de acción en el ciberespacio, actúa el MCCE, el Mando Conjunto del Ciberespacio."
      },
      {
        speaker: "marta",
        etiqueta: "🎓 Pieza 5: El CESEDEN y los tres Ejércitos",
        texto: "Y la quinta pata del EMAD es el CESEDEN, el Centro Superior de Estudios de la Defensa Nacional, donde está la ESFAS, la Escuela Superior de las Fuerzas Armadas donde se hace el curso de ascenso a General o de Estado Mayor, ¿verdad?"
      },
      {
        speaker: "carlos",
        etiqueta: "🏛️ Estructura común de los 3 Ejércitos",
        texto: "¡Exacto, Marta! Y recuerda la regla de oro del Real Decreto 521/2020 para los tres Ejércitos —Tierra, Armada y Aire y Espacio—: cada uno de los tres Ejércitos se organiza exactamente en las mismas TRES grandes patas: primera, el Cuartel General; segunda, la Fuerza; y tercera, el Apoyo a la Fuerza."
      }
    ]
  },

  "B1-T06": {
    codigo: "B1-T06",
    bloque: "Bloque 1: Organización",
    titulo: "Episodio 6: Los 3 Ejércitos (ET Inst. 14/2021, Armada Inst. 15/2021 y Aire/Espacio Inst. 6/2025)",
    subtitulo: "El mapa de España militar: por qué Ceuta, Melilla y Baleares dependen de Canarias en el ET, La Flota en Rota y el nuevo Mando del Espacio (MESP)",
    duracionEstimada: "07:20",
    audioUrl: "./audio/podcast-B1-T06.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El viaje por España de la Fuerza del ET (Instrucción 14/2021): Valencia/Bétera (CGTAD), Sevilla (FUTER con Castillejos y San Marcial) y Tenerife (MCANA con Baleares, Ceuta, Melilla y Canarias).",
      "La Armada (Instrucción 15/2021): por qué toda su Fuerza se llama 'La Flota' en Rota y por qué enseñanza naval está dentro de JEPER.",
      "El Ejército del Aire y del Espacio (Instrucción 6/2025): MACOM, MACAN y el flamante Mando del Espacio (MESP con COVE y CESAEROB)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Los 3 Ejércitos de un vistazo",
        texto: "Mi Brigada, en los Temas 6, 7 y 8 del Bloque 1 estudiamos las tres Instrucciones de organización del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio. Vamos a hacer un recorrido visual por el mapa de España para que nadie falle ni una sede ni una sigla."
      },
      {
        speaker: "carlos",
        etiqueta: "🦁 Ejército de Tierra (Instrucción 14/2021)",
        texto: "¡Empezamos por nuestra casa, el Ejército de Tierra, regulado por la Instrucción 14/2021 del JEME! En el Cuartel General en Madrid, en el Palacio de Buenavista, están el Estado Mayor del Ejército, el Gabinete del JEME, el Instituto de Historia y Cultura Militar y el Regimiento de Infantería Inmemorial del Rey número 1. Ahora salimos de Madrid y miramos las TRES grandes piezas de la Fuerza del Ejército de Tierra."
      },
      {
        speaker: "marta",
        etiqueta: "🗺️ CGTAD, FUTER y la trampa de MCANA",
        texto: "A ver: primera pieza, el CGTAD en Valencia y Bétera. Segunda pieza, la Fuerza Terrestre, FUTER, con su cuartel general en la Plaza de España de Sevilla. Y tercera pieza, el Mando de Canarias, MCANA, en Santa Cruz de Tenerife. ¡Cuenta la trampa que siempre cae entre FUTER y MCANA!"
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 ¿De quién dependen Ceuta, Melilla y Baleares?",
        texto: "¡Esa trampa ha tumbado a miles de opositores! Antes la gente pensaba que Ceuta, Melilla y Baleares dependían de Sevilla, de FUTER. ¡Pues NO! Con la Instrucción 14/2021, el Mando de Canarias, MCANA, agrupa todos los territorios extrapeninsulares: de MCANA dependen la Brigada Canarias XVI y las tres Comandancias Generales de Baleares, Ceuta y Melilla. En cambio, de FUTER en Sevilla dependen la División Castillejos en Huesca, la División San Marcial en Burgos —donde están las Fuerzas Aeromóviles, Operaciones Especiales, la Brigada Paracaidista y Montaña— y el Mando de Apoyo a la Maniobra en A Coruña."
      },
      {
        speaker: "marta",
        etiqueta: "⚓ Pasamos a la Armada (Instrucción 15/2021)",
        texto: "¡Brutal ese mapa mental: todo lo que está fuera de la Península —Canarias, Baleares, Ceuta y Melilla— va con MCANA! ¿Y qué pasa cuando llegamos al mar con la Instrucción 15/2021 del AJEMA?"
      },
      {
        speaker: "carlos",
        etiqueta: "🚢 La Flota en Rota y JEPER-JAL-DAE",
        texto: "En la Armada todo es súper ordenado: su Fuerza tiene un nombre único, se llama 'La Flota', mandada por el Almirante de la Flota desde la Base Naval de Rota. Y dentro de La Flota están la Fuerza de Acción Naval, la Fuerza de Acción Marítima con sede en Cartagena, la Fuerza de Infantería de Marina —con el Tercio de Armada, la Fuerza de Protección y la Fuerza de Guerra Naval Especial—, la Flotilla de Aeronaves y la Flotilla de Submarinos. Y ojo al Apoyo a la Fuerza de la Armada: mientras que el Ejército de Tierra tiene cuatro patas —MAPER, MALE, MADOC en Granada y DIAE—, la Armada solo tiene TRES: JEPER de Personal, JAL de Apoyo Logístico y DAE de Asuntos Económicos, porque la Dirección de Enseñanza Naval está metida dentro de JEPER."
      },
      {
        speaker: "marta",
        etiqueta: "🦅 Ejército del Aire y del Espacio (Instrucción 6/2025)",
        texto: "Y cerramos el Bloque 1 mirando al cielo y a las órbitas espaciales con el Real Decreto 524/2022 y la recientísima Instrucción 6/2025 del JEMA. ¿Cuál es la gran novedad aquí?"
      },
      {
        speaker: "carlos",
        etiqueta: "🛰️ MACOM, MACAN y el nuevo Mando del Espacio (MESP)",
        texto: "¡La estrella absoluta del examen 2025 y 2026! En la Fuerza del Ejército del Aire y del Espacio, junto al Mando Aéreo de Combate MACOM en Torrejón y al Mando Aéreo de Canarias MACAN en Las Palmas, se consolida como tercer mando de la Fuerza el Mando del Espacio, el MESP, con sede en Torrejón de Ardoz, que integra dos centros que tienes que saberte de memoria: el COVE, Centro de Operaciones de Vigilancia Espacial, y el CESAEROB, Centro de Sistemas Aeroespaciales de Observación. Y su Apoyo a la Fuerza son tres: MAPER, MALOG y DAE."
      }
    ]
  }
};

Object.assign(PODCAST_EPISODES, {
  "B2-T01": {
    codigo: "B2-T01",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 7: Tu carrera militar desde dentro (Ley 8/2006 de Tropa y Ley 39/2007)",
    subtitulo: "Compromisos, ascenso a Cabo/Cabo 1º/Cabo Mayor, Permanencia, RED a los 45 años, reservas del 40%/20%/50% y situaciones administrativas",
    duracionEstimada: "07:45",
    audioUrl: "./audio/podcast-B2-T01.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "La línea de vida de un Soldado desde que jura bandera a los 18 años hasta los 45 o 65 años (Compromiso Inicial -> Larga Duración -> Permanencia o RED).",
      "El caso del compañero que pide destino voluntario a Zaragoza frente al que mandan forzoso: por qué uno espera 2 años y el otro 1 año.",
      "Por qué el Retiro NO es una situación administrativa y la diferencia entre Suspensión de funciones y Suspensión de empleo."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La ley de nuestra propia vida",
        texto: "Mi Brigada, abrimos el Bloque 2, el más gordo del examen con un 40% de las preguntas, y empezamos por el Tema 1: la Ley 8/2006 de Tropa y Marinería y la Ley 39/2007 de la Carrera Militar. Vamos a explicarlo contando la historia de un soldado que entra nuevo al cuartel."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 La historia de Javi: del Compromiso Inicial al CLD",
        texto: "¡Venga, pongamos que nuestro compañero Javi entra en el CEFOT! Primero, requisito previo e indispensable del artículo 7 de la Ley 39/2007: jurar o prometer ante la Bandera de España. Sin jurar bandera nadie adquiere la condición de militar profesional. Javi firma su Compromiso Inicial, que dura 2 o 3 años. Luego va renovando por periodos de 2 o 3 años hasta un máximo de 6 años. Y cuando cumple más de 5 años de servicios —con el título de la ESO o equivalente e informes favorables—, a los 6 años firma el Compromiso de Larga Duración, el famoso CLD, que llega hasta los 45 años de edad."
      },
      {
        speaker: "marta",
        etiqueta: "🎖️ El salto a la Permanencia y las reservas de plazas",
        texto: "Vale, Javi ya tiene su Compromiso de Larga Duración. Y ahí se le abren varios caminos: presentarse como nosotros a la Permanencia para ser militar de carrera hasta los 65 años, o preparar las plazas reservadas de Guardia Civil, Policía Nacional o personal laboral. ¿Qué requisitos y porcentajes exactos nos pide la Ley 8/2006?"
      },
      {
        speaker: "carlos",
        etiqueta: "📊 Las cifras mágicas: 8, 14, 40%, 20% y 50%",
        texto: "¡Ojo a los números que son oro puro! Para acceder a la Permanencia, la Ley 8/2006 pide el título de Técnico de Grado Medio o equivalente, aunque las disposiciones transitorias y convocatorias mantienen las vías de acceso equivalentes, y tener entre 8 y 14 años de tiempo de servicios en el origen de la ley, ampliado después para permitir presentarse mientras se está en el CLD con un máximo de convocatorias. ¿Y si Javi lleva más de 5 años de servicio y quiere ir a las Fuerzas y Cuerpos de Seguridad? En la Guardia Civil le reservan un MÍNIMO del 40% de las plazas; en la Policía Nacional un MÍNIMO del 20%; en el Servicio de Vigilancia Aduanera otro MÍNIMO del 20%; y en plazas de personal laboral fijo del Ministerio de Defensa, al menos el 50%."
      },
      {
        speaker: "marta",
        etiqueta: "🎂 ¿Y qué pasa a los 45 años con el RED?",
        texto: "¿Y si un compañero llega a los 45 años sin haber sacado la Permanencia? Ahí entra la figura del Reservista de Especial Disponibilidad, el RED."
      },
      {
        speaker: "carlos",
        etiqueta: "💶 45 años + 18 años de servicio",
        texto: "¡Exacto! Para adquirir la condición de Reservista de Especial Disponibilidad al cumplir los 45 años tienes que haber cumplido al menos 18 años de servicios y solicitarlo. Te mantienes como RED desde los 45 hasta los 65 años, cobrando una asignación mensual de disponibilidad de unos 670 euros actualizables que es TOTALMENTE COMPATIBLE con trabajar en la vida civil en cualquier empresa privada."
      },
      {
        speaker: "marta",
        etiqueta: "📈 Ejemplo de Ascensos y Situaciones Administrativas",
        texto: "Y dentro de la Ley 39/2007 de la Carrera Militar, explícanos rápido con un ejemplo cómo ascendemos en Tropa y la trampa mortal de las situaciones administrativas."
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 Elección, Concurso-Oposición y la trampa del Retiro",
        texto: "En Tropa y Marinería hay cuatro empleos: Soldado o Marinero, Cabo, Cabo Primero y Cabo Mayor. A Cabo y a Cabo Primero se asciende por Concurso o Concurso-Oposición; pero a Cabo Mayor se asciende por ELECCIÓN, igual que a Suboficial Mayor, a Coronel y a General. En los destinos, si vas voluntario tienes que estar mínimo 2 años; si vas forzoso, mínimo 1 año. Y cuidado con la trampa del artículo 107: las situaciones administrativas son SEIS —Servicio activo, Servicios especiales, Excedencia, Suspensión de funciones, Suspensión de empleo y Reserva—. ¡El RETIRO NO es una situación administrativa! Con el retiro termina tu relación profesional de servicios con las Fuerzas Armadas."
      }
    ]
  },

  "B2-T02": {
    codigo: "B2-T02",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 8: Reales Ordenanzas para las FAS (RD 96/2009) con casos prácticos",
    subtitulo: "Qué hacer si te dan una orden ilegal, cuándo puedes saltarte el conducto reglamentario y el uso gradual de la fuerza",
    duracionEstimada: "06:25",
    audioUrl: "./audio/podcast-B2-T02.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El centinela en el puesto de guardia al que un mando le ordena algo que constituye delito: artículo 48 RROO en acción.",
      "Cuándo usar el conducto regular y las dos excepciones reales en las que te saltas a tu jefe directo.",
      "Perdido sin radio en mitad de una operación (Art. 59 RROO): cómo actuar según el propósito del mando."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ El código ético en el barro",
        texto: "Mi Brigada, vamos al Tema 2 del Bloque 2: el Real Decreto 96/2009 que aprueba las Reales Ordenanzas para las Fuerzas Armadas. Tiene 129 artículos repartidos en un Título Preliminar y cinco Títulos. Vamos a bajar sus artículos más preguntados a situaciones reales que nos pueden pasar en la unidad."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Caso 1: La orden que constituye delito (Art. 48)",
        texto: "¡Vamos con el caso más famoso de toda la oposición! Imagínate que estás de guardia en el cuerpo de guardia y un superior te da una orden que tú ves claramente que es un delito o que va contra la Constitución o contra las reglas del Derecho Internacional Humanitario en una operación. ¿Qué dice el artículo 48 de las Reales Ordenanzas que tienes que hacer?"
      },
      {
        speaker: "marta",
        etiqueta: "⚖️ ¿Obedezco o no obedezco?",
        texto: "Si la orden entraña la ejecución de actos constitutivos de delito, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, ¡el militar NO estará obligado a obedecerla! Y en todo caso asumirá la grave responsabilidad de su acción u omisión."
      },
      {
        speaker: "carlos",
        etiqueta: "📌 El matiz clave",
        texto: "¡Diez sobre diez, Marta! Fíjate en la diferencia: si es una orden normal del servicio que simplemente a ti te parece que tiene algún inconveniente técnico, la cumples o expones respetuosamente la dificultad, pero obedeces. Ahora bien, si es manifiestamente DELICTIVA, tienes el deber de NO obedecerla."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Caso 2: El conducto reglamentario (Arts. 33 y 49)",
        texto: "Segundo caso real: siempre nos dicen en el cuartel que para todo asunto del servicio hay que ir por conducto regular, escalón por escalón. ¿Pero qué pasa si el problema o la queja que tengo es precisamente contra mi jefe directo?"
      },
      {
        speaker: "carlos",
        etiqueta: "🔓 Las excepciones al conducto regular",
        texto: "Ahí el artículo 33 de las Reales Ordenanzas te abre la puerta: siempre se sigue el conducto regular según la estructura jerárquica de tu unidad, SALVO en dos casos: primero, cuando esté establecido un conducto específico para dirigirse a otro órgano —por ejemplo, cuando acudes a la Unidad de Protección frente al Acoso, la UPA—; y segundo, cuando presentes un recurso o una queja contra tu jefe inmediato en los términos previstos en las leyes."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Caso 3: Sin cobertura de radio en combate (Arts. 56 y 59)",
        texto: "Y tercer caso: estamos de operación, se corta la radio, cambia la situación táctica de golpe y no puedo pedir instrucciones a mi Capitán. ¿Me quedo quieta esperando?"
      },
      {
        speaker: "carlos",
        etiqueta: "⚡ Iniciativa e intención del mando",
        texto: "¡Jamás! El artículo 59 dice que cuando no puedas consultar a tus superiores tomarás por propia iniciativa las decisiones que estimes más acertadas para cumplir la misión, inspirándote siempre en el propósito del mando —lo que en doctrina llamamos la intención del jefe— y asumiendo plenamente tu responsabilidad, porque según el artículo 56 la responsabilidad en el ejercicio del mando NO es renunciable ni puede ser compartida."
      }
    ]
  },

  "B2-T03": {
    codigo: "B2-T03",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 9: Derechos y Deberes (LO 9/2011) explicados con ejemplos de fin de semana",
    subtitulo: "Viajes al extranjero, manifestaciones, uso del uniforme, asociaciones profesionales, COPERFAS (4 años) y Observatorio (5 años)",
    duracionEstimada: "07:05",
    audioUrl: "./audio/podcast-B2-T03.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El viaje de fin de semana a Portugal o Roma: por qué por España te mueves libremente pero para salir al extranjero tienes que comunicarlo antes.",
      "La manifestación del domingo en tu ciudad: qué puedes hacer de paisano y qué tienes terminantemente prohibido.",
      "El truco definitivo para no confundir jamás el COPERFAS (Ministerio, 4 años) con el Observatorio de la Vida Militar (Cortes Generales, 9 miembros, 5 años)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Lo que podemos y no podemos hacer",
        texto: "Mi Brigada, llegamos al Tema 3 del Bloque 2: la Ley Orgánica 9/2011 de derechos y deberes de los miembros de las Fuerzas Armadas. Vamos a poner situaciones cotidianas que nos pasan a cualquier Cabo o Soldado un viernes por la tarde."
      },
      {
        speaker: "carlos",
        etiqueta: "✈️ Ejemplo 1: Me voy el puente a Lisboa o a Roma (Art. 11)",
        texto: "¡Situación uno! Llega el viernes a las dos de la tarde y quieres irte el fin de semana a ver a tu familia a otra provincia de España, o quieres coger un vuelo barato e irte a Roma al extranjero. ¿Qué dice el artículo 11 de la Ley Orgánica 9/2011?"
      },
      {
        speaker: "marta",
        etiqueta: "🗺️ Territorio nacional vs Extranjero",
        texto: "Por territorio nacional me puedo desplazar libremente, siempre que cumpla con mi deber de disponibilidad permanente y esté localizable. ¿Y si salgo al extranjero?"
      },
      {
        speaker: "carlos",
        etiqueta: "📝 Comunicación previa obligatoria",
        texto: "Para ir al extranjero se aplican los mismos criterios que en territorio nacional, PERO tienes la obligación de COMUNICARLO PREVIAMENTE a tu unidad. No es pedir permiso en condiciones normales, es comunicarlo previamente, salvo que vayas a una zona de conflicto o riesgo donde por seguridad sí te exijan autorización previa."
      },
      {
        speaker: "marta",
        etiqueta: "📢 Ejemplo 2: Manifestaciones, política y derecho de petición",
        texto: "Segunda situación: el domingo hay una manifestación en mi ciudad o quiero presentar un escrito de petición del artículo 29 de la Constitución. ¿Dónde está la línea roja para un militar?"
      },
      {
        speaker: "carlos",
        etiqueta: "🚫 Tres prohibiciones tajantes",
        texto: "Anota estas tres líneas rojas que caen siempre: primera, neutralidad política y sindical absoluta; un militar NO puede afiliarse a partidos políticos ni a sindicatos, solo a una única asociación profesional militar inscrita en el RAPFAS. Segunda, en reuniones o manifestaciones NO puedes organizar ni participar activamente en las de carácter político o sindical, y en ninguna manifestación pública puedes ir de uniforme ni haciendo uso de tu condición militar. Y tercera, el derecho de petición del artículo 15 solo puedes ejercerlo INDIVIDUALMENTE, nunca en grupo."
      },
      {
        speaker: "marta",
        etiqueta: "🏛️ Ejemplo 3: COPERFAS vs Observatorio de la Vida Militar",
        texto: "¡Perfecto! Y ahora el cruce donde cae medio salón de examen todos los años: el Consejo de Personal de las Fuerzas Armadas, el COPERFAS, frente al Observatorio de la Vida Militar. ¿Cómo los clavamos a la primera?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎯 El duelo del 4 contra el 5",
        texto: "¡Imagínate dos edificios distintos de Madrid! Edificio uno: el Ministerio de Defensa. Ahí dentro está el COPERFAS, presidido por el Ministro de Defensa —o el Subsecretario cuando no asiste el Ministro—. Ahí se sientan a mitad y mitad los representantes del Ministerio y las asociaciones profesionales que lleguen a los porcentajes del artículo 48: un 1% del total de las FAS, un 3% si son de Oficiales o Suboficiales, o un 1,5% si son de Tropa y Marinería. Y el mandato en el COPERFAS dura 4 AÑOS. Ahora nos vamos al edificio dos: las Cortes Generales, el Parlamento. Ahí está adscrito el Observatorio de la Vida Militar: NO son militares en activo representando asociaciones, sino 9 personalidades de reconocido prestigio elegidas 5 por el Congreso y 4 por el Senado, su cargo dura 5 AÑOS, y se reúnen al menos 2 veces al año en sesión ordinaria."
      }
    ]
  },

  "B2-T04": {
    codigo: "B2-T04",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 10: Régimen Disciplinario (LO 8/2014) — La Escalera de Arrestos y Plazos",
    subtitulo: "Casos prácticos con el Sargento, el Teniente y el Capitán, por qué 2 meses no son 3 meses, y cómo funcionan los recursos",
    duracionEstimada: "08:15",
    audioUrl: "./audio/podcast-B2-T04.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El caso del Soldado que llega tarde: qué puede hacerle el Sargento de Pelotón, qué puede hacerle el Teniente de Sección (¡0 días de arresto!) y qué puede hacerle el Capitán de Compañía (1 a 5 días).",
      "La historia de los dos arrestos: por qué en el arresto leve trabajas con tu compañía y en el grave/muy grave vas al Establecimiento Disciplinario Militar sin ir a tu unidad.",
      "El truco del reloj de arena para no confundir prescripción de faltas (2m/2a/3a), prescripción de sanciones (3m/2a/3a) y cancelación (1a/2a/4a)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ El tema rey de toda la oposición",
        texto: "Mi Brigada, atención todo el mundo porque llegamos al Tema 4 del Bloque 2: la Ley Orgánica 8/2014 de Régimen Disciplinario de las Fuerzas Armadas. Es, sin discusión, el tema que más preguntas mete en el examen oficial. Vamos a destriparlo con casos reales de cuartel."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Caso 1: La escalera de mandos del Artículo 32",
        texto: "¡Vamos con una historia real de lunes por la mañana! Un soldado comete una falta leve, por ejemplo llega tarde a lista de ordenanza o descuida el uniforme. Vamos a subir por la escalera del artículo 32 para ver qué sanción máxima puede poner cada mando de tu unidad."
      },
      {
        speaker: "marta",
        etiqueta: "🪜 Peldaño 1 y 2: El Cabo, el Sargento y el Teniente",
        texto: "A ver: primero lo ve su Cabo Jefe de Escuadra. El Cabo no tiene potestad sancionadora, así que da parte. Llega al Jefe de Pelotón que sea Suboficial, un Sargento. ¿Qué puede imponer el Sargento Jefe de Pelotón?"
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 ¡La gran trampa del Jefe de Sección!",
        texto: "El Sargento Jefe de Pelotón SOLO puede imponer REPRENSIÓN. Ahora subimos al Teniente Jefe de Sección. ¡Y aquí cae el 80% de los opositores! En el examen te preguntan: '¿Cuántos días de arresto puede imponer un Teniente Jefe de Sección?'. ¡CERO DÍAS! El Jefe de Sección puede poner reprensión, privación de salida de hasta 4 días a los alumnos, y sanción económica de 1 a 3 días, pero NO PUEDE ARRESTAR."
      },
      {
        speaker: "marta",
        etiqueta: "🪜 Peldaños 3, 4 y 5: Capitán, Teniente Coronel y Coronel",
        texto: "¡Ojo a eso: el Teniente Jefe de Sección tiene CERO días de arresto! Entonces el primer escalón de mando que puede arrestar en España es el Capitán Jefe de Compañía."
      },
      {
        speaker: "carlos",
        etiqueta: "🎖️ 5 días, 7 días y 14 días",
        texto: "¡Exactamente! El Capitán Jefe de Compañía puede imponer hasta 5 días de sanción económica y ARRESTO de 1 a 5 días. Subimos al Teniente Coronel Jefe de Batallón: puede imponer hasta 7 días de sanción económica y ARRESTO de 1 a 7 días. Y subimos al Coronel Jefe de Regimiento o unidad independiente: él ya tiene toda la potestad de las faltas leves, que llega hasta los 7 días de sanción económica y hasta los 14 días de arresto."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Caso 2: ¿Dónde cumplo el arresto y quién recurre ante quién?",
        texto: "Supongamos que el Capitán de mi Compañía me impone 4 días de arresto por falta leve. Dos preguntas prácticas: primera, ¿durante esos 4 días voy a trabajar con mi compañía?; y segunda, si quiero recurrir ese arresto del Capitán, ¿quién resuelve mi recurso de alzada y cuándo empieza a contar el mes para recurrir?"
      },
      {
        speaker: "carlos",
        etiqueta: "⚖️ Tres respuestas de examen en un solo caso",
        texto: "¡Qué preguntón acabas de hacer, Marta, ahí hay tres preguntas oficiales seguidas! Primera: como es arresto por falta LEVE, de 1 a 14 días, lo cumples en tu domicilio o en la unidad y SÍ participas en las actividades de tu unidad; en cambio, si fuera arresto por falta GRAVE, de 15 a 30 días, o MUY GRAVE, de 31 a 60 días, se cumple internado en un Establecimiento Disciplinario Militar y NO participas en las actividades de la unidad. Segunda: como la sanción te la ha puesto el Capitán Jefe de Compañía, el artículo 68 dice que tu recurso de alzada NO va al Jefe de Batallón, sino que salta directamente al Coronel Jefe de Regimiento. Y tercera: tienes 1 mes para interponer el recurso, pero como estás cumpliendo un arresto leve, ese mes NO empieza cuando te notifican el papel, sino al día siguiente de FINALIZAR el cumplimiento del arresto. Y el Coronel tiene 2 meses para resolver tu recurso."
      },
      {
        speaker: "marta",
        etiqueta: "⏱️ El truco final: 2m/2a/3a vs 3m/2a/3a vs 1a/2a/4a",
        texto: "¡Eso es oro puro! Y para cerrar el episodio por todo lo alto, recítanos el mantra de la prescripción de faltas, prescripción de sanciones y cancelación de notas."
      },
      {
        speaker: "carlos",
        etiqueta: "🧠 La matriz de 3 filas",
        texto: "¡Grábatelo a fuego! Fila uno, prescripción de las FALTAS: 2 meses las leves, 2 años las graves y 3 años las muy graves. Fila dos, prescripción de las SANCIONES ya impuestas: solo cambia el primer número, pasa de 2 a 3; son 3 meses las leves, 2 años las graves y 3 años las muy graves. Y fila tres, CANCELACIÓN de la nota en tu hoja de servicios una vez cumplida la sanción: 1 año las leves, 2 años las graves y 4 años las muy graves. Y recuerda los dos expedientes: el expediente por falta grave caduca a los 6 meses y el de falta muy grave al año."
      }
    ]
  },

  "B2-T05": {
    codigo: "B2-T05",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 11: Iniciativas y Quejas (RD 176/2014) — Cómo plantearlas paso a paso",
    subtitulo: "La historia de una queja por el vestuario o el alojamiento: quién la recoge en la unidad, el plazo de 1 mes y qué no entra en este Real Decreto",
    duracionEstimada: "05:50",
    audioUrl: "./audio/podcast-B2-T05.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "Diferencia real entre una Iniciativa (proponer una mejora general para toda la base) y una Queja (reclamar por una situación de régimen de personal o condiciones de vida que te afecta).",
      "El Suboficial Mayor como militar designado en la unidad (siempre más antiguo que los Cabos Mayores).",
      "Qué pasa si pasa 1 mes y el Jefe de Unidad no te contesta la queja."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Un tema corto pero muy rentable",
        texto: "Mi Brigada, estamos en el Tema 5 del Bloque 2: el Real Decreto 176/2014 de Iniciativas y Quejas. Es un Real Decreto cortito, de solo 14 artículos, pero todos los años caen dos o tres preguntas seguras. Vamos a explicarlo con un caso práctico en nuestra base."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo real: Iniciativa vs Queja",
        texto: "¡Vamos allá! Primero distingamos las dos cosas con un ejemplo cotidiano. Si tú ves que el horario del gimnasio o el sistema de recogida de raciones de campaña del cuartel se podría organizar mejor para todos y presentas una propuesta de carácter general para mejorar la eficacia de la unidad o las condiciones de vida, eso es una INICIATIVA. En cambio, si en tu alojamiento logístico no funciona la calefacción o hay un problema con tus guardias o vacaciones y manifiestas tu disconformidad relativa al régimen de personal o condiciones de vida, eso es una QUEJA."
      },
      {
        speaker: "marta",
        etiqueta: "🪤 ¿Puedo usar una Queja para recurrir un arresto?",
        texto: "¡Quieto ahí! ¿Y si me han puesto un arresto o me han denegado un destino publicado en el BOD y presento una Queja del RD 176/2014?"
      },
      {
        speaker: "carlos",
        etiqueta: "🚫 Lo que queda excluido (Art. 3 y Art. 6)",
        texto: "¡Te la inadmiten de inmediato! El artículo 3 dice que quedan EXCLUIDAS las materias que tengan su propio procedimiento o recurso específico —como un arresto o un acto administrativo recurrible en alzada—, las que estén en un juzgado y el derecho de petición. Y además, el artículo 6 dice que se inadmiten las quejas anónimas, las quejas colectivas —porque siempre tienen que ser individuales— y las que se presenten con mala fe o abuso de derecho."
      },
      {
        speaker: "marta",
        etiqueta: "🎖️ ¿Ante quién la presento y qué pasa si no me contestan?",
        texto: "Vale, voy de buena fe con mi queja individual escrita. ¿A quién se la entrego en mi unidad y qué plazos corren?"
      },
      {
        speaker: "carlos",
        etiqueta: "⏱️ El militar designado y el plazo de 1 mes vs 6 meses",
        texto: "En cada unidad hay un 'militar designado' para recibir, registrar y tramitar las iniciativas y quejas. ¡Ojo al requisito de examen!: ese militar designado tiene que ser siempre MÁS ANTIGUO que los Cabos Mayores de la unidad, por eso habitualmente se nombra al Suboficial Mayor. Él acusa recibo en 72 horas y la pasa al Jefe de Unidad. Si es una INICIATIVA, tienen hasta 6 MESES para contestarte motivadamente. Pero si es una QUEJA, si pasa 1 MES desde que la presentaste y no te han contestado —o te han contestado y no estás conforme—, tienes un plazo de 1 MES para elevar esa misma queja directamente al Mando o Jefatura de Personal de tu Ejército —MAPER o JEPER, o DIGENPER en Cuerpos Comunes—, dando cuenta de ello al Jefe de tu Unidad."
      }
    ]
  },

  "B2-T06": {
    codigo: "B2-T06",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 12: Igualdad Efectiva (LO 3/2007 y LO 2/2024) explicada con ejemplos",
    subtitulo: "Cómo distinguir al instante Discriminación Directa vs Indirecta, Acoso Sexual vs Acoso por Razón de Sexo y la horquilla del 60%/40%",
    duracionEstimada: "06:40",
    audioUrl: "./audio/podcast-B2-T06.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El requisito aparentemente neutro que esconde una trampa: ejemplo real de Discriminación Indirecta frente a Discriminación Directa (y por qué el embarazo/maternidad es SIEMPRE Directa).",
      "Diferencia quirúrgica del Art. 7: Acoso Sexual (naturaleza sexual) vs Acoso por Razón de Sexo (en función del sexo, sin contenido sexual).",
      "La regla del 60% / 40% de presencia equilibrada reforzada por la Ley Orgánica 2/2024."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Conceptos legales que suenan parecidos",
        texto: "Mi Brigada, en los Temas 6 y 7 del Bloque 2 estudiamos la Ley Orgánica 3/2007 de Igualdad, la Ley Orgánica 2/2024 de representación paritaria, el Observatorio Militar para la Igualdad y el Protocolo frente al Acoso con las UPA. Empecemos por el Tema 6: ponme un ejemplo real para no confundir jamás Discriminación Directa con Discriminación Indirecta."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo 1: Directa vs Indirecta (Art. 6 y Art. 8)",
        texto: "¡Con un ejemplo lo ves en dos segundos! Imagínate que alguien dice: 'A este curso de especialización no pueden ir mujeres, o a esta militar le damos peor destino por haberse quedado embarazada'. Eso es Discriminación DIRECTA: tratas a una persona de manera menos favorable directamente por su sexo. ¡Y ojo al artículo 8, que es pregunta fija!: todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad es SIEMPRE discriminación DIRECTA. Ahora imagínate otro caso: ponen una norma que en el papel parece neutra para todo el mundo, pero que en la práctica perjudica masivamente a las mujeres sin que haya una justificación objetiva y necesaria para el puesto. Esa palabra mágica —'criterio o práctica aparentemente neutros'— es la Discriminación INDIRECTA."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Ejemplo 2: Acoso Sexual vs Acoso por Razón de Sexo (Art. 7)",
        texto: "¡La palabra 'aparentemente neutros' es el detector automático de la indirecta! Ahora hazme lo mismo con el artículo 7: ¿cuál es la diferencia exacta con ejemplos entre Acoso Sexual y Acoso por Razón de Sexo?"
      },
      {
        speaker: "carlos",
        etiqueta: "🔍 Naturaleza sexual vs En función del sexo",
        texto: "Fíjate qué sencillo: en el Acoso SEXUAL hay un comportamiento verbal o físico DE NATURALEZA SEXUAL —insinuaciones, tocamientos, comentarios lascivos— que atenta contra la dignidad creando un entorno intimidatorio o degradante. En cambio, en el Acoso POR RAZÓN DE SEXO no hay contenido sexual ni erótico: es un hostigamiento realizado EN FUNCIÓN DEL SEXO de la persona; por ejemplo, hacerle el vacío, ridiculizar o machacar laboralmente a una compañera por estar embarazada o por pedir reducción de jornada por lactancia. Ambos son siempre discriminatorios."
      },
      {
        speaker: "marta",
        etiqueta: "⚖️ El 60% / 40% y los órganos del Título VIII",
        texto: "¿Y cuáles son los porcentajes de la presencia equilibrada que refuerza la Ley Orgánica 2/2024, y quién invierte la carga de la prueba?"
      },
      {
        speaker: "carlos",
        etiqueta: "📊 60/40 y la excepción penal del Art. 13",
        texto: "Presencia equilibrada significa que ningún sexo supere el 60% ni tenga menos del 40%. Y en un juicio por discriminación de sexo, el artículo 13 invierte la carga de la prueba: es el demandado quien tiene que probar que no discriminó, EXCEPTO en los procesos PENALES, donde siempre rige la presunción de inocencia."
      }
    ]
  },

  "B2-T07": {
    codigo: "B2-T07",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 13: Protocolo frente al Acoso en las FAS, las UPA y el Observatorio de Igualdad",
    subtitulo: "Cómo actúa una Unidad de Protección frente al Acoso (UPA), por qué no hay conducto reglamentario y quién preside el Observatorio Militar para la Igualdad",
    duracionEstimada: "06:00",
    audioUrl: "./audio/podcast-B2-T07.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El caso real de una militar o un militar que sufre acoso en su unidad: cómo contacta directamente con la UPA saltándose toda la cadena de mando.",
      "Dónde están las 5 UPA de las Fuerzas Armadas (DIGENPER, EMAD, ET, Armada y EA) y qué hace el Grupo de Asesoramiento.",
      "Cómo no confundir el Observatorio Militar para la Igualdad (presidido por SUBDEF) con el Observatorio de la Vida Militar (Cortes Generales)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La red de protección en las FAS",
        texto: "Mi Brigada, seguimos en el Tema 7 del Bloque 2 con el Protocolo de actuación frente al acoso sexual y por razón de sexo en las Fuerzas Armadas y el Observatorio Militar para la Igualdad. Explícanos cómo funciona en la práctica una UPA, una Unidad de Protección frente al Acoso."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Caso práctico: Acudiendo a la UPA",
        texto: "Imagina que alguien en una unidad sufre acoso sexual o por razón de sexo y precisamente quien le acosa es un superior de su compañía. Si tuviera que pedir conducto reglamentario a su propio acosador, nadie denunciaría. Por eso la regla número uno del Protocolo es que para acudir a la UPA NO ES NECESARIO SEGUIR EL CONDUCTO REGLAMENTARIO. Cualquier víctima, o cualquier compañero que tenga conocimiento de los hechos, puede dirigirse directamente a la UPA por teléfono, correo o presencialmente con total confidencialidad."
      },
      {
        speaker: "marta",
        etiqueta: "🏥 ¿Cuántas UPA existen y qué hacen?",
        texto: "Vale, acudo a la UPA sin conducto reglamentario. ¿Dónde están esas UPA y cuidado con la pregunta de examen: la UPA puede imponerme o imponerle al agresor un arresto?"
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 La UPA asesora y canaliza, pero NO sanciona",
        texto: "¡Ahí has dado en el clavo! Existen UPA en la Subsecretaría de Defensa —la Unidad Central en DIGENPER—, en el EMAD y en cada uno de los tres Ejércitos —MAPER del ET, JEPER de la Armada y MAPER del Aire—. En la UPA se reúne un Grupo de Asesoramiento con apoyo jurídico, médico, psicológico y social para proteger y acompañar a la víctima y proponer medidas preventivas para que víctima y presunto acosador no compartan espacio ni dependencia directa, sin que jamás la víctima sufra perjuicio en su destino o sueldo. Pero ojo: la UPA NO instruye el expediente disciplinario ni sanciona; la UPA remite la denuncia de inmediato, en un máximo de 5 días si requiere valoración preliminar, a la autoridad con potestad disciplinaria o judicial."
      },
      {
        speaker: "marta",
        etiqueta: "🏛️ El Observatorio Militar para la Igualdad",
        texto: "Y para rematar el Tema 7: ¿quién preside el Observatorio Militar para la Igualdad entre mujeres y hombres en las Fuerzas Armadas?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎯 SUBDEF al mando",
        texto: "Lo preside siempre la persona titular de la Subsecretaría de Defensa, la SUBDEF, y su Secretaría Permanente la lleva la División de Igualdad y Apoyo Social al Personal dentro de la DIGENPER. ¡No lo confundas nunca con el Observatorio de la Vida Militar de las Cortes Generales!"
      }
    ]
  },

  "B2-T08": {
    codigo: "B2-T08",
    bloque: "Bloque 2: Jurídico-Social",
    titulo: "Episodio 14: Ley 39/2015 LPACAP explicada para seres humanos (Plazos, Silencio y Recursos)",
    subtitulo: "Cómo entender de una vez Nulidad vs Anulabilidad, el Doble Silencio en Alzada, Lesividad y la tabla de los 3 Recursos con ejemplos reales",
    duracionEstimada: "08:30",
    audioUrl: "./audio/podcast-B2-T08.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El ejemplo médico de Nulidad de pleno derecho (Art. 47 = muerte clínica irreversible del acto) frente a Anulabilidad (Art. 48 = enfermedad curable mediante convalidación).",
      "La historia de tu solicitud de permiso o beca que no te contestan: cómo funciona el Doble Silencio en Alzada (Silencio + Silencio = Sí).",
      "El partido de tenis de los 3 Recursos: Alzada (1m / 3m), Reposición (1m / 1m) y Extraordinario de Revisión (4 años / 3 meses)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Domando al monstruo del Procedimiento Administrativo",
        texto: "Mi Brigada, cerramos el Bloque 2 con el Tema 8: la Ley 39/2015 del Procedimiento Administrativo Común, la famosa LPACAP. Para muchos compañeros esta es la ley más espesa y aburrida de toda la oposición. ¡Hoy tenemos que traducirla entera con ejemplos cotidianos!"
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo 1: Presentar un papel un sábado y los plazos (Arts. 21, 30 y 31)",
        texto: "¡Acepto el reto, Marta! Empecemos por una situación real: es sábado por la noche y entras con tu certificado digital en la Sede Electrónica del Ministerio para presentar una solicitud. El registro electrónico está abierto las 24 horas de los 365 días, pero como los sábados, domingos y festivos son días INHÁBILES en la Ley 39/2015, ¿cuándo se entiende presentada tu solicitud a efectos de plazos? En la primera hora del primer día hábil siguiente, es decir, el lunes a primera hora. ¿Y cuánto tiempo tiene la Administración para resolver y notificarte un procedimiento? El plazo que diga su norma, que no puede pasar de 6 meses salvo que una Ley o norma europea diga más; y si la norma se calla y no dice plazo, el plazo por defecto es de 3 MESES."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Ejemplo 2: El misterio del Doble Silencio en Alzada (Art. 24)",
        texto: "Vale: tope 6 meses, supletorio 3 meses. Ahora explícame con un ejemplo real la famosa regla del Doble Silencio en el recurso de alzada del artículo 24, que siempre cae como pregunta trampa."
      },
      {
        speaker: "carlos",
        etiqueta: "🔓 Silencio + Silencio = Estimado (Positivo)",
        texto: "¡Mira qué fácil! Tú pides una autorización a la Administración. Pasan los 3 meses y no te contestan; imagina que por silencio se entiende desestimada. Tú no te rindes y pones un Recurso de Alzada ante el jefe superior contra ese silencio. En los recursos, la regla general es que si no te contestan el recurso, el silencio es negativo. PERO la ley dice: 'Oye, si la Administración ya pasó de ti en la solicitud inicial y ahora en el Recurso de Alzada vuelve a pasar de ti otros 3 meses sin contestarte, ¡dos silencios seguidos ya son demasiado castigo para el ciudadano!'. Por tanto, el segundo silencio en el recurso de alzada se convierte en ESTIMATORIO, es decir, POSITIVO a tu favor, salvo en materias blindadas como derecho de petición, dominio o servicio público, medio ambiente o pedir una indemnización de responsabilidad patrimonial."
      },
      {
        speaker: "marta",
        etiqueta: "🎬 Ejemplo 3: Nulidad (Art. 47) vs Anulabilidad (Art. 48)",
        texto: "¡Qué bien se entiende así: un silencio más otro silencio en alzada da positivo! Ahora ponme una comparación médica para distinguir cuándo un acto administrativo es Nulo de pleno derecho del artículo 47 y cuándo es simplemente Anulable del artículo 48."
      },
      {
        speaker: "carlos",
        etiqueta: "🏥 Muerte clínica vs Gripe curable",
        texto: "Piénsalo como en un hospital: la NULIDAD de pleno derecho del artículo 47 es la muerte clínica del acto, no tiene cura ni caduca nunca. Solo ocurre en los casos gravísimos de la lista cerrada del 47: lesionar derechos fundamentales de amparo, que sea un delito, que sea imposible, que se dicte sin ningún procedimiento o que lo dicte un órgano manifiestamente incompetente por razón de la MATERIA o del TERRITORIO —por ejemplo, que el Alcalde de tu pueblo te ascienda a Cabo Mayor o que el Subdelegado de Cuenca multe en Sevilla—. En cambio, la ANULABILIDAD del artículo 48 es una gripe curable: es cualquier otra infracción de la ley, incluida la desviación de poder o la incompetencia JERÁRQUICA —por ejemplo, que firme el Teniente Coronel algo que correspondía a su Coronel—. Como es curable, el Coronel puede CONVALIDARLO firmándolo después."
      },
      {
        speaker: "marta",
        etiqueta: "⚖️ ¿Y cómo los anula la propia Administración? (Arts. 106 y 107)",
        texto: "Y si la Administración se da cuenta de que metió la pata dándome un acto favorable: si es Nulo del 47 va por Revisión de oficio en cualquier momento con dictamen favorable del Consejo de Estado; pero si es Anulable del 48..."
      },
      {
        speaker: "carlos",
        etiqueta: "🏛️ Declaración de Lesividad en 4 años",
        texto: "¡Si es favorable y solo Anulable del 48, la Administración NO puede quitártelo por su cuenta! Tiene que hacer antes de 4 AÑOS una Declaración de Lesividad para el interés público y luego demandar su propio acto ante el juez contencioso-administrativo. Y ambos procedimientos, revisión de oficio y lesividad, caducan a los 6 MESES."
      },
      {
        speaker: "marta",
        etiqueta: "🎾 El pimpón final: Alzada, Reposición y Revisión (Arts. 121-126)",
        texto: "Cerramos el Bloque 2 con la tabla sagrada de los tres recursos administrativos. ¡Cántanos los plazos!"
      },
      {
        speaker: "carlos",
        etiqueta: "🏆 1-3, 1-1 y 4 años / 3 meses",
        texto: "¡Ahí va el cántico de academia! Uno: Recurso de ALZADA, contra actos que NO agotan la vía administrativa, ante el superior; tienes 1 mes para ponerlo si el acto es expreso —o en cualquier momento si es presunto— y la Administración tiene 3 MESES para resolverlo. Dos: Recurso potestativo de REPOSICIÓN, contra actos que SÍ agotan la vía administrativa, ante el mismo órgano; tienes 1 mes para ponerlo y la Administración tiene 1 MES para resolverlo. Y tres: Recurso EXTRAORDINARIO DE REVISIÓN, contra actos ya FIRMES, por las cuatro causas tasadas del artículo 125: si es por error de hecho que resulte de los propios papeles del expediente, tienes 4 AÑOS; si es por aparecer documentos esenciales o por falsedad, cohecho o prevaricación declarados en sentencia firme, tienes 3 MESES; y se resuelve en 3 MESES. ¡Y nunca olvides que en el régimen disciplinario militar de la LO 8/2014 tanto alzada como reposición se resuelven en 2 MESES!"
      }
    ]
  }
});

Object.assign(PODCAST_EPISODES, {
  "B3-T01": {
    codigo: "B3-T01",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 15: Ley 36/2015 de Seguridad Nacional y Estrategia 2021 (Con un caso de crisis)",
    subtitulo: "Qué pasa cuando estalla una crisis híbrida o energética: la Situación de Interés para la Seguridad Nacional, el DSN y las '3 P'",
    duracionEstimada: "06:30",
    audioUrl: "./audio/podcast-B3-T01.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El caso de un gran apagón o ataque híbrido que no llega a requerir Estado de Alarma pero supera a un Ministerio: la Situación de Interés para la Seguridad Nacional.",
      "Cómo no confundir el Consejo de Seguridad Nacional (Ley 36/2015, Secretaría en el DSN de Moncloa) con el Consejo de Defensa Nacional (LO 5/2005, Secretaría en SEGENPOL).",
      "Las '3 P' de la Estrategia de Seguridad Nacional 2021 (RD 1150/2021): Proteger, Promover y Participar."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Arrancamos el Bloque 3",
        texto: "Mi Brigada, entramos en el Bloque 3: Seguridad Nacional y Organizaciones Internacionales, que vale un 26% del examen. Empezamos con el Tema 1: la Ley 36/2015 de Seguridad Nacional y la Estrategia de Seguridad Nacional 2021. Explícanos con un ejemplo real para qué sirve esta ley y qué es una Situación de Interés para la Seguridad Nacional."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo real: Una crisis combinada sin estado de alarma",
        texto: "Imagina que mañana sufrimos a la vez un ciberataque masivo contra la red eléctrica, una campaña de desinformación y un bloqueo en el suministro energético. No hace falta suspender derechos de los ciudadanos con los estados del artículo 116 de la Constitución, pero la crisis desborda a un solo Ministerio y exige que todos los recursos del Estado actúen bajo una dirección única. Esa es exactamente la Situación de Interés para la Seguridad Nacional del artículo 24 de la Ley 36/2015."
      },
      {
        speaker: "marta",
        etiqueta: "👑 ¿Quién la declara y qué efectos tiene?",
        texto: "Vale, y en los exámenes siempre nos preguntan quién la declara, mediante qué norma y si suspende algún derecho fundamental."
      },
      {
        speaker: "carlos",
        etiqueta: "⚖️ Real Decreto del Presidente del Gobierno",
        texto: "¡Ahí está la clave! La Situación de Interés para la Seguridad Nacional la declara el PRESIDENTE DEL GOBIERNO en exclusiva mediante REAL DECRETO —ojo, el Presidente, no el Consejo de Ministros ni el Ministro del Interior—, informando de inmediato al Congreso de los Diputados. En ese Real Decreto define la crisis, el territorio afectado, la duración y si nombra una autoridad funcional para dirigirla. Y jamás suspende ningún derecho fundamental."
      },
      {
        speaker: "marta",
        etiqueta: "🪤 El cruce mortal: Consejo de Seguridad Nacional vs Consejo de Defensa Nacional",
        texto: "Ahora recuérdanos el truco para no confundir la Secretaría Técnica del Consejo de Seguridad Nacional con la del Consejo de Defensa Nacional del Bloque 1."
      },
      {
        speaker: "carlos",
        etiqueta: "🏛️ Moncloa (DSN) vs Defensa (SEGENPOL)",
        texto: "En ambos Consejos preside el Rey cuando asiste, y si no, el Presidente del Gobierno. Pero mira quién lleva los papeles en cada uno: en el Consejo de DEFENSA Nacional de la LO 5/2005, la Secretaría Técnica está en el Ministerio de Defensa, en la SEGENPOL. En cambio, en el Consejo de SEGURIDAD Nacional de la Ley 36/2015, el órgano de trabajo permanente y Secretaría Técnica es el DSN, el Departamento de Seguridad Nacional en la Presidencia del Gobierno en La Moncloa, cuyo Director es el Director Adjunto del Gabinete de la Presidencia. Y su comité único para gestionar crisis se llama Comité de Situación."
      },
      {
        speaker: "marta",
        etiqueta: "📘 La Estrategia de Seguridad Nacional 2021 (RD 1150/2021)",
        texto: "Y para cerrar el Tema 1: ¿cada cuánto se revisa la Estrategia de Seguridad Nacional y cuáles son los tres ejes de la vigente ESN 2021 aprobada por el Real Decreto 1150/2021?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎯 Cada 5 años y las '3 P'",
        texto: "Se aprueba por Real Decreto del Consejo de Ministros a iniciativa del Presidente del Gobierno, se revisa cada 5 AÑOS o cuando cambie el entorno estratégico, tiene 5 Capítulos, lleva por lema 'Un proyecto compartido' y se resume en las tres P: Proteger —una España más segura y resiliente—, Promover —una España próspera y sostenible— y Participar —un socio fiable comprometido con la paz internacional—."
      }
    ]
  },

  "B3-T02": {
    codigo: "B3-T02",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 16: Doctrina PDC-01 para el Empleo de las FAS (Explicada en el campo de batalla)",
    subtitulo: "Qué significa MIRADO-I, los 5+1 ámbitos operacionales, el Mando Tipo Misión y los 4 niveles de conducción de las operaciones",
    duracionEstimada: "06:20",
    audioUrl: "./audio/podcast-B3-T02.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El ejemplo del carro de combate Leopardo sin tripulación o sin doctrina: por qué una Capacidad Militar necesita los 7 ingredientes del acrónimo MIRADO-I.",
      "Los 5 dominios operacionales más el Ámbito Cognitivo (ganar la mente y la percepción).",
      "El Mando Tipo Misión en una patrulla: te dicen QUÉ lograr y PARA QUÉ, y tú decides CÓMO."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Doctrina conjunta sin tecnicismos",
        texto: "Mi Brigada, vamos al Tema 2 del Bloque 3: la Doctrina para el Empleo de las Fuerzas Armadas, la publicación conjunta PDC-01. Cuando uno lee la PDC-01 ve conceptos como Capacidad Militar, MIRADO-I, multidominio o ámbito cognitivo. Vamos a bajarlo a tierra con ejemplos de unidad."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo 1: Qué es una Capacidad Militar y el acrónimo MIRADO-I",
        texto: "Imagina que el Ministerio compra mañana 50 helicópteros nuevos de última generación y los aparca en una campa. ¿Tenemos ya una capacidad militar operativa? ¡No! Solo tenemos metal aparcado. Para que eso sea una verdadera Capacidad Militar hace falta reunir los siete ingredientes del acrónimo MIRADO-I: M de Material, los helicópteros; I de Infraestructura, los hangares y simuladores; R de Recursos Humanos, los pilotos y mecánicos; A de Adiestramiento, las horas de vuelo y maniobras; D de Doctrina, los manuales de cómo emplearlos; O de Organización, la unidad donde se encuadran; y la última I de Interoperabilidad, que puedan comunicarse y operar con los aliados de la OTAN."
      },
      {
        speaker: "marta",
        etiqueta: "🌐 Ejemplo 2: Los 5 ámbitos operacionales + el Ámbito Cognitivo",
        texto: "¡Qué buen ejemplo lo del helicóptero aparcado para entender MIRADO-I! ¿Y cuáles son los ámbitos en los que combaten hoy las Fuerzas Armadas según la PDC-01?"
      },
      {
        speaker: "carlos",
        etiqueta: "🧠 El esquema 5 + 1",
        texto: "Recuerda siempre la fórmula 5 más 1: existen cinco ámbitos de operación —tres físicos clásicos, que son el Terrestre, el Marítimo y el Aéreo, más el Espacial o ultraterrestre y el Ciberespacial—. Y todos los efectos que conseguimos en esos cinco ámbitos convergen sobre un sexto entorno transversal que es decisivo hoy en día: el Ámbito COGNITIVO, que es la mente humana, las percepciones, la moral y la voluntad de decisión del adversario y de la opinión pública."
      },
      {
        speaker: "marta",
        etiqueta: "🎖️ Los 4 niveles de mando y el Mando Tipo Misión",
        texto: "Y para rematar el tema: ¿quién está en cada uno de los cuatro niveles de las operaciones y qué es la filosofía del Mando Tipo Misión?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎯 Político, Estratégico, Operacional y Táctico",
        texto: "Los cuatro escalones son: Nivel Político-Estratégico, que es el Gobierno; Nivel Militar-Estratégico, que es el JEMAD; Nivel Operacional, que es el Comandante del Mando de Operaciones, el CMOPS en Retamares; y Nivel Táctico, que son los Mandos Componentes y los jefes de fuerza sobre el terreno. Y todos ellos aplican el Mando Tipo Misión: el jefe superior te marca con claridad el QUÉ hay que conseguir y el PARA QUÉ —su propósito—, y te da libertad de acción descentralizada para que tú decidas el CÓMO sobre el terreno."
      }
    ]
  },

  "B3-T03": {
    codigo: "B3-T03",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 17: Naciones Unidas (ONU) — La Carta de San Francisco explicada como un club",
    subtitulo: "Los 6 órganos principales (por qué solo uno está en La Haya), el Consejo de Seguridad de 15 miembros y los Capítulos VI, VII y VIII",
    duracionEstimada: "06:45",
    audioUrl: "./audio/podcast-B3-T03.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El edificio de Nueva York y el Palacio de la Paz de La Haya: cómo recordar los 6 órganos principales del Art. 7 de la Carta de la ONU.",
      "La mesa de los 15 en el Consejo de Seguridad: 5 con botón rojo de veto + 10 por 2 años, y la mayoría de 9 votos.",
      "La escalera de los Capítulos VI (hablar y mediar), VII (sanciones e intervención militar coercitiva) y VIII (pedir ayuda a organizaciones regionales como la UE, la OTAN o la OSCE)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Nos vamos a Nueva York y La Haya",
        texto: "Mi Brigada, empezamos la gira por las grandes organizaciones internacionales con el Tema 3 del Bloque 3: la Organización de las Naciones Unidas, la ONU. Fechas de arranque para no fallar ni una en el test: Carta firmada en San Francisco el 26 de junio de 1945, entra en vigor el 24 de octubre de 1945 con 51 miembros originarios, y España ingresa diez años después, el 14 de diciembre de 1955."
      },
      {
        speaker: "carlos",
        etiqueta: "🏛️ Los 6 Órganos Principales del Artículo 7",
        texto: "¡Esas tres fechas son sagradas, Marta! Ahora imagínate los SEIS órganos principales de la Carta de la ONU. Cinco de ellos viven juntos en la sede central de Nueva York: uno, la Asamblea General, donde están los 193 países con un voto cada uno y mayoría de dos tercios para cuestiones importantes; dos, el Consejo de Seguridad; tres, el Consejo Económico y Social, el ECOSOC, que tiene 54 miembros elegidos por 3 años; cuatro, el Consejo de Administración Fiduciaria, que suspendió sus operaciones el 1 de noviembre de 1994 cuando se independizó Palaos; y cinco, la Secretaría General, dirigida por el Secretario General nombrado por la Asamblea General a recomendación del Consejo de Seguridad por 5 años."
      },
      {
        speaker: "marta",
        etiqueta: "⚖️ ¿Y el sexto órgano que vive en Europa?",
        texto: "¡El sexto es el único que NO está en Nueva York!: la Corte Internacional de Justicia, con sede en el Palacio de la Paz de La Haya, en los Países Bajos, compuesta por 15 magistrados elegidos por 9 años. ¡Y cuenta la trampa que siempre ponen con la Corte Penal Internacional!"
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 Corte Internacional de Justicia vs Corte Penal Internacional",
        texto: "¡Ojo a esa cáscara de plátano! La Corte Internacional de Justicia de La Haya SÍ es uno de los 6 órganos principales de la ONU y solo juzga disputas entre Estados, nunca juzga a personas individuales. En cambio, la Corte Penal Internacional del Estatuto de Roma de 1998 juzga a personas por genocidio o crímenes de guerra, y NO es un órgano principal de la Carta de las Naciones Unidas."
      },
      {
        speaker: "marta",
        etiqueta: "🛡️ El Consejo de Seguridad y los Capítulos VI, VII y VIII",
        texto: "Ahora entremos en la sala más poderosa del mundo: el Consejo de Seguridad. ¿Cuántos se sientan ahí y qué diferencia hay entre los Capítulos VI, VII y VIII de la Carta?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 La mesa de los 15 y los 3 Capítulos",
        texto: "En el Consejo de Seguridad se sientan 15 miembros: 5 permanentes con derecho de veto —Estados Unidos, Reino Unido, Francia, Rusia y China— y 10 no permanentes elegidos por la Asamblea General por periodos de 2 años sin reelección inmediata. Para aprobar una resolución de fondo hacen falta al menos 9 votos afirmativos de los 15 y que ninguno de los 5 permanentes vote en contra. Y cuando hay un conflicto: el Capítulo VI es la vía diplomática, el arreglo pacífico de controversias; si eso falla y hay una amenaza o quebrantamiento de la paz, se activa el Capítulo VII, que permite medidas coercitivas e incluso el uso de la fuerza militar; y el Capítulo VIII regula la colaboración con acuerdos u organismos regionales como la Unión Europea o la OSCE."
      }
    ]
  },

  "B3-T04": {
    codigo: "B3-T04",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 18: La OTAN explicada desde dentro (Washington 1949 a Madrid 2022 y 32 Aliados)",
    subtitulo: "Artículo 4 vs Artículo 5, por qué ACO está en Mons y ACT en Norfolk, el Concepto Estratégico de Madrid 2022 y las sedes OTAN en España",
    duracionEstimada: "07:00",
    audioUrl: "./audio/podcast-B3-T04.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "La diferencia entre llamar a tus amigos porque ves humo cerca de tu casa (Art. 4: Consultas) y que entren a atacarte y todos tus amigos salgan a defenderte (Art. 5: Defensa Colectiva, invocado solo en el 11-S).",
      "El truco de las dos sedes estratégicas: Operaciones en Europa (ACO en SHAPE, Mons - Bélgica) y Transformación en América (ACT en Norfolk, EE. UU.).",
      "Los 32 países tras la entrada de Finlandia (2023) y Suecia (2024) y las 3 Core Tasks de la Cumbre de Madrid 2022."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La Alianza Atlántica al detalle",
        texto: "Mi Brigada, vamos con el Tema 4 del Bloque 3: la Organización del Tratado del Atlántico Norte, la OTAN. Empecemos clavando las fechas y los números: Tratado de Washington del 4 de abril de 1949 firmado por 12 países fundadores; España ingresa el 30 de mayo de 1982 como aliado número 16 y se integra plenamente en la estructura militar en 1999; y tras entrar Finlandia en 2023 y Suecia en marzo de 2024, hoy somos 32 aliados."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo 1: Artículo 4 vs Artículo 5 vs Artículo 6",
        texto: "¡Impecable ese arranque, Marta! Ahora vamos a explicar con un ejemplo muy claro los artículos 4, 5 y 6 del Tratado de Washington, que caen todos los años. Imagina que un país aliado ve que al otro lado de su frontera se están concentrando tropas o siente amenazada su integridad territorial o seguridad. Todavía no le han disparado, pero pide reunir de urgencia a los aliados para hablarlo: eso es el ARTÍCULO 4, el derecho de consulta. Ahora imagina que se produce un ataque armado real contra uno o varios aliados en Europa o América del Norte: ahí salta el famoso ARTÍCULO 5, la cláusula de defensa colectiva amparada en el artículo 51 de la Carta de la ONU, donde un ataque contra uno se considera un ataque contra todos. ¿Sabes cuántas veces se ha invocado el artículo 5 en toda la historia desde 1949? ¡Una sola vez, tras los atentados del 11 de septiembre de 2001 contra Estados Unidos! Y el ARTÍCULO 6 es el que marca el mapa geográfico del Tratado: al norte del Trópico de Cáncer."
      },
      {
        speaker: "marta",
        etiqueta: "🏛️ Estructura política y militar: NAC, Comité Militar, ACO y ACT",
        texto: "¡Clarísimo: artículo 4 consultas, artículo 5 defensa colectiva, artículo 6 mapa del Trópico de Cáncer! Ahora cuéntanos la trampa donde todo el mundo cruza las sedes de ACO y ACT."
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 Mons (Bélgica) vs Norfolk (EE. UU.)",
        texto: "¡Apunta este truco para no cruzarlas jamás! Primero, en Bruselas están el Consejo del Atlántico Norte —el NAC, máximo órgano de decisión política donde todo se aprueba por consenso o unanimidad, presidido por el Secretario General— y el Comité Militar, que es la máxima autoridad militar. Y debajo del Comité Militar hay DOS Mandos Estratégicos: el primero empieza por O de Operaciones, ACO, Mando Aliado de Operaciones, mandado por SACEUR, y tiene su cuartel general SHAPE en MONS, BÉLGICA —fíjate, la O de Operaciones con la O de Mons—. El segundo empieza por T de Transformación, ACT, Mando Aliado de Transformación, que diseña la doctrina y el futuro de la Alianza, y está al otro lado del Atlántico, en NORFOLK, Virginia, Estados Unidos."
      },
      {
        speaker: "marta",
        etiqueta: "🇪🇸 Cumbre de Madrid 2022 y sedes en España",
        texto: "¡O de Operaciones con O de Mons en Bélgica, y Transformación en Norfolk, Estados Unidos! ¿Y cuáles son las tres tareas fundamentales aprobadas en el Concepto Estratégico de la Cumbre de Madrid de 2022 y qué cuarteles OTAN tenemos en España?"
      },
      {
        speaker: "carlos",
        etiqueta: "🏆 Las 3 Core Tasks y Torrejón / Bétera",
        texto: "Las tres tareas fundamentales o Core Tasks de Madrid 2022 son: primera, Disuasión y Defensa; segunda, Prevención y Gestión de Crisis; y tercera, Seguridad Cooperativa, señalando a Rusia como la amenaza más significativa y directa y al terrorismo como la amenaza asimétrica más directa. Y en suelo español aportamos el Cuartel General de Alta Disponibilidad HQ NRDC-ESP en Bétera, Valencia, y el Centro de Operaciones Aéreas Combinadas CAOC Torrejón en Madrid."
      }
    ]
  },

  "B3-T05": {
    codigo: "B3-T05",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 19: La OSCE explicada en 5 minutos (De Helsinki 1975 a Viena y las 3 Cestas)",
    subtitulo: "Cómo una conferencia de la Guerra Fría (CSCE) se convirtió en la mayor organización regional de seguridad del mundo con 57 países",
    duracionEstimada: "05:55",
    audioUrl: "./audio/podcast-B3-T05.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "La historia de las '3 Cestas' de Helsinki 1975: cómo Occidente y el Bloque del Este llegaron a un acuerdo juntando fronteras, economía y derechos humanos.",
      "El cambio de nombre de CSCE a OSCE en la Cumbre de Budapest de 1994.",
      "Por qué la Secretaría y el Consejo Permanente están en Viena pero la oficina de elecciones y derechos humanos (ODIHR) está en Varsovia."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La organización de los 57 Estados",
        texto: "Mi Brigada, llegamos al Tema 5 del Bloque 3: la Organización para la Seguridad y la Cooperación en Europa, la OSCE. Mucha gente la confunde con la Unión Europea o con el Consejo de Europa. Vamos a contar su historia como una película para que quede cristalina."
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 1975: El Acta Final de Helsinki y las 3 Cestas",
        texto: "¡Sitúate en plena Guerra Fría, año 1975! Estados Unidos, Canadá, la Unión Soviética y todos los países europeos se sientan a hablar en Finlandia para evitar una guerra y firman el 1 de agosto de 1975 el Acta Final de Helsinki. Ahí nace con C de Conferencia: la CSCE, Conferencia sobre la Seguridad y la Cooperación en Europa. Y como cada bloque quería hablar de una cosa, metieron los acuerdos en TRES CESTAS o dimensiones que siguen siendo hoy los tres pilares de la OSCE: primera dimensión, Político-Militar —confianza militar y control de armamentos—; segunda dimensión, Económica y Medioambiental; y tercera dimensión, la Dimensión Humana —derechos humanos, democracia y elecciones limpias—."
      },
      {
        speaker: "marta",
        etiqueta: "📅 1990 Carta de París y 1994 Cumbre de Budapest",
        texto: "Vale: en 1975 nace como Conferencia, CSCE, en Helsinki. Luego cae el Muro de Berlín, firman la Carta de París para una Nueva Europa en 1990, ¿y en qué cumbre cambia la C de Conferencia por la O de Organización para llamarse OSCE?"
      },
      {
        speaker: "carlos",
        etiqueta: "🏛️ De CSCE a OSCE en Budapest 1994",
        texto: "¡Pregunta fija de examen! El cambio de CSCE a OSCE se aprueba en la Cumbre de BUDAPEST de diciembre de 1994, entrando en vigor el 1 de enero de 1995. Hoy es la mayor organización regional de seguridad del mundo al amparo del Capítulo VIII de la Carta de la ONU, con 57 Estados participantes que van desde Vancouver hasta Vladivostok —América del Norte, Europa y Asia Central—."
      },
      {
        speaker: "marta",
        etiqueta: "🗺️ Sedes y órganos: Viena, Varsovia y La Haya",
        texto: "¿Y cómo toman las decisiones esos 57 países y dónde están sus sedes principales para no fallar en el test?"
      },
      {
        speaker: "carlos",
        etiqueta: "🎯 Consenso, Presidencia anual y Viena",
        texto: "Todas sus decisiones se toman por CONSENSO y tienen valor políticamente vinculante. La Presidencia en Ejercicio rota cada año natural en el Ministro de Exteriores de un país, ayudado por la Troika —el anterior, el actual y el siguiente—. Su Secretaría General —con un Secretario General por 3 años—, el Consejo Permanente y el Foro de Cooperación en materia de Seguridad se reúnen todas las semanas en VIENA, Austria. Mientras tanto, la Oficina de Instituciones Democráticas y Derechos Humanos, la ODIHR que vigila las elecciones, está en VARSOVIA; y el Alto Comisionado para las Minorías Nacionales está en LA HAYA."
      }
    ]
  },

  "B3-T06": {
    codigo: "B3-T06",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 20: La Unión Europea y la PCSD sin líos (Los 3 Consejos y las 2 Cláusulas)",
    subtitulo: "Cómo no confundir jamás los 3 'Consejos', el artículo 42.7 TUE (Asistencia Mutua) frente al 222 TFUE (Solidaridad) y el triple sombrero del Alto Representante",
    duracionEstimada: "07:15",
    audioUrl: "./audio/podcast-B3-T06.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El truco definitivo de los 3 Consejos: Consejo Europeo (Presidentes/Primeros Ministros), Consejo de la UE (Ministros por ramos) y Consejo de Europa (¡NO es de la UE!).",
      "Dos ejemplos reales para distinguir la Cláusula de Asistencia Mutua (Art. 42.7 TUE: agresión armada) de la Cláusula de Solidaridad (Art. 222 TFUE: ataque terrorista o catástrofe natural).",
      "La Brújula Estratégica (5.000 efectivos de despliegue rápido), PESCO y la Agencia Europea de Defensa (EDA)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ La Unión Europea explicada claro",
        texto: "Mi Brigada, penúltimo episodio, Tema 6 del Bloque 3: la Unión Europea y su Política Común de Seguridad y Defensa, la PCSD. Empecemos por las fechas clave de España y los tratados: los Tratados de Roma son de 1957; España firma su adhesión el 12 de junio de 1985 y entra en vigor el 1 de enero de 1986; Maastricht crea la Unión Europea en 1992/1993; y el Tratado de Lisboa se firma en 2007 y entra en vigor el 1 de diciembre de 2009. Hoy somos 27 Estados miembros."
      },
      {
        speaker: "carlos",
        etiqueta: "🪤 El truco de los '3 Consejos' que caen siempre",
        texto: "¡Ahora vamos a desmontar la trampa número uno del Tema 6! En los exámenes te ponen tres nombres que empiezan por 'Consejo' para que piques. Escucha bien la diferencia: primero, el CONSEJO EUROPEO, que reúne a los 27 Jefes de Estado o de Gobierno —los Presidentes y Primeros Ministros— y marca el rumbo político general, pero NO ejerce función legislativa. Segundo, el CONSEJO DE LA UNIÓN EUROPEA, llamado simplemente 'el Consejo', donde van los Ministros de cada ramo —por ejemplo los Ministros de Defensa o de Exteriores— y que SÍ aprueba las leyes y el presupuesto junto con el Parlamento Europeo por mayoría cualificada del 55% de Estados y 65% de población. Esos dos forman parte de las 7 Instituciones de la Unión Europea del artículo 13 del TUE. ¿Y el tercero, el CONSEJO DE EUROPA?"
      },
      {
        speaker: "marta",
        etiqueta: "🚫 ¡El Consejo de Europa NO es de la Unión Europea!",
        texto: "¡El Consejo de Europa es una organización aparte fundada en 1949 con sede en Estrasburgo y 46 países donde está el Tribunal Europeo de Derechos Humanos, y NO es una institución de la Unión Europea!"
      },
      {
        speaker: "carlos",
        etiqueta: "🎬 Ejemplo práctico: Art. 42.7 TUE vs Art. 222 TFUE",
        texto: "¡Exacto! Y ahora vamos al cruce estrella de la PCSD tras el Tratado de Lisboa: las dos cláusulas de defensa y apoyo entre los 27 países. Caso uno: un país sufre una AGRESIÓN ARMADA en su territorio. Ahí se activa el artículo 42.7 del Tratado de la Unión Europea, la CLÁUSULA DE ASISTENCIA MUTUA, por la que los demás Estados miembros le deben ayuda y asistencia con todos los medios a su alcance —Francia la invocó tras los atentados de París de noviembre de 2015—. Caso dos: un Estado miembro sufre un ataque terrorista o una catástrofe natural o de origen humano, como un gran terremoto o inundación. Ahí se activa el artículo 222 del Tratado de Funcionamiento de la Unión Europea, la CLÁUSULA DE SOLIDARIDAD."
      },
      {
        speaker: "marta",
        etiqueta: "🎩 El Alto Representante, COPSI, EUMC, PESCO y Brújula Estratégica",
        texto: "Y para cerrar la Unión Europea: recuérdanos quién dirige la PCSD y qué cifra nos pide la Brújula Estratégica de 2022."
      },
      {
        speaker: "carlos",
        etiqueta: "🛡️ Los 5.000 efectivos de Despliegue Rápido",
        texto: "Al frente está el Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad, que tiene 'triple sombrero': dirige la PESC y la PCSD, preside el Consejo de Asuntos Exteriores y es Vicepresidente de la Comisión Europea, apoyado por el Servicio Europeo de Acción Exterior SEAE y al frente de la Agencia Europea de Defensa EDA. Debajo trabajan el Comité Político y de Seguridad COPSI, el Comité Militar EUMC —con los JEMAD de los 27— y el Estado Mayor de la UE EUMS. Y con la PESCO —Cooperación Estructurada Permanente— y la Brújula Estratégica aprobada en 2022, la Unión ha creado la Capacidad de Despliegue Rápido de la UE de hasta 5.000 efectivos para crisis fuera de sus fronteras en las Misiones Petersberg del artículo 43."
      }
    ]
  },

  "B3-T07": {
    codigo: "B3-T07",
    bloque: "Bloque 3: Seguridad Nacional",
    titulo: "Episodio 21: España en Misiones Internacionales — Mapa de Operaciones por Bandera",
    subtitulo: "Cómo recordar de un vistazo qué misiones son de la ONU, cuáles de la UE (con el Cuartel General de Atalanta en Rota) y cuáles de la OTAN",
    duracionEstimada: "07:10",
    audioUrl: "./audio/podcast-B3-T07.mp3",
    personajes: {
      carlos: "Brigada Carlos (Instructor)",
      marta: "Cabo 1º Marta (Opositora)"
    },
    ejemplosClave: [
      "El pasaporte de nuestras misiones: cómo clasificar en 3 cajones (ONU, Unión Europea y OTAN) todas las operaciones donde despliega España.",
      "Por qué la Operación Atalanta contra la piratería en el Índico se dirige desde España (OHQ en la Base Naval de Rota).",
      "El repaso final de las Operaciones Permanentes 24/7 en territorio nacional (MOT, MOM, MOA, MOC y MOESPA)."
    ],
    dialogo: [
      {
        speaker: "marta",
        etiqueta: "🎙️ Broche de oro a los 21 Temas",
        texto: "Mi Brigada, llegamos al Episodio 21, el último tema de todo el temario oficial de Permanencia: el Tema 7 del Bloque 3, España y su participación en Misiones Internacionales. En el examen nos encanta este tema porque si llevas claro qué misión va bajo bandera de la ONU, cuál bajo bandera de la Unión Europea y cuál bajo bandera de la OTAN, tienes el pleno asegurado."
      },
      {
        speaker: "carlos",
        etiqueta: "🇺🇳 Cajón 1: Misiones bajo bandera de la ONU (Cascos Azules)",
        texto: "¡Vamos a abrir los tres cajones del mapa mundi! Primer cajón: Naciones Unidas. España empezó en 1989 con las misiones de Angola, UNAVEM, y Namibia, UNTAG. ¿Y cuál es hoy nuestra gran misión histórica bajo bandera de la ONU? La misión UNIFIL —o FINUL en español— en el sur del LÍBANO, que en España llamamos Operación Libre Hidalgo, desplegada desde 2006 tras la Resolución 1701 del Consejo de Seguridad en la base Miguel de Cervantes en Marjayoun, además de observadores en el proceso de paz de Colombia."
      },
      {
        speaker: "marta",
        etiqueta: "🇪🇺 Cajón 2: Misiones bajo bandera de la Unión Europea (PCSD)",
        texto: "¡Cajón de la ONU listo: Angola y Namibia en 1989, y hoy UNIFIL / Libre Hidalgo en el Líbano más Colombia! Abrimos el segundo cajón: misiones militares de la Unión Europea."
      },
      {
        speaker: "carlos",
        etiqueta: "⚓ Atalanta (con mando en Rota), las EUTM en África y Althea",
        texto: "¡Fíjate qué truco tan fácil para las de la Unión Europea!: todas las que empiezan por 'EU' son de la Unión Europea. La joya de la corona es EUNAVFOR Operación ATALANTA, iniciada en 2008 contra la piratería en el océano Índico y frente a las costas de Somalia para proteger los buques del Programa Mundial de Alimentos; y pregunta de examen obligatoria: desde 2019 su Cuartel General Operacional, el OHQ, está en España, en la Base Naval de ROTA, Cádiz. Y junto a Atalanta están las misiones de entrenamiento en África —las EUTM en República Centroafricana, Somalia y Malí— y la operación EUFOR Althea en Bosnia y Herzegovina."
      },
      {
        speaker: "marta",
        etiqueta: "🧭 Cajón 3: Misiones de Disuasión y Defensa de la OTAN",
        texto: "¡Todas las 'EU' más Atalanta con cuartel general en Rota son de la Unión Europea! Y abrimos el tercer cajón: las misiones bajo bandera de la OTAN."
      },
      {
        speaker: "carlos",
        etiqueta: "🛡️ Letonia, Eslovaquia, Policía Aérea del Báltico, Sea Guardian, Turquía e Irak",
        texto: "En el cajón de la OTAN tenemos todo el escudo del flanco este y sur aliado: primero, la Presencia Avanzada Reforzada en el flanco este, con nuestros carros y blindados en LETONIA y el despliegue liderado por España en ESLOVAQUIA; segundo, los cazas españoles en la Policía Aérea del Báltico, BAP, y en Rumanía o Bulgaria; tercero, en el mar Mediterráneo, la operación naval SEA GUARDIAN y las agrupaciones navales permanentes SNMG y SNMCMG; cuarto, la batería de misiles Patriot de apoyo a TURQUÍA en Adana/Incirlik; y quinto, la Misión de la OTAN en IRAK, NMI, de asesoramiento."
      },
      {
        speaker: "marta",
        etiqueta: "🏆 El mensaje final antes de ir a por la plaza",
        texto: "Y mientras nuestros compañeros están en el Líbano, el Índico, Letonia o Eslovaquia, aquí en España el CMOPS desde Retamares conduce las 24 horas de los 365 días las Operaciones Permanentes de Presencia, Vigilancia y Disuasión con los cinco Mandos Operativos: MOT, MOM, MOA, MOC y MOESPA. ¡Mi Brigada, hemos completado los 21 episodios de todo el temario!"
      },
      {
        speaker: "carlos",
        etiqueta: "🎖️ ¡A por el Apto con Plaza!",
        texto: "¡Enhorabuena, Marta, y enhorabuena a quien nos está escuchando! Ahora que ya entiendes el porqué de cada ley con ejemplos reales, dale caña a los 20 Simulacros Oficiales y al Entrenador Inteligente de la WebApp. ¡Nos vemos en el escalafón de Tropa Permanente!"
      }
    ]
  }
});

function getNotebookLMPodcastPrompt(temaCodigo) {
  const ep = PODCAST_EPISODES[temaCodigo];
  if (!ep) return "";
  const examplesList = (ep.ejemplosClave || []).map((e, i) => `${i + 1}) ${e}`).join("; ");
  return `Hablad SIEMPRE en español de España. Cread un podcast conversacional muy ameno, dinámico y entretenido entre dos instructores militares explicando desde cero el tema "${ep.codigo}: ${ep.titulo}" para la oposición de Tropa Permanente de las Fuerzas Armadas. No leáis la ley de forma robótica: explicad cada artículo y cada plazo usando ejemplos cotidianos de cuartel y casos prácticos reales (${examplesList}), destacando dónde pone las trampas el Tribunal.`;
}

window.PODCAST_EPISODES = PODCAST_EPISODES;
window.getNotebookLMPodcastPrompt = getNotebookLMPodcastPrompt;
