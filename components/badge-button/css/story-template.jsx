/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  labelPrefix: {
    description: 'Label (not visible)',
    control: 'text',
  },
  textContent: {
    description: 'Text content',
    control: 'text',
  },
  iconStart: {
    description: 'Icon at start',
    control: 'text',
  },
  iconEnd: {
    description: 'Icon at end',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
};

export const exampleArgs = {
  labelPrefix: 'Verwijder filter:',
  textContent: 'Teelt van granen, peulvruchten en oliehoudende zaden (SBI 0111)',
  iconEnd: <utrecht-icon-cross />,
};

export const BadgeButton = ({ children, iconEnd, iconStart, labelPrefix, textContent = defaultArgs.textContent }) => (
  <button className="utrecht-badge-button utrecht-badge-button--html-button">
    {iconStart}
    <span class="utrecht-badge-button__label-prefix">{labelPrefix} </span>
    {textContent}
    {children}
    {iconEnd}
  </button>
);

export default BadgeButton;
