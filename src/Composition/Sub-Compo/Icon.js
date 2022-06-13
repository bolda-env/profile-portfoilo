import React from "react";

const Icon = (props) => {
  const { icon, icon_name: name } = props;

  return (
    <div className="icon">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
};

export default Icon;
