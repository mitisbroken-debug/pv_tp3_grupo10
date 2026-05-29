import { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import '../css/ListaProyectos.css';

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(() => proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState(''); 
  
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('En curso');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const agregarProyecto = () => {
    if (nuevoTitulo.trim() === '' || nuevaCategoria.trim() === '') return;

    const nuevoProyecto = {
      id: proyectos.length + 1,
      titulo: nuevoTitulo,
      categoria: nuevaCategoria,
      estado: nuevoEstado,
      descripcion: [nuevaDescripcion, ""] 
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());

    setNuevoTitulo('');
    setNuevaCategoria('');
    setNuevaDescripcion('');
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
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
            <th colSpan="2">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
             {proyectosFiltrados.map((proyecto) => (
             <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              eliminarProyecto={eliminarProyecto}
            />
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

        <textarea 
          className="caja-texto descripcion-input" 
          placeholder="Escribe la descripción del proyecto..." 
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />

        <button className="btn-Agregar" onClick={agregarProyecto}>Agregar Proyecto</button>
      </div>
    </section>
  );
}

export default ListaProyectos;