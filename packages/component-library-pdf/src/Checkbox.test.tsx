/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Checkbox } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Checkbox', () => {
  it('renders a <Form> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-checkbox',
      render: () => <Checkbox />,
    });

    expect(sha256).toBe('16860207ce8377c3b11bd31d676efba22d10f8eedacdf9098b702c2743fc512b');
  });
});
