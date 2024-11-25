import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/code-block-css/README.md?raw';
import tokensDefinition from '@utrecht/code-block-css/dist/tokens.mjs';
import { CodeBlock } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Code block',
  id: 'react-code-block',
  component: CodeBlock,
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
  parameters: {
    tokensPrefix: 'utrecht-code-block',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
