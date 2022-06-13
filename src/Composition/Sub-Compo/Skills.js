import React from "react";

import Icon from "./Icon";

// Skill Information
const Skills = (props) => {
  const skill = props.icons.filter((icon) => icon.icon_name === "Skills");

  return (
    <div className="skills-ctn">
      <Icon {...skill[0]} />
      <div className="skill-dv">
        <div className="skill-icon-name">
          <span>html5 & css3</span>
          <div>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
          </div>
        </div>

        <div className="skill-icon-name">
          <span>Javascript</span>
          <div>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
          </div>
        </div>

        <div className="skill-icon-name">
          <span>Node.js</span>
          <div>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
          </div>
        </div>

        <div className="skill-icon-name">
          <span>React.js</span>
          <div>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
          </div>
        </div>

        <div className="skill-icon-name">
          <span>C</span>
          <div>
            <i className="bi bi-circle-fill"></i>
            <i className="bi bi-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
