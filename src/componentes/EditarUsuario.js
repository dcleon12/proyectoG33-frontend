import axios from 'axios';
import { useState, useEffect } from 'react';
import{ useNavigate, useParams } from 'react-router-dom'; 

const URL ='http://localhost:5000/api/usuarios/';

const CompEditarUsuarios = () => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate()
    const {id}= useParams();
    

    //navigate es una funcion de  react router dom
    // use para se usa para navegar por Id

    //funcion actualizar

    const ActualizarUsuarios = async (g) => {
// la g es para guardar
    g.preventDefault()
    await axios.put(`${URL}${id}`, {nombres : nombres, apellidos: apellidos, 
    documento: documento, correo: correo, telefono: telefono, direccion: direccion})
    navigate("/");

    }

    useEffect(() => {
        getUsuariosByID();
        // eslint-disable-next-line
    }, [])

    const getUsuariosByID = async () => {
    const res = await axios.get(`${URL}${id}`)
    
    setNombres(res.data.nombres)
    setApellidos(res.data.apellidos)
    setDocumento(res.data.documento)
    setCorreo(res.data.correo)
    setTelefono(res.data.telefono)
    setDireccion(res.data.direccion)
    }

    return(
        <div>
            <h3>Módulo guardar Usuario</h3>
            <form onSubmit={ActualizarUsuarios}> 
                <div className='mb-3'>
                    <label className='from-label'>Nombres</label>
                    <input value={nombres} onChange = {(g) => setNombres (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Apellidos</label>
                    <input value={apellidos} onChange = {(g) => setApellidos (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Documento</label>
                    <input value={documento} onChange = {(g) => setDocumento (g.target.value)}
                    type='number' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Correo</label>
                    <input value={correo} onChange = {(g) => setCorreo (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Teléfono</label>
                    <input value={telefono} onChange = {(g) => setTelefono (g.target.value)}
                    type='number' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Dirección</label>
                    <input value={direccion} onChange = {(g) => setDireccion (g.target.value)}
                    type='text' className='form-control'/>
                </div>
                <button type ='submit' className='btn btn-primary'> <i  className="fa-solid fa-floppy-disk"></i></button>
            
            </form>
        </div>
    )
    }

    export default CompEditarUsuarios;