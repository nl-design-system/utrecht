import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/breadcrumb-nav-css/README.md?raw';
import tokensDefinition from '@utrecht/breadcrumb-nav-css/dist/tokens.mjs';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
} from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util.js';

// custom link component for storybook
const ExampleCustomLink = ({ children, className, ...rest }: any) => {
  return (
    <a className={clsx('utrecht-link', 'utrecht-link--html-a', className)} {...rest}>
      {children}
    </a>
  );
};

ExampleCustomLink.displayName = 'ExampleCustomLink';

const meta = {
  title: 'React Component/Breadcrumb navigation',
  id: 'react-breadcrumb-nav',
  component: BreadcrumbNav,
  args: {
    label: 'Kruimelpad',
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" rel="up" index={2}>
        Niveau 2
      </BreadcrumbNavLink>,
    ],
  },
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'arrows'],
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-breadcrumb-nav',
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
export const Arrows: Story = {
  args: {
    appearance: 'arrows',
  },
  parameters: {
    docs: {
      description: {
        story: `The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.`,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Default: Story = {};

export const Current: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `For accessibility specify the \`current\` property, to render \`aria-current="page"\`.`,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Separator: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export const CurrentDisabled: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" index={2} current disabled>
        Huidige pagina
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
`,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const CustomLink: Story = {
  args: {
    children: [
      <BreadcrumbNavLink Link={ExampleCustomLink} href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink Link={ExampleCustomLink} href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink Link={ExampleCustomLink} href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `The \`Link\` property is used to override the default link component.
Warning: this feature is experimental.
Help needed: this feature `,
      },
    },
    status: {
      type: 'EXPERIMENTAL',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
