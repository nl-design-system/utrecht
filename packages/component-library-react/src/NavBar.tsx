import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: undefined | string | 'center';
}

export const NavBar = ({ appearance, children }: PropsWithChildren<NavBarProps>) => (
  <div className="utrecht-nav-bar">
    <div
      className={clsx('utrecht-nav-bar__content', {
        'utrecht-nav-bar__content--center': appearance === 'center',
      })}
    >
      {children}
    </div>
  </div>
);

NavBar.displayName = 'NavBar';
