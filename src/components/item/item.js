import "./item.css"

const Item = ({prod}) =>{
    
    return (
          
    <>
      
    <div className="card">
      <div className="card-image">
        <img src={prod.fields.image.fields.file.url}/>
        <span className="card-title">{prod.fields.nombre.toUpperCase()}</span>
        <a className="btn-floating tooltipped halfway-fab waves-effect waves-light red" title="Ver detalle del producto"><i className="material-icons">add</i></a>
      </div>
      <div className="card-content">
        <p>{prod.fields.descripcion}</p>
      </div>
      <div className="cantidad">
        <a className="btn red lighten-2"><i className="material-icons medium">chevron_left</i></a>
        <h3>0</h3>
        <a className="btn red lighten-2"><i className="material-icons medium">chevron_right</i></a>
      </div>
    </div>
    </>    
        )
}

export default Item