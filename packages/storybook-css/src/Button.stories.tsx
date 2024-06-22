import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-css/README.md?raw';
import tokensDefinition from '@utrecht/button-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import { ButtonStory } from './Button';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
  component: ButtonStory,
  argTypes: {
    active: {
      description: 'Active',
      control: 'boolean',
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    pressed: {
      description: 'Pressed',
      control: { type: 'select' },
      options: ['', false, true],
      type: {
        required: false,
      },
    },
    textContent: {
      description: 'Button text',
      control: 'text',
    },
    type: {
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
    hint: {
      control: { type: 'select' },
      options: ['', 'danger', 'warning', 'ready'],
    },
    IconBefore: {
      description: 'Icon before textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    IconAfter: {
      description: 'Icon after textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    active: false,
    appearance: '',
    busy: false,
    disabled: false,
    focus: false,
    focusVisible: false,
    hint: false,
    hover: false,
    pressed: '',
    textContent: '',
    type: 'button',
    IconBefore: '',
    IconAfter: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-button',
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
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Start je aanvraag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button` class naam',
      },
    },
  },
};

export const PrimaryAction: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--primary-action` class naam',
      },
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--secondary-action` class naam',
      },
    },
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--subtle` class naam',
      },
    },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
  name: 'Active',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--active` class name',
      },
    },
  },
};

export const Pressed: Story = {
  args: {
    ...Default.args,
    pressed: true,
  },
  name: 'Pressed',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--pressed` class name',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  name: 'Hover',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--hover` class name',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--focus` class name',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--focus` en `.utrecht-button--focus-visible` class name',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--disabled` class name',
      },
    },
  },
};

export const Busy: Story = {
  args: {
    ...Default.args,
    busy: true,
  },
  name: 'Busy',
  parameters: {
    // `cursor` cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--busy` class name',
      },
    },
  },
};

export const IconAfter: Story = {
  args: {
    IconAfter: 'utrecht-icon-chevron-right',
    rel: 'next',
    children: 'Next',
  },
  name: 'Icon after label',
};

export const IconBefore: Story = {
  args: {
    IconBefore: 'utrecht-icon-chevron-left',
    children: 'Previous',
  },
  name: 'Icon before label',
};

export const DesignTokens = designTokenStory(meta);
