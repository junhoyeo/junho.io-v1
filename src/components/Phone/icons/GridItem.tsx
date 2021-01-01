import React from 'react';
import styled from 'styled-components';

import AppIcon, { IAppIcon } from './AppIcon';
import { DEVICE_WIDTH } from '../constants';

export interface IGridItem extends IAppIcon {
  name: string;
  notifications?: number;
}

const GridItem: React.FC<IGridItem> = ({
  icon,
  color,
  name,
  notifications,
}) => {
  return (
    <Wrapper>
      <AppIcon icon={icon} color={color}>
        {notifications && (
          <Notification>
            <span>1</span>
          </Notification>
        )}
      </AppIcon>
      <AppName>{name}</AppName>
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
    margin-top: 1.5px;
  }
`;

const AppName = styled.span`
  margin-top: ${DEVICE_WIDTH * 0.016}px;
  font-size: ${DEVICE_WIDTH * 0.032}px;
  font-weight: 500;
  line-height: 1.45;
  user-select: none;
`;
