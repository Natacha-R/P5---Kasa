import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import AccommodationList from "../data/logements.json"; // importation des données sur les logements (fichier JSON)

function Cards() {
  //propriétés transmises sous forme de props
  return (
    <div className="AccommodationList">
      {AccommodationList.map(
        (
          accommodation //methode 'map' pour parcourir le tableau 'AccommodationList' et créer une carte pour chaque logement
        ) => (
          <NavLink
            to={`/accommodation/${accommodation.id}`}
            key={accommodation.id} //doit être unique pour chaque élément
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

export default Cards;
