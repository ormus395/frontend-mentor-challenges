import React from "react";
import moon from "../../assets/icon-moon.svg";

function Header() {
  return (
    <header className="header flex space-between">
      <div className="logo">
        <h1>devfinder</h1>
      </div>
      <div className="theme-toggle">
        <h3>
          DARK{" "}
          <span>
            <img src={moon} alt="moon icon" />
          </span>
        </h3>
      </div>
    </header>
  );
}

export default Header;
