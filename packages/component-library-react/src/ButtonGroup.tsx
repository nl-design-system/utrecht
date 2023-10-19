/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, isValidElement, PropsWithChildren, ReactNode } from 'react';

const hasManyElements = (children: ReactNode | ReactNode[]) =>
  Array.isArray(children) &&
  children.reduce((count: number, item): number => (isValidElement(item) ? count + 1 : count), 0) >= 2;

export type ButtonGroupProps = HTMLAttributes<HTMLParagraphElement>;

export const ButtonGroup = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<ButtonGroupProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      role={hasManyElements(children) ? 'group' : undefined}
      {...restProps}
      ref={ref}
      className={clsx('utrecht-button-group', className)}
    >
      {children}
    </p>
  ),
);

ButtonGroup.displayName = 'ButtonGroup';
