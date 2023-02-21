/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Heading1 as Heading1Component } from '@utrecht/component-library-react/dist/css-module';
import type { Heading1Props } from '@utrecht/component-library-react/src/Heading1';
import React, { PropsWithChildren } from 'react';

interface CSSHeading1Props extends Heading1Props {
  distanced?: boolean;
  textContent?: string;
}

export const Heading1 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<CSSHeading1Props>) => (
  <Heading1Component
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
  </Heading1Component>
);

export default Heading1;
