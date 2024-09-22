import React from "react";
import BannerH from "../assets/banniereH.png";
import Banner from "../components/Banner";
import Cards from "../components/Cards"; // importation du composant pour afficher chaque logement

function Home() {
  return (
    <div className="home">
      {/*conteneur bannière*/}
      <Banner title={"Chez vous, partout et ailleurs"} cover={BannerH} />

      {/*conteneur liste des logements*/}
      <Cards />
    </div>
  );
}

export default Home;
