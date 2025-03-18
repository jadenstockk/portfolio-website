import React from "react";
import faceImage from "../../../assets/face.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="wrapper">
        <h3
          className="small-heading-1 fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Hey there! My name is
        </h3>
        <div className="face-name fade-up" style={{ animationDelay: "300ms" }}>
          <img src={faceImage} alt="" />
          <h2 className="big-heading-1">Jaden Stock</h2>
        </div>
        <h2
          className="big-heading-2 fade-up"
          style={{ animationDelay: "400ms" }}
        >
          I build things for the web
        </h2>
        <p
          className="description-1 fade-up"
          style={{ animationDelay: "500ms" }}
        >
         I craft custom websites and digital solutions, blending creativity with clean, user-friendly experiences to bring your ideas to life. Let’s connect!
        </p>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
        <a
          className="btn fade-up"
          style={{ animationDelay: "600ms" }}
          href="/#projects"
        >
          Check out my latest project
        </a>
        <a style={{ animationDelay: "600ms" }}
          href="/#contact" className="btn fade-up">
					Contact me
				</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
