import '../css/ProyectoCard.css';
import { Link } from 'react-router-dom';

function ProyectoCard({ proyecto, eliminarProyecto }) {

  const { id, titulo, categoria, estado } = proyecto;

  return (
    <tr>
      <td>{id}</td>
      <td>{titulo}</td>
      <td>{categoria}</td>
      <td>{estado}</td>
      <td>
        <button
          className="btn-eliminar"
          onClick={() => eliminarProyecto(id)}
        >
          Eliminar
        </button>
      </td>
      <td>
        <Link className="btn-detalles" to={`/proyectos/${id}`}>
          Ver Detalles
        </Link>
      </td>
    </tr>
  );
}

export default ProyectoCard;