/*
 * @license EUPL-4.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Heading4 as Heading4Component } from '@utrecht/component-library-react/dist/css-module';
import type { Heading4Props } from '@utrecht/component-library-react/src/Heading4';
import React, { PropsWithChildren } from 'react';

interface CSSHeading4Props extends Heading4Props {
  distanced?: boolean;
  textContent?: string;
}

export const Heading4 = ({
  children = null,
  textContent = '',
  distanced = false,
  ...restProps
}: PropsWithChildren<CSSHeading4Props>) => (
  <Heading4Component
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
  </Heading4Component>
);

export default Heading4;
