import React from "react";
import { Link } from "react-router-dom";
import canneAPeche from "../assets/canne_a_peche.png";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/basket">
        <img
          className="logo_header"
          src={canneAPeche}
          alt="logo canne a peche"
        />
      </Link>
    </header>
  );
}

export default Header;
