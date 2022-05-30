import axios from "axios";
//import { use } from "express/lib/router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:9090/api/reservas'
const URI2 = 'http://localhost:9090/api/reservas/filter'

const CompListarReservas = () => {

    var [reservas, setReservas] = useState([])
    var [restauranteIdParam, setRestauranteIdParam] = useState('')
    var [fechaParam, setFechaParam] = useState('')
    var [clienteParam, setClienteParam] = useState('')


    useEffect(() => {
        getReservas()
    }, [])

    //procedimiento para mostrar todas las Reservas

    const getReservas = async () => {
        const res = await axios.get(URI)
        setReservas(res.data)
    }

    // mostrar reserva con los filtros
    const getReservas2 = async (e) => {
        e.preventDefault()
        const res = await axios.get(URI2 + '/' + restauranteIdParam + '/' + fechaParam + '/' + clienteParam)
        console.log(res)
        setReservas(res.data)
    }

    // metodo para limpiar campos
    const limpiar = async () => {
        window.location.reload(false);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <th>Lista de Reservas</th>
                    <div className="colum">
                        <nav class="navbar bg-light">
                            <div class="container-fluid">
                                <form class="d-flex" role="search" onSubmit={getReservas2}>
                                    <input class="form-control me-2" type="search"
                                        value={restauranteIdParam}
                                        onChange={(e) => setRestauranteIdParam(e.target.value)}
                                        placeholder="Restaurante" aria-label="Search" />
                                    <input class="form-control me-2" type="date"
                                        value={fechaParam}
                                        onChange={(e) => setFechaParam(e.target.value)}
                                        placeholder="Search" aria-label="Search" />
                                    <input class="form-control me-2" type="search"
                                        value={clienteParam}
                                        onChange={(e) => setClienteParam(e.target.value)}
                                        placeholder="Cliente" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                                </form>
                                <button class="btn btn-outline-success" type="submit" onClick={limpiar}>Limpiar</button>
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