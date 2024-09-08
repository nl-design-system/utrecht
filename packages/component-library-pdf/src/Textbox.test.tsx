/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Textbox } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Textbox', () => {
  it('renders a <Form> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-textbox',
      render: () => <Textbox />,
    });

    expect(sha256).toBe('0b7ebb1645421bbff808dd64b4d6cb287d0ada430b38dc4ff941dd4f22f42198');
  });
});
