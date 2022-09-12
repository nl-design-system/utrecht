/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'textContent',
    control: 'text',
  },
};

export const defaultArgs = { textContent: '' };
export const exampleArgs = { textContent: 'Inloggen' };

export const DigidButton = ({ textContent = defaultArgs.textContent }) => (
  <utrecht-digid-button>
    <utrecht-button appearance="primary-action-button">
      {textContent} <utrecht-icon-arrow></utrecht-icon-arrow>
    </utrecht-button>
  </utrecht-digid-button>
);

export default DigidButton;
