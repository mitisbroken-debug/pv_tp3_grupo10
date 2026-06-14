import { useParams, Link } from 'react-router-dom';
import proyectoService from '../services/proyectoService';
import DetalleProyecto from '../components/DetalleProyecto';

function DetalleProyectoPage() {
  const { id } = useParams();
  const proyectoId = Number(id);
  const proyecto = proyectoService.obtenerProyectos().find((p) => p.id === proyectoId);

  if (!proyecto) {
    return (
      <section>
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto con ID {id} no existe o ha sido eliminado.</p>
      </section>
    );
  }

  return (
    <section style={{ padding: '20px' }}>
      <div style={{ textAlign: 'left', marginBottom: '30px' }}>
        <Link to="/proyectos" className="btn btn-outline-secondary rounded-pill px-4">
          &larr; Volver a Proyectos
        </Link>
      </div>
      
      <DetalleProyecto proyecto={proyecto} />
    </section>
  );
}

export default DetalleProyectoPage;