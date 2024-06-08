/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/textbox-css/README.md?raw';
import tokensDefinition from '@utrecht/textbox-css/src/tokens.json';
import React, { InputHTMLAttributes } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface TextboxStoryProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
const Textbox = ({
  autoComplete,
  disabled,
  invalid,
  min,
  max,
  pattern,
  placeholder,
  readOnly,
  required,
  type,
  value,
  ...restProps
}: TextboxStoryProps) => (
  <input
    type={type}
    aria-invalid={invalid || undefined}
    disabled={disabled || undefined}
    min={min || undefined}
    max={max || undefined}
    pattern={pattern || undefined}
    placeholder={placeholder || undefined}
    required={required || undefined}
    readOnly={readOnly || undefined}
    defaultValue={value}
    autoComplete={autoComplete || undefined}
    {...restProps}
  />
);

const meta = {
  title: 'HTML Component/Textbox',
  id: 'html-textbox',
  component: Textbox,
  decorators: [htmlContentDecorator],
  argTypes: {
    autoComplete: {
      description: 'Autocomplete type',
      control: 'text',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    hidden,
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    min: {
      description: 'Minimum',
      control: 'number',
    },
    max: {
      description: 'Maximum',
      control: 'number',
    },
    pattern: {
      description: 'Pattern',
      control: 'text',
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
    type: {
      description: 'Type',
      control: 'select',
      options: ['', 'email', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
    value: {
      description: 'Set the value of the text box',
      control: 'text',
    },
  },
  args: {
    autoComplete: null,
    disabled: false,
    hidden: false,
    invalid: false,
    min: '',
    max: '',
    pattern: '',
    placeholder: '',
    readOnly: false,
    required: false,
    type: 'text',
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-textbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<input type="text">` element.',
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

export const Number: Story = {
  args: {
    min: 0,
    value: '42',
    max: 100,
    type: 'number',
  },
  name: 'Number',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `type="number"` attribute.',
      },
    },
  },
};

export const Password: Story = {
  args: {
    autoComplete: 'current-password',
    required: true,
    value: 'very$ecret2021',
    type: 'password',
  },
  name: 'Password',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `type="password"` attribute.',
      },
    },
  },
};

export const URL: Story = {
  args: {
    type: 'url',
    value: 'https://example.fi/',
  },
  name: 'URL',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `type="url"` attribute.',
      },
    },
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    value: 'inf@example.fi',
  },
  name: 'E-mail',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `type="email"` attribute.',
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
