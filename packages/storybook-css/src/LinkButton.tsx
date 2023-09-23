import { LinkButton } from '@utrecht/component-library-react';
import { LinkButtonProps } from '@utrecht/component-library-react/src/LinkButton';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export interface LinkButtonStoryProps extends LinkButtonProps {
  active?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  IconBefore?: string;
  IconAfter?: string;
}

export const LinkButtonStory = ({
  active,
  children,
  focus,
  focusVisible,
  hover,
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
      {children}
      {IconAfter && <IconAfter />}
    </LinkButton>
  );
};
