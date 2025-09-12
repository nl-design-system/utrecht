import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function blockquote(element: Element) {
  if (isElement(element, 'blockquote') === false) return;

  addClassName('utrecht-blockquote', element);
  addClassName('utrecht-blockquote--html-blockquote', element);
}
