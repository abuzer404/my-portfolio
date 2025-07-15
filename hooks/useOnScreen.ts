
import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = <T extends Element>(ref: RefObject<T>, rootMargin: string = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Unobserve after it has been seen
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, rootMargin]);

  return isIntersecting;
};
