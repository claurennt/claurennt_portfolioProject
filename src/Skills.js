import React from "react";
import { skills } from "./data";
import ToggleButton from "./Components/ToggleButton";

import "./styles/Skills.scss";

const Skills = () => {
  const displaySkills = (prop) =>
    skills[prop].map(({ name, image }, index) => (
      <div className="skill- h-100">
        <img className="skill-level" src={image} alt={`${name}-icon`} />
        <p className="skill-name">{name}</p>
      </div>
    ));

  return (
    <ToggleButton btnText="Skills">
      <div id="skills" className="skills">
        {displaySkills("frontEnd")}
        {displaySkills("backEnd")}
        {displaySkills("tools")}
        {displaySkills("best practices")}
      </div>
    </ToggleButton>
  );
};

export default Skills;
