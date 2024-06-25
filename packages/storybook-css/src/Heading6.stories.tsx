/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading6 } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/heading-6-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-6-css/src/tokens.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Heading/Heading 6',
  id: 'css-heading-6',
  component: Heading6,
  argTypes: {
    children: {
      description: 'Tekst van de heading.',
      control: 'text',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fheading',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=153-1039&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=153-1039&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/heading-6',
    tokensPrefix: 'utrecht-heading-6',
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
} satisfies Meta<typeof Heading6>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-heading-6` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
