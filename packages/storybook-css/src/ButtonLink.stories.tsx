import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-link-css/README.md?raw';
import tokensDefinition from '@utrecht/button-link-css/src/tokens.json';
import { ButtonLink } from '@utrecht/component-library-react';
import type { ButtonLinkProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface ButtonLinkStoryProps extends ButtonLinkProps {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  keyboardSupport?: boolean;
  label?: string;
  IconAfter?: string;
  IconBefore?: string;
}

const ButtonLinkStory = ({
  active,
  children,
  hover,
  focus,
  focusVisible,
  keyboardSupport,
  placeholder,
  label,
  IconBefore,
  IconAfter,
  ...restProps
}: PropsWithChildren<ButtonLinkStoryProps>) => {
  return (
    <ButtonLink
      role={keyboardSupport ? 'button' : placeholder ? 'link' : undefined}
      placeholder={placeholder}
      className={clsx({
        'utrecht-button-link--active': active,
        'utrecht-button-link--hover': hover,
        'utrecht-button-link--focus': focus,
        'utrecht-button-link--focus-visible': focusVisible,
      })}
      {...restProps}
    >
      {IconBefore && <IconBefore />}
      {label && <span className="utrecht-button-link__label">{label}</span>}
      {children}
      {IconAfter && <IconAfter />}
    </ButtonLink>
  );
};

const meta = {
  title: 'CSS Component/Link that looks like a button',
  id: 'css-button-link',
  component: ButtonLinkStory,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    active: {
      description: 'Active',
      control: 'boolean',
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    children: {
      description: 'ButtonLink text',
      type: {
        name: 'string',
        required: true,
      },
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    keyboardSupport: {
      description: 'Supports activation using both Enter and Space',
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
    label: {
      description: 'ButtonLink text in label',
      type: {
        name: 'string',
        required: false,
      },
    },
    IconBefore: {
      description: 'Icon before label',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    IconAfter: {
      description: 'Icon after label',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    active: false,
    appearance: '',
    external: false,
    hover: false,
    href: '',
    focus: false,
    focusVisible: false,
    keyboardSupport: false,
    placeholder: false,
    children: '',
    label: '',
    IconBefore: '',
    IconAfter: '',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fbutton-link',
    tokensPrefix: 'utrecht-button-link',
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
} satisfies Meta<typeof ButtonLinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Start je aanvraag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button-link` class naam',
      },
    },
  },
};

export const PrimaryAction: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button-link--primary-action` class naam',
      },
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button-link--secondary-action` class naam',
      },
    },
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button-link--subtle` class naam',
      },
    },
  },
};

export const IconAfter: Story = {
  args: {
    href: 'https://example.com/',
    IconAfter: 'utrecht-icon-chevron-right',
    rel: 'next',
    label: 'Next',
  },
  name: 'Icon after label',
};

export const IconBefore: Story = {
  args: {
    href: 'https://example.com/',
    IconBefore: 'utrecht-icon-language',
    label: 'Taal kiezen',
  },
  name: 'Icon before label',
};

export const Next: Story = {
  args: {
    href: 'https://example.com/',
    IconAfter: 'utrecht-icon-chevron-right',
    rel: 'next',
    label: 'Next',
  },
  name: 'Next',
};

export const Previous: Story = {
  args: {
    href: 'https://example.com/',
    IconBefore: 'utrecht-icon-chevron-left',
    rel: 'prev',
    label: 'Previous',
  },
  name: 'Previous',
};

export const Placeholder: Story = {
  args: {
    children: 'Start je aanvraag',
    href: 'https://example.com/',
    placeholder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `utrecht-button-link--placeholder` class naam',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
