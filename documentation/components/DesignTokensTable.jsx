import PropTypes from "prop-types";
import React from "react";
export const path2css = (path) => `var(--${path.join("-")})`;

export const DesignTokensTable = ({ tokens }) => (
  <table>
    <thead>
      <tr>
        <th>CSS Variable</th>
        <th>CSS Value</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map(({ name, path, value }) => (
        <tr key={name}>
          <td>
            <code>{path2css(path)}</code>
          </td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

DesignTokensTable.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};
