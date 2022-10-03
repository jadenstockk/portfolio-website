import React, { useEffect } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills//Skills";
import "./Index.css";

const Index = () => {
  useEffect(() => {
    let href = window.location.href;
    if (href.includes("#")) {
      let id = href.split("#")[1];
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
