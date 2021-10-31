import PropTypes from 'prop-types';
import React from 'react';
export const path2css = (path) => `var(--${path.join('-')})`;
import { ColorExample } from './ColorExample';

const visualizeToken = (token) => {
  if (token.css && token.css.syntax === '<color>') {
    return <ColorExample color={token.value}></ColorExample>;
  } else {
    return '';
  }
};

export const DesignTokensTable = ({ tokens }) => (
  <table>
    <thead>
      <tr>
        <th>CSS Variable</th>
        <th>CSS Value</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map((token) => {
        const { name, path, value } = token;
        return (
          <tr key={name}>
            <td>
              <code>{path2css(path)}</code>
            </td>
            <td>{value}</td>
            <td>{visualizeToken(token)}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

DesignTokensTable.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};
