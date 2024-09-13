import React from "react";

import LogoFooter from "../assets/FooterDesktop.png";
import LogoFooterSmall from "../assets/FooterMobile.png";

function Footer() {
  return (
    <div className="footer">
      <picture>
        {/* Source pour les petits écrans */}
        <source media="(max-width: 500px)" srcSet={LogoFooterSmall} />
        {/* Source pour les grands écrans */}
        <source media="(min-width: 500px)" srcSet={LogoFooter} />
        {/* Image par défaut (sera remplacée par le sourceSet si condition est remplie) */}
        <img src={LogoFooter} alt="logo bas de page" />
      </picture>
    </div>
  );
}

export default Footer;
