import React from "react";
import Head from "next/head";

import { Header } from "./header";
import { Footer } from "./footer";

type BasicLayoutProps = {
  title: string;
};

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};
