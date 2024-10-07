/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { FormFieldTextarea } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Form field with textarea', () => {
  it('renders a <Form> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-form-field-textarea',
      render: () => <FormFieldTextarea label="Uw bericht" description="Maximaal 10.000 tekens" />,
    });

    expect(sha256).toBe('TODO');
  });

  it('renders a larger textarea based on the `rows` property', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-form-field-textarea-rows',
      render: () => <FormFieldTextarea label="Uw bericht" description="Maximaal 10.000 tekens" rows={20} />,
    });

    expect(sha256).toBe('TODO');
  });
});
