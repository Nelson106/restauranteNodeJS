import axios from "axios";
//import { use } from "express/lib/router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:9090/api/reservas'

const CompListarReservas = () => {
    const [reservas, setReservas] = useState([])
    useEffect(() => {
        getReservas()
    }, [])

    //procedimiento para mostrar todas las Reservas

    const getReservas = async () => {
        const res = await axios.get(URI)
        setReservas(res.data)
    }


    const deleteReservas = async (id) => {

        await axios.delete(URI + '/' + id)
        getReservas()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <th>Lista de Reservas</th>
                    <div className="colum">
                        <nav class="navbar bg-light">
                            <div class="container-fluid">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" value={""}
                                        placeholder="Restaurante" aria-label="Search" />
                                    <input class="form-control me-2" type="date"
                                        placeholder="Search" aria-label="Search" value={""}/>
                                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                                </form>
                            </div>
                        </nav>
                    </div>
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
                            {reservas.map((reserva) => (
                                <tr key={reserva.id}>
                                    <td>{reserva.id}</td>
                                    <td>{reserva.Restaurante.nombre}</td>
                                    <td>{reserva.MesaMesaId}</td>
                                    <td>{reserva.cantidad}</td>
                                    <td>{reserva.ClienteId}</td>
                                    <td>{reserva.fecha}</td>
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

export default CompListarReservas;