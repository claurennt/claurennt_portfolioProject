import React, { useRef } from "react";
import { skills } from "./data";
import ToggleButton from "./Components/ToggleButton";
import Icon from "./Components/Icon";
import "./styles/Skills.scss";

const Skills = () => {
  const displaySkills = (prop) =>
    skills[prop].map(({ name, jp2, webP, image }, index) => (
      <div className="h-100 text-center">
        <p className="skill-name ">{name}</p>
        <Icon
          className="skill-level"
          image={image}
          jp2={jp2}
          webP={webP}
          jxr=""
          alt={`${name}-icon`}
        />
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
