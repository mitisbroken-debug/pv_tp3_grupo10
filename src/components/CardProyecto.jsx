import '../css/styles.css'; 

const CardProyecto = ({ proyecto, onEliminar, onVerDetalle }) => {
    
    const { id, titulo, categoria, estado } = proyecto;

    return (
        <article className="proyearticulo" style={{ margin: '10px', minWidth: '250px' }}>
            <h3 style={{ color: '#0056b3', marginBottom: '10px' }}>{titulo}</h3>
            
            <div style={{ marginBottom: '15px', color: '#334155' }}>
                <p><strong>Categoría:</strong> {categoria}</p>
                <p><strong>Estado:</strong> {estado}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>

                <button 
                    className="btn-Agregar" 
                    style={{ padding: '8px 15px', margin: '0' }}
                    onClick={() => onVerDetalle(id)}
                >
                    Ver Detalle
                </button>

                <button 
                    className="btn-eliminar" 
                    onClick={() => onEliminar(id)}
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default CardProyecto;