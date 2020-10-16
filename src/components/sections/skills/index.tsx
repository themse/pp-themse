import React from 'react';
import useSWR from 'swr';
import getConfig from 'next/config';

import { SkillItem } from './item';
import { ISkill } from './types';

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

type SkillsProps = {
  list?: ISkill[];
};

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json()); // TODO move to another file

export const Skills: React.FC<SkillsProps> = ({ list }) => {
  const { data, error } = useSWR(`${APP_URL}/api/section/skills`, fetcher, {
    initialData: { skillsList: list },
  });

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { skillsList } = data;

  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p className="d-none">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eum
            totam animi, quas, veniam pariatur blanditiis, dignissimos velit
            quibusdam saepe distinctio? Autem possimus deserunt doloremque modi
            quasi cumque facere quibusdam?
          </p>
        </div>

        <div className="row d-flex justify-content-center">
          {skillsList?.map((skill: ISkill) => (
            <div key={skill.id} className="col-lg-2 mb-3">
              <a href={`https://${skill.href}`} target="_blank">
                <SkillItem img={skill.img} title={skill.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
