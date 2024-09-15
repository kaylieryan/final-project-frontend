//import React from "react";
import "./Header.css";
//import dh_logo from "../../assets/dh_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {/* <img src={dh_logo} alt="Wizarding Wonders Logo" /> */}
        <h1>Wizarding Wonders</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Navigation
            </a>
            <div className="dropdown-content">
              <a href="/books">Books</a>
              <a href="/characters">Characters</a>
              <a href="/potions">Potions</a>
              <a href="/spells">Spells</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
