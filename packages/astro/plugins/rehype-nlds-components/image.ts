import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name';

export function image(element: Element) {
  if (isElement(element, 'img') === false) return;

  addClassName('utrecht-img', element);
  addClassName('utrecht-img--scale-down', element);
}
