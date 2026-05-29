import { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import FormularioProyecto from './FormularioProyecto';
import DetalleProyecto from './DetalleProyecto';
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(() =>
    proyectoService.obtenerProyectos()
  );

  const [busqueda, setBusqueda] = useState('');
  
  
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

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
     
      descripcion: [descripcion, "Información adicional del nuevo proyecto registrado."],
      links: [
        { tipo: "PDF", url: "#" },
        { tipo: "Drive", url: "#" },
        { tipo: "GitHub", url: "#" }
      ],
      equipo: [
        { nombre: "Usuario Creador", rol: "Asignado por defecto" }
      ]
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
              verDetalle={verDetalle}
            />
          ))}
        </tbody>
      </table>

      <FormularioProyecto 
        form={formulario}
        manejarCambio={manejarCambio} 
        agregarProyecto={agregarProyecto} 
      />

      
      {proyectoSeleccionado && (
        <DetalleProyecto proyecto={proyectoSeleccionado} />
      )}
    </section>
  );
}

export default ListaProyectos;