/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  label: {
    description: 'Button label',
    control: 'text',
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
};
export const defaultArgs = { label: '', textContent: '' };
export const exampleArgs = { label: 'Log in using DigiD', textContent: 'Log in' };

export const DigidButton = ({ label = defaultArgs.label, textContent = defaultArgs.textContent }) => (
  <div className="utrecht-digid-button">
    <utrecht-digid-logo class="utrecht-digid-button__logo"></utrecht-digid-logo>
    <button
      className="utrecht-digid-button__button utrecht-button utrecht-button--primary-action"
      type="button"
      aria-label={label}
    >
      {textContent}
    </button>
  </div>
);

export default DigidButton;
