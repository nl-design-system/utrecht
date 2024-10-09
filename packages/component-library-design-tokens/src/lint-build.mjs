import { readFile } from 'node:fs/promises';
import cloneDeepWith from 'lodash.clonedeepwith';
import isPlainObject from 'lodash.isplainobject';
import { glob } from 'glob';
import { getComponentTokens } from './lib.mjs';
import { isDesignTokenDefinition } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens.js';

export const getCss = async () => {
  const cssFiles = await glob('../../components/*/dist/index.css');

  const allCss = await Promise.all(
    cssFiles.map(async (tokensPath) => {
      try {
        return readFile(tokensPath, 'utf-8');
      } catch (e) {
        return {};
      }
    }),
  );

  return allCss.join('\n\n');
};

export const traverseDeep = (root, parents, current, valueTest, callback) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};
export const addPath = (tree) => {
  const newTree = cloneDeepWith(tree, () => undefined);
  traverseDeep(newTree, [], newTree, isDesignTokenDefinition, (path, token) => {
    token.path = path;
  });
  return newTree;
};

export const treeToArray = (tree) => {
  const array = [];
  traverseDeep(tree, [], tree, isDesignTokenDefinition, (_, token) => {
    array.push(token);
  });
  return array;
};

const init = async () => {
  let tokens = await getComponentTokens();

  tokens = addPath(tokens);
  const tokenList = treeToArray(tokens);

  const tokenCssVariables = tokenList.map(({ path }) => path.join('-'));

  const tokenSet = new Set();
  tokenCssVariables.forEach((value) => tokenSet.add(value));

  const allCss = await getCss();

  const matches = Array.from(allCss.matchAll(/var\(\s*--([a-z0-9-]+)/gi));
  const cssSet = new Set();
  for (const match of matches) {
    cssSet.add(match[1]);
  }
  // console.log(tokenSet.intersection);

  const difference = tokenSet.difference(cssSet);
  const difference2 = cssSet.difference(tokenSet);

  const onlyCss = difference.intersection(cssSet);
  const onlyDesignTokenDefinition = difference.intersection(tokenSet);
  console.log(`The following ${difference2.size} design tokens only exist in CSS:`);
  console.log(Array.from(difference2).sort().join('\n'));
  console.log('\n\n\n');
  console.log(`The following ${onlyDesignTokenDefinition.size} design tokens only exist in JSON:`);
  console.log(Array.from(onlyDesignTokenDefinition).sort().join('\n'));
};

init();
