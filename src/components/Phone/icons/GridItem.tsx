import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { Analytics } from '../../../utils/analytics';
import { DEVICE_WIDTH } from '../constants';
import { AppIcon, AppIconProps } from './AppIcon';

export interface IGridItem extends AppIconProps {
  name?: string;
  notifications?: number;
  onClick?: () => void;
  component?: React.ReactNode;
  href?: string;
}

const GridItem: React.FC<IGridItem> = ({
  icon,
  color,
  name,
  notifications,
  onClick,
  component,
  href,
}) => {
  const router = useRouter();

  if (component) {
    return <>{component}</>;
  }

  return (
    <Wrapper
      onClick={() => {
        Analytics.logEvent('click_icon', { name: name ?? 'Unknown' });
        if (!!href) {
          router.push(href);
        }
        onClick?.();
      }}
    >
      <AppIcon
        icon={icon}
        color={color}
        accessories={
          notifications && (
            <Notification>
              <span>{notifications}</span>
            </Notification>
          )
        }
      />
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
  z-index: 2;

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
