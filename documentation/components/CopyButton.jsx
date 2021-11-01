/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import React from 'react';

export const CopyButton = ({ value, textContent = 'Copy' }) => {
  return (
    <button style={{ cursor: 'copy' }} onClick={() => navigator.clipboard.writeText(value)} type="button">
      {textContent}
    </button>
  );
};

CopyButton.propTypes = {
  value: PropTypes.string.isRequired,
  textContent: PropTypes.string,
};
