import React from "react"; // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier).
import { NavLink } from "react-router-dom"; // Importation du composant NavLink depuis react-router-dom (liens de navigation).

import Card from "./Card"; // composants card, responsable de l'affichage de la carte avec l'image et le titre pour chaque logement.
import AccommodationList from "../data/logements.json"; // importation des données sur les logements (fichier JSON)

// composant conteneur cartes logements "Accueil" qui génère la liste de cartes pour les logements à partir des données (logements.json) :

function Cards() {
  return (
    <div className="AccommodationList">
      {AccommodationList.map(
        (
          accommodation // methode 'map' pour parcourir le tableau 'AccommodationList' et créer un composant card pour chaque logement.
        ) => (
          <NavLink
            to={`/accommodation/${accommodation.id}`} // NavLink crée un lien cliquable pour chaque logement (/accomodation/123).
            key={accommodation.id} //doit être unique pour chaque élément (identifie chaque élément de manière unique).
          >
            <Card
              id={accommodation.id}
              image={accommodation.cover}
              title={accommodation.title}
            />
          </NavLink>
        )
      )}
    </div>
  );
}

export default Cards; // composant Cards est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
