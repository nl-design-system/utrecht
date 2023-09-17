/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading/README.md?raw';
import tokensDefinition from '@utrecht/components/heading/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtHeading } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from '../components/util';

interface HeadingStoryProps {
  level?: number;
}

const HeadingStory = ({ children, level }: PropsWithChildren<HeadingStoryProps>) => (
  <UtrechtHeading level={level}>{children}</UtrechtHeading>
);

const meta = {
  title: 'Web Component/Heading',
  id: 'web-component-heading',
  component: HeadingStory,
  argTypes: {
    level: {
      description: 'Heading level',
      type: { name: 'number', required: true },
    },
    children: {
      description: 'Set the content of the heading',
      control: 'text',
    },
  },
  args: {
    children: '',
    level: 1,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-heading',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof HeadingStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Heading4: Story = {
  args: {
    level: 4,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Heading5: Story = {
  args: {
    level: 5,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Heading6: Story = {
  args: {
    level: 6,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Heading11: Story = {
  args: {
    level: 11,
    children: 'These go to eleven!',
  },
  parameters: {
    docs: {
      description: {
        story: `Heading levels of 7 and greater are not possible to achieve with HTML elements. It is possible to set \`aria-level="7"\`, but there are various disadvantages. Not all screen readers support it, and having headings at this level might be bad for screen reader user experience.

The web component implementation must decide to use \`aria-level="7"\`, to cap the level at the highest supported level, or to not render a \`role="header"\` element at all.`,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
