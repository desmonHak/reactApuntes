
----

**Vite** es una herramienta moderna de desarrollo ``frontend`` creada por ``Evan You`` (creador de ``Vue.js``). Reemplaza a herramientas más lentas como ``Webpack`` o ``Create React App``(La forma oficial de crear apps en React). 

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
