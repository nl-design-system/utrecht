/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface ColorSampleProps extends HTMLAttributes<HTMLDataElement> {
  color?: string;
}

export const ColorSample = forwardRef(
  (
    { children, className, color, style, ...restProps }: PropsWithChildren<ColorSampleProps>,
    ref: ForwardedRef<HTMLDataElement>,
  ) => (
    <data
      ref={ref}
      className={clsx('utrecht-color-sample', className)}
      style={{ ...style, color }}
      value={color}
      {...restProps}
    >
      {children}
    </data>
  ),
);

ColorSample.displayName = 'ColorSample';
