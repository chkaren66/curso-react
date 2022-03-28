import './App.css';
import Testimonio from './componentes/Testimonio.jsx';
import Contador from  './componentes/Contador';
import Calculadora from './componentes/Calculadora'; 
import Lista_de_Tareas from './componentes/Lista_de_Tareas';

function App() {

  return (
   
    <div className="App">
      {/* <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen=''
        cargo='Ingeniero de software'
        empresa='Spotify'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id quidem nihil soluta vero illum libero aut, voluptates, deleniti nisi, veniam ea minus eius odit ad modi maiores iste ratione! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi provident, itaque sunt saepe perferendis quas! Maxime aut minus officiis at perspiciatis. Similique maiores eius molestias temporibus, aliquid vero voluptatibus aspernatur.'
      />
      */}
    {/* proyecto contador */}
      {/* <Contador/> */}
 {/* Proyecto calculadora */}
    {/* <Calculadora/> */}

    {/* Proyecto de Lista de tareas */}
    <Lista_de_Tareas/>
    
    </div>
  );
}

export default App;
