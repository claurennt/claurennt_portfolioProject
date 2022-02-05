import React from "react";

import ToggleButton from "./Components/ToggleButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import alien from "./assets/alien.png";
import github from "./assets/github.png";
import netlify from "./assets/netlify.png";
import heroku from "./assets/heroku.svg";
import projects from "./data";
import "./styles/Projects.scss";

const Projects = () => (
  <ToggleButton btnText="Projects">
    <Container>
      <div id="projects" className="projects">
        <Row>
          {" "}
          {projects.map(({ image, name, github, netlify, heroku }, index) => {
            return (
              <Col lg={4} sm={12} key={index}>
                <div
                  className="project-card-wrapper"
                  style={{
                    backgroundImage: `url(${image}`,
                    backgroundSize: "cover",
                  }}
                >
                  {index !== 3 ? (
                    <h3 className="project-name shadow-l">{name}</h3>
                  ) : (
                    <h3 className="project-name shadow-l mt-4">Front-end</h3>
                  )}
                  <div className="d-flex flex-row ">
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary mx-4"
                    >
                      Code
                    </a>
                    {(netlify || heroku) && (
                      <a
                        href={netlify ?? heroku}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary mx-4"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  </ToggleButton>
);

export default Projects;
