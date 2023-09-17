/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/table/README.md?raw';
import tokensDefinition from '@utrecht/components/table/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtTable } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Table',
  id: 'web-component-table',
  component: UtrechtTable,
  argTypes: {
    children: {
      description: 'Content of the table',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-table',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <utrecht-table aria-labelledby="53818ecc-f9a6-4a9d-9e63-12a5ebb89e31">
      <utrecht-table-caption id="53818ecc-f9a6-4a9d-9e63-12a5ebb89e31">Table</utrecht-table-caption>
      <utrecht-table-header>
        <utrecht-table-row>
          <utrecht-table-header-cell scope="col">Column header cell 1</utrecht-table-header-cell>
          <utrecht-table-header-cell scope="col">Column header cell 2</utrecht-table-header-cell>
        </utrecht-table-row>
      </utrecht-table-header>
      <utrecht-table-footer>
        <utrecht-table-row>
          <utrecht-table-cell>Footer cell 1</utrecht-table-cell>
          <utrecht-table-cell>Footer cell 2</utrecht-table-cell>
        </utrecht-table-row>
      </utrecht-table-footer>
      <utrecht-table-body>
        <utrecht-table-row>
          <utrecht-table-header-cell scope="row">Row header cell</utrecht-table-header-cell>
          <utrecht-table-cell>Cell</utrecht-table-cell>
        </utrecht-table-row>
      </utrecht-table-body>
    </utrecht-table>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This Table web component is experimental, please share your experiences with our team.

The web component version of the Table component has not yet been tested for accessibility with various assistive tools. Using the CSS component of Table is recommended for now.

Accessibility has been tested in the following manner:

- Accessibility panel in Chrome Developer tools shows the same role structure as the native HTML table equivalent.

For accessibility of \`<table-header-cell>\` you MUST set the \`scope="col"\` or \`scope="row"\` attribute.
`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
