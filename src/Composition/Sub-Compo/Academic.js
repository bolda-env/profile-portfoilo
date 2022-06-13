import React from "react";

import Icon from "./Icon";

// Skill Information
const Academic = (props) => {
  const acad = props.icons.filter(
    (icon) => icon.icon_name === "Academic Pursuits"
  );

  return (
    <div className="skills-ctn academic">
      <Icon {...acad[0]} />
      <div className="skill-dv">
        <div className="skill-icon-name">
          <p>Prince Audu Abubakar University, Anyigba, Kogi State, Nigeria.</p>
          <p>B.Sc Economics</p>
        </div>
        <div className="skill-icon-name">
          <p>
            Government Day Secondary School, Aso Pada, Nasarawa State, Nigeria.
          </p>
          <p>West African Examination Council, [WAEC]</p>
        </div>
        <div className="skill-icon-name">
          <p>China Assisted Model Primary School, Nyanya FCT Abuja, Nigeria.</p>
          <p>Primary School Leaving Certificate</p>
        </div>
      </div>
    </div>
  );
};
export default Academic;
