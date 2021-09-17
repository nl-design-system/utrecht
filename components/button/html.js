/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  busy: false,
  disabled: false,
  textContent: '',
  type: 'button',
};

export const Button = ({ busy = false, disabled = false, textContent = '', type = 'button' }) =>
  `<button type="${type || 'button'}"${busy ? ' aria-busy="true"' : ''}${
    disabled ? ' disabled' : ''
  }>${textContent}</button>`;
