import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import DetalleProyecto from '../components/DetalleProyecto';
import proyectoService from '../services/proyectoService';

function DetalleProyectoPage({ setUltimoProyectoId }) {
  const { id } = useParams();
  const proyectoId = Number(id);
  
  const proyecto = proyectoService.obtenerProyectos().find((p) => p.id === proyectoId);

  useEffect(() => {
    if (proyecto) {
      setUltimoProyectoId(proyectoId);
    }
  }, [proyectoId, proyecto, setUltimoProyectoId]);

  if (!proyecto) {
    return (
      <Container className="py-5 text-center" style={{ maxWidth: '600px' }}>
        <Alert variant="danger" className="mb-4 shadow-sm border-0">
          <Alert.Heading>Proyecto no encontrado</Alert.Heading>
          <p>El proyecto con ID {id} no existe o ya ha sido eliminado del sistema.</p>
        </Alert>
        <Button as={Link} to="/proyectos" variant="dark">
          Volver a la lista de proyectos
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4 text-start">
      <Button as={Link} to="/proyectos" variant="outline-secondary" className="mb-4 rounded-pill px-4">
        &larr; Volver a Proyectos
      </Button>
      <DetalleProyecto proyecto={proyecto} />
    </Container>
  );
}

export default DetalleProyectoPage;