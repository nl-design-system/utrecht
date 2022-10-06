/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import iconSet from '@utrecht/icon/dist/index.json';
import React from 'react';

export const argTypes = {
  icon: {
    description: 'Icon',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
};

export const exampleArgs = {
  icon: 'utrecht-icon-loupe',
};

export const MapMarker = ({ children, icon }) => {
  const Icon = icon;
  return (
    <div className="utrecht-map-marker">
      {icon ? <Icon /> : null}
      {children}
    </div>
  );
};

export default MapMarker;
