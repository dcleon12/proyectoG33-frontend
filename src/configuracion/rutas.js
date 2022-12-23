//iimportamos componenetes
import CompMostrarUsuarios from '../componentes/MostrarUsuario';
import CompAgregarUsuarios from '../componentes/AgregarUsuarios';
import CompEditarUsuarios from '../componentes/EditarUsuario';
import CompMostrarInformacionbasica from '../componentes/MostrarInformacionbasica';
import CompAgregarInformacionbasica from '../componentes/AgregarInformacionbasica';
import CompEditarInformacionbasica from '../componentes/EditarInformacionbasica';
import CompInicio from '../configuracion/inicio';

//importar el router
import { Routes, Route} from 'react-router-dom';

const Rutas = () => {
    return (
        <Routes>
          <Route path  = '/' element = { <CompInicio/>}/>
          <Route path  = '/usuarios' element = { <CompMostrarUsuarios/>}/>
          <Route path  = '/usuarios/agregar' element = { <CompAgregarUsuarios/>}/>
          <Route path  = '/usuario/editar/:id' element = { <CompEditarUsuarios/>}/>
          <Route path  = '/infobasica' element = { <CompMostrarInformacionbasica/>}/>
          <Route path  = '/infobasica/agregar' element = { <CompAgregarInformacionbasica/>}/>
          <Route path  = '/infobasica/editar/:id' element = { <CompEditarInformacionbasica/>}/>
          
          
        </Routes>
       )

}
export default Rutas;