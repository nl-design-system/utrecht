/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/textarea/README.md?raw';
import tokensDefinition from '@utrecht/components/textarea/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Textarea = ({ disabled, invalid, placeholder, readOnly, required, value }) => (
  <textarea
    disabled={disabled || null}
    aria-invalid={invalid || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    defaultValue={value}
  ></textarea>
);

const meta = {
  title: 'HTML Component/Textarea',
  id: 'html-textarea',
  component: Textarea,
  decorators: [htmlContentDecorator],
  argTypes: {
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    value: {
      description: 'Set the content of the textarea',
      control: 'text',
    },
  },
  args: {
    disabled: false,
    invalid: false,
    placeholder: '',
    readOnly: false,
    required: false,
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
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<textarea>` element.',
      },
    },
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    value: undefined,
  },
  name: 'Placeholder',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `placeholder` attribute.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `aria-invalid="true"` attribute.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
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

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Read-only',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `readonly` attribute.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    required: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Required',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `required` or `aria-required="true"` attribute.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
