/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '@utrecht/component-library-react/dist/css-module';
import { RadioButtonProps } from '@utrecht/component-library-react/dist/css-module/RadioButton';
import readme from '@utrecht/components/radio-button/README.md?raw';
import tokensDefinition from '@utrecht/components/radio-button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';

interface RadioButtonStoryProps extends RadioButtonProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  active?: boolean;
}

const RadioButtonStory = ({ active, focus, focusVisible, hover, ...args }: RadioButtonStoryProps) => {
  const classNames = {
    'utrecht-radio-button--active': active,
    'utrecht-radio-button--focus': focus,
    'utrecht-radio-button--focus-visible': focusVisible,
    'utrecht-radio-button--hover': hover,
  };

  return <RadioButton className={clsx(classNames)} {...args} />;
};

const meta = {
  title: 'CSS Component/Radio Button',
  id: 'css-radio-button',
  component: RadioButtonStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
    hover: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    name: '',
    id: '',
  },
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    active: {
      description: 'Active',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-radio-button',
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
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  name: 'Hover State',
  args: {
    ...Default.args,
    hover: true,
  },
};

export const Focus: Story = {
  name: 'Focus State',
  args: {
    ...Default.args,
    focus: true,
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible State',
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
};

export const Active: Story = {
  name: 'Active State',
  args: {
    ...Default.args,
    active: true,
    focus: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `When the component is \`active\`, it always has \`focus\` too. Test these states together for accurate results.`,
      },
    },
  },
};

export const Disabled: Story = {
  name: 'Disabled State',
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledAndFocussed: Story = {
  name: 'Disabled and Focus State',
  args: {
    ...Default.args,
    disabled: true,
    focus: true,
  },
};

export const DisabledAndFocusVisible: Story = {
  name: 'Disabled and Focus-Visible State',
  args: {
    ...Default.args,
    disabled: true,
    focus: true,
    focusVisible: true,
  },
};

export const DisabledAndHover: Story = {
  name: 'Disabled and Hover State',
  args: {
    ...Default.args,
    disabled: true,
    hover: true,
  },
};

export const DisabledAndActive: Story = {
  name: 'Disabled and Active State',
  args: {
    ...Default.args,
    disabled: true,
    active: true,
  },
};

export const Checked: Story = {
  name: 'Checked State',
  args: {
    ...Default.args,
    checked: true,
  },
};

export const CheckedAndFocus: Story = {
  name: 'Checked and Focus State',
  args: {
    ...Default.args,
    checked: true,
    focus: true,
  },
};

export const CheckedAndFocusVisible: Story = {
  name: 'Checked and Focus-Visible State',
  args: {
    ...Default.args,
    checked: true,
    focus: true,
    focusVisible: true,
  },
};

export const CheckedAndHover: Story = {
  name: 'Checked and Hover State',
  args: {
    ...Default.args,
    checked: true,
    hover: true,
  },
};

export const CheckedAndActive: Story = {
  name: 'Checked and Active State',
  args: {
    ...Default.args,
    checked: true,
    active: true,
  },
};

export const CheckedAndDisabled: Story = {
  name: 'Checked and Disabled State',
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
  },
};

export const CheckedDisabledAndHover: Story = {
  name: 'Checked, Disabled and Hover State',
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
    hover: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndFocus: Story = {
  name: 'Checked, Disabled and Focus State',
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
    focus: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndActive: Story = {
  name: 'Checked, Disabled and Active State',
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
    active: true,
    focus: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const Invalid: Story = {
  name: 'Invalid State',
  args: {
    ...Default.args,
    invalid: true,
  },
};

export const CheckedAndInvalid: Story = {
  name: 'Checked and Invalid State',
  args: {
    ...Default.args,
    checked: true,
    invalid: true,
  },
};

export const DesignTokens = designTokenStory(meta);
