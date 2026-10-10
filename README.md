# 🎖️ Permanencia FAS — Ejército de Tierra (WebApp)

Plataforma Single Page Application (SPA) diseñada para la preparación del examen de oposición a una relación de servicios de carácter permanente (**Permanencia de Tropa — Ejército de Tierra**).

## 🚀 Características Principales

1. **Cuadro de Mando Militar**: Escalafón por puntos de experiencia (`XP`), racha diaria de estudio (`🔥`), precisión neta media y parte de simulacros recientes.
2. **Motor de Simulacro Oficial**:
   - Fórmula oficial del BOD: $$\text{Nota Directa} = \text{Aciertos} - \frac{\text{Errores}}{3}$$
   - Botón **Dejar en blanco** (no penaliza).
   - Marcador de preguntas dudosas (`🚩`) y parrilla táctica de navegación rápida.
   - Justificación legal detallada de cada pregunta tras entregar el examen.
3. **Estudio por Bloques Oficiales**:
   - **Bloque 1**: Organización (CE 1978, MINISDEF, Estructura FAS y ET, Reales Ordenanzas RD 96/2009).
   - **Bloque 2**: Jurídico-Social (Ley Carrera Militar 39/2007, Tropa y Marinería 8/2006, Régimen Disciplinario LO 8/2014, Derechos y Deberes LO 9/2011).
   - **Bloque 3**: Seguridad Nacional (Ley 36/2015, ESN, OTAN, Unión Europea y ONU).
4. **Bolsa Persistente de Fallos & Flashcards**:
   - Almacena automáticamente cada fallo cometido en los simulacros y permite entrenarlos hasta acertarlos 2 veces consecutivas.
   - Tarjetas interactivas 3D con plazos de prescripción, arrestos, artículos clave y sedes de mandos.
5. **Sincronización con NotebookLM y Backup Local**:
   - Generador de prompt integrado para **NotebookLM** / IA que transforma tus PDFs del BOE/BOD en baterías de preguntas JSON listas para importar.
   - Exportación e importación de copia de seguridad completa (`.json`) para sincronizar entre PC y teléfono móvil.

## 💻 Ejecución en Local

```bash
npm start
# o directamente:
node server.js
```

Abre `http://localhost:3000` en tu navegador.
Si tu móvil está conectado al mismo WiFi, podrás abrir la dirección IP local mostrada en la terminal.

## 🌐 Despliegue en Internet (Móvil 24/7)

### Opción A: Vercel (Instantáneo)
```bash
npx vercel
```

### Opción B: GitHub Pages
1. Sube este repositorio a tu cuenta de GitHub.
2. Ve a **Settings ➔ Pages**.
3. En **Branch**, selecciona `main` (o `master`) y carpeta `/ (root)` y pulsa **Save**.
