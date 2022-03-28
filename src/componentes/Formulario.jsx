import React, { useState } from 'react';
import '../hojas-de-estilo/Formulario.css';


function Formulario(props){

  const [input, setInput ] = useState('');
  
  const manejarCambio = e =>{
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("enviando formulario");
    const tareaNueva = {
      id : '34',
      texto:'hola'
    }
  }

  return(
    <form action=""
     className='tarea-formulario'
     onSubmit={manejarEnvio}>
      <input 
      type="text" 
      className='tarea-input' 
      placeholder='Escribe una tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
    
  );
}

export default Formulario;