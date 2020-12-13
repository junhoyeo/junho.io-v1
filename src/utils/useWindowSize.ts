import { useCallback, useState, useEffect } from 'react';

export default function useWindowSize(): {
  screenWidth: number | undefined;
  screenHeight: number | undefined;
} {
  const isClient = typeof window === 'object';

  const getSize = useCallback(
    () => ({
      screenWidth: isClient ? window.innerWidth : undefined,
      screenHeight: isClient ? window.innerHeight : undefined,
    }),
    [isClient],
  );

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]);

  return windowSize;
}
