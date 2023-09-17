/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/separator/README.md?raw';
import tokensDefinition from '@utrecht/components/separator/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const SeparatorDiv = () => <div role="separator" aria-orientation="horizontal" className="utrecht-separator"></div>;

const SeparatorStory = ({ element }) => (element === 'div' ? <SeparatorDiv /> : <Separator />);

const meta = {
  title: 'CSS Component/Separator',
  id: 'css-separator',
  component: SeparatorStory,
  args: {},
  parameters: {
    tokensPrefix: 'utrecht-separator',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SeparatorStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Markup with the `<hr>` element, styling via `utrecht-separator` class name. For horizontal separators, `<hr>` is the preferred markup.',
      },
    },
  },
};

export const SeparatorDivSupport: Story = {
  args: {
    element: 'div',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Markup with a `<div>` element, with additional attributes to give the correct ARIA role. Styling via `utrecht-separator` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
