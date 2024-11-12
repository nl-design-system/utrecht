import PropTypes from 'prop-types';
import React from 'react';
export const path2css = (path) => `var(--${path.join('-')})`;
import { ColorExample } from './ColorExample';

const visualizeToken = (token) => {
  if (
    token['$extensions'] &&
    token['$extensions']['nl.nldesignsystem.css.property'] &&
    token['$extensions']['nl.nldesignsystem.css.property'].syntax === '<color>'
  ) {
    return <ColorExample color={token.value}></ColorExample>;
  } else {
    return '';
  }
};

export const DesignTokensTable = ({ tokens }) => (
  <section>
    <h2>Theme for Gemeente Utrecht</h2>
    <table>
      <thead>
        <tr>
          <th>Design token name</th>
          <th>Design token value</th>
          <th></th>
          <th>Support</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => {
          const { name, path, value } = token;
          return (
            <tr key={name}>
              <td>
                <code>{path.join('.')}</code>
              </td>
              <td>{value}</td>
              <td>{visualizeToken(token)}</td>
              <td>
                {token['$extensions'] && token['$extensions']['nl.nldesignsystem.figma.supports-token'] === false ? (
                  <span className="utrecht-data-badge">CSS</span>
                ) : typeof token['type'] === 'string' ? (
                  <div className="utrecht-badge-list">
                    <span className="utrecht-data-badge">CSS</span>
                    <span className="utrecht-data-badge">Figma</span>
                  </div>
                ) : (
                  ''
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>
);

DesignTokensTable.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};
