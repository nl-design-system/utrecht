import { Button, ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconCross, UtrechtIconHamburgerMenu } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

interface NavToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'hamburger' | 'close';
  text?: string;
}

export const NavToggleButton = forwardRef(
  (
    { icon, text, className, ...restProps }: PropsWithChildren<NavToggleButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <ButtonGroup className={clsx('utrecht-navigation__toggle-button', className)}>
        <Button
          className={clsx({ 'utrecht-navigation__toggle-button-close': icon === 'close' })}
          appearance="subtle-button"
          ref={ref}
          aria-haspopup="menu"
          aria-controls="menu"
          {...restProps}
        >
          {icon === 'hamburger' ? (
            <UtrechtIconHamburgerMenu class={clsx('utrecht-icon-custom')} aria-hidden="true" />
          ) : (
            <UtrechtIconCross class={clsx('utrecht-icon-custom')} aria-hidden="true" />
          )}
          {text}
        </Button>
      </ButtonGroup>
    );
  },
);

NavToggleButton.displayName = 'NavToggleButton';
