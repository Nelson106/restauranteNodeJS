import axios from "axios";
import { useEffect,useState } from "react";
import {useParams ,useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/mesas/'


const CompEditarMesa = () =>{

    const [title,setTitle]= useState('')
    const [floor,setFloor]= useState('')
    const [px,setPx]= useState('')
    const [py,setPy]= useState('')
    const [capacity,setCapacity]= useState('')
    const [content,setContent]= useState('')
    const navigate=useNavigate()
    const {mesaId} = useParams();

    //procedimiento para actualizar
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(URI+'/'+mesaId,{
            nombreMesa:title,piso:floor,posicionX:px,posicionY:py,capacidad:capacity
        })

        navigate('/mesas/')
    }

        useEffect( () =>{
           
            getMesaById(mesaId)
        },[])


        const getMesaById = async (mesaId) =>{
            
           const res= await axios.get(URI+'/'+mesaId)
           console.log("res",res)
           setTitle(res.data.nombreMesa)
           setFloor(res.data.piso)
           setPx(res.data.posicionX)
           setPy(res.data.posicionY)
           setCapacity(res.data.capacidad)
        }

        return(

            <div>
           <h3>Editar mesa</h3>
           <form onSubmit={update}>   
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
                        type="number"
                        className="form-control"
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
        )
}

export default CompEditarMesa;