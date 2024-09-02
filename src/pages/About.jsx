import React from "react";
import Banner from "../components/Banner";
import BannerA from "../assets/bannièreP.png";

function About() {
  return (
    //bannière page à propos
    <div className="banner">
      <Banner cover={BannerA} />
    </div>
  );
}

export default About;
