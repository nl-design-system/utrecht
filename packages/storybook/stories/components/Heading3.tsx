/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Heading3 as Heading3Component } from '@utrecht/component-library-react/dist/css-module';
import type { Heading3Props } from '@utrecht/component-library-react/src/Heading3';
import React, { PropsWithChildren } from 'react';

interface CSSHeading3Props extends Heading3Props {
  distanced?: boolean;
  textContent?: string;
}

export const Heading3 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<CSSHeading3Props>) => (
  <Heading3Component
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
  </Heading3Component>
);

export default Heading3;
