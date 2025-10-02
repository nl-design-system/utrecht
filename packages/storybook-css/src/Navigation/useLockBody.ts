import type { RefObject } from 'react';
import { useEffect } from 'react';

export interface UseLockBodyProps {
  visible: boolean;
  elementRef: RefObject<HTMLElement | null>;
}

export const useLockBody = ({ visible, elementRef }: UseLockBodyProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return () => {};
    if (visible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      document.body.style.overflow = 'hidden';
      if (elementRef.current) {
        elementRef.current.style.overflow = 'auto';
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      if (visible) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [visible]);
};
