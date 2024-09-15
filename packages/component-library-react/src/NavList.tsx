import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import type { LinkProps } from './Link';
import { Link } from './Link';
import type { LinkButtonProps } from './LinkButton';
import { LinkButton } from './LinkButton';

export interface NavListProps extends HTMLAttributes<HTMLUListElement> {
  appearance?: undefined | string | 'center';
}

export const NavList = forwardRef(
  (
    { appearance, children, className, ...restProps }: PropsWithChildren<NavListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul
      role="list"
      className={clsx(
        'utrecht-nav-list',
        {
          'utrecht-nav-list--center': appearance === 'center',
        },
        className,
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </ul>
  ),
);

NavList.displayName = 'NavList';

export interface NavListLinkProps extends LinkProps {
  center?: boolean;
}

export const NavListLink = ({ center, children, className, ...restProps }: PropsWithChildren<NavListLinkProps>) => (
  <li
    className={clsx(
      'utrecht-nav-list__item',
      {
        'utrecht-nav-list__item--center': center,
      },
      className,
    )}
  >
    <Link className="utrecht-nav-list__link" {...restProps}>
      {children}
    </Link>
  </li>
);

NavListLink.displayName = 'NavListLink';

export interface NavListLinkButtonProps extends LinkButtonProps {
  center?: boolean;
}

export const NavListLinkButton = ({
  center,
  children,
  className,
  ...restProps
}: PropsWithChildren<NavListLinkButtonProps>) => (
  <li
    className={clsx(
      'utrecht-nav-list__item',
      {
        'utrecht-nav-list__item--center': center,
      },
      className,
    )}
  >
    <LinkButton className="utrecht-nav-list__link" {...restProps}>
      {children}
    </LinkButton>
  </li>
);

NavListLinkButton.displayName = 'NavListLinkButton';
