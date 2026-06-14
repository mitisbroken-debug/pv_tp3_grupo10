import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import "../css/FormularioProyecto.css"

function FormularioProyecto({ agregarProyecto }) {

  const [form, setForm] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const manejarEnvio = () => {
    if (form.titulo.trim() === '' || form.categoria.trim() === '') return;
    
    agregarProyecto(form);
    setForm({ titulo: '', categoria: '', estado: 'En curso', descripcion: '' });
  };

  return (
    <Container className="mt-5 mb-5">
      <Card className="border-0 shadow-lg">
        <Card.Header className="bg-primary text-white">
          <Card.Title className="mb-0">Agregar Nuevo Proyecto</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título del Proyecto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título del proyecto"
                name="titulo"
                value={form.titulo}
                onChange={manejarCambio}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la categoría"
                name="categoria"
                value={form.categoria}
                onChange={manejarCambio}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                name="estado"
                value={form.estado}
                onChange={manejarCambio}
              >
                <option value="En curso">En curso</option>
                <option value="Finalizado">Finalizado</option>
                <option value="Pendiente">Pendiente</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escriba la descripción del proyecto..."
                name="descripcion"
                value={form.descripcion}
                onChange={manejarCambio}
              />
            </Form.Group>

            <Button
              variant="success"
              size="lg"
              onClick={manejarEnvio}
              className="w-100"
            >
              Agregar Proyecto
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FormularioProyecto;