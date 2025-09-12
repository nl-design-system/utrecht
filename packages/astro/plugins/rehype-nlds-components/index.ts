import type { Root } from 'hast';
import { visit } from 'unist-util-visit';
import { blockquote } from './blockquote.ts';
import { code } from './code.ts';
import { emphasis } from './emphasis.ts';
import { heading } from './heading.ts';
import { hr } from './hr.ts';
import { image } from './image.ts';
import { link } from './link.ts';
import { orderedList } from './ordered-list.ts';
import { paragraph } from './paragraph.ts';
import { pre } from './pre.ts';
import { strong } from './strong.ts';
import { unorderedList } from './unordered-list.ts';

/**
 * A rehype plugin to transform HTML generated from Markdown so that it uses
 * NL Design System components
 */
export function nldsComponentsPlugin() {
  return function transform(tree: Root): void {
    visit(tree, 'element', function (node, _index, parent) {
      blockquote(node);
      code(node, parent);
      emphasis(node);
      heading(node);
      hr(node);
      image(node);
      link(node);
      orderedList(node);
      paragraph(node);
      pre(node);
      strong(node);
      unorderedList(node);
    });
  };
}
