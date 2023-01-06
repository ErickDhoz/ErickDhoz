
import './App.css';
import NavBar from './Componentes/NavBar';
import SobreMi from './Componentes/SobreMi';
import Habilidades from './Componentes/Habilidades';
import MiTrabajo from './Componentes/MiTrabajo';
import Contacto from './Componentes/Contacto';






function App() {
  return (
    <div className="App">      
      <NavBar       id='NavBar'/>
      <SobreMi      id='sobreMi'      title='Sobre Mi'     dark ={true}/>
      <Habilidades  id='habilidad'    title='Mis Habilidades' dark ={false}/>
      <MiTrabajo    id='miTrabajo'    title='Mis Trabajos'   dark={true}/>
      <Contacto     id='Contacto'     title='Contáctame'    dark={false}/>
      
    </div>
  );
}

export default App;
