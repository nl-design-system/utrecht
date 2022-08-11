/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Content of the quote',
    control: 'text',
  },
  attribution: {
    description: 'Attribution of the quote',
    control: 'text',
  },
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
};

export const defaultArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Blockquote = ({ textContent = '', attribution = null, distanced = false }) => (
  <blockquote className={clsx('utrecht-blockquote', { 'utrecht-blockquote--distanced': distanced })}>
    <div className="utrecht-blockquote__content">
      <p>{textContent}</p>
      {attribution && <div className="utrecht-blockquote__attribution">{attribution}</div>}
    </div>
  </blockquote>
);

export default Blockquote;
