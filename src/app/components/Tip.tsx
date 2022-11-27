import { HeadingComponent } from '@/types/html';

// FIXME: Detach color palette
const secondaryColor = '#d1e9ff';

export const Tip: HeadingComponent = ({ style, ...props }) => (
  <h3
    {...props}
    style={{
      color: secondaryColor,
      backgroundColor: secondaryColor,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '28px',
      ...style,
    }}
  />
);
