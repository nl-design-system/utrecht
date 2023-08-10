/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  DataList,
  DataListActions,
  DataListItem,
  DataListKey,
  DataListValue,
} from '@utrecht/component-library-react/src/css-module';
import readme from '@utrecht/components/data-list/README.md?raw';
import tokensDefinition from '@utrecht/components/data-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/DataList',
  id: 'css-data-list',
  component: DataList,
  argTypes: {
    children: {
      description: 'Data List content',
      control: 'text',
    },
    appearance: {
      description: "Set this to 'rows' in order to display the data list with rows",
      control: 'text',
    },
  },
  args: {
    appearance: 'rows',
    children: (
      <DataListItem>
        <DataListKey>Gereserveerde zitplaats</DataListKey>
        <DataListValue>42</DataListValue>
      </DataListItem>
    ),
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-data-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof DataList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  id: 'css-data-list--actions',
  title: 'CSS Component/Data list/With actions',
  args: {
    ...Default.args,
    children: (
      <DataList>
        <DataListKey>Voornaam</DataListKey>
        <DataListValue>Mees</DataListValue>
        <DataListActions>
          <a className="utrecht-link-button utrecht-link-button--inline" href="#">
            Edit
          </a>
        </DataListActions>
      </DataList>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
