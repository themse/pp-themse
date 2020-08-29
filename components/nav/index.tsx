import React from "react";
import Link from "next/link";

import styles from "./nav.module.scss";

export const Nav: React.FC = () => (
  <nav className={`${styles["nav-menu"]} d-lg-block`}>
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
    </ul>
  </nav>
);
