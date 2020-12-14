import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import Device, { DEVICE_WIDTH, DEVICE_HEIGHT } from './Device';
import { rhythm } from '../../utils/typography';
import useWindowSize from '../../utils/useWindowSize';

// ha ha
interface IPhone {}

const Phone: React.FC<IPhone> = () => {
  const { screenWidth } = useWindowSize();
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${rhythm(2)};
`;
