import React from "react"; // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier)

import LogoFooter from "../assets/footerDesktop.png";
import LogoFooterSmall from "../assets/footerMobile.png";

// composant Footer "intégralité du site" pour afficher une image dans le bas de la page :

function Footer() {
  return (
    <div className="footer">
      <picture>
        {/* Source pour les petits écrans */}
        <source media="(max-width: 500px)" srcSet={LogoFooterSmall} />
        {/* Source pour les grands écrans */}
        <source media="(min-width: 500px)" srcSet={LogoFooter} />
        {/* Image par défaut (sera remplacée par le sourceSet si condition est remplie) */}
        <img src={LogoFooter} alt="logo bas de page" />
      </picture>
    </div>
  );
}

export default Footer; // // composant Footer est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
