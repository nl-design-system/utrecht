/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import { HTMLAttributes, PropsWithChildren } from 'react';

export type SearchBarProps = HTMLAttributes<HTMLElement>;

export const SearchBarFormField = ({ ...restProps }: PropsWithChildren<SearchBarProps>) => (
  <div className="utrecht-search-bar" {...restProps} />
);
