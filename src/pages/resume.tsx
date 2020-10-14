import React from 'react';
import { GetStaticProps } from 'next';
import getConfig from 'next/config';

import { ResumePage } from '../containers/resume-page';
import { IProfessionalExperience } from '../components/sections/resume/professional-experience/item';

export type ResumePageType = {
  profExpList?: IProfessionalExperience[];
};

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

const Page: React.FC<ResumePageType> = (props: ResumePageType) => (
  <ResumePage {...props} />
);

export const getStaticProps: GetStaticProps<ResumePageType> = async () => {
  const props: ResumePageType = {};

  try {
    const res = await fetch(`${APP_URL}/api/section/professional-experience`);
    const profExpList = await res.json();
    props.profExpList = profExpList;
  } catch (error) {
    console.error(error.message);
  }
  return {
    props,
  };
};

export default Page;
