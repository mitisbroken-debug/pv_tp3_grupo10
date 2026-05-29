import '../css/DetalleProyecto.css';

function DetalleProyecto({ proyecto }) {
  
  if (!proyecto) return null;

  
  const { titulo, categoria, estado, descripcion, links, equipo } = proyecto;

  return (
    <div className="detalle-proyecto-contenedor">
      <h2>Detalle del Proyecto: {titulo}</h2>
      <p><strong>Categoría:</strong> {categoria} | <strong>Estado:</strong> {estado}</p>
      
      <h3>Descripción</h3>
      {descripcion && descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}

      <h3>Recursos y Links</h3>
      <ul>
        {links && links.map((link, index) => (
          <li key={index}>
            <strong>{link.tipo}:</strong> 
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
          </li>
        ))}
      </ul>

      <h3>Equipo de Trabajo</h3>
      <ul>
        {equipo && equipo.map((integrante, index) => (
          <li key={index}>
            <span><strong>{integrante.nombre}</strong></span>
            <em>{integrante.rol}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleProyecto;