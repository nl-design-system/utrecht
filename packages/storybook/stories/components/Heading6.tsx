/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Heading6 as Heading6Component } from '@utrecht/component-library-react/dist/css-module';
import type { Heading6Props } from '@utrecht/component-library-react/src/Heading6';
import React, { PropsWithChildren } from 'react';

interface CSSHeading6Props extends Heading6Props {
  distanced?: boolean;
  textContent?: string;
}

export const Heading6 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<CSSHeading6Props>) => (
  <Heading6Component
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
  </Heading6Component>
);

export default Heading6;
