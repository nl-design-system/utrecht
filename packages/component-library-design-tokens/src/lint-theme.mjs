import { readFile } from 'node:fs/promises';
import merge from 'lodash.merge';
import cloneDeepWith from 'lodash.clonedeepwith';
import isPlainObject from 'lodash.isplainobject';
import { glob } from 'glob';
import { getComponentTokens } from './lib.mjs';
import { isDesignToken, isDesignTokenDefinition } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens.js';

export const traverseDeep = (root, parents, current, valueTest, callback) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};
export const addPath = (tree, valueTest = isDesignToken) => {
  const newTree = cloneDeepWith(tree, () => undefined);
  traverseDeep(newTree, [], newTree, valueTest, (path, token) => {
    token.path = path;
  });
  return newTree;
};

export const treeToArray = (tree, valueTest = isDesignToken) => {
  const array = [];
  traverseDeep(tree, [], tree, valueTest, (_, token) => {
    array.push(token);
  });
  return array;
};

const excludeParents = (obj) =>
  merge(
    {},
    ...Object.entries(obj)
      .filter(([key]) => !key.startsWith('$'))
      .map(([, value]) => value),
  );

const createTokenMap = (tokens) => new Map(tokens.map((token) => [token.path.join('.'), token]));

const getDesignTokenType = (token) => (typeof token['$type'] === 'string' ? token['$type'] : token.type);

const readTheme = async ({ path, internalPrefixes, externalPrefixes }) => {
  const themePath =
    '/Users/bobby/Sites/github.com/nl-design-system/themes/packages/voorbeeld-design-tokens/figma/voorbeeld.tokens.json';
  let theme = JSON.parse(await readFile(themePath, 'utf-8'));
  //   console.log(1, Object.values(theme));

  theme = excludeParents(theme);
  theme = addPath(theme);
  let tokenList = treeToArray(theme);

  tokenList = tokenList.filter(({ path }) => externalPrefixes.includes(path[0]));

  const themeExternalDesignTokens = tokenList.map(({ path }) => path.join('-'));
  const themeSet = new Set();
  themeExternalDesignTokens.forEach((value) => themeSet.add(value));

  return {
    themeTokens: tokenList,
    themeSet,
    themeMap: createTokenMap(tokenList),
  };
};

const readComponentTokens = async () => {
  let tokens = await getComponentTokens();

  tokens = addPath(tokens, isDesignTokenDefinition);
  const tokenList = treeToArray(tokens, isDesignTokenDefinition);
  console.log('xxx', tokenList);
  const tokenSet = new Set();
  tokenList.forEach((value) => tokenSet.add(value));

  return {
    componentTokensSet: tokenSet,
    componentTokensList: tokenList,
    componentTokenMap: createTokenMap(tokenList),
  };
};

const init = async () => {
  const { themeSet, themeTokens } = await readTheme({
    path: '/Users/bobby/Sites/github.com/nl-design-system/themes/packages/voorbeeld-design-tokens/figma/voorbeeld.tokens.json',
    internalPrefixes: ['todo', 'voorbeeld'],
    externalPrefixes: ['utrecht'],
  });

  const { componentTokensSet, componentTokenMap } = await readComponentTokens();
  console.log(`Theme tokens: ${themeSet.size}`);
  console.log(`Component tokens: ${componentTokensSet.size}`);

  const knownThemeTokens = themeTokens.filter((token) => {
    return componentTokenMap.has(token.path.join('.'));
  });
  const unknownThemeTokens = themeTokens.filter((token) => {
    return !componentTokenMap.has(token.path.join('.'));
  });
  console.log(`Theme tokens that are unknown: ${unknownThemeTokens.length}`);
  console.log(`Theme tokens that can be validated: ${knownThemeTokens.length}`);

  console.log(`Theme tokens that are unknown:\n${unknownThemeTokens.map((token) => token.path.join('.')).join('\n')}`);

  knownThemeTokens.forEach((themeToken) => {
    const tokenName = themeToken.path.join('.');
    const componentToken = componentTokenMap.get(tokenName);

    const themeTokenType = getDesignTokenType(themeToken);
    const componentTokenType = getDesignTokenType(componentToken);
    if (typeof componentTokenType === 'string' && themeTokenType !== componentTokenType) {
      console.log(`Token: ${tokenName}\nExpected type: ${componentTokenType}\nActual type: ${themeTokenType}\n`);
      console.log(themeToken);
    }
  });
  return;
  const difference = componentTokensSet.difference(themeSet);
  const difference2 = themeSet.difference(componentTokensSet);

  const onlyCss = difference.intersection(cssSet);
  const onlyDesignTokenDefinition = difference.intersection(tokenSet);
  console.log(`The following ${difference2.size} design tokens only exist in CSS:`);
  console.log(Array.from(difference2).sort().join('\n'));
  console.log('\n\n\n');
  console.log(`The following ${onlyDesignTokenDefinition.size} design tokens only exist in JSON:`);
  console.log(Array.from(onlyDesignTokenDefinition).sort().join('\n'));
};

init();
