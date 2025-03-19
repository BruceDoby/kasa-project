import { NavLink } from 'react-router-dom'
import kasaLogo2 from '../assets/logot.png'

function Header() {
    return (
        <header>
            <img src={kasaLogo2} alt='logo site' />
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header