/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import { Link } from '../../link/css/template';

export const AlternateLangNav = ({ languages }) =>
  `<div class="utrecht-alternate-lang-nav">
${languages.map(Link).join('\n<span aria-hidden="true"> | </span>\n')}
</div>`;
