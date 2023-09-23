/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  Code,
  Heading1,
  Heading2,
  Link,
  PageContent,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import readme from '@utrecht/components/page-content/README.md?raw';
import tokensDefinition from '@utrecht/components/page-content/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const PageContentStory = ({ aside, children, main, nav }) => (
  <PageContent>
    {nav && <div className="utrecht-page-content__nav">{nav}</div>}
    {main && <main className="utrecht-page-content__main">{main}</main>}
    {aside && <aside className="utrecht-page-content__aside">{aside}</aside>}
    {children}
  </PageContent>
);

const meta = {
  title: 'CSS Component/Page content',
  id: 'css-page-content',
  component: PageContentStory,
  argTypes: {
    aside: {
      description: 'Secondary page content',
    },
    children: {
      description: 'Page content',
    },
    main: {
      description: 'Main page content',
    },
    nav: {
      description: 'Navigation',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-page-content',
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
} satisfies Meta<typeof PageContentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
};

export const PageContentWithBreadcrumb: Story = {
  args: {
    nav: (
      <BreadcrumbNav appearance="arrows">
        <BreadcrumbLink href="https://example.com/" rel="home">
          Home
        </BreadcrumbLink>
        <BreadcrumbLink href="https://example.com/a/">Wonen en leven</BreadcrumbLink>
        <BreadcrumbLink href="https://example.com/a/b/" rel="up">
          Afval
        </BreadcrumbLink>
      </BreadcrumbNav>
    ),
    main: [
      <Heading1>Main page content</Heading1>,
      <Paragraph>
        The main landmark should not include breadcrumb navigation. Breadcrumb links should be part of navigation
        landmark.
      </Paragraph>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `Styling with the \`utrecht-page-content__nav\` class name.

The \`main\` landmark should not include breadcrumb navigation. Breadcrumb links should be part of \`navigation\` landmark.

The preferred markup for secondary navigation components is \`<nav>\` with \`aria-labelledby\` to give it a unique label.`,
      },
    },
  },
  name: 'Breadcrumb navigation',
};

export const PageContentWithAside: Story = {
  args: {
    main: [
      <Heading1>Main page content</Heading1>,
      <Paragraph>
        The <Code>main</Code> landmark should be used to separate the main content from complementary and unrelated
        content.
      </Paragraph>,
    ],
    aside: [
      <Heading2>Related pages</Heading2>,
      <UnorderedList>
        <UnorderedListItem>
          <Link href="https://www.htmhell.dev/tips/landmarks/" external>
            Landmarks — HTMHell
          </Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            external
          >
            ARIA: complementary role — MDN
          </Link>
        </UnorderedListItem>
      </UnorderedList>,
    ],
  },
  name: 'Complementary content',
};

export const DesignTokens = designTokenStory(meta);
