import React from "react";
import { BasicLayout } from "../components/layouts/basic";
import { About } from "../components/sections/about";

export const FrontPage: React.FC = () => {
  return (
    <BasicLayout title="Home">
      <About />
    </BasicLayout>
  );
};
