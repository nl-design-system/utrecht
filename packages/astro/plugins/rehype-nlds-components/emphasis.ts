import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function emphasis(element: Element) {
  if (isElement(element, 'em') === false) return;

  addClassName('utrecht-emphasis', element);
  addClassName('utrecht-emphasis--stressed', element);
}
