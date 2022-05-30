import axios from "axios";
import { useEffect,useState } from "react";
import {useParams ,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/reservas/'
const URIR ='http://localhost:9090/api/reservas/restaurante'

const CompRestauranteReservas = () =>{
    const [reservas,setReservas]=useState([])
    const {restauranteId} = useParams();
    useEffect(() =>{
        getReservas()
    },[])

    //procedimiento para mostrar todas las Reservas
    const getReservas = async() =>{
        const res = await axios.post(URIR,{RestauranteRestauranteId:restauranteId})
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
                                    <td>{reserva.RestauranteRestauranteId}</td>
                                    <td>{reserva.MesaMesaId}</td>
                                    <td>{reserva.cantidad}</td>
                                    <td>{reserva.ClienteId}</td>
                                    <td placeholder="dd-mm-yyyy">{reserva.fecha}</td>
                                    <td>{reserva.horario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to={'/restaurante'} className='btn btn-info'><i class="fa-solid fa-backward"> </i>Atras</Link>
                </div>
            </div>
        </div>
    )
}

export default CompRestauranteReservas;