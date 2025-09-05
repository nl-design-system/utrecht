/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import readme from '../../../components/favicon/README.md?raw';

const Favicon = ({ href }) => <link rel="icon" href={href} />;

const meta = {
  title: 'HTML Component/Favicon',
  id: 'html-favicon',
  component: Favicon,
  decorators: [htmlContentDecorator],
  argTypes: {
    href: {
      description: 'Location of the favicon image',
      control: 'text',
    },
  },
  args: {
    href: '',
  },
  tags: ['autodocs'],
  parameters: {
    // Favicon is not visible in Chromatic
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-favicon',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Favicon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/favicon.ico',
  },
  parameters: {
    docs: {
      description: {
        story: `Place the \`<link rel="icon">\` element reference to the favicon image in the \`<head>\` section of your HTML page.

Ideally, the favicon image is available under the \`/favicon.ico\` URL in the root of your host, to make it work even on pages without the \`<link>\` element reference to the image.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
