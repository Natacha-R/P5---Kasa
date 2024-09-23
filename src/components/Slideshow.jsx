import React, { useState } from "react"; // Importation de la bibliothèque React, HOOK qui permet de gérer l'état du composant fonctionnel (garder une trace de l'index de l'image actuellement affichée dans le diaporama).

import imageFlecheD from "../assets/flecheR.png";
import imageFlecheG from "../assets/flecheL.png";

// composant Slideshow (diaporama) "logement" avec comme PROPS 'image' (tableau d'images à afficher dans le diaporama).

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // currentIndex : variable d'état qui garde la trace de l'index de l'image actuellement affichée.
  // setCurrentIndex : fonction permet de mettre à jour l'index actuel de l'image // useState(0) : L'état initial est 0, donc la première image du tableau sera affichée par défaut.

  //*********** Aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    ); // Si l'index actuel (prevIndex) est égal au dernier index du tableau d'images (images.length - 1), on revient à la première image (index 0).
  };

  //********** Revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Si l'index actuel est 0 (la première image), on passe à la dernière image du tableau. Sinon, on diminue l'index de 1 pour revenir à l'image précédente.
  };

  //*********** Si le nombre d'images est 1, on n'affiche ni les flèches ni la numérotation
  const isSingleImage = images.length === 1;

  return (
    <div className="slideshow">
      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentIndex]} // l'image à afficher est déterminée dynamiquement à partir du tableau images.
        alt={`Slide ${currentIndex + 1}`} // Texte alternatif qui affiche le numéro de la slide (pour l'accessibilité).
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
        </div> // on ajoute 1 à l'index, car les index commencent à 0 / nombre total d'images dns le diaporama.
      )}
    </div>
  );
};

export default Slideshow; // composant Header est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
