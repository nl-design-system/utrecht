/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/url/README.md?raw';
import tokensDefinition from '@utrecht/components/url/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { transformSource } from '../../config/transformSource';
import { Link } from './Link';
import { URLValue } from './URLValue';
import '@utrecht/components/url/css/index.scss';

const meta = {
  title: 'CSS Component/URL Value 2',
  id: 'css-value-url',
  component: URLValue,
  argTypes: {
    url: {
      description: 'URL',
      control: 'text',
      defaultValue: '',
    },
  },
  args: {
    url: 'https://example.com/',
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-value-url',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ url }) => <URLValue>{url}</URLValue>,
} as Meta<typeof URLValue>;

export default meta;

export const Default: StoryObj<typeof URLValue> = {
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'URL value',
};

export const URLLink: StoryObj<typeof URLValue> = {
  parameters: {
    docs: {
      transformSource,
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: ({ url }) => (
    <Link href={url}>
      <URLValue>{url}</URLValue>
    </Link>
  ),
  name: 'URL that is a link',
};
