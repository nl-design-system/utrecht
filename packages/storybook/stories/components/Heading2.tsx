/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const Heading2 = ({ children = null, textContent = '', distanced = false, ...restProps }) => (
  <h2
    className={clsx('utrecht-heading-2', {
      'utrecht-heading-2--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h2>
);

export default Heading2;
