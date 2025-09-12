import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function strong(element: Element) {
  if (isElement(element, 'strong') === false) return;

  addClassName('ma-strong', element);
}
