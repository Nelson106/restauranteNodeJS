
import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const URI='http://localhost:9090/api/cliente'
const URIP='http://localhost:9090/api/producto'
const URIDC='http://localhost:9090/api/detalleConsumo'
const URIC='http://localhost:9090/api/consumo'

const CompListarClientes=() =>{
    const [Cliente,setCliente]=useState([])
    const [Producto,setProducto]=useState([])
    const [ProductosElegidos,setProductosElegidos]=useState([])


    const {restauranteId} = useParams()
    const {mesaId} = useParams()
   
    useEffect(() =>{
        getClientes()
    },[])

    
    const getClientes = async() =>{
       const res = await axios.get(URI)
       setCliente(res.data)
    }

  
    const guardarConsumo = async (e) =>{
       e.preventDefault()
       // const res = await axios.get(URIMESA+'/'+mesaId)
        let fechaCreacion=new Date()
        await axios.post(URIC,{estado:"abierto",mesaId:mesaId,clienteId:Cliente,
        fechaCreacion:fechaCreacion})

        
        ///setMesas(res.data)
     
       
       // navigate('/reservas')
    }


    
    // console.log("Productossss",ProductosElegidos)
    return (
       
        <div className="container">

            <div className="row">
                <div className="col">
                    <Link to="/cliente/crear" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-circle-user"></i> Iniciar Consumo</Link>
                    <th>Lista de Clientes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Cliente.map ((Cliente)=>(
                                <tr key={Cliente.id}>
                                    <td>{Cliente.id}</td>
                                    <td>{Cliente.nombre}</td>
                                    <td>{Cliente.apellido}</td>
                                    <td>{Cliente.cedula}</td>
                                    <td> <input
                     
                                             type="checkbox"
                                             value={Cliente.id}
                                             onChange={(e)=> setCliente(e.target.value)}
                                            
                                     /></td>
                                   
                    
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