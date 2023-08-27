/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/form/README.md?raw';
import tokensDefinition from '@utrecht/components/form/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { PropsWithChildren, ReactNode } from 'react';
import { designTokenStory } from './util';

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
