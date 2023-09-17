/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/form-fieldset/README.md?raw';
import tokensDefinition from '@utrecht/components/form-fieldset/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Fieldset = ({ disabled, children, legend }) => (
  <fieldset disabled={disabled || undefined}>
    {legend ? <legend>{legend}</legend> : null}
    {children}
  </fieldset>
);

const meta = {
  title: 'HTML Component/Form fieldset',
  id: 'html-form-fieldset',
  component: Fieldset,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the fieldset',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    legend: {
      description: 'Set the content of the legend',
      control: 'text',
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
    tokensPrefix: 'utrecht-form-fieldset',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Fieldset body</p>,
    legend: 'Fieldset legend',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<fieldset>` element.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: <p>Fieldset body</p>,
    disabled: true,
    legend: 'Fieldset legend',
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `disabled` attribute.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
