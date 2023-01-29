/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const Heading3 = ({ children = null, textContent = '', distanced = false, ...restProps }) => (
  <h3
    className={clsx('utrecht-heading-3', {
      'utrecht-heading-3--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h3>
);

export default Heading3;
