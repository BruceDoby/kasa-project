import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
                <Link to="/error">Erreur 404</Link>
                <Link to="/carrousel">Carrousel</Link>
            </nav>
        </header>
    )
}

export default Header