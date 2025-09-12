import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function paragraph(element: Element) {
  if (isElement(element, 'p') === false) return;

  addClassName('nl-paragraph', element);
}
