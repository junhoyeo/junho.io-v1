import { HeadingComponent } from '@/types/html';

export const SectionTitle: HeadingComponent = ({ style, ...props }) => (
  <h2
    {...props}
    style={{
      paddingTop: 8,
      margin: 0,
      marginBottom: 16,
      fontWeight: 900,
      ...style,
    }}
  />
);
