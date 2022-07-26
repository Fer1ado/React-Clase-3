import { useState, useEffect} from 'react'


const Counter = ({stock, agregar}) => { //stock y onadd son props que llegan desde el componente padre
    const [count, setCount] = useState(1)


    const increment = () => {
        if(count < stock)
        setCount(count + 1)
     
    }

    const decrement = () => {
        if(count > 1)
        setCount(count - 1)
    }


    return (
        <div className="cantidad">
            <a className="btn red lighten-2" onClick={decrement}><i className="material-icons medium">chevron_left</i></a>
            <h3>{count}</h3>
            <a className="btn red lighten-2" onClick={increment}><i className="material-icons medium">chevron_right</i></a>
            <a className="btn-floating pulse btn-med waves-effect waves-light red lighten-2" title="Agregar al Carrito" onClick={() => agregar(count)}><i className="material-icons">add_shopping_cart</i></a>
        </div>
    )
}

export default Counter