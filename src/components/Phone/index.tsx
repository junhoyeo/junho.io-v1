import React from 'react';
import styled from 'styled-components';

import Device from './Device';

type PhoneProps = {
  transformScale: number;
};

const Phone: React.FC<PhoneProps> = ({ transformScale }) => {
  return (
    <Wrapper>
      <Device
        style={{
          transform: `scale(${transformScale})`,
          transformOrigin: 'top center',
        }}
      />
    </Wrapper>
  );
};

export default Phone;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
