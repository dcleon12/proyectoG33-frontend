import axios from 'axios';
import { useState, useEffect } from 'react';
import{ useNavigate, useParams } from 'react-router-dom'; 

const URL ='http://localhost:5000/api/infobasica/';

const CompEditarInformacionbasica = () => {
    const [matricula, setMatricula] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [direccion, setDireccion] = useState('')
    const [propietario, setPropietario] = useState('')
    const [estrato, setEstrato] = useState('')
    const [area, setArea] = useState('')
    const [valor, setValor] = useState('')
    const navigate = useNavigate();
    const {id}= useParams();
    
    const EditarInformacionBasica = async (g) => {
        // la g es para guardar
    g.preventDefault()
    await axios.put(`${URL}${id}`, {matricula : matricula, descripcion: descripcion, 
    direccion: direccion, propietario: propietario, estrato: estrato, area: area, valor: valor})
    navigate("/infobasica");      
    }
    useEffect(() => {
        getInformacionBasicaByID();
        // eslint-disable-next-line
    }, [])

    const getInformacionBasicaByID = async () => {
    const res = await axios.get(`${URL}${id}`)

    setMatricula(res.data.matricula)
    setDescripcion(res.data.descripcion)
    setDireccion(res.data.direcion)
    setPropietario(res.data.propietario)
    setEstrato(res.data.estrato)
    setArea(res.data.area)
    setValor(res.data.valor)
    }

    return(
        <div>
            <h3>Módulo Editar Información Básica</h3>
            <form onSubmit={EditarInformacionBasica}> 
                <div className='mb-3'>
                    <label className='from-label'>Matricula</label>
                    <input value={matricula} onChange = {(g) => setMatricula (g.target.value)}
                    type='number' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Descripcion</label>
                    <input value={descripcion} onChange = {(g) => setDescripcion (g.target.value)}
                    type='text' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label className='from-label'>Direccion</label>
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
                    type='number' className='form-control'/>
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

export default CompEditarInformacionbasica;