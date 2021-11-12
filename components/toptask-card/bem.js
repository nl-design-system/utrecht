/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  active: false,
  focus: false,
  focusVisible: false,
  href: '',
  hover: false,
  textContent: '',
  icon: null,
};

export const ToptaskCard = ({
  active = false,
  focus = false,
  focusVisible = false,
  hover = false,
  href = '',
  icon = null,
  textContent = '',
}) =>
  `<a href="${href}" class="${clsx('utrecht-toptask-card', {
    'utrecht-toptask-card--active': active,
    'utrecht-toptask-card--hover': hover,
    'utrecht-toptask-card--focus': focus,
    'utrecht-toptask-card--focus-visible': focusVisible,
  })}">
  ${icon ? `<${icon} class="utrecht-toptask-card__icon"></${icon}>` : ''}
 <span class="utrecht-toptask-card__title">${textContent}</span>
</a>`;

export const ToptaskNav = ({ cards }) => `<div class="utrecht-toptask-nav">
  ${cards.map(ToptaskCard).join('\n')}
</div>`;
