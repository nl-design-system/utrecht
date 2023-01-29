/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const Heading1 = ({ children = null, textContent = '', distanced = false, ...restProps }) => (
  <h1
    className={clsx('utrecht-heading-1', {
      'utrecht-heading-1--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h1>
);

export default Heading1;
