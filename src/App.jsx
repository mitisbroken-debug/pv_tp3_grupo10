import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './css/styles.css';
import ListaProyectos from './components/ListaProyectos';
import { useEffect, useState } from 'react'
import DetalleProyecto from './components/DetalleProyecto';

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <main style={{ minHeight: '50vh', padding: '20px', textAlign: 'center' }}>
        <ListaProyectos />
      </main>

      <Footer />
    </>
  )
}

export default App;