import cloneDeepWith from 'lodash.clonedeepwith';
import isPlainObject from 'lodash.isplainobject';
import PropTypes from 'prop-types';
import React from 'react';
import { CopyButton } from './CopyButton';

export const ExampleTokensJSON = ({ definition }) => {
  const x = cloneDeepWith(definition, (item) => (isPlainObject(item.css) ? {} : undefined));

  const code = JSON.stringify(x, null, '  ');
  return (
    <section>
      <h2>
        Template <samp>tokens.json</samp> for your theme
      </h2>
      <p>
        We use the <a href="https://design-tokens.github.io/community-group/format/">Design Tokens Format</a> to store
        our design choices in JSON files. These <code>tokens.json</code> files are translated into other formats such as
        CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical
        stacks.
      </p>
      <p>
        When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead
        we use CSS variables that reference the design tokens. This way we don&#39;t need to change the CSS components
        when over time we make different design decisions, we just include the latest export of the design tokens.
      </p>
      <p>
        Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are
        stored in an optional file that you don&#39;t have to use, you can reuse our CSS components and combine them
        with design decisions for your own project and brand.
      </p>
      <p>
        Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with
        your own code:
        <code>{`{ "value": "#123456", "comment": "my design choice" }`}</code>.
      </p>
      <p>
        When you have a collection of design token JSON files, you can use{' '}
        <a href="https://amzn.github.io/style-dictionary/#/">Style Dictionary</a> to translate them to CSS or any other
        format your developers need.
      </p>
      <div>
        <CopyButton value={code} textContent="Copy JSON"></CopyButton>
      </div>
      <pre>{code}</pre>
    </section>
  );
};

ExampleTokensJSON.propTypes = {
  definition: PropTypes.object.isRequired,
};
