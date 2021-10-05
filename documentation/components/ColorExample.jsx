import PropTypes from "prop-types";
import React from "react";

export const ColorExample = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      outline: "1px solid silver",
      display: "inline-block",
      height: "2em",
      width: "2em",
    }}
  ></div>
);

ColorExample.propTypes = {
  color: PropTypes.string.isRequired,
};
