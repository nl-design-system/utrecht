/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Button } from '@utrecht/component-library-react';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface LogoButtonProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  logo: ReactNode;
}

export const LogoButton = ({ children, logo, ...restProps }: LogoButtonProps) => (
  <div className="utrecht-logo-button" {...restProps}>
    {logo}
    <Button appearance="primary-action-button" className="utrecht-logo-button__button">
      {children}
    </Button>
  </div>
);

export default LogoButton;
