'use client';

import { useServerInsertedHTML } from 'next/navigation';

import { Analytics } from '@/utils/analytics';
import { useStyledComponentsRegistry } from '@/utils/styled-components';

Analytics.initialize();

type Props = {
  children: React.ReactNode;
};

export const RootStyleRegistry: React.FC<Props> = ({ children }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};
