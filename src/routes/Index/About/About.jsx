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
          I am an experienced Next.js web developer with a passion for UI design
          as well. I also have basic experience working with Java. I'm very keen
          to continue learning and plan to continue working on projects to
          improve my skills as I continue on to university next year. I have
          been programming with Javascript and Typescript for almost 4 years now
          and have worked on a variety of projects, ranging from simple websites
          to more complex web applications. Through my experience, I have
          developed a strong understanding of a variety of technologies and
          frameworks, including React, Next.js, and Node.js. I am also very
          familiar with Git and have experience working with databases such as
          MongoDB and Postgres. I am always looking to learn new things and
          improve my skills, and I am very excited to continue working on
          projects and learning new technologies.
        </p>
        <p className="description-1">
          Taking a step back from programming, I am also very passionate about
          music. I have been playing the piano for almost 12 years now and I'm
          so grateful to have had the opportunity to learn how to play. In grade
          4, I was able to buy myself a laptop with money I earned from DJ-ing
          at my friends' parties. It was with this laptop that I began learning
          how to produce music and record my friends' vocals. This very
          fortunate background of mine has led me to be very well-versed in
          music theory, music production, and audio engineering, and allowed me
          to be a dedicated music student and sound coordinator for concerts and
          events at my school. It was also that laptop that led me to discover
          the world of programming and web development, and I am very grateful.
        </p>
      </div>
    </section>
  );
};

export default About;
