/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/digid-button-css/README.md?raw';
import tokensDefinition from '@utrecht/digid-button-css/src/tokens.json';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

interface DigidButtonProps {
  label: string;
}

const DigidButton = ({ label, children }: PropsWithChildren<DigidButtonProps>) => (
  <div className="utrecht-digid-button">
    <utrecht-digid-logo class="utrecht-digid-button__logo"></utrecht-digid-logo>
    <button
      className="utrecht-digid-button__button utrecht-button utrecht-button--primary-action"
      type="button"
      aria-label={label}
    >
      {children}
    </button>
  </div>
);

const meta = {
  title: 'CSS Component/DigiD Button',
  id: 'css-digid-button',
  component: DigidButton,
  argTypes: {
    label: {
      description: 'Button label',
      control: 'text',
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
  },
  args: {
    label: '',
    children: '',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fdigid-button',
    tokensPrefix: 'utrecht-digid-button',
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
} satisfies Meta<typeof DigidButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Log in using DigiD',
    children: 'Log in',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-digid-button` class name.',
      },
    },
  },
};

export const RightToLeft: Story = {
  args: {
    label: 'تسجيل الدخول باستخدام DigiD',
    children: 'تسجيل الدخول',
  },
  decorators: [arabicDecorator],
  name: 'Right to left',
};

export const DesignTokens = designTokenStory(meta);
