import React from 'react';
import styled from 'styled-components';

import Device from './Device';
import { rhythm } from '../../utils/typography';

// ha ha
interface IPhone {}

const Phone: React.FC<IPhone> = () => {
  return (
    <Wrapper>
      <Device />
    </Wrapper>
  );
};

export default Phone;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: ${rhythm(2)};
`;
