import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/mesas'

const CompListarMesa=() =>{
    const [mesas,setMesas]=useState([])
    useEffect(() =>{
        getMesas()
    },[])

    //procedimiento para mostrar todas las mesas

    const getMesas = async() =>{
       const res = await axios.get(URI)
       setMesas(res.data)
    }

    const deleteMesas = async(id) =>{
        
       await axios.delete(URI+'/'+id)
        getMesas()
    }

    return (
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/mesas/crear" className='btn btn-success'>Registrar Mesa <i className="fa-solid fa-table"></i></Link>
                    <th>Lista de Mesas</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Restaurante</th>
                                <th>Piso</th>
                                <th>Capacidad</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mesas.map ((mesa)=>(
                                <tr key={mesa.mesaId}>
                                    <td>{mesa.mesaId}</td>
                                    <td>{mesa.nombreMesa}</td>
                                    <td>{mesa.RestauranteRestauranteId}</td>
                                    <td>{mesa.piso}</td>
                                    <td>{mesa.capacidad}</td>
                                    <td>
                                        <Link to={'update/' + mesa.mesaId} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteMesas(mesa.mesaId)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
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

export default CompListarMesa;