/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import type { URLValueProps } from '@utrecht/component-library-react/dist/URLValue';
import { URLValue as URLValueComponent } from '@utrecht/component-library-react/dist/css-module';
import React, { PropsWithChildren } from 'react';

interface CSSURLValueProps extends URLValueProps {
  url?: string;
}

export const URLValue = ({ children, url }: PropsWithChildren<CSSURLValueProps>) => (
  <URLValueComponent>
    {children}
    {url}
  </URLValueComponent>
);

export default URLValue;
