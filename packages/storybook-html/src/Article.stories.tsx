/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/article-css/README.md?raw';
import tokensDefinition from '@utrecht/article-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const Article = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <article {...restProps}>{children}</article>
);

const meta = {
  title: 'HTML Component/Article',
  id: 'html-article',
  component: Article,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the article',
    },
    hidden,
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
    tokensPrefix: 'utrecht-article',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <h1>Lorem ipsum</h1>,
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<article>` element.',
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
