/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/table-css/README.md?raw';
import tokensDefinition from '@utrecht/table-css/src/tokens.json';
import { UtrechtTableContainer } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Table Container',
  id: 'web-component-table-container',
  component: UtrechtTableContainer,
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
} satisfies Meta<typeof UtrechtTableContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <utrecht-table-container>
      <table>
        <caption>Uitslag internetpeiling 8 juni tot en met 28 juni</caption>
        <thead>
          <tr>
            <th scope="col">Gebied</th>
            <th scope="col" className="numeric">
              Voor
            </th>
            <th scope="col" className="numeric">
              Tegen
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Locatie A</td>
            <td className="numeric">53</td>
            <td className="numeric">113</td>
          </tr>
          <tr>
            <td>Locatie B</td>
            <td className="numeric">58</td>
            <td className="numeric">42</td>
          </tr>
          <tr>
            <td>Locatie C</td>
            <td className="numeric">87</td>
            <td className="numeric">16</td>
          </tr>
        </tbody>
      </table>
    </utrecht-table-container>
  ),
  parameters: {
    docs: {
      description: {
        story: `This Table web component is experimental, please share your experiences with our team.`,
      },
    },
  },
};

export const OverflowInline: Story = {
  args: {},
  render: () => (
    <utrecht-table-container>
      <table>
        <caption>Uitslag internetpeiling 8 juni tot en met 28 juni</caption>
        <thead>
          <tr>
            <th scope="col">Gebied</th>
            <th scope="col" className="numeric">
              Voor
            </th>
            <th scope="col" className="numeric">
              Tegen
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ whiteSpace: 'pre' }}>
              Locatie A: Earum commodi eum laudantium doloribus magni quasi officia. Optio nesciunt magni totam suscipit
              natus nesciunt enim beatae. Incidunt quia voluptatem accusamus non.{' '}
            </td>
            <td className="numeric">53</td>
            <td className="numeric">113</td>
          </tr>
          <tr>
            <td>Locatie B</td>
            <td className="numeric">58</td>
            <td className="numeric">42</td>
          </tr>
          <tr>
            <td>Locatie C</td>
            <td className="numeric">87</td>
            <td className="numeric">16</td>
          </tr>
        </tbody>
      </table>
    </utrecht-table-container>
  ),
};

export const DesignTokens = designTokenStory(meta);
