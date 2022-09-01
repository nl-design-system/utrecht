/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  items: {
    description: 'Data list items',
    type: {
      name: 'array',
      required: true,
    },
  },
  appearance: {
    description: 'Appearance',
    options: ['', 'rows'],
    control: { type: 'select' },
  },
};

export const defaultArgs = {
  appearance: '',
  items: [],
};

export const exampleArgs = {
  appearance: 'rows',
  items: [
    {
      key: 'Voornaam',
      value: 'Mees',
    },
    {
      key: 'Achternaam',
      value: 'de Vos',
    },
    {
      key: 'Adres',
      value: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
      multiline: true,
    },
  ],
};

export const DataList = ({ appearance = defaultArgs.appearance, items = defaultArgs.items }) => (
  <dl className={clsx('utrecht-data-list', appearance === 'rows' && 'utrecht-data-list--rows')}>
    {items.map(({ key, value, actions, multiline }) => (
      <div className="utrecht-data-list__item">
        <dt className="utrecht-data-list__item-key">{key}</dt>
        <dd
          className={clsx(
            'utrecht-data-list__item-value',
            'utrecht-data-list__item-value--html-dd',
            multiline && 'utrecht-data-list__item-value--multiline',
          )}
        >
          {value}
        </dd>
        {actions && <dd className="utrecht-data-list__actions utrecht-data-list__actions--html-dd">{actions}</dd>}
      </div>
    ))}
  </dl>
);

export default DataList;
