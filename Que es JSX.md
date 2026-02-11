**JSX** (JavaScript XML) es una **extensión de sintaxis** para JavaScript que te permite escribir **HTML dentro de JavaScript**.

```js
// JSX (parece HTML)
const elemento = <h1>Hola mundo</h1>;

// JavaScript puro (lo que JSX se convierte)
const elemento = React.createElement('h1', null, 'Hola mundo');
```
[JSX](https://es.legacy.reactjs.org/docs/introducing-jsx.html) es una extensión de ``ECMAScript``, no es estrictamente necesario usar JSX para usar React, pero si es muy conveniente. JSX nos permite describir como será la interfaz, normalmente sin JSX nuestro código se podría ver algo similar a esto:
![[Pasted image 20260211054548.png]]
Lo cual puede ser difícil de escalar y entender según nuestro proyecto se haga mas grande. Con JSX podemos hacer exactamente lo mismo:
```jsx
<React.Fragment>
	<button data-id="123">Button 1</button>
	<button data-id="456">Button 2</button>
	<button data-id="789">Button 3</button>
</React.Fragment>
```

---
Si usamos [SWC](https://swc.rs/playground), podemos ver que el código JS y el código JSX producen el mismo código final:
![[Pasted image 20260211060010.png]]

![[Pasted image 20260211060025.png]]

----
Por lo tanto, cuando escribimos JSX, estamos escribiendo en realidad código JavaScript, pero lo escribimos con JSX para que sea mucho mas fácil y sea declarativo.