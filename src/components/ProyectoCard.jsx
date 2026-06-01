import '../css/ProyectoCard.css';

function ProyectoCard({ proyecto, eliminarProyecto, verDetalle }) {

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
        <button
          className="btn-detalles"
          onClick={() => verDetalle(proyecto)}
        >
          Ver Detalles
        </button>
      </td>
    </tr>
  );
}

export default ProyectoCard;