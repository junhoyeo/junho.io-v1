import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Button, { SecondaryButton } from '../components/Button';
import Layout from '../components/Layout';
import MetaHead from '../components/MetaHead';

const IndexPage = () => (
  <Layout
    title={
      <>
        Hello!
        <br />
        I'm Junho Yeo.
      </>
    }
    description={
      <>
        Welcome to my site. I'm a 19-yo developer in Seoul, shaping the 2nd/3rd
        web. Sometimes a designer and dreamer, I just like to build things. Now
        I'm preparing the infrastructure—insight, followers, and capital— for a
        bigger dream.
      </>
    }
  >
    <MetaHead />
    <div style={{ gap: 8, display: 'flex' }}>
      <a href="https://github.com/junhoyeo" target="_blank">
        <Button>GitHub</Button>
      </a>
      <a href="https://twitter.com/_junhoyeo" target="_blank">
        <SecondaryButton>Twitter</SecondaryButton>
      </a>
    </div>
    <div style={{ height: 100 }} />
    <Section id="github">
      <h2>GitHub</h2>
      <p>
        When I have an idea, I like to start something right away. I start
        writing code. Almost all of my works are on GitHub, and it got me 1.3k+
        stars and some grateful followers. Please check my{' '}
        <a
          href="https://github.com/junhoyeo?tab=repositories"
          target="_blank"
          style={{ color: '#47d1ff', textDecoration: 'underline' }}
        >
          GitHub profile
        </a>{' '}
        and{' '}
        <a
          href="https://trendy-resume.vercel.app"
          target="_blank"
          style={{ color: '#47d1ff', textDecoration: 'underline' }}
        >
          trendy-resume.vercel.app(Outdated)
        </a>{' '}
        for a complete list of my projects.
      </p>
      <ImageRow>
        <img src="/assets/github-2.png" />
        <img src="/assets/github-1.png" />
      </ImageRow>
    </Section>
    <Section id="bento">
      <h2>Bento</h2>
      <ImageRow>
        <img src="/assets/bento-1.png" />
      </ImageRow>
      <p>
        I made various dashboard apps for some protocols/wallets part-time and
        was soon disappointed that they were moving cringely outside their
        ecosystem.
      </p>
      <p>
        It turns out that services are primarily associated with specific
        Layer-1 chains built by the same team or shared VCs. Users need
        multi-chain and scalability, but products were just too busy looking at
        other business things. The others are closed-source software, so
        development is centralized to the team. If you want your protocol
        listed, you have to depend on the team to add support.
      </p>
      <p>
        That made me decide to build an open-source dashboard of my own. And
        after that, I began building, made the team, and named the app "Bento."
        With the dashboard launching soon, you can check the page here:{' '}
        <a
          href="https://bento.finance"
          target="_blank"
          style={{ color: '#ff474c', textDecoration: 'underline' }}
        >
          https://bento.finance
        </a>
      </p>
    </Section>
    <Section id="alphaworks">
      <h2>Alphaworks</h2>
      <p>
        <strong>Developer in Residence 2021.10 ~</strong>
      </p>
      <ImageRow>
        <img src="/assets/alphaworks-dir.jpg" />
      </ImageRow>
      <p>
        Worked on various NFT projects and frontends. Developed crafting
        solution to function customisable NFTs on Immutable X.
      </p>
      <p>And many things...</p>
      <ImageRow>
        <img src="/assets/manythings.png" />
      </ImageRow>
      <Section id="keplr">
        <h3>Keplr</h3>
        <p>
          Contributed to Keplr Wallet and the early version of the web
          dashboard.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/chainapsis/keplr-wallet/pull/369"
              target="_blank"
              style={{ color: '#8962FF', textDecoration: 'underline' }}
            >
              Normalize font-family of mnemonic input placeholder #369
            </a>
          </li>
          <li>
            <a
              href="https://github.com/chainapsis/keplr-wallet/pull/388"
              target="_blank"
              style={{ color: '#8962FF', textDecoration: 'underline' }}
            >
              Implement KeplrError and replace error instances in
              @keplr-wallet/background #388
            </a>
          </li>
        </ul>
      </Section>
    </Section>
    <Section id="defi">
      <h2>DeFi</h2>
      <p>
        Mainly contributing to the product side, I worked part-time on some
        protocols powering DeFi. One had an average TVL of $330m, and the other
        with a total trading volume of {`>`} $1.65b.
      </p>
    </Section>
    <Section id="toss">
      <h2>Toss</h2>
      <p>
        <strong>Frontend Chapter Support 2021.07 ~ 2021.09</strong>
      </p>
      <p>
        Toss, the fintech super app unicorn currently valued at more than $7.4B
        and also the largest unicorn startup in South Korea.
      </p>
      <p>
        Here I built the landing page of NEXT 2021(a large-scale recruitment
        event with an achievement system) and contributed to the frontend of
        Simplicity 21(an internal design conference). Also maintained web
        products such as Toss Feed 3.0, Home, and Notice.
      </p>
      <ImageRow>
        <img src="/assets/toss-1.png" />
        <img src="/assets/toss-2.png" />
        <img src="/assets/toss-3.png" />
        <img src="/assets/toss-4.png" />
      </ImageRow>
    </Section>
    <Section id="pocketlesson">
      <h2>PocketLesson</h2>
      <p>
        <strong>Software Engineer 2021.02 ~ 2021.12</strong>
      </p>
      <p>
        PocketLesson provides contactless golf instructions in-app. I proceeded
        with application/web development through React and React Native. Our
        team made cool things as open-source too, such as{' '}
        <a
          href="https://github.com/devxoul/daumpostcode"
          target="_blank"
          style={{ color: '#476fff', textDecoration: 'underline' }}
        >
          devxoul/daumpostcode
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/check-mergeable/check-mergeable"
          target="_blank"
          style={{ color: '#476fff', textDecoration: 'underline' }}
        >
          check-mergeable
        </a>
      </p>
      <ImageRow>
        <img src="/assets/pocketlesson-1.png" />
        <img src="/assets/pocketlesson-2.png" />
      </ImageRow>
    </Section>
  </Layout>
);

export default IndexPage;

const Section = styled.section`
  padding-top: 16px;
`;

const ImageRow = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > img {
    width: 100%;
    border-radius: 8px;
  }
`;
