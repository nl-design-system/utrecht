import type { Meta } from '@storybook/react';
import { Heading } from '@utrecht/component-library-react';
import { getMarkdownH1, removeMarkdownFrontMatter, removeMarkdownH1 } from './markdown';
export const createMarkdownStory = ({ category, markdown }: { category: string; markdown: string }) => {
  const heading1 = getMarkdownH1(markdown);

  const story: Meta = {
    component: Heading,
    title: `${category}/${heading1}`,
    parameters: {
      docs: {
        description: {
          component: removeMarkdownH1(removeMarkdownFrontMatter(markdown)),
        },
      },
    },
    render: (args: any) => ({
      props: args,
      template: `<div><h1>dit is een readme</h1><p>Storybook MDX</p></div>`,
    }),
  };

  const page = () => [];

  page.parameters = {
    docsOnly: true,
  };

  return { story, page } as any;
};
