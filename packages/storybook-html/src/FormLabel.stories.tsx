/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/form-label/README.md?raw';
import tokensDefinition from '@utrecht/components/form-label/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const FormLabelStory = ({ id, children, type }) => (
  <p>
    <input type={type} id={id} />
    <label htmlFor={id}>{children}</label>
  </p>
);

const meta = {
  title: 'HTML Component/Form label',
  id: 'html-form-label',
  component: FormLabelStory,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Set the content of the label',
      control: 'text',
    },
    type: {
      description: 'Set the type of the form control',
      options: ['hidden', 'checkbox', 'radio'],
      control: { type: 'radio' },
    },
  },
  args: {
    children: [
      <h1>Lorem ipsum</h1>,
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-label',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormLabelStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '8b5c4c02-7465-4cad-8a21-3fe91e5afa47',
    children: 'Username',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<label>` element.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
