// Importations des dépendances principales :
import React from "react"; // Import bibliothèque JavaScript.
import ReactDOM from "react-dom/client"; // Bibliothèque qui permet de relier les composants React au Dom du navigateur.

import "./css/main.css"; //Permet de ne pas importer les css dans chaque pages / composants.
import App from "./App"; // Importe le composant APP, point d'entrée principal de l'appli.
import reportWebVitals from "./reportWebVitals"; // permet de mesurer les performances de l'appli.

const root = ReactDOM.createRoot(document.getElementById("root")); // = création de la racine REACT de l'appli (sélectionne l'élément HTML avec l'ID "root").
root.render(
  <React.StrictMode>
    {/* outil pour détecter les problèmes potentiels dans l'application durant le développemen */}
    <App /> {/*composant principal de l'application*/}
  </React.StrictMode>
);

reportWebVitals(); // reportWebVitals(console.log) mesurer les performances.
