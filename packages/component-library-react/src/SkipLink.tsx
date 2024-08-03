import { clsx } from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SkipLink = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<SkipLinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => (
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
