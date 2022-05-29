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
    const [fecha,setFecha]=useState([])
    const [horario1,setHorario1]=useState([])
    const [horario2,setHorario2]=useState([])
    const [horario3,setHorario3]=useState([])
    const [horario4,setHorario4]=useState([])
    const [horario5,setHorario5]=useState([])
    const [horario6,setHorario6]=useState([])
    const [horario7,setHorario7]=useState([])
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

        if(horario1!=""){
            console.log("elegido1111",horario1)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario1})
        }
        if(horario2!=""){
            console.log("elegido2",horario2)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario2})
        }
        if(horario3!=""){
            console.log("elegido3",horario3)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario3})
        }
        if(horario4!=""){
            console.log("elegido4",horario4)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario4})
        }
        if(horario5!=""){
            console.log("elegido5",horario5)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario5})
        }
        if(horario6!=""){
            console.log("elegido6",horario6)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario6})
        }
        if(horario7!=""){
            console.log("elegido7",horario7)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:horario7})
        }
       
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
                    <div  className="row col l6">
                    <input  
                        value={fecha} 
                        onChange={(e)=> setFecha(e.target.value)}
                        type="Date"
                    />
                    </div>
                    
                    <label className="hora1" >12-13</label>
                
                    <input
                        name="hora1"
                        type="checkbox"
                        
                        value="12-13"
                        onChange={(e)=> setHorario1(e.target.value)}
                        
                        
                    />
                    <label className="hora1" >13-14</label>
                    <input
                        id="hora1"
                        value="13-14"
                        onChange={(e)=> setHorario2(e.target.value)}
                        type="checkbox"
                        
                    />
                    <label className="hora1" >14-15</label>
                    <input
                        id="hora1"
                        value="14-15"
                        onChange={(e)=> setHorario3(e.target.value)}
                        type="checkbox"
                        
                    />
                   
                     <label className="hora1" >19-20</label>
                    <input
                        id="hora1"
                        value="19-20"
                        onChange={(e)=> setHorario4(e.target.value)}
                        type="checkbox"
                        
                    />
                     <label className="hora1" >20-21</label>
                    <input
                        id="hora1"
                        value="20-21"
                        onChange={(e)=> setHorario5(e.target.value)}
                        type="checkbox"
                        
                    />
                     <label className="hora1" >21-22</label>
                    <input
                        id="hora1"
                        value="21-22"
                        onChange={(e)=> setHorario6(e.target.value)}
                        type="checkbox"
                        
                    />
                     <label className="hora1" >22-23</label>
                    <input
                        id="hora1"
                        value="22-23"
                        onChange={(e)=> setHorario7(e.target.value)}
                        type="checkbox"
                        
                    />
                </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default CompCrearReserva;