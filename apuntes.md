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