/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/logo-button/README.md?raw';
import tokensDefinition from '@utrecht/components/logo-button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { LogoButton, LogoButtonProps } from './LogoButton';
import { designTokenStory } from './design-token-story';

const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

interface LogoButtonStoryProps extends LogoButtonProps {
  logo: string;
}

const LogoButtonStory = ({ logo, ...restProps }: LogoButtonStoryProps) => {
  const LogoCustomElement = `utrecht-${logo}-logo`;

  return <LogoButton logo={<LogoCustomElement></LogoCustomElement>} {...restProps}></LogoButton>;
};

const meta = {
  title: 'CSS Component/Logo button',
  id: 'css-logo-button',
  component: LogoButtonStory,
  argTypes: {
    children: {
      description: 'Button text',
      control: 'text',
    },
    logo: {
      description: 'Type logo',
      control: { type: 'select' },
      options: {
        DigiD: 'digid',
        eIDAS: 'eidas',
        eHerkenning: 'eherkenning',
      },
    },
  },
  args: {
    children: '',
    logo: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-logo-button',
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
} satisfies Meta<typeof LogoButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Log in using DigiD',
    logo: 'digid',
  },
  name: 'DigiD logo button',
  parameters: {
    docs: {
      description: {
        story: `Styling via de \`utrecht-logo-button\` class name.

De button tekst moet duidelijk maken wat in het logo staat, zodat de button ook duidelijk is als je het logo niet kan zien.`,
      },
    },
  },
};

export const EherkenningLogoButton: Story = {
  args: {
    children: 'Log in using eHerkenning',
    logo: 'eherkenning',
  },
  name: 'eHerkenning logo button',
  parameters: {
    // This story is available for convenience, but the individual logos should be tested separately
    chromatic: { disableSnapshot: true },
  },
};

export const EidasLogoButton: Story = {
  args: {
    children: 'Log in using eIDAS',
    logo: 'eidas',
  },
  name: 'eIDAS logo button',
  parameters: {
    // This story is available for convenience, but the individual logos should be tested separately
    chromatic: { disableSnapshot: true },
  },
};

export const RightToLeft: Story = {
  args: {
    children: 'تسجيل الدخول باستخدام DigiD',
    logo: 'digid',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'In right-to-left scripts, the logo should be before the the button. The logo should be on the right, not on the left.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
