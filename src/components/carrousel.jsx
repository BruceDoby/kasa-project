import { useState } from "react";
import ArrowRight from "../assets/arrow_right.png";
import ArrowLeft from "../assets/arrow_left.png";

function Carrousel({ pictures }) {
    // Vérification si le tableau de pictures est valide
    if (!pictures || pictures.length === 0) {
        return <p>Aucune image disponible</p>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    // Gestion de la navigation
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const isSingleImage = pictures.length === 1;

    return (
        <div className="carrousel">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel-image" />

            <>
                <button
                    onClick={prevSlide}
                    className="arrow arrow-left"
                    style={{ visibility: isSingleImage ? "hidden" : "visible" }}
                >
                    <img src={ArrowLeft} alt="Précédent" />
                </button>

                <button
                    onClick={nextSlide}
                    className="arrow arrow-right"
                    style={{ visibility: isSingleImage ? "hidden" : "visible" }}
                >
                    <img src={ArrowRight} alt="Suivant" />
                </button>

                <div
                    className="carrousel-counter"
                    style={{ visibility: isSingleImage ? "hidden" : "visible" }}
                >
                    {currentIndex + 1} / {pictures.length}
                </div>
            </>
        </div>
    );
}

export default Carrousel;



/*import { useState } from "react";
import ArrowRight from "../assets/arrow_right.png";
import ArrowLeft from "../assets/arrow_left.png";
import data from '../../public/data.json'

function Carrousel({ id }) {
    // Trouver l'élément correspondant à l'ID
    const logement = data.find(item => item.id === id);

    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    const { pictures } = logement;
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gestion de la navigation
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carrousel">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel-image" />

            {pictures.length > 1 && (
                <>
                    <button onClick={prevSlide} className="arrow arrow-left">
                        <img src={ArrowLeft} alt="Précédent" />
                    </button>

                    <button onClick={nextSlide} className="arrow arrow-right">
                        <img src={ArrowRight} alt="Suivant" />
                    </button>

                    <div className="carrousel-counter">
                        {currentIndex + 1} / {pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Carrousel;*/
