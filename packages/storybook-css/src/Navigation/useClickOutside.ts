import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLDialogElement | null>, callback?: () => void) => {
  if (typeof document === 'undefined') return;
  const handleClickOutside = (event: TouchEvent | MouseEvent) => {
    if (ref.current && ref.current === event.target && ref.current.open && callback) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref.current]);
};
