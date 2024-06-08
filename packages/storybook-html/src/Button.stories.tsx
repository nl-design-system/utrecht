/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-css/README.md?raw';
import tokensDefinition from '@utrecht/button-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import buttonDisabledTabindexMarkdown from './_button-disabled-tabindex.md?raw';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const Button = ({ ...attributes }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => <button {...attributes} />;

const meta = {
  title: 'HTML Component/Button',
  id: 'html-button',
  component: Button,
  decorators: [htmlContentDecorator],
  argTypes: {
    'aria-busy': {
      description: 'Busy',
      control: 'boolean',
    },
    children: {
      description: 'Content of the button',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    hidden,
    tabindex: {
      description: 'Tabindex',
      control: 'boolean',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
  },
  args: {
    disabled: false,
    hidden: false,
    type: 'button',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    type: 'button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<button>` element.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    disabled: true,
    type: 'button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with `disabled` attribute.',
      },
    },
  },
};

export const DisabledAndFocusable: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    'aria-disabled': true,
    type: 'button',
  },
  name: 'disabled and focusable',
  parameters: {
    docs: {
      description: {
        story: buttonDisabledTabindexMarkdown,
      },
    },
  },
};

export const Busy: Story = {
  args: {
    'aria-busy': true,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    type: 'button',
  },
  name: 'busy',
  parameters: {
    // `cursor` cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'Button with `aria-busy` attribute.',
      },
    },
  },
};

export const BusyAndDisabled: Story = {
  args: {
    'aria-busy': true,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    disabled: true,
    type: 'button',
  },
  name: 'busy and disabled',
  parameters: {
    // `cursor` cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Button that is both busy and disabled. The busy cursor should have precedence over the disabled cursor.',
      },
    },
  },
};

export const Submit: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    type: 'submit',
  },
  name: 'busy Submit',
  parameters: {
    // `cursor` cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'Button with `type="submit"` attribute.',
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
