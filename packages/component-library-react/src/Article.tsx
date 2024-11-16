/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type ArticleProps = HTMLAttributes<HTMLElement>;

export const Article = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ArticleProps>, ref: ForwardedRef<HTMLElement>) => (
    <article {...restProps} ref={ref} className={clsx('utrecht-article', className)}>
      {children}
    </article>
  ),
);

Article.displayName = 'Article';
