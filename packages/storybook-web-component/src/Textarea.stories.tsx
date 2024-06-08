/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/textarea-css/README.md?raw';
import tokensDefinition from '@utrecht/textarea-css/src/tokens.json';
import { UtrechtTextarea } from '@utrecht/web-component-library-react';
import { React } from 'react';
import { designTokenStory } from './design-token-story';

interface TextareaStoryProps {
  autocomplete?: string;
  cols?: number;
  spellcheck?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: boolean;
}

const TextareaStory = ({
  autocomplete,
  cols,
  disabled,
  invalid,
  placeholder,
  readOnly,
  required,
  rows,
  spellcheck,
  value,
}: TextareaStoryProps) => (
  <UtrechtTextarea
    autocomplete={autocomplete || null}
    cols={cols || null}
    disabled={disabled || null}
    invalid={invalid || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    rows={rows || null}
    spellcheck={spellcheck}
    value={value}
  ></UtrechtTextarea>
);

const meta = {
  title: 'Web Component/Textarea',
  id: 'web-component-textarea',
  component: TextareaStory,
  argTypes: {
    autocomplete: {
      description: 'Autocomplete',
      control: 'select',
      options: ['', 'off', 'on', 'street-address'],
    },
    cols: {
      description: 'Cols',
      control: 'number',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    rows: {
      description: 'Rows',
      control: 'number',
    },
    spellcheck: {
      description: 'Spellcheck',
      control: 'select',
      options: {
        '': undefined,
        false: false,
        true: false,
      },
    },
    value: {
      description: 'Value',
      control: 'text',
    },
  },
  args: {
    cols: 20,
    disabled: false,
    invalid: false,
    placeholder: '',
    readOnly: false,
    required: false,
    rows: 2,
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-textarea',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof TextareaStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Invalid',
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Disabled',
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Read-only',
};

export const Required: Story = {
  args: {
    required: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Required',
};

export const Placeholder: Story = {
  args: {
    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    value: '',
  },
  name: 'Placeholder',
};

export const DesignTokens = designTokenStory(meta);
