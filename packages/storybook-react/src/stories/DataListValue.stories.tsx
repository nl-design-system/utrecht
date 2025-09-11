import { Meta, StoryObj } from '@storybook/react-vite';
import { DataList, DataListItem, DataListValue, URLData } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const meta = {
  title: 'React Component/Data List/Value',
  id: 'react-data-list--value',
  component: DataListValue,
  decorators: [
    (Story) => (
      <DataList appearance="rows">
        <DataListItem>{Story()}</DataListItem>
      </DataList>
    ),
  ],
  argTypes: {
    multiline: {
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    notranslate: {
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    value: {
      type: 'string',
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
  args: {
    children: 'Amsterdam',
  },
} satisfies Meta<typeof DataListValue>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const NoTranslate: Story = {
  args: {
    notranslate: true,
    children: 'Mees de Vos',
  },
};

NoTranslate.args = {
  // Perhaps "Tit the Fox" when translated from Dutch to English
  children: 'Mees de Vos',
  notranslate: true,
};

export const ValueWithURL: Story = {
  args: {
    // Perhaps "voorbeeld.fi" when translated from English to Dutch
    // "fi" is used so we can test rendering of ligatures is avoided
    children: <URLData>https://example.fi/</URLData>,
    notranslate: true,
  },
};

export const ValueWithEmail: Story = {
  args: {
    children: <URLData>mail@example.fi</URLData>,
    notranslate: true,
  },
};

export const MultilineValue: Story = {
  args: {
    children: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
    multiline: true,
  },
};
