/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { MultilineData } from '@utrecht/component-library-react';
import type { MultilineDataProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/multiline-data-css/README.md?raw';
import tokensDefinition from '@utrecht/multiline-data-css/src/tokens.json';
import { clsx } from 'clsx';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface MultilineDataStoryProps extends MultilineDataProps {
  Element?: string | 'data' | 'div' | 'pre' | 'span';
}
const MultilineDataStory = ({
  className,
  Element = 'pre',
  ...restProps
}: PropsWithChildren<MultilineDataStoryProps>) => {
  if (Element === 'pre') {
    return <MultilineData className={className} {...restProps} />;
  } else {
    return <Element className={clsx('utrecht-multiline-data', className)} {...restProps} />;
  }
};

const meta = {
  title: 'CSS Component/Multiline data',
  id: 'css-multiline-data',
  component: MultilineDataStory,
  argTypes: {
    children: {
      description: 'Set the text content',
      control: 'text',
    },
    Element: {
      description: 'HTML element',
      control: { type: 'select' },
      options: ['data', 'div', 'pre', 'span'],
    },
  },
  args: {
    children: '',
    Element: 'pre',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fmultiline-data',
    tokensPrefix: 'utrecht-multiline-data',
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
} satisfies Meta<typeof MultilineDataStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup with the `<pre>` element. Styling via `utrecht-multiline-data` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
