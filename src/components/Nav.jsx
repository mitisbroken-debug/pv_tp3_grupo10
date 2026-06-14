import { NavLink } from 'react-router-dom';

const Nav = () => {
    const activeClass = ({ isActive }) => isActive ? 'active-link' : '';

    return (
        <nav>
            <NavLink to="/dashboard" className={activeClass}>
                Dashboard Principal
            </NavLink>
            <NavLink to="/proyectos" className={activeClass}>
                Explorador de Proyectos
            </NavLink>
            <NavLink to="/perfil" className={activeClass}>
                Perfil
            </NavLink>
        </nav>
    );
}

export default Nav;