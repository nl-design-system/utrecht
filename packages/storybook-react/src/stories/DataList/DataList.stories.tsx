import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DataList, DataListItem, DataListKey, DataListValue } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Data List',
  id: 'react-data-list',
  component: DataList,
} as ComponentMeta<typeof DataList>;

const Template: ComponentStory<typeof DataList> = (args) => (
  <DataList {...args}>
    <DataListItem>
      <DataListKey>Gereserveerde zitplaats</DataListKey>
      <DataListValue>42</DataListValue>
    </DataListItem>
  </DataList>
);

export const Default = Template.bind({});

Default.args = {
  appearance: 'rows',
};
