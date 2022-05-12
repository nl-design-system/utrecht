/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx'
import { ToptaskLink } from '../toptask-link/css/template'

export const defaultArgs = {
  links: [],
  grid: false,
}

export const ToptaskNav = ({ links, grid = false }) => `<div class="${clsx('utrecht-toptask-nav', {
  'utrecht-toptask-nav--grid': grid,
})}">
  ${links.map(ToptaskLink).join('\n')}
</div>`
