import { GlobalStyles } from '@/styles/globals';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.ts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
