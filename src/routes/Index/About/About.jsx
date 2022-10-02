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
          Believe it or not my coding journey actually started off in 2016 when
          I was 10 years old according to my{" "}
          <a href={scratchLink} target="_blank" rel="noopener noreferrer">
            Scratch profile
          </a>
          . I owe a lot of my interest in coding to educational coding platform,
          Scratch. It gave me a good foundation into how variables, loops, and
          functions work. I remember trying some Python a few years into playing
          around in Scratch. But that didn't get further than print statements
          and while loops. It wasn't until 2020 that my coding journey really
          took off.
        </p>
        <p className="description-1">
          During the pandemic, I got onto the chat platform{" "}
          <a href={discordLink} target="_blank" rel="noopener noreferrer">
            Discord
          </a>{" "}
          in attempt to get some social contact. I created my own "server" in
          which my friends could join. I found fascination and enjoyment in
          customizing my server and developing it into a space for me and my
          friends to enjoy. I wanted to go even further and create my own
          Discord bot which could preform fancy commands and do cool things. It
          was then that I started to learn how to make my own Discord bots
          through Discord's API using the Discord.js framework. I spent
          countless hours working on bots and watching tutorials. In 2021, I
          created a{" "}
          <a href={helpsieLink} target="_blank" rel="noopener noreferrer">
            public bot
          </a>{" "}
          for other Discord users to add to their servers. Through all of this,
          I had accidentally taught myself JavaScript, Node.js, MongoDB, and
          soon enough I had also covered basic HTML, CSS, Express.js and also
          had skills in how to set up a hosting platform and use the Linux
          terminal.
        </p>
        <p className="description-1">
          Since putting my Discord bot life behind me, I have been working on my
          full-stack development skills. More specifically, broadening my
          knowledge of the web framework React. I am also currently doing my
          I.T. course at school which is teaching me Java. I'm keep to continue
          expanding my knowledge on all of these languages and frameworks. I'm
          wanting to get into IOS Development with Swift and SwiftUI as well as
          SQL.
        </p>
      </div>
    </section>
  );
};

export default About;
