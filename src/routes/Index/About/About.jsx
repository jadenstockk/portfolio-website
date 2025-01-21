import React from "react";

const About = () => {
  const scratchLink = "https://scratch.mit.edu/users/Magicmanthedj/";
  const discordLink = "https://discord.com/";
  const helpsieLink = "https://github.com/jadenstockk/helpsie";

  return (
    <section id="about" className="fade-up" style={{ animationDelay: "700ms" }}>
      <div className="wrapper">
        <h2 className="medium-heading-1">
          <span className="section-number">01.</span> About Me
        </h2>
        <p className="description-1">
        I am a skilled full-stack developer with over 5 years of experience in JavaScript and TypeScript, specializing in building dynamic and scalable web applications with Next.js, React, and Node.js. My expertise extends to database technologies like Postgres as well as MongoDB, and I am proficient with version control tools such as Git. I am passionate about clean UI design and continually seek opportunities to expand my technical knowledge through hands-on projects.
        </p>
        <p className="description-1">
        Beyond development, I have a deep-rooted passion for music. With over 12 years of piano experience and a background in music production and audio engineering, I’ve combined creativity with technical skill. My journey began with DJ-ing and producing music, eventually sparking my interest in programming and web development. This unique blend of skills drives me to innovate and create meaningful solutions in both tech and music.
        </p>
      </div>
    </section>
  );
};

export default About;
