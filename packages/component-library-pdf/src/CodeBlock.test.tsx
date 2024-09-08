/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { CodeBlock } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Code block', () => {
  it('renders a <Code> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-code-block',
      render: () => (
        <CodeBlock>{`<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <title>NL Design System</title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <h1>NL Design System</h1>
  </body>
</html>`}</CodeBlock>
      ),
    });

    expect(sha256).toBe('46986780cbaeba8d2b585dc2d244f68a273121c8e831f1dba10912c968cfc0a8');
  });
});
