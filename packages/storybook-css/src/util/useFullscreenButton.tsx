import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';
import { ButtonProps } from '../../../component-library-react/src/Button';

const createFullscreenListener =
  (ref: RefObject<HTMLElement>, setFullscreen: Dispatch<SetStateAction<boolean>>) => () => {
    if (ref.current !== null) {
      const refEl = ref.current;
      const handleEvent = () => {
        setFullscreen(document.fullscreenElement === refEl);
        return true;
      };
      refEl.addEventListener('fullscreenchange', handleEvent);
      return () => refEl.removeEventListener('fullscreenchange', handleEvent);
    }
    return () => {};
  };

export const useFullscreenButton = ({ target }: { target: RefObject<HTMLElement> }): ButtonProps => {
  const [fullscreen, setFullscreen] = useState(false);
  const showFullscreen = () => {
    target.current?.requestFullscreen();
  };

  const exitFullscreen = () => {
    target.current?.ownerDocument.exitFullscreen();
  };

  const toggleFullscreen = () => {
    if (fullscreen) {
      exitFullscreen();
    } else {
      showFullscreen();
    }
  };
  const supportsFullscreen = !!document.fullscreenEnabled;

  useEffect(createFullscreenListener(target, setFullscreen));

  return {
    onClick: toggleFullscreen,
    pressed: fullscreen,
    disabled: !supportsFullscreen,
  };
};
