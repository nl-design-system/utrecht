/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { Image } from '@utrecht/component-library-react/src/index';
import { readFile } from 'fs/promises';
import React from 'react';
import { renderPdf } from './lib';

describe('Image', () => {
  let dataURL = '';

  beforeAll(async () => {
    const file = await readFile('./src/image.png');
    dataURL = `data:image/png;base64,${file.toString('base64')}`;
  });

  it('renders a <Figure> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-image',
      render: () => <Image src={dataURL} alt="" />,
    });

    expect(sha256).toBe('TODO');
  });

  it('renders a text alternative for `<img alt="Colorful gradients">`', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-image-alt',
      render: () => <Image src={dataURL} alt="Colorful gradients" />,
    });

    expect(sha256).toBe('TODO');
  });

  it('renders a visible text alternative for `<img alt="Text alternative">`', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-image-actual-text',
      render: () => <Image src="about:blank" alt="Text alternative for an image that is unavailable" />,
    });

    expect(sha256).toBe('TODO');
  });
});
