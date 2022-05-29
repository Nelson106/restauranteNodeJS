import axios from "axios";
import { useEffect,useState } from "react";
import {useParams ,useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/restaurantes/'


const CompEditarRestaurante = () =>{

    const [title,setTitle]= useState('')
    const [content,setContent]= useState('')
    const navigate=useNavigate()
    const {restauranteId} = useParams();

    //procedimiento para actualizar
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(URI+'/'+restauranteId,{
            nombre:title
        })

        navigate('/restaurante/')
    }

        useEffect( () =>{
           
            getRestauranteById(restauranteId)
        },[])


        const getRestauranteById = async (restauranteId) =>{
            
           const res= await axios.get(URI+'/'+restauranteId)
           console.log("res",res)
           setTitle(res.data.nombre)
        }

        return(

            <div>
           <h3>Editar restaurante</h3>
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

export default CompEditarRestaurante;