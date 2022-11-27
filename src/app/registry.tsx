'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

import { typography } from '@/utils/typography';

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return (
      <>
        {[
          <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />,
          styles,
        ]}
      </>
    );
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
