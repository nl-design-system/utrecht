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
      children: 'Lorem',
    },
    {
      children: 'Ipsum',
    },
    {
      children: 'Dolor',
    },
  ],
};

export const HTMLOrderedListItem = ({ children, items }) => (
  <li>
    {children}
    {items && HTMLOrderedList({ items })}
  </li>
);

export const HTMLOrderedList = ({ children, items = defaultArgs.items }) => (
  <ol>
    {children}
    {items &&
      items.map(({ children: subChildren, items: subItems }, index) => (
        <HTMLOrderedListItem key={index} items={subItems}>
          {subChildren}
        </HTMLOrderedListItem>
      ))}
  </ol>
);

export const OrderedListItem = ({ children }) => <li className="utrecht-ordered-list__item">{children}</li>;

export const OrderedList = ({
  children,
  distanced = defaultArgs.distanced,
  items = defaultArgs.items,
  htmlContent = defaultArgs.htmlContent,
}) => (
  <ol
    className={clsx('utrecht-ordered-list', {
      'utrecht-ordered-list--distanced': distanced,
      'utrecht-ordered-list--html-content': htmlContent,
    })}
  >
    {children}
    {htmlContent
      ? items.map(({ children: subChildren, items: subItems }, index) => (
          <HTMLOrderedListItem key={index} items={subItems}>
            {subChildren}
          </HTMLOrderedListItem>
        ))
      : items.map(({ children: subChildren, items: subItems }, index) => (
          <OrderedListItem key={index}>
            {subChildren}
            {subItems && OrderedList({ items: subItems })}
          </OrderedListItem>
        ))}
  </ol>
);

export default OrderedList;
