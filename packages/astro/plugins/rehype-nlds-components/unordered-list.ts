import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name';

export function unorderedList(element: Element) {
  if (isElement(element, 'ul') === false) return;

  addClassName('utrecht-unordered-list', element);

  element.properties['role'] = 'list';

  selectAll('li', element).forEach(addClassName('utrecht-unordered-list__item'));

  selectAll('li > ul', element).forEach(addClassName('utrecht-unordered-list--nested'));
}
