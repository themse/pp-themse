import React from 'react';
import Link from 'next/link';
import { Avatar, Stack } from '@chakra-ui/core';

import styles from './nav.module.scss';
import { IAuth } from '../../common/types';

type NavProps = {
  auth?: IAuth;
};

export const Nav: React.FC<NavProps> = ({ auth = null }) => {
  const authButton = auth?.user ? (
    <a role="button" onClick={() => auth.signOut()}>
      Sign Out
    </a>
  ) : (
    <a role="button" onClick={() => auth?.signInWithGithub()}>
      Sign In
    </a>
  );

  return (
    <nav className={`${styles['nav-menu']} d-lg-block`}>
      <ul>
        <li className="active">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </li>
        {auth && <li>{authButton}</li>}
        {auth?.user && (
          <li>
            <Stack isInline>
              <span>
                Hello, <b>{auth.user.name}</b>
              </span>
              <Avatar
                ml={2}
                size="xs"
                name={auth.user.name}
                src={auth.user.photo}
              />
            </Stack>
          </li>
        )}
      </ul>
    </nav>
  );
};
