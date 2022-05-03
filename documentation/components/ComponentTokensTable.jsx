import PropTypes from 'prop-types';
import React from 'react';
import { DesignTokensTable } from './DesignTokensTable';

export const ComponentTokensTable = ({ component, tokens }) => {
  const componentPath = ['utrecht', component.replace(/^(example|denhaag|utrecht)-/, '')];

  const subset = tokens.filter((token) => componentPath.every((name, index) => token.path[index] === name));

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
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};
