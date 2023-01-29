/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import { Paragraph as ParagraphComponent } from '@utrecht/component-library-react/dist/css-module';
import parse from 'html-react-parser';
import React, { PropsWithChildren } from 'react';

interface ParagraphProps {
  distanced?: boolean;
  innerHTML?: string;
}
export const Paragraph = ({
  children,
  distanced = false,
  innerHTML = '',
  ...restProps
}: PropsWithChildren<ParagraphProps>) => {
  return (
    <ParagraphComponent
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
      {parse(innerHTML)}
    </ParagraphComponent>
  );
};

export default Paragraph;
