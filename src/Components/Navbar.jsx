import React from 'react'

import { Link } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
   
              <Link to="/Home"> Home</Link>
              <Link to="/Detail"> Detail</Link>
              <Link to="/Favs"> Favs</Link>
              <Link to="/Contact"> Contact</Link>

   


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar