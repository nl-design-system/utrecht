import { remark } from 'remark';
import remarkNormalizeHeadings from 'remark-normalize-headings';

export const mergeMarkdown = (markdown: string[]) =>
  String(remark().use(remarkNormalizeHeadings).processSync(markdown.join('\n\n')));
