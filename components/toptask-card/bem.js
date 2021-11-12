/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  active: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: '',
  icon: null,
};

export const ToptaskCard = ({
  active = false,
  disabled = false,
  focus = false,
  focusVisible = false,
  hover = false,
  icon = null,
  textContent = '',
}) =>
  `<a href="#" title="link to..." class="${clsx('utrecht-toptask-card', {
    'utrecht-toptask-card--active': active,
    'utrecht-toptask-card--hover': hover,
    'utrecht-toptask-card--focus': focus,
    'utrecht-toptask-card--focus-visible': focusVisible,
    'utrecht-toptask-card--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''}>
  <div class="utrecht-toptask-card-container">
    <div class="utrecht-toptask-card__icon">
      ${icon ? `<${icon}></${icon}>` : ''}
    </div>
 <div class="utrecht-toptask-card__body">
  ${textContent}</div></div></a>`;
