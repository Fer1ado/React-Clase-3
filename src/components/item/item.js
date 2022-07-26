import "./item.css"
import Counter from "../Counter/Counter"
import { useState, useEffect } from "react"

const Item = ({prod, sumatotal}) =>{
    const [count, setCount] = useState(0)


    const sumaCarro = (cantidad) => {
      if(count < prod.fields.stock){
      setCount (count + cantidad)}
    }


      

    // POR AQUÍ QUISE GENERAR UN NUEVO CONTADOR QUE RECOLECTARA LOS VALORES TOTALES DE TODOS LOS PRODUCTOS AGREGADOS EN CADA UNA DE LAS TARJETAS 
    // CON LA IDEA DE PODER DESPUES IMPORTAR EL VALOR DESDE EL WIDGET DEL NAVBAR, PERO NO PUDE HACERLO.
    // useEffect(()=>{
    //   if(count>count2)
    //   setCount2 ( count2)
    // },[count])

  


    return (
    
    <>
    <div className="card">
      <div className="card-image">
        <img src={prod.fields.image.fields.file.url}/>
        <span className="card-title">{prod.fields.nombre.toUpperCase()}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red" title="Ver detalle del producto"><i className="material-icons">add</i></a>
      </div>
      
      <div className="card-content">
        <p>{prod.fields.descripcion} <br></br> stock: {prod.fields.stock}  Total en Carrito: <b>{count}</b></p>
      </div>
      <Counter stock={prod.fields.stock} key={prod.sys.id} agregar={sumaCarro}/>

    </div>
    </>    
        )
}

export default Item