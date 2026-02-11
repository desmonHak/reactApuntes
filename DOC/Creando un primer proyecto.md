1. `npm init -y`
Esto inicializa nuestro proyecto y crea un ``package.json``
2. ``mkdir projects``
Creamos una carpeta de ``projects`` (proyectos)
3. `cd projects`
Entramos dentro de la carpeta de proyectos
4. `npm create vite@latest`
![[Pasted image 20260211061511.png]]Al lanzar el comando nos preguntara, cual es el nombre del proyecto, cual es el framework a usar y cual será la variante, aqui cogeremos ``JavaScript + SWC``
5. `cd 00-hola-mundo` (si has llamando al proyecto como yo)
6. `npm install` 
Instalamos las dependencias.
7. `npm run dev`
Permite ejecutar/lanzar el proyecto:
![[Pasted image 20260211061833.png]]

----
Al crear el proyecto se nos habra generado una serie de archivos:
![[Pasted image 20260211062121.png]]
El punto de entrada en la aplicación es `main.jsx` que contendrá algo similar a esto:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
Aqui importamos React, el ``ReactDOM``, el código CSS y el código JSX al que saltamos.
React funciona creando componentes y organizándolos en forma de árbol, por tanto, es necesario definir la Raíz (``root``) desde la que colgara los demás componentes, este componente `root`esta definido en el HTML como un ``div`` normalmente, por tanto todo el código JSX se ira colgando de ahi:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>00-hola-mundo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

----
React no permite renderizar mas de un componente, por lo tanto, si hacemos esto, solo podremos renderizar un único botón:
![[Pasted image 20260211062745.png]]
Para poder renderizar mas cosas es necesario usar `<React.Fragment>`:
![[Pasted image 20260211063120.png]]
>Para que `Fragment` funcione es necesario importar React como se hace en la primera linea.
![[Pasted image 20260211063204.png]]


Ahora, imaginemos que queremos crear varios botones, pera la información dentro de esta será diferente o tendrá mas o menos cosas dentro, para solucionar este problema React aprovecha el concepto de Componentes, entonces, nosotros podemos hacer una función que creé un elemento y lo devuelva:
![[Pasted image 20260211063728.png]]
Nosotros podemos en JSX evaluar expresiones, metiendo la expresión entre llaves (`{}`), por lo tanto aqui se esta creando dos elementos (botones) con textos distintos, aqui, `createButton` es un Componente, en otras palabras, es una factoría de elementos.

Aun asi, esto no es del todo correcto aun, para que sea un componente real, o correcto, nuestra función tiene que tener un nombre de componente, por ejemplo `Button`, y en lugar de llamar a una función, que es imperativo, queremos que sea declarativo:
![[Pasted image 20260211064211.png]]
![[Pasted image 20260211064444.png]]
Aqui hemos hecho un parámetro nombrado `{text}`, esto también nos permite usar el ``Button`` con ``text``, como si ``text`` fuera un atributo. Es muy importante que los nombres de los componentes se han en mayúsculas (``PascalCase``) la primera letra al menos, esto no funcionaria con `createButton`, y se debe a que React no es capaz de diferenciar si lo escrito es un elemento HTML o si realmente es un componente, ya que en HTML el día de mañana se puede crear mas, por lo que para que no exista esa colisión, ``React`` obliga a usar ``PascalCase``.
