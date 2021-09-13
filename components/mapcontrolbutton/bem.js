/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  disabled: false,
  focus: false,
  hover: false,
  icon: null,
  label: '',
};

export const MapControlButton = ({ disabled = false, focus = false, hover = false, label = '', icon = null }) =>
  `<button type="button" class="${clsx('utrecht-mapcontrolbutton', {
    'utrecht-mapcontrolbutton--hover': hover,
    'utrecht-mapcontrolbutton--focus': focus,
    'utrecht-mapcontrolbutton--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''}>
    ${icon ? `<${icon} class="utrecht-mapcontrolbutton__icon"></${icon}>` : ''}
    ${label ? `<span class="utrecht-mapcontrolbutton__label">${label}</span>` : ''}
  </button>`;
