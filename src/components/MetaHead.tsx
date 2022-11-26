import Head from 'next/head';
import { useRouter } from 'next/router';

const meta = {
  title: "Hello, I'm Junho Yeo.",
  description: '19-yo dropout. Generalist Hacker, Shaping the 2nd/3rd web.',
  image: 'https://junho.io/assets/og-image.png',
  url: 'https://junho.io',
};

type MetaHeadProps = {
  title?: string;
  children?: React.ReactNode;
};

const MetaHead = ({ title, children }: MetaHeadProps) => {
  const router = useRouter();
  const currentTitle = title ?? meta.title;

  return (
    <Head>
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={meta.description} />
      <link
        rel="canonical"
        href={`${meta.url}${router.asPath.split('?')[0]}`}
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏴‍☠️</text></svg>"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
      <meta name="theme-color" content="#19181d" />
      {children}
    </Head>
  );
};

export default MetaHead;
