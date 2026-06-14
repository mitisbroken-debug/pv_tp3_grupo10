import '../css/DetalleProyecto.css';
import { Card, ListGroup, Badge, Container, Row, Col } from 'react-bootstrap';

function DetalleProyecto({ proyecto }) {
  
  if (!proyecto) return null;

  const { titulo, categoria, estado, descripcion, links, equipo } = proyecto;

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
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <Card className="border-0 shadow-lg">
            <Card.Header className="bg-info text-white">
              <Card.Title className="mb-0">Detalle del Proyecto</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="mb-4">
                <Col md={6}>
                  <h4 className="fw-bold">{titulo}</h4>
                </Col>
                <Col md={6} className="text-md-end">
                  <Badge bg="primary" className="me-2">Categoría: {categoria}</Badge>
                  <Badge bg={getEstadoVariant(estado)}>Estado: {estado}</Badge>
                </Col>
              </Row>

              <hr />

              <h5 className="fw-bold mb-3">Descripción</h5>
              {descripcion && descripcion.map((parrafo, index) => (
                <p key={index} className="mb-2">{parrafo}</p>
              ))}

              <hr className="my-4" />

              <h5 className="fw-bold mb-3">Recursos y Enlaces</h5>
              <ListGroup>
                {links && links.map((link, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <span>
                      <Badge bg="secondary" className="me-2">{link.tipo}</Badge>
                    </span>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      {link.url === '#' ? 'Por definir' : link.url}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <hr className="my-4" />

              <h5 className="fw-bold mb-3">Equipo de Trabajo</h5>
              <ListGroup>
                {equipo && equipo.map((integrante, index) => (
                  <ListGroup.Item key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong>{integrante.nombre}</strong>
                      <Badge bg="primary">{integrante.rol}</Badge>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProyecto;