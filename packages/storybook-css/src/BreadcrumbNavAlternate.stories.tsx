import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import relDocs from '@utrecht/components/breadcrumb/_rel.md?raw';
import rtlSeparatorDocs from '@utrecht/components/breadcrumb/_rtl-separator.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import {
  UtrechtIconChevronLeft,
  UtrechtIconChevronRight,
  UtrechtIconDakloos,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { BreadcrumbLink, BreadcrumbNav, BreadcrumbSeparator } from './BreadcrumbNav';

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
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof BreadcrumbNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/c/" index={3} current disabled>
        Kliko
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/b/" current index={2}>
        Afval
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/b/" disabled index={2}>
        Afval
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/b/" current disabled index={2}>
        Afval
      </BreadcrumbLink>,
    ],
  },
  name: 'Current page link is disabled',
  parameters: {
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const Icons: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        <UtrechtIconDakloos />
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbLink>,
    ],
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const Separator: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/b/" rel="up" index={2}>
        Afval
      </BreadcrumbLink>,
    ],
  },
  name: 'Separator',
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/search" rel="up" index={1}>
        Zoeken
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/search?q=openingstijden+zwembad" rel="first" index={2}>
        “openingstijden zwembad”
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        الصفحة الرئيسية
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        المستوى 1
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/" index={2}>
        المستوي 2
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/c/" rel="up" index={3}>
        المستوي 3
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        الصفحة الرئيسية
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronLeft />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/" index={1}>
        المستوى 1
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronLeft />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/b/" index={2}>
        المستوي 2
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronLeft />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/a/b/c/" rel="up" index={3}>
        المستوي 3
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/wonen-en-level/" index={1}>
        Wonen en leven
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/wonen-en-level/parken-en-groen/" index={2}>
        Parken en groen
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/wonen-en-level/parken-en-groen/dieren/" index={3}>
        Dieren
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/" index={4}>
        Wilde dieren helpen
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink
        href="https://example.com/wonen-en-level/parken-en-groen/dieren/wilde-dieren-helpen/diervriendelijk-bouwen/"
        rel="up"
        index={5}
      >
        Diervriendelijk bouwen
      </BreadcrumbLink>,
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
