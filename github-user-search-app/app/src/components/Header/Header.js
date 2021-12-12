import React from "react";
import moon from "../../assets/icon-moon.svg";
import "./header.css";

function Header({ themeMode }) {
  return (
    <header className="header flex space-between">
      <div className="logo">
        <h1>devfinder</h1>
      </div>
      <div className="theme-toggle">
        <button className="toggle">
          DARK
          <span>
            <img src={moon} alt="moon" />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
