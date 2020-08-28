import React from "react";
import Head from "next/head";
import { Nav } from "../components/nav";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to my WIP portfolio</h1>
    </div>
  </div>
);

export default Home;
