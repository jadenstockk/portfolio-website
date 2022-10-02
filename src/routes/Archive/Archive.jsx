import React from "react";
import "./Archive.css";
import projectList from "../../assets/projects.json";
import starIcon from "../../assets/star.svg";

const Archive = () => {
  return (
    <div>
      <section
        id="archive"
        className="fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="wrapper">
          <h2 className="big-heading-1">My Projects</h2>
          <table>
            <tr className="table-headings">
              <th>Year</th>
              <th>Name</th>
              <th className="mobile-hide">Tags</th>
              <th>Links</th>
            </tr>
            {projectList.map((project) => {
              return (
                <tr className="project-section">
                  <td>{project.year}</td>
                  <td>
                    {project.starred ? (
                      <img
                        width="15px"
                        style={{ marginRight: "5px" }}
                        src={starIcon}
                        alt=""
                      ></img>
                    ) : null}
                    {project.name}
                  </td>
                  <td className="mobile-hide project-tags">
                    {project.tags.map((tag) => {
                      if (tag) {
                        return <div className="project-tag">{tag}</div>;
                      } else {
                        return null;
                      }
                    })}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
};

export default Archive;
