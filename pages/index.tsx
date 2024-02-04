import React from "react";

import { Container, Header, Main, Footer } from "@components";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
    <Head>
      <title>Blip-A Industries</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
    <Container>
      <Header />
      <Main />
    </Container>
    </div>
  );
};

export default Home;
