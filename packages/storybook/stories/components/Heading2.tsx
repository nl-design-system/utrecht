/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Heading2 as Heading2Component } from '@utrecht/component-library-react/dist/css-module';
import type { Heading2Props } from '@utrecht/component-library-react/src/Heading2';
import React, { PropsWithChildren } from 'react';

interface CSSHeading2Props extends Heading2Props {
  distanced?: boolean;
  textContent?: string;
}

export const Heading2 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<CSSHeading2Props>) => (
  <Heading2Component
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
  </Heading2Component>
);

export default Heading2;
