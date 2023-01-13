import { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/button-link/README.md';
import tokensDefinition from '@utrecht/components/button-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Link that looks like a button',
  id: 'react-button-link',
  component: ButtonLink,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-button-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    external: {
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      name: 'placeholder',
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    href: {
      type: 'string',
      table: {
        category: 'API',
        defaultValue: { summary: '', required: true },
      },
    },
  },
} as Meta<typeof ButtonLink>;

export default meta;

const Template: StoryObj<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Read more...',
  href: '#',
};

export const External = Template.bind({});

External.args = {
  children: 'Read more...',
  href: 'https://example.com/',
  external: true,
};

export const PlaceholderForLink = Template.bind({});

PlaceholderForLink.args = {
  children: 'Read more...',
  href: '#',
  placeholder: true,
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Read more...',
  href: '#',
  appearance: 'primary-action-button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Read more...',
  href: '#',
  appearance: 'secondary-action-button',
};

export const Subtle = Template.bind({});

Subtle.args = {
  children: 'Read more...',
  href: '#',
  appearance: 'subtle-button',
};

export const Hover = Template.bind({});

Hover.args = {
  children: 'Read more...',
  href: '#',
};

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.args = {
  children: 'Read more...',
  href: '#',
};

Focus.parameters = {
  pseudo: { focus: true },
};

export const Active = Template.bind({});

Active.args = {
  children: 'Read more...',
  href: '#',
};

Active.parameters = {
  pseudo: { active: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.args = {
  children: 'Read more...',
  href: '#',
};

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const DesignTokens = designTokenStory(meta);
