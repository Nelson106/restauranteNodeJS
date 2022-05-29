import axios from "axios";
import { useEffect,useState } from "react";
import {useParams ,useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/mesas/'


const CompEditarMesa = () =>{

    const [title,setTitle]= useState('')
    const [content,setContent]= useState('')
    const navigate=useNavigate()
    const {mesaId} = useParams();

    //procedimiento para actualizar
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(URI+'/'+mesaId,{
            nombreMesa:title
        })

        navigate('/')
    }

        useEffect( () =>{
           
            getMesaById(mesaId)
        },[])


        const getMesaById = async (mesaId) =>{
            
           const res= await axios.get(URI+'/'+mesaId)
           console.log("res",res)
           setTitle(res.data.nombreMesa)
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
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
        )
}

export default CompEditarMesa;