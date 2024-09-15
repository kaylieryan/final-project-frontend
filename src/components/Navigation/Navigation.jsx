//import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
