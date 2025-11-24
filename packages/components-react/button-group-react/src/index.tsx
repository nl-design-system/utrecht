/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, isValidElement, PropsWithChildren, ReactNode } from 'react';

const hasManyElements = (children: ReactNode | ReactNode[]) =>
  Array.isArray(children) &&
  children.reduce((count: number, item): number => (isValidElement(item) ? count + 1 : count), 0) >= 2;

const DIRECTIONS = {
  column: 'utrecht-button-group--column',
  row: 'utrecht-button-group--row',
} as const;

export interface ButtonGroupProps extends HTMLAttributes<HTMLParagraphElement> {
  direction?: keyof typeof DIRECTIONS;
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
      className={clsx('utrecht-button-group', direction && DIRECTIONS[direction], className)}
    >
      {children}
    </p>
  ),
);

ButtonGroup.displayName = 'ButtonGroup';
