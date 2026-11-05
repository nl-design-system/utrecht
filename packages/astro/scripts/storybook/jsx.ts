/**
 * JSX-broncode van een React-element, zoals het paneel "Show code" van Storybook.
 */
import type { ReactElement, ReactNode } from 'react';

type ElementType = string | { displayName?: string; name?: string; render?: { name?: string }; type?: ElementType };

const elementName = (type: ElementType): string => {
  if (typeof type === 'string') return type;
  if (typeof type === 'symbol') return '';
  return type.displayName || type.name || type.render?.name || (type.type ? elementName(type.type) : 'Component');
};

export const isElement = (value: unknown): value is ReactElement =>
  typeof value === 'object' && value !== null && '$$typeof' in value && 'props' in value;

const valueToSource = (value: unknown): string => {
  if (isElement(value)) return elementToJsx(value);
  if (typeof value === 'function') return '() => {}';
  if (Array.isArray(value)) return `[${value.map(valueToSource).join(', ')}]`;
  if (typeof value === 'object' && value !== null) {
    const key = (k: string) => (/^[a-z_$][\w$]*$/i.test(k) ? k : JSON.stringify(k));
    const entries = Object.entries(value).filter(([, v]) => v !== undefined);
    return `{ ${entries.map(([k, v]) => key(k) + ': ' + valueToSource(v)).join(', ')} }`;
  }
  return value === undefined ? 'undefined' : JSON.stringify(value);
};

const childrenToJsx = (children: ReactNode): string => {
  if (Array.isArray(children)) return children.map(childrenToJsx).join('');
  if (isElement(children)) return elementToJsx(children);
  if (typeof children === 'string') return children.replace(/[{}<>]/g, (char) => `{'${char}'}`);
  if (typeof children === 'number') return String(children);
  return '';
};

export const elementToJsx = (element: ReactElement): string => {
  const { children, ...props } = element.props as Record<string, unknown> & { children?: ReactNode };
  const name = elementName(element.type as ElementType);
  const attributes = Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (value === true) return ` ${key}`;
      if (typeof value === 'string' && !/["\n]/.test(value)) return ` ${key}="${value}"`;
      return ` ${key}={${valueToSource(value)}}`;
    })
    .join('');
  const content = childrenToJsx(children);
  return content ? `<${name}${attributes}>${content}</${name}>` : `<${name}${attributes} />`;
};

/**
 * Stories renderen vaak een lokale wrapper, zoals `ButtonStory`, die de args van de story omzet naar de echte
 * component. Toon in plaats daarvan wat de wrapper teruggeeft. Een wrapper met hooks kun je niet buiten React
 * aanroepen, die blijft zoals hij is.
 */
export const unwrapStoryComponents = (element: ReactElement, depth = 0): ReactElement => {
  const type = element.type as ElementType | ((props: unknown) => ReactNode);
  if (depth < 5 && typeof type === 'function' && elementName(type as ElementType).endsWith('Story')) {
    try {
      const output = type(element.props);
      if (isElement(output)) return unwrapStoryComponents(output, depth + 1);
    } catch {
      // Gebruikt hooks: houd de wrapper
    }
  }
  return element;
};
