import '../css/ProyectoCard.css';
import { Link } from 'react-router-dom';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';

function ProyectoCard({ proyecto, eliminarProyecto }) {

  const { id, titulo, categoria, estado } = proyecto;

  const getEstadoVariant = (estado) => {
    switch(estado) {
      case 'En curso':
        return 'warning';
      case 'Finalizado':
        return 'success';
      case 'Pendiente':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100 border-0 shadow-sm hover-card">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Card.Title className="mb-2">{titulo}</Card.Title>
              <Badge bg="primary" className="me-2">ID: {id}</Badge>
              <Badge bg={getEstadoVariant(estado)}>{estado}</Badge>
            </Col>
          </Row>
          
          <Card.Text className="text-muted">
            <strong>Categoría:</strong> {categoria}
          </Card.Text>

          <Row className="gap-2">
            <Col xs="auto">
              <Link to={`/proyectos/${id}`} className="btn btn-primary btn-sm">
                Ver Detalles
              </Link>
            </Col>
            <Col xs="auto">
              <Button
                variant="danger"
                size="sm"
                onClick={() => eliminarProyecto(id)}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProyectoCard;