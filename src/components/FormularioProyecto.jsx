
import "../css/FormularioProyecto.css"
function FormularioProyecto({ form, manejarCambio, agregarProyecto }) {
  const { titulo, categoria, estado, descripcion } = form;

  return (
    <div className="seccion-formulario">
      <input
        type="text"
        className="caja-texto"
        placeholder="Título del proyecto"
        name="titulo"
        value={titulo}
        onChange={manejarCambio}
      />

      <input
        type="text"
        className="caja-texto"
        placeholder="Categoría"
        name="categoria"
        value={categoria}
        onChange={manejarCambio}
      />

      <select
        className="caja-texto"
        name="estado"
        value={estado}
        onChange={manejarCambio}
      >
        <option value="En curso">En curso</option>
        <option value="Finalizado">Finalizado</option>
        <option value="Pendiente">Pendiente</option>
      </select>

      <textarea
        className="caja-texto descripcion-input"
        placeholder="Escribe la descripción del proyecto..."
        name="descripcion"
        value={descripcion}
        onChange={manejarCambio}
      />

      <button className="btn-Agregar" onClick={agregarProyecto}>
        Agregar Proyecto
      </button>
    </div>
  );
}

export default FormularioProyecto;