/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-link-css/README.md?raw';
import tokensDefinition from '@utrecht/button-link-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import { UtrechtButtonLink, UtrechtIconBestemmingsplan } from '@utrecht/web-component-library-react';
import React, { createElement } from 'react';
import { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface ButtonLinkStoryProps {
  appearance?: string;
  disabled?: boolean;
  download?: string;
  external?: boolean;
  href: string;
  placeholder?: boolean;
  target?: string;
  label?: string;
  icon?: string;
}

const ButtonLinkStory = ({
  appearance,
  children,
  download,
  href,
  external,
  placeholder,
  target,
  icon,
  label,
}: PropsWithChildren<ButtonLinkStoryProps>) => {
  const IconElement = icon;

  return (
    <UtrechtButtonLink
      appearance={appearance}
      download={download || undefined}
      external={external || undefined}
      href={href}
      placeholder={placeholder || undefined}
      target={target || undefined}
    >
      {IconElement && createElement(IconElement, { slot: 'icon' })}
      {label && <span slot="label">{label}</span>}
      {children}
    </UtrechtButtonLink>
  );
};

const meta = {
  title: 'Web Component/Button link',
  id: 'web-component-button-link',
  component: ButtonLinkStory,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    label: {
      description: 'Button text in label',
      control: 'text',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    download: {
      description: 'Filename for download target',
      type: {
        name: 'string',
        required: false,
      },
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    href: {
      description: 'Target URL',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'boolean',
    },
    target: {
      description: 'Target window',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
  args: {
    disabled: false,
    external: false,
    children: '',
    placeholder: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonLinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Read more...',
    href: 'https://example.com/',
  },
};

export const PrimaryAction: Story = {
  args: {
    appearance: 'primary-action-button',
    children: 'Read more...',
    href: 'https://example.com/',
  },
  name: 'Primary action',
};

export const SecondaryAction: Story = {
  args: {
    appearance: 'secondary-action-button',
    children: 'Read more...',
    href: 'https://example.com/',
  },
  name: 'Secondary action button',
};

export const SubtleButton: Story = {
  args: {
    appearance: 'subtle-button',
    children: 'Read more...',
    href: 'https://example.com/',
  },
  name: 'Subtle button',
};

export const External: Story = {
  args: {
    external: true,
    href: 'https://example.com/sign-up/',
    children: 'Sign up',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: true,
    href: 'https://example.com/premium/',
    children: 'Premium feature (locked)',
  },
};

export const Download: Story = {
  args: {
    children: 'Voorbeeldlink',
    download: 'example.html',
    href: './',
  },
};

export const Icon: Story = {
  args: {
    label: 'Read more...',
    icon: 'utrecht-icon-bestemmingsplan',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Do this instead: use the `slot="icon"` attribute on your icon and use the `slot="label"` attribute on your label.',
      },
    },
  },
};

export const DiscouragedIcon: Story = {
  args: {
    children: (
      <>
        <UtrechtIconBestemmingsplan /> Read <strong>more</strong>...
      </>
    ),
  },
  name: 'Discouraged method: no slot for the icon',
  parameters: {
    docs: {
      description: {
        story:
          'Do not do this! When you have an icon, it is better to use the `icon` slot for the label. It works fine when the label only contains plain text. You will have unexpected results when the label contains an element. Between each element a space will be created because of the `column-gap` design token.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
