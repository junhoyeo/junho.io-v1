'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import REPOS from '@/constants/github-repositories.json';

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

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 300px;
`;
