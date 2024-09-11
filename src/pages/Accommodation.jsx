import React from "react";
import { useParams } from "react-router-dom";
import AccommodationList from "../data/logements.json";
import Error from "./Error";
import "../css/pages/layout.css";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import imageR from "../assets/starsR.png";
import imageW from "../assets/starsW.png";

function Accommodation() {
  const { id } = useParams(); // hook extrait le paramètre 'id' de l'url
  const accommodation = AccommodationList.find((item) => item.id === id); //trouve le logement dans les données en fonction de l'id récupéré

  if (!accommodation) {
    return <Error />;
  }

  // Déstructuration des données du logement pour simplifier l'accès
  const { title, location, tags, host, rating, description, equipments } =
    accommodation;

  // Générer les étoiles pour la notation
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        {/* Si l'index est inférieur à la note, l'étoile sera rouge, sinon elle sera grise */}
        <img src={index < rating ? imageR : imageW} alt="étoile" />
      </span>
    ));

  return (
    <div className="accommodation-container">
      {/* Intégration du composant Slideshow en passant les images du logement */}
      <Slideshow images={accommodation.pictures} />

      {/* Informations principales : Titre, Localisation, Tags */}
      <div className="accommodation-header">
        <div className="title-location">
          <h1 className="titleAccommodation">{title}</h1>
          <p className="placeAccommodation">{location}</p>

          {/* Tags */}
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Informations sur l'hôte */}
        <div className="host-rating">
          <div className="host-info">
            <p className="host-name">
              {host.name.split(" ")[0]}
              <br />
              {host.name.split(" ")[1]}
            </p>
            <img className="host-picture" src={host.picture} alt={host.name} />
          </div>
          {/* Notation (étoiles) */}
          <div className="rating">{stars}</div>
        </div>
      </div>

      {/* Description et Équipements avec le composant Collapse */}
      <div className="accommodation-details">
        <Collapse title="Description" class="collapse-container-no-margin">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements" class="collapse-container-no-margin">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Accommodation;
