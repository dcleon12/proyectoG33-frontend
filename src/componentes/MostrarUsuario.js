import axios from 'axios';
import { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom'; 

const URL ='http://localhost:5000/api/usuarios/';

const CompMostrarUsuarios = () => {
    const[usuarios, setUsuario] = useState([])
    useEffect(() => {
        getUsuarios();
    },[])

    // funcion para llamr a todos los usuario
    const getUsuarios = async () => {
    const res = await axios.get(URL)
    setUsuario(res.data);
    }

    //funcion para eliminar
    const eliminarUsuarios = async (id) => {
        await axios.delete (`${URL}${id}`)
        getUsuarios();
    }
  
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                
                <h3>
                    
                    <small className="text-muted">Usuarios</small>
                </h3>

                <p className="lead">
                Ver, actualizar y eliminar usuarios.
                </p>

                    <Link to ='/usuarios/agregar' className='btn btn-primary mt-2 mb-2'> <i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className="table table-dark  table-striped table-hover">
                        <thead className='tableTheadBg'>
                            <tr>
                                <td>Nombres</td>
                                <td>Apellidos</td>
                                <td>Documento</td>
                                <td>Correo</td>
                                <td>Telefono</td>
                                <td>Direccion</td>
                                <td>Acciones</td>
                            </tr>
                           

                            </thead>
                                <tbody>
                                {usuarios.map((usuario, index) => (
                                    <tr key={index}>
                                        <td> {usuario.nombres}</td>
                                        <td> {usuario.apellidos}</td>
                                        <td> {usuario.documento}</td>
                                        <td> {usuario.correo}</td>
                                        <td> {usuario.telefono}</td>
                                        <td> {usuario.direccion}</td>
                                        <td> 
                                            <Link to ={`/editar/${usuario._id}`} className='btn btn-primary'><i classNAme="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={ () =>eliminarUsuarios(usuario._id)}className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
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
export default CompMostrarUsuarios;