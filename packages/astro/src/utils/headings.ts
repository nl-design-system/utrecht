/**
 * De h2's in gerenderde HTML, voor de navigatie "Op deze pagina". Een kop zonder id krijgt er een, op dezelfde manier
 * als Astro de koppen in Markdown een id geeft (github-slugger). De HTML blijft verder precies hetzelfde: de ids komen
 * op de plek die de parser aangeeft, zonder de HTML opnieuw op te bouwen.
 */
import GithubSlugger from 'github-slugger';
import type { Element, Nodes } from 'hast';
import { fromHtml } from 'hast-util-from-html';
import { selectAll } from 'hast-util-select';

export interface Heading {
  id: string;
  text: string;
}

/** Koppen binnen een element met dit attribuut tellen niet mee, bijvoorbeeld de koppen in een voorbeeld */
export const IGNORE_ATTRIBUTE = 'data-on-this-page';

const textContent = (node: Nodes): string =>
  node.type === 'text' ? node.value : 'children' in node ? node.children.map(textContent).join('') : '';

export const collectHeadings = (html: string): { html: string; headings: Heading[] } => {
  const tree = fromHtml(html, { fragment: true });
  const ignored = new Set(selectAll(`[${IGNORE_ATTRIBUTE}="ignore"] h2`, tree));
  const existingIds = new Set(selectAll('[id]', tree).map((element) => String(element.properties['id'])));
  const slugger = new GithubSlugger();

  const headings: Heading[] = [];
  const insertions: { offset: number; id: string }[] = [];
  for (const element of selectAll('h2', tree) as Element[]) {
    if (ignored.has(element)) continue;
    const text = textContent(element).trim();
    if (!text) continue;
    let id = element.properties['id'] ? String(element.properties['id']) : undefined;
    if (!id) {
      do id = slugger.slug(text) || 'sectie';
      while (existingIds.has(id));
      existingIds.add(id);
      const start = element.position?.start.offset;
      if (start === undefined) continue;
      // Direct na `<h2`
      insertions.push({ offset: start + 3, id });
    }
    headings.push({ id, text });
  }

  let result = html;
  for (const { offset, id } of insertions.reverse()) {
    result = `${result.slice(0, offset)} id="${id}"${result.slice(offset)}`;
  }
  return { html: result, headings };
};
