import React from "react";

import { Company, Project } from "./types";

export type ProfessionalExperienceItemProps = {
  company: Company;
  position: string;
  projects: Project[];
  from: string;
  to: string;
};

export const ProfessionalExperienceItem: React.FC<ProfessionalExperienceItemProps> = ({
  position,
  projects,
  company,
  from,
  to,
}) => {
  return (
    <div className="resume-item">
      <h4>{position}</h4>
      <h5>
        {from} - {to}
      </h5>
      <p>
        <em>
          <a href={company.href}>{company.title}</a> - {company.description}
        </em>
      </p>
      {projects.map((project) => (
        <div key={project.title}>
          {project.href ? (
            <a href={project.href} target="_blank">
              <b>{project.title}</b>
              <br />
            </a>
          ) : (
            <>
              <span className="font-weight-bold">{project.title}</span>
              <br />
            </>
          )}
          <span className="text-muted">{project.technologies.join(", ")}</span>
          {project.responsibilities.length > 0 && (
            <div className="mt-2">
              <p className="mb-0 font-weight-bold">Responsibilities:</p>
              <ul>
                {project.responsibilities.map((resp) => (
                  <li className="pb-0">{resp}</li>
                ))}
              </ul>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};
