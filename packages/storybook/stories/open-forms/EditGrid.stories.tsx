import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const innerComponents = [
  {
    key: 'name',
    type: 'textfield',
    input: true,
    label: 'Item name',
  },
  {
    key: 'prijs',
    type: 'currency',
    input: true,
    label: 'Price',
    currency: 'EUR',
    delimiter: true,
    allowNegative: false,
  },
  {
    key: 'content',
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
    type: 'content',
    input: false,
    label: '',
    tableView: false,
  },
];

const meta: Meta = {
  id: 'open-forms-edit-grid',
  title: 'Open Formulieren/EditGrid',
  component: SingleFormioComponent,
  args: {
    type: 'editgrid',
    groupLabel: '',
    maxLength: null,
    extraComponentProperties: {
      hideLabel: false,
      components: innerComponents,
      inlineEdit: false,
      description: 'Adds a new group to the grid',
      disableAddingRemovingRows: false,
      addAnother: 'Add new',
      saveRow: 'Confirm',
      removeRow: 'Remove',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
