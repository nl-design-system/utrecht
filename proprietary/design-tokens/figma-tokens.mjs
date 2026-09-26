// Shared between style-dictionary-build.mjs and style-dictionary-build-dark.mjs
// so both builds stay in sync on how the raw Figma export is consumed. If this
// only lived in one of the two build scripts, the other would silently miss
// any token that starts sourcing from Figma (that's exactly what broke the
// dark build after headings moved to figma-heading-N-* aliases).

// Figma exports reference primitives as {basis.x} but they are stored under
// common.basis.x in the exported file. This preprocessor rewrites all aliases
// so style-dictionary can resolve them.
function rewriteBasisRefs(node) {
  if (typeof node !== 'object' || node === null) return node;
  return Object.fromEntries(
    Object.entries(node).map(([k, v]) => [
      k,
      k === '$value' && typeof v === 'string' ? v.replaceAll('{basis.', '{common.basis.') : rewriteBasisRefs(v),
    ]),
  );
}

// Figma's basis.focus.* (and other not-yet-audited primitives) alias
// `{utrecht.color.neutral.white}` / `{utrecht.color.neutral.black}`, but
// src/brand/utrecht/color.tokens.json defines "white"/"black" directly under
// utrecht.color, with no "neutral" grouping. Rewriting just this one path
// segment (rather than excluding whatever references it, as heading/paragraph
// do for basis.color as a whole) fixes it at the root: everything downstream
// resolves cleanly once this alias points at where the token actually lives.
function rewriteNeutralColorRefs(node) {
  if (typeof node !== 'object' || node === null) return node;
  return Object.fromEntries(
    Object.entries(node).map(([k, v]) => [
      k,
      k === '$value' && typeof v === 'string'
        ? v.replaceAll('{utrecht.color.neutral.', '{utrecht.color.')
        : rewriteNeutralColorRefs(v),
    ]),
  );
}

// Figma's textDecoration tokens capitalize "None" ("hover.text-decoration":
// "None"), which is valid CSS (keywords are case-insensitive) but
// inconsistent with the lowercase convention used everywhere else in this
// design system. Purely cosmetic - lowercased for consistency, not because
// "None" would otherwise fail to resolve or render.
function normalizeTextDecoration(node) {
  if (typeof node !== 'object' || node === null) return node;
  if (node.$type === 'textDecoration' && typeof node.$value === 'string') {
    return { ...node, $value: node.$value.toLowerCase() };
  }
  return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, normalizeTextDecoration(v)]));
}

// Figma exports the default sans-serif family as "Noto Sans, sans-serif",
// but the font actually shipped (and referenced elsewhere in this design
// system, e.g. utrecht.typography.sans-serif.font-family) is Noto Sans
// *Variable*. Fixed here rather than by hand-editing figma.tokens.json, so
// re-exporting from Figma doesn't require remembering to reapply this. The
// exact-match guard means a future export that already says "Variable" is
// left alone instead of getting double-appended.
function withNotoSansVariable(text) {
  if (text?.['font-family']?.default?.$value !== 'Noto Sans, sans-serif') return text;
  return {
    ...text,
    'font-family': {
      ...text['font-family'],
      default: { ...text['font-family'].default, $value: 'Noto Sans Variable, sans-serif' },
    },
  };
}

// `color` is dropped from every heading node below: it resolves down into
// common.basis.color, which several not-yet-adopted Figma sections rely on
// via broken `{utrecht.color.neutral.*}` aliases (that path is missing a
// "neutral" grouping in src/brand/utrecht/color.tokens.json). Headings don't
// wire up color yet either (see the empty "color": {} placeholders in the
// component tokens), so pruning it out here avoids dragging in that whole
// broken chain along with it.
function withoutColor({ color, ...rest } = {}) {
  return rest;
}

// Parse figma.tokens.json and extract only the sections needed for the current
// set of synced components. Sections outside this list reference tokens from
// other organisations (Amsterdam, Den Haag) or components not yet adopted,
// which would cause unresolvable reference errors.
function extractFigmaTokens(data) {
  const { common } = data;

  const nlHeadingLevels = common && data['components/heading/nl']?.nl?.heading;
  const strippedNlHeadingLevels = Object.fromEntries(
    Object.entries(nlHeadingLevels ?? {}).map(([level, node]) => [level, withoutColor(node)]),
  );

  const linkColor = common?.basis?.color;

  const extracted = {
    common: {
      basis: {
        heading: withoutColor(common?.basis?.heading),
        text: withNotoSansVariable(common?.basis?.text),
        // Link's color chain (action-2 -> action-1, disabled -> default) is
        // fine as-is - unlike heading/paragraph's color, it bottoms out in
        // plain literals rather than the broken utrecht.color.neutral.* path.
        color: {
          'action-1': {
            'color-default': linkColor?.['action-1']?.['color-default'],
            'color-active': linkColor?.['action-1']?.['color-active'],
            'color-hover': linkColor?.['action-1']?.['color-hover'],
          },
          'action-2': {
            'color-default': linkColor?.['action-2']?.['color-default'],
            'color-active': linkColor?.['action-2']?.['color-active'],
            'color-hover': linkColor?.['action-2']?.['color-hover'],
          },
          disabled: { 'color-subtle': linkColor?.disabled?.['color-subtle'] },
          default: { 'color-subtle': linkColor?.default?.['color-subtle'] },
        },
        // Only background-color and color are pulled in: the other
        // basis.focus.* fields (outline-*) aren't used by anything extracted
        // here and haven't been checked for further broken references.
        focus: { 'background-color': common?.basis?.focus?.['background-color'], color: common?.basis?.focus?.color },
        size: { icon: { md: common?.basis?.size?.icon?.md } },
        space: { text: { xs: common?.basis?.space?.text?.xs } },
      },
    },
    'components/heading/nl': { nl: { heading: strippedNlHeadingLevels } },
    // Paragraph's own "lead" doesn't carry a color alias in the nl export
    // (unlike its "color" and the utrecht variant's lead/small), so it needs
    // no stripping here.
    'components/paragraph/nl': {
      nl: { paragraph: withoutColor(data['components/paragraph/nl']?.nl?.paragraph) },
    },
    // Only "small" is pulled from the utrecht variant: the nl export has no
    // "small" section at all, and small.font-size is the one paragraph
    // property src/component/nl/paragraph.tokens.json sources cross-org.
    'components/paragraph/utrecht': {
      utrecht: {
        paragraph: { small: withoutColor(data['components/paragraph/utrecht']?.utrecht?.paragraph?.small) },
      },
    },
    // Link's utrecht export is fully self-contained (no nl indirection
    // needed) once the neutral-color-ref and textDecoration-casing
    // preprocessors run on it.
    'components/link/utrecht': { utrecht: { link: data['components/link/utrecht']?.utrecht?.link } },
  };

  for (let level = 1; level <= 6; level += 1) {
    const key = `components/heading-${level}`;
    extracted[key] = {
      utrecht: { [`heading-${level}`]: withoutColor(data[key]?.utrecht?.[`heading-${level}`]) },
    };
  }

  return extracted;
}

// Registers the Figma parser/preprocessor on the given StyleDictionary class
// and returns the config fragment (parsers/preprocessors/source additions)
// every build using Figma-sourced tokens needs to spread in.
export function registerFigmaTokens(StyleDictionary) {
  StyleDictionary.registerPreprocessor({
    name: 'figma/fix-basis-refs',
    preprocessor: (dictionary) => rewriteBasisRefs(dictionary),
  });

  StyleDictionary.registerPreprocessor({
    name: 'figma/fix-neutral-color-refs',
    preprocessor: (dictionary) => rewriteNeutralColorRefs(dictionary),
  });

  StyleDictionary.registerPreprocessor({
    name: 'figma/fix-text-decoration-casing',
    preprocessor: (dictionary) => normalizeTextDecoration(dictionary),
  });

  StyleDictionary.registerParser({
    name: 'figma/extract-tokens',
    pattern: /src[/\\]figma[/\\]figma\.tokens\.json$/,
    parser: ({ contents }) => extractFigmaTokens(JSON.parse(contents)),
  });

  return {
    parsers: ['figma/extract-tokens'],
    preprocessors: ['figma/fix-basis-refs', 'figma/fix-neutral-color-refs', 'figma/fix-text-decoration-casing'],
    figmaSource: ['./src/figma/**/*.tokens.json', './src/figma-bridge/**/*.tokens.json'],
  };
}
