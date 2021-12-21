import { GlobalStyles } from '@/styles/globals';
import '@/styles/globals.ts';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
