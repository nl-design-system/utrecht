import React from 'react';

export const ExampleInvisibleText = ({ children }) => (
  <span
    style={{
      width: '1px',
      border: '0',
      clip: 'rect(1px, 1px, 1px, 1px)',
      clipPath: 'inset(50%)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);
