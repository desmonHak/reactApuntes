**Babel** es un **transpilador de JavaScript** que convierte código moderno (ES6+, JSX, TypeScript) en JavaScript compatible con navegadores y Node.js antiguos.

1. **Transforma sintaxis moderna**:
```js
// ES6+ (no funciona en navegadores viejos)
const sumar = (a, b) => a + b;

// Babel lo convierte a:
var sumar = function(a, b) { return a + b; };
```

**Convierte JSX**:
```js
// JSX
<h1>Hola</h1>

// Babel → React.createElement
React.createElement("h1", null, "Hola");
```

- **Añade polyfills** (funcionalidades faltantes).

----

Babel es usado por algunos empaquetadores de aplicaciones de forma automática, otra alternativa es [SWC](https://swc.rs/playground)