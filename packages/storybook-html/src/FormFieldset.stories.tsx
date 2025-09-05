/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-fieldset-css/README.md?raw';
import tokensDefinition from '@utrecht/form-fieldset-css/src/tokens.json';
import React, { FieldsetHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface FieldsetStory extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: ReactNode;
}
const Fieldset = ({ disabled, children, legend, ...restProps }: PropsWithChildren<FieldsetStory>) => (
  <fieldset disabled={disabled || undefined} {...restProps}>
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
    hidden,
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
    hidden: false,
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

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
