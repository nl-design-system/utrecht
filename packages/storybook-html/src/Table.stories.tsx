/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/table-css/README.md?raw';
import tokensDefinition from '@utrecht/table-css/src/tokens.json';
import React, { PropsWithChildren, TableHTMLAttributes } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const Table = ({ ...restProps }: PropsWithChildren<TableHTMLAttributes<HTMLTableElement>>) => <table {...restProps} />;

const meta = {
  title: 'HTML Component/Table',
  id: 'html-table',
  component: Table,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the table',
    },
    hidden,
    summary: {
      description: 'Summary of the table contents',
      control: 'text',
    },
  },
  args: {
    children: [],
    hidden: false,
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
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    summary: 'Overzicht van de stemmen voor en tegen het betaald parkeren.',
    children: [
      <caption>Uitslag internetpeiling 8 juni tot en met 28 juni</caption>,
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
      </thead>,
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
      </tbody>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<table>` element.',
      },
    },
  },
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
