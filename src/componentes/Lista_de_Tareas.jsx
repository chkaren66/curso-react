import React from 'react';
import '../hojas-de-estilo/Lista_de_Tareas.css';

import Lista from '../componentes/Lista';

function Lista_de_Tareas(){
  return(
    <div className="contenedor-lista">
      <div  className='lista-tareas-principal'>
        <h1>Mis Tareas</h1>
        <Lista/>
      </div>
    </div>
  );

}

export default Lista_de_Tareas;