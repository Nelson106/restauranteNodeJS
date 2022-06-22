import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/categoria'

const CompCrearCategoria = () => {
    const [title,setTitle]= useState('')
    const navigate=useNavigate()

    //procedimient guardar
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{nombre:title})
        navigate('/categoria')
    }
    return (
        <div>
           <h3>Crear categoria</h3>
           <form onSubmit={store}>   
                <div className="mb-3">
                    <label className="form-label">Nombre Categoria</label>
                    <input 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
    )
}

export default CompCrearCategoria;