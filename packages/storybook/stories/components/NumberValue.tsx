/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import { NumberValue as NumberValueComponent } from '@utrecht/component-library-react/dist/css-module';
import type { NumberValueProps } from '@utrecht/component-library-react/src/NumberValue';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface CSSNumberValueProps extends NumberValueProps {
  appearance?: string;
  textContent?: string;
  value?: string;
}

export const defaultArgs: CSSNumberValueProps = {
  appearance: '',
  textContent: '',
  value: '',
};

export const NumberValue = ({
  appearance = defaultArgs.appearance,
  children,
  textContent = defaultArgs.textContent,
  ...restProps
}: PropsWithChildren<CSSNumberValueProps>) => {
  return (
    <NumberValueComponent
      {...restProps}
      className={clsx(
        appearance === 'negative' && 'utrecht-value-number--negative',
        appearance === 'positive' && 'utrecht-value-number--positive',
      )}
    >
      {children}
      {textContent}
    </NumberValueComponent>
  );
};

export default NumberValue;
