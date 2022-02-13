import React, { Fragment } from "react";
import Fade from "react-bootstrap/Fade";
// import alien from "./assets/alien.png";
// import github from "./assets/github.png";
// import website from "./assets/website.png";
// import heroku from "./assets/heroku.svg";
import { projects } from "./data";
import "./styles/Projects.scss";

const Projects = () => (
  <div id="projects" className="projects">
    {projects.map(({ image, name, github, website, ...rest }, index) => (
      <Fragment key={crypto.randomUUID()}>
        <div
          className="project-card-wrapper"
          style={{
            backgroundImage: `url(${image}`,
            backgroundSize: "cover",
          }}
        >
          {index !== 4 && <h3 className="project-name">{name}</h3>}
          <div
            className={`d-flex flex-row  ${
              index !== 4 ? "justify-content-between" : "h-100 align-items-end"
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
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary mx-4 py-1"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </Fragment>
    ))}
  </div>
);

export default Projects;
