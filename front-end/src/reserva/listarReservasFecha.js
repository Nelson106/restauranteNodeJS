import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/reservas/'

const CompListarReservasF=() =>{
    const [reservas,setReservas]=useState([])
    const {fecha} = useParams()
    useEffect(() =>{
        getReservas()
    },[])

    //procedimiento para mostrar todas las Reservas

    const getReservas = async() =>{
       const res = await axios.get(URI)
        var dat = res.data;
        var d = []
        var i;
        console.log(dat[0].fecha)
        for(i = 0; i < dat.lenght ; i++){
            if(dat[i].fecha == fecha){
                d.push(dat[i])
            }
        }
        setReservas(d)       
    }


    const deleteReservas = async(id) =>{
        
       await axios.delete(URI+'/'+id)
        getReservas()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
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
                                    <td>{reserva.MesaMesaId}</td>
                                    <td>{reserva.cantidad}</td>
                                    <td>{reserva.ClienteId}</td>
                                    <td placeholder="dd-mm-yyyy">{reserva.fecha}</td>
                                    <td>{reserva.horario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompListarReservasF;