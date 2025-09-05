/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/paragraph-css/README.md?raw';
import tokensDefinition from '@utrecht/paragraph-css/src/tokens.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface ParagraphStoryProps extends HTMLAttributes<HTMLParagraphElement> {
  lead?: boolean;
  small?: boolean;
}

const Paragraph = ({ children, lead, small, ...restProps }: PropsWithChildren<ParagraphStoryProps>) => (
  <p className={lead ? 'lead' : undefined} {...restProps}>
    {small ? <small>{children}</small> : children}
  </p>
);

const meta = {
  title: 'HTML Component/Paragraph',
  id: 'html-paragraph',
  component: Paragraph,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the paragraph',
    },
    hidden,
    lead: {
      description: 'Lead paragraph',
      control: 'boolean',
    },
    small: {
      description: 'Small print',
      control: 'boolean',
    },
  },
  args: {
    children: '',
    hidden: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-paragraph',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<p>` element.',
      },
    },
    status: {
      type: 'ALPHA',
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
