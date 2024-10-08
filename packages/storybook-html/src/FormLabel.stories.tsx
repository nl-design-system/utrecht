/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-label-css/README.md?raw';
import tokensDefinition from '@utrecht/form-label-css/src/tokens.json';
import React, { LabelHTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface FormLabelStoryProps extends LabelHTMLAttributes<HTMLLabelElement> {
  type?: string;
}

const FormLabelStory = ({ id, children, type, ...restProps }: PropsWithChildren<FormLabelStoryProps>) => (
  <p>
    <input type={type} id={id} />
    <label htmlFor={id} {...restProps}>
      {children}
    </label>
  </p>
);

const FormLabelContainerStory = ({ id, type, children, ...restProps }: PropsWithChildren<FormLabelStoryProps>) => {
  return (
    <p>
      <label htmlFor={id} {...restProps}>
        <input type={type} id={id} />
        {children}
      </label>
    </p>
  );
};

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
    hidden,
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
    hidden: false,
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

export const AfterRadioButton: Story = {
  args: {
    id: 'ab59e0fc-af67-4580-b295-98cf8997fc3c',
    children: 'Option 1',
    type: 'radio',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<label>` after an `<input type="radio">` element.',
      },
    },
    render: FormLabelContainerStory,
  },
};

export const AfterCheckbox: Story = {
  args: {
    id: '2de51925-94a7-40df-a433-e620038b3da7',
    children: 'I agree',
    type: 'checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<label>` after an `<input type="checkbox">` element.',
      },
    },
    render: FormLabelContainerStory,
  },
};

export const HasRadioButton: Story = {
  args: {
    id: 'ab59e0fc-af67-4580-b295-98cf8997fc3c',
    children: 'Option 1',
    type: 'radio',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using a `<label>` that contains an `<input type="radio">` element.',
      },
    },
    render: FormLabelContainerStory,
  },
};

export const HasCheckbox: Story = {
  args: {
    id: '2de51925-94a7-40df-a433-e620038b3da7',
    children: 'I agree',
    type: 'checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using a `<label>` that contains an `<input type="checkbox">` element.',
      },
    },
  },
  render: FormLabelContainerStory,
};

export const DesignTokens = designTokenStory(meta);
