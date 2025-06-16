/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/link-css/README.md?raw';
import tokensDefinition from '@utrecht/link-css/src/tokens.json';
import { UtrechtIconBestemmingsplan, UtrechtLink, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Link',
  id: 'web-component-link',
  component: UtrechtLink,
  argTypes: {
    children: {
      description: 'Link text',
      type: {
        name: 'string',
        required: true,
      },
    },
    label: {
      description: 'Link text in label',
      control: 'text',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    download: {
      description: 'Filename for download target',
      type: {
        name: 'string',
        required: false,
      },
    },
    href: {
      description: 'Target URL',
      type: {
        name: 'string',
        required: true,
      },
    },
    target: {
      description: 'Target window',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Voorbeeldlink',
    href: 'https://example.com/',
  },
};

export const Download: Story = {
  args: {
    children: 'Voorbeeldlink',
    download: 'example.html',
    href: './',
  },
};

export const Icon: Story = {
  args: {
    label: 'Read more...',
    icon: 'utrecht-icon-bestemmingsplan',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Do this instead: use the `slot="icon"` attribute on your icon and use the `slot="label"` attribute on your label.',
      },
    },
  },
};

export const DiscouragedIcon: Story = {
  args: {
    children: (
      <>
        <UtrechtIconBestemmingsplan /> Read <strong>more</strong>...
      </>
    ),
  },
  name: 'Discouraged method: no slot for the icon',
  parameters: {
    docs: {
      description: {
        story:
          'Do not do this! When you have an icon, it is better to use the `icon` slot for the label. It works fine when the label only contains plain text. You will have unexpected results when the label contains an element. Between each element a space will be created because of the `column-gap` design token.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
