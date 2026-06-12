import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Perfil = () => {
  
  const integrantes = [
    { 
      nombre: "Lucas Alvaro Flores", 
      inicial: "L",
      rol: "Front-end Dev", 
      github: "https://github.com/LucasAFlores",
      color: "#0d6efd",
      descripcion: "Especialista en React y diseño de interfaces visuales."
    },
    { 
      nombre: "Federico Rios Marcial", 
      inicial: "F",
      rol: "Back-end Dev", 
      github: "https://github.com/Fede-Marcial",
      color: "#198754",
      descripcion: "Arquitecto de APIs RESTful y seguridad de datos."
    },
    { 
      nombre: "Mauro Arcangel Chauque", 
      inicial: "M",
      rol: "Base de Datos", 
      github: "https://github.com/Mauro006",
      color: "#ffc107",
      descripcion: "Administrador de bases de datos relacionales."
    },
    { 
      nombre: "Vega Brian Agustin", 
      inicial: "B",
      rol: "QA Tester", 
      github: "https://github.com/mitisbroken-debug",
      color: "#dc3545",
      descripcion: "Asegura la calidad mediante pruebas y control de bugs."
    }
  ];

  return (
    <Container className="py-4">
      <header className="mb-4 border-bottom border-light pb-3 text-center bg-white p-3 rounded-3 shadow-sm mx-auto" style={{ maxWidth: '900px' }}>
        <h4 className="fw-bold text-dark mb-1">Equipo de Desarrollo</h4>
        <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>Grupo 10 - Programación Visual (UNJU)</p>
      </header>

      <Row className="g-3 justify-content-center">
        {integrantes.map((miembro, index) => (
          <Col sm={6} lg={3} key={index}>
            <Card className="border-0 shadow-sm rounded-3 h-100 bg-white">
              <Card.Body className="p-3 d-flex flex-column text-center align-items-center">
                
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-2 shadow-sm"
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: miembro.color,
                    fontSize: '1.2rem'
                  }}
                >
                  {miembro.inicial}
                </div>
                
                <h6 className="fw-bold text-dark mb-2" style={{ minHeight: '38px' }}>
                  {miembro.nombre}
                </h6>
                
                <div 
                  className="bg-light text-secondary rounded px-2 py-1 mb-2 fw-semibold w-100" 
                  style={{ fontSize: '0.75rem' }}
                >
                  {miembro.rol}
                </div>
                
                <Card.Text className="text-muted mb-3 px-1" style={{ fontSize: '0.8rem' }}>
                  {miembro.descripcion}
                </Card.Text>
                
                <div className="mt-auto w-100">
                  <Button 
                    variant="outline-dark" 
                    size="sm"
                    href={miembro.github} 
                    target="_blank" 
                    className="w-100 rounded-pill"
                  >
                    <i className="fa-brands fa-github me-1"></i> GitHub
                  </Button>
                </div>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Perfil;