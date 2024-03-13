import { useState, useEffect } from 'react';

type DebouncedFunction<T extends any[]> = (...args: T) => void;

const useDebounce = <T extends any[]>(func: DebouncedFunction<T>, delay: number): DebouncedFunction<T> => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (...args: T) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      func.apply(this, args);
    }, delay) as unknown as NodeJS.Timeout;

    setTimeoutId(id);
  };
};

export default useDebounce;
