// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import {
  AccordionProvider,
  Heading,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RichText,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/src/css-module';
// import tokensDefinition from '@utrecht/components/card-list/src/tokens.json';
import readme from '@utrecht/components/rich-text/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';
interface MarkdownProps {
  content: {
    component: string;
    children?: string | any[];
  }[];
}

const Markdown = ({ content }: MarkdownProps) => {
  const components = {
    h1: () => <Heading level={1}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    h2: () => <Heading level={2}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    h3: () => <Heading level={3}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    h4: () => <Heading level={4}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    p: () => <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>,
    ul: () => (
      <UnorderedList>
        <UnorderedListItem>Lorem ipsum dolor sit amet consectetur.</UnorderedListItem>
        <UnorderedListItem>Lorem ipsum dolor sit amet consectetur.</UnorderedListItem>
        <UnorderedListItem>Lorem ipsum dolor sit amet consectetur.</UnorderedListItem>
      </UnorderedList>
    ),
    ol: () => (
      <OrderedList>
        <OrderedListItem>Lorem ipsum dolor sit amet consectetur.</OrderedListItem>
        <OrderedListItem>Lorem ipsum dolor sit amet consectetur.</OrderedListItem>
        <OrderedListItem>Lorem ipsum dolor sit amet consectetur.</OrderedListItem>
      </OrderedList>
    ),
    accordion: ({ children }: { children: any[] }) => {
      return (
        <AccordionProvider
          sections={children.map((child) => ({
            id: child.props.id,
            label: child.props.label,
            headingLevel: child.props.headingLevel || 2,
            body: <Paragraph>{child.props.body}</Paragraph>,
          }))}
        />
      );
    },
    table: () => (
      <TableContainer>
        <Table>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Area (km²)</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Area (km²)</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Area (km²)</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    ),
  };
  return (
    <div>
      {content.map((item, index) => {
        const Component = components[item.component as keyof typeof components] as any;
        if (!Component) {
          return null;
        }
        return (
          <Component key={index} {...item}>
            {item.children}
          </Component>
        );
      })}
    </div>
  );
};

const meta = {
  title: 'React Component/Rich Text',
  id: 'react-rich-text',
  component: RichText,
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'h1',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'p',
          },
          {
            component: 'ol',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
    tokens,
    // tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const heading2: Story = {
  name: 'Heading 2',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'h2',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'p',
          },
          {
            component: 'ol',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
};

export const heading3: Story = {
  name: 'Heading 3',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'h3',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'p',
          },
          {
            component: 'ol',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
};

export const heading4: Story = {
  name: 'Heading 4',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'h4',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'p',
          },
          {
            component: 'ol',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
};

export const paragraph: Story = {
  name: 'Paragraph',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'p',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'ol',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
};
export const unorderedList: Story = {
  name: 'UnorderedList',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'ul',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'p',
          },
          {
            component: 'h2',
          },
          {
            component: 'ol',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
};
export const orderedList: Story = {
  name: 'OrderedList',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'ol',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'p',
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'table',
          },
        ]}
      />
    ),
  },
};
export const table: Story = {
  name: 'Table',
  args: {
    children: (
      <Markdown
        content={[
          {
            component: 'table',
          },
          {
            component: 'p',
          },
          {
            component: 'h2',
          },
          {
            component: 'ul',
          },
          {
            component: 'accordion',
            children: [
              {
                children: 'Accordion Template H2',
                props: { id: 'accordion1', label: 'Accordion 1', headingLevel: 2, body: 'Accordion Template Body' },
                body: 'Accordion Template Body',
              },
              {
                children: 'Accordion Template Paragraph',
                props: { id: 'accordion2', label: 'Accordion 2', headingLevel: 2, body: 'Accordion Template Body' },
              },
            ],
          },
          {
            component: 'ol',
          },
        ]}
      />
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
