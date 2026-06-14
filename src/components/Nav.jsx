import { NavLink } from 'react-router-dom';

const Nav = () => {
    const activeClass = ({ isActive }) => 
        isActive ? 'active-link fw-bold text-primary text-decoration-none' : 'text-dark text-decoration-none';

    return (
        <nav className="d-flex justify-content-center align-items-center gap-5 py-3 bg-white shadow-sm mb-4">
            <NavLink to="/dashboard" className={activeClass} style={{ fontSize: '1.1rem' }}>
                Dashboard Principal
            </NavLink>
            
            {/* AGREGAMOS LA PROPIEDAD "end" ACÁ */}
            <NavLink to="/proyectos" end className={activeClass} style={{ fontSize: '1.1rem' }}>
                Explorador de Proyectos
            </NavLink>

            <NavLink to="/proyectos/1" className={activeClass} style={{ fontSize: '1.1rem' }}>
                Detalle de Proyecto
            </NavLink>
            
            <NavLink to="/perfil" className={activeClass} style={{ fontSize: '1.1rem' }}>
                Perfil
            </NavLink>
        </nav>
    );
}

export default Nav;