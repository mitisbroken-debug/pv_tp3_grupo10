import React, { useContext } from 'react';
import '../css/Header.css';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {
    const { usuario } = useContext(UsuarioContext);
    const fechaActual = new Date().toLocaleDateString('es-AR');

    return (
        <header className="main-header">
            <div className="header-left">
                <img src="/fi-icono.png" alt="Facultad de Ingeniería" className="header-logo-fi" />
            </div>
            
            <div className="header-center">
                <h1>Gestor de Proyectos</h1>
                <p className="header-subtitle">Bienvenido, {usuario?.nombre || 'Usuario'}</p>
            </div>
        
            <div className="header-right">
                <div className="user-summary">
                    <span className="user-role">{usuario?.rol}</span>
                    <span className="user-institution">{usuario?.institucion}</span>
                </div>
                <div className="system-status">
                    <span className="status-dot"></span>
                    <span className="status-text">Online</span>
                    <span className="status-divider">|</span>
                    <span className="system-date">{fechaActual}</span>
                </div>
            </div>
        </header>   
    );
}

export default Header;