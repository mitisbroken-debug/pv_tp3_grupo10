import { useParams } from 'react-router-dom';
import proyectoService from '../services/proyectoService';
import DetalleProyecto from './Detalleproyecto';

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
    <section>
      <DetalleProyecto proyecto={proyecto} />
    </section>
  );
}

export default DetalleProyectoPage;
