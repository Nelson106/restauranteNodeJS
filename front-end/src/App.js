import logo from './logo.svg';
import './App.css';
import CompListarMesa from './mesas/listarMesa';
import CompCrearMesa from './mesas/crearMesa';
import CompListarReservas from './reserva/listarReserva';
import CompEditarMesa from './mesas/actualizarMesa';
 
import CompCrearReserva from './reserva/crearReserva';

import { BrowserRouter,Route, Routes } from 'react-router-dom';


//import { Router } from 'express';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>

      <BrowserRouter>
            <Routes>
              <Route path='/' element={<CompListarMesa />} />
              <Route path='/create' element={ <CompCrearMesa /> } />
              <Route path='/update/:mesaId' element={ <CompEditarMesa /> } />

              <Route path='/reserva' element={ <CompCrearReserva /> } />

              <Route path='/reservas' element={<CompListarReservas />} />

            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
