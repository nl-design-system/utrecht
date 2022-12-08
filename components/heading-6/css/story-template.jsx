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

export const defaultArgs = { textContent: '', distanced: false };

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Heading6 = ({
  children,
  textContent = defaultArgs.textContent,
  distanced = defaultArgs.distanced,
  ...restProps
}) => (
  <h6
    className={clsx('utrecht-heading-6', {
      'utrecht-heading-6--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h6>
);

export default Heading6;
