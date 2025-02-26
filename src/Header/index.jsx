import { Link } from 'react-router-dom'
import kasaLogo2 from '../assets/logot.png'

function Header() {
    return (
        <header>
            <img src={kasaLogo2} alt='logo site' />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
                {/*<Link to="/error">Erreur 404</Link>
                <Link to="/carrousel">Carrousel</Link>*/}
            </nav>
        </header>
    )
}

export default Header