import React from "react"; // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier).

// Composant Bannière "Accueil / A propos" qui reçoit les PROPS title (titre à afficher dans la bannière) et cover (image à afficher) :

function Banner({ title, cover }) {
  return (
    <div className="banner">
      <p>{title}</p>
      <img src={cover} alt="bannière" />
    </div>
  );
}

export default Banner; // composant Banner est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
