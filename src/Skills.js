import React from "react";
import { skills } from "./data";

import Icon from "./Components/Icon";
import "./styles/Skills.scss";

const Skills = () => {
  const displaySkills = (prop) =>
    skills[prop].map(({ name, svg, jp2 }, index) => (
      <div className="h-100 px-2" key={crypto.randomUUID()}>
        <div className={`${index !== 8 && "icon-container"}`}>
          <Icon
            className="skill-level"
            svg={svg}
            jp2={jp2}
            jxr=""
            alt={`${name}-icon`}
          />
        </div>
        <p className="skill-name">{name}</p>
      </div>
    ));

  return (
    <div id="skills" className="skills">
      <h5 className="category">The skills I have acquired so far</h5>
      {displaySkills("front-end")}
      {displaySkills("back-end")}
      {displaySkills("databases")}
      {displaySkills("deployment")}
      {displaySkills("tools")}
      {displaySkills("best practices")}
    </div>
  );
};

export default Skills;
