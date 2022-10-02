import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="wrapper">
        <div className="nav-items">
          <a className="nav-item" href="#about">
            <span className="nav-item-number">01.</span> About
          </a>
          <a className="nav-item" href="#skills">
            <span className="nav-item-number">02.</span> Skills
          </a>
          <a className="nav-item" href="#projects">
            <span className="nav-item-number">03.</span> Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
