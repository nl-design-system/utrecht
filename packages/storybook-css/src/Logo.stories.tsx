/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo, LogoImage } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/logo-css/README.md?raw';
import accessibilityDocs from '@utrecht/logo-css/docs/accessibility.nl.md?raw';
import referencesDocs from '@utrecht/logo-css/docs/references.nl.md?raw';
import htmlDocs from '@utrecht/logo-css/docs/technology-html.nl.md?raw';
import imgDocs from '@utrecht/logo-css/docs/technology-img.nl.md?raw';
import wcagDocs from '@utrecht/logo-css/docs/wcag.nl.md?raw';
import tokensDefinition from '@utrecht/logo-css/src/tokens.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Logo',
  id: 'css-logo',
  component: Logo,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flogo',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-logo',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, accessibilityDocs, htmlDocs, imgDocs, referencesDocs, wcagDocs]),
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <LogoImage />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-logo` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
