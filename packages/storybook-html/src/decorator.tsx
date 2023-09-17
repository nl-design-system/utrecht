import { HTMLContent } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

export const htmlContentDecorator = (Story: any, storyContext: any) => (
  <HTMLContent dir={storyContext?.args?.dir} lang={storyContext?.args?.lang}>
    {Story()}
  </HTMLContent>
);
