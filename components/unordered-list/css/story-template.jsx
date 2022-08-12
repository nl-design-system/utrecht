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

export const defaultArgs = {
  distanced: false,
  items: [
    {
      innerHTML: 'Lorem',
    },
    {
      innerHTML: 'Ipsum',
    },
    {
      innerHTML: 'Dolor',
    },
  ],
};

export const UnorderedList = ({ distanced = false, items = [], nested = false }) => (
  <ul
    className={clsx(
      'utrecht-unordered-list',
      distanced && 'utrecht-unordered-list--distanced',
      nested && 'utrecht-unordered-list--nested',
    )}
  >
    {items.map(({ items: subItems, innerHTML }, index) => (
      <li className="utrecht-unordered-list__item" key={index}>
        {innerHTML}
        {subItems && UnorderedList({ nested: true, items: subItems })}
      </li>
    ))}
  </ul>
);

export default UnorderedList;
