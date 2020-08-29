import React from "react";
import { ProfessionalExperienceItem } from "./item";
import { professionalExperienceList } from "./list";

export const ProfessionalExperience: React.FC = () => {
  return (
    <>
      <h3 className="resume-title">Professional Experience</h3>
      {professionalExperienceList.map((item) => (
        <ProfessionalExperienceItem
          key={item.company.title}
          position={item.position}
          projects={item.projects}
          company={item.company}
          from={item.from}
          to={item.to}
        />
      ))}
    </>
  );
};
