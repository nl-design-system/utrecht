import { forwardRef } from 'react';
import type { ComponentType, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { ButtonLink, ButtonLinkProps } from './index';

export interface ScrollLinkProps extends ButtonLinkProps {
  Icon?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const scrollToTop = () => {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduceMotionQuery.matches) {
    // If prefers-reduced-motion is set to reduce, instantly jump to the top
    window.scrollTo(0, 0);
  } else {
    // If not, use smooth scrolling animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const ScrollLink = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<ScrollLinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => (
    <ButtonLink href="#top" onClick={scrollToTop} ref={ref} {...restProps}>
      {children}
    </ButtonLink>
  ),
);

ScrollLink.displayName = 'ScrollLink';
