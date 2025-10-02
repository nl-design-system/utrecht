import { Link } from '@utrecht/link-react/dist/css';
import clsx from 'clsx';
import React from 'react';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

interface NavigationLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  mobile?: boolean;
  isCurrent?: boolean;
  marker?: ReactNode;
}

export const NavigationLink = forwardRef(
  (
    { children, mobile, marker, isCurrent, ...restProps }: PropsWithChildren<NavigationLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <Link
      aria-current={isCurrent ? 'page' : 'false'}
      className={clsx('utrecht-navigation__link', {
        'utrecht-navigation__link--mobile': mobile,
        'utrecht-navigation__link--is-current': isCurrent,
      })}
      ref={ref}
      {...restProps}
    >
      {marker}
      {children}
    </Link>
  ),
);

NavigationLink.displayName = 'NavigationLink';
