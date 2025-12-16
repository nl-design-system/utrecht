import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const spacingMatrix = JSON.parse(fs.readFileSync(path.join(__dirname, 'spacing-matrix.json'), 'utf-8'));

const spaceMap = {
  NVT: undefined,
  Onbekenden: 'stranger',
  Kennissen: 'acquaintance',
  Vrienden: 'friend',
  Besties: 'best-friend',
  Kind: 'confidant',
};

const getSpacings = (spacingMatrix) => {
  return spacingMatrix
    .map((spacing) => {
      const entries = Object.entries(spacing);
      const [, component] = entries.shift();
      return entries
        .map(([sibling, space]) => {
          const spacing = spaceMap[space];
          return spacing && { component, sibling, spacing };
        })
        .filter(Boolean);
    })
    .filter((arr) => arr.length);
};

const getSpacingMixins = (components) =>
  components.map((mixinGroup) => {
    const componentName = mixinGroup[0].component;

    const mixins = mixinGroup.map(
      ({ component, sibling, spacing }) =>
        `.${component}:has(+ .${sibling}) {
  --${component}-margin-block-end: var(--utrecht-rich-text-${spacing}-margin-block-end);
}`,
    );
    return `@mixin ${componentName} {
  .${componentName}:first-child {
    --${componentName}-margin-block-start: 0;
  }
 ${mixins.join(';\n')}
}`;
  });

const getRichTextStyles = (components) => `
/**
 * @license EUPL-1.2
 * Copyright (c) 2024-2025 Gemeente Utrecht
 * Copyright (c) 2024-2025 Frameless B.V.
 */

@use "./mixin" as *;

.utrecht-rich-text {
  --utrecht-space-around: 1;
  ${components.map((mixinGroup) => `@include ${mixinGroup[0].component}`).join(';\n')}
}`;

const spacings = getSpacings(spacingMatrix);

fs.writeFileSync(path.resolve('./src/_mixin.scss'), getSpacingMixins(spacings).join('\n'));

fs.writeFileSync(path.resolve('./src/index.scss'), getRichTextStyles(spacings));
