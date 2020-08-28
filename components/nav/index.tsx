import React from "react";
import Link from "next/link";

import styles from "./nav.module.scss";

export const Nav: React.FC = () => (
  <nav className={`${styles["nav-menu"]} d-none d-lg-block`}>
    <ul>
      <li className="active">
        <Link href="index.html">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="about.html">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="resume.html">
          <a>Resume</a>
        </Link>
      </li>
      <li>
        <Link href="services.html">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href="portfolio.html">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="contact.html">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);
