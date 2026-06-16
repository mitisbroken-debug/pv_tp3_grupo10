import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './css/styles.css';
import { Routes, Route } from 'react-router-dom';
import { UsuarioProvider } from './context/UsuarioContext';

import Dashboard from './views/Dashboard';
import ListaProyectos from './views/ListaProyectos';
import DetalleProyectoPage from './views/DetalleProyectoPage'; 
import Perfil from './views/Perfil'; 

function App() {
  const [ultimoProyectoId, setUltimoProyectoId] = useState(1);

  return (
    <UsuarioProvider>
      <Header />
      <Nav ultimoProyectoId={ultimoProyectoId} />
      <main style={{ minHeight: '50vh', padding: '20px', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route
            path="/proyectos/:id"
            element={<DetalleProyectoPage setUltimoProyectoId={setUltimoProyectoId} />}
          />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
      <Footer />
    </UsuarioProvider>
  )
}

export default App;