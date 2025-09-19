/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Article, Link, Paragraph } from '@utrecht/component-library-react';
import articleDocs from '@utrecht/link-css/docs/article.nl.md?raw';
import React from 'react';
import { LinkStory } from './Link';
import './ArticleLink.scss';

const ExampleArticle = (
  <Article lang="nl-NL" dir="ltr" className="example-article">
    <Paragraph>
      <Link href="https://twitter.com/GemeenteUtrecht" rel="external noopener noreferer">
        <cite>@GemeenteUtrecht</cite>
      </Link>
      : Wat een dag, wat een feest, wat een winnaar! Om helemaal nooit meer te vergeten. 🥰😍{' '}
      <Link href="https://twitter.com/hashtag/lavuelta22" rel="external noopener noreferer">
        #lavuelta22
      </Link>
    </Paragraph>
  </Article>
);

const meta = {
  title: 'CSS Component/Link/Article',
  id: 'css-link--article',
  component: LinkStory,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: articleDocs,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof LinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    boxContent: true,
    href: 'https://twitter.com/GemeenteUtrecht/status/1560699191508312064',
    children: ExampleArticle,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Styling via `utrecht-link` and `utrecht-link--html-a` class name. The `utrecht-link--html-a` enables pseudo-selector effects, like `:hover` and `:visited`.',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    boxContent: true,
    focus: true,
    focusVisible: true,
    href: 'https://twitter.com/GemeenteUtrecht/status/1560699191508312064',
    children: ExampleArticle,
  },
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'Styling met de `.utrecht-link--focus-visible` class naam of als status op `.utrecht-link:focus-visible`.',
      },
    },
  },
};
