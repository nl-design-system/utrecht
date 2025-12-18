import type { LinkProps } from '@utrecht/link-react';
import { Link } from '@utrecht/link-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import type { LinkButtonProps } from './LinkButton';
import { LinkButton } from './LinkButton';

export interface NavListProps extends HTMLAttributes<HTMLUListElement> {
  appearance?: undefined | string | 'center';
  inlineSizeAuto?: boolean;
}

export const NavList = forwardRef(
  (
    { appearance, children, className, inlineSizeAuto, ...restProps }: PropsWithChildren<NavListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul
      role="list"
      className={clsx(
        'utrecht-nav-list',
        {
          'utrecht-nav-list--center': appearance === 'center',
          'utrecht-nav-list--inline-size-auto': inlineSizeAuto,
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
  isCurrent?: 'page' | 'true';
}

export const NavListLink = ({
  center,
  children,
  className,
  isCurrent,
  ...restProps
}: PropsWithChildren<NavListLinkProps>) => {
  return (
    <li
      className={clsx(
        'utrecht-nav-list__item',
        {
          'utrecht-nav-list__item--center': center,
        },
        className,
      )}
    >
      <Link
        className={clsx('utrecht-nav-list__link', {
          'utrecht-nav-list__link--is-current': !!isCurrent,
        })}
        {...restProps}
      >
        {children}
      </Link>
    </li>
  );
};

NavListLink.displayName = 'NavListLink';

export interface NavListLinkButtonProps extends LinkButtonProps {
  center?: boolean;
  isCurrent?: 'page' | 'true';
}

export const NavListLinkButton = ({
  center,
  children,
  className,
  isCurrent,
  ...restProps
}: PropsWithChildren<NavListLinkButtonProps>) => {
  return (
    <li
      className={clsx(
        'utrecht-nav-list__item',
        {
          'utrecht-nav-list__item--center': center,
        },
        className,
      )}
    >
      <LinkButton
        className={clsx('utrecht-nav-list__link', {
          'utrecht-nav-list__link--is-current': !!isCurrent,
        })}
        {...restProps}
      >
        {children}
      </LinkButton>
    </li>
  );
};

NavListLinkButton.displayName = 'NavListLinkButton';
