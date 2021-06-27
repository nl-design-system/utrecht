import PropTypes from "prop-types";
import React from "react";
export const path2css = (path) => `var(--${path.join("-")})`;

const HorizontalSpaceExample = ({ size }) => (
  <div
    style={{
      backgroundColor: "black",
      height: "1em",
      width: size,
    }}
  ></div>
);

HorizontalSpaceExample.propTypes = {
  size: PropTypes.string,
};

const VerticalSpaceExample = ({ size }) => (
  <div
    style={{
      backgroundColor: "black",
      width: "1em",
      height: size,
    }}
  ></div>
);

VerticalSpaceExample.propTypes = {
  size: PropTypes.string,
};

const BlockSpaceExample = ({ size }) => (
  <div
    style={{
      backgroundColor: "black",
      inlineSize: "1em",
      blockSize: size,
    }}
  ></div>
);

BlockSpaceExample.propTypes = {
  size: PropTypes.string,
};

const InlineSpaceExample = ({ size }) => (
  <div
    style={{
      backgroundColor: "black",
      blockSize: "1em",
      inlineSize: size,
    }}
  ></div>
);

InlineSpaceExample.propTypes = {
  size: PropTypes.string,
};

export const SpaceTokensTable = ({ tokens, orientation }) => (
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
            {orientation === "horizontal" ? (
              <HorizontalSpaceExample size={value} />
            ) : orientation === "vertical" ? (
              <VerticalSpaceExample size={value} />
            ) : orientation === "block" ? (
              <BlockSpaceExample size={value} />
            ) : orientation === "inline" ? (
              <InlineSpaceExample size={value} />
            ) : (
              <HorizontalSpaceExample size={value} />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

SpaceTokensTable.propTypes = {
  orientation: PropTypes.string,
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};
