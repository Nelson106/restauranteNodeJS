import axios from "axios";
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const URI='http://localhost:9090/api/reservas'
const URICLIENTE='http://localhost:9090/api/cliente'
const URIMESA='http://localhost:9090/api/mesass'
const URIRESTAURANTE='http://localhost:9090/api/restaurantes'

const CompCrearReserva=() =>{
    const [restaurantes,setRestaurantes]=useState([])
    const [restauranteElegidoId,setRestauranteElegido]=useState([])
    useEffect(() =>{
        getRestaurantes()
    },[])
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas

    const getRestaurantes = async() =>{
       const res = await axios.get(URIRESTAURANTE)
       setRestaurantes(res.data)
    }
  
    const guardarReserva = async (e) =>{
        e.preventDefault()

        console.log("elegido",restauranteElegidoId)
        await axios.post(URI,{restauranteId:restauranteElegidoId})
        navigate('/reserva')
    }

    /*const deleteMesas = async(id) =>{
        
       await axios.delete(URI+'/'+id)
        getMesas()
    }
*/
    return (
        <form onSubmit={guardarReserva}>   
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {restaurantes.map ((restaurante)=>(
                                <tr key={restaurante.restauranteId}>
                                    <td>{restaurante.nombre}</td>
                                    <td>{restaurante.direccion}</td>
                                    <td>
                                    <input 
                                        value={restaurante.restauranteId} 
                                        onChange={(e)=> setRestauranteElegido(e.target.value)}
                                        type="checkbox"
                                        
                                    />
                                      
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                       
                        
                    </table>
                    <input  type="Date"></input>
                </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default CompCrearReserva;