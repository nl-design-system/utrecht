import cloneDeepWith from 'lodash.clonedeepwith';
import isPlainObject from 'lodash.isplainobject';
import PropTypes from 'prop-types';
import React from 'react';
import { CopyButton } from './CopyButton';

export const ExampleTokensJSON = ({ definition }) => {
  const x = cloneDeepWith(definition, (item) => (isPlainObject(item.css) ? {} : undefined));

  const code = JSON.stringify(x, null, '  ');
  return (
    <>
      <h2>
        Template for <samp>tokens.json</samp>
      </h2>
      <div>
        <CopyButton value={code} textContent="Copy JSON"></CopyButton>
      </div>
      <pre>{code}</pre>
    </>
  );
};

ExampleTokensJSON.propTypes = {
  definition: PropTypes.object.isRequired,
};
