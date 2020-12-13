import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Device from './Device';
import { rhythm } from '../../utils/typography';
import useWindowSize from '../../utils/useWindowSize';

const DEVICE_WIDTH = 413;
const DEVICE_HEIGHT = 850;

// ha ha
interface IPhone {}

const Phone: React.FC<IPhone> = () => {
  const { screenWidth } = useWindowSize();
  const [transformScale, setTransformScale] = useState<number>(1);

  useEffect(() => {
    if (screenWidth > 500) {
      return;
    }
    const containerWidth = screenWidth * 0.9;
    setTransformScale(containerWidth / DEVICE_WIDTH);
  }, [screenWidth]);

  return (
    <Wrapper
      style={{
        height: transformScale * DEVICE_HEIGHT,
      }}
    >
      <Device
        style={{
          transform: `scale(${transformScale})`,
        }}
      />
    </Wrapper>
  );
};

export default Phone;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${rhythm(2)};
`;
