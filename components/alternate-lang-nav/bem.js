/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import { AlternateLangLink } from '../alternate-lang-link/bem';

export const AlternateLangNav = ({ languages }) =>
  `<div class="utrecht-alternate-lang-nav">
${languages.map(AlternateLangLink).join('\n<span aria-hidden="true"> | </span>\n')}
</div>`;
