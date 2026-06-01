import React from 'react';
import '../css/RegistroActividad.css';

const RegistroActividad = ({ fecha }) => {
  return (
    <div className="registro-contenedor">
      <p className="registro-texto">
      
        Última actualización de la lista: {fecha}
      </p>
    </div>
  );
};

export default RegistroActividad;