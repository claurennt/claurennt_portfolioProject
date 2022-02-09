import React from "react";
import Fade from "react-bootstrap/Fade";
// import alien from "./assets/alien.png";
// import github from "./assets/github.png";
// import netlify from "./assets/netlify.png";
// import heroku from "./assets/heroku.svg";
import { projects } from "./data";
import "./styles/Projects.scss";

const Projects = () => (
  <div id="projects" className="projects">
    {projects.map(({ image, name, github, netlify, heroku }, index) => {
      return (
        <div
          className="project-card-wrapper"
          style={{
            backgroundImage: `url(${image}`,
            backgroundSize: "cover",
          }}
        >
          {index !== 3 && <h3 className="project-name shadow-l">{name}</h3>}
          <div
            className={`d-flex flex-row  ${
              index !== 3 ? "justify-content-between" : "h-100 align-items-end"
            } `}
          >
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary mx-4 py-1"
            >
              Code
            </a>
            {(netlify || heroku) && (
              <a
                href={netlify ?? heroku}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary mx-4 py-1"
              >
                Live
              </a>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default Projects;
