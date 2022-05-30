import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/mesas'
const URIRESTAURANTE='http://localhost:9090/api/restaurantes'

const CompCrearMesa = () => {
    const [title,setTitle]= useState('')
    const [floor,setFloor]= useState('')
    const [px,setPx]= useState('')
    const [py,setPy]= useState('')
    const [capacity,setCapacity]= useState('')
    const [restaurantes,setRestaurantes]=useState([])
    const [restauranteElegidoId,setRestauranteElegido]=useState([])

    const navigate=useNavigate()

    useEffect(() =>{
        getRestaurantes()
    },[])

    const getRestaurantes = async() =>{
        const res = await axios.get(URIRESTAURANTE)
        setRestaurantes(res.data)
     }
    //procedimient guardar
    const store = async (e) =>{
        e.preventDefault()
        console.log("title",title)
        await axios.post(URI,{nombreMesa:title, restauranteId:restauranteElegidoId, piso:floor,posicionX:px,posicionY:py,capacidad:capacity})
        navigate('/mesas')
    }
    return (
        <div>
           <h3>Crear mesa</h3>
           <form onSubmit={store}>   
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="row">
                    <div className="col">
                        <th>Seleccionar Restaurante:</th>
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Direccion</th>
                                    <th>Seleccionar</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                {restaurantes.map((restaurante)=>(
                                    <tr key={restaurante.restauranteId}>
                                        <td>{restaurante.nombre}</td>
                                        <td>{restaurante.direccion}</td>
                                        <td>
                                            <input
                                                value={restaurante.restauranteId}
                                                onChange={(e)=> setRestauranteElegido(e.target.value)}
                                                type="checkbox"
                                            />
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                </div>
                <div className="mb-3">
                    <label className="form-label">Piso</label>
                    <input 
                        value={floor} 
                        onChange={(e)=> setFloor(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Posicion X</label>
                    <input 
                        value={px} 
                        onChange={(e)=> setPx(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Posicion Y</label>
                    <input 
                        value={py} 
                        onChange={(e)=> setPy(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Capacidad</label>
                    <input 
                        value={capacity} 
                        onChange={(e)=> setCapacity(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
    )
}

export default CompCrearMesa;