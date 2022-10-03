import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="wrapper">
        <div className="nav-items">
          <a
            className="nav-item fade-up"
            href="/#about"
            style={{ animationDelay: "50ms" }}
          >
            <span className="nav-item-number">01.</span> About
          </a>
          <a
            className="nav-item fade-up"
            href="/#skills"
            style={{ animationDelay: "100ms" }}
          >
            <span className="nav-item-number">02.</span> Skills
          </a>
          <a
            className="nav-item fade-up"
            href="/#projects"
            style={{ animationDelay: "150ms" }}
          >
            <span className="nav-item-number">03.</span> Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
