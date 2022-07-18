import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Phone from '../components/Phone';
import { rhythm } from '../utils/typography';

type LayoutProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <BrandWrapper>
            <Link href="/">
              <Brand>junho.io</Brand>
            </Link>
          </BrandWrapper>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
          <main>{children}</main>
        </Container>
        <Phone />
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1080px;

  @media screen and (max-width: 1200px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1100px) {
    max-width: 850px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 75%;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    max-width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 32px;

  @media screen and (max-width: 1000px) {
    flex: unset;
    margin-right: 0;
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
