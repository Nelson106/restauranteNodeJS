import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/mesas'

const CompCrearMesa = () => {
    const [title,setTitle]= useState('')
    const [content,setContent]= useState('')
    const navigate=useNavigate()

    //procedimient guardar
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{nombreMesa:title})
        navigate('/')
    }
    return (
        <div>
           <h3>Crear mesa</h3>
           <form onSubmit={store}>   
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
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

export default CompCrearMesa;