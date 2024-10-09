/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  appearance?: 'lead' | 'small';
  /**
   *
   * @deprecated Use `appearance="lead"` instead
   */
  lead?: boolean;

  /**
   *
   * @deprecated Use `appearance="small"` instead
   */
  small?: boolean;
}

export const Paragraph = forwardRef(
  (
    { children, className, lead, small, appearance, ...restProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => {
    const isLead = appearance === 'lead' || (lead && appearance !== 'small');
    const isSmall = appearance === 'small' || (small && appearance !== 'lead');

    return (
      <p
        {...restProps}
        ref={ref}
        className={clsx(
          'utrecht-paragraph',
          isLead && 'utrecht-paragraph--lead',
          isSmall && 'utrecht-paragraph--small',
          className,
        )}
      >
        {isLead ? (
          <b className="utrecht-paragraph__b">{children}</b>
        ) : isSmall ? (
          <small className="utrecht-paragraph__small">{children}</small>
        ) : (
          children
        )}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
