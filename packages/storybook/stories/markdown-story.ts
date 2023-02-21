import { getMarkdownH1, removeMarkdownFrontMatter, removeMarkdownH1 } from './markdown';

export const createMarkdownStory = ({ category, markdown }: { category: string; markdown: string }) => {
  const heading1 = getMarkdownH1(markdown);

  const story = {
    title: `${category}/${heading1}`,
    tags: ['stories-mdx'],
    parameters: {
      docs: {
        description: {
          component: removeMarkdownH1(removeMarkdownFrontMatter(markdown)),
        },
      },
    },
  };

  const page = () => [];

  page.parameters = {
    docsOnly: true,
  };

  return { story, page };
};
