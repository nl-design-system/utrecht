/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/alert-css/README.md?raw';
import contentDocs from '@utrecht/alert-css/docs/content.nl.md?raw';
import relatedComponentsDocs from '@utrecht/alert-css/docs/related-components.nl.md?raw';
import technologyHtmlDocs from '@utrecht/alert-css/docs/technology-html.nl.md?raw';
import usageDocs from '@utrecht/alert-css/docs/usage.nl.md?raw';
import wcagDocs from '@utrecht/alert-css/docs/wcag.nl.md?raw';
import tokensDefinition from '@utrecht/alert-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { Alert, AlertProps } from './Alert';
import { Heading2 } from './Heading2';
import { Paragraph } from './Paragraph';
import { designTokenStory } from './design-token-story';

interface AlertStoryProps extends AlertProps {
  icon?: string;
}

const AlertStory = ({ children, type, role, icon, ...props }: AlertStoryProps) => {
  const IconElement = icon;
  return (
    <Alert icon={IconElement ? <IconElement /> : null} type={type} role={role}>
      {children}
    </Alert>
  );
};

const meta = {
  title: 'CSS Component/Alert',
  id: 'css-alert',
  component: AlertStory,
  argTypes: {
    children: {
      description: 'HTML content of the alert',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
    },
    role: {
      description: 'Role',
      control: { type: 'string' },
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Falert',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1179-3892&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=1194-3949&t=LeV3GnPMhhdI2rZ3-4',
    nldesignsystem: 'https://nldesignsystem.nl/alert',
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, usageDocs, relatedComponentsDocs, contentDocs, technologyHtmlDocs, wcagDocs]),
      },
    },
  },
} satisfies Meta<typeof AlertStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    type: 'info',
  },
};

export const OK: Story = {
  args: {
    type: 'ok',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    type: 'info',
    icon: 'utrecht-icon-loupe',
  },
};

export const DesignTokens = designTokenStory(meta);
