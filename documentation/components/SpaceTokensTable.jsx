import { SpacingPresenter } from "storybook-design-token/dist/components/presenter/SpacingPresenter";
import PropTypes from "prop-types";
import React from "react";
export const path2css = (path) => `var(--${path.join("-")})`;

export const SpaceTokensTable = ({ tokens }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Variable</th>
        <th>Value</th>
        <th>Preview</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map(({ comment, name, path, value }) => (
        <tr key={name}>
          <td>{comment}</td>
          <td>
            <code>{path2css(path)}</code>
          </td>
          <td>{value}</td>
          <td>
            <SpacingPresenter token={{ value }} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

SpaceTokensTable.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};
