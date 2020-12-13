import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import Symbols from './Symbols';

// @ts-ignore FIXME
import background from '../../assets/phone/background.png';

const Device = () => {
  const currentTime = useMemo(() => {
    const date = new Date();
    return `${date.getHours() || 12}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }, []);

  return (
    <Bezel>
      <Screen style={{ backgroundImage: `url(${background})` }}>
        <TopContainer>
          <Clock>{currentTime}</Clock>
          <Notch />
          <Symbols />
        </TopContainer>
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
  padding: 18px;
`;

const Screen = styled.div`
  width: 375px;
  height: 812px;
  background-color: #01141f;
  border-radius: 36px;
  display: flex;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
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
