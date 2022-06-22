import axios from "axios";
import { useEffect,useState } from "react";
import {useParams  } from "react-router-dom";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/reservas/'
const URIR ='http://localhost:9090/api/mesas/restaurante'

const CompRestauranteMesas = () =>{
    const [mesas,setMesas]=useState([])
    const {restauranteId} = useParams();
    useEffect(() =>{
        getMesas()
    },[])

    //procedimiento para mostrar todas las Mesas
    const getMesas = async() =>{
        const res = await axios.post(URIR,{RestauranteRestauranteId:restauranteId})
        setMesas(res.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <th>Lista de Mesas</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Restaurante</th>
                                <th>Piso</th>
                                <th>Capacidad</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mesas.map ((mesa)=>(
                                <tr key={mesa.mesaId}>
                                    <td>{mesa.nombreMesa}</td>
                                    <td>{mesa.Restaurante.nombre}</td>
                                    <td>{mesa.piso}</td>
                                    <td>{mesa.capacidad} personas</td>
                                    <td>
                                        <Link to={'mesas/' + mesa.mesaId } className='btn btn-info'><i className="fa-solid fa-table"></i> Elegir mesa </Link>
                                    </td>
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

export default CompRestauranteMesas;