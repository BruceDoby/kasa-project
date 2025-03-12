import React from 'react';
import data from '../../public/data.json';

function Rating({ id }) {
    console.log("ID passé : ", id);
    const logement = data.find(item => item.id === id);

    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    const { rating } = logement; 

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starColor = i <= rating ? '#ff6060' : '#d3d3d3'; 
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

