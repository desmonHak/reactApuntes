React se puede ejecutar desde un archivo HTML puro usando etiquetas `<script>`, aunque esta no es la forma convencional:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>React + JSX + Babel</title>
  
  <!-- React y ReactDOM -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  
  <!-- Babel Standalone (transpilador de JSX en el navegador) -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  
  <!-- IMPORTANTE: type="text/babel" para que Babel procese JSX -->
  <script type="text/babel">
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(
      <>
        <h1>Hola desde JSX!</h1>
        <p>Esto se transformó con Babel.</p>
      </>
    );
  </script>
</body>
</html>

```

**`<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js">`** carga ``React core`` desde ``CDN unpkg``:
- `crossorigin`: permite manejo de errores ``CORS``
- `umd/react.development.js`: versión desarrollo ``UMD`` (funciona en cualquier navegador)

**`<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">`** ``ReactDOM`` para renderizar al DOM real.

**`<script src="https://unpkg.com/@babel/standalone/babel.min.js">`** ``Babel standalone``: transpila ``JSX`` → JS en tiempo real en navegador.

`createRoot` (nuevo método concurrente): **`root.render(<> ... </>)`** renderiza JSX al `#root`:
- `<>` y `</>` son **React Fragments** (envuelven múltiples elementos sin `<div>` extra).
	- **`<h1>Hola desde JSX!</h1>`** JSX → `React.createElement('h1', null, 'Hola desde JSX!')`.
	- **`<p>Esto se transformó con Babel.</p>`** JSX → `React.createElement('p', null, 'Esto se transformó con Babel.')`.

![[Pasted image 20260211053322.png]]

----
Normalmente para usar React se hace un proyecto usando `npm` (https://www.npmjs.com/)`, aqui usamos Vite:
```bash
npm create vite@latest mi-app -- --template react
cd mi-app
npm install
npm run dev
```
- Babel se configura **automáticamente** (`.babelrc` o en `vite.config.js`).
- Escribe JSX en tus archivos `.jsx` y listo.

----

# Que es Vite
**Vite** es una herramienta moderna de desarrollo ``frontend`` creada por Evan You (creador de ``Vue.js``). Reemplaza a herramientas más lentas como ``Webpack`` o ``Create React App``.

## ¿Qué hace Vite?
Vite tiene **dos partes principales**:
- **Servidor de desarrollo**: Ultra-rápido usando ES Modules nativos del navegador.
- **Build de producción**: Usa ``Rollup`` para generar archivos optimizados.

## ¿Por qué usarlo? (Ventajas clave)

|Ventaja|Beneficio|
|---|---|
|**Velocidad extrema**|Servidor arranca en <1s, HMR en milisegundos|
|**Hot Module Replacement**|Solo actualiza lo que cambiaste|
|**Cero configuración**|`npm create vite` y ya funciona|
|**JSX/TypeScript automático**|Sin babel-loader lento|
|**Build optimizado**|Rollup + esbuild = bundles pequeños|

## Comparación real (tiempos típicos)
```
Create React App: 20-40s inicio + 5-10s HMR
Vite: 1-2s inicio + 20-100ms HMR
```

## Casos ideales para Vite

PERFECTO PARA:
• Proyectos ``React``/``Vue``/``Svelte``
• Prototipos rápidos
• Equipos que odian esperar
• Proyectos grandes (``HMR`` sigue rápido)

NO USAR:
• Proyectos que necesiten ``polyfills`` extremos
• ``IE11`` (aunque hay plugins)

También podemos usar `Vite` de la siguiente manera:
```bash
npm create vite@latest mi-react-app -- --template react
cd mi-react-app
```

- Instala dependencias:
```
npm install
```

- Ejecuta el servidor de desarrollo
```bash
npm run dev
```
Se abre `http://localhost:5173` automáticamente

## Estructura que genera Vite
```bash
mi-react-app/
├── src/
│   ├── App.jsx          ← Aquí escribes JSX
│   ├── App.css
│   ├── index.css
│   └── main.jsx         ← Punto de entrada
├── index.html           ← HTML principal
├── package.json
├── vite.config.js       ← Configuración (opcional)
└── ...
```

## Ejemplo en `src/App.jsx`
Abre `src/App.jsx` y cámbialo por esto (JSX puro):
```js
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React + JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
```

## Comandos útiles

|Acción|Comando|
|---|---|
|Desarrollo (hot reload)|`npm run dev`|
|Build para producción|`npm run build`|
|Vista previa del build|`npm run preview`|
## ¿Por qué Vite + React?

- **Hot Module Replacement (HMR)**: Cambios se ven en <1s.
- **JSX automático**: Escribe `.jsx`, Vite lo procesa con Babel/esbuild.
- **Cero config**: Funciona ya mismo.
- **Rápido**: Más que Create React App.
