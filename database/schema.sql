-- =========================================================================
-- ESQUEMA DE BASE DE DATOS OFICIAL - PERMANENCIA FAS (EJÉRCITO DE TIERRA)
-- Motor: PostgreSQL / Supabase
-- =========================================================================

-- 1. TABLA DE BLOQUES Y TEMAS DEL TEMARIO OFICIAL
CREATE TABLE IF NOT EXISTS temario_temas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo VARCHAR(20) UNIQUE NOT NULL,          -- Ej: 'B1-T01', 'B2-T03'
  bloque VARCHAR(60) NOT NULL,                 -- 'Bloque 1: Organización', 'Bloque 2: Jurídico-Social', 'Bloque 3: Seguridad Nacional'
  numero_tema INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,                -- Ej: 'Constitución Española de 1978'
  normativa_referencia VARCHAR(255),           -- Ej: 'CE 1978 / RD 96/2009 / LO 8/2014'
  resumen_ejecutivo TEXT,                      -- Resumen táctico directo al grano
  puntos_calientes JSONB DEFAULT '[]'::jsonb,  -- Artículos, plazos y datos más preguntados en examen
  trampas_frecuentes JSONB DEFAULT '[]'::jsonb,-- Confusiones habituales que pone el tribunal
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLA DE PREGUNTAS (BANCO GENERAL + PREGUNTAS TRAMPA + EXÁMENES OFICIALES)
CREATE TABLE IF NOT EXISTS preguntas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_externo VARCHAR(50) UNIQUE,           -- Ej: 'B1-001', 'OFICIAL-2023-045'
  tema_id UUID REFERENCES temario_temas(id) ON DELETE SET NULL,
  bloque VARCHAR(60) NOT NULL,
  materia VARCHAR(120) NOT NULL,
  pregunta TEXT NOT NULL,
  opciones JSONB NOT NULL,                     -- Array de 4 strings: ["Opción A", "Opción B", "Opción C", "Opción D"]
  correcta INT NOT NULL CHECK (correcta BETWEEN 0 AND 3),
  justificacion TEXT NOT NULL,
  referencia VARCHAR(150),                     -- Ej: 'LO 8/2014, Art. 11'
  dificultad VARCHAR(20) DEFAULT 'media',      -- 'facil', 'media', 'alta', 'trampa'
  es_examen_oficial BOOLEAN DEFAULT FALSE,
  anio_convocatoria INT,                       -- Ej: 2021, 2022, 2023, 2024, 2025
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLA DE TARJETAS FLASHCARDS
CREATE TABLE IF NOT EXISTS flashcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo VARCHAR(40) UNIQUE,
  tema_id UUID REFERENCES temario_temas(id) ON DELETE SET NULL,
  bloque VARCHAR(60) NOT NULL,
  concepto VARCHAR(180) NOT NULL,
  frente TEXT NOT NULL,
  reverso TEXT NOT NULL,
  clave VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLA DE CONVOCATORIAS / EXÁMENES OFICIALES HISTÓRICOS
CREATE TABLE IF NOT EXISTS convocatorias_oficiales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  anio INT UNIQUE NOT NULL,                    -- Ej: 2023, 2024
  titulo VARCHAR(150) NOT NULL,                -- Ej: 'Convocatoria Oficial Permanencia ET 2024'
  tiempo_minutos INT DEFAULT 100,
  nota_corte_referencia NUMERIC(5,2),          -- Nota de corte orientativa de ese año
  observaciones TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TABLA DE PERFILES DE ESTUDIO Y PROGRESO (SINCRONIZACIÓN PC <-> MÓVIL)
CREATE TABLE IF NOT EXISTS progreso_usuarios (
  usuario_id UUID PRIMARY KEY,                 -- Vinculado a auth.users o perfil único del opositor
  alias_militar VARCHAR(80) DEFAULT 'Soldado',
  xp INT DEFAULT 150,
  racha_dias INT DEFAULT 1,
  ultima_fecha_activo DATE DEFAULT CURRENT_DATE,
  total_respondidas INT DEFAULT 0,
  total_aciertos INT DEFAULT 0,
  total_errores INT DEFAULT 0,
  total_blancos INT DEFAULT 0,
  simulacros_completados INT DEFAULT 0,
  flashcards_dominadas JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TABLA DE BOLSA DE PREGUNTAS FALLADAS PERSISTENTE EN NUBE
CREATE TABLE IF NOT EXISTS bolsa_fallos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL,
  pregunta_codigo VARCHAR(50) NOT NULL,
  intentos_fallidos INT DEFAULT 1,
  aciertos_consecutivos INT DEFAULT 0,
  ultima_opcion_marcada INT,
  ultimo_fallo_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(usuario_id, pregunta_codigo)
);

-- 7. TABLA DE HISTORIAL DE SIMULACROS
CREATE TABLE IF NOT EXISTS historial_simulacros (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL,
  modo VARCHAR(40) NOT NULL,                   -- 'official', 'bloque', 'failed_bag', 'trampas'
  bloque_filtro VARCHAR(60) DEFAULT 'ALL',
  total_preguntas INT NOT NULL,
  aciertos INT NOT NULL,
  errores INT NOT NULL,
  blancos INT NOT NULL,
  puntuacion_directa NUMERIC(6,2) NOT NULL,    -- Fórmula: Aciertos - (Errores / 3)
  nota_sobre_10 NUMERIC(4,2) NOT NULL,
  apto BOOLEAN NOT NULL,
  tiempo_segundos INT NOT NULL,
  fecha TIMESTAMPTZ DEFAULT NOW()
);

-- ÍNDICES TÁCTICOS PARA CONSULTAS INSTANTÁNEAS DESDE EL MÓVIL
CREATE INDEX IF NOT EXISTS idx_preguntas_bloque ON preguntas(bloque);
CREATE INDEX IF NOT EXISTS idx_preguntas_tema ON preguntas(tema_id);
CREATE INDEX IF NOT EXISTS idx_preguntas_dificultad ON preguntas(dificultad);
CREATE INDEX IF NOT EXISTS idx_preguntas_oficial ON preguntas(es_examen_oficial, anio_convocatoria);
