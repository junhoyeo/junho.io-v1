import { HeadingComponent } from '@/types/html';

// FIXME: Detach color palette
const secondaryColor = '#d1e9ff';

export const Tip: HeadingComponent = ({ style, ...props }) => (
  <h3
    {...props}
    style={{
      marginBottom: 28,
      color: secondaryColor,
      backgroundColor: secondaryColor,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.25,
      ...style,
    }}
  />
);
