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
  textContent: 'Festivals',
};

export const BadgeData = ({ textContent = defaultArgs.textContent }) => (
  <utrecht-badge-data>{textContent}</utrecht-badge-data>
);

export default BadgeData;
