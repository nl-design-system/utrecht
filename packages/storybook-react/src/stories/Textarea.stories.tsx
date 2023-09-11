import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/textarea/README.md?raw';
import tokensDefinition from '@utrecht/components/textarea/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Textarea',
  id: 'react-textarea',
  component: Textarea,
  argTypes: {
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      description: 'Invalid. For this component you should use `invalid` instead of `ariaInvalid`.',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      description: 'Set the text of the placeholder',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    required: {
      description: 'Required',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    spellCheck: {
      description: 'Spellcheck',
      control: { type: 'select' },
      options: {
        '': undefined,
        false: 'false',
        true: 'true',
      },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    defaultValue: {
      description:
        'Set the value of the text box. In React you should use `defaultValue` instead of `value` or `children`.',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    defaultValue: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-textarea',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const DesignTokens = designTokenStory(meta);
