import React from "react";

function Banner({ title, cover }) {
  return (
    <div className="banner">
      <p>{title}</p>
      <img src={cover} alt="bannière" />
    </div>
  );
}

export default Banner;
