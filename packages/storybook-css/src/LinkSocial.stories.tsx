/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { LinkSocial } from '@utrecht/component-library-react';
import { LinkSocialProps } from '@utrecht/component-library-react/src/LinkSocial';
import readme from '@utrecht/components/link-social/README.md?raw';
import tokensDefinition from '@utrecht/components/link-social/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface LinkSocialStoryProps extends LinkSocialProps {
  icon: string;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
}

const LinkSocialStory = ({ icon, hover, focus, focusVisible, ...restProps }: LinkSocialStoryProps) => {
  const IconElement = icon;
  return (
    <LinkSocial
      className={clsx(
        hover && 'utrecht-link-social--hover',
        focus && 'utrecht-link-social--focus',
        focusVisible && 'utrecht-link-social--focus-visible',
      )}
      {...restProps}
    >
      <IconElement></IconElement>
    </LinkSocial>
  );
};

const meta = {
  title: 'CSS Component/Link to social media',
  id: 'css-link-social',
  component: LinkSocialStory,
  argTypes: {
    href: {
      description: 'Target URL',
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    'aria-label': {
      description: 'Icon Description',
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    icon: {
      description: 'Demonstrate the social media icons',
      table: {
        category: 'Demo',
      },
      control: { type: 'select' },
      options: [
        '',
        'utrecht-icon-facebook',
        'utrecht-icon-instagram',
        'utrecht-icon-linkedin',
        'utrecht-icon-twitter',
        'utrecht-icon-whatsapp',
        'utrecht-icon-x',
      ],
    },
  },
  args: {
    hover: false,
    href: '',
    icon: '',
    'aria-label': '',
    focusVisible: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-link-social',
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
} satisfies Meta<typeof LinkSocialStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://www.facebook.com/GemeenteUtrecht',
    icon: 'utrecht-icon-facebook',
    'aria-label': 'Facebook',
  },
  name: 'Facebook',
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  name: 'Hover',
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'FocusVisible',
};

export const DesignTokens = designTokenStory(meta);
