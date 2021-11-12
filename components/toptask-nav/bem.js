/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ToptaskCard } from '../toptask-card/bem';

export const defaultArgs = {
  links: [],
};

export const ToptaskNav = ({ links }) => `<div class="utrecht-toptask-nav">
  ${links.map(ToptaskCard).join('\n')}
</div>`;
