
import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (
  
    <nav className="purple darken-2">
        <div className="nav-wrapper alineacion">
         <a href="#" className=""><img src="../../images/LOGO-ZIMA.png"/></a>
          <ul className="right hide-on-small-and-down">
            <li><a href="sass.html">Platos</a></li>
            <li><a href="sass.html">Cuencos</a></li>
            <li><a href="sass.html">Decorativos</a></li>
            <li><a href="sass.html">Tazas</a></li>
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <CartWidget />
           </ul>
        </div>
    </nav>
   
   )
}

export default Navbar