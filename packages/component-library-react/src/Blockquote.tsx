/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { BlockquoteHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  aside?: boolean;
  /** @deprected Replace `attribution` with `caption`. */
  attribution?: ReactNode;
  caption?: ReactNode;
  figure?: boolean;
}

export const Blockquote = forwardRef(
  (
    {
      aside,
      attribution,
      className,
      children,
      cite,
      figure,
      caption,
      lang,
      ...restProps
    }: PropsWithChildren<BlockquoteProps>,
    ref: ForwardedRef<HTMLQuoteElement>,
  ) => {
    const quote = children;

    const captionElement =
      caption || attribution ? (
        <figcaption className="utrecht-blockquote__caption">{caption || attribution}</figcaption>
      ) : null;

    const blockquoteAttrs = { cite, lang };

    return aside && (figure || captionElement) ? (
      <aside className={clsx('utrecht-blockquote', className)} {...restProps}>
        <figure className={clsx('utrecht-blockquote__figure')}>
          <blockquote className="utrecht-blockquote__quote" {...blockquoteAttrs} ref={ref}>
            {quote}
          </blockquote>
          {captionElement}
        </figure>
      </aside>
    ) : aside ? (
      <aside className={clsx('utrecht-blockquote', className)} {...restProps}>
        <blockquote className="utrecht-blockquote__quote" {...blockquoteAttrs} ref={ref}>
          {quote}
        </blockquote>
      </aside>
    ) : figure || captionElement ? (
      <figure className={clsx('utrecht-blockquote', className)} {...restProps}>
        <blockquote className="utrecht-blockquote__quote" {...blockquoteAttrs} ref={ref}>
          {quote}
        </blockquote>
        {captionElement}
      </figure>
    ) : (
      <blockquote
        className={clsx('utrecht-blockquote', 'utrecht-blockquote--html-blockquote', className)}
        {...blockquoteAttrs}
        {...restProps}
        ref={ref}
      >
        {quote}
      </blockquote>
    );
  },
);

Blockquote.displayName = 'Blockquote';
