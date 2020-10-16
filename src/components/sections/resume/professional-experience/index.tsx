import React from 'react';
import useSWR from 'swr';
import getConfig from 'next/config';
import { compareDesc, parseISO } from 'date-fns';

import { ProfessionalExperienceItem, IProfessionalExperience } from './item';

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

type ProfessionalExperienceProps = {
  list?: IProfessionalExperience[];
};

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json()); // TODO move to another file

export const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  list,
}) => {
  const { data, error } = useSWR(
    `${APP_URL}/api/section/professional-experience`,
    fetcher,
    {
      initialData: { professionalExperiences: list },
    }
  );

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  const { professionalExperiences } = data;

  return (
    <>
      <h3 className="resume-title">Professional Experience</h3>
      {professionalExperiences.map((item: IProfessionalExperience) => (
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
};
