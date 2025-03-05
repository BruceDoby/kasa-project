/*import React from 'react';
import data from '../../public/data.json';

function Rating() {
    // Exemple de données venant du fichier JSON, à ajuster selon la structure
    const rating = data.rating; // Supposons que chaque élément dans data.json a une clé "rating"

    // Créer un tableau d'étoiles
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        // Vérifier si la note est supérieure ou égale à l'indice de l'étoile
        const starColor = i <= rating ? '#ff6060' : '#d3d3d3'; // Couleur rouge pour les étoiles remplies, gris pour les autres
        stars.push(
            <i key={i} className="fa-solid fa-star" style={{ color: starColor }}></i>
        );
    }

    return (
        <div className='rating'>
            <div className="stars">
                {stars}
            </div>
        </div>
    );
}

export default Rating;*/

import React from 'react';
import data from '../../public/data.json';

function Rating({ id }) {
    console.log("ID passé : ", id);
    // Trouver l'élément correspondant à l'ID
    const logement = data.find(item => item.id === id);

    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    const { rating } = logement; // Récupère la note de l'élément

    // Créer un tableau d'étoiles
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starColor = i <= rating ? '#ff6060' : '#d3d3d3'; // Couleur rouge pour les étoiles remplies, gris pour les autres
        stars.push(
            <i key={i} className="fa-solid fa-star" style={{ color: starColor }}></i>
        );
    }

    return (
        <div className='rating'>
            <div className="stars">
                {stars}
            </div>
        </div>
    );
}

export default Rating;

