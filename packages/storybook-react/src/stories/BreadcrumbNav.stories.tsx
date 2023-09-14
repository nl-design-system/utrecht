import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbLink, BreadcrumbNav } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

// custom link component for storybook
const ExampleCustomLink = ({ children, ...rest }: any) => {
  return (
    <a className="utrecht-link utrecht-link--html-a" {...rest}>
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
    appearance: 'arrows',
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
        story: 'The `Link` property is used to override the default link component.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
