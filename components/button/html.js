/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  disabled: false,
  textContent: '',
  type: 'button',
};

export const Button = ({ disabled = false, textContent = '', type = 'button' }) =>
  `<button type="${type || 'button'}"${disabled ? ' disabled' : ''}>${textContent}</button>`;
