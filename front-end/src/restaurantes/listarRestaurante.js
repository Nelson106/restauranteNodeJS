import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/restaurantes'

const CompListarRestaurante=() =>{
    const [restaurantes,setRestaurantes]=useState([])
    useEffect(() =>{
        getRestaurantes()
    },[])

    //procedimiento para mostrar todas las mesas

    const getRestaurantes = async() =>{
       const res = await axios.get(URI)
       setRestaurantes(res.data)
    }


    const deleteRestaurantes = async(id) =>{
        
       await axios.delete(URI+'/'+id)
        getRestaurantes()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {restaurantes.map ((restaurantes)=>(
                                <tr key={restaurantes.restauranteId}>
                                    <td>{restaurantes.nombre}</td>
                                    <td>
                                        <Link to={'/edit/${restaurante.restauranteId}'} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteRestaurantes(restaurantes.restauranteId)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
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

export default CompListarRestaurante;