/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Utrecht
 * Copyright (c) 2024 Frameless
 */

import clsx from 'clsx';
import { forwardRef } from 'react';
import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface RichTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RichText = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<RichTextProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={clsx('utrecht-rich-text')} ref={ref} {...restProps}>
      {children}
    </div>
  ),
);

RichText.displayName = 'RichText';
