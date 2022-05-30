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
    const [horario11,setHorario1]=useState([])
    const [horario22,setHorario2]=useState([])
    const [horario33,setHorario3]=useState([])
    const [horario44,setHorario4]=useState([])
    const [horario55,setHorario5]=useState([])
    const [horario66,setHorario6]=useState([])
    const [horario77,setHorario7]=useState([])
    



    const [mesas,setMesas]=useState([])
    const [mesaId,setMesaId]=useState([])
    const [capacidad,setCapacidad]=useState([])
    useEffect(() =>{
        getRestaurantes()
    },[])
    let component=null
   
    
    
    
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas

    const getRestaurantes = async() =>{
       const res = await axios.get(URIRESTAURANTE)
       setRestaurantes(res.data)
    }
    const handleChexbox1 = (e) => {
        
         horario1=e.target.checked
        setHorario1(horario1)
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        getMesas(restauranteElegidoId,fecha,'12-13')
      }
      const handleChexbox2 = (e) => {
        
         horario2=e.target.checked
         setHorario2(horario2)
         getMesas(restauranteElegidoId,fecha,'13-14')
      }
      const handleChexbox3 = (e) => {
        
         horario3=e.target.checked
         setHorario3(horario3)
         getMesas(restauranteElegidoId,fecha,'14-15')
      }
      const handleChexbox4 = (e) => {
        
        horario4=e.target.checked
        setHorario4(horario4)
        getMesas(restauranteElegidoId,fecha,'19-20')
       
      }
      const handleChexbox5 = (e) => {
        
         horario5=e.target.checked
         setHorario5(horario5)
         getMesas(restauranteElegidoId,fecha,'20-21')
      }
      const handleChexbox6 = (e) => {
        
         horario6=e.target.checked
         setHorario6(horario6)
         getMesas(restauranteElegidoId,fecha,'21-22')
       
      }
      const handleChexbox7 = (e) => {
        
         horario7=e.target.checked
         setHorario7(horario7)
         getMesas(restauranteElegidoId,fecha,'22-23')
       
      }
    //procedimiento para mostrar todas las mesas
   
    
      /*  useEffect(() =>{
            
        },[])*/

   
    const getMesas = async(r,f,h) =>{
        console.log("rrrr",r,f,h)
        const res = await axios.post('http://localhost:9090/api/mesas/listarMesas',{restauranteId:r,fecha:fecha,horario:h})
        setMesas(res.data)
     }
     
     if(restauranteElegidoId!="" && fecha!="" && (horario1 || horario2 || horario3 || 
        horario4 || horario5 || horario6 || horario7)){
        component=<div className="container">
        <div className="row">
            <div className="col">
                <Link to="/mesas/crear" className='btn btn-success'><i className="fa-solid fa-plus"></i></Link>
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
    }
    const guardarReserva = async (e) =>{
        e.preventDefault()
        const res = await axios.get(URIMESA+'/'+mesaId)
            
        console.log("mesa elegida",horario1)
        
  
        //setMesas(res.data)
        if(horario1){
            console.log("elegido1111",horario1)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:"12-13",mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario2){
            console.log("elegido2",horario2)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'13-14',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario3){
            console.log("elegido3",horario3)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'14-15',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario4){
            console.log("elegido4",horario4)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'19-20',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario5){
            console.log("elegido5",horario5)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'20-21',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario6){
            console.log("elegido6",horario6)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'21-22',mesaId:mesaId,cantidad:res.data.capacidad})
        }
        if(horario7){
            console.log("elegido7",horario7)
            await axios.post(URI,{restauranteId:restauranteElegidoId,fecha:fecha,
                horario:'22-23',mesaId:mesaId,cantidad:res.data.capacidad})
        }
       
        navigate('/reservas')
    }

    
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
         {component}
        <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default CompCrearReserva;