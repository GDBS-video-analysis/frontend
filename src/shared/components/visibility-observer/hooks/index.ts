import { useEffect, useRef } from 'react';

export const useVisibility = <T extends Element>(
  onChangeVisibility?: (isVisible: boolean) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (onChangeVisibility) onChangeVisibility(entry.isIntersecting);
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return {
    ref,
  };
};
