/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

const enumGuard =
  <T extends unknown>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as T);

const POSITION_VALUES = [
  'block-end',
  'block-start',
  'bottom',
  'inline-end',
  'inline-start',
  'left',
  'right',
  'top',
] as const;

export type TooltipPosition = (typeof POSITION_VALUES)[number];

export const isTooltipPosition = enumGuard(POSITION_VALUES);

export interface TooltipAnchorProps extends HTMLAttributes<HTMLDivElement> {}

export const TooltipAnchor = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<TooltipAnchorProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-tooltip-anchor', className)}>
      {children}
    </div>
  ),
);

TooltipAnchor.displayName = 'TooltipAnchor';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  position: TooltipPosition;
  status?: boolean;
}

export const Tooltip = forwardRef(
  (
    { children, className, position, status, ...restProps }: PropsWithChildren<TooltipProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const positionX = isTooltipPosition(position) ? position : null;
    return (
      <div
        {...restProps}
        ref={ref}
        role="tooltip"
        className={clsx('utrecht-tooltip', positionX && `utrecht-tooltip--${positionX}`, className)}
        aria-live={status ? 'polite' : undefined}
        aria-atomic={status ? 'true' : undefined}
      >
        {children}
        <div className={clsx('utrecht-tooltip__arrow', positionX && `utrecht-tooltip__arrow--${positionX}`)}></div>
      </div>
    );
  },
);

Tooltip.displayName = 'Tooltip';
