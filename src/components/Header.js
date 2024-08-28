import React from "react";
import { NavLink } from "react-router-dom"; /*système d'ancre*/
import Logo from "../assets/logoH.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo kasa" />
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            /*className={({ nav }) => (nav.isActive ? "nav-active" : "")}*/
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            /*className={({ nav }) => (nav.isActive ? "nav-active" : "")}*/
          >
            <li>à propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
