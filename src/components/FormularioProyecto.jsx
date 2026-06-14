import { useState } from 'react';
import "../css/FormularioProyecto.css"

function FormularioProyecto({ agregarProyecto }) {

  const [form, setForm] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const manejarEnvio = () => {
    if (form.titulo.trim() === '' || form.categoria.trim() === '') return;
    
    agregarProyecto(form);
    

    setForm({ titulo: '', categoria: '', estado: 'En curso', descripcion: '' });
  };

  return (
    <div className="seccion-formulario">
      <input type="text" className="caja-texto" placeholder="Título del proyecto" name="titulo" value={form.titulo} onChange={manejarCambio} />
      <input type="text" className="caja-texto" placeholder="Categoría" name="categoria" value={form.categoria} onChange={manejarCambio} />
      <select className="caja-texto" name="estado" value={form.estado} onChange={manejarCambio}>
        <option value="En curso">En curso</option>
        <option value="Finalizado">Finalizado</option>
        <option value="Pendiente">Pendiente</option>
      </select>
      <textarea className="caja-texto descripcion-input" placeholder="Escribe la descripción del proyecto..." name="descripcion" value={form.descripcion} onChange={manejarCambio} />
      
      <button className="btn-Agregar" onClick={manejarEnvio}>
        Agregar Proyecto
      </button>
    </div>
  );
}

export default FormularioProyecto;