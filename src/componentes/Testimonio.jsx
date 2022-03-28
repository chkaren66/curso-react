import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props){
  //Poniendo los props reemplazando el texto fijo con props haciendo el componenete dinamico
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
        src={require('../imagenes/componentes.png')} 
        alt='imagen1' />
      <div className='contenedor-texto'>
        <p className='nombre-testimonio'>{props.nombre} en {props.ciudad}</p> 
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio} </p>
        
      </div>
    </div>
  );



}
//control + H para buscar texto especifico 
// exportacion por defecto
export default Testimonio;

// Existen dos tipos de exportacion
// La exportacion por defecto(permite decir que es el unico archivo exportable del archivo actual) y la exportacion nombrada(y en este si se puede exportar segun el que desidamos )

// PROPS
// ----------------------------------
// Agregamos los props