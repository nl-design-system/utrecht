import README from '@utrecht/component-library-react/README.md?raw';
import { createMarkdownStory } from './markdown-story';

const { story, page } = createMarkdownStory({
  category: 'Utrecht',
  markdown: README,
});

export default story;
export const __page = page;
