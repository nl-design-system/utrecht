import React from 'react';

// `will-change: transform` will create a "containing block" that will contain `position: fixed` elements.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
export const ExampleViewport = (Story) => (
  <div
    style={{
      minHeight: '240px',
      minWidth: '320px',
      position: 'relative',
      willChange: 'transform',
    }}
  >
    {Story()}
  </div>
);

ExampleViewport.displayName = 'ExampleViewport';
