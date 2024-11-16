/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Text content',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
};

export const exampleArgs = {
  textContent: 'Festivals',
};

export const BadgeData = ({ children, textContent = defaultArgs.textContent }) => (
  <span className="utrecht-badge-data">
    {textContent}
    {children}
  </span>
);

export default BadgeData;
