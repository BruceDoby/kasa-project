import { useState } from "react";
import ArrowRight from "../assets/arrow_right.png";
import ArrowLeft from "../assets/arrow_left.png";

function Carrousel({ pictures }) {
    if (!pictures || pictures.length === 0) {
        return <p>Aucune image disponible</p>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

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
