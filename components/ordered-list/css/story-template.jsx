/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
  items: {
    description: 'List items',
    control: 'array',
  },
};

export const defaultArgs = { distanced: false, items: [] };

export const exampleArgs = {
  items: [
    {
      textContent: 'Lorem',
    },
    {
      textContent: 'Ipsum',
    },
    {
      textContent: 'Dolor',
    },
  ],
};

export const OrderedList = ({ distanced = defaultArgs.distanced, items = defaultArgs.items }) => (
  <ol className={clsx('utrecht-ordered-list', distanced && 'utrecht-ordered-list--distanced')}>
    {items.map(({ textContent }) => (
      <li className="utrecht-ordered-list__item">{textContent}</li>
    ))}
  </ol>
);

export default OrderedList;
