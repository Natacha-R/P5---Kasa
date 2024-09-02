import React from "react";
import "../css/pages/banner.css";

function Banner({ title, cover }) {
  return (
    <div className="banner">
      <p>{title}</p>
      <img src={cover} alt="bannière" />
    </div>
  );
}

export default Banner;
