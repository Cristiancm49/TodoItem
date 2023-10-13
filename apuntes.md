# PATRONES DE RENDER Y COMPOSICION
- Composicion y colocacion del estado en React
Para evitar pasar el estado de componente en componente se puede utilizar las gerarquiar para evitar tener que pasar estas propriedades a los componentes y estos las pases a sus hijos, entonces lo que hacemos es usar la propiedad { children } e inmediatamente al componente le pasamos lo que tiene que renderizar o lo que va a contener y a esos "hijos" se les pasa el estado.

- NOTA
Los componetes que resiven el estato deben recibirlo y renderizarlo.

```jsx
 function App() {
    const [state, setState] = React.useState('malo')
    const [stateItem, setStateItem] = React.useState('Ferreteria')

    return (
        <div>
            <Comentarios> 
                <Comentario  state={state}/>
            </Cometarios>
            <Items>
                <Item state={stateItem} />
            </Items>
        </div>
    )

 }

  function Cometarios({ chidren }) {
    return (
        <div>
            {children}
        </div>

    )

 }

 function Items({ children }){
    return (
        <div>
            {children}
        </div>
    )
 }

  funtion Comentario({state}) {
    return <p>Esto es un comentario {state}</p>

 }

  funtion Item({state}) {
    return <p>Esto es un item de {state}</p>

 }



 export default app

```

De esta forma lo que genamos es una aplicacion mas saludable con un codigo mas limpio donde el estado solo se usa en nuestro componente principal que estamos exportando.

Ya hablando de un ejemplo mas prectico en nuestro proyecto los que hicimos fue pasar como primer pase traer nuestro componete de searchValue y counter, creamos un componente principa "header" que almacenara a searchValue y counter como sus hijos y y renderizando ya le pasariamos el estado a ellos.

# NOTA
Este ejemplo es no mas recordatio de la sintaxis que tiene que llevar el manejo de el estado con codigo limpio y sin useContext.
- CODIGO DE APP
```jsx

 
    function App() {
        return (
            <Header>
                <searchValue searchValue={searchValue}>
                <Counter counter={counter}>
            </Header>
        )
    }


```
- CODIGO DE HEADER
Este tiene el atributo children.
```jsx

 
    function Header({children}) {
        return (
            {children}
        )
    }


```
- CODIGO DE SEARH Y COUNTER
Este tiene el atributo children.
```jsx

 
    function SearchValue({ searchVale }) {
        return (
            {searchValue}
        )
    }


```

# RENDER PROPS Y RENDE FUNTIONS
- Ideas/conceptos claves
Render Function El patrón de entregar la información en una función es lo que llamamos

- Render Prop El patrón de enviar como propiedad una función

- Apuntes
1) Son un patrón que nos ayudan a llevar la composición de componentes a un mayor nivel
- Render Props nos dejan especificar:
1) Que vamos a renderizar
2) Cuando lo vamos a renderizar
3) Donde lo vamos a renderizar

- EJEMPLO DE USO DE LA RENDER PROPS
```jsx
    <PlatziCourse
	    classes={platziClass => (
		    <PlatziClassPreview {...platziClass} />
	    )}
	    lastActivity={question => (
		    <PlatziComment q={true} {...question} />
	    )}
/>
```