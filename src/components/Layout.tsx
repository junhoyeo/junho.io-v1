import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from './GlobalStyle';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
