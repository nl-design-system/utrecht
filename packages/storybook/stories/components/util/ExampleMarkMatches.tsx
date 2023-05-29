import React from 'react';
import { Mark } from '../../../../component-library-react/src';

/**
 * Seperate between matching and non-matching substrings.
 */
const separateMatches = (
  regexp: RegExp,
  str: string,
): { offset: number; length: number; end: number; match: boolean; value: string; substrings?: string[] }[] => {
  let match,
    token,
    parts = [],
    startOffset = 0,
    endOffset = 0,
    prevOffset = 0;

  // Necessary when re-using RegExp objects
  regexp.lastIndex = 0;

  while ((match = regexp.exec(str)) !== null) {
    // Prevent infinite loops by matches that return an empty string
    if (match[0].length === 0) {
      regexp.lastIndex++;
      continue;
    }

    endOffset = regexp.lastIndex;
    startOffset = endOffset - match[0].length;

    if (startOffset > prevOffset) {
      token = {
        offset: prevOffset,
        length: startOffset - prevOffset,
        end: startOffset,
        match: false,
        value: str.substring(prevOffset, startOffset),
      };
      parts.push(token);
    }

    parts.push({
      match: true,
      offset: startOffset,
      end: startOffset + match[0].length,
      length: match[0].length,
      value: match[0],
      substrings: [...match],
    });

    prevOffset = endOffset;
  }

  // In case the regular expression matched nothing, add the whole string as non-matching
  // Note: `parts` are empty when the `regexp` returns a zero-length string
  if (prevOffset < str.length || parts.length === 0) {
    parts.push({
      match: false,
      offset: prevOffset,
      length: str.length,
      value: str.substring(prevOffset, str.length),
      substrings: null,
    });
  }

  return parts;
};

const escapeRegExpChar = (chr: string): string => {
  let charCode = chr.charCodeAt(0);

  if (
    charCode === 33 || // !
    charCode === 36 || // $
    charCode === 40 || // (
    charCode === 41 || // )
    charCode === 42 || // *
    charCode === 43 || // +
    charCode === 46 || // .
    charCode === 63 || // ?
    charCode === 91 || // [
    charCode === 92 || // /
    charCode === 93 || // ]
    charCode === 94 || // ^
    charCode === 123 || // {
    charCode === 124 || // |
    charCode === 125 // }
  ) {
    return '\\' + chr;
  } else {
    return chr;
  }
};

const escapeRegExp = (str) => {
  let escaped = '',
    i = 0,
    l = str.length;

  for (; i < l; i++) {
    escaped += escapeRegExpChar(str.charAt(i));
  }

  return escaped;
};

export const ExampleMarkMatches = ({ children, match }) => (
  <>
    {separateMatches(new RegExp(escapeRegExp(match), 'igm'), String(children)).map(({ match, value }) =>
      match ? <Mark>{value}</Mark> : value,
    )}
  </>
);
