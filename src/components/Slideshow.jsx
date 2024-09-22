import React, { useState } from "react";
import imageFlecheD from "../assets/FlecheD.png";
import imageFlecheG from "../assets/FlecheG.png";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Si le nombre d'images est 1, on n'affiche ni les flèches ni la numérotation
  const isSingleImage = images.length === 1;

  return (
    <div className="slideshow">
      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {/* Affichage des flèches seulement si plusieurs images */}
      {!isSingleImage && (
        <>
          <button className="prev" onClick={prevSlide}>
            <img src={imageFlecheG} alt="Précédent" className="arrow-icon" />
          </button>

          <button className="next" onClick={nextSlide}>
            <img src={imageFlecheD} alt="Suivant" className="arrow-icon" />
          </button>
        </>
      )}

      {/* Affichage de la numérotation seulement si plusieurs images */}
      {!isSingleImage && (
        <div className="slideshow-counter">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
