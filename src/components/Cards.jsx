import React from "react";

function Cards({ id, image, title }) {
  //propriétés transmises sous forme de props
  return (
    <div className="card" id={id}>
      <img className="cardImg" src={image} alt="#" />
      <p className="cardTitle">{title}</p>
    </div>
  );
}

export default Cards;

//
