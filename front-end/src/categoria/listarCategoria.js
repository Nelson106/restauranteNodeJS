import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:9090/api/categoria'

const CompListarCategorias=() =>{
    const [Categorias,setCategorias]=useState([])
    useEffect(() =>{
        getCategorias()
    },[])

    //procedimiento para mostrar todas las mesas

    const getCategorias = async() =>{
       const res = await axios.get(URI)
       setCategorias(res.data)
    }


    const deleteCategoria = async(id) =>{
       await axios.delete(URI+'/'+id)
        getCategorias()
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <Link to="/categoria/crear" className='btn btn-primary mt-2 mb-2'>Añadir categoria <i className="fa-solid fa-filter-list"></i></Link>
                    <th>Lista de Categorias</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Categorias.map ((Categoria)=>(
                                <tr key={Categoria.categoriaId}>
                                    <td>{Categoria.categoriaId}</td>
                                    <td>{Categoria.nombre}</td>
                                    <td>
                                        <Link to={'update/' + Categoria.categoriaId} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteCategoria(Categoria.categoriaId)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
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

export default CompListarCategorias;