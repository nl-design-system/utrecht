/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/toptask-nav/README.md?raw';
import tokensDefinition from '@utrecht/components/toptask-nav/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { ToptaskLink, ToptaskLinkProps } from './ToptaskLink';
import { ToptaskNav, ToptaskNavProps } from './ToptaskNav';
import { designTokenStory } from './util';

interface ToptaskNavStoryProps extends ToptaskNavProps {
  links: ToptaskLinkProps[];
}

const ToptaskNavStory = ({ links, ...restProps }: ToptaskNavStoryProps) => (
  <ToptaskNav {...restProps}>
    {links.map(({ icon, ...restProps }) => {
      const IconElement = icon;
      return <ToptaskLink icon={IconElement && <IconElement></IconElement>} {...restProps} />;
    })}
  </ToptaskNav>
);

const meta = {
  title: 'CSS Component/Toptask navigation',
  id: 'css-toptask-nav',
  component: ToptaskNavStory,
  argTypes: {
    links: {
      description: 'Links',
      type: {
        name: 'array',
        required: true,
      },
    },
    grid: {
      type: 'boolean',
      description: 'Grid',
    },
  },
  args: {
    links: [],
    grid: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-toptask-nav',
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
    viewport: {
      viewports: {
        example: {
          name: 'Example',
          styles: {
            width: '400px',
            height: '400px',
          },
        },
      },
      defaultViewport: 'example',
    },
  },
} satisfies Meta<typeof ToptaskNavStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        href: '#',
        icon: 'utrecht-icon-rijbewijs',
        children: 'Paspoort of ID-kaart aanvragen',
      },
      {
        href: '#',
        icon: 'utrecht-icon-melding-klacht',
        children: 'Melding/klacht openbare ruimte doorgeven',
      },
      {
        href: '#',
        icon: 'utrecht-icon-verhuizen',
        children: 'Verhuizing doorgeven',
      },
      {
        href: '#',
        icon: 'utrecht-icon-werken',
        children: 'Werken bij de gemeente',
      },
      {
        href: '#',
        icon: 'utrecht-icon-nummerbord',
        children: 'Parkeren: kentekenwijziging doorgeven',
      },
      {
        href: '#',
        icon: 'utrecht-icon-afval-scheiden',
        children: 'Afval',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-toptask-nav` class name.',
      },
    },
  },
};

export const Grid: Story = {
  args: {
    ...Default.args,
    grid: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-toptask-nav--grid` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
