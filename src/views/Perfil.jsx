import { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { UsuarioContext } from '../context/UsuarioContext'; 

const Perfil = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    rol: '',
    institucion: ''
  });

  useEffect(() => {
    if (usuario) {
      setFormData({
        nombre: usuario.nombre || '',
        dni: usuario.dni || '',
        rol: usuario.rol || 'Alumno',
        institucion: usuario.institucion || ''
      });
    }
  }, [usuario, editando]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarPerfil(formData);
    setEditando(false);
  };

  const obtenerInicial = (nombre) => {
    return nombre ? nombre.charAt(0).toUpperCase() : 'U';
  };

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
    <Container className="py-5" style={{ maxWidth: '1000px' }}>
      <Card className="border-0 shadow rounded-4 overflow-hidden mb-5 bg-white">
        <Row className="g-0">
          <Col md={4} className="text-white d-flex flex-column align-items-center justify-content-center p-4 text-center"
               style={{ 
                 background: usuario?.rol === 'Docente' 
                   ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' 
                   : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
               }}>
            <div className="rounded-circle bg-white text-dark d-flex align-items-center justify-content-center fw-bold shadow-lg mb-3"
                 style={{ width: '100px', height: '100px', fontSize: '2.5rem', color: '#764ba2' }}>
              {obtenerInicial(usuario?.nombre)}
            </div>
            <h5 className="fw-bold mb-1">{usuario?.nombre || 'Usuario Registrado'}</h5>
            <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill fw-bold shadow-sm mb-3">
              {usuario?.rol || 'Alumno'}
            </Badge>
            {!editando && (
              <Button 
                variant="outline-light" 
                size="sm" 
                className="rounded-pill px-4"
                onClick={() => setEditando(true)}
              >
                <i className="fa-solid fa-pen-to-square me-1"></i> Editar Perfil
              </Button>
            )}
          </Col>

          <Col md={8} className="p-4 bg-white">
            {editando ? (
              <Form onSubmit={handleSubmit}>
                <h4 className="fw-bold text-dark mb-4 border-bottom pb-2">Modificar Información</h4>
                <Row className="g-3">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold text-secondary">Nombre Completo</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                        required 
                        className="rounded-3"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-semibold text-secondary">DNI</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="dni" 
                        value={formData.dni} 
                        onChange={handleChange} 
                        required 
                        className="rounded-3"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-semibold text-secondary">Rol de Usuario</Form.Label>
                      <Form.Select 
                        name="rol" 
                        value={formData.rol} 
                        onChange={handleChange}
                        className="rounded-3"
                      >
                        <option value="Alumno">Alumno</option>
                        <option value="Docente">Docente</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold text-secondary">Institución / Facultad</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="institucion" 
                        value={formData.institucion} 
                        onChange={handleChange} 
                        required 
                        className="rounded-3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="d-flex gap-2 justify-content-end">
                  <Button variant="secondary" className="rounded-pill px-4" onClick={() => setEditando(false)}>
                    Cancelar
                  </Button>
                  <Button variant="success" type="submit" className="rounded-pill px-4 shadow-sm">
                    <i className="fa-solid fa-floppy-disk me-1"></i> Guardar Cambios
                  </Button>
                </div>
              </Form>
            ) : (
              <div>
                <h4 className="fw-bold text-dark mb-4 border-bottom pb-2">Datos Personales</h4>
                <Row className="g-4">
                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-light p-3 rounded-3 text-primary me-3 shadow-sm">
                        <i className="fa-solid fa-user fa-lg"></i>
                      </div>
                      <div>
                        <p className="text-muted mb-0 small fw-semibold text-uppercase">Nombre Completo</p>
                        <h6 className="fw-bold text-dark mb-0">{usuario?.nombre || 'No asignado'}</h6>
                      </div>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-light p-3 rounded-3 text-success me-3 shadow-sm">
                        <i className="fa-solid fa-id-card fa-lg"></i>
                      </div>
                      <div>
                        <p className="text-muted mb-0 small fw-semibold text-uppercase">Documento (DNI)</p>
                        <h6 className="fw-bold text-dark mb-0">{usuario?.dni || 'No asignado'}</h6>
                      </div>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-light p-3 rounded-3 text-warning me-3 shadow-sm">
                        <i className="fa-solid fa-graduation-cap fa-lg"></i>
                      </div>
                      <div>
                        <p className="text-muted mb-0 small fw-semibold text-uppercase">Rol en el Sistema</p>
                        <h6 className="fw-bold text-dark mb-0">{usuario?.rol || 'No asignado'}</h6>
                      </div>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-light p-3 rounded-3 text-danger me-3 shadow-sm">
                        <i className="fa-solid fa-university fa-lg"></i>
                      </div>
                      <div>
                        <p className="text-muted mb-0 small fw-semibold text-uppercase">Institución de Origen</p>
                        <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.9rem' }}>{usuario?.institucion || 'No asignado'}</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Card>

      <header className="mb-4 border-bottom border-light pb-3 text-center bg-white p-3 rounded-3 shadow-sm mx-auto" style={{ maxWidth: '900px' }}>
        <h4 className="fw-bold text-dark mb-1">Créditos del Grupo</h4>
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