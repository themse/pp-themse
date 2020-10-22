import React from 'react';
import { GetServerSidePropsContext } from 'next';
import getConfig from 'next/config';

import { FrontPage } from '@/client/containers/front-page';
import { ISkill } from '@/client/components/sections/skills/types';

export type FrontPageType = {
  skillsList?: ISkill[];
};

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

const Page: React.FC<FrontPageType> = (props) => <FrontPage {...props} />;

export const getServerSideProps = async (_: GetServerSidePropsContext) => {
  const props: FrontPageType = {};

  try {
    const res = await fetch(`${APP_URL}/api/section/skills`);
    const { skillsList } = await res.json();
    props.skillsList = skillsList;
  } catch (error) {
    console.error(error.message);
  }

  return {
    props,
  };
};

export default Page;
