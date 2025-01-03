/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

module.exports = {
  'json/list': function ({ dictionary }) {
    return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
  },
};
