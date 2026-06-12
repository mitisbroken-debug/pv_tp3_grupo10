import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="py-4">
      {/* Cabecera más compacta */}
      <header className="mb-4 text-center bg-white p-4 rounded-3 shadow-sm border border-light mx-auto" style={{ maxWidth: '800px' }}>
        <h3 className="fw-bolder text-dark mb-2">Panel de Control General</h3>
        <p className="text-muted fs-6 mb-0">
          Monitoreo centralizado del estado de tus tareas y proyectos activos. 
        </p>
      </header>

      {/* Tarjetas de métricas ajustadas */}
      <Row className="g-3 mb-4 justify-content-center">
        <Col md={5} lg={4}>
          <Card className="border-0 shadow-sm rounded-3 h-100 bg-white overflow-hidden">
            <div style={{ height: '4px', backgroundColor: '#0d6efd' }}></div>
            <Card.Body className="p-3 d-flex align-items-center">
              <div className="bg-light p-3 rounded-circle me-3 text-primary">
                <i className="fa-solid fa-folder-tree fa-2x opacity-75"></i>
              </div>
              <div>
                <h6 className="text-uppercase text-muted fw-bold mb-0" style={{fontSize: '0.75rem'}}>Total Proyectos</h6>
                <h2 className="fw-bolder text-dark mb-0">5</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={5} lg={4}>
          <Card className="border-0 shadow-sm rounded-3 h-100 bg-white overflow-hidden">
            <div style={{ height: '4px', backgroundColor: '#198754' }}></div>
            <Card.Body className="p-3 d-flex align-items-center">
              <div className="bg-light p-3 rounded-circle me-3 text-success">
                <i className="fa-solid fa-bars-progress fa-2x opacity-75"></i>
              </div>
              <div>
                <h6 className="text-uppercase text-muted fw-bold mb-0" style={{fontSize: '0.75rem'}}>Proyectos en Curso</h6>
                <h2 className="fw-bolder text-dark mb-0">3</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Lista inferior más limpia */}
      <section className="bg-white p-4 rounded-3 shadow-sm border border-light mx-auto" style={{ maxWidth: '800px' }}>
        <h6 className="fw-bold mb-3 text-secondary text-uppercase" style={{fontSize: '0.85rem'}}>Actividad Reciente</h6>
        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
          <div className="fw-bold fs-6 text-dark">Sistema de Gestión - Frontend</div>
          <Badge bg="success" pill>Completado</Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="fw-bold fs-6 text-dark">Gestor de Tareas - TP4 React</div>
          <Badge bg="warning" pill text="dark">En Proceso</Badge>
        </div>
      </section>
    </Container>
  );
};

export default Dashboard;