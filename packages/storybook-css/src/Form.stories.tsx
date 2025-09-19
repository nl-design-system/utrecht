/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-css/README.md?raw';
import tokensDefinition from '@utrecht/form-css/src/tokens.json';
import React, { PropsWithChildren, ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

type FormStoryProps = PropsWithChildren<{ element?: string | 'div' }>;

const FormStory = ({ children, element }: FormStoryProps): ReactNode =>
  element === 'div' ? (
    <div className="utrecht-form">{children}</div>
  ) : (
    <form className="utrecht-form" method="POST" action=".">
      {children}
    </form>
  );

const meta = {
  title: 'CSS Component/Form',
  id: 'css-form',
  component: FormStory,
  argTypes: {
    children: {
      description: 'Content of the form.',
      control: 'text',
    },
  },
  args: {
    children: '',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fform',
    tokensPrefix: 'utrecht-form',
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
} satisfies Meta<typeof FormStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <h1>Lorem ipsum</h1>,
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
