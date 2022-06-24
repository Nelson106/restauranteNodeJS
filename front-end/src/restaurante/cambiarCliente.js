import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const URI='http://localhost:9090/api/cliente'
const URIC='http://localhost:9090/api/consumo'

const CompListarClientes=() =>{
    const [Cliente,setCliente]=useState([])
    const [ClienteElegido,setClienteElegido]=useState([])
    useEffect(() =>{
        getClientes()
    },[])
    const {restauranteId} = useParams()
    const {mesaId} = useParams()
    const {consumoId} = useParams()
    //procedimiento para mostrar todas las mesas
    const navigate=useNavigate()
    const getClientes = async() =>{
       const res = await axios.get(URI)
       setCliente(res.data)
    }
    


    
    const Guardar = async() =>{
        
       await axios.put(URIC+'/'+consumoId,{clienteId:ClienteElegido})
      // navigate('/reservas')
        navigate('/restaurante/restaurante/'+restauranteId+'/mesas/'+mesaId)
    }
    


    return (
        <form  onSubmit={Guardar}>
        <div className="container">

            <div className="row">
                <div className="col">
                    <Link to="/cliente/crear" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-circle-user"></i>  Crear cliente</Link>
                    <th>Lista de Clientes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Reservas</th>
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
                                             onChange={(e)=> setClienteElegido(e.target.value)}
                                            
                                     /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Actualizar</button>
        </form>
    )
}

export default CompListarClientes;