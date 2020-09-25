import React from "react";
import { GetStaticProps } from "next";

import { FrontPage } from "../containers/front-page";
import { SkillType } from "../components/sections/skills";

export type FrontPageType = {
  skillsList?: SkillType[];
};

const Page: React.FC<FrontPageType> = (props) => <FrontPage {...props} />;

export const getStaticProps: GetStaticProps<FrontPageType> = async () => {
  const props: FrontPageType = {};

  try {
    const res = await fetch("http://localhost:3000/api/section/skills");
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
