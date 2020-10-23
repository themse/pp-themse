import React from 'react';

import { Company, Project } from './types';

export interface ICareer {
  id: string;
  company?: Company;
  position: string;
  projects?: Project[];
  from: string;
  to: string;
}

export type CareerItemProps = Omit<ICareer, 'id'>;

export const CareerItem: React.FC<CareerItemProps> = ({
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
      {company && (
        <p>
          <em>
            <a href={`https://${company.href}`} target="_blank">
              {company.title}
            </a>{' '}
            - {company.description}
          </em>
        </p>
      )}

      {projects?.map((project) => (
        <div key={project.title}>
          {project.href ? (
            <a href={`https://${project.href}`} target="_blank">
              <b>{project.title}</b>
              <br />
            </a>
          ) : (
            <>
              <span className="font-weight-bold">{project.title}</span>
              <br />
            </>
          )}
          <span className="text-muted">{project.technologies.join(', ')}</span>
          {project.responsibilities.length > 0 && (
            <div className="mt-2">
              <p className="mb-0 font-weight-bold">Responsibilities:</p>
              <ul>
                {project.responsibilities.map((resp, idx) => (
                  <li key={`responsibility-${idx}`} className="pb-0">
                    {resp}
                  </li>
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
