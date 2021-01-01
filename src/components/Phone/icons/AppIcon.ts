import styled, { css, keyframes } from 'styled-components';

import { DEVICE_WIDTH } from '../constants';

export interface IAppIcon {
  icon?: string;
  color?: string;
}

const bounce = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
  60% {
    transform: scale(0.9);
    opacity: 1;
  }
  80% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(0.95);
  }
`;

const AppIcon = styled.div<IAppIcon>`
  width: ${DEVICE_WIDTH * 0.156}px;
  height: ${DEVICE_WIDTH * 0.156}px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.45s linear;

  &:hover {
    animation-name: ${bounce};
    animation-duration: 0.9s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    transform: scale(1.08);
  }

  ${({ color = 'white' }) =>
    css`
      background-color: ${color};
    `};

  ${({ icon }) =>
    icon &&
    css`
      && {
        background-image: url(${icon});
        background-size: cover;
      }
    `};
`;

export default AppIcon;
