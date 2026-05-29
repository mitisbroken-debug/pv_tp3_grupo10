import React from 'react';


const DetalleProyecto = ({ proyecto }) => {
  
  
  if (!proyecto) {
    return (
      <div className="detalle-vacio">
        <p>Selecciona un proyecto de la lista para ver sus especificaciones.</p>
      </div>
    );
  }

  return (
    <div className="detalle-proyecto-contenedor">
    
      <header className="detalle-header">
        <h2>{proyecto.titulo}</h2>
        <div className="detalle-tags">
          <span className="tag-categoria"><strong>Categoría:</strong> {proyecto.categoria}</span>
          <span className={`tag-estado estado-${proyecto.estado.toLowerCase().replaceAll(" ", "-")}`}>
            <strong>Estado:</strong> {proyecto.estado}
          </span>
        </div>
      </header>

      <hr />

     
      <section className="detalle-seccion">
        <h3>Descripción del Proyecto</h3>
        {proyecto.descripcion && proyecto.descripcion.map((parrafo, index) => (
          <p key={index} className="detalle-parrafo">{parrafo}</p>
        ))}
      </section>

     
      <section className="detalle-seccion">
        <h3>Equipo de Trabajo</h3>
        <ul className="lista-equipo">
          {proyecto.equipo && proyecto.equipo.map((integrante, index) => (
            <li key={index} className="integrante-item">
              <strong>{integrante.nombre}</strong> — <span className="rol-texto">{integrante.rol}</span>
            </li>
          ))}
        </ul>
      </section>

      
      <section className="detalle-seccion">
        <h3>Enlaces y Documentación</h3>
        <div className="enlaces-grupo">
          {proyecto.links && proyecto.links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`enlace-boton enlace-${link.tipo.toLowerCase()}`}
            >
              Ver {link.tipo}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetalleProyecto;