//import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Wizarding Wonders</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
