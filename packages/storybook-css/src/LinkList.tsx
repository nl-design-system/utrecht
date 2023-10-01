/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Link } from '@utrecht/component-library-react';
import type { LinkProps } from '@utrecht/component-library-react';
import React from 'react';
import '@utrecht/components/link-list/css/index.scss';

interface LinkListProps {
  links: LinkProps[];
}

export const LinkList = ({ links }: LinkListProps) => (
  <ul className="utrecht-link-list utrecht-link-list--html-ul">
    {links.map((link) => (
      <li className="utrecht-link-list__item">
        <Link {...link} />
      </li>
    ))}
  </ul>
);
