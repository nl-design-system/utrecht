/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  items: {
    description: 'List items',
    control: 'array',
  },
  dir: {
    description: 'Text direction',
    control: 'text',
  },
  lang: {
    description: 'Lang',
    control: 'text',
  },
};

export const defaultArgs = { items: [], dir: '', lang: '' };

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

export const OrderedList = ({ items = defaultArgs.items, dir = defaultArgs.dir, lang = defaultArgs.lang }) => (
  <section className="utrecht-html" lang={lang || null} dir={dir || null}>
    <ol>
      {items.map(({ textContent }) => (
        <li>{textContent}</li>
      ))}
    </ol>
  </section>
);

export default OrderedList;
