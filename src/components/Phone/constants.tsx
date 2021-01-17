import { IGridItem } from './icons/GridItem';

export const DEVICE_WIDTH = 413;
export const DEVICE_HEIGHT = 850;

export const INSTALLED_APPS: IGridItem[] = [
  // {
  //   name: 'GitHub',
  //   icon: require('../../assets/phone/icons/github.webp'),
  //   color: '#1b2023',
  //   onClick: () => {
  //     // setTimeout(() => {
  //     //   const win = window.open('https://github.com/junhoyeo', '_blank');
  //     //   win?.open();
  //     // }, 800);
  //   },
  // },
  {
    name: '미니맵',
    icon: require('../../assets/phone/icons/minimap.webp'),
    color: '#ffffff',
    notifications: 1,
    onClick: () => {
      setTimeout(() => {
        location.href = '/hipservie/minimap/index.html';
      }, 800);
    },
  },
];
