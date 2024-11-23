// https://raw.githubusercontent.com/frameless/strapi/refs/heads/main/apps/pdc-frontend/src/util/cspConfig.ts
import { BLOB, CSPDirectives, DATA, EVAL, getCSP, INLINE, nonce, NONE, SELF, STRICT_DYNAMIC } from 'csp-header';
export { BLOB, DATA, EVAL, INLINE, NONE, SELF, STRICT_DYNAMIC };
import mergeWith from 'lodash-es/mergewith';
// Using "//*" in JavaScript, especially with VSCode, can disrupt syntax highlighting and code analysis, causing confusion and hindering development.
export const subdomainWildcard = (url: string): string => {
  const parsed = new URL(url);
  return `${parsed.protocol}//*.${parsed.host}${parsed.pathname}${parsed.search}${parsed.hash}`;
};

type Object = Record<string, any>;

type MergeCustomizer = (objValue: Object, srcValue: Object) => any;

export const mergeCustomizer: MergeCustomizer = (objValue, srcValue) =>
  Array.isArray(objValue) && Array.isArray(srcValue) ? objValue.concat(srcValue) : undefined;

export type CSPDirectiveList = (Partial<CSPDirectives> | undefined)[];

export const mergeCSPDirectives = (...directives: (Partial<CSPDirectives> | undefined)[]) =>
  mergeWith({}, ...directives.filter(Boolean), mergeCustomizer);

/**
 * Check if the parameter is an actual URL. Then return the normalized URL.
 * Otherwise return `null`.
 */
export const normalizeURL = (urlSetting: string | undefined): string | null => {
  try {
    return new URL(urlSetting || '').toString();
  } catch (e) {
    return null;
  }
};

export const stringSort = (a: string, b: string) => (a === b ? 0 : a > b ? 1 : -1);

export const normalizeCSPDirectives = (directives: Partial<CSPDirectives>) => {
  return Object.entries(directives)
    .sort(([keyA], [keyB]) => stringSort(keyA, keyB))
    .reduce(
      (obj, [key, value]) => ({
        ...obj,
        [key]: Array.isArray(value) ? value.sort(stringSort) : value,
      }),
      {},
    );
};

export const cspBase = {
  'default-src': [SELF],
  'object-src': [NONE],
  'base-uri': [SELF],
  'form-action': [SELF],
  'frame-ancestors': [NONE],
  'worker-src': [BLOB],
  'connect-src': [SELF, DATA, BLOB],
  'img-src': [SELF, BLOB, DATA],
  'font-src': [SELF],
  'block-all-mixed-content': true,
  'script-src': [SELF],
  'style-src': [SELF],
};

const isString = (arg: any): arg is string => typeof arg === 'string';

export const getContentSecurityPolicy = ({
  meta,
  nonce: nonceValue,
  directives,
}: {
  /**
   * Use `meta: true` to remove CSP features that are supported
   * in a HTTP header, but not in `<meta>` HTML element with `http-equiv`.
   */
  meta?: boolean;
  nonce?: string;
  directives: CSPDirectiveList;
}) => {
  const _directives = normalizeCSPDirectives(
    mergeCSPDirectives(
      nonceValue
        ? {
            'script-src': [nonce(nonceValue)],
            'style-src': [nonce(nonceValue)],
          }
        : undefined,
      ...directives,
    ),
  );

  if (meta) {
    delete _directives['frame-ancestors'];
  }

  return getCSP({
    directives: _directives,
  });
};
