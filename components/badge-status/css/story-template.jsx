/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
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
  <div class={clsx('utrecht-badge-status', `utrecht-badge-status--${status ? status : 'neutral'}`)}>{textContent}</div>
);

export default BadgeStatus;
