/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import PropTypes from 'prop-types';
import React from 'react';

export const CopyButton = ({ value, textContent = 'Copy' }) => {
  return (
    <button
      className="utrecht-button utrecht-button--secondary-action utrecht-button--html-button"
      style={{ cursor: 'copy' }}
      onClick={() => navigator.clipboard.writeText(value)}
      type="button"
    >
      {textContent}
    </button>
  );
};

CopyButton.propTypes = {
  value: PropTypes.string.isRequired,
  textContent: PropTypes.string,
};
