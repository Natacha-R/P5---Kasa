import React from "react";
import { NavLink } from "react-router-dom"; /*système d'ancre*/

import Logo from "../assets/LOGOH.png";
import SmallLogo from "../assets/LOGO_mobile.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <picture>
          <source media="(max-width: 700px)" srcSet={SmallLogo} />
          <source media="(min-width: 700px)" srcSet={Logo} />
          {/* Image par défaut (sera remplacée par le sourceSet si condition est remplie) */}
          <img src={Logo} alt="logo kasa" />
        </picture>
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "nav")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-active" : "nav")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
