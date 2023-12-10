import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import type { LinkProps } from './Link';
import { Link } from './Link';
import type { LinkButtonProps } from './LinkButton';
import { LinkButton } from './LinkButton';

export interface NavListProps {
  appearance?: undefined | string | 'center';
}

export const NavList = ({ appearance, children }: PropsWithChildren<NavListProps>) => (
  <ul
    role="list"
    className={clsx('utrecht-nav-list', {
      'utrecht-nav-list--center': appearance === 'center',
    })}
  >
    {children}
  </ul>
);

NavList.displayName = 'NavList';

export interface NavListLinkProps extends LinkProps {
  center?: boolean;
}

export const NavListLink = ({ center, children, ...restProps }: PropsWithChildren<NavListLinkProps>) => (
  <li
    className={clsx('utrecht-nav-list__item', {
      'utrecht-nav-list__item--center': center,
    })}
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

export const NavListLinkButton = ({ center, children, ...restProps }: PropsWithChildren<NavListLinkButtonProps>) => (
  <li
    className={clsx('utrecht-nav-list__item', {
      'utrecht-nav-list__item--center': center,
    })}
  >
    <LinkButton className="utrecht-nav-list__link" {...restProps}>
      {children}
    </LinkButton>
  </li>
);

NavListLinkButton.displayName = 'NavListLinkButton';
