import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/checkbox/README.md?raw';
import tokensDefinition from '@utrecht/components/checkbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Checkbox',
  id: 'css-checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    id: {
      description: 'ID',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    name: {
      description: 'Name',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        category: 'HTML attribute',
      },
    },
    value: {
      description: 'Value',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    checked: false,
    disabled: false,
    id: '',
    invalid: false,
    name: '',
    required: false,
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-checkbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      story: `
Styling met de \`.utrecht-checkbox\` class name:`,
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with the \`.utrecht-checkbox--checked\` class names`,
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with the \`.utrecht-checkbox--disabled\` class names`,
    },
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with the \`.utrecht-checkbox--checked\` and  \`.utrecht-checkbox--disabled\` class names`,
    },
  },
};

export const DesignTokens = designTokenStory(meta);
