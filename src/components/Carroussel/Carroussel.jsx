import './Carroussel.scss';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carroussel({ images }) {


    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((nextIndex) =>
            nextIndex === 0 ? images.length - 1 : nextIndex - 1
        );
    };

    // permet d'afficher les controles sur le carroussel seulement s'il y a plus d'une image
    let controls;
    let countImage;

    if(images.length > 1) {
        controls =
            <div className="controls">
                <button onClick={prevSlide} className="carousel-button prev-button">
                    <FontAwesomeIcon icon={faAngleLeft} size="9x" />
                </button>
                <button onClick={nextSlide} className="carousel-button next-button">
                    <FontAwesomeIcon icon={faAngleRight} size="9x"  />
                </button>
            </div>
        countImage = <span className="countImage">{currentIndex+1}/{images.length}</span>

    }


    // onClick, on met à jour l'état à l'inverse de ce qu'il est, soit true ou false
    // className, on détermine les classes css à mettre selon l'état de isOpen
    return (
        <div className="carroussel" >
            {controls}
            <img src={images[currentIndex]} alt="carousel" />
            {countImage}
        </div>
    )
}



export default Carroussel;