
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
const URIESTADO='http://localhost:9090/api/consumo/consumoEstadoCliente'
const CompAgregarProducto=() =>{
    const [Cliente,setCliente]=useState([])
    const [Producto,setProducto]=useState([])
    const [ProductosElegidos,setProductosElegidos]=useState([])
    const [Consumo,setConsumo]=useState([])


    const {restauranteId} = useParams()
    const {mesaId} = useParams()
   
    const navigate=useNavigate()
    const {clienteId} = useParams()
    const {consumoId} = useParams()
    
    useEffect(() =>{
        
        getProductos()
        
    },[])

    
    const getProductos = async() =>{
       const res = await axios.get(URIP)
      
       setProducto(res.data)
    
    }


    const guardarConsumo = async (e) =>{
       e.preventDefault()
       // const res = await axios.get(URIMESA+'/'+mesaId)
       const res1= await axios.get(URIC+"/"+consumoId)
       let i;
       let total=Number(res1.data.total);
       for(i=0;i<ProductosElegidos.length;i++){
        
            const res= await axios.get(URIP+"/"+ProductosElegidos[i])
            await axios.post(URIDC,{cantidad:1,consumoId:consumoId,productoId:ProductosElegidos[i]})
            total=total+Number(res.data.precioVenta)
       }
       await axios.put(URIC+"/"+consumoId,{total:total})
       
      
       navigate('/restaurante/restaurante/'+restauranteId+"/mesas/"+mesaId)
        //navigate('/reservas')
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
         <button type="submit" className="btn btn-primary">Agregar Consumo</button>
        </form>
       
    )
}

export default CompAgregarProducto;