/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Set the content of the heading',
    control: 'text',
  },
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
};

export const defaultArgs = {
  textContent: '',
  distanced: false,
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const PreHeading = ({ textContent = defaultArgs.textContent, distanced = defaultArgs.distanced }) => (
  <div
    className={clsx('utrecht-pre-heading', {
      'utrecht-pre-heading--distanced': distanced,
    })}
  >
    {textContent}
  </div>
);

export default PreHeading;
