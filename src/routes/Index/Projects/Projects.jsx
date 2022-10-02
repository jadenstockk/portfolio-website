import React from "react";
import projectList from "../../../assets/projects.json";
import githubIcon from "../../../assets/github.svg";
import linkIcon from "../../../assets/external-link.svg";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="fade-up"
        style={{ animationDelay: "700ms" }}
      >
        <div className="wrapper">
          <h2 className="medium-heading-1">
            <span className="section-number">03.</span> My Projects
          </h2>
          <p className="description-1"></p>
          <div className="projects-container">
            {projectList.map((project) => {
              if (project.starred) {
                let link = project.link || project.github || null;
                return (
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    <div className="project">
                      <h3>
                        {project.name} ({project.year})
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <img width="18px" src={githubIcon} alt="" />
                          </a>
                        ) : null}
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <img width="15px" src={linkIcon} alt="" />
                          </a>
                        ) : null}
                      </h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => {
                          if (tag) {
                            return <div className="project-tag">{tag}</div>;
                          } else {
                            return null;
                          }
                        })}
                      </div>
                    </div>
                  </a>
                );
              } else {
                return null;
              }
            })}
          </div>
          <a href="/projects" className="btn">
            View all
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
