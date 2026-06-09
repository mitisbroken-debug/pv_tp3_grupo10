import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="footer-grid">
                
                <div className="footer-column">
                    <p className="footer-title">Universidad</p>
                    <p>Facultad de Ingeniería</p>
                    <p>Programación Visual</p>
                </div>

                <div className="footer-column">
                    <p className="footer-title">Desarrollo (Grupo 10)</p>
                    <div className="integrantes-grid">
                        <p>Alan Flores</p>
                        <p>Braian Vega</p>
                        <p>Federico Ríos</p>
                        <p>Mauro Chauque</p>
                    </div>
                </div>

                <div className="footer-column">
                    <p className="footer-title">Proyecto</p>
                    <p>Trabajo Práctico Nº 3</p>
                    <p>Versión 1.0.0</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;