import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/cliente'

const CompListarClientes=() =>{
    const [Cliente,setCliente]=useState([])
    useEffect(() =>{
        getClientes()
    },[])

    //procedimiento para mostrar todas las mesas

    const getClientes = async() =>{
       const res = await axios.get(URI)
       setCliente(res.data)
    }


    const deleteCliente = async(id) =>{
       await axios.delete(URI+'/'+id)
        getClientes()
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <Link to="/cliente/crear" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <th>Lista de Clientes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Reservas</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Cliente.map ((Cliente)=>(
                                <tr key={Cliente.id}>
                                    <td>{Cliente.id}</td>
                                    <td>{Cliente.nombre}</td>
                                    <td>{Cliente.apellido}</td>
                                    <td>{Cliente.cedula}</td>
                                    <td>
                                        <Link to={'reservas/' + Cliente.id} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> Ver reservas</Link>
                                    </td>
                                    <td>
                                        <Link to={'update/' + Cliente.id} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        
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

export default CompListarClientes;