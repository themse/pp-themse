import React from 'react';
import useSWR from 'swr';
import getConfig from 'next/config';

import { CareerItem, ICareer } from './item';

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

type CareerProps = {
  list?: ICareer[];
};

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json()); // TODO move to another file

export const Career: React.FC<CareerProps> = ({ list }) => {
  const { data, error } = useSWR(`${APP_URL}/api/career`, fetcher, {
    initialData: { careerList: list },
  });

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  const { careerList } = data;

  return (
    <>
      <h3 className="resume-title">Professional Experience</h3>
      {careerList?.map((item: ICareer) => (
        <CareerItem
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
