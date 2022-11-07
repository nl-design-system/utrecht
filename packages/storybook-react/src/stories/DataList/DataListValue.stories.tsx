import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DataList, DataListItem, DataListValue, URLValue } from '../../../../component-library-react/src/index.ts';

const argTypes = {
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
};

export default {
  title: 'React Component/Data List/Value',
  id: 'react-data-list-value',
  component: DataListValue,
  decorators: [
    (Story) => (
      <DataList appearance="rows">
        <DataListItem>{Story()}</DataListItem>
      </DataList>
    ),
  ],
  argTypes,
} as ComponentMeta<typeof DataListValue>;

const Template: ComponentStory<typeof DataListValue> = (args) => <DataListValue {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Amsterdam',
};

export const NoTranslate = Template.bind({});

NoTranslate.args = {
  // Perhaps "Tit the Fox" when translated from Dutch to English
  children: 'Mees de Vos',
  notranslate: true,
};

export const ValueWithURL = Template.bind({});

ValueWithURL.args = {
  // Perhaps "voorbeeld.fi" when translated from English to Dutch
  // "fi" is used so we can test rendering of ligatures is avoided
  children: <URLValue>https://example.fi/</URLValue>,
  notranslate: true,
};

export const ValueWithEmail = Template.bind({});

ValueWithEmail.args = {
  // Perhaps "post@voorbeeld.fi" when translated from English to Dutch
  // "fi" is used so we can test rendering of ligatures is avoided
  children: <URLValue>mail@example.fi</URLValue>,
  notranslate: true,
};

export const MultilineValue = Template.bind({});

MultilineValue.args = {
  children: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
  multiline: true,
};
