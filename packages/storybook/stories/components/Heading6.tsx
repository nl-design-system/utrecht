/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const Heading6 = ({ children = null, textContent = '', distanced = false, ...restProps }) => (
  <h6
    className={clsx('utrecht-heading-6', {
      'utrecht-heading-6--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h6>
);

export default Heading6;
