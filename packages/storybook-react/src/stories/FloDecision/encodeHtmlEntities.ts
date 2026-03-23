// Core XML-safe and escape-target character codes
const QUOTATION_MARK = 0x0022; // decimal: 34;  character: "
const AMPERSAND = 0x0026; // decimal: 38;  character: &
const LESS_THAN_SIGN = 0x003c; // decimal: 60;  character: <
const GREATER_THAN_SIGN = 0x003e; // decimal: 62;  character: >
const SPACE = 0x0020; // decimal: 32;  character: (space)

// Control characters commonly preserved
const TAB = 0x0009; // decimal: 9;   character: \t
const LINE_FEED = 0x000a; // decimal: 10;  character: \n
const CARRIAGE_RETURN = 0x000d; // decimal: 13;  character: \r

// Forbidden non-characters in Unicode
const NONCHARACTER_FFFE = 0xfffe; // decimal: 65534; Unicode non-character
const NONCHARACTER_FFFF = 0xffff; // decimal: 65535; Unicode non-character

// Unicode replacement character (used to replace disallowed or invalid characters)
const REPLACEMENT_CHARACTER = '\uFFFD'; // U+FFFD; character: �

const unsafePattern = [
  '\\u0000-\\u0008', // control chars 0–8
  '\\u000B', // vertical tab
  '\\u000C', // form feed
  '\\u000E-\\u001F', // control chars 14–31
  '\\uFFFE', // non-character
  '\\uFFFF', // non-character
  '<',
  '>',
  '&',
  '"',
].join('');
const unsafeRegex = new RegExp(`[${unsafePattern}]`, 'g');

/**
 * Escapes individual characters for XML/HTML contexts.
 * Replaces unsafe or disallowed characters with their escaped or replacement equivalents.
 */
const escapeChar = (char: string, attr: boolean): string => {
  const code = char.charCodeAt(0);

  if (code === QUOTATION_MARK && attr) return '&#34;';
  if (code === AMPERSAND) return '&amp;';
  if (code === LESS_THAN_SIGN) return '&lt;';
  if (code === GREATER_THAN_SIGN) return '&gt;';

  if (
    (code < SPACE && code !== TAB && code !== LINE_FEED && code !== CARRIAGE_RETURN) ||
    code === NONCHARACTER_FFFE ||
    code === NONCHARACTER_FFFF
  ) {
    return REPLACEMENT_CHARACTER;
  }

  return char;
};

/**
 * Escapes special characters in XML/HTML content and replaces invalid Unicode characters.
 *
 * This function:
 * - Escapes &, <, >, and optionally " (for use in attributes)
 * - Replaces control characters (except for tab, newline, and carriage return)
 * - Replaces non-character Unicode values (U+FFFE, U+FFFF) with the replacement character (U+FFFD)
 *
 * Useful for safely encoding dynamic values inside XML or HTML content to avoid parsing issues or injection.
 *
 * @param {string} text - The input string to escape.
 * @param {boolean} [attr=true] - If true, double quotes (") will also be escaped as `&#34;`. Set to false when not escaping attributes.
 * @returns {string} - A sanitized string safe for XML/HTML content.
 *
 * @example
 * encodeHtmlEntities('<title>5 > 3 & "quotes"</title>')
 * // Returns: '&lt;title&gt;5 &gt; 3 &amp; &#34;quotes&#34;&lt;/title&gt;'
 *
 * @example
 * encodeHtmlEntities('plain text', false)
 * // Returns: 'plain text'
 */
export const encodeHtmlEntities = (text: string, attr: boolean = true): string =>
  text.replace(unsafeRegex, (char) => escapeChar(char, attr));
