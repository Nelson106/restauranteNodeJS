
import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const URI='http://localhost:9090/api/cliente'
const URIP='http://localhost:9090/api/producto'
const URIDC='http://localhost:9090/api/detalleConsumo/consumos'
const URID='http://localhost:9090/api/detalleConsumo'
const URIC='http://localhost:9090/api/consumo'
const URIMESA='http://localhost:9090/api/mesas'
const URIESTADO='http://localhost:9090/api/consumo/consumoEstado'
const CompListarClientes=() =>{
    const [Cliente,setCliente]=useState([])
    const [ClienteElegido,setClienteElegido]=useState([])
    const [Producto,setProducto]=useState([])
    const [ProductosElegidos,setProductosElegidos]=useState([])
    const [Mesa,setMesa]=useState([])
    const [Consumo,setConsumo]=useState([])
    const [Detalles,setDetalles]=useState([])
    const navigate=useNavigate()
    const {restauranteId} = useParams()
    const {mesaId} = useParams()
   
    useEffect(() =>{
        getClientes()
        
    },[])
    useEffect(() =>{
        getMesa()
    },[])
    useEffect(() =>{
        getConsumo()
        
    },[])


    
    const getMesa = async() =>{
        const res = await axios.get(URIMESA+"/"+mesaId)
        setMesa(res.data)
    }
    const getConsumo = async() =>{
        const res = await axios.post(URIESTADO,{estado:'abierto',mesaId:mesaId})
    
        setConsumo(res.data)
       console.log("aaaaaaaaaaaaa",Consumo)
        getDetalles(Consumo)

    }
    const getClientes = async() =>{
       const res = await axios.get(URI)
       setCliente(res.data)
    }
    const getDetalles= async(Consumo)=>{
        if(Consumo.length!=0){
            const res = await axios.post(URIDC,{consumoId:Consumo[0].id})
            setDetalles(res.data)
        }


    }
    console.log("Mesaaaa",Mesa)
    console.log("Consumo",Consumo)

    console.log("detalleess",Detalles)
    
    const guardarConsumo = async (e) =>{
       e.preventDefault()
       // const res = await axios.get(URIMESA+'/'+mesaId)
        let fechaCreacion=new Date()
        await axios.post(URIC,{estado:"abierto",mesaId:mesaId,clienteId:ClienteElegido,
        fechaCreacion:fechaCreacion})
        ///setMesas(res.data)
        let bool=true;
        await axios.put(URIMESA+"/"+mesaId,{ocupado:bool})
        navigate('/restaurante/cliente/'+ClienteElegido+"/mesa/"+mesaId)
    }   
   const TerminarConsumo= async(e) =>{
    e.preventDefault()
    let bool=false;
    let fechaCierre=new Date()
    await axios.put(URIMESA+"/"+mesaId,{ocupado:bool})
    await axios.put(URIC+"/"+Consumo[0].id,{estado:"cerrado",fechaCierre:fechaCierre})
    navigate('/reservas')

   }


    // console.log("Productossss",ProductosElegidos)
    if(Mesa.ocupado==true){
        return (
            <form  onSubmit={TerminarConsumo}> 
            <div className="container">
        <div className="row">
            <div className="col">
            
        
                <th>Detalles</th>
                <table className="table">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Cantidad</th>
                            <th>Producto</th>
                           <th>Precio</th>
                    
                       </tr>
                    </thead>
                    <tbody>
                        {Detalles.map ((detalle)=>(
                            <tr key={detalle.id}>
                                <td>{detalle.id}</td>
                                <td>{detalle.cantidad}</td>
                                <td>{detalle.Producto.nombre}</td>
                                <td>{detalle.Producto.precioVenta}</td>
                            </tr>
                        ))}
                       <tr> 
                            <th>TOTAL</th>
                            <th>Cliente</th>
                            
                        </tr>
                        <tr key={Consumo[0].id}>
                                <td>{Consumo[0].total}</td>
                                <td>{Consumo[0].Cliente.nombre}</td>
                    
                            </tr>

                    </tbody>
                </table>
            </div>
        </div>


    </div>
    <button type="submit" className="btn btn-primary">Terminar Consumo</button>
    <Link to={'consumo/' + Consumo[0].id } className='btn btn-info'><i className="fa-solid fa-table"></i>Cambiar Cliente </Link>
    <Link to={'consumoProducto/' + Consumo[0].id } className='btn btn-info'><i className="fa-solid fa-table"></i>Agregar mas productos </Link>
    
    </form>
        )
    }else{
        return(
            <form  onSubmit={guardarConsumo}> 
        <div className="container">

            <div className="row">
                <div className="col">
                   
                    <th>Lista de Clientes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Cliente.map ((Client)=>(
                                <tr key={Client.id}>
                                    <td>{Client.id}</td>
                                    <td>{Client.nombre}</td>
                                    <td>{Client.apellido}</td>
                                    <td>{Client.cedula}</td>
                                    <td> <input
                     
                                             type="checkbox"
                                             value={Client.id}
                                             onChange={(e)=> setClienteElegido(e.target.value)}
                                            
                                     /></td>
                                   
                    
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
    
}

export default CompListarClientes;