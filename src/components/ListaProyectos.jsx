import { useEffect, useState } from 'react'
import proyectoService from '../services/proyectoService'
import './ListaProyectos.css'
function ListaProyectos() {
  const [listaProyectos, setListaProyectos] = useState([])
  const [textoBusqueda, setTextoBusqueda] = useState('')

  useEffect(() => {
    setListaProyectos(proyectoService.obtenerProyectos())
  }, [])

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id)
    setListaProyectos(proyectoService.obtenerProyectos())
  }
  const buscarProyecto = (texto) => {
    setTextoBusqueda(texto)
    const resultados = proyectoService.buscarProyecto(texto)
    setListaProyectos(resultados)
  }

  return (
    <section>
        <div><input  className="btn-Buscar" type="text" placeholder="Buscar Proyectos" onChange={(e) => buscarProyecto(e.target.value)}/></div>
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
          {listaProyectos.map((proyecto) => (
            <tr key={proyecto.id}>
              <td>{proyecto.id}</td>
              <td>{proyecto.titulo}</td>
              <td>{proyecto.categoria}</td>
              <td>{proyecto.estado}</td>
              <td>
                <button className="btn-eliminar" onClick={() => eliminarProyecto(proyecto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
         <div className="seccion-formulario">
             <input type="text" className="caja-texto" placeholder="Título del proyecto" />
            <input type="text" className="caja-texto" placeholder="Categoría" />
        
            <select className="caja-texto">
                <option>En curso</option>
                <option>Finalizado</option>
                <option>Pendiente</option>
            </select>

             <button className="btn-Agregar">Agregar Proyecto</button>
        </div>

    </section>
  )
}

export default ListaProyectos;

