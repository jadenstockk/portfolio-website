import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="fade-up"
      style={{ animationDelay: "700ms" }}
    >
      <div className="wrapper">
        <h2 className="medium-heading-1">
          <span className="section-number">02.</span> My Skills
        </h2>
        <div className="skills-container description-1">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">React</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Express.js</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
