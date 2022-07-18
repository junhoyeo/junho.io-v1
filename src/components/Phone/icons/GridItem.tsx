import React from 'react';
import styled from 'styled-components';

import { DEVICE_WIDTH } from '../constants';
import AppIcon, { IAppIcon } from './AppIcon';

export interface IGridItem extends IAppIcon {
  name?: string;
  notifications?: number;
  onClick?: () => void;
  component?: React.ReactNode;
}

const GridItem: React.FC<IGridItem> = ({
  icon,
  color,
  name,
  notifications,
  onClick,
  component,
}) => {
  if (component) {
    return <>{component}</>;
  }

  return (
    <Wrapper onClick={onClick}>
      <AppIcon icon={icon} color={color}>
        {notifications && (
          <Notification>
            <span>{notifications}</span>
          </Notification>
        )}
      </AppIcon>
      <AppName>{name || 'Unknown'}</AppName>
    </Wrapper>
  );
};

export default GridItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Notification = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff392e;
  position: absolute;
  top: -5px;
  right: -5px;

  span {
    font-size: 10px;
    font-weight: bold;
    color: white;
    line-height: 1;
  }
`;

const AppName = styled.span`
  margin-top: ${DEVICE_WIDTH * 0.016}px;
  font-size: ${DEVICE_WIDTH * 0.026}px;
  font-weight: 500;
  line-height: 1.45;
  user-select: none;
`;
