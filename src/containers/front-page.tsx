import React from 'react';

import { BasicLayout } from '../components/layouts/basic';
import { About } from '../components/sections/about';
import { Skills } from '../components/sections/skills';
import { FrontPageType } from '../pages';

export const FrontPage: React.FC<FrontPageType> = ({ skillsList = [] }) => {
  return (
    <BasicLayout title="Home">
      <About />
      <Skills list={skillsList} />
    </BasicLayout>
  );
};
