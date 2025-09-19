/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/top-task-link-css/README.md?raw';
import tokensDefinition from '@utrecht/top-task-link-css/src/tokens.json';
import clsx from 'clsx';
import React from 'react';
import { ToptaskLink } from './ToptaskLink';
import type { ToptaskLinkProps } from './ToptaskLink';
import { designTokenStory } from './design-token-story';

interface ToptaskLinkStoryProps extends ToptaskLinkProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  icon?: string;
}

const ToptaskLinkStory = ({
  children,
  className,
  focus,
  focusVisible,
  hover,
  icon,
  ...restProps
}: ToptaskLinkStoryProps) => {
  const IconElement = icon;
  return (
    <ToptaskLink
      {...restProps}
      className={clsx({
        'utrecht-toptask-link--hover': hover,
        'utrecht-toptask-link--focus': focus,
        'utrecht-toptask-link--focus-visible': focusVisible,
        className,
      })}
    >
      {IconElement && <span className="utrecht-toptask-link__icon">{<IconElement></IconElement>}</span>}
      {children}
    </ToptaskLink>
  );
};

const meta = {
  title: 'CSS Component/Toptask Link',
  id: 'css-toptask-link',
  component: ToptaskLinkStory,
  argTypes: {
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    children: {
      description: 'Link text',
      control: 'text',
    },
  },
  args: {
    focus: false,
    focusVisible: false,
    href: '',
    hover: false,
    children: '',
    icon: 'null',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftop-task-link',
    tokensPrefix: 'utrecht-toptask-link',
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
} satisfies Meta<typeof ToptaskLinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    icon: 'utrecht-icon-afval',
    children: 'Afval',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-toptask-link` class name.',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  name: 'Hover',
  parameters: {
    docs: {
      description: {
        story: 'Simulate styling via `utrecht-toptask-link--hover` class name.',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Simulate styling via `utrecht-toptask-link--focus` class name.',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'Simulate styling via `utrecht-toptask-link--focus` and `utrecht-toptask-link--focus-visible` class names.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
