import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.scss';

function Header() {
    return (

        <nav>
            <img src={Logo} alt="Logo" />
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
            </ul>

        </nav>
    )
}

export default Header