import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name';

export function orderedList(element: Element) {
  if (isElement(element, 'ol') === false) return;

  addClassName('utrecht-ordered-list', element);

  element.properties['role'] = 'list';

  selectAll('li', element).forEach(addClassName('utrecht-ordered-list__item'));

  selectAll('li > ul', element).forEach(addClassName('utrecht-ordered-list--nested'));
}
