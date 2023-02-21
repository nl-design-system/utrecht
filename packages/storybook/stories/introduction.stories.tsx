import markdown from '../../../documentation/website/basis/introductie.md?raw';
import { createMarkdownStory } from './markdown-story';

const { story, page } = createMarkdownStory({
  category: 'Utrecht',
  markdown,
});

export default story;
export const __page = page;
