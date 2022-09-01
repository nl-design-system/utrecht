/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import iconSet from '@utrecht/icon/dist/index.json';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  color: {
    description: 'Color of the icon',
    control: 'color',
  },
  size: {
    description: 'Size of the icon (in pixels)',
    control: 'number',
  },
  icon: {
    description: 'Icon',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
  innerHTML: {
    description: 'Set the svg content of the icon',
    control: 'text',
  },
};

export const defaultArgs = { color: '', size: '', icon: 'utrecht-icon', innerHTML: '' };

export const exampleArgs = {
  color: '#888888',
  icon: 'utrecht-icon-loupe',
  size: 32,
};

export const Icon = ({
  color = defaultArgs.color,
  icon = defaultArgs.icon,
  size = defaultArgs.size,
  innerHTML = defaultArgs.innerHTML,
}) => {
  if (color || size) {
    return (
      <div style={{ '--utrecht-icon-color': color && color, '--utrecht-icon-size': size && `${size}px` }}>
        {parse(`<${icon}>${innerHTML}</${icon}>`)}
      </div>
    );
  } else {
    return parse(`<${icon}>${innerHTML}</${icon}>`);
  }
};

export default Icon;
