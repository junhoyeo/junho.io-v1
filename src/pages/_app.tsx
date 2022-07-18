import Head from 'next/head';
import React, { useEffect } from 'react';

import { GlobalStyle } from '../components/GlobalStyle';
import { typography } from '../utils/typography';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typography.injectStyles();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=block"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
      <div id="portal" />
    </React.Fragment>
  );
}

export default MyApp;
