/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/textarea-css/README.md?raw';
import tokensDefinition from '@utrecht/textarea-css/src/tokens.json';
import React, { PropsWithChildren, TextareaHTMLAttributes } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface TextareaStory extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = ({
  disabled,
  invalid,
  placeholder,
  readOnly,
  required,
  value,
  ...restProps
}: PropsWithChildren<TextareaStory>) => (
  <textarea
    disabled={disabled || undefined}
    aria-invalid={invalid || undefined}
    placeholder={placeholder || undefined}
    readOnly={readOnly || undefined}
    required={required || undefined}
    defaultValue={value}
    {...restProps}
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
    hidden,
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
    hidden: false,
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
