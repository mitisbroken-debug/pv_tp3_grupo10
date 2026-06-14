import { Alert } from 'react-bootstrap';

function RegistroActividad({ fecha }) {
  return (
    <Alert variant="info" className="mt-4 shadow-sm border-0 text-center">
      <i className="fa-solid fa-clock me-2"></i>
      Última actualización de la lista de proyectos: <strong>{fecha}</strong>
    </Alert>
  );
}

export default RegistroActividad;