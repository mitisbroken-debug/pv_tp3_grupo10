import { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem('perfilUsuario');
    
    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado);
    }
    
    return {
      nombre: "Lucas Alvaro Flores"
      dni: "12.345.678",
      rol: "Alumno",
      institucion: "Universidad Nacional de Jujuy - Facultad de Ingeniería"
    };
  });

  useEffect(() => {
    localStorage.setItem('perfilUsuario', JSON.stringify(usuario));
  }, [usuario]);

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};