import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DetalleProyectoPage from './components/DetalleProyectoPage';
import './css/styles.css';
import { Routes, Route } from 'react-router-dom';

// --- ACÁ ESTÁ TU TRABAJO (PUNTO 2) ---
// Cambiamos la ruta de importación de "./components/" a "./views/"
import Dashboard from './views/Dashboard';
import ListaProyectos from './views/ListaProyectos';
import Perfil from './views/Perfil'; 

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main style={{ minHeight: '50vh', padding: '20px', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyectoPage />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;