``React`` se puede ejecutar desde un archivo HTML puro usando etiquetas `<script>`, aunque esta no es la forma convencional:

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
# Otros enlaces:

- [[RECURSOS]]
- [[Que es Vite]]
- [[Que es Babel]]
- [[Creando un primer proyecto]]