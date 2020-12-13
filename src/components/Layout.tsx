import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import { rhythm } from '../utils/typography';

interface ILayout {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ title, description, children }) => {
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
      <Container>
        <BrandWrapper>
          <Link to="/">
            <Brand>{data.site.siteMetadata.title}</Brand>
          </Link>
        </BrandWrapper>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  min-height: 100vh;

  @media screen and (max-width: 1000px) {
    max-width: 75%;
  }

  @media screen and (max-width: 500px) {
    max-width: 90%;
  }
`;

const BrandWrapper = styled.div`
  margin-top: ${rhythm(1.8)};
  margin-bottom: ${rhythm(1)};
`;

const Brand = styled.span`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #707176;
  cursor: pointer;
  width: fit-content;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.25;

  @media screen and (max-width: 330px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  color: #707176;
  padding-bottom: ${rhythm(0.5)};
  line-height: 1.45;
`;
