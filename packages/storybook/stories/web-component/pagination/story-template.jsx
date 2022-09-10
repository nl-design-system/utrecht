/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  currentIndex: {
    description: 'Current index',
    type: 'number',
  },
  links: {
    description: 'Items',
    type: 'array',
  },
  prev: {
    description: 'Previous link',
    type: 'object',
  },
  next: {
    description: 'Next link',
    type: 'object',
  },
};

export const defaultArgs = {
  currentIndex: -1,
  links: [],
  next: null,
  prev: null,
};

export const exampleArgs = {
  currentIndex: 3,
  distanced: true,
  links: [
    {
      href: './1',
      index: 1,
      title: 'Resultaat 1 tot 10',
    },
    {
      href: './2',
      index: 2,
      title: 'Resultaat 11 tot 20',
    },
    {
      href: './3',
      index: 3,
      title: 'Resultaat 21 tot 30',
    },
    {
      href: './4',
      index: 4,
      title: 'Resultaat 31 tot 40',
    },
    {
      href: './5',
      index: 5,
      title: 'Resultaat 41 tot 50',
    },
  ],
  next: {
    href: './2',
  },
  prev: {
    disabled: true,
  },
};

export const Pagination = ({
  currentIndex = defaultArgs.currentIndex,
  links = defaultArgs.links,
  next = defaultArgs.next,
  prev = defaultArgs.prev,
}) => (
  <utrecht-pagination
    links={JSON.stringify(links)}
    next={JSON.stringify(next)}
    prev={JSON.stringify(prev)}
    current-index={currentIndex}
  ></utrecht-pagination>
);

export default Pagination;
