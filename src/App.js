import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Button from './components/Button/Button';

function App() {

  return (
    <div className="App">
      
      <Navbar />
        
      <ItemListContainer />
      
    </div>
  );
}

export default App;
