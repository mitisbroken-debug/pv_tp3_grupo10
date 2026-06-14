import { useState, useEffect, useRef } from 'react'; 
import proyectoService from '../services/proyectoService'; 
import ProyectoCard from '../components/ProyectoCard';
import FormularioProyecto from '../components/FormularioProyecto';
import DetalleProyecto from '../components/DetalleProyecto';
import RegistroActividad from '../components/RegistroActividad'; 
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(() => proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState('');

  const cantidadInicial = useRef(proyectos.length);

  useEffect(() => {
    if (proyectos.length === cantidadInicial.current) return;

    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutes = String(ahora.getMinutes()).padStart(2, '0');

    setUltimaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutes} hs.`);
  }, [proyectos]); 

  const agregarProyecto = (datosFormulario) => {
    const { titulo, categoria, estado, descripcion } = datosFormulario;

    const nuevoProyecto = {
      id: proyectos.length > 0 ? Math.max(...proyectos.map(p => p.id)) + 1 : 1,
      titulo,
      categoria,
      estado,
      descripcion: [descripcion, "Información adicional del nuevo proyecto registrado."],
      links: [
        { tipo: "PDF", url: "#" }, { tipo: "Drive", url: "#" }, { tipo: "GitHub", url: "#" }
      ],
      equipo: [{ nombre: "Usuario Creador", rol: "Asignado por defecto" }]
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
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
        <input className="btn-Buscar" type="text" placeholder="Buscar Proyectos" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
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
            <ProyectoCard key={proyecto.id} proyecto={proyecto} eliminarProyecto={eliminarProyecto} verDetalle={verDetalle} />
          ))}
        </tbody>
      </table>

      <FormularioProyecto agregarProyecto={agregarProyecto} />

      {proyectoSeleccionado && <DetalleProyecto proyecto={proyectoSeleccionado} />}

      {ultimaActualizacion && <RegistroActividad fecha={ultimaActualizacion} />}
    </section>
  );
}

export default ListaProyectos;