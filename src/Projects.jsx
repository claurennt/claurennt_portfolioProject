import React, { Fragment } from "react";

import { projects } from "./data";
import "./styles/Projects.scss";

const Projects = () => (
  <div id="projects" className="projects">
    <h5 className="category">The projects I am proud of</h5>
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
