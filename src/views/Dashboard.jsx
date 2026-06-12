import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import proyectoService from '../services/proyectoService';

function Dashboard() {
  const proyectos = proyectoService.obtenerProyectos();
  const totalProyectos = proyectos.length;
  const proyectosEnCurso = proyectos.filter((p) => p.estado === 'En curso').length;
  const proyectosFinalizados = proyectos.filter((p) => p.estado === 'Finalizado').length;
  const proyectosPendientes = proyectos.filter((p) => p.estado === 'Pendiente').length;
  const avance = totalProyectos ? Math.round((proyectosFinalizados / totalProyectos) * 100) : 0;

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col>
          <h1 className="display-5 fw-bold" style={{ color: '#000', marginTop: '-10px' }}>Estados de Proyectos</h1>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col sm={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <Card.Subtitle className="mb-2 text-muted">Total de proyectos</Card.Subtitle>
                  <h2 className="fw-bold text-primary">{totalProyectos}</h2>
                </div>
                <div className="text-secondary fs-3">📁</div>
              </div>
              <Card.Text className="text-muted">Proyectos registrados en el sistema.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <Card.Subtitle className="mb-2 text-muted">En curso</Card.Subtitle>
                  <h2 className="fw-bold text-warning">{proyectosEnCurso}</h2>
                </div>
                <div className="text-secondary fs-3">🚧</div>
              </div>
              <Card.Text className="text-muted">Proyectos actualmente en desarrollo.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <Card.Subtitle className="mb-2 text-muted">Finalizados</Card.Subtitle>
                  <h2 className="fw-bold text-success">{proyectosFinalizados}</h2>
                </div>
                <div className="text-secondary fs-3">✅</div>
              </div>
              <Card.Text className="text-muted">Proyectos ya concluidos.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <Card.Subtitle className="mb-2 text-muted">Pendientes</Card.Subtitle>
                  <h2 className="fw-bold text-danger">{proyectosPendientes}</h2>
                </div>
                <div className="text-secondary fs-3">⏳</div>
              </div>
              <Card.Text className="text-muted">Proyectos que aún no arrancaron.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <Card.Title className="mb-1">Avance de proyectos</Card.Title>
                  <Card.Subtitle className="text-muted">{avance}% finalizados</Card.Subtitle>
                </div>
                <span className="badge bg-success">{proyectosFinalizados} / {totalProyectos}</span>
              </div>
              <ProgressBar now={avance} label={`${avance}%`} />
            </Card.Body>
          </Card>
        </Col>
        {/* Tarjeta "Descripción rápida" removida */}
      </Row>
    </Container>
  );
  
}

export default Dashboard;
