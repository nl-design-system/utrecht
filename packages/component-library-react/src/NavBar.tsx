import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export interface NavBarProps extends HTMLAttributes<HTMLElement> {
  appearance?: string;
  label?: string;
}

export const NavBar = ({
  appearance = '',
  children,
  className,
  label,
  'aria-label': ariaLabel,
}: PropsWithChildren<NavBarProps>) => (
  <nav className={clsx('utrecht-nav-bar', className)} aria-label={ariaLabel ?? label ?? undefined}>
    <div
      className={clsx('utrecht-nav-bar__content', {
        'utrecht-nav-bar__content--center': appearance === 'center',
      })}
    >
      {children}
    </div>
  </nav>
);

NavBar.displayName = 'NavBar';
