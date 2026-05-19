import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './css/styles.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <main style={{ minHeight: '50vh', padding: '20px', textAlign: 'center' }}>
        <h2>Lista de proyectos</h2>
      </main>

      <Footer />
    </>
  )
}

export default App;