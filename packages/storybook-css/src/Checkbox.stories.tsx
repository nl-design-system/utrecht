/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/checkbox-css/README.md?raw';
import tokensDefinition from '@utrecht/checkbox-css/src/tokens.json';
import { Checkbox } from '@utrecht/component-library-react';
import type { CheckboxProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface CheckboxStoryProps extends CheckboxProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  active?: boolean;
}

const CheckboxStory = ({ active, focus, focusVisible, hover, name, checked, value, ...args }: CheckboxStoryProps) => (
  <Checkbox
    className={clsx({
      'utrecht-checkbox--active': active,
      'utrecht-checkbox--focus': focus,
      'utrecht-checkbox--focus-visible': focusVisible,
      'utrecht-checkbox--hover': hover,
    })}
    defaultChecked={checked}
    defaultValue={value}
    name={name || undefined}
    {...args}
  />
);

const meta = {
  title: 'CSS Component/Checkbox',
  id: 'css-checkbox',
  component: CheckboxStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
    hover: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    name: '',
  },
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
    indeterminate: {
      name: 'indeterminate',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
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
    active: {
      description: 'Active',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-checkbox',
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
} satisfies Meta<typeof CheckboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  name: 'Hover',
  args: {
    hover: true,
  },
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    focus: true,
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible',
  args: {
    focus: true,
    focusVisible: true,
  },
};

export const Active: Story = {
  name: 'Active',
  args: {
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `When the component is \`active\`, it always has \`focus\` too. Test these states together for accurate results.`,
      },
    },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const DisabledAndFocussed: Story = {
  name: 'Disabled and Focus',
  args: {
    disabled: true,
    focus: true,
  },
};

export const DisabledAndFocusVisible: Story = {
  name: 'Disabled and Focus-Visible',
  args: {
    disabled: true,
    focus: true,
    focusVisible: true,
  },
};

export const DisabledAndHover: Story = {
  name: 'Disabled and Hover',
  args: {
    disabled: true,
    hover: true,
  },
};

export const DisabledAndActive: Story = {
  name: 'Disabled and Active',
  args: {
    disabled: true,
    active: true,
  },
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    checked: true,
  },
};

export const CheckedAndFocus: Story = {
  name: 'Checked and Focus',
  args: {
    checked: true,
    focus: true,
  },
};

export const CheckedAndFocusVisible: Story = {
  name: 'Checked and Focus-Visible',
  args: {
    checked: true,
    focus: true,
    focusVisible: true,
  },
};

export const CheckedAndHover: Story = {
  name: 'Checked and Hover',
  args: {
    checked: true,
    hover: true,
  },
};

export const CheckedAndActive: Story = {
  name: 'Checked and Active',
  args: {
    checked: true,
    active: true,
  },
};

export const CheckedAndDisabled: Story = {
  name: 'Checked and Disabled',
  args: {
    checked: true,
    disabled: true,
  },
};

export const CheckedDisabledAndHover: Story = {
  name: 'Checked, Disabled and Hover',
  args: {
    checked: true,
    disabled: true,
    hover: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndFocus: Story = {
  name: 'Checked, Disabled and Focus',
  args: {
    checked: true,
    disabled: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndFocusVisible: Story = {
  name: 'Checked, Disabled and Focus-visible',
  args: {
    checked: true,
    disabled: true,
    focus: true,
    focusVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndActive: Story = {
  name: 'Checked, Disabled and Active',
  args: {
    checked: true,
    disabled: true,
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  args: {
    indeterminate: true,
  },
};

export const CheckedAndIndeterminate: Story = {
  name: 'Checked and Indeterminate',
  args: {
    checked: true,
    indeterminate: true,
  },
};

export const CheckedAndIndeterminateAndDisabled: Story = {
  name: 'Checked and Indeterminate and Disabled',
  args: {
    checked: true,
    disabled: true,
    indeterminate: true,
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
};

export const CheckedAndInvalid: Story = {
  name: 'Checked and Invalid',
  args: {
    checked: true,
    invalid: true,
  },
};

export const RequiredAndInvalid: Story = {
  name: 'Required and Invalid',
  args: {
    name: 'example',
    invalid: true,
    required: true,
  },
  decorators: [(Story) => <form>{Story()}</form>],
  parameters: {
    docs: {
      description: {
        story:
          'The native checkbox should have the same position and size as the custom checkbox, so the native error message tooltip aligns with the custom checkbox.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
