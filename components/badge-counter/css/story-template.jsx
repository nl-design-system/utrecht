/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Text content',
    control: 'text',
  },
};

export const defaultArgs = { textContent: '' };

export const exampleArgs = { textContent: '7' };

export const BadgeCounter = ({ textContent = defaultArgs.textContent }) => (
  <span class="utrecht-badge-counter">
    <span class="utrecht-badge-counter__text">{textContent}</span>
  </span>
);

export default BadgeCounter;
