import axios from 'axios';
import { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom'; 

const URL ='http://localhost:5000/api/infobasica/';

const CompMostrarInformacionbasica = () => {
    const[infobasica, setInformacionBasica] = useState([])
    useEffect(() => {
        getInformacionBasica();
    },[])

    // funcion para llamr a todos los usuario
    const getInformacionBasica = async () => {
    const res = await axios.get(URL)
    setInformacionBasica(res.data);
    }

    //funcion para eliminar
    const eliminarInformacionBasica = async (id) => {
        await axios.delete (`${URL}${id}`)
        getInformacionBasica();
    }
  
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h3>
                        
                        <small className="text-muted">Información Básica</small>
                    </h3>
                    <p className="lead">
                    Ver, actualizar y eliminar información básica de los predios.
                    </p>
                    <Link to ='/infobasica/agregar' className='btn btn-primary mt-2 mb-2'> <i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table clasName="table table-dark  table-striped table-hover">
                        <thead className='tableTheadBg'>
                            <tr>
                                <td>Matricula</td>
                                <td>Descripcion</td>
                                <td>Direccion</td>
                                <td>Propietario</td>
                                <td>Estrato</td>
                                <td>Area</td>
                                <td>Valor</td>
                                <td>Acciones</td>
                            </tr>
                           

                            </thead>
                                <tbody>
                                {infobasica.map((informacionbasica, index) => (
                                    <tr key={index}>
                                        <td> {informacionbasica.matricula}</td>
                                        <td> {informacionbasica.descripcion}</td>
                                        <td> {informacionbasica.direccion}</td>
                                        <td> {informacionbasica.propietario}</td>
                                        <td> {informacionbasica.estrato}</td>
                                        <td> {informacionbasica.area}</td>
                                        <td> {informacionbasica.valor}</td>
                                        <td> 
                                            <Link to ={`/infobasica/editar/${informacionbasica._id}`} className='btn btn-primary'><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={ () =>eliminarInformacionBasica(informacionbasica._id)}className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                        </td>

                                    </tr>
                                    
                                ))}
                                </tbody>
                            
                       
                   </table>
                </div>
            </div>
        </div>

)
}
export default CompMostrarInformacionbasica;