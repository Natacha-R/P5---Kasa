import React from "react";
import { NavLink } from "react-router-dom"; /*système d'ancre*/

import Logo from "../assets/logoH.png";
import SmallLogo from "../assets/logo_mobile.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo kasa" />
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
