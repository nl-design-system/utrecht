/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */

import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface ToptaskNavProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  grid?: boolean;
}

export const ToptaskNav = ({ children, grid }: ToptaskNavProps) => (
  <div className={clsx('utrecht-toptask-nav', grid && 'utrecht-toptask-nav--grid')}>{children}</div>
);
