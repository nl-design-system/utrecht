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
  column: 'utrecht-action-group--column',
  row: 'utrecht-action-group--row',
  'column-stretch': 'utrecht-action-group--column-stretch',
} as const;

export interface ActionGroupProps extends HTMLAttributes<HTMLParagraphElement> {
  direction?: keyof typeof DIRECTIONS;
}

export const ActionGroup = forwardRef(
  (
    { children, className, direction = 'row', ...restProps }: PropsWithChildren<ActionGroupProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      role={hasManyElements(children) ? 'group' : undefined}
      {...restProps}
      ref={ref}
      className={clsx('utrecht-action-group', DIRECTIONS[direction], className)}
    >
      {children}
    </p>
  ),
);

ActionGroup.displayName = 'ActionGroup';
