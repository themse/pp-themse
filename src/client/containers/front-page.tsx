import React from 'react';

import { BasicLayout } from '@/client/components/layouts/basic';
import { About } from '@/client/components/sections/about';
import { Skills } from '@/client/components/sections/skills';
import { FrontPageType } from '@/pages/index';

export const FrontPage: React.FC<FrontPageType> = ({ skillsList = [] }) => {
  return (
    <BasicLayout title="Home">
      <About />
      <Skills list={skillsList} />
    </BasicLayout>
  );
};
