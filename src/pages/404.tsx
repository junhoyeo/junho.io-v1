import Link from 'next/link';
import React from 'react';

import Button from '../components/Button';
import Layout from '../components/Layout';
import MetaHead from '../components/MetaHead';

const NotFoundPage = () => (
  <Layout
    title="This page is gone"
    description={
      <>
        You can be either lost or after a missing page.
        <br />
        Please recheck the URL.
      </>
    }
  >
    <MetaHead title="404: Not Found" />
    <Link href="/">
      <Button>Go back to Home</Button>
    </Link>
  </Layout>
);

export default NotFoundPage;
