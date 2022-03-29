import React, { useState } from 'react';
import '../hojas-de-estilo/Lista.css';
import Formulario from '../componentes/Formulario';
import Tarea from './Tarea';


function Lista(){
// Pasamos un arreglo vacio []
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });

    setTareas(tareasActualizadas);
  }
    return(
        // Estos se llaman fragmentos
        <>
          <Formulario  onSubmit={agregarTarea}/>
          <div className='tareas-lista-contenedor'>
            {
              // map toma cada tarea y realiza lo que espcificaquemos 
              tareas.map(( tarea )=> 
                 <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  texto = {tarea.texto}
                  completada = {tarea.completada}
                  eliminarTarea = {eliminarTarea}
                  completarTarea = {completarTarea}
                 />
                )
            }
          </div>
        </>
    )
}

export default Lista;