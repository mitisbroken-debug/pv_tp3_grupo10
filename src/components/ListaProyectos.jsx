import { useState } from 'react';
import { inicialProyectos } from '../services/proyectoService'; 
import '../css/ListaProyectos.css';

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(inicialProyectos); 
  const [busqueda, setBusqueda] = useState(''); 
  
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('En curso');

  const agregarProyecto = () => {
    if (nuevoTitulo.trim() === '' || nuevaCategoria.trim() === '') return;

    const nuevoProyecto = {
      id: proyectos.length + 1,
      titulo: nuevoTitulo,
      categoria: nuevaCategoria,
      estado: nuevoEstado
    };

    setProyectos([...proyectos, nuevoProyecto]);
    
    setNuevoTitulo('');
    setNuevaCategoria('');
  };

  const eliminarProyecto = (id) => {
    setProyectos(proyectos.filter(p => p.id !== id));
  };

  const proyectosFiltrados = proyectos.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section>
      <div>
        <input 
          className="btn-Buscar" 
          type="text" 
          placeholder="Buscar Proyectos" 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITULO</th>
            <th>CATEGORIA</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {proyectosFiltrados.map((proyecto) => (
            <tr key={proyecto.id}>
              <td>{proyecto.id}</td>
              <td>{proyecto.titulo}</td>
              <td>{proyecto.categoria}</td>
              <td>{proyecto.estado}</td>
              <td>
                <button className="btn-eliminar" onClick={() => eliminarProyecto(proyecto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="seccion-formulario">
        <input 
          type="text" 
          className="caja-texto" 
          placeholder="Título del proyecto" 
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <input 
          type="text" 
          className="caja-texto" 
          placeholder="Categoría" 
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
        />
        <select 
          className="caja-texto" 
          value={nuevoEstado}
          onChange={(e) => setNuevoEstado(e.target.value)}
        >
          <option value="En curso">En curso</option>
          <option value="Finalizado">Finalizado</option>
          <option value="Pendiente">Pendiente</option>
        </select>

        <button className="btn-Agregar" onClick={agregarProyecto}>Agregar Proyecto</button>
      </div>
    </section>
  );
}

export default ListaProyectos;