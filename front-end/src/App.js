import logo from './logo.svg';
import './App.css';
import CompListarMesa from './mesas/listarMesa';
import CompCrearMesa from './mesas/crearMesa';

import CompListarClientes from './cliente/listarCliente';
import CompCrearCliente from './cliente/crearCliente';

import CompListarRestaurantes from './restaurante/listarRestaurante';
import CompCrearRestaurante from './restaurante/crearRestaurante';
import CompEditarRestaurante from './restaurante/actualizarRestaurante';

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import CompListarReservas from './reserva/listarReserva';
import CompEditarMesa from './mesas/actualizarMesa';
 
import CompCrearReserva from './reserva/crearReserva';
import CompRestauranteReservas from './restaurante/listarReservasR';
import CompClienteReservas from './cliente/listarReservasC';
import CompListarReservasF from './reserva/listarReservasFecha';
import CompRestauranteMesas from './restaurante/listarMesas';
import CompListarCategorias from './categoria/listarCategoria';
import CompEditarCategoria from './categoria/editarCategoria';
import CompCrearCategoria from './categoria/crearCategoria';



//import { Router } from 'express';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="btn-group" role="group" aria-label="Basic example">
          <a className="btn btn-secondary" href="/" role="button">Home</a>
          <a className="btn btn-secondary" href="/cliente" role="button">Clientes</a>
          <a className='btn btn-secondary' href="/categoria">Categoria</a> 
          <a className="btn btn-secondary" href="/restaurante" role="button">Restaurantes</a>
          <a className="btn btn-secondary" href="/mesas" role="button">Mesas</a>
          <a className="btn btn-secondary" href="/reservas" role="button">Reservas</a>  
        </div>
        
      </header>

      <BrowserRouter>
            <Routes>
              <Route path='/mesas' element={<CompListarMesa />} />
              <Route path='/mesas/crear' element={ <CompCrearMesa /> } />
              <Route path='/mesas/update/:mesaId' element={ <CompEditarMesa /> } />

              <Route path='/categoria' element={ <CompListarCategorias/> }/>
              <Route path='/categoria/crear' element={ <CompCrearCategoria/>}/>
              <Route path='/categoria/update/:categoriaId' element={ <CompEditarCategoria/> } />

              <Route path='/restaurante' element={ <CompListarRestaurantes/> }  />
              <Route path='/restaurante/crear' element={ <CompCrearRestaurante/> } />
              <Route path='/restaurante/update/:restauranteId' element={ <CompEditarRestaurante/> } />
              <Route path='/restaurante/reservas/:restauranteId' element={ <CompRestauranteReservas/>}/>
              <Route path='/restaurante/mesas/:restauranteId' element={ <CompRestauranteMesas/>}/>

              <Route path='/crearReserva' element={ <CompCrearReserva /> } />
              <Route path='/reservas' element={<CompListarReservas />} />
              <Route path='/reservas/fecha/:fecha' element={<CompListarReservasF />} />

              <Route path='/cliente' element={<CompListarClientes />} />
              <Route path='/cliente/crear' element={<CompCrearCliente />} />
              <Route path='/cliente/reservas/:clienteId' element={ <CompClienteReservas/>}/>


            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
