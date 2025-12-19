import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function heading(element: Element) {
  if (isElement(element, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']) === false) return;

  addClassName('utrecht-heading', element);

  if (element.tagName === 'h1') addClassName('utrecht-heading--level-1', element);
  if (element.tagName === 'h2') addClassName('utrecht-heading--level-2', element);
  if (element.tagName === 'h3') addClassName('utrecht-heading--level-3', element);
  if (element.tagName === 'h4') addClassName('utrecht-heading--level-4', element);
  if (element.tagName === 'h5') addClassName('utrecht-heading--level-5', element);
  if (element.tagName === 'h6') addClassName('utrecht-heading--level-6', element);
}
