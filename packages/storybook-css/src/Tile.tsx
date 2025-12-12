import clsx from 'clsx';
import React, { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface TileProps extends PropsWithChildren {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  keyboardSupport?: boolean;
  icon?: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'tertiary';
}

export const Tile = ({
  active,
  children,
  hover,
  focus,
  focusVisible,
  icon,
  color,
  ...restProps
}: PropsWithChildren<TileProps>) => {
  return (
    <>
      <a
        className={clsx('utrecht-tile', {
          'utrecht-tile--active': active,
          'utrecht-tile--hover': hover,
          'utrecht-tile--focus': focus,
          'utrecht-tile--focus-visible': focusVisible,
          'utrecht-tile--primary': color === 'primary',
          'utrecht-tile--secondary': color === 'secondary',
          'utrecht-tile--tertiary': color === 'tertiary',
        })}
        {...restProps}
      >
        <span className="utrecht-tile__link">
          <span className="utrecht-tile__icon">{icon}</span>
          <span className="utrecht-tile__text">{children}</span>
        </span>
        <span className="utrecht-tile__arrow-container">
          <utrecht-icon-arrow class="utrecht-tile__arrow"></utrecht-icon-arrow>
        </span>
      </a>
    </>
  );
};
