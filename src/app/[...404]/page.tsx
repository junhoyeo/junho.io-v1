import Link from 'next/link';
import React from 'react';

import { PrimaryButton } from '@/components/Button';
import Layout from '@/components/Layout';

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
      <PrimaryButton>Go back to Home</PrimaryButton>
    </Link>
  </Layout>
);

export default NotFoundPage;
