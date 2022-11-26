'use client';

import styled from 'styled-components';

import { rhythm } from '../utils/typography';

export default styled.button`
  padding: ${rhythm(0.55)} ${rhythm(0.65)};
  background-color: #148cff;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
    background-color: #0779e4;
  }
`;

export const SecondaryButton = styled.button`
  padding: ${rhythm(0.55)} ${rhythm(0.65)};
  background-color: #d1e9ff;
  color: #0078eb;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.15s ease;

  &:hover {
    color: rgba(0, 120, 235, 0.85);
    background-color: #abc5de;
  }
`;
