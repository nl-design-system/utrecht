import { mkdir, writeFile } from 'node:fs/promises';
import { getComponentTokens } from './lib.mjs';
import cloneDeepWith from 'lodash.clonedeepwith';
import isPlainObject from 'lodash.isplainobject';
import { isDesignTokenDefinition } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens.js';

const traverseDeep = (root, parents, current, valueTest, callback) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};

const treeToArray = (tree) => {
  const array = [];
  traverseDeep(tree, [], tree, isDesignTokenDefinition, (_, token) => {
    array.push(token);
  });
  return array;
};

export const addPath = (tree) => {
  const newTree = cloneDeepWith(tree, () => undefined);
  traverseDeep(newTree, [], newTree, isDesignTokenDefinition, (path, token) => {
    token.path = path;
  });
  return newTree;
};

const build = async () => {
  const tokens = treeToArray(addPath(await getComponentTokens()));
  console.log(`${tokens.length} tokens found`);
  const propertyTokens = tokens.filter(
    (token) => !!token['$extensions'] && !!token['$extensions']['nl.nldesignsystem.css-property-syntax'],
  );

  console.log(`${propertyTokens.length} tokens found with CSS property metadata`);

  const formatSyntax = (arg) => (Array.isArray(arg) ? arg.join(' | ') : arg);

  const css = propertyTokens
    .filter((token) => token['$extensions']['nl.nldesignsystem.css.property-syntax'] !== '*')
    .map((token) => {
      const { path } = token;
      const syntax = token['$extensions']['nl.nldesignsystem.css.property-syntax'];

      const name = path.join('-');
      let str = `@property --${name} { `;

      str += `syntax: '${formatSyntax(syntax)}'; `;

      str += `}`;

      return str;
    })
    .join('\n');

  await mkdir('./dist/', { recursive: true });
  await writeFile('./dist/property.css', css);
};

build();
