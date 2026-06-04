import { useState, useEffect, useRef } from 'react'; 
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
  const [ultimaActualizacion, setUltimaActualizacion] = useState('');

  const [formulario, setFormulario] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ''
  });

  const esPrimerRender = useRef(true);

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = false;
      return;
    }

    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');

    setUltimaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`);
  }, [proyectos]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const agregarProyecto = () => {
    const { titulo, categoria, estado, descripcion } = formulario;
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
      equipo: [{ nombre: "Usuario Creador", rol: "Asignado por defecto" }]
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    setFormulario({ titulo: '', categoria: '', estado: 'En curso', descripcion: '' });
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

      {ultimaActualizacion && (
        <div style={{ marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
          <p>Última actualización de la lista: {ultimaActualizacion}</p>
        </div>
      )}
    </section>
  );
}

export default ListaProyectos;