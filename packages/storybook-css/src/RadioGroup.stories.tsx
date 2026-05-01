/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@utrecht/component-library-react';
import { RadioGroup, type RadioGroupProps } from '@utrecht/radio-group-react';
import React from 'react';

interface RadioGroupStoryProps extends RadioGroupProps {
  headingLevel?: number;
}

const RadioGroupStory = (args: RadioGroupStoryProps) => {
  const { description, disabled, errorMessage, headingLevel, id, invalid, label, name, options } = args;
  return (
    <RadioGroup
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
};

const meta = {
  title: 'CSS Component/Radio Group',
  id: 'css-radio-group',
  component: RadioGroupStory,
  args: {},
  argTypes: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fradio-group',
    nldesignsystem: 'https://nldesignsystem.nl/radio-group',
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Radio group with only a label',
  args: {
    name: '890a84a6-5088-47df-8f8e-4566d3bd42ad',
    label: 'Choose your option',
    id: '115a159b-7527-452d-bcfc-f4770b30d00e',
    options: [
      {
        id: '2185ffaa-0086-43f7-82ef-162d048df198',
        value: '1',
        label: 'Option 1',
      },
      {
        id: 'c664343d-22d9-417d-a3ca-356e2d0774d5',
        value: '2',
        label: 'Option 2',
      },
      {
        id: '36242fff-3a06-48eb-8451-f32ffcd00f7a',
        value: '3',
        label: 'Option 3',
      },
    ],
  },
};

export const RadioGroupHeading = {
  title: 'Radio group with heading as label',
  args: {
    ...Default.args,
    name: '2ce3b9f7-5ade-4048-8719-e4b57fc0fd4f',
    label: 'Choose your option',
    id: '4adcc33d-1ac3-4e2e-9630-04c09213dbb9',
    headingLevel: 1,
    options: [
      {
        id: '3bce233e-57aa-49b3-bba7-87fa36f3774c',
        value: '1',
        label: 'Option 1',
      },
      {
        id: 'de55cc3e-ca5b-4487-8295-ee3ca804ed5e',
        value: '2',
        label: 'Option 2',
      },
      {
        id: 'd3bcfabb-ed87-4185-87b9-65dc63ac5430',
        value: '3',
        label: 'Option 3',
      },
    ],
  },
};
export const Description = {
  name: 'Radio group with an additional description',
  args: {
    ...Default.args,
    name: '398a943f-a170-4be4-af6b-c74ed3452bce',
    id: '2c0d76a7-0232-45ba-bbf3-6897288253dd',
    label: 'Label',
    groupDescription: 'Description',
    options: [
      {
        id: '555a9615-6ad3-453f-a504-14bf71fc3cf9',
        label: 'Option 1',
        value: '1',
        description: 'The first option is the most popular, but not the best option.',
      },
      {
        id: '37aa1094-9b94-4d56-99af-615adc6bd861',
        checked: true,
        label: 'Option 2',
        value: '2',
        description: 'The best option!',
      },
      {
        id: '8f4b330a-a554-4545-a616-17578766a534',
        label: 'Option 3',
        value: '3',
        description: 'The last option.',
      },
    ],
  },
};

export const Invalid = {
  name: 'Invalid with a description for an invalid value',
  args: {
    ...Default.args,
    name: 'ddf3c086-5337-4032-8b23-367d9423c7bb',
    label: 'Choose your option',
    errorMessage: 'Bad option!',
    id: '9257c2a4-4445-47f5-9847-4c5eb9f3ab9e',
    invalid: true,
    options: [
      {
        id: '2140c911-983d-47bc-ade4-199cf2d09ea8',
        value: '1',
        label: 'Option 1',
      },
      {
        id: 'd713af44-62e4-41be-8d05-8d7917e9bc66',
        value: '2',
        label: 'Option 2',
      },
      {
        id: '17988dcf-d790-4204-a0a4-87f0211d2ac2',
        value: '3',
        label: 'Option 3',
      },
    ],
  },
};
