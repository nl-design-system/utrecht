/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';

export const Menulijst = ({
  items = [],
}: PropsWithChildren<{ items: { active?: boolean; href: string; children: ReactNode }[] }>) => (
  <ul className="utrecht-menulijst">
    {items.map(({ active, href, children }) => (
      <li className={clsx('utrecht-menulijst__item', active && 'utrecht-menulijst__item--active')}>
        <a className="utrecht-menulijst__link" href={href}>
          {children}
        </a>
      </li>
    ))}
  </ul>
);
