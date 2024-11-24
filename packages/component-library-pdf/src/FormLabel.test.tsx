/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { FormLabel } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Form label', () => {
  it.skip('renders a <Lbl> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-form-label',
      render: () => <FormLabel>Name</FormLabel>,
    });

    expect(sha256).toBe('');
  });
});
