import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  BreadcrumbSeparator,
} from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';

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
      <BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>,
      <BreadcrumbLink href="/a/b/" rel="up" index={2}>
        Niveau 2
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>,
      <BreadcrumbLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>,
      <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>,
      <BreadcrumbLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbLink>,
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
      <BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>,
      <BreadcrumbLink href="/a/b/" index={2} current disabled>
        Huidige pagina
      </BreadcrumbLink>,
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
      <BreadcrumbLink Link={ExampleCustomLink} href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink Link={ExampleCustomLink} href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>,
      <BreadcrumbLink Link={ExampleCustomLink} href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbLink>,
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
