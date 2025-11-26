import clsx from 'clsx';
import React, { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface TileProps extends PropsWithChildren {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  keyboardSupport?: boolean;
  icon?: ReactNode;
  color?: 'default' | 'red' | 'green' | 'blue';
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
          'utrecht-tile--red': color === 'red',
          'utrecht-tile--green': color === 'green',
          'utrecht-tile--blue': color === 'blue',
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
