import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SkipLink = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<LinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => (
    <p>
      <a
        ref={ref}
        {...restProps}
        className={clsx('utrecht-skip-link', 'utrecht-skip-link--visible-on-focus', className)}
      >
        {children}
      </a>
    </p>
  ),
);

SkipLink.displayName = 'SkipLink';
