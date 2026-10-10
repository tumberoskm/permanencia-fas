/**
 * MANUAL MAGISTRAL DE ESTUDIO DESDE CERO — LOS 21 TEMAS EXPLICADOS PASO A PASO v5.0
 * Redactado por tu Jefe de Estudios para que entiendas el 100% del temario ANTES de ver los esquemas o hacer tests.
 * Incluye todos los conceptos de examen, artículos clave, subrayados fluorescentes y actualizaciones 2024/2025/2026.
 */

const MASTER_STUDY_GUIDES = {
  // =========================================================================
  // BLOQUE 1: ORGANIZACIÓN (TEMAS B1-T01 A B1-T06)
  // =========================================================================
  "B1-T01": {
    tiempoLectura: "8 min",
    consejoJefeEstudios: "Bienvenido al Tema 1. No intentes memorizar artículos sueltos sin entender antes el dibujo general: España tiene una Jefatura del Estado simbólica y neutral (el Rey), un Poder Ejecutivo que dirige la política y la defensa (el Gobierno), un Poder Legislativo (Cortes) y un guardián de la Constitución (el TC). Si entiendes quién hace qué y quién refrenda al Rey, tienes asegurado el 90% de las preguntas de este tema.",
    actualizaciones: "Texto consolidado con las reformas de los artículos 135 (estabilidad presupuestaria, 2011) y 49 (personas con discapacidad, enero de 2024).",
    epigrafes: [
      {
        titulo: "1. Estructura de la Constitución de 1978 y el Título Preliminar (Arts. 1 a 9)",
        contenido: `
          <p>La Constitución Española (CE) fue aprobada por las Cortes el <strong>31 de octubre de 1978</strong>, ratificada en referéndum por el pueblo español el <span class="hl-yellow">6 de diciembre de 1978</span>, sancionada por el Rey el <strong>27 de diciembre</strong> y publicada en el BOE el <span class="hl-green">29 de diciembre de 1978</span> (entrando en vigor ese mismo día).</p>
          <p>Consta de <strong>169 artículos</strong> divididos en un <strong>Preámbulo</strong> (sin fuerza jurídica directa), un <strong>Título Preliminar</strong> y <strong>10 Títulos numerados</strong>, más <strong>4 Disposiciones Adicionales, 9 Transitorias, 1 Derogatoria y 1 Final</strong>.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Artículo 1 (Estado y Soberanía):</strong> España se constituye en un <span class="hl-yellow">Estado social y democrático de Derecho</span>, que propugna como <strong>4 valores superiores</strong> de su ordenamiento jurídico: la <strong>Libertad, la Justicia, la Igualdad y el Pluralismo político</strong> (Art. 1.1). La soberanía nacional reside en el pueblo español (Art. 1.2) y la forma política del Estado español es la <span class="hl-cyan">Monarquía parlamentaria</span> (Art. 1.3).</li>
            <li><strong>Artículo 2 (Unidad y Autonomía):</strong> La Constitución se fundamenta en la <strong>indisoluble unidad de la Nación española</strong> y reconoce y garantiza el derecho a la autonomía de las nacionalidades y regiones y la solidaridad entre todas ellas.</li>
            <li><strong>Artículo 8 (Las Fuerzas Armadas — ¡Pregunta fija!):</strong> Las Fuerzas Armadas, constituidas por el <strong>Ejército de Tierra, la Armada y el Ejército del Aire (y del Espacio)</strong>, tienen como misión <span class="hl-green">garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional</span>. Una <strong>Ley Orgánica</strong> (la LO 5/2005) regulará las bases de la organización militar (Art. 8.2). <em>¡Ojo!: No confundir con el Art. 104 (Fuerzas y Cuerpos de Seguridad, cuya misión es proteger derechos y garantizar la seguridad ciudadana).</em></li>
            <li><strong>Artículo 9 (Principios de legalidad y jerarquía):</strong> Los ciudadanos y los poderes públicos están sujetos a la CE y al resto del ordenamiento jurídico (Art. 9.1). El Art. 9.3 garantiza el principio de legalidad, la jerarquía normativa, la publicidad de las normas, la <span class="hl-pink">irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales</span>, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad.</li>
          </ul>
        `
      },
      {
        titulo: "2. Derechos Fundamentales, Defensor del Pueblo y Suspensión de Derechos (Título I: Arts. 10 a 55)",
        contenido: `
          <p>El Título I se divide en 5 Capítulos. Para el examen de Permanencia debes dominar la diferencia de protección y dos figuras clave:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Detención preventiva (Art. 17.2 CE):</strong> No podrá durar más del tiempo estrictamente necesario y, en todo caso, en el plazo máximo de <span class="hl-yellow">72 HORAS</span> el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial. El Art. 17.4 regula el procedimiento de <em>Habeas Corpus</em>.</li>
            <li><strong>Recurso de Amparo ante el TC (Art. 53.2 CE):</strong> Protege la igualdad (Art. 14), la Sección 1ª del Capítulo 2º (Arts. 15 a 29, que son los derechos fundamentales de máxima protección) y la objeción de conciencia (Art. 30.2).</li>
            <li><strong>El Defensor del Pueblo (Art. 54 CE):</strong> Es el <span class="hl-cyan">alto comisionado de las Cortes Generales</span>, designado por éstas (por mayoría de 3/5 de cada Cámara) por un mandato de <span class="hl-green">5 AÑOS</span> para la defensa de los derechos comprendidos en todo el Título I, a cuyo efecto podrá supervisar la actividad de la Administración dando cuenta a las Cortes.</li>
          </ul>
        `
      },
      {
        titulo: "3. La Corona: Sucesión, Regencia, Tutela y Refrendo (Título II: Arts. 56 a 65)",
        contenido: `
          <p>El Rey es el <strong>Jefe del Estado</strong>, símbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones y asume la más alta representación del Estado (Art. 56.1). Sus actos estarán siempre refrendados, careciendo de validez sin dicho refrendo, salvo el Art. 65.2.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Mando Supremo de las FAS (Art. 62.h CE):</strong> Corresponde al Rey el <span class="hl-yellow">mando supremo de las Fuerzas Armadas</span>, así como sancionar y promulgar las leyes, expedir los decretos acordados en el Consejo de Ministros y conferir los empleos civiles y militares.</li>
            <li><strong>¿Quién refrenda los actos del Rey? (Art. 64.1 — ¡Trampa clásica!):</strong>
              <br/>1) Con carácter general: el <strong>Presidente del Gobierno</strong> y, en su caso, los <strong>Ministros competentes</strong>.
              <br/>2) <span class="hl-pink">Excepción: El PRESIDENTE DEL CONGRESO</span> refrenda la propuesta y el nombramiento del Presidente del Gobierno, y la disolución de las Cortes prevista en el artículo 99 (cuando ningún candidato obtiene la confianza en 2 meses).
              <br/>3) <span class="hl-green">Único acto libre SIN refrendo (Art. 65.2):</span> El nombramiento y relevo de los miembros civiles y militares de su Casa (y la distribución de la cantidad global de su presupuesto).</li>
            <li><strong>Regencia (Art. 59) vs Tutela (Art. 60):</strong> La Regencia ejerce las funciones públicas de la Corona cuando el Rey es menor de edad o queda inhabilitado (reconocida la imposibilidad por las Cortes Generales). La Tutela cuida de la persona del Rey menor. <span class="hl-yellow">Los cargos de Regente y de Tutor NO pueden acumularse en una misma persona, sino en el padre, madre o ascendientes directos del Rey (Art. 60.2).</span> Para ser Regente hay que ser español y mayor de edad.</li>
          </ul>
        `
      },
      {
        titulo: "4. El Gobierno, los Estados Excepcionales (Art. 116) y el Tribunal Constitucional (Arts. 97 a 169)",
        contenido: `
          <p>El <strong>Gobierno (Art. 97 CE)</strong> dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la función ejecutiva y la potestad reglamentaria. Se compone del Presidente, de los Vicepresidentes en su caso, de los Ministros y de los demás miembros que establezca la ley (Art. 98.1; aunque la Ley 50/1997 del Gobierno solo incluye a Presidente, Vicepresidentes y Ministros).</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Los 3 Estados del Artículo 116 CE ( regulados por LO 4/1981):</strong>
              <br/>• 🚨 <strong>ESTADO DE ALARMA:</strong> Lo declara el <span class="hl-yellow">Gobierno mediante decreto</span> acordado en Consejo de Ministros por un plazo máximo de <span class="hl-yellow">15 DÍAS</span>, dando cuenta al Congreso de los Diputados (reunido inmediatamente). Sin autorización del Congreso no podrá ser prorrogado.
              <br/>• ⚠️ <strong>ESTADO DE EXCEPCIÓN:</strong> Lo declara el <span class="hl-green">Gobierno mediante decreto PREVIA autorización del Congreso</span> de los Diputados. Su duración no podrá exceder de <span class="hl-green">30 DÍAS</span>, prorrogables por otro plazo igual (otros 30 días) con los mismos requisitos.
              <br/>• 🪖 <strong>ESTADO DE SITIO:</strong> Lo declara la <span class="hl-pink">MAYORÍA ABSOLUTA del Congreso de los Diputados (176 diputados)</span>, a propuesta exclusiva del Gobierno. El Congreso determinará su ámbito territorial, duración y condiciones.</li>
            <li><strong>Organización Territorial (Título VIII, Art. 137 CE):</strong> El Estado se organiza territorialmente en <strong>municipios, en provincias y en las Comunidades Autónomas</strong> que se constituyan. Todas estas entidades gozan de autonomía para la gestión de sus respectivos intereses.</li>
            <li><strong>Tribunal Constitucional (Título IX, Art. 159 CE):</strong> Compuesto por <span class="hl-cyan">12 miembros nombrados por el Rey</span>: 4 a propuesta del Congreso (por mayoría de 3/5), 4 a propuesta del Senado (por 3/5), 2 a propuesta del Gobierno y 2 a propuesta del CGPJ. Son designados por un período de <span class="hl-yellow">9 AÑOS</span> y se renuevan por terceras partes cada 3 años.</li>
            <li><strong>Reforma Constitucional (Título X):</strong> Procedimiento ordinario (Art. 167: mayoría de <strong>3/5</strong> de cada Cámara; referéndum facultativo si lo pide 1/10 en 15 días) vs Procedimiento agravado (Art. 168: revisión total o reforma del Título Preliminar, Cap. 2º Secc. 1ª Tít. I o Título II La Corona ➔ exige <strong>2/3</strong> de cada Cámara + disolución de Cortes + <strong>2/3</strong> de las nuevas Cámaras + referéndum obligatorio).</li>
          </ul>
        `
      }
    ]
  },

  "B1-T02": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "En el Tema 2 se unen dos bloques que el tribunal pregunta muchísimo: las Cortes Generales (Título III de la Constitución: plazos de elecciones, veto del Senado y leyes) y la Ley Orgánica 5/2005 de la Defensa Nacional. Quédate con la diferencia exacta entre el Presidente del Gobierno (que ORDENA las misiones), el Congreso (que las AUTORIZA en el exterior) y la doble estructura de las FAS (Orgánica vs Operativa).",
    actualizaciones: "Ley Orgánica 5/2005 consolidada y vigente en su integridad para la convocatoria 2025/2026.",
    epigrafes: [
      {
        titulo: "1. Las Cortes Generales: Congreso de los Diputados y Senado (Título III CE, Arts. 66 a 80)",
        contenido: `
          <p>Las Cortes Generales representan al pueblo español y están formadas por el <strong>Congreso de los Diputados</strong> (Cámara Baja) y el <strong>Senado</strong> (Cámara Alta, de representación territorial). Ejercen la potestad legislativa del Estado, aprueban sus Presupuestos, controlan la acción del Gobierno y son inviolables (Art. 66 CE).</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Composición del Congreso (Art. 68 CE):</strong> La Constitución dice que se compone de un <span class="hl-yellow">mínimo de 300 y un máximo de 400 Diputados</span> (la Ley Orgánica del Régimen Electoral General fija actualmente <strong>350 Diputados</strong>). La circunscripción electoral es la provincia (Ceuta y Melilla eligen 1 Diputado cada una).</li>
            <li><strong>Composición del Senado (Art. 69 CE):</strong> En cada provincia se eligen <strong>4 Senadores</strong>; en las islas mayores (Gran Canaria, Mallorca y Tenerife) <strong>3 Senadores</strong>; en las islas menores (Ibiza-Formentera, Menorca, Fuerteventura, Gomera, Hierro, Lanzarote y La Palma) <strong>1 Senador</strong>; y <strong>Ceuta y Melilla eligen 2 Senadores cada una</strong>. Además, las Comunidades Autónomas designan 1 Senador fijo y otro más por cada millón de habitantes.</li>
            <li><strong>Plazos electorales (Art. 68.6 CE — ¡Muy preguntado!):</strong> El mandato dura <strong>4 años</strong>. Las elecciones tendrán lugar entre los <span class="hl-green">30 y 60 DÍAS</span> desde la terminación del mandato. El Congreso electo deberá ser convocado dentro de los <span class="hl-pink">25 DÍAS siguientes</span> a la celebración de las elecciones.</li>
            <li><strong>Períodos de sesiones (Art. 73.1 CE) y Diputación Permanente (Art. 78 CE):</strong> Las Cámaras se reúnen anualmente en dos períodos ordinarios: el primero, de <strong>septiembre a diciembre</strong>, y el segundo, de <strong>febrero a junio</strong>. En cada Cámara habrá una <strong>Diputación Permanente</strong> compuesta por un mínimo de <span class="hl-cyan">21 miembros</span>, que vela por los poderes de la Cámara cuando no está reunida o ha expirado su mandato.</li>
          </ul>
        `
      },
      {
        titulo: "2. Elaboración de las Leyes: Leyes Orgánicas, Decretos-Leyes y Veto del Senado (Arts. 81 a 92 CE)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Leyes Orgánicas (Art. 81 CE):</strong> Son las relativas al desarrollo de los derechos fundamentales y de las libertades públicas, las que aprueben los Estatutos de Autonomía y el régimen electoral general y las demás previstas en la Constitución (como la LO 5/2005 de Defensa Nacional o la LO 8/2014 Disciplinaria). Su aprobación, modificación o derogación exigirá <span class="hl-yellow">mayoría absoluta del Congreso</span> en una votación final sobre el conjunto del proyecto.</li>
            <li><strong>Decretos Legislativos (Arts. 82-85 CE):</strong> Delegación de las Cortes en el Gobierno (mediante ley de bases para textos articulados, o ley ordinaria para refundir textos). Nunca sobre materias de Ley Orgánica.</li>
            <li><strong>Decretos-Leyes (Art. 86 CE):</strong> En caso de <strong>extraordinaria y urgente necesidad</strong>, el Gobierno puede dictar disposiciones legislativas provisionales. No pueden afectar a instituciones básicas del Estado, derechos del Título I, comunidades autónomas ni derecho electoral. Deben ser sometidos a debate y votación de totalidad en el Congreso en el plazo de los <span class="hl-green">30 DÍAS siguientes</span> a su promulgación para su convalidación o derogación.</li>
            <li><strong>Plazo del Senado (Art. 90.2 CE):</strong> Aprobado un proyecto por el Congreso, el Senado dispone de <span class="hl-yellow">2 MESES</span> desde su recepción para oponer su veto (por mayoría absoluta) o introducir enmiendas. Este plazo se reducirá al de <span class="hl-pink">20 DÍAS NATURALES</span> en los proyectos declarados urgentes por el Gobierno o por el Congreso.</li>
            <li><strong>Sanción y promulgación real (Art. 91 CE):</strong> El Rey sancionará en el plazo de <span class="hl-cyan">15 DÍAS</span> las leyes aprobadas por las Cortes Generales, y las promulgará y ordenará su inmediata publicación.</li>
          </ul>
        `
      },
      {
        titulo: "3. Ley Orgánica 5/2005 de la Defensa Nacional: Atribuciones de los Poderes del Estado",
        contenido: `
          <p>La LO 5/2005 desarrolla el artículo 8.2 de la CE. Es fundamental distinguir las atribuciones exactas de cada órgano:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>La Corona (Art. 3):</strong> Al Rey le corresponde el Mando Supremo de las Fuerzas Armadas.</li>
            <li><strong>Las Cortes Generales (Art. 4 y Art. 17):</strong> Otorgan las autorizaciones previas para prestar el consentimiento del Estado en tratados militares, aprueban las leyes de defensa y créditos presupuestarios, y el <span class="hl-pink">Congreso de los Diputados AUTORIZA con carácter previo la participación de las FAS en misiones fuera del territorio nacional</span> que no estén directamente relacionadas con la defensa de España o del interés nacional (Art. 17).</li>
            <li><strong>El Gobierno (Art. 5):</strong> Determina la política de defensa y asegura su ejecución; dirige la Administración militar y acuerda la participación de las FAS en misiones fuera del territorio nacional.</li>
            <li><strong>El Presidente del Gobierno (Art. 6 — ¡Clave!):</strong> Le corresponde la <span class="hl-yellow">dirección de la política de defensa</span> y la determinación de sus objetivos, la gestión de las situaciones de crisis y <span class="hl-green">ORDENAR las misiones de las Fuerzas Armadas</span>, así como formular la Directiva de Defensa Nacional.</li>
            <li><strong>El Ministro de Defensa (Art. 7):</strong> Asiste al Presidente en la dirección estratégica de las operaciones y le corresponde el desarrollo y la ejecución de la política de defensa y dirigir la actuación de las FAS bajo la autoridad del Presidente.</li>
            <li><strong>El Consejo de Defensa Nacional (Arts. 8 y 9):</strong> Es el órgano colegiado, coordinador, asesor y consultivo del Presidente del Gobierno en materia de defensa. A iniciativa del Rey, lo preside Su Majestad; en otro caso, lo preside el Presidente del Gobierno. Puede funcionar en <strong>Pleno o como Consejo Ejecutivo</strong>, y cuenta con la <strong>Comisión Interministerial de Defensa</strong> como órgano de trabajo permanente (adscrita a SEGENPOL).</li>
          </ul>
        `
      },
      {
        titulo: "4. Organización de las Fuerzas Armadas: Estructura Orgánica vs Estructura Operativa (Arts. 10 a 21 LO 5/2005)",
        contenido: `
          <p>El artículo 10 establece que las Fuerzas Armadas son el elemento esencial de la defensa nacional y constituyen una <strong>entidad única e integradora</strong> de las distintas formas de acción de sus componentes: el Ejército de Tierra, la Armada y el Ejército del Aire. El artículo 11 las organiza en <strong>dos estructuras</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1. ESTRUCTURA ORGÁNICA (Preparación de la Fuerza):</strong> Compuesta por el Ejército de Tierra, la Armada y el Ejército del Aire y del Espacio (bajo el mando respectivo de JEME, AJEMA y JEMA). Su finalidad es la <span class="hl-yellow">preparación de la fuerza</span> (generación de capacidades, adiestramiento, logística y administración) para posibilitar la generación de la estructura operativa.</li>
            <li><strong>2. ESTRUCTURA OPERATIVA (Empleo de la Fuerza):</strong> Su finalidad es el <span class="hl-green">empleo de la fuerza</span> en el desarrollo de las misiones asignadas (operaciones permanentes o de gestión de crisis), bajo el mando del <strong>JEMAD (Jefe de Estado Mayor de la Defensa)</strong>.</li>
            <li><strong>Reglas de Comportamiento del Militar (Disposición Final 1ª LO 5/2005 / Art. 4 Ley 39/2007):</strong> La LO 5/2005 sentó las bases de las reglas esenciales de comportamiento del militar, desarrolladas luego en las Reales Ordenanzas (RD 96/2009).</li>
          </ul>
        `
      }
    ]
  },

  "B1-T03": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "La Ley 40/2015 (LRJSP) parece árida al principio, pero el tribunal siempre pregunta los mismos dos bloques: 1) ¿Qué órganos son Superiores y cuáles son Directivos en un Ministerio y qué rango tienen los Delegados/Subdelegados del Gobierno? y 2) Las 5 figuras de traslación de la competencia (Delegación, Avocación, Encomienda de gestión, Delegación de firma y Suplencia). Con este resumen lo vas a clavar.",
    actualizaciones: "Ley 40/2015 consolidada. Atención especial al artículo 55 (Órganos superiores y directivos) y artículos 8 a 14.",
    epigrafes: [
      {
        titulo: "1. Principios de Actuación y los Órganos Administrativos (Arts. 1 a 7 Ley 40/2015)",
        contenido: `
          <p>La Ley 40/2015 regula el <strong>Régimen Jurídico del Sector Público (LRJSP)</strong>, es decir, cómo se organiza por dentro la Administración y cómo se relacionan las distintas Administraciones entre sí (a diferencia de la Ley 39/2015, que regula el procedimiento con los ciudadanos).</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Principios generales (Art. 3):</strong> Las Administraciones Públicas sirven con objetividad los intereses generales y actúan de acuerdo con los principios de <span class="hl-yellow">eficacia, jerarquía, descentralización, desconcentración y coordinación</span>, con sometimiento pleno a la Constitución, a la Ley y al Derecho (igual que el Art. 103.1 CE).</li>
            <li><strong>Creación de cualquier órgano administrativo (Art. 5.3):</strong> Exige el cumplimiento de <strong>3 requisitos obligatorios</strong>: 1) Determinación de su forma de integración en la Administración Pública y su dependencia jerárquica; 2) Delimitación de sus funciones y competencias; y 3) Dotación de los créditos necesarios para su puesta en marcha y funcionamiento. Además, <span class="hl-pink">no podrán crearse nuevos órganos que supongan duplicación de otros ya existentes</span> si al mismo tiempo no se suprime o restringe la competencia de estos (Art. 5.4).</li>
          </ul>
        `
      },
      {
        titulo: "2. La Competencia y sus 5 Figuras Clave (Arts. 8 a 14 Ley 40/2015 — ¡Examen seguro!)",
        contenido: `
          <p>La competencia es <strong>irrenunciable</strong> y se ejercerá por los órganos administrativos que la tengan atribuida como propia (Art. 8.1). Si una disposición atribuye competencia a una Administración sin especificar el órgano, se entenderá que la facultad de instruir y resolver corresponde a los <span class="hl-cyan">órganos inferiores competentes por razón de la materia y del territorio</span> (Art. 8.3). Veamos las 5 figuras:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1. DELEGACIÓN DE COMPETENCIAS (Art. 9):</strong> Un órgano transfiere el ejercicio (no la titularidad) de una competencia a otro órgano de la misma Administración, aun cuando no sean jerárquicamente dependientes.
              <br/>• <span class="hl-green">SÍ debe publicarse obligatoriamente en el BOE</span> (o diario oficial correspondiente).
              <br/>• Las resoluciones administrativas que se adopten por delegación indicarán expresamente esta circunstancia y <span class="hl-yellow">se considerarán dictadas por el órgano DELEGANTE</span>.
              <br/>• 🚫 <strong>Prohibición de subdelegar:</strong> Salvo autorización expresa de una Ley, no podrán delegarse las competencias que se ejerzan por delegación. Tampoco se pueden delegar las relaciones con la Jefatura del Estado, Presidencia, Cortes, elaboración de disposiciones de carácter general o resolución de recursos en los órganos que dictaron los actos objeto de recurso.</li>
            <li><strong>2. AVOCACIÓN (Art. 10):</strong> Es el camino inverso: los órganos superiores atraen para sí el conocimiento de uno o varios asuntos cuya resolución corresponda ordinariamente o por delegación a sus órganos administrativos dependientes, cuando circunstancias de índole técnica, económica, social, jurídica o territorial lo hagan conveniente.
              <br/>• Se realiza mediante acuerdo motivado que debe notificarse a los interesados (pero <strong>NO se publica en el BOE</strong>).
              <br/>• 🔥 <span class="hl-pink">¡Trampa de Examen (Art. 10.2)!: Contra el acuerdo de avocación NO CABRÁ RECURSO</span>, aunque podrá impugnarse en el que, en su caso, se interponga contra la resolución del procedimiento.</li>
            <li><strong>3. ENCOMIENDA DE GESTIÓN (Art. 11):</strong> La realización de actividades de carácter <strong>material o técnico</strong> se encarga a otros órganos o Entidades de Derecho Público por razones de eficacia o falta de medios técnicos idóneos. No supone cesión de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio. Su instrumento de formalización <strong>SÍ se publica en el BOE</strong>.</li>
            <li><strong>4. DELEGACIÓN DE FIRMA (Art. 12):</strong> Los titulares de los órganos pueden, en materias de su competencia, delegar la firma de sus resoluciones y actos en los titulares de los órganos o unidades administrativas que de ellos dependan. <span class="hl-green">NO altera la competencia del órgano delegante y para su validez NO será necesaria su publicación en el BOE</span>.</li>
            <li><strong>5. SUPLENCIA (Art. 13):</strong> Sustitución temporal de los titulares de los órganos en supuestos de vacante, ausencia o enfermedad (así como abstención o recusación). No implica alteración de la competencia y <strong>NO es necesaria su publicación</strong> para su validez.</li>
          </ul>
        `
      },
      {
        titulo: "3. Organización Central de los Ministerios: Órganos Superiores y Directivos (Arts. 54 a 67 Ley 40/2015)",
        contenido: `
          <p>Este es el punto más preguntado de la Ley 40/2015. Memoriza exactamente esta clasificación del <strong>Artículo 55</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>🔴 ÓRGANOS SUPERIORES (Art. 55.2.a):</strong>
              <br/>1. Los <strong>Ministros</strong> (jefes superiores del Departamento).
              <br/>2. Los <strong>Secretarios de Estado</strong> (directamente responsables de la acción del Gobierno en un sector de actividad específica).</li>
            <li><strong>🟢 ÓRGANOS DIRECTIVOS DE LA ORGANIZACIÓN CENTRAL (Art. 55.2.b):</strong>
              <br/>1. Los <strong>Subsecretarios</strong> y los <strong>Secretarios Generales</strong> (<span class="hl-yellow">los Secretarios Generales tienen categoría/rango de Subsecretario</span>).
              <br/>2. Los <strong>Secretarios Generales Técnicos (SGT)</strong> y los <strong>Directores Generales</strong> (<span class="hl-cyan">los SGT tienen categoría de Director General</span> y dependen directamente del Subsecretario).
              <br/>3. Los <strong>Subdirectores Generales</strong>.</li>
            <li><strong>¿Cómo se crean, modifican y suprimen estos órganos? (Art. 59 — ¡Cuidado con los cruces!):</strong>
              <br/>• Las <strong>Subsecretarías, Secretarías Generales, Secretarías Generales Técnicas, Direcciones Generales y Subdirecciones Generales</strong> se crean, modifican y suprimen por <span class="hl-green">REAL DECRETO del Consejo de Ministros</span>, a iniciativa del Ministro interesado y a propuesta del Ministro de Hacienda y Función Pública.
              <br/>• Los órganos de <strong>nivel inferior a Subdirección General</strong> se crean, modifican y suprimen por <span class="hl-yellow">ORDEN MINISTERIAL</span> del Ministro respectivo (previa autorización).
              <br/>• Las unidades que <strong>no tengan la consideración de órganos</strong> se crean a través de las <span class="hl-pink">Relaciones de Puestos de Trabajo (RPT)</span>.</li>
          </ul>
        `
      },
      {
        titulo: "4. La Administración General del Estado en el Territorio (Organización Periférica: Arts. 69 a 79)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Delegados del Gobierno en las Comunidades Autónomas (Art. 72):</strong> Representan al Gobierno de la Nación en el territorio de la respectiva Comunidad Autónoma y dirigen y supervisan la Administración General del Estado en el territorio. Son <strong>órganos directivos con rango de <span class="hl-yellow">SUBSECRETARIO</span></strong> que dependen orgánicamente de la Presidencia del Gobierno y funcionalmente del Ministerio competente por razón de la materia. Son nombrados por Real Decreto del Consejo de Ministros a propuesta del Presidente del Gobierno.</li>
            <li><strong>Subdelegados del Gobierno en las provincias (Art. 74):</strong> En cada provincia (en las CC.AA. pluriprovinciales) existirá un Subdelegado del Gobierno bajo la inmediata dependencia del Delegado del Gobierno. Tienen <strong>nivel de <span class="hl-cyan">SUBDIRECTOR GENERAL</span></strong> y son nombrados por el Delegado del Gobierno mediante el procedimiento de libre designación entre funcionarios de carrera del Subgrupo A1. En las islas existirá un <strong>Director Insular</strong>.</li>
          </ul>
        `
      }
    ]
  },

  "B1-T04": {
    tiempoLectura: "9 min",
    consejoJefeEstudios: "¡ATENCIÓN MÁXIMA! El Tema 4 (Estructura del Ministerio de Defensa) es uno de los 3 temas que más preguntas da todos los años y acaba de actualizarse por el Real Decreto 205/2024 (y RD 268/2025). Si aprendes qué Direcciones Generales cuelgan de cada una de las 3 grandes patas (SEDEF, SUBDEF y SEGENPOL) y la nueva DIGEID, vas a sumar 6 o 7 aciertos directos.",
    actualizaciones: "🔥 NOVEDAD 2024/2025 (RD 205/2024 y RD 268/2025): Se crea en la SEDEF la nueva Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID). El CESTIC tiene rango de Dirección General dentro de la SEDEF.",
    epigrafes: [
      {
        titulo: "1. Estructura General del Ministerio de Defensa y Dependencia Directa del Ministro/a (Arts. 1 y 2 RD 205/2024)",
        contenido: `
          <p>El Ministerio de Defensa es el departamento de la Administración General del Estado al que corresponde la preparación, el desarrollo y la ejecución de la política de defensa determinada por el Gobierno. Bajo la dirección de la persona titular del Departamento, el Ministerio se estructura en <strong>4 grandes bloques</strong>:</p>
          <ol class="list-decimal pl-5 space-y-1 mt-2 font-semibold text-amber-300">
            <li>Las Fuerzas Armadas (EMAD, Ejército de Tierra, Armada y Ejército del Aire y del Espacio).</li>
            <li>La Secretaría de Estado de Defensa (SEDEF) — Órgano Superior.</li>
            <li>La Subsecretaría de Defensa (SUBDEF) — Órgano Directivo.</li>
            <li>La Secretaría General de Política de Defensa (SEGENPOL) — Órgano Directivo con rango de Subsecretario.</li>
          </ol>
          <p class="mt-2"><strong>¿Qué depende DIRECTAMENTE de la Persona Titular del Ministerio de Defensa?</strong></p>
          <ul class="list-disc pl-5 space-y-1.5 mt-1">
            <li>El <span class="hl-yellow">Centro Nacional de Inteligencia (CNI)</span> (regulado por Ley 11/2002).</li>
            <li>La <strong>Dirección de Comunicación Institucional de la Defensa (DIRCOMDEF)</strong>, con nivel orgánico de <span class="hl-cyan">Subdirección General</span>.</li>
            <li>El <strong>Gabinete</strong> (órgano de apoyo político y técnico, con nivel de Dirección General) y el <strong>Gabinete Técnico</strong> (dirigido por un Oficial General, con nivel de Dirección General).</li>
            <li>Los <strong>Consejos Superiores</strong> del Ejército de Tierra, de la Armada y del Ejército del Aire y del Espacio (órganos colegiados asesores y consultivos), y las <strong>Juntas Superiores</strong> de los Cuerpos Comunes.</li>
            <li>La <span class="hl-green">Unidad Militar de Emergencias (UME)</span> (como organización operativa permanente, sin perjuicio de su dependencia del JEMAD para el planeamiento y conducción operativa).</li>
          </ul>
        `
      },
      {
        titulo: "2. La Secretaría de Estado de Defensa — SEDEF (Art. 4 RD 205/2024 — ¡Con la Novedad DIGEID!)",
        contenido: `
          <p>La <strong>SEDEF</strong> es el órgano superior del Ministerio encargado de dirigir la política económica, financiera, de armamento y material, de innovación industrial, de infraestructura y de transformación digital (TIC). De la SEDEF dependen los siguientes <strong>5 órganos directivos con rango de Dirección General</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1. Dirección General de Armamento y Material (DGAM):</strong> Planificación y programación de políticas de armamento y material y dirección de su adquisición.</li>
            <li><strong>2. 🔥 Dirección General de Estrategia e Innovación de la Industria de Defensa (DIGEID):</strong> <span class="hl-yellow">¡GRAN NOVEDAD DEL RD 205/2024!</span> Encargada de la estrategia industrial de defensa, el impulso a la I+D+i industrial, la cooperación industrial internacional (OTAN/UE) y la certificación/calidad industrial.</li>
            <li><strong>3. Dirección General de Asuntos Económicos (DIGENECO):</strong> Presupuestos, contabilidad, gestión económica y contratación.</li>
            <li><strong>4. Dirección General de Infraestructura (DIGENIN):</strong> Planificación y desarrollo de infraestructuras, patrimonio y medioambiente militar.</li>
            <li><strong>5. Centro de Sistemas y Tecnologías de la Información y las Comunicaciones (CESTIC):</strong> Órgano directivo con rango de <span class="hl-green">Dirección General</span> encargado de las TIC, transformación digital y seguridad de la información (CIS/TIC).</li>
          </ul>
          <p class="mt-2">📌 <strong>Organismo Autónomo adscrito a la SEDEF:</strong> El <span class="hl-cyan">Instituto Nacional de Técnica Aeroespacial "Esteban Terradas" (INTA)</span> (y la sociedad mercantil estatal ISDEFE).</p>
        `
      },
      {
        titulo: "3. La Subsecretaría de Defensa — SUBDEF (Art. 9 RD 205/2024 — Personal, Enseñanza, Leyes y Sanidad)",
        contenido: `
          <p>La <strong>SUBDEF</strong> es el órgano directivo que dirige la política de personal, reclutamiento, enseñanza militar, régimen interior, asesoramiento jurídico, control económico-financiero (intervención) y sanidad militar. De la SUBDEF dependen los siguientes <strong>6 órganos directivos (todos con rango de Dirección General)</strong>:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1. Secretaría General Técnica (SEGENTE):</strong> Producción normativa, recursos administrativos, publicaciones y archivos.</li>
            <li><strong>2. Dirección General de Personal (DIGENPER):</strong> Gestión de personal militar y civil, costes de recursos humanos y la <strong>División de Igualdad y Apoyo al Personal</strong> (donde se ubica la UPA Central).</li>
            <li><strong>3. Dirección General de Reclutamiento y Enseñanza Militar (DIGEREM):</strong> Acceso a las FAS, enseñanza militar, reservistas y desarrollo profesional. <span class="hl-green">De la DIGEREM depende la Academia Central de la Defensa (ACD)</span>.</li>
            <li><strong>4. Asesoría Jurídica General de la Defensa:</strong> Informe jurídico preceptivo (al frente un General Consejero Togado).</li>
            <li><strong>5. Intervención General de la Defensa (IGD):</strong> Control interno de la gestión económico-financiera, notaría militar y auditoría.</li>
            <li><strong>6. Inspección General de Sanidad de la Defensa (IGESAN):</strong> Política sanitaria militar y red hospitalaria (Hospital Central de la Defensa "Gómez Ulla").</li>
          </ul>
          <p class="mt-2">📌 <strong>Organismos y órganos adscritos a la SUBDEF (¡Muy preguntado!):</strong></p>
          <ul class="list-disc pl-5 space-y-1 mt-1">
            <li>Organismos Autónomos: el <span class="hl-pink">ISFAS (Instituto Social de las Fuerzas Armadas)</span> y el <span class="hl-pink">INVIED O.A. (Instituto de Vivienda, Infraestructura y Equipamiento de la Defensa)</span>.</li>
            <li>Las <strong>Delegaciones de Defensa</strong> en las Comunidades Autónomas y Ciudades de Ceuta y Melilla (encuadradas orgánicamente en la SEGENTE).</li>
            <li>El <strong>Consejo de Personal de las FAS (COPERFAS)</strong>, el <strong>Observatorio Militar para la Igualdad</strong> y el <strong>Arzobispado General Castrense</strong>.</li>
          </ul>
        `
      },
      {
        titulo: "4. La Secretaría General de Política de Defensa — SEGENPOL (Art. 16 RD 205/2024)",
        contenido: `
          <p>La <strong>SEGENPOL</strong> es el órgano directivo (con rango de <span class="hl-yellow">Subsecretario</span>) al que corresponde el desarrollo y ejecución de la política de defensa en el ámbito internacional (OTAN, UE, ONU, OSCE), la diplomacia de defensa, la contribución a la conducción de crisis y la promoción de la <strong>Cultura de Defensa</strong>.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Dependen de la SEGENPOL:</strong>
              <br/>1. La <strong>Dirección General de Política de Defensa (DIGENPOL)</strong> (con la Subdirección General de Planes y Relaciones Internacionales y la de Cooperación y Defensa Civil).
              <br/>2. La <strong>División de Coordinación y Estudios de Seguridad y Defensa (DICOES)</strong> (nivel Subdirección General, encargada de la cultura de defensa).
              <br/>3. Las <span class="hl-cyan">Agregadurías de Defensa</span> en las misiones diplomáticas de España en el exterior y las <strong>Consejerías de Defensa</strong> en las representaciones permanentes ante Organizaciones Internacionales.</li>
            <li><strong>Órganos colegiados adscritos a la SEGENPOL:</strong> La <strong>Comisión Interministerial de Defensa</strong>, la Sección Española del Comité Permanente Hispano-Norteamericano y la Comisión Española de Historia Militar (CEHISMI).</li>
          </ul>
        `
      }
    ]
  },

  "B1-T05": {
    tiempoLectura: "6 min",
    consejoJefeEstudios: "El Tema 5 desarrolla la Estructura Operativa de las Fuerzas Armadas (el EMAD y el JEMAD) regulada por el RD 521/2020 y la Orden DEF/710/2020. Lo más importante aquí es no confundir los órganos del EMAD (CG-EMAD, MOPS, CIFAS, MCCE y CESEDEN) y recordar que el MCOE (Operaciones Especiales) está DENTRO del MOPS.",
    actualizaciones: "RD 521/2020 y Orden DEF/710/2020 vigentes. Denominación oficial de Mando Conjunto del Ciberespacio (MCCE).",
    epigrafes: [
      {
        titulo: "1. Organización Básica de las Fuerzas Armadas (RD 521/2020)",
        contenido: `
          <p>El <strong>Real Decreto 521/2020</strong> establece que las Fuerzas Armadas se organizan en dos estructuras (Orgánica y Operativa) integradas bajo una cadena de mando única encabezada por el Rey y dirigida por el Presidente del Gobierno y el Ministro de Defensa.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>El JEMAD (Jefe de Estado Mayor de la Defensa):</strong> Es un General de Ejército, Almirante General o General del Aire que ostenta la <span class="hl-yellow">representación militar de las Fuerzas Armadas</span> y ejerce el <strong>Mando Estratégico</strong> de la estructura operativa y la conducción estratégica de las operaciones militares.</li>
            <li><strong>Los Jefes de Estado Mayor de los Ejércitos (JEME, AJEMA y JEMA):</strong> Desarrollan la estructura orgánica y preparan la Fuerza de su respectivo Ejército para transferirla a la estructura operativa.</li>
          </ul>
        `
      },
      {
        titulo: "2. Los Órganos del Estado Mayor de la Defensa — EMAD (Orden DEF/710/2020)",
        contenido: `
          <p>El <strong>EMAD</strong> es el órgano auxiliar de mando y apoyo al JEMAD. Se articula en los siguientes órganos principales:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1. Cuartel General del EMAD (CG-EMAD):</strong> Integrado por el <span class="hl-green">Estado Mayor Conjunto de la Defensa (EMACON)</span> —al mando del JEMACON, principal órgano auxiliar del JEMAD en la definición de la estrategia militar—, la Jefatura de Recursos Humanos, la Jefatura de Asuntos Económicos, el Gabinete Técnico y órganos de asistencia.</li>
            <li><strong>2. Mando de Operaciones (MOPS):</strong> Con sede en <strong>Retamares (Pozuelo de Alarcón, Madrid)</strong> y al mando del <strong>CMOPS (Comandante del Mando de Operaciones)</strong>. Es el órgano responsable del <span class="hl-yellow">planeamiento, conducción y seguimiento en el NIVEL OPERACIONAL</span> de las operaciones permanentes y de gestión de crisis.
              <br/>🔥 <span class="hl-pink">¡Trampa de Examen!: Dentro del MOPS se encuadra el Mando Conjunto de Operaciones Especiales (MCOE)</span> (no es un mando independiente al nivel del MOPS, sino subordinado al CMOPS).</li>
            <li><strong>3. Centro de Inteligencia de las Fuerzas Armadas (CIFAS):</strong> Al mando del JECIFAS. Es el órgano responsable de facilitar al Ministro de Defensa y al JEMAD la <strong>inteligencia militar conjunta y estratégica</strong> necesaria para alertar sobre crisis y apoyar las operaciones.</li>
            <li><strong>4. Mando Conjunto del Ciberespacio (MCCE):</strong> Al mando del JEMCCE. Es el órgano responsable del planeamiento, dirección, coordinación, control y ejecución de las acciones conducentes a asegurar la <span class="hl-cyan">libertad de acción de las FAS en el ámbito ciberespacial</span> (ciberdefensa).</li>
            <li><strong>5. Centro Superior de Estudios de la Defensa Nacional (CESEDEN):</strong> Principal centro docente militar conjunto de altos estudios de la defensa nacional. Pertenece orgánicamente al EMAD, pero mantiene dependencia funcional de la <strong>SEGENPOL</strong> (cultura de defensa) y de la <strong>DIGEREM</strong> (enseñanza de posgrado).</li>
            <li><strong>6. Organizaciones Operativas Permanentes:</strong> Mando Operativo Terrestre (MOT), Marítimo (MOM), Aéreo (MOA), Espacial (MOESPA) y Ciberespacial (MOC), además de la UME cuando se active operativamente.</li>
          </ul>
        `
      }
    ]
  },

  "B1-T06": {
    tiempoLectura: "9 min",
    consejoJefeEstudios: "El Tema 6 es SAGRADO para un opositor del Ejército de Tierra. Tienes que saberte al dedillo la Instrucción 14/2021 del ET (sobre todo qué unidades dependen de la FUTER y cuáles del Mando de Canarias MCANA, y las Direcciones de MAPER, MALE, MADOC e IGE), más la organización básica de la Armada (Instrucción 15/2021) y la nueva Instrucción 6/2025 del Ejército del Aire y del Espacio.",
    actualizaciones: "🔥 Incluye la Instrucción 14/2021 (ET), Instrucción 15/2021 (Armada) y la novísima Instrucción 6/2025 del Ejército del Aire y del Espacio (que incorpora el Mando del Espacio MESPA).",
    epigrafes: [
      {
        titulo: "1. Organización del Ejército de Tierra (Instrucción 14/2021): Los 3 Escalones y el Cuartel General",
        contenido: `
          <p>Bajo el mando del <strong>JEME (Jefe de Estado Mayor del Ejército de Tierra)</strong>, el Ejército de Tierra se articula en <strong>3 grandes componentes</strong>: 1) El Cuartel General (CGET), 2) La Fuerza y 3) El Apoyo a la Fuerza.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>El Cuartel General del Ejército de Tierra (CGET — Sede: Madrid):</strong> Encuadra los órganos de apoyo inmediato al JEME:
              <br/>• El <strong>Estado Mayor del Ejército (EME)</strong>, dirigido por el Segundo JEME (SEJEME), que se articula en Secretaría General y 3 Divisiones: <strong>Planes (DIVPLA), Operaciones (DIVOPE) y Logística (DIVLOG)</strong>.
              <br/>• El Gabinete del JEME, la Jefatura de Sistemas de Información, Telecomunicaciones y Asistencia Técnica (JCISAT), el <strong>Instituto de Historia y Cultura Militar (IHCM)</strong>, la Asesoría Jurídica y la Intervención Delegada Central.</li>
          </ul>
        `
      },
      {
        titulo: "2. La Fuerza del Ejército de Tierra: CGTAD, FUTER y Mando de Canarias (¡Punto Estrella!)",
        contenido: `
          <p>La Fuerza del Ejército de Tierra tiene como cometido principal prepararse para constituir organizaciones operativas. Está integrada por <strong>3 Mandos de primer nivel</strong>:</p>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>1. Cuartel General Terrestre de Alta Disponibilidad (CGTAD — Sede: Bétera, Valencia):</strong> Es el mando de primer nivel que se ofrece a la OTAN como <em>HQ NRDC-ESP</em>. Encuadra además el <strong>Regimiento de Inteligencia nº 1</strong> (Valencia) y el <strong>Batallón de Policía Militar I</strong> (Bétera).</li>
            <li><strong>2. Fuerza Terrestre (FUTER — Sede: Sevilla):</strong> Se articula en 3 grandes mandos:
              <br/>• 🦁 <strong>División "San Marcial" (Sede: Burgos):</strong> Agrupa las unidades de respuesta específica y alta disponibilidad: <span class="hl-green">Brigada "Almogávares" VI de Paracaidistas (BRIPAC - Paracuellos), Mando de Operaciones Especiales (MOE - Alicante), Mando de Tropas de Montaña (MTM - Pamplona) y Fuerzas Aeromóviles del ET (FAMET - Colmenar Viejo)</span>, además del Regimiento de Operaciones de Información nº 1.
              <br/>• ⚔️ <strong>División "Castillejos" (Sede: Huesca):</strong> Agrupa las <strong>6 Brigadas Polivalentes</strong>: Brigada "Aragón" I (Zaragoza), Brigada "Rey Alfonso XIII" II de La Legión (Viator, Almería), Brigada "Galicia" VII - BRILAT (Pontevedra), Brigada "Guzmán el Bueno" X (Córdoba), Brigada "Extremadura" XI (Badajoz) y Brigada "Guadarrama" XII (El Goloso, Madrid).
              <br/>• 🛠️ <strong>Mando de Apoyo a la Maniobra (MAM — Sede: A Coruña):</strong> Agrupa el apoyo al combate y logístico: Mando de Artillería de Campaña (MACA - San Andrés del Rabanedo, León), Mando de Artillería Antiaérea (MAAA - Madrid), Mando de Ingenieros (MING - Salamanca), Mando de Transmisiones (MATRANS - Bétera), <strong>Brigada Logística (BRILOG - Zaragoza)</strong>, <strong>Brigada de Sanidad (BRISAN - Pozuelo)</strong>, Regimiento de Defensa NBQ "Valencia" nº 1 y Regimiento de Guerra Electrónica nº 31.</li>
            <li><strong>3. 🔥 Mando de Canarias (MCANA — Sede: Santa Cruz de Tenerife):</strong> <span class="hl-pink">¡SÚPER TRAMPA DE EXAMEN!</span> Tras la reorganización de la Instrucción 14/2021, del Mando de Canarias dependen:
              <br/>• La <strong>Brigada "Canarias" XVI</strong> (Las Palmas), el Regimiento de Artillería Antiaérea nº 94 y el Batallón de Helicópteros de Maniobra VI (BHELMA VI).
              <br/>• Y las <strong>3 Comandancias Generales extrapeninsulares/insulares:</strong> <span class="hl-yellow">Comandancia General de Ceuta (COMGECEU), Comandancia General de Melilla (COMGEMEL) y Comandancia General de Baleares (COMGEBAL)</span>. ¡Nunca digas que Ceuta, Melilla o Baleares dependen de la FUTER!</li>
          </ul>
        `
      },
      {
        titulo: "3. El Apoyo a la Fuerza del Ejército de Tierra: MAPER, MALE, MADOC e IGE",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Mando de Personal (MAPER — Sede: Madrid):</strong> Se articula en 3 Direcciones: <span class="hl-cyan">Dirección de Personal (DIPER), Dirección de Asistencia al Personal (DIAPER) y Dirección de Sanidad (DISAN)</span>.</li>
            <li><strong>Mando de Apoyo Logístico (MALE — Sede: Madrid):</strong> Se articula en 2 Direcciones: <span class="hl-cyan">Dirección de Adquisiciones (DIAD) y Dirección de Integración de Funciones Logísticas (DINFULOG)</span>.</li>
            <li><strong>Mando de Adiestramiento y Doctrina (MADOC — Sede: Granada):</strong> Se articula en 2 Direcciones: <span class="hl-green">Dirección de Investigación, Doctrina, Orgánica y Materiales (DIDOM) y Dirección de Enseñanza, Instrucción, Adiestramiento y Evaluación (DIENADE)</span> (de la que dependen las Academias del ET: AGM en Zaragoza, AGBS en Talarn, ACINF en Toledo, etc.).</li>
            <li><strong>Inspección General del Ejército (IGE — Sede: Barcelona, Palacio de Capitanía):</strong> Responsable de la infraestructura, vida en los acuartelamientos y prevención de riesgos laborales. Se articula en <span class="hl-yellow">Dirección de Acuartelamiento (DIACU) y Dirección de Infraestructura (DINFA)</span>.</li>
            <li>Además, la <strong>Dirección de Asuntos Económicos (DIAE)</strong> gestiona los recursos financieros del ET.</li>
          </ul>
        `
      },
      {
        titulo: "4. Organización de la Armada (Instrucción 15/2021) y del Ejército del Aire y del Espacio (Instrucción 6/2025)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>⚓ LA ARMADA (AJEMA — Instrucción 15/2021):</strong>
              <br/>• <strong>Cuartel General de la Armada (Madrid):</strong> EMA, Gabinete AJEMA, Órgano de Historia y Cultura Naval, AJAL.
              <br/>• <strong>La Fuerza = LA FLOTA:</strong> Al mando del <strong>Almirante de la Flota (ALFLOT)</strong> con Cuartel General en la <span class="hl-cyan">Base Naval de Rota (Cádiz)</span>. Integra: la <strong>Fuerza de Acción Naval (ALNAV)</strong>, la <strong>Fuerza de Acción Marítima (ALMART - Cartagena)</strong>, la <strong>Fuerza de Infantería de Marina (COMGEIM - San Fernando: Tercio de Armada TEAR, FUPRO y FGNE)</strong> y la <strong>Flotilla de Aeronaves (FLOAN - Rota)</strong>.
              <br/>• <strong>Apoyo a la Fuerza:</strong> <span class="hl-green">Jefatura de Personal (JEPER), Jefatura de Apoyo Logístico (JAL — Arsenales de Ferrol, Cartagena, Cádiz y Las Palmas) y Dirección de Asuntos Económicos (DAE)</span>.</li>
            <li><strong>✈️ EJÉRCITO DEL AIRE Y DEL ESPACIO (JEMA — Instrucción 6/2025):</strong>
              <br/>• <strong>Cuartel General (Madrid):</strong> EMA, Gabinete JEMA, SHYCEA, Agrupación del CG.
              <br/>• <strong>La Fuerza:</strong> Se articula en <span class="hl-yellow">Mando Aéreo de Combate (MACOM - Torrejón), Mando Aéreo General (MAGEN - Madrid), Mando Aéreo de Canarias (MACAN - Las Palmas) y el Mando del Espacio (MESPA - Torrejón)</span>.
              <br/>• <strong>Apoyo a la Fuerza:</strong> <span class="hl-cyan">Mando de Personal (MAPER), Mando de Apoyo Logístico (MALOG) y Dirección de Asuntos Económicos (DAE)</span>.</li>
          </ul>
        `
      }
    ]
  },

  // =========================================================================
  // BLOQUE 2: JURÍDICO-SOCIAL (TEMAS B2-T01 A B2-T08)
  // =========================================================================
  "B2-T01": {
    tiempoLectura: "9 min",
    consejoJefeEstudios: "Entramos en el Bloque 2 (el que vale el 40% del examen). El Tema 1 une la Ley 8/2006 de Tropa y Marinería y la Ley 39/2007 de la Carrera Militar. Aquí el tribunal va directo a los números: años de compromiso inicial (hasta 6), CLD (hasta los 45 años), RED (45 años + 18 de servicio), sistemas de ascenso (Elección, Clasificación, Concurso-Oposición y Antigüedad) y las 6 situaciones administrativas (con la trampa de los 6 meses en suspensión de empleo).",
    actualizaciones: "Ley 8/2006 y Ley 39/2007 consolidadas.",
    epigrafes: [
      {
        titulo: "1. Ley 8/2006 de Tropa y Marinería: Compromiso Inicial, Larga Duración, Permanencia y RED",
        contenido: `
          <p>La Ley 8/2006 regula la relación de servicios profesionales de los militares de tropa y marinería a través de <strong>3 etapas progresivas</strong> y la figura del Reservista de Especial Disponibilidad (RED):</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1. Compromiso Inicial (Arts. 7 y 8):</strong> De 2 o 3 años de duración, renovable por períodos de 2 o 3 años hasta alcanzar un <span class="hl-yellow">máximo de 6 AÑOS de servicios</span>.</li>
            <li><strong>2. Compromiso de Larga Duración — CLD (Art. 9):</strong> Se suscribe tras cumplir más de <strong>5 años de servicios</strong> (de los cuales al menos 3 deben ser con el compromiso inicial) y poseer el título de Graduado en ESO o equivalente, con informe favorable. Llega <span class="hl-green">hasta que el militar cumple los 45 AÑOS de edad</span>.</li>
            <li><strong>3. Acceso a la Condición de Permanente / Militar de Carrera (Art. 12 Ley 8/2006 y Art. 76 Ley 39/2007):</strong> Permite adquirir la condición de <strong>Militar de Carrera</strong> mediante un proceso selectivo de <strong>Concurso-Oposición</strong>. Requisitos: tener suscrito el <strong>CLD en vigor</strong>, poseer como mínimo la titulación de <strong>Técnico del Sistema Educativo General (FP Grado Medio) o equivalente</strong> (Bachiller), y tener el número de años de servicio fijado en la convocatoria (normalmente entre 8 y 14 años).</li>
            <li><strong>4. Reservista de Especial Disponibilidad — RED (Arts. 17 a 19):</strong> Adquieren esta condición quienes finalicen su CLD al cumplir la edad de <span class="hl-pink">45 AÑOS habiendo cumplido al menos 18 AÑOS de servicios</span> (y lo soliciten). Perciben una asignación económica mensual (compatible con trabajo civil privado) y mantienen esta condición <span class="hl-yellow">hasta cumplir los 65 AÑOS de edad</span>.</li>
            <li><strong>Reserva de plazas de promoción y salidas profesionales (Arts. 15, 20 y 21):</strong>
              <br/>• Acceso a Escala de Suboficiales: al menos el <span class="hl-cyan">80% de las plazas</span>.
              <br/>• Acceso a Guardia Civil: mínimo el <span class="hl-cyan">40% de las plazas</span> (para militares con &gt;5 años de servicios).
              <br/>• Acceso a Policía Nacional (Escala Básica): hasta un <span class="hl-cyan">20% de las plazas</span> (&gt;5 años de servicios).
              <br/>• Acceso a personal laboral del MINISDEF: al menos el <strong>50% de las plazas</strong>.</li>
          </ul>
        `
      },
      {
        titulo: "2. Ley 39/2007 de la Carrera Militar: Categorías, Cuerpos, Escalas y Empleos",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Categorías y Empleos Militares (Art. 21):</strong>
              <br/>• <strong>Oficiales Generales:</strong> Capitán General (exclusivo de S.M. el Rey), General de Ejército / Almirante General / General del Aire, Teniente General / Almirante, General de División / Vicealmirante, General de Brigada / Contralmirante.
              <br/>• <strong>Oficiales:</strong> Coronel / Capitán de Navío, Teniente Coronel / Capitán de Fragata, Comandante / Capitán de Corbeta, Capitán / Teniente de Navío, Teniente / Alférez de Navío, Alférez / Alférez de Fragata.
              <br/>• <strong>Suboficiales:</strong> Suboficial Mayor, Subteniente, Brigada, Sargento Primero, Sargento.
              <br/>• <strong>Tropa y Marinería:</strong> <span class="hl-yellow">Cabo Mayor, Cabo Primero, Cabo y Soldado (o Marinero)</span>.</li>
            <li><strong>Los 4 Cuerpos Comunes de las FAS (Arts. 25 y 39):</strong> Cuerpo Jurídico Militar, Cuerpo Militar de Intervención, Cuerpo Militar de Sanidad y Cuerpo de Músicas Militares.</li>
            <li><strong>Juramento o promesa ante la Bandera (Art. 3):</strong> Es requisito previo e indispensable a la adquisición de la condición de militar de carrera, de complemento y de tropa y marinería.</li>
          </ul>
        `
      },
      {
        titulo: "3. Los 4 Sistemas de Ascenso (Art. 88) y los 3 Tipos de Provisión de Destinos (Art. 100)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Los 4 Sistemas de Ascenso en las FAS (Arts. 88 y 89 — ¡Pregunta frecuente!):</strong>
              <br/>1. <strong>Elección:</strong> Entre los más capacitados para el empleo superior. Se asciende por elección a: <span class="hl-green">Cabo Mayor, Suboficial Mayor</span> y todos los empleos de Oficiales Generales (y a Coronel en determinados cuerpos).
              <br/>2. <strong>Clasificación:</strong> Por orden de puntuación tras evaluación. Se asciende por clasificación a: <strong>Subteniente, Brigada</strong>, Teniente Coronel y Comandante.
              <br/>3. <strong>Concurso o Concurso-Oposición:</strong> Se asciende por este sistema a los empleos de <span class="hl-yellow">Cabo y Cabo Primero</span>.
              <br/>4. <strong>Antigüedad:</strong> Según el orden de escalafón. Se asciende por antigüedad a: <span class="hl-cyan">Sargento Primero y Capitán</span>.</li>
            <li><strong>Las 3 Formas de Provisión de Destinos (Art. 100):</strong>
              <br/>1. <strong>Libre designación</strong> | 2. <strong>Concurso de méritos</strong> | 3. <strong>Provisión por antigüedad</strong>. En ausencia de peticionarios con carácter voluntario, los destinos podrán ser asignados con carácter forzoso.</li>
          </ul>
        `
      },
      {
        titulo: "4. Las 6 Situaciones Administrativas (Arts. 107 a 113 Ley 39/2007 — ¡Ojo a la Trampa del Art. 112!)",
        contenido: `
          <p>Según el <strong>Artículo 107</strong> de la Ley 39/2007, los militares profesionales pueden hallarse en una de estas <strong>6 situaciones administrativas</strong>:</p>
          <ol class="list-decimal pl-5 space-y-1.5 mt-2">
            <li><strong>Servicio Activo (Art. 108):</strong> Cuando ocupan destino, están pendientes de asignación de destino, o en baja temporal por enfermedad/lesión (hasta el expediente de insuficiencia de condiciones psicofísicas).</li>
            <li><strong>Servicios Especiales (Art. 109):</strong> Cuando son designados miembros del Gobierno, altos cargos, adscritos a la Casa de S.M. el Rey, al Defensor del Pueblo o en misiones en organismos internacionales por más de 6 meses. Se les computa el tiempo a efectos de trienios, ascensos y derechos pasivos y tienen reserva de destino.</li>
            <li><strong>Excedencia (Art. 110):</strong> Puede ser voluntaria por interés particular (<span class="hl-yellow">permanencia mínima de 2 AÑOS</span>), por agrupación familiar, por cuidado de familiares (hasta 3 años por hijo), por razón de violencia de género o terrorismo, o por prestación de servicios en el sector público.</li>
            <li><strong>Suspensión de Funciones (Art. 111):</strong> Medida cautelar acordada por procesamiento/inculpación penal o por la tramitación de un expediente disciplinario por falta muy grave (<span class="hl-cyan">en vía disciplinaria no puede exceder de 6 MESES</span>). Si supera los 6 meses, conlleva el cese en el destino.</li>
            <li><strong>🔥 Suspensión de Empleo (Art. 112 — ¡LA GRAN TRAMPA DE EXAMEN!):</strong> Se produce por condena penal de suspensión de empleo o por sanción disciplinaria de suspensión de empleo por falta muy grave... <span class="hl-pink">¡PERO SOLO CUANDO LA SANCIÓN DISCIPLINARIA SEA SUPERIOR A 6 MESES!</span> Si a un militar le imponen una sanción disciplinaria de suspensión de empleo de <strong>6 meses o menos</strong>, NO pasa a la situación administrativa de Suspensión de Empleo, sino que <span class="hl-green">PERMANECE EN SERVICIO ACTIVO</span>.</li>
            <li><strong>Reserva (Art. 113):</strong> Situación a la que pasan los militares de carrera al cumplir las edades o tiempos fijados en la ley hasta la edad de retiro (65 años).</li>
          </ol>
        `
      }
    ]
  },

  "B2-T02": {
    tiempoLectura: "6 min",
    consejoJefeEstudios: "Las Reales Ordenanzas para las Fuerzas Armadas (RD 96/2009) son el código deontológico y ético del militar. Tienen 129 artículos. El tribunal siempre busca si sabes a quién se aplican (incluyendo a la Guardia Civil en misiones militares), qué dice el artículo 48 sobre las órdenes que constituyen delito y cómo se define la disciplina.",
    actualizaciones: "RD 96/2009 vigente. Texto íntegro de 129 artículos.",
    epigrafes: [
      {
        titulo: "1. Objeto, Ámbito de Aplicación y Estructura de las Reales Ordenanzas (RD 96/2009)",
        contenido: `
          <p>Las Reales Ordenanzas para las Fuerzas Armadas fueron aprobadas por el <strong>Real Decreto 96/2009, de 6 de febrero</strong>. Constituyen el <span class="hl-yellow">código de conducta de los militares</span>, definen los principios éticos y las reglas de comportamiento de acuerdo con la Constitución y el resto del ordenamiento jurídico. Deben inspirar el compromiso de defender a España, el amor a la patria, la disciplina, el valor y el compañerismo.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Estructura exacta (¡Pregunta de examen!):</strong> Constan de <strong>129 artículos</strong> distribuidos en un <strong>Título Preliminar</strong> y <strong>5 Títulos numerados</strong>:
              <br/>• <strong>Título Preliminar (Arts. 1 a 3):</strong> Disposiciones generales.
              <br/>• <strong>Título I (Arts. 4 a 43):</strong> Del militar.
              <br/>• <strong>Título II (Arts. 44 a 52):</strong> De la disciplina.
              <br/>• <strong>Título III (Arts. 53 a 81):</strong> De la acción del mando.
              <br/>• <strong>Título IV (Arts. 82 a 98):</strong> De las operaciones.
              <br/>• <strong>Título V (Arts. 99 a 129):</strong> De las demás funciones.</li>
            <li><strong>Ámbito de aplicación y Guardia Civil (Art. 2):</strong> Son de aplicación a todos los militares profesionales de las FAS, a los alumnos de la enseñanza militar de formación y a los reservistas cuando estén activados. <span class="hl-green">Además, dada su naturaleza militar, son de aplicación a los miembros del Cuerpo de la Guardia Civil cuando cumplan misiones de carácter militar o se integren en unidades militares (Art. 2.2)</span>.</li>
          </ul>
        `
      },
      {
        titulo: "2. Preceptos Estrella de Examen: Primer Deber, Disciplina y Límites a la Obediencia (Arts. 8, 14 y 44 a 52)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Primer deber del militar (Arts. 3 y 14):</strong> Su primer y más fundamental deber es la <span class="hl-yellow">disposición permanente para defender a España</span>, incluso con la entrega de la vida cuando fuera necesario.</li>
            <li><strong>La Disciplina (Art. 8 y Art. 44):</strong> Es factor de cohesión que obliga a <strong>mandar con responsabilidad y a obedecer lo mandado</strong>; será practicada y exigida en las Fuerzas Armadas como norma de actuación. Tiene su expresión colectiva en el acatamiento a la Constitución y su manifestación individual en el cumplimiento de las órdenes recibidas.</li>
            <li><strong>Definición de Orden (Art. 45):</strong> Mandato relativo al servicio que un militar da a un subordinado, en forma adecuada y dentro de las atribuciones que le correspondan, para que lleve a cabo u omita una actuación concreta.</li>
            <li><strong>🔥 Límites a la Obediencia — Órdenes Delictivas (Art. 48 — ¡Pregunta Fija!):</strong> Si las órdenes entrañan la ejecución de <span class="hl-pink">actos constitutivos de delito</span>, en particular contra la Constitución y contra las personas y bienes protegidos en caso de conflicto armado, <span class="hl-yellow">el militar NO estará obligado a obedecerlas</span>; en todo caso asumirá la grave responsabilidad de su acción u omisión.</li>
            <li><strong>Objeciones a una orden (Art. 49):</strong> En el supuesto de que considere su deber presentar alguna objeción a la orden recibida, la formulará ante quien se la hubiera dado; si éste insiste en su mantenimiento, <strong>deberá cumplirla</strong> (salvo que sea delito conforme al art. 48), pudiendo después dar cuenta o formular queja motivada.</li>
          </ul>
        `
      },
      {
        titulo: "3. La Acción del Mando y las Operaciones (Títulos III y IV)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Estilo de mando (Arts. 53 a 55):</strong> El militar que ejerza mando se hará querer y respetar por sus subordinados; <span class="hl-cyan">no les disimulará jamás las faltas de subordinación</span>; les infundirá amor al servicio y mucha exactitud en el desempeño de sus obligaciones; será firme en el mando, graciable en lo que pueda y comedido en sus palabras, aun cuando reprenda.</li>
            <li><strong>Capacidad de decisión e iniciativa (Arts. 60 y 62):</strong> La condición esencial del que ejerce mando es su capacidad para decidir. Fomentará la iniciativa de los subordinados asignándoles misiones y dándoles libertad de acción (Mando Tipo Misión).</li>
            <li><strong>Uso legítimo de la fuerza en operaciones (Art. 84):</strong> El militar hará un uso gradual y proporcionado de la fuerza, de acuerdo con las reglas de enfrentamiento (ROE) bajo los principios de <span class="hl-green">congruencia, oportunidad y proporcionalidad</span>.</li>
          </ul>
        `
      }
    ]
  },

  "B2-T03": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "La Ley Orgánica 9/2011 de Derechos y Deberes de los miembros de las FAS es muy fácil de rentabilizar en el examen si dominas 3 cosas: 1) qué derechos están prohibidos (huelga, sindicatos, partidos políticos, petición colectiva), 2) los porcentajes exactos del COPERFAS (1% general, o 3% Oficiales / 3% Suboficiales / 1,5% Tropa) y 3) la composición del Observatorio de la Vida Militar (9 miembros elegidos por las Cortes por 5 años).",
    actualizaciones: "LO 9/2011 vigente y consolidada.",
    epigrafes: [
      {
        titulo: "1. Ejercicio de Derechos Fundamentales y Deber de Neutralidad Política y Sindical (Arts. 1 a 21 LO 9/2011)",
        contenido: `
          <p>El militar es titular de los derechos fundamentales y libertades públicas reconocidos en la Constitución, sin otros límites que los establecidos en la propia CE y en las leyes orgánicas por razón de la disciplina, jerarquía, unidad y neutralidad de las FAS.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Deber de neutralidad política y sindical (Art. 7 — ¡Muy preguntado!):</strong> El militar está sujeto al deber de neutralidad política y sindical. <span class="hl-pink">NO podrá fundar ni afiliarse a partidos políticos o sindicatos</span>, ni participar en actividades políticas o sindicales, ni realizar declaraciones de carácter político o sindical.</li>
            <li><strong>Libertad de expresión e información (Art. 12):</strong> Tiene sus límites en el deber de reserva sobre materias clasificadas o relacionadas con la seguridad y defensa nacional, y en el respeto a la dignidad de las instituciones y autoridades; en los asuntos estrictamente relacionados con el servicio en las FAS, está sujeta a los límites derivados de la <strong>disciplina</strong>.</li>
            <li><strong>Derecho de reunión y manifestación (Art. 13):</strong> El militar <span class="hl-yellow">NO podrá organizar ni participar activamente en reuniones o manifestaciones de carácter político o sindical</span>. Vistiendo el uniforme o haciendo uso de su condición militar, no podrá organizar, participar ni asistir en lugares de tránsito público a manifestaciones o a reuniones de carácter político, sindical o reivindicativo. Las reuniones en unidades militares requieren autorización previa de su jefe.</li>
            <li><strong>Derecho de asociación (Art. 14):</strong> Los militares tienen derecho a crear y afiliarse a <strong>Asociaciones Profesionales de miembros de las FAS</strong> para la defensa de sus intereses profesionales, económicos y sociales, pero estas asociaciones <span class="hl-pink">NO pueden ejercer el derecho de huelga, ni acciones sustitutivas, ni negociación colectiva, ni vinculación con sindicatos o partidos políticos</span>.</li>
            <li><strong>Derecho de petición (Art. 15):</strong> El militar solo podrá ejercer el derecho de petición <span class="hl-green">SOLO INDIVIDUALMENTE</span> (nunca de forma colectiva, conforme al art. 29.2 CE).</li>
          </ul>
        `
      },
      {
        titulo: "2. Las Asociaciones Profesionales (RAPFAS) y el Consejo de Personal de las FAS — COPERFAS (Arts. 33 a 52)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Registro de Asociaciones Profesionales (RAPFAS — Art. 36):</strong> Habilitado en el Ministerio de Defensa (SUBDEF). Solo pueden afiliarse a ellas con plenitud de derechos los militares en <strong>servicio activo y en reserva</strong> (los retirados pueden seguir asociados sin formar parte de órganos de representación en el COPERFAS).</li>
            <li><strong>El Consejo de Personal de las Fuerzas Armadas — COPERFAS (Arts. 47 a 50):</strong> Es el órgano colegiado de participación de las asociaciones profesionales ante el Ministerio de Defensa.
              <br/>• <strong>Presidencia:</strong> Lo preside el <span class="hl-yellow">Ministro de Defensa</span> (y cuando no asista, el Subsecretario de Defensa).
              <br/>• <strong>🔥 Porcentajes de afiliación para tener representación en el COPERFAS (Art. 48.2 — ¡Pregunta fija de examen!):</strong> Deberán contar, a fecha 31 de diciembre del año anterior, con un mínimo de afiliados en servicio activo o reserva de:
              <br/>  — El <span class="hl-green">1% del total de efectivos de las FAS</span>, O BIEN (si son asociaciones de categoría):
              <br/>  — El <span class="hl-cyan">3% de los miembros de la categoría de Oficiales</span>;
              <br/>  — El <span class="hl-cyan">3% de los miembros de la categoría de Suboficiales</span>; o
              <br/>  — El <span class="hl-yellow">1,5% de los miembros de la categoría de Tropa y Marinería</span>.</li>
          </ul>
        `
      },
      {
        titulo: "3. El Observatorio de la Vida Militar (Arts. 53 a 55 LO 9/2011)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Naturaleza y adscripción (¡Ojo a la trampa!):</strong> El Observatorio de la Vida Militar es un órgano colegiado de carácter asesor y consultivo <span class="hl-pink">ADSCRITO A LAS CORTES GENERALES</span> (¡no al Ministerio de Defensa, a diferencia del Observatorio Militar para la Igualdad que está en la SUBDEF!).</li>
            <li><strong>Composición y mandato (Art. 54):</strong> Se compone de <span class="hl-yellow">9 miembros</span> de reconocido prestigio en el ámbito de la defensa, recursos humanos o derechos fundamentales: <strong>5 designados por el Congreso de los Diputados y 4 por el Senado</strong>, elegidos por un mandato de <span class="hl-green">5 AÑOS</span>. El cargo es gratuito (no perciben retribución fija). Elabora una memoria anual sobre las condiciones de vida y trabajo de los militares.</li>
          </ul>
        `
      }
    ]
  },

  "B2-T04": {
    tiempoLectura: "10 min",
    consejoJefeEstudios: "¡ESTE ES EL TEMA NÚMERO 1 DE TODA LA OPOSICIÓN! De la Ley Orgánica 8/2014 de Régimen Disciplinario de las FAS salen entre 8 y 12 preguntas todos los años. No pases al test sin haberte aprendido de memoria: 1) los días exactos de arresto y sanción económica (Leve 1-14d / Grave 15-30d / Muy Grave 31-60d), 2) la trampa de prescripción (Falta Leve = 2 meses vs Sanción Leve = 3 meses), 3) qué mando puede imponer cada sanción (¡el Jefe de Compañía NO impone arresto!) y 4) los plazos de cancelación de notas (1, 2 y 4 años).",
    actualizaciones: "Ley Orgánica 8/2014 de 4 de diciembre, vigente y consolidada.",
    epigrafes: [
      {
        titulo: "1. Catálogo Oficial de Sanciones por Faltas Leves, Graves y Muy Graves (Art. 11 LO 8/2014)",
        contenido: `
          <p>Las faltas disciplinarias se clasifican en <strong>Leves (Art. 6), Graves (Art. 7) y Muy Graves (Art. 8)</strong>. El <strong>Artículo 11</strong> establece taxativamente las únicas sanciones que pueden imponerse por cada una de ellas:</p>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>🟢 1. Sanciones por FALTA LEVE (Art. 11.1):</strong>
              <br/>• <strong>Reprensión</strong> (reproche expreso por escrito).
              <br/>• <strong>Privación de salida</strong> de la unidad de <span class="hl-green">1 a 8 DÍAS</span>.
              <br/>• <strong>Sanción económica</strong> de <span class="hl-yellow">1 a 7 DÍAS</span>. (Nota: para los alumnos de centros docentes de formación existe el arresto de 1 a 14 días o privación de salida hasta 8 días).
              <br/>• <strong>Arresto</strong> de <span class="hl-green">1 a 14 DÍAS</span> (se cumple en la unidad o en el domicilio/alojamiento según acuerde el mando sancionador).</li>
            <li><strong>🟡 2. Sanciones por FALTA GRAVE (Art. 11.2):</strong>
              <br/>• <strong>Sanción económica</strong> de <span class="hl-yellow">8 a 15 DÍAS</span>.
              <br/>• <strong>Arresto</strong> de <span class="hl-yellow">15 a 30 DÍAS</span> (se cumple en Establecimiento Disciplinario Militar).
              <br/>• <strong>Pérdida de destino</strong> (imposibilidad de solicitar nuevo destino en la misma unidad o localidad durante 2 años).
              <br/>• <strong>Baja en el Centro Docente Militar</strong> de formación.</li>
            <li><strong>🔴 3. Sanciones por FALTA MUY GRAVE (Art. 11.3):</strong>
              <br/>• <strong>Arresto</strong> de <span class="hl-pink">31 a 60 DÍAS</span> (en Establecimiento Disciplinario Militar).
              <br/>• <strong>Suspensión de empleo</strong> de <span class="hl-pink">1 MES a 1 AÑO</span> (recuerda: solo cambia la situación administrativa si supera los 6 meses).
              <br/>• <strong>Separación del servicio</strong> (para militares de carrera).
              <br/>• <strong>Resolución de compromiso</strong> (para militares con compromiso temporal o CLD).</li>
          </ul>
          <p class="mt-2">🔥 <strong>Acumulación de faltas leves (Art. 7.36):</strong> Es <strong>falta grave</strong> cometer una falta leve teniendo anotadas y sin cancelar <span class="hl-yellow">3 faltas leves</span> (cualesquiera) o <span class="hl-pink">2 faltas leves sancionadas con ARRESTO</span>.</p>
        `
      },
      {
        titulo: "2. La Súper Trampa de Prescripción de FALTAS (Art. 24) vs Prescripción de SANCIONES (Art. 25)",
        contenido: `
          <p>El tribunal pregunta este cruce casi todos los años porque cambia un único número en las leves (2 meses vs 3 meses):</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>⏳ PRESCRIPCIÓN DE LAS FALTAS (Art. 24 — plazo para castigar el hecho desde que se cometió):</strong>
              <br/>• Las faltas <strong>Leves</strong> prescriben a los <span class="hl-yellow">2 MESES</span>.
              <br/>• Las faltas <strong>Graves</strong> prescriben al <span class="hl-green">1 AÑO</span>.
              <br/>• Las faltas <strong>Muy Graves</strong> prescriben a los <span class="hl-cyan">2 AÑOS</span>.</li>
            <li><strong>⏳ PRESCRIPCIÓN DE LAS SANCIONES (Art. 25 — plazo para ejecutar la sanción desde que es firme):</strong>
              <br/>• Las sanciones impuestas por falta <strong>Leve</strong> prescriben a los <span class="hl-pink">3 MESES</span> (¡ojo, son 3 meses, no 2!).
              <br/>• Las sanciones por falta <strong>Grave</strong> prescriben al <span class="hl-green">1 AÑO</span>.
              <br/>• Las sanciones por falta <strong>Muy Grave</strong> prescriben a los <span class="hl-cyan">2 AÑOS</span>.</li>
          </ul>
        `
      },
      {
        titulo: "3. Potestad Sancionadora: ¿Qué Mando puede imponer cada Sanción? (Arts. 26 a 32 LO 8/2014)",
        contenido: `
          <p>Memoriza esta escalera de competencias sancionadoras de arriba abajo y de abajo arriba:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>1º Ministro de Defensa (Art. 27):</strong> Puede imponer CUALQUIER sanción disciplinaria, y tiene competencia exclusiva para imponer la <span class="hl-pink">Separación del Servicio</span>.</li>
            <li><strong>2º Subsecretario de Defensa (Art. 28):</strong> Puede imponer sanciones leves, graves y muy graves (excepto separación del servicio), incluyendo la <span class="hl-yellow">Resolución de Compromiso</span>.</li>
            <li><strong>3º JEMAD, JEME, AJEMA y JEMA (Art. 28):</strong> Pueden imponer leves, graves y muy graves de <strong>arresto de 31 a 60 días y suspensión de empleo</strong>.</li>
            <li><strong>4º Oficiales Generales con mando (Art. 29/31):</strong> Pueden imponer todas las sanciones por falta leve y por falta grave (salvo pérdida de destino y baja en centro docente, que corresponden a JEME/AJEMA/JEMA/SUBDEF).</li>
            <li><strong>🔥 ESCALAFÓN DE MANDOS EN UNIDAD PARA FALTAS LEVES (Art. 32 — ¡Cae siempre!):</strong>
              <br/>• <strong>Jefe de Regimiento o unidad similar (Coronel — Art. 32.3):</strong> Todas las sanciones por falta leve al completo (<span class="hl-cyan">Arresto hasta 14 días, Privación de salida hasta 8 días, Económica hasta 7 días y Reprensión</span>).
              <br/>• <strong>Jefe de Batallón, Grupo o unidad similar (Teniente Coronel / Comandante — Art. 32.4):</strong> Reprensión, Privación de salida hasta 8 días, Económica hasta 7 días y <span class="hl-green">ARRESTO HASTA 7 DÍAS</span>.
              <br/>• <strong>Jefe de Compañía, Batería, Escuadrón o unidad similar (Capitán — Art. 32.5):</strong> Reprensión, Privación de salida hasta <strong>5 DÍAS</strong> y Sanción económica hasta <strong>5 DÍAS</strong>. <span class="hl-pink">🚫 ¡PROHIBIDO OLVIDAR!: EL JEFE DE COMPAÑÍA NO PUEDE IMPONER ARRESTO DE NINGÚN DÍA</span>.
              <br/>• <strong>Jefe de Sección o Pelotón (Teniente / Suboficial — Art. 32.6):</strong> Únicamente puede imponer <span class="hl-yellow">REPRENSIÓN</span>.</li>
            <li><strong>Orden de Arresto Preventivo (Art. 41):</strong> Cualquier militar con mando o de empleo superior puede ordenar el arresto preventivo para restablecer de inmediato la disciplina por un plazo máximo de <span class="hl-pink">48 HORAS</span>.</li>
          </ul>
        `
      },
      {
        titulo: "4. Procedimientos Disciplinarios, Cancelación de Notas (Art. 65) y Recursos (Arts. 66-70)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Procedimiento por Faltas Leves (Arts. 46-47):</strong> Es preferentemente <strong>oral</strong>, con audiencia previa obligatoria del interesado, y concluye con la resolución escrita y motivada notificada al sancionado.</li>
            <li><strong>Procedimiento por Faltas Graves y Muy Graves (Arts. 48-61):</strong> Se sigue por escrito mediante expediente disciplinario con Instructor y Secretario.
              <br/>• Plazo máximo de tramitación (Art. 48): <span class="hl-yellow">3 MESES en faltas graves</span> y <span class="hl-pink">6 MESES en faltas muy graves</span>.
              <br/>• Plazo para contestar al pliego de cargos y proponer prueba (Art. 56): <span class="hl-cyan">10 DÍAS</span> (y otros 10 días tras la propuesta de resolución).</li>
            <li><strong>Ejecutividad de las sanciones (Art. 62):</strong> Las sanciones disciplinarias son <strong>inmediatamente ejecutivas</strong> y comienzan a cumplirse el mismo día en que se notifique al infractor la resolución por la que se le imponen (salvo suspensión acordada en vía de recurso).</li>
            <li><strong>🧹 Cancelación de Notas Desfavorables en la Hoja de Servicios (Art. 65 — ¡Fija!):</strong> Se cancelan de oficio o a instancia del interesado (salvo Separación del Servicio y Resolución de Compromiso) cuando transcurran sin nueva sanción:
              <br/>• Por falta <strong>Leve</strong>: <span class="hl-green">1 AÑO</span>.
              <br/>• Por falta <strong>Grave</strong>: <span class="hl-yellow">2 AÑOS</span>.
              <br/>• Por falta <strong>Muy Grave</strong>: <span class="hl-pink">4 AÑOS</span>.</li>
            <li><strong>Recursos en materia disciplinaria (Arts. 66 a 70):</strong> Se interponen por escrito en el plazo de <span class="hl-yellow">1 MES</span> desde el día siguiente a la notificación (Alzada ante la autoridad superior, o Reposición si la impuso el Ministro o la Sala de Gobierno del TMC). El plazo para resolver el recurso es de <span class="hl-cyan">2 MESES</span> (silencio negativo).</li>
          </ul>
        `
      }
    ]
  },

  "B2-T05": {
    tiempoLectura: "5 min",
    consejoJefeEstudios: "El Tema 5 (Real Decreto 176/2014 de Iniciativas y Quejas) es un tema corto y muy agradecido. En 5 minutos te aprendes quién recepciona las quejas en la unidad (Oficial, Suboficial o Cabo Mayor), los dos plazos (1 mes para quejas y 6 meses para iniciativas) y qué materias están excluidas.",
    actualizaciones: "RD 176/2014 vigente.",
    epigrafes: [
      {
        titulo: "1. Ámbito, Receptor en la Unidad y Materias Excluidas (Arts. 1 a 5 RD 176/2014)",
        contenido: `
          <p>El <strong>Real Decreto 176/2014</strong> regula el procedimiento para la presentación y tramitación de las iniciativas y quejas relativas al régimen de personal y a las condiciones de vida que pueda plantear el militar (desarrollando el art. 29 de la LO 9/2011).</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>¿Quién recepciona las iniciativas y quejas en cada Unidad? (Art. 5 — ¡Pregunta estrella!):</strong> En cada unidad se designará a un <span class="hl-yellow">Oficial, Suboficial o CABO MAYOR</span> encargado de recibir, acusar recibo, registrar y tramitar las iniciativas y quejas al Jefe de Unidad.</li>
            <li><strong>Presentación individual:</strong> Deben presentarse siempre de forma <strong>individual e identificada</strong> (nunca se admiten quejas o iniciativas colectivas ni anónimas).</li>
            <li><strong>Materias excluidas (Art. 3):</strong> Quedan excluidas las materias que dispongan de un procedimiento específico de reclamación o recurso administrativo/disciplinario, las sometidas a decisión judicial y las relativas a decisiones operativas o del mando en operaciones.</li>
          </ul>
        `
      },
      {
        titulo: "2. Diferencia y Plazos entre Iniciativas (6 Meses) y Quejas (1 Mes)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>💡 Las Iniciativas (Arts. 6 a 9):</strong> Son propuestas del militar de carácter general encaminadas a mejorar la eficacia de las unidades, el régimen de personal o las condiciones de vida. El órgano competente para resolverlas (JEME/AJEMA/JEMA/SUBDEF según materia) dispone de un plazo máximo de <span class="hl-green">6 MESES</span> para adoptar acuerdo motivado y notificarlo.</li>
            <li><strong>⚠️ Las Quejas (Arts. 10 a 13):</strong> Son reclamaciones del militar para corregir situaciones concretas que considere perjudiciales o injustas relativas a su régimen de personal o condiciones de vida en la unidad.
              <br/>• Se presentan ante el Jefe de Unidad.
              <br/>• 🔥 <span class="hl-pink">Plazo clave de 1 MES (Art. 12):</span> Si transcurre <strong>1 MES</strong> desde la presentación de la queja sin que el Jefe de Unidad haya contestado (o si el militar no está conforme con la respuesta), el interesado podrá acudir <span class="hl-yellow">DIRECTAMENTE al Mando o Jefatura de Personal de su Ejército (MAPER / JEPER)</span> o al Director General de Personal (DIGENPER), dando cuenta de ello al jefe de su unidad.</li>
          </ul>
        `
      }
    ]
  },

  "B2-T06": {
    tiempoLectura: "6 min",
    consejoJefeEstudios: "En el Tema 6 (Igualdad efectiva entre mujeres y hombres LO 3/2007 y Observatorio Militar para la Igualdad) tienes que dominar 3 conceptos que siempre caen: 1) la diferencia entre acoso sexual y acoso por razón de sexo (Art. 7), 2) el porcentaje de presencia equilibrada (40% a 60%) y 3) no confundir el Observatorio Militar para la Igualdad (adscrito a la SUBDEF) con el Observatorio de la Vida Militar (adscrito a las Cortes).",
    actualizaciones: "LO 3/2007 y Orden DEF/111/2019 (Observatorio Militar para la Igualdad).",
    epigrafes: [
      {
        titulo: "1. Ley Orgánica 3/2007 para la Igualdad Efectiva de Mujeres y Hombres: Conceptos Clave",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Discriminación directa vs indirecta (Art. 6):</strong>
              <br/>• <strong>Directa:</strong> Situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.
              <br/>• <strong>Indirecta:</strong> Situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro (salvo que pueda justificarse objetivamente con una finalidad legítima).</li>
            <li><strong>🔥 Acoso Sexual vs Acoso por Razón de Sexo (Art. 7 — ¡Cae en todos los exámenes!):</strong>
              <br/>• <strong>Acoso SEXUAL (Art. 7.1):</strong> Cualquier comportamiento, verbal o físico, de <span class="hl-pink">naturaleza sexual</span> que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.
              <br/>• <strong>Acoso POR RAZÓN DE SEXO (Art. 7.2):</strong> Cualquier comportamiento realizado <span class="hl-yellow">en función del sexo de una persona</span> (por ejemplo, trato hostil por embarazo o maternidad) con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.</li>
            <li><strong>Composición o presencia equilibrada (Disposición Adicional 1ª LO 3/2007):</strong> Se entenderá por composición equilibrada la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo <span class="hl-green">no superen el 60% ni sean menos del 40%</span>.</li>
          </ul>
        `
      },
      {
        titulo: "2. Igualdad en las Fuerzas Armadas y el Observatorio Militar para la Igualdad (Orden DEF/111/2019)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Integración de la mujer en las FAS (1988):</strong> La incorporación de la mujer a las Fuerzas Armadas españolas comenzó en el año <strong>1988</strong> (Real Decreto-ley 1/1988), alcanzando desde 1999 la plena igualdad de acceso a todos los Cuerpos, Escalas y destinos sin distinción.</li>
            <li><strong>El Observatorio Militar para la Igualdad entre mujeres y hombres en las FAS:</strong>
              <br/>• <span class="hl-cyan">Adscripción:</span> Está adscrito a la <strong>Subsecretaría de Defensa (SUBDEF)</strong> (y su secretaría recae en la División de Igualdad y Apoyo al Personal de la DIGENPER).
              <br/>• <strong>Presidencia:</strong> Lo preside la persona titular de la <strong>Subsecretaría de Defensa</strong>.
              <br/>• <strong>Reuniones:</strong> Se reúne en Pleno en sesión ordinaria al menos <span class="hl-yellow">2 VECES AL AÑO</span>.</li>
          </ul>
        `
      }
    ]
  },

  "B2-T07": {
    tiempoLectura: "5 min",
    consejoJefeEstudios: "El Tema 7 trata del Protocolo de actuación frente al acoso sexual, por razón de sexo y profesional en las FAS y las Unidades de Protección frente al Acoso (UPA). La pregunta de oro aquí es: ¿hace falta seguir el conducto reglamentario para acudir a la UPA? ¡NO! La vía es directa y confidencial.",
    actualizaciones: "Protocolo de actuación frente al acoso sexual, por razón de sexo y profesional en las FAS (Resolución 400/38199/2015 y normativa de desarrollo).",
    epigrafes: [
      {
        titulo: "1. Las Unidades de Protección frente al Acoso (UPA) y sus Garantías",
        contenido: `
          <p>El Protocolo de actuación frente al acoso en las Fuerzas Armadas establece una política de <strong>tolerancia cero</strong> ante cualquier conducta de acoso sexual, acoso por razón de sexo o acoso profesional (<em>mobbing</em>).</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Estructura de las UPA:</strong>
              <br/>• <strong>UPA Central:</strong> Ubicada en la División de Igualdad y Apoyo al Personal de la <span class="hl-cyan">Dirección General de Personal (DIGENPER - SUBDEF)</span>.
              <br/>• <strong>UPAs Específicas:</strong> Existentes en los Mandos o Jefaturas de Personal del Ejército de Tierra (<strong>MAPER</strong>), de la Armada (<strong>JEPER</strong>), del Ejército del Aire y del Espacio (<strong>MAPER</strong>) y en el EMAD.</li>
            <li><strong>🔥 Regla de Oro — Vía Directa SIN Conducto Reglamentario (¡Pregunta fija!):</strong> Cualquier militar que se considere víctima de acoso (o que tenga conocimiento de él) puede dirigirse a la UPA para recibir asesoramiento o presentar denuncia <span class="hl-yellow">DIRECTAMENTE, SIN NECESIDAD DE SEGUIR EL CONDUCTO REGLAMENTARIO</span>.</li>
            <li><strong>Principios del Protocolo:</strong> Confidencialidad absoluta y sigilo profesional, protección de la dignidad de las personas, celeridad y tramitación urgente, y <strong>garantía de indemnidad</strong> (prohibición estricta de represalias contra quien denuncie o testifique de buena fe).</li>
          </ul>
        `
      }
    ]
  },

  "B2-T08": {
    tiempoLectura: "9 min",
    consejoJefeEstudios: "El Tema 8 (Ley 39/2015 del Procedimiento Administrativo Común - LPACAP) es, junto al Disciplinario, el tema jurídico más preguntado. Lee con calma tres cosas: 1) cómo se cuentan los plazos (días hábiles excluyendo sábados, domingos y festivos), 2) qué actos son Nulos de pleno derecho (Art. 47: incompetencia por materia o territorio) frente a Anulables (Art. 48: incompetencia jerárquica) y 3) la tabla de los 3 Recursos (Alzada, Reposición y Extraordinario de Revisión).",
    actualizaciones: "Ley 39/2015 consolidada.",
    epigrafes: [
      {
        titulo: "1. Los Interesados, Obligación de Resolver (Art. 21), Silencio Administrativo (Art. 24) y Plazos (Art. 30)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Obligación de resolver y plazos máximos (Art. 21):</strong> La Administración está obligada a dictar resolución expresa y a notificarla en todos los procedimientos.
              <br/>• El plazo máximo fijado por la norma reguladora del procedimiento <span class="hl-yellow">NO podrá exceder de 6 MESES</span> (salvo que una norma con rango de Ley o de Derecho de la UE establezca uno mayor).
              <br/>• 🔥 <span class="hl-green">Plazo supletorio (Art. 21.3):</span> Cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será de <strong>3 MESES</strong>.</li>
            <li><strong>Silencio Administrativo en procedimientos iniciados a solicitud del interesado (Art. 24):</strong>
              <br/>• Regla general: silencio positivo (estimatorio), EXCEPTO en los procedimientos de ejercicio del derecho de petición, facultades sobre dominio público o servicio público, impugnación de actos y recursos (donde es desestimatorio).
              <br/>• 🔥 <span class="hl-pink">Regla del DOBLE SILENCIO en el Recurso de Alzada (Art. 24.1):</span> Cuando el recurso de alzada se haya interpuesto contra la desestimación por silencio administrativo de una solicitud, y el órgano competente tampoco lo resuelva en plazo, <strong>se entenderá ESTIMADO (silencio positivo)</strong> (salvo que se refiera a las materias excluidas de dominio público, servicio público, etc.).</li>
            <li><strong>Cómputo de Plazos (Art. 30 — ¡Muy preguntado!):</strong>
              <br/>• Siempre que por Ley o en el Derecho de la UE no se exprese otro cómputo, cuando los plazos se señalen por días se entiende que éstos son <span class="hl-yellow">HÁBILES, excluyéndose del cómputo los SÁBADOS, los DOMINGOS y los declarados FESTIVOS</span>.
              <br/>• Los plazos expresados en <strong>meses o años</strong> se computarán a partir del día siguiente a aquel en que tenga lugar la notificación o publicación, y concluirán el mismo día en que se produjo la notificación en el mes o el año de vencimiento (de fecha a fecha).</li>
          </ul>
        `
      },
      {
        titulo: "2. Los Actos Administrativos: Notificaciones (Arts. 40-43), Nulidad (Art. 47) y Anulabilidad (Art. 48)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Práctica de las Notificaciones (Arts. 40 a 43):</strong>
              <br/>• Toda notificación deberá ser cursada dentro del plazo de <span class="hl-cyan">10 DÍAS</span> a partir de la fecha en que el acto haya sido dictado (Art. 40.2).
              <br/>• <strong>Notificación en papel en el domicilio (Art. 42.2):</strong> Si nadie se hace cargo, se hará un segundo intento dentro de los <strong>3 días siguientes</strong> en una hora distinta (con un margen de diferencia de al menos 3 horas; si el primer intento fue antes de las 15:00h, el segundo deberá hacerse después de las 15:00h y viceversa).
              <br/>• <strong>Notificación por medios electrónicos (Art. 43.2):</strong> Se entenderá <span class="hl-pink">RECHAZADA cuando hayan transcurrido 10 DÍAS NATURALES</span> desde la puesta a disposición de la notificación sin que se acceda a su contenido.</li>
            <li><strong>🔥 NULIDAD DE PLENO DERECHO (Art. 47.1) vs ANULABILIDAD (Art. 48 — ¡Cruce Clásico!):</strong>
              <br/>• Son <strong>NULOS DE PLENO DERECHO (Art. 47.1 — no se pueden convalidar):</strong> a) Los que lesionen derechos y libertades susceptibles de amparo constitucional; b) <span class="hl-pink">Los dictados por órgano manifiestamente incompetente por razón de la MATERIA o del TERRITORIO</span>; c) Los que tengan un contenido imposible; d) Los que sean constitutivos de infracción penal o se dicten como consecuencia de ésta; e) Los dictados prescindiendo total y absolutamente del procedimiento legalmente establecido o de las normas que contienen las reglas esenciales para la formación de la voluntad de los órganos colegiados; f) Los actos expresos o presuntos contrarios al ordenamiento por los que se adquieren facultades o derechos careciendo de los requisitos esenciales.
              <br/>• Son <strong>ANULABLES (Art. 48 y Art. 52 — SÍ son convalidables):</strong> Los actos que incurran en cualquier otra infracción del ordenamiento jurídico, incluida la desviación de poder y la <span class="hl-green">incompetencia JERÁRQUICA</span> (que puede ser convalidada por el órgano competente cuando sea superior jerárquico del que dictó el acto).</li>
          </ul>
        `
      },
      {
        titulo: "3. Fases del Procedimiento: Iniciación, Subsanación (10d), Audiencia (10-15d) y Caducidad (3m)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Subsanación y mejora de la solicitud (Art. 68):</strong> Si la solicitud de iniciación no reúne los requisitos, se requerirá al interesado para que, en un plazo de <span class="hl-yellow">10 DÍAS</span>, subsane la falta o acompañe los documentos preceptivos (ampliable prudencialmente hasta en 5 días en procedimientos no selectivos ni de concurrencia competitiva).</li>
            <li><strong>Emisión de informes (Art. 80):</strong> Salvo disposición expresa en contrario, los informes serán <strong>facultativos y no vinculantes</strong>, y serán evacuados en el plazo de <span class="hl-cyan">10 DÍAS</span>.</li>
            <li><strong>Trámite de audiencia (Art. 82):</strong> Instruidos los procedimientos, e inmediatamente antes de redactar la propuesta de resolución, se pondrán de manifiesto a los interesados para que puedan alegar y presentar documentos en un plazo <span class="hl-green">no inferior a 10 DÍAS ni superior a 15 DÍAS</span>.</li>
            <li><strong>Terminación del procedimiento (Art. 84):</strong> Pondrán fin al procedimiento la resolución, el desistimiento, la renuncia al derecho en que se funde la solicitud, la declaración de caducidad y la imposibilidad material de continuarlo por causas sobrevenidas. En los procedimientos iniciados a solicitud del interesado, si se paraliza por su culpa, la Administración le advertirá que, transcurridos <span class="hl-pink">3 MESES</span>, se producirá la <strong>caducidad</strong> (Art. 95).</li>
          </ul>
        `
      },
      {
        titulo: "4. Revisión de Oficio y los 3 Recursos Administrativos (Arts. 106 a 126 Ley 39/2015)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Revisión de oficio de actos nulos (Art. 106) y Declaración de Lesividad de actos anulables (Art. 107):</strong> La revisión de actos nulos puede hacerse en cualquier momento (previo dictamen favorable del Consejo de Estado). En cambio, para anular un acto favorable anulable, la Administración debe declararlo previamente lesivo para el interés público antes de que transcurran <span class="hl-yellow">4 AÑOS</span> desde que se dictó (y el procedimiento de lesividad caduca a los <strong>6 meses</strong>) para luego impugnarlo ante la Jurisdicción Contencioso-Administrativa.</li>
            <li><strong>1. RECURSO DE ALZADA (Arts. 121 y 122):</strong>
              <br/>• <strong>Objeto:</strong> Contra las resoluciones y actos de trámite cualificados que <span class="hl-cyan">NO pongan fin a la vía administrativa</span>.
              <br/>• <strong>Órgano que resuelve:</strong> El <strong>superior jerárquico</strong> del órgano que los dictó.
              <br/>• <strong>Plazo de interposición:</strong> <span class="hl-yellow">1 MES</span> si el acto fuera expreso (si no fuera expreso, en cualquier momento a partir del día siguiente a aquel en que se produzcan los efectos del silencio).
              <br/>• <strong>Plazo máximo para dictar y notificar la resolución:</strong> <span class="hl-green">3 MESES</span>.</li>
            <li><strong>2. RECURSO POTESTATIVO DE REPOSICIÓN (Arts. 123 y 124):</strong>
              <br/>• <strong>Objeto:</strong> Contra los actos que <span class="hl-green">SÍ pongan fin a la vía administrativa</span>. Es potestativo (puedes interponerlo o ir directamente al juzgado contencioso-administrativo).
              <br/>• <strong>Órgano que resuelve:</strong> El <strong>mismo órgano</strong> que los hubiera dictado.
              <br/>• <strong>Plazo de interposición:</strong> <span class="hl-yellow">1 MES</span> si el acto fuera expreso (o en cualquier momento si fuera presunto).
              <br/>• <strong>Plazo máximo para resolver y notificar:</strong> <span class="hl-pink">1 MES</span>. Contra la resolución de un recurso de reposición no podrá interponerse de nuevo dicho recurso.</li>
            <li><strong>3. RECURSO EXTRAORDINARIO DE REVISIÓN (Arts. 125 y 126):</strong>
              <br/>• <strong>Objeto:</strong> Contra los <span class="hl-pink">ACTOS FIRMES en vía administrativa</span> ante el órgano administrativo que los dictó (que también será el competente para resolverlo).
              <br/>• <strong>Plazos de interposición según la causa:</strong>
              <br/>  — Causa 1ª (error de hecho que resulte de los propios documentos incorporados al expediente): dentro de los <span class="hl-yellow">4 AÑOS siguientes</span> a la fecha de la notificación de la resolución.
              <br/>  — Causas 2ª, 3ª y 4ª (documentos esenciales aparecidos después, documentos/testimonios declarados falsos por sentencia firme, o prevaricación/cohecho/violencia): dentro del plazo de <span class="hl-cyan">3 MESES</span> a contar desde el conocimiento de los documentos o desde que la sentencia judicial quedó firme.
              <br/>• <strong>Plazo para resolver:</strong> <strong>3 MESES</strong> (silencio negativo).</li>
          </ul>
        `
      }
    ]
  },

  // =========================================================================
  // BLOQUE 3: SEGURIDAD NACIONAL Y OO.II. (TEMAS B3-T01 A B3-T07)
  // =========================================================================
  "B3-T01": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "El Bloque 3 (Seguridad Nacional y Organizaciones Internacionales) supone el 26% del examen y son los puntos más fáciles de asegurar. En este Tema 1 estudiamos la Ley 36/2015 de Seguridad Nacional y la Estrategia de Seguridad Nacional 2021 (RD 1150/2021). Quédate con los 3 componentes (Defensa Nacional, Seguridad Pública y Acción Exterior), los 3 ejes de la ESN 2021 (Proteger, Promover y Participar) y quién declara la Situación de Interés para la Seguridad Nacional (el Presidente del Gobierno por Real Decreto).",
    actualizaciones: "Ley 36/2015 y Estrategia de Seguridad Nacional 2021 (RD 1150/2021) vigentes.",
    epigrafes: [
      {
        titulo: "1. Ley 36/2015 de Seguridad Nacional: Concepto, los 3 Componentes y la Estrategia",
        contenido: `
          <p>La <strong>Seguridad Nacional (Art. 3 Ley 36/2015)</strong> es la acción del Estado dirigida a proteger la libertad, los derechos y bienestar de los ciudadanos, a garantizar la defensa de España y sus principios y valores constitucionales, así como a contribuir junto a nuestros socios y aliados a la seguridad internacional en el cumplimiento de los compromisos asumidos.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Los 3 Componentes Fundamentales de la Seguridad Nacional (Art. 9 — ¡Pregunta fija!):</strong>
              <br/>1. La <span class="hl-yellow">Defensa Nacional</span>.
              <br/>2. La <span class="hl-green">Seguridad Pública</span>.
              <br/>3. La <span class="hl-cyan">Acción Exterior</span>.</li>
            <li><strong>La Estrategia de Seguridad Nacional (Art. 4):</strong> Es el marco político estratégico de referencia de la Política de Seguridad Nacional. Se elabora a iniciativa del Presidente del Gobierno, quien la somete a la aprobación del <strong>Consejo de Ministros mediante Real Decreto</strong>, y se revisará <span class="hl-yellow">cada 5 AÑOS</span> o cuando lo aconsejen las circunstancias cambiantes del entorno estratégico.</li>
          </ul>
        `
      },
      {
        titulo: "2. El Consejo de Seguridad Nacional (CSN) y la Situación de Interés para la Seguridad Nacional",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>El Consejo de Seguridad Nacional (Art. 21):</strong> En su condición de Comisión Delegada del Gobierno para la Seguridad Nacional, asiste al Presidente del Gobierno en la dirección de la Política de Seguridad Nacional.
              <br/>• <strong>Presidencia:</strong> Lo preside el <strong>Presidente del Gobierno</strong>, excepto cuando <span class="hl-yellow">Su Majestad el Rey asista a sus reuniones, en cuyo caso lo presidirá el Rey</span>.
              <br/>• <strong>Periodicidad de reuniones:</strong> Se reúne a iniciativa del Presidente del Gobierno como mínimo con carácter <span class="hl-cyan">BIMESTRAL (cada 2 meses)</span>.
              <br/>• <strong>Secretaría Técnica y órgano de trabajo permanente:</strong> El <strong>Departamento de Seguridad Nacional (DSN)</strong> (en el Gabinete de la Presidencia del Gobierno), cuyo Director ejerce como Secretario del CSN.</li>
            <li><strong>🔥 La Situación de Interés para la Seguridad Nacional (Arts. 23 y 24 — ¡Muy preguntado!):</strong> Es aquella en la que, por la gravedad de sus efectos y la dimensión, urgencia y transversalidad de las medidas para su resolución, requiere de la coordinación reforzada de las autoridades competentes bajo la dirección del Gobierno, sin llegar a requerir la declaración de los estados del artículo 116 CE.
              <br/>• <strong>¿Quién la declara? (Art. 24.1):</strong> La declara el <span class="hl-pink">PRESIDENTE DEL GOBIERNO mediante REAL DECRETO</span> (que incluye la definición de la crisis, el ámbito geográfico, la duración y el nombramiento, en su caso, de una autoridad funcional).</li>
          </ul>
        `
      },
      {
        titulo: "3. La Estrategia de Seguridad Nacional 2021 (RD 1150/2021): Lema y los 3 Ejes Estratégicos",
        contenido: `
          <p>Aprobada por el <strong>Real Decreto 1150/2021, de 28 de diciembre</strong>, bajo el lema <span class="hl-green">"Un proyecto compartido"</span>. Estructura la acción del Sistema de Seguridad Nacional en torno a <strong>3 Ejes Estratégicos (Capítulo 5)</strong>:</p>
          <ol class="list-decimal pl-5 space-y-1 mt-2 font-bold">
            <li><span class="hl-yellow">Eje 1 — PROTEGER:</span> La vida de las personas, los derechos y libertades, el orden constitucional y la preservación del medio ambiente.</li>
            <li><span class="hl-green">Eje 2 — PROMOVER:</span> Una España próspera y de bienestar, garantizando la estabilidad económica, financiera, energética y tecnológica.</li>
            <li><span class="hl-cyan">Eje 3 — PARTICIPAR:</span> En la preservación de la paz y la seguridad internacional, reforzando el compromiso con la UE, la OTAN y la ONU.</li>
          </ol>
        `
      }
    ]
  },

  "B3-T02": {
    tiempoLectura: "6 min",
    consejoJefeEstudios: "El Tema 2 estudia la Doctrina para el Empleo de las Fuerzas Armadas (PDC-01 A). Es un tema de vocabulario militar conjunto: aprende qué significa el entorno VUCA, cuáles son los 3 niveles de conducción (Estratégico, Operacional y Táctico), los 5 dominios de operación, la diferencia entre operación Conjunta y Combinada, y la filosofía del Mando Tipo Misión.",
    actualizaciones: "Publicación Doctrinal Conjunta PDC-01 (A) Doctrina para el Empleo de las FAS.",
    epigrafes: [
      {
        titulo: "1. El Entorno Operativo VUCA, los 5 Dominios y los Tipos de Operaciones (PDC-01)",
        contenido: `
          <p>La <strong>PDC-01 (A)</strong> es la publicación doctrinal de más alto nivel dentro de las Fuerzas Armadas españolas y establece los principios fundamentales que guían el empleo del instrumento militar nacional.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>El Entorno Operativo VUCA:</strong> Se caracteriza por ser <span class="hl-yellow">Volátil (Volatile), Incierto (Uncertain), Complejo (Complex) y Ambiguo (Ambiguous)</span>, donde proliferan las amenazas híbridas y las acciones en la "zona gris".</li>
            <li><strong>Los 5 Ámbitos o Dominios de Operación (Multidominio):</strong> Las operaciones se desarrollan de forma sincronizada en <strong>5 ámbitos físicos y no físicos</strong>: <span class="hl-green">1) Terrestre, 2) Marítimo, 3) Aéreo, 4) Espacial y 5) Ciberespacial</span>, actuando además sobre el <strong>Entorno Cognitivo</strong> y el espectro electromagnético.</li>
            <li><strong>Diferencia entre Operación Específica, Conjunta, Combinada e Integrada (¡Pregunta fija!):</strong>
              <br/>• <strong>Específica:</strong> Ejecutada por fuerzas de un solo Ejército.
              <br/>• <strong>Conjunta:</strong> Emplea fuerzas de <span class="hl-cyan">dos o más Ejércitos nacionales</span> (ET, Armada, EA) bajo un mando único.
              <br/>• <strong>Combinada (o Multinacional):</strong> Emplea fuerzas militares de <span class="hl-yellow">dos o más Estados / países aliados</span>.
              <br/>• <strong>Integrada (Enfoque Integral / Comprehensive Approach):</strong> Coordina las capacidades militares con otros instrumentos de poder del Estado (diplomáticos, civiles, policiales, económicos).</li>
          </ul>
        `
      },
      {
        titulo: "2. Los 3 Niveles de las Operaciones Militares y el Mando Tipo Misión (Mission Command)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Los 3 Niveles de Conducción de las Operaciones:</strong>
              <br/>1. <strong>Nivel ESTRATÉGICO:</strong> Determina los objetivos estratégicos nacionales/multinacionales. En el ámbito militar nacional lo ejerce el <span class="hl-yellow">JEMAD</span> (bajo la dirección política del Presidente y del Ministro de Defensa).
              <br/>2. <strong>Nivel OPERACIONAL:</strong> Vincula la estrategia con la táctica mediante el planeamiento y conducción de campañas y grandes operaciones. En España lo ejerce el <span class="hl-green">Comandante del Mando de Operaciones (CMOPS)</span>.
              <br/>3. <strong>Nivel TÁCTICO:</strong> En el que se planean y ejecutan las batallas, combates y enfrentamientos concretos (Mandos Componentes y Comandantes de Fuerza).</li>
            <li><strong>🔥 Filosofía del Mando Tipo Misión (Mission Command — ¡Muy preguntado!):</strong> Es el estilo de ejercicio del mando adoptado por la doctrina española y aliada. Se basa en la <strong>confianza mutua</strong> y combina la <span class="hl-pink">DIRECCIÓN CENTRALIZADA</span> (el comandante expresa con absoluta claridad su <strong>propósito</strong>, el resultado deseado y las limitaciones) con la <span class="hl-cyan">EJECUCIÓN DESCENTRALIZADA</span> (otorgando a los subordinados la máxima libertad de acción e iniciativa para decidir <em>cómo</em> cumplir la misión).</li>
          </ul>
        `
      }
    ]
  },

  "B3-T03": {
    tiempoLectura: "6 min",
    consejoJefeEstudios: "El Tema 3 trata de la Organización de las Naciones Unidas (ONU). Tienes que saberte 4 datos que caen siempre: 1) la fecha de ingreso de España (14 de diciembre de 1955), 2) los 6 órganos principales de la ONU (y que la Corte Internacional de Justicia está en La Haya, no en Nueva York), 3) los 15 miembros del Consejo de Seguridad (5 permanentes con veto + 10 por 2 años) y 4) la diferencia entre el Capítulo VI (pacífico) y el Capítulo VII (coercitivo/uso de la fuerza).",
    actualizaciones: "Carta de las Naciones Unidas (1945).",
    epigrafes: [
      {
        titulo: "1. Origen de la ONU, Ingreso de España y los 6 Órganos Principales (Carta de San Francisco, 1945)",
        contenido: `
          <p>La <strong>Carta de las Naciones Unidas</strong> se firmó en <strong>San Francisco el 26 de junio de 1945</strong> al finalizar la Conferencia de las Naciones Unidas sobre Organización Internacional, y entró en vigor el <span class="hl-yellow">24 de octubre de 1945</span> (Día de las Naciones Unidas). Su sede principal está en <strong>Nueva York</strong>.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Ingreso de España en la ONU (¡Fecha clave!):</strong> España ingresó en la ONU el <span class="hl-green">14 de diciembre de 1955</span>.</li>
            <li><strong>Los 6 Órganos Principales de la ONU (Art. 7 de la Carta):</strong>
              <br/>1. La <strong>Asamblea General</strong> (integrada por todos los 193 Estados miembros, cada uno con 1 voto).
              <br/>2. El <strong>Consejo de Seguridad</strong> (responsable primordial de mantener la paz y seguridad internacionales).
              <br/>3. El <strong>Consejo Económico y Social (ECOSOC)</strong> (integrado por <strong>54 miembros</strong> elegidos por la Asamblea General por mandatos de 3 años).
              <br/>4. El <strong>Consejo de Administración Fiduciaria</strong> (suspendió sus operaciones en 1994 tras la independencia de Palaos).
              <br/>5. La <span class="hl-cyan">Corte Internacional de Justicia (CIJ)</span>: Es el órgano judicial principal de la ONU. Tiene su sede en el Palacio de la Paz en <strong>LA HAYA (Países Bajos)</strong> (¡es el único de los 6 órganos principales que no está en Nueva York!) y está integrada por <strong>15 magistrados elegidos por 9 años</strong>.
              <br/>6. La <strong>Secretaría General</strong>, encabezada por el Secretario General (nombrado por la Asamblea General a recomendación del Consejo de Seguridad por un mandato de 5 años renovable).</li>
          </ul>
        `
      },
      {
        titulo: "2. El Consejo de Seguridad (15 Miembros) y los Capítulos VI, VII y VIII de la Carta",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Composición del Consejo de Seguridad (Art. 23):</strong> Se compone de <span class="hl-yellow">15 miembros</span>:
              <br/>• <strong>5 Miembros Permanentes con derecho de veto ("P5"):</strong> <span class="hl-pink">Estados Unidos, Federación de Rusia, China, Francia y Reino Unido</span>.
              <br/>• <strong>10 Miembros No Permanentes:</strong> Elegidos por la Asamblea General por un período de <span class="hl-green">2 AÑOS</span> (sin reelección inmediata).
              <br/>• Las decisiones del Consejo de Seguridad exigen el voto afirmativo de al menos <strong>9 de sus 15 miembros</strong> (y en las cuestiones de fondo o no procesales, ningún voto en contra de los 5 permanentes).</li>
            <li><strong>🔥 Los Capítulos de la Paz en la Carta de la ONU (¡Cruce clásico de examen!):</strong>
              <br/>• <strong>Capítulo VI (Arts. 33 a 38):</strong> <span class="hl-green">Arreglo PACÍFICO de controversias</span> (negociación, investigación, mediación, conciliación, arbitraje, arreglo judicial).
              <br/>• <strong>Capítulo VII (Arts. 39 a 51):</strong> <span class="hl-pink">Acción en caso de amenazas a la paz, quebrantamientos de la paz o actos de agresión</span> (incluye medidas coercitivas, sanciones económicas y el <strong>uso de la fuerza militar</strong>, así como el derecho inmanente de legítima defensa individual o colectiva del Art. 51).
              <br/>• <strong>Capítulo VIII (Arts. 52 a 54):</strong> <strong>Acuerdos Regionales</strong> (cooperación con organizaciones regionales de seguridad).</li>
          </ul>
        `
      }
    ]
  },

  "B3-T04": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "El Tema 4 (La OTAN) ha cambiado recientemente y el tribunal lo sabe: con la entrada de Finlandia (abril de 2023) y Suecia (marzo de 2024), la OTAN tiene hoy 32 ESTADOS MIEMBROS. Además, en la Cumbre de Madrid de junio de 2022 se aprobó el vigente Concepto Estratégico. Domina esos datos junto con los dos Mandos Estratégicos (ACO en Mons y ACT en Norfolk) y las sedes OTAN en España (CAOC Torrejón y HQ NRDC-ESP en Bétera).",
    actualizaciones: "🔥 ACTUALIZACIÓN 2024/2025: 32 Estados miembros tras la adhesión de Finlandia (miembro nº 31, 4 de abril de 2023) y Suecia (miembro nº 32, 7 de marzo de 2024). Concepto Estratégico de Madrid 2022.",
    epigrafes: [
      {
        titulo: "1. El Tratado de Washington (1949), los 32 Aliados y los Artículos 4 y 5",
        contenido: `
          <p>La <strong>Organización del Tratado del Atlántico Norte (OTAN / NATO)</strong> nació con la firma del <strong>Tratado de Washington el 4 de abril de 1949</strong> por 12 países fundadores. Su sede política y su Cuartel General se encuentran en <strong>Bruselas (Bélgica)</strong>.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>España en la OTAN:</strong> España ingresó en la Alianza el <span class="hl-yellow">30 de mayo de 1982</span> (convirtiéndose en el aliado nº 16), ratificó su permanencia en el referéndum de 1986 y se integró plenamente en la Estructura Militar de Mandos el <strong>1 de enero de 1999</strong>.</li>
            <li><strong>🔥 Los 32 Estados Miembros actuales (¡Pregunta estrella 2024/2025/2026!):</strong> Actualmente la OTAN cuenta con <span class="hl-green">32 PAÍSES ALIADOS</span>. Los últimos en incorporarse han sido: Macedona del Norte (nº 30 en 2020), <span class="hl-yellow">FINLANDIA (nº 31, el 4 de abril de 2023)</span> y <span class="hl-pink">SUECIA (nº 32, el 7 de marzo de 2024)</span>.</li>
            <li><strong>Artículos clave del Tratado de Washington:</strong>
              <br/>• <strong>Artículo 4 (Consultas):</strong> Las Partes se consultarán cuando, a juicio de cualquiera de ellas, peligre la integridad territorial, la independencia política o la seguridad de cualquiera de las Partes.
              <br/>• <strong>Artículo 5 (Cláusula de Defensa Colectiva):</strong> Un ataque armado contra una o varias de las Partes en Europa o en América del Norte se considerará como un <span class="hl-pink">ataque dirigido contra todas ellas</span> (se fundamenta en el art. 51 de la Carta de la ONU y solo se ha invocado una vez en la historia: tras los atentados del <strong>11 de septiembre de 2001</strong> contra EE.UU.).</li>
            <li><strong>El Concepto Estratégico de Madrid (Junio de 2022):</strong> Define las <strong>3 Tareas Fundamentales (Core Tasks)</strong> de la Alianza: <span class="hl-cyan">1) Disuasión y Defensa; 2) Prevención y Gestión de Crisis; y 3) Seguridad Cooperativa</span>.</li>
          </ul>
        `
      },
      {
        titulo: "2. Estructura Civil y Militar de la OTAN (ACO vs ACT) y Sedes en España",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Estructura Política y Civil:</strong>
              <br/>• El <strong>Consejo del Atlántico Norte (NAC):</strong> Es el máximo órgano de decisión política de la OTAN. Toma todas sus decisiones por <strong>unanimidad / consenso</strong>.
              <br/>• El <strong>Secretario General de la OTAN:</strong> Preside el Consejo del Atlántico Norte y dirige el Secretariado Internacional.</li>
            <li><strong>Estructura Militar Superior:</strong>
              <br/>• El <strong>Comité Militar (MC):</strong> Máxima autoridad militar de la OTAN, integrada por los Jefes de Estado Mayor de la Defensa (CHOD / JEMAD) de los 32 países aliados.
              <br/>• <strong>Los 2 Mandos Estratégicos de la Estructura de Mandos de la OTAN (¡Muy preguntado!):</strong>
              <br/>  1. ⚔️ <strong>Mando Aliado de Operaciones (ACO — Allied Command Operations):</strong> Al mando del SACEUR, con Cuartel General en <span class="hl-yellow">SHAPE (Mons, Bélgica)</span>. De él dependen los 3 Mandos de Fuerzas Conjuntas (JFC): <strong>JFC Brunssum (Países Bajos), JFC Nápoles (Italia) y JFC Norfolk (EE.UU.)</strong>, además de los Mandos Componentes Terrestre (LANDCOM - Izmir), Marítimo (MARCOM - Northwood) y Aéreo (AIRCOM - Ramstein).
              <br/>  2. 🔄 <strong>Mando Aliado de Transformación (ACT — Allied Command Transformation):</strong> Al mando del SACT, con sede en <span class="hl-green">Norfolk (Virginia, EE.UU.)</span>, responsable de la doctrina, innovación y transformación de las capacidades aliadas.</li>
            <li><strong>🇪🇸 Sedes y Cuarteles OTAN en territorio español (¡Ojo a la diferencia entre Estructura de Mandos y Estructura de Fuerzas!):</strong>
              <br/>• <strong>CAOC Torrejón (Centro de Operaciones Aéreas Combinadas — Torrejón de Ardoz, Madrid):</strong> Pertenece a la <span class="hl-cyan">Estructura de MANDOS</span> de la OTAN (subordinado a AIRCOM Ramstein), encargado de la vigilancia y defensa del espacio aéreo del flanco sur europeo.
              <br/>• <strong>HQ NRDC-ESP (Cuartel General Terrestre de Alta Disponibilidad — Bétera, Valencia):</strong> Pertenece a la <span class="hl-yellow">Estructura de FUERZAS</span> de la OTAN.
              <br/>• <strong>COE C-IED (Hoyo de Manzanares, Madrid):</strong> Centro de Excelencia contra Artefactos Explosivos Improvisados.</li>
          </ul>
        `
      }
    ]
  },

  "B3-T05": {
    tiempoLectura: "5 min",
    consejoJefeEstudios: "La OSCE (Tema 5 del Bloque 3) se estudia en 5 minutos y siempre cae 1 o 2 preguntas muy directas: nació en el Acta Final de Helsinki (1975) como CSCE, pasó a llamarse OSCE en la Cumbre de Budapest (1994), tiene 57 Estados participantes, su sede está en VIENA (Austria), decide por CONSENSO y trabaja en 3 dimensiones o 'cestas'.",
    actualizaciones: "Estructura y 57 Estados participantes de la OSCE.",
    epigrafes: [
      {
        titulo: "1. Origen (Helsinki 1975 / Budapest 1994), los 57 Estados y Sede en Viena",
        contenido: `
          <p>La <strong>Organización para la Seguridad y la Cooperación en Europa (OSCE)</strong> es la organización regional de seguridad más grande del mundo (al amparo del Capítulo VIII de la Carta de la ONU). Abarca desde Vancouver hasta Vladivostok.</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Origen histórico (¡Pregunta frecuente!):</strong> Tiene su origen en la <strong>Conferencia sobre la Seguridad y la Cooperación en Europa (CSCE)</strong> que culminó con la firma del <span class="hl-yellow">Acta Final de Helsinki el 1 de agosto de 1975</span>. En la <strong>Cumbre de Budapest de diciembre de 1994</strong> se acordó transformarla en organización permanente bajo el nombre de <strong>OSCE</strong> (con efectos desde el 1 de enero de 1995).</li>
            <li><strong>Estados participantes y Sede:</strong> Cuenta con <span class="hl-green">57 Estados participantes</span> de América del Norte, Europa y Asia Central (España es miembro fundador desde 1973/1975). La sede de su Secretariado y de su Consejo Permanente está en <span class="hl-cyan">VIENA (Austria)</span>.</li>
            <li><strong>Toma de decisiones y Presidencia en Ejercicio:</strong> Todos los 57 Estados tienen igual estatus y las decisiones se adoptan por <span class="hl-pink">CONSENSO</span> (tienen carácter políticamente vinculante). La <strong>Presidencia en Ejercicio</strong> rota anualmente (1 año) recayendo en el Ministro de Asuntos Exteriores del país designado (España ejerció la Presidencia en el año <strong>2007</strong>).</li>
          </ul>
        `
      },
      {
        titulo: "2. Las 3 Dimensiones ('Cestas') de la Seguridad y Órganos de la OSCE",
        contenido: `
          <p>La OSCE aplica un enfoque integral y cooperativo de la seguridad estructurado en <strong>3 Dimensiones (históricamente llamadas las "3 Cestas" de Helsinki)</strong>:</p>
          <ol class="list-decimal pl-5 space-y-1 mt-2 font-bold">
            <li><span class="hl-yellow">1ª Dimensión Político-Militar:</span> Control de armamentos, desarme, prevención de conflictos y Medidas de Fomento de la Confianza y la Seguridad (MFCS, Documento de Viena).</li>
            <li><span class="hl-green">2ª Dimensión Económica y Medioambiental:</span> Cooperación económica, buen gobierno, seguridad energética y protección medioambiental.</li>
            <li><span class="hl-cyan">3ª Dimensión Humana:</span> Promoción y defensa de los derechos humanos, libertades fundamentales, Estado de derecho y observación electoral.</li>
          </ol>
          <p class="mt-2"><strong>Órganos e instituciones clave:</strong> Las Cumbres de Jefes de Estado/Gobierno, el Consejo Ministerial (reunión anual de Ministros de Exteriores), el <strong>Consejo Permanente</strong> (semanal en Viena), el <strong>Foro de Cooperación para la Seguridad (FCS)</strong>, la Asamblea Parlamentaria (Copenhague) y la <strong>Oficina de Instituciones Democráticas y Derechos Humanos (ODIHR — sede en Varsovia, Polonia)</strong>.</p>
        `
      }
    ]
  },

  "B3-T06": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "En el Tema 6 (La Unión Europea y la PCSD) hay un cruce que el tribunal pregunta prácticamente todos los años: la diferencia entre el Artículo 42.7 del TUE (Cláusula de Asistencia Mutua ante AGRESIÓN ARMADA) y el Artículo 222 del TFUE (Cláusula de Solidaridad ante ATAQUE TERRORISTA o CATÁSTROFE). Además, recuerda las 7 Instituciones oficiales (Art. 13 TUE), el Centro de Satélites SATCEN en Torrejón y la Brújula Estratégica (5.000 efectivos).",
    actualizaciones: "27 Estados miembros. Brújula Estratégica de la UE (Strategic Compass, 2022).",
    epigrafes: [
      {
        titulo: "1. Los Tratados de la Unión Europea, los 27 Estados Miembros y las 7 Instituciones (Art. 13 TUE)",
        contenido: `
          <p>La Unión Europea se fundamenta en dos tratados constitutivos con el mismo valor jurídico tras las reformas del <strong>Tratado de Maastricht (1992)</strong> y del <strong>Tratado de Lisboa (firmado en 2007, en vigor el 1 de diciembre de 2009)</strong>: el <strong>Tratado de la Unión Europea (TUE)</strong> y el <strong>Tratado de Funcionamiento de la Unión Europea (TFUE)</strong>. Actualmente está integrada por <span class="hl-yellow">27 Estados miembros</span> (tras la salida del Reino Unido en 2020). España ingresó el <span class="hl-green">1 de enero de 1986</span>.</p>
          <p class="mt-2"><strong>Las 7 Instituciones Oficiales de la Unión Europea (Art. 13 TUE — ¡No confundir entre sí!):</strong></p>
          <ol class="list-decimal pl-5 space-y-1 mt-1">
            <li><strong>El Parlamento Europeo:</strong> Representa directamente a los ciudadanos de la Unión (elegido cada 5 años; ejerce junto al Consejo la función legislativa y presupuestaria).</li>
            <li><strong>El Consejo Europeo:</strong> Compuesto por los <strong>Jefes de Estado o de Gobierno</strong> de los 27 países, su Presidente permanente y el Presidente de la Comisión. Define las orientaciones y prioridades políticas generales, pero <span class="hl-pink">NO ejerce función legislativa alguna</span>.</li>
            <li><strong>El Consejo (o Consejo de la Unión Europea):</strong> Compuesto por un representante de cada Estado miembro de rango ministerial. Ejerce conjuntamente con el Parlamento la función legislativa y presupuestaria.</li>
            <li><strong>La Comisión Europea:</strong> Promueve el interés general de la Unión, ostenta el monopolio casi exclusivo de la iniciativa legislativa, ejecuta el presupuesto y es la "guardiana de los Tratados".</li>
            <li><strong>El Tribunal de Justicia de la Unión Europea (TJUE):</strong> Con sede en Luxemburgo.</li>
            <li><strong>El Banco Central Europeo (BCE):</strong> Con sede en Fráncfort.</li>
            <li><strong>El Tribunal de Cuentas:</strong> Con sede en Luxemburgo.</li>
          </ol>
        `
      },
      {
        titulo: "2. La Política Común de Seguridad y Defensa (PCSD), Cláusulas 42.7 TUE vs 222 TFUE y Brújula Estratégica",
        contenido: `
          <p>La <strong>PCSD</strong> forma parte integrante de la Política Exterior y de Seguridad Común (PESC), dirigida por el <strong>Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad</strong> (quien también es Vicepresidente de la Comisión y preside el Consejo de Asuntos Exteriores).</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>🔥 EL GRAN CRUCE DE EXAMEN: Art. 42.7 TUE vs Art. 222 TFUE:</strong>
              <br/>• <strong>Cláusula de Asistencia Mutua (Artículo 42.7 del TUE):</strong> Si un Estado miembro es objeto de una <span class="hl-pink">AGRESIÓN ARMADA en su territorio</span>, los demás Estados miembros tendrán la obligación de prestarle ayuda y asistencia con todos los medios a su alcance, de conformidad con el artículo 51 de la Carta de la ONU.
              <br/>• <strong>Cláusula de Solidaridad (Artículo 222 del TFUE):</strong> La Unión y sus Estados miembros actuarán conjuntamente con espíritu de solidaridad si un Estado miembro es objeto de un <span class="hl-yellow">ATAQUE TERRORISTA o víctima de una CATÁSTROFE natural o de origen humano</span>.</li>
            <li><strong>Órganos y Agencias militares de la UE:</strong>
              <br/>• <strong>Comité Político y de Seguridad (CPS / COPS)</strong>, <strong>Comité Militar de la UE (CMUE / EUMC)</strong> y <strong>Estado Mayor de la UE (EMUE / EUMS)</strong>.
              <br/>• <strong>Agencia Europea de Defensa (EDA):</strong> Sede en Bruselas.
              <br/>• <span class="hl-cyan">Centro de Satélites de la Unión Europea (SATCEN): Tiene su sede en España, en la Base Aérea de TORREJÓN DE ARDOZ (Madrid)</span>.
              <br/>• <strong>PESCO (Cooperación Estructurada Permanente):</strong> Marco para los Estados que asumen compromisos más vinculantes en capacidades de defensa.</li>
            <li><strong>La Brújula Estratégica (Strategic Compass, marzo de 2022):</strong> Plan de acción de seguridad y defensa de la UE hasta 2030. Se articula en 4 pilares (<em>Actuar, Asegurar, Invertir y Asociarse</em>) e impulsa la <strong>Capacidad de Despliegue Rápido de la UE (RDC)</strong> de hasta <span class="hl-green">5.000 efectivos</span> para escenarios de crisis.</li>
          </ul>
        `
      }
    ]
  },

  "B3-T07": {
    tiempoLectura: "7 min",
    consejoJefeEstudios: "Cerramos el temario con el Tema 7 del Bloque 3: España en Misiones Internacionales. Aquí es fundamental estar al día de 2024/2025/2026: España acaba de asumir el liderazgo como 'Nación Marco' (Framework Nation) de la Brigada Multinacional de la OTAN en ESLOVAQUIA (Lešť). Conoce también el inicio histórico en 1989 (Angola y Namibia), Líbano (FINUL Libre Hidalgo), Atalanta (con Cuartel General en Rota) y Letonia (Adazi).",
    actualizaciones: "🔥 NOVEDAD 2024/2025/2026: España lidera desde julio de 2024 como 'Nación Marco' (Framework Nation) el Grupo de Combate / Brigada Multinacional de la OTAN en ESLOVAQUIA (campo de maniobras de Lešť). Finalización del despliegue de entrenamiento EUTM Mali.",
    epigrafes: [
      {
        titulo: "1. Marco Legal (LO 5/2005) e Inicio Histórico de las Misiones en el Exterior (1989)",
        contenido: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Requisito legal para misiones en el exterior (Art. 17 y 19 LO 5/2005):</strong> Para que el Gobierno ordene la participación de las Fuerzas Armadas en operaciones en el exterior que no estén directamente relacionadas con la defensa de España o del interés nacional, se requiere la <span class="hl-pink">consulta previa y la AUTORIZACIÓN DEL CONGRESO DE LOS DIPUTADOS</span>. Además, deben realizarse conforme a resoluciones de la ONU, o en el marco de la OTAN, la UE o la OSCE.</li>
            <li><strong>Inicio histórico en 1989 (¡Pregunta clásica!):</strong> La participación de militares españoles en misiones internacionales de paz comenzó en el año <span class="hl-yellow">1989</span> con el despliegue de observadores de la ONU en <strong>ANGOLA (misión UNAVEM I)</strong> y un contingente del Ejército del Aire en <strong>NAMIBIA (misión UNTAG)</strong>. En 1991 se produjo el primer despliegue de una unidad tipo Agrupación Táctica en el Kurdistán iraquí (Operación <em>Provide Comfort / Alfa-Kilo</em>) y en 1992 en Bosnia y Herzegovina (UNPROFOR).</li>
          </ul>
        `
      },
      {
        titulo: "2. Principales Misiones Actuales de las FAS Españolas bajo Bandera de OTAN, ONU y UE (2024–2026)",
        contenido: `
          <p>El tribunal suele pedir que relaciones el nombre de la operación, el país y la organización internacional a la que pertenece:</p>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>🧭 MISIONES EN EL MARCO DE LA OTAN (Disuasión en el Flanco Este y Apoyo):</strong>
              <br/>• 🔥 <strong>ESLOVAQUIA (Base de Lešť — ¡GRAN NOVEDAD 2024/2025!):</strong> Desde julio de 2024, España ejerce como <span class="hl-yellow">"Nación Marco" (Framework Nation)</span> liderando la Brigada / Grupo de Combate Multinacional de la OTAN en Eslovaquia (relevando a República Checa).
              <br/>• <strong>LETONIA (Base de Adazi):</strong> Participación con un subgrupo táctico mecanizado/acorazado, artillería e ingenieros en la <em>Presencia Avanzada Reforzada (eFP)</em> de la OTAN (liderada allí por Canadá).
              <br/>• <strong>RUMANÍA y PAÍSES BÁLTICOS:</strong> Destacamentos del Ejército del Aire en <em>Policía Aérea del Báltico (BAP)</em> y vigilancia radar, más la batería de misiles <em>Patriot</em> en <strong>Adana (Turquía)</strong> (Operación <em>Active Fence</em>) y las Agrupaciones Navales Permanentes (SNMG / SNMCMG) y Operación <em>Sea Guardian</em> en el Mediterráneo.
              <br/>• <strong>IRAK (Misión de la OTAN en Irak - NMI y Coalición Inherent Resolve):</strong> Asesoramiento y adiestramiento a las fuerzas iraquíes ( España ejerció el mando de la misión NMI en Bagdad entre 2023 y 2024).</li>
            <li><strong>🇺🇳 MISIONES EN EL MARCO DE LAS NACIONES UNIDAS (ONU):</strong>
              <br/>• <strong>LÍBANO — FINUL / UNIFIL (Operación "Libre Hidalgo"):</strong> Despliegue ininterrumpido desde septiembre de 2006 en el Sector Este del sur del Líbano, con sede en la <span class="hl-green">Base "Miguel de Cervantes" (cerca de Marjayoun)</span>. Un general español ha ejercido además como Jefe de la Misión y Comandante de la Fuerza de FINUL (2022–2025).
              <br/>• <strong>COLOMBIA:</strong> Observadores militares en la Misión de Verificación de la ONU.</li>
            <li><strong>🇪🇺 MISIONES EN EL MARCO DE LA UNIÓN EUROPEA (PCSD):</strong>
              <br/>• <strong>OCÉANO ÍNDICO / SOMALIA — Operación EUNAVFOR "Atalanta":</strong> Lucha contra la piratería frente a las costas de Somalia y Cuerno de África (con la fragata de la Armada y el destacamento aéreo <em>Orión / Dédalo</em> en Yibuti). 🔥 <span class="hl-cyan">¡Dato clave de examen!: El Cuartel General Operacional (OHQ) de la Operación Atalanta está en España, en la Base Naval de ROTA (Cádiz)</span>.
              <br/>• <strong>SOMALIA (EUTM Somalia) y REPÚBLICA CENTROAFRICANA (EUTM RCA):</strong> Misiones de entrenamiento militar de la UE, además de <strong>EUFOR "Althea"</strong> en Bosnia y Herzegovina y presencia marítima coordinada en el Golfo de Guinea.</li>
          </ul>
        `
      }
    ]
  }
};
