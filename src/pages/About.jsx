import React from "react"; // Importé depuis la bibliothèque react pour créer des composants react.

import Banner from "../components/Banner";
import BannerA from "../assets/banniereA.png";
import Collapse from "../components/Collapse.jsx";

function About() {
  return (
    <div className="container">
      {/*conteneur principal*/}
      <Banner cover={BannerA} />
      {/* composant Banner, propriété cover avec l'image Banner pour afficher la bannière avec l'image*/}
      <div className="collapse">
        <Collapse title="Fiabilité" className="collapse-container">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect" className="collapse-container">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre platerfome.
          </p>
        </Collapse>
        <Collapse title="Service" className="collapse-container">
          <p>
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveilance.
          </p>
        </Collapse>
        <Collapse title="Sécurité" className="collapse-container">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
}

export default About; // permet d'importer le composant dans d'autres parties de l'appli.
