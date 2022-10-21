/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import parse from 'html-react-parser';
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
  items: [],
};

export const exampleArgs = {
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

export const UnorderedListItem = ({ children }) => <li className="utrecht-unordered-list__item">{children}</li>;

export const UnorderedList = ({
  children,
  distanced = defaultArgs.distanced,
  items = defaultArgs.items,
  nested = false,
}) => (
  <ul
    className={clsx(
      'utrecht-unordered-list',
      distanced && 'utrecht-unordered-list--distanced',
      nested && 'utrecht-unordered-list--nested',
    )}
  >
    {children}
    {items.map(({ items: subItems, innerHTML }, index) => (
      <UnorderedListItem key={index}>
        {parse(innerHTML)}
        {subItems && UnorderedList({ nested: true, items: subItems })}
      </UnorderedListItem>
    ))}
  </ul>
);

export default UnorderedList;
