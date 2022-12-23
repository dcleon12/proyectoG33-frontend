import axios from 'axios';
import { useState } from 'react';
import{ useNavigate } from 'react-router-dom'; 

const URL ='http://localhost:5000/api/infobasica/';

const CompAgregarInformacionbasica = () => {
    const [matricula, setMatricula] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [direccion, setDireccion] = useState('')
    const [propietario, setPropietario] = useState('')
    const [estrato, setEstrato] = useState('')
    const [area, setArea] = useState('')
    const [valor, setValor] = useState('')
    const navigate = useNavigate();

    //funcion para guardar
    const agregarInformacionBasica = async (g) => {
        // (g) es el parametro para guardar info basica
        g.preventDefault()
        await axios.post(URL, {matricula : matricula, descripcion: descripcion, 
            direccion: direccion, propietario: propietario, estrato: estrato, area: area, valor: valor})
            navigate("/infobasica");
    }
    return(
        <div>
            <h3>Módulo Agregar Información Básica</h3>
            <form onSubmit={agregarInformacionBasica}> 
                <div className='mb-3'>
                    <label className='from-label'>Matricula</label>
                    <input value={matricula} onChange = {(g) => setMatricula (g.target.value)}
                    type='number' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Descripción</label>
                    <input value={descripcion} onChange = {(g) => setDescripcion (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Dirección</label>
                    <input value={direccion} onChange = {(g) => setDireccion (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Propietario</label>
                    <input value={propietario} onChange = {(g) => setPropietario (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Estrato</label>
                    <input value={estrato} onChange = {(g) => setEstrato (g.target.value)}
                    type='number' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Área</label>
                    <input value={area} onChange = {(g) => setArea (g.target.value)}
                    type='area' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Valor</label>
                    <input value={valor} onChange = {(g) => setValor (g.target.value)}
                    type='number' className='form-control'/>
                </div>
                
                <button type ='submit' className='btn btn-primary'> <i  className="fa-solid fa-floppy-disk"></i></button>
            
            </form>
        </div>
    )


}
export default CompAgregarInformacionbasica;