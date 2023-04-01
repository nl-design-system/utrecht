import PropTypes from 'prop-types';
import React from 'react';
import '../../components/color-sample/css/index.scss';

export const ColorExample = ({ color }) => (
  <div
    className="utrecht-color-sample"
    style={{
      color,
      outline: '1px solid silver',
    }}
  ></div>
);

ColorExample.propTypes = {
  color: PropTypes.string.isRequired,
};
