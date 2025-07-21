import type { ButtonProps } from '@utrecht/component-library-react';
import { Button } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export interface ButtonStoryProps extends ButtonProps {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  keyboardSupport?: boolean;
  label?: string;
  IconAfter?: string;
  IconBefore?: string;
}

export const ButtonStory = ({
  active,
  children,
  hover,
  focus,
  focusVisible,
  label,
  IconBefore,
  IconAfter,
  ...restProps
}: PropsWithChildren<ButtonStoryProps>) => {
  return (
    <Button
      className={clsx({
        'utrecht-button--active': active,
        'utrecht-button--hover': hover,
        'utrecht-button--focus': focus,
        'utrecht-button--focus-visible': focusVisible,
      })}
      {...restProps}
    >
      {IconBefore && <IconBefore />}
      {label && <span className="utrecht-button__label">{label}</span>}
      {children}
      {IconAfter && <IconAfter />}
    </Button>
  );
};
