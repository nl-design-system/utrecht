/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import iconSet from '@utrecht/icon/dist/index.json';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  icon: {
    description: 'Icon',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
};

export const defaultArgs = { icon: 'utrecht-icon-bestemmingsplan' };

export const exampleArgs = { icon: 'utrecht-icon-loupe' };

export const MapMarker = ({ icon = defaultArgs.icon }) => (
  <div
    className="example-wrapper"
    style={{ backgroundColor: 'rgb(208 208 208)', display: 'flex', justifyContent: 'center', padding: '3rem' }}
  >
    {' '}
    {parse(`<utrecht-map-marker><${icon}></${icon}></utrecht-map-marker>`)}
  </div>
);
