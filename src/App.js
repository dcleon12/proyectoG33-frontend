
import './App.css';
// importamos rutas
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './configuracion/rutas';
import CompFooter from './configuracion/Footer';
import CompNavbar from './configuracion/Navbar';



function App() {
  return (
    <div className="App">
      
       <Router>
          <CompNavbar/>
          <Rutas/>
          <CompFooter/>
          
       </Router>
    </div>
  );
}

// 1ro se importa el componente
// 2do  luego se llama al componente

export default App;



