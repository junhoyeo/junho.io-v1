import {
  TrackedSection,
  TrackedSectionProps,
} from '@/components/TrackedSection';

export const Section: React.FC<TrackedSectionProps> = ({ style, ...props }) => (
  <TrackedSection {...props} style={{ paddingTop: 16, ...style }} />
);
