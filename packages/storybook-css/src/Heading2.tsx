/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export const Heading2 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<{
  distanced?: boolean;
  textContent?: string;
}>) => (
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
