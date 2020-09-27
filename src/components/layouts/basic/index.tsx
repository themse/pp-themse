import React from 'react';
import Head from 'next/head';

import { Header } from './header';
import { Footer } from './footer';
import { useAuth } from '../../../common/auth';
import { IAuth } from '../../../common/types';

type BasicLayoutProps = {
  title: string;
};

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  title,
}) => {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header auth={auth} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};
