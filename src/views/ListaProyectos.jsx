import { useState, useEffect, useRef } from 'react'; 
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import proyectoService from '../services/proyectoService'; 
import ProyectoCard from '../components/ProyectoCard';
import FormularioProyecto from '../components/FormularioProyecto';
import DetalleProyecto from '../components/DetalleProyecto';
import RegistroActividad from '../components/RegistroActividad'; 
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(() => proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState('');

  const cantidadInicial = useRef(proyectos.length);

  useEffect(() => {
    if (proyectos.length === cantidadInicial.current) return;

    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutes = String(ahora.getMinutes()).padStart(2, '0');

    setUltimaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutes} hs.`);
  }, [proyectos]); 

  const agregarProyecto = (datosFormulario) => {
    const { titulo, categoria, estado, descripcion } = datosFormulario;

    const nuevoProyecto = {
      id: proyectos.length > 0 ? Math.max(...proyectos.map(p => p.id)) + 1 : 1,
      titulo,
      categoria,
      estado,
      descripcion: [descripcion, "Información adicional del nuevo proyecto registrado."],
      links: [
        { tipo: "PDF", url: "#" }, { tipo: "Drive", url: "#" }, { tipo: "GitHub", url: "#" }
      ],
      equipo: [{ nombre: "Usuario Creador", rol: "Asignado por defecto" }]
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
      setProyectoSeleccionado(null);
    }
  };

  const verDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const proyectosFiltrados = proyectos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="display-6 fw-bold mb-3">Mis Proyectos</h2>
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Buscar Proyectos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="border-2"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        {proyectosFiltrados.length > 0 ? (
          proyectosFiltrados.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              eliminarProyecto={eliminarProyecto}
              verDetalle={verDetalle}
            />
          ))
        ) : (
          <Col className="text-center py-5">
            <p className="text-muted fs-5">No hay proyectos que coincidan con la búsqueda.</p>
          </Col>
        )}
      </Row>

      <FormularioProyecto agregarProyecto={agregarProyecto} />

      {proyectoSeleccionado && <DetalleProyecto proyecto={proyectoSeleccionado} />}

      {ultimaActualizacion && <RegistroActividad fecha={ultimaActualizacion} />}
    </Container>
  );
}

export default ListaProyectos;