import axios from "axios";
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const URI='http://localhost:9090/api/reservas'
const URICLIENTE='http://localhost:9090/api/cliente'
const URIMESA='http://localhost:9090/api/mesas'
const URIRESTAURANTE='http://localhost:9090/api/restaurantes'
    let horario1
    let horario2
    let horario3
    let horario4
    let horario5
    let horario6
    let horario7
const CompCrearReserva=() =>{
    const [restaurantes,setRestaurantes]=useState([])
    const [restauranteElegidoId,setRestauranteElegido]=useState([])
    const [fecha,setFecha]=useState([])
    const [clientes, setClientes] = useState([])
    const [clienteElegidoId, setClienteElegido]=useState([])
   /* const [horario1,setHorario1]=useState([])
    const [horario2,setHorario2]=useState([])
    const [horario3,setHorario3]=useState([])
    const [horario4,setHorario4]=useState([])
    const [horario5,setHorario5]=useState([])
    const [horario6,setHorario6]=useState([])
    const [horario7,setHorario7]=useState([])*/
    
    const [mesas,setMesas]=useState([])
    const [mesaId,setMesaId]=useState([])
    const [capacidad,setCapacidad]=useState([])
    useEffect(() =>{
        getRestaurantes()
    },[])

    useEffect(() =>{
        getClientes()
    },[])

    useEffect(() =>{
        getMesas()
    },[])

    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas

    const getClientes = async() =>{
        const res = await axios.get(URICLIENTE)
        setClientes(res.data)
    }

    const getRestaurantes = async() =>{
       const res = await axios.get(URIRESTAURANTE)
       setRestaurantes(res.data)
    }
    const handleChexbox1 = (e) => {
        
         horario1=e.target.checked
         console.log("adsada",horario1)
       
      }
      const handleChexbox2 = (e) => {
        
         horario2=e.target.checked
       
      }
      const handleChexbox3 = (e) => {
        
         horario3=e.target.checked
       
      }
      const handleChexbox4 = (e) => {
        
        horario4=e.target.checked
       
      }
      const handleChexbox5 = (e) => {
        
         horario5=e.target.checked
       
      }
      const handleChexbox6 = (e) => {
        
         horario6=e.target.checked
       
      }
      const handleChexbox7 = (e) => {
        
         horario7=e.target.checked
       
      }
    //procedimiento para mostrar todas las mesas

    const getMesas = async() =>{
        const res = await axios.get(URIMESA)
        setMesas(res.data)
     }
    const guardarReserva = async (e) =>{
        e.preventDefault()
        const res = await axios.get(URIMESA+'/'+mesaId)

        console.log("mesa elegida",horario1)
        
        //setMesas(res.data)
        if(horario1){
            console.log("elegido1111",horario1)
            await axios.post(URI,{clienteId:clienteElegidoId, restauranteId:restauranteElegidoId,fecha:fecha,
                horario:"12-13",mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario2){
            console.log("elegido2",horario2)
            await axios.post(URI,{clienteId:clienteElegidoId,restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'13-14',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario3){
            console.log("elegido3",horario3)
            await axios.post(URI,{clienteId:clienteElegidoId,restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'14-15',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario4){
            console.log("elegido4",horario4)
            await axios.post(URI,{clienteId:clienteElegidoId,restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'19-20',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario5){
            console.log("elegido5",horario5)
            await axios.post(URI,{clienteId:clienteElegidoId,restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'20-21',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario6){
            console.log("elegido6",horario6)
            await axios.post(URI,{clienteId:clienteElegidoId,restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'21-22',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario7){
            console.log("elegido7",horario7)
            await axios.post(URI,{clienteId:clienteElegidoId,restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'22-23',mesaId:mesaId,cantidad:res.data.capacidad})
        }
       
        navigate('/reservas')
    }

    
    return (
        <form onSubmit={guardarReserva}>   
        <div className="container">
            <div className="row">
                <div className="col">
                    <th>Clientes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map ((cliente)=>(
                                <tr key={cliente.id}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellido}</td>
                                    <td>{cliente.cedula}</td>
                                    <td>
                                    <input 
                                        value={cliente.id} 
                                        onChange={(e)=> setClienteElegido(e.target.value)}
                                        type="checkbox"
                                        
                                    />
                                      
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                       
                        
                    </table>
                    
                    <th>Restaurantes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Seleccionar</th>
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
                    <th>Seleccionar fecha de Reserva</th>
                    <div  className="row col l6">
                    
                    <input  
                        value={fecha} 
                        onChange={(e)=> setFecha(e.target.value)}
                        type="Date"
                    />
                    </div>
                    <th>Seleccionar Horario de Reserva</th>
                    <label className="hora1" >12-13</label>
                
                    <input
                        name="hora1"
                        type="checkbox"
                        
                        onChange={handleChexbox1}
                        
                        
                        
                    />
                    <label className="hora1" >13-14</label>
                    <input
                        onChange={handleChexbox2}
                        type="checkbox"
                        
                    />
                    <label className="hora1" >14-15</label>
                    <input
                        onChange={handleChexbox3}
                        type="checkbox"
                        
                    />
                   
                     <label className="hora1" >19-20</label>
                    <input
                        onChange={handleChexbox4}
                        type="checkbox"
                        
                    />
                     <label className="hora1" >20-21</label>
                    <input
                        onChange={handleChexbox5}
                        type="checkbox"
                        
                    />
                     <label className="hora1" >21-22</label>
                    <input
                        onChange={handleChexbox6}
                        type="checkbox"
                        
                    />
                     <label className="hora1" >22-23</label>
                    <input
                        onChange={handleChexbox7}
                        type="checkbox"
                        
                    />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/mesas/crear" className='btn btn-success'>Crear mesa <i className="fa-solid fa-table"></i></Link>
                    <th>Lista de Mesas</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Piso</th>
                                <th>Capacidad</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mesas.map ((mesa)=>(
                                <tr key={mesa.mesaId}>
                                    <td>{mesa.mesaId}</td>
                                    <td>{mesa.nombreMesa}</td>
                                    <td>{mesa.piso}</td>
                                    <td>{mesa.capacidad}</td>
                                    <td>
                                            <input
                                                
                                                value={mesa.mesaId}
                                                onChange={(e)=> setMesaId(e.target.value)}
                                                type="checkbox"
                                                
                                            />
                                       
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default CompCrearReserva;