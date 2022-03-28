import React, { useState } from 'react';
import '../hojas-de-estilo/Lista.css';
import Formulario from '../componentes/Formulario';
import Tarea from './Tarea';


function Lista(){
// Pasamos un arreglo vacio []
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log("agregartarea");
    console.log(tarea);
  }

    return(
        // Estos se llaman fragmentos
        <>
          <Formulario />
          <div className='tareas-lista-contenedor'>
            {
              // map toma cada tarea y realiza lo que espcificaquemos 
              tareas.map(( tarea )=> 
                 <Tarea
                  texto = {tarea.texto}
                  completada = {tarea.completada}
                 />
                )
            }
          </div>
        </>
    )
}

export default Lista;