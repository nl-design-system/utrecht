/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  textContent: {
    description: 'De content van de header',
    control: 'text',
  },
  distanced: {
    description: 'Zet afstand tussen de header en nabije content',
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

export const Heading3 = ({ textContent = defaultArgs.textContent, distanced = defaultArgs.distanced }) => (
  <h3
    className={clsx('utrecht-heading-3', {
      'utrecht-heading-3--distanced': distanced,
    })}
  >
    {textContent}
  </h3>
);

export default Heading3;
