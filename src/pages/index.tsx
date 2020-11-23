import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout
    title={
      <>
        안녕하세요.
        <br />
        가치를 담아 서비스를 만드는
        <br />
        여준호입니다.
      </>
    }
    description={
      <>
        꿈꾸는 프론트엔드 개발자, 프로덕트를 사랑하는 기획자.
        <br />제 블로그에 오신 걸 환영해요.
      </>
    }
  >
    <SEO title="Home" />
  </Layout>
);

export default IndexPage;
