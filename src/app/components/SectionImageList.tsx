import Image, { type ImageProps } from 'next/image';

import { shadow } from '@/styles/shadow';
import { UListComponent } from '@/types/html';

const List: UListComponent = ({ style, ...props }) => (
  <ul
    {...props}
    style={{
      padding: 0,
      marginBottom: 16,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style,
    }}
  />
);

const Item: React.FC<ImageProps> = ({ style, ...props }) => (
  <Image
    {...props}
    style={{
      width: '100%',
      height: 'auto',
      borderRadius: 6,
      boxShadow: shadow('to-bottom'),
      ...style,
    }}
  />
);

export const SectionImage = {
  List,
  Item,
};
