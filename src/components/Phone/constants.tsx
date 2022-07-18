import { IGridItem } from './icons/GridItem';

export const DEVICE_WIDTH = 413;
export const DEVICE_HEIGHT = 850;

export const INSTALLED_APPS: IGridItem[] = [
  {
    name: 'GitHub',
    icon: '/assets/phone/icons/github.webp',
    color: '#1b2023',
    onClick: () => {
      // setTimeout(() => {
      //   const win = window.open('https://github.com/junhoyeo', '_blank');
      //   win?.open();
      // }, 800);
    },
  },
  {
    name: 'Clubhouse',
    icon: '/assets/phone/icons/clubhouse.webp',
    color: '#ffffff',
    notifications: 1,
    onClick: () => {
      setTimeout(() => {
        location.href = 'https://clubhouse.junho.io';
      }, 800);
    },
  },
];
