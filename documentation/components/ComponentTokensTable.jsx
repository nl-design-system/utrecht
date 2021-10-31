import PropTypes from 'prop-types';
import React from 'react';
import { DesignTokensTable } from './DesignTokensTable';

export const ComponentTokensTable = ({ component, modifiers, tokens }) => {
  const componentPath = ['utrecht', component.replace(/^utrecht-/, '')];

  const subset = tokens.filter((token) => componentPath.every((name, index) => token.path[index] === name));

  // const nonModifiers = subset.filter((token) => !modifiers.includes(token.path[componentPath.length + 1]));
  // const modifiers = subset.filter(() => true);
  if (subset.length === 0) {
    return (
      <p>
        This component has <strong>no documented design tokens</strong>.
      </p>
    );
  }

  return <DesignTokensTable tokens={subset}></DesignTokensTable>;
};

ComponentTokensTable.propTypes = {
  component: PropTypes.string.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};
