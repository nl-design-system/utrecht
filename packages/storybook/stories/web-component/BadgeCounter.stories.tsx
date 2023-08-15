/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-counter/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const BadgeCounter = ({ textContent, locale, value, max }) => (
  <utrecht-badge-counter max={max} value={value} locale={locale}>
    {textContent}
  </utrecht-badge-counter>
);

const meta = {
  title: 'Web Component/Badge counter',
  id: 'web-component-badge-counter',
  component: BadgeCounter,
  argTypes: {
    textContent: {
      description: 'Text content',
      control: 'text',
    },
    value: {
      description: 'Value',
      control: 'number',
    },
    max: {
      description: 'Maximum',
      control: 'number',
    },
    locale: {
      description: 'Locale',
      control: 'text',
    },
  },
  args: {
    textContent: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-badge-counter',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BadgeCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 7,
    textContent: '7',
  },
};

export const NumberFormatUSEnglish: Story = {
  args: {
    textContent: 1234,
    value: 1234,
    locale: 'en-US',
  },
  name: 'Locale/US English',
};

export const NumberFormatFinnish: Story = {
  args: {
    textContent: 1234,
    value: 1234,
    locale: 'fi',
  },
  name: 'Locale/Finnish',
};

export const NumberFormatDutch: Story = {
  args: {
    textContent: 1234,
    value: 1234,
    locale: 'nl-NL',
  },
  name: 'Locale/Dutch',
};

export const MaximumBoundary: Story = {
  args: {
    max: 999,
    value: 1024,
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Maximum boundary',
};

export const FormattedTextContent: Story = {
  args: {
    textContent: '1,234',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Formatted text-content',
};

export const DoubleDigit: Story = {
  args: {
    value: 42,
    textContent: '42',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Double digit',
};

export const TripleDigit: Story = {
  args: {
    value: 316,
    textContent: '316',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Triple digit',
};

export const QuadrupleDigit: Story = {
  args: {
    value: 2148,
    textContent: '2148',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Quadruple digit',
};

export const DesignTokens = designTokenStory(meta);
