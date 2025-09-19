import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/breadcrumb-nav-css/README.md?raw';
import relDocs from '@utrecht/breadcrumb-nav-css/_rel.md?raw';
import rtlSeparatorDocs from '@utrecht/breadcrumb-nav-css/_rtl-separator.md?raw';
import tokensDefinition from '@utrecht/breadcrumb-nav-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconChevronRight, UtrechtIconDakloos } from '@utrecht/web-component-library-react';
import React from 'react';
import { PartialStoryFn } from 'storybook/internal/types';
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator } from './BreadcrumbNav';

const meta = {
  title: 'CSS Component/Breadcrumb navigation/Alternate markup',
  id: 'css-breadcrumb-nav--html-p',
  component: BreadcrumbNav,
  args: {},
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'arrows'],
    },
  },
  parameters: {
    tokensPrefix: 'css-breadcrumb-nav',
    status: 'IN DEVELOPMENT',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BreadcrumbNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const Arrows: Story = {
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Arrows',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const ArrowsDisabledCurrent: Story = {
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/c/" index={3} current disabled>
        Kliko
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Arrows: current link is disabled',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const Current: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" current index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Current page',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" disabled index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Disabled link',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const DisabledCurrent: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" current disabled index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Current page link is disabled',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const Home: Story = {
  args: {
    label: 'Home only',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0} current disabled>
        Home
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Icons: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        <UtrechtIconDakloos />
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const SeparatorChar: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Separator character',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const SeparatorIcon: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Separator icon',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const Rel: Story = {
  args: {
    ...Default.args,
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/search" rel="up" index={1}>
        Zoeken
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/search?q=openingstijden+zwembad" rel="first" index={2}>
        “openingstijden zwembad”
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: relDocs,
      },
    },
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

const RTLStoryDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <div lang="ar" dir="rtl">
    <Story />
  </div>
);

export const RightToLeft: Story = {
  decorators: [RTLStoryDecorator],
  args: {
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        الصفحة الرئيسية
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        المستوى 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>
        المستوي 2
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/a/b/c/" rel="up" index={3}>
        المستوي 3
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Right-to-left',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const RightToLeftSeparator: Story = {
  decorators: [RTLStoryDecorator],
  args: {
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        الصفحة الرئيسية
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        المستوى 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>
        المستوي 2
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/c/" rel="up" index={3}>
        المستوي 3
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Right-to-left separator',
  parameters: {
    docs: {
      description: {
        story: rtlSeparatorDocs,
      },
    },
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const ManyLinks: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/wonen-en-level/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/wonen-en-level/parken-en-groen/" index={2}>
        Parken en groen
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/wonen-en-level/parken-en-groen/dieren/" index={3}>
        Dieren
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink
        href="https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/"
        index={4}
      >
        Wilde dieren helpen
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink
        href="https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/diervriendelijk-bouwen/"
        rel="up"
        index={5}
      >
        Diervriendelijk bouwen
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Many links',
};

export const LineWrap: Story = {
  args: {
    ...ManyLinks.args,
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '320px' }}>{Story()}</div>],
  name: 'Line wrap',
};
