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
