import React, { PropsWithChildren } from 'react';

export const FontSample = ({ children, fontFamily }: PropsWithChildren<{ fontFamily: string }>) => (
  <span
    className="utrecht-font-sample"
    style={{
      fontFamily,
      fontSizeAdjust: '0.5',
    }}
  >
    {children}
  </span>
);
