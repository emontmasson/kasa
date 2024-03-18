import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './Header.scss';

function Header() {
    return (

        <nav>
            <img src={Logo} alt="Logo" />
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">A Propos</NavLink></li>
            </ul>

        </nav>
    )
}

export default Header