import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ListaProyectos from './components/ListaProyectos';
import Perfil from './components/Perfil';
import DetalleProyectoPage from './components/DetalleProyectoPage';
import './css/styles.css';
import { Routes, Route } from 'react-router-dom';

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