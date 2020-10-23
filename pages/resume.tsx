import React from 'react';
import { GetServerSidePropsContext } from 'next';
import getConfig from 'next/config';

import { ResumePage } from '@/client/containers/resume-page';
import { ICareer } from '@/client/components/sections/resume/career/item';

export type ResumePageType = {
  careerList?: ICareer[];
};

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

const Page: React.FC<ResumePageType> = (props: ResumePageType) => (
  <ResumePage {...props} />
);

export const getServerSideProps = async (_: GetServerSidePropsContext) => {
  const props: ResumePageType = {};

  try {
    const res = await fetch(`${APP_URL}/api/career`);
    const { careerList } = await res.json();
    props.careerList = careerList;
  } catch (error) {
    console.error(error.message);
  }
  return {
    props,
  };
};

export default Page;
