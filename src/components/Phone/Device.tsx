import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import Pagination from './Pagination';
import Symbols from './Symbols';
import { DEVICE_HEIGHT, DEVICE_WIDTH, INSTALLED_APPS } from './constants';
import BottomIcons from './icons/BottomIcons';
import GridItem from './icons/GridItem';

interface IDevice {
  deviceSize: {
    width: number;
    height: number;
  };
  style?: React.CSSProperties;
}

const Device: React.FC<IDevice> = ({ style }) => {
  const currentTime = useMemo(() => {
    const date = new Date();
    return `${date.getHours() || 12}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }, []);

  return (
    <Phone className="device device-iphone-14-pro" style={style}>
      <div className="device-frame">
        <Screen className="device-screen">
          <TopContainer>
            <Clock>{currentTime}</Clock>
            {/* <Notch /> */}
            <Symbols />
          </TopContainer>
          <GridWrapper>
            <GridContainer>
              {INSTALLED_APPS.map((appItem, appIndex) => (
                <GridItem key={appIndex} {...appItem} />
              ))}
            </GridContainer>
          </GridWrapper>
          <BottomWrapper>
            <Pagination />
            <BottomContainer>
              <BottomIcons.Phone />
              <BottomIcons.Mail />
              <BottomIcons.Safari />
              <BottomIcons.Music />
            </BottomContainer>
          </BottomWrapper>
        </Screen>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header"></div>
      <div className="device-sensors"></div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </Phone>
  );
};

export default Device;

export const shadow = (position: 'to-top' | 'to-bottom') => {
  const multiplier = position === 'to-top' ? 1 : -1;
  return css`
    box-shadow: 0px ${multiplier * 1.9}px 5.4px rgba(0, 0, 0, 0.066),
      0px ${multiplier * 4.9}px 13.6px rgba(0, 0, 0, 0.098),
      0px ${multiplier * 9.9}px 27.6px rgba(0, 0, 0, 0.127),
      0px ${multiplier * 20.4}px 56.9px rgba(0, 0, 0, 0.163),
      0px ${multiplier * 56}px 156px rgba(0, 0, 0, 0.24);
  `;
};

const Phone = styled.div`
  border-radius: 68px;

  ${shadow('to-top')}

  @media screen and (max-width: 600px) {
    ${shadow('to-bottom')}
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #01141f;
  display: flex;
  flex-direction: column;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/assets/phone/background.jpg');
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
`;

const GridWrapper = styled.div`
  margin: 0 13px;
  margin-top: ${DEVICE_HEIGHT * 0.0875}px;
  display: flex;
  flex: 1;
`;

const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${DEVICE_WIDTH * 0.156 + 22.6}px);
  grid-template-rows: repeat(
    auto-fill,
    ${DEVICE_WIDTH * (0.016 + 0.15) + DEVICE_WIDTH * (0.12 * 0.695)}px
  );
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BottomContainer = styled.div`
  width: 94.6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 32px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  height: ${DEVICE_HEIGHT * 0.11}px;
  padding: ${0.045 * DEVICE_WIDTH}px ${0.047 * DEVICE_WIDTH}px;
  background-image: url('/assets/phone/background.png');

  &::before {
    content: '';
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(24px);
    margin: -20px;
    background-size: cover;
    opacity: 0.5;
    background-position-y: bottom;
  }
`;

const Clock = styled.span`
  font-size: 17px;
  font-weight: bold;
  height: fit-content;
  position: absolute;
  top: 19px;
  left: 26px;
`;
