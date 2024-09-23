import React from "react"; // // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier)
import { NavLink } from "react-router-dom"; // Importation du composant NavLink depuis react-router-dom (liens de navigation).

import Logo from "../assets/logo.png";
import SmallLogo from "../assets/logo_mobile.png";

// composant Header "intégralité du site" pour l'en-tête des pages (Logo & menu de navigation) :

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <picture>
          {/* Source pour les petits écrans */}
          <source media="(max-width: 700px)" srcSet={SmallLogo} />
          {/* Source pour les grands écrans */}
          <source media="(min-width: 700px)" srcSet={Logo} />
          {/* Image par défaut (sera remplacée par le sourceSet si condition est remplie) */}
          <img src={Logo} alt="logo kasa" />
        </picture>
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "nav")} // Si isActive est true, la classe nav-active est appliquée pour styliser le lien actif. Sinon, la classe nav est appliquée
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-active" : "nav")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header; // composant Header est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
