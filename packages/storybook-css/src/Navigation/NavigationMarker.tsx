import clsx from 'clsx';
import React from 'react';
import { PropsWithChildren, SVGProps } from 'react';

interface NavigationMarkerProps extends SVGProps<SVGSVGElement> {
  isCurrent?: boolean;
  appearance?: 'fill' | 'outline';
}

export const NavigationMarker = ({
  isCurrent,
  appearance = 'fill',
  ...restProps
}: PropsWithChildren<NavigationMarkerProps>) => {
  switch (appearance) {
    case 'outline':
      return (
        <svg
          className={clsx('utrecht-navigation__marker', 'utrecht-navigation__marker--outline', {
            'utrecht-navigation__marker--current': isCurrent,
          })}
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="none"
          {...restProps}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1.879 6.121A3 3 0 1 1 6.12 1.88 3 3 0 0 1 1.88 6.12Z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={clsx('utrecht-navigation__marker', 'utrecht-navigation__marker--fill', {
            'utrecht-navigation__marker--current': isCurrent,
          })}
          viewBox="0 0 100 100"
          width="8"
          height="8"
          xmlns="http://www.w3.org/2000/svg"
          {...restProps}
        >
          <circle cx="50" cy="50" r="50" fill="currentColor" />
        </svg>
      );
  }
};

NavigationMarker.displayName = 'NavigationMarker';
