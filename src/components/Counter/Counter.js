import { useState, useEffect} from 'react'

const Counter = ({stock, onAdd}) => { //stock y onadd son props que llegan desde el componente padre
    const [count, setCount] = useState(1)
    const [title, setTitle] = useState("hola")
    
    // use effect lo que hace es ejecutarse DESPUES de que se "usa" o renderiza el componente contenido en la función donde es llamado
    // si quiero que el useEffect entre en juego unicamente cuando el componente se monta, eso se le indica abriendo un array vacio al final de funcion
    // el array vacio se denomina array de dependecias, al que se le pueden pasar valores para darle indicaciones adicionales

    // cuarto ejemplo, quiero ejecutar  algo cuando se desmonta un coponente y eso se hace en el return de la función de callback que ejecuta el useEffect
    // son efectos simetricos lo que esta en el cuerpo de la función se ejecuta al montar el componente y lo que se escrible luego del return se ejecuta cuando el componente se desmonta

    useEffect(() => {
        //console.log("el componente se monto")

        return () => console.log("se va a desmontar el componente")

    }, [])

    //en el caso del use efect de abajo hay una dependecia y se va a ejecutar la función siempre que esa dependencia tenga un cambio de estado
    // las dependencias pueden disparar la función por cambio de estados, por props como los de stock e initial que le llegan a la funcion madre o puede ser una llamada a una funcion

    useEffect(() => { 
       //console.log("cambio el title")
    },[title, stock,])


    //tercer ejemplo en este caso el efecto de uso esta escuchando cambios del valor de count (por dependencia) y va a disparar un cambio de estado en el título
    // así es como se "sincronizan" los cambios de estado entre componentes

    // useEffect(() => {
    //     setTitle(title === "hola" ? "chau" : "hola" )
    // },[count])

    
    
  

    const increment = () => {
        if(count < stock)
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 1)
        setCount(count - 1)
    }

    //console.log("render")

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => setTitle(title === "hola" ? "chau" : "hola" )}>Saludar</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            <button onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default Counter