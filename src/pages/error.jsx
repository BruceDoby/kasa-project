import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='error__div'>
            <h1 className="error__txt">404</h1>
            <p className='error__p'>
                <span className='leftTexterror'>Oups! La page que</span> vous demandez n'existe pas.
            </p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error