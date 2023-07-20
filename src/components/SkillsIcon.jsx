import React from "react";

const SkillsIcon = ({ icon, index }) => {
  return (
    <div key={index} className="skills-right-section-icons">
      <div className="icon-container">
        <img
          className="skills__programming-icon"
          src={icon.blackandwhite}
          alt={icon.name}
        />
      </div>
      <p>{icon.name}</p>
    </div>
  );
};

export default SkillsIcon;
