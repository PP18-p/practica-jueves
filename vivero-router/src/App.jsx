import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import Inicio from './Inicio.jsx';
import Plantas from './Plantas.jsx';
import DetallePlanta from './DetallePlanta.jsx';
import Cuidados from './Cuidados.jsx';
import NoEncontrado from './NoEncontrado.jsx';

function App() {
  useEffect(() => {
    console.log('¡Hola! Bienvenido al vivero 🌱');
  }, []);

  return (
    <BrowserRouter>
      <nav className="menu">
        <strong>🌿 Vivero Verde</strong>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/plantas">Plantas</NavLink>
        <NavLink to="/cuidados">Cuidados</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/plantas/:id" element={<DetallePlanta />} />
          <Route path="/cuidados" element={<Cuidados />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;