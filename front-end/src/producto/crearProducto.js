import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/producto'
const URICATEGORIA='http://localhost:9090/api/categoria'

const CompCrearProducto = () => {
    const [title,setTitle]= useState('')
    const [precio,setPrecio]= useState('')

    const [categpriaId,setCategoriaId]= useState('')

    const [categorias,setCategorias]=useState([])
    const [categoriaElegidaId,setCategoriaElegida]=useState([])


    const navigate=useNavigate()

    useEffect(() =>{
        getCategorias()
    },[])

    const getCategorias = async() =>{
        const res = await axios.get(URICATEGORIA)
        setCategorias(res.data)
     }
    //procedimient guardar
    const store = async (e) =>{
        e.preventDefault()
        console.log("title",categoriaElegidaId)

        await axios.post(URI,{nombre:title,precioVenta:precio,CategoriumCategproaId:categoriaElegidaId})

      
        navigate('/producto')
    }
    return (
        <div>
           <h3>Crear producto</h3>
           <form  onSubmit={store}>   
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="row">
                    <div className="col">
                        <th>Seleccionar Categoria:</th>
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Seleccionar</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                {categorias.map((categoria)=>(
                                    <tr key={categoria.categoriaId}>
                                        <td>{categoria.categoriaId}</td>
                                        <td>{categoria.nombre}</td>
                                        <td>
                                            <input
                                                value={categoria.categoriaId}
                                                onChange={(e)=> setCategoriaElegida(e.target.value)}
                                                type="checkbox"
                                            />
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                </div>
                                
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
    )
}

export default CompCrearProducto;