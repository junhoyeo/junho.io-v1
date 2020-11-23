import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import { rhythm } from '../utils/typography';

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
      <Container>
        <Brand>{data.site.siteMetadata.title}</Brand>
        <Title>
          안녕하세요.
          <br />
          가치를 담아 서비스를 만드는
          <br />
          여준호입니다.
        </Title>
        <Description>
          꿈꾸는 프론트엔드 개발자, 프로덕트를 사랑하는 기획자.
          <br />제 블로그에 오신 걸 환영해요.
        </Description>
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

  @media screen and (max-width: 1000px) {
    max-width: 75%;
  }

  @media screen and (max-width: 500px) {
    max-width: 90%;
  }
`;

const Brand = styled.span`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #707176;
  cursor: pointer;
  width: fit-content;
  padding-top: ${rhythm(1.8)};
  padding-bottom: ${rhythm(1)};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.25;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  color: #707176;
  padding-bottom: ${rhythm(0.5)};
  line-height: 1.45;
`;
