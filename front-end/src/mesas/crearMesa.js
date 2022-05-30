import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/mesas'

const CompCrearMesa = () => {
    const [title,setTitle]= useState('')
    const [floor,setFloor]= useState('')
    const [px,setPx]= useState('')
    const [py,setPy]= useState('')
    const [capacity,setCapacity]= useState('')
    const [restauranteId,setRestauranteId]= useState('')
    const navigate=useNavigate()

    //procedimient guardar
    const store = async (e) =>{
        e.preventDefault()
        console.log("title",title)
        await axios.post(URI,{nombreMesa:title, piso:floor,posicionX:px,posicionY:py,capacidad:capacity,
            RestauranteRestauranteId:restauranteId})
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
                <div className="mb-3">
                    <label className="form-label">Capacidad</label>
                    <input 
                        value={restauranteId} 
                        onChange={(e)=> setRestauranteId(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
    )
}

export default CompCrearMesa;