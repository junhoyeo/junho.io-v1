'use client';

import React, { useMemo } from 'react';

import Layout from '@/components/Layout';
import REPOS from '@/constants/github-repositories.json';
import { UListComponent } from '@/types/html';

import { ListItem } from './components/ListItem';

export default function OSSPage() {
  const items = useMemo(() => {
    return REPOS.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }, []);

  return (
    <Layout title={<>OSS</>}>
      <List>
        {items.map((repository) => (
          <ListItem key={repository.html_url} {...repository} />
        ))}
      </List>
    </Layout>
  );
}

const List: UListComponent = ({ style, ...props }) => (
  <ul
    {...props}
    style={{
      margin: 0,
      padding: 0,
      listStyleType: 'none',

      display: 'flex',
      flexDirection: 'column',
      gap: '20px',

      marginBottom: '300px',
      ...style,
    }}
  />
);
