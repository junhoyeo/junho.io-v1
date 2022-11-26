import { getSvgPath } from 'figma-squircle';
import styled, { css, keyframes } from 'styled-components';

import { DEVICE_WIDTH } from '../constants';

export type AppIconProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: string;
  color?: string;
  accessories?: React.ReactNode;
  children?: React.ReactNode;
};

const APP_ICON_SIZE = DEVICE_WIDTH * 0.156;
const svgPath = getSvgPath({
  width: APP_ICON_SIZE,
  height: APP_ICON_SIZE,
  cornerRadius: 16,
  cornerSmoothing: 0.8,
});

export const AppIcon: React.FC<AppIconProps> = ({
  children,
  icon,
  color,
  accessories,
  ...props
}) => {
  return (
    <Wrapper>
      <Image icon={icon} color={color} {...props}>
        {children}
      </Image>
      {accessories}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: ${APP_ICON_SIZE}px;
  height: ${APP_ICON_SIZE}px;

  position: relative;
  transition: all 0.45s linear;
  z-index: 0;
`;

const bounce = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
  80% {
    transform: scale(0.9);
    opacity: 1;
  }
`;

const Image = styled.div<AppIconProps>`
  width: ${APP_ICON_SIZE}px;
  height: ${APP_ICON_SIZE}px;
  clip-path: path('${svgPath}');

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &:active {
    animation-name: ${bounce};
    animation-duration: 0.9s;
    animation-timing-function: ease-in-out;
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
