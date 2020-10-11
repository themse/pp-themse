import React from 'react';
import Link from 'next/link';

import { Nav } from '../../nav';

export const Header: React.FC = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="logo">
          <Link href="/">
            <a>Themse</a>
          </Link>
        </h1>

        <Nav />

        {/* <div className="header-social-links">
          <a href="#" className="twitter">
            <i className="icofont-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="icofont-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="icofont-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="icofont-linkedin" />
          </a>
        </div> */}
      </div>
    </header>
  );
};
