import React from "react";
import { NavLink } from "react-router-dom";

import BannerH from "../assets/bannièreH.png";
import AccommodationList from "../data/logements.json"; // importation des données sur les logements (fichier JSON)
import Cards from "../components/Cards"; // importation du composant pour afficher chaque logement

function Home() {
  return (
    <div className="home">
      {/*conteneur bannière*/}
      <div className="bannerH">
        <img src={BannerH} alt="image bannière" />
      </div>

      {/*conteneur liste des logements*/}
      <div className="AccommodationList">
        {AccommodationList.map(
          (
            accommodation //methode 'map' pour parcourir le tableau 'AccommodationList' et créer une carte pour chaque logement
          ) => (
            <NavLink
              to={`/accommodation/${accommodation.id}`}
              key={accommodation.id} //doit être unique pour chaque élément
            >
              {" "}
              {/*chemin dynamique pour créer un URL unique avec id pour chaque logement*/}
              <Cards
                id={accommodation.id}
                image={accommodation.cover}
                title={accommodation.title}
              />
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
