import React from "react";
import { Link } from 'react-router-dom';


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    const currentFavs = JSON.parse(localStorage.getItem('favs')) || [];

    // Verificar si la tarjeta ya está en favoritos
    const isAlreadyFav = currentFavs.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      // Si la tarjeta no está en favoritos, agregarla al array
      currentFavs.push({ id, name, username });
      // Guardar el array actualizado en el localStorage
      localStorage.setItem('favs', JSON.stringify(currentFavs));
      alert('Añadido a favoritos');
    } else {
      alert('Esta tarjeta ya está en favoritos');
    }
  }

  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${id}`}>
        <img src="/images/doctor.jpg" alt="" id="doc-img"/>
        <h2>{name}</h2>
        <p>Username: {username}</p>
        <p>ID: {id}</p>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
