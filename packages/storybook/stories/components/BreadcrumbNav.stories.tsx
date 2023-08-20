import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import { BreadcrumbLink, BreadcrumbNav } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/BreadcrumbNav',
  id: 'css-breadcrumb-nav',
  component: BreadcrumbNav,
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad',
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
export const Default: Story = {};

export const Rel: Story = {
  args: {
    ...Default.args,
    children: [
      <BreadcrumbLink href="https://example.com/" rel="home">
        Home
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/search" rel="up">
        Zoeken
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/search?q=openingstijden+zwembad" rel="first">
        “openingstijden zwembad”
      </BreadcrumbLink>,
    ],
  },
  parameters: {
    ...Default.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `
Stel je voor: je hebt _breacrumb navigation_ op de derde pagina met zoekresultaten voor “openingstijden zwembad”. 
De huidige URL is \`https://example.com/search?q=openingstijden+zwembad?page=3\`. 
Dan kan het handig zijn om terug te gaan naar de eerste pagina van de zoekresultaten. 
Het kan ook handig zijn om terug te gaan naar de zoekpagina, om andere zoektermen te kiezen.

- **Home**: \`rel="home"\`
- **Zoeken**: \`rel="up"\`
- **Pagina 1** van “openingstijden zwembad”: \`rel="first"\``,
      },
    },
  },
};

const RTLStoryDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <div lang="ar" dir="rtl">
    <Story />
  </div>
);

export const RTL: Story = {
  decorators: [RTLStoryDecorator],
  args: {
    ...Default.args,
    children: [
      <BreadcrumbLink href="https://example.com/" rel="home">
        الصفحة الرئيسية
      </BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/">المستوى 1</BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/">المستوي2</BreadcrumbLink>,
      <BreadcrumbLink href="https://example.com/a/b/c/" rel="up">
        المستوي3
      </BreadcrumbLink>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
