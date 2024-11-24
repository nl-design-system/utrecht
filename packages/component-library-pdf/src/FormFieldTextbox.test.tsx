/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { FormFieldTextbox } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Form field with textbox', () => {
  it('renders a <Form> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-form-field-textbox',
      render: () => (
        <FormFieldTextbox
          label="Postcode"
          description="Nederlandse postcode met 4 cijfers en 2 letters, bijvoorbeeld: 1234 AB."
        ></FormFieldTextbox>
      ),
    });

    expect(sha256).toBe('d79ea42074650594beb4266345e09cabeb9a437ed13d66ac6f40527b715ec62b');
  });
});
