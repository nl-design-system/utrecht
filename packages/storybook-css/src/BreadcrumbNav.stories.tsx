import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import readme from '@utrecht/breadcrumb-nav-css/README.md?raw';
import hreflangDocs from '@utrecht/breadcrumb-nav-css/_hreflang.md?raw';
import langDocs from '@utrecht/breadcrumb-nav-css/_lang.md?raw';
import relDocs from '@utrecht/breadcrumb-nav-css/_rel.md?raw';
import rtlSeparatorDocs from '@utrecht/breadcrumb-nav-css/_rtl-separator.md?raw';
import tokensDefinition from '@utrecht/breadcrumb-nav-css/src/tokens.json';
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator, Code } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconChevronLeft, UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Breadcrumb navigation',
  id: 'css-breadcrumb-nav',
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
    status: 'ALPHA',
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
    label: 'Kruimelpad',
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
      type: 'ALPHA',
    },
  },
};

export const Arrows: Story = {
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad',
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
      type: 'ALPHA',
    },
  },
};

export const ArrowsDisabledCurrent: Story = {
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad',
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
      type: 'ALPHA',
    },
  },
};

export const Rel: Story = {
  args: {
    label: 'Kruimelpad',
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
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: relDocs,
      },
    },
    status: {
      type: 'ALPHA',
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
      type: 'ALPHA',
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
      type: 'ALPHA',
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
      type: 'ALPHA',
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

export const OtherLanguage: Story = {
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
        Zorg en onderwijs
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>
        Nieuwkomers
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/c/" disabled current index={3} lang="uk" hrefLang="uk">
        Біженці з України
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Document language',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: hreflangDocs,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const DocumentTitleLanguage: Story = {
  args: {
    label: 'Kruimelpad:',
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/c/" disabled current index={1} lang="fr">
        Le roi est mort, vive le roi!
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Document title language',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: langDocs,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const CodeTitle: Story = {
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
        HTML
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>
        Elements
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/c/" disabled current index={3} lang="uk" hrefLang="uk">
        <Code>{'<code>'}</Code> element
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Code in link text',
  parameters: {
    status: {
      type: 'ALPHA',
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
      type: 'ALPHA',
    },
  },
};

export const SeparatorChar: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        Wonen en leven
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" current disabled index={2}>
        Afval
      </BreadcrumbNavLink>,
    ],
  },
  name: 'Separator character',
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const SeparatorIcon: Story = {
  args: {
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
  name: 'Separator icon',
  parameters: {
    docs: {
      description: {
        story: 'Use an SVG icon with `fill="currentColor"` to apply the color from `--utrecht-icon-separator-color`.',
      },
    },
    status: {
      type: 'ALPHA',
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
        <UtrechtIconChevronLeft />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/" index={1}>
        المستوى 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronLeft />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="https://example.com/a/b/" index={2}>
        المستوي 2
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronLeft />
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
      type: 'ALPHA',
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
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const LineWrap: Story = {
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
  decorators: [(Story) => <div style={{ maxInlineSize: '320px' }}>{Story()}</div>],
  name: 'Line wrap',
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
