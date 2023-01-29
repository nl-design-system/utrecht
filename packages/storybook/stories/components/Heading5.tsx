/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const Heading5 = ({ children = null, textContent = '', distanced = false, ...restProps }) => (
  <h5
    className={clsx('utrecht-heading-5', {
      'utrecht-heading-5--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h5>
);

export default Heading5;
