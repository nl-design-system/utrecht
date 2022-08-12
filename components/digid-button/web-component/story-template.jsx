/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Button text',
    control: 'text',
  },
};

export const defaultArgs = { textContent: 'Inloggen' };

export const DigidButton = ({ textContent = defaultArgs.textContent }) => (
  <utrecht-digid-button>{textContent}</utrecht-digid-button>
);

export default DigidButton;
