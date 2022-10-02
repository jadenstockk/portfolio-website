import React from "react";
import "./Footer.css";
import githubIcon from "./github.svg";
import linkedinIcon from "./linkedin.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/jadenstock/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon" src={linkedinIcon} alt="" />
        </a>
        <a
          href="https://github.com/jadenstockk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon" src={githubIcon} alt="" />
        </a>
      </div>
      <div className="footer-text">
        Created by <span>Jaden Stock</span>
      </div>
    </footer>
  );
};

export default Footer;
