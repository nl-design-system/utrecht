/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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

export const Heading1 = ({
  children,
  textContent = defaultArgs.textContent,
  distanced = defaultArgs.distanced,
  ...restProps
}) => (
  <h1
    className={clsx('utrecht-heading-1', {
      'utrecht-heading-1--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h1>
);

export default Heading1;
