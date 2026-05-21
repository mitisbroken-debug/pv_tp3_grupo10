export const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Optimización de Consultas Académicas", categoria: "Base de Datos", estado: "Finalizado" },
    { id: 2, titulo: "Automatización de Planillas de Asistencia", categoria: "Macros y Planillas", estado: "En curso" },
    { id: 3, titulo: "Script de Respaldo de Servidores", categoria: "Scripting", estado: "Finalizado" },
    { id: 4, titulo: "Análisis de Rendimiento Estudiantil", categoria: "Programación", estado: "En curso" },
    { id: 5, titulo: "Sistema de Gestión Bibliotecaria", categoria: "Base de Datos", estado: "Pendiente" }
];


  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (nuevoProyecto) => {
    proyectos.push(nuevoProyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter(p => 
      p.titulo.toLowerCase().includes(texto.toLowerCase())
    );
  };
  return {
    obtenerProyectos,agregarProyecto,eliminarProyecto,buscarProyecto
  };
})();
export default proyectoService;