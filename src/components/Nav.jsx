import { NavLink } from 'react-router-dom';

const Nav = () => {
    const activeClass = ({ isActive }) => 
        isActive ? 'active-link fw-bold text-primary text-decoration-none' : 'text-dark text-decoration-none';

    return (
        <nav className="d-flex justify-content-center align-items-center gap-5 py-4 bg-white shadow-sm" style={{ flexWrap: 'wrap' }}>
            <NavLink to="/dashboard" className={activeClass} style={{ fontSize: '1.1rem' }}>
                Dashboard Principal
            </NavLink>
            
            <NavLink to="/proyectos" end className={activeClass} style={{ fontSize: '1.1rem' }}>
                Explorador de Proyectos
            </NavLink>
            
            <NavLink to="/perfil" className={activeClass} style={{ fontSize: '1.1rem' }}>
                Perfil
            </NavLink>
        </nav>
    );
}

export default Nav;