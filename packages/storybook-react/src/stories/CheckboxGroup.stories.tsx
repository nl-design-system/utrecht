import { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '@utrecht/checkbox-group-react';
import { Heading } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const storyArgTypes = {
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  headingLevel: {
    description: 'Heading level for the label. Leave empty for a regular label.',
    control: { type: 'select' },
    options: ['', '1', '2', '3', '4', '5', '6'],
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  name: {
    description: 'Name attribute of the `<input>` elements',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  label: {
    description: 'Label of the group',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  errorMessage: {
    description: 'Description for an invalid group',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  id: {
    description: 'ID of the group',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'DOM',
    },
  },
  description: {
    description: 'Description of the group',
    type: { name: 'text', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
};

const meta = {
  title: 'React Component/Checkbox Group',
  id: 'react-form-field--checkbox-group',
  component: CheckboxGroup,
  argTypes: storyArgTypes,
  args: {},
  render: (args) => {
    const { description, disabled, errorMessage, headingLevel, id, invalid, label, name, options } = args;
    return (
      <CheckboxGroup
        id={id}
        invalid={invalid}
        disabled={disabled}
        name={name}
        options={options}
        label={headingLevel ? <Heading level={headingLevel}>{label}</Heading> : label}
        description={description}
        errorMessage={errorMessage}
      />
    );
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Checkbox Group',
  args: {
    id: '7adc261b-20ea-41b8-bc5d-8bdcad6feb91',
    label: 'Hoe wil je dat wij contact opnemen?',
    description: 'We nemen alleen contact op via de opties die bij je passen.',
    options: [
      {
        id: '4e054ee1-799e-4608-9055-19d3fc0b88e9',
        name: 'phone',
        defaultValue: 'true',
        label: 'Telefoon',
        defaultChecked: true,
      },
      {
        id: '238b2692-2460-4bad-93b5-b6def8c3b820',
        name: 'email',
        defaultValue: 'true',
        label: 'E-mail',
      },
      {
        id: '6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2',
        name: 'mail',
        defaultValue: 'true',
        label: 'Brief',
      },
    ],
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    id: '03ec9590-4ad9-48d2-b522-1968154a9306',
    label: 'Hoe wil je dat wij contact opnemen?',
    disabled: true,
    options: [
      {
        id: 'de743857-790b-4fe1-8b9b-54b07668640e',
        name: 'phone',
        defaultValue: 'true',
        label: 'Telefoon',
        defaultChecked: true,
      },
      {
        id: 'fdfa96ec-9e7c-4ee9-9b7f-3c1d61d60467',
        name: 'email',
        defaultValue: 'true',
        label: 'E-mail',
      },
      {
        id: '296d108f-4d75-4b89-a1bd-ed8560f2d03a',
        name: 'mail',
        defaultValue: 'true',
        label: 'Brief',
      },
    ],
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    id: '03ec9590-4ad9-48d2-b522-1968154a9306',
    label: 'Hoe wil je dat wij contact opnemen?',
    errorMessage: 'Kies tenminste 1 optie.',
    invalid: true,
    options: [
      {
        id: 'de743857-790b-4fe1-8b9b-54b07668640e',
        name: 'phone',
        defaultValue: 'true',
        label: 'Telefoon',
      },
      {
        id: 'fdfa96ec-9e7c-4ee9-9b7f-3c1d61d60467',
        name: 'email',
        defaultValue: 'true',
        label: 'E-mail',
      },
      {
        id: '296d108f-4d75-4b89-a1bd-ed8560f2d03a',
        name: 'mail',
        defaultValue: 'true',
        label: 'Brief',
      },
    ],
  },
};
