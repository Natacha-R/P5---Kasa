import React from "react";

function Card({ id, image, title }) {
  return (
    <div className="card" id={id}>
      <img className="cardImg" src={image} alt="#" />
      <p className="cardTitle">{title}</p>
    </div>
  );
}

export default Card;
