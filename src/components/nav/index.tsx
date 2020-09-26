import React from 'react';
import Link from 'next/link';

import styles from './nav.module.scss';

type NavProps = {
  auth?: any;
};

export const Nav: React.FC<NavProps> = ({ auth = null }) => {
  const authButton = auth?.user ? (
    <a role="button" onClick={() => auth.signOut()}>
      Sign Out
    </a>
  ) : (
    <a role="button" onClick={() => auth.signInWithGithub()}>
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
            Hello, <b>{auth.user.displayName}</b>
            <img
              style={{ marginLeft: '5px', width: '25px' }}
              className="avatar rounded-circle"
              src={auth.user.photoURL}
              alt={auth.user.displayName}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};
