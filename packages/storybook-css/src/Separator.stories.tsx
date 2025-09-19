/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/separator-css/README.md?raw';
import tokensDefinition from '@utrecht/separator-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const SeparatorDiv = () => <div role="separator" aria-orientation="horizontal" className="utrecht-separator"></div>;

const SeparatorStory = ({ element }: { element?: 'div' }) => (element === 'div' ? <SeparatorDiv /> : <Separator />);

const meta = {
  title: 'CSS Component/Separator',
  id: 'css-separator',
  component: SeparatorStory,
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fseparator',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=843-1098&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=843-1098&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/separator',
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
  args: {
    element: undefined,
  },
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
