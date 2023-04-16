import PropTypes from 'prop-types';
import React from 'react';
import '../../components/color-sample/css/index.scss';

export const ColorExample = ({ color, children, style, ...restProps }) => (
  <data
    className="utrecht-color-sample"
    style={{
      color,
      ...style,
    }}
    value={color}
    {...restProps}
  >
    {children}
  </data>
);

ColorExample.propTypes = {
  color: PropTypes.string.isRequired,
};
