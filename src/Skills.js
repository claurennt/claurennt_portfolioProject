import React, { useRef } from "react";
import { skills } from "./data";
import ToggleButton from "./Components/ToggleButton";

import "./styles/Skills.scss";

const Skills = () => {
  const displaySkills = (prop) =>
    skills[prop].map(({ name, image }, index) => (
      <div className="h-100 text-center">
        <p className="skill-name ">{name}</p>
        <img className="skill-level" src={image} alt={`${name}-icon`} />
      </div>
    ));

  return (
    <div id="skills" className="skills">
      {displaySkills("frontEnd")}
      {displaySkills("backEnd")}
      {displaySkills("tools")}
      {displaySkills("best practices")}
    </div>
  );
};

export default Skills;
