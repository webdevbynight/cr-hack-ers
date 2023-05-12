import React from "react";
import { Link } from "react-router-dom";
import canneAPeche from "../assets/canne_a_peche.png";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo_header_container">
        <Link to="/">
          <img className="logo_header" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="logo_basket">
        <Link to="/basket">
          <img src={canneAPeche} alt="logo canne a peche" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
