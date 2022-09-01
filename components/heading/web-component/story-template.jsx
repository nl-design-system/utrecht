/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  level: {
    description: 'Heading level',
    type: { name: 'number', required: true },
  },
  textContent: {
    description: 'Set the content of the heading',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
  level: 1,
};

export const exampleArgs = {
  level: 1,
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Heading = ({ level = defaultArgs.level, textContent = defaultArgs.textContent }) => (
  <section>
    <utrecht-heading level={level}>{textContent}</utrecht-heading>
  </section>
);

export default Heading;
