import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import Device from './Device';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from './constants';
import { rhythm } from '../../utils/typography';
import useWindowSize from '../../utils/useWindowSize';

// ha ha
interface IPhone {}

const Phone: React.FC<IPhone> = () => {
  const { screenWidth = 1980 } = useWindowSize();
  const [transformScale, setTransformScale] = useState<number>(1);

  useEffect(() => {
    if (screenWidth > 500) {
      setTransformScale(1);
      return;
    }
    const containerWidth = screenWidth * 0.9;
    setTransformScale(containerWidth / DEVICE_WIDTH);
  }, [screenWidth]);

  const deviceSize = useMemo(
    () => ({
      width: transformScale * DEVICE_WIDTH,
      height: transformScale * DEVICE_HEIGHT,
    }),
    [transformScale],
  );

  return (
    <Wrapper
      style={{
        height: deviceSize.height,
      }}
    >
      <Device
        deviceSize={deviceSize}
        style={{
          transform: `scale(${transformScale})`,
        }}
      />
    </Wrapper>
  );
};

export default Phone;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rhythm(2)} 0;
`;
