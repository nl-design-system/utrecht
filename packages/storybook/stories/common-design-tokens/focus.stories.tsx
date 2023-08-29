/* @license CC0-1.0 */

import { Meta } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/common/focus/README.md?raw';
import tokensDefinition from '@utrecht/components/common/focus/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Utrecht/Design tokens/Focus',
  id: 'design-tokens-focus',
  parameters: {
    tokensPrefix: 'utrecht-focus',
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
} satisfies Meta<typeof Heading1>;

export default meta;

export const DesignTokens = designTokenStory(meta);
