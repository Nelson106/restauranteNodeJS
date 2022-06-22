import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/producto'

const CompListarProducto=() =>{
    const [productos,setProductos]=useState([])
    useEffect(() =>{
        getProductos()
    },[])

    //procedimiento para mostrar todas las mesas

    const getProductos = async() =>{
       const res = await axios.get(URI)
       setProductos(res.data)
       console.log(res.data)
    }

    const deleteProducto = async(id) =>{
        
       await axios.delete(URI+'/'+id)
        getProductos()
    }



    return (
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/producto/crear" className='btn btn-success'>Registrar Producto <i className="fa-solid fa-table"></i></Link>
                    <th>Lista de Productos</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map ((producto)=>(
                                <tr key={producto.productoId}>
                                    <td>{producto.productoId}</td>
                                    <td>{producto.nombre}</td>
                                    <td>Gs. {producto.precioVenta}</td>
                                    <td>{producto.Categorium.nombre}</td>
                                    <td>
                                        <Link to={'update/' + producto.productoId} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteProducto(producto.productoId)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompListarProducto;