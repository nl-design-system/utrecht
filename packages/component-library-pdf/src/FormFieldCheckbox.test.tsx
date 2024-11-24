/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { FormFieldCheckbox, Link, Paragraph } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Form field with checkbox', () => {
  const defaultProps = () => ({
    label: 'Ik ga akkoord met de voorwaarden.',
    description: (
      <Paragraph>
        Lees eerst de <Link href="https://example.com">algemene voorwaarden</Link> en de{' '}
        <Link href="https://example.com">privacyverklaring</Link>.
      </Paragraph>
    ),
  });

  describe('default state', () => {
    let sha256: string;

    beforeAll(async () => {
      ({ sha256 } = await renderPdf({
        id: 'pdf-form-field-checkbox',
        render: () => <FormFieldCheckbox {...defaultProps()}></FormFieldCheckbox>,
      }));
    });

    it('renders a <Form> tag', async () => {
      expect(sha256).toBe('394cee551c4dd3a46e3137873662b7a00a3b278fc943e59f2afb197afbddb190');
    });

    it('renders a checkbox that is not checked', async () => {
      expect(sha256).toBe('394cee551c4dd3a46e3137873662b7a00a3b278fc943e59f2afb197afbddb190');
    });
  });

  describe('checked state', () => {
    let sha256: string;

    beforeAll(async () => {
      ({ sha256 } = await renderPdf({
        id: 'pdf-form-field-checkbox-checked',
        render: () => <FormFieldCheckbox {...defaultProps()} defaultChecked></FormFieldCheckbox>,
      }));
    });

    it('renders a checkbox that is checked', async () => {
      expect(sha256).toBe('3f176feff5ec14bb67ac36409a47e5651b85e898959cc76c0249b45e32420298');
    });
  });
});
