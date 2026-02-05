/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

const enumGuard =
  <T extends unknown>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as T);

const APPEARANCE_VALUES = ['lead', 'small'] as const;

export type ParagraphAppearance = (typeof APPEARANCE_VALUES)[number];

export const isParagraphAppearance = enumGuard(APPEARANCE_VALUES);

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  appearance?: ParagraphAppearance;
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
    let isLead = appearance === 'lead' || !!lead;
    let isSmall = appearance === 'small' || !!small;

    // Ignore combinations of `lead` and `small`
    isLead = isLead !== isSmall ? isLead : false;
    isSmall = isSmall !== isLead ? isSmall : false;

    return (
      <p
        {...restProps}
        ref={ref}
        className={clsx(
          'utrecht-paragraph',
          isLead && `utrecht-paragraph--lead`,
          isSmall && `utrecht-paragraph--small`,
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
