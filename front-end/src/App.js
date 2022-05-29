import logo from './logo.svg';
import './App.css';
import CompListarMesa from './mesas/listarMesa';
import CompCrearMesa from './mesas/crearMesa';

import CompListarRestaurantes from './restaurante/listarRestaurante';
import CompCrearRestaurante from './restaurante/crearRestaurante';
import CompEditarRestaurante from './restaurante/actualizarRestaurante';

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import CompEditarMesa from './mesas/actualizarMesa';

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

              <Route path='/restaurante' element={ <CompListarRestaurantes/> }  />
              <Route path='/restaurante/crear' element={ <CompCrearRestaurante/> } />
              <Route path='/restaurante/update/:restauranteId' element={ <CompEditarRestaurante/> } />
            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
