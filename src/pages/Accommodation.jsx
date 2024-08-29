import React from "react";
import { useParams } from "react-router-dom";

import AccommodationList from "../data/logements.json";
import Error from "./Error";

function Accommodation() {
  const { id } = useParams(); // hook extrait le paramètre 'id' de l'url
  const accommodation = AccommodationList.find((item) => item.id === id); //trouve le logement dans les données en fonction de l'id récupéré

  if (!accommodation) {
    return <Error />;
  }

  return (
    <div>
      <h1 className="titleAccommodation">{accommodation.title}</h1>
      <p className="placeAccommodation">{accommodation.location}</p>
    </div>
  );
}

export default Accommodation;
