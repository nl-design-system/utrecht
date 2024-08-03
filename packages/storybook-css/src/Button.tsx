import type { ButtonProps } from '@utrecht/component-library-react';
import { Button } from '@utrecht/component-library-react';
import { clsx } from 'clsx';
import React, { PropsWithChildren } from 'react';

export interface ButtonStoryProps extends ButtonProps {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  keyboardSupport?: boolean;
  IconAfter?: string;
  IconBefore?: string;
}

export const ButtonStory = ({
  active,
  children,
  hover,
  focus,
  focusVisible,
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
      {children}
      {IconAfter && <IconAfter />}
    </Button>
  );
};
