import { ContextGlobal } from './utils/global.context';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

    // const { state, toggleTheme } = useContext(ContextGlobal);
  
    // const handleThemeChange = () => {
    //   toggleTheme();
    // };

    // const navbarStyle = {
    //   backgroundColor: state.theme === 'dark' ? '#333' : '#f4f4f4',
    //   color: state.theme === 'dark' ? '#fff' : '#333',
    //   // Otros estilos según el tema
    // };

  return (
    <nav>
   
              <Link to="/Home"> Home</Link>
              <Link to="/Detail"> Detail</Link>
              <Link to="/Favs"> Favs</Link>
              <Link to="/Contact"> Contact</Link>

   


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button >Change theme</button>
    </nav>
  )
}

export default Navbar