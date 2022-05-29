import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:9090/api/cliente'

const CompCrearCliente = () => {
    const [name,setName]= useState('')
    const [lastname,setLastname]= useState('')
    const [ident,setIdent]= useState('')
    const navigate=useNavigate()

    //procedimient guardar
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{nombre:name, apellido:lastname, cedula:ident})
        navigate('/cliente')
    }
    return (
        <div>
           <h3>Registrar cliente</h3>
           <form onSubmit={store}>   
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input 
                        value={lastname} 
                        onChange={(e)=> setLastname(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Cedula</label>
                    <input 
                        value={ident} 
                        onChange={(e)=> setIdent(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
           </form>
        </div>
    )
}

export default CompCrearCliente;