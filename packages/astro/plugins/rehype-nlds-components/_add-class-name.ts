import type { Element } from 'hast';

/**
 * Curried utility function to add a className to an element. Curried because
 * it can be usefull in a forEach loop having the element provided in a later
 * stage.
 *
 * @example
 * // Adding the element directly
 * addClassName('my-class', targetElement)
 *
 * @example
 * // Adding the element in a forEach loop
 * selectAll('li', parentElement).forEach(addClassName('child'))
 */
export function addClassName(className: string, element?: Element) {
  function add(_element: Element) {
    const existingClassNames = `${_element.properties['className'] ?? ''}`;
    const classNames = new Set(existingClassNames.split(' '));
    classNames.add(className);

    _element.properties['className'] = [...classNames].join(' ').trim();
  }

  if (element) {
    add(element);
  }

  return add;
}
