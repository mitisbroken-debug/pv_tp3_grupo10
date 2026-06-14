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
      <Card className="h-100 border-0 shadow-sm hover-card text-center">
        <Card.Body className="d-flex flex-column justify-content-between">
          
          <div>
            <Row className="mb-3">
              <Col>
                <Card.Title className="mb-2 fw-bold">{titulo}</Card.Title>
                <div className="d-flex justify-content-center gap-2 mb-2">
                  <Badge bg="primary">ID: {id}</Badge>
                  <Badge bg={getEstadoVariant(estado)}>{estado}</Badge>
                </div>
              </Col>
            </Row>
            
            <Card.Text className="text-muted mb-4">
              <strong>Categoría:</strong> {categoria}
            </Card.Text>
          </div>

          <Row className="justify-content-center gap-2 mt-auto">
            <Col xs="auto" className="p-0">
              <Link to={`/proyectos/${id}`} className="btn btn-primary btn-sm px-3">
                Ver Detalles
              </Link>
            </Col>
            <Col xs="auto" className="p-0">
              <Button
                variant="danger"
                size="sm"
                className="px-3"
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