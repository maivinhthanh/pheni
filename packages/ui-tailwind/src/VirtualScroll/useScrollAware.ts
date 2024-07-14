import { useRef, useState, useEffect, useCallback, MutableRefObject, SetStateAction } from 'react';

type ScrollAwareReturn = [number, MutableRefObject<HTMLDivElement | null>];

export const useScrollAware = (): ScrollAwareReturn => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const animationFrame = useRef<number | null>(null);

  const onScroll = useCallback((e: Event) => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (e.target instanceof HTMLElement) {
        setScrollTop(e.target.scrollTop);
      }
    });
  }, []);

  useEffect(() => {
    const scrollContainer = ref.current;

    if (scrollContainer) {
      setScrollTop(scrollContainer.scrollTop);
      scrollContainer.addEventListener('scroll', onScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', onScroll);
      };
    }
  }, [onScroll]);
  return [scrollTop, ref];
};
