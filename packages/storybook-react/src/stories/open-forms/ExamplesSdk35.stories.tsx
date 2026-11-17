/* @license CC0-1.0 */

/**
 * The example form with formio-renderer 1.8, the version of the Open Forms SDK 3.5.
 * Only the Open Forms SDK CSS is loaded, like in production: it includes the formio-renderer 1.8 CSS
 * and Font Awesome. Don't import the formio-renderer 3.x CSS here.
 */

import { FormioForm, PrimaryActionButton } from '@open-formulieren/formio-renderer-1';
import nlMessages from '@open-formulieren/formio-renderer-1/i18n/compiled/nl.json';
import rendererPackage from '@open-formulieren/formio-renderer-1/package.json';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenFormsContainer } from '@utrecht/open-forms-container-react/css';
import React, { ComponentProps } from 'react';
import { IntlProvider } from 'react-intl-sdk';
import { fn } from 'storybook/test';
import { FormNavigation } from './FormNavigation.js';
import { COMPONENT_PARAMETERS, createFormComponents, INITIAL_ERRORS, SDK_RENDERER_DOCS } from './example-form.js';
import '@open-formulieren/sdk/styles.css';

type FormioFormProps = ComponentProps<typeof FormioForm>;

const FORM_COMPONENTS = createFormComponents(rendererPackage) as FormioFormProps['components'];

// Shows the submitted values in the Actions panel.
const onSubmit = fn(async () => {}).mockName('onSubmit');

const meta = {
  id: 'open-forms-examples-sdk-3-5',
  title: 'Open Formulieren/voorbeelden SDK 3.5',
  component: FormioForm,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: `
Het voorbeeldformulier met formio-renderer 1.8 van de Open Forms SDK 3.5. Net als in productie
is alleen de CSS van de Open Forms SDK geladen.

Vergelijk met de formio-renderer 3.0 story in \`Open Formulieren/voorbeelden\`: onder andere het
multifield en de foutmeldingen hebben andere HTML.
${SDK_RENDERER_DOCS}
        `,
      },
    },
  },
} satisfies Meta<typeof FormioForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormioRenderer1: Story = {
  name: 'formio-renderer 1.8 (SDK 3.5.x)',
  args: {
    components: FORM_COMPONENTS,
    componentParameters: COMPONENT_PARAMETERS as FormioFormProps['componentParameters'],
    errors: INITIAL_ERRORS,
    onSubmit,
  },
  render: (args: FormioFormProps) => (
    <IntlProvider locale="nl" messages={nlMessages}>
      <OpenFormsContainer>
        <FormioForm {...args}>
          <FormNavigation PrimaryActionButton={PrimaryActionButton} />
        </FormioForm>
      </OpenFormsContainer>
    </IntlProvider>
  ),
};
