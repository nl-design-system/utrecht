import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/alert-css/README.md?raw';
import tokensDefinition from '@utrecht/alert-css/dist/tokens.mjs';
import { Alert, AlertProps, Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import iconSet from '@utrecht/icon/dist/iconset.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

interface AlertStoryProps extends AlertProps {
  icon?: string;
}

const AlertStory = ({ children, type, role, icon, ...props }: AlertStoryProps) => {
  const IconElement = icon;
  return (
    <Alert icon={IconElement ? <IconElement /> : null} type={type} role={role}>
      {children}
    </Alert>
  );
};

const meta = {
  title: 'React Component/Alert',
  id: 'react-alert',
  component: AlertStory,
  argTypes: {
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
    },
    role: {
      description: 'Role',
      control: { type: 'string' },
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    icon: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof AlertStory>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Info: Story = {
  args: {
    ...Default.args,
    type: 'info',
  },
};

export const OK: Story = {
  args: {
    ...Default.args,
    type: 'ok',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    type: 'error',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    type: 'info',
    icon: 'utrecht-icon-loupe',
  },
};

export const DesignTokens = designTokenStory(meta);
