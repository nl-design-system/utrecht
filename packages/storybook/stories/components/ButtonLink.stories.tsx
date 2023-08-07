/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button-link/README.md?raw';
import tokensDefinition from '@utrecht/components/button-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/alert/css/index.scss';

const defaultArgs = {
  active: false,
  appearance: '',
  external: false,
  hover: false,
  href: '',
  focus: false,
  focusVisible: false,
  keyboardSupport: false,
  placeholder: false,
  textContent: '',
  iconBefore: '',
  iconAfter: '',
};

const ButtonLink = ({
  active = defaultArgs.active,
  appearance = defaultArgs.appearance,
  external = defaultArgs.external,
  hover = defaultArgs.hover,
  href = defaultArgs.href,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  placeholder = defaultArgs.placeholder,
  textContent = defaultArgs.textContent,
  keyboardSupport = defaultArgs.keyboardSupport,
  iconBefore = defaultArgs.iconBefore,
  iconAfter = defaultArgs.iconAfter,
}) => {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;

  return (
    <a
      role={keyboardSupport ? 'button' : placeholder ? 'link' : undefined}
      href={placeholder ? undefined : href}
      className={clsx('utrecht-button-link', 'utrecht-button-link--html-a', {
        'utrecht-button-link--active': active,
        'utrecht-button-link--hover': hover,
        'utrecht-button-link--focus': focus,
        'utrecht-button-link--focus-visible': focusVisible,
        'utrecht-button-link--primary-action': appearance === 'primary-action-button',
        'utrecht-button-link--secondary-action': appearance === 'secondary-action-button',
        'utrecht-button-link--subtle': appearance === 'subtle-button',
        'utrecht-button-link--placeholder': placeholder,
      })}
      aria-disabled={placeholder ? 'true' : undefined}
      rel={external ? 'external noopener noreferrer' : undefined}
    >
      {iconBefore && <IconBefore />}
      {textContent}
      {iconAfter && <IconAfter />}
    </a>
  );
};

const meta = {
  title: 'CSS Component/Link that looks like a button',
  id: 'css-button-link',
  component: ButtonLink,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    placeholder: {
      description: 'Placeholder for a link',
      control: 'boolean',
    },
    href: {
      description: 'Link URL',
      control: 'text',
    },
  },
  args: {
    textContent: 'Start je aanvraag',
    href: 'https://example.com/',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-button-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
  args: {
    textContent: 'Read more...',
    href: 'https://example.com/',
    external: true,
  },
};

export const PrimaryButtonLink: Story = {
  name: 'Primary',
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const PlaceholderForLink: Story = {
  args: {
    ...Default.args,
    placeholder: true,
  },
};

const beforeArgs = {
  active: false,
  appearance: '',
  external: false,
  hover: false,
  href: 'https://example.com/',
  focus: false,
  focusVisible: false,
  keyboardSupport: false,
  placeholder: false,
  textContent: '',
  iconBefore: 'utrecht-icon-arrow',
  iconAfter: '',
};

export const IconBefore: Story = {
  title: 'CSS Component/Link that looks like a button/Icon/Before',
  id: 'css-button-link--icon',
  args: {
    ...Default.args,
    textContent: 'Versturen',
  },
  argTypes: {
    ...Default.argTypes,
    iconBefore: {
      description: 'Icon before textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    iconAfter: {
      description: 'Icon after textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  render: (args) => {
    const IconBefore = beforeArgs.iconBefore;
    const IconAfter = beforeArgs.iconAfter;

    return (
      <a href={beforeArgs.href} className={clsx('utrecht-button-link', 'utrecht-button-link--html-a')}>
        {beforeArgs.iconBefore && <IconBefore />}
        {args.textContent}
        {beforeArgs.iconAfter && <IconAfter />}
      </a>
    );
  },
};

const afterArgs = {
  ...beforeArgs,
  iconBefore: '',
  iconAfter: 'utrecht-icon-arrow',
};

export const IconAfter: Story = {
  title: 'CSS Component/Link that looks like a button/Icon/Before',
  id: 'css-button-link--icon',
  args: {
    ...Default.args,
    textContent: 'Next',
  },
  argTypes: {
    ...Default.argTypes,
    iconBefore: {
      description: 'Icon before textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    iconAfter: {
      description: 'Icon after textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  render: (args) => {
    const IconBefore = afterArgs.iconBefore;
    const IconAfter = afterArgs.iconAfter;

    return (
      <a href={afterArgs.href} className={clsx('utrecht-button-link', 'utrecht-button-link--html-a')}>
        {afterArgs.iconBefore && <IconBefore />}
        {args.textContent}
        {afterArgs.iconAfter && <IconAfter />}
      </a>
    );
  },
};

export const DesignTokens = designTokenStory(meta);
