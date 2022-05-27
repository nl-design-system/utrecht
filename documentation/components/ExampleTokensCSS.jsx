import isPlainObject from 'lodash.isplainobject';
import PropTypes from 'prop-types';
import React from 'react';
import { CopyButton } from './CopyButton';

const traverseDeep = (root, parents, current, valueTest, callback) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};
const isDesignToken = (value) =>
  Object.prototype.hasOwnProperty.call(value, 'value') || Object.prototype.hasOwnProperty.call(value, '$value');

// Tests for both the `value` property we currently use,
// and the `$value` from the Design Tokens Format specification.
const isDesignTokenDefinition = (value) =>
  isDesignToken(value) ||
  Object.prototype.hasOwnProperty.call(value, 'css') ||
  Object.prototype.hasOwnProperty.call(value, '$extensions');

const findDesignTokens = (tokens, callback) => traverseDeep(tokens, [], tokens, isDesignTokenDefinition, callback);

const tokensToCSS = (tokens) => {
  const lines = [];
  findDesignTokens(tokens, (path, value) =>
    lines.push(`  --${path.join('-')}: ${value && value.css && value.css.syntax ? value.css.syntax : '<value>'};`),
  );
  return `.your-theme {\n  /* Comment out the custom properties you don't need */\n${lines.join('\n')}\n}`;
};

export const ExampleTokensCSS = ({ definition }) => {
  const code = tokensToCSS(definition);

  return (
    <section>
      <h2>
        Template for <samp>your-theme.css</samp>
      </h2>
      <p>
        If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started
        quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point
        to see what parts of the component you can customize with design tokens.
      </p>
      <p>
        Combine the design tokens CSS with our{' '}
        <a href="https://npmjs.com/package/@utrecht/component-library-css">CSS component library pacakge on npm</a>, and
        you should be able to quickly and easily create a web page with our components and your own design.
      </p>
      <div>
        <CopyButton value={code} textContent="Copy CSS"></CopyButton>
      </div>
      <pre>{code}</pre>
    </section>
  );
};

ExampleTokensCSS.propTypes = {
  definition: PropTypes.object.isRequired,
};
