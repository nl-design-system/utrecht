import { Meta, StoryObj } from '@storybook/react';
import { Icon, Paragraph } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/link-button-css/README.md?raw';
import tokensDefinition from '@utrecht/link-button-css/src/tokens.json';
import React from 'react';
import { LinkButtonStory } from './LinkButton';
import { designTokenStory } from './design-token-story';

const paragraphDecorator = (Story) => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. {Story()} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
);

const meta = {
  title: 'CSS Component/Button that looks like a link',
  id: 'css-link-button',
  component: LinkButtonStory,
  args: {
    active: false,
    disabled: false,
    focus: false,
    focusVisible: false,
    hover: false,
    inline: false,
    children: '',
    pressed: false,
  },
  argTypes: {
    active: {
      description: 'Active',
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
    children: {
      description: 'Button content',
      control: 'text',
    },
    pressed: {
      description: 'Pressed',
      control: { type: 'select' },
      options: ['', false, true],
      type: {
        required: false,
      },
    },
    label: {
      description: 'LinkButton text in label',
      type: {
        name: 'string',
        required: false,
      },
    },
    IconBefore: {
      description: 'Icon before label',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    IconAfter: {
      description: 'Icon after label',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flink-button',
    tokensPrefix: 'utrecht-link-button',
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
} satisfies Meta<typeof LinkButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Terug',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button-link` class naam.',
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
        story:
          'Styling met de `.utrecht-link-button--hover` class naam of als state op link met `.utrecht-link-button:hover`.',
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
        story:
          'Styling met de `.utrecht-link-button--focus` class naam of als state op link met `.utrecht-link-button:focus`.',
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
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'Styling met de `.utrecht-link-button--focus-visible` class naam of als status op `.utrecht-link-button:focus-visible`.',
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
        story:
          'Styling met de `.utrecht-link-button--active` class naam of als status op `.utrecht-link-button:active`.',
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
        story: 'Styling met de `.utrecht-link-button--pressed` class naam.',
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
        story: 'Styling met de `.utrecht-link-button--disabled` class naam.',
      },
    },
  },
};

export const DisabledHover: Story = {
  args: {
    ...Default.args,
    disabled: true,
    hover: true,
  },
  name: 'Disabled and hover',
};

export const DisabledFocus: Story = {
  args: {
    ...Default.args,
    disabled: true,
    focus: true,
  },
  name: 'Disabled and focus',
};

export const DisabledFocusVisible: Story = {
  args: {
    ...Default.args,
    disabled: true,
    tabIndex: 0,
    focus: true,
    focusVisible: true,
  },
  name: 'Disabled with focus-visible',
};

export const DisabledActive: Story = {
  args: {
    ...Default.args,
    active: true,
    disabled: true,
  },
  name: 'Disabled and active',
};

export const IconAfter: Story = {
  args: {
    label: 'Voorbeeldlink',
    IconAfter: 'utrecht-icon-chevron-right',
  },
  name: 'Icon after label',
};

export const IconBefore: Story = {
  args: {
    IconBefore: 'utrecht-icon-language',
    label: 'Voorbeeldlink',
  },
  name: 'Icon before label',
};

export const Inline: Story = {
  args: {
    children: 'Edit',
    inline: true,
  },
  name: 'Inline',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-link-button--inline` class name.',
      },
    },
  },
};

export const InlineIcon: Story = {
  args: {
    IconBefore: 'utrecht-icon-chevron-left',
    label: 'Edit',
    inline: true,
  },
  name: 'Inline with icon',
};

export const InlineText: Story = {
  args: {
    children: [
      <Icon>
        <svg width="48" height="48" viewBox="0 0 48 48">
          <path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"></path>
        </svg>
      </Icon>,
      'Citation needed',
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z" />
        </svg>
      </Icon>,
    ],
    inline: true,
  },
  name: 'Inline in text',
  decorators: [paragraphDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-link-button--inline` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
