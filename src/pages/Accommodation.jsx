import React from "react"; // Importé depuis la bibliothèque react pour créer des composants react.
import { useParams } from "react-router-dom"; // Hook fourni par react-router-dom, permet d’accéder aux paramètres de l’URL. (utilisé pour extraire l’id du logement depuis l’URL)

import AccommodationList from "../data/logements.json"; // Import des données des logements depuis le fichier logements.json.
import Error from "./Error";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import imageR from "../assets/starsR.png";
import imageW from "../assets/starsW.png";

function Accommodation() {
  const { id } = useParams(); // Hook extrait le paramètre 'id' de l'url (ex: si URL "accommodation/123" alors id = "123")
  const accommodation = AccommodationList.find((item) => item.id === id); // Cherche dans la liste des logements celui dont l’id correspond à celui extrait de l’URL. (logement sera stocké dans accommodation)

  if (!accommodation) {
    return <Error />;
  } // Si aucun logement ne correspond à l’id fourni, le composant affiche la page d’erreur en utilisant le composant Error.

  // Déstructuration des données du logement pour simplifier leur utilisation et éviter les répétitions.
  const { title, location, tags, host, rating, description, equipments } =
    accommodation;

  // Générer les étoiles pour la notation.
  const stars = Array(5)
    .fill(0) //création d'un tableau de 5 éléments (5 étoiles)
    // pour chaque élément, on crée un élément <span>  contenant une image d'étoile.
    .map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        {/* Si l'index est inférieur à la note, l'étoile sera rouge, sinon elle sera grise */}
        <img src={index < rating ? imageR : imageW} alt="étoile" />
      </span>
    ));

  return (
    <div className="accommodation-container">
      {/****************** Affichage du diaporama des images du logement en passant le tableau pictures en tant que prop images ******************/}
      <Slideshow images={accommodation.pictures} />

      {/****************** Informations principales : Titre, Localisation, Tags ******************/}
      <div className="accommodation-header">
        <div className="title-location">
          {/* affiche le titre*/}
          <h1 className="titleAccommodation">{title}</h1>{" "}
          {/* affiche la localisation du logement*/}
          <p className="placeAccommodation">{location}</p>
          {/* Parcourt le tableau tags et affiche chaque tag dans un <span> avec une classe. Chaque tag reçoit une clé unique basée sur son index */}
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/****************** Informations sur l'hôte ******************/}
        <div className="host-rating">
          <div className="host-info">
            <p className="host-name">
              {host.name.split(" ")[0]}
              <br />
              {host.name.split(" ")[1]}
              {/*Sépare le nom complet de l'hôte en deux parties (prénom et nom de famille) en utilisant split(" ") et les affiche sur deux lignes.*/}
            </p>
            <img className="host-picture" src={host.picture} alt={host.name} />
            {/* Affiche l’image de l’hôte avec la source host.picture et un attribut alt descriptif.*/}
          </div>
          {/* Notation (étoiles) / Affiche les étoiles générées précédemment dans la variable stars */}
          <div className="rating">{stars}</div>
        </div>
      </div>

      {/****************** Description et Équipements avec le composant Collapse ******************/}
      <div className="accommodation-details">
        <Collapse title="Description" class="collapse-container-no-margin">
          <p>{description}</p>
        </Collapse>{" "}
        {/* composant Collapse avec le titre "Description" et affichage du paragraphe description du logement */}
        <Collapse title="Équipements" class="collapse-container-no-margin">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>
                {equipment}
              </li> /* Parcourt le tableau equipments et affiche chaque équipement dans une liste <li>*/
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Accommodation;
