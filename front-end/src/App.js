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
import CompRestauranteMesasClientes from './restaurante/listarClientes';

import CompCrearConsumo from './restaurante/iniciarConsumo';


//import { Router } from 'express';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="btn-group" role="group" aria-label="Basic example">
          <a className="btn btn-secondary" href="/cliente" role="button">Clientes</a> 
          <a className="btn btn-secondary" href="/reservas" role="button">Reservas</a>
          <a className="btn btn-secondary" href="/restaurante" role="button">Restaurantes</a>
          <a className="btn btn-secondary" href="/mesas" role="button">Mesas</a>  
          <a className="btn btn-secondary" href="/crearReserva" role="button">Crear Reserva</a>  
        </div>
        
      </header>

      <BrowserRouter>
            <Routes>
              <Route path='/mesas' element={<CompListarMesa />} />
              <Route path='/mesas/crear' element={ <CompCrearMesa /> } />
              <Route path='/mesas/update/:mesaId' element={ <CompEditarMesa /> } />

              <Route path='/restaurante' element={ <CompListarRestaurantes/> }  />
              <Route path='/restaurante/crear' element={ <CompCrearRestaurante/> } />
              <Route path='/restaurante/update/:restauranteId' element={ <CompEditarRestaurante/> } />
              <Route path='/restaurante/reservas/:restauranteId' element={ <CompRestauranteReservas/>}/>
              <Route path='/restaurante/restaurante/:restauranteId' element={ <CompRestauranteMesas/>}/>
              <Route path='/crearReserva' element={ <CompCrearReserva /> } />
              <Route path='/reservas' element={<CompListarReservas />} />
              <Route path='/reservas/fecha/:fecha' element={<CompListarReservasF />} />
              <Route path='/cliente' element={<CompListarClientes />} />
              <Route path='/cliente/crear' element={<CompCrearCliente />} />
              <Route path='/cliente/reservas/:clienteId' element={ <CompClienteReservas/>}/>
              <Route path='/restaurante/restaurante/:restauranteId/mesas/:mesaId' element={ <CompRestauranteMesasClientes/>}/>
              <Route path='/restaurante/cliente/:clienteId' element={ <CompCrearConsumo/>}/>
              



            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
