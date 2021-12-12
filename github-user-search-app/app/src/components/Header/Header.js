import React, { useState } from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import "./header.css";

function Header() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle("darkmode");
    setIsDarkmode(!isDarkmode);
  };

  return (
    <header className="header flex space-between">
      <div className="logo">
        <h1>devfinder</h1>
      </div>
      <div className="theme-toggle">
        <button onClick={handleClick} className="toggle">
          {isDarkmode ? "LIGHT" : "DARK"}
          <span>
            <img src={isDarkmode ? sun : moon} alt="moon" />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
