import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/reservas/'

const CompListarReservas=() =>{
    const [reservas,setReservas]=useState([])
    const [fecha,setFecha]=useState([])
    const [fecha2,setFecha2]=useState([])
    useEffect(() =>{
        getReservas()
    },[])

    //procedimiento para mostrar todas las Reservas
   
    console.log("reseca",reservas)
   
    const getReservas = async() =>{
       const res = await axios.get(URI)
       setReservas(res.data)    
          
    }


    const deleteReservas = async(id) =>{
        
       await axios.delete(URI+'/'+id)
        getReservas()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/crearReserva" className='btn btn-primary mt-2 mb-2'>Crear  reserva <i className='fa-solid fa-notebook'></i></Link>
                    <th>Lista de Reservas</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Id</th>
                                <th>Restaurante</th>
                                <th>Mesa</th>
                                <th>Cantidad</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.map ((reserva)=>(
                                <tr key={reserva.id}>
                                    <td>{reserva.id}</td>
                                    <td>{reserva.Restaurante.nombre}</td>
                                    <td>{reserva.Mesa.nombreMesa}</td>
                                    <td>{reserva.cantidad}</td>
                                    <td>{reserva.Cliente.nombre}</td>
                                    
                                    <td placeholder="dd-mm-yyyy">{reserva.fecha}</td>
                                    
                                    <td>{reserva.horario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <label>Filtrar por fecha: 
                        <input  
                            value={fecha} 
                            onChange={(e)=> setFecha(e.target.value)}
                            type="Date"
                        />
                        </label>
                        <Link to={'fecha/'+fecha} className='btn btn-info'><i class="fa-solid fa-filter"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompListarReservas;