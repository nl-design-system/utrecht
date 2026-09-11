/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

// Figma / Tokens Studio exports the CSS `none` keyword with the wrong casing
// as "None" (e.g. for box-shadow, text-decoration, text-transform).
const NONE_STRING_PATTERN = /^none$/i;

const isPlainObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

const normalizeTokenValue = (value, path, changedPaths) => {
  if (typeof value !== 'string' || value === 'none') {
    return value;
  }

  if (NONE_STRING_PATTERN.test(value)) {
    changedPaths.push(path.join('.'));
    return 'none';
  }

  return value;
};

const normalizeNoneStrings = (value, path, changedPaths) => {
  if (Array.isArray(value)) {
    return value.map((item, index) => normalizeNoneStrings(item, [...path, index], changedPaths));
  }

  if (!isPlainObject(value)) {
    return value;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, val]) => {
      if (key === '$value') {
        return [key, normalizeTokenValue(val, [...path, key], changedPaths)];
      }

      return [key, normalizeNoneStrings(val, [...path, key], changedPaths)];
    }),
  );
};

/**
 * Normalizes the CSS `none` keyword exported by Figma / Tokens Studio with
 * the wrong casing ("None") to the lowercase keyword CSS/stylelint expects.
 * See ./normalize-none-preprocessor.md for background.
 */
export const normalizeFigmaExportValues = (tokens) => {
  const changedPaths = [];
  const normalized = normalizeNoneStrings(tokens, [], changedPaths);

  if (changedPaths.length > 0) {
    console.warn(
      `[design-tokens] Normalized ${changedPaths.length} "None" string value(s) exported from Figma to "none".`,
    );
  }

  return normalized;
};

export const normalizeFigmaExportPreprocessorHooksConfig = {
  'utrecht/normalize-figma-export': normalizeFigmaExportValues,
};
