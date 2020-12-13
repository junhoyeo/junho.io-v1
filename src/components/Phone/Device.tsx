import React from 'react';
import styled from 'styled-components';

const Device = () => {
  return (
    <Bezel>
      <Screen>
        <NotchWrapper>
          <Notch />
        </NotchWrapper>
      </Screen>
    </Bezel>
  );
};

export default Device;

const Bezel = styled.div`
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
  background-color: white;
  border-radius: 36px;
  display: flex;
  position: relative;
`;

const NotchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
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
