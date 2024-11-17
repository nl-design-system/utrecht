/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';
import readme from '../../../components/value-datetime/README.md?raw';

const ValueDateTimeStory = ({ ...restProps }) => <time {...restProps} />;

const meta = {
  title: 'CSS Component/Date and Time Value',
  id: 'css-value-datetime',
  component: ValueDateTimeStory,
  argTypes: {
    dateTime: {
      description: 'ISO 8601 date or datetime value',
      type: {
        name: 'string',
        required: false,
      },
    },
    children: {
      description: 'Value',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fvalue-date-time',
    tokensPrefix: 'utrecht-value-datetime',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ValueDateTimeStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: new Intl.DateTimeFormat('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(Date.parse('2001-01-01')),
    lang: 'nl-NL',
    dateTime: '2001-01-01',
  },
};

export const DesignTokens = designTokenStory(meta);
