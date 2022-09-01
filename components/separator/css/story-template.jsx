/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
};

export const defaultArgs = {
  distanced: false,
};

export const Separator = ({ distanced = defaultArgs.distanced }) => (
  <div
    role="separator"
    aria-orientation="horizontal"
    className={clsx('utrecht-separator', distanced && 'utrecht-separator--distanced')}
  ></div>
);

export default Separator;
