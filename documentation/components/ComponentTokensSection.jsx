import PropTypes from 'prop-types';
import React from 'react';
import { ColorContrast } from './ColorContrast';
import { ComponentTokensTable } from './ComponentTokensTable';
import { ExampleTokensCSS } from './ExampleTokensCSS';
import { ExampleTokensJSON } from './ExampleTokensJSON';
import { PrimaryColorsTable } from './PrimaryColorsTable';

export const ComponentTokensSection = ({ component, tokens, definition }) => {
  console.log(tokens);
  return (
    <>
      <PrimaryColorsTable
        colors={tokens.filter(
          (token) =>
            token['$extensions'] &&
            (token['$extensions']['nl.nldesignsystem.essential-color'] === true ||
              token['$extensions']['nl.nldesignsystem.complementary-color'] === true),
        )}
      />
      <ColorContrast backgroundColor="black" color="#eb0000" />
      {definition ? <ExampleTokensJSON definition={definition}></ExampleTokensJSON> : ''}
      {definition ? <ExampleTokensCSS definition={definition}></ExampleTokensCSS> : ''}
      <ComponentTokensTable component={component} tokens={tokens}></ComponentTokensTable>
    </>
  );
};

ComponentTokensSection.propTypes = {
  component: PropTypes.string.isRequired,
  definition: PropTypes.object,
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
};
