import React from "react";
import { GetStaticProps } from "next";
import getConfig from "next/config";

import { FrontPage } from "../containers/front-page";
import { SkillType } from "../components/sections/skills";

export type FrontPageType = {
  skillsList?: SkillType[];
};

const {
  publicRuntimeConfig: { APP_URL },
} = getConfig();

const Page: React.FC<FrontPageType> = (props) => <FrontPage {...props} />;

export const getStaticProps: GetStaticProps<FrontPageType> = async () => {
  const props: FrontPageType = {};

  try {
    const res = await fetch(`${APP_URL}/api/section/skills`);
    const { data: skillsList } = await res.json();
    props.skillsList = skillsList;
  } catch (error) {
    console.error(error.message);
  }

  return {
    props,
  };
};

export default Page;
