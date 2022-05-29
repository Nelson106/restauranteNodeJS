import logo from './logo.svg';
import './App.css';
import CompListarMesa from './mesas/listarMesa';
import CompCrearMesa from './mesas/crearMesa';

import CompListarRestaurantes from './restaurantes/listarRestaurante';

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
              <Route path='/restaurantes' element={<CompListarRestaurantes />} />
              
            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
