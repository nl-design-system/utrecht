/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import readme from '@utrecht/data-list-css/README.md?raw';
import tokensDefinition from '@utrecht/data-list-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import {
  UtrechtDataList,
  UtrechtDataListActions,
  UtrechtDataListItem,
  UtrechtDataListKey,
  UtrechtDataListValue,
  UtrechtIbanData,
  UtrechtLinkButton,
  UtrechtMultilineData,
  UtrechtNumberData,
  UtrechtUrlData,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Data list',
  id: 'web-component-data-list',
  component: UtrechtDataList,
  argTypes: {
    children: {
      description: 'Content of the data-list',
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
    tokensPrefix: 'utrecht-data-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtDataList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UtrechtDataListItem>
        <UtrechtDataListKey>Adres</UtrechtDataListKey>
        <UtrechtDataListValue>
          Tweede Kamer der Staten-Generaal
          <br />
          Postbus 20018
          <br />
          2500 EA Den Haag
        </UtrechtDataListValue>
      </UtrechtDataListItem>,
    ],
  },
};

export const Actions: Story = {
  args: {
    children: [
      <UtrechtDataListItem>
        <UtrechtDataListKey>Adres</UtrechtDataListKey>
        <UtrechtDataListValue>
          Tweede Kamer der Staten-Generaal
          <br />
          Postbus 20018
          <br />
          2500 EA Den Haag
        </UtrechtDataListValue>
        <UtrechtDataListActions>
          <UtrechtLinkButton inline>Edit</UtrechtLinkButton>
        </UtrechtDataListActions>
      </UtrechtDataListItem>,
    ],
  },
  name: 'Actions',
};

export const MultilineData: Story = {
  args: {
    children: [
      <UtrechtDataListItem>
        <UtrechtDataListKey>Adres</UtrechtDataListKey>
        <UtrechtDataListValue>
          <UtrechtMultilineData>
            Tweede&#x00A0;Kamer&#x00A0;der&#x00A0;Staten-Generaal&#x000A;Postbus&#x00A0;20018&#x000A;2500&#x00A0;EA&#x00A0;Den&#x00A0;Haag
          </UtrechtMultilineData>
        </UtrechtDataListValue>
      </UtrechtDataListItem>,
    ],
  },
  name: 'Multiline value',
};

export const IbanData: Story = {
  args: {
    children: [
      <UtrechtDataListItem>
        <UtrechtDataListKey>Bankrekening</UtrechtDataListKey>
        <UtrechtDataListValue>
          <UtrechtIbanData value="GO00BACK123467899012" />
        </UtrechtDataListValue>
      </UtrechtDataListItem>,
    ],
  },
  name: 'IBAN value',
};

export const URLData: Story = {
  args: {
    children: [
      <UtrechtDataListItem>
        <UtrechtDataListKey>Website</UtrechtDataListKey>
        <UtrechtDataListValue>
          <UtrechtUrlData>https://example.fi/</UtrechtUrlData>
        </UtrechtDataListValue>
      </UtrechtDataListItem>,
      <UtrechtDataListItem>
        <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
        <UtrechtDataListValue>
          <UtrechtUrlData>info@example.fi</UtrechtUrlData>
        </UtrechtDataListValue>
      </UtrechtDataListItem>,
    ],
  },
  name: 'URL data',
};

export const NumberData: Story = {
  args: {
    children: [
      <UtrechtDataListItem>
        <UtrechtDataListKey>Aantal</UtrechtDataListKey>
        <UtrechtDataListValue>
          <UtrechtNumberData>1,250</UtrechtNumberData>
        </UtrechtDataListValue>
      </UtrechtDataListItem>,
    ],
  },
  name: 'Number value',
};

export const DesignTokens = designTokenStory(meta);
