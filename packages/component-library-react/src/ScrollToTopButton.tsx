import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { Button, ButtonProps } from './index';

export interface ScrollToTopButtonProps extends ButtonProps {
  Icon?: React.ComponentType<HTMLAttributes<HTMLElement>>;
}

export const scrollToTop = () => {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduceMotionQuery.matches) {
    // If prefers-reduced-motion is set to reduce, instantly jump to the top
    window.scrollTo(0, 0);
  } else {
    // If not, use smooth scrolling animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const ScrollToTopButton = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<ScrollToTopButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button onClick={scrollToTop} ref={ref} {...restProps}>
      {children}
    </Button>
  ),
);

ScrollToTopButton.displayName = 'ScrollToTopButton';
