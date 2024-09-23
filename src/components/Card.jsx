import React from "react"; // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier).

// Composant carte logement "Accueil" qui reçoit les PROPS id (identifiant unique pour chaque la carte), image (image à afficher) et title (tite affiché sur lma carte) :

function Card({ id, image, title }) {
  return (
    <div className="card" id={id}>
      <img className="cardImg" src={image} alt={title} />
      <p className="cardTitle">{title}</p>
    </div>
  );
}

export default Card; // composant Card est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
