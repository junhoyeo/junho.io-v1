import React from 'react';

import { GlobalStyle } from '../components/GlobalStyle';

import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
      <div id="portal" />
    </React.Fragment>
  );
}

export default MyApp;
