/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-toggle-css/README.md?raw';
import tokensDefinition from '@utrecht/form-toggle-css/src/tokens.json';
import { FormToggleStory } from './FormToggle';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Form Toggle',
  id: 'css-form-toggle',
  component: FormToggleStory,
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    element: {
      description: 'HTML element',
      control: 'select',
      options: ['div', 'input'],
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    id: {
      description: 'id',
      control: 'text',
    },
  },
  args: {
    checked: false,
    disabled: false,
    focus: false,
    focusVisible: false,
    hover: false,
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fform-toggle',
    nldesignsystem: 'https://nldesignsystem.nl/switch',
    tokensPrefix: 'utrecht-form-toggle',
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
} satisfies Meta<typeof FormToggleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-form-toggle` class name.',
      },
    },
  },
};

export const InputCheckbox: Story = {
  args: {
    element: 'input',
    hover: true,
    id: '0e73edcc-6479-4a9f-9854-9669e5a79ee8',
  },
  name: 'With invisible `<input type="checkbox">`',
};

export const Hover: Story = {
  args: {
    // The React component doesn't support `hover` simulation.
    // use the <div> implementation for visual regression tests.
    element: 'div',
    hover: true,
  },
  name: 'Hover',
};

export const Focus: Story = {
  args: {
    // The React component doesn't support `focus` simulation.
    // use the <div> implementation for visual regression tests.
    element: 'div',
    focus: true,
  },
  name: 'Focus',
};

export const FocusVisible: Story = {
  args: {
    // The React component doesn't support `focus-visible` simulation.
    // use the <div> implementation for visual regression tests.
    element: 'div',
    focus: true,
    focusVisible: true,
  },
  name: 'Focus-visible',
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  name: 'Checked',
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  name: 'Disabled',
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  name: 'Checked and disabled',
};

export const DesignTokens = designTokenStory(meta);
