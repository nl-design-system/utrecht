import { Link } from '@utrecht/component-library-react/dist/css-module';
import React, { PropsWithChildren } from 'react';
import './NavigationIconLink.scss';

export interface NavigationIconLinkProps {
  href: string;
  icon: React.ReactNode;
  appearance?: 'primary' | 'secondary';
}

export const NavigationIconLink = ({
  href,
  icon,
  appearance = 'primary',
  children,
}: PropsWithChildren<NavigationIconLinkProps>) => (
  <Link className={`utrecht-navigation-icon-link utrecht-navigation-icon-link--${appearance}`} href={href}>
    {icon} {children}
  </Link>
);

NavigationIconLink.displayName = 'NavigationIconLink';
