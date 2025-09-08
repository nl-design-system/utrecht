/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import readme from '@utrecht/code-block-css/README.md?raw';
import tokensDefinition from '@utrecht/code-block-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtCodeBlock } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Code block',
  id: 'web-component-code-block',
  component: UtrechtCodeBlock,
  argTypes: {
    children: {
      description: 'Content of the code block',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-code-block',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtCodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <title>NL Design System</title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <h1>NL Design System</h1>
  </body>
</html>
`,
  },
};

export const DesignTokens = designTokenStory(meta);
