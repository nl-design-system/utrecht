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
  htmlContent: {
    description: 'Content is HTML without class names',
    control: 'boolean',
  },
  items: {
    description: 'List items',
    control: 'array',
  },
};

export const defaultArgs = {
  distanced: false,
  htmlContent: false,
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

export const HTMLUnorderedListItem = ({ children, innerHTML, items }) => (
  <li>
    {children}
    {innerHTML && parse(innerHTML)}
    {items && HTMLUnorderedList({ items })}
  </li>
);

export const HTMLUnorderedList = ({ children, items = defaultArgs.items }) => (
  <ul>
    {children}
    {items &&
      items.map(({ children: subChildren, items: subItems, innerHTML }, index) => (
        <HTMLUnorderedListItem key={index} innerHTML={innerHTML} items={subItems}>
          {subChildren}
        </HTMLUnorderedListItem>
      ))}
  </ul>
);

export const UnorderedListItem = ({ children }) => <li className="utrecht-unordered-list__item">{children}</li>;

export const UnorderedList = ({
  children,
  distanced = defaultArgs.distanced,
  items = defaultArgs.items,
  htmlContent = defaultArgs.htmlContent,
  nested = false,
}) => (
  <ul
    className={clsx('utrecht-unordered-list', {
      'utrecht-unordered-list--distanced': distanced,
      'utrecht-unordered-list--html-content': htmlContent,
      'utrecht-unordered-list--nested': nested,
    })}
    role="list"
  >
    {children}
    {htmlContent
      ? items.map(({ children: subChildren, items: subItems, innerHTML }, index) => (
          <HTMLUnorderedListItem key={index} items={subItems} innerHTML={innerHTML}>
            {subChildren}
          </HTMLUnorderedListItem>
        ))
      : items.map(({ children: subChildren, items: subItems, innerHTML }, index) => (
          <UnorderedListItem key={index}>
            {subChildren}
            {innerHTML && parse(innerHTML)}
            {subItems && UnorderedList({ nested: true, items: subItems })}
          </UnorderedListItem>
        ))}
  </ul>
);

export default UnorderedList;
