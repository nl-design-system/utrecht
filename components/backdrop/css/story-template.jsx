/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

const checkerboard = (story) => (
  <div
    style={{
      '--checkerboard-color-1': '#000000',
      '--checkerboard-color-2': '#ffffff',
      '--checkerboard-size': '16px',
      'background-color': 'var(--checkerboard-color-2)',
      'background-image':
        'linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%,var(--checkerboard-color-1)), linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%, var(--checkerboard-color-1))',
      'background-position': ' 0 0, var(--checkerboard-size) var(--checkerboard-size)',
      'background-size': 'calc(var(--checkerboard-size) * 2) calc(var(--checkerboard-size) * 2)',
      height: '100%',
      'min-height': 'calc(40 * var(--checkerboard-size))',
      'min-width': 'calc(40 * var(--checkerboard-size))',
      position: 'relative',
      width: '100%',
    }}
  >
    {story()}
  </div>
);

export const argTypes = {
  reducedMotion: {
    name: 'Reduced motion',
    type: 'boolean',
  },
  reducedTransparency: {
    name: 'Reduced transparency',
    type: 'boolean',
  },
  viewport: {
    name: 'Cover viewport',
    type: 'boolean',
  },
};

export const decorators = [checkerboard];

export const defaultArgs = {
  reducedMotion: false,
  reducedTransparency: false,
  viewport: false,
};

export const Backdrop = ({
  reducedMotion = defaultArgs.reducedMotion,
  reducedTransparency = defaultArgs.reducedTransparency,
  viewport = defaultArgs.viewport,
}) => (
  <div
    className={clsx('utrecht-backdrop', {
      'utrecht-backdrop--reduced-motion': reducedMotion,
      'utrecht-backdrop--reduced-transparency': reducedTransparency,
      'utrecht-backdrop--viewport': viewport,
    })}
  ></div>
);

export default Backdrop;