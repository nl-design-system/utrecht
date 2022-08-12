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
  value: {
    description: 'Value',
    control: 'number',
  },
  max: {
    description: 'Maximum',
    control: 'number',
  },
  locale: {
    description: 'Locale',
    control: 'text',
  },
};

export const defaultArgs = { value: 7, textContent: '7' };

export const BadgeCounter = ({ textContent, locale, value, max }) => (
  <utrecht-badge-counter max={max} value={value} locale={locale}>
    {textContent}
  </utrecht-badge-counter>
);

export default BadgeCounter;
