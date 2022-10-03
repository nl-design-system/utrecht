/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  lead?: boolean;
  small?: boolean;
}

export const Paragraph = forwardRef(
  (
    { children, className, lead, small, ...restProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-paragraph',
        lead && 'utrecht-paragraph--lead',
        small && 'utrecht-paragraph--small',
        className,
      )}
    >
      {small ? <small className="utrecht-paragraph__small">{children}</small> : children}
    </p>
  ),
);

Paragraph.displayName = 'Paragraph';
