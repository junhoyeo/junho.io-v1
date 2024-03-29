import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Analytics } from '../utils/analytics';

type RefForwardedSectionProps = React.HTMLAttributes<HTMLElement> & {
  forwardedRef?: React.ForwardedRef<HTMLElement>;
};
const RefForwardedSection: React.FC<RefForwardedSectionProps> = ({
  forwardedRef,
  style,
  ...props
}) => (
  <section
    ref={forwardedRef}
    style={{ position: 'relative', ...style }}
    {...props}
  />
);

export type TrackedSectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string;
  ref?: React.ForwardedRef<HTMLElement>;
};
export const TrackedSection = React.forwardRef<
  HTMLElement,
  TrackedSectionProps
>((props, forwardedRef) => {
  const [inViewRef, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      Analytics.logEvent('view_landing_section', {
        section: props.id,
      });
    }
  }, [inView, props.id]);

  const mergedRef = useCallback(
    (instance: HTMLElement | null) => {
      if (typeof forwardedRef === 'function') {
        forwardedRef(instance);
      } else if (forwardedRef) {
        forwardedRef.current = instance;
      }
      inViewRef(instance);
    },
    [forwardedRef, inViewRef],
  );

  return <RefForwardedSection forwardedRef={mergedRef} {...props} />;
});
