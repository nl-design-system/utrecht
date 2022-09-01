/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';
import { Link } from '../../link/css/story-template';

export const LinkList = ({ links = [] }) => (
  <ul className="utrecht-link-list utrecht-link-list--html-ul">
    {links.map((link) => (
      <li className="utrecht-link-list__item">
        <Link {...link} />
      </li>
    ))}
  </ul>
);

export default LinkList;
