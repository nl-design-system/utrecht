/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
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

Article.displayName = 'utrecht-article';
