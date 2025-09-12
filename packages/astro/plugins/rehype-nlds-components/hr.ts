import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function hr(element: Element) {
  if (isElement(element, 'hr') === false) return;

  addClassName('utrecht-separator', element);
}
