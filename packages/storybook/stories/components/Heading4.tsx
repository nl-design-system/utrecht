/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const Heading4 = ({ children = null, textContent = '', distanced = false, ...restProps }) => (
  <h4
    className={clsx('utrecht-heading-4', {
      'utrecht-heading-4--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h4>
);

export default Heading4;
