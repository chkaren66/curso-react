import React from 'react'
import '../hojas-de-estilo/Contador.css';
import { useState } from 'react';

function Contador (){
  const [count, setCount] = useState(0);
  let contar = () => {
    setCount(count+1);
    console.log('contar');
  }
  let reset = () => {
    console.log('reset');
    setCount(0);
  }
  return(
    <div className='content-contador'>
      <h2>Hola, Soy un contador !</h2>
      <div className='content-numero'>
            {count}
      </div>
      
      <div className='content-botones'>
        <button className='btn-count btn' onClick={contar}>Count</button>
        <button className='btn-reset btn'onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Contador;