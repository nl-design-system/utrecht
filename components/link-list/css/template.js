/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Link } from '../../link/css/template';

export const LinkList = ({ links = [] }) => `<ul class="utrecht-link-list utrecht-link-list--html-ul">
  ${links.map((link) => `<li class="utrecht-link-list__item">${Link(link)}</li>`).join('\n  ')}
</ul>`;
