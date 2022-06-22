
import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/cliente'
const URIP='http://localhost:9090/api/producto'
const URIDC='http://localhost:9090/api/detalleConsumo'
const URIC='http://localhost:9090/api/consumo'
const URICONSUMO='http://localhost:9090/api/consumo/consumoCliente'
const URIESTADO='http://localhost:9090/api/consumo/consumoEstado'
const CompIniciarConsumo=() =>{
    const [Cliente,setCliente]=useState([])
    const [Producto,setProducto]=useState([])
    const [ProductosElegidos,setProductosElegidos]=useState([])
    const [Consumo,setConsumo]=useState([])


    /*const {restauranteId} = useParams()
    const {mesaId} = useParams()
   */
    const navigate=useNavigate()
    const {clienteId} = useParams()
    
    useEffect(() =>{
        
        getProductos()
        getClienteConsumo()
    },[])

    const getClienteConsumo= async()=>{
        
        const Consumo= await axios.post(URIESTADO,{estado:'abierto'})
       
        setConsumo(Consumo.data)
    }
    const getProductos = async() =>{
       const res = await axios.get(URIP)
      
       setProducto(res.data)
    }
    
    const guardarConsumo = async (e) =>{
       e.preventDefault()
       // const res = await axios.get(URIMESA+'/'+mesaId)
       let i;
       let total=Number(0);
       for(i=0;i<ProductosElegidos.length;i++){
        
            const res= await axios.get(URIP+"/"+ProductosElegidos[i])
            await axios.post(URIDC,{cantidad:1,consumoId:Consumo[0].id,productoId:ProductosElegidos[i]})
            total=total+Number(res.data.precioVenta)
       }
       await axios.put(URIC+"/"+Consumo[0].id,{total:total})
       console.log("totaaaaal",Consumo)
      
       
        navigate('/reservas')
    }

    
    
     
    return (
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
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Producto.map ((Producto)=>(
                                <tr key={Producto.productoId}>
                                    <td>{Producto.productoId}</td>
                                    <td>{Producto.nombre}</td>
                                    <td>{Producto.precioVenta}</td>
                                    <td>{Producto.Categorium.nombre}</td>
                                    <td> <input

                                             type="checkbox"
                                             value={Producto.productoId}
                                             onChange={(e)=> setProductosElegidos(ProductosElegidos.concat( e.target.value))}
                                            
                                     /></td>
                                   
                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
         <button type="submit" className="btn btn-primary">Iniciar Consumo</button>
        </form>
       
    )
}

export default CompIniciarConsumo;