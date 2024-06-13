import { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react';
import { ButtonLinkProps } from '@utrecht/component-library-react/src/ButtonLink';
import readme from '@utrecht/components/button-link/README.md?raw';
import tokensDefinition from '@utrecht/components/button-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React, { createElement } from 'react';
import { designTokenStory } from './util';

interface ButtonLinkStoryProps extends ButtonLinkProps {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  textContent?: string;
  iconBefore?: string;
  iconAfter?: string;
}

const ButtonLinkStory = ({
  active,
  hover,
  focus,
  focusVisible,
  textContent,
  iconBefore,
  iconAfter,
  ...props
}: ButtonLinkStoryProps) => {
  return (
    <ButtonLink
      {...props}
      className={clsx(
        active && 'utrecht-button-link--active',
        hover && 'utrecht-button-link--hover',
        focus && 'utrecht-button-link--focus',
        focusVisible && 'utrecht-button-link--focus-visible',
      )}
    >
      {iconBefore && createElement(iconBefore)}
      {textContent}
      {iconAfter && createElement(iconAfter)}
    </ButtonLink>
  );
};

const meta = {
  title: 'CSS Component/Link that looks like a button',
  id: 'css-button-link',
  component: ButtonLink,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    active: {
      description: 'Active',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
    },
    href: {
      description: 'Target URL',
      type: {
        name: 'string',
        required: true,
      },
    },
    placeholder: {
      description: 'Placeholder for a link',
      control: 'boolean',
    },
    textContent: {
      description: 'Link text',
      type: {
        name: 'string',
        required: true,
      },
    },
    iconBefore: {
      description: 'Icon before textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    iconAfter: {
      description: 'Icon after textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    active: false,
    appearance: '',
    external: false,
    hover: false,
    href: 'https://example.com/',
    focus: false,
    focusVisible: false,
    placeholder: false,
    textContent: 'Start je aanvraag',
    iconBefore: '',
    iconAfter: '',
  },
  tags: ['autodocs'],
  render: ButtonLinkStory,
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-button-link',
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
  parameters: {
    docs: {
      story: `
Styling met de \`.utrecht-button-link\` class name:`,
    },
  },
};

export const PrimaryAction: Story = {
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    docs: {
      story: `
Styling met de \`.utrecht-button-link\` en \`.utrecht-button-link--primary-action\` class names`,
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    docs: {
      story: `
Styling met de \`.utrecht-button-link\` en \`.utrecht-button-link--secondary-action\` class names`,
    },
  },
};

export const Subtle: Story = {
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    docs: {
      story: `
Styling met de \`.utrecht-button-link\` en \`.utrecht-button-link--subtle\` class names`,
    },
  },
};

export const Placeholder: Story = {
  parameters: {
    docs: {
      title: 'Placeholder for a button link: link die er uit ziet als disabled button',
      story: `Styling met de \`.utrecht-button-link--placeholder\` class name`,
    },
  },
};

export const IconAfter: Story = {
  args: {
    iconAfter: 'utrecht-icon-arrow',
    textContent: 'Next',
  },
};

export const IconBefore: Story = {
  args: {
    iconBefore: 'utrecht-icon-checkmark',
    textContent: 'Versturen',
  },
};

export const DesignTokens = designTokenStory(meta);
