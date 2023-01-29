/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Heading5 as Heading5Component } from '@utrecht/component-library-react/dist/css-module';
import type { Heading5Props } from '@utrecht/component-library-react/src/Heading5';
import React, { PropsWithChildren } from 'react';

interface CSSHeading5Props extends Heading5Props {
  distanced?: boolean;
  textContent?: string;
}

export const Heading5 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<CSSHeading5Props>) => (
  <Heading5Component
    {...restProps}
    style={
      distanced
        ? {
            '--utrecht-space-around': 1,
          }
        : undefined
    }
  >
    {children}
    {textContent}
  </Heading5Component>
);

export default Heading5;
