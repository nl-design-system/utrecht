/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, isValidElement, PropsWithChildren, ReactNode } from 'react';

const hasManyElements = (children: ReactNode | ReactNode[]) =>
  Array.isArray(children) &&
  children.reduce((count: number, item): number => (isValidElement(item) ? count + 1 : count), 0) >= 2;

export interface ButtonGroupProps extends HTMLAttributes<HTMLParagraphElement> {
  direction?: string | 'column' | 'row';
}

export const ButtonGroup = forwardRef(
  (
    { children, className, direction, ...restProps }: PropsWithChildren<ButtonGroupProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      role={hasManyElements(children) ? 'group' : undefined}
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-button-group',
        {
          'utrecht-button-group--column': direction === 'column',
          'utrecht-button-group--row': direction === 'row',
        },
        className,
      )}
    >
      {children}
    </p>
  ),
);

ButtonGroup.displayName = 'ButtonGroup';
