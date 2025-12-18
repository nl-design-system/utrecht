import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';
import { Heading } from './Heading';

export interface NavBarProps extends HTMLAttributes<HTMLElement> {
  appearance?: string;
  headingLevel?: number;
  label?: ReactNode;
}

export const NavBar = forwardRef(
  (
    { appearance = '', children, className, headingLevel = 2, label, ...restProps }: PropsWithChildren<NavBarProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const headingId = label ? useId() : undefined;
    return (
      <nav ref={ref} className={clsx('utrecht-nav-bar', className)} aria-labelledby={headingId} {...restProps}>
        {label && (
          <Heading id={headingId} className="utrecht-nav-bar__heading" level={headingLevel} aria-hidden="true">
            {label}
          </Heading>
        )}
        <div
          className={clsx('utrecht-nav-bar__content', {
            'utrecht-nav-bar__content--center': appearance === 'center',
          })}
        >
          {children}
        </div>
      </nav>
    );
  },
);

NavBar.displayName = 'NavBar';
