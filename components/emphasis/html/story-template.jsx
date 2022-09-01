/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Set the text content',
    control: 'text',
  },
  stressed: {
    description: 'Stressed emphasis',
    control: 'boolean',
  },
  strong: {
    description: 'Strong emphasis: very important or urgent content',
    control: 'boolean',
  },
};

export const defaultArgs = {
  stressed: false,
  strong: false,
  textContent: '',
};

export const exampleArgs = {
  strong: true,
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Emphasis = ({
  textContent = defaultArgs.textContent,
  stressed = defaultArgs.stressed,
  strong = defaultArgs.strong,
}) => (
  <div className="utrecht-html">
    {stressed ? <em>{textContent}</em> : strong ? <strong>{textContent}</strong> : textContent}
  </div>
);

export default Emphasis;
