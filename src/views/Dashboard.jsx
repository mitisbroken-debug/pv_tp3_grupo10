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
        <Col md={8}>
          <h1 className="display-5 fw-bold">Indicadores del Proyecto</h1>
          <p className="text-muted fs-5">Métricas reales del servicio que muestran el estado actual de los proyectos del grupo.</p>
        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <span className="badge bg-primary fs-6">Proyecto activo</span>
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
        <Col lg={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Descripción rápida</Card.Title>
              <Card.Text className="text-muted">
                El dashboard muestra información basada en los datos actuales del servicio de proyectos. Puedes usar esta pantalla para visualizar el total de trabajos, los que están en curso y el progreso general del equipo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
