/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Content of the quote',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Blockquote = ({ textContent = defaultArgs.textContent }) => (
  <section className="utrecht-html">
    <blockquote>
      <p>{textContent}</p>
    </blockquote>
  </section>
);

export default Blockquote;
