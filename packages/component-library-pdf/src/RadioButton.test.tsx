/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { RadioButton } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Radio button', () => {
  it('renders a <Form> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-radio-button',
      render: () => (
        <>
          <p>
            <RadioButton name="option" />
          </p>
          <p>
            <RadioButton name="option" />
          </p>
          <p>
            <RadioButton name="option" />
          </p>
        </>
      ),
    });

    expect(sha256).toBe('c0224e85c479415e7a9ff9470f93731b03434a92ce63cc973af4b9a933be2af6');
  });
});
