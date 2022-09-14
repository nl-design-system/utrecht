/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export interface ListSocialProps {
  children?: ReactNode;
}

export const ListSocial: FC<ListSocialProps> = ({ children }) => (
  <ul className={clsx('utrecht-list-social')}>{children}</ul>
);

export interface ListSocialItemProps {
  children?: ReactNode;
}
export const ListSocialItem: FC<ListSocialItemProps> = ({ children }) => (
  <li className={clsx('utrecht-list-social__item')}>{children}</li>
);
