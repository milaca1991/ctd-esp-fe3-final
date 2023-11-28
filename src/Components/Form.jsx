import React, { useState } from 'react'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [nombreError, setNombreError] = useState("");
    const [correoError, setCorreoError] = useState("");
    const [enviado, setEnviado] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (nombreError || correoError) {
          alert("por favor verifique su informacion nuevamente");
        } else if (nombre === "" || correo === "") {
          alert("Faltan datos");
        } else {
          setEnviado(true);
        }
      };

      const handleNombreChange = (event) => {
        const inputValue = event.target.value;
        const isValid = inputValue.trim().length >= 5 && !inputValue.startsWith(' ');
    
        setNombre(inputValue);
        setNombreError(isValid ? '' : 'El nombre debe tener al menos 5 caracteres y no empezar con espacios en blanco');
      };

      const handleCorreoChange = (event) => {
        const inputValue = event.target.value;
        const isValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        setCorreo(inputValue);
        setCorreoError(isValid.test(inputValue) ? '' : 'El correo debe tener el formato ejemplo@gmail.com');
      };
    


    return (
        <>

          {enviado ? (
                <p>
                  Gracias {nombre}, te contactaremos lo antes posible vía mail
                </p>
              ) : (
       
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor='nombre'>Nombre: </label>
                <input
                    type='text'
                    placeholder='Ingresar Nombre'
                    id='nombre'
                    value={nombre}
                    onChange={(e) => handleNombreChange(e)}
                />
                 {nombreError && <div className="error-message">{nombreError}</div>}

                <label htmlFor=''>Correo: </label>
                <input
                    type='text'
                    placeholder='Ingresar correo'
                    value={correo}   
                    onChange={(e) => handleCorreoChange(e)}
                />
               {correoError && <div className="error-message">{correoError}</div>}



                <input
                    type="submit"
                    value="Enviar datos"
                />

            </form>
             )}
        </>
    )
}

export default Form