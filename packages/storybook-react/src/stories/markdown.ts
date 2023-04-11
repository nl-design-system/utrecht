export const removeMarkdownFrontMatter = (markdown: string): string =>
  markdown.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm, '');

export const removeMarkdownH1 = (markdown: string): string => markdown.replace(/(^|\n)#\s.+/, '');

export const getMarkdownH1 = (markdown: string): string => {
  const match = markdown.match(/(?:^|\n)#\s(.+)/);
  return match ? match[1] : '';
};
