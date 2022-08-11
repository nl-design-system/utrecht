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
  status: {
    control: { type: 'select' },
    description: 'Status',
    options: ['error', 'success', 'valid', 'invalid', 'active', 'inactive', 'neutral', 'danger', 'warning', 'safe'],
  },
};

export const defaultArgs = { status: 'neutral', textContent: 'normaal' };

export const BadgeStatus = ({ status = defaultArgs.status, textContent = defaultArgs.textContent }) => (
  <utrecht-badge-status status={status}>{textContent}</utrecht-badge-status>
);

export default BadgeStatus;
