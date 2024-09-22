import React from "react"; // Importé depuis la bibliothèque react pour créer des composants react.
import { NavLink } from "react-router-dom"; // composant utilisé pour créer des liens de navigation dans une application React utilisant le routage.

import image from "../assets/404.png";

function Error() {
  return (
    <main className="error">
      <img src={image} alt="logo erreur 404" />
      <p> Oups! La page que vous demandez n'existe pas. </p>
      <NavLink to="/" className="error-nav">
        {/* lien de navigation qui redirige l'utilisateur vers la page d'accueil */}{" "}
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}

export default Error; // importer facilement dans d'autres parties de l'application.
