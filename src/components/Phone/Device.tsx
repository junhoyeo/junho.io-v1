import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import Symbols from './Symbols';
import Pagination from './Pagination';
import BottomIcons from './icons/BottomIcons';
import GridItem from './icons/GridItem';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './constants';

import background from '../../assets/phone/background.png';

interface IDevice {
  deviceSize: {
    width: number;
    height: number;
  };
  style?: React.CSSProperties;
}

const Device: React.FC<IDevice> = ({ deviceSize, style }) => {
  const currentTime = useMemo(() => {
    const date = new Date();
    return `${date.getHours() || 12}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }, []);

  return (
    <Bezel style={style}>
      <Screen>
        <TopContainer>
          <Clock>{currentTime}</Clock>
          <Notch />
          <Symbols />
        </TopContainer>
        <GridWrapper>
          <GridContainer>
            {new Array(23).fill(null).map((v, i) => (
              <GridItem />
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
      <LeftButtons>
        <SilentSwitch />
        <VolumeUpButton />
        <VolumeDownButton />
      </LeftButtons>
      <RightButtons>
        <PowerButton />
      </RightButtons>
    </Bezel>
  );
};

export default Device;

const Bezel = styled.div`
  position: relative;
  background-color: #1a1b1b;
  border-radius: 52px;
  border: 1px solid #3d3d3d;
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 18px;
  transform-origin: top;
  transition: 0.5s all ease-out;
`;

const Screen = styled.div`
  width: 375px;
  height: 812px;
  background-color: #01141f;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${background});
`;

const TopContainer = styled.div`
  width: 100%;
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
    ${DEVICE_WIDTH * (0.016 + 0.15) + DEVICE_WIDTH * (0.0928 * 0.695)}px
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
  background-image: url(${background});

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

const Notch = styled.div`
  height: 35px;
  width: 230px;
  background-color: #1a1b1b;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 9px;
    width: 8px;
    top: 0px;
    left: -7px;
    background-image: radial-gradient(
      circle at 0 100%,
      rgba(204, 0, 0, 0) 7px,
      #1a1b1b 8px
    );
  }

  &::after {
    content: '';
    position: absolute;
    height: 9px;
    width: 8px;
    top: 0px;
    right: -7px;
    background-image: radial-gradient(
      circle at 100% 100%,
      rgba(204, 0, 0, 0) 7px,
      #1a1b1b 8px
    );
  }
`;

const LeftButtons = styled.div`
  position: absolute;
  top: 120px;
  left: -6px;
`;

const buttonStyle = css`
  width: 7px;
  background-color: #2b2b2c;
  border: 2px solid #0f0f0f;
`;

const leftButtonStyle = css`
  ${buttonStyle}
  border-right: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const SilentSwitch = styled.div`
  ${leftButtonStyle}
  height: 36px;
`;

const VolumeUpButton = styled.div`
  ${leftButtonStyle}
  height: 62px;
  margin-top: 27px;
`;

const VolumeDownButton = styled.div`
  ${leftButtonStyle}
  height: 62px;
  margin-top: 7px;
`;

const RightButtons = styled.div`
  position: absolute;
  top: 182px;
  right: -6px;
`;

const rightButtonStyle = css`
  ${buttonStyle}
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const PowerButton = styled.div`
  ${rightButtonStyle}
  height: 101px;
`;
