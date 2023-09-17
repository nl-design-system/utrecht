/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Mark } from '@utrecht/component-library-react/dist/css-module';
import { MarkProps } from '@utrecht/component-library-react/src/Mark';
import readme from '@utrecht/components/mark/README.md?raw';
import tokensDefinition from '@utrecht/components/mark/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface MarkStoryProps extends MarkProps {
  element?: string;
  print?: boolean;
  windowsHighContrast?: boolean;
}
const MarkStory = ({ children, print, element, windowsHighContrast }: MarkStoryProps) => {
  const classNames = {
    'utrecht-mark--print': print,
    'utrecht-mark--windows-high-contrast': windowsHighContrast,
  };

  return element === 'span' ? (
    <span className={clsx('utrecht-mark', classNames)}>{children}</span>
  ) : (
    <Mark className={clsx(classNames)}>{children}</Mark>
  );
};

const meta = {
  title: 'CSS Component/Mark',
  id: 'css-mark',
  component: MarkStory,
  argTypes: {
    children: {
      description: 'Set the text content',
      control: 'text',
    },
    print: {
      description: 'Appearance in print',
      control: 'boolean',
    },
    windowsHighContrast: {
      description: 'Appearance in Windows High Contrast mode',
      control: 'boolean',
    },
    element: {
      description: 'HTML element',
      control: { type: 'select' },
      options: ['mark', 'span'],
    },
  },
  args: {
    children: '',
    print: false,
    windowsHighContrast: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-mark',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof MarkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup with the `<mark>` element. Styling via `utrecht-mark` class name.',
      },
    },
  },
};

export const Span: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    element: 'span',
  },
  name: 'Alternate markup',
  parameters: {
    docs: {
      description: {
        story: `With the \`<span>\` element the styling should work too.

Note: using the \`<mark>\` element is preferred, because it works better when CSS can not be loaded.`,
      },
    },
  },
};

export const Print: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    print: true,
  },
  name: 'Appearance in print',
  parameters: {
    docs: {
      description: {
        story:
          'Print styling for the mark component. This styling is automatic via a media query, but for testing it can be simulated using the `utrecht-mark--print` class name.',
      },
    },
  },
};

export const WindowsHighContrast: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    windowsHighContrast: true,
  },
  name: 'Windows High Contrast mode',
  parameters: {
    docs: {
      description: {
        story:
          'High contrast styling for the mark component. This styling is automatic via a media query, but for testing it can be simulated using the `utrecht-mark--windows-high-contrast` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
