import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="Crypto app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Welcome to Crypto app!</Title>
    </React.Fragment>
  );
};

export default Home;
