import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Button from './components/Button/Button';

function App() {
  
  const [show, setShow] = useState(true)
 
  const handleOnAdd = (cantidad) =>{
    console.log(`la cantdiad agregada es: ${cantidad}`)
  }

  return (
    <div className="App">
      <Navbar />
      {/* Aca abajo estamos utilizando un useState, que es un hook que tiene integrado primero un valor y 
      luego una función que sirve para modificar ese valor guardado, entonces primero condiciono mostrar el
      componente de acuerdo al valor guardado (true o false) y después asocio por onclick el cambio de ese valor
      al boton mostrar/ocultar  */}

      <button onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</button>
      {show ? <Counter stock={10} onAdd={handleOnAdd}/> : null }
      <ItemListContainer />
      
    </div>
  );
}

export default App;
