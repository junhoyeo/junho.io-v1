import Link from 'next/link';
import React from 'react';

import Button from '../components/Button';
import Layout from '../components/Layout';

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
    <Link href="/">
      <Button>Go back to Home</Button>
    </Link>
  </Layout>
);

export default NotFoundPage;
