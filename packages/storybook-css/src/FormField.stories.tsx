/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { FormField, FormFieldErrorMessage, FormLabel, Textbox } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-field-css/README.md?raw';
import anatomyDocs from '@utrecht/form-field-css/docs/anatomy.nl.md?raw';
import htmlDocs from '@utrecht/form-field-css/docs/technology-html.nl.md?raw';
import wcagDocs from '@utrecht/form-field-css/docs/wcag.nl.md?raw';
import tokensDefinition from '@utrecht/form-field-css/src/tokens.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Form Field',
  id: 'css-form-field',
  component: FormField,
  argTypes: {
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component',
        defaultValue: { summary: false },
      },
    },
    type: {
      description: 'Type of the associated form control',
      name: 'type',
      control: { type: 'select' },
      options: ['', 'checkbox', 'radio', 'text'],
      table: {
        category: 'Component',
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    children: '',
    description: undefined,
    input: undefined,
    invalid: undefined,
    label: undefined,
    type: undefined,
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fform-field',
    nldesignsystem: 'https://nldesignsystem.nl/form-field',
    tokensPrefix: 'utrecht-form-field',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs, htmlDocs, wcagDocs]),
      },
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: <FormLabel htmlFor="17804281-5028-44d6-b8a4-53f83f3f4bd9">Naam</FormLabel>,
    input: <Textbox id="17804281-5028-44d6-b8a4-53f83f3f4bd9" />,
    description: 'Voornaam en achternaam.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-form-field` class name.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Invalid: Story = {
  args: {
    label: <FormLabel htmlFor="17804281-5028-44d6-b8a4-53f83f3f4bd9">Naam</FormLabel>,
    input: <Textbox id="17804281-5028-44d6-b8a4-53f83f3f4bd9" />,
    description: 'Voornaam en achternaam.',
    errorMessage: <FormFieldErrorMessage>Vul een voornaam in.</FormFieldErrorMessage>,
    invalid: true,
  },
};

export const DesignTokens = designTokenStory(meta);
