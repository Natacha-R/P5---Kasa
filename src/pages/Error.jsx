import React from "react";
import image from "../assets/404.png";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <main className="error">
      <img src={image} alt="logo erreur 404" />
      <p> Oups! La page que vous demandez n'existe pas. </p>
      <NavLink to="/" className="error-nav">
        {" "}
        Retourner sur la page d'accueil{" "}
      </NavLink>
    </main>
  );
}

export default Error;
