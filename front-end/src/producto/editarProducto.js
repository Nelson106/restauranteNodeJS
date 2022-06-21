import axios from "axios";
import { useEffect,useState } from "react";
import {useParams ,useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/producto/'


const CompEditarProducto = () =>{

    const [title,setTitle]= useState('')
    const [precio,setPrecio]= useState('')
    const navigate=useNavigate()
    const {productoId} = useParams();

    //procedimiento para actualizar
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(URI+'/'+productoId,{
            nombre:title,precioVenta:precio
        })

        navigate('/producto/')
    }

        useEffect( () =>{
           
            getProductoById(productoId)
        },[])


        const getProductoById = async (productoId) =>{
            
           const res= await axios.get(URI+'/'+productoId)
           console.log("res",res)
           setTitle(res.data.nombre)
           setPrecio(res.data.precioVenta)
        }

        return(

            <div>
           <h3>Editar producto</h3>
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
                    <label className="form-label">Precio</label>
                    <input 
                        value={precio} 
                        onChange={(e)=> setPrecio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                                
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
        )
}

export default CompEditarProducto;