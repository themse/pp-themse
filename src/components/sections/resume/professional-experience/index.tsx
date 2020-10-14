import React from 'react';
import {
  ProfessionalExperienceItem,
  ProfessionalExperienceItemProps,
} from './item';

type ProfessionalExperienceProps = {
  list?: ProfessionalExperienceItemProps[];
};

export const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  list,
}) => (
  <>
    <h3 className="resume-title">Professional Experience</h3>
    {list?.map((item) => (
      <ProfessionalExperienceItem
        key={item.id}
        position={item.position}
        projects={item.projects}
        company={item.company}
        from={item.from}
        to={item.to}
      />
    ))}
  </>
);
