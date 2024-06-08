/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-label-css/README.md?raw';
import tokensDefinition from '@utrecht/form-label-css/src/tokens.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Form label',
  id: 'css-form-label',
  component: FormLabel,
  argTypes: {
    children: {
      description: 'Content of the label',
      control: 'text',
    },
    type: {
      description: 'Type of the associated form control',
      options: ['', 'checkbox', 'radio'],
      control: { type: 'radio' },
    },
  },
  args: {
    checked: false,
    disabled: false,
    children: '',
    type: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-form-label',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Username',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-form-label` class name.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Username',
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-label--disabled` class name.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const Checkbox: Story = {
  args: {
    children: 'Keep me logged in',
    type: 'checkbox',
  },
  name: 'Checkbox form label',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-label--checkbox` class name.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    children: 'Keep me logged in',
    type: 'checkbox',
  },
  name: 'Checked checkbox form label',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-label--checkbox` and `.utrecht-form-label--checked` class names.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const Radio: Story = {
  args: {
    children: 'Option 1',
    type: 'radio',
  },
  name: 'Radio button form label',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-label--radio` class name.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const RadioChecked: Story = {
  args: {
    checked: true,
    children: 'Option 1',
    type: 'radio',
  },
  name: 'Checked radio button form label',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-label--radio` and `.utrecht-form-label--checked` class names.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
