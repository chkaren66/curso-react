import React from 'react';
import '../hojas-de-estilo/Calculadora.css';
import Boton from './Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora(){
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const borrar = val => {
    setInput('');
  };

  const calcularResultado = val =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Ingrese valores..')
    }
  };

  return(
  <div className='content'>
     <h1>CALCULADORA</h1>
      <div className='content-calculadora'>
    
   
      <div className='btns'>
        <Pantalla 
          input = {input}
        />
        <div className="fila">
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear borrar = {borrar}>Clear</BotonClear>
        </div>
      </div>
    </div>
   </div>

  );
}

export default Calculadora;