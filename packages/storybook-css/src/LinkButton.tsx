import { LinkButton } from '@utrecht/component-library-react';
import type { LinkButtonProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export interface LinkButtonStoryProps extends LinkButtonProps {
  active?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  label?: string;
  IconBefore?: string;
  IconAfter?: string;
}

export const LinkButtonStory = ({
  active,
  children,
  focus,
  focusVisible,
  hover,
  label,
  IconAfter,
  IconBefore,
  ...restProps
}: PropsWithChildren<LinkButtonStoryProps>) => {
  return (
    <LinkButton
      className={clsx({
        'utrecht-link-button--active': active,
        'utrecht-link-button--focus': focus,
        'utrecht-link-button--focus-visible': focusVisible,
        'utrecht-link-button--hover': hover,
      })}
      {...restProps}
    >
      {IconBefore && <IconBefore />}
      {label && <span className="utrecht-link-button__label">{label}</span>}
      {children}
      {IconAfter && <IconAfter />}
    </LinkButton>
  );
};
