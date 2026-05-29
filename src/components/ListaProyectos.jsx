import { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import FormularioProyecto from './FormularioProyecto';
import '../css/ListaProyectos.css';

function ListaProyectos() {

  const [proyectos, setProyectos] = useState(() =>
    proyectoService.obtenerProyectos()
  );

  const [busqueda, setBusqueda] = useState('');

  const [formulario, setFormulario] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ''
  });

  const { titulo, categoria, estado, descripcion } = formulario;

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const agregarProyecto = () => {

    if (titulo.trim() === '' || categoria.trim() === '') return;

    const nuevoProyecto = {
      id: proyectos.length + 1,
      titulo,
      categoria,
      estado,
      descripcion: [descripcion, ""]
    };

    proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(proyectoService.obtenerProyectos());

    setFormulario({
      titulo: '',
      categoria: '',
      estado: 'En curso',
      descripcion: ''
    });
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const proyectosFiltrados = proyectos.filter((p) =>
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
     <FormularioProyecto 
      form={formulario}
      manejarCambio={manejarCambio} 
      agregarProyecto={agregarProyecto} 
    />

    </section>
  );
}

export default ListaProyectos;