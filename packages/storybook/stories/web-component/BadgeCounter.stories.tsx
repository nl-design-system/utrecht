/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-counter/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtBadgeCounter } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from '../components/util';

const BadgeCounterStory = ({
  children,
  locale,
  value,
  max,
}: PropsWithChildren<{ locale?: string; value?: string | number; max?: number }>) => (
  <UtrechtBadgeCounter max={max} value={value} locale={locale}>
    {children}
  </UtrechtBadgeCounter>
);

const meta = {
  title: 'Web Component/Badge counter',
  id: 'web-component-badge-counter',
  component: BadgeCounterStory,
  argTypes: {
    children: {
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
    children: '',
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
} satisfies Meta<typeof BadgeCounterStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 7,
    children: '7',
  },
};

export const NumberFormatUSEnglish: Story = {
  args: {
    children: 1234,
    value: 1234,
    locale: 'en-US',
  },
  name: 'Locale/US English',
};

export const NumberFormatFinnish: Story = {
  args: {
    children: 1234,
    value: 1234,
    locale: 'fi',
  },
  name: 'Locale/Finnish',
};

export const NumberFormatDutch: Story = {
  args: {
    children: 1234,
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
    children: '1,234',
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
    children: '42',
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
    children: '316',
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
    children: '2148',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Quadruple digit',
};

export const DesignTokens = designTokenStory(meta);
